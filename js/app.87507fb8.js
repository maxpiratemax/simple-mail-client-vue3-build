(function(e){function t(t){for(var c,a,l=t[0],o=t[1],u=t[2],s=0,b=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,a=1;a<n.length;a++){var o=n[a];0!==r[o]&&(c=!1)}c&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},r={app:0},i=[];function a(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d36c0":"391d7ecc"}[e]+".js"}function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=r[e]=[t,c]}));t.push(n[2]=c);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=a(e);var u=new Error;i=function(t){o.onerror=o.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+i+")",u.name="ChunkLoadError",u.type=c,u.request=i,n[1](u)}r[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(t)},l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a65":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=Object(c["h"])("h1",null,"Simple mail client",-1),i=Object(c["i"])(" Loading... ");function a(e,t,n,a,l,o){var u=Object(c["r"])("mail-table");return Object(c["m"])(),Object(c["g"])(c["a"],null,[r,(Object(c["m"])(),Object(c["e"])(c["b"],null,{default:Object(c["t"])((function(){return[Object(c["j"])(u)]})),fallback:Object(c["t"])((function(){return[i]})),_:1}))],64)}var l=["disabled"],o=["disabled"],u={class:"mail-table"},s=["onClick","checked"],d=["onClick"],b=["onClick"],f=["onClick"],m=["onClick"],p={key:1};function j(e,t,n,r,i,a){var j=Object(c["r"])("bulk-action-bar"),h=Object(c["r"])("mail-view"),O=Object(c["r"])("modal-view");return Object(c["m"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("button",{onClick:t[0]||(t[0]=function(e){return a.selectScreen("inbox")}),disabled:"inbox"==r.selectedScreen,class:Object(c["k"])("inbox"==r.selectedScreen?"orange":"")},"Inbox",10,l),Object(c["h"])("button",{onClick:t[1]||(t[1]=function(e){return a.selectScreen("archive")}),disabled:"archive"==r.selectedScreen,class:Object(c["k"])("archive"==r.selectedScreen?"orange":"")},"Archived",10,o),a.filteredEmails.length>0?(Object(c["m"])(),Object(c["g"])(c["a"],{key:0},[Object(c["j"])(j,{emails:a.filteredEmails,selectedScreen:r.selectedScreen},null,8,["emails","selectedScreen"]),Object(c["h"])("div",null,[Object(c["h"])("table",u,[Object(c["h"])("tbody",null,[(Object(c["m"])(!0),Object(c["g"])(c["a"],null,Object(c["p"])(a.filteredEmails,(function(e){return Object(c["m"])(),Object(c["g"])("tr",{key:e.id,class:Object(c["k"])(["clickable",e.read?"":"read"])},[Object(c["h"])("td",null,[Object(c["h"])("input",{type:"checkbox",onClick:function(t){return r.emailSelection.toggle(e)},checked:r.emailSelection.emails.has(e)},null,8,s)]),Object(c["h"])("td",{onClick:function(t){return a.openEmail(e)},style:{"min-width":"170px"}},Object(c["s"])(e.from),9,d),Object(c["h"])("td",{onClick:function(t){return a.openEmail(e)}},[Object(c["h"])("p",null,[Object(c["h"])("span",{class:Object(c["k"])([e.read?"":"title"])},Object(c["s"])(e.subject),3),Object(c["i"])(" - "+Object(c["s"])(e.body),1)])],8,b),Object(c["h"])("td",{class:"date",onClick:function(t){return a.openEmail(e)}},Object(c["s"])(r.format(new Date(e.sentAt),"MMM do yyyy")),9,f),Object(c["h"])("td",null,[Object(c["h"])("button",{onClick:function(t){return a.archiveEmail(e)}},Object(c["s"])("inbox"==r.selectedScreen?"Archive":"Restore"),9,m)])],2)})),128))])]),r.openedEmail?(Object(c["m"])(),Object(c["e"])(O,{key:0,onCloseModal:t[2]||(t[2]=function(e){return r.openedEmail=null})},{default:Object(c["t"])((function(){return[Object(c["j"])(h,{email:r.openedEmail,onChangeEmail:a.changeEmail},null,8,["email","onChangeEmail"])]})),_:1})):Object(c["f"])("",!0)])],64)):(Object(c["m"])(),Object(c["g"])("h1",p,"Писем нет"))],64)}var h=n("c7eb"),O=n("1da1"),v=(n("4e82"),n("4de4"),n("d3b7"),n("b166")),k=(n("bc3a"),{class:"email-display"}),g={class:"mb-0"},y=Object(c["i"])("Subject: "),S=["innerHTML"];function w(e,t,n,r,i,a){return Object(c["m"])(),Object(c["g"])("div",k,[Object(c["h"])("div",null,[Object(c["h"])("button",{onClick:t[0]||(t[0]=function(){return r.toggleArchive&&r.toggleArchive.apply(r,arguments)})},Object(c["s"])(n.email.archived?"Move to Inbox (e)":"Archive (e)"),1),Object(c["h"])("button",{onClick:t[1]||(t[1]=function(){return r.toggleRead&&r.toggleRead.apply(r,arguments)})},Object(c["s"])(n.email.read?"Mark Unread (r)":"Mark Read (r)"),1),Object(c["h"])("button",{onClick:t[2]||(t[2]=function(){return r.togglePrev&&r.togglePrev.apply(r,arguments)})},"Prev (j)"),Object(c["h"])("button",{onClick:t[3]||(t[3]=function(){return r.toggleNext&&r.toggleNext.apply(r,arguments)})},"Next (k)")]),Object(c["h"])("h2",g,[y,Object(c["h"])("strong",null,Object(c["s"])(n.email.subject),1)]),Object(c["h"])("div",null,[Object(c["h"])("em",null,"From "+Object(c["s"])(n.email.from)+" on "+Object(c["s"])(r.format(new Date(n.email.sentAt),"MMM do yyyy")),1)]),Object(c["h"])("div",{innerHTML:r.marked(n.email.body)},null,8,S)])}var E=n("e0c1"),x=n.n(E),C=(n("7db0"),function(e){var t=function(t){var n=e.find((function(e){return e.key==t.key}));n&&n.fn()};window.addEventListener("keydown",t),Object(c["l"])((function(){window.removeEventListener("keydown",t)}))}),M=C,I={setup:function(e,t){var n=t.emit,c=e.email,r=function(){n("changeEmail",{changeIndex:1})},i=function(){n("changeEmail",{changeIndex:-1})},a=function(){var e=Object(O["a"])(Object(h["a"])().mark((function e(){var t;return Object(h["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c.read=!c.read,e.next=3,supabase.from("emails").update(c).eq("id",c.id);case 3:t=e.sent,t.error;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(O["a"])(Object(h["a"])().mark((function e(){var t;return Object(h["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c.archived=!c.archived,e.next=3,supabase.from("emails").update(c).eq("id",c.id);case 3:t=e.sent,t.error;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return M([{key:"r",fn:a},{key:"к",fn:a},{key:"e",fn:l},{key:"k",fn:r},{key:"j",fn:i}]),{format:v["a"],marked:x.a,toggleRead:a,toggleArchive:l,toggleNext:r,togglePrev:i}},props:{email:{type:Object,required:!0}}},A=n("6b0d"),P=n.n(A);const R=P()(I,[["render",w]]);var q=R,J={class:"modal"},T={class:"modal-card"};function _(e,t,n,r,i,a){return Object(c["m"])(),Object(c["g"])("div",J,[Object(c["h"])("div",{class:"overlay",onClick:t[0]||(t[0]=function(e){return r.emit("closeModal")})}),Object(c["h"])("div",T,[Object(c["q"])(e.$slots,"default")])])}var L={setup:function(e,t){var n=t.emit;return M([{key:"Escape",fn:function(){n("closeModal")}}]),{emit:n}}};const N=P()(L,[["render",_]]);var X=N,z=n("2909"),H={class:"bulk-action-bar"},Y={class:"ckeckbox"},D=["checked"],U={class:"buttons"},V=["disabled"],B=["disabled"],Q=["disabled"];function Z(e,t,n,r,i,a){return Object(c["m"])(),Object(c["g"])("div",H,[Object(c["h"])("span",Y,[Object(c["h"])("input",{type:"checkbox",onClick:t[0]||(t[0]=function(){return r.bulkSelect&&r.bulkSelect.apply(r,arguments)}),checked:r.allEmailsSelected,class:Object(c["k"])([r.someEmailsSelected?"partial-check":""])},null,10,D),r.emailSelection.emails.size?(Object(c["m"])(),Object(c["g"])("span",{key:0,class:"checkbox_count",onClick:t[1]||(t[1]=function(){return r.bulkSelect&&r.bulkSelect.apply(r,arguments)})},Object(c["s"])(r.emailSelection.emails.size),1)):Object(c["f"])("",!0),Object(c["h"])("span",U,[Object(c["h"])("button",{onClick:t[2]||(t[2]=function(e){return r.emailSelection.markRead()}),disabled:Object(z["a"])(r.emailSelection.emails).every((function(e){return e.read}))},"Mark Read",8,V),Object(c["h"])("button",{onClick:t[3]||(t[3]=function(e){return r.emailSelection.markUnread()}),disabled:Object(z["a"])(r.emailSelection.emails).every((function(e){return!e.read}))},"Mark Unread",8,B),Object(c["h"])("button",{onClick:t[4]||(t[4]=function(e){return r.emailSelection.archive()}),disabled:0==r.numberSelected},Object(c["s"])("inbox"==n.selectedScreen?"Archive":"Restore"),9,Q)])])])}n("6062"),n("3ca3"),n("ddb0"),n("159b");var F=n("940b"),G="https://lmmwrqcvrpehtnxolcnk.supabase.co",W="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtbXdycWN2cnBlaHRueG9sY25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM3ODQ2NjgsImV4cCI6MTk3OTM2MDY2OH0.XD5tmdfuGnTYVXf3wJ1e3RWCYHnqeH6XhXZp-6tQwlQ",$=Object(F["a"])(G,W),K=Object(c["n"])(new Set),ee=function(){var e=function(e){K.has(e)?K.delete(e):K.add(e)},t=function(){K.clear()},n=function(e){e.forEach((function(e){K.add(e)}))},c=function(e){K.forEach(function(){var t=Object(O["a"])(Object(h["a"])().mark((function t(n){var c;return Object(h["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e(n),t.next=3,$.from("emails").update(n).eq("id",n.id);case 3:c=t.sent,c.error;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t()},r=function(){return c((function(e){return e.read=!0}))},i=function(){return c((function(e){return e.read=!1}))},a=function(){return c((function(e){return e.archived=!e.archived}))};return{emails:K,toggle:e,clear:t,addMultiple:n,markRead:r,markUnread:i,archive:a}},te=ee,ne={setup:function(e){var t=te(),n=Object(c["c"])((function(){return t.emails.size})),r=Object(c["c"])((function(){return e.emails.length})),i=Object(c["c"])((function(){return n.value===r.value})),a=Object(c["c"])((function(){return n.value>0&&n.value<r.value})),l=function(){i.value?t.clear():t.addMultiple(e.emails)};return{allEmailsSelected:i,someEmailsSelected:a,bulkSelect:l,emailSelection:t,numberSelected:n,numbersEmails:r}},props:{emails:{type:Array,required:!0},selectedScreen:{type:String,required:!0}}};const ce=P()(ne,[["render",Z]]);var re=ce,ie={components:{MailView:q,ModalView:X,BulkActionBar:re},setup:function(){return Object(O["a"])(Object(h["a"])().mark((function e(){var t,n;return Object(h["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.from("emails").select("*");case 2:return t=e.sent,n=t.data,t.error,e.abrupt("return",{emailSelection:te(),format:v["a"],emails:Object(c["o"])(n),openedEmail:Object(c["o"])(null),selectedScreen:Object(c["o"])("inbox")});case 6:case"end":return e.stop()}}),e)})))()},computed:{sortedEmails:function(){return this.emails.sort((function(e,t){return e.sentAt<t.sentAt?1:-1}))},filteredEmails:function(){return"inbox"==this.selectedScreen?this.sortedEmails.filter((function(e){return!e.archived})):this.sortedEmails.filter((function(e){return e.archived}))}},methods:{changeEmail:function(e){var t=e.changeIndex;if(t){var n=this.filteredEmails,c=n.indexOf(this.openedEmail),r=c+t>=0&&c+t!=n.length;if(r){var i=n[c+t];this.openEmail(i)}}},selectScreen:function(e){this.selectedScreen=e,this.emailSelection.clear()},openEmail:function(e){e.read=!0,this.updateEmail(e),this.openedEmail=e},archiveEmail:function(e){e.archived=!e.archived,this.updateEmail(e)},updateEmail:function(e){return Object(O["a"])(Object(h["a"])().mark((function t(){var n;return Object(h["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.from("emails").update(e).eq("id",e.id);case 2:n=t.sent,n.error;case 4:case"end":return t.stop()}}),t)})))()}}};const ae=P()(ie,[["render",j]]);var le=ae,oe={name:"App",components:{MailTable:le},setup:function(){return{emailSelection:te()}}};n("de6f");const ue=P()(oe,[["render",a]]);var se=ue;Object(c["d"])(se).mount("#app")},de6f:function(e,t,n){"use strict";n("1a65")}});
//# sourceMappingURL=app.87507fb8.js.map