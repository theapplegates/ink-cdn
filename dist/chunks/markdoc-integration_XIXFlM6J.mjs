import { d as createComponent, r as renderTemplate, t as renderUniqueStylesheet, v as renderScriptElement, u as unescapeHTML, w as createHeadAndContent, j as renderComponent, z as isHTMLString, c as createAstro, m as maybeRenderHead, i as addAttribute, k as renderSlot } from './astro_fURf_zJH.mjs';
import { c as isRelativePath } from './astro/assets-service_q6SRuwMH.mjs';
import { $ as $$Image, a as $$Icon, b as create_ssr_component, s as setContext, o as onDestroy, w as writable, g as getContext, d as subscribe, v as validate_component, e as each, f as escape } from './prerender_BXzfj_0E.mjs';
/* empty css                                                                    */
/* empty css                                                         */
/* empty css                                                     */
/* empty css                                                       */

var __create = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp$1(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp$1(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp$1(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp$1(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// src/grammar/tag.js
var require_tag = __commonJS({
  "src/grammar/tag.js"(exports, module) {
    function peg$subclass(child, parent) {
      function C() {
        this.constructor = child;
      }
      C.prototype = parent.prototype;
      child.prototype = new C();
    }
    function peg$SyntaxError(message, expected, found, location) {
      this.message = message;
      this.expected = expected;
      this.found = found;
      this.location = location;
      this.name = "SyntaxError";
      if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(this, peg$SyntaxError);
      }
    }
    peg$subclass(peg$SyntaxError, Error);
    peg$SyntaxError.buildMessage = function(expected, found, location) {
      var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return '"' + literalEscape(expectation.text) + '"';
        },
        class: function(expectation) {
          var escapedParts = expectation.parts.map(function(part) {
            return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
          });
          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },
        any: function() {
          return "any character";
        },
        end: function() {
          return "end of input";
        },
        other: function(expectation) {
          return expectation.description;
        },
        not: function(expectation) {
          return "not " + describeExpectation(expectation.expected);
        }
      };
      function hex(ch) {
        return ch.charCodeAt(0).toString(16).toUpperCase();
      }
      function literalEscape(s2) {
        return s2.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
          return "\\x0" + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
          return "\\x" + hex(ch);
        });
      }
      function classEscape(s2) {
        return s2.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
          return "\\x0" + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
          return "\\x" + hex(ch);
        });
      }
      function describeExpectation(expectation) {
        return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
      }
      function describeExpected(expected2) {
        var descriptions = expected2.map(describeExpectation);
        var i, j;
        descriptions.sort();
        if (descriptions.length > 0) {
          for (i = 1, j = 1; i < descriptions.length; i++) {
            if (descriptions[i - 1] !== descriptions[i]) {
              descriptions[j] = descriptions[i];
              j++;
            }
          }
          descriptions.length = j;
        }
        switch (descriptions.length) {
          case 1:
            return descriptions[0];
          case 2:
            return descriptions[0] + " or " + descriptions[1];
          default:
            return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
        }
      }
      function describeFound(found2) {
        return found2 ? '"' + literalEscape(found2) + '"' : "end of input";
      }
      return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
    };
    function peg$parse(input, options) {
      options = options !== void 0 ? options : {};
      var peg$FAILED = {};
      var peg$startRuleFunctions = { Top: peg$parseTop };
      var peg$startRuleFunction = peg$parseTop;
      var peg$c0 = "/";
      var peg$c1 = ".";
      var peg$c2 = "#";
      var peg$c3 = "=";
      var peg$c4 = "(";
      var peg$c5 = ")";
      var peg$c6 = ",";
      var peg$c7 = "[";
      var peg$c8 = "]";
      var peg$c9 = "null";
      var peg$c10 = "true";
      var peg$c11 = "false";
      var peg$c12 = "{";
      var peg$c13 = "}";
      var peg$c14 = ":";
      var peg$c16 = '"';
      var peg$c17 = "\\";
      var peg$r0 = /^[$@]/;
      var peg$r1 = /^[0-9]/;
      var peg$r2 = /^[^\0-\x1F"\\]/;
      var peg$r3 = /^[a-zA-Z0-9_\-]/;
      var peg$r4 = /^[ \n\t]/;
      var peg$e0 = peg$literalExpectation("/", false);
      var peg$e1 = peg$otherExpectation("tag name");
      var peg$e2 = peg$otherExpectation("class");
      var peg$e3 = peg$otherExpectation("id");
      var peg$e4 = peg$literalExpectation("=", false);
      var peg$e5 = peg$literalExpectation("(", false);
      var peg$e6 = peg$literalExpectation(")", false);
      var peg$e7 = peg$literalExpectation(",", false);
      var peg$e8 = peg$otherExpectation("variable");
      var peg$e9 = peg$otherExpectation("null");
      var peg$e10 = peg$otherExpectation("boolean");
      var peg$e11 = peg$literalExpectation("[", false);
      var peg$e12 = peg$literalExpectation("]", false);
      var peg$e13 = peg$literalExpectation("{", false);
      var peg$e14 = peg$literalExpectation("}", false);
      var peg$e15 = peg$literalExpectation(":", false);
      var peg$e16 = peg$otherExpectation("number");
      var peg$e17 = peg$otherExpectation("string");
      var peg$e18 = peg$otherExpectation("identifier");
      var peg$e19 = peg$otherExpectation("whitespace");
      var peg$f0 = function(variable) {
        return { type: "variable", meta: { variable } };
      };
      var peg$f1 = function(attributes) {
        return { type: "annotation", meta: { attributes } };
      };
      var peg$f2 = function(tag, value) {
        return value;
      };
      var peg$f3 = function(tag, primary, attributes, close) {
        if (primary) {
          attributes = attributes || [];
          attributes.unshift({
            type: "attribute",
            name: "primary",
            value: primary
          });
        }
        const [type, nesting] = close ? ["tag", 0] : ["tag_open", 1];
        return { type, nesting, meta: { tag, attributes } };
      };
      var peg$f4 = function(tag) {
        return { type: "tag_close", nesting: -1, meta: { tag } };
      };
      var peg$f5 = function(head, tail) {
        return !head ? [] : [head, ...tail];
      };
      var peg$f6 = function(item2) {
        return item2;
      };
      var peg$f7 = function(ids) {
        return ids;
      };
      var peg$f8 = function(classes) {
        return classes;
      };
      var peg$f9 = function(attribute) {
        return attribute;
      };
      var peg$f10 = function(name) {
        return { type: "class", name, value: true };
      };
      var peg$f11 = function(value) {
        return { type: "attribute", name: "id", value };
      };
      var peg$f12 = function(name, value) {
        return { type: "attribute", name, value };
      };
      var peg$f13 = function(name, head, tail) {
        return head ? [head, ...tail] : [];
      };
      var peg$f14 = function(name, params) {
        let parameters = {};
        for (let [index, { name: name2, value }] of params.entries())
          parameters[name2 || index] = value;
        return new Function3(name, parameters);
      };
      var peg$f15 = function(name) {
        return name;
      };
      var peg$f16 = function(name, value) {
        return { name, value };
      };
      var peg$f17 = function(value) {
        return value;
      };
      var peg$f18 = function(prefix, head, tail) {
        if (prefix === "@")
          return [head, ...tail];
        return new Variable2([head, ...tail]);
      };
      var peg$f19 = function() {
        return null;
      };
      var peg$f20 = function() {
        return true;
      };
      var peg$f21 = function() {
        return false;
      };
      var peg$f22 = function(head, tail) {
        return [head, ...tail];
      };
      var peg$f23 = function(value) {
        return value || [];
      };
      var peg$f24 = function(head, tail) {
        return Object.assign(head, ...tail);
      };
      var peg$f25 = function(value) {
        return value || {};
      };
      var peg$f26 = function(key, value) {
        return key === "$$mdtype" ? {} : { [key]: value };
      };
      var peg$f27 = function() {
        return parseFloat(text2());
      };
      var peg$f28 = function(value) {
        return value.join("");
      };
      var peg$f29 = function(sequence) {
        return sequence;
      };
      var peg$currPos = 0;
      var peg$savedPos = 0;
      var peg$posDetailsCache = [{ line: 1, column: 1 }];
      var peg$expected = [];
      var peg$silentFails = 0;
      var peg$result;
      if ("startRule" in options) {
        if (!(options.startRule in peg$startRuleFunctions)) {
          throw new Error(`Can't start parsing from rule "` + options.startRule + '".');
        }
        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
      }
      function text2() {
        return input.substring(peg$savedPos, peg$currPos);
      }
      function peg$literalExpectation(text3, ignoreCase) {
        return { type: "literal", text: text3, ignoreCase };
      }
      function peg$endExpectation() {
        return { type: "end" };
      }
      function peg$otherExpectation(description) {
        return { type: "other", description };
      }
      function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos];
        var p;
        if (details) {
          return details;
        } else {
          p = pos - 1;
          while (!peg$posDetailsCache[p]) {
            p--;
          }
          details = peg$posDetailsCache[p];
          details = {
            line: details.line,
            column: details.column
          };
          while (p < pos) {
            if (input.charCodeAt(p) === 10) {
              details.line++;
              details.column = 1;
            } else {
              details.column++;
            }
            p++;
          }
          peg$posDetailsCache[pos] = details;
          return details;
        }
      }
      var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;
      function peg$computeLocation(startPos, endPos) {
        var loc = {};
        if (peg$VALIDFILENAME)
          loc.filename = options.filename;
        var startPosDetails = peg$computePosDetails(startPos);
        loc.start = {
          offset: startPos,
          line: startPosDetails.line,
          column: startPosDetails.column
        };
        var endPosDetails = peg$computePosDetails(endPos);
        loc.end = {
          offset: endPos,
          line: endPosDetails.line,
          column: endPosDetails.column
        };
        return loc;
      }
      function peg$begin() {
        peg$expected.push({ pos: peg$currPos, variants: [] });
      }
      function peg$expect(expected2) {
        var top = peg$expected[peg$expected.length - 1];
        if (peg$currPos < top.pos) {
          return;
        }
        if (peg$currPos > top.pos) {
          top.pos = peg$currPos;
          top.variants = [];
        }
        top.variants.push(expected2);
      }
      function peg$buildStructuredError(expected2, found, location2) {
        return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected2, found, location2), expected2, found, location2);
      }
      function peg$buildError() {
        var expected2 = peg$expected[0];
        var failPos = expected2.pos;
        return peg$buildStructuredError(expected2.variants, failPos < input.length ? input.charAt(failPos) : null, failPos < input.length ? peg$computeLocation(failPos, failPos + 1) : peg$computeLocation(failPos, failPos));
      }
      function peg$parseTop() {
        var s0;
        s0 = peg$parseTopLevelValue();
        if (s0 === peg$FAILED) {
          s0 = peg$parseAnnotation();
          if (s0 === peg$FAILED) {
            s0 = peg$parseTagOpen();
            if (s0 === peg$FAILED) {
              s0 = peg$parseTagClose();
            }
          }
        }
        return s0;
      }
      function peg$parseTopLevelValue() {
        var s0, s1;
        s0 = peg$currPos;
        s1 = peg$parseVariable();
        if (s1 === peg$FAILED) {
          s1 = peg$parseFunction();
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f0(s1);
        }
        s0 = s1;
        return s0;
      }
      function peg$parseAnnotation() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$parseTagAttributes();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parse_();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }
          peg$savedPos = s0;
          s0 = peg$f1(s1);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseTagOpen() {
        var s0, s1, s2, s3, s4, s5, s6;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        s1 = peg$parseTagName();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parse_();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }
          s3 = peg$currPos;
          s4 = peg$parseValue();
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            peg$savedPos = s3;
            s3 = peg$f2(s1, s4);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          s4 = peg$parseTagAttributes();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          s5 = [];
          s6 = peg$parse_();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parse_();
          }
          rule$expects(peg$e0);
          if (input.charCodeAt(peg$currPos) === 47) {
            s6 = peg$c0;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
          }
          if (s6 === peg$FAILED) {
            s6 = null;
          }
          peg$savedPos = s0;
          s0 = peg$f3(s1, s3, s4, s6);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseTagClose() {
        var s0, s1, s2;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        rule$expects(peg$e0);
        if (input.charCodeAt(peg$currPos) === 47) {
          s1 = peg$c0;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseTagName();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f4(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseTagName() {
        var s0;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        rule$expects(peg$e1);
        peg$silentFails++;
        s0 = peg$parseIdentifier();
        peg$silentFails--;
        return s0;
      }
      function peg$parseTagAttributes() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$parseTagAttributesItem();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseTagAttributesTail();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseTagAttributesTail();
          }
          peg$savedPos = s0;
          s0 = peg$f5(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseTagAttributesTail() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parse_();
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseTagAttributesItem();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f6(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseTagAttributesItem() {
        var s0, s1;
        s0 = peg$currPos;
        s1 = peg$parseTagShortcutId();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f7(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseTagShortcutClass();
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$f8(s1);
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseTagAttribute();
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$f9(s1);
            }
            s0 = s1;
          }
        }
        return s0;
      }
      function peg$parseTagShortcutClass() {
        var s0, s1, s2;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        rule$expects(peg$e2);
        peg$silentFails++;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 46) {
          s1 = peg$c1;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseIdentifier();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f10(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        return s0;
      }
      function peg$parseTagShortcutId() {
        var s0, s1, s2;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        rule$expects(peg$e3);
        peg$silentFails++;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 35) {
          s1 = peg$c2;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseIdentifier();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f11(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        return s0;
      }
      function peg$parseTagAttribute() {
        var s0, s1, s2, s3;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        s1 = peg$parseIdentifier();
        if (s1 !== peg$FAILED) {
          rule$expects(peg$e4);
          if (input.charCodeAt(peg$currPos) === 61) {
            s2 = peg$c3;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseValue();
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f12(s1, s3);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseFunction() {
        var s0, s1, s2, s3, s4, s5, s6, s7;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        s1 = peg$parseIdentifier();
        if (s1 !== peg$FAILED) {
          rule$expects(peg$e5);
          if (input.charCodeAt(peg$currPos) === 40) {
            s2 = peg$c4;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parse_();
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parse_();
            }
            s4 = peg$currPos;
            s5 = peg$parseFunctionParameter();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            s6 = [];
            s7 = peg$parseFunctionParameterTail();
            while (s7 !== peg$FAILED) {
              s6.push(s7);
              s7 = peg$parseFunctionParameterTail();
            }
            peg$savedPos = s4;
            s4 = peg$f13(s1, s5, s6);
            rule$expects(peg$e6);
            if (input.charCodeAt(peg$currPos) === 41) {
              s5 = peg$c5;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f14(s1, s4);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseFunctionParameter() {
        var s0, s1, s2, s3;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = peg$parseIdentifier();
        if (s2 !== peg$FAILED) {
          rule$expects(peg$e4);
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c3;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s1;
            s1 = peg$f15(s2);
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        s2 = peg$parseValue();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f16(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseFunctionParameterTail() {
        var s0, s1, s2, s3, s4;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parse_();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_();
        }
        rule$expects(peg$e7);
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }
          s4 = peg$parseFunctionParameter();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f17(s4);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseTrailingComma() {
        var s0, s1, s2;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parse_();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_();
        }
        rule$expects(peg$e7);
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = null;
        }
        return s0;
      }
      function peg$parseVariable() {
        var s0, s1, s2, s3, s4;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        rule$expects(peg$e8);
        peg$silentFails++;
        s0 = peg$currPos;
        if (peg$r0.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseIdentifier();
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parseVariableTail();
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseVariableTail();
            }
            peg$savedPos = s0;
            s0 = peg$f18(s1, s2, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        return s0;
      }
      function peg$parseVariableTail() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 46) {
          s1 = peg$c1;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseIdentifier();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f15(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 91) {
            s1 = peg$c7;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseValueNumber();
            if (s2 === peg$FAILED) {
              s2 = peg$parseValueString();
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s3 = peg$c8;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
              }
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f17(s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
        return s0;
      }
      function peg$parseValue() {
        var s0;
        s0 = peg$parseValueNull();
        if (s0 === peg$FAILED) {
          s0 = peg$parseValueBoolean();
          if (s0 === peg$FAILED) {
            s0 = peg$parseValueString();
            if (s0 === peg$FAILED) {
              s0 = peg$parseValueNumber();
              if (s0 === peg$FAILED) {
                s0 = peg$parseValueArray();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseValueHash();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseFunction();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseVariable();
                    }
                  }
                }
              }
            }
          }
        }
        return s0;
      }
      function peg$parseValueNull() {
        var s0, s1;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        rule$expects(peg$e9);
        peg$silentFails++;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 4) === peg$c9) {
          s1 = peg$c9;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f19();
        }
        s0 = s1;
        peg$silentFails--;
        return s0;
      }
      function peg$parseValueBoolean() {
        var s0, s1;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        rule$expects(peg$e10);
        peg$silentFails++;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 4) === peg$c10) {
          s1 = peg$c10;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f20();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 5) === peg$c11) {
            s1 = peg$c11;
            peg$currPos += 5;
          } else {
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$f21();
          }
          s0 = s1;
        }
        peg$silentFails--;
        return s0;
      }
      function peg$parseValueArray() {
        var s0, s1, s2, s3, s4, s5, s6;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        rule$expects(peg$e11);
        if (input.charCodeAt(peg$currPos) === 91) {
          s1 = peg$c7;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parse_();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }
          s3 = peg$currPos;
          s4 = peg$parseValue();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parseValueArrayTail();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseValueArrayTail();
            }
            s6 = peg$parseTrailingComma();
            peg$savedPos = s3;
            s3 = peg$f22(s4, s5);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          rule$expects(peg$e12);
          if (input.charCodeAt(peg$currPos) === 93) {
            s5 = peg$c8;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f23(s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseValueArrayTail() {
        var s0, s1, s2, s3, s4;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parse_();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_();
        }
        rule$expects(peg$e7);
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }
          s4 = peg$parseValue();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f17(s4);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseValueHash() {
        var s0, s1, s2, s3, s4, s5, s6;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        rule$expects(peg$e13);
        if (input.charCodeAt(peg$currPos) === 123) {
          s1 = peg$c12;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parse_();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }
          s3 = peg$currPos;
          s4 = peg$parseValueHashItem();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parseValueHashTail();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseValueHashTail();
            }
            s6 = peg$parseTrailingComma();
            peg$savedPos = s3;
            s3 = peg$f24(s4, s5);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          rule$expects(peg$e14);
          if (input.charCodeAt(peg$currPos) === 125) {
            s5 = peg$c13;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f25(s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseValueHashTail() {
        var s0, s1, s2, s3, s4;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parse_();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_();
        }
        rule$expects(peg$e7);
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }
          s4 = peg$parseValueHashItem();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f6(s4);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseValueHashItem() {
        var s0, s1, s2, s3, s4;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        s0 = peg$currPos;
        s1 = peg$parseIdentifier();
        if (s1 === peg$FAILED) {
          s1 = peg$parseValueString();
        }
        if (s1 !== peg$FAILED) {
          rule$expects(peg$e15);
          if (input.charCodeAt(peg$currPos) === 58) {
            s2 = peg$c14;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parse_();
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parse_();
            }
            s4 = peg$parseValue();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f26(s1, s4);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseValueNumber() {
        var s0, s2, s3, s4, s5, s6;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        rule$expects(peg$e16);
        peg$silentFails++;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 45) {
          peg$currPos++;
        }
        s2 = [];
        if (peg$r1.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            if (peg$r1.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
            }
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 46) {
            s4 = peg$c1;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            if (peg$r1.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                if (peg$r1.test(input.charAt(peg$currPos))) {
                  s6 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                }
              }
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          peg$savedPos = s0;
          s0 = peg$f27();
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        return s0;
      }
      function peg$parseValueString() {
        var s0, s1, s2, s3;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        rule$expects(peg$e17);
        peg$silentFails++;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 34) {
          s1 = peg$c16;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseValueStringChars();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseValueStringChars();
          }
          if (input.charCodeAt(peg$currPos) === 34) {
            s3 = peg$c16;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f28(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        return s0;
      }
      function peg$parseValueStringChars() {
        var s0;
        if (peg$r2.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$parseValueStringEscapes();
        }
        return s0;
      }
      function peg$parseValueStringEscapes() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 92) {
          s1 = peg$c17;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s2 = peg$c16;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 92) {
              s2 = peg$c17;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
            }
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f29(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        return s0;
      }
      function peg$parseIdentifier() {
        var s0, s1, s2;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        rule$expects(peg$e18);
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        if (peg$r3.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$r3.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
        peg$silentFails--;
        return s0;
      }
      function peg$parse_() {
        var s0;
        var rule$expects = function(expected2) {
          if (peg$silentFails === 0)
            peg$expect(expected2);
        };
        rule$expects(peg$e19);
        peg$silentFails++;
        if (peg$r4.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        return s0;
      }
      const { Variable: Variable2, Function: Function3 } = options;
      peg$begin();
      peg$result = peg$startRuleFunction();
      if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result;
      } else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
          peg$expect(peg$endExpectation());
        }
        throw peg$buildError();
      }
    }
    module.exports = {
      SyntaxError: peg$SyntaxError,
      parse: peg$parse
    };
  }
});

// node_modules/entities/lib/maps/entities.json
var require_entities = __commonJS({
  "node_modules/entities/lib/maps/entities.json"(exports, module) {
    module.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
  }
});

// node_modules/markdown-it/lib/common/entities.js
var require_entities2 = __commonJS({
  "node_modules/markdown-it/lib/common/entities.js"(exports, module) {
    module.exports = require_entities();
  }
});

// node_modules/uc.micro/categories/P/regex.js
var require_regex = __commonJS({
  "node_modules/uc.micro/categories/P/regex.js"(exports, module) {
    module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
  }
});

// node_modules/mdurl/encode.js
var require_encode = __commonJS({
  "node_modules/mdurl/encode.js"(exports, module) {
    var encodeCache = {};
    function getEncodeCache(exclude) {
      var i, ch, cache = encodeCache[exclude];
      if (cache) {
        return cache;
      }
      cache = encodeCache[exclude] = [];
      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        if (/^[0-9a-z]$/i.test(ch)) {
          cache.push(ch);
        } else {
          cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
        }
      }
      for (i = 0; i < exclude.length; i++) {
        cache[exclude.charCodeAt(i)] = exclude[i];
      }
      return cache;
    }
    function encode(string, exclude, keepEscaped) {
      var i, l, code2, nextCode, cache, result = "";
      if (typeof exclude !== "string") {
        keepEscaped = exclude;
        exclude = encode.defaultChars;
      }
      if (typeof keepEscaped === "undefined") {
        keepEscaped = true;
      }
      cache = getEncodeCache(exclude);
      for (i = 0, l = string.length; i < l; i++) {
        code2 = string.charCodeAt(i);
        if (keepEscaped && code2 === 37 && i + 2 < l) {
          if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
            result += string.slice(i, i + 3);
            i += 2;
            continue;
          }
        }
        if (code2 < 128) {
          result += cache[code2];
          continue;
        }
        if (code2 >= 55296 && code2 <= 57343) {
          if (code2 >= 55296 && code2 <= 56319 && i + 1 < l) {
            nextCode = string.charCodeAt(i + 1);
            if (nextCode >= 56320 && nextCode <= 57343) {
              result += encodeURIComponent(string[i] + string[i + 1]);
              i++;
              continue;
            }
          }
          result += "%EF%BF%BD";
          continue;
        }
        result += encodeURIComponent(string[i]);
      }
      return result;
    }
    encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
    encode.componentChars = "-_.!~*'()";
    module.exports = encode;
  }
});

// node_modules/mdurl/decode.js
var require_decode = __commonJS({
  "node_modules/mdurl/decode.js"(exports, module) {
    var decodeCache = {};
    function getDecodeCache(exclude) {
      var i, ch, cache = decodeCache[exclude];
      if (cache) {
        return cache;
      }
      cache = decodeCache[exclude] = [];
      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        cache.push(ch);
      }
      for (i = 0; i < exclude.length; i++) {
        ch = exclude.charCodeAt(i);
        cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
      }
      return cache;
    }
    function decode(string, exclude) {
      var cache;
      if (typeof exclude !== "string") {
        exclude = decode.defaultChars;
      }
      cache = getDecodeCache(exclude);
      return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
        var i, l, b1, b2, b3, b4, chr, result = "";
        for (i = 0, l = seq.length; i < l; i += 3) {
          b1 = parseInt(seq.slice(i + 1, i + 3), 16);
          if (b1 < 128) {
            result += cache[b1];
            continue;
          }
          if ((b1 & 224) === 192 && i + 3 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            if ((b2 & 192) === 128) {
              chr = b1 << 6 & 1984 | b2 & 63;
              if (chr < 128) {
                result += "\uFFFD\uFFFD";
              } else {
                result += String.fromCharCode(chr);
              }
              i += 3;
              continue;
            }
          }
          if ((b1 & 240) === 224 && i + 6 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            b3 = parseInt(seq.slice(i + 7, i + 9), 16);
            if ((b2 & 192) === 128 && (b3 & 192) === 128) {
              chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
              if (chr < 2048 || chr >= 55296 && chr <= 57343) {
                result += "\uFFFD\uFFFD\uFFFD";
              } else {
                result += String.fromCharCode(chr);
              }
              i += 6;
              continue;
            }
          }
          if ((b1 & 248) === 240 && i + 9 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            b3 = parseInt(seq.slice(i + 7, i + 9), 16);
            b4 = parseInt(seq.slice(i + 10, i + 12), 16);
            if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
              chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
              if (chr < 65536 || chr > 1114111) {
                result += "\uFFFD\uFFFD\uFFFD\uFFFD";
              } else {
                chr -= 65536;
                result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
              }
              i += 9;
              continue;
            }
          }
          result += "\uFFFD";
        }
        return result;
      });
    }
    decode.defaultChars = ";/?:@&=+$,#";
    decode.componentChars = "";
    module.exports = decode;
  }
});

// node_modules/mdurl/format.js
var require_format = __commonJS({
  "node_modules/mdurl/format.js"(exports, module) {
    module.exports = function format2(url) {
      var result = "";
      result += url.protocol || "";
      result += url.slashes ? "//" : "";
      result += url.auth ? url.auth + "@" : "";
      if (url.hostname && url.hostname.indexOf(":") !== -1) {
        result += "[" + url.hostname + "]";
      } else {
        result += url.hostname || "";
      }
      result += url.port ? ":" + url.port : "";
      result += url.pathname || "";
      result += url.search || "";
      result += url.hash || "";
      return result;
    };
  }
});

