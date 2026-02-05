"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_acquisition-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/acquisition-api-client.js": 
/*!*************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/acquisition-api-client.js ***!
  \*************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AcquisitionAPIClient: () => (AcquisitionAPIClient),
  "default": () => (__rspack_default_export)
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var AcquisitionAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function AcquisitionAPIClient(HttpClient) {
        _class_call_check(this, AcquisitionAPIClient);
        this.httpClient = new HttpClient({
            baseURL: "/api/v1/acquisitions/"
        });
    }
    _create_class(AcquisitionAPIClient, [
        {
            key: "config",
            get: function get() {
                var _this = this;
                return {
                    get: function(moduleEndpoint) {
                        return _this.httpClient.get({
                            endpoint: moduleEndpoint + "/config"
                        });
                    }
                };
            }
        },
        {
            key: "vendors",
            get: function get() {
                var _this = this;
                var _this1 = this;
                return {
                    get: function(id) {
                        return _this.httpClient.get({
                            endpoint: "vendors/" + id,
                            headers: {
                                "x-koha-embed": "aliases,subscriptions+count,interfaces,contacts,contracts,baskets+count,invoices+count,extended_attributes,+strings"
                            }
                        });
                    },
                    getAll: function(query, params) {
                        return _this.httpClient.getAll({
                            endpoint: "vendors",
                            query: query,
                            params: _object_spread({
                                _order_by: "name"
                            }, params),
                            headers: {
                                "x-koha-embed": "aliases,baskets+count"
                            }
                        });
                    },
                    delete: function(id) {
                        return _this.httpClient.delete({
                            endpoint: "vendors/" + id
                        });
                    },
                    create: function(vendor) {
                        return _this.httpClient.post({
                            endpoint: "vendors",
                            body: vendor
                        });
                    },
                    update: function(vendor, id) {
                        return _this.httpClient.put({
                            endpoint: "vendors/" + id,
                            body: vendor
                        });
                    },
                    count: function() {
                        var query = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        return _this1.httpClient.count({
                            endpoint: "vendors?" + new URLSearchParams(_object_spread({
                                _page: 1,
                                _per_page: 1
                            }, query && {
                                q: JSON.stringify(query)
                            }))
                        });
                    },
                    additional_fields: function(resource_type) {
                        return _this.httpClient.getAll({
                            endpoint: "vendors/extended_attribute_types",
                            params: {
                                resource_type: resource_type
                            }
                        });
                    }
                };
            }
        },
        {
            key: "baskets",
            get: function get() {
                var _this = this;
                return {
                    count: function() {
                        var query = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        return _this.httpClient.count({
                            endpoint: "baskets?" + new URLSearchParams(_object_spread({
                                _page: 1,
                                _per_page: 1
                            }, query && {
                                q: JSON.stringify(query)
                            }))
                        });
                    }
                };
            }
        },
        {
            key: "additional_fields",
            get: function get() {
                var _this = this;
                return {
                    getAll: function(resource_type) {
                        if (resource_type == "vendor") {
                            return _this.vendors.additional_fields(resource_type);
                        }
                        // Use fetch/additional-fields-api-client.js instead
                        throw new Error("resource_type %s does not have a dedicated endpoint to fetch additional fields.");
                    }
                };
            }
        }
    ]);
    return AcquisitionAPIClient;
}();
/* export default */ const __rspack_default_export = (AcquisitionAPIClient);


}),

};
;