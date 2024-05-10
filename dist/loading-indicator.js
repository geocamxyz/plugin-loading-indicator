const a = (n, e = {}, t = "") => {
  const i = document.createElement(n);
  for (let s in e)
    i.setAttribute(s, e[s]);
  return i.innerHTML = t, i;
}, p = (n, e) => (document.getElementById(n) || document.getElementsByTagName("head")[0].prepend(a("STYLE", { type: "text/css" }, e)), !0), u = function(n = {}) {
  let e, t = [], i = [];
  p("geocam-loading-indicator", `
    .geocam-loading-indicator-wrapper {
          display: flex;
          width: 100%;
          height: 6px;
          bottom: 0;
          position: absolute;
        }

      .geocam-loading-indicator-progress {
          width: 100%;
          height: 6px;
          bottom: 0;
        }
  `), this.init = function(o) {
    e = o;
    const l = a("DIV", { class: "geocam-loading-indicator-wrapper" });
    for (var r = 0; r < 3; r++) {
      const c = a("PROGRESS", {
        min: 0,
        max: 1,
        class: "geocam-loading-indicator-progress"
      });
      t.push(c), l.appendChild(c), c.style.left = `${0.3333333333333333 * r}%`;
      const d = e.progress[r]((g) => {
        c.setAttribute("value", g);
      });
      i.push(d);
    }
    e.wrapper.appendChild(l);
  }, this.destroy = function() {
    i.forEach((o) => o()), t.forEach((o) => e.wrapper.removeChild(o));
  };
};
class h extends HTMLElement {
  constructor() {
    super(), this.plugin = null, console.log("loading-indicator init");
  }
  connectedCallback() {
    console.log("loading-indicator connected"), this.plugin = new u();
    const e = this.parentNode;
    this.viewer = e.viewer, this.viewer && this.viewer.plugin ? this.viewer.plugin(this.plugin) : console.error(
      "GeocamViewerLocadingIndicator must be a child of GeocamViewer"
    );
  }
  disconnectedCallback() {
    this.plugin = null, this.viewer = null, console.log("loading-indicator disconnected");
  }
}
window.customElements.define(
  "geocam-viewer-loading-indicator",
  h
);
export {
  h as GeocamViewerLoadingIndicator
};
