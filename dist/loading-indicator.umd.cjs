(function(i,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(i=typeof globalThis<"u"?globalThis:i||self,n(i.loadingIndicator={}))})(this,(function(i){"use strict";const n=(c,e={},t="")=>{const o=document.createElement(c);for(let a in e)o.setAttribute(a,e[a]);return o.innerHTML=t,o},g=(c,e)=>(document.getElementById(c)||document.getElementsByTagName("head")[0].prepend(n("STYLE",{type:"text/css"},e)),!0),p=function(c={}){let e,t=[],o=[];g("geocam-loading-indicator",`
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
  `),this.init=function(s){e=s;const u=n("DIV",{class:"geocam-loading-indicator-wrapper"});for(var r=0;r<3;r++){const d=n("PROGRESS",{min:0,max:1,class:"geocam-loading-indicator-progress"});t.push(d),u.appendChild(d),d.style.left=`${.3333333333333333*r}%`;const m=e.progress[r](h=>{d.setAttribute("value",h)});o.push(m)}e.wrapper.appendChild(u)},this.destroy=function(){o.forEach(s=>s()),t.forEach(s=>e.wrapper.removeChild(s))}};class l extends HTMLElement{constructor(){super(),this.plugin=null,console.log("loading-indicator init")}connectedCallback(){console.log("loading-indicator connected");const e=this.closest("geocam-viewer");if(!e){console.error("GeocamViewerLocadingIndicator must be a child of GeocamViewer");return}const t=()=>{const o=e.viewer;o&&typeof o.plugin=="function"?(this.viewer=o,this.plugin=new p,this.viewer.plugin(this.plugin)):setTimeout(t,50)};t()}disconnectedCallback(){this.plugin=null,this.viewer=null,console.log("loading-indicator disconnected")}}window.customElements.define("geocam-viewer-loading-indicator",l),i.GeocamViewerLoadingIndicator=l,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}));