// node_modules/mdurl/parse.js
var require_parse = __commonJS({
  "node_modules/mdurl/parse.js"(exports, module) {
    function Url() {
      this.protocol = null;
      this.slashes = null;
      this.auth = null;
      this.port = null;
      this.hostname = null;
      this.hash = null;
      this.search = null;
      this.pathname = null;
    }
    var protocolPattern = /^([a-z0-9.+-]+:)/i;
    var portPattern = /:[0-9]*$/;
    var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
    var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
    var autoEscape = ["'"].concat(unwise);
    var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
    var hostEndingChars = ["/", "?", "#"];
    var hostnameMaxLen = 255;
    var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    var hostlessProtocol = {
      "javascript": true,
      "javascript:": true
    };
    var slashedProtocol = {
      "http": true,
      "https": true,
      "ftp": true,
      "gopher": true,
      "file": true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    };
    function urlParse(url, slashesDenoteHost) {
      if (url && url instanceof Url) {
        return url;
      }
      var u = new Url();
      u.parse(url, slashesDenoteHost);
      return u;
    }
    Url.prototype.parse = function(url, slashesDenoteHost) {
      var i, l, lowerProto, hec, slashes, rest = url;
      rest = rest.trim();
      if (!slashesDenoteHost && url.split("#").length === 1) {
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
          this.pathname = simplePath[1];
          if (simplePath[2]) {
            this.search = simplePath[2];
          }
          return this;
        }
      }
      var proto = protocolPattern.exec(rest);
      if (proto) {
        proto = proto[0];
        lowerProto = proto.toLowerCase();
        this.protocol = proto;
        rest = rest.substr(proto.length);
      }
      if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        slashes = rest.substr(0, 2) === "//";
        if (slashes && !(proto && hostlessProtocol[proto])) {
          rest = rest.substr(2);
          this.slashes = true;
        }
      }
      if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
        var hostEnd = -1;
        for (i = 0; i < hostEndingChars.length; i++) {
          hec = rest.indexOf(hostEndingChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
            hostEnd = hec;
          }
        }
        var auth, atSign;
        if (hostEnd === -1) {
          atSign = rest.lastIndexOf("@");
        } else {
          atSign = rest.lastIndexOf("@", hostEnd);
        }
        if (atSign !== -1) {
          auth = rest.slice(0, atSign);
          rest = rest.slice(atSign + 1);
          this.auth = auth;
        }
        hostEnd = -1;
        for (i = 0; i < nonHostChars.length; i++) {
          hec = rest.indexOf(nonHostChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
            hostEnd = hec;
          }
        }
        if (hostEnd === -1) {
          hostEnd = rest.length;
        }
        if (rest[hostEnd - 1] === ":") {
          hostEnd--;
        }
        var host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);
        this.parseHost(host);
        this.hostname = this.hostname || "";
        var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!ipv6Hostname) {
          var hostparts = this.hostname.split(/\./);
          for (i = 0, l = hostparts.length; i < l; i++) {
            var part = hostparts[i];
            if (!part) {
              continue;
            }
            if (!part.match(hostnamePartPattern)) {
              var newpart = "";
              for (var j = 0, k = part.length; j < k; j++) {
                if (part.charCodeAt(j) > 127) {
                  newpart += "x";
                } else {
                  newpart += part[j];
                }
              }
              if (!newpart.match(hostnamePartPattern)) {
                var validParts = hostparts.slice(0, i);
                var notHost = hostparts.slice(i + 1);
                var bit = part.match(hostnamePartStart);
                if (bit) {
                  validParts.push(bit[1]);
                  notHost.unshift(bit[2]);
                }
                if (notHost.length) {
                  rest = notHost.join(".") + rest;
                }
                this.hostname = validParts.join(".");
                break;
              }
            }
          }
        }
        if (this.hostname.length > hostnameMaxLen) {
          this.hostname = "";
        }
        if (ipv6Hostname) {
          this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        }
      }
      var hash = rest.indexOf("#");
      if (hash !== -1) {
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
      }
      var qm = rest.indexOf("?");
      if (qm !== -1) {
        this.search = rest.substr(qm);
        rest = rest.slice(0, qm);
      }
      if (rest) {
        this.pathname = rest;
      }
      if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
        this.pathname = "";
      }
      return this;
    };
    Url.prototype.parseHost = function(host) {
      var port = portPattern.exec(host);
      if (port) {
        port = port[0];
        if (port !== ":") {
          this.port = port.substr(1);
        }
        host = host.substr(0, host.length - port.length);
      }
      if (host) {
        this.hostname = host;
      }
    };
    module.exports = urlParse;
  }
});

// node_modules/mdurl/index.js
var require_mdurl = __commonJS({
  "node_modules/mdurl/index.js"(exports, module) {
    module.exports.encode = require_encode();
    module.exports.decode = require_decode();
    module.exports.format = require_format();
    module.exports.parse = require_parse();
  }
});

// node_modules/uc.micro/properties/Any/regex.js
var require_regex2 = __commonJS({
  "node_modules/uc.micro/properties/Any/regex.js"(exports, module) {
    module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  }
});

// node_modules/uc.micro/categories/Cc/regex.js
var require_regex3 = __commonJS({
  "node_modules/uc.micro/categories/Cc/regex.js"(exports, module) {
    module.exports = /[\0-\x1F\x7F-\x9F]/;
  }
});

// node_modules/uc.micro/categories/Cf/regex.js
var require_regex4 = __commonJS({
  "node_modules/uc.micro/categories/Cf/regex.js"(exports, module) {
    module.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
  }
});

// node_modules/uc.micro/categories/Z/regex.js
var require_regex5 = __commonJS({
  "node_modules/uc.micro/categories/Z/regex.js"(exports, module) {
    module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  }
});

// node_modules/uc.micro/index.js
var require_uc = __commonJS({
  "node_modules/uc.micro/index.js"(exports) {
    exports.Any = require_regex2();
    exports.Cc = require_regex3();
    exports.Cf = require_regex4();
    exports.P = require_regex();
    exports.Z = require_regex5();
  }
});

// node_modules/markdown-it/lib/common/utils.js
var require_utils = __commonJS({
  "node_modules/markdown-it/lib/common/utils.js"(exports) {
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function has(object, key) {
      return _hasOwnProperty.call(object, key);
    }
    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function(source) {
        if (!source) {
          return;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be object");
        }
        Object.keys(source).forEach(function(key) {
          obj[key] = source[key];
        });
      });
      return obj;
    }
    function arrayReplaceAt(src, pos, newElements) {
      return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
    }
    function isValidEntityCode(c) {
      if (c >= 55296 && c <= 57343) {
        return false;
      }
      if (c >= 64976 && c <= 65007) {
        return false;
      }
      if ((c & 65535) === 65535 || (c & 65535) === 65534) {
        return false;
      }
      if (c >= 0 && c <= 8) {
        return false;
      }
      if (c === 11) {
        return false;
      }
      if (c >= 14 && c <= 31) {
        return false;
      }
      if (c >= 127 && c <= 159) {
        return false;
      }
      if (c > 1114111) {
        return false;
      }
      return true;
    }
    function fromCodePoint(c) {
      if (c > 65535) {
        c -= 65536;
        var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
        return String.fromCharCode(surrogate1, surrogate2);
      }
      return String.fromCharCode(c);
    }
    var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
    var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
    var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
    var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
    var entities = require_entities2();
    function replaceEntityPattern(match, name) {
      var code2 = 0;
      if (has(entities, name)) {
        return entities[name];
      }
      if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
        code2 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
        if (isValidEntityCode(code2)) {
          return fromCodePoint(code2);
        }
      }
      return match;
    }
    function unescapeMd(str) {
      if (str.indexOf("\\") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_MD_RE, "$1");
    }
    function unescapeAll(str) {
      if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
        return str;
      }
      return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
        if (escaped) {
          return escaped;
        }
        return replaceEntityPattern(match, entity);
      });
    }
    var HTML_ESCAPE_TEST_RE = /[&<>"]/;
    var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
    var HTML_REPLACEMENTS = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function replaceUnsafeChar(ch) {
      return HTML_REPLACEMENTS[ch];
    }
    function escapeHtml2(str) {
      if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
      }
      return str;
    }
    var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
    function escapeRE(str) {
      return str.replace(REGEXP_ESCAPE_RE, "\\$&");
    }
    function isSpace(code2) {
      switch (code2) {
        case 9:
        case 32:
          return true;
      }
      return false;
    }
    function isWhiteSpace(code2) {
      if (code2 >= 8192 && code2 <= 8202) {
        return true;
      }
      switch (code2) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return true;
      }
      return false;
    }
    var UNICODE_PUNCT_RE = require_regex();
    function isPunctChar(ch) {
      return UNICODE_PUNCT_RE.test(ch);
    }
    function isMdAsciiPunct(ch) {
      switch (ch) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }
    function normalizeReference(str) {
      str = str.trim().replace(/\s+/g, " ");
      if ("\u1E9E".toLowerCase() === "\u1E7E") {
        str = str.replace(/ẞ/g, "\xDF");
      }
      return str.toLowerCase().toUpperCase();
    }
    exports.lib = {};
    exports.lib.mdurl = require_mdurl();
    exports.lib.ucmicro = require_uc();
    exports.assign = assign;
    exports.isString = isString;
    exports.has = has;
    exports.unescapeMd = unescapeMd;
    exports.unescapeAll = unescapeAll;
    exports.isValidEntityCode = isValidEntityCode;
    exports.fromCodePoint = fromCodePoint;
    exports.escapeHtml = escapeHtml2;
    exports.arrayReplaceAt = arrayReplaceAt;
    exports.isSpace = isSpace;
    exports.isWhiteSpace = isWhiteSpace;
    exports.isMdAsciiPunct = isMdAsciiPunct;
    exports.isPunctChar = isPunctChar;
    exports.escapeRE = escapeRE;
    exports.normalizeReference = normalizeReference;
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_label.js
var require_parse_link_label = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_label.js"(exports, module) {
    module.exports = function parseLinkLabel(state, start, disableNested) {
      var level, found, marker, prevPos, labelEnd = -1, max2 = state.posMax, oldPos = state.pos;
      state.pos = start + 1;
      level = 1;
      while (state.pos < max2) {
        marker = state.src.charCodeAt(state.pos);
        if (marker === 93) {
          level--;
          if (level === 0) {
            found = true;
            break;
          }
        }
        prevPos = state.pos;
        state.md.inline.skipToken(state);
        if (marker === 91) {
          if (prevPos === state.pos - 1) {
            level++;
          } else if (disableNested) {
            state.pos = oldPos;
            return -1;
          }
        }
      }
      if (found) {
        labelEnd = state.pos;
      }
      state.pos = oldPos;
      return labelEnd;
    };
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_destination.js
var require_parse_link_destination = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_destination.js"(exports, module) {
    var unescapeAll = require_utils().unescapeAll;
    module.exports = function parseLinkDestination(str, pos, max2) {
      var code2, level, lines = 0, start = pos, result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ""
      };
      if (str.charCodeAt(pos) === 60) {
        pos++;
        while (pos < max2) {
          code2 = str.charCodeAt(pos);
          if (code2 === 10) {
            return result;
          }
          if (code2 === 60) {
            return result;
          }
          if (code2 === 62) {
            result.pos = pos + 1;
            result.str = unescapeAll(str.slice(start + 1, pos));
            result.ok = true;
            return result;
          }
          if (code2 === 92 && pos + 1 < max2) {
            pos += 2;
            continue;
          }
          pos++;
        }
        return result;
      }
      level = 0;
      while (pos < max2) {
        code2 = str.charCodeAt(pos);
        if (code2 === 32) {
          break;
        }
        if (code2 < 32 || code2 === 127) {
          break;
        }
        if (code2 === 92 && pos + 1 < max2) {
          if (str.charCodeAt(pos + 1) === 32) {
            break;
          }
          pos += 2;
          continue;
        }
        if (code2 === 40) {
          level++;
          if (level > 32) {
            return result;
          }
        }
        if (code2 === 41) {
          if (level === 0) {
            break;
          }
          level--;
        }
        pos++;
      }
      if (start === pos) {
        return result;
      }
      if (level !== 0) {
        return result;
      }
      result.str = unescapeAll(str.slice(start, pos));
      result.lines = lines;
      result.pos = pos;
      result.ok = true;
      return result;
    };
  }
});

// node_modules/markdown-it/lib/helpers/parse_link_title.js
var require_parse_link_title = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_title.js"(exports, module) {
    var unescapeAll = require_utils().unescapeAll;
    module.exports = function parseLinkTitle(str, pos, max2) {
      var code2, marker, lines = 0, start = pos, result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ""
      };
      if (pos >= max2) {
        return result;
      }
      marker = str.charCodeAt(pos);
      if (marker !== 34 && marker !== 39 && marker !== 40) {
        return result;
      }
      pos++;
      if (marker === 40) {
        marker = 41;
      }
      while (pos < max2) {
        code2 = str.charCodeAt(pos);
        if (code2 === marker) {
          result.pos = pos + 1;
          result.lines = lines;
          result.str = unescapeAll(str.slice(start + 1, pos));
          result.ok = true;
          return result;
        } else if (code2 === 40 && marker === 41) {
          return result;
        } else if (code2 === 10) {
          lines++;
        } else if (code2 === 92 && pos + 1 < max2) {
          pos++;
          if (str.charCodeAt(pos) === 10) {
            lines++;
          }
        }
        pos++;
      }
      return result;
    };
  }
});

// node_modules/markdown-it/lib/helpers/index.js
var require_helpers = __commonJS({
  "node_modules/markdown-it/lib/helpers/index.js"(exports) {
    exports.parseLinkLabel = require_parse_link_label();
    exports.parseLinkDestination = require_parse_link_destination();
    exports.parseLinkTitle = require_parse_link_title();
  }
});

// node_modules/markdown-it/lib/renderer.js
var require_renderer = __commonJS({
  "node_modules/markdown-it/lib/renderer.js"(exports, module) {
    var assign = require_utils().assign;
    var unescapeAll = require_utils().unescapeAll;
    var escapeHtml2 = require_utils().escapeHtml;
    var default_rules = {};
    default_rules.code_inline = function(tokens, idx, options, env, slf) {
      var token = tokens[idx];
      return "<code" + slf.renderAttrs(token) + ">" + escapeHtml2(tokens[idx].content) + "</code>";
    };
    default_rules.code_block = function(tokens, idx, options, env, slf) {
      var token = tokens[idx];
      return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml2(tokens[idx].content) + "</code></pre>\n";
    };
    default_rules.fence = function(tokens, idx, options, env, slf) {
      var token = tokens[idx], info = token.info ? unescapeAll(token.info).trim() : "", langName = "", langAttrs = "", highlighted, i, arr, tmpAttrs, tmpToken;
      if (info) {
        arr = info.split(/(\s+)/g);
        langName = arr[0];
        langAttrs = arr.slice(2).join("");
      }
      if (options.highlight) {
        highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml2(token.content);
      } else {
        highlighted = escapeHtml2(token.content);
      }
      if (highlighted.indexOf("<pre") === 0) {
        return highlighted + "\n";
      }
      if (info) {
        i = token.attrIndex("class");
        tmpAttrs = token.attrs ? token.attrs.slice() : [];
        if (i < 0) {
          tmpAttrs.push(["class", options.langPrefix + langName]);
        } else {
          tmpAttrs[i] = tmpAttrs[i].slice();
          tmpAttrs[i][1] += " " + options.langPrefix + langName;
        }
        tmpToken = {
          attrs: tmpAttrs
        };
        return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
      }
      return "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
    };
    default_rules.image = function(tokens, idx, options, env, slf) {
      var token = tokens[idx];
      token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
      return slf.renderToken(tokens, idx, options);
    };
    default_rules.hardbreak = function(tokens, idx, options) {
      return options.xhtmlOut ? "<br />\n" : "<br>\n";
    };
    default_rules.softbreak = function(tokens, idx, options) {
      return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
    };
    default_rules.text = function(tokens, idx) {
      return escapeHtml2(tokens[idx].content);
    };
    default_rules.html_block = function(tokens, idx) {
      return tokens[idx].content;
    };
    default_rules.html_inline = function(tokens, idx) {
      return tokens[idx].content;
    };
    function Renderer() {
      this.rules = assign({}, default_rules);
    }
    Renderer.prototype.renderAttrs = function renderAttrs(token) {
      var i, l, result;
      if (!token.attrs) {
        return "";
      }
      result = "";
      for (i = 0, l = token.attrs.length; i < l; i++) {
        result += " " + escapeHtml2(token.attrs[i][0]) + '="' + escapeHtml2(token.attrs[i][1]) + '"';
      }
      return result;
    };
    Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
      var nextToken, result = "", needLf = false, token = tokens[idx];
      if (token.hidden) {
        return "";
      }
      if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
        result += "\n";
      }
      result += (token.nesting === -1 ? "</" : "<") + token.tag;
      result += this.renderAttrs(token);
      if (token.nesting === 0 && options.xhtmlOut) {
        result += " /";
      }
      if (token.block) {
        needLf = true;
        if (token.nesting === 1) {
          if (idx + 1 < tokens.length) {
            nextToken = tokens[idx + 1];
            if (nextToken.type === "inline" || nextToken.hidden) {
              needLf = false;
            } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
              needLf = false;
            }
          }
        }
      }
      result += needLf ? ">\n" : ">";
      return result;
    };
    Renderer.prototype.renderInline = function(tokens, options, env) {
      var type, result = "", rules = this.rules;
      for (var i = 0, len = tokens.length; i < len; i++) {
        type = tokens[i].type;
        if (typeof rules[type] !== "undefined") {
          result += rules[type](tokens, i, options, env, this);
        } else {
          result += this.renderToken(tokens, i, options);
        }
      }
      return result;
    };
    Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
      var result = "";
      for (var i = 0, len = tokens.length; i < len; i++) {
        if (tokens[i].type === "text") {
          result += tokens[i].content;
        } else if (tokens[i].type === "image") {
          result += this.renderInlineAsText(tokens[i].children, options, env);
        } else if (tokens[i].type === "softbreak") {
          result += "\n";
        }
      }
      return result;
    };
    Renderer.prototype.render = function(tokens, options, env) {
      var i, len, type, result = "", rules = this.rules;
      for (i = 0, len = tokens.length; i < len; i++) {
        type = tokens[i].type;
        if (type === "inline") {
          result += this.renderInline(tokens[i].children, options, env);
        } else if (typeof rules[type] !== "undefined") {
          result += rules[tokens[i].type](tokens, i, options, env, this);
        } else {
          result += this.renderToken(tokens, i, options, env);
        }
      }
      return result;
    };
    module.exports = Renderer;
  }
});

