!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),function(){const e=document.querySelector("#content"),t=document.createElement("h1");t.setAttribute("id","pageTitle"),t.textContent="Ce Vole Er Guanciale",e.appendChild(t);const n=document.createElement("div");n.classList.add("containerNavBar");const a=document.createElement("div");a.classList.add("navBarElement","activeTab"),a.setAttribute("id","home"),a.textContent="Home";const o=document.createElement("div");o.classList.add("navBarElement"),o.setAttribute("id","menu"),o.textContent="Menu";const i=document.createElement("div");i.classList.add("navBarElement"),i.setAttribute("id","contact"),i.textContent="Contact",n.appendChild(a),n.appendChild(o),n.appendChild(i),e.appendChild(n)}(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("homePageContent");const n=document.createElement("a");n.classList.add("italicTxt"),n.setAttribute("id","chefName"),n.setAttribute("href","https://www.instagram.com/ego_wino/"),n.textContent="Calogero Maria Maiera";const a=document.createElement("p");a.setAttribute("id","descriptionRestaurant");const o=document.createTextNode("Ce Vole Er Guanciale is a restaurant specialized in recipes using a pork cut called Guanciale. The most famous meal of the house is the classical chef's "),i=document.createTextNode(" Pasta Alla Carbonara. Some say people only start living after tasting it.");a.appendChild(o),a.appendChild(n),a.appendChild(i),t.appendChild(a);const r=document.createElement("img");r.setAttribute("src","assets/carbonara.jpg"),r.setAttribute("id","carbonaraImg"),r.setAttribute("alt","Carbonara Pasta"),t.appendChild(r),e.appendChild(t);const c=document.createElement("p");c.setAttribute("id","descriptionGuanciale");const d=document.createElement("a");d.setAttribute("href","https://en.wikipedia.org/wiki/Guanciale"),d.classList.add("italicTxt"),d.textContent="gwan-chee-AH-lay";const l=document.createTextNode('"Guanciale" is a traditional italian cured meat. Pronounced '),s=document.createTextNode(' the name refers to one of the few cuts taken from the head of the pig, the jowl or cheek: "guancia" - Italian for cheek, hence, Guanciale!');c.appendChild(l),c.appendChild(d),c.appendChild(s),t.appendChild(c)}()}]);