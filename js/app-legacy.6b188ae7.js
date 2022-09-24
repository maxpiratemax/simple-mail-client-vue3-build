(function(){"use strict";var e={2514:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var r=t(9242),i=t(3396),a=(0,i._)("h1",null,"Simple mail client",-1),o=(0,i.Uk)(" Loading... ");function l(e,n,t,r,l,c){var u=(0,i.up)("mail-table");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,((0,i.wg)(),(0,i.j4)(i.n4,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(u)]})),fallback:(0,i.w5)((function(){return[o]})),_:1}))],64)}var c=t(7139),u=["disabled"],s=["disabled"],d={class:"mail-table"},f=["onClick","checked"],m=["onClick"],p=["onClick"],v=["onClick"],b=["onClick"],h={key:1};function k(e,n,t,r,a,o){var l=(0,i.up)("bulk-action-bar"),k=(0,i.up)("mail-view"),g=(0,i.up)("modal-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("button",{onClick:n[0]||(n[0]=function(e){return o.selectScreen("inbox")}),disabled:"inbox"==r.selectedScreen,class:(0,c.C_)("inbox"==r.selectedScreen?"orange":"")},"Inbox",10,u),(0,i._)("button",{onClick:n[1]||(n[1]=function(e){return o.selectScreen("archive")}),disabled:"archive"==r.selectedScreen,class:(0,c.C_)("archive"==r.selectedScreen?"orange":"")},"Archived",10,s),o.filteredEmails.length>0?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(l,{emails:o.filteredEmails,selectedScreen:r.selectedScreen},null,8,["emails","selectedScreen"]),(0,i._)("div",null,[(0,i._)("table",d,[(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.filteredEmails,(function(e){return(0,i.wg)(),(0,i.iD)("tr",{key:e.id,class:(0,c.C_)(["clickable",e.read?"":"read"])},[(0,i._)("td",null,[(0,i._)("input",{type:"checkbox",onClick:function(n){return r.emailSelection.toggle(e)},checked:r.emailSelection.emails.has(e)},null,8,f)]),(0,i._)("td",{onClick:function(n){return o.openEmail(e)},style:{"min-width":"170px"}},(0,c.zw)(e.from),9,m),(0,i._)("td",{onClick:function(n){return o.openEmail(e)}},[(0,i._)("p",null,[(0,i._)("span",{class:(0,c.C_)([e.read?"":"title"])},(0,c.zw)(e.subject),3),(0,i.Uk)(" - "+(0,c.zw)(e.textBody),1)])],8,p),(0,i._)("td",{class:"date",onClick:function(n){return o.openEmail(e)}},(0,c.zw)(r.format(new Date(e.sentAt),"MMM do yyyy")),9,v),(0,i._)("td",null,[(0,i._)("button",{onClick:function(n){return o.archiveEmail(e)}},(0,c.zw)("inbox"==r.selectedScreen?"Archive":"Restore"),9,b)])],2)})),128))])]),r.openedEmail?((0,i.wg)(),(0,i.j4)(g,{key:0,onCloseModal:n[2]||(n[2]=function(e){return r.openedEmail=null})},{default:(0,i.w5)((function(){return[(0,i.Wm)(k,{email:r.openedEmail,onChangeEmail:o.changeEmail},null,8,["email","onChangeEmail"])]})),_:1})):(0,i.kq)("",!0)])],64)):((0,i.wg)(),(0,i.iD)("h1",h,"Писем нет"))],64)}var g=t(124),y=t(8534),w=(t(2707),t(7327),t(1539),t(4916),t(5306),t(737)),_={class:"email-display"},S={class:"mb-0"},E=(0,i.Uk)("Subject: "),C=["innerHTML"];function x(e,n,t,r,a,o){return(0,i.wg)(),(0,i.iD)("div",_,[(0,i._)("div",null,[(0,i._)("button",{class:(0,c.C_)(r.btnArchive?"btn-animation":""),onClick:n[0]||(n[0]=function(){return r.toggleArchive&&r.toggleArchive.apply(r,arguments)})},(0,c.zw)(t.email.archived?"Move to Inbox (e)":"Archive (e)"),3),(0,i._)("button",{class:(0,c.C_)(r.btnRead?"btn-animation":""),onClick:n[1]||(n[1]=function(){return r.toggleRead&&r.toggleRead.apply(r,arguments)})},(0,c.zw)(t.email.read?"Mark Unread (r)":"Mark Read (r)"),3),(0,i._)("button",{class:(0,c.C_)(r.btnPrev?"btn-animation":""),onClick:n[2]||(n[2]=function(){return r.togglePrev&&r.togglePrev.apply(r,arguments)})},"Prev (j)",2),(0,i._)("button",{class:(0,c.C_)(r.btnNext?"btn-animation":""),onClick:n[3]||(n[3]=function(){return r.toggleNext&&r.toggleNext.apply(r,arguments)})},"Next (k)",2)]),(0,i._)("h2",S,[E,(0,i._)("strong",null,(0,c.zw)(t.email.subject),1)]),(0,i._)("div",null,[(0,i._)("em",null,"From "+(0,c.zw)(t.email.from)+" on "+(0,c.zw)(r.format(new Date(t.email.sentAt),"MMM do yyyy")),1)]),(0,i._)("div",{class:"mail-body",innerHTML:t.email.body},null,8,C)])}t(8757);var j=t(5068),M=(t(9826),function(e){var n=function(n){var t=e.find((function(e){return e.key==n.key}));t&&t.fn()};window.addEventListener("keydown",n),(0,i.Jd)((function(){window.removeEventListener("keydown",n)}))}),O=M,Z=t(8577),I="https://lmmwrqcvrpehtnxolcnk.supabase.co",A="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtbXdycWN2cnBlaHRueG9sY25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM3ODQ2NjgsImV4cCI6MTk3OTM2MDY2OH0.XD5tmdfuGnTYVXf3wJ1e3RWCYHnqeH6XhXZp-6tQwlQ",z=(0,Z.eI)(I,A),H=t(4870),D={setup:function(e,n){var t=n.emit,r=(0,H.iH)(!0),i=(0,H.iH)(!0),a=(0,H.iH)(!0),o=(0,H.iH)(!0),l=e.email;function c(e){e.value=!e.value,setTimeout((function(){e.value=!e.value}),0)}l.body=l.body.replaceAll("\\n","\n");var u=function(){return c(a),t("changeEmail",{changeIndex:1})},s=function(){c(o),t("changeEmail",{changeIndex:-1})},d=function(){var e=(0,y.Z)((0,g.Z)().mark((function e(){var n;return(0,g.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l.read=!l.read,c(r),e.next=4,z.from("emails").update(l).eq("id",l.id);case 4:n=e.sent,n.error;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,y.Z)((0,g.Z)().mark((function e(){var n;return(0,g.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l.archived=!l.archived,c(i),e.next=4,z.from("emails").update(l).eq("id",l.id);case 4:n=e.sent,n.error;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return O([{key:"r",fn:d},{key:"к",fn:d},{key:"e",fn:f},{key:"k",fn:u},{key:"j",fn:s}]),{btnRead:r,btnArchive:i,btnPrev:o,btnNext:a,format:w.Z,marked:j.TU,toggleRead:d,toggleArchive:f,toggleNext:u,togglePrev:s}},props:{email:{type:Object,required:!0}}},P=t(89);const T=(0,P.Z)(D,[["render",x],["__scopeId","data-v-5e0f2810"]]);var N=T,R={class:"modal"},q={class:"modal-card"};function Y(e,n,t,r,a,o){return(0,i.wg)(),(0,i.iD)("div",R,[(0,i._)("div",{class:"overlay",onClick:n[0]||(n[0]=function(e){return r.emit("closeModal")})}),(0,i._)("div",q,[(0,i.WI)(e.$slots,"default")])])}var F={setup:function(e,n){var t=n.emit;return O([{key:"Escape",fn:function(){t("closeModal")}}]),{emit:t}}};const J=(0,P.Z)(F,[["render",Y]]);var U=J,L=t(9584),X={class:"bulk-action-bar"},B={class:"ckeckbox"},W=["checked"],V={class:"buttons"},Q=["disabled"],G=["disabled"],K=["disabled"];function $(e,n,t,r,a,o){return(0,i.wg)(),(0,i.iD)("div",X,[(0,i._)("span",B,[(0,i._)("input",{type:"checkbox",onClick:n[0]||(n[0]=function(){return r.bulkSelect&&r.bulkSelect.apply(r,arguments)}),checked:r.allEmailsSelected,class:(0,c.C_)([r.someEmailsSelected?"partial-check":""])},null,10,W),r.emailSelection.emails.size?((0,i.wg)(),(0,i.iD)("span",{key:0,class:"checkbox_count",onClick:n[1]||(n[1]=function(){return r.bulkSelect&&r.bulkSelect.apply(r,arguments)})},(0,c.zw)(r.emailSelection.emails.size),1)):(0,i.kq)("",!0),(0,i._)("span",V,[(0,i._)("button",{onClick:n[2]||(n[2]=function(e){return r.emailSelection.markRead()}),disabled:(0,L.Z)(r.emailSelection.emails).every((function(e){return e.read}))},"Mark Read",8,Q),(0,i._)("button",{onClick:n[3]||(n[3]=function(e){return r.emailSelection.markUnread()}),disabled:(0,L.Z)(r.emailSelection.emails).every((function(e){return!e.read}))},"Mark Unread",8,G),(0,i._)("button",{onClick:n[4]||(n[4]=function(e){return r.emailSelection.archive()}),disabled:0==r.numberSelected},(0,c.zw)("inbox"==t.selectedScreen?"Archive":"Restore"),9,K)])])])}t(189),t(8783),t(3948),t(4747);var ee=(0,H.qj)(new Set),ne=function(){var e=function(e){ee.has(e)?ee.delete(e):ee.add(e)},n=function(){ee.clear()},t=function(e){e.forEach((function(e){ee.add(e)}))},r=function(e){ee.forEach(function(){var n=(0,y.Z)((0,g.Z)().mark((function n(t){var r;return(0,g.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e(t),n.next=3,z.from("emails").update(t).eq("id",t.id);case 3:r=n.sent,r.error;case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n()},i=function(){return r((function(e){return e.read=!0}))},a=function(){return r((function(e){return e.read=!1}))},o=function(){return r((function(e){return e.archived=!e.archived}))};return{emails:ee,toggle:e,clear:n,addMultiple:t,markRead:i,markUnread:a,archive:o}},te=ne,re={setup:function(e){var n=te(),t=(0,i.Fl)((function(){return n.emails.size})),r=(0,i.Fl)((function(){return e.emails.length})),a=(0,i.Fl)((function(){return t.value===r.value})),o=(0,i.Fl)((function(){return t.value>0&&t.value<r.value})),l=function(){a.value?n.clear():n.addMultiple(e.emails)};return{allEmailsSelected:a,someEmailsSelected:o,bulkSelect:l,emailSelection:n,numberSelected:t,numbersEmails:r}},props:{emails:{type:Array,required:!0},selectedScreen:{type:String,required:!0}}};const ie=(0,P.Z)(re,[["render",$]]);var ae=ie,oe={components:{MailView:N,ModalView:U,BulkActionBar:ae},setup:function(){return(0,y.Z)((0,g.Z)().mark((function e(){var n,t;return(0,g.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,z.from("emails").select("*");case 2:return n=e.sent,t=n.data,n.error,e.abrupt("return",{emailSelection:te(),format:w.Z,emails:(0,H.iH)(t),openedEmail:(0,H.iH)(null),selectedScreen:(0,H.iH)("inbox")});case 6:case"end":return e.stop()}}),e)})))()},computed:{sortedEmails:function(){return this.emails.sort((function(e,n){return e.sentAt<n.sentAt?1:-1}))},filteredEmails:function(){return"inbox"==this.selectedScreen?this.sortedEmails.filter((function(e){return!e.archived})):this.sortedEmails.filter((function(e){return e.archived}))}},methods:{changeEmail:function(e){var n=e.changeIndex;if(n){var t=this.filteredEmails,r=t.indexOf(this.openedEmail),i=r+n>=0&&r+n!=t.length;if(i){var a=t[r+n];this.openEmail(a)}}},selectScreen:function(e){this.selectedScreen=e,this.emailSelection.clear()},openEmail:function(e){e.read=!0,this.updateEmail(e),this.openedEmail=e},archiveEmail:function(e){e.archived=!e.archived,this.updateEmail(e)},updateEmail:function(e){return(0,y.Z)((0,g.Z)().mark((function n(){var t;return(0,g.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,z.from("emails").update(e).eq("id",e.id);case 2:t=n.sent,t.error,e.body.replace("Dear","");case 5:case"end":return n.stop()}}),n)})))()}}};const le=(0,P.Z)(oe,[["render",k]]);var ce=le,ue={name:"App",components:{MailTable:ce},setup:function(){return{emailSelection:te()}}};const se=(0,P.Z)(ue,[["render",l]]);var de=se;(0,r.ri)(de).mount("#app")}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,i,a){if(!r){var o=1/0;for(s=0;s<e.length;s++){r=e[s][0],i=e[s][1],a=e[s][2];for(var l=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(l=!1,a<o&&(o=a));if(l){e.splice(s--,1);var u=i();void 0!==u&&(n=u)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,i,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);t.r(a);var o={};e=e||[null,n({}),n([]),n(n)];for(var l=2&i&&r;"object"==typeof l&&!~e.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((function(e){o[e]=function(){return r[e]}}));return o["default"]=function(){return r},t.d(a,o),a}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy.98549160.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="simple-mail-client-vue3:";t.l=function(r,i,a,o){if(e[r])e[r].push(i);else{var l,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+a){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+a),l.src=r),e[r]=[i];var f=function(n,t){l.onerror=l.onload=null,clearTimeout(m);var i=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e={143:0};t.f.j=function(n,r){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((function(t,r){i=e[n]=[t,r]}));r.push(i[2]=a);var o=t.p+t.u(n),l=new Error,c=function(r){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+n+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,i[1](l)}};t.l(o,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var i,a,o=r[0],l=r[1],c=r[2],u=0;if(o.some((function(n){return 0!==e[n]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(c)var s=c(t)}for(n&&n(r);u<o.length;u++)a=o[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},r=self["webpackChunksimple_mail_client_vue3"]=self["webpackChunksimple_mail_client_vue3"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2514)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.6b188ae7.js.map