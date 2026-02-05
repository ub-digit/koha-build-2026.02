"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_circulation-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/circulation-api-client.js": 
/*!*************************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/circulation-api-client.js ***!
  \*************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CirculationAPIClient: () => (CirculationAPIClient),
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
var CirculationAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function CirculationAPIClient(HttpClient) {
        _class_call_check(this, CirculationAPIClient);
        this.httpClient = new HttpClient({
            baseURL: "/cgi-bin/koha/svc/"
        });
    }
    _create_class(CirculationAPIClient, [
        {
            key: "checkins",
            get: function get() {
                var _this = this;
                return {
                    create: function(checkin) {
                        return _this.httpClient.post({
                            endpoint: "checkin",
                            body: "itemnumber=%s&borrowernumber=%s&branchcode=%s&exempt_fine=%s&op=%s".format(checkin.item_id, checkin.patron_id, checkin.library_id, checkin.exempt_fine, "cud-checkin"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    }
                };
            }
        },
        {
            key: "checkouts",
            get: function get() {
                var _this = this;
                return {
                    renew: function(checkout) {
                        return _this.httpClient.post({
                            endpoint: "renew",
                            body: "itemnumber=%s&borrowernumber=%s&branchcode=%s&override_limit=%s".format(checkout.item_id, checkout.patron_id, checkout.library_id, checkout.override_limit) + (checkout.seen !== undefined ? "&seen=%s".format(checkout.seen) : "") + (checkout.date_due !== undefined ? "&date_due=%s".format(checkout.date_due) : ""),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    mark_as_seen: function(checkout_id) {
                        return _this.httpClient.post({
                            endpoint: "checkout_notes",
                            body: "issue_id=%s&op=%s".format(checkout_id, "cud-seen"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    mark_as_not_seen: function(checkout_id) {
                        return _this.httpClient.post({
                            endpoint: "checkout_notes",
                            body: "issue_id=%s&op=%s".format(checkout_id, "cud-notseen"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    }
                };
            }
        }
    ]);
    return CirculationAPIClient;
}();
/* export default */ const __rspack_default_export = (CirculationAPIClient);


}),

};
;