import{L as p,M as _}from"./index.iitKPf4c.js";function d(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function h(t){const e=t-1;return e*e*e+1}function C(t){return--t*t*t*t*t+1}function S(t,{delay:e=0,duration:o=400,easing:n=d,amount:r=5,opacity:s=0}={}){const c=getComputedStyle(t),i=+c.opacity,a=c.filter==="none"?"":c.filter,u=i*(1-s),[l,y]=p(r);return{delay:e,duration:o,easing:n,css:($,f)=>`opacity: ${i-u*f}; filter: ${a} blur(${f*l}${y});`}}function x(t,{delay:e=0,duration:o=400,easing:n=_}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:n,css:s=>`opacity: ${s*r}`}}function L(t,{delay:e=0,duration:o=400,easing:n=h,x:r=0,y:s=0,opacity:c=0}={}){const i=getComputedStyle(t),a=+i.opacity,u=i.transform==="none"?"":i.transform,l=a*(1-c),[y,$]=p(r),[f,g]=p(s);return{delay:e,duration:o,easing:n,css:(m,b)=>`
			transform: ${u} translate(${(1-m)*y}${$}, ${(1-m)*f}${g});
			opacity: ${a-l*b}`}}function O(t,{delay:e=0,speed:o,duration:n,easing:r=d}={}){let s=t.getTotalLength();const c=getComputedStyle(t);return c.strokeLinecap!=="butt"&&(s+=parseInt(c.strokeWidth)),n===void 0?o===void 0?n=800:n=s/o:typeof n=="function"&&(n=n(s)),{delay:e,duration:n,easing:r,css:(i,a)=>`
			stroke-dasharray: ${s};
			stroke-dashoffset: ${a*s};
		`}}export{L as a,S as b,O as d,x as f,C as q};
