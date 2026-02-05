"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_authorised-values-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/authorised-values-api-client.js": 
/*!*******************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/authorised-values-api-client.js ***!
  \*******************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AVAPIClient: () => (AVAPIClient),
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
var AVAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function AVAPIClient(HttpClient) {
        _class_call_check(this, AVAPIClient);
        this.httpClient = new HttpClient({
            baseURL: ""
        });
    }
    _create_class(AVAPIClient, [
        {
            key: "values",
            get: function get() {
                var _this = this;
                return {
                    get: function(category) {
                        return _this.httpClient.get({
                            endpoint: "/api/v1/authorised_value_categories/".concat(category, "/authorised_values")
                        });
                    },
                    getCategoriesWithValues: function(cat_array) {
                        return _this.httpClient.get({
                            endpoint: "/api/v1/authorised_value_categories" + '?q={"me.category_name":[' + cat_array.join(", ") + "]}",
                            headers: {
                                "x-koha-embed": "authorised_values"
                            }
                        });
                    },
                    create: function(value) {
                        return _this.httpClient.post({
                            endpoint: "/cgi-bin/koha/svc/authorised_values",
                            body: "category=%s&value=%s&description=%s&opac_description=%s".format(encodeURIComponent(value.category), encodeURIComponent(value.value), encodeURIComponent(value.description), encodeURIComponent(value.opac_description)),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    }
                };
            }
        }
    ]);
    return AVAPIClient;
}();
/* export default */ const __rspack_default_export = (AVAPIClient);


}),

};
;