# <p align="center">Web Front End</p>
<img src="https://www.filepicker.io/api/file/eYA6E8L3TiGl0GxpQoS6" width="100%">

## Description
### Web Frontend, HTML, and CSS

The Web Frontend is the visual part of a website that allows users to interact with its content. The user interface (UI) and user experience (UX) are crucial to the success of any website. **HTML** and **CSS** are the two fundamental technologies used to create beautiful and functional web pages.

### HTML (HyperText Markup Language)

HTML is the standard markup language used to structure and display content on the web. HTML allows developers to organize text, images, videos, and links into different elements, such as paragraphs, headings, lists, and tables. This organization creates a structure for the website, making it easier to understand and navigate for the user.
  
Here's an example of HTML code that creates a simple webpage:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
    <p>This is a paragraph of text.</p>
    <img src="image.jpg" alt="An image">
  </body>
</html>
```

### CSS (Cascading Style Sheets)

CSS is a style sheet language used to define the visual appearance and layout of HTML elements. CSS enables developers to control the color, font, size, spacing, and other styling aspects of the website, giving designers the flexibility to create visually stunning and unique websites.
  
By combining HTML and CSS, web developers can create intuitive and responsive designs for their websites. The use of responsive web design techniques ensures that websites look great on any device, from desktops to mobile phones.
  
Web development frameworks such as Bootstrap, Foundation, and Materialize can help developers create consistent and responsive designs more quickly by providing pre-defined components and customizable CSS styles.
  
Here's an example of CSS code that styles the HTML elements in our example webpage:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f1f1f1;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
```

### Conclusion

In summary, Web Frontend Development using HTML and CSS is essential to creating modern, beautiful, and functional websites. With the help of web development frameworks, designers can create intuitive and responsive designs that offer an exceptional user experience.

-----------------------------

## Projects

# [Advanced HTML](https://github.com/MathieuMorel62/holbertonschool-web_front_end/tree/main/html_advanced)

#### `General`
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google:**

<details>
<summary>Which guidelines to follow for HTML</summary>
<br>
  
- Use valid HTML code by validating your HTML using W3C Markup Validation Service.  
- Use proper indentation and formatting to make your code more readable.  
- Use semantic HTML tags to structure your content.  
- Use descriptive names for your classes and IDs.  
- Use alt attributes for images to make your content more accessible.  
- Keep your HTML code separate from your CSS and JavaScript code.  
</details>
<details>
<summary>How to create the skeleton of an HTML5 page</summary>
<br>

Here's an example of the basic structure of an HTML5 page:
  
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Titre de la page</title>
	</head>
	<body>
		<!-- Contenu de la page -->
	</body>
</html>
```

</details>
<details>
<summary>How to use semantic HTML tags to structure a web page</summary>
<br>

Semantic HTML tags are tags that have a specific meaning, and they are used to describe the content of the web page. Here are some examples of semantic HTML tags and their meanings:  
    
- `<header>`: used for the top section of the page, usually containing the page title and navigation menu
- `<nav>`: used to define the navigation links of the page
- `<main>`: used to define the main content area of the page
- `<section>`: used to define a section of the page, such as a chapter or a part of an article
- `<article>`: used to define an article or a piece of content that stands alone
- `<aside>`: used to define a section of the page that is related to the main content, but not part of it
- `<footer>`: used for the bottom section of the page, usually containing copyright information and other legal information

</details>
<details>
<summary>Which use cases to use div vs span</summary>
<br>

`<div>` and `<span>` are both container tags used to group elements together. The main difference is that `<div>` is used for larger groups of content, such as entire sections of a page, while `<span>` is used for smaller groups of content, such as a few words within a sentence. Additionally, `<div>` is a block-level element and takes up the entire width of its parent container, while `<span>` is an inline-level element and only takes up the space necessary for its content.

exemple:

```html
<div>
	Ceci est un bloc de texte.
	<span>Ceci est une ligne de texte à l'intérieur du bloc.</span>
