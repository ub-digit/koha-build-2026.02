"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_recall-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/recall-api-client.js": 
/*!********************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/recall-api-client.js ***!
  \********************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RecallAPIClient: () => (RecallAPIClient),
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
var RecallAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function RecallAPIClient(HttpClient) {
        _class_call_check(this, RecallAPIClient);
        this.httpClient = new HttpClient({
            baseURL: "/cgi-bin/koha/svc/recall"
        });
    }
    _create_class(RecallAPIClient, [
        {
            key: "recalls",
            get: function get() {
                var _this = this;
                return {
                    cancel: function(recall_id) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "recall_id=%s&op=%s".format(recall_id, "cud-cancel"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    expire: function(recall_id) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "recall_id=%s&op=%s".format(recall_id, "cud-expire"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    revert: function(recall_id) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "recall_id=%s&op=%s".format(recall_id, "cud-revert"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    overdue: function(recall_id) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "recall_id=%s&op=%s".format(recall_id, "cud-overdue"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    transit: function(recall_id) {
                        return _this.httpClient.post({
                            endpoint: "",
                            body: "recall_id=%s&op=%s".format(recall_id, "cud-transit"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    }
                };
            }
        }
    ]);
    return RecallAPIClient;
}();
/* export default */ const __rspack_default_export = (RecallAPIClient);


}),

};
;