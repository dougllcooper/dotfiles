(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[137],{99358:function(e,n,t){"use strict";t.d(n,{x3:function(){return o}});var r=t(92648);t(76635),t(34406);var o=function(){var e=r.querystring.parse(window.location.search.slice(1)).ws;return{url:"".concat(window.location.protocol,"//").concat(window.location.host),ws:e}}},28989:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(4942),o=t(98152),i=t(92648),c=t(11163),s=t(2784),u=t(99358),a=t(52322);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){var n,t=e.engine,r=e.ide,d=(0,i.createLogger)("MiniPreview");d.info({msg:"enter"});var p=s.useState(),l=(0,o.Z)(p,2),w=(l[0],l[1],(0,c.useRouter)()),v=i.engineHooks.useEngineAppDispatch();if(!w.isReady)return(0,a.jsx)(a.Fragment,{children:" "});var g=null===(n=r.noteActive)||void 0===n?void 0:n.id;return s.useEffect((function(){g?t.notesRendered[g]||v(i.engineSlice.renderNote(f(f({},(0,u.x3)()),{},{id:g,note:r.noteActive}))):d.info({msg:"no noteId"})}),[r.noteActive,t.notesRendered]),g&&t.notesRendered[g]?(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:t.notesRendered[g]}}):(0,a.jsx)(a.Fragment,{children:"Loading.."})}},64996:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vscode/mini-preview",function(){return t(28989)}])}},function(e){e.O(0,[774,888,179],(function(){return 64996,e(e.s=64996)}));var n=e.O();_N_E=n}]);