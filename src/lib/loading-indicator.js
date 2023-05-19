const node = (name, attrs = {}, content = "") => {
  const node = document.createElement(name);
  for (let i in attrs) {
    node.setAttribute(i, attrs[i]);
  }
  node.innerHTML = content;
  return node;
};

const injectStyle = (id, rules) => {
  if (!document.getElementById(id)) {
  document
    .getElementsByTagName("head")[0]
    .prepend(node("STYLE", { type: "text/css" }, rules));
  }
  return true;
};

export const loadingIndicator = function (config = {}) {
  let viewer,
    progressors = [],
    unsubs = [];

  const STYLES = `
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
  `;

  injectStyle('geocam-loading-indicator',STYLES);

  this.init = function (geocamViewer) {
    viewer = geocamViewer;
    const div = node("DIV", { class: "geocam-loading-indicator-wrapper" });
    for (var i = 0; i < 3; i++) {
      const el = node("PROGRESS", {
        min: 0,
        max: 1,
        class: "geocam-loading-indicator-progress",
      });
      progressors.push(el);
      div.appendChild(el);
      el.style["left"] = `${(1 / 3) * i}%`;
      const u = viewer.progress[i]((p) => {
        el.setAttribute("value", p);
      });
      unsubs.push(u);
    }
    viewer.wrapper.appendChild(div);
  };

  this.destroy = function () {
    unsubs.forEach((u) => u());
    progressors.forEach((el) => viewer.wrapper.removeChild(el));
  };
};