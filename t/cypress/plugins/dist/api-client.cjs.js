(() => {
"use strict";
var __webpack_modules__ = ({
"./koha-tmpl/intranet-tmpl/prog/js/fetch/http-client.js": 
/*!**************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/http-client.js ***!
  \**************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function _ifDocumentAvailable(callback) {
    if (typeof document !== "undefined" && document.getElementById) {
        callback();
    }
}
var Dialog = /*#__PURE__*/ function() {
    "use strict";
    function Dialog() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _class_call_check(this, Dialog);
    }
    _create_class(Dialog, [
        {
            key: "_appendMessage",
            value: function _appendMessage(type, message) {
                _ifDocumentAvailable(function() {
                    var messagesContainer = document.getElementById("messages");
                    if (!messagesContainer) {
                        return;
                    }
                    var htmlString = '<div class="alert alert-'.concat(type, '">%s</div>').format(message);
                    messagesContainer.insertAdjacentHTML("beforeend", htmlString);
                });
            }
        },
        {
            key: "setMessage",
            value: function setMessage(message) {
                this._appendMessage("info", message);
            }
        },
        {
            key: "setError",
            value: function setError(error) {
                this._appendMessage("warning", error);
            }
        }
    ]);
    return Dialog;
}();
var HttpClient = /*#__PURE__*/ function() {
    "use strict";
    function HttpClient() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _class_call_check(this, HttpClient);
        this._baseURL = options.baseURL || "";
        this._headers = options.headers || {
            // FIXME we actually need to merge the headers
            "Content-Type": "application/json;charset=utf-8",
            "X-Requested-With": "XMLHttpRequest"
        };
        this.csrf_token = this._getCsrfToken(options);
    }
    _create_class(HttpClient, [
        {
            key: "_getCsrfToken",
            value: function _getCsrfToken(options) {
                var token = null;
                _ifDocumentAvailable(function() {
                    var metaTag = document.querySelector('meta[name="csrf-token"]');
                    if (metaTag) {
                        token = metaTag.getAttribute("content");
                    }
                });
                return token !== null ? token : options.csrfToken || null;
            }
        },
        {
            key: "_fetchJSON",
            value: function _fetchJSON(_0) {
                return _async_to_generator(function(endpoint) {
                    var headers, options, return_response, mark_submitting, res, error;
                    var _arguments = arguments;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                headers = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {}, options = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {}, return_response = _arguments.length > 3 && _arguments[3] !== void 0 ? _arguments[3] : false, mark_submitting = _arguments.length > 4 && _arguments[4] !== void 0 ? _arguments[4] : false;
                                //if (mark_submitting) submitting();
                                return [
                                    4,
                                    fetch(this._baseURL + endpoint, _object_spread_props(_object_spread({}, options), {
                                        headers: _object_spread({}, this._headers, headers)
                                    })).then(function(response) {
                                        var _response_headers_get;
                                        var is_json = (_response_headers_get = response.headers.get("content-type")) === null || _response_headers_get === void 0 ? void 0 : _response_headers_get.includes("application/json");
                                        if (return_response || !is_json) {
                                            return response;
                                        }
                                        if (!response.ok) {
                                            return response.text().then(function(text) {
                                                var message;
                                                if (text && is_json) {
                                                    var json = JSON.parse(text);
                                                    message = json.error || json.errors.map(function(e) {
                                                        return e.message;
                                                    }).join("\n") || json;
                                                } else {
                                                    message = response.statusText;
                                                }
                                                throw new Error(message);
                                            });
                                        }
                                        return response.json();
                                    }).then(function(result) {
                                        res = result;
                                    }).catch(function(err) {
                                        error = err;
                                        new Dialog().setError(err);
                                        console.error(err);
                                    }).then(function() {
                                    //if (mark_submitting) submitted();
                                    })
                                ];
                            case 1:
                                _state.sent();
                                if (error) throw Error(error);
                                return [
                                    2,
                                    res
                                ];
                        }
                    });
                }).apply(this, arguments);
            }
        },
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _params_return_response, _params_mark_submitting;
                return this._fetchJSON(params.endpoint, params.headers, _object_spread_props(_object_spread({}, params.options), {
                    method: "GET"
                }), (_params_return_response = params.return_response) !== null && _params_return_response !== void 0 ? _params_return_response : false, (_params_mark_submitting = params.mark_submitting) !== null && _params_mark_submitting !== void 0 ? _params_mark_submitting : false);
            }
        },
        {
            key: "getAll",
            value: function getAll() {
                var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var url = params.endpoint + "?" + new URLSearchParams(_object_spread({
                    _per_page: -1
                }, params.params && params.params, params.query && {
                    q: JSON.stringify(params.query)
                }));
                var _params_return_response, _params_mark_submitting;
                return this._fetchJSON(url, params.headers, _object_spread_props(_object_spread({}, params.options), {
                    method: "GET"
                }), (_params_return_response = params.return_response) !== null && _params_return_response !== void 0 ? _params_return_response : false, (_params_mark_submitting = params.mark_submitting) !== null && _params_mark_submitting !== void 0 ? _params_mark_submitting : false);
            }
        },
        {
            key: "post",
            value: function post() {
                var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var body = params.body ? typeof params.body === "string" ? params.body : JSON.stringify(params.body) : undefined;
                var csrf_token = {
                    "CSRF-TOKEN": this.csrf_token
                };
                var headers = _object_spread({}, csrf_token, params.headers);
                var _params_return_response, _params_mark_submitting;
                return this._fetchJSON(params.endpoint, headers, _object_spread_props(_object_spread({}, params.options), {
                    body: body,
                    method: "POST"
                }), (_params_return_response = params.return_response) !== null && _params_return_response !== void 0 ? _params_return_response : false, (_params_mark_submitting = params.mark_submitting) !== null && _params_mark_submitting !== void 0 ? _params_mark_submitting : true);
            }
        },
        {
            key: "put",
            value: function put() {
                var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var body = params.body ? typeof params.body === "string" ? params.body : JSON.stringify(params.body) : undefined;
                var csrf_token = {
                    "CSRF-TOKEN": this.csrf_token
                };
                var headers = _object_spread({}, csrf_token, params.headers);
                var _params_return_response, _params_mark_submitting;
                return this._fetchJSON(params.endpoint, headers, _object_spread_props(_object_spread({}, params.options), {
                    body: body,
                    method: "PUT"
                }), (_params_return_response = params.return_response) !== null && _params_return_response !== void 0 ? _params_return_response : false, (_params_mark_submitting = params.mark_submitting) !== null && _params_mark_submitting !== void 0 ? _params_mark_submitting : true);
            }
        },
        {
            key: "delete",
            value: function _delete() {
                var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var csrf_token = {
                    "CSRF-TOKEN": this.csrf_token
                };
                var headers = _object_spread({}, csrf_token, params.headers);
                var _params_return_response, _params_mark_submitting;
                return this._fetchJSON(params.endpoint, headers, _object_spread_props(_object_spread({
                    parseResponse: false
                }, params.options), {
                    method: "DELETE"
                }), (_params_return_response = params.return_response) !== null && _params_return_response !== void 0 ? _params_return_response : true, (_params_mark_submitting = params.mark_submitting) !== null && _params_mark_submitting !== void 0 ? _params_mark_submitting : true);
            }
        }
    ]);
    return HttpClient;
}();
/* export default */ const __rspack_default_export = (HttpClient);


}),

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/ensure_chunk
(() => {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = (chunkId) => {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce((promises, key) => {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};
})();
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.u = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "" + chunkId + ".js"
}
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/require_chunk_loading
(() => {
var installedChunks = {"api-client.cjs": 1,};
// object to store loaded chunks
// "1" means "loaded", otherwise not loaded yet
var installChunk = (chunk) => {
	var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
	for (var moduleId in moreModules) {
		if (__webpack_require__.o(moreModules, moduleId)) {
		 __webpack_require__.m[moduleId] = moreModules[moduleId];
		}
	}
	if (runtime) runtime(__webpack_require__);
	for (var i = 0; i < chunkIds.length; i++) installedChunks[chunkIds[i]] = 1;
	
};// require() chunk loading for javascript
__webpack_require__.f.require = (chunkId, promises) => {
	// "1" is the signal for "already loaded"
	if (!installedChunks[chunkId]) {
		if (true) {
			installChunk(require("./" + __webpack_require__.u(chunkId)));
		} else installedChunks[chunkId] = 1;
	}
};
})();
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {

/*!*************************************************************!*\
  !*** ./koha-tmpl/intranet-tmpl/prog/js/fetch/api-client.js ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  APIClient: () => (APIClient),
  "default": () => (__rspack_default_export)
});
/* import */ var _http_client_js__rspack_import_0 = __webpack_require__(/*! ./http-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/http-client.js");
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}

/**
 * @template {object} T
 * @typedef {new (...args: unknown[]) => T} ClientConstructor
 */ /**
 * @template {object} T
 * @typedef {ClientConstructor<T> | { default: ClientConstructor<T> }} ClientModule
 */ /**
 * Determines whether a value can safely be treated as an object for property
 * access (including functions, which are callable objects in JS).
 *
 * @param {unknown} value
 * @returns {value is object | Function}
 */ var isObjectLike = function(value) {
    return (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && value !== null || typeof value === "function";
};
/**
 * Lazily instantiates an API client module the first time a consumer actually
 * uses it. Callers still interact with `APIClient.foo` synchronously, but under
 * the hood a proxy defers the dynamic `import()` until a method is invoked or a
 * promise chain is attached. This keeps existing call sites unchanged while
 * preventing every specialised client from being fetched on initial page load.
 *
 * @template {object} T
 * @param {() => Promise<ClientModule<T> | ClientConstructor<T>>} loader dynamic importer for the client module
 * @returns {T} proxy exposing the API client interface with lazy loading
 */ var createClientProxy = function(loader) {
    /** @type {Promise<T> | undefined} */ var instancePromise;
    /**
     * Extracts the client constructor from a dynamic import namespace.
     *
     * @param {ClientModule<T> | ClientConstructor<T>} namespace
     * @returns {ClientConstructor<T>}
     */ var resolveClientConstructor = function(namespace) {
        if (typeof namespace === "function") {
            return /** @type {ClientConstructor<T>} */ namespace;
        }
        if (isObjectLike(namespace)) {
            var maybeDefault = Reflect.get(/** @type {object} */ namespace, "default");
            if (typeof maybeDefault === "function") {
                return /** @type {ClientConstructor<T>} */ maybeDefault;
            }
        }
        throw new TypeError("API client module did not export a constructor");
    };
    /**
     * Resolves (or re-resolves after failure) the underlying client instance.
     *
     * @returns {Promise<T>} promise resolving to the concrete client
     */ var loadInstance = function() {
        if (!instancePromise) {
            instancePromise = loader().then(resolveClientConstructor).then(function(Client) {
                return new Client(_http_client_js__rspack_import_0["default"]);
            }).catch(function(error) {
                instancePromise = undefined;
                throw error;
            });
        }
        return instancePromise;
    };
    /**
     * Creates a proxy layer that defers property access and function calls
     * until the client instance is available while keeping the existing call
     * structure intact (including promise chaining support).
     *
     * @param {(client: T) => unknown} accessor resolver for the current target
     * @param {(client: T) => unknown} [parentAccessor=accessor] context resolver
     * @returns {unknown} proxy forwarding operations to the resolved target
     */ var createProxy = function(accessor) {
        var parentAccessor = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : accessor;
        /**
         * Forwards promise chaining when consumers treat the proxy like a promise.
         *
         * @param {(value: unknown) => unknown} onFulfilled
         * @param {(reason: unknown) => unknown} [onRejected]
         * @returns {Promise<unknown>}
         */ var handleThen = function(onFulfilled, onRejected) {
            return loadInstance().then(function(client) {
                return accessor(client);
            }).then(onFulfilled, onRejected);
        };
        /**
         * Propagates errors when consumers attach a catch handler to the proxy.
         *
         * @param {(reason: unknown) => unknown} onRejected
         * @returns {Promise<unknown>}
         */ var handleCatch = function(onRejected) {
            return loadInstance().then(function(client) {
                return accessor(client);
            }).catch(onRejected);
        };
        /**
         * Executes finally handlers while preserving the resolved value chain.
         *
         * @param {() => unknown} onFinally
         * @returns {Promise<unknown>}
         */ var handleFinally = function(onFinally) {
            return loadInstance().then(function(client) {
                return accessor(client);
            }).finally(onFinally);
        };
        /**
         * Returns a proxy that represents a nested property on the client.
         *
         * @param {PropertyKey} prop
         * @returns {unknown}
         */ var forwardProperty = function(prop) {
            return createProxy(function(client) {
                var target = accessor(client);
                if (!isObjectLike(target)) {
                    return undefined;
                }
                return Reflect.get(/** @type {object} */ target, prop);
            }, accessor);
        };
        /**
         * Invokes a method on the resolved client while keeping the original
         * `this` binding semantics.
         *
         * @param {unknown} thisArg
         * @param {unknown[]} argArray
         * @returns {Promise<unknown>}
         */ var invokeTarget = function(thisArg, argArray) {
            return loadInstance().then(function(client) {
                var target = accessor(client);
                if (typeof target !== "function") {
                    throw new TypeError("API client property is not callable");
                }
                var context = parentAccessor ? parentAccessor(client) : thisArg !== null && thisArg !== void 0 ? thisArg : undefined;
                return target.apply(context, argArray);
            });
        };
        return new Proxy(function() {}, {
            get: function get(_, prop) {
                if (prop === "then") {
                    return handleThen;
                }
                if (prop === "catch") {
                    return handleCatch;
                }
                if (prop === "finally") {
                    return handleFinally;
                }
                return forwardProperty(prop);
            },
            apply: function apply(_, thisArg, args) {
                return invokeTarget(thisArg, /** @type {unknown[]} */ args);
            }
        });
    };
    return /** @type {T} */ createProxy(function(client) {
        return client;
    });
};
var APIClient = {
    article_request: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_article-request-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./article-request-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/article-request-api-client.js"));
    }),
    authorised_values: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_authorised-values-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./authorised-values-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/authorised-values-api-client.js"));
    }),
    acquisition: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_acquisition-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./acquisition-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/acquisition-api-client.js"));
    }),
    cataloguing: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_cataloguing-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./cataloguing-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/cataloguing-api-client.js"));
    }),
    circulation: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_circulation-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./circulation-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/circulation-api-client.js"));
    }),
    club: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_club-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./club-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/club-api-client.js"));
    }),
    cover_image: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_cover-image-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./cover-image-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/cover-image-api-client.js"));
    }),
    localization: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_localization-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./localization-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/localization-api-client.js"));
    }),
    patron: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_patron-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./patron-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/patron-api-client.js"));
    }),
    patron_list: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_patron-list-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./patron-list-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/patron-list-api-client.js"));
    }),
    recall: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_recall-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./recall-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/recall-api-client.js"));
    }),
    sysprefs: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_system-preferences-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./system-preferences-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/system-preferences-api-client.js"));
    }),
    ticket: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_ticket-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ticket-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/ticket-api-client.js"));
    }),
    default: createClientProxy(function() {
        return __webpack_require__.e(/*! import() */ "koha-tmpl_intranet-tmpl_prog_js_fetch_default-api-client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./default-api-client.js */ "./koha-tmpl/intranet-tmpl/prog/js/fetch/default-api-client.js"));
    })
};
/* export default */ const __rspack_default_export = (APIClient);

})();

var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, '__esModule', { value: true });
})()
;