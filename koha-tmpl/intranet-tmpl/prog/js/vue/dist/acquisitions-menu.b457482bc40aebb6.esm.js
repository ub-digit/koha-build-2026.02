export const __webpack_id__ = "acquisitions-menu" ;
export const __webpack_ids__ = ["acquisitions-menu"];
export const __webpack_modules__ = {
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
"./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue": 
/*!*************************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue ***!
  \*************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var _AcquisitionsMenu_vue_js_vue_type_template_id_43b820ed_node_modules_vue_loader_dist_index_js_ruleSet_0_AcquisitionsMenu_vue_vue_type_template_id_43b820ed__rspack_import_0 = __webpack_require__(/*! ./AcquisitionsMenu.vue.js?vue&type=template&id=43b820ed!=!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AcquisitionsMenu.vue?vue&type=template&id=43b820ed */ "./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=template&id=43b820ed!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=template&id=43b820ed");
/* import */ var _AcquisitionsMenu_vue_js_vue_type_script_lang_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AcquisitionsMenu_vue_vue_type_script_lang_js__rspack_import_1 = __webpack_require__(/*! ./AcquisitionsMenu.vue.js?vue&type=script&lang=js!=!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AcquisitionsMenu.vue?vue&type=script&lang=js */ "./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=script&lang=js?c8f5");
/* import */ var _node_modules_vue_loader_dist_exportHelper_js__rspack_import_2 = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__rspack_import_2["default"])(_AcquisitionsMenu_vue_js_vue_type_script_lang_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AcquisitionsMenu_vue_vue_type_script_lang_js__rspack_import_1["default"], [['render',_AcquisitionsMenu_vue_js_vue_type_template_id_43b820ed_node_modules_vue_loader_dist_index_js_ruleSet_0_AcquisitionsMenu_vue_vue_type_template_id_43b820ed__rspack_import_0.render]])

/* export default */ const __rspack_default_export = (__exports__);

}),
"./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=script&lang=js?7b6c": 
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var vue__rspack_import_0 = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* import */ var pinia__rspack_import_1 = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");




