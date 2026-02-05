"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_ticket-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/ticket-api-client.js": 
/*!********************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/ticket-api-client.js ***!
  \********************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TicketAPIClient: () => (TicketAPIClient),
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
var TicketAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function TicketAPIClient(HttpClient) {
        _class_call_check(this, TicketAPIClient);
        this.httpClient = new HttpClient({
            baseURL: "/cgi-bin/koha/svc/"
        });
    }
    _create_class(TicketAPIClient, [
        {
            key: "tickets",
            get: function get() {
                var _this = this;
                return {
                    mark_as_viewed: function(ticket_id) {
                        return _this.httpClient.post({
                            endpoint: "problem_reports",
                            body: "report_id=%s&op=%s".format(ticket_id, "cud-viewed"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    mark_as_closed: function(ticket_id) {
                        return _this.httpClient.post({
                            endpoint: "problem_reports",
                            body: "report_id=%s&op=%s".format(ticket_id, "cud-closed"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    mark_as_new: function(ticket_id) {
                        return _this.httpClient.post({
                            endpoint: "problem_reports",
                            body: "report_id=%s&op=%s".format(ticket_id, "cud-new"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    }
                };
            }
        }
    ]);
    return TicketAPIClient;
}();
/* export default */ const __rspack_default_export = (TicketAPIClient);


}),

};
;