// node_modules/markdown-it/lib/ruler.js
var require_ruler = __commonJS({
  "node_modules/markdown-it/lib/ruler.js"(exports, module) {
    function Ruler() {
      this.__rules__ = [];
      this.__cache__ = null;
    }
    Ruler.prototype.__find__ = function(name) {
      for (var i = 0; i < this.__rules__.length; i++) {
        if (this.__rules__[i].name === name) {
          return i;
        }
      }
      return -1;
    };
    Ruler.prototype.__compile__ = function() {
      var self = this;
      var chains = [""];
      self.__rules__.forEach(function(rule) {
        if (!rule.enabled) {
          return;
        }
        rule.alt.forEach(function(altName) {
          if (chains.indexOf(altName) < 0) {
            chains.push(altName);
          }
        });
      });
      self.__cache__ = {};
      chains.forEach(function(chain) {
        self.__cache__[chain] = [];
        self.__rules__.forEach(function(rule) {
          if (!rule.enabled) {
            return;
          }
          if (chain && rule.alt.indexOf(chain) < 0) {
            return;
          }
          self.__cache__[chain].push(rule.fn);
        });
      });
    };
    Ruler.prototype.at = function(name, fn, options) {
      var index = this.__find__(name);
      var opt = options || {};
      if (index === -1) {
        throw new Error("Parser rule not found: " + name);
      }
      this.__rules__[index].fn = fn;
      this.__rules__[index].alt = opt.alt || [];
      this.__cache__ = null;
    };
    Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
      var index = this.__find__(beforeName);
      var opt = options || {};
      if (index === -1) {
        throw new Error("Parser rule not found: " + beforeName);
      }
      this.__rules__.splice(index, 0, {
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.after = function(afterName, ruleName, fn, options) {
      var index = this.__find__(afterName);
      var opt = options || {};
      if (index === -1) {
        throw new Error("Parser rule not found: " + afterName);
      }
      this.__rules__.splice(index + 1, 0, {
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.push = function(ruleName, fn, options) {
      var opt = options || {};
      this.__rules__.push({
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });
      this.__cache__ = null;
    };
    Ruler.prototype.enable = function(list2, ignoreInvalid) {
      if (!Array.isArray(list2)) {
        list2 = [list2];
      }
      var result = [];
      list2.forEach(function(name) {
        var idx = this.__find__(name);
        if (idx < 0) {
          if (ignoreInvalid) {
            return;
          }
          throw new Error("Rules manager: invalid rule name " + name);
        }
        this.__rules__[idx].enabled = true;
        result.push(name);
      }, this);
      this.__cache__ = null;
      return result;
    };
    Ruler.prototype.enableOnly = function(list2, ignoreInvalid) {
      if (!Array.isArray(list2)) {
        list2 = [list2];
      }
      this.__rules__.forEach(function(rule) {
        rule.enabled = false;
      });
      this.enable(list2, ignoreInvalid);
    };
    Ruler.prototype.disable = function(list2, ignoreInvalid) {
      if (!Array.isArray(list2)) {
        list2 = [list2];
      }
      var result = [];
      list2.forEach(function(name) {
        var idx = this.__find__(name);
        if (idx < 0) {
          if (ignoreInvalid) {
            return;
          }
          throw new Error("Rules manager: invalid rule name " + name);
        }
        this.__rules__[idx].enabled = false;
        result.push(name);
      }, this);
      this.__cache__ = null;
      return result;
    };
    Ruler.prototype.getRules = function(chainName) {
      if (this.__cache__ === null) {
        this.__compile__();
      }
      return this.__cache__[chainName] || [];
    };
    module.exports = Ruler;
  }
});

// node_modules/markdown-it/lib/rules_core/normalize.js
var require_normalize = __commonJS({
  "node_modules/markdown-it/lib/rules_core/normalize.js"(exports, module) {
    var NEWLINES_RE = /\r\n?|\n/g;
    var NULL_RE = /\0/g;
    module.exports = function normalize(state) {
      var str;
      str = state.src.replace(NEWLINES_RE, "\n");
      str = str.replace(NULL_RE, "\uFFFD");
      state.src = str;
    };
  }
});

// node_modules/markdown-it/lib/rules_core/block.js
var require_block = __commonJS({
  "node_modules/markdown-it/lib/rules_core/block.js"(exports, module) {
    module.exports = function block4(state) {
      var token;
      if (state.inlineMode) {
        token = new state.Token("inline", "", 0);
        token.content = state.src;
        token.map = [0, 1];
        token.children = [];
        state.tokens.push(token);
      } else {
        state.md.block.parse(state.src, state.md, state.env, state.tokens);
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/inline.js
var require_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_core/inline.js"(exports, module) {
    module.exports = function inline4(state) {
      var tokens = state.tokens, tok, i, l;
      for (i = 0, l = tokens.length; i < l; i++) {
        tok = tokens[i];
        if (tok.type === "inline") {
          state.md.inline.parse(tok.content, state.md, state.env, tok.children);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/linkify.js
var require_linkify = __commonJS({
  "node_modules/markdown-it/lib/rules_core/linkify.js"(exports, module) {
    var arrayReplaceAt = require_utils().arrayReplaceAt;
    function isLinkOpen(str) {
      return /^<a[>\s]/i.test(str);
    }
    function isLinkClose(str) {
      return /^<\/a\s*>/i.test(str);
    }
    module.exports = function linkify(state) {
      var i, j, l, tokens, token, currentToken, nodes, ln, text2, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
      if (!state.md.options.linkify) {
        return;
      }
      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
          continue;
        }
        tokens = blockTokens[j].children;
        htmlLinkLevel = 0;
        for (i = tokens.length - 1; i >= 0; i--) {
          currentToken = tokens[i];
          if (currentToken.type === "link_close") {
            i--;
            while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
              i--;
            }
            continue;
          }
          if (currentToken.type === "html_inline") {
            if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
              htmlLinkLevel--;
            }
            if (isLinkClose(currentToken.content)) {
              htmlLinkLevel++;
            }
          }
          if (htmlLinkLevel > 0) {
            continue;
          }
          if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
            text2 = currentToken.content;
            links = state.md.linkify.match(text2);
            nodes = [];
            level = currentToken.level;
            lastPos = 0;
            for (ln = 0; ln < links.length; ln++) {
              url = links[ln].url;
              fullUrl = state.md.normalizeLink(url);
              if (!state.md.validateLink(fullUrl)) {
                continue;
              }
              urlText = links[ln].text;
              if (!links[ln].schema) {
                urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
              } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
                urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
              } else {
                urlText = state.md.normalizeLinkText(urlText);
              }
              pos = links[ln].index;
              if (pos > lastPos) {
                token = new state.Token("text", "", 0);
                token.content = text2.slice(lastPos, pos);
                token.level = level;
                nodes.push(token);
              }
              token = new state.Token("link_open", "a", 1);
              token.attrs = [["href", fullUrl]];
              token.level = level++;
              token.markup = "linkify";
              token.info = "auto";
              nodes.push(token);
              token = new state.Token("text", "", 0);
              token.content = urlText;
              token.level = level;
              nodes.push(token);
              token = new state.Token("link_close", "a", -1);
              token.level = --level;
              token.markup = "linkify";
              token.info = "auto";
              nodes.push(token);
              lastPos = links[ln].lastIndex;
            }
            if (lastPos < text2.length) {
              token = new state.Token("text", "", 0);
              token.content = text2.slice(lastPos);
              token.level = level;
              nodes.push(token);
            }
            blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
          }
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/replacements.js
var require_replacements = __commonJS({
  "node_modules/markdown-it/lib/rules_core/replacements.js"(exports, module) {
    var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
    var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;
    var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
    var SCOPED_ABBR = {
      c: "\xA9",
      r: "\xAE",
      p: "\xA7",
      tm: "\u2122"
    };
    function replaceFn(match, name) {
      return SCOPED_ABBR[name.toLowerCase()];
    }
    function replace_scoped(inlineTokens) {
      var i, token, inside_autolink = 0;
      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];
        if (token.type === "text" && !inside_autolink) {
          token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
        }
        if (token.type === "link_open" && token.info === "auto") {
          inside_autolink--;
        }
        if (token.type === "link_close" && token.info === "auto") {
          inside_autolink++;
        }
      }
    }
    function replace_rare(inlineTokens) {
      var i, token, inside_autolink = 0;
      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];
        if (token.type === "text" && !inside_autolink) {
          if (RARE_RE.test(token.content)) {
            token.content = token.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013");
          }
        }
        if (token.type === "link_open" && token.info === "auto") {
          inside_autolink--;
        }
        if (token.type === "link_close" && token.info === "auto") {
          inside_autolink++;
        }
      }
    }
    module.exports = function replace(state) {
      var blkIdx;
      if (!state.md.options.typographer) {
        return;
      }
      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== "inline") {
          continue;
        }
        if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
          replace_scoped(state.tokens[blkIdx].children);
        }
        if (RARE_RE.test(state.tokens[blkIdx].content)) {
          replace_rare(state.tokens[blkIdx].children);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_core/smartquotes.js
var require_smartquotes = __commonJS({
  "node_modules/markdown-it/lib/rules_core/smartquotes.js"(exports, module) {
    var isWhiteSpace = require_utils().isWhiteSpace;
    var isPunctChar = require_utils().isPunctChar;
    var isMdAsciiPunct = require_utils().isMdAsciiPunct;
    var QUOTE_TEST_RE = /['"]/;
    var QUOTE_RE = /['"]/g;
    var APOSTROPHE = "\u2019";
    function replaceAt(str, index, ch) {
      return str.substr(0, index) + ch + str.substr(index + 1);
    }
    function process_inlines(tokens, state) {
      var i, token, text2, t, pos, max2, thisLevel, item2, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
      stack = [];
      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        thisLevel = tokens[i].level;
        for (j = stack.length - 1; j >= 0; j--) {
          if (stack[j].level <= thisLevel) {
            break;
          }
        }
        stack.length = j + 1;
        if (token.type !== "text") {
          continue;
        }
        text2 = token.content;
        pos = 0;
        max2 = text2.length;
        OUTER:
          while (pos < max2) {
            QUOTE_RE.lastIndex = pos;
            t = QUOTE_RE.exec(text2);
            if (!t) {
              break;
            }
            canOpen = canClose = true;
            pos = t.index + 1;
            isSingle = t[0] === "'";
            lastChar = 32;
            if (t.index - 1 >= 0) {
              lastChar = text2.charCodeAt(t.index - 1);
            } else {
              for (j = i - 1; j >= 0; j--) {
                if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                  break;
                if (!tokens[j].content)
                  continue;
                lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
                break;
              }
            }
            nextChar = 32;
            if (pos < max2) {
              nextChar = text2.charCodeAt(pos);
            } else {
              for (j = i + 1; j < tokens.length; j++) {
                if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                  break;
                if (!tokens[j].content)
                  continue;
                nextChar = tokens[j].content.charCodeAt(0);
                break;
              }
            }
            isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
            isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
            isLastWhiteSpace = isWhiteSpace(lastChar);
            isNextWhiteSpace = isWhiteSpace(nextChar);
            if (isNextWhiteSpace) {
              canOpen = false;
            } else if (isNextPunctChar) {
              if (!(isLastWhiteSpace || isLastPunctChar)) {
                canOpen = false;
              }
            }
            if (isLastWhiteSpace) {
              canClose = false;
            } else if (isLastPunctChar) {
              if (!(isNextWhiteSpace || isNextPunctChar)) {
                canClose = false;
              }
            }
            if (nextChar === 34 && t[0] === '"') {
              if (lastChar >= 48 && lastChar <= 57) {
                canClose = canOpen = false;
              }
            }
            if (canOpen && canClose) {
              canOpen = isLastPunctChar;
              canClose = isNextPunctChar;
            }
            if (!canOpen && !canClose) {
              if (isSingle) {
                token.content = replaceAt(token.content, t.index, APOSTROPHE);
              }
              continue;
            }
            if (canClose) {
              for (j = stack.length - 1; j >= 0; j--) {
                item2 = stack[j];
                if (stack[j].level < thisLevel) {
                  break;
                }
                if (item2.single === isSingle && stack[j].level === thisLevel) {
                  item2 = stack[j];
                  if (isSingle) {
                    openQuote = state.md.options.quotes[2];
                    closeQuote = state.md.options.quotes[3];
                  } else {
                    openQuote = state.md.options.quotes[0];
                    closeQuote = state.md.options.quotes[1];
                  }
                  token.content = replaceAt(token.content, t.index, closeQuote);
                  tokens[item2.token].content = replaceAt(tokens[item2.token].content, item2.pos, openQuote);
                  pos += closeQuote.length - 1;
                  if (item2.token === i) {
                    pos += openQuote.length - 1;
                  }
                  text2 = token.content;
                  max2 = text2.length;
                  stack.length = j;
                  continue OUTER;
                }
              }
            }
            if (canOpen) {
              stack.push({
                token: i,
                pos: t.index,
                single: isSingle,
                level: thisLevel
              });
            } else if (canClose && isSingle) {
              token.content = replaceAt(token.content, t.index, APOSTROPHE);
            }
          }
      }
    }
    module.exports = function smartquotes(state) {
      var blkIdx;
      if (!state.md.options.typographer) {
        return;
      }
      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
          continue;
        }
        process_inlines(state.tokens[blkIdx].children, state);
      }
    };
  }
});

// node_modules/markdown-it/lib/token.js
var require_token = __commonJS({
  "node_modules/markdown-it/lib/token.js"(exports, module) {
    function Token(type, tag, nesting) {
      this.type = type;
      this.tag = tag;
      this.attrs = null;
      this.map = null;
      this.nesting = nesting;
      this.level = 0;
      this.children = null;
      this.content = "";
      this.markup = "";
      this.info = "";
      this.meta = null;
      this.block = false;
      this.hidden = false;
    }
    Token.prototype.attrIndex = function attrIndex(name) {
      var attrs, i, len;
      if (!this.attrs) {
        return -1;
      }
      attrs = this.attrs;
      for (i = 0, len = attrs.length; i < len; i++) {
        if (attrs[i][0] === name) {
          return i;
        }
      }
      return -1;
    };
    Token.prototype.attrPush = function attrPush(attrData) {
      if (this.attrs) {
        this.attrs.push(attrData);
      } else {
        this.attrs = [attrData];
      }
    };
    Token.prototype.attrSet = function attrSet(name, value) {
      var idx = this.attrIndex(name), attrData = [name, value];
      if (idx < 0) {
        this.attrPush(attrData);
      } else {
        this.attrs[idx] = attrData;
      }
    };
    Token.prototype.attrGet = function attrGet(name) {
      var idx = this.attrIndex(name), value = null;
      if (idx >= 0) {
        value = this.attrs[idx][1];
      }
      return value;
    };
    Token.prototype.attrJoin = function attrJoin(name, value) {
      var idx = this.attrIndex(name);
      if (idx < 0) {
        this.attrPush([name, value]);
      } else {
        this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
      }
    };
    module.exports = Token;
  }
});

// node_modules/markdown-it/lib/rules_core/state_core.js
var require_state_core = __commonJS({
  "node_modules/markdown-it/lib/rules_core/state_core.js"(exports, module) {
    var Token = require_token();
    function StateCore(src, md, env) {
      this.src = src;
      this.env = env;
      this.tokens = [];
      this.inlineMode = false;
      this.md = md;
    }
    StateCore.prototype.Token = Token;
    module.exports = StateCore;
  }
});

// node_modules/markdown-it/lib/parser_core.js
var require_parser_core = __commonJS({
  "node_modules/markdown-it/lib/parser_core.js"(exports, module) {
    var Ruler = require_ruler();
    var _rules = [
      ["normalize", require_normalize()],
      ["block", require_block()],
      ["inline", require_inline()],
      ["linkify", require_linkify()],
      ["replacements", require_replacements()],
      ["smartquotes", require_smartquotes()]
    ];
    function Core() {
      this.ruler = new Ruler();
      for (var i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1]);
      }
    }
    Core.prototype.process = function(state) {
      var i, l, rules;
      rules = this.ruler.getRules("");
      for (i = 0, l = rules.length; i < l; i++) {
        rules[i](state);
      }
    };
    Core.prototype.State = require_state_core();
    module.exports = Core;
  }
});

// node_modules/markdown-it/lib/rules_block/table.js
var require_table = __commonJS({
  "node_modules/markdown-it/lib/rules_block/table.js"(exports, module) {
    var isSpace = require_utils().isSpace;
    function getLine2(state, line) {
      var pos = state.bMarks[line] + state.tShift[line], max2 = state.eMarks[line];
      return state.src.substr(pos, max2 - pos);
    }
    function escapedSplit(str) {
      var result = [], pos = 0, max2 = str.length, ch, isEscaped = false, lastPos = 0, current = "";
      ch = str.charCodeAt(pos);
      while (pos < max2) {
        if (ch === 124) {
          if (!isEscaped) {
            result.push(current + str.substring(lastPos, pos));
            current = "";
            lastPos = pos + 1;
          } else {
            current += str.substring(lastPos, pos - 1);
            lastPos = pos;
          }
        }
        isEscaped = ch === 92;
        pos++;
        ch = str.charCodeAt(pos);
      }
      result.push(current + str.substring(lastPos));
      return result;
    }
    module.exports = function table3(state, startLine, endLine, silent) {
      var ch, lineText, pos, i, l, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
      if (startLine + 2 > endLine) {
        return false;
      }
      nextLine = startLine + 1;
      if (state.sCount[nextLine] < state.blkIndent) {
        return false;
      }
      if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent >= 4) {
        return false;
      }
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      if (pos >= state.eMarks[nextLine]) {
        return false;
      }
      firstCh = state.src.charCodeAt(pos++);
      if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
        return false;
      }
      if (pos >= state.eMarks[nextLine]) {
        return false;
      }
      secondCh = state.src.charCodeAt(pos++);
      if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) {
        return false;
      }
      if (firstCh === 45 && isSpace(secondCh)) {
        return false;
      }
      while (pos < state.eMarks[nextLine]) {
        ch = state.src.charCodeAt(pos);
        if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
          return false;
        }
        pos++;
      }
      lineText = getLine2(state, startLine + 1);
      columns = lineText.split("|");
      aligns = [];
      for (i = 0; i < columns.length; i++) {
        t = columns[i].trim();
        if (!t) {
          if (i === 0 || i === columns.length - 1) {
            continue;
          } else {
            return false;
          }
        }
        if (!/^:?-+:?$/.test(t)) {
          return false;
        }
        if (t.charCodeAt(t.length - 1) === 58) {
          aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
        } else if (t.charCodeAt(0) === 58) {
          aligns.push("left");
        } else {
          aligns.push("");
        }
      }
      lineText = getLine2(state, startLine).trim();
      if (lineText.indexOf("|") === -1) {
        return false;
      }
      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      columns = escapedSplit(lineText);
      if (columns.length && columns[0] === "")
        columns.shift();
      if (columns.length && columns[columns.length - 1] === "")
        columns.pop();
      columnCount = columns.length;
      if (columnCount === 0 || columnCount !== aligns.length) {
        return false;
      }
      if (silent) {
        return true;
      }
      oldParentType = state.parentType;
      state.parentType = "table";
      terminatorRules = state.md.block.ruler.getRules("blockquote");
      token = state.push("table_open", "table", 1);
      token.map = tableLines = [startLine, 0];
      token = state.push("thead_open", "thead", 1);
      token.map = [startLine, startLine + 1];
      token = state.push("tr_open", "tr", 1);
      token.map = [startLine, startLine + 1];
      for (i = 0; i < columns.length; i++) {
        token = state.push("th_open", "th", 1);
        if (aligns[i]) {
          token.attrs = [["style", "text-align:" + aligns[i]]];
        }
        token = state.push("inline", "", 0);
        token.content = columns[i].trim();
        token.children = [];
        token = state.push("th_close", "th", -1);
      }
      token = state.push("tr_close", "tr", -1);
      token = state.push("thead_close", "thead", -1);
      for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
        lineText = getLine2(state, nextLine).trim();
        if (!lineText) {
          break;
        }
        if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent >= 4) {
          break;
        }
        columns = escapedSplit(lineText);
        if (columns.length && columns[0] === "")
          columns.shift();
        if (columns.length && columns[columns.length - 1] === "")
          columns.pop();
        if (nextLine === startLine + 2) {
          token = state.push("tbody_open", "tbody", 1);
          token.map = tbodyLines = [startLine + 2, 0];
        }
        token = state.push("tr_open", "tr", 1);
        token.map = [nextLine, nextLine + 1];
        for (i = 0; i < columnCount; i++) {
          token = state.push("td_open", "td", 1);
          if (aligns[i]) {
            token.attrs = [["style", "text-align:" + aligns[i]]];
          }
          token = state.push("inline", "", 0);
          token.content = columns[i] ? columns[i].trim() : "";
          token.children = [];
          token = state.push("td_close", "td", -1);
        }
        token = state.push("tr_close", "tr", -1);
      }
      if (tbodyLines) {
        token = state.push("tbody_close", "tbody", -1);
        tbodyLines[1] = nextLine;
      }
      token = state.push("table_close", "table", -1);
      tableLines[1] = nextLine;
      state.parentType = oldParentType;
      state.line = nextLine;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/code.js
var require_code = __commonJS({
  "node_modules/markdown-it/lib/rules_block/code.js"(exports, module) {
    module.exports = function code2(state, startLine, endLine) {
      if (state.md.options.allowIndentation) {
        return false;
      }
      var nextLine, last, token;
      if (state.sCount[startLine] - state.blkIndent < 4) {
        return false;
      }
      last = nextLine = startLine + 1;
      while (nextLine < endLine) {
        if (state.isEmpty(nextLine)) {
          nextLine++;
          continue;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          nextLine++;
          last = nextLine;
          continue;
        }
        break;
      }
      state.line = last;
      token = state.push("code_block", "code", 0);
      token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
      token.map = [startLine, state.line];
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/fence.js
var require_fence = __commonJS({
  "node_modules/markdown-it/lib/rules_block/fence.js"(exports, module) {
    module.exports = function fence3(state, startLine, endLine, silent) {
      var marker, len, params, nextLine, mem, token, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (pos + 3 > max2) {
        return false;
      }
      marker = state.src.charCodeAt(pos);
      if (marker !== 126 && marker !== 96) {
        return false;
      }
      mem = pos;
      pos = state.skipChars(pos, marker);
      len = pos - mem;
      if (len < 3) {
        return false;
      }
      markup = state.src.slice(mem, pos);
      params = state.src.slice(pos, max2);
      if (marker === 96) {
        if (params.indexOf(String.fromCharCode(marker)) >= 0) {
          return false;
        }
      }
      if (silent) {
        return true;
      }
      nextLine = startLine;
      for (; ; ) {
        nextLine++;
        if (nextLine >= endLine) {
          break;
        }
        pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
        max2 = state.eMarks[nextLine];
        if (pos < max2 && state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        if (state.src.charCodeAt(pos) !== marker) {
          continue;
        }
        if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent >= 4) {
          continue;
        }
        pos = state.skipChars(pos, marker);
        if (pos - mem < len) {
          continue;
        }
        pos = state.skipSpaces(pos);
        if (pos < max2) {
          continue;
        }
        haveEndMarker = true;
        break;
      }
      len = state.sCount[startLine];
      state.line = nextLine + (haveEndMarker ? 1 : 0);
      token = state.push("fence", "code", 0);
      token.info = params;
      token.content = state.getLines(startLine + 1, nextLine, len, true);
      token.markup = markup;
      token.map = [startLine, state.line];
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/blockquote.js
var require_blockquote = __commonJS({
  "node_modules/markdown-it/lib/rules_block/blockquote.js"(exports, module) {
    var isSpace = require_utils().isSpace;
    module.exports = function blockquote2(state, startLine, endLine, silent) {
      var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (state.src.charCodeAt(pos++) !== 62) {
        return false;
      }
      if (silent) {
        return true;
      }
      initial = offset = state.sCount[startLine] + 1;
      if (state.src.charCodeAt(pos) === 32) {
        pos++;
        initial++;
        offset++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 9) {
        spaceAfterMarker = true;
        if ((state.bsCount[startLine] + offset) % 4 === 3) {
          pos++;
          initial++;
          offset++;
          adjustTab = false;
        } else {
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }
      oldBMarks = [state.bMarks[startLine]];
      state.bMarks[startLine] = pos;
      while (pos < max2) {
        ch = state.src.charCodeAt(pos);
        if (isSpace(ch)) {
          if (ch === 9) {
            offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }
        pos++;
      }
      oldBSCount = [state.bsCount[startLine]];
      state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
      lastLineEmpty = pos >= max2;
      oldSCount = [state.sCount[startLine]];
      state.sCount[startLine] = offset - initial;
      oldTShift = [state.tShift[startLine]];
      state.tShift[startLine] = pos - state.bMarks[startLine];
      terminatorRules = state.md.block.ruler.getRules("blockquote");
      oldParentType = state.parentType;
      state.parentType = "blockquote";
      for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
        isOutdented = state.sCount[nextLine] < state.blkIndent;
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max2 = state.eMarks[nextLine];
        if (pos >= max2) {
          break;
        }
        if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
          initial = offset = state.sCount[nextLine] + 1;
          if (state.src.charCodeAt(pos) === 32) {
            pos++;
            initial++;
            offset++;
            adjustTab = false;
            spaceAfterMarker = true;
          } else if (state.src.charCodeAt(pos) === 9) {
            spaceAfterMarker = true;
            if ((state.bsCount[nextLine] + offset) % 4 === 3) {
              pos++;
              initial++;
              offset++;
              adjustTab = false;
            } else {
              adjustTab = true;
            }
          } else {
            spaceAfterMarker = false;
          }
          oldBMarks.push(state.bMarks[nextLine]);
          state.bMarks[nextLine] = pos;
          while (pos < max2) {
            ch = state.src.charCodeAt(pos);
            if (isSpace(ch)) {
              if (ch === 9) {
                offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
              } else {
                offset++;
              }
            } else {
              break;
            }
            pos++;
          }
          lastLineEmpty = pos >= max2;
          oldBSCount.push(state.bsCount[nextLine]);
          state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] = offset - initial;
          oldTShift.push(state.tShift[nextLine]);
          state.tShift[nextLine] = pos - state.bMarks[nextLine];
          continue;
        }
        if (lastLineEmpty) {
          break;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          state.lineMax = nextLine;
          if (state.blkIndent !== 0) {
            oldBMarks.push(state.bMarks[nextLine]);
            oldBSCount.push(state.bsCount[nextLine]);
            oldTShift.push(state.tShift[nextLine]);
            oldSCount.push(state.sCount[nextLine]);
            state.sCount[nextLine] -= state.blkIndent;
          }
          break;
        }
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] = -1;
      }
      oldIndent = state.blkIndent;
      state.blkIndent = 0;
      token = state.push("blockquote_open", "blockquote", 1);
      token.markup = ">";
      token.map = lines = [startLine, 0];
      state.md.block.tokenize(state, startLine, nextLine);
      token = state.push("blockquote_close", "blockquote", -1);
      token.markup = ">";
      state.lineMax = oldLineMax;
      state.parentType = oldParentType;
      lines[1] = state.line;
      for (i = 0; i < oldTShift.length; i++) {
        state.bMarks[i + startLine] = oldBMarks[i];
        state.tShift[i + startLine] = oldTShift[i];
        state.sCount[i + startLine] = oldSCount[i];
        state.bsCount[i + startLine] = oldBSCount[i];
      }
      state.blkIndent = oldIndent;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/hr.js
var require_hr = __commonJS({
  "node_modules/markdown-it/lib/rules_block/hr.js"(exports, module) {
    var isSpace = require_utils().isSpace;
    module.exports = function hr2(state, startLine, endLine, silent) {
      var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      marker = state.src.charCodeAt(pos++);
      if (marker !== 42 && marker !== 45 && marker !== 95) {
        return false;
      }
      cnt = 1;
      while (pos < max2) {
        ch = state.src.charCodeAt(pos++);
        if (ch !== marker && !isSpace(ch)) {
          return false;
        }
        if (ch === marker) {
          cnt++;
        }
      }
      if (cnt < 3) {
        return false;
      }
      if (silent) {
        return true;
      }
      state.line = startLine + 1;
      token = state.push("hr", "hr", 0);
      token.map = [startLine, state.line];
      token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/list.js
var require_list = __commonJS({
  "node_modules/markdown-it/lib/rules_block/list.js"(exports, module) {
    var isSpace = require_utils().isSpace;
    function skipBulletListMarker(state, startLine) {
      var marker, pos, max2, ch;
      pos = state.bMarks[startLine] + state.tShift[startLine];
      max2 = state.eMarks[startLine];
      marker = state.src.charCodeAt(pos++);
      if (marker !== 42 && marker !== 45 && marker !== 43) {
        return -1;
      }
      if (pos < max2) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          return -1;
        }
      }
      return pos;
    }
    function skipOrderedListMarker(state, startLine) {
      var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max2 = state.eMarks[startLine];
      if (pos + 1 >= max2) {
        return -1;
      }
      ch = state.src.charCodeAt(pos++);
      if (ch < 48 || ch > 57) {
        return -1;
      }
      for (; ; ) {
        if (pos >= max2) {
          return -1;
        }
        ch = state.src.charCodeAt(pos++);
        if (ch >= 48 && ch <= 57) {
          if (pos - start >= 10) {
            return -1;
          }
          continue;
        }
        if (ch === 41 || ch === 46) {
          break;
        }
        return -1;
      }
      if (pos < max2) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          return -1;
        }
      }
      return pos;
    }
    function markTightParagraphs(state, idx) {
      var i, l, level = state.level + 2;
      for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
        if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
          state.tokens[i + 2].hidden = true;
          state.tokens[i].hidden = true;
          i += 2;
        }
      }
    }
    module.exports = function list2(state, startLine, endLine, silent) {
      var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max2, nextLine, offset, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token, isTerminatingParagraph = false, tight = true;
      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (!state.md.options.allowIndentation && state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
        return false;
      }
      if (silent && state.parentType === "paragraph") {
        if (state.sCount[startLine] >= state.blkIndent) {
          isTerminatingParagraph = true;
        }
      }
      if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
        isOrdered = true;
        start = state.bMarks[startLine] + state.tShift[startLine];
        markerValue = Number(state.src.slice(start, posAfterMarker - 1));
        if (isTerminatingParagraph && markerValue !== 1)
          return false;
      } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
        isOrdered = false;
      } else {
        return false;
      }
      if (isTerminatingParagraph) {
        if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine])
          return false;
      }
      markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
      if (silent) {
        return true;
      }
      listTokIdx = state.tokens.length;
      if (isOrdered) {
        token = state.push("ordered_list_open", "ol", 1);
        if (markerValue !== 1) {
          token.attrs = [["start", markerValue]];
        }
      } else {
        token = state.push("bullet_list_open", "ul", 1);
      }
      token.map = listLines = [startLine, 0];
      token.markup = String.fromCharCode(markerCharCode);
      nextLine = startLine;
      prevEmptyEnd = false;
      terminatorRules = state.md.block.ruler.getRules("list");
      oldParentType = state.parentType;
      state.parentType = "list";
      while (nextLine < endLine) {
        pos = posAfterMarker;
        max2 = state.eMarks[nextLine];
        initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
        while (pos < max2) {
          ch = state.src.charCodeAt(pos);
          if (ch === 9) {
            offset += 4 - (offset + state.bsCount[nextLine]) % 4;
          } else if (ch === 32) {
            offset++;
          } else {
            break;
          }
          pos++;
        }
        contentStart = pos;
        if (contentStart >= max2) {
          indentAfterMarker = 1;
        } else {
          indentAfterMarker = offset - initial;
        }
        if (!state.md.options.allowIndentation && indentAfterMarker > 4) {
          indentAfterMarker = 1;
        }
        indent = initial + indentAfterMarker;
        token = state.push("list_item_open", "li", 1);
        token.markup = String.fromCharCode(markerCharCode);
        token.map = itemLines = [startLine, 0];
        if (isOrdered) {
          token.info = state.src.slice(start, posAfterMarker - 1);
        }
        oldTight = state.tight;
        oldTShift = state.tShift[startLine];
        oldSCount = state.sCount[startLine];
        oldListIndent = state.listIndent;
        state.listIndent = state.blkIndent;
        state.blkIndent = indent;
        state.tight = true;
        state.tShift[startLine] = contentStart - state.bMarks[startLine];
        state.sCount[startLine] = offset;
        if (contentStart >= max2 && state.isEmpty(startLine + 1)) {
          state.line = Math.min(state.line + 2, endLine);
        } else {
          state.md.block.tokenize(state, startLine, endLine, true);
        }
        if (!state.tight || prevEmptyEnd) {
          tight = false;
        }
        prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
        state.blkIndent = state.listIndent;
        state.listIndent = oldListIndent;
        state.tShift[startLine] = oldTShift;
        state.sCount[startLine] = oldSCount;
        state.tight = oldTight;
        token = state.push("list_item_close", "li", -1);
        token.markup = String.fromCharCode(markerCharCode);
        nextLine = startLine = state.line;
        itemLines[1] = nextLine;
        contentStart = state.bMarks[startLine];
        if (nextLine >= endLine) {
          break;
        }
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }
        if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
          break;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
        if (isOrdered) {
          posAfterMarker = skipOrderedListMarker(state, nextLine);
          if (posAfterMarker < 0) {
            break;
          }
          start = state.bMarks[nextLine] + state.tShift[nextLine];
        } else {
          posAfterMarker = skipBulletListMarker(state, nextLine);
          if (posAfterMarker < 0) {
            break;
          }
        }
        if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
          break;
        }
      }
      if (isOrdered) {
        token = state.push("ordered_list_close", "ol", -1);
      } else {
        token = state.push("bullet_list_close", "ul", -1);
      }
      token.markup = String.fromCharCode(markerCharCode);
      listLines[1] = nextLine;
      state.line = nextLine;
      state.parentType = oldParentType;
      if (tight) {
        markTightParagraphs(state, listTokIdx);
      }
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/reference.js
var require_reference = __commonJS({
  "node_modules/markdown-it/lib/rules_block/reference.js"(exports, module) {
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = function reference(state, startLine, _endLine, silent) {
      var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine], nextLine = startLine + 1;
      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (state.src.charCodeAt(pos) !== 91) {
        return false;
      }
      while (++pos < max2) {
        if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
          if (pos + 1 === max2) {
            return false;
          }
          if (state.src.charCodeAt(pos + 1) !== 58) {
            return false;
          }
          break;
        }
      }
      endLine = state.lineMax;
      terminatorRules = state.md.block.ruler.getRules("reference");
      oldParentType = state.parentType;
      state.parentType = "reference";
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      max2 = str.length;
      for (pos = 1; pos < max2; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 91) {
          return false;
        } else if (ch === 93) {
          labelEnd = pos;
          break;
        } else if (ch === 10) {
          lines++;
        } else if (ch === 92) {
          pos++;
          if (pos < max2 && str.charCodeAt(pos) === 10) {
            lines++;
          }
        }
      }
      if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
        return false;
      }
      for (pos = labelEnd + 2; pos < max2; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 10) {
          lines++;
        } else if (isSpace(ch)) ; else {
          break;
        }
      }
      res = state.md.helpers.parseLinkDestination(str, pos, max2);
      if (!res.ok) {
        return false;
      }
      href = state.md.normalizeLink(res.str);
      if (!state.md.validateLink(href)) {
        return false;
      }
      pos = res.pos;
      lines += res.lines;
      destEndPos = pos;
      destEndLineNo = lines;
      start = pos;
      for (; pos < max2; pos++) {
        ch = str.charCodeAt(pos);
        if (ch === 10) {
          lines++;
        } else if (isSpace(ch)) ; else {
          break;
        }
      }
      res = state.md.helpers.parseLinkTitle(str, pos, max2);
      if (pos < max2 && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        lines += res.lines;
      } else {
        title = "";
        pos = destEndPos;
        lines = destEndLineNo;
      }
      while (pos < max2) {
        ch = str.charCodeAt(pos);
        if (!isSpace(ch)) {
          break;
        }
        pos++;
      }
      if (pos < max2 && str.charCodeAt(pos) !== 10) {
        if (title) {
          title = "";
          pos = destEndPos;
          lines = destEndLineNo;
          while (pos < max2) {
            ch = str.charCodeAt(pos);
            if (!isSpace(ch)) {
              break;
            }
            pos++;
          }
        }
      }
      if (pos < max2 && str.charCodeAt(pos) !== 10) {
        return false;
      }
      label = normalizeReference(str.slice(1, labelEnd));
      if (!label) {
        return false;
      }
      if (silent) {
        return true;
      }
      if (typeof state.env.references === "undefined") {
        state.env.references = {};
      }
      if (typeof state.env.references[label] === "undefined") {
        state.env.references[label] = { title, href };
      }
      state.parentType = oldParentType;
      state.line = startLine + lines + 1;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/common/html_blocks.js
var require_html_blocks = __commonJS({
  "node_modules/markdown-it/lib/common/html_blocks.js"(exports, module) {
    module.exports = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "section",
      "source",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul"
    ];
  }
});

// node_modules/markdown-it/lib/common/html_re.js
var require_html_re = __commonJS({
  "node_modules/markdown-it/lib/common/html_re.js"(exports, module) {
    var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
    var unquoted = "[^\"'=<>`\\x00-\\x20]+";
    var single_quoted = "'[^']*'";
    var double_quoted = '"[^"]*"';
    var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
    var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
    var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
    var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
    var comment2 = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
    var processing = "<[?][\\s\\S]*?[?]>";
    var declaration = "<![A-Z]+\\s+[^>]*>";
    var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
    var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment2 + "|" + processing + "|" + declaration + "|" + cdata + ")");
    var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
    module.exports.HTML_TAG_RE = HTML_TAG_RE;
    module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
  }
});

// node_modules/markdown-it/lib/rules_block/html_block.js
var require_html_block = __commonJS({
  "node_modules/markdown-it/lib/rules_block/html_block.js"(exports, module) {
    var block_names = require_html_blocks();
    var HTML_OPEN_CLOSE_TAG_RE = require_html_re().HTML_OPEN_CLOSE_TAG_RE;
    var HTML_SEQUENCES = [
      [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
      [/^<!--/, /-->/, true],
      [/^<\?/, /\?>/, true],
      [/^<![A-Z]/, />/, true],
      [/^<!\[CDATA\[/, /\]\]>/, true],
      [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
      [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
    ];
    module.exports = function html_block(state, startLine, endLine, silent) {
      var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      if (!state.md.options.html) {
        return false;
      }
      if (state.src.charCodeAt(pos) !== 60) {
        return false;
      }
      lineText = state.src.slice(pos, max2);
      for (i = 0; i < HTML_SEQUENCES.length; i++) {
        if (HTML_SEQUENCES[i][0].test(lineText)) {
          break;
        }
      }
      if (i === HTML_SEQUENCES.length) {
        return false;
      }
      if (silent) {
        return HTML_SEQUENCES[i][2];
      }
      nextLine = startLine + 1;
      if (!HTML_SEQUENCES[i][1].test(lineText)) {
        for (; nextLine < endLine; nextLine++) {
          if (state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max2 = state.eMarks[nextLine];
          lineText = state.src.slice(pos, max2);
          if (HTML_SEQUENCES[i][1].test(lineText)) {
            if (lineText.length !== 0) {
              nextLine++;
            }
            break;
          }
        }
      }
      state.line = nextLine;
      token = state.push("html_block", "", 0);
      token.map = [startLine, nextLine];
      token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/heading.js
var require_heading = __commonJS({
  "node_modules/markdown-it/lib/rules_block/heading.js"(exports, module) {
    var isSpace = require_utils().isSpace;
    module.exports = function heading2(state, startLine, endLine, silent) {
      var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      ch = state.src.charCodeAt(pos);
      if (ch !== 35 || pos >= max2) {
        return false;
      }
      level = 1;
      ch = state.src.charCodeAt(++pos);
      while (ch === 35 && pos < max2 && level <= 6) {
        level++;
        ch = state.src.charCodeAt(++pos);
      }
      if (level > 6 || pos < max2 && !isSpace(ch)) {
        return false;
      }
      if (silent) {
        return true;
      }
      max2 = state.skipSpacesBack(max2, pos);
      tmp = state.skipCharsBack(max2, 35, pos);
      if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
        max2 = tmp;
      }
      state.line = startLine + 1;
      token = state.push("heading_open", "h" + String(level), 1);
      token.markup = "########".slice(0, level);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = state.src.slice(pos, max2).trim();
      token.map = [startLine, state.line];
      token.children = [];
      token = state.push("heading_close", "h" + String(level), -1);
      token.markup = "########".slice(0, level);
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/lheading.js
var require_lheading = __commonJS({
  "node_modules/markdown-it/lib/rules_block/lheading.js"(exports, module) {
    module.exports = function lheading(state, startLine, endLine) {
      var content, terminate, i, l, token, pos, max2, level, marker, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }
      oldParentType = state.parentType;
      state.parentType = "paragraph";
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] >= state.blkIndent) {
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max2 = state.eMarks[nextLine];
          if (pos < max2) {
            marker = state.src.charCodeAt(pos);
            if (marker === 45 || marker === 61) {
              pos = state.skipChars(pos, marker);
              pos = state.skipSpaces(pos);
              if (pos >= max2) {
                level = marker === 61 ? 1 : 2;
                break;
              }
            }
          }
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      if (!level) {
        return false;
      }
      content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      state.line = nextLine + 1;
      token = state.push("heading_open", "h" + String(level), 1);
      token.markup = String.fromCharCode(marker);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = content;
      token.map = [startLine, state.line - 1];
      token.children = [];
      token = state.push("heading_close", "h" + String(level), -1);
      token.markup = String.fromCharCode(marker);
      state.parentType = oldParentType;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/paragraph.js
var require_paragraph = __commonJS({
  "node_modules/markdown-it/lib/rules_block/paragraph.js"(exports, module) {
    module.exports = function paragraph2(state, startLine) {
      var content, terminate, i, l, token, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
      oldParentType = state.parentType;
      state.parentType = "paragraph";
      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }
        if (state.sCount[nextLine] < 0) {
          continue;
        }
        terminate = false;
        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }
        if (terminate) {
          break;
        }
      }
      content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      state.line = nextLine;
      token = state.push("paragraph_open", "p", 1);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = content;
      token.map = [startLine, state.line];
      token.children = [];
      token = state.push("paragraph_close", "p", -1);
      state.parentType = oldParentType;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_block/state_block.js
var require_state_block = __commonJS({
  "node_modules/markdown-it/lib/rules_block/state_block.js"(exports, module) {
    var Token = require_token();
    var isSpace = require_utils().isSpace;
    function StateBlock(src, md, env, tokens) {
      var ch, s2, start, pos, len, indent, offset, indent_found;
      this.src = src;
      this.md = md;
      this.env = env;
      this.tokens = tokens;
      this.bMarks = [];
      this.eMarks = [];
      this.tShift = [];
      this.sCount = [];
      this.bsCount = [];
      this.blkIndent = 0;
      this.line = 0;
      this.lineMax = 0;
      this.tight = false;
      this.ddIndent = -1;
      this.listIndent = -1;
      this.parentType = "root";
      this.level = 0;
      this.result = "";
      s2 = this.src;
      indent_found = false;
      for (start = pos = indent = offset = 0, len = s2.length; pos < len; pos++) {
        ch = s2.charCodeAt(pos);
        if (!indent_found) {
          if (isSpace(ch)) {
            indent++;
            if (ch === 9) {
              offset += 4 - offset % 4;
            } else {
              offset++;
            }
            continue;
          } else {
            indent_found = true;
          }
        }
        if (ch === 10 || pos === len - 1) {
          if (ch !== 10) {
            pos++;
          }
          this.bMarks.push(start);
          this.eMarks.push(pos);
          this.tShift.push(indent);
          this.sCount.push(offset);
          this.bsCount.push(0);
          indent_found = false;
          indent = 0;
          offset = 0;
          start = pos + 1;
        }
      }
      this.bMarks.push(s2.length);
      this.eMarks.push(s2.length);
      this.tShift.push(0);
      this.sCount.push(0);
      this.bsCount.push(0);
      this.lineMax = this.bMarks.length - 1;
    }
    StateBlock.prototype.push = function(type, tag, nesting) {
      var token = new Token(type, tag, nesting);
      token.block = true;
      if (nesting < 0)
        this.level--;
      token.level = this.level;
      if (nesting > 0)
        this.level++;
      this.tokens.push(token);
      return token;
    };
    StateBlock.prototype.isEmpty = function isEmpty(line) {
      return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
    };
    StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
      for (var max2 = this.lineMax; from < max2; from++) {
        if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
          break;
        }
      }
      return from;
    };
    StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
      var ch;
      for (var max2 = this.src.length; pos < max2; pos++) {
        ch = this.src.charCodeAt(pos);
        if (!isSpace(ch)) {
          break;
        }
      }
      return pos;
    };
    StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
      if (pos <= min) {
        return pos;
      }
      while (pos > min) {
        if (!isSpace(this.src.charCodeAt(--pos))) {
          return pos + 1;
        }
      }
      return pos;
    };
    StateBlock.prototype.skipChars = function skipChars(pos, code2) {
      for (var max2 = this.src.length; pos < max2; pos++) {
        if (this.src.charCodeAt(pos) !== code2) {
          break;
        }
      }
      return pos;
    };
    StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code2, min) {
      if (pos <= min) {
        return pos;
      }
      while (pos > min) {
        if (code2 !== this.src.charCodeAt(--pos)) {
          return pos + 1;
        }
      }
      return pos;
    };
    StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
      var i, lineIndent, ch, first, last, queue, lineStart, line = begin;
      if (begin >= end) {
        return "";
      }
      queue = new Array(end - begin);
      for (i = 0; line < end; line++, i++) {
        lineIndent = 0;
        lineStart = first = this.bMarks[line];
        if (line + 1 < end || keepLastLF) {
          last = this.eMarks[line] + 1;
        } else {
          last = this.eMarks[line];
        }
        while (first < last && lineIndent < indent) {
          ch = this.src.charCodeAt(first);
          if (isSpace(ch)) {
            if (ch === 9) {
              lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
            } else {
              lineIndent++;
            }
          } else if (first - lineStart < this.tShift[line]) {
            lineIndent++;
          } else {
            break;
          }
          first++;
        }
        if (lineIndent > indent) {
          queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
        } else {
          queue[i] = this.src.slice(first, last);
        }
      }
      return queue.join("");
    };
    StateBlock.prototype.Token = Token;
    module.exports = StateBlock;
  }
});

// node_modules/markdown-it/lib/parser_block.js
var require_parser_block = __commonJS({
  "node_modules/markdown-it/lib/parser_block.js"(exports, module) {
    var Ruler = require_ruler();
    var _rules = [
      ["table", require_table(), ["paragraph", "reference"]],
      ["code", require_code()],
      ["fence", require_fence(), ["paragraph", "reference", "blockquote", "list"]],
      ["blockquote", require_blockquote(), ["paragraph", "reference", "blockquote", "list"]],
      ["hr", require_hr(), ["paragraph", "reference", "blockquote", "list"]],
      ["list", require_list(), ["paragraph", "reference", "blockquote"]],
      ["reference", require_reference()],
      ["html_block", require_html_block(), ["paragraph", "reference", "blockquote"]],
      ["heading", require_heading(), ["paragraph", "reference", "blockquote"]],
      ["lheading", require_lheading()],
      ["paragraph", require_paragraph()]
    ];
    function ParserBlock() {
      this.ruler = new Ruler();
      for (var i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
      }
    }
    ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
      var ok, i, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
      while (line < endLine) {
        state.line = line = state.skipEmptyLines(line);
        if (line >= endLine) {
          break;
        }
        if (state.sCount[line] < state.blkIndent) {
          break;
        }
        if (state.level >= maxNesting) {
          state.line = endLine;
          break;
        }
        for (i = 0; i < len; i++) {
          ok = rules[i](state, line, endLine, false);
          if (ok) {
            break;
          }
        }
        state.tight = !hasEmptyLines;
        if (state.isEmpty(state.line - 1)) {
          hasEmptyLines = true;
        }
        line = state.line;
        if (line < endLine && state.isEmpty(line)) {
          hasEmptyLines = true;
          line++;
          state.line = line;
        }
      }
    };
    ParserBlock.prototype.parse = function(src, md, env, outTokens) {
      var state;
      if (!src) {
        return;
      }
      state = new this.State(src, md, env, outTokens);
      this.tokenize(state, state.line, state.lineMax);
    };
    ParserBlock.prototype.State = require_state_block();
    module.exports = ParserBlock;
  }
});

// node_modules/markdown-it/lib/rules_inline/text.js
var require_text = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/text.js"(exports, module) {
    function isTerminatorChar(ch) {
      switch (ch) {
        case 10:
        case 33:
        case 35:
        case 36:
        case 37:
        case 38:
        case 42:
        case 43:
        case 45:
        case 58:
        case 60:
        case 61:
        case 62:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }
    module.exports = function text2(state, silent) {
      var pos = state.pos;
      while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
        pos++;
      }
      if (pos === state.pos) {
        return false;
      }
      if (!silent) {
        state.pending += state.src.slice(state.pos, pos);
      }
      state.pos = pos;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/newline.js
var require_newline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/newline.js"(exports, module) {
    var isSpace = require_utils().isSpace;
    module.exports = function newline(state, silent) {
      var pmax, max2, ws, pos = state.pos;
      if (state.src.charCodeAt(pos) !== 10) {
        return false;
      }
      pmax = state.pending.length - 1;
      max2 = state.posMax;
      if (!silent) {
        if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
          if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
            ws = pmax - 1;
            while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
              ws--;
            state.pending = state.pending.slice(0, ws);
            state.push("hardbreak", "br", 0);
          } else {
            state.pending = state.pending.slice(0, -1);
            state.push("softbreak", "br", 0);
          }
        } else {
          state.push("softbreak", "br", 0);
        }
      }
      pos++;
      while (pos < max2 && isSpace(state.src.charCodeAt(pos))) {
        pos++;
      }
      state.pos = pos;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/escape.js
var require_escape = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/escape.js"(exports, module) {
    var isSpace = require_utils().isSpace;
    var ESCAPED = [];
    for (i = 0; i < 256; i++) {
      ESCAPED.push(0);
    }
    var i;
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
      ESCAPED[ch.charCodeAt(0)] = 1;
    });
    module.exports = function escape(state, silent) {
      var ch, pos = state.pos, max2 = state.posMax;
      if (state.src.charCodeAt(pos) !== 92) {
        return false;
      }
      pos++;
      if (pos < max2) {
        ch = state.src.charCodeAt(pos);
        if (ch < 256 && ESCAPED[ch] !== 0) {
          if (!silent) {
            state.pending += state.src[pos];
          }
          state.pos += 2;
          return true;
        }
        if (ch === 10) {
          if (!silent) {
            state.push("hardbreak", "br", 0);
          }
          pos++;
          while (pos < max2) {
            ch = state.src.charCodeAt(pos);
            if (!isSpace(ch)) {
              break;
            }
            pos++;
          }
          state.pos = pos;
          return true;
        }
      }
      if (!silent) {
        state.pending += "\\";
      }
      state.pos++;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/backticks.js
var require_backticks = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/backticks.js"(exports, module) {
    module.exports = function backtick(state, silent) {
      var start, max2, marker, token, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
      if (ch !== 96) {
        return false;
      }
      start = pos;
      pos++;
      max2 = state.posMax;
      while (pos < max2 && state.src.charCodeAt(pos) === 96) {
        pos++;
      }
      marker = state.src.slice(start, pos);
      openerLength = marker.length;
      if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
        if (!silent)
          state.pending += marker;
        state.pos += openerLength;
        return true;
      }
      matchStart = matchEnd = pos;
      while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
        matchEnd = matchStart + 1;
        while (matchEnd < max2 && state.src.charCodeAt(matchEnd) === 96) {
          matchEnd++;
        }
        closerLength = matchEnd - matchStart;
        if (closerLength === openerLength) {
          if (!silent) {
            token = state.push("code_inline", "code", 0);
            token.markup = marker;
            token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
          }
          state.pos = matchEnd;
          return true;
        }
        state.backticks[closerLength] = matchStart;
      }
      state.backticksScanned = true;
      if (!silent)
        state.pending += marker;
      state.pos += openerLength;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/strikethrough.js
var require_strikethrough = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/strikethrough.js"(exports, module) {
    module.exports.tokenize = function strikethrough(state, silent) {
      var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
      if (silent) {
        return false;
      }
      if (marker !== 126) {
        return false;
      }
      scanned = state.scanDelims(state.pos, true);
      len = scanned.length;
      ch = String.fromCharCode(marker);
      if (len < 2) {
        return false;
      }
      if (len % 2) {
        token = state.push("text", "", 0);
        token.content = ch;
        len--;
      }
      for (i = 0; i < len; i += 2) {
        token = state.push("text", "", 0);
        token.content = ch + ch;
        state.delimiters.push({
          marker,
          length: 0,
          token: state.tokens.length - 1,
          end: -1,
          open: scanned.can_open,
          close: scanned.can_close
        });
      }
      state.pos += scanned.length;
      return true;
    };
    function postProcess(state, delimiters) {
      var i, j, startDelim, endDelim, token, loneMarkers = [], max2 = delimiters.length;
      for (i = 0; i < max2; i++) {
        startDelim = delimiters[i];
        if (startDelim.marker !== 126) {
          continue;
        }
        if (startDelim.end === -1) {
          continue;
        }
        endDelim = delimiters[startDelim.end];
        token = state.tokens[startDelim.token];
        token.type = "s_open";
        token.tag = "s";
        token.nesting = 1;
        token.markup = "~~";
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = "s_close";
        token.tag = "s";
        token.nesting = -1;
        token.markup = "~~";
        token.content = "";
        if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
          loneMarkers.push(endDelim.token - 1);
        }
      }
      while (loneMarkers.length) {
        i = loneMarkers.pop();
        j = i + 1;
        while (j < state.tokens.length && state.tokens[j].type === "s_close") {
          j++;
        }
        j--;
        if (i !== j) {
          token = state.tokens[j];
          state.tokens[j] = state.tokens[i];
          state.tokens[i] = token;
        }
      }
    }
    module.exports.postProcess = function strikethrough(state) {
      var curr, tokens_meta = state.tokens_meta, max2 = state.tokens_meta.length;
      postProcess(state, state.delimiters);
      for (curr = 0; curr < max2; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/emphasis.js
var require_emphasis = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/emphasis.js"(exports, module) {
    module.exports.tokenize = function emphasis(state, silent) {
      var i, scanned, token, start = state.pos, marker = state.src.charCodeAt(start);
      if (silent) {
        return false;
      }
      if (marker !== 95 && marker !== 42) {
        return false;
      }
      scanned = state.scanDelims(state.pos, marker === 42);
      for (i = 0; i < scanned.length; i++) {
        token = state.push("text", "", 0);
        token.content = String.fromCharCode(marker);
        state.delimiters.push({
          marker,
          length: scanned.length,
          token: state.tokens.length - 1,
          end: -1,
          open: scanned.can_open,
          close: scanned.can_close
        });
      }
      state.pos += scanned.length;
      return true;
    };
    function postProcess(state, delimiters) {
      var i, startDelim, endDelim, token, ch, isStrong, max2 = delimiters.length;
      for (i = max2 - 1; i >= 0; i--) {
        startDelim = delimiters[i];
        if (startDelim.marker !== 95 && startDelim.marker !== 42) {
          continue;
        }
        if (startDelim.end === -1) {
          continue;
        }
        endDelim = delimiters[startDelim.end];
        isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1;
        ch = String.fromCharCode(startDelim.marker);
        token = state.tokens[startDelim.token];
        token.type = isStrong ? "strong_open" : "em_open";
        token.tag = isStrong ? "strong" : "em";
        token.nesting = 1;
        token.markup = isStrong ? ch + ch : ch;
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = isStrong ? "strong_close" : "em_close";
        token.tag = isStrong ? "strong" : "em";
        token.nesting = -1;
        token.markup = isStrong ? ch + ch : ch;
        token.content = "";
        if (isStrong) {
          state.tokens[delimiters[i - 1].token].content = "";
          state.tokens[delimiters[startDelim.end + 1].token].content = "";
          i--;
        }
      }
    }
    module.exports.postProcess = function emphasis(state) {
      var curr, tokens_meta = state.tokens_meta, max2 = state.tokens_meta.length;
      postProcess(state, state.delimiters);
      for (curr = 0; curr < max2; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/link.js
var require_link = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/link.js"(exports, module) {
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = function link2(state, silent) {
      var attrs, code2, label, labelEnd, labelStart, pos, res, ref, token, href = "", title = "", oldPos = state.pos, max2 = state.posMax, start = state.pos, parseReference = true;
      if (state.src.charCodeAt(state.pos) !== 91) {
        return false;
      }
      labelStart = state.pos + 1;
      labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
      if (labelEnd < 0) {
        return false;
      }
      pos = labelEnd + 1;
      if (pos < max2 && state.src.charCodeAt(pos) === 40) {
        parseReference = false;
        pos++;
        for (; pos < max2; pos++) {
          code2 = state.src.charCodeAt(pos);
          if (!isSpace(code2) && code2 !== 10) {
            break;
          }
        }
        if (pos >= max2) {
          return false;
        }
        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
        if (res.ok) {
          href = state.md.normalizeLink(res.str);
          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = "";
          }
          start = pos;
          for (; pos < max2; pos++) {
            code2 = state.src.charCodeAt(pos);
            if (!isSpace(code2) && code2 !== 10) {
              break;
            }
          }
          res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
          if (pos < max2 && start !== pos && res.ok) {
            title = res.str;
            pos = res.pos;
            for (; pos < max2; pos++) {
              code2 = state.src.charCodeAt(pos);
              if (!isSpace(code2) && code2 !== 10) {
                break;
              }
            }
          }
        }
        if (pos >= max2 || state.src.charCodeAt(pos) !== 41) {
          parseReference = true;
        }
        pos++;
      }
      if (parseReference) {
        if (typeof state.env.references === "undefined") {
          return false;
        }
        if (pos < max2 && state.src.charCodeAt(pos) === 91) {
          start = pos + 1;
          pos = state.md.helpers.parseLinkLabel(state, pos);
          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
          pos = labelEnd + 1;
        }
        if (!label) {
          label = state.src.slice(labelStart, labelEnd);
        }
        ref = state.env.references[normalizeReference(label)];
        if (!ref) {
          state.pos = oldPos;
          return false;
        }
        href = ref.href;
        title = ref.title;
      }
      if (!silent) {
        state.pos = labelStart;
        state.posMax = labelEnd;
        token = state.push("link_open", "a", 1);
        token.attrs = attrs = [["href", href]];
        if (title) {
          attrs.push(["title", title]);
        }
        state.md.inline.tokenize(state);
        token = state.push("link_close", "a", -1);
      }
      state.pos = pos;
      state.posMax = max2;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/image.js
var require_image = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/image.js"(exports, module) {
    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;
    module.exports = function image2(state, silent) {
      var attrs, code2, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = "", oldPos = state.pos, max2 = state.posMax;
      if (state.src.charCodeAt(state.pos) !== 33) {
        return false;
      }
      if (state.src.charCodeAt(state.pos + 1) !== 91) {
        return false;
      }
      labelStart = state.pos + 2;
      labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
      if (labelEnd < 0) {
        return false;
      }
      pos = labelEnd + 1;
      if (pos < max2 && state.src.charCodeAt(pos) === 40) {
        pos++;
        for (; pos < max2; pos++) {
          code2 = state.src.charCodeAt(pos);
          if (!isSpace(code2) && code2 !== 10) {
            break;
          }
        }
        if (pos >= max2) {
          return false;
        }
        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
        if (res.ok) {
          href = state.md.normalizeLink(res.str);
          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = "";
          }
        }
        start = pos;
        for (; pos < max2; pos++) {
          code2 = state.src.charCodeAt(pos);
          if (!isSpace(code2) && code2 !== 10) {
            break;
          }
        }
        res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
        if (pos < max2 && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;
          for (; pos < max2; pos++) {
            code2 = state.src.charCodeAt(pos);
            if (!isSpace(code2) && code2 !== 10) {
              break;
            }
          }
        } else {
          title = "";
        }
        if (pos >= max2 || state.src.charCodeAt(pos) !== 41) {
          state.pos = oldPos;
          return false;
        }
        pos++;
      } else {
        if (typeof state.env.references === "undefined") {
          return false;
        }
        if (pos < max2 && state.src.charCodeAt(pos) === 91) {
          start = pos + 1;
          pos = state.md.helpers.parseLinkLabel(state, pos);
          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
          pos = labelEnd + 1;
        }
        if (!label) {
          label = state.src.slice(labelStart, labelEnd);
        }
        ref = state.env.references[normalizeReference(label)];
        if (!ref) {
          state.pos = oldPos;
          return false;
        }
        href = ref.href;
        title = ref.title;
      }
      if (!silent) {
        content = state.src.slice(labelStart, labelEnd);
        state.md.inline.parse(content, state.md, state.env, tokens = []);
        token = state.push("image", "img", 0);
        token.attrs = attrs = [["src", href], ["alt", ""]];
        token.children = tokens;
        token.content = content;
        if (title) {
          attrs.push(["title", title]);
        }
      }
      state.pos = pos;
      state.posMax = max2;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/autolink.js
var require_autolink = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/autolink.js"(exports, module) {
    var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
    var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
    module.exports = function autolink(state, silent) {
      var url, fullUrl, token, ch, start, max2, pos = state.pos;
      if (state.src.charCodeAt(pos) !== 60) {
        return false;
      }
      start = state.pos;
      max2 = state.posMax;
      for (; ; ) {
        if (++pos >= max2)
          return false;
        ch = state.src.charCodeAt(pos);
        if (ch === 60)
          return false;
        if (ch === 62)
          break;
      }
      url = state.src.slice(start + 1, pos);
      if (AUTOLINK_RE.test(url)) {
        fullUrl = state.md.normalizeLink(url);
        if (!state.md.validateLink(fullUrl)) {
          return false;
        }
        if (!silent) {
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "autolink";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "autolink";
          token.info = "auto";
        }
        state.pos += url.length + 2;
        return true;
      }
      if (EMAIL_RE.test(url)) {
        fullUrl = state.md.normalizeLink("mailto:" + url);
        if (!state.md.validateLink(fullUrl)) {
          return false;
        }
        if (!silent) {
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "autolink";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "autolink";
          token.info = "auto";
        }
        state.pos += url.length + 2;
        return true;
      }
      return false;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/html_inline.js
var require_html_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/html_inline.js"(exports, module) {
    var HTML_TAG_RE = require_html_re().HTML_TAG_RE;
    function isLetter(ch) {
      var lc = ch | 32;
      return lc >= 97 && lc <= 122;
    }
    module.exports = function html_inline(state, silent) {
      var ch, match, max2, token, pos = state.pos;
      if (!state.md.options.html) {
        return false;
      }
      max2 = state.posMax;
      if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max2) {
        return false;
      }
      ch = state.src.charCodeAt(pos + 1);
      if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
        return false;
      }
      match = state.src.slice(pos).match(HTML_TAG_RE);
      if (!match) {
        return false;
      }
      if (!silent) {
        token = state.push("html_inline", "", 0);
        token.content = state.src.slice(pos, pos + match[0].length);
      }
      state.pos += match[0].length;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/entity.js
var require_entity = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/entity.js"(exports, module) {
    var entities = require_entities2();
    var has = require_utils().has;
    var isValidEntityCode = require_utils().isValidEntityCode;
    var fromCodePoint = require_utils().fromCodePoint;
    var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
    var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
    module.exports = function entity(state, silent) {
      var ch, code2, match, pos = state.pos, max2 = state.posMax;
      if (state.src.charCodeAt(pos) !== 38) {
        return false;
      }
      if (pos + 1 < max2) {
        ch = state.src.charCodeAt(pos + 1);
        if (ch === 35) {
          match = state.src.slice(pos).match(DIGITAL_RE);
          if (match) {
            if (!silent) {
              code2 = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
              state.pending += isValidEntityCode(code2) ? fromCodePoint(code2) : fromCodePoint(65533);
            }
            state.pos += match[0].length;
            return true;
          }
        } else {
          match = state.src.slice(pos).match(NAMED_RE);
          if (match) {
            if (has(entities, match[1])) {
              if (!silent) {
                state.pending += entities[match[1]];
              }
              state.pos += match[0].length;
              return true;
            }
          }
        }
      }
      if (!silent) {
        state.pending += "&";
      }
      state.pos++;
      return true;
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/balance_pairs.js
var require_balance_pairs = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/balance_pairs.js"(exports, module) {
    function processDelimiters(state, delimiters) {
      var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max2 = delimiters.length;
      if (!max2)
        return;
      var headerIdx = 0;
      var lastTokenIdx = -2;
      var jumps = [];
      for (closerIdx = 0; closerIdx < max2; closerIdx++) {
        closer = delimiters[closerIdx];
        jumps.push(0);
        if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
          headerIdx = closerIdx;
        }
        lastTokenIdx = closer.token;
        closer.length = closer.length || 0;
        if (!closer.close)
          continue;
        if (!openersBottom.hasOwnProperty(closer.marker)) {
          openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
        }
        minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
        openerIdx = headerIdx - jumps[headerIdx] - 1;
        newMinOpenerIdx = openerIdx;
        for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
          opener = delimiters[openerIdx];
          if (opener.marker !== closer.marker)
            continue;
          if (opener.open && opener.end < 0) {
            isOddMatch = false;
            if (opener.close || closer.open) {
              if ((opener.length + closer.length) % 3 === 0) {
                if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                  isOddMatch = true;
                }
              }
            }
            if (!isOddMatch) {
              lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
              jumps[closerIdx] = closerIdx - openerIdx + lastJump;
              jumps[openerIdx] = lastJump;
              closer.open = false;
              opener.end = closerIdx;
              opener.close = false;
              newMinOpenerIdx = -1;
              lastTokenIdx = -2;
              break;
            }
          }
        }
        if (newMinOpenerIdx !== -1) {
          openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
        }
      }
    }
    module.exports = function link_pairs(state) {
      var curr, tokens_meta = state.tokens_meta, max2 = state.tokens_meta.length;
      processDelimiters(state, state.delimiters);
      for (curr = 0; curr < max2; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          processDelimiters(state, tokens_meta[curr].delimiters);
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/text_collapse.js
var require_text_collapse = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/text_collapse.js"(exports, module) {
    module.exports = function text_collapse(state) {
      var curr, last, level = 0, tokens = state.tokens, max2 = state.tokens.length;
      for (curr = last = 0; curr < max2; curr++) {
        if (tokens[curr].nesting < 0)
          level--;
        tokens[curr].level = level;
        if (tokens[curr].nesting > 0)
          level++;
        if (tokens[curr].type === "text" && curr + 1 < max2 && tokens[curr + 1].type === "text") {
          tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
        } else {
          if (curr !== last) {
            tokens[last] = tokens[curr];
          }
          last++;
        }
      }
      if (curr !== last) {
        tokens.length = last;
      }
    };
  }
});

// node_modules/markdown-it/lib/rules_inline/state_inline.js
var require_state_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/state_inline.js"(exports, module) {
    var Token = require_token();
    var isWhiteSpace = require_utils().isWhiteSpace;
    var isPunctChar = require_utils().isPunctChar;
    var isMdAsciiPunct = require_utils().isMdAsciiPunct;
    function StateInline(src, md, env, outTokens) {
      this.src = src;
      this.env = env;
      this.md = md;
      this.tokens = outTokens;
      this.tokens_meta = Array(outTokens.length);
      this.pos = 0;
      this.posMax = this.src.length;
      this.level = 0;
      this.pending = "";
      this.pendingLevel = 0;
      this.cache = {};
      this.delimiters = [];
      this._prev_delimiters = [];
      this.backticks = {};
      this.backticksScanned = false;
    }
    StateInline.prototype.pushPending = function() {
      var token = new Token("text", "", 0);
      token.content = this.pending;
      token.level = this.pendingLevel;
      this.tokens.push(token);
      this.pending = "";
      return token;
    };
    StateInline.prototype.push = function(type, tag, nesting) {
      if (this.pending) {
        this.pushPending();
      }
      var token = new Token(type, tag, nesting);
      var token_meta = null;
      if (nesting < 0) {
        this.level--;
        this.delimiters = this._prev_delimiters.pop();
      }
      token.level = this.level;
      if (nesting > 0) {
        this.level++;
        this._prev_delimiters.push(this.delimiters);
        this.delimiters = [];
        token_meta = { delimiters: this.delimiters };
      }
      this.pendingLevel = this.level;
      this.tokens.push(token);
      this.tokens_meta.push(token_meta);
      return token;
    };
    StateInline.prototype.scanDelims = function(start, canSplitWord) {
      var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max2 = this.posMax, marker = this.src.charCodeAt(start);
      lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
      while (pos < max2 && this.src.charCodeAt(pos) === marker) {
        pos++;
      }
      count = pos - start;
      nextChar = pos < max2 ? this.src.charCodeAt(pos) : 32;
      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);
      if (isNextWhiteSpace) {
        left_flanking = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          left_flanking = false;
        }
      }
      if (isLastWhiteSpace) {
        right_flanking = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          right_flanking = false;
        }
      }
      if (!canSplitWord) {
        can_open = left_flanking && (!right_flanking || isLastPunctChar);
        can_close = right_flanking && (!left_flanking || isNextPunctChar);
      } else {
        can_open = left_flanking;
        can_close = right_flanking;
      }
      return {
        can_open,
        can_close,
        length: count
      };
    };
    StateInline.prototype.Token = Token;
    module.exports = StateInline;
  }
});

// node_modules/markdown-it/lib/parser_inline.js
var require_parser_inline = __commonJS({
  "node_modules/markdown-it/lib/parser_inline.js"(exports, module) {
    var Ruler = require_ruler();
    var _rules = [
      ["text", require_text()],
      ["newline", require_newline()],
      ["escape", require_escape()],
      ["backticks", require_backticks()],
      ["strikethrough", require_strikethrough().tokenize],
      ["emphasis", require_emphasis().tokenize],
      ["link", require_link()],
      ["image", require_image()],
      ["autolink", require_autolink()],
      ["html_inline", require_html_inline()],
      ["entity", require_entity()]
    ];
    var _rules2 = [
      ["balance_pairs", require_balance_pairs()],
      ["strikethrough", require_strikethrough().postProcess],
      ["emphasis", require_emphasis().postProcess],
      ["text_collapse", require_text_collapse()]
    ];
    function ParserInline() {
      var i;
      this.ruler = new Ruler();
      for (i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1]);
      }
      this.ruler2 = new Ruler();
      for (i = 0; i < _rules2.length; i++) {
        this.ruler2.push(_rules2[i][0], _rules2[i][1]);
      }
    }
    ParserInline.prototype.skipToken = function(state) {
      var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
      if (typeof cache[pos] !== "undefined") {
        state.pos = cache[pos];
        return;
      }
      if (state.level < maxNesting) {
        for (i = 0; i < len; i++) {
          state.level++;
          ok = rules[i](state, true);
          state.level--;
          if (ok) {
            break;
          }
        }
      } else {
        state.pos = state.posMax;
      }
      if (!ok) {
        state.pos++;
      }
      cache[pos] = state.pos;
    };
    ParserInline.prototype.tokenize = function(state) {
      var ok, i, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
      while (state.pos < end) {
        if (state.level < maxNesting) {
          for (i = 0; i < len; i++) {
            ok = rules[i](state, false);
            if (ok) {
              break;
            }
          }
        }
        if (ok) {
          if (state.pos >= end) {
            break;
          }
          continue;
        }
        state.pending += state.src[state.pos++];
      }
      if (state.pending) {
        state.pushPending();
      }
    };
    ParserInline.prototype.parse = function(str, md, env, outTokens) {
      var i, rules, len;
      var state = new this.State(str, md, env, outTokens);
      this.tokenize(state);
      rules = this.ruler2.getRules("");
      len = rules.length;
      for (i = 0; i < len; i++) {
        rules[i](state);
      }
    };
    ParserInline.prototype.State = require_state_inline();
    module.exports = ParserInline;
  }
});

// node_modules/linkify-it/lib/re.js
var require_re = __commonJS({
  "node_modules/linkify-it/lib/re.js"(exports, module) {
    module.exports = function(opts) {
      var re = {};
      re.src_Any = require_regex2().source;
      re.src_Cc = require_regex3().source;
      re.src_Z = require_regex5().source;
      re.src_P = require_regex().source;
      re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join("|");
      re.src_ZCc = [re.src_Z, re.src_Cc].join("|");
      var text_separators = "[><\uFF5C]";
      re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
      re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
      re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
      re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
      re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
      re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re.src_ZCc + "|[.]).|" + (opts && opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re.src_ZCc + ").|;(?!" + re.src_ZCc + ").|\\!+(?!" + re.src_ZCc + "|[!]).|\\?(?!" + re.src_ZCc + "|[?]).)+|\\/)?";
      re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
      re.src_xn = "xn--[a-z0-9\\-]{1,59}";
      re.src_domain_root = "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
      re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
      re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
      re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
      re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
      re.src_host_strict = re.src_host + re.src_host_terminator;
      re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
      re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
      re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
      re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
      re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
      re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
      re.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
      re.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
      return re;
    };
  }
});

// node_modules/linkify-it/index.js
var require_linkify_it = __commonJS({
  "node_modules/linkify-it/index.js"(exports, module) {
    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function(source) {
        if (!source) {
          return;
        }
        Object.keys(source).forEach(function(key) {
          obj[key] = source[key];
        });
      });
      return obj;
    }
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
      return _class(obj) === "[object String]";
    }
    function isObject(obj) {
      return _class(obj) === "[object Object]";
    }
    function isRegExp(obj) {
      return _class(obj) === "[object RegExp]";
    }
    function isFunction2(obj) {
      return _class(obj) === "[object Function]";
    }
    function escapeRE(str) {
      return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    }
    var defaultOptions = {
      fuzzyLink: true,
      fuzzyEmail: true,
      fuzzyIP: false
    };
    function isOptionsObj(obj) {
      return Object.keys(obj || {}).reduce(function(acc, k) {
        return acc || defaultOptions.hasOwnProperty(k);
      }, false);
    }
    var defaultSchemas = {
      "http:": {
        validate: function(text2, pos, self) {
          var tail = text2.slice(pos);
          if (!self.re.http) {
            self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
          }
          if (self.re.http.test(tail)) {
            return tail.match(self.re.http)[0].length;
          }
          return 0;
        }
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function(text2, pos, self) {
          var tail = text2.slice(pos);
          if (!self.re.no_http) {
            self.re.no_http = new RegExp("^" + self.re.src_auth + "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
          }
          if (self.re.no_http.test(tail)) {
            if (pos >= 3 && text2[pos - 3] === ":") {
              return 0;
            }
            if (pos >= 3 && text2[pos - 3] === "/") {
              return 0;
            }
            return tail.match(self.re.no_http)[0].length;
          }
          return 0;
        }
      },
      "mailto:": {
        validate: function(text2, pos, self) {
          var tail = text2.slice(pos);
          if (!self.re.mailto) {
            self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
          }
          if (self.re.mailto.test(tail)) {
            return tail.match(self.re.mailto)[0].length;
          }
          return 0;
        }
      }
    };
    var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
    var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
    function resetScanCache(self) {
      self.__index__ = -1;
      self.__text_cache__ = "";
    }
    function createValidator(re) {
      return function(text2, pos) {
        var tail = text2.slice(pos);
        if (re.test(tail)) {
          return tail.match(re)[0].length;
        }
        return 0;
      };
    }
    function createNormalizer() {
      return function(match, self) {
        self.normalize(match);
      };
    }
    function compile(self) {
      var re = self.re = require_re()(self.__opts__);
      var tlds = self.__tlds__.slice();
      self.onCompile();
      if (!self.__tlds_replaced__) {
        tlds.push(tlds_2ch_src_re);
      }
      tlds.push(re.src_xn);
      re.src_tlds = tlds.join("|");
      function untpl(tpl) {
        return tpl.replace("%TLDS%", re.src_tlds);
      }
      re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
      re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
      re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
      re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
      var aliases = [];
      self.__compiled__ = {};
      function schemaError(name, val) {
        throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
      }
      Object.keys(self.__schemas__).forEach(function(name) {
        var val = self.__schemas__[name];
        if (val === null) {
          return;
        }
        var compiled = { validate: null, link: null };
        self.__compiled__[name] = compiled;
        if (isObject(val)) {
          if (isRegExp(val.validate)) {
            compiled.validate = createValidator(val.validate);
          } else if (isFunction2(val.validate)) {
            compiled.validate = val.validate;
          } else {
            schemaError(name, val);
          }
          if (isFunction2(val.normalize)) {
            compiled.normalize = val.normalize;
          } else if (!val.normalize) {
            compiled.normalize = createNormalizer();
          } else {
            schemaError(name, val);
          }
          return;
        }
        if (isString(val)) {
          aliases.push(name);
          return;
        }
        schemaError(name, val);
      });
      aliases.forEach(function(alias) {
        if (!self.__compiled__[self.__schemas__[alias]]) {
          return;
        }
        self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
        self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
      });
      self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
      var slist = Object.keys(self.__compiled__).filter(function(name) {
        return name.length > 0 && self.__compiled__[name];
      }).map(escapeRE).join("|");
      self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "i");
      self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
      self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
      resetScanCache(self);
    }
    function Match(self, shift) {
      var start = self.__index__, end = self.__last_index__, text2 = self.__text_cache__.slice(start, end);
      this.schema = self.__schema__.toLowerCase();
      this.index = start + shift;
      this.lastIndex = end + shift;
      this.raw = text2;
      this.text = text2;
      this.url = text2;
    }
    function createMatch(self, shift) {
      var match = new Match(self, shift);
      self.__compiled__[match.schema].normalize(match, self);
      return match;
    }
    function LinkifyIt(schemas, options) {
      if (!(this instanceof LinkifyIt)) {
        return new LinkifyIt(schemas, options);
      }
      if (!options) {
        if (isOptionsObj(schemas)) {
          options = schemas;
          schemas = {};
        }
      }
      this.__opts__ = assign({}, defaultOptions, options);
      this.__index__ = -1;
      this.__last_index__ = -1;
      this.__schema__ = "";
      this.__text_cache__ = "";
      this.__schemas__ = assign({}, defaultSchemas, schemas);
      this.__compiled__ = {};
      this.__tlds__ = tlds_default;
      this.__tlds_replaced__ = false;
      this.re = {};
      compile(this);
    }
    LinkifyIt.prototype.add = function add(schema, definition) {
      this.__schemas__[schema] = definition;
      compile(this);
      return this;
    };
    LinkifyIt.prototype.set = function set(options) {
      this.__opts__ = assign(this.__opts__, options);
      return this;
    };
    LinkifyIt.prototype.test = function test(text2) {
      this.__text_cache__ = text2;
      this.__index__ = -1;
      if (!text2.length) {
        return false;
      }
      var m, ml, me, len, shift, next, re, tld_pos, at_pos;
      if (this.re.schema_test.test(text2)) {
        re = this.re.schema_search;
        re.lastIndex = 0;
        while ((m = re.exec(text2)) !== null) {
          len = this.testSchemaAt(text2, m[2], re.lastIndex);
          if (len) {
            this.__schema__ = m[2];
            this.__index__ = m.index + m[1].length;
            this.__last_index__ = m.index + m[0].length + len;
            break;
          }
        }
      }
      if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
        tld_pos = text2.search(this.re.host_fuzzy_test);
        if (tld_pos >= 0) {
          if (this.__index__ < 0 || tld_pos < this.__index__) {
            if ((ml = text2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
              shift = ml.index + ml[1].length;
              if (this.__index__ < 0 || shift < this.__index__) {
                this.__schema__ = "";
                this.__index__ = shift;
                this.__last_index__ = ml.index + ml[0].length;
              }
            }
          }
        }
      }
      if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
        at_pos = text2.indexOf("@");
        if (at_pos >= 0) {
          if ((me = text2.match(this.re.email_fuzzy)) !== null) {
            shift = me.index + me[1].length;
            next = me.index + me[0].length;
            if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
              this.__schema__ = "mailto:";
              this.__index__ = shift;
              this.__last_index__ = next;
            }
          }
        }
      }
      return this.__index__ >= 0;
    };
    LinkifyIt.prototype.pretest = function pretest(text2) {
      return this.re.pretest.test(text2);
    };
    LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text2, schema, pos) {
      if (!this.__compiled__[schema.toLowerCase()]) {
        return 0;
      }
      return this.__compiled__[schema.toLowerCase()].validate(text2, pos, this);
    };
    LinkifyIt.prototype.match = function match(text2) {
      var shift = 0, result = [];
      if (this.__index__ >= 0 && this.__text_cache__ === text2) {
        result.push(createMatch(this, shift));
        shift = this.__last_index__;
      }
      var tail = shift ? text2.slice(shift) : text2;
      while (this.test(tail)) {
        result.push(createMatch(this, shift));
        tail = tail.slice(this.__last_index__);
        shift += this.__last_index__;
      }
      if (result.length) {
        return result;
      }
      return null;
    };
    LinkifyIt.prototype.tlds = function tlds(list2, keepOld) {
      list2 = Array.isArray(list2) ? list2 : [list2];
      if (!keepOld) {
        this.__tlds__ = list2.slice();
        this.__tlds_replaced__ = true;
        compile(this);
        return this;
      }
      this.__tlds__ = this.__tlds__.concat(list2).sort().filter(function(el, idx, arr) {
        return el !== arr[idx - 1];
      }).reverse();
      compile(this);
      return this;
    };
    LinkifyIt.prototype.normalize = function normalize(match) {
      if (!match.schema) {
        match.url = "http://" + match.url;
      }
      if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
        match.url = "mailto:" + match.url;
      }
    };
    LinkifyIt.prototype.onCompile = function onCompile() {
    };
    module.exports = LinkifyIt;
  }
});

// node_modules/punycode/punycode.js
var require_punycode = __commonJS({
  "node_modules/punycode/punycode.js"(exports, module) {
    var maxInt = 2147483647;
    var base = 36;
    var tMin = 1;
    var tMax = 26;
    var skew = 38;
    var damp = 700;
    var initialBias = 72;
    var initialN = 128;
    var delimiter = "-";
    var regexPunycode = /^xn--/;
    var regexNonASCII = /[^\0-\x7E]/;
    var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
    var errors = {
      "overflow": "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    var baseMinusTMin = base - tMin;
    var floor = Math.floor;
    var stringFromCharCode = String.fromCharCode;
    function error2(type) {
      throw new RangeError(errors[type]);
    }
    function map(array, fn) {
      const result = [];
      let length = array.length;
      while (length--) {
        result[length] = fn(array[length]);
      }
      return result;
    }
    function mapDomain(string, fn) {
      const parts = string.split("@");
      let result = "";
      if (parts.length > 1) {
        result = parts[0] + "@";
        string = parts[1];
      }
      string = string.replace(regexSeparators, ".");
      const labels = string.split(".");
      const encoded = map(labels, fn).join(".");
      return result + encoded;
    }
    function ucs2decode(string) {
      const output = [];
      let counter = 0;
      const length = string.length;
      while (counter < length) {
        const value = string.charCodeAt(counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
          const extra = string.charCodeAt(counter++);
          if ((extra & 64512) == 56320) {
            output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
          } else {
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }
      return output;
    }
    var ucs2encode = (array) => String.fromCodePoint(...array);
    var basicToDigit = function(codePoint) {
      if (codePoint - 48 < 10) {
        return codePoint - 22;
      }
      if (codePoint - 65 < 26) {
        return codePoint - 65;
      }
      if (codePoint - 97 < 26) {
        return codePoint - 97;
      }
      return base;
    };
    var digitToBasic = function(digit, flag) {
      return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    };
    var adapt = function(delta, numPoints, firstTime) {
      let k = 0;
      delta = firstTime ? floor(delta / damp) : delta >> 1;
      delta += floor(delta / numPoints);
      for (; delta > baseMinusTMin * tMax >> 1; k += base) {
        delta = floor(delta / baseMinusTMin);
      }
      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    };
    var decode = function(input) {
      const output = [];
      const inputLength = input.length;
      let i = 0;
      let n = initialN;
      let bias = initialBias;
      let basic = input.lastIndexOf(delimiter);
      if (basic < 0) {
        basic = 0;
      }
      for (let j = 0; j < basic; ++j) {
        if (input.charCodeAt(j) >= 128) {
          error2("not-basic");
        }
        output.push(input.charCodeAt(j));
      }
      for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
        let oldi = i;
        for (let w = 1, k = base; ; k += base) {
          if (index >= inputLength) {
            error2("invalid-input");
          }
          const digit = basicToDigit(input.charCodeAt(index++));
          if (digit >= base || digit > floor((maxInt - i) / w)) {
            error2("overflow");
          }
          i += digit * w;
          const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (digit < t) {
            break;
          }
          const baseMinusT = base - t;
          if (w > floor(maxInt / baseMinusT)) {
            error2("overflow");
          }
          w *= baseMinusT;
        }
        const out = output.length + 1;
        bias = adapt(i - oldi, out, oldi == 0);
        if (floor(i / out) > maxInt - n) {
          error2("overflow");
        }
        n += floor(i / out);
        i %= out;
        output.splice(i++, 0, n);
      }
      return String.fromCodePoint(...output);
    };
    var encode = function(input) {
      const output = [];
      input = ucs2decode(input);
      let inputLength = input.length;
      let n = initialN;
      let delta = 0;
      let bias = initialBias;
      for (const currentValue of input) {
        if (currentValue < 128) {
          output.push(stringFromCharCode(currentValue));
        }
      }
      let basicLength = output.length;
      let handledCPCount = basicLength;
      if (basicLength) {
        output.push(delimiter);
      }
      while (handledCPCount < inputLength) {
        let m = maxInt;
        for (const currentValue of input) {
          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        }
        const handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          error2("overflow");
        }
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for (const currentValue of input) {
          if (currentValue < n && ++delta > maxInt) {
            error2("overflow");
          }
          if (currentValue == n) {
            let q = delta;
            for (let k = base; ; k += base) {
              const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (q < t) {
                break;
              }
              const qMinusT = q - t;
              const baseMinusT = base - t;
              output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
              q = floor(qMinusT / baseMinusT);
            }
            output.push(stringFromCharCode(digitToBasic(q, 0)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
            delta = 0;
            ++handledCPCount;
          }
        }
        ++delta;
        ++n;
      }
      return output.join("");
    };
    var toUnicode = function(input) {
      return mapDomain(input, function(string) {
        return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
      });
    };
    var toASCII = function(input) {
      return mapDomain(input, function(string) {
        return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
      });
    };
    var punycode = {
      "version": "2.1.0",
      "ucs2": {
        "decode": ucs2decode,
        "encode": ucs2encode
      },
      "decode": decode,
      "encode": encode,
      "toASCII": toASCII,
      "toUnicode": toUnicode
    };
    module.exports = punycode;
  }
});

// node_modules/markdown-it/lib/presets/default.js
var require_default = __commonJS({
  "node_modules/markdown-it/lib/presets/default.js"(exports, module) {
    module.exports = {
      options: {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 100
      },
      components: {
        core: {},
        block: {},
        inline: {}
      }
    };
  }
});

// node_modules/markdown-it/lib/presets/zero.js
var require_zero = __commonJS({
  "node_modules/markdown-it/lib/presets/zero.js"(exports, module) {
    module.exports = {
      options: {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {
          rules: [
            "normalize",
            "block",
            "inline"
          ]
        },
        block: {
          rules: [
            "paragraph"
          ]
        },
        inline: {
          rules: [
            "text"
          ],
          rules2: [
            "balance_pairs",
            "text_collapse"
          ]
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/presets/commonmark.js
var require_commonmark = __commonJS({
  "node_modules/markdown-it/lib/presets/commonmark.js"(exports, module) {
    module.exports = {
      options: {
        html: true,
        xhtmlOut: true,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {
          rules: [
            "normalize",
            "block",
            "inline"
          ]
        },
        block: {
          rules: [
            "blockquote",
            "code",
            "fence",
            "heading",
            "hr",
            "html_block",
            "lheading",
            "list",
            "reference",
            "paragraph"
          ]
        },
        inline: {
          rules: [
            "autolink",
            "backticks",
            "emphasis",
            "entity",
            "escape",
            "html_inline",
            "image",
            "link",
            "newline",
            "text"
          ],
          rules2: [
            "balance_pairs",
            "emphasis",
            "text_collapse"
          ]
        }
      }
    };
  }
});

// node_modules/markdown-it/lib/index.js
var require_lib = __commonJS({
  "node_modules/markdown-it/lib/index.js"(exports, module) {
    var utils = require_utils();
    var helpers = require_helpers();
    var Renderer = require_renderer();
    var ParserCore = require_parser_core();
    var ParserBlock = require_parser_block();
    var ParserInline = require_parser_inline();
    var LinkifyIt = require_linkify_it();
    var mdurl = require_mdurl();
    var punycode = require_punycode();
    var config = {
      default: require_default(),
      zero: require_zero(),
      commonmark: require_commonmark()
    };
    var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
    var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
    function validateLink(url) {
      var str = url.trim().toLowerCase();
      return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
    }
    var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
    function normalizeLink(url) {
      var parsed = mdurl.parse(url, true);
      if (parsed.hostname) {
        if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
          try {
            parsed.hostname = punycode.toASCII(parsed.hostname);
          } catch (er) {
          }
        }
      }
      return mdurl.encode(mdurl.format(parsed));
    }
    function normalizeLinkText(url) {
      var parsed = mdurl.parse(url, true);
      if (parsed.hostname) {
        if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
          try {
            parsed.hostname = punycode.toUnicode(parsed.hostname);
          } catch (er) {
          }
        }
      }
      return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
    }
    function MarkdownIt3(presetName, options) {
      if (!(this instanceof MarkdownIt3)) {
        return new MarkdownIt3(presetName, options);
      }
      if (!options) {
        if (!utils.isString(presetName)) {
          options = presetName || {};
          presetName = "default";
        }
      }
      this.inline = new ParserInline();
      this.block = new ParserBlock();
      this.core = new ParserCore();
      this.renderer = new Renderer();
      this.linkify = new LinkifyIt();
      this.validateLink = validateLink;
      this.normalizeLink = normalizeLink;
      this.normalizeLinkText = normalizeLinkText;
      this.utils = utils;
      this.helpers = utils.assign({}, helpers);
      this.options = {};
      this.configure(presetName);
      if (options) {
        this.set(options);
      }
    }
    MarkdownIt3.prototype.set = function(options) {
      utils.assign(this.options, options);
      return this;
    };
    MarkdownIt3.prototype.configure = function(presets) {
      var self = this, presetName;
      if (utils.isString(presets)) {
        presetName = presets;
        presets = config[presetName];
        if (!presets) {
          throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
        }
      }
      if (!presets) {
        throw new Error("Wrong `markdown-it` preset, can't be empty");
      }
      if (presets.options) {
        self.set(presets.options);
      }
      if (presets.components) {
        Object.keys(presets.components).forEach(function(name) {
          if (presets.components[name].rules) {
            self[name].ruler.enableOnly(presets.components[name].rules);
          }
          if (presets.components[name].rules2) {
            self[name].ruler2.enableOnly(presets.components[name].rules2);
          }
        });
      }
      return this;
    };
    MarkdownIt3.prototype.enable = function(list2, ignoreInvalid) {
      var result = [];
      if (!Array.isArray(list2)) {
        list2 = [list2];
      }
      ["core", "block", "inline"].forEach(function(chain) {
        result = result.concat(this[chain].ruler.enable(list2, true));
      }, this);
      result = result.concat(this.inline.ruler2.enable(list2, true));
      var missed = list2.filter(function(name) {
        return result.indexOf(name) < 0;
      });
      if (missed.length && !ignoreInvalid) {
        throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
      }
      return this;
    };
    MarkdownIt3.prototype.disable = function(list2, ignoreInvalid) {
      var result = [];
      if (!Array.isArray(list2)) {
        list2 = [list2];
      }
      ["core", "block", "inline"].forEach(function(chain) {
        result = result.concat(this[chain].ruler.disable(list2, true));
      }, this);
      result = result.concat(this.inline.ruler2.disable(list2, true));
      var missed = list2.filter(function(name) {
        return result.indexOf(name) < 0;
      });
      if (missed.length && !ignoreInvalid) {
        throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
      }
      return this;
    };
    MarkdownIt3.prototype.use = function(plugin4) {
      var args = [this].concat(Array.prototype.slice.call(arguments, 1));
      plugin4.apply(plugin4, args);
      return this;
    };
    MarkdownIt3.prototype.parse = function(src, env) {
      if (typeof src !== "string") {
        throw new Error("Input data should be a String");
      }
      var state = new this.core.State(src, this, env);
      this.core.process(state);
      return state.tokens;
    };
    MarkdownIt3.prototype.render = function(src, env) {
      env = env || {};
      return this.renderer.render(this.parse(src, env), this.options, env);
    };
    MarkdownIt3.prototype.parseInline = function(src, env) {
      var state = new this.core.State(src, this, env);
      state.inlineMode = true;
      this.core.process(state);
      return state.tokens;
    };
    MarkdownIt3.prototype.renderInline = function(src, env) {
      env = env || {};
      return this.renderer.render(this.parseInline(src, env), this.options, env);
    };
    module.exports = MarkdownIt3;
  }
});

// node_modules/markdown-it/index.js
var require_markdown_it = __commonJS({
  "node_modules/markdown-it/index.js"(exports, module) {
    module.exports = require_lib();
  }
});

// src/ast/base.ts
var base_exports = {};
__export(base_exports, {
  getAstValues: () => getAstValues,
  isAst: () => isAst,
  isFunction: () => isFunction,
  isVariable: () => isVariable,
  resolve: () => resolve
});
function isAst(value) {
  return !!value?.$$mdtype;
}
function isFunction(value) {
  return !!(value?.$$mdtype === "Function");
}
function isVariable(value) {
  return !!(value?.$$mdtype === "Variable");
}
function* getAstValues(value) {
  if (value == null || typeof value !== "object")
    return;
  if (Array.isArray(value))
    for (const v of value)
      yield* getAstValues(v);
  if (isAst(value))
    yield value;
  if (Object.getPrototypeOf(value) !== Object.prototype)
    return;
  for (const v of Object.values(value))
    yield* getAstValues(v);
}
function resolve(value, config = {}) {
  if (value == null || typeof value !== "object")
    return value;
  if (Array.isArray(value))
    return value.map((item2) => resolve(item2, config));
  if (isAst(value) && value?.resolve instanceof Function)
    return value.resolve(config);
  if (Object.getPrototypeOf(value) !== Object.prototype)
    return value;
  const output = {};
  for (const [k, v] of Object.entries(value))
    output[k] = resolve(v, config);
  return output;
}

// src/tag.ts
var Tag = class {
  constructor(name = "div", attributes = {}, children = []) {
    this.$$mdtype = "Tag";
    this.name = name;
    this.attributes = attributes;
    this.children = children;
  }
};
Tag.isTag = (tag) => {
  return !!(tag?.$$mdtype === "Tag");
};

// src/schema-types/class.ts
var Class = class {
  validate(value, _config, key) {
    if (typeof value === "string" || typeof value === "object")
      return [];
    return [
      {
        id: "attribute-type-invalid",
        level: "error",
        message: `Attribute '${key}' must be type 'string | object'`
      }
    ];
  }
  transform(value) {
    if (!value || typeof value === "string")
      return value;
    const classes = [];
    for (const [k, v] of Object.entries(value ?? {}))
      if (v)
        classes.push(k);
    return classes.join(" ");
  }
};

// src/schema-types/id.ts
var Id = class {
  validate(value) {
    if (typeof value === "string" && value.match(/^[a-zA-Z]/))
      return [];
    return [
      {
        id: "attribute-value-invalid",
        level: "error",
        message: "The 'id' attribute must start with a letter"
      }
    ];
  }
};

// src/utils.ts
var import_tag = __toModule(require_tag());

// src/ast/variable.ts
var Variable = class {
  constructor(path = []) {
    this.$$mdtype = "Variable";
    this.path = path;
  }
  resolve({ variables } = {}) {
    return variables instanceof Function ? variables(this.path) : this.path.reduce((obj = {}, key) => obj[key], variables);
  }
};

// src/ast/function.ts
var Function2 = class {
  constructor(name, parameters) {
    this.$$mdtype = "Function";
    this.name = name;
    this.parameters = parameters;
  }
  resolve(config = {}) {
    const fn = config?.functions?.[this.name];
    if (!fn)
      return null;
    const parameters = resolve(this.parameters, config);
    return fn.transform?.(parameters, config);
  }
};

// src/utils.ts
var STATES;
(function(STATES2) {
  STATES2[STATES2["normal"] = 0] = "normal";
  STATES2[STATES2["string"] = 1] = "string";
  STATES2[STATES2["escape"] = 2] = "escape";
})(STATES || (STATES = {}));
var OPEN = "{%";
var CLOSE = "%}";
var IDENTIFIER_REGEX = /^[a-zA-Z0-9_-]+$/;
function isIdentifier(s2) {
  return typeof s2 === "string" && IDENTIFIER_REGEX.test(s2);
}
function isPromise(a) {
  return a && typeof a === "object" && typeof a.then === "function";
}
function findTagEnd(content, start = 0) {
  let state = 0;
  for (let pos = start; pos < content.length; pos++) {
    const char = content[pos];
    switch (state) {
      case 1:
        switch (char) {
          case '"':
            state = 0;
            break;
          case "\\":
            state = 2;
            break;
        }
        break;
      case 2:
        state = 1;
        break;
      case 0:
        if (char === '"')
          state = 1;
        else if (content.startsWith(CLOSE, pos))
          return pos;
    }
  }
  return null;
}
function parseTag(content, line, contentStart) {
  try {
    return (0, import_tag.parse)(content, { Variable, Function: Function2 });
  } catch (error2) {
    if (!(error2 instanceof import_tag.SyntaxError))
      throw error2;
    const {
      message,
      location: { start, end }
    } = error2;
    const location = {
      start: { line, character: start.offset + contentStart },
      end: { line: line + 1, character: end.offset + contentStart }
    };
    return { type: "error", meta: { error: { message, location } } };
  }
}
function parseTags(content, firstLine = 0) {
  let line = firstLine + 1;
  const output = [];
  let start = 0;
  for (let pos = 0; pos < content.length; pos++) {
    if (content[pos] === "\n") {
      line++;
      continue;
    }
    if (!content.startsWith(OPEN, pos))
      continue;
    const end = findTagEnd(content, pos);
    if (end == null) {
      pos = pos + OPEN.length;
      continue;
    }
    const text2 = content.slice(pos, end + CLOSE.length);
    const inner = content.slice(pos + OPEN.length, end);
    const lineStart = content.lastIndexOf("\n", pos);
    const lineEnd = content.indexOf("\n", end);
    const lineContent = content.slice(lineStart, lineEnd);
    const tag = parseTag(inner.trim(), line, pos - lineStart);
    const precedingTextEnd = lineContent.trim() === text2 ? lineStart : pos;
    const precedingText = content.slice(start, precedingTextEnd);
    output.push({
      type: "text",
      start,
      end: pos - 1,
      content: precedingText
    });
    output.push({
      map: [line, line + 1],
      position: {
        start: pos - lineStart,
        end: pos - lineStart + text2.length
      },
      start: pos,
      end: pos + text2.length - 1,
      info: text2,
      ...tag
    });
    start = end + CLOSE.length;
    pos = start - 1;
  }
  output.push({
    type: "text",
    start,
    end: content.length - 1,
    content: content.slice(start)
  });
  return output;
}

// src/transformer.ts
var globalAttributes = {
  class: { type: Class, render: true },
  id: { type: Id, render: true }
};
var transformer_default = {
  findSchema(node2, { nodes = {}, tags = {} } = {}) {
    return node2.tag ? tags[node2.tag] : nodes[node2.type];
  },
  attributes(node2, config = {}) {
    const schema = this.findSchema(node2, config) ?? {};
    const output = {};
    const attrs = { ...globalAttributes, ...schema.attributes };
    for (const [key, attr] of Object.entries(attrs)) {
      if (attr.render == false)
        continue;
      const name = typeof attr.render === "string" ? attr.render : key;
      let value = node2.attributes[key];
      if (typeof attr.type === "function") {
        const instance = new attr.type();
        if (instance.transform) {
          value = instance.transform(value, config);
        }
      }
      value = value === void 0 ? attr.default : value;
      if (value === void 0)
        continue;
      output[name] = value;
    }
    if (schema.slots) {
      for (const [key, slot2] of Object.entries(schema.slots)) {
        if (slot2.render === false)
          continue;
        const name = typeof slot2.render === "string" ? slot2.render : key;
        if (node2.slots[key])
          output[name] = this.node(node2.slots[key], config);
      }
    }
    return output;
  },
  children(node2, config = {}) {
    const children = node2.children.flatMap((child) => this.node(child, config));
    if (children.some(isPromise)) {
      return Promise.all(children);
    }
    return children;
  },
  node(node2, config = {}) {
    const schema = this.findSchema(node2, config) ?? {};
    if (schema && schema.transform instanceof Function)
      return schema.transform(node2, config);
    const children = this.children(node2, config);
    if (!schema || !schema.render)
      return children;
    const attributes = this.attributes(node2, config);
    if (isPromise(attributes) || isPromise(children)) {
      return Promise.all([attributes, children]).then((values) => new Tag(schema.render, ...values));
    }
    return new Tag(schema.render, attributes, children);
  }
};

// src/ast/node.ts
var Node = class {
  constructor(type = "node", attributes = {}, children = [], tag) {
    this.$$mdtype = "Node";
    this.errors = [];
    this.lines = [];
    this.inline = false;
    this.attributes = attributes;
    this.children = children;
    this.type = type;
    this.tag = tag;
    this.annotations = [];
    this.slots = {};
  }
  *walk() {
    for (const child of [...Object.values(this.slots), ...this.children]) {
      yield child;
      yield* child.walk();
    }
  }
  push(node2) {
    this.children.push(node2);
  }
  resolve(config = {}) {
    return Object.assign(new Node(), this, {
      children: this.children.map((child) => child.resolve(config)),
      attributes: resolve(this.attributes, config),
      slots: Object.fromEntries(Object.entries(this.slots).map(([name, slot2]) => [
        name,
        slot2.resolve(config)
      ]))
    });
  }
  findSchema(config = {}) {
    return transformer_default.findSchema(this, config);
  }
  transformAttributes(config = {}) {
    return transformer_default.attributes(this, config);
  }
  transformChildren(config) {
    return transformer_default.children(this, config);
  }
  transform(config) {
    return transformer_default.node(this, config);
  }
};

// src/ast/index.ts
var AstTypes = {
  Function: Function2,
  Node,
  Variable
};
function reviver(_, value) {
  if (!value)
    return value;
  const klass = AstTypes[value.$$mdtype];
  return klass ? Object.assign(new klass(), value) : value;
}
function fromJSON(text2) {
  return JSON.parse(text2, reviver);
}
var ast_default = {
  ...AstTypes,
  ...base_exports,
  fromJSON
};

// src/formatter.ts
var SPACE = " ";
var SEP = ", ";
var NL = "\n";
var OL = ".";
var UL = "-";
var MAX_TAG_OPENING_WIDTH = 80;
var WRAPPING_TYPES = ["strong", "em", "s"];
var max = (a, b) => Math.max(a, b);
var increment = (o, n = 2) => ({
  ...o,
  indent: (o.indent || 0) + n
});
function* formatChildren(a, options) {
  for (const child of a.children) {
    yield* formatValue(child, options);
  }
}
function* formatInline(g) {
  yield [...g].join("").trim();
}
function* formatTableRow(items) {
  yield `| ${items.join(" | ")} |`;
}
function formatScalar(v) {
  if (v === void 0) {
    return void 0;
  }
  if (ast_default.isAst(v)) {
    return format(v);
  }
  if (v === null) {
    return "null";
  }
  if (Array.isArray(v)) {
    return "[" + v.map(formatScalar).join(SEP) + "]";
  }
  if (typeof v === "object") {
    return "{" + Object.entries(v).map(([key, value]) => `${isIdentifier(key) ? key : `"${key}"`}: ${formatScalar(value)}`).join(SEP) + "}";
  }
  return JSON.stringify(v);
}
function formatAnnotationValue(a) {
  const formattedValue = formatScalar(a.value);
  if (formattedValue === void 0)
    return void 0;
  if (a.name === "primary")
    return formattedValue;
  if (a.name === "id" && typeof a.value === "string" && isIdentifier(a.value))
    return "#" + a.value;
  if (a.type === "class" && isIdentifier(a.name))
    return "." + a.name;
  return `${a.name}=${formattedValue}`;
}
function* formatAttributes(n) {
  for (const [key, value] of Object.entries(n.attributes)) {
    if (key === "class" && typeof value === "object" && !ast_default.isAst(value))
      for (const name of Object.keys(value)) {
        yield formatAnnotationValue({ type: "class", name, value });
      }
    else
      yield formatAnnotationValue({ type: "attribute", name: key, value });
  }
}
function* formatAnnotations(n) {
  if (n.annotations.length) {
    yield OPEN + SPACE;
    yield n.annotations.map(formatAnnotationValue).join(SPACE);
    yield SPACE + CLOSE;
  }
}
function* formatVariable(v) {
  yield "$";
  yield v.path.map((p, i) => {
    if (i === 0)
      return p;
    if (isIdentifier(p))
      return "." + p;
    if (typeof p === "number")
      return `[${p}]`;
    return `["${p}"]`;
  }).join("");
}
function* formatFunction(f) {
  yield f.name;
  yield "(";
  yield Object.values(f.parameters).map(formatScalar).join(SEP);
  yield ")";
}
function* trimStart(g) {
  let n;
  do {
    const { value, done } = g.next();
    if (done)
      return;
    n = value.trimStart();
  } while (!n.length);
  yield n;
  yield* g;
}
function* escapeMarkdownCharacters(s2, characters) {
  yield s2.replace(characters, "\\$&").replace(new RegExp("\xA0", "g"), "&nbsp;");
}
function* formatNode(n, o = {}) {
  const no = { ...o, parent: n };
  const indent = SPACE.repeat(no.indent || 0);
  switch (n.type) {
    case "document": {
      if (n.attributes.frontmatter && n.attributes.frontmatter.length) {
        yield "---" + NL + n.attributes.frontmatter + NL + "---" + NL + NL;
      }
      yield* trimStart(formatChildren(n, no));
      break;
    }
    case "heading": {
      yield NL;
      yield indent;
      yield "#".repeat(n.attributes.level || 1);
      yield SPACE;
      yield* trimStart(formatChildren(n, no));
      yield* formatAnnotations(n);
      yield NL;
      break;
    }
    case "paragraph": {
      yield NL;
      yield* formatChildren(n, no);
      yield* formatAnnotations(n);
      yield NL;
      break;
    }
    case "inline": {
      yield indent;
      yield* formatChildren(n, no);
      break;
    }
    case "image": {
      yield "!";
      yield "[";
      yield* formatValue(n.attributes.alt, no);
      yield "]";
      yield "(";
      yield* typeof n.attributes.src === "string" ? escapeMarkdownCharacters(n.attributes.src, /[()]/) : formatValue(n.attributes.src, no);
      if (n.attributes.title) {
        yield SPACE + `"${n.attributes.title}"`;
      }
      yield ")";
      break;
    }
    case "link": {
      yield "[";
      yield* formatChildren(n, no);
      yield "]";
      yield "(";
      yield* typeof n.attributes.href === "string" ? escapeMarkdownCharacters(n.attributes.href, /[()]/g) : formatValue(n.attributes.href, no);
      if (n.attributes.title) {
        yield SPACE + `"${n.attributes.title}"`;
      }
      yield ")";
      break;
    }
    case "text": {
      const { content } = n.attributes;
      if (ast_default.isAst(content)) {
        yield OPEN + SPACE;
        yield* formatValue(content, no);
        yield SPACE + CLOSE;
      } else {
        if (o.parent && WRAPPING_TYPES.includes(o.parent.type)) {
          yield* escapeMarkdownCharacters(content, /[*_~]/g);
        } else {
          yield* escapeMarkdownCharacters(content, /^[*>#]/);
        }
      }
      break;
    }
    case "blockquote": {
      const prefix = ">" + SPACE;
      yield n.children.map((child) => format(child, no).trimStart()).map((d) => NL + indent + prefix + d).join(indent + prefix);
      break;
    }
    case "hr": {
      yield NL;
      yield indent;
      yield "---";
      yield NL;
      break;
    }
    case "fence": {
      yield NL;
      yield indent;
      const innerFence = n.attributes.content.match(/`{3,}/g) || [];
      const innerFenceLength = innerFence.map((s2) => s2.length).reduce(max, 0);
      const boundary = "`".repeat(innerFenceLength ? innerFenceLength + 1 : 3);
      yield boundary;
      if (n.attributes.language)
        yield n.attributes.language;
      if (n.annotations.length)
        yield SPACE;
      yield* formatAnnotations(n);
      yield NL;
      yield indent;
      yield n.attributes.content.split(NL).join(NL + indent);
      yield boundary;
      yield NL;
      break;
    }
    case "tag": {
      if (!n.inline) {
        yield NL;
        yield indent;
      }
      const open = OPEN + SPACE;
      const attributes = [...formatAttributes(n)].filter((v) => v !== void 0);
      const tag = [open + n.tag, ...attributes];
      const inlineTag = tag.join(SPACE);
      const isLongTagOpening = inlineTag.length + open.length * 2 > (o.maxTagOpeningWidth || MAX_TAG_OPENING_WIDTH);
      yield (!n.inline && isLongTagOpening ? tag.join(NL + SPACE.repeat(open.length) + indent) : inlineTag) + SPACE + (n.children.length ? "" : "/") + CLOSE;
      if (n.children.length) {
        yield* formatChildren(n, no.allowIndentation ? increment(no) : no);
        if (!n.inline) {
          yield indent;
        }
        yield OPEN + SPACE + "/" + n.tag + SPACE + CLOSE;
      }
      if (!n.inline) {
        yield NL;
      }
      break;
    }
    case "list": {
      const isLoose = n.children.some((n2) => n2.children.some((c) => c.type === "paragraph"));
      for (let i = 0; i < n.children.length; i++) {
        const prefix = n.attributes.ordered ? `${i === 0 ? n.attributes.start ?? "1" : "1"}${n.attributes.marker ?? OL}` : n.attributes.marker ?? UL;
        let d = format(n.children[i], increment(no, prefix.length + 1));
        if (!isLoose || i === n.children.length - 1) {
          d = d.trim();
        }
        yield NL + indent + prefix + " " + d;
      }
      yield NL;
      break;
    }
    case "item": {
      for (let i = 0; i < n.children.length; i++) {
        yield* formatValue(n.children[i], no);
        if (i === 0)
          yield* formatAnnotations(n);
      }
      break;
    }
    case "strong": {
      yield n.attributes.marker ?? "**";
      yield* formatInline(formatChildren(n, no));
      yield n.attributes.marker ?? "**";
      break;
    }
    case "em": {
      yield n.attributes.marker ?? "*";
      yield* formatInline(formatChildren(n, no));
      yield n.attributes.marker ?? "*";
      break;
    }
    case "code": {
      yield "`";
      yield* formatInline(formatValue(n.attributes.content, no));
      yield "`";
      break;
    }
    case "s": {
      yield "~~";
      yield* formatInline(formatChildren(n, no));
      yield "~~";
      break;
    }
    case "hardbreak": {
      yield "\\" + NL;
      yield indent;
      break;
    }
    case "softbreak": {
      yield NL;
      yield indent;
      break;
    }
    case "table": {
      const table3 = [...formatChildren(n, increment(no))];
      if (o.parent && o.parent.type === "tag" && o.parent.tag === "table") {
        for (let i = 0; i < table3.length; i++) {
          const row = table3[i];
          if (typeof row === "string") {
            if (row.trim().length) {
              yield NL;
              yield row;
            }
          } else {
            if (i !== 0) {
              yield NL;
              yield indent + "---";
            }
            for (const d of row) {
              yield NL + indent + UL + " " + d;
            }
          }
        }
        yield NL;
      } else {
        const widths = [];
        for (const row of table3) {
          for (let i = 0; i < row.length; i++) {
            widths[i] = widths[i] ? Math.max(widths[i], row[i].length) : row[i].length;
          }
        }
        const [head, ...rows] = table3;
        yield NL;
        yield* formatTableRow(head.map((cell, i) => cell + SPACE.repeat(widths[i] - cell.length)));
        yield NL;
        yield* formatTableRow(head.map((cell, i) => "-".repeat(widths[i])));
        yield NL;
        for (const row of rows) {
          yield* formatTableRow(row.map((cell, i) => cell + SPACE.repeat(widths[i] - cell.length)));
          yield NL;
        }
      }
      break;
    }
    case "thead": {
      const [head] = [...formatChildren(n, no)];
      yield head || [];
      break;
    }
    case "tr": {
      yield [...formatChildren(n, no)];
      break;
    }
    case "td":
    case "th": {
      yield [...formatChildren(n, no), ...formatAnnotations(n)].join("").trim();
      break;
    }
    case "tbody": {
      yield* formatChildren(n, no);
      break;
    }
    case "comment": {
      yield "<!-- " + n.attributes.content + " -->\n";
      break;
    }
  }
}
function* formatValue(v, o = {}) {
  switch (typeof v) {
    case "undefined":
      break;
    case "boolean":
    case "number":
    case "string": {
      yield v.toString();
      break;
    }
    case "object": {
      if (v === null)
        break;
      if (Array.isArray(v)) {
        for (const n of v)
          yield* formatValue(n, o);
        break;
      }
      switch (v.$$mdtype) {
        case "Function": {
          yield* formatFunction(v);
          break;
        }
        case "Node":
          yield* formatNode(v, o);
          break;
        case "Variable": {
          yield* formatVariable(v);
          break;
        }
        default:
          throw new Error(`Unimplemented: "${v.$$mdtype}"`);
      }
      break;
    }
  }
}
function format(v, options) {
  let doc = "";
  for (const s2 of formatValue(v, options))
    doc += s2;
  return doc.trimStart();
}

// src/tags/conditional.ts
function truthy(value) {
  return value !== false && value !== void 0 && value !== null;
}
function renderConditions(node2) {
  const conditions = [
    { condition: node2.attributes.primary, children: [] }
  ];
  for (const child of node2.children) {
    if (child.type === "tag" && child.tag === "else")
      conditions.push({
        condition: "primary" in child.attributes ? child.attributes.primary : true,
        children: []
      });
    else
      conditions[conditions.length - 1].children.push(child);
  }
  return conditions;
}
var tagIf = {
  attributes: {
    primary: { type: Object, render: false }
  },
  transform(node2, config) {
    const conditions = renderConditions(node2);
    for (const { condition, children } of conditions)
      if (truthy(condition)) {
        const nodes = children.flatMap((child) => child.transform(config));
        if (nodes.some(isPromise)) {
          return Promise.all(nodes).then((nodes2) => nodes2.flat());
        }
        return nodes;
      }
    return [];
  }
};
var tagElse = {
  selfClosing: true,
  attributes: {
    primary: { type: Object, render: false }
  }
};

// src/functions/index.ts
var and = {
  transform(parameters) {
    return Object.values(parameters).every((x) => truthy(x));
  }
};
var or = {
  transform(parameters) {
    return Object.values(parameters).find((x) => truthy(x)) !== void 0;
  }
};
var not = {
  parameters: {
    0: { required: true }
  },
  transform(parameters) {
    return !truthy(parameters[0]);
  }
};
var equals = {
  transform(parameters) {
    const values = Object.values(parameters);
    return values.every((v) => v === values[0]);
  }
};
var debug = {
  transform(parameters) {
    return JSON.stringify(parameters[0], null, 2);
  }
};
var defaultFn = {
  transform(parameters) {
    return parameters[0] === void 0 ? parameters[1] : parameters[0];
  }
};
var functions_default = { and, or, not, equals, default: defaultFn, debug };

// src/transforms/table.ts
function convertToRow(node2, cellType = "td") {
  node2.type = "tr";
  node2.attributes = {};
  for (const cell of node2.children)
    cell.type = cellType;
  return node2;
}
function transform(document2) {
  for (const node2 of document2.walk()) {
    if (node2.type !== "tag" || node2.tag !== "table")
      continue;
    const [first, ...rest] = node2.children;
    if (!first || first.type === "table")
      continue;
    const table3 = new ast_default.Node("table", node2.attributes, [
      new ast_default.Node("thead"),
      new ast_default.Node("tbody")
    ]);
    const [thead2, tbody2] = table3.children;
    if (first.type === "list")
      thead2.push(convertToRow(first, "th"));
    for (const row of rest) {
      if (row.type === "list")
        convertToRow(row);
      else if (row.type === "tag" && row.tag === "if") {
        const children = [];
        for (const child of row.children) {
          if (child.type === "hr")
            continue;
          if (child.type === "list")
            convertToRow(child);
          children.push(child);
        }
        row.children = children;
      } else
        continue;
      tbody2.push(row);
    }
    node2.children = [table3];
  }
}

// src/transforms/index.ts
var transforms_default = [transform];

// src/parser.ts
var mappings = {
  ordered_list: "list",
  bullet_list: "list",
  code_inline: "code",
  list_item: "item",
  variable: "text"
};
function annotate(node2, attributes) {
  for (const attribute of attributes) {
    node2.annotations.push(attribute);
    const { name, value, type } = attribute;
    if (type === "attribute") {
      if (node2.attributes[name] !== void 0)
        node2.errors.push({
          id: "duplicate-attribute",
          level: "warning",
          message: `Attribute '${name}' already set`
        });
      node2.attributes[name] = value;
    } else if (type === "class")
      if (node2.attributes.class)
        node2.attributes.class[name] = value;
      else
        node2.attributes.class = { [name]: value };
  }
}
function handleAttrs(token, type) {
  switch (type) {
    case "heading":
      return { level: Number(token.tag.replace("h", "")) };
    case "list": {
      const attrs = token.attrs ? Object.fromEntries(token.attrs) : void 0;
      const ordered = token.type.startsWith("ordered");
      return ordered && attrs?.start ? { ordered: true, start: attrs.start, marker: token.markup } : { ordered, marker: token.markup };
    }
    case "link": {
      const attrs = Object.fromEntries(token.attrs);
      return attrs.title ? { href: attrs.href, title: attrs.title } : { href: attrs.href };
    }
    case "image": {
      const attrs = Object.fromEntries(token.attrs);
      return attrs.title ? { alt: token.content, src: attrs.src, title: attrs.title } : { alt: token.content, src: attrs.src };
    }
    case "em":
    case "strong":
      return { marker: token.markup };
    case "text":
    case "code":
    case "comment":
      return { content: (token.meta || {}).variable || token.content };
    case "fence": {
      const [language] = token.info.split(" ", 1);
      return language === "" || language === OPEN ? { content: token.content } : { content: token.content, language };
    }
    case "td":
    case "th": {
      if (token.attrs) {
        const attrs = Object.fromEntries(token.attrs);
        let align;
        if (attrs.style) {
          if (attrs.style.includes("left")) {
            align = "left";
          } else if (attrs.style.includes("center")) {
            align = "center";
          } else if (attrs.style.includes("right")) {
            align = "right";
          }
        }
        if (align) {
          return { align };
        }
      }
      return {};
    }
    default:
      return {};
  }
}
function handleToken(token, nodes, file, handleSlots, addLocation, inlineParent) {
  if (token.type === "frontmatter") {
    nodes[0].attributes.frontmatter = token.content;
    return;
  }
  if (token.hidden || token.type === "text" && token.content === "")
    return;
  const errors = token.errors || [];
  const parent = nodes[nodes.length - 1];
  const { tag, attributes, error: error2 } = token.meta || {};
  if (token.type === "annotation") {
    if (inlineParent)
      return annotate(inlineParent, attributes);
    return parent.errors.push({
      id: "no-inline-annotations",
      level: "error",
      message: `Can't apply inline annotations to '${parent.type}'`
    });
  }
  let typeName = token.type.replace(/_(open|close)$/, "");
  if (mappings[typeName])
    typeName = mappings[typeName];
  if (typeName === "error") {
    const { message, location } = error2;
    errors.push({ id: "parse-error", level: "critical", message, location });
  }
  if (token.nesting < 0) {
    if (parent.type === typeName && parent.tag === tag) {
      if (parent.lines && token.map)
        parent.lines.push(...token.map);
      return nodes.pop();
    }
    errors.push({
      id: "missing-opening",
      level: "critical",
      message: `Node '${typeName}' is missing opening`
    });
  }
  const attrs = handleAttrs(token, typeName);
  const node2 = new Node(typeName, attrs, void 0, tag || void 0);
  const { position = {} } = token;
  node2.errors = errors;
  if (addLocation !== false) {
    node2.lines = token.map || parent.lines || [];
    node2.location = {
      file,
      start: {
        line: node2.lines[0],
        character: position.start
      },
      end: {
        line: node2.lines[1],
        character: position.end
      }
    };
  }
  if (inlineParent)
    node2.inline = true;
  if (attributes && ["tag", "fence", "image"].includes(typeName))
    annotate(node2, attributes);
  if (handleSlots && tag === "slot" && typeof node2.attributes.primary === "string")
    parent.slots[node2.attributes.primary] = node2;
  else
    parent.push(node2);
  if (token.nesting > 0)
    nodes.push(node2);
  if (!Array.isArray(token.children))
    return;
  if (node2.type === "inline")
    inlineParent = parent;
  nodes.push(node2);
  const isLeafNode = typeName === "image";
  if (!isLeafNode) {
    for (const child of token.children)
      handleToken(child, nodes, file, handleSlots, addLocation, inlineParent);
  }
  nodes.pop();
}
function parser(tokens, args) {
  const doc = new Node("document");
  const nodes = [doc];
  if (typeof args === "string")
    args = { file: args };
  for (const token of tokens)
    handleToken(token, nodes, args?.file, args?.slots, args?.location);
  if (nodes.length > 1)
    for (const node2 of nodes.slice(1))
      node2.errors.push({
        id: "missing-closing",
        level: "critical",
        message: `Node '${node2.tag || node2.type}' is missing closing`
      });
  for (const transform3 of transforms_default)
    transform3(doc);
  return doc;
}

// src/schema.ts
var schema_exports = {};
__export(schema_exports, {
  blockquote: () => blockquote,
  code: () => code,
  comment: () => comment,
  document: () => document,
  em: () => em,
  error: () => error,
  fence: () => fence,
  hardbreak: () => hardbreak,
  heading: () => heading$1,
  hr: () => hr,
  image: () => image,
  inline: () => inline,
  item: () => item,
  link: () => link$1,
  list: () => list,
  node: () => node,
  paragraph: () => paragraph,
  s: () => s,
  softbreak: () => softbreak,
  strong: () => strong,
  table: () => table,
  tbody: () => tbody,
  td: () => td,
  text: () => text,
  th: () => th,
  thead: () => thead,
  tr: () => tr
});
var document = {
  render: "article",
  children: [
    "heading",
    "paragraph",
    "image",
    "table",
    "tag",
    "fence",
    "blockquote",
    "comment",
    "list",
    "hr"
  ],
  attributes: {
    frontmatter: { render: false }
  }
};
var heading$1 = {
  children: ["inline"],
  attributes: {
    level: { type: Number, render: false, required: true }
  },
  transform(node2, config) {
    return new Tag(`h${node2.attributes["level"]}`, node2.transformAttributes(config), node2.transformChildren(config));
  }
};
var paragraph = {
  render: "p",
  children: ["inline"]
};
var image = {
  render: "img",
  attributes: {
    src: { type: String, required: true },
    alt: { type: String },
    title: { type: String }
  }
};
var fence = {
  render: "pre",
  attributes: {
    content: { type: String, render: false, required: true },
    language: { type: String, render: "data-language" },
    process: { type: Boolean, render: false, default: true }
  },
  transform(node2, config) {
    const attributes = node2.transformAttributes(config);
    const children = node2.children.length ? node2.transformChildren(config) : [node2.attributes.content];
    return new Tag("pre", attributes, children);
  }
};
var blockquote = {
  render: "blockquote",
  children: [
    "heading",
    "paragraph",
    "image",
    "table",
    "tag",
    "fence",
    "blockquote",
    "list",
    "hr"
  ]
};
var item = {
  render: "li",
  children: [
    "inline",
    "heading",
    "paragraph",
    "image",
    "table",
    "tag",
    "fence",
    "blockquote",
    "list",
    "hr"
  ]
};
var list = {
  children: ["item"],
  attributes: {
    ordered: { type: Boolean, render: false, required: true },
    start: { type: Number },
    marker: { type: String, render: false }
  },
  transform(node2, config) {
    return new Tag(node2.attributes.ordered ? "ol" : "ul", node2.transformAttributes(config), node2.transformChildren(config));
  }
};
var hr = {
  render: "hr"
};
var table = {
  render: "table"
};
var td = {
  render: "td",
  children: [
    "inline",
    "heading",
    "paragraph",
    "image",
    "table",
    "tag",
    "fence",
    "blockquote",
    "list",
    "hr"
  ],
  attributes: {
    align: { type: String },
    colspan: { type: Number, render: "colSpan" },
    rowspan: { type: Number, render: "rowSpan" }
  }
};
var th = {
  render: "th",
  attributes: {
    width: { type: Number },
    align: { type: String },
    colspan: { type: Number, render: "colSpan" },
    rowspan: { type: Number, render: "rowSpan" }
  }
};
var tr = {
  render: "tr",
  children: ["th", "td"]
};
var tbody = {
  render: "tbody",
  children: ["tr", "tag"]
};
var thead = {
  render: "thead",
  children: ["tr"]
};
var strong = {
  render: "strong",
  children: ["em", "s", "link", "code", "text", "tag"],
  attributes: {
    marker: { type: String, render: false }
  }
};
var em = {
  render: "em",
  children: ["strong", "s", "link", "code", "text", "tag"],
  attributes: {
    marker: { type: String, render: false }
  }
};
var s = {
  render: "s",
  children: ["strong", "em", "link", "code", "text", "tag"]
};
var inline = {
  children: [
    "strong",
    "em",
    "s",
    "code",
    "text",
    "tag",
    "link",
    "image",
    "hardbreak",
    "softbreak",
    "comment"
  ]
};
var link$1 = {
  render: "a",
  children: ["strong", "em", "s", "code", "text", "tag"],
  attributes: {
    href: { type: String, required: true },
    title: { type: String }
  }
};
var code = {
  render: "code",
  attributes: {
    content: { type: String, render: false, required: true }
  },
  transform(node2, config) {
    const attributes = node2.transformAttributes(config);
    return new Tag("code", attributes, [node2.attributes.content]);
  }
};
var text = {
  attributes: {
    content: { type: String, required: true }
  },
  transform(node2) {
    return node2.attributes.content;
  }
};
var hardbreak = {
  render: "br"
};
var softbreak = {
  transform() {
    return " ";
  }
};
var comment = {
  attributes: {
    content: { type: String, required: true }
  }
};
var error = {};
var node = {};

// src/renderers/html.ts
var import_markdown_it = __toModule(require_markdown_it());
var { escapeHtml } = (0, import_markdown_it.default)().utils;
var voidElements = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function render(node2) {
  if (typeof node2 === "string" || typeof node2 === "number")
    return escapeHtml(String(node2));
  if (Array.isArray(node2))
    return node2.map(render).join("");
  if (node2 === null || typeof node2 !== "object" || !Tag.isTag(node2))
    return "";
  const { name, attributes, children = [] } = node2;
  if (!name)
    return render(children);
  let output = `<${name}`;
  for (const [k, v] of Object.entries(attributes ?? {}))
    output += ` ${k.toLowerCase()}="${escapeHtml(String(v))}"`;
  output += ">";
  if (voidElements.has(name))
    return output;
  if (children.length)
    output += render(children);
  output += `</${name}>`;
  return output;
}

// src/renderers/react/react.ts
function tagName(name, components) {
  return typeof name !== "string" ? name : name[0] !== name[0].toUpperCase() ? name : components instanceof Function ? components(name) : components[name];
}
function dynamic(node2, React, { components = {} } = {}) {
  function deepRender2(value) {
    if (value == null || typeof value !== "object")
      return value;
    if (Array.isArray(value))
      return value.map((item2) => deepRender2(item2));
    if (value.$$mdtype === "Tag")
      return render3(value);
    if (typeof value !== "object")
      return value;
    const output = {};
    for (const [k, v] of Object.entries(value))
      output[k] = deepRender2(v);
    return output;
  }
  function render3(node3) {
    if (Array.isArray(node3))
      return React.createElement(React.Fragment, null, ...node3.map(render3));
    if (node3 === null || typeof node3 !== "object" || !Tag.isTag(node3))
      return node3;
    const {
      name,
      attributes: { class: className, ...attrs } = {},
      children = []
    } = node3;
    if (className)
      attrs.className = className;
    return React.createElement(tagName(name, components), Object.keys(attrs).length == 0 ? null : deepRender2(attrs), ...children.map(render3));
  }
  return render3(node2);
}

// src/renderers/react/static.ts
function tagName2(name, components) {
  return typeof name !== "string" ? "Fragment" : name[0] !== name[0].toUpperCase() ? name : components instanceof Function ? components(name) : components[name];
}
function renderArray(children) {
  return children.map(render2).join(", ");
}
function deepRender(value) {
  if (value == null || typeof value !== "object")
    return JSON.stringify(value);
  if (Array.isArray(value))
    return `[${value.map((item2) => deepRender(item2)).join(", ")}]`;
  if (value.$$mdtype === "Tag")
    return render2(value);
  if (typeof value !== "object")
    return JSON.stringify(value);
  const object = Object.entries(value).map(([k, v]) => [JSON.stringify(k), deepRender(v)].join(": ")).join(", ");
  return `{${object}}`;
}
function render2(node2) {
  if (Array.isArray(node2))
    return `React.createElement(React.Fragment, null, ${renderArray(node2)})`;
  if (node2 === null || typeof node2 !== "object" || !Tag.isTag(node2))
    return JSON.stringify(node2);
  const {
    name,
    attributes: { class: className, ...attrs } = {},
    children = []
  } = node2;
  if (className)
    attrs.className = className;
  return `React.createElement(
    tagName(${JSON.stringify(name)}, components),
    ${Object.keys(attrs).length == 0 ? "null" : deepRender(attrs)},
    ${renderArray(children)})`;
}
function reactStatic(node2) {
  return `
  (({components = {}} = {}) => {
    ${tagName2}
    return ${render2(node2)};
  })
`;
}

// src/renderers/index.ts
var renderers_default = { html: render, react: dynamic, reactStatic };

// src/tags/partial.ts
var PartialFile = class {
  validate(file, config) {
    const { partials = {} } = config;
    const partial2 = partials[file];
    if (!partial2)
      return [
        {
          id: "attribute-value-invalid",
          level: "error",
          message: `Partial \`${file}\` not found. The 'file' attribute must be set in \`config.partials\``
        }
      ];
    return [];
  }
};
var partial = {
  inline: false,
  selfClosing: true,
  attributes: {
    file: { type: PartialFile, render: false, required: true },
    variables: { type: Object, render: false }
  },
  transform(node2, config) {
    const { partials = {} } = config;
    const { file, variables } = node2.attributes;
    const partial2 = partials[file];
    if (!partial2)
      return null;
    const scopedConfig = {
      ...config,
      variables: {
        ...config.variables,
        ...variables,
        ["$$partial:filename"]: file
      }
    };
    const transformChildren = (part) => part.resolve(scopedConfig).transformChildren(scopedConfig);
    return Array.isArray(partial2) ? partial2.flatMap(transformChildren) : transformChildren(partial2);
  }
};

// src/tags/table.ts
var table2 = {
  children: ["table"],
  inline: false
};

// src/tags/slot.ts
var slot = {
  attributes: {
    primary: { type: String, required: true }
  }
};

// src/tags/index.ts
var tags_default = {
  else: tagElse,
  if: tagIf,
  partial,
  slot,
  table: table2
};

// src/tokenizer/index.ts
var import_lib = __toModule(require_lib());

// src/tokenizer/plugins/annotations.ts
var import_tag7 = __toModule(require_tag());
function createToken(state, content, contentStart) {
  try {
    const { type, meta, nesting = 0 } = (0, import_tag7.parse)(content, { Variable, Function: Function2 });
    const token = state.push(type, "", nesting);
    token.info = content;
    token.meta = meta;
    if (!state.delimiters) {
      state.delimiters = [];
    }
    return token;
  } catch (error2) {
    if (!(error2 instanceof import_tag7.SyntaxError))
      throw error2;
    const {
      message,
      location: { start, end }
    } = error2;
    const location = contentStart ? {
      start: { offset: start.offset + contentStart },
      end: { offset: end.offset + contentStart }
    } : null;
    const token = state.push("error", "", 0);
    token.meta = { error: { message, location } };
    return token;
  }
}
function block(state, startLine, endLine, silent) {
  const start = state.bMarks[startLine] + state.tShift[startLine];
  const finish = state.eMarks[startLine];
  if (!state.src.startsWith(OPEN, start))
    return false;
  const tagEnd = findTagEnd(state.src, start);
  const lastPossible = state.src.slice(0, finish).trim().length;
  if (!tagEnd || tagEnd < lastPossible - CLOSE.length)
    return false;
  const contentStart = start + OPEN.length;
  const content = state.src.slice(contentStart, tagEnd).trim();
  const lines = state.src.slice(start, tagEnd + CLOSE.length).split("\n").length;
  if (content[0] === "$")
    return false;
  if (silent)
    return true;
  const token = createToken(state, content, contentStart);
  token.map = [startLine, startLine + lines];
  state.line += lines;
  return true;
}
function inline2(state, silent) {
  if (!state.src.startsWith(OPEN, state.pos))
    return false;
  const tagEnd = findTagEnd(state.src, state.pos);
  if (!tagEnd)
    return false;
  const content = state.src.slice(state.pos + OPEN.length, tagEnd);
  if (!silent)
    createToken(state, content.trim());
  state.pos = tagEnd + CLOSE.length;
  return true;
}
function core(state) {
  let token;
  for (token of state.tokens) {
    if (token.type !== "fence")
      continue;
    if (token.info.includes(OPEN)) {
      const start = token.info.indexOf(OPEN);
      const end = findTagEnd(token.info, start);
      const content = token.info.slice(start + OPEN.length, end);
      try {
        const { meta } = (0, import_tag7.parse)(content.trim(), { Variable, Function: Function2 });
        token.meta = meta;
      } catch (error2) {
        if (!(error2 instanceof import_tag7.SyntaxError))
          throw error2;
        if (!token.errors)
          token.errors = [];
        token.errors.push({
          id: "fence-tag-error",
          level: "error",
          message: `Syntax error in fence tag: ${error2.message}`
        });
      }
    }
    if (token?.meta?.attributes?.find((attr) => attr.name === "process" && !attr.value))
      continue;
    token.children = parseTags(token.content, token.map[0]);
  }
}
function plugin(md) {
  md.block.ruler.before("paragraph", "annotations", block, {
    alt: ["paragraph", "blockquote"]
  });
  md.inline.ruler.push("containers", inline2);
  md.core.ruler.push("annotations", core);
}

// src/tokenizer/plugins/frontmatter.ts
var fence2 = "---";
function getLine(state, n) {
  return state.src.slice(state.bMarks[n], state.eMarks[n]).trim();
}
function findClose(state, endLine) {
  for (let line = 1; line < endLine; line++)
    if (getLine(state, line) === fence2)
      return line;
}
function block2(state, startLine, endLine, silent) {
  if (startLine != 0 || getLine(state, 0) != fence2)
    return false;
  const close = findClose(state, endLine);
  if (!close)
    return false;
  if (silent)
    return true;
  const token = state.push("frontmatter", "", 0);
  token.content = state.src.slice(state.eMarks[0], state.bMarks[close]).trim();
  token.map = [0, close];
  token.hidden = true;
  state.line = close + 1;
  return true;
}
function plugin2(md) {
  md.block.ruler.before("hr", "frontmatter", block2);
}

// src/tokenizer/plugins/comments.ts
var OPEN2 = "<!--";
var CLOSE2 = "-->";
function block3(state, startLine, endLine, silent) {
  const start = state.bMarks[startLine] + state.tShift[startLine];
  if (!state.src.startsWith(OPEN2, start))
    return false;
  const close = state.src.indexOf(CLOSE2, start);
  if (!close)
    return false;
  if (silent)
    return true;
  const content = state.src.slice(start + OPEN2.length, close);
  const lines = content.split("\n").length;
  const token = state.push("comment", "", 0);
  token.content = content.trim();
  token.map = [startLine, startLine + lines];
  state.line += lines;
  return true;
}
function inline3(state, silent) {
  if (!state.src.startsWith(OPEN2, state.pos))
    return false;
  const close = state.src.indexOf(CLOSE2, state.pos);
  if (!close)
    return false;
  if (silent)
    return true;
  const content = state.src.slice(state.pos + OPEN2.length, close);
  const token = state.push("comment", "", 0);
  token.content = content.trim();
  state.pos = close + CLOSE2.length;
  return true;
}
function plugin3(md) {
  md.block.ruler.before("table", "comment", block3, { alt: ["paragraph"] });
  md.inline.ruler.push("comment", inline3);
}

// src/tokenizer/index.ts
var Tokenizer = class {
  constructor(config = {}) {
    this.parser = new import_lib.default(config);
    this.parser.use(plugin, "annotations", {});
    this.parser.use(plugin2, "frontmatter", {});
    this.parser.disable([
      "lheading",
      "code"
    ]);
    if (config.allowComments)
      this.parser.use(plugin3, "comments", {});
  }
  tokenize(content) {
    return this.parser.parse(content.toString(), {});
  }
};

// src/validator.ts
var TypeMappings = {
  String,
  Number,
  Array,
  Object,
  Boolean
};
function validateType(type, value, config, key) {
  if (!type)
    return true;
  if (ast_default.isFunction(value) && config.validation?.validateFunctions) {
    const schema = config.functions?.[value.name];
    return !schema?.returns ? true : Array.isArray(schema.returns) ? schema.returns.find((t) => t === type) !== void 0 : schema.returns === type;
  }
  if (ast_default.isAst(value))
    return true;
  if (Array.isArray(type))
    return type.some((t) => validateType(t, value, config, key));
  if (typeof type === "string")
    type = TypeMappings[type];
  if (typeof type === "function") {
    const instance = new type();
    if (instance.validate) {
      return instance.validate(value, config, key);
    }
  }
  return value != null && value.constructor === type;
}
function typeToString(type) {
  if (typeof type === "string")
    return type;
  if (Array.isArray(type))
    return type.map(typeToString).join(" | ");
  return type.name;
}
function validateFunction(fn, config) {
  const schema = config.functions?.[fn.name];
  const errors = [];
  if (!schema)
    return [
      {
        id: "function-undefined",
        level: "critical",
        message: `Undefined function: '${fn.name}'`
      }
    ];
  if (schema.validate)
    errors.push(...schema.validate(fn, config));
  if (schema.parameters) {
    for (const [key, value] of Object.entries(fn.parameters)) {
      const param = schema.parameters?.[key];
      if (!param) {
        errors.push({
          id: "parameter-undefined",
          level: "error",
          message: `Invalid parameter: '${key}'`
        });
        continue;
      }
      if (ast_default.isAst(value) && !ast_default.isFunction(value))
        continue;
      if (param.type) {
        const valid = validateType(param.type, value, config, key);
        if (valid === false) {
          errors.push({
            id: "parameter-type-invalid",
            level: "error",
            message: `Parameter '${key}' of '${fn.name}' must be type of '${typeToString(param.type)}'`
          });
        } else if (Array.isArray(valid)) {
          errors.push(...valid);
        }
      }
    }
  }
  for (const [key, { required }] of Object.entries(schema.parameters ?? {}))
    if (required && fn.parameters[key] === void 0)
      errors.push({
        id: "parameter-missing-required",
        level: "error",
        message: `Missing required parameter: '${key}'`
      });
  return errors;
}
function displayMatches(matches, n) {
  if (matches.length <= n)
    return JSON.stringify(matches);
  const items = matches.slice(0, n).map((item2) => JSON.stringify(item2));
  return `[${items.join(",")}, ... ${matches.length - n} more]`;
}
function validator(node2, config) {
  const schema = node2.findSchema(config);
  const errors = [...node2.errors || []];
  if (!schema) {
    errors.push({
      id: node2.tag ? "tag-undefined" : "node-undefined",
      level: "critical",
      message: node2.tag ? `Undefined tag: '${node2.tag}'` : `Undefined node: '${node2.type}'`
    });
    return errors;
  }
  if (schema.inline != void 0 && node2.inline !== schema.inline)
    errors.push({
      id: "tag-placement-invalid",
      level: "critical",
      message: `'${node2.tag}' tag should be ${schema.inline ? "inline" : "block"}`
    });
  if (schema.selfClosing && node2.children.length > 0)
    errors.push({
      id: "tag-selfclosing-has-children",
      level: "critical",
      message: `'${node2.tag}' tag should be self-closing`
    });
  const attributes = {
    ...globalAttributes,
    ...schema.attributes
  };
  for (const key of Object.keys(node2.slots)) {
    const slot2 = schema.slots?.[key];
    if (!slot2)
      errors.push({
        id: "slot-undefined",
        level: "error",
        message: `Invalid slot: '${key}'`
      });
  }
  for (let [key, value] of Object.entries(node2.attributes)) {
    const attrib = attributes[key];
    if (!attrib) {
      errors.push({
        id: "attribute-undefined",
        level: "error",
        message: `Invalid attribute: '${key}'`
      });
      continue;
    }
    let { type, matches, errorLevel } = attrib;
    if (ast_default.isAst(value)) {
      if (ast_default.isFunction(value) && config.validation?.validateFunctions)
        errors.push(...validateFunction(value, config));
      else if (ast_default.isVariable(value) && config.variables) {
        let missing = false;
        let variables = config.variables;
        for (const key2 of value.path) {
          if (!Object.prototype.hasOwnProperty.call(variables, key2)) {
            missing = true;
            break;
          }
          variables = variables[key2];
        }
        if (missing) {
          errors.push({
            id: "variable-undefined",
            level: "error",
            message: `Undefined variable: '${value.path.join(".")}'`
          });
        }
      } else
        continue;
    }
    value = value;
    if (type) {
      const valid = validateType(type, value, config, key);
      if (valid === false) {
        errors.push({
          id: "attribute-type-invalid",
          level: errorLevel || "error",
          message: `Attribute '${key}' must be type of '${typeToString(type)}'`
        });
      }
      if (Array.isArray(valid)) {
        errors.push(...valid);
      }
    }
    if (typeof matches === "function")
      matches = matches(config);
    if (Array.isArray(matches) && !matches.includes(value))
      errors.push({
        id: "attribute-value-invalid",
        level: errorLevel || "error",
        message: `Attribute '${key}' must match one of ${displayMatches(matches, 8)}. Got '${value}' instead.`
      });
    if (matches instanceof RegExp && !matches.test(value))
      errors.push({
        id: "attribute-value-invalid",
        level: errorLevel || "error",
        message: `Attribute '${key}' must match ${matches}. Got '${value}' instead.`
      });
    if (typeof attrib.validate === "function") {
      const attribErrors = attrib.validate(value, config, key);
      if (Array.isArray(attribErrors))
        errors.push(...attribErrors);
    }
  }
  for (const [key, { required }] of Object.entries(attributes))
    if (required && node2.attributes[key] === void 0)
      errors.push({
        id: "attribute-missing-required",
        level: "error",
        message: `Missing required attribute: '${key}'`
      });
  if (schema.slots) {
    for (const [key, { required }] of Object.entries(schema.slots))
      if (required && node2.slots[key] === void 0)
        errors.push({
          id: "slot-missing-required",
          level: "error",
          message: `Missing required slot: '${key}'`
        });
  }
  for (const { type } of node2.children) {
    if (schema.children && type !== "error" && !schema.children.includes(type))
      errors.push({
        id: "child-invalid",
        level: "warning",
        message: `Can't nest '${type}' in '${node2.tag || node2.type}'`
      });
  }
  if (schema.validate) {
    const schemaErrors = schema.validate(node2, config);
    if (isPromise(schemaErrors)) {
      return schemaErrors.then((e) => errors.concat(e));
    }
    errors.push(...schemaErrors);
  }
  return errors;
}
function* walkWithParents(node2, parents = []) {
  yield [node2, parents];
  for (const child of [...Object.values(node2.slots), ...node2.children])
    yield* walkWithParents(child, [...parents, node2]);
}
function validateTree(content, config) {
  const output = [...walkWithParents(content)].map(([node2, parents]) => {
    const { type, lines, location } = node2;
    const updatedConfig = {
      ...config,
      validation: { ...config.validation, parents }
    };
    const errors = validator(node2, updatedConfig);
    if (isPromise(errors)) {
      return errors.then((e) => e.map((error2) => ({ type, lines, location, error: error2 })));
    }
    return errors.map((error2) => ({ type, lines, location, error: error2 }));
  });
  if (output.some(isPromise)) {
    return Promise.all(output).then((o) => o.flat());
  }
  return output.flat();
}

// index.ts
var tokenizer = new Tokenizer();
function mergeConfig$1(config = {}) {
  return {
    ...config,
    tags: {
      ...tags_default,
      ...config.tags
    },
    nodes: {
      ...schema_exports,
      ...config.nodes
    },
    functions: {
      ...functions_default,
      ...config.functions
    }
  };
}
function parse3(content, args) {
  if (typeof content === "string")
    content = tokenizer.tokenize(content);
  return parser(content, args);
}
function resolve2(content, config) {
  if (Array.isArray(content))
    return content.flatMap((child) => child.resolve(config));
  return content.resolve(config);
}
function transform2(nodes, options) {
  const config = mergeConfig$1(options);
  const content = resolve2(nodes, config);
  if (Array.isArray(content))
    return content.flatMap((child) => child.transform(config));
  return content.transform(config);
}
function validate(content, options) {
  const config = mergeConfig$1(options);
  return validateTree(content, config);
}
function createElement(name, attributes = {}, ...children) {
  return { name, attributes, children };
}
var Markdoc$1 = class Markdoc {
  constructor(config) {
    this.parse = parse3;
    this.resolve = (content) => resolve2(content, this.config);
    this.transform = (content) => transform2(content, this.config);
    this.validate = (content) => validate(content, this.config);
    this.config = config;
  }
};
Markdoc$1.nodes = schema_exports;
Markdoc$1.tags = tags_default;
Markdoc$1.functions = functions_default;
Markdoc$1.globalAttributes = globalAttributes;
Markdoc$1.renderers = renderers_default;
Markdoc$1.transforms = transforms_default;
Markdoc$1.Ast = ast_default;
Markdoc$1.Tag = Tag;
Markdoc$1.Tokenizer = Tokenizer;
Markdoc$1.parseTags = parseTags;
Markdoc$1.transformer = transformer_default;
Markdoc$1.validator = validator;
Markdoc$1.parse = parse3;
Markdoc$1.transform = transform2;
Markdoc$1.validate = validate;
Markdoc$1.createElement = createElement;
Markdoc$1.truthy = truthy;
Markdoc$1.format = format;

const ComponentNode = createComponent({
  factory(result, { treeNode }) {
    if (treeNode.type === "text")
      return renderTemplate`${treeNode.content}`;
    const slots = {
      default: () => renderTemplate`${treeNode.children.map(
        (child) => renderComponent(result, "ComponentNode", ComponentNode, { treeNode: child })
      )}`
    };
    if (treeNode.type === "component") {
      let styles = "", links = "", scripts = "";
      if (Array.isArray(treeNode.collectedStyles)) {
        styles = treeNode.collectedStyles.map(
          (style) => renderUniqueStylesheet(result, {
            type: "inline",
            content: style
          })
        ).join("");
      }
      if (Array.isArray(treeNode.collectedLinks)) {
        links = treeNode.collectedLinks.map((link) => {
          return renderUniqueStylesheet(result, {
            type: "external",
            src: link[0] === "/" ? link : "/" + link
          });
        }).join("");
      }
      if (Array.isArray(treeNode.collectedScripts)) {
        scripts = treeNode.collectedScripts.map((script) => renderScriptElement(script)).join("");
      }
      const head = unescapeHTML(styles + links + scripts);
      let headAndContent = createHeadAndContent(
        head,
        renderTemplate`${renderComponent(
          result,
          treeNode.component.name,
          treeNode.component,
          treeNode.props,
          slots
        )}`
      );
      result._metadata.propagators.add({
        init() {
          return headAndContent;
        }
      });
      return headAndContent;
    }
    return renderComponent(result, treeNode.tag, treeNode.tag, treeNode.attributes, slots);
  },
  propagation: "self"
});
async function createTreeNode(node) {
  if (isHTMLString(node)) {
    return { type: "text", content: node };
  } else if (typeof node === "string" || typeof node === "number") {
    return { type: "text", content: String(node) };
  } else if (node === null || typeof node !== "object" || !Markdoc$1.Tag.isTag(node)) {
    return { type: "text", content: "" };
  }
  const children = await Promise.all(node.children.map((child) => createTreeNode(child)));
  if (typeof node.name === "function") {
    const component = node.name;
    const props = node.attributes;
    return {
      type: "component",
      component,
      props,
      children
    };
  } else if (isPropagatedAssetsModule(node.name)) {
    const { collectedStyles, collectedLinks, collectedScripts } = node.name;
    const component = (await node.name.getMod()).default;
    const props = node.attributes;
    return {
      type: "component",
      component,
      collectedStyles,
      collectedLinks,
      collectedScripts,
      props,
      children
    };
  } else {
    return {
      type: "element",
      tag: node.name,
      attributes: node.attributes,
      children
    };
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

const $$Astro$5 = createAstro("https://ink-cdn.paulapplegate.com");
const $$Renderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Renderer;
  //! astro-head-inject
  const { stringifiedAst, config } = Astro2.props;
  const ast = Markdoc$1.Ast.fromJSON(stringifiedAst);
  const content = Markdoc$1.transform(ast, config);
  return renderTemplate`${Array.isArray(content) ? content.map(async (c) => renderTemplate`${renderComponent($$result, "ComponentNode", ComponentNode, { "treeNode": await createTreeNode(c) })}`) : renderTemplate`${renderComponent($$result, "ComponentNode", ComponentNode, { "treeNode": await createTreeNode(content) })}`}`;
}, "/Users/thor3/Documents/ink-cdn/node_modules/.pnpm/@astrojs+markdoc@0.8.3_astro@4.3.5/node_modules/@astrojs/markdoc/components/Renderer.astro", void 0);

// This module is generated by `script/`.
/* eslint-disable no-control-regex, no-misleading-character-class, no-useless-escape */
const regex = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;

const own = Object.hasOwnProperty;

/**
 * Slugger.
 */
class BananaSlug {
  /**
   * Create a new slug class.
   */
  constructor () {
    /** @type {Record<string, number>} */
    // eslint-disable-next-line no-unused-expressions
    this.occurrences;

    this.reset();
  }

  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug (value, maintainCase) {
    const self = this;
    let result = slug(value, maintainCase === true);
    const originalSlug = result;

    while (own.call(self.occurrences, result)) {
      self.occurrences[originalSlug]++;
      result = originalSlug + '-' + self.occurrences[originalSlug];
    }

    self.occurrences[result] = 0;

    return result
  }

  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset () {
    this.occurrences = Object.create(null);
  }
}

/**
 * Generate a slug.
 *
 * Does not track previously generated slugs: repeated calls with the same value
 * will result in the exact same slug.
 * Use the `GithubSlugger` class to get unique slugs.
 *
 * @param  {string} value
 *   String of text to slugify
 * @param  {boolean} [maintainCase=false]
 *   Keep the current case, otherwise make all lowercase
 * @return {string}
 *   A unique slug string
 */
function slug (value, maintainCase) {
  if (typeof value !== 'string') return ''
  if (!maintainCase) value = value.toLowerCase();
  return value.replace(regex, '').replace(/ /g, '-')
}

class MarkdocError extends Error {
  loc;
  title;
  hint;
  frame;
  type = "MarkdocError";
  constructor(props, ...params) {
    super(...params);
    const { title = "MarkdocError", message, stack, location, hint, frame } = props;
    this.title = title;
    if (message)
      this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
}
const componentConfigSymbol = Symbol.for("@astrojs/markdoc/component-config");

function getSlug(attributes, children, headingSlugger) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  const textContent = attributes.content ?? getTextContent(children);
  let slug = headingSlugger.slug(textContent);
  if (slug.endsWith("-"))
    slug = slug.slice(0, -1);
  return slug;
}
const heading = {
  children: ["inline"],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 }
  },
  transform(node, config) {
    const { level, ...attributes } = node.transformAttributes(config);
    const children = node.transformChildren(config);
    if (!config.ctx?.headingSlugger) {
      throw new MarkdocError({
        message: "Unexpected problem adding heading IDs to Markdoc file. Did you modify the `ctx.headingSlugger` property in your Markdoc config?"
      });
    }
    const slug = getSlug(attributes, children, config.ctx.headingSlugger);
    const render = config.nodes?.heading?.render ?? `h${level}`;
    const tagProps = (
      // For components, pass down `level` as a prop,
      // alongside `__collectHeading` for our `headings` collector.
      // Avoid accidentally rendering `level` as an HTML attribute otherwise!
      typeof render === "string" ? { ...attributes, id: slug } : { ...attributes, id: slug, __collectHeading: true, level }
    );
    return new Markdoc$1.Tag(render, tagProps, children);
  }
};
function setupHeadingConfig() {
  const headingSlugger = new BananaSlug();
  return {
    ctx: {
      headingSlugger
    },
    nodes: {
      heading
    }
  };
}

const Markdoc = Markdoc$1;
({ ...Markdoc.nodes, heading });
function defineMarkdocConfig(config) {
  return config;
}
function component(pathnameOrPkgName, namedExport) {
  return {
    type: isNpmPackageName(pathnameOrPkgName) ? "package" : "local",
    path: pathnameOrPkgName,
    namedExport,
    [componentConfigSymbol]: true
  };
}
function isNpmPackageName(pathname) {
  return !isRelativePath(pathname) && !pathname.startsWith("/");
}

/**
 * @license MIT
 *
 * (The MIT License)
 *
 * Copyright (c) 2012 TJ Holowaychuk <tj@vision-media.ca>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
const COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
const NEWLINE_REGEX = /\n/g;
const WHITESPACE_REGEX = /^\s*/;
const PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
const COLON_REGEX = /^:\s*/;
const VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
const SEMICOLON_REGEX = /^[;\s]*/;
const TRIM_REGEX = /^\s+|\s+$/g;
const NEWLINE = "\n";
const FORWARD_SLASH = "/";
const ASTERISK = "*";
const EMPTY_STRING = "";
const TYPE_COMMENT = "comment";
const TYPE_DECLARATION = "declaration";
function parseInlineStyles(style, options) {
  if (typeof style !== "string") {
    throw new TypeError("First argument must be a string");
  }
  if (!style)
    return [];
  options = options || {};
  let lineno = 1;
  let column = 1;
  function updatePosition(str) {
    let lines = str.match(NEWLINE_REGEX);
    if (lines)
      lineno += lines.length;
    let i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }
  function position() {
    let start = { line: lineno, column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column };
    this.source = options.source;
  }
  Position.prototype.content = style;
  function error(msg) {
    const err = new Error(options.source + ":" + lineno + ":" + column + ": " + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;
    if (options.silent) ; else {
      throw err;
    }
  }
  function match(re) {
    const m = re.exec(style);
    if (!m)
      return;
    const str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }
  function whitespace() {
    match(WHITESPACE_REGEX);
  }
  function comments(rules) {
    let c;
    rules = rules || [];
    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }
  function comment() {
    const pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1))
      return;
    let i = 2;
    while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
      ++i;
    }
    i += 2;
    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error("End of comment missing");
    }
    const str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }
  function declaration() {
    const pos = position();
    const prop = match(PROPERTY_REGEX);
    if (!prop)
      return;
    comment();
    if (!match(COLON_REGEX))
      return error("property missing ':'");
    const val = match(VALUE_REGEX);
    const ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    });
    match(SEMICOLON_REGEX);
    return ret;
  }
  function declarations() {
    const decls = [];
    comments(decls);
    let decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }
    return decls;
  }
  whitespace();
  return declarations();
}
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}

/**
 * @license MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Menglin "Mark" Xu <mark@remarkablemark.org>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function styleToObject(style, iterator) {
  let output = null;
  if (!style || typeof style !== "string") {
    return output;
  }
  let declaration;
  let declarations = parseInlineStyles(style);
  let hasIterator = typeof iterator === "function";
  let property;
  let value;
  for (let i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;
    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }
  return output;
}

function parseInlineCSSToReactLikeObject(css) {
  if (typeof css === "string") {
    const cssObject = {};
    styleToObject(css, (originalCssDirective, value) => {
      const reactCssDirective = convertCssDirectiveNameToReactCamelCase(originalCssDirective);
      cssObject[reactCssDirective] = value;
    });
    return cssObject;
  }
  return void 0;
}
function convertCssDirectiveNameToReactCamelCase(original) {
  const replaced = original.replace(/-([a-z0-9])/gi, (_match, char) => {
    return char.toUpperCase();
  });
  return replaced;
}

const htmlTag = {
  attributes: {
    name: { type: String, required: true },
    attrs: { type: Object }
  },
  transform(node, config) {
    const { name, attrs: unsafeAttributes } = node.attributes;
    const children = node.transformChildren(config);
    const { style, ...safeAttributes } = unsafeAttributes;
    if (typeof style === "string") {
      const styleObject = parseInlineCSSToReactLikeObject(style);
      safeAttributes.style = styleObject;
    }
    return new Markdoc$1.Tag(name, safeAttributes, children);
  }
};

async function setupConfig(userConfig = {}, options) {
  let defaultConfig = setupHeadingConfig();
  if (userConfig.extends) {
    for (let extension of userConfig.extends) {
      if (extension instanceof Promise) {
        extension = await extension;
      }
      defaultConfig = mergeConfig(defaultConfig, extension);
    }
  }
  let merged = mergeConfig(defaultConfig, userConfig);
  if (options?.allowHTML) {
    merged = mergeConfig(merged, HTML_CONFIG);
  }
  return merged;
}
function setupConfigSync(userConfig = {}, options) {
  const defaultConfig = setupHeadingConfig();
  let merged = mergeConfig(defaultConfig, userConfig);
  if (options?.allowHTML) {
    merged = mergeConfig(merged, HTML_CONFIG);
  }
  return merged;
}
function mergeConfig(configA, configB) {
  return {
    ...configA,
    ...configB,
    ctx: {
      ...configA.ctx,
      ...configB.ctx
    },
    tags: {
      ...configA.tags,
      ...configB.tags
    },
    nodes: {
      ...configA.nodes,
      ...configB.nodes
    },
    functions: {
      ...configA.functions,
      ...configB.functions
    },
    variables: {
      ...configA.variables,
      ...configB.variables
    },
    partials: {
      ...configA.partials,
      ...configB.partials
    },
    validation: {
      ...configA.validation,
      ...configB.validation
    }
  };
}
function resolveComponentImports(markdocConfig, tagComponentMap, nodeComponentMap) {
  for (const [tag, render] of Object.entries(tagComponentMap)) {
    const config = markdocConfig.tags[tag];
    if (config)
      config.render = render;
  }
  for (const [node, render] of Object.entries(nodeComponentMap)) {
    const config = markdocConfig.nodes[node];
    if (config)
      config.render = render;
  }
  return markdocConfig;
}
function getTextContent(childNodes) {
  let text = "";
  for (const node of childNodes) {
    if (typeof node === "string" || typeof node === "number") {
      text += node;
    } else if (typeof node === "object" && Markdoc$1.Tag.isTag(node)) {
      text += getTextContent(node.children);
    }
  }
  return text;
}
const headingLevels = [1, 2, 3, 4, 5, 6];
function collectHeadings(children, collectedHeadings) {
  for (const node of children) {
    if (typeof node !== "object" || !Markdoc$1.Tag.isTag(node))
      continue;
    if (node.attributes.__collectHeading === true && typeof node.attributes.level === "number") {
      collectedHeadings.push({
        slug: node.attributes.id,
        depth: node.attributes.level,
        text: getTextContent(node.children)
      });
      continue;
    }
    for (const level of headingLevels) {
      if (node.name === "h" + level) {
        collectedHeadings.push({
          slug: node.attributes.id,
          depth: level,
          text: getTextContent(node.children)
        });
      }
    }
    collectHeadings(node.children, collectedHeadings);
  }
}
function createGetHeadings(stringifiedAst, userConfig, options) {
  return function getHeadings() {
    const config = setupConfigSync(userConfig, options);
    const ast = Markdoc$1.Ast.fromJSON(stringifiedAst);
    const content = Markdoc$1.transform(ast, config);
    let collectedHeadings = [];
    collectHeadings(Array.isArray(content) ? content : [content], collectedHeadings);
    return collectedHeadings;
  };
}
function createContentComponent(Renderer, stringifiedAst, userConfig, options, tagComponentMap, nodeComponentMap) {
  return createComponent({
    async factory(result, props) {
      const withVariables = mergeConfig(userConfig, { variables: props });
      const config = resolveComponentImports(
        await setupConfig(withVariables, options),
        tagComponentMap,
        nodeComponentMap
      );
      return renderComponent(result, Renderer.name, Renderer, { stringifiedAst, config }, {});
    },
    propagation: "self"
  });
}
const HTML_CONFIG = {
  tags: {
    "html-tag": htmlTag
  }
};

const callout = {
  render: component("./src/components/mdoc/Callout.astro"),
  children: ["paragraph", "tag", "list"],
  attributes: {
    type: {
      type: String,
      default: "note goes here...",
      matches: ["error", "check", "note", "warning"],
      errorLevel: "critical"
    },
    title: {
      type: String
    }
  }
};

const link = {
  render: component("./src/components/mdoc/Link.astro"),
  children: ["strong", "em", "s", "code", "text", "tag"],
  attributes: {
    href: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    target: {
      type: String
    }
  }
};

const tweetEmbed = {
  render: component("./src/components/mdoc/TweetEmbed.astro"),
  attributes: {
    url: {
      type: String,
      required: true
    }
  }
};

const tabs = {
  render: component("./src/components/mdoc/Tabs/Tabs.astro"),
  children: ["paragraph", "tag", "list"],
  attributes: {
    tabs: {
      type: Array
    },
    heading: {
      type: String
    }
  }
};

const ytEmbed = {
  render: component("./src/components/mdoc/YTVideoEmbed.astro"),
  attributes: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};

const config = {
  tags: {
    callout,
    link,
    tweet: tweetEmbed,
    yt: ytEmbed,
    tabs
  },
  functions: {
    getCountryEmoji: {
      transform(parameters) {
        const [country] = Object.values(parameters);
        const countryToEmojiMap = {
          japan: "🇯🇵",
          spain: "🇪🇸",
          france: "🇫🇷"
        };
        return countryToEmojiMap[country] ?? "🏳";
      }
    }
  }
};

const markdocConfig = defineMarkdocConfig(config);

const assetsConfig = {
  nodes: {
    image: {
      attributes: {
        ...Markdoc$1.nodes.image.attributes,
        __optimizedSrc: { type: "Object" }
      },
      transform(node, config) {
        const attributes = node.transformAttributes(config);
        const children = node.transformChildren(config);
        if (node.type === "image" && "__optimizedSrc" in node.attributes) {
          const { __optimizedSrc, ...rest } = node.attributes;
          return new Markdoc$1.Tag($$Image, { ...rest, src: __optimizedSrc }, children);
        } else {
          return new Markdoc$1.Tag("img", attributes, children);
        }
      }
    }
  }
};

const $$Astro$4 = createAstro("https://ink-cdn.paulapplegate.com");
const $$Callout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Callout;
  const ICON_MAP = {
    "check": "check-circle",
    "error": "close-circle",
    "note": "note",
    "warning": "warning-circle"
  };
  const COLOR_MAP = {
    "check": "text-green-700",
    "error": "text-red-700",
    "note": " text-gray-700",
    "warning": "text-orange-700"
  };
  const { title, type = "note" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="callout flex gap-2 w-full bg-gray-200/75 dark:bg-gray-600/75 p-4 rounded-sm shadow-sm"> ${renderComponent($$result, "Icon", $$Icon, { "class": `w-6 h-6 inline-block ${COLOR_MAP[type]}`, "pack": "mdi", "name": ICON_MAP[type] })} <div class="copy flex flex-col"> <h4${addAttribute(`title m-0 ${COLOR_MAP[type]}`, "class")}>${title}</h4> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/thor3/Documents/ink-cdn/src/components/mdoc/Callout.astro", void 0);

const $$Astro$3 = createAstro("https://ink-cdn.paulapplegate.com");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, title, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="site-link"${addAttribute(href, "href")}${addAttribute(title, "title")}${addAttribute(target, "target")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/thor3/Documents/ink-cdn/src/components/mdoc/Link.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://ink-cdn.paulapplegate.com");
const $$TweetEmbed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TweetEmbed;
  const { url } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="twitter-embed flex flex-col items-center justify-center relative"> <blockquote class="twitter-tweet" data-conversation="none" data-theme="light" data-lang="en" data-dnt="true"> <a class="unset no-underline text-current absolute top-0 left-0"', '>Loading embedded tweet...</a> </blockquote> </div> <script async defer src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>'])), maybeRenderHead(), addAttribute(url, "href"));
}, "/Users/thor3/Documents/ink-cdn/src/components/mdoc/TweetEmbed.astro", void 0);

const $$Astro$1 = createAstro("https://ink-cdn.paulapplegate.com");
const $$YTVideoEmbed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$YTVideoEmbed;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-zrumgile> <iframe class="yt-iframe" width="560" height="315"${addAttribute(url, "src")}${addAttribute(title, "title")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-zrumgile>
  </iframe> </div> `;
}, "/Users/thor3/Documents/ink-cdn/src/components/mdoc/YTVideoEmbed.astro", void 0);

/* src/components/mdoc/Tabs/Tabs.svelte generated by Svelte v4.2.10 */
const TABS = {};

const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const tabs = [];
	const panels = [];
	const selectedTab = writable(null);
	const selectedPanel = writable(null);

	setContext(TABS, {
		registerTab: tab => {
			tabs.push(tab);
			selectedTab.update(current => current || tab);

			onDestroy(() => {
				const i = tabs.indexOf(tab);
				tabs.splice(i, 1);

				selectedTab.update(current => current === tab
				? tabs[i] || tabs[tabs.length - 1]
				: current);
			});
		},
		registerPanel: panel => {
			panels.push(panel);
			selectedPanel.update(current => current || panel);

			onDestroy(() => {
				const i = panels.indexOf(panel);
				panels.splice(i, 1);

				selectedPanel.update(current => current === panel
				? panels[i] || panels[panels.length - 1]
				: current);
			});
		},
		selectTab: tab => {
			const i = tabs.indexOf(tab);
			selectedTab.set(tab);
			selectedPanel.set(panels[i]);
		},
		selectedTab,
		selectedPanel
	});

	return `<div class="tabs">${slots.default ? slots.default({}) : ``}</div>`;
});

