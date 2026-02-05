"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_article-request-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/article-request-api-client.js": 
/*!*****************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/article-request-api-client.js ***!
  \*****************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ArticleRequestAPIClient: () => (ArticleRequestAPIClient),
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
var ArticleRequestAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function ArticleRequestAPIClient(HttpClient) {
        _class_call_check(this, ArticleRequestAPIClient);
        this.httpClient = new HttpClient({
            baseURL: "/cgi-bin/koha/svc/article_request",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            }
        });
    }
    _create_class(ArticleRequestAPIClient, [
        {
            key: "articleRequests",
            get: function get() {
                var _this = this;
                return {
                    process: function(id) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "id=%s&op=%s".format(id, "cud-process")
                        });
                    },
                    complete: function(id) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "id=%s&op=%s".format(id, "cud-complete")
                        });
                    },
                    pending: function(id) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "id=%s&op=%s".format(id, "cud-pending")
                        });
                    },
                    update_urls: function(id, urls) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "id=%s&urls=%s&op=%s".format(id, urls, "cud-update_urls")
                        });
                    },
                    update_library_id: function(id, library_id) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "id=%s&library_id=%s&op=%s".format(id, library_id, "cud-update_library_id")
                        });
                    }
                };
            }
        }
    ]);
    return ArticleRequestAPIClient;
}();
/* export default */ const __rspack_default_export = (ArticleRequestAPIClient);


}),

};
;