</div>
```

</details>
<details>
<summary>The semantic value’s of header, main, footer, article, nav, section, aside</summary>
<br>

- `<header>`: Used for the top section of the page, usually containing the page title and navigation menu
- `<nav>`: Used to define the navigation links of the page
- `<main>`: Used to define the main content area of the page
- `<section>`: Used to define a section of the page, such as a chapter or a part of an article
- `<article>`: Used to define an article or a piece of content that stands alone
- `<aside>`: Used to define a section of the page that is related to the main content, but not part of it
- `<footer>`: Used for the bottom section of the page, usually containing copyright information and other legal information

</details>
<details>
<summary>How to use headings (and why it’s important to follow the hierarchical order)</summary>
<br>

Headings (`<h1>` to `<h6>`) are used to define the structure of a web page and to indicate the importance of each section. It's important to use them in a hierarchical order, starting with the `<h1>` tag for the main heading of the page and then using lower-level headings (`<h2>`, `<h3>`, etc.) for subheadings. This helps search engines and screen readers understand the structure of the page and also makes it easier for users to navigate and scan the content.

exemple:
  
```html
<body>
	<header>
		<h1>Titre principal de la page</h1>
	</header>
	<main>
		<section>
			<h2>Titre de la section 1</h2>
			<p>Contenu de la section 1.</p>
			<section>
				<h3>Titre de la sous-section 1</h3>
				<p>Contenu de la sous-section 1.</p>
			</section>
			<section>
				<h3>Titre de la sous-section 2</h3>
				<p>Contenu de la sous-section 2.</p>
			</section>
		</section>
		<section>
			<h2>Titre de la section 2</h2>
			<p>Contenu de la section 2.</p>
		</section>
	</main>
	<footer>
		<p>Pied de page</p>
	</footer>
</body>
```

</details>
<details>
<summary>How to make lists in HTML</summary>
<br>

HTML provides two types of lists: ordered lists (`<ol>`) and unordered lists (`<ul>`). Ordered lists are used for numbered lists, while unordered lists are used for bullet-pointed lists. Here's an example of how to create an unordered list:

```html
<ul>
	<li>List item 1</li>
	<li>List item 2</li>
	<li>List item 3</li>
</ul>
```

And here's an example of how to create an ordered list:
  
```html
<ol>
	<li>List item 1</li>
	<li>List item 2</li>
	<li>List item 3</li>
</ol>
```

</details>
<details>
<summary>The differences between medias (SVG, GIF, PNG, JPG)</summary>
<br>

- `SVG (Scalable Vector Graphics)`: A vector image format that's resolution-independent and can be scaled up or down without losing quality. It's typically used for logos, icons, and other graphics that need to be scalable.
- `GIF (Graphics Interchange Format)`: A bitmap image format that supports animations and transparency. It's often used for simple animations, like loading icons or small graphics.
- `PNG (Portable Network Graphics)`: A bitmap image format that supports transparency and higher color depths than GIF. It's typically used for images that require a transparent background or need to be high-quality.
- `JPG (Joint Photographic Experts Group)`: A bitmap image format that's designed for compressing photographic images. It's typically used for photographs and other complex images that need to be compressed without losing too much detail.

</details>
<details>
<summary>How to structure data in a table</summary>
<br>

Tables (`<table>`) are used to organize data into rows and columns. Here's an example of how to create a basic table with two rows and two columns:
  
```html
<table>
	<tr>
		<th>Heading 1</th>
		<th>Heading 2</th>
	</tr>
	<tr>
		<td>Data 1</td>
		<td>Data 2</td>
	</tr>
	<tr>
		<td>Data 3</td>
		<td>Data 4</td>
	</tr>