/* src/components/mdoc/Tabs/TabList.svelte generated by Svelte v4.2.10 */

const css$2 = {
	code: ".tab-list.svelte-1mgr4p5{border-bottom-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(107 114 128 / var(--tw-border-opacity))\n}",
	map: null
};

const TabList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$2);
	return `<div class="tab-list svelte-1mgr4p5">${slots.default ? slots.default({}) : ``} </div>`;
});

/* src/components/mdoc/Tabs/TabPanel.svelte generated by Svelte v4.2.10 */

const TabPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $selectedPanel, $$unsubscribe_selectedPanel;
	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);
	$$unsubscribe_selectedPanel = subscribe(selectedPanel, value => $selectedPanel = value);
	registerPanel(panel);
	$$unsubscribe_selectedPanel();

	return `${$selectedPanel === panel
	? `${slots.default ? slots.default({}) : ``}`
	: ``}`;
});

/* src/components/mdoc/Tabs/Tab.svelte generated by Svelte v4.2.10 */

const css$1 = {
	code: "button.svelte-ct3r7u{margin:0px;border-bottom-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity));background-image:none;padding-left:1rem;padding-right:1rem;padding-top:0.25rem;padding-bottom:0.25rem;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))\n}.selected.svelte-ct3r7u{border-bottom-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity))\n}",
	map: null
};

