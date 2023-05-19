(function(o,t){typeof exports=="object"&&typeof module<"u"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(o=typeof globalThis<"u"?globalThis:o||self,t(o.loadingIndicator={}))})(this,function(o){"use strict";const t=(r,e={},d="")=>{const n=document.createElement(r);for(let c in e)n.setAttribute(c,e[c]);return n.innerHTML=d,n},l=(r,e)=>(document.getElementById(r)||document.getElementsByTagName("head")[0].prepend(t("STYLE",{type:"text/css"},e)),!0),u=function(r={}){let e,d=[],n=[];l("geocam-loading-indicator",`
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
  `),this.init=function(i){e=i;const p=t("DIV",{class:"geocam-loading-indicator-wrapper"});for(var s=0;s<3;s++){const a=t("PROGRESS",{min:0,max:1,class:"geocam-loading-indicator-progress"});d.push(a),p.appendChild(a),a.style.left=`${.3333333333333333*s}%`;const g=e.progress[s](f=>{a.setAttribute("value",f)});n.push(g)}e.wrapper.appendChild(p)},this.destroy=function(){n.forEach(i=>i()),d.forEach(i=>e.wrapper.removeChild(i))}};o.loadingIndicator=u,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