</table>
```
  
In this example, the `<th>` tag is used to define the table headings, while the `<td>` tag is used to define the table data.

</details>
<details>
<summary>How to integrate a video in a webpage</summary>
<br>

To add a video to a webpage, you can use the `<video>` tag. Here's an example:
  
```html
<video src="video.mp4" controls>
	Your browser does not support the video tag.
</video>
```
  
In this example, the `src` attribute specifies the path to the video file, and the `controls` attribute adds playback controls to the video player. The text between the `<video>` and `</video>` tags is shown if the browser doesn't support the `<video>` tag.

</details>
<details>
<summary>How to integrate an audio file in a webpage</summary>
<br>

To add an audio file to a webpage, you can use the `<audio>` tag. Here's an example:
  
```html
<audio src="audio.mp3" controls>
	Your browser does not support the audio tag.
</audio>
```
  
In this example, the `src` attribute specifies the path to the audio file, and the `controls` attribute adds playback controls to the audio player. The text between the `<audio>` and `</audio>` tags is shown if the browser doesn't support the `<audio>` tag.

</details>
<details>
<summary>How to embed external content</summary>
<br>

To embed external content, you can use the `<iframe>` tag. Here's an example:

```html
<iframe src="http://www.example.com"></iframe>
``` 

In this example, the `src` attribute specifies the URL of the external content. You can also specify the width and height of the `<iframe>` tag to control the size of the embedded content.

</details>
<details>
<summary>How to correctly structure an HTML page</summary>
<br>

To structure an HTML page correctly, you should follow a few best practices:
    
- Use a `<!DOCTYPE>` declaration at the beginning of the page to specify the HTML version.
- Use the `<html>` tag to enclose the entire page.
- Use the `<head>` tag to include metadata about the page, such as the page title, keywords, and character encoding.
- Use the `<body>` tag to enclose the visible content of the page.
- Use semantic HTML tags to structure the content and indicate the purpose of each section.
- Use appropriate attributes to define the properties of each tag.
- Use comments (`<!-- -->`) to provide additional information about the code and make it easier to read and understand.
- Validate the HTML code to ensure that it's error-free and follows the standards.

</details>

-------------------------------

# [Advanced CSS](https://github.com/MathieuMorel62/holbertonschool-web_front_end/tree/main/CSS_advanced)

#### `General`
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google:**

<details>
<summary>Selectors, properties, and values</summary>
<br>

Selectors, properties, and values are the three basic components of `CSS`. `Selectors` are used to target specific `HTML` elements, `properties` define the appearance and behavior of those elements, and `values` set specific values for those properties.
  
exemple:

```css
/* Selector */
p {
  /* Property and value */
  color: red;
}
```
</details>
<details>
<summary>The difference between block and inline styling</summary>
<br>

Block and inline styling refer to the way that elements are displayed on a page. `Block elements` take up the full width of their container and start on a new line, while `inline elements` only take up as much width as their content and stay on the same line.
  
Example:

```css
/* Block element */
div {
  display: block;
}

/* Inline element */
span {
  display: inline;
}
```
</details>
<details>
<summary>How to ensure consistency across all browers (CSS reset)</summary>
<br>

A `CSS reset` is used to ensure consistency in the way that different browsers render HTML elements. A CSS reset typically removes all default `margins`, `padding`, and other styles so that elements can be styled consistently across all browsers.
	  
Example:
	
```css
/* CSS reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
</details>
<details>
<summary>How to setup CSS variables</summary>
<br>

`CSS variables`, also known as custom properties, allow you to define variables that can be reused throughout your CSS. You can define a CSS variable using the "`--`" prefix.
	  
Example:
  
```css
/* CSS variable */
:root {
  --primary-color: #007bff;
}

