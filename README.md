# Logseq Immersion Theme

This is a [Logseq](https://logseq.com) theme focusing on immersion in mind.

<img src="immersion.png" width="100"/>

## Demo

TODO: Add a link to demo

## How to use

Use jsDelivr CDN: https://cdn.jsdelivr.net/gh/denyskorolkov/logseq-immersion-theme/custom.css.

### Setting configuration file

Specify `:custom-css-url` in `logseq/config.edn`

```bash
 ;; Specify a custom CSS import
 ;; This option take precedence over your local `logseq/custom.css` file
 ;; You may find a list of awesome logseq themes here:
 ;; https://github.com/logseq/awesome-logseq#css-themes
 ;; Example:
:custom-css-url "@import url('https://cdn.jsdelivr.net/gh/denyskorolkov/logseq-immersion-theme/custom.css');"
```

### Custom.css

Add the next line to `custom.css`:

```css
@import url('https://cdn.jsdelivr.net/gh/denyskorolkov/logseq-immersion-theme/custom.css');
```

### Plugin

Install the theme as a Logseq Plugin.

## Screenshots

![light](./light.png)
![dark](./dark.png)
