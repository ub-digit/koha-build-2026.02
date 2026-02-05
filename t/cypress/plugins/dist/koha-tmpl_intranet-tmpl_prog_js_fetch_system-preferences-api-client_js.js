"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_system-preferences-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/system-preferences-api-client.js": 
/*!********************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/system-preferences-api-client.js ***!
  \********************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SysprefAPIClient: () => (SysprefAPIClient),
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
var SysprefAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function SysprefAPIClient(HttpClient) {
        _class_call_check(this, SysprefAPIClient);
        this.httpClient = new HttpClient({
            baseURL: "/cgi-bin/koha/svc/config/systempreferences"
        });
    }
    _create_class(SysprefAPIClient, [
        {
            key: "sysprefs",
            get: function get() {
                var _this = this;
                return {
                    get: function(variable) {
                        return _this.httpClient.get({
                            endpoint: "/?pref=" + variable
                        });
                    },
                    update: function(variable, value) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "pref_%s=%s".format(encodeURIComponent(variable), encodeURIComponent(value)),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    update_all: function(sysprefs) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: Object.keys(sysprefs).map(function(variable) {
                                return sysprefs[variable].length ? sysprefs[variable].map(function(value) {
                                    return "%s=%s".format(variable, encodeURIComponent(value));
                                }) : "%s=".format(variable);
                            }).flat(Infinity).join("&"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    }
                };
            }
        }
    ]);
    return SysprefAPIClient;
}();
/* export default */ const __rspack_default_export = (SysprefAPIClient);


}),

};
;