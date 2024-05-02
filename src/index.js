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
    const parent = this.parentNode;
    if (parent.viewer && parent.viewer.plugin) {
      // Call a method on the parent
        this.plugin = new loadingIndicator();
  parent.viewer.plugin(this.plugin);
    } else {
      console.error(
        "GeocamViewerLocadingIndicator must be a child of GeocamViewer"
      );
    }
  }

  disconnectedCallback() {
    this.plugin = null;
    console.log("loading-indicator disconnected");
    // Clean up the viewer
  }
}

window.customElements.define(
  "geocam-viewer-loading-indicator",
  GeocamViewerLoadingIndicator
);
