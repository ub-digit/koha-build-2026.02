"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_cover-image-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/cover-image-api-client.js": 
/*!*************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/cover-image-api-client.js ***!
  \*************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CoverImageAPIClient: () => (CoverImageAPIClient),
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
var CoverImageAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function CoverImageAPIClient(HttpClient) {
        _class_call_check(this, CoverImageAPIClient);
        this.httpClient = new HttpClient({
            baseURL: "/cgi-bin/koha/svc/cover_images"
        });
    }
    _create_class(CoverImageAPIClient, [
        {
            key: "cover_images",
            get: function get() {
                var _this = this;
                return {
                    delete: function(image_id) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "imagenumber=%s&op=%s".format(image_id, "cud-delete"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    }
                };
            }
        }
    ]);
    return CoverImageAPIClient;
}();
/* export default */ const __rspack_default_export = (CoverImageAPIClient);


}),

};
;