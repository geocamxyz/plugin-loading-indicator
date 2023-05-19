const c = (n, e = {}, i = "") => {
  const t = document.createElement(n);
  for (let a in e)
    t.setAttribute(a, e[a]);
  return t.innerHTML = i, t;
}, g = (n, e) => (document.getElementById(n) || document.getElementsByTagName("head")[0].prepend(c("STYLE", { type: "text/css" }, e)), !0), u = function(n = {}) {
  let e, i = [], t = [];
  g("geocam-loading-indicator", `
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
    const d = c("DIV", { class: "geocam-loading-indicator-wrapper" });
    for (var r = 0; r < 3; r++) {
      const s = c("PROGRESS", {
        min: 0,
        max: 1,
        class: "geocam-loading-indicator-progress"
      });
      i.push(s), d.appendChild(s), s.style.left = `${0.3333333333333333 * r}%`;
      const p = e.progress[r]((l) => {
        s.setAttribute("value", l);
      });
      t.push(p);
    }
    e.wrapper.appendChild(d);
  }, this.destroy = function() {
    t.forEach((o) => o()), i.forEach((o) => e.wrapper.removeChild(o));
  };
};
export {
  u as loadingIndicator
};
