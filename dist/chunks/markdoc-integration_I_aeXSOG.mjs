const id = "markdoc-integration.mdoc";
						const collection = "blog";
						const slug = "markdoc-integration";
						const body = "[Markdoc](https://markdoc.dev/docs/overview) extends the markdown syntax you know and love to offer you authoring superpowers... 💪.\n\nTags are the heart of Markdoc system. You can use native Markdoc tags, like tables(example below), conditionals, and partials...\n\n## Table in Markdoc\n{% table %}\n* Foo\n* Bar\n* Baz\n---\n*\n  ```\n  puts \"Some code here.\"\n  ```\n*\n  <!-- {% list type=\"checkmark\" %}\n  * Bulleted list in table\n  * Second item in bulleted list\n  {% /list %} -->\n* Text in a table\n---\n*\n  A \"loose\" list with\n\n  multiple line items\n* Test 2\n* Test 3\n---\n* Test 1\n* A cell that spans two columns {% colspan=2 %}\n{% /table %}\n\nor create custom components.\n\n## Tags available out of Ink\nAstro Ink ships with the following tags with more coming soon...\n\n### Callout\n\n#### Note \n{% callout type=\"note\" title=\"title goes here...\" %}\n    lorem ipsum doler sit amet lorem  \n{% /callout %}  \n  \n#### Error \n{% callout type=\"error\" title=\"title goes here...\" %}\n    lorem ipsum doler sit amet\n{% /callout %}\n\n#### Warning \n{% callout type=\"warning\" title=\"title goes here...\" %}\n    lorem ipsum doler sit amet\n{% /callout %}\n\n#### Check \n{% callout type=\"check\" title=\"title goes here...\" %}\n    lorem ipsum doler sit amet\n{% /callout %}\n\n### Link\n\n{% link href=\"/blog\" title=\"take care\" %}\n    Go to blog\n{% /link %}\n\n### Tweet Embed\n{% tweet url=\"https://twitter.com/aftabbuddy/status/1630403326406959105\" %}\n{% /tweet %}\n\n\n\n{% yt url=\"https://www.youtube.com/embed/ADnaRwQZfqw\" title=\"SvelteKit + GraphQL with Houdini | Intro, Setup and Project Overview\" %}\n{% /yt %}\n\n### Tabs\n\n{% tabs heading=\"some\" tabs=[{title: \"tab1\", body: \"tab1\"}, {title: \"tab2\", body: \"tab2\"}] %}\n{% /tabs %}\n\n...more tags coming soon!\n\n## Functions (from official example)\n\n¡Hola {% getCountryEmoji(\"spain\") %}!\n";
						const data = {title:"Markdoc integration for Astro Ink",description:"Markdoc extends the markdown syntax you love to offer you authoring superpowers... 💪",tags:["architecture","front-end","spa"],author:"Aftab Alam",authorTwitter:"aftabbuddy",date:"2023-03-08",image:"https://user-images.githubusercontent.com/62121649/167893184-a2b69260-ca9e-4a77-a5bc-63b8135ae5db.png",category:"design"};
						const _internal = {
							type: 'content',
							filePath: "/Users/thor3/Documents/ink-cdn/src/content/blog/markdoc-integration.mdoc",
							rawData: "\ntitle: Markdoc integration for Astro Ink\ndate: \"2023-03-08\"\nimage: https://user-images.githubusercontent.com/62121649/167893184-a2b69260-ca9e-4a77-a5bc-63b8135ae5db.png\nauthor: Aftab Alam\nauthorTwitter: aftabbuddy\ncategory: design\ntags:\n- architecture\n- front-end\n- spa\ndescription: Markdoc extends the markdown syntax you love to offer you authoring superpowers... 💪",
						};

export { _internal, body, collection, data, id, slug };
