## cereal Zola Theme

`cereal` is a simple Zola theme designed for personal blogs.

---

### Features

* **Dark/Light Mode**: Built-in toggle with system preference detection and smooth transitions.
* **RSS Feed**: Automatic RSS feed generation.
* **Fewer Customization**: Easily define menus and external links in `config.toml`.
* **Fewer Components**: Only essential components are included, no pictures.
* **Syntax Highlighting**: Integrated code highlighting using [Highlight.js](https://highlightjs.org/).
* **Pagination**: Automatic pagination support for long post lists.
---

### Installation

1. **Clone the theme** into your Zola project's `themes` directory:

   ```bash
   git clone https://github.com/antipeth/cereal.git themes/cereal
   ```
2. **Activate the theme** in your `config.toml`:

   ```toml
   theme = "cereal"
   ```
3. **Run Zola** to serve your site locally:

   ```bash
   zola serve
   ```
### To do

* Add search
* Add links style

---

### Configuration

In your `config.toml`, here are all the options you can set:

```toml
# The URL the site will be built for
author = "atp"
base_url = "https://example.com"
title = "cereal theme"
description = "A classic blog theme"
# Whether to automatically compile all Sass files in the sass directory
compile_sass = true
minify_html = true

# Whether to build a search index to be used later on by a JavaScript library
build_search_index = false

generate_feeds = true

[markdown]
# Whether to do syntax highlighting
# Theme can be customised by setting the `highlight_theme` variable to a theme supported by Zola
highlight_code = true

[extra]
# Put all your custom variables here
menu = [
    { name = "/home", url = "/", weight = 1 },
    { name = "/posts", url = "/posts", weight = 2 },
    { name = "/links", url = "/links", weight = 3 },
    { name = "/about", url = "/about", weight = 4 },
]
social = [
    { name = "github", url = "https://github.com/", weight = 1 },
    { name = "twitter", url = "https://twitter.com/", weight = 2 },
    { name = "matrix", url = "https://matrix.to/", weight = 3 },
]
toc = true
```

---

### Usage

* **Dark/Light Toggle**: Click the icon in the header right to switch themes. Preference is remembered in `localStorage`.
* **Homepage Sections**: Create a `_index.md` in `content/` with front matter.

```markdown
+++
title = "Posts"
weight = 1
sort_by = "date"
template = "posts.html"
page_template = "page.html"
paginate_by = 5
+++

Welcome to my blog posts section. Here you'll find a collection of my writings.
```
* **Adding Posts**: Place Markdown files under `content/posts/` with front matter.

```markdown
+++
title = "Hello World"
date = 2025-05-16
description = "Getting started with cereal theme."
+++

Welcome to my blog built with cereal!
```
---

### Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

### License

This project is licensed under the [BSD 2-Clause License](LICENSE).

---

### Acknowledgements

* Built with [Zola](https://www.getzola.org/) static site generator
* Inspired by minimal and clean blog themes on GitHub.
* [apollo theme](https://github.com/not-matthias/apollo)
* [hyde theme](https://github.com/getzola/hyde)
