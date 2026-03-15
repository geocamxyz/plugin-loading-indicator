const a = (n, e = {}, t = "") => {
  const o = document.createElement(n);
  for (let r in e)
    o.setAttribute(r, e[r]);
  return o.innerHTML = t, o;
}, p = (n, e) => (document.getElementById(n) || document.getElementsByTagName("head")[0].prepend(a("STYLE", { type: "text/css" }, e)), !0), u = function(n = {}) {
  let e, t = [], o = [];
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
  `), this.init = function(i) {
    e = i;
    const l = a("DIV", { class: "geocam-loading-indicator-wrapper" });
    for (var c = 0; c < 3; c++) {
      const s = a("PROGRESS", {
        min: 0,
        max: 1,
        class: "geocam-loading-indicator-progress"
      });
      t.push(s), l.appendChild(s), s.style.left = `${0.3333333333333333 * c}%`;
      const d = e.progress[c]((g) => {
        s.setAttribute("value", g);
      });
      o.push(d);
    }
    e.wrapper.appendChild(l);
  }, this.destroy = function() {
    o.forEach((i) => i()), t.forEach((i) => e.wrapper.removeChild(i));
  };
};
class h extends HTMLElement {
  constructor() {
    super(), this.plugin = null, console.log("loading-indicator init");
  }
  connectedCallback() {
    console.log("loading-indicator connected");
    const e = this.closest("geocam-viewer");
    if (!e) {
      console.error(
        "GeocamViewerLocadingIndicator must be a child of GeocamViewer"
      );
      return;
    }
    const t = () => {
      const o = e.viewer;
      o && typeof o.plugin == "function" ? (this.viewer = o, this.plugin = new u(), this.viewer.plugin(this.plugin)) : setTimeout(t, 50);
    };
    t();
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
