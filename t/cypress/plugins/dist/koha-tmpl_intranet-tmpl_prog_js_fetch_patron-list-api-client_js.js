"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_patron-list-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/patron-list-api-client.js": 
/*!*************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/patron-list-api-client.js ***!
  \*************************************************************************/
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
            baseURL: "/cgi-bin/koha/svc/"
        });
    }
    _create_class(PatronAPIClient, [
        {
            key: "lists",
            get: function get() {
                var _this = this;
                return {
                    add_patrons: function(param) {
                        var patron_ids = param.patron_ids, list_id = param.list_id, new_list_name = param.new_list_name;
                        return _this.httpClient.post({
                            endpoint: "members/add_to_list",
                            body: "add_to_patron_list=%s&new_patron_list=%s&%s".format(list_id, new_list_name, patron_ids.map(function(id) {
                                return "borrowernumber=%s".format(id);
                            }).join("&")),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
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