"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_localization-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/localization-api-client.js": 
/*!**************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/localization-api-client.js ***!
  \**************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LocalizationAPIClient: () => (LocalizationAPIClient),
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
var LocalizationAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function LocalizationAPIClient(HttpClient) {
        _class_call_check(this, LocalizationAPIClient);
        this.httpClient = new HttpClient({
            baseURL: "/cgi-bin/koha/svc/localization"
        });
    }
    _create_class(LocalizationAPIClient, [
        {
            key: "localizations",
            get: function get() {
                var _this = this;
                return {
                    create: function(localization) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "entity=%s&code=%s&lang=%s&translation=%s".format(encodeURIComponent(localization.entity), encodeURIComponent(localization.code), encodeURIComponent(localization.lang), encodeURIComponent(localization.translation)),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    update: function(localization) {
                        return _this.httpClient.put({
                            endpoint: "",
                            body: "id=%s&lang=%s&translation=%s".format(encodeURIComponent(localization.id), encodeURIComponent(localization.lang), encodeURIComponent(localization.translation)),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    delete: function(id) {
                        return _this.httpClient.delete({
                            endpoint: "/?id=%s".format(id),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    }
                };
            }
        }
    ]);
    return LocalizationAPIClient;
}();
/* export default */ const __rspack_default_export = (LocalizationAPIClient);


}),

};
;