/* export default */ const __rspack_default_export = ({
    props: {
        ordermanage: {
            type: Number,
        },
        orderreceive: {
            type: Number,
        },
        edifact: {
            type: Number,
        },
        edimanage: {
            type: Number,
        },
        reports: {
            type: Number,
        },
        circulateremainingpermissions: {
            type: Number,
        },
        periodmanage: {
            type: Number,
        },
        budgetmanage: {
            type: Number,
        },
        currenciesmanage: {
            type: Number,
        },
        manageadditionalfields: {
            type: Number,
        },
        invoiceedit: {
            type: Number,
        },
        suggestionscreate: {
            type: Number,
        },
        suggestionsmanage: {
            type: Number,
        },
        suggestionsdelete: {
            type: Number,
        },
        marcorderautomation: {
            type: Number,
        },
        marcordermanage: {
            type: Number,
        },
    },
    setup(props) {
        const navigationStore = (0,vue__rspack_import_0.inject)("navigationStore");
        const { params } = (0,pinia__rspack_import_1.storeToRefs)(navigationStore);
        const vendorStore = (0,vue__rspack_import_0.inject)("vendorStore");
        const { isUserPermitted } = vendorStore;
        const { config } = (0,pinia__rspack_import_1.storeToRefs)(vendorStore);

        const edifactEnabled = (0,vue__rspack_import_0.ref)(false);
        const marcOrdersEnabled = (0,vue__rspack_import_0.ref)(false);
        edifactEnabled.value = config.value?.settings.edifact
            ? config.value.settings.edifact
            : props.edifact;
        marcOrdersEnabled.value = config.value?.settings.marcorderautomation
            ? config.value.settings.marcorderautomation
            : props.marcorderautomation;

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
            edifactEnabled,
            marcOrdersEnabled,
            templateRefs,
        };
    },
});


}),
"./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=script&lang=js?c8f5": 
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _AcquisitionsMenu_vue_js_vue_type_script_lang_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AcquisitionsMenu_vue_vue_type_script_lang_js__rspack_import_0["default"])
});
/* import */ var _AcquisitionsMenu_vue_js_vue_type_script_lang_js_node_modules_vue_loader_dist_index_js_ruleSet_0_AcquisitionsMenu_vue_vue_type_script_lang_js__rspack_import_0 = __webpack_require__(/*! ./AcquisitionsMenu.vue.js?vue&type=script&lang=js!=!-!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AcquisitionsMenu.vue?vue&type=script&lang=js */ "./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=script&lang=js!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=script&lang=js?7b6c");
 

}),
"./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=template&id=43b820ed!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=template&id=43b820ed": 
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=template&id=43b820ed!=!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=template&id=43b820ed ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: () => (/* reexport safe */ _AcquisitionsMenu_vue_js_vue_type_template_id_43b820ed_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_AcquisitionsMenu_vue_vue_type_template_id_43b820ed__rspack_import_0.render)
});
/* import */ var _AcquisitionsMenu_vue_js_vue_type_template_id_43b820ed_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_AcquisitionsMenu_vue_vue_type_template_id_43b820ed__rspack_import_0 = __webpack_require__(/*! ./AcquisitionsMenu.vue.js?vue&type=template&id=43b820ed!=!-!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3].use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./AcquisitionsMenu.vue?vue&type=template&id=43b820ed */ "./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=template&id=43b820ed!=!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=template&id=43b820ed");


}),
"./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=template&id=43b820ed!=!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=template&id=43b820ed": 
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue.js?vue&type=template&id=43b820ed!=!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./koha-tmpl/intranet-tmpl/prog/js/vue/components/Islands/AcquisitionsMenu.vue?vue&type=template&id=43b820ed ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: () => (render)
});
/* import */ var vue__rspack_import_0 = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = {
  id: "acquisitions-menu",
  class: "sidebar_menu"
}
const _hoisted_2 = { key: 0 }
const _hoisted_3 = { key: 1 }
const _hoisted_4 = { key: 2 }
const _hoisted_5 = { key: 1 }
const _hoisted_6 = { key: 0 }
const _hoisted_7 = { key: 1 }
const _hoisted_8 = { key: 2 }
const _hoisted_9 = { key: 4 }
const _hoisted_10 = { key: 5 }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("div", _hoisted_1, [
    (0,vue__rspack_import_0.createElementVNode)("h5", null, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Acquisitions")), 1),
    (0,vue__rspack_import_0.createElementVNode)("ul", null, [
      (0,vue__rspack_import_0.createElementVNode)("li", null, [
        (0,vue__rspack_import_0.createElementVNode)("a", {
          ref: el => $setup.templateRefs.push(el),
          href: "/cgi-bin/koha/acqui/acqui-home.pl"
        }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Acquisitions home")), 513)
      ]),
      (0,vue__rspack_import_0.createElementVNode)("li", null, [
        (0,vue__rspack_import_0.createElementVNode)("a", {
          ref: el => $setup.templateRefs.push(el),
          href: "/cgi-bin/koha/acqui/histsearch.pl"
        }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Advanced search")), 513)
      ]),
      (
                    $props.orderreceive ||
                    $setup.isUserPermitted('CAN_user_acquisition_order_receive')
                )
        ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_2, [
            (0,vue__rspack_import_0.createElementVNode)("a", {
              ref: el => $setup.templateRefs.push(el),
              href: "/cgi-bin/koha/acqui/lateorders.pl"
            }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Late orders")), 513)
          ]))
        : (0,vue__rspack_import_0.createCommentVNode)("", true),
      (
                    $props.suggestionscreate ||
                    $props.suggestionsmanage ||
                    $props.suggestionsdelete ||
                    $setup.isUserPermitted(
                        'CAN_user_suggestions_suggestions_create'
                    ) ||
                    $setup.isUserPermitted(
                        'CAN_user_suggestions_suggestions_manage'
                    ) ||
                    $setup.isUserPermitted('CAN_user_suggestions_suggestions_delete')
                )
        ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_3, [
            (0,vue__rspack_import_0.createElementVNode)("a", {
              ref: el => $setup.templateRefs.push(el),
              href: "/cgi-bin/koha/suggestion/suggestion.pl"
            }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Suggestions")), 513)
          ]))
        : (0,vue__rspack_import_0.createCommentVNode)("", true),
      (0,vue__rspack_import_0.createElementVNode)("li", null, [
        (0,vue__rspack_import_0.createElementVNode)("a", {
          ref: el => $setup.templateRefs.push(el),
          href: "/cgi-bin/koha/acqui/invoices.pl"
        }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Invoices")), 513)
      ]),
      (
                    $setup.edifactEnabled &&
                    ($props.edimanage ||
                        $setup.isUserPermitted('CAN_user_acquisition_edi_manage'))
                )
        ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_4, [
            (0,vue__rspack_import_0.createElementVNode)("a", {
              ref: el => $setup.templateRefs.push(el),
              href: "/cgi-bin/koha/acqui/edifactmsgs.pl"
            }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("EDIFACT messages")), 513)
          ]))
        : (0,vue__rspack_import_0.createCommentVNode)("", true)
    ]),
    (
                $props.reports ||
                $props.circulateremainingpermissions ||
                $setup.isUserPermitted('CAN_user_reports') ||
                $setup.isUserPermitted(
                    'CAN_user_circulate_circulate_remaining_permissions'
                )
            )
      ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)(vue__rspack_import_0.Fragment, { key: 0 }, [
          (0,vue__rspack_import_0.createElementVNode)("h5", null, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Reports")), 1),
          (0,vue__rspack_import_0.createElementVNode)("ul", null, [
            ($props.reports || $setup.isUserPermitted('CAN_user_reports'))
              ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)(vue__rspack_import_0.Fragment, { key: 0 }, [
                  (0,vue__rspack_import_0.createElementVNode)("li", null, [
                    (0,vue__rspack_import_0.createElementVNode)("a", {
                      ref: el => $setup.templateRefs.push(el),
                      href: "/cgi-bin/koha/reports/acquisitions_stats.pl"
                    }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Acquisitions statistics wizard")), 513)
                  ]),
                  (0,vue__rspack_import_0.createElementVNode)("li", null, [
                    (0,vue__rspack_import_0.createElementVNode)("a", {
                      ref: el => $setup.templateRefs.push(el),
                      href: "/cgi-bin/koha/reports/orders_by_fund.pl"
                    }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Orders by fund")), 513)
                  ])
                ], 64))
              : (0,vue__rspack_import_0.createCommentVNode)("", true),
            (
                        $props.circulateremainingpermissions ||
                        $setup.isUserPermitted(
                            'CAN_user_circulate_circulate_remaining_permissions'
                        )
                    )
              ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_5, [
                  (0,vue__rspack_import_0.createElementVNode)("a", {
                    ref: el => $setup.templateRefs.push(el),
                    href: "/cgi-bin/koha/circ/reserveratios.pl"
                  }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Hold ratios")), 513)
                ]))
              : (0,vue__rspack_import_0.createCommentVNode)("", true)
          ])
        ], 64))
      : (0,vue__rspack_import_0.createCommentVNode)("", true),
    (
                $props.periodmanage ||
                $setup.isUserPermitted('CAN_user_acquisition_period_manage') ||
                $props.budgetmanage ||
                $setup.isUserPermitted('CAN_user_acquisition_budget_manage') ||
                $props.currenciesmanage ||
                $setup.isUserPermitted('CAN_user_acquisition_currencies_manage') ||
                ($setup.edifactEnabled &&
                    ($props.edimanage ||
                        $setup.isUserPermitted('CAN_user_acquisition_edi_manage'))) ||
                ($setup.marcOrdersEnabled &&
                    ($props.marcordermanage ||
                        $setup.isUserPermitted(
                            'CAN_user_acquisition_marc_order_manage'
                        ))) ||
                $props.manageadditionalfields ||
                $setup.isUserPermitted('CAN_user_acquisition_edi_manage')
            )
      ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)(vue__rspack_import_0.Fragment, { key: 1 }, [
          (0,vue__rspack_import_0.createElementVNode)("h5", null, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Administration")), 1),
          (0,vue__rspack_import_0.createElementVNode)("ul", null, [
            (
                        $props.periodmanage ||
                        $setup.isUserPermitted('CAN_user_acquisition_period_manage')
                    )
              ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_6, [
                  (0,vue__rspack_import_0.createElementVNode)("a", {
                    ref: el => $setup.templateRefs.push(el),
                    href: "/cgi-bin/koha/admin/aqbudgetperiods.pl"
                  }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Budgets")), 513)
                ]))
              : (0,vue__rspack_import_0.createCommentVNode)("", true),
            (
                        $props.budgetmanage ||
                        $setup.isUserPermitted('CAN_user_acquisition_budget_manage')
                    )
              ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_7, [
                  (0,vue__rspack_import_0.createElementVNode)("a", {
                    ref: el => $setup.templateRefs.push(el),
                    href: "/cgi-bin/koha/admin/aqbudgets.pl"
                  }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Funds")), 513)
                ]))
              : (0,vue__rspack_import_0.createCommentVNode)("", true),
            (
                        $props.currenciesmanage ||
                        $setup.isUserPermitted(
                            'CAN_user_acquisition_currencies_manage'
                        )
                    )
              ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_8, [
                  (0,vue__rspack_import_0.createElementVNode)("a", {
                    ref: el => $setup.templateRefs.push(el),
                    href: "/cgi-bin/koha/admin/currency.pl"
                  }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Currencies")), 513)
                ]))
              : (0,vue__rspack_import_0.createCommentVNode)("", true),
            (
                        ($setup.edifactEnabled && $props.edimanage) ||
                        ($setup.edifactEnabled &&
                            $setup.isUserPermitted('CAN_user_acquisition_edi_manage'))
                    )
              ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)(vue__rspack_import_0.Fragment, { key: 3 }, [
                  (0,vue__rspack_import_0.createElementVNode)("li", null, [
                    (0,vue__rspack_import_0.createElementVNode)("a", {
                      ref: el => $setup.templateRefs.push(el),
                      href: "/cgi-bin/koha/admin/edi_accounts.pl"
                    }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("EDI accounts")), 513)
                  ]),
                  (0,vue__rspack_import_0.createElementVNode)("li", null, [
                    (0,vue__rspack_import_0.createElementVNode)("a", {
                      ref: el => $setup.templateRefs.push(el),
                      href: "/cgi-bin/koha/admin/edi_ean_accounts.pl"
                    }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Library EANs")), 513)
                  ])
                ], 64))
              : (0,vue__rspack_import_0.createCommentVNode)("", true),
            (
                        ($setup.marcOrdersEnabled && $props.marcordermanage) ||
                        ($setup.marcOrdersEnabled &&
                            $setup.isUserPermitted(
                                'CAN_user_acquisition_marc_order_manage'
                            ))
                    )
              ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_9, [
                  (0,vue__rspack_import_0.createElementVNode)("a", {
                    ref: el => $setup.templateRefs.push(el),
                    href: "/cgi-bin/koha/admin/marc_order_accounts.pl"
                  }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("MARC order accounts")), 513)
                ]))
              : (0,vue__rspack_import_0.createCommentVNode)("", true),
            (
                        $props.manageadditionalfields ||
                        $setup.isUserPermitted(
                            'CAN_user_parameters_manage_additional_fields'
                        ) ||
                        $props.invoiceedit ||
                        $setup.isUserPermitted('CAN_user_acquisition_edit_invoices')
                    )
              ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)("li", _hoisted_10, [
                  (0,vue__rspack_import_0.createElementVNode)("a", {
                    ref: el => $setup.templateRefs.push(el),
                    href: "/cgi-bin/koha/admin/additional-fields.pl?tablename=aqinvoices"
                  }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Manage invoice fields")), 513)
                ]))
              : (0,vue__rspack_import_0.createCommentVNode)("", true),
            (
                        ($props.manageadditionalfields ||
                            $setup.isUserPermitted(
                                'CAN_user_parameters_manage_additional_fields'
                            )) &&
                        ($props.ordermanage ||
                            $setup.isUserPermitted(
                                'CAN_user_acquisition_order_manage'
                            ))
                    )
              ? ((0,vue__rspack_import_0.openBlock)(), (0,vue__rspack_import_0.createElementBlock)(vue__rspack_import_0.Fragment, { key: 6 }, [
                  (0,vue__rspack_import_0.createElementVNode)("li", null, [
                    (0,vue__rspack_import_0.createElementVNode)("a", {
                      ref: el => $setup.templateRefs.push(el),
                      href: "/cgi-bin/koha/admin/additional-fields.pl?tablename=aqbasket"
                    }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Manage order basket fields")), 513)
                  ]),
                  (0,vue__rspack_import_0.createElementVNode)("li", null, [
                    (0,vue__rspack_import_0.createElementVNode)("a", {
                      ref: el => $setup.templateRefs.push(el),
                      href: "/cgi-bin/koha/admin/additional-fields.pl?tablename=aqorders"
                    }, (0,vue__rspack_import_0.toDisplayString)(_ctx.$__("Manage order line fields")), 513)
                  ])
                ], 64))
              : (0,vue__rspack_import_0.createCommentVNode)("", true)
          ])
        ], 64))
      : (0,vue__rspack_import_0.createCommentVNode)("", true)
  ]))
}

}),

};

//# sourceMappingURL=acquisitions-menu.b457482bc40aebb6.esm.js.map