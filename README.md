# Loading Indicator
A web component plugin for the [geocamxyz/geocam-viewer](https://github.com/geocamxyz/geocam-viewer) to display a progress bars as shot images are loading.
### NPM Installation:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-loading-indicator/src?v2.0.3'
```
or for a particual commit version:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-loading-indicatorsrc?544c9fc'
```
### Import Map (External Loading):
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-loading-indicator@v2.0.3/dist/loading-indicator.js
```
or for a particual commit version:
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-loading-indicator@544c9fc/dist/loading-indicator.js
```
### Usage:
The .js file can be imported into your .html file using the below code (This can be ignored if your using the NPM package).
```
 <script type="module" src="https://cdn.jsdelivr.net/gh/geocamxyz/plugin-loading-indicator@v2.0.3/dist/loading-indicator.js"></script>
 ```

 Or with an importmap
 ```
<script type="importmap">
  {
    "imports": {
      "loading-indicator": "https://cdn.jsdelivr.net/gh/geocamxyz/plugin-loading-indicator@v2.0.3/dist/loading-indicator.js"
    }
  }
</script>
```
The plugin can then be imported via a module script or using the npm package and using the below import statement.
```
import "loading-indicator"
```
### Setup:
The plugin can then be added to the viewer by making the custom element a child of the viewer parent element.  

```
<geocam-viewer>
  <geocam-viewer-loading-indicator></geocam-viewer-loading-indicator>
</geocam-viewer>
```

There are no attribute settings.