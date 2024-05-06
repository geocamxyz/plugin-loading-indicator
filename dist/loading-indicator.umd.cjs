(function(o,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(o=typeof globalThis<"u"?globalThis:o||self,n(o.loadingIndicator={}))})(this,function(o){"use strict";const n=(t,e={},d="")=>{const i=document.createElement(t);for(let s in e)i.setAttribute(s,e[s]);return i.innerHTML=d,i},p=(t,e)=>(document.getElementById(t)||document.getElementsByTagName("head")[0].prepend(n("STYLE",{type:"text/css"},e)),!0),u=function(t={}){let e,d=[],i=[];p("geocam-loading-indicator",`
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
  `),this.init=function(c){e=c;const g=n("DIV",{class:"geocam-loading-indicator-wrapper"});for(var r=0;r<3;r++){const a=n("PROGRESS",{min:0,max:1,class:"geocam-loading-indicator-progress"});d.push(a),g.appendChild(a),a.style.left=`${.3333333333333333*r}%`;const m=e.progress[r](f=>{a.setAttribute("value",f)});i.push(m)}e.wrapper.appendChild(g)},this.destroy=function(){i.forEach(c=>c()),d.forEach(c=>e.wrapper.removeChild(c))}};class l extends HTMLElement{constructor(){super(),this.plugin=null,console.log("loading-indicator init")}connectedCallback(){console.log("loading-indicator connected");const e=this.parentNode;e.viewer&&e.viewer.plugin?(this.plugin=new u,e.viewer.plugin(this.plugin)):console.error("GeocamViewerLocadingIndicator must be a child of GeocamViewer")}disconnectedCallback(){this.plugin=null,console.log("loading-indicator disconnected")}}window.customElements.define("geocam-viewer-loading-indicator",l),o.GeocamViewerLoadingIndicator=l,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
