(window.webpackJsonpdash_core_components=window.webpackJsonpdash_core_components||[]).push([[0],{782:function(t,e,n){var r=n(12),o=n(783);r({target:"Array",stat:!0,forced:!n(465)((function(t){Array.from(t)}))},{from:o})},783:function(t,e,n){"use strict";var r=n(151),o=n(66),a=n(464),i=n(462),l=n(65),c=n(205),s=n(463);t.exports=function(t){var e,n,u,f,p=o(t),y="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,h=void 0!==v,b=0,m=s(p);if(h&&(v=r(v,d>2?arguments[2]:void 0,2)),null==m||y==Array&&i(m))for(n=new y(e=l(p.length));e>b;b++)c(n,b,h?v(p[b],b):p[b]);else for(f=m.call(p),n=new y;!(u=f.next()).done;b++)c(n,b,h?a(f,v,[u.value,b],!0):u.value);return n.length=b,n}},785:function(t,e,n){"use strict";n.r(e);n(19),n(20),n(21),n(67),n(96),n(76),n(782),n(204),n(15),n(38),n(22),n(23),n(118),n(24),n(97),n(25),n(26),n(27),n(77),n(28);var r=n(1),o=n.n(r),a=n(779),i=n(777),l=n(461),c=n(117),s=n(781),u=n(780),f=n(778),p=n(460),y=n(0),d=n.n(y),v=n(206);function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){b(t,e,n[e])}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=t[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t,e,n){var r;if(Object(a.a)(n,["click","hover","selected"])){var o=[];if(Object(i.a)(e))return null;for(var u=t.data,f=0;f<e.points.length;f++){var p=e.points[f],y=Object(l.a)((function(t){return!Object(a.a)(Object(c.a)(t),["Object","Array"])}),p);Object(s.a)("curveNumber",p)&&Object(s.a)("pointNumber",p)&&Object(s.a)("customdata",u[y.curveNumber])&&(y.customdata=u[y.curveNumber].customdata[p.pointNumber]),Object(s.a)("pointNumbers",p)&&(y.pointNumbers=p.pointNumbers),o[f]=y}r={points:o}}else"relayout"!==n&&"restyle"!==n||(r=e);return Object(s.a)("range",e)&&(r.range=e.range),Object(s.a)("lassoPoints",e)&&(r.lassoPoints=e.lassoPoints),r},k=function(t){function e(t){var n,r,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(a=_(e).call(this,t))||"object"!==g(a)&&"function"!=typeof a?j(r):a).gd=o.a.createRef(),n.bindEvents=n.bindEvents.bind(j(n)),n._hasPlotted=!1,n._prevGd=null,n.graphResize=n.graphResize.bind(j(n)),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,t),n=e,(r=[{key:"plot",value:function(t){var e=this,n=t.figure,r=t.animate,o=t.animation_options,a=t.config,i=this.gd.current;return r&&this._hasPlotted&&n.data.length===i.data.length?Plotly.animate(i,n,o):Plotly.react(i,{data:n.data,layout:Object(u.a)(n.layout),frames:n.frames,config:a}).then((function(){var t=e.gd.current;t&&(e._hasPlotted&&t!==e._prevGd&&(e._prevGd&&e._prevGd.removeAllListeners&&(e._prevGd.removeAllListeners(),Plotly.purge(e._prevGd)),e._hasPlotted=!1),e._hasPlotted||(e.bindEvents(),Plotly.Plots.resize(t),e._hasPlotted=!0,e._prevGd=t))}))}},{key:"extend",value:function(t){var e=this,n=t.clearExtendData;t.extendData.forEach((function(t){var n,r,o,a;if(Array.isArray(t)&&"object"===g(t[0])){var i=m(t,3);n=i[0],r=i[1],o=i[2]}else n=t;r||(a=n,r=Array.from(Array(function(t){return t[Object.keys(t)[0]]}(a).length).keys()));var l=e.gd.current;return Plotly.extendTraces(l,n,r,o)})),n()}},{key:"graphResize",value:function(){var t=this.gd.current;t&&Plotly.Plots.resize(t)}},{key:"bindEvents",value:function(){var t=this.props,e=t.setProps,n=t.clear_on_unhover,r=t.relayoutData,o=t.restyleData,a=t.hoverData,l=t.selectedData,c=this.gd.current;c.on("plotly_click",(function(t){var n=w(c,t,"click");Object(i.a)(n)||e({clickData:n})})),c.on("plotly_clickannotation",(function(t){var n=Object(f.a)(["event","fullAnnotation"],t);e({clickAnnotationData:n})})),c.on("plotly_hover",(function(t){var n=w(c,t,"hover");Object(i.a)(n)||Object(p.a)(n,a)||e({hoverData:n})})),c.on("plotly_selected",(function(t){var n=w(c,t,"selected");Object(i.a)(n)||Object(p.a)(n,l)||e({selectedData:n})})),c.on("plotly_deselect",(function(){e({selectedData:null})})),c.on("plotly_relayout",(function(t){var n=w(c,t,"relayout");Object(i.a)(n)||Object(p.a)(n,r)||e({relayoutData:n})})),c.on("plotly_restyle",(function(t){var n=w(c,t,"restyle");Object(i.a)(n)||Object(p.a)(n,o)||e({restyleData:n})})),c.on("plotly_unhover",(function(){n&&e({hoverData:null})}))}},{key:"componentDidMount",value:function(){var t=this;this.plot(this.props).then((function(){window.addEventListener("resize",t.graphResize)})),this.props.extendData&&this.extend(this.props)}},{key:"componentWillUnmount",value:function(){var t=this.gd.current;t&&t.removeAllListeners&&(t.removeAllListeners(),this._hasPlotted&&Plotly.purge(t)),window.removeEventListener("resize",this.graphResize)}},{key:"shouldComponentUpdate",value:function(t){return this.props.id!==t.id||JSON.stringify(this.props.style)!==JSON.stringify(t.style)}},{key:"componentWillReceiveProps",value:function(t){this.props.id!==t.id||(this.props.figure!==t.figure&&this.plot(t),this.props.extendData!==t.extendData&&this.extend(t))}},{key:"componentDidUpdate",value:function(t){t.id!==this.props.id&&this.plot(this.props)}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.id,r=t.style,a=t.loading_state;return o.a.createElement("div",{key:n,id:n,ref:this.gd,"data-dash-is-loading":a&&a.is_loading||void 0,style:r,className:e})}}])&&O(n.prototype,r),a&&O(n,a),e}(r.Component);k.propTypes=h({},v.c,{extendData:d.a.arrayOf(d.a.oneOfType([d.a.array,d.a.object])),clearExtendData:d.a.func.isRequired}),k.defaultProps=h({},v.b,{extendData:[]}),e.default=k}}]);
//# sourceMappingURL=async~graph.js.map