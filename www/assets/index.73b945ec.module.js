var D=Object.defineProperty,N=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var H=(t,a,n)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,f=(t,a)=>{for(var n in a||(a={}))I.call(a,n)&&H(t,n,a[n]);if(x)for(var n of x(a))S.call(a,n)&&H(t,n,a[n]);return t},Z=(t,a)=>N(t,A(a));var g=(t,a,n)=>new Promise((c,l)=>{var r=s=>{try{i(n.next(s))}catch(o){l(o)}},C=s=>{try{i(n.throw(s))}catch(o){l(o)}},i=s=>s.done?c(s.value):Promise.resolve(s.value).then(r,C);i((n=n.apply(t,a)).next())});import{R as e,B as v,A as F,r as d,H as B,a as w,P as _,b as V,c as P,u as z,d as u,I as y,e as T,f as Y,T as R,g as O,L,h as J,i as U,S as W,Z as j,j as $,k as M,l as G}from"./vendor.08388381.module.js";const q=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const C of r.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&c(C)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}};q();const K="_description_xez4f_16";var m={"info-wrapper":"_info-wrapper_xez4f_1","left-info":"_left-info_xez4f_6","class-title":"_class-title_xez4f_6","user-name":"_user-name_xez4f_10",description:K,"checkin-wrapper":"_checkin-wrapper_xez4f_20","checkin-time":"_checkin-time_xez4f_26","checkin-btn":"_checkin-btn_xez4f_32","events-wrapper":"_events-wrapper_xez4f_36"};const X=/D{1,2}|M{1,2}|YY(?:YY)?|([Hms])\1?|"[^"]*"|'[^']*'/g;function h(t,a=2){let n=t.toString();for(;n.length<a;)n="0"+n;return n}function Q(t,a="HH:mm DD-MM-YYYY"){if(t instanceof Date||(t=new Date(t)),Number.isNaN(t))throw TypeError("Invalid date");const n=t.getHours(),c=t.getMinutes(),l=t.getSeconds(),r=t.getDate(),C=t.getMonth(),i=t.getFullYear(),s={H:n,HH:h(n),m:c,mm:h(c),s:l,ss:h(l),D:r,DD:h(r),M:C+1,MM:h(C+1),YY:String(i).slice(2),YYYY:i};return a.replace(X,function(p){return p in s?s[p]:p.slice(1,p.length-1)})}const e3=t=>{const{time:a=new Date().getTime(),status:n}=t;return e.createElement("div",{className:m["checkin-wrapper"]},e.createElement("p",null,"Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u s\u1EF1 ki\u1EC7n"),e.createElement("h1",{className:m["checkin-time"]},a&&Q(new Date(a),"HH:mm")),e.createElement(v,{className:"checkin-btn",fullWidth:!0},"Checkin Now"))},t3=t=>{const{eventTitle:a,description:n,userName:c,userAvatar:l}=t;return console.log(l),e.createElement("div",{className:m["info-wrapper"]},e.createElement("div",{className:m["left-info"]},e.createElement("p",{className:m["class-title"]},a),e.createElement("h1",{className:m["user-name"]},c),e.createElement("p",{className:m.description},n)),e.createElement("div",{className:m["right-info"]},e.createElement(F,{src:l})))},n3=t=>{const{children:a}=t;return e.createElement("div",{className:m["events-wrapper"]},a)},a3="_title_kbf3b_24",l3="_description_kbf3b_30";var E={"top-notify":"_top-notify_kbf3b_1","info-box":"_info-box_kbf3b_13",title:a3,description:l3,"hidden-date-picker":"_hidden-date-picker_kbf3b_35"};const r3=t=>{const{leftText:a,rightText:n,backgroundColor:c="#EFFBFB",textColor:l="#42B3AD"}=t;return e.createElement("div",{style:{backgroundColor:c,color:l},className:E["top-notify"]},a&&e.createElement("h1",null,a),n&&e.createElement("h1",null,n))},c3=d.exports.forwardRef((t,a)=>{const{onClick:n}=t;return e.createElement("div",{className:E["hidden-date-picker"],onClick:n,ref:a})}),s3=t=>e.createElement(B,f({customInput:e.createElement(c3,null),withPortal:!0,className:E["hidden-date-picker"]},t)),i3=()=>e.createElement("svg",{width:"46",height:"46",viewBox:"0 0 46 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{clipPath:"url(#clip0_43_7953)"},e.createElement("path",{d:"M33.3549 3.64232C33.3549 1.63511 34.982 0.00805664 36.9891 0.00805664H8.70117C7.10501 0.00805664 5.81104 1.30203 5.81104 2.89819V35.8095H33.3548L33.3549 3.64232Z",fill:"#FFE07D"}),e.createElement("path",{d:"M34.795 0.00805664C32.7878 0.00805664 31.1607 1.6352 31.1607 3.64232V18.0546C31.1607 18.9026 30.6038 19.657 29.7876 19.8871C23.7692 21.5841 19.3579 27.1144 19.3579 33.6757C19.3579 35.4007 19.663 37.0544 20.2218 38.586H33.3548V3.64232C33.3548 1.63511 34.982 0.00805664 36.9891 0.00805664H34.795Z",fill:"#FFD064"}),e.createElement("path",{d:"M28.9623 6.27608H10.7543C10.3709 6.27608 10.0601 5.96536 10.0601 5.58189C10.0601 5.19841 10.3708 4.8877 10.7543 4.8877H28.9623C29.3457 4.8877 29.6565 5.19841 29.6565 5.58189C29.6565 5.96536 29.3457 6.27608 28.9623 6.27608ZM28.9623 13.1981H10.7543C10.3709 13.1981 10.0601 12.8873 10.0601 12.5039C10.0601 12.1204 10.3708 11.8097 10.7543 11.8097H28.9623C29.3457 11.8097 29.6565 12.1204 29.6565 12.5039C29.6565 12.8873 29.3457 13.1981 28.9623 13.1981ZM28.9623 20.1202H10.7543C10.6631 20.1202 10.5728 20.1023 10.4886 20.0674C10.4044 20.0325 10.3278 19.9814 10.2634 19.9169C10.1989 19.8524 10.1478 19.7759 10.1129 19.6917C10.078 19.6075 10.06 19.5172 10.0601 19.426C10.06 19.3349 10.078 19.2446 10.1129 19.1603C10.1478 19.0761 10.1989 18.9996 10.2634 18.9351C10.3278 18.8707 10.4044 18.8195 10.4886 18.7846C10.5728 18.7498 10.6631 18.7318 10.7543 18.7318H28.9623C29.3457 18.7318 29.6565 19.0425 29.6565 19.426C29.6565 19.8095 29.3457 20.1202 28.9623 20.1202ZM28.9623 27.0423H10.7543C10.3709 27.0423 10.0601 26.7316 10.0601 26.3481C10.0601 25.9646 10.3708 25.6539 10.7543 25.6539H28.9623C29.3457 25.6539 29.6565 25.9646 29.6565 26.3481C29.6565 26.7316 29.3457 27.0423 28.9623 27.0423Z",fill:"#2B4D66"}),e.createElement("path",{d:"M30.0342 38.5861H5.13826C2.3005 38.5861 0 36.2856 0 33.4477V32.5378C2.3815e-05 32.4223 0.045913 32.3115 0.127577 32.2299C0.209242 32.1482 0.319996 32.1023 0.435487 32.1023H30.0342V38.5861Z",fill:"#EAB14D"}),e.createElement("path",{d:"M19.3579 33.6758C19.3579 35.4008 19.663 37.0545 20.2218 38.5861H30.0343V32.1023H19.4443C19.387 32.6248 19.3581 33.1501 19.3579 33.6758Z",fill:"#E49542"}),e.createElement("path",{d:"M33.6839 45.9921C40.486 45.9921 46.0002 40.4779 46.0002 33.6759C46.0002 26.8738 40.486 21.3596 33.6839 21.3596C26.8818 21.3596 21.3677 26.8738 21.3677 33.6759C21.3677 40.4779 26.8818 45.9921 33.6839 45.9921Z",fill:"#DD636E"}),e.createElement("path",{d:"M33.6835 21.3596C33.357 21.3596 33.0335 21.3726 32.7134 21.3975C39.062 21.8922 44.0595 27.2003 44.0595 33.6759C44.0595 40.1514 39.0619 45.4595 32.7134 45.9542C33.0335 45.9792 33.357 45.9921 33.6835 45.9921C40.4856 45.9921 45.9998 40.4779 45.9998 33.6759C45.9998 26.8738 40.4856 21.3596 33.6835 21.3596Z",fill:"#DA4A54"}),e.createElement("path",{d:"M33.6836 42.8623C38.7572 42.8623 42.8702 38.7494 42.8702 33.6758C42.8702 28.6022 38.7572 24.4893 33.6836 24.4893C28.61 24.4893 24.4971 28.6022 24.4971 33.6758C24.4971 38.7494 28.61 42.8623 33.6836 42.8623Z",fill:"#F4FBFF"}),e.createElement("path",{d:"M33.6838 24.4893C33.2581 24.4893 32.8394 24.5189 32.4292 24.5749C36.9092 25.1868 40.3611 29.0278 40.3611 33.6758C40.3611 38.3238 36.9091 42.1648 32.4292 42.7767C32.8394 42.8328 33.2581 42.8623 33.6838 42.8623C38.7574 42.8623 42.8704 38.7494 42.8704 33.6757C42.8704 28.6022 38.7574 24.4893 33.6838 24.4893Z",fill:"#DAF1F4"}),e.createElement("path",{d:"M33.6836 28.0106C33.5924 28.0106 33.5021 27.9926 33.4179 27.9578C33.3337 27.9229 33.2571 27.8717 33.1927 27.8073C33.1282 27.7428 33.0771 27.6663 33.0422 27.5821C33.0073 27.4978 32.9894 27.4075 32.9894 27.3164V26.9984C32.9894 26.9072 33.0073 26.817 33.0422 26.7327C33.0771 26.6485 33.1282 26.572 33.1927 26.5075C33.2571 26.443 33.3337 26.3919 33.4179 26.357C33.5021 26.3221 33.5924 26.3042 33.6836 26.3042C33.7747 26.3042 33.865 26.3221 33.9492 26.357C34.0335 26.3919 34.11 26.443 34.1745 26.5075C34.2389 26.572 34.2901 26.6485 34.325 26.7327C34.3598 26.817 34.3778 26.9072 34.3778 26.9984V27.3164C34.3778 27.4075 34.3598 27.4978 34.325 27.5821C34.2901 27.6663 34.2389 27.7428 34.1745 27.8073C34.11 27.8717 34.0335 27.9229 33.9492 27.9578C33.865 27.9926 33.7747 28.0106 33.6836 28.0106ZM38.1803 29.8732C38.043 29.8732 37.9087 29.8325 37.7946 29.7562C37.6804 29.6799 37.5914 29.5715 37.5389 29.4446C37.4863 29.3177 37.4726 29.1781 37.4994 29.0435C37.5263 28.9088 37.5924 28.7851 37.6896 28.6881L37.9144 28.4633C37.9789 28.3989 38.0554 28.3478 38.1396 28.3129C38.2238 28.278 38.3141 28.2601 38.4053 28.2601C38.4964 28.2602 38.5867 28.2781 38.6709 28.313C38.7551 28.3479 38.8316 28.3991 38.896 28.4636C38.9605 28.528 39.0116 28.6046 39.0464 28.6888C39.0813 28.773 39.0992 28.8633 39.0992 28.9545C39.0992 29.0456 39.0812 29.1359 39.0463 29.2201C39.0114 29.3043 38.9602 29.3808 38.8958 29.4452L38.6709 29.67C38.6066 29.7345 38.5301 29.7857 38.4459 29.8205C38.3617 29.8554 38.2714 29.8733 38.1803 29.8732ZM40.3609 34.3699H40.0429C39.6595 34.3699 39.3487 34.0592 39.3487 33.6757C39.3487 33.2922 39.6594 32.9815 40.0429 32.9815H40.3609C40.7442 32.9815 41.0551 33.2922 41.0551 33.6757C41.0551 34.0592 40.7442 34.3699 40.3609 34.3699ZM27.3242 34.3699H27.0062C26.6228 34.3699 26.312 34.0592 26.312 33.6757C26.312 33.2922 26.6227 32.9815 27.0062 32.9815H27.3242C27.7076 32.9815 28.0184 33.2922 28.0184 33.6757C28.0184 34.0592 27.7077 34.3699 27.3242 34.3699ZM38.4052 39.0915C38.3141 39.0916 38.2238 39.0737 38.1396 39.0389C38.0554 39.004 37.9789 38.9528 37.9145 38.8883L37.6896 38.6636C37.6252 38.5991 37.574 38.5226 37.5391 38.4384C37.5042 38.3542 37.4862 38.264 37.4862 38.1728C37.4862 38.0816 37.5041 37.9914 37.539 37.9071C37.5738 37.8229 37.6249 37.7464 37.6894 37.6819C37.7538 37.6174 37.8303 37.5662 37.9145 37.5313C37.9987 37.4963 38.089 37.4783 38.1801 37.4783C38.2713 37.4783 38.3616 37.4962 38.4458 37.5311C38.53 37.566 38.6066 37.6172 38.671 37.6817L38.8959 37.9064C38.993 38.0035 39.0591 38.1271 39.086 38.2618C39.1128 38.3965 39.0991 38.536 39.0466 38.6629C38.994 38.7898 38.9051 38.8982 38.7909 38.9745C38.6767 39.0508 38.5425 39.0915 38.4052 39.0915ZM33.6836 41.0472C33.5924 41.0473 33.5021 41.0293 33.4179 40.9944C33.3337 40.9595 33.2571 40.9084 33.1927 40.8439C33.1282 40.7795 33.0771 40.7029 33.0422 40.6187C33.0073 40.5345 32.9894 40.4442 32.9894 40.3531V40.0351C32.9894 39.9439 33.0073 39.8536 33.0422 39.7694C33.0771 39.6852 33.1282 39.6086 33.1927 39.5442C33.2571 39.4797 33.3337 39.4286 33.4179 39.3937C33.5021 39.3588 33.5924 39.3409 33.6836 39.3409C33.7747 39.3409 33.865 39.3588 33.9492 39.3937C34.0335 39.4286 34.11 39.4797 34.1745 39.5442C34.2389 39.6086 34.2901 39.6852 34.325 39.7694C34.3598 39.8536 34.3778 39.9439 34.3778 40.0351V40.3531C34.3778 40.4442 34.3598 40.5345 34.325 40.6187C34.2901 40.7029 34.2389 40.7795 34.1745 40.8439C34.11 40.9084 34.0335 40.9595 33.9492 40.9944C33.865 41.0293 33.7747 41.0473 33.6836 41.0472ZM28.962 39.0915C28.8247 39.0915 28.6905 39.0508 28.5764 38.9745C28.4622 38.8982 28.3732 38.7898 28.3207 38.663C28.2682 38.5362 28.2544 38.3966 28.2812 38.2619C28.3079 38.1273 28.3741 38.0036 28.4711 37.9065L28.6959 37.6817C28.7603 37.617 28.8368 37.5656 28.9211 37.5304C29.0054 37.4953 29.0958 37.4772 29.1871 37.477C29.2785 37.4769 29.3689 37.4948 29.4533 37.5297C29.5377 37.5646 29.6144 37.6158 29.679 37.6804C29.7435 37.7449 29.7947 37.8216 29.8296 37.906C29.8645 37.9904 29.8824 38.0809 29.8823 38.1722C29.8822 38.2635 29.864 38.3539 29.8289 38.4382C29.7938 38.5225 29.7424 38.5991 29.6776 38.6635L29.4529 38.8882C29.3885 38.9528 29.3119 39.0039 29.2277 39.0388C29.1435 39.0737 29.0532 39.0916 28.962 39.0915ZM29.1868 29.8732C29.0956 29.8732 29.0053 29.8553 28.9211 29.8205C28.8368 29.7856 28.7603 29.7344 28.6959 29.6699L28.4711 29.4451C28.4064 29.3807 28.355 29.3042 28.3198 29.2199C28.2847 29.1356 28.2666 29.0452 28.2664 28.9539C28.2663 28.8625 28.2842 28.7721 28.3191 28.6877C28.354 28.6033 28.4052 28.5266 28.4698 28.462C28.5343 28.3975 28.611 28.3463 28.6954 28.3114C28.7798 28.2765 28.8703 28.2586 28.9616 28.2587C29.0529 28.2588 29.1433 28.277 29.2276 28.3121C29.3119 28.3472 29.3885 28.3986 29.4529 28.4634L29.6776 28.6881C29.7747 28.7852 29.8408 28.9089 29.8675 29.0436C29.8943 29.1782 29.8806 29.3178 29.828 29.4446C29.7755 29.5714 29.6865 29.6799 29.5724 29.7561C29.4583 29.8324 29.3241 29.8731 29.1868 29.8732Z",fill:"#365E7D"}),e.createElement("path",{d:"M35.576 34.37H33.6839C33.5928 34.37 33.5025 34.352 33.4183 34.3172C33.334 34.2823 33.2575 34.2312 33.193 34.1667C33.1286 34.1022 33.0774 34.0257 33.0426 33.9415C33.0077 33.8572 32.9897 33.767 32.9897 33.6758V30.0121C32.9897 29.9209 33.0077 29.8306 33.0426 29.7464C33.0774 29.6622 33.1286 29.5856 33.193 29.5212C33.2575 29.4567 33.334 29.4056 33.4183 29.3707C33.5025 29.3358 33.5928 29.3179 33.6839 29.3179C33.7751 29.3179 33.8654 29.3358 33.9496 29.3707C34.0338 29.4056 34.1104 29.4567 34.1748 29.5212C34.2393 29.5856 34.2904 29.6622 34.3253 29.7464C34.3602 29.8306 34.3781 29.9209 34.3781 30.0121V32.9816H35.576C35.9594 32.9816 36.2702 33.2923 36.2702 33.6758C36.2702 34.0593 35.9595 34.37 35.576 34.37Z",fill:"#2B4D66"}),e.createElement("path",{d:"M39.9762 9.12777H33.3545V3.64232C33.3545 1.63511 34.9816 0.00805664 36.9888 0.00805664C38.996 0.00805664 40.623 1.6352 40.623 3.64232V8.48083C40.623 8.56578 40.6063 8.64991 40.5738 8.72841C40.5413 8.8069 40.4937 8.87823 40.4336 8.9383C40.3736 8.99838 40.3022 9.04604 40.2237 9.07854C40.1453 9.11105 40.0611 9.12778 39.9762 9.12777Z",fill:"#EAB14D"}),e.createElement("path",{d:"M38.1727 0.206397C37.7918 0.0749762 37.3917 0.00794468 36.9888 0.00805678C34.9816 0.00805678 33.3545 1.6352 33.3545 3.64232V9.12777H35.7224V3.64232C35.7223 2.04985 36.747 0.697578 38.1727 0.206397Z",fill:"#E49542"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_43_7953"},e.createElement("rect",{width:"46",height:"46",fill:"white"})))),C3=()=>e.createElement("svg",{width:"46",height:"46",viewBox:"0 0 46 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{clipPath:"url(#clip0_43_7969)"},e.createElement("path",{d:"M3.08335 33.2537C1.12493 29.9633 0 26.1189 0 22.0117C0 12.7319 5.74245 4.79337 13.8677 1.55567C16.3867 0.551937 27.9127 0.608808 30.5339 1.71047C38.4586 5.04116 44.0234 12.8765 44.0234 22.0117C44.0234 26.914 42.4208 31.442 39.7109 35.1004C39.4569 35.4433 3.39933 33.7846 3.08335 33.2537Z",fill:"#465A61"}),e.createElement("path",{d:"M36.5054 0.898438V19.9734H12.0082C11.512 19.9734 11.1098 20.3757 11.1098 20.8719V40.0404C10.7496 39.7876 10.3971 39.5241 10.0527 39.2502C9.94289 39.163 8.10432 39.0747 7.99624 38.9854C6.04235 37.3704 4.38058 35.4317 3.0835 33.2538V0.898438C3.0835 0.402231 3.48573 0 3.98193 0H35.6069C36.1031 0 36.5054 0.402231 36.5054 0.898438Z",fill:"#B6C4CF"}),e.createElement("path",{d:"M39.7109 6.06714V35.1005C35.7009 40.5141 29.2662 44.0235 22.0117 44.0235C16.6866 44.0235 11.803 42.1325 7.99609 38.9854V6.06714C7.99609 5.57093 8.39832 5.1687 8.89453 5.1687H38.8125C39.3087 5.1687 39.7109 5.57093 39.7109 6.06714Z",fill:"#D9E7EC"}),e.createElement("path",{d:"M21.9185 12.5054H12.0356C11.5394 12.5054 11.1372 12.1031 11.1372 11.6069C11.1372 11.1107 11.5394 10.7085 12.0356 10.7085H21.9185C22.4147 10.7085 22.8169 11.1107 22.8169 11.6069C22.8169 12.1031 22.4147 12.5054 21.9185 12.5054Z",fill:"#8D9CA8"}),e.createElement("path",{d:"M32.7661 16.0991H12.0356C11.5394 16.0991 11.1372 15.6969 11.1372 15.2007C11.1372 14.7045 11.5394 14.3022 12.0356 14.3022H32.7661C33.2623 14.3022 33.6645 14.7045 33.6645 15.2007C33.6645 15.6969 33.2623 16.0991 32.7661 16.0991ZM33.6645 18.7944C33.6645 18.2982 33.2623 17.896 32.7661 17.896H12.0356C11.5394 17.896 11.1372 18.2982 11.1372 18.7944C11.1372 19.2906 11.5394 19.6929 12.0356 19.6929H32.7661C33.2623 19.6929 33.6645 19.2906 33.6645 18.7944ZM29.6121 22.3882C29.6121 21.892 29.2099 21.4897 28.7137 21.4897H12.0356C11.5394 21.4897 11.1372 21.892 11.1372 22.3882C11.1372 22.8844 11.5394 23.2866 12.0356 23.2866H28.7137C29.2099 23.2866 29.6121 22.8844 29.6121 22.3882Z",fill:"#B6C4CF"}),e.createElement("path",{d:"M19.2201 43.7462L18.9692 42.9547L21.2003 38.2137L22.429 38.1746L25.4467 41.1922L25.4075 42.4209L20.6666 44.6519L19.9481 44.4741L19.2201 43.7462Z",fill:"#FFC143"}),e.createElement("path",{d:"M19.4764 44.0023L18.8534 43.3793L18.6025 42.5878L20.8336 37.8468L22.0623 37.8076L23.4051 39.1504L22.3978 39.411L19.4764 44.0023Z",fill:"#FFB509"}),e.createElement("path",{d:"M18.6024 42.5879L20.6665 44.6521L17.8966 45.9556C17.5157 46.1348 17.1196 45.7387 17.2988 45.3579L18.6024 42.5879Z",fill:"#FF4343"}),e.createElement("path",{d:"M44.0499 20.4047L42.144 22.3106C41.7932 22.6614 41.2243 22.6614 40.8734 22.3106L39.2568 20.6939C38.9059 20.3431 38.9059 19.7742 39.2568 19.4234L41.1626 17.5175C41.5135 17.1667 42.0824 17.1667 42.4332 17.5175L44.0499 19.1342C44.4007 19.485 44.4007 20.0539 44.0499 20.4047Z",fill:"#FF7A7A"}),e.createElement("path",{d:"M45.7369 22.0917L43.8311 23.9975C43.4803 24.3484 42.9114 24.3484 42.5605 23.9975L40.8212 22.2582C40.4704 21.9073 40.4704 21.3384 40.8212 20.9876L42.7271 19.0817C43.0779 18.7309 43.6468 18.7309 43.9977 19.0817L45.7369 20.821C46.0878 21.1719 46.0878 21.7408 45.7369 22.0917Z",fill:"#FF9A9A"}),e.createElement("path",{d:"M25.4074 42.421L22.3553 39.3689C22.3217 39.3352 22.3027 39.2895 22.3027 39.2418C22.3027 39.1942 22.3217 39.1485 22.3553 39.1148L40.5247 20.9454C40.5584 20.9117 40.6041 20.8928 40.6518 20.8928C40.6994 20.8928 40.7451 20.9117 40.7788 20.9454L43.8309 23.9975L25.4074 42.421Z",fill:"#FF5757"}),e.createElement("path",{d:"M22.3978 39.4112L20.8336 37.847L39.2571 19.4236L40.8213 20.9878L22.3978 39.4112ZM40.5972 25.4923L26.9025 39.1871C26.5517 39.5379 25.9828 39.5379 25.6319 39.1871C25.2811 38.8362 25.2811 38.2673 25.6319 37.9165L39.3266 24.2218C39.6775 23.8709 40.2464 23.8709 40.5972 24.2218C40.948 24.5726 40.948 25.1415 40.5972 25.4923ZM15.7637 39.829C15.7637 40.35 15.3413 40.7723 14.8203 40.7723C14.2993 40.7723 13.877 40.35 13.877 39.829C13.877 39.308 14.2993 38.8856 14.8203 38.8856C15.3413 38.8856 15.7637 39.308 15.7637 39.829ZM14.8202 37.4965C15.3164 37.4965 15.7187 37.0942 15.7187 36.598V33.208C15.7187 32.7118 15.3164 32.3096 14.8202 32.3096C14.324 32.3096 13.9218 32.7118 13.9218 33.208V36.598C13.9218 37.0942 14.3241 37.4965 14.8202 37.4965Z",fill:"#FF4343"}),e.createElement("path",{d:"M17.8226 32.8162C17.044 33.6362 15.9497 34.1065 14.82 34.1065C14.3238 34.1065 13.9216 33.7043 13.9216 33.2081C13.9216 32.7119 14.3238 32.3096 14.82 32.3096C15.4686 32.3096 16.0722 32.0502 16.5195 31.579C16.9666 31.1082 17.1941 30.4906 17.1604 29.8402C17.0971 28.6215 16.0906 27.6476 14.8689 27.623C13.6794 27.5968 12.6629 28.4654 12.4992 29.638C12.4841 29.7467 12.4766 29.8563 12.4766 29.966C12.4766 30.4623 12.0743 30.8645 11.5781 30.8645C11.0819 30.8645 10.6797 30.4623 10.6797 29.966C10.6797 29.7733 10.6931 29.5794 10.7196 29.3897C11.009 27.3161 12.8069 25.7853 14.9051 25.8265C17.0642 25.87 18.8431 27.5921 18.9548 29.747C19.0144 30.8945 18.6123 31.9845 17.8226 32.8162Z",fill:"#FF5757"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_43_7969"},e.createElement("rect",{width:"46",height:"46",fill:"white"})))),k=t=>{const{children:a,title:n,description:c,onClick:l}=t;return e.createElement("div",{onClick:l,className:E["info-box"]},a,e.createElement("h1",{className:E.title},n),e.createElement("p",{className:E.description},c))},o3=()=>g(void 0,null,function*(){try{const{userInfo:t}=yield w.getUserInfo({});return console.log(t),t}catch(t){return{}}}),m3=()=>new Promise(t=>t({eventTitle:"\u0110\u01A1n v\u1ECB truy\u1EC1n th\xF4ng",description:"Ph\xF3ng vi\xEAn b\xE1o Zing News"})),u3=()=>{const[t,a]=d.exports.useState({}),{avatar:n,name:c}=t,[l,r]=d.exports.useState({}),{eventTitle:C,description:i}=l;return d.exports.useEffect(()=>{(()=>g(void 0,null,function*(){const[o,p]=yield Promise.allSettled([o3(),m3()]);console.log(o),o.status==="fulfilled"&&a(o.value),p.status==="fulfilled"&&r(p.value)}))()},[]),e.createElement(_,{className:"page"},e.createElement(r3,{leftText:"Heineken Refresh your music",rightText:"17/10"}),e.createElement(t3,{userAvatar:n,eventTitle:C,userName:c,description:i}),e.createElement(e3,null),e.createElement(n3,null,e.createElement(k,{onClick:()=>{},title:"S\u1EF1 ki\u1EC7n",description:"L\u1ECBch tr\xECnh s\u1EF1 ki\u1EC7n di\u1EC5n ra"},e.createElement(i3,null)),e.createElement(k,{title:"Xin ngh\u1EC9",description:"\u0110\u0103ng k\xFD ng\xE0y ngh\u1EC9 c\u1EE7a b\u1EA1n"},e.createElement(C3,null),e.createElement(s3,{onChange:s=>{var o;return console.log((o=s==null?void 0:s.target)==null?void 0:o.value)},minDate:new Date}))))},b=V({key:"user",default:{id:"12345678",name:"Zalo",avatar:"ZA"}}),p3=()=>{const[t,a]=P(b),[n,c]=e.useState({name:t.name,avatar:t.avatar,birthday:t.birthday,gender:t.gender}),l=z(),r=(i,s)=>{c(Z(f({},n),{[i]:s}))},C=()=>{l.openSnackbar({duration:3e3,text:"saved",type:"success"}),a(i=>f(f({},i),n))};return e.createElement(_,{className:"page"},e.createElement("div",{className:"section-container"},e.createElement(u,null,e.createElement(y,{id:"name",label:"Name",type:"text",placeholder:"Zalo",value:n==null?void 0:n.name,onChange:i=>r("name",i.target.value)}),e.createElement(y,{label:"Avatar",type:"text",placeholder:"zalo@zalo.me",value:n==null?void 0:n.avatar,onChange:i=>r("avatar",i.target.value)}),e.createElement(u,{mt:4},e.createElement(v,{fullWidth:!0,variant:"primary",onClick:C},"Submit")))))},E3=()=>{const t=T(b),a=Y();return e.createElement(_,{className:"page"},e.createElement(u,{flex:!0,flexDirection:"column",justifyContent:"center",alignItems:"center"},e.createElement(u,null,e.createElement(F,{story:"default",size:96,online:!0,src:t.avatar.startsWith("http")?t.avatar:void 0},t.avatar)),e.createElement(u,{flex:!0,flexDirection:"row",alignItems:"center",ml:8},e.createElement(u,null,e.createElement(R.Title,null,t.name)),e.createElement(u,{ml:4},e.createElement(v,{onClick:()=>{a("/form")},size:"small",icon:e.createElement(O,{icon:"zi-edit"})})))),e.createElement(u,{m:0,p:0,mt:4},e.createElement("div",{className:"section-container"},e.createElement(L,null,e.createElement(L.Item,{title:"Display name",subTitle:t.name}),e.createElement(L.Item,{title:"ID",subTitle:t.id})))))},f3=()=>(d.exports.useEffect(()=>{w.login()},[]),e.createElement(J,null,e.createElement(U,null,e.createElement(W,null,e.createElement(j,null,e.createElement($,null,e.createElement(M,{path:"/",element:e.createElement(u3,null)}),e.createElement(M,{path:"/form",element:e.createElement(p3,null)}),e.createElement(M,{path:"/user",element:e.createElement(E3,null)}))))))),d3={title:"Class Attendance",headerColor:"#1843EF",textColor:"white",statusBarColor:"#1843EF",leftButton:"back"},h3=!1,g3=[],v3=[],_3=[],L3=["/user","/form","/dynamic-route","/404"];var M3={app:d3,debug:h3,listCSS:g3,listSyncJS:v3,listAsyncJS:_3,pages:L3};window.APP_CONFIG||(window.APP_CONFIG=M3);const x3=G(document.getElementById("app"));x3.render(e.createElement(f3));