/* Use CSS variable */
button {
  background-color: var(--primary-color);
}
```
</details>
<details>
<summary>The differences between inline, embeded and external CSS</summary>
<br>

Inline, embedded, and external CSS are three ways to add styles to an HTML document. `Inline styles` are added directly to an HTML element using the "style" attribute, `embedded styles` are added to the head of an HTML document using the "style" tag, and `external styles` are added in a separate CSS file and linked to the HTML document using the "link" tag.
	  
Example:
	
```css
/* Inline style */
<p style="color: red;">This text is red.</p>

/* Embedded style */
<style>
  p {
    color: red;
  }
</style>

/* External style */
<link rel="stylesheet" href="styles.css">
```
</details>
<details>
<summary>How grid systems work (with floats)</summary>
<br>

Grid systems are used to create flexible and responsive web page layouts. Grids are made up of `columns` and `rows` that allow you to divide your page into sections. Grids often work in conjunction with CSS `positioning` and `floating` properties.
	  
Example:
	
```css
/* CSS for a simple grid with two columns */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.box {
  background-color: #ccc;
  padding: 20px;
}
```
</details>
<details>
<summary>The difference between icons webfonts and SVG icons</summary>
<br>

`Icons webfonts` and `SVG icons` are two different ways to display icons on a web page. `Icon webfonts` use font files to display icons as characters, while `SVG icons` use vector graphics to display icons as scalable images.
	  
Example:
	
```css
/* Icon webfont */
<i class="icon-star"></i>

/* SVG icon */
<svg class="icon-star" viewBox="0 0 24 24">
  <path d="M12 3.5l2.47 6.68 6.53.56-5 4.28 1.64 6.43-5.14-3.57-5.14 3.57 1.64-6.43-5-4.28 6.53-.56z"/>
</svg>
```
</details>
<details>
<summary>The difference between pseudo-classes and pseudo-elements</summary>
<br>

Pseudo-classes and pseudo-elements are used in CSS to style elements based on their state or position in the HTML document. Pseudo-classes are used to target an element in a particular state, such as "`:hover`" for when the user hovers over an element, or "`:first-child`" for the first child of a parent element. Pseudo-elements are used to target a specific part of an element, such as "`::before`" to insert content before an element or "`::after`" to insert content after an element.
  
Exemple:
	
```css
/* Pseudo-class */
a:hover {
  color: red;
}

