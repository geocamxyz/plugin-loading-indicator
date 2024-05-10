(function(n,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(n=typeof globalThis<"u"?globalThis:n||self,i(n.loadingIndicator={}))})(this,function(n){"use strict";const i=(t,e={},r="")=>{const o=document.createElement(t);for(let a in e)o.setAttribute(a,e[a]);return o.innerHTML=r,o},p=(t,e)=>(document.getElementById(t)||document.getElementsByTagName("head")[0].prepend(i("STYLE",{type:"text/css"},e)),!0),u=function(t={}){let e,r=[],o=[];p("geocam-loading-indicator",`
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
  `),this.init=function(c){e=c;const g=i("DIV",{class:"geocam-loading-indicator-wrapper"});for(var s=0;s<3;s++){const d=i("PROGRESS",{min:0,max:1,class:"geocam-loading-indicator-progress"});r.push(d),g.appendChild(d),d.style.left=`${.3333333333333333*s}%`;const h=e.progress[s](m=>{d.setAttribute("value",m)});o.push(h)}e.wrapper.appendChild(g)},this.destroy=function(){o.forEach(c=>c()),r.forEach(c=>e.wrapper.removeChild(c))}};class l extends HTMLElement{constructor(){super(),this.plugin=null,console.log("loading-indicator init")}connectedCallback(){console.log("loading-indicator connected"),this.plugin=new u;const e=this.parentNode;this.viewer=e.viewer,this.viewer&&this.viewer.plugin?this.viewer.plugin(this.plugin):console.error("GeocamViewerLocadingIndicator must be a child of GeocamViewer")}disconnectedCallback(){this.plugin=null,this.viewer=null,console.log("loading-indicator disconnected")}}window.customElements.define("geocam-viewer-loading-indicator",l),n.GeocamViewerLoadingIndicator=l,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
