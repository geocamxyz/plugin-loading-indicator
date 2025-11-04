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
    const host = this.closest("geocam-viewer");
    if (!host) {
      console.error(
        "GeocamViewerLocadingIndicator must be a child of GeocamViewer"
      );
      return;
    }

    const attach = () => {
      const viewer = host.viewer;
      if (viewer && typeof viewer.plugin === "function") {
        this.viewer = viewer;
        this.plugin = new loadingIndicator();
        this.viewer.plugin(this.plugin);
      } else {
        setTimeout(attach, 50);
      }
    };

    attach();
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
