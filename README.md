# Loading Indicator
A plugin for the geocam-viewer.
### NPM Installation:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-loading-indicator/src?v1.0.0'
```
or for a particual commit version:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-loading-indicatorsrc?29be18f'
```
### Import Map (External Loading):
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-loading-indicator@v1.0.0/dist/loading-indicator.js
```
or for a particual commit version:
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-loading-indicator@29be18f/dist/loading-indicator.js
```
### Usage:
The .js file can be imported into your .html file using the below code (This can be ignored if your using the NPM package).
```
<script type="importmap">
  {
    "imports": {
      "loading-indicator": "https://cdn.jsdelivr.net/gh/geocamxyz/plugin-loading-indicator@v1.0.0/dist/loading-indicator.js"
    }
  }
</script>
```
The plugin can be imported via a module script or using the npm package and using the below import statement.
```
import { loadingIndicator } from "loading-indicator"
```
### Setup:
The plugin can then be added into the plugins array for the init of the viewer class as seen below
```
const viewer = new geocamViewer(node, {
	plugins: [
        new loadingIndicator(),
      ],
});
```