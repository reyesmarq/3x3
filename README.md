# 3x3 

webpack kit for static pages. Compatible with pug, sass and es6.

### Workarounds for some issues

**Absolute path**

If the entry point is geenrated in a subfolder of dist, the assets are imported using relative paths such as `../assets/cs/etc.css`. In order to resolve this, used publicPath in ouput object of webpack config.

## Todo

- [x] install webpack
- [x] install dev server - realoding on dev
- [x] pug support
- [x] pug structure
- [x] sass support
- [x] sass structure
- [x] absolute path for assets
- [ ] es6 support
- [ ] es6 structure
- [ ] minify html
- [ ] minify css
- [ ] minify js
- [ ] develop different behavior depending on the mode prod || dev
- [x] Erase dist folder on every build
- [ ] navbar component
  - [x] pug
  - [ ] scss
  - [ ] js
- [ ] add images minifiers
- [ ] css autoprefixer - postcss
- [ ] improve sass output - getting css better
- [ ] documenting what are the postcss plugins implemented
- [ ] js dom selectors (maybe)
- [ ] adding responsive breakpoints
- [ ] adding respoinsive typography
- [ ] adding cache busting to css and js sources
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
