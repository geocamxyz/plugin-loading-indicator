import { loadingIndicator } from './lib/loading-indicator.js';

export class GeocamViewerLoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this.plugin = null;
    // this.yaw = this.getAttribute('yaw') || 0;
    console.log("loading-indicator init");
  }

  connectedCallback() {
    console.log("loading-indicator connected");
    const node = this;
    this.plugin = new loadingIndicator();
    const parent = this.parentNode;
    this.viewer = parent.viewer;
    if ( this.viewer &&  this.viewer.plugin) {
      // Call a method on the parent
        this.viewer.plugin(this.plugin);
    } else {
      console.error(
        "GeocamViewerLocadingIndicator must be a child of GeocamViewer"
      );
    }
  }

  disconnectedCallback() {
    this.plugin = null;
    this.viewer = null;
    console.log("loading-indicator disconnected");
    // Clean up the viewer
  }
}

window.customElements.define(
  "geocam-viewer-loading-indicator",
  GeocamViewerLoadingIndicator
);
