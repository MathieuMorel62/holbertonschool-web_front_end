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

### [Advanced HTML](https://github.com/MathieuMorel62/holbertonschool-web_front_end/tree/main/html_advanced)

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