/* Pseudo-element */
h1::before {
  content: "Chapter ";
  font-weight: bold;
}
```
</details>
<details>
<summary>How to make background gradients</summary>
<br>

Background gradients are used to create a gradient effect in the background of an HTML element. Gradients can be created using the "`linear-gradient`" or "`radial-gradient`" functions, and can include multiple colors.
	  
Example:
	
```css
/* Linear gradient */
body {
  background: linear-gradient(to bottom, #00bfff, #1e90ff);
}

/* Radial gradient */
div {
  background: radial-gradient(circle, #ff4500, #ff8c00, #ffd700);
}
```
</details>
<details>
<summary>How to animate elements in CSS</summary>
<br>

CSS animations are used to add animation effects to HTML elements. Animations are defined using the "`@keyframes`" rule, which defines the keyframe positions and styles for the animation. Animations can also be customized with timing functions, delay, and iteration counts.
	  
Example:
	
```css
/* Define keyframes */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Apply animation */
div {
  animation: rotate 2s linear infinite;
}
```
</details>
<details>
<summary>How to transform (2d, 3d) elements</summary>
<br>

CSS transforms are used to manipulate the position, size, and shape of HTML elements. Transforms can be used to `rotate`, `scale`, `skew`, and `translate` elements in `2D` and `3D` space.
  
Example:
	
```css
/* 2D transform */
div {
  transform: rotate(45deg) scale(1.5) skew(10deg) translate(50px, 50px);
}

/* 3D transform */
div {
  transform: perspective(500px) rotateY(45deg);
}
```
</details>
<details>
<summary>What vendor prefixes are</summary>
<br>

Vendor prefixes are used to add experimental or proprietary CSS features to a page that may not be supported by all browsers. Vendor prefixes are added to the beginning of a CSS property, such as "`-webkit-`" for Safari and Chrome, "`-moz-`" for Firefox, and "`-ms-`" for Internet Explorer.
	  
Exemple:
	
```css
/* Vendor prefix for box-shadow */
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
-webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Safari, Chrome */
-moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Firefox */
-ms-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Internet Explorer */
```
</details>

----------------------------

# [Developer Tools](https://github.com/MathieuMorel62/holbertonschool-web_front_end/tree/main/developer_tools)

![DALL·E 2023-12-16 17 27 58 - A panoramic image of a sophisticated web developer's workspace at night with a large neon sign above the monitor that brightly says 'DEVELOPER TOOLS'](https://github.com/MathieuMorel62/holbertonschool-web_front_end/assets/113856302/2d995986-1a29-4734-bcb5-da552f6f7f50)

## Description

This project aims to equip aspiring web developers with a thorough understanding of web developer tools. By delving into this guide, developers will gain the ability to audit, edit, and optimize web pages effectively. The focus is on mastering the Developer Tools available in popular browsers such as Chrome, Firefox, Safari, and Edge. The guide covers practical skills like editing HTML and CSS on the fly, running custom JavaScript snippets, assessing page performance, and more. Through hands-on experience and following expert tips from resources like Lighthouse, developers will learn to troubleshoot common issues like detecting 404 errors and managing file and server configurations. This project is designed to be comprehensive yet understandable without the need to consult external search engines.

<details>
<summary>What Developer Tools in your browser are</summary>
<br>

- `Developer Tools`: Integrated tools in a web browser that enable developers to inspect, debug, and profile the content of a webpage. They offer functionalities like editing HTML/CSS, viewing console logs, analyzing network activity, and much more.

</details>

<details>
<summary>How to open the Developer Tools on Chrome, Firefox, Safari, and Edge</summary>
<br>

- `Chrome & Edge`: Press `Ctrl + Shift + I` on Windows/Linux or `Cmd + Option + I` on macOS.
- `Firefox`: Press `Ctrl + Shift + I` or `Cmd + Option + I`, or you can press `F12`.
- `Safari`: First enable the Developer menu from Safari's preferences under the Advanced tab by checking `Show Develop menu in menu bar`, then press `Cmd + Option + I`.

</details>

<details>
<summary>How to use the elements tab to edit HTML and CSS</summary>
<br>

- `Elements Tab`: This tab in Developer Tools allows you to view and change the DOM and CSS. You can click on any element to view its HTML, and you can directly click into the styles pane to add, delete, or modify CSS properties and see those changes in real-time.

</details>

<details>
<summary>How to audit a page according to the tips suggested by Lighthouse</summary>
<br>

- `Lighthouse`: An open-source, automated tool for improving the quality of web pages. It can be run against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO, and more. To run Lighthouse in Chrome, go to the `Audits` tab and click `Generate report`.

</details>

<details>
<summary>How to create and run snippets on a page</summary>
<br>

- `Snippets`: They are scripts that you can write within the Developer Tools that can be saved and executed on any page. Navigate to the `Sources` tab, then to the `Snippets` sidebar, write your code, right-click and select `Run` to execute your snippet.

</details>

<details>
<summary>How to get information about files and server configurations</summary>
<br>

- `Network Tab`: This tab provides detailed information about each file loaded by a web page, their HTTP headers which include caching, content types, server information, and other details.

</details>

<details>
<summary>How to block requests</summary>
<br>

- `Request Blocking`: To block requests, go to the `Network` tab, right-click on any request, and choose `Block request URL` or `Block request domain`.

</details>

<details>
<summary>How to know how much JavaScript or CSS is used on a page</summary>
<br>

- `Coverage Tab`: Open the Developer Tools, go to the `More tools` section, and select `Coverage`. Here, you can see how much code is used vs. unused on your page.

</details>

<details>
<summary>How to detect 404 issues</summary>
<br>

- `Console & Network Tabs`: 404 errors will show up in the `Console` tab as red text. They can also be seen in the `Network` tab where files that fail to load will display a 404 status.

</details>

<details>
<summary>How to move elements on a webpage</summary>
<br>

- `DOM Manipulation`: In the `Elements` tab, you can drag and drop HTML elements to rearrange them on the page.

</details>

----------------------

# [Sass & Scss](https://github.com/MathieuMorel62/holbertonschool-web_front_end/tree/main/sass_scss)

![SASS & SCSS](https://www.boardinfinity.com/blog/content/images/2023/03/Copy-of-XML-vsJSON.png)

## Descrition

This project is designed to unravel the intricacies of Sass and Scss, powerful CSS preprocessor scripting languages that extend the default capabilities of CSS. With Sass & Scss, developers can write more efficient, manageable, and reusable stylesheet code. The learning objectives focus on understanding the syntax, features, and best practices of Sass & Scss, preparing developers to streamline their styling workflow and embrace the dynamic features these preprocessors offer.

<details>
<summary>What Sass means</summary>
<br>

- `Sass (Syntactically Awesome Stylesheets)`: It's a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.

</details>

<details>
<summary>How to write Sass & Scss file</summary>
<br>

- `Sass & Scss Files`: Sass files end with `.sass` and use strict indentation syntax that is whitespace-dependent. Scss files end with `.scss` and use the same syntax as CSS with braces and semicolons.

</details>

<details>
<summary>What is the difference between Sass and Scss</summary>
<br>

- `Difference`: The key difference is the syntax. Sass uses an indentation-based syntax, while Scss uses a more traditional CSS-like syntax with braces and semicolons. Scss is considered more user-friendly and easier to integrate with CSS files.

</details>

<details>
<summary>What is the Sass preprocessing</summary>
<br>

- `Sass Preprocessing`: It's a step in the build process where the Sass/Scss files are compiled into standard CSS. This process allows you to use variables, nested rules, mixins, and more in your stylesheets.

</details>

<details>
<summary>How to declare a variable</summary>
<br>

- `Variables`: In Sass/Scss, variables are declared using the `$` symbol followed by the variable name and value. For example, `$primary-color: #333;`.

</details>

<details>
<summary>How to use nested definition</summary>
<br>

- `Nested Definitions`: Sass/Scss allows you to nest CSS selectors in a way that follows the same visual hierarchy of your HTML. For example:

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li { display: inline-block; }
  a { text-decoration: none; }
}
```

</details>

<details>
<summary>How to import a Sass file</summary>
<br>

- `Importing`: Use the `@import` directive to include the content of one Sass/Scss file into another. For example, `@import 'variables';` will import `_variables.scss`.

</details>

<details>
<summary>How to use mixins</summary>
<br>

- `Mixins`: They allow you to define styles that can be reused throughout your stylesheet. They're defined with the `@mixin` directive and included with the `@include` directive. For example:

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

</details>

<details>
<summary>How to declare extend/inheritance styles</summary>
<br>

- `Extend/Inheritance`: The `@extend` directive lets you share a set of CSS properties from one selector to another. For example, `.class1 { @extend .class2; }` will apply `.class2`'s styles to `.class1`.

</details>

<details>
<summary>How to manipulate operators</summary>
<br>

- `Operators`: Sass supports standard math operators like `+`, `-`, `*`, `/`, and `%` for operations on numbers, colors, and variables. For example, `$width: 100% / 3;`.

</details>

------------------

# [Flexbox](https://github.com/MathieuMorel62/holbertonschool-web_front_end/tree/main/flexbox)

![Flexbox](https://miro.medium.com/v2/resize:fit:2000/1*--hxH0rxCaJ3CbY5LJBeXg.png)

## Description

The Flexbox project is a comprehensive exploration of the Flexbox layout model in web development. Flexbox, short for Flexible Box Layout, is a CSS layout model that provides an efficient and predictable way to arrange and distribute space among elements in a container, even when their size is unknown or dynamic. This project aims to provide a detailed understanding of Flexbox, covering its fundamental concepts, practical implementation, and real-world use cases.

<details>
<summary>What is Flexbox?</summary>
<br>

- **Flexbox** is a CSS layout model that allows you to design complex layouts with ease. It provides a flexible way to distribute space and align elements within a container. Flexbox is particularly useful for designing responsive and dynamic layouts.

</details>

<details>
<summary>How to convert float positioning to a flex display</summary>
<br>

- To convert float-based positioning to a Flexbox display, follow these steps:
  1. Create a container element that will hold the items you want to arrange using Flexbox.
  2. Apply `display: flex;` to the container element. This establishes it as a Flexbox container.
  3. Replace the float-based styling on the child elements with Flexbox properties such as `flex-grow`, `flex-shrink`, and `flex-basis` to control their sizing and positioning within the container.

</details>

<details>
<summary>How to horizontally and vertically align elements using Flexbox</summary>
<br>

- To horizontally align elements using Flexbox, set the `justify-content` property on the Flexbox container to values like `center`, `flex-start`, or `flex-end`.

- To vertically align elements using Flexbox, set the `align-items` property on the Flexbox container to values like `center`, `flex-start`, or `flex-end`.

- For more precise control over alignment, you can use the `align-self` property on individual Flexbox items.

</details>

<details>
<summary>The difference between the main and cross axes</summary>
<br>

- In Flexbox, there are two axes: the **main axis** and the **cross axis**.
  - The **main axis** is the primary axis along which Flexbox items are laid out. It is determined by the `flex-direction` property of the Flexbox container and can be either horizontal or vertical.
  - The **cross axis** is perpendicular to the main axis. It is used for alignment and distribution of items that do not fit the main axis.

</details>

<details>
<summary>Properties that work on flex elements vs flex container</summary>
<br>

- Properties that apply to **Flexbox elements** (the child items within a Flexbox container) include:
  - `flex-grow`: Determines how much an item can grow relative to other items.
  - `flex-shrink`: Controls how much an item can shrink relative to other items.
  - `flex-basis`: Specifies the initial size of an item before it starts to grow or shrink.
  - `align-self`: Overrides the `align-items` property for an individual item.

- Properties that apply to the **Flexbox container** include:
  - `display: flex;`: Establishes an element as a Flexbox container.
  - `flex-direction`: Specifies the main axis direction.
  - `justify-content`: Aligns items along the main axis.
  - `align-items`: Aligns items along the cross axis.
  - `flex-wrap`: Controls whether items wrap onto multiple lines when they don't fit.
  - `align-content`: Aligns multiple lines of items along the cross axis.

</details>

<details>
<summary>Shorthands for flex</summary>
<br>

- Flexbox properties can be combined into shorthand properties for convenience:
  - `flex`: Combines `flex-grow`, `flex-shrink`, and `flex-basis` in one property, in that order.
  - Example: `flex: 1 0 auto;` is equivalent to `flex-grow: 1; flex-shrink: 0; flex-basis: auto;`

</details>

<details>
<summary>How to create a new page with flex in mind</summary>
<br>

- When creating a new web page with Flexbox in mind, follow these steps:
  1. Identify the major layout components that need to be flexible, such as headers, navigation bars, content sections, and footers.
  2. Create a container element for each of these major components and apply `display: flex;` to make them Flexbox containers.
  3. Use Flexbox properties to arrange and align the child elements within each container to achieve the desired layout.
  4. Test the layout across different screen sizes and devices to ensure responsiveness and adaptability.
  5. Adjust Flexbox properties as needed to fine-tune the layout and alignment based on user feedback and design requirements.

</details>

---------------------

## Author

- Mathieu Morel
