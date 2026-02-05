"use strict";
(window["webpackChunkkoha"] = window["webpackChunkkoha"] || []).push([["vendor-menu"], {
"./node_modules/vue-loader/dist/exportHelper.js": 
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
(function (__unused_webpack_module, exports) {

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


}),
"./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue": 
/*!*******************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue ***!
  \*******************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var _VendorMenu_vue_js_vue_type_template_id_421f635a_node_modules_vue_loader_dist_index_js_ruleSet_0_VendorMenu_vue_vue_type_template_id_421f635a__rspack_import_0 = __webpack_require__(/*! ./VendorMenu.vue.js?vue&type=template&id=421f635a!=!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./VendorMenu.vue?vue&type=template&id=421f635a */ "./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=template&id=421f635a!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=template&id=421f635a");
/* import */ var _VendorMenu_vue_js_vue_type_script_lang_js_node_modules_vue_loader_dist_index_js_ruleSet_0_VendorMenu_vue_vue_type_script_lang_js__rspack_import_1 = __webpack_require__(/*! ./VendorMenu.vue.js?vue&type=script&lang=js!=!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./VendorMenu.vue?vue&type=script&lang=js */ "./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=script&lang=js?a55b");
/* import */ var _node_modules_vue_loader_dist_exportHelper_js__rspack_import_2 = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__rspack_import_2["default"])(_VendorMenu_vue_js_vue_type_script_lang_js_node_modules_vue_loader_dist_index_js_ruleSet_0_VendorMenu_vue_vue_type_script_lang_js__rspack_import_1["default"], [['render',_VendorMenu_vue_js_vue_type_template_id_421f635a_node_modules_vue_loader_dist_index_js_ruleSet_0_VendorMenu_vue_vue_type_template_id_421f635a__rspack_import_0.render]])

/* export default */ const __rspack_default_export = (__exports__);

}),
"./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=script&lang=js?ffc5": 
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var vue__rspack_import_0 = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* import */ var pinia__rspack_import_1 = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");




