(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,a,t){"use strict";a.__esModule=!0,a.isInAmpMode=o,a.useAmp=function(){return o(n.default.useContext(s.AmpStateContext))};var r,n=(r=t("q1tI"))&&r.__esModule?r:{default:r},s=t("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.ampFirst,t=void 0!==a&&a,r=e.hybrid,n=void 0!==r&&r,s=e.hasQuery,o=void 0!==s&&s;return t||n&&o}},"8Kt/":function(e,a,t){"use strict";t("lSNA");a.__esModule=!0,a.defaultHead=u,a.default=void 0;var r,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=l();if(a&&a.has(e))return a.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=r?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(t,n,s):t[n]=e[n]}t.default=e,a&&a.set(e,t);return t}(t("q1tI")),s=(r=t("Xuae"))&&r.__esModule?r:{default:r},o=t("lwAK"),i=t("FYa8"),c=t("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=[n.default.createElement("meta",{charSet:"utf-8"})];return e||a.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),a}function f(e,a){return"string"===typeof a||"number"===typeof a?e:a.type===n.default.Fragment?e.concat(n.default.Children.toArray(a.props.children).reduce((function(e,a){return"string"===typeof a||"number"===typeof a?e:e.concat(a)}),[])):e.concat(a)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,a){return e.reduce((function(e,a){var t=n.default.Children.toArray(a.props.children);return e.concat(t)}),[]).reduce(f,[]).reverse().concat(u(a.inAmpMode)).filter(function(){var e=new Set,a=new Set,t=new Set,r={};return function(n){var s=!0;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){var o=n.key.slice(n.key.indexOf("$")+1);e.has(o)?s=!1:e.add(o)}switch(n.type){case"title":case"base":a.has(n.type)?s=!1:a.add(n.type);break;case"meta":for(var i=0,c=p.length;i<c;i++){var l=p[i];if(n.props.hasOwnProperty(l))if("charSet"===l)t.has(l)?s=!1:t.add(l);else{var u=n.props[l],f=r[l]||new Set;f.has(u)?s=!1:(f.add(u),r[l]=f)}}}return s}}()).reverse().map((function(e,a){var t=e.key||a;return n.default.cloneElement(e,{key:t})}))}function d(e){var a=e.children,t=(0,n.useContext)(o.AmpStateContext),r=(0,n.useContext)(i.HeadManagerContext);return n.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,c.isInAmpMode)(t)},a)}d.rewind=function(){};var h=d;a.default=h},Bnag:function(e,a){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var r=t("q1tI"),n=t.n(r),s=t("8Kt/"),o=t.n(s),i=n.a.createElement;function c(){return i("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"},i("a",{className:"navbar-brand logo-image",href:"/"},i("img",{src:"/images/logo-with-claim.svg",alt:"Precelerator Logo"})),i("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},i("span",{className:"navbar-toggler-awesome fas fa-bars"}),i("span",{className:"navbar-toggler-awesome fas fa-times"})),i("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault"},i("ul",{className:"navbar-nav ml-auto"},i("li",{className:"nav-item"},i("a",{className:"nav-link page-scroll",href:"#header"},"Home ",i("span",{className:"sr-only"},"(current)"))),i("li",{className:"nav-item"},i("a",{className:"nav-link",href:"/events",title:"Link zu den Precelerator Events"},"Events")),i("li",{className:"nav-item"},i("a",{className:"nav-link",href:"/projects",title:"Link zur Precelerator Projektwand"},"Projektwand")),i("li",{className:"nav-item"},i("a",{className:"nav-link page-scroll",href:"#contact"},"Kontakt")))))}t("YFqc");var l=n.a.createElement;function u(){return l("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"},l("a",{className:"navbar-brand logo-image",href:"/"},l("img",{src:"/images/logo-with-claim.svg",alt:"Precelerator Logo"})),l("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},l("span",{className:"navbar-toggler-awesome fas fa-bars"}),l("span",{className:"navbar-toggler-awesome fas fa-times"})),l("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault"},l("ul",{className:"navbar-nav ml-auto"},l("li",{className:"nav-item"},l("a",{className:"nav-link",href:"/"},"Home")),l("li",{className:"nav-item"},l("a",{className:"nav-link",href:"/events",title:"Link zu den Precelerator Events"},"Events")),l("li",{className:"nav-item"},l("a",{className:"nav-link",href:"/projects",title:"Link zur Precelerator Projektwand"},"Projektwand")))))}var f=n.a.createElement;function p(){return f(n.a.Fragment,null,f("div",{className:"footer"},f("div",{className:"container"},f("div",{className:"row"},f("div",{className:"col-md-4"},f("div",{className:"footer-col"},f("h4",null,"Precelerator"),f("p",null,"Der Community Space f\xfcr Entrepreneurship & Entrepreneurship an der HM."),f("img",{src:"/images/logos-blog.png",className:"logos-small"}))),f("div",{className:"col-md-4"},f("div",{className:"footer-col middle"},f("h4",null,"Wichtige Links"),f("ul",{className:"list-unstyled li-space-lg"},f("li",{className:"media"},f("i",{className:"fas fa-square"}),f("div",{className:"media-body"},"Unsere Matching-Plattform f\xfcr Ideengeber und Interessierte:",f("a",{className:"turquoise",href:"/projects"}," ","Mitstreiter:innen gesucht!"))),f("li",{className:"media"},f("i",{className:"fas fa-square"}),f("div",{className:"media-body"},"Unser Newsletter rund um den Precelerator",f("a",{className:"turquoise",href:"/newsletter"}," ","Newsletter"))),f("li",{className:"media"},f("i",{className:"fas fa-square"}),f("div",{className:"media-body"},"Lies unsere \xa0",f("a",{className:"turquoise",href:"/disclaimer"},"Terms & Conditions"),", \xa0",f("a",{className:"turquoise",href:"/privacy-policy"},"Privacy Policy"),", \xa0",f("a",{className:"turquoise",href:"/impressum"},"Impressum")))))),f("div",{className:"col-md-4"},f("div",{className:"footer-col last"},f("h4",null,"Social Media"),f("span",{className:"fa-stack"},f("a",{href:"https://www.facebook.com/StraschegCenterForEntrepreneurship",target:"_blank",title:"SCE Facebook"},f("i",{className:"fas fa-circle fa-stack-2x"}),f("i",{className:"fab fa-facebook-f fa-stack-1x"}))),f("span",{className:"fa-stack"},f("a",{href:"https://www.instagram.com/precelerator/",target:"_blank",title:"Precelerator Instagram"},f("i",{className:"fas fa-circle fa-stack-2x"}),f("i",{className:"fab fa-instagram fa-stack-1x"}))),f("span",{className:"fa-stack"},f("a",{href:"https://twitter.com/StraschegCenter",target:"_blank",title:"SCE Twitter"},f("i",{className:"fas fa-circle fa-stack-2x"}),f("i",{className:"fab fa-twitter fa-stack-1x"}))),f("span",{className:"fa-stack"},f("a",{href:"https://www.youtube.com/channel/UCTt1uc9dSzAyLasmcCy0H5Q",target:"_blank",title:"SCE Youtube"},f("i",{className:"fas fa-circle fa-stack-2x"}),f("i",{className:"fab fa-youtube fa-stack-1x"}))),f("span",{className:"fa-stack",target:"_blank"},f("a",{href:"https://de.linkedin.com/company/strascheg-center-for-entrepreneurship-ggmbh",target:"_blank",title:"SCE LinkedIn"},f("i",{className:"fas fa-circle fa-stack-2x"}),f("i",{className:"fab fa-linkedin-in fa-stack-1x"}))),f("span",{className:"fa-stack",target:"_blank"},f("a",{href:"https://www.xing.com/communities/groups/entrepreneurship-an-der-hochschule-muenchen-1054465",target:"_blank",title:"SCE Xing"},f("i",{className:"fas fa-circle fa-stack-2x"}),f("i",{className:"fab fa-xing fa-stack-1x"}))),f("p",{className:"p-small"},"\xa9 2021"," ",f("a",{href:"https://www.sce.de/"},"Strascheg Center for Entrepreneurship"))))))))}var m=n.a.createElement;function d(e){var a=e.children,t=e.home;return m("div",null,m(o.a,null,m("title",null,"Precelerator - Der Community Space am SCE"),m("meta",{charSet:"utf-8"}),m("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),m("meta",{name:"description",content:"Der Precelerator ist das Zentrum f\xfcr innovative Projekte und Entrepreneurial Thinking am SCE, das Angebote und Beratungsleistungen f\xfcr fr\xfchphasige Projekte und Gr\xfcndungsvorhaben bietet."}),m("meta",{name:"author",content:"Fabio Maienschein"}),m("meta",{property:"og:site_name",content:"Precelerator"}),m("meta",{property:"og:site",content:"https://precelerator.de"}),m("meta",{property:"og:title",content:"Precelerator - Der Community Space f\xfcr Entrepreneurship & Prototyping an der HM"}),m("meta",{property:"og:description",content:"Der Precelerator ist der Community Space f\xfcr Entrepreneurship & Prototyping an der HM und stellt Studenten & Mitarbeitern Angebote und Beratungsleistungen f\xfcr fr\xfchphasige Projekte und Gr\xfcndungsvorhaben bereit."}),m("meta",{property:"og:image",content:""}),m("meta",{property:"og:url",content:""}),m("meta",{property:"og:type",content:"article"}),m("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/images/favicons/apple-touch-icon.png"}),m("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/images/favicons/favicon-32x32.png"}),m("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/favicons/favicon-16x16.png"}),m("link",{rel:"manifest",href:"/images/favicons/site.webmanifest"}),m("link",{rel:"mask-icon",href:"/images/favicons/safari-pinned-tab.svg",color:"#5bbad5"}),m("link",{href:"//cdn-images.mailchimp.com/embedcode/classic-10_7.css",rel:"stylesheet",type:"text/css"}),m("meta",{name:"msapplication-TileColor",content:"#da532c"}),m("meta",{name:"theme-color",content:"#ffffff"}),m("script",{src:"/js/jquery.min.js"}),m("script",{src:"/js/popper.min.js"}),m("script",{src:"/js/bootstrap.min.js"}),m("script",{src:"/js/jquery.easing.min.js"}),m("script",{src:"/js/jquery.magnific-popup.js"}),m("script",{src:"/js/validator.min.js"}),m("script",{src:"/js/scripts.js"}),m("script",{type:"text/javascript",src:"//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"}),m("script",{src:"/js/mailchimp.js"})),m("div",{id:"cookies-eu-banner",style:{display:"none"}},'Wir nutzen Google Analytics und Google Fonts, um dir die Inhalte auf dieser Seite bereitzustellen. Klick auf "Akzeptieren", um unseren Cookie-Richtlinien zuzustimmen.',m("a",{href:"./read-more.html",id:"cookies-eu-more"},"Mehr erfahren"),m("button",{id:"cookies-eu-accept",className:"btn-solid-reg"},"Akzeptieren"),m("button",{id:"cookies-eu-reject"},"Ablehnen")),m(t?c:u,null),a,m(p,null),m("script",{src:"/js/klaro/config.klaro.js",type:"application/javascript"}),m("script",{src:"/js/klaro/0.6.11.klaro.js",type:"application/javascript"}))}},EbDI:function(e,a){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,a,t){var r=t("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,a,t){var r=t("Ijbi"),n=t("EbDI"),s=t("ZhPi"),o=t("Bnag");e.exports=function(e){return r(e)||n(e)||s(e)||o()}},Xuae:function(e,a,t){"use strict";var r=t("RIqP"),n=t("lwsE"),s=t("W8MJ"),o=(t("PJYZ"),t("7W2i")),i=t("a1gu"),c=t("Nsbk");function l(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=c(e);if(a){var n=c(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return i(this,t)}}a.__esModule=!0,a.default=void 0;var u=t("q1tI"),f=function(e){o(t,e);var a=l(t);function t(e){var s;return n(this,t),(s=a.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(r(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(u.Component);a.default=f},YFqc:function(e,a,t){e.exports=t("cTJO")},cTJO:function(e,a,t){"use strict";var r=t("J4zp"),n=t("284h");a.__esModule=!0,a.default=void 0;var s,o=n(t("q1tI")),i=t("elyg"),c=t("nOHt"),l=new Map,u=window.IntersectionObserver,f={};var p=function(e,a){var t=s||(u?s=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var a=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),l.delete(e.target),a())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),l.set(e,a),function(){try{t.unobserve(e)}catch(a){console.error(a)}l.delete(e)}):function(){}};function m(e,a,t,r){(0,i.isLocalURL)(a)&&(e.prefetch(a,t,r).catch((function(e){0})),f[a+"%"+t]=!0)}var d=function(e){var a=!1!==e.prefetch,t=o.default.useState(),n=r(t,2),s=n[0],l=n[1],d=(0,c.useRouter)(),h=d&&d.pathname||"/",v=o.default.useMemo((function(){var a=(0,i.resolveHref)(h,e.href,!0),t=r(a,2),n=t[0],s=t[1];return{href:n,as:e.as?(0,i.resolveHref)(h,e.as):s||n}}),[h,e.href,e.as]),g=v.href,b=v.as;o.default.useEffect((function(){if(a&&u&&s&&s.tagName&&(0,i.isLocalURL)(g)&&!f[g+"%"+b])return p(s,(function(){m(d,g,b)}))}),[a,s,g,b,d]);var y=e.children,k=e.replace,N=e.shallow,w=e.scroll;"string"===typeof y&&(y=o.default.createElement("a",null,y));var x=o.Children.only(y),j={ref:function(e){e&&l(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,a,t,r,n,s,o){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),a[n?"replace":"push"](t,r,{shallow:s}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,g,b,k,N,w)}};return a&&(j.onMouseEnter=function(e){(0,i.isLocalURL)(g)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),m(d,g,b,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(j.href=(0,i.addBasePath)((0,i.addLocale)(b,d&&d.locale,d&&d.defaultLocale))),o.default.cloneElement(x,j)};a.default=d},lSNA:function(e,a){e.exports=function(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}},lwAK:function(e,a,t){"use strict";var r;a.__esModule=!0,a.AmpStateContext=void 0;var n=((r=t("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});a.AmpStateContext=n}}]);