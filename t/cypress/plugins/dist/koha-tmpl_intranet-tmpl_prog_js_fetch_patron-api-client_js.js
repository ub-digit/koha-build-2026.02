"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_patron-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/patron-api-client.js": 
/*!********************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/patron-api-client.js ***!
  \********************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PatronAPIClient: () => (PatronAPIClient),
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
var PatronAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function PatronAPIClient(HttpClient) {
        _class_call_check(this, PatronAPIClient);
        this.httpClient = new HttpClient({
            baseURL: "/api/v1/"
        });
    }
    _create_class(PatronAPIClient, [
        {
            key: "patrons",
            get: function get() {
                var _this = this;
                return {
                    get: function(id) {
                        return _this.httpClient.get({
                            endpoint: "patrons/" + id
                        });
                    }
                };
            }
        },
        {
            key: "categories",
            get: function get() {
                var _this = this;
                return {
                    getAll: function(query, params, headers) {
                        return _this.httpClient.getAll({
                            endpoint: "patron_categories",
                            query: query,
                            params: params,
                            headers: headers
                        });
                    }
                };
            }
        }
    ]);
    return PatronAPIClient;
}();
/* export default */ const __rspack_default_export = (PatronAPIClient);


}),

};
;