# 3x3 

webpack kit for static pages. Compatible with pug, sass and es6.

### Workarounds for some issues

**Absolute path**

If the entry point is geenrated in a subfolder of dist, the assets are imported using relative paths such as `../assets/cs/etc.css`. In order to resolve this, used publicPath in ouput object of webpack config.

## Integration of postcss

**Autoprefixer**

allows you to add autoprefixers on the go

**Mqpacker**

merge duplicate mediaqueries

example

**input**
```css
@media screen and (min-width: 640px) {
  :root {
    font-size: 18px
  }
}

@media screen and (min-width: 640px) {
  .grid {
    display: grid;
  }
}
```

**output**
```css
@media screen and (min-width: 640px) {
  :root {
    font-size: 18px
  }

  .grid {
    display: flex
  }
}
```

**discard-duplicates**

allows you to merge duplicate rules

example 

*input*
```css

body {
  position: sticky;
}

body {
  position: sticky;
  color: black;
}

```
*outpu*
```css
body {
  position: sticky;
  color: black
}
```

**combine-duplicated-selectors**

example 

*input*
```css
body {
  color: green;
}
.grid {
  color: blue;
}
body {
  background: red;
}
.grid {
  background: yellow;
}
```
*outpu*
```css
body {
  color: green;
  background: red;
}
```


## Todo

- [x] install webpack
- [x] install dev server - realoding on dev
- [x] pug support
- [x] pug structure
- [x] sass support
- [x] sass structure
- [x] absolute path for assets
- [x] es6 support
- [x] es6 structure
- [ ] develop different behavior depending on the mode prod || dev
  - [ ] development
    - [x] pretty html with html-beautify-webpack-plugin
    - [x] css pretty with sass expanded
    - [x] webpack by default will output dev js
    - [x] No cache busting
    - [x] add images minifiers
      - [x] png pnquant
      - [x] jpg jpeg-recompress
      - [x] webp => converting jpg and jpeg to wbep
      - [x] svg svgo
      - [x] gif gifsicle
  - [ ] production
    - [x] minify html
    - [x] minify css with sass compress
    - [x] webpack by defatul will output minify js
    - [x] adding cache busting to css and js sources
    - [x] No image minification
- [x] Erase dist folder on every build
- [x] navbar component
  - [x] pug
  - [x] scss
  - [x] js activating active on current page dinamically
- [ ] Componentn for responsive images, ig the browser supports webp.
- [x] improve sass output - getting css better by post css
- [x] Postcss implementation
  - [x] autoprefixer
  - [x] css-mqpacker
  - [x] postcss-discard-duplicates
  - [x] postcss-combine-duplicated-selectors
- [x] purge css for unused css ( still needs more testing )
- [x] documenting what are the postcss plugins implemented
- [x] js dom selectors (maybe)
- [x] adding responsive breakpoints
- [x] adding respoinsive typography
- [ ] Adding fluid typography
- [ ] add a sitemap componentn in pug so it can be generated automatically
- [ ] open graph implementation
- [ ] twitter cards
- [ ] build a meta tag put component. This component will fetch multiple stand alone mixins where the user will be capable of add or remove the meta tags that he would like to use, depending on the needs of the project
- [ ] facebook component
- [ ] twitter componetn
- [ ] instagram componentn
- [ ] mixin pug adding PWA meta tags and funcionality if possible https://github.com/gokulkrishh/awesome-meta-and-manifest
- [ ] reload while adding a new folder on pug page
- [ ] add font-settings map in order to control font-sizes and mizing to capture that map
- [ ] Typo scale
- [ ] Improve Readme.md
- [ ] **Reload on changes**

# typo scale

## todo

* vertical rhythm with https://www.gridlover.net/try

	* **to take in consideration**

		* line-height
		* margin-top, margin-bottom, margin collapse

* responsive typography with https://type-scale.com/ or https://www.modularscale.com/

	* **to take in consideration**

		* scale-number
		* specific styles for 9 sizes and no more, h{1,2,3,4,5,6}, paragraph, large paragraph blockquote
		* decrese the font-size by 2px
		* making the responsive using css variables on the body by changing the font-size.

* font-weight

	* **to take in consideration**

		* h{1,2,3,4,5,6} have to be bold. 
		* blockquote has to be italic.

* font-family customizable

	* **to take in consideration**

		* compatible with two fonts max
