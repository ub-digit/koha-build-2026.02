"use strict";
exports.ids = ["koha-tmpl_intranet-tmpl_prog_js_fetch_club-api-client_js"];
exports.modules = {
"./koha-tmpl/intranet-tmpl/prog/js/fetch/club-api-client.js": 
/*!******************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/club-api-client.js ***!
  \******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ClubAPIClient: () => (ClubAPIClient),
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
var ClubAPIClient = /*#__PURE__*/ function() {
    "use strict";
    function ClubAPIClient(HttpClient) {
        _class_call_check(this, ClubAPIClient);
        this.httpClient = new HttpClient({
            baseURL: "/cgi-bin/koha/svc/club/"
        });
    }
    _create_class(ClubAPIClient, [
        {
            key: "templates",
            get: function get() {
                var _this = this;
                return {
                    delete: function(template_id) {
                        return _this.httpClient.post({
                            endpoint: "template/delete",
                            body: "id=%s&op=%s".format(template_id, "cud-delete"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    }
                };
            }
        },
        {
            key: "clubs",
            get: function get() {
                var _this = this;
                return {
                    delete: function(club_id) {
                        return _this.httpClient.post({
                            endpoint: "delete",
                            body: "id=%s&op=%s".format(club_id, "cud-delete"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    }
                };
            }
        },
        {
            key: "enrollments",
            get: function get() {
                var _this = this;
                return {
                    cancel: function(enrollment_id) {
                        return _this.httpClient.post({
                            endpoint: "cancel_enrollment",
                            body: "id=%s&op=%s".format(enrollment_id, "cud-delete"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    },
                    enroll: function(data) {
                        return _this.httpClient.post({
                            endpoint: "enroll",
                            body: "%s&op=%s".format(data, "cud-enroll"),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                            }
                        });
                    }
                };
            }
        }
    ]);
    return ClubAPIClient;
}();
/* export default */ const __rspack_default_export = (ClubAPIClient);


}),

};
;