const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $selectedTab, $$unsubscribe_selectedTab;
	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);
	$$unsubscribe_selectedTab = subscribe(selectedTab, value => $selectedTab = value);
	registerTab(tab);
	$$result.css.add(css$1);
	$$unsubscribe_selectedTab();
	return `<button class="${["svelte-ct3r7u", $selectedTab === tab ? "selected" : ""].join(' ').trim()}">${slots.default ? slots.default({}) : ``}</button>`;
});

/* src/components/mdoc/Tabs/index.svelte generated by Svelte v4.2.10 */

const css = {
	code: ".body.svelte-1vjsbpq{padding-left:1rem;padding-right:1rem;padding-top:0.25rem;padding-bottom:0.25rem\n}",
	map: null
};

const Tabs_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { tabs = [] } = $$props;
	if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0) $$bindings.tabs(tabs);
	$$result.css.add(css);

	return `${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
		default: () => {
			return `${validate_component(TabList, "TabList").$$render($$result, {}, {}, {
				default: () => {
					return `${each(tabs, tab => {
						return `${validate_component(Tab, "Tab").$$render($$result, {}, {}, {
							default: () => {
								return `${escape(tab.title)}`;
							}
						})}`;
					})}`;
				}
			})} ${each(tabs, tab => {
				return `${validate_component(TabPanel, "TabPanel").$$render($$result, {}, {}, {
					default: () => {
						return `<div class="body svelte-1vjsbpq">${escape(tab.body)}</div> `;
					}
				})}`;
			})}`;
		}
	})}`;
});

const $$Astro = createAstro("https://ink-cdn.paulapplegate.com");
const $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { tabs } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tabs", Tabs_1, { "tabs": tabs, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/thor3/Documents/ink-cdn/src/components/mdoc/Tabs/index.svelte", "client:component-export": "default" })}`;
}, "/Users/thor3/Documents/ink-cdn/src/components/mdoc/Tabs/Tabs.astro", void 0);

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };



const tagComponentMap = {"callout": $$Callout,
"link": $$Link,
"tweet": $$TweetEmbed,
"yt": $$YTVideoEmbed,
"tabs": $$Tabs,
};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":true,\"attributes\":{\"href\":\"https://markdoc.dev/docs/overview\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":true,\"attributes\":{\"content\":\"Markdoc\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"link\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":true,\"attributes\":{\"content\":\" extends the markdown syntax you know and love to offer you authoring superpowers... 💪.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[2,3],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[2,3],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[2,3],\"inline\":true,\"attributes\":{\"content\":\"Tags are the heart of Markdoc system. You can use native Markdoc tags, like tables(example below), conditionals, and partials...\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":2},\"end\":{\"line\":3}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":2},\"end\":{\"line\":3}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":2},\"end\":{\"line\":3}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[4,5],\"inline\":false,\"attributes\":{\"level\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[4,5],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[4,5],\"inline\":true,\"attributes\":{\"content\":\"Table in Markdoc\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":4},\"end\":{\"line\":5}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":4},\"end\":{\"line\":5}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":4},\"end\":{\"line\":5}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6,30,31],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[6,7],\"inline\":true,\"attributes\":{\"content\":\"Foo\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}}],\"type\":\"th\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":7}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[7,8],\"inline\":true,\"attributes\":{\"content\":\"Bar\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}}],\"type\":\"th\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":7},\"end\":{\"line\":8}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[8,9],\"inline\":true,\"attributes\":{\"content\":\"Baz\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"th\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":8},\"end\":{\"line\":9}}}],\"type\":\"tr\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":6},\"end\":{\"line\":9}}}],\"type\":\"thead\",\"annotations\":[],\"slots\":{}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,20],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,14],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,14],\"inline\":false,\"attributes\":{\"content\":\"puts \\\"Some code here.\\\"\\n\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,14],\"inline\":false,\"attributes\":{\"content\":\"puts \\\"Some code here.\\\"\\n\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":14}}}],\"type\":\"fence\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":14}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":14}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[14,19],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[15,19],\"inline\":false,\"attributes\":{\"content\":\"{% list type=\\\"checkmark\\\" %}\\n  * Bulleted list in table\\n  * Second item in bulleted list\\n  {% /list %}\"},\"children\":[],\"type\":\"comment\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":15},\"end\":{\"line\":19}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":14},\"end\":{\"line\":19}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[19,20],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[19,20],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[19,20],\"inline\":true,\"attributes\":{\"content\":\"Text in a table\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":19},\"end\":{\"line\":20}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":19},\"end\":{\"line\":20}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":19},\"end\":{\"line\":20}}}],\"type\":\"tr\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":20}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[21,27],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[21,25],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[22,23],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[22,23],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[22,23],\"inline\":true,\"attributes\":{\"content\":\"A \\\"loose\\\" list with\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":22},\"end\":{\"line\":23}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":22},\"end\":{\"line\":23}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":22},\"end\":{\"line\":23}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[24,25],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[24,25],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[24,25],\"inline\":true,\"attributes\":{\"content\":\"multiple line items\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":24},\"end\":{\"line\":25}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":24},\"end\":{\"line\":25}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":24},\"end\":{\"line\":25}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":21},\"end\":{\"line\":25}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[25,26],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[25,26],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[25,26],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[25,26],\"inline\":true,\"attributes\":{\"content\":\"Test 2\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":25},\"end\":{\"line\":26}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":25},\"end\":{\"line\":26}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":25},\"end\":{\"line\":26}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":25},\"end\":{\"line\":26}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[26,27],\"inline\":true,\"attributes\":{\"content\":\"Test 3\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":26},\"end\":{\"line\":27}}}],\"type\":\"tr\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":21},\"end\":{\"line\":27}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,30],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,29],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,29],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[28,29],\"inline\":true,\"attributes\":{\"content\":\"Test 1\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":29}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":29}}}],\"type\":\"td\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":29}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":false,\"attributes\":{\"colspan\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":true,\"attributes\":{\"content\":\"A cell that spans two columns \"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}}],\"type\":\"td\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"colspan\",\"value\":2}],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}}],\"type\":\"tr\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":28},\"end\":{\"line\":30}}}],\"type\":\"tbody\",\"annotations\":[],\"slots\":{}}],\"type\":\"table\",\"annotations\":[],\"slots\":{}}],\"type\":\"tag\",\"tag\":\"table\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[32,33],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[32,33],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[32,33],\"inline\":true,\"attributes\":{\"content\":\"or create custom components.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":32},\"end\":{\"line\":33}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":32},\"end\":{\"line\":33}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":32},\"end\":{\"line\":33}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[34,35],\"inline\":false,\"attributes\":{\"level\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[34,35],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[34,35],\"inline\":true,\"attributes\":{\"content\":\"Tags available out of Ink\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":34},\"end\":{\"line\":35}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":34},\"end\":{\"line\":35}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":34},\"end\":{\"line\":35}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[35,36],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[35,36],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[35,36],\"inline\":true,\"attributes\":{\"content\":\"Astro Ink ships with the following tags with more coming soon...\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":35},\"end\":{\"line\":36}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":35},\"end\":{\"line\":36}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":35},\"end\":{\"line\":36}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[37,38],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[37,38],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[37,38],\"inline\":true,\"attributes\":{\"content\":\"Callout\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":37},\"end\":{\"line\":38}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":37},\"end\":{\"line\":38}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":37},\"end\":{\"line\":38}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[39,40],\"inline\":false,\"attributes\":{\"level\":4},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[39,40],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[39,40],\"inline\":true,\"attributes\":{\"content\":\"Note\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":39},\"end\":{\"line\":40}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":39},\"end\":{\"line\":40}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":39},\"end\":{\"line\":40}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[40,41,42,43],\"inline\":false,\"attributes\":{\"type\":\"note\",\"title\":\"title goes here...\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[41,42],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[41,42],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[41,42],\"inline\":true,\"attributes\":{\"content\":\"lorem ipsum doler sit amet lorem\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":41},\"end\":{\"line\":42}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":41},\"end\":{\"line\":42}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":41},\"end\":{\"line\":42}}}],\"type\":\"tag\",\"tag\":\"callout\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"type\",\"value\":\"note\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"title goes here...\"}],\"slots\":{},\"location\":{\"start\":{\"line\":40},\"end\":{\"line\":41}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[44,45],\"inline\":false,\"attributes\":{\"level\":4},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[44,45],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[44,45],\"inline\":true,\"attributes\":{\"content\":\"Error\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":44},\"end\":{\"line\":45}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":44},\"end\":{\"line\":45}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":44},\"end\":{\"line\":45}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[45,46,47,48],\"inline\":false,\"attributes\":{\"type\":\"error\",\"title\":\"title goes here...\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[46,47],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[46,47],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[46,47],\"inline\":true,\"attributes\":{\"content\":\"lorem ipsum doler sit amet\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":46},\"end\":{\"line\":47}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":46},\"end\":{\"line\":47}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":46},\"end\":{\"line\":47}}}],\"type\":\"tag\",\"tag\":\"callout\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"type\",\"value\":\"error\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"title goes here...\"}],\"slots\":{},\"location\":{\"start\":{\"line\":45},\"end\":{\"line\":46}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[49,50],\"inline\":false,\"attributes\":{\"level\":4},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[49,50],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[49,50],\"inline\":true,\"attributes\":{\"content\":\"Warning\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":49},\"end\":{\"line\":50}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":49},\"end\":{\"line\":50}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":49},\"end\":{\"line\":50}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[50,51,52,53],\"inline\":false,\"attributes\":{\"type\":\"warning\",\"title\":\"title goes here...\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[51,52],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[51,52],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[51,52],\"inline\":true,\"attributes\":{\"content\":\"lorem ipsum doler sit amet\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":51},\"end\":{\"line\":52}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":51},\"end\":{\"line\":52}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":51},\"end\":{\"line\":52}}}],\"type\":\"tag\",\"tag\":\"callout\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"type\",\"value\":\"warning\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"title goes here...\"}],\"slots\":{},\"location\":{\"start\":{\"line\":50},\"end\":{\"line\":51}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[54,55],\"inline\":false,\"attributes\":{\"level\":4},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[54,55],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[54,55],\"inline\":true,\"attributes\":{\"content\":\"Check\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":54},\"end\":{\"line\":55}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":54},\"end\":{\"line\":55}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":54},\"end\":{\"line\":55}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[55,56,57,58],\"inline\":false,\"attributes\":{\"type\":\"check\",\"title\":\"title goes here...\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[56,57],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[56,57],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[56,57],\"inline\":true,\"attributes\":{\"content\":\"lorem ipsum doler sit amet\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":56},\"end\":{\"line\":57}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":56},\"end\":{\"line\":57}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":56},\"end\":{\"line\":57}}}],\"type\":\"tag\",\"tag\":\"callout\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"type\",\"value\":\"check\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"title goes here...\"}],\"slots\":{},\"location\":{\"start\":{\"line\":55},\"end\":{\"line\":56}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[59,60],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[59,60],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[59,60],\"inline\":true,\"attributes\":{\"content\":\"Link\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":59},\"end\":{\"line\":60}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":59},\"end\":{\"line\":60}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":59},\"end\":{\"line\":60}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[61,62,63,64],\"inline\":false,\"attributes\":{\"href\":\"/blog\",\"title\":\"take care\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[62,63],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[62,63],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[62,63],\"inline\":true,\"attributes\":{\"content\":\"Go to blog\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":62},\"end\":{\"line\":63}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":62},\"end\":{\"line\":63}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":62},\"end\":{\"line\":63}}}],\"type\":\"tag\",\"tag\":\"link\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"href\",\"value\":\"/blog\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"take care\"}],\"slots\":{},\"location\":{\"start\":{\"line\":61},\"end\":{\"line\":62}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[65,66],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[65,66],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[65,66],\"inline\":true,\"attributes\":{\"content\":\"Tweet Embed\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":65},\"end\":{\"line\":66}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":65},\"end\":{\"line\":66}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":65},\"end\":{\"line\":66}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[66,67,67,68],\"inline\":false,\"attributes\":{\"url\":\"https://twitter.com/aftabbuddy/status/1630403326406959105\"},\"children\":[],\"type\":\"tag\",\"tag\":\"tweet\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"url\",\"value\":\"https://twitter.com/aftabbuddy/status/1630403326406959105\"}],\"slots\":{},\"location\":{\"start\":{\"line\":66},\"end\":{\"line\":67}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[71,72,72,73],\"inline\":false,\"attributes\":{\"url\":\"https://www.youtube.com/embed/ADnaRwQZfqw\",\"title\":\"SvelteKit + GraphQL with Houdini | Intro, Setup and Project Overview\"},\"children\":[],\"type\":\"tag\",\"tag\":\"yt\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"url\",\"value\":\"https://www.youtube.com/embed/ADnaRwQZfqw\"},{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"SvelteKit + GraphQL with Houdini | Intro, Setup and Project Overview\"}],\"slots\":{},\"location\":{\"start\":{\"line\":71},\"end\":{\"line\":72}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[74,75],\"inline\":false,\"attributes\":{\"level\":3},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[74,75],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[74,75],\"inline\":true,\"attributes\":{\"content\":\"Tabs\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":74},\"end\":{\"line\":75}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":74},\"end\":{\"line\":75}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":74},\"end\":{\"line\":75}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[76,77,77,78],\"inline\":false,\"attributes\":{\"heading\":\"some\",\"tabs\":[{\"title\":\"tab1\",\"body\":\"tab1\"},{\"title\":\"tab2\",\"body\":\"tab2\"}]},\"children\":[],\"type\":\"tag\",\"tag\":\"tabs\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"heading\",\"value\":\"some\"},{\"type\":\"attribute\",\"name\":\"tabs\",\"value\":[{\"title\":\"tab1\",\"body\":\"tab1\"},{\"title\":\"tab2\",\"body\":\"tab2\"}]}],\"slots\":{},\"location\":{\"start\":{\"line\":76},\"end\":{\"line\":77}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[79,80],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[79,80],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[79,80],\"inline\":true,\"attributes\":{\"content\":\"...more tags coming soon!\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":79},\"end\":{\"line\":80}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":79},\"end\":{\"line\":80}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":79},\"end\":{\"line\":80}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[81,82],\"inline\":false,\"attributes\":{\"level\":2},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[81,82],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[81,82],\"inline\":true,\"attributes\":{\"content\":\"Functions (from official example)\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":81},\"end\":{\"line\":82}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":81},\"end\":{\"line\":82}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":81},\"end\":{\"line\":82}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[83,84],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[83,84],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[83,84],\"inline\":true,\"attributes\":{\"content\":\"¡Hola \"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":83},\"end\":{\"line\":84}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[83,84],\"inline\":true,\"attributes\":{\"content\":{\"$$mdtype\":\"Function\",\"name\":\"getCountryEmoji\",\"parameters\":{\"0\":\"spain\"}}},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":83},\"end\":{\"line\":84}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[83,84],\"inline\":true,\"attributes\":{\"content\":\"!\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":83},\"end\":{\"line\":84}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":83},\"end\":{\"line\":84}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":83},\"end\":{\"line\":84}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig, options);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
);

export { Content, getHeadings };
