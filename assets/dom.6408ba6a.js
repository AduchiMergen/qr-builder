import{v as o,x as i,y as a}from"./index.b9be31df.js";const f=t=>o(i(t)),u=t=>o(t);function d(t,n){return t!==void 0&&t()||n}function s(t,n){return t!==void 0?n.concat(t()):n}function v(t,n){return t===void 0?n:n!==void 0?n.concat(t()):t()}function m(t,n){const r=t.style;for(const e in n)r[e]=n[e]}function p(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const n=a(t)===!0?t.value:t;if(n)return n.$el||n}export{s as a,m as b,f as c,v as d,u as e,p as g,d as h};
