"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_cataloguing-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/cataloguing-api-client.js": 
/*!*************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/cataloguing-api-client.js ***!
  \*************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CataloguingAPIClient: () => (CataloguingAPIClient),
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
var CataloguingAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function CataloguingAPIClient(HttpClient) {
        _class_call_check(this, CataloguingAPIClient);
        this.httpClient = new HttpClient({
            baseURL: "/cgi-bin/koha/svc/"
        });
    }
    _create_class(CataloguingAPIClient, [
        {
            key: "catalog_bib",
            get: function get() {
                var _this = this;
                return {
                    create: function(bib_info) {
                        return _this.httpClient.post({
                            endpoint: "new_bib/?frameworkcode=%s".format(bib_info.frameworkcode),
                            body: bib_info.record.toXML(),
                            headers: {
                                "Content-Type": "text/xml"
                            }
                        });
                    },
                    update: function(bib_info) {
                        return _this.httpClient.post({
                            endpoint: "bib/%s?frameworkcode=%s".format(bib_info.id, bib_info.frameworkcode),
                            body: bib_info.record.toXML(),
                            headers: {
                                "Content-Type": "text/xml"
                            }
                        });
                    }
                };
            }
        }
    ]);
    return CataloguingAPIClient;
}();
/* export default */ const __rspack_default_export = (CataloguingAPIClient);


}),

};
;