# SASS & SCSS Project

## SASS/SCSS Project Description and Features

This project offers an in-depth exploration of Sass & Scss, two powerful CSS preprocessors, revolutionizing the creation of advanced and dynamic web styles. At the heart of this project is a demonstration of how Sass & Scss transform web development efficiency by significantly increasing productivity, improving code organization, and greatly simplifying CSS maintenance.

Sass & Scss stand out for their ability to introduce advanced features such as variables, mixins, inheritance, and functions into the CSS writing process. This approach not only allows for optimized code reuse but also a more rigorous structure and automation of repetitive tasks. This project highlights the efficiency of these features in optimizing style management and implementing responsive designs.

By adopting Sass & Scss, developers can break free from the traditional limits of CSS, paving the way for more creative and technical design possibilities.

## Resources
### Read or Watch:

- [Sass Basics](https://sass-lang.com/guide/)
- [Sass flow control directives: @if, @for, @each and @while](https://sass-lang.com/documentation/at-rules/control/)
- [Sass references](https://sass-lang.com/documentation/)

## Requirements
### Development Environment

- Languages: Sass/Scss.
- Sass Version: 3.7.4 or later.
- Operating System: Ubuntu 18.04 LTS.
- Authorized text editors: vi, vim, emacs.

## Project Structure

0. **[Always Debugging!](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/0-debug_log.scss)** - Debugging techniques with Sass.
1. **[Color Variable](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/1-color_variable.scss)** - Managing colors with Sass variables.
2. **[Colors](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/2-color_variables.scss)** - Advanced use of colors in CSS.
3. **[Nested Tag](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/3-nested_tag.scss)** - Nesting techniques with tags.
4. **[Nested Class](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/4-nested_class.scss)** - Nesting of CSS classes.
5. **[Nested Child](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/5-nested_child.scss)** - Managing child selectors in Sass.
6. **[Nested Hover](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/6-nested_hover.scss)** - Nesting hover states.
7. **[Nested And Nested Again](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/7-nested_deeper.scss)** - Advanced nesting techniques.
8. **[Margin Mixin](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/8-mixin_margins.scss)** - Creating mixins for margins.
9. **[Extended](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/9-extend_list.scss)** - Using extension to reuse selections.
10. **[Import Colors](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/10-import_colors.scss)** - Importing color palettes.
11. **[For Each](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/11-loop_photos.scss)** - Loops for each element in Sass.
12. **[Loop Headers](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/12-loop_header.scss)** - Creating loops for headers.
13. **[Columns And Operators](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/100-loop_col.scss)** - Managing columns and operators.
14. **[Media Query #0](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/101-media_query.scss)** - Media query techniques.
15. **[Media Query #1](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/102-media_query.scss)** - Advanced media queries.
16. **[Sort!](https://github.com/MathieuMorel62/holbertonschool-web_front_end/blob/main/sass_scss/103-sort_strings.scss)** - Sorting and organizing styles.

## Code Examples
### Sass

In this example, we define two Sass variables: `$font-stack` for the font and `$primary-color` for the main color. Then, we apply these variables to the HTML document body, setting the font and text color.

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

```

### Nesting Example

Nesting is a key feature of Sass that allows for more organized and hierarchical CSS writing. Here is an example of nesting:

```scss

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { 
    display: inline-block; 
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

```

## Author

Mathieu Morel – [Github](https://github.com/MathieuMorel62) - [Linkedin](https://www.linkedin.com/in/mathieu-morel-9ab457261/)

Project Link: [SASS_SCSS](https://github.com/MathieuMorel62/holbertonschool-web_front_end/tree/main/sass_scss)