/* export default */ const __rspack_default_export = ({
    props: {
        vendorid: {
            type: String,
        },
        basketno: {
            type: String,
        },
        ordermanage: {
            type: String,
        },
        groupmanage: {
            type: String,
        },
        contractsmanage: {
            type: String,
        },
        issuemanage: {
            type: String,
        },
        ermmodule: {
            type: String,
        },
        erm: {
            type: String,
        },
    },
    setup(props) {
        const vendorStore = (0,vue__rspack_import_0.inject)("vendorStore");
        const { isUserPermitted, config } = vendorStore;
        const navigationStore = (0,vue__rspack_import_0.inject)("navigationStore");
        const { params } = (0,pinia__rspack_import_1.storeToRefs)(navigationStore);

        const vendorId = (0,vue__rspack_import_0.ref)(props.vendorid || params.value.id);
        const ermModule = props.ermmodule
            ? props.ermmodule
            : config.settings.ermModule;
        const templateRefs = (0,vue__rspack_import_0.ref)([]);

        (0,vue__rspack_import_0.onMounted)(() => {
            const path = location.pathname.substring(1);

            templateRefs.value
                .find(a => a.href.includes(path))
                ?.classList.add("current");
        });
        return {
            isUserPermitted,
            params,
            config,
            ermModule,
            vendorId,
            templateRefs,
        };
    },
});


}),
"./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=script&lang=js?a55b": 
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _VendorMenu_vue_js_vue_type_script_lang_js_node_modules_vue_loader_dist_index_js_ruleSet_0_VendorMenu_vue_vue_type_script_lang_js__rspack_import_0["default"])
});
/* import */ var _VendorMenu_vue_js_vue_type_script_lang_js_node_modules_vue_loader_dist_index_js_ruleSet_0_VendorMenu_vue_vue_type_script_lang_js__rspack_import_0 = __webpack_require__(/*! ./VendorMenu.vue.js?vue&type=script&lang=js!=!-!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./VendorMenu.vue?vue&type=script&lang=js */ "./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=script&lang=js?ffc5");
 

}),
"./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=template&id=421f635a!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=template&id=421f635a": 
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=template&id=421f635a!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=template&id=421f635a ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: () => (/* reexport safe */ _VendorMenu_vue_js_vue_type_template_id_421f635a_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_VendorMenu_vue_vue_type_template_id_421f635a__rspack_import_0.render)
});
/* import */ var _VendorMenu_vue_js_vue_type_template_id_421f635a_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_VendorMenu_vue_vue_type_template_id_421f635a__rspack_import_0 = __webpack_require__(/*! ./VendorMenu.vue.js?vue&type=template&id=421f635a!=!-!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3].use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./VendorMenu.vue?vue&type=template&id=421f635a */ "./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=template&id=421f635a!=!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=template&id=421f635a");


}),
"./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=template&id=421f635a!=!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=template&id=421f635a": 
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue.js?vue&type=template&id=421f635a!=!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/VendorMenu.vue?vue&type=template&id=421f635a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: () => (render)
});
/* import */ var vue__rspack_import_0 = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = {
  key: 0,
  id: "vendor-menu",
  class: "sidebar_menu"
}
const _hoisted_2 = { key: 0 }
const _hoisted_3 = ["href"]
const _hoisted_4 = { key: 1 }
const _hoisted_5 = ["href"]
const _hoisted_6 = { key: 2 }
const _hoisted_7 = ["href"]
const _hoisted_8 = { key: 3 }
const _hoisted_9 = ["href"]
const _hoisted_10 = ["href"]
const _hoisted_11 = { key: 4 }
const _hoisted_12 = ["href"]
const _hoisted_13 = ["href"]
const _hoisted_14 = { key: 5 }
const _hoisted_15 = ["href"]
const _hoisted_16 = { key: 6 }
const _hoisted_17 = ["href"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ($setup.vendorId)
    ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("div", _hoisted_1, [
        (0,vue__rspack_import_0.createElementVNode)("ul", null, [
          (
                    $props.ordermanage ||
                    $setup.isUserPermitted('CAN_user_acquisition_order_manage')
                )
            ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_2, [
                (0,vue__rspack_import_0.createElementVNode)("a", {
                  ref: el => $setup.templateRefs.push(el),
                  href: `/cgi-bin/koha/acqui/booksellers.pl?booksellerid=${$setup.vendorId}`
                }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Baskets")), 9, _hoisted_3)
              ]))
            : (0,vue__rspack_import_0.createCommentVNode)("", true),
          (
                    $props.groupmanage ||
                    $setup.isUserPermitted('CAN_user_acquisition_group_manage')
                )
            ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_4, [
                (0,vue__rspack_import_0.createElementVNode)("a", {
                  ref: el => $setup.templateRefs.push(el),
                  href: `/cgi-bin/koha/acqui/basketgroup.pl?booksellerid=${$setup.vendorId}`
                }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Basket groups")), 9, _hoisted_5)
              ]))
            : (0,vue__rspack_import_0.createCommentVNode)("", true),
          (
                    $props.contractsmanage ||
                    $setup.isUserPermitted('CAN_user_acquisition_contracts_manage')
                )
            ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_6, [
                (0,vue__rspack_import_0.createElementVNode)("a", {
                  ref: el => $setup.templateRefs.push(el),
                  href: `/cgi-bin/koha/admin/aqcontract.pl?booksellerid=${$setup.vendorId}`
                }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Contracts")), 9, _hoisted_7)
              ]))
            : (0,vue__rspack_import_0.createCommentVNode)("", true),
          (
                    $props.issuemanage ||
                    $setup.isUserPermitted('CAN_user_acquisition_issue_manage')
                )
            ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_8, [
                (0,vue__rspack_import_0.createElementVNode)("a", {
                  ref: el => $setup.templateRefs.push(el),
                  href: `/cgi-bin/koha/acqui/vendor_issues.pl?booksellerid=${$setup.vendorId}`
                }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Vendor issues")), 9, _hoisted_9)
              ]))
            : (0,vue__rspack_import_0.createCommentVNode)("", true),
          (0,vue__rspack_import_0.createElementVNode)("li", null, [
            (0,vue__rspack_import_0.createElementVNode)("a", {
              ref: el => $setup.templateRefs.push(el),
              href: `/cgi-bin/koha/acqui/invoices.pl?supplierid=${$setup.vendorId}`
            }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Invoices")), 9, _hoisted_10)
          ]),
          (
                    $props.ordermanage ||
                    $setup.isUserPermitted('CAN_user_acquisition_order_manage')
                )
            ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_11, [
                ($props.basketno)
                  ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("a", {
                      key: 0,
                      ref: el => $setup.templateRefs.push(el),
                      href: `/cgi-bin/koha/acqui/uncertainprice.pl?booksellerid=${$setup.vendorId}&basketno=${$props.basketno}&owner=1`
                    }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Uncertain prices")), 9, _hoisted_12))
                  : ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("a", {
                      key: 1,
                      ref: el => $setup.templateRefs.push(el),
                      href: `/cgi-bin/koha/acqui/uncertainprice.pl?booksellerid=${$setup.vendorId}&owner=1`
                    }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Uncertain prices")), 9, _hoisted_13))
              ]))
            : (0,vue__rspack_import_0.createCommentVNode)("", true),
          ($setup.ermModule && ($props.erm || $setup.isUserPermitted('CAN_user_erm')))
            ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_14, [
                (0,vue__rspack_import_0.createElementVNode)("a", {
                  href: `/cgi-bin/koha/erm/agreements?vendor_id=${$setup.vendorId}`
                }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("ERM agreements")), 9, _hoisted_15)
              ]))
            : (0,vue__rspack_import_0.createCommentVNode)("", true),
          ($setup.ermModule && ($props.erm || $setup.isUserPermitted('CAN_user_erm')))
            ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_16, [
                (0,vue__rspack_import_0.createElementVNode)("a", {
                  href: `/cgi-bin/koha/erm/licenses?vendor_id=${$setup.vendorId}`
                }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("ERM licenses")), 9, _hoisted_17)
              ]))
            : (0,vue__rspack_import_0.createCommentVNode)("", true)
        ])
      ]))
    : (0,vue__rspack_import_0.createCommentVNode)("", true)
}

}),

}]);
//# sourceMappingURL=vendor-menu.fd798e17456ef807.js.map