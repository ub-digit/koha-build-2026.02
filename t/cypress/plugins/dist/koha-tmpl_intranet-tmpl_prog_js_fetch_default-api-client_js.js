"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_default-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/default-api-client.js": 
/*!*********************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/default-api-client.js ***!
  \*********************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DefaultAPIClient: () => (DefaultAPIClient),
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
var DefaultAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function DefaultAPIClient(HttpClient) {
        _class_call_check(this, DefaultAPIClient);
        this.httpClient = new HttpClient({
            baseURL: ""
        });
    }
    _create_class(DefaultAPIClient, [
        {
            key: "koha",
            get: function get() {
                var _this = this;
                return {
                    get: function(params) {
                        return _this.httpClient.get(params);
                    },
                    getAll: function(params) {
                        return _this.httpClient.getAll(params);
                    },
                    post: function(params) {
                        return _this.httpClient.post(params);
                    },
                    put: function(params) {
                        return _this.httpClient.put(params);
                    },
                    delete: function(params) {
                        return _this.httpClient.delete(params);
                    }
                };
            }
        }
    ]);
    return DefaultAPIClient;
}();
/* export default */ const __rspack_default_export = (DefaultAPIClient);


}),

};
;