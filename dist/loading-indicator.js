const s = (n, e = {}, i = "") => {
  const o = document.createElement(n);
  for (let a in e)
    o.setAttribute(a, e[a]);
  return o.innerHTML = i, o;
}, p = (n, e) => (document.getElementById(n) || document.getElementsByTagName("head")[0].prepend(s("STYLE", { type: "text/css" }, e)), !0), u = function(n = {}) {
  let e, i = [], o = [];
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
  `), this.init = function(t) {
    e = t;
    const l = s("DIV", { class: "geocam-loading-indicator-wrapper" });
    for (var c = 0; c < 3; c++) {
      const r = s("PROGRESS", {
        min: 0,
        max: 1,
        class: "geocam-loading-indicator-progress"
      });
      i.push(r), l.appendChild(r), r.style.left = `${0.3333333333333333 * c}%`;
      const d = e.progress[c]((g) => {
        r.setAttribute("value", g);
      });
      o.push(d);
    }
    e.wrapper.appendChild(l);
  }, this.destroy = function() {
    o.forEach((t) => t()), i.forEach((t) => e.wrapper.removeChild(t));
  };
};
class m extends HTMLElement {
  constructor() {
    super(), this.plugin = null, console.log("loading-indicator init");
  }
  connectedCallback() {
    console.log("loading-indicator connected");
    const e = this.parentNode;
    e.viewer && e.viewer.plugin ? (this.plugin = new u(), e.viewer.plugin(this.plugin)) : console.error(
      "GeocamViewerLocadingIndicator must be a child of GeocamViewer"
    );
  }
  disconnectedCallback() {
    this.plugin = null, console.log("loading-indicator disconnected");
  }
}
window.customElements.define(
  "geocam-viewer-loading-indicator",
  m
);
export {
  m as GeocamViewerLoadingIndicator
};
