import './chunks/astro_fURf_zJH.mjs';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///Users/thor3/Documents/ink-cdn/dist/admin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/admin","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro-decap-cms-oauth@0.2.9_astro@4.3.5/node_modules/astro-decap-cms-oauth/src/admin.astro","pathname":"/admin","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/ink-cdn/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.mdx","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/ink-cdn/dist/blog/item1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/item1","isIndex":false,"type":"page","pattern":"^\\/blog\\/item1\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"item1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/item1.md","pathname":"/blog/item1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/ink-cdn/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/ink-cdn/dist/media/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/media","isIndex":false,"type":"page","pattern":"^\\/media\\/?$","segments":[[{"content":"media","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/media.astro","pathname":"/media","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/ink-cdn/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/thor3/Documents/ink-cdn/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/oauth","pattern":"^\\/oauth$","segments":[[{"content":"oauth","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro-decap-cms-oauth@0.2.9_astro@4.3.5/node_modules/astro-decap-cms-oauth/src/oauth/index.ts","pathname":"/oauth","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/oauth/callback","pattern":"^\\/oauth\\/callback$","segments":[[{"content":"oauth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro-decap-cms-oauth@0.2.9_astro@4.3.5/node_modules/astro-decap-cms-oauth/src/oauth/callback.ts","pathname":"/oauth/callback","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://ink-cdn.paulapplegate.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/thor3/Documents/ink-cdn/node_modules/.pnpm/astro-decap-cms-oauth@0.2.9_astro@4.3.5/node_modules/astro-decap-cms-oauth/src/admin.astro",{"propagation":"none","containsHead":true}],["/Users/thor3/Documents/ink-cdn/src/components/Nav.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/components/MainLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/layouts/default.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/pages/about.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@mdx",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/pages/drafts/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/drafts/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/pages/media.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/media@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/pages/tags/[tag]/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/pages/tags/[tag]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/layouts/post.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/pages/blog/item1.md",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/item1@_@md",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/node_modules/.pnpm/@astrojs+markdoc@0.8.3_astro@4.3.5/node_modules/@astrojs/markdoc/components/Renderer.astro",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/node_modules/.pnpm/@astrojs+markdoc@0.8.3_astro@4.3.5/node_modules/@astrojs/markdoc/components/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/content/blog/markdoc-integration.mdoc",{"propagation":"in-tree","containsHead":false}],["/Users/thor3/Documents/ink-cdn/src/content/blog/markdoc-integration.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/.pnpm/astro-decap-cms-oauth@0.2.9_astro@4.3.5/node_modules/astro-decap-cms-oauth/src/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro-decap-cms-oauth@0.2.9_astro@4.3.5/node_modules/astro-decap-cms-oauth/src/oauth/index@_@ts":"pages/oauth.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro-decap-cms-oauth@0.2.9_astro@4.3.5/node_modules/astro-decap-cms-oauth/src/oauth/callback@_@ts":"pages/oauth/callback.astro.mjs","\u0000@astro-page:src/pages/about@_@mdx":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/item1@_@md":"pages/blog/item1.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/drafts/[slug]/index@_@astro":"pages/drafts/_slug_.astro.mjs","\u0000@astro-page:src/pages/drafts/[...page]@_@astro":"pages/drafts/_---page_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/media@_@astro":"pages/media.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/index@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/[page]@_@astro":"pages/tags/_tag_/_page_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/node_modules/.pnpm/astro-decap-cms-oauth@0.2.9_astro@4.3.5/node_modules/astro-decap-cms-oauth/src/oauth/index.ts":"chunks/pages/index_3hSIN9L5.mjs","\u0000@astrojs-manifest":"manifest_CVKcixib.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/introducing-astro-2.mdx?astroContentCollectionEntry=true":"chunks/introducing-astro-2_Bcg2hEoj.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/introducing-astro-ship-less-javascript.mdx?astroContentCollectionEntry=true":"chunks/introducing-astro-ship-less-javascript_elg6A4ki.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/introducing-astro.mdx?astroContentCollectionEntry=true":"chunks/introducing-astro_xF_KWvDA.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/islands-architecture.mdx?astroContentCollectionEntry=true":"chunks/islands-architecture_iNInZQD3.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/markdoc-integration.mdoc?astroContentCollectionEntry=true":"chunks/markdoc-integration_I_aeXSOG.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/spa-fatigue.mdx?astroContentCollectionEntry=true":"chunks/spa-fatigue_W_2XQ37Y.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/introducing-astro-2.mdx?astroPropagatedAssets":"chunks/introducing-astro-2_Gg3Zi9wZ.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/introducing-astro-ship-less-javascript.mdx?astroPropagatedAssets":"chunks/introducing-astro-ship-less-javascript_zH2X6bSJ.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/introducing-astro.mdx?astroPropagatedAssets":"chunks/introducing-astro_MTfHREry.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/islands-architecture.mdx?astroPropagatedAssets":"chunks/islands-architecture_gqXFRm-d.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/markdoc-integration.mdoc?astroPropagatedAssets":"chunks/markdoc-integration_QcaSJPEr.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/spa-fatigue.mdx?astroPropagatedAssets":"chunks/spa-fatigue_fqAuL_MT.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/introducing-astro-2.mdx":"chunks/introducing-astro-2_DuolzSs2.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/introducing-astro-ship-less-javascript.mdx":"chunks/introducing-astro-ship-less-javascript_jXeX_-gq.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/introducing-astro.mdx":"chunks/introducing-astro_AyWlU39q.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/islands-architecture.mdx":"chunks/islands-architecture_VfPqmMc0.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/markdoc-integration.mdoc":"chunks/markdoc-integration_XIXFlM6J.mjs","/Users/thor3/Documents/ink-cdn/src/content/blog/spa-fatigue.mdx":"chunks/spa-fatigue_vUsFpAnl.mjs","/Users/thor3/Documents/ink-cdn/node_modules/.pnpm/@unpic+placeholder@0.1.2/node_modules/@unpic/placeholder/dist/index.mjs":"chunks/index_PUBzIha5.mjs","/Users/thor3/Documents/ink-cdn/node_modules/.pnpm/blurhash@2.0.5/node_modules/blurhash/dist/index.mjs":"chunks/index_VPVBShDS.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.NMl_MOj_.js","/Users/thor3/Documents/ink-cdn/src/components/SearchBtn.svelte":"_astro/SearchBtn.57EzbE0N.js","/Users/thor3/Documents/ink-cdn/src/components/CodeCopy.svelte":"_astro/CodeCopy.a2itxv_K.js","@astrojs/svelte/client.js":"_astro/client.bWR2MAd2.js","$/components/PostStats.svelte":"_astro/PostStats.KnpAYqZz.js","/Users/thor3/Documents/ink-cdn/src/components/ModeLabel.svelte":"_astro/ModeLabel.RK5b84-W.js","/Users/thor3/Documents/ink-cdn/src/components/ModeSwitcherBtn.svelte":"_astro/ModeSwitcherBtn.x3uk96uP.js","/astro/hoisted.js?q=1":"_astro/hoisted.l-JsOPk0.js","/Users/thor3/Documents/ink-cdn/src/components/mdoc/Tabs/index.svelte":"_astro/index.OlVRWB86.js","/Users/thor3/Documents/ink-cdn/src/components/SearchModal.svelte":"_astro/SearchModal.TgN9b3PA.js","astro:scripts/before-hydration.js":""},"assets":["/file:///Users/thor3/Documents/ink-cdn/dist/admin/index.html","/file:///Users/thor3/Documents/ink-cdn/dist/about/index.html","/file:///Users/thor3/Documents/ink-cdn/dist/blog/item1/index.html","/file:///Users/thor3/Documents/ink-cdn/dist/index.html","/file:///Users/thor3/Documents/ink-cdn/dist/media/index.html","/file:///Users/thor3/Documents/ink-cdn/dist/rss.xml","/file:///Users/thor3/Documents/ink-cdn/dist/tags/index.html"],"buildFormat":"directory"});

export { manifest };
