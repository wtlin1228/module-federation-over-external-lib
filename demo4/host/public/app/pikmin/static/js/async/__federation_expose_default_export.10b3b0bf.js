"use strict";
(self["chunk_pikmin"] = self["chunk_pikmin"] || []).push([["249"], {
751: (function (__unused_webpack_module, exports, __webpack_require__) {


var m = __webpack_require__(135);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i }


}),
193: (function (__unused_webpack_module, exports, __webpack_require__) {
var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(891),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


}),
676: (function (module, __unused_webpack_exports, __webpack_require__) {


if (true) {
  module.exports = __webpack_require__(193);
} else {}


}),
659: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  renderToContainer: () => (/* binding */ renderToContainer)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(676);
// EXTERNAL MODULE: consume shared module (default) react@^18.3.1 (strict) (fallback: /home/mujin/wtlin/module-federation-over-external-lib/demo4/pikmin/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(787);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js
var client = __webpack_require__(751);
;// CONCATENATED MODULE: ./src/components/ProviderComponent.css
// extracted by css-extract-rspack-plugin

// EXTERNAL MODULE: consume shared module (default) lodash@^4.17.21 (strict) (fallback: /home/mujin/wtlin/module-federation-over-external-lib/demo4/pikmin/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js)
var lodash_js_ = __webpack_require__(292);
var lodash_js_default = /*#__PURE__*/__webpack_require__.n(lodash_js_);
;// CONCATENATED MODULE: ./src/components/ProviderComponent.tsx




const Provider = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "icon-container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: "https://module-federation.io/svg.svg",
                    alt: "logo",
                    className: "logo-image"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: "title",
                children: lodash_js_default().join([
                    "Pikmin",
                    "Federation",
                    "2.0"
                ], " ")
            })
        ]
    });
};
/* ESM default export */ const ProviderComponent = (Provider);

;// CONCATENATED MODULE: ./src/exposed.tsx




const renderToContainer = (rootEl)=>{
    const root = client.createRoot(rootEl);
    root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)((index_js_default()).StrictMode, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderComponent, {})
    }));
    return root;
};


}),

}]);