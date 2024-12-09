!(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ?
        (module.exports = t()) :
        "function" == typeof define && define.amd ?
        define(t) :
        ((e = "undefined" != typeof globalThis ? globalThis : e || self).i18next = t());
})(this, function() {
    "use strict";

    function e(t) {
        return (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

            function(e) {
                return typeof e;
            } :
            function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(t);
    }

    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
    }

    function r(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
    }

    function o(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }

    function i(e, t) {
        return (i =
            Object.setPrototypeOf ||
            function(e, t) {
                return (e.__proto__ = t), e;
            })(e, t);
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
    }

    function s(t, n) {
        return !n || ("object" !== e(n) && "function" != typeof n) ? o(t) : n;
    }

    function u(e) {
        return (u = Object.setPrototypeOf ?
            Object.getPrototypeOf :
            function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }

    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ?
                l(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) :
                Object.getOwnPropertyDescriptors ?
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) :
                l(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
    }
    var p = {
            type: "logger",
            log: function(e) {
                this.output("log", e);
            },
            warn: function(e) {
                this.output("warn", e);
            },
            error: function(e) {
                this.output("error", e);
            },
            output: function(e, t) {
                console && console[e] && console[e].apply(console, t);
            },
        },
        g = new((function() {
            function e(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t(this, e), this.init(n, r);
            }
            return (
                r(e, [{
                        key: "init",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            (this.prefix = t.prefix || "i18next:"), (this.logger = e || p), (this.options = t), (this.debug = t.debug);
                        },
                    },
                    {
                        key: "setDebug",
                        value: function(e) {
                            this.debug = e;
                        },
                    },
                    {
                        key: "log",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "log", "", !0);
                        },
                    },
                    {
                        key: "warn",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "warn", "", !0);
                        },
                    },
                    {
                        key: "error",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "error", "");
                        },
                    },
                    {
                        key: "deprecate",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
                        },
                    },
                    {
                        key: "forward",
                        value: function(e, t, n, r) {
                            return r && !this.debug ?
                                null :
                                ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e));
                        },
                    },
                    {
                        key: "create",
                        value: function(t) {
                            return new e(this.logger, f(f({}, { prefix: "".concat(this.prefix, ":").concat(t, ":") }), this.options));
                        },
                    },
                ]),
                e
            );
        })())(),
        h = (function() {
            function e() {
                t(this, e), (this.observers = {});
            }
            return (
                r(e, [{
                        key: "on",
                        value: function(e, t) {
                            var n = this;
                            return (
                                e.split(" ").forEach(function(e) {
                                    (n.observers[e] = n.observers[e] || []), n.observers[e].push(t);
                                }),
                                this
                            );
                        },
                    },
                    {
                        key: "off",
                        value: function(e, t) {
                            this.observers[e] &&
                                (t ?
                                    (this.observers[e] = this.observers[e].filter(function(e) {
                                        return e !== t;
                                    })) :
                                    delete this.observers[e]);
                        },
                    },
                    {
                        key: "emit",
                        value: function(e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            this.observers[e] && [].concat(this.observers[e]).forEach(function(e) {
                                e.apply(void 0, n);
                            });
                            this.observers["*"] && [].concat(this.observers["*"]).forEach(function(t) {
                                t.apply(t, [e].concat(n));
                            });
                        },
                    },
                ]),
                e
            );
        })();

    function d() {
        var e,
            t,
            n = new Promise(function(n, r) {
                (e = n), (t = r);
            });
        return (n.resolve = e), (n.reject = t), n;
    }

    function v(e) {
        return null == e ? "" : "" + e;
    }

    function y(e, t, n) {
        function r(e) {
            return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
        }

        function o() {
            return !e || "string" == typeof e;
        }
        for (var i = "string" != typeof t ? [].concat(t) : t.split("."); i.length > 1;) {
            if (o()) return {};
            var a = r(i.shift());
            !e[a] && n && (e[a] = new n()), (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {});
        }
        return o() ? {} : { obj: e, k: r(i.shift()) };
    }

    function m(e, t, n) {
        var r = y(e, t, Object);
        r.obj[r.k] = n;
    }

    function b(e, t) {
        var n = y(e, t),
            r = n.obj,
            o = n.k;
        if (r) return r[o];
    }

    function O(e, t, n) {
        var r = b(e, n);
        return void 0 !== r ? r : b(t, n);
    }

    function k(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    var x = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };

    function S(e) {
        return "string" == typeof e ?
            e.replace(/[&<>"'\/]/g, function(e) {
                return x[e];
            }) :
            e;
    }
    var w = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
        j = [" ", ",", "?", "!", ";"];

    function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }

    function L(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ?
                P(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) :
                Object.getOwnPropertyDescriptors ?
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) :
                P(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
    }

    function R(e) {
        var t = (function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (e) {
                return !1;
            }
        })();
        return function() {
            var n,
                r = u(e);
            if (t) {
                var o = u(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return s(this, n);
        };
    }
    var N = (function(e) {
            a(i, h);
            var n = R(i);

            function i(e) {
                var r,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
                return (
                    t(this, i),
                    (r = n.call(this)),
                    w && h.call(o(r)),
                    (r.data = e || {}),
                    (r.options = a),
                    void 0 === r.options.keySeparator && (r.options.keySeparator = "."),
                    void 0 === r.options.ignoreJSONStructure && (r.options.ignoreJSONStructure = !0),
                    r
                );
            }
            return (
                r(i, [{
                        key: "addNamespaces",
                        value: function(e) {
                            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                        },
                    },
                    {
                        key: "removeNamespaces",
                        value: function(e) {
                            var t = this.options.ns.indexOf(e);
                            t > -1 && this.options.ns.splice(t, 1);
                        },
                    },
                    {
                        key: "getResource",
                        value: function(e, t, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                                i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure,
                                a = [e, t];
                            n && "string" != typeof n && (a = a.concat(n)),
                                n && "string" == typeof n && (a = a.concat(o ? n.split(o) : n)),
                                e.indexOf(".") > -1 && (a = e.split("."));
                            var s = b(this.data, a);
                            return s || !i || "string" != typeof n ?
                                s :
                                (function e(t, n) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                                    if (t) {
                                        if (t[n]) return t[n];
                                        for (var o = n.split(r), i = t, a = 0; a < o.length; ++a) {
                                            if (!i) return;
                                            if ("string" == typeof i[o[a]] && a + 1 < o.length) return;
                                            if (void 0 === i[o[a]]) {
                                                for (var s = 2, u = o.slice(a, a + s).join(r), c = i[u]; void 0 === c && o.length > a + s;)
                                                    s++, (c = i[(u = o.slice(a, a + s).join(r))]);
                                                if (void 0 === c) return;
                                                if ("string" == typeof c) return c;
                                                if (u && "string" == typeof c[u]) return c[u];
                                                var l = o.slice(a + s).join(r);
                                                return l ? e(c, l, r) : void 0;
                                            }
                                            i = i[o[a]];
                                        }
                                        return i;
                                    }
                                })(this.data && this.data[e] && this.data[e][t], n, o);
                        },
                    },
                    {
                        key: "addResource",
                        value: function(e, t, n, r) {
                            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: !1 },
                                i = this.options.keySeparator;
                            void 0 === i && (i = ".");
                            var a = [e, t];
                            n && (a = a.concat(i ? n.split(i) : n)),
                                e.indexOf(".") > -1 && ((r = t), (t = (a = e.split("."))[1])),
                                this.addNamespaces(t),
                                m(this.data, a, r),
                                o.silent || this.emit("added", e, t, n, r);
                        },
                    },
                    {
                        key: "addResources",
                        value: function(e, t, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: !1 };
                            for (var o in n)
                                ("string" != typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o])) ||
                                this.addResource(e, t, o, n[o], { silent: !0 });
                            r.silent || this.emit("added", e, t, n);
                        },
                    },
                    {
                        key: "addResourceBundle",
                        value: function(e, t, n, r, o) {
                            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : { silent: !1 },
                                a = [e, t];
                            e.indexOf(".") > -1 && ((r = n), (n = t), (t = (a = e.split("."))[1])), this.addNamespaces(t);
                            var s = b(this.data, a) || {};
                            r
                                ?
                                (function e(t, n, r) {
                                    for (var o in n)
                                        "__proto__" !== o &&
                                        "constructor" !== o &&
                                        (o in t ?
                                            "string" == typeof t[o] ||
                                            t[o] instanceof String ||
                                            "string" == typeof n[o] ||
                                            n[o] instanceof String ?
                                            r && (t[o] = n[o]) :
                                            e(t[o], n[o], r) :
                                            (t[o] = n[o]));
                                    return t;
                                })(s, n, o) :
                                (s = L(L({}, s), n)),
                                m(this.data, a, s),
                                i.silent || this.emit("added", e, t, n);
                        },
                    },
                    {
                        key: "removeResourceBundle",
                        value: function(e, t) {
                            this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
                        },
                    },
                    {
                        key: "hasResourceBundle",
                        value: function(e, t) {
                            return void 0 !== this.getResource(e, t);
                        },
                    },
                    {
                        key: "getResourceBundle",
                        value: function(e, t) {
                            return (
                                t || (t = this.options.defaultNS),
                                "v1" === this.options.compatibilityAPI ? L(L({}, {}), this.getResource(e, t)) : this.getResource(e, t)
                            );
                        },
                    },
                    {
                        key: "getDataByLanguage",
                        value: function(e) {
                            return this.data[e];
                        },
                    },
                    {
                        key: "hasLanguageSomeTranslations",
                        value: function(e) {
                            var t = this.getDataByLanguage(e);
                            return !!((t && Object.keys(t)) || []).find(function(e) {
                                return t[e] && Object.keys(t[e]).length > 0;
                            });
                        },
                    },
                    {
                        key: "toJSON",
                        value: function() {
                            return this.data;
                        },
                    },
                ]),
                i
            );
        })(),
        C = {
            processors: {},
            addPostProcessor: function(e) {
                this.processors[e.name] = e;
            },
            handle: function(e, t, n, r, o) {
                var i = this;
                return (
                    e.forEach(function(e) {
                        i.processors[e] && (t = i.processors[e].process(t, n, r, o));
                    }),
                    t
                );
            },
        };

    function E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }

    function D(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ?
                E(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) :
                Object.getOwnPropertyDescriptors ?
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) :
                E(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
    }

    function F(e) {
        var t = (function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (e) {
                return !1;
            }
        })();
        return function() {
            var n,
                r = u(e);
            if (t) {
                var o = u(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return s(this, n);
        };
    }
    var I = {},
        A = (function(n) {
            a(s, h);
            var i = F(s);

            function s(e) {
                var n,
                    r,
                    a,
                    u,
                    c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (
                    t(this, s),
                    (n = i.call(this)),
                    w && h.call(o(n)),
                    (r = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"]),
                    (a = e),
                    (u = o(n)),
                    r.forEach(function(e) {
                        a[e] && (u[e] = a[e]);
                    }),
                    (n.options = c),
                    void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
                    (n.logger = g.create("translator")),
                    n
                );
            }
            return (
                r(
                    s, [{
                            key: "changeLanguage",
                            value: function(e) {
                                e && (this.language = e);
                            },
                        },
                        {
                            key: "exists",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} };
                                if (null == e) return !1;
                                var n = this.resolve(e, t);
                                return n && void 0 !== n.res;
                            },
                        },
                        {
                            key: "extractFromKey",
                            value: function(e, t) {
                                var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                                void 0 === n && (n = ":");
                                var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                    o = t.ns || this.options.defaultNS,
                                    i = n && e.indexOf(n) > -1,
                                    a = !(
                                        this.options.userDefinedKeySeparator ||
                                        t.keySeparator ||
                                        this.options.userDefinedNsSeparator ||
                                        t.nsSeparator ||
                                        (function(e, t, n) {
                                            (t = t || ""), (n = n || "");
                                            var r = j.filter(function(e) {
                                                return t.indexOf(e) < 0 && n.indexOf(e) < 0;
                                            });
                                            if (0 === r.length) return !0;
                                            var o = new RegExp(
                                                    "(".concat(
                                                        r
                                                        .map(function(e) {
                                                            return "?" === e ? "\\?" : e;
                                                        })
                                                        .join("|"),
                                                        ")"
                                                    )
                                                ),
                                                i = !o.test(e);
                                            if (!i) {
                                                var a = e.indexOf(n);
                                                a > 0 && !o.test(e.substring(0, a)) && (i = !0);
                                            }
                                            return i;
                                        })(e, n, r)
                                    );
                                if (i && !a) {
                                    var s = e.match(this.interpolator.nestingRegexp);
                                    if (s && s.length > 0) return { key: e, namespaces: o };
                                    var u = e.split(n);
                                    (n !== r || (n === r && this.options.ns.indexOf(u[0]) > -1)) && (o = u.shift()), (e = u.join(r));
                                }
                                return "string" == typeof o && (o = [o]), { key: e, namespaces: o };
                            },
                        },
                        {
                            key: "translate",
                            value: function(t, n, r) {
                                var o = this;
                                if (
                                    ("object" !== e(n) &&
                                        this.options.overloadTranslationOptionHandler &&
                                        (n = this.options.overloadTranslationOptionHandler(arguments)),
                                        n || (n = {}),
                                        null == t)
                                )
                                    return "";
                                Array.isArray(t) || (t = [String(t)]);
                                var i = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                    a = this.extractFromKey(t[t.length - 1], n),
                                    u = a.key,
                                    c = a.namespaces,
                                    l = c[c.length - 1],
                                    f = n.lng || this.language,
                                    p = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                                if (f && "cimode" === f.toLowerCase()) {
                                    if (p) {
                                        var g = n.nsSeparator || this.options.nsSeparator;
                                        return l + g + u;
                                    }
                                    return u;
                                }
                                var h = this.resolve(t, n),
                                    d = h && h.res,
                                    v = (h && h.usedKey) || u,
                                    y = (h && h.exactUsedKey) || u,
                                    m = Object.prototype.toString.apply(d),
                                    b = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                                    O = !this.i18nFormat || this.i18nFormat.handleAsObject;
                                if (
                                    O &&
                                    d &&
                                    "string" != typeof d &&
                                    "boolean" != typeof d &&
                                    "number" != typeof d && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(m) < 0 &&
                                    ("string" != typeof b || "[object Array]" !== m)
                                ) {
                                    if (!n.returnObjects && !this.options.returnObjects)
                                        return (
                                            this.options.returnedObjectHandler ||
                                            this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                                            this.options.returnedObjectHandler ?
                                            this.options.returnedObjectHandler(v, d, D(D({}, n), {}, { ns: c })) :
                                            "key '".concat(u, " (").concat(this.language, ")' returned an object instead of string.")
                                        );
                                    if (i) {
                                        var k = "[object Array]" === m,
                                            x = k ? [] : {},
                                            S = k ? y : v;
                                        for (var w in d)
                                            if (Object.prototype.hasOwnProperty.call(d, w)) {
                                                var j = "".concat(S).concat(i).concat(w);
                                                (x[w] = this.translate(j, D(D({}, n), { joinArrays: !1, ns: c }))), x[w] === j && (x[w] = d[w]);
                                            }
                                        d = x;
                                    }
                                } else if (O && "string" == typeof b && "[object Array]" === m)
                                    (d = d.join(b)) && (d = this.extendTranslation(d, t, n, r));
                                else {
                                    var P = !1,
                                        L = !1,
                                        R = void 0 !== n.count && "string" != typeof n.count,
                                        N = s.hasDefaultValue(n),
                                        C = R ? this.pluralResolver.getSuffix(f, n.count, n) : "",
                                        E = n["defaultValue".concat(C)] || n.defaultValue;
                                    !this.isValidLookup(d) && N && ((P = !0), (d = E)), this.isValidLookup(d) || ((L = !0), (d = u));
                                    var F = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && L ? void 0 : d,
                                        I = N && E !== d && this.options.updateMissing;
                                    if (L || P || I) {
                                        if ((this.logger.log(I ? "updateKey" : "missingKey", f, l, u, I ? E : d), i)) {
                                            var A = this.resolve(u, D(D({}, n), {}, { keySeparator: !1 }));
                                            A &&
                                                A.res &&
                                                this.logger.warn(
                                                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                                                );
                                        }
                                        var T = [],
                                            V = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                                        if ("fallback" === this.options.saveMissingTo && V && V[0])
                                            for (var U = 0; U < V.length; U++) T.push(V[U]);
                                        else
                                            "all" === this.options.saveMissingTo ?
                                            (T = this.languageUtils.toResolveHierarchy(n.lng || this.language)) :
                                            T.push(n.lng || this.language);
                                        var B = function(e, t, r) {
                                            var i = N && r !== d ? r : F;
                                            o.options.missingKeyHandler ?
                                                o.options.missingKeyHandler(e, l, t, i, I, n) :
                                                o.backendConnector &&
                                                o.backendConnector.saveMissing &&
                                                o.backendConnector.saveMissing(e, l, t, i, I, n),
                                                o.emit("missingKey", e, l, t, d);
                                        };
                                        this.options.saveMissing &&
                                            (this.options.saveMissingPlurals && R ?
                                                T.forEach(function(e) {
                                                    o.pluralResolver.getSuffixes(e).forEach(function(t) {
                                                        B([e], u + t, n["defaultValue".concat(t)] || E);
                                                    });
                                                }) :
                                                B(T, u, E));
                                    }
                                    (d = this.extendTranslation(d, t, n, h, r)),
                                    L && d === u && this.options.appendNamespaceToMissingKey && (d = "".concat(l, ":").concat(u)),
                                        (L || P) && this.options.parseMissingKeyHandler && (d = this.options.parseMissingKeyHandler(d));
                                }
                                return d;
                            },
                        },
                        {
                            key: "extendTranslation",
                            value: function(e, t, n, r, o) {
                                var i = this;
                                if (this.i18nFormat && this.i18nFormat.parse)
                                    e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, { resolved: r });
                                else if (!n.skipInterpolation) {
                                    n.interpolation &&
                                        this.interpolator.init(D(D({}, n), { interpolation: D(D({}, this.options.interpolation), n.interpolation) }));
                                    var a,
                                        s =
                                        "string" == typeof e &&
                                        ((n.interpolation && n.interpolation.skipOnVariables) || this.options.interpolation.skipOnVariables);
                                    if (s) {
                                        var u = e.match(this.interpolator.nestingRegexp);
                                        a = u && u.length;
                                    }
                                    var c = n.replace && "string" != typeof n.replace ? n.replace : n;
                                    if (
                                        (this.options.interpolation.defaultVariables &&
                                            (c = D(D({}, this.options.interpolation.defaultVariables), c)),
                                            (e = this.interpolator.interpolate(e, c, n.lng || this.language, n)),
                                            s)
                                    ) {
                                        var l = e.match(this.interpolator.nestingRegexp);
                                        a < (l && l.length) && (n.nest = !1);
                                    }!1 !== n.nest &&
                                        (e = this.interpolator.nest(
                                            e,
                                            function() {
                                                for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
                                                return o && o[0] === r[0] && !n.context ?
                                                    (i.logger.warn(
                                                            "It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(t[0])
                                                        ),
                                                        null) :
                                                    i.translate.apply(i, r.concat([t]));
                                            },
                                            n
                                        )),
                                        n.interpolation && this.interpolator.reset();
                                }
                                var f = n.postProcess || this.options.postProcess,
                                    p = "string" == typeof f ? [f] : f;
                                return (
                                    null != e &&
                                    p &&
                                    p.length &&
                                    !1 !== n.applyPostProcessor &&
                                    (e = C.handle(
                                        p,
                                        e,
                                        t,
                                        this.options && this.options.postProcessPassResolved ? D({ i18nResolved: r }, n) : n,
                                        this
                                    )),
                                    e
                                );
                            },
                        },
                        {
                            key: "resolve",
                            value: function(e) {
                                var t,
                                    n,
                                    r,
                                    o,
                                    i,
                                    a = this,
                                    s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return (
                                    "string" == typeof e && (e = [e]),
                                    e.forEach(function(e) {
                                        if (!a.isValidLookup(t)) {
                                            var u = a.extractFromKey(e, s),
                                                c = u.key;
                                            n = c;
                                            var l = u.namespaces;
                                            a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                                            var f = void 0 !== s.count && "string" != typeof s.count,
                                                p = f && !s.ordinal && 0 === s.count && a.pluralResolver.shouldUseIntlApi(),
                                                g =
                                                void 0 !== s.context &&
                                                ("string" == typeof s.context || "number" == typeof s.context) &&
                                                "" !== s.context,
                                                h = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                                            l.forEach(function(e) {
                                                a.isValidLookup(t) ||
                                                    ((i = e), !I["".concat(h[0], "-").concat(e)] &&
                                                        a.utils &&
                                                        a.utils.hasLoadedNamespace &&
                                                        !a.utils.hasLoadedNamespace(i) &&
                                                        ((I["".concat(h[0], "-").concat(e)] = !0),
                                                            a.logger.warn(
                                                                'key "'
                                                                .concat(n, '" for languages "')
                                                                .concat(h.join(", "), '" won\'t get resolved as namespace "')
                                                                .concat(i, '" was not yet loaded'),
                                                                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                                            )),
                                                        h.forEach(function(n) {
                                                            if (!a.isValidLookup(t)) {
                                                                o = n;
                                                                var i,
                                                                    u = [c];
                                                                if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                                                    a.i18nFormat.addLookupKeys(u, c, n, e, s);
                                                                else {
                                                                    var l;
                                                                    f && (l = a.pluralResolver.getSuffix(n, s.count, s));
                                                                    if ((f && (u.push(c + l), p && u.push(c + "_zero")), g)) {
                                                                        var h = "".concat(c).concat(a.options.contextSeparator).concat(s.context);
                                                                        u.push(h), f && (u.push(h + l), p && u.push(h + "_zero"));
                                                                    }
                                                                }
                                                                for (;
                                                                    (i = u.pop());)
                                                                    a.isValidLookup(t) || ((r = i), (t = a.getResource(n, e, i, s)));
                                                            }
                                                        }));
                                            });
                                        }
                                    }), { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: i }
                                );
                            },
                        },
                        {
                            key: "isValidLookup",
                            value: function(e) {
                                return !(void 0 === e || (!this.options.returnNull && null === e) || (!this.options.returnEmptyString && "" === e));
                            },
                        },
                        {
                            key: "getResource",
                            value: function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                return this.i18nFormat && this.i18nFormat.getResource ?
                                    this.i18nFormat.getResource(e, t, n, r) :
                                    this.resourceStore.getResource(e, t, n, r);
                            },
                        },
                    ], [{
                        key: "hasDefaultValue",
                        value: function(e) {
                            for (var t in e)
                                if (
                                    Object.prototype.hasOwnProperty.call(e, t) &&
                                    "defaultValue" === t.substring(0, "defaultValue".length) &&
                                    void 0 !== e[t]
                                )
                                    return !0;
                            return !1;
                        },
                    }, ]
                ),
                s
            );
        })();

    function T(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
    }
    var V = (function() {
            function e(n) {
                t(this, e), (this.options = n), (this.supportedLngs = this.options.supportedLngs || !1), (this.logger = g.create("languageUtils"));
            }
            return (
                r(e, [{
                        key: "getScriptPartFromCode",
                        value: function(e) {
                            if (!e || e.indexOf("-") < 0) return null;
                            var t = e.split("-");
                            return 2 === t.length ?
                                null :
                                (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")));
                        },
                    },
                    {
                        key: "getLanguagePartFromCode",
                        value: function(e) {
                            if (!e || e.indexOf("-") < 0) return e;
                            var t = e.split("-");
                            return this.formatLanguageCode(t[0]);
                        },
                    },
                    {
                        key: "formatLanguageCode",
                        value: function(e) {
                            if ("string" == typeof e && e.indexOf("-") > -1) {
                                var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                    n = e.split("-");
                                return (
                                    this.options.lowerCaseLng ?
                                    (n = n.map(function(e) {
                                        return e.toLowerCase();
                                    })) :
                                    2 === n.length ?
                                    ((n[0] = n[0].toLowerCase()),
                                        (n[1] = n[1].toUpperCase()),
                                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = T(n[1].toLowerCase()))) :
                                    3 === n.length &&
                                    ((n[0] = n[0].toLowerCase()),
                                        2 === n[1].length && (n[1] = n[1].toUpperCase()),
                                        "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = T(n[1].toLowerCase())),
                                        t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = T(n[2].toLowerCase()))),
                                    n.join("-")
                                );
                            }
                            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
                        },
                    },
                    {
                        key: "isSupportedCode",
                        value: function(e) {
                            return (
                                ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) &&
                                (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                            );
                        },
                    },
                    {
                        key: "getBestMatchFromCodes",
                        value: function(e) {
                            var t,
                                n = this;
                            return e ?
                                (e.forEach(function(e) {
                                        if (!t) {
                                            var r = n.formatLanguageCode(e);
                                            (n.options.supportedLngs && !n.isSupportedCode(r)) || (t = r);
                                        }
                                    }), !t &&
                                    this.options.supportedLngs &&
                                    e.forEach(function(e) {
                                        if (!t) {
                                            var r = n.getLanguagePartFromCode(e);
                                            if (n.isSupportedCode(r)) return (t = r);
                                            t = n.options.supportedLngs.find(function(e) {
                                                if (0 === e.indexOf(r)) return e;
                                            });
                                        }
                                    }),
                                    t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                                    t) :
                                null;
                        },
                    },
                    {
                        key: "getFallbackCodes",
                        value: function(e, t) {
                            if (!e) return [];
                            if (
                                ("function" == typeof e && (e = e(t)),
                                    "string" == typeof e && (e = [e]),
                                    "[object Array]" === Object.prototype.toString.apply(e))
                            )
                                return e;
                            if (!t) return e.default || [];
                            var n = e[t];
                            return (
                                n || (n = e[this.getScriptPartFromCode(t)]),
                                n || (n = e[this.formatLanguageCode(t)]),
                                n || (n = e[this.getLanguagePartFromCode(t)]),
                                n || (n = e.default),
                                n || []
                            );
                        },
                    },
                    {
                        key: "toResolveHierarchy",
                        value: function(e, t) {
                            var n = this,
                                r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                                o = [],
                                i = function(e) {
                                    e &&
                                        (n.isSupportedCode(e) ?
                                            o.push(e) :
                                            n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)));
                                };
                            return (
                                "string" == typeof e && e.indexOf("-") > -1 ?
                                ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)),
                                    "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)),
                                    "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) :
                                "string" == typeof e && i(this.formatLanguageCode(e)),
                                r.forEach(function(e) {
                                    o.indexOf(e) < 0 && i(n.formatLanguageCode(e));
                                }),
                                o
                            );
                        },
                    },
                ]),
                e
            );
        })(),
        U = [{
                lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                nr: [1, 2],
                fc: 1,
            },
            {
                lngs: [
                    "af",
                    "an",
                    "ast",
                    "az",
                    "bg",
                    "bn",
                    "ca",
                    "da",
                    "de",
                    "dev",
                    "el",
                    "en",
                    "eo",
                    "es",
                    "et",
                    "eu",
                    "fi",
                    "fo",
                    "fur",
                    "fy",
                    "gl",
                    "gu",
                    "ha",
                    "hi",
                    "hu",
                    "hy",
                    "ia",
                    "it",
                    "kk",
                    "kn",
                    "ku",
                    "lb",
                    "mai",
                    "ml",
                    "mn",
                    "mr",
                    "nah",
                    "nap",
                    "nb",
                    "ne",
                    "nl",
                    "nn",
                    "no",
                    "nso",
                    "pa",
                    "pap",
                    "pms",
                    "ps",
                    "pt-PT",
                    "rm",
                    "sco",
                    "se",
                    "si",
                    "so",
                    "son",
                    "sq",
                    "sv",
                    "sw",
                    "ta",
                    "te",
                    "tk",
                    "ur",
                    "yo",
                ],
                nr: [1, 2],
                fc: 2,
            },
            {
                lngs: [
                    "ay",
                    "bo",
                    "cgg",
                    "fa",
                    "ht",
                    "id",
                    "ja",
                    "jbo",
                    "ka",
                    "km",
                    "ko",
                    "ky",
                    "lo",
                    "ms",
                    "sah",
                    "su",
                    "th",
                    "tt",
                    "ug",
                    "vi",
                    "wo",
                    "zh",
                ],
                nr: [1],
                fc: 3,
            },
            { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 },
            { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
            { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
            { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
            { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
            { lngs: ["fr"], nr: [1, 2], fc: 9 },
            { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
            { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
            { lngs: ["is"], nr: [1, 2], fc: 12 },
            { lngs: ["jv"], nr: [0, 1], fc: 13 },
            { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
            { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
            { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
            { lngs: ["mk"], nr: [1, 2], fc: 17 },
            { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
            { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
            { lngs: ["or"], nr: [2, 1], fc: 2 },
            { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
            { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
            { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        B = {
            1: function(e) {
                return Number(e > 1);
            },
            2: function(e) {
                return Number(1 != e);
            },
            3: function(e) {
                return 0;
            },
            4: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
            },
            5: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5);
            },
            6: function(e) {
                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
            },
            7: function(e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
            },
            8: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
            },
            9: function(e) {
                return Number(e >= 2);
            },
            10: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
            },
            11: function(e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3);
            },
            12: function(e) {
                return Number(e % 10 != 1 || e % 100 == 11);
            },
            13: function(e) {
                return Number(0 !== e);
            },
            14: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
            },
            15: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
            },
            16: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
            },
            17: function(e) {
                return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
            },
            18: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2);
            },
            19: function(e) {
                return Number(1 == e ? 0 : 0 == e || (e % 100 > 1 && e % 100 < 11) ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3);
            },
            20: function(e) {
                return Number(1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2);
            },
            21: function(e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
            },
            22: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3);
            },
        },
        K = ["v1", "v2", "v3"],
        M = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
    var H = (function() {
        function e(n) {
            var r,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t(this, e),
                (this.languageUtils = n),
                (this.options = o),
                (this.logger = g.create("pluralResolver")),
                (this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON) ||
                ("undefined" != typeof Intl && Intl.PluralRules) ||
                ((this.options.compatibilityJSON = "v3"),
                    this.logger.error(
                        "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
                    )),
                (this.rules =
                    ((r = {}),
                        U.forEach(function(e) {
                            e.lngs.forEach(function(t) {
                                r[t] = { numbers: e.nr, plurals: B[e.fc] };
                            });
                        }),
                        r));
        }
        return (
            r(e, [{
                    key: "addRule",
                    value: function(e, t) {
                        this.rules[e] = t;
                    },
                },
                {
                    key: "getRule",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (this.shouldUseIntlApi())
                            try {
                                return new Intl.PluralRules(e, { type: t.ordinal ? "ordinal" : "cardinal" });
                            } catch (e) {
                                return;
                            }
                        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
                    },
                },
                {
                    key: "needsPlural",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.getRule(e, t);
                        return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1;
                    },
                },
                {
                    key: "getPluralFormsOfKey",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.getSuffixes(e, n).map(function(e) {
                            return "".concat(t).concat(e);
                        });
                    },
                },
                {
                    key: "getSuffixes",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = this.getRule(e, n);
                        return r ?
                            this.shouldUseIntlApi() ?
                            r
                            .resolvedOptions()
                            .pluralCategories.sort(function(e, t) {
                                return M[e] - M[t];
                            })
                            .map(function(e) {
                                return "".concat(t.options.prepend).concat(e);
                            }) :
                            r.numbers.map(function(r) {
                                return t.getSuffix(e, r, n);
                            }) :
                            [];
                    },
                },
                {
                    key: "getSuffix",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = this.getRule(e, n);
                        return r ?
                            this.shouldUseIntlApi() ?
                            "".concat(this.options.prepend).concat(r.select(t)) :
                            this.getSuffixRetroCompatible(r, t) :
                            (this.logger.warn("no plural rule found for: ".concat(e)), "");
                    },
                },
                {
                    key: "getSuffixRetroCompatible",
                    value: function(e, t) {
                        var n = this,
                            r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                            o = e.numbers[r];
                        this.options.simplifyPluralSuffix &&
                            2 === e.numbers.length &&
                            1 === e.numbers[0] &&
                            (2 === o ? (o = "plural") : 1 === o && (o = ""));
                        var i = function() {
                            return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString();
                        };
                        return "v1" === this.options.compatibilityJSON ?
                            1 === o ?
                            "" :
                            "number" == typeof o ?
                            "_plural_".concat(o.toString()) :
                            i() :
                            "v2" === this.options.compatibilityJSON ?
                            i() :
                            this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ?
                            i() :
                            this.options.prepend && r.toString() ?
                            this.options.prepend + r.toString() :
                            r.toString();
                    },
                },
                {
                    key: "shouldUseIntlApi",
                    value: function() {
                        return !K.includes(this.options.compatibilityJSON);
                    },
                },
            ]),
            e
        );
    })();

    function z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }

    function J(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ?
                z(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) :
                Object.getOwnPropertyDescriptors ?
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) :
                z(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
    }
    var _ = (function() {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e),
                (this.logger = g.create("interpolator")),
                (this.options = n),
                (this.format =
                    (n.interpolation && n.interpolation.format) ||
                    function(e) {
                        return e;
                    }),
                this.init(n);
        }
        return (
            r(e, [{
                    key: "init",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.interpolation || (e.interpolation = { escapeValue: !0 });
                        var t = e.interpolation;
                        (this.escape = void 0 !== t.escape ? t.escape : S),
                        (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
                        (this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                        (this.prefix = t.prefix ? k(t.prefix) : t.prefixEscaped || "{{"),
                        (this.suffix = t.suffix ? k(t.suffix) : t.suffixEscaped || "}}"),
                        (this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ","),
                        (this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-"),
                        (this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || ""),
                        (this.nestingPrefix = t.nestingPrefix ? k(t.nestingPrefix) : t.nestingPrefixEscaped || k("$t(")),
                        (this.nestingSuffix = t.nestingSuffix ? k(t.nestingSuffix) : t.nestingSuffixEscaped || k(")")),
                        (this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ","),
                        (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                        (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
                        this.resetRegExp();
                    },
                },
                {
                    key: "reset",
                    value: function() {
                        this.options && this.init(this.options);
                    },
                },
                {
                    key: "resetRegExp",
                    value: function() {
                        var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                        this.regexp = new RegExp(e, "g");
                        var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                        this.regexpUnescape = new RegExp(t, "g");
                        var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                        this.nestingRegexp = new RegExp(n, "g");
                    },
                },
                {
                    key: "interpolate",
                    value: function(e, t, n, r) {
                        var o,
                            i,
                            a,
                            s = this,
                            u = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};

                        function c(e) {
                            return e.replace(/\$/g, "$$$$");
                        }
                        var l = function(e) {
                            if (e.indexOf(s.formatSeparator) < 0) {
                                var o = O(t, u, e);
                                return s.alwaysFormat ? s.format(o, void 0, n, J(J(J({}, r), t), {}, { interpolationkey: e })) : o;
                            }
                            var i = e.split(s.formatSeparator),
                                a = i.shift().trim(),
                                c = i.join(s.formatSeparator).trim();
                            return s.format(O(t, u, a), c, n, J(J(J({}, r), t), {}, { interpolationkey: a }));
                        };
                        this.resetRegExp();
                        var f = (r && r.missingInterpolationHandler) || this.options.missingInterpolationHandler,
                            p = (r && r.interpolation && r.interpolation.skipOnVariables) || this.options.interpolation.skipOnVariables;
                        return (
                            [{
                                    regex: this.regexpUnescape,
                                    safeValue: function(e) {
                                        return c(e);
                                    },
                                },
                                {
                                    regex: this.regexp,
                                    safeValue: function(e) {
                                        return s.escapeValue ? c(s.escape(e)) : c(e);
                                    },
                                },
                            ].forEach(function(t) {
                                for (a = 0;
                                    (o = t.regex.exec(e));) {
                                    if (void 0 === (i = l(o[1].trim())))
                                        if ("function" == typeof f) {
                                            var n = f(e, o, r);
                                            i = "string" == typeof n ? n : "";
                                        } else {
                                            if (p) {
                                                i = o[0];
                                                continue;
                                            }
                                            s.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), (i = "");
                                        }
                                    else "string" == typeof i || s.useRawValueToEscape || (i = v(i));
                                    var u = t.safeValue(i);
                                    if (
                                        ((e = e.replace(o[0], u)),
                                            p ? ((t.regex.lastIndex += u.length), (t.regex.lastIndex -= o[0].length)) : (t.regex.lastIndex = 0),
                                            ++a >= s.maxReplaces)
                                    )
                                        break;
                                }
                            }),
                            e
                        );
                    },
                },
                {
                    key: "nest",
                    value: function(e, t) {
                        var n,
                            r,
                            o = this,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = J({}, i);

                        function s(e, t) {
                            var n = this.nestingOptionsSeparator;
                            if (e.indexOf(n) < 0) return e;
                            var r = e.split(new RegExp("".concat(n, "[ ]*{"))),
                                o = "{".concat(r[1]);
                            (e = r[0]), (o = (o = this.interpolate(o, a)).replace(/'/g, '"'));
                            try {
                                (a = JSON.parse(o)), t && (a = J(J({}, t), a));
                            } catch (t) {
                                return (
                                    this.logger.warn("failed parsing options string in nesting for key ".concat(e), t),
                                    "".concat(e).concat(n).concat(o)
                                );
                            }
                            return delete a.defaultValue, e;
                        }
                        for (a.applyPostProcessor = !1, delete a.defaultValue;
                            (n = this.nestingRegexp.exec(e));) {
                            var u = [],
                                c = !1;
                            if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                var l = n[1].split(this.formatSeparator).map(function(e) {
                                    return e.trim();
                                });
                                (n[1] = l.shift()), (u = l), (c = !0);
                            }
                            if ((r = t(s.call(this, n[1].trim(), a), a)) && n[0] === e && "string" != typeof r) return r;
                            "string" != typeof r && (r = v(r)),
                                r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), (r = "")),
                                c &&
                                (r = u.reduce(function(e, t) {
                                    return o.format(e, t, i.lng, J(J({}, i), {}, { interpolationkey: n[1].trim() }));
                                }, r.trim())),
                                (e = e.replace(n[0], r)),
                                (this.regexp.lastIndex = 0);
                        }
                        return e;
                    },
                },
            ]),
            e
        );
    })();

    function q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }

    function $(e, t) {
        return (
            (function(e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (o = !0), (i = e);
                    } finally {
                        try {
                            r || null == s.return || s.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                    return n;
                }
            })(e, t) ||
            (function(e, t) {
                if (e) {
                    if ("string" == typeof e) return q(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                        "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ?
                        Array.from(e) :
                        "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ?
                        q(e, t) :
                        void 0
                    );
                }
            })(e, t) ||
            (function() {
                throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            })()
        );
    }

    function W(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }

    function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ?
                W(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) :
                Object.getOwnPropertyDescriptors ?
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) :
                W(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
    }
    var G = (function() {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e),
                (this.logger = g.create("formatter")),
                (this.options = n),
                (this.formats = {
                    number: function(e, t, n) {
                        return new Intl.NumberFormat(t, n).format(e);
                    },
                    currency: function(e, t, n) {
                        return new Intl.NumberFormat(t, Y(Y({}, n), {}, { style: "currency" })).format(e);
                    },
                    datetime: function(e, t, n) {
                        return new Intl.DateTimeFormat(t, Y({}, n)).format(e);
                    },
                    relativetime: function(e, t, n) {
                        return new Intl.RelativeTimeFormat(t, Y({}, n)).format(e, n.range || "day");
                    },
                    list: function(e, t, n) {
                        return new Intl.ListFormat(t, Y({}, n)).format(e);
                    },
                }),
                this.init(n);
        }
        return (
            r(e, [{
                    key: "init",
                    value: function(e) {
                        var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} }).interpolation;
                        this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",";
                    },
                },
                {
                    key: "add",
                    value: function(e, t) {
                        this.formats[e] = t;
                    },
                },
                {
                    key: "format",
                    value: function(e, t, n, r) {
                        var o = this;
                        return t.split(this.formatSeparator).reduce(function(e, t) {
                            var i = (function(e) {
                                    var t = e.toLowerCase().trim(),
                                        n = {};
                                    if (e.indexOf("(") > -1) {
                                        var r = e.split("(");
                                        t = r[0].toLowerCase().trim();
                                        var o = r[1].substring(0, r[1].length - 1);
                                        "currency" === t && o.indexOf(":") < 0 ?
                                            n.currency || (n.currency = o.trim()) :
                                            "relativetime" === t && o.indexOf(":") < 0 ?
                                            n.range || (n.range = o.trim()) :
                                            o.split(";").forEach(function(e) {
                                                if (e) {
                                                    var t = $(e.split(":"), 2),
                                                        r = t[0],
                                                        o = t[1];
                                                    "false" === o.trim() && (n[r.trim()] = !1),
                                                        "true" === o.trim() && (n[r.trim()] = !0),
                                                        isNaN(o.trim()) || (n[r.trim()] = parseInt(o.trim(), 10)),
                                                        n[r.trim()] || (n[r.trim()] = o.trim());
                                                }
                                            });
                                    }
                                    return { formatName: t, formatOptions: n };
                                })(t),
                                a = i.formatName,
                                s = i.formatOptions;
                            if (o.formats[a]) {
                                var u = e;
                                try {
                                    var c = (r && r.formatParams && r.formatParams[r.interpolationkey]) || {},
                                        l = c.locale || c.lng || r.locale || r.lng || n;
                                    u = o.formats[a](e, l, Y(Y(Y({}, s), r), c));
                                } catch (e) {
                                    o.logger.warn(e);
                                }
                                return u;
                            }
                            return o.logger.warn("there was no format function for ".concat(a)), e;
                        }, e);
                    },
                },
            ]),
            e
        );
    })();

    function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }

    function X(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ?
                Q(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) :
                Object.getOwnPropertyDescriptors ?
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) :
                Q(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
    }

    function Z(e) {
        var t = (function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (e) {
                return !1;
            }
        })();
        return function() {
            var n,
                r = u(e);
            if (t) {
                var o = u(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return s(this, n);
        };
    }
    var ee = (function(e) {
        a(i, h);
        var n = Z(i);

        function i(e, r, a) {
            var s,
                u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return (
                t(this, i),
                (s = n.call(this)),
                w && h.call(o(s)),
                (s.backend = e),
                (s.store = r),
                (s.services = a),
                (s.languageUtils = a.languageUtils),
                (s.options = u),
                (s.logger = g.create("backendConnector")),
                (s.state = {}),
                (s.queue = []),
                s.backend && s.backend.init && s.backend.init(a, u.backend, u),
                s
            );
        }
        return (
            r(i, [{
                    key: "queueLoad",
                    value: function(e, t, n, r) {
                        var o = this,
                            i = [],
                            a = [],
                            s = [],
                            u = [];
                        return (
                            e.forEach(function(e) {
                                var r = !0;
                                t.forEach(function(t) {
                                        var s = "".concat(e, "|").concat(t);
                                        !n.reload && o.store.hasResourceBundle(e, t) ?
                                            (o.state[s] = 2) :
                                            o.state[s] < 0 ||
                                            (1 === o.state[s] ?
                                                a.indexOf(s) < 0 && a.push(s) :
                                                ((o.state[s] = 1),
                                                    (r = !1),
                                                    a.indexOf(s) < 0 && a.push(s),
                                                    i.indexOf(s) < 0 && i.push(s),
                                                    u.indexOf(t) < 0 && u.push(t)));
                                    }),
                                    r || s.push(e);
                            }),
                            (i.length || a.length) && this.queue.push({ pending: a, loaded: {}, errors: [], callback: r }), { toLoad: i, pending: a, toLoadLanguages: s, toLoadNamespaces: u }
                        );
                    },
                },
                {
                    key: "loaded",
                    value: function(e, t, n) {
                        var r = e.split("|"),
                            o = r[0],
                            i = r[1];
                        t && this.emit("failedLoading", o, i, t), n && this.store.addResourceBundle(o, i, n), (this.state[e] = t ? -1 : 2);
                        var a = {};
                        this.queue.forEach(function(n) {
                                var r, s, u, c, l, f;
                                (r = n.loaded),
                                (s = i),
                                (c = y(r, [o], Object)),
                                (l = c.obj),
                                (f = c.k),
                                (l[f] = l[f] || []),
                                u && (l[f] = l[f].concat(s)),
                                    u || l[f].push(s),
                                    (function(e, t) {
                                        for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), (n = e.indexOf(t));
                                    })(n.pending, e),
                                    t && n.errors.push(t),
                                    0 !== n.pending.length ||
                                    n.done ||
                                    (Object.keys(n.loaded).forEach(function(e) {
                                            a[e] || (a[e] = []),
                                                n.loaded[e].length &&
                                                n.loaded[e].forEach(function(t) {
                                                    a[e].indexOf(t) < 0 && a[e].push(t);
                                                });
                                        }),
                                        (n.done = !0),
                                        n.errors.length ? n.callback(n.errors) : n.callback());
                            }),
                            this.emit("loaded", a),
                            (this.queue = this.queue.filter(function(e) {
                                return !e.done;
                            }));
                    },
                },
                {
                    key: "read",
                    value: function(e, t, n) {
                        var r = this,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                            a = arguments.length > 5 ? arguments[5] : void 0;
                        return e.length ?
                            this.backend[n](e, t, function(s, u) {
                                s && u && o < 5 ?
                                    setTimeout(function() {
                                        r.read.call(r, e, t, n, o + 1, 2 * i, a);
                                    }, i) :
                                    a(s, u);
                            }) :
                            a(null, {});
                    },
                },
                {
                    key: "prepareLoading",
                    value: function(e, t) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 ? arguments[3] : void 0;
                        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                        "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                        var i = this.queueLoad(e, t, r, o);
                        if (!i.toLoad.length) return i.pending.length || o(), null;
                        i.toLoad.forEach(function(e) {
                            n.loadOne(e);
                        });
                    },
                },
                {
                    key: "load",
                    value: function(e, t, n) {
                        this.prepareLoading(e, t, {}, n);
                    },
                },
                {
                    key: "reload",
                    value: function(e, t, n) {
                        this.prepareLoading(e, t, { reload: !0 }, n);
                    },
                },
                {
                    key: "loadOne",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = e.split("|"),
                            o = r[0],
                            i = r[1];
                        this.read(o, i, "read", void 0, void 0, function(r, a) {
                            r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r), !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a),
                                t.loaded(e, r, a);
                        });
                    },
                },
                {
                    key: "saveMissing",
                    value: function(e, t, n, r, o) {
                        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                        this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ?
                            this.logger.warn(
                                'did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'),
                                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                            ) :
                            null != n &&
                            "" !== n &&
                            (this.backend && this.backend.create && this.backend.create(e, t, n, r, null, X(X({}, i), {}, { isUpdate: o })),
                                e && e[0] && this.store.addResource(e[0], t, n, r));
                    },
                },
            ]),
            i
        );
    })();

    function te(e) {
        return (
            "string" == typeof e.ns && (e.ns = [e.ns]),
            "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
            "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
            e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
            e
        );
    }

    function ne(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }

    function re(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ?
                ne(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) :
                Object.getOwnPropertyDescriptors ?
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) :
                ne(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
    }

    function oe(e) {
        var t = (function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (e) {
                return !1;
            }
        })();
        return function() {
            var n,
                r = u(e);
            if (t) {
                var o = u(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return s(this, n);
        };
    }

    function ie() {}
    var ae = (function(n) {
        a(u, h);
        var i = oe(u);

        function u() {
            var e,
                n,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                a = arguments.length > 1 ? arguments[1] : void 0;
            if (
                (t(this, u),
                    (e = i.call(this)),
                    w && h.call(o(e)),
                    (e.options = te(r)),
                    (e.services = {}),
                    (e.logger = g),
                    (e.modules = { external: [] }),
                    (n = o(e)),
                    Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(function(e) {
                        "function" == typeof n[e] && (n[e] = n[e].bind(n));
                    }),
                    a && !e.isInitialized && !r.isClone)
            ) {
                if (!e.options.initImmediate) return e.init(r, a), s(e, o(e));
                setTimeout(function() {
                    e.init(r, a);
                }, 0);
            }
            return e;
        }
        return (
            r(u, [{
                    key: "init",
                    value: function() {
                        var t = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = arguments.length > 1 ? arguments[1] : void 0;
                        "function" == typeof n && ((r = n), (n = {})), !n.defaultNS &&
                            n.ns &&
                            ("string" == typeof n.ns ? (n.defaultNS = n.ns) : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
                        var o = {
                            debug: !1,
                            initImmediate: !0,
                            ns: ["translation"],
                            defaultNS: ["translation"],
                            fallbackLng: ["dev"],
                            fallbackNS: !1,
                            supportedLngs: !1,
                            nonExplicitSupportedLngs: !1,
                            load: "all",
                            preload: !1,
                            simplifyPluralSuffix: !0,
                            keySeparator: ".",
                            nsSeparator: ":",
                            pluralSeparator: "_",
                            contextSeparator: "_",
                            partialBundledLanguages: !1,
                            saveMissing: !1,
                            updateMissing: !1,
                            saveMissingTo: "fallback",
                            saveMissingPlurals: !0,
                            missingKeyHandler: !1,
                            missingInterpolationHandler: !1,
                            postProcess: !1,
                            postProcessPassResolved: !1,
                            returnNull: !0,
                            returnEmptyString: !0,
                            returnObjects: !1,
                            joinArrays: !1,
                            returnedObjectHandler: !1,
                            parseMissingKeyHandler: !1,
                            appendNamespaceToMissingKey: !1,
                            appendNamespaceToCIMode: !1,
                            overloadTranslationOptionHandler: function(t) {
                                var n = {};
                                if (
                                    ("object" === e(t[1]) && (n = t[1]),
                                        "string" == typeof t[1] && (n.defaultValue = t[1]),
                                        "string" == typeof t[2] && (n.tDescription = t[2]),
                                        "object" === e(t[2]) || "object" === e(t[3]))
                                ) {
                                    var r = t[3] || t[2];
                                    Object.keys(r).forEach(function(e) {
                                        n[e] = r[e];
                                    });
                                }
                                return n;
                            },
                            interpolation: {
                                escapeValue: !0,
                                format: function(e, t, n, r) {
                                    return e;
                                },
                                prefix: "{{",
                                suffix: "}}",
                                formatSeparator: ",",
                                unescapePrefix: "-",
                                nestingPrefix: "$t(",
                                nestingSuffix: ")",
                                nestingOptionsSeparator: ",",
                                maxReplaces: 1e3,
                                skipOnVariables: !0,
                            },
                        };

                        function i(e) {
                            return e ? ("function" == typeof e ? new e() : e) : null;
                        }
                        if (
                            ((this.options = re(re(re({}, o), this.options), te(n))),
                                (this.options.interpolation = re({}, this.options.interpolation)),
                                void 0 !== n.keySeparator && (this.options.userDefinedKeySeparator = n.keySeparator),
                                void 0 !== n.nsSeparator && (this.options.userDefinedNsSeparator = n.nsSeparator), !this.options.isClone)
                        ) {
                            var a;
                            this.modules.logger ? g.init(i(this.modules.logger), this.options) : g.init(null, this.options),
                                this.modules.formatter ? (a = this.modules.formatter) : "undefined" != typeof Intl && (a = G);
                            var s = new V(this.options);
                            this.store = new N(this.options.resources, this.options);
                            var u = this.services;
                            (u.logger = g),
                            (u.resourceStore = this.store),
                            (u.languageUtils = s),
                            (u.pluralResolver = new H(s, {
                                prepend: this.options.pluralSeparator,
                                compatibilityJSON: this.options.compatibilityJSON,
                                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                            })), !a ||
                                (this.options.interpolation.format && this.options.interpolation.format !== o.interpolation.format) ||
                                ((u.formatter = i(a)),
                                    u.formatter.init(u, this.options),
                                    (this.options.interpolation.format = u.formatter.format.bind(u.formatter))),
                                (u.interpolator = new _(this.options)),
                                (u.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
                                (u.backendConnector = new ee(i(this.modules.backend), u.resourceStore, u, this.options)),
                                u.backendConnector.on("*", function(e) {
                                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                    t.emit.apply(t, [e].concat(r));
                                }),
                                this.modules.languageDetector &&
                                ((u.languageDetector = i(this.modules.languageDetector)),
                                    u.languageDetector.init(u, this.options.detection, this.options)),
                                this.modules.i18nFormat && ((u.i18nFormat = i(this.modules.i18nFormat)), u.i18nFormat.init && u.i18nFormat.init(this)),
                                (this.translator = new A(this.services, this.options)),
                                this.translator.on("*", function(e) {
                                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                    t.emit.apply(t, [e].concat(r));
                                }),
                                this.modules.external.forEach(function(e) {
                                    e.init && e.init(t);
                                });
                        }
                        if (
                            ((this.format = this.options.interpolation.format),
                                r || (r = ie),
                                this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
                        ) {
                            var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                            c.length > 0 && "dev" !== c[0] && (this.options.lng = c[0]);
                        }
                        this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function(e) {
                            t[e] = function() {
                                var n;
                                return (n = t.store)[e].apply(n, arguments);
                            };
                        });
                        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(function(e) {
                            t[e] = function() {
                                var n;
                                return (n = t.store)[e].apply(n, arguments), t;
                            };
                        });
                        var l = d(),
                            f = function() {
                                var e = function(e, n) {
                                    t.isInitialized &&
                                        !t.initializedStoreOnce &&
                                        t.logger.warn("init: i18next is already initialized. You should call init just once!"),
                                        (t.isInitialized = !0),
                                        t.options.isClone || t.logger.log("initialized", t.options),
                                        t.emit("initialized", t.options),
                                        l.resolve(n),
                                        r(e, n);
                                };
                                if (t.languages && "v1" !== t.options.compatibilityAPI && !t.isInitialized) return e(null, t.t.bind(t));
                                t.changeLanguage(t.options.lng, e);
                            };
                        return this.options.resources || !this.options.initImmediate ? f() : setTimeout(f, 0), l;
                    },
                },
                {
                    key: "loadResources",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ie,
                            r = "string" == typeof e ? e : this.language;
                        if (("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages)) {
                            if (r && "cimode" === r.toLowerCase()) return n();
                            var o = [],
                                i = function(e) {
                                    e &&
                                        t.services.languageUtils.toResolveHierarchy(e).forEach(function(e) {
                                            o.indexOf(e) < 0 && o.push(e);
                                        });
                                };
                            if (r) i(r);
                            else
                                this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(e) {
                                    return i(e);
                                });
                            this.options.preload &&
                                this.options.preload.forEach(function(e) {
                                    return i(e);
                                }),
                                this.services.backendConnector.load(o, this.options.ns, n);
                        } else n(null);
                    },
                },
                {
                    key: "reloadResources",
                    value: function(e, t, n) {
                        var r = d();
                        return (
                            e || (e = this.languages),
                            t || (t = this.options.ns),
                            n || (n = ie),
                            this.services.backendConnector.reload(e, t, function(e) {
                                r.resolve(), n(e);
                            }),
                            r
                        );
                    },
                },
                {
                    key: "use",
                    value: function(e) {
                        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                        return (
                            "backend" === e.type && (this.modules.backend = e),
                            ("logger" === e.type || (e.log && e.warn && e.error)) && (this.modules.logger = e),
                            "languageDetector" === e.type && (this.modules.languageDetector = e),
                            "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                            "postProcessor" === e.type && C.addPostProcessor(e),
                            "formatter" === e.type && (this.modules.formatter = e),
                            "3rdParty" === e.type && this.modules.external.push(e),
                            this
                        );
                    },
                },
                {
                    key: "changeLanguage",
                    value: function(e, t) {
                        var n = this;
                        this.isLanguageChangingTo = e;
                        var r = d();
                        this.emit("languageChanging", e);
                        var o = function(e) {
                                if (
                                    ((n.language = e),
                                        (n.languages = n.services.languageUtils.toResolveHierarchy(e)),
                                        (n.resolvedLanguage = void 0), !(["cimode", "dev"].indexOf(e) > -1))
                                )
                                    for (var t = 0; t < n.languages.length; t++) {
                                        var r = n.languages[t];
                                        if (!(["cimode", "dev"].indexOf(r) > -1) && n.store.hasLanguageSomeTranslations(r)) {
                                            n.resolvedLanguage = r;
                                            break;
                                        }
                                    }
                            },
                            i = function(i) {
                                e || i || !n.services.languageDetector || (i = []);
                                var a = "string" == typeof i ? i : n.services.languageUtils.getBestMatchFromCodes(i);
                                a &&
                                    (n.language || o(a),
                                        n.translator.language || n.translator.changeLanguage(a),
                                        n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(a)),
                                    n.loadResources(a, function(e) {
                                        !(function(e, i) {
                                            i
                                                ?
                                                (o(i),
                                                    n.translator.changeLanguage(i),
                                                    (n.isLanguageChangingTo = void 0),
                                                    n.emit("languageChanged", i),
                                                    n.logger.log("languageChanged", i)) :
                                                (n.isLanguageChangingTo = void 0),
                                                r.resolve(function() {
                                                    return n.t.apply(n, arguments);
                                                }),
                                                t &&
                                                t(e, function() {
                                                    return n.t.apply(n, arguments);
                                                });
                                        })(e, a);
                                    });
                            };
                        return (
                            e || !this.services.languageDetector || this.services.languageDetector.async ?
                            !e && this.services.languageDetector && this.services.languageDetector.async ?
                            this.services.languageDetector.detect(i) :
                            i(e) :
                            i(this.services.languageDetector.detect()),
                            r
                        );
                    },
                },
                {
                    key: "getFixedT",
                    value: function(t, n, r) {
                        var o = this,
                            i = function t(n, i) {
                                var a;
                                if ("object" !== e(i)) {
                                    for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++) u[c - 2] = arguments[c];
                                    a = o.options.overloadTranslationOptionHandler([n, i].concat(u));
                                } else a = re({}, i);
                                (a.lng = a.lng || t.lng), (a.lngs = a.lngs || t.lngs), (a.ns = a.ns || t.ns);
                                var l = o.options.keySeparator || ".",
                                    f = r ? "".concat(r).concat(l).concat(n) : n;
                                return o.t(f, a);
                            };
                        return "string" == typeof t ? (i.lng = t) : (i.lngs = t), (i.ns = n), (i.keyPrefix = r), i;
                    },
                },
                {
                    key: "t",
                    value: function() {
                        var e;
                        return this.translator && (e = this.translator).translate.apply(e, arguments);
                    },
                },
                {
                    key: "exists",
                    value: function() {
                        var e;
                        return this.translator && (e = this.translator).exists.apply(e, arguments);
                    },
                },
                {
                    key: "setDefaultNamespace",
                    value: function(e) {
                        this.options.defaultNS = e;
                    },
                },
                {
                    key: "hasLoadedNamespace",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                        if (!this.languages || !this.languages.length)
                            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                        var r = this.resolvedLanguage || this.languages[0],
                            o = !!this.options && this.options.fallbackLng,
                            i = this.languages[this.languages.length - 1];
                        if ("cimode" === r.toLowerCase()) return !0;
                        var a = function(e, n) {
                            var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                            return -1 === r || 2 === r;
                        };
                        if (n.precheck) {
                            var s = n.precheck(this, a);
                            if (void 0 !== s) return s;
                        }
                        return !!this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || !(!a(r, e) || (o && !a(i, e)));
                    },
                },
                {
                    key: "loadNamespaces",
                    value: function(e, t) {
                        var n = this,
                            r = d();
                        return this.options.ns ?
                            ("string" == typeof e && (e = [e]),
                                e.forEach(function(e) {
                                    n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                                }),
                                this.loadResources(function(e) {
                                    r.resolve(), t && t(e);
                                }),
                                r) :
                            (t && t(), Promise.resolve());
                    },
                },
                {
                    key: "loadLanguages",
                    value: function(e, t) {
                        var n = d();
                        "string" == typeof e && (e = [e]);
                        var r = this.options.preload || [],
                            o = e.filter(function(e) {
                                return r.indexOf(e) < 0;
                            });
                        return o.length ?
                            ((this.options.preload = r.concat(o)),
                                this.loadResources(function(e) {
                                    n.resolve(), t && t(e);
                                }),
                                n) :
                            (t && t(), Promise.resolve());
                    },
                },
                {
                    key: "dir",
                    value: function(e) {
                        if ((e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e))
                            return "rtl";
                        return [
                                "ar",
                                "shu",
                                "sqr",
                                "ssh",
                                "xaa",
                                "yhd",
                                "yud",
                                "aao",
                                "abh",
                                "abv",
                                "acm",
                                "acq",
                                "acw",
                                "acx",
                                "acy",
                                "adf",
                                "ads",
                                "aeb",
                                "aec",
                                "afb",
                                "ajp",
                                "apc",
                                "apd",
                                "arb",
                                "arq",
                                "ars",
                                "ary",
                                "arz",
                                "auz",
                                "avl",
                                "ayh",
                                "ayl",
                                "ayn",
                                "ayp",
                                "bbz",
                                "pga",
                                "he",
                                "iw",
                                "ps",
                                "pbt",
                                "pbu",
                                "pst",
                                "prp",
                                "prd",
                                "ug",
                                "ur",
                                "ydd",
                                "yds",
                                "yih",
                                "ji",
                                "yi",
                                "hbo",
                                "men",
                                "xmn",
                                "fa",
                                "jpr",
                                "peo",
                                "pes",
                                "prs",
                                "dv",
                                "sam",
                                "ckb",
                            ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ?
                            "rtl" :
                            "ltr";
                    },
                },
                {
                    key: "cloneInstance",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ie,
                            r = re(re(re({}, this.options), t), { isClone: !0 }),
                            o = new u(r);
                        return (
                            ["store", "services", "language"].forEach(function(t) {
                                o[t] = e[t];
                            }),
                            (o.services = re({}, this.services)),
                            (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
                            (o.translator = new A(o.services, o.options)),
                            o.translator.on("*", function(e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                                o.emit.apply(o, [e].concat(n));
                            }),
                            o.init(r, n),
                            (o.translator.options = o.options),
                            (o.translator.backendConnector.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
                            o
                        );
                    },
                },
                {
                    key: "toJSON",
                    value: function() {
                        return {
                            options: this.options,
                            store: this.store,
                            language: this.language,
                            languages: this.languages,
                            resolvedLanguage: this.resolvedLanguage,
                        };
                    },
                },
            ]),
            u
        );
    })();
    c(ae, "createInstance", function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        return new ae(e, t);
    });
    var se = ae.createInstance();
    return (se.createInstance = ae.createInstance), se;
});

!(function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ?
        (module.exports = e()) :
        "function" == typeof define && define.amd ?
        define(e) :
        ((t = "undefined" != typeof globalThis ? globalThis : t || self).Konva = e());
})(this, function() {
    "use strict";
    /*
     * Konva JavaScript Framework v8.3.0
     * http://konvajs.org/
     * Licensed under the MIT
     * Date: Mon Nov 15 2021
     *
     * Original work Copyright (C) 2011 - 2013 by Eric Rowell (KineticJS)
     * Modified work Copyright (C) 2014 - present by Anton Lavrenov (Konva)
     *
     * @license
     */
    var t = Math.PI / 180;
    const e = "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope ? self : {},
        i = {
            _global: e,
            version: "8.3.0",
            isBrowser: "undefined" != typeof window && ("[object Window]" === {}.toString.call(window) || "[object global]" === {}.toString.call(window)),
            isUnminified: /param/.test(function(t) {}.toString()),
            dblClickWindow: 400,
            getAngle: (e) => (i.angleDeg ? e * t : e),
            enableTrace: !1,
            pointerEventsEnabled: !0,
            autoDrawEnabled: !0,
            hitOnDragEnabled: !1,
            capturePointerEventsEnabled: !1,
            _mouseListenClick: !1,
            _touchListenClick: !1,
            _pointerListenClick: !1,
            _mouseInDblClickWindow: !1,
            _touchInDblClickWindow: !1,
            _pointerInDblClickWindow: !1,
            _mouseDblClickPointerId: null,
            _touchDblClickPointerId: null,
            _pointerDblClickPointerId: null,
            pixelRatio: ("undefined" != typeof window && window.devicePixelRatio) || 1,
            dragDistance: 3,
            angleDeg: !0,
            showWarnings: !0,
            dragButtons: [0, 1],
            isDragging: () => i.DD.isDragging,
            isDragReady: () => !!i.DD.node,
            document: e.document,
            _injectGlobal(t) {
                e.Konva = t;
            },
        },
        r = (t) => {
            i[t.prototype.getClassName()] = t;
        };
    i._injectGlobal(i);
    class a {
        constructor(t = [1, 0, 0, 1, 0, 0]) {
            (this.dirty = !1), (this.m = (t && t.slice()) || [1, 0, 0, 1, 0, 0]);
        }
        reset() {
            (this.m[0] = 1), (this.m[1] = 0), (this.m[2] = 0), (this.m[3] = 1), (this.m[4] = 0), (this.m[5] = 0);
        }
        copy() {
            return new a(this.m);
        }
        copyInto(t) {
            (t.m[0] = this.m[0]), (t.m[1] = this.m[1]), (t.m[2] = this.m[2]), (t.m[3] = this.m[3]), (t.m[4] = this.m[4]), (t.m[5] = this.m[5]);
        }
        point(t) {
            var e = this.m;
            return { x: e[0] * t.x + e[2] * t.y + e[4], y: e[1] * t.x + e[3] * t.y + e[5] };
        }
        translate(t, e) {
            return (this.m[4] += this.m[0] * t + this.m[2] * e), (this.m[5] += this.m[1] * t + this.m[3] * e), this;
        }
        scale(t, e) {
            return (this.m[0] *= t), (this.m[1] *= t), (this.m[2] *= e), (this.m[3] *= e), this;
        }
        rotate(t) {
            var e = Math.cos(t),
                i = Math.sin(t),
                r = this.m[0] * e + this.m[2] * i,
                a = this.m[1] * e + this.m[3] * i,
                n = this.m[0] * -i + this.m[2] * e,
                s = this.m[1] * -i + this.m[3] * e;
            return (this.m[0] = r), (this.m[1] = a), (this.m[2] = n), (this.m[3] = s), this;
        }
        getTranslation() {
            return { x: this.m[4], y: this.m[5] };
        }
        skew(t, e) {
            var i = this.m[0] + this.m[2] * e,
                r = this.m[1] + this.m[3] * e,
                a = this.m[2] + this.m[0] * t,
                n = this.m[3] + this.m[1] * t;
            return (this.m[0] = i), (this.m[1] = r), (this.m[2] = a), (this.m[3] = n), this;
        }
        multiply(t) {
            var e = this.m[0] * t.m[0] + this.m[2] * t.m[1],
                i = this.m[1] * t.m[0] + this.m[3] * t.m[1],
                r = this.m[0] * t.m[2] + this.m[2] * t.m[3],
                a = this.m[1] * t.m[2] + this.m[3] * t.m[3],
                n = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4],
                s = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
            return (this.m[0] = e), (this.m[1] = i), (this.m[2] = r), (this.m[3] = a), (this.m[4] = n), (this.m[5] = s), this;
        }
        invert() {
            var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
                e = this.m[3] * t,
                i = -this.m[1] * t,
                r = -this.m[2] * t,
                a = this.m[0] * t,
                n = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
                s = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
            return (this.m[0] = e), (this.m[1] = i), (this.m[2] = r), (this.m[3] = a), (this.m[4] = n), (this.m[5] = s), this;
        }
        getMatrix() {
            return this.m;
        }
        setAbsolutePosition(t, e) {
            var i = this.m[0],
                r = this.m[1],
                a = this.m[2],
                n = this.m[3],
                s = this.m[4],
                o = (i * (e - this.m[5]) - r * (t - s)) / (i * n - r * a),
                h = (t - s - a * o) / i;
            return this.translate(h, o);
        }
        decompose() {
            var t = this.m[0],
                e = this.m[1],
                i = this.m[2],
                r = this.m[3],
                a = t * r - e * i;
            let n = { x: this.m[4], y: this.m[5], rotation: 0, scaleX: 0, scaleY: 0, skewX: 0, skewY: 0 };
            if (0 != t || 0 != e) {
                var s = Math.sqrt(t * t + e * e);
                (n.rotation = e > 0 ? Math.acos(t / s) : -Math.acos(t / s)),
                (n.scaleX = s),
                (n.scaleY = a / s),
                (n.skewX = (t * i + e * r) / a),
                (n.skewY = 0);
            } else if (0 != i || 0 != r) {
                var o = Math.sqrt(i * i + r * r);
                (n.rotation = Math.PI / 2 - (r > 0 ? Math.acos(-i / o) : -Math.acos(i / o))),
                (n.scaleX = a / o),
                (n.scaleY = o),
                (n.skewX = 0),
                (n.skewY = (t * i + e * r) / a);
            }
            return (n.rotation = g._getRotation(n.rotation)), n;
        }
    }
    var n = Math.PI / 180,
        s = 180 / Math.PI,
        o = "Konva error: ",
        h = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 132, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 255, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 203],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [119, 128, 144],
            slategrey: [119, 128, 144],
            snow: [255, 255, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            transparent: [255, 255, 255, 0],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 5],
        },
        l = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,
        d = [];
    const c =
        ("undefined" != typeof requestAnimationFrame && requestAnimationFrame) ||
        function(t) {
            setTimeout(t, 60);
        },
        g = {
            _isElement: (t) => !(!t || 1 != t.nodeType),
            _isFunction: (t) => !!(t && t.constructor && t.call && t.apply),
            _isPlainObject: (t) => !!t && t.constructor === Object,
            _isArray: (t) => "[object Array]" === Object.prototype.toString.call(t),
            _isNumber: (t) => "[object Number]" === Object.prototype.toString.call(t) && !isNaN(t) && isFinite(t),
            _isString: (t) => "[object String]" === Object.prototype.toString.call(t),
            _isBoolean: (t) => "[object Boolean]" === Object.prototype.toString.call(t),
            isObject: (t) => t instanceof Object,
            isValidSelector(t) {
                if ("string" != typeof t) return !1;
                var e = t[0];
                return "#" === e || "." === e || e === e.toUpperCase();
            },
            _sign: (t) => (0 === t || t > 0 ? 1 : -1),
            requestAnimFrame(t) {
                d.push(t),
                    1 === d.length &&
                    c(function() {
                        const t = d;
                        (d = []),
                        t.forEach(function(t) {
                            t();
                        });
                    });
            },
            createCanvasElement() {
                var t = document.createElement("canvas");
                try {
                    t.style = t.style || {};
                } catch (t) {}
                return t;
            },
            createImageElement: () => document.createElement("img"),
            _isInDocument(t) {
                for (;
                    (t = t.parentNode);)
                    if (t == document) return !0;
                return !1;
            },
            _urlToImage(t, e) {
                var i = g.createImageElement();
                (i.onload = function() {
                    e(i);
                }),
                (i.src = t);
            },
            _rgbToHex: (t, e, i) => ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1),
            _hexToRgb(t) {
                t = t.replace("#", "");
                var e = parseInt(t, 16);
                return { r: (e >> 16) & 255, g: (e >> 8) & 255, b: 255 & e };
            },
            getRandomColor() {
                for (var t = ((16777215 * Math.random()) << 0).toString(16); t.length < 6;) t = "0" + t;
                return "#" + t;
            },
            getRGB(t) {
                var e;
                return t in h ? { r: (e = h[t])[0], g: e[1], b: e[2] } :
                    "#" === t[0] ?
                    this._hexToRgb(t.substring(1)) :
                    "rgb(" === t.substr(0, 4) ?
                    ((e = l.exec(t.replace(/ /g, ""))), { r: parseInt(e[1], 10), g: parseInt(e[2], 10), b: parseInt(e[3], 10) }) : { r: 0, g: 0, b: 0 };
            },
            colorToRGBA: (t) => (
                (t = t || "black"),
                g._namedColorToRBA(t) ||
                g._hex3ColorToRGBA(t) ||
                g._hex6ColorToRGBA(t) ||
                g._rgbColorToRGBA(t) ||
                g._rgbaColorToRGBA(t) ||
                g._hslColorToRGBA(t)
            ),
            _namedColorToRBA(t) {
                var e = h[t.toLowerCase()];
                return e ? { r: e[0], g: e[1], b: e[2], a: 1 } : null;
            },
            _rgbColorToRGBA(t) {
                if (0 === t.indexOf("rgb(")) {
                    var e = (t = t.match(/rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number);
                    return { r: e[0], g: e[1], b: e[2], a: 1 };
                }
            },
            _rgbaColorToRGBA(t) {
                if (0 === t.indexOf("rgba(")) {
                    var e = (t = t.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number);
                    return { r: e[0], g: e[1], b: e[2], a: e[3] };
                }
            },
            _hex6ColorToRGBA(t) {
                if ("#" === t[0] && 7 === t.length)
                    return { r: parseInt(t.slice(1, 3), 16), g: parseInt(t.slice(3, 5), 16), b: parseInt(t.slice(5, 7), 16), a: 1 };
            },
            _hex3ColorToRGBA(t) {
                if ("#" === t[0] && 4 === t.length)
                    return { r: parseInt(t[1] + t[1], 16), g: parseInt(t[2] + t[2], 16), b: parseInt(t[3] + t[3], 16), a: 1 };
            },
            _hslColorToRGBA(t) {
                if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(t)) {
                    const [e, ...i] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t),
                        r = Number(i[0]) / 360,
                        a = Number(i[1]) / 100,
                        n = Number(i[2]) / 100;
                    let s, o, h;
                    if (0 === a) return (h = 255 * n), { r: Math.round(h), g: Math.round(h), b: Math.round(h), a: 1 };
                    s = n < 0.5 ? n * (1 + a) : n + a - n * a;
                    const l = 2 * n - s,
                        d = [0, 0, 0];
                    for (let t = 0; t < 3; t++)
                        (o = r + (1 / 3) * -(t - 1)),
                        o < 0 && o++,
                        o > 1 && o--,
                        (h = 6 * o < 1 ? l + 6 * (s - l) * o : 2 * o < 1 ? s : 3 * o < 2 ? l + (s - l) * (2 / 3 - o) * 6 : l),
                        (d[t] = 255 * h);
                    return { r: Math.round(d[0]), g: Math.round(d[1]), b: Math.round(d[2]), a: 1 };
                }
            },
            haveIntersection: (t, e) => !(e.x > t.x + t.width || e.x + e.width < t.x || e.y > t.y + t.height || e.y + e.height < t.y),
            cloneObject(t) {
                var e = {};
                for (var i in t)
                    this._isPlainObject(t[i]) ? (e[i] = this.cloneObject(t[i])) : this._isArray(t[i]) ? (e[i] = this.cloneArray(t[i])) : (e[i] = t[i]);
                return e;
            },
            cloneArray: (t) => t.slice(0),
            degToRad: (t) => t * n,
            radToDeg: (t) => t * s,
            _degToRad: (t) => (g.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), g.degToRad(t)),
            _radToDeg: (t) => (g.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), g.radToDeg(t)),
            _getRotation: (t) => (i.angleDeg ? g.radToDeg(t) : t),
            _capitalize: (t) => t.charAt(0).toUpperCase() + t.slice(1),
            throw (t) {
                throw new Error(o + t);
            },
            error(t) {
                console.error(o + t);
            },
            warn(t) {
                i.showWarnings && console.warn("Konva warning: " + t);
            },
            each(t, e) {
                for (var i in t) e(i, t[i]);
            },
            _inRange: (t, e, i) => e <= t && t < i,
            _getProjectionToSegment(t, e, i, r, a, n) {
                var s,
                    o,
                    h,
                    l = (t - i) * (t - i) + (e - r) * (e - r);
                if (0 == l)(s = t), (o = e), (h = (a - i) * (a - i) + (n - r) * (n - r));
                else {
                    var d = ((a - t) * (i - t) + (n - e) * (r - e)) / l;
                    d < 0 ?
                        ((s = t), (o = e), (h = (t - a) * (t - a) + (e - n) * (e - n))) :
                        d > 1 ?
                        ((s = i), (o = r), (h = (i - a) * (i - a) + (r - n) * (r - n))) :
                        (h = ((s = t + d * (i - t)) - a) * (s - a) + ((o = e + d * (r - e)) - n) * (o - n));
                }
                return [s, o, h];
            },
            _getProjectionToLine(t, e, i) {
                var r = g.cloneObject(t),
                    a = Number.MAX_VALUE;
                return (
                    e.forEach(function(n, s) {
                        if (i || s !== e.length - 1) {
                            var o = e[(s + 1) % e.length],
                                h = g._getProjectionToSegment(n.x, n.y, o.x, o.y, t.x, t.y),
                                l = h[0],
                                d = h[1],
                                c = h[2];
                            c < a && ((r.x = l), (r.y = d), (a = c));
                        }
                    }),
                    r
                );
            },
            _prepareArrayForTween(t, e, i) {
                var r,
                    a = [],
                    n = [];
                if (t.length > e.length) {
                    var s = e;
                    (e = t), (t = s);
                }
                for (r = 0; r < t.length; r += 2) a.push({ x: t[r], y: t[r + 1] });
                for (r = 0; r < e.length; r += 2) n.push({ x: e[r], y: e[r + 1] });
                var o = [];
                return (
                    n.forEach(function(t) {
                        var e = g._getProjectionToLine(t, a, i);
                        o.push(e.x), o.push(e.y);
                    }),
                    o
                );
            },
            _prepareToStringify(t) {
                var e;
                for (var i in ((t.visitedByCircularReferenceRemoval = !0), t))
                    if (t.hasOwnProperty(i) && t[i] && "object" == typeof t[i])
                        if (((e = Object.getOwnPropertyDescriptor(t, i)), t[i].visitedByCircularReferenceRemoval || g._isElement(t[i]))) {
                            if (!e.configurable) return null;
                            delete t[i];
                        } else if (null === g._prepareToStringify(t[i])) {
                    if (!e.configurable) return null;
                    delete t[i];
                }
                return delete t.visitedByCircularReferenceRemoval, t;
            },
            _assign(t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            },
            _getFirstPointerId: (t) => (t.touches ? t.changedTouches[0].identifier : t.pointerId || 999),
        };

    function u(t) {
        return g._isString(t) ?
            '"' + t + '"' :
            "[object Number]" === Object.prototype.toString.call(t) || g._isBoolean(t) ?
            t :
            Object.prototype.toString.call(t);
    }

    function f(t) {
        return t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
    }

    function p() {
        if (i.isUnminified)
            return function(t, e) {
                return g._isNumber(t) || g.warn(u(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number.'), t;
            };
    }

    function v(t) {
        if (i.isUnminified)
            return function(e, i) {
                let r = g._isNumber(e),
                    a = g._isArray(e) && e.length == t;
                return (
                    r || a || g.warn(u(e) + ' is a not valid value for "' + i + '" attribute. The value should be a number or Array<number>(' + t + ")"), e
                );
            };
    }

    function m() {
        if (i.isUnminified)
            return function(t, e) {
                return (
                    g._isNumber(t) ||
                    "auto" === t ||
                    g.warn(u(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or "auto".'),
                    t
                );
            };
    }

    function _() {
        if (i.isUnminified)
            return function(t, e) {
                return g._isString(t) || g.warn(u(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string.'), t;
            };
    }

    function y() {
        if (i.isUnminified)
            return function(t, e) {
                const i = g._isString(t),
                    r = "[object CanvasGradient]" === Object.prototype.toString.call(t) || (t && t.addColorStop);
                return i || r || g.warn(u(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string or a native gradient.'), t;
            };
    }

    function x() {
        if (i.isUnminified)
            return function(t, e) {
                return !0 === t || !1 === t || g.warn(u(t) + ' is a not valid value for "' + e + '" attribute. The value should be a boolean.'), t;
            };
    }
    var b = "get",
        S = "set";
    const w = {
        addGetterSetter(t, e, i, r, a) {
            w.addGetter(t, e, i), w.addSetter(t, e, r, a), w.addOverloadedGetterSetter(t, e);
        },
        addGetter(t, e, i) {
            var r = b + g._capitalize(e);
            t.prototype[r] =
                t.prototype[r] ||
                function() {
                    var t = this.attrs[e];
                    return void 0 === t ? i : t;
                };
        },
        addSetter(t, e, i, r) {
            var a = S + g._capitalize(e);
            t.prototype[a] || w.overWriteSetter(t, e, i, r);
        },
        overWriteSetter(t, e, i, r) {
            var a = S + g._capitalize(e);
            t.prototype[a] = function(t) {
                return i && null != t && (t = i.call(this, t, e)), this._setAttr(e, t), r && r.call(this), this;
            };
        },
        addComponentsGetterSetter(t, e, r, a, n) {
            var s,
                o,
                h = r.length,
                l = g._capitalize,
                d = b + l(e),
                c = S + l(e);
            t.prototype[d] = function() {
                var t = {};
                for (s = 0; s < h; s++) t[(o = r[s])] = this.getAttr(e + l(o));
                return t;
            };
            var f = (function(t) {
                if (i.isUnminified)
                    return function(e, i) {
                        return (
                            g.isObject(e) ||
                            g.warn(u(e) + ' is a not valid value for "' + i + '" attribute. The value should be an object with properties ' + t),
                            e
                        );
                    };
            })(r);
            (t.prototype[c] = function(t) {
                var i,
                    r = this.attrs[e];
                for (i in (a && (t = a.call(this, t)), f && f.call(this, t, e), t)) t.hasOwnProperty(i) && this._setAttr(e + l(i), t[i]);
                return this._fireChangeEvent(e, r, t), n && n.call(this), this;
            }),
            w.addOverloadedGetterSetter(t, e);
        },
        addOverloadedGetterSetter(t, e) {
            var i = g._capitalize(e),
                r = S + i,
                a = b + i;
            t.prototype[e] = function() {
                return arguments.length ? (this[r](arguments[0]), this) : this[a]();
            };
        },
        addDeprecatedGetterSetter(t, e, i, r) {
            g.error("Adding deprecated " + e);
            var a = b + g._capitalize(e),
                n = e + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
            (t.prototype[a] = function() {
                g.error(n);
                var t = this.attrs[e];
                return void 0 === t ? i : t;
            }),
            w.addSetter(t, e, r, function() {
                    g.error(n);
                }),
                w.addOverloadedGetterSetter(t, e);
        },
        backCompat(t, e) {
            g.each(e, function(e, i) {
                var r = t.prototype[i],
                    a = b + g._capitalize(e),
                    n = S + g._capitalize(e);

                function s() {
                    r.apply(this, arguments), g.error('"' + e + '" method is deprecated and will be removed soon. Use ""' + i + '" instead.');
                }
                (t.prototype[e] = s), (t.prototype[a] = s), (t.prototype[n] = s);
            });
        },
        afterSetFilter() {
            this._filterUpToDate = !1;
        },
    };

    function C(t) {
        var e,
            i,
            r = [],
            a = t.length,
            n = g;
        for (e = 0; e < a; e++)(i = t[e]), n._isNumber(i) ? (i = Math.round(1e3 * i) / 1e3) : n._isString(i) || (i += ""), r.push(i);
        return r;
    }
    var k = [
        "arc",
        "arcTo",
        "beginPath",
        "bezierCurveTo",
        "clearRect",
        "clip",
        "closePath",
        "createLinearGradient",
        "createPattern",
        "createRadialGradient",
        "drawImage",
        "ellipse",
        "fill",
        "fillText",
        "getImageData",
        "createImageData",
        "lineTo",
        "moveTo",
        "putImageData",
        "quadraticCurveTo",
        "rect",
        "restore",
        "rotate",
        "save",
        "scale",
        "setLineDash",
        "setTransform",
        "stroke",
        "strokeText",
        "transform",
        "translate",
    ];
    class P {
        constructor(t) {
            (this.canvas = t), (this._context = t._canvas.getContext("2d")), i.enableTrace && ((this.traceArr = []), this._enableTrace());
        }
        fillShape(t) {
            t.fillEnabled() && this._fill(t);
        }
        _fill(t) {}
        strokeShape(t) {
            t.hasStroke() && this._stroke(t);
        }
        _stroke(t) {}
        fillStrokeShape(t) {
            t.attrs.fillAfterStrokeEnabled ? (this.strokeShape(t), this.fillShape(t)) : (this.fillShape(t), this.strokeShape(t));
        }
        getTrace(t, e) {
            var i,
                r,
                a,
                n,
                s = this.traceArr,
                o = s.length,
                h = "";
            for (i = 0; i < o; i++)
                (a = (r = s[i]).method) ?
                ((n = r.args),
                    (h += a),
                    t ?
                    (h += "()") :
                    g._isArray(n[0]) ?
                    (h += "([" + n.join(",") + "])") :
                    (e && (n = n.map((t) => ("number" == typeof t ? Math.floor(t) : t))), (h += "(" + n.join(",") + ")"))) :
                ((h += r.property), t || (h += "=" + r.val)),
                (h += ";");
            return h;
        }
        clearTrace() {
            this.traceArr = [];
        }
        _trace(t) {
            var e = this.traceArr;
            e.push(t), e.length >= 100 && e.shift();
        }
        reset() {
            var t = this.getCanvas().getPixelRatio();
            this.setTransform(1 * t, 0, 0, 1 * t, 0, 0);
        }
        getCanvas() {
            return this.canvas;
        }
        clear(t) {
            var e = this.getCanvas();
            t
                ?
                this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) :
                this.clearRect(0, 0, e.getWidth() / e.pixelRatio, e.getHeight() / e.pixelRatio);
        }
        _applyLineCap(t) {
            var e = t.getLineCap();
            e && this.setAttr("lineCap", e);
        }
        _applyOpacity(t) {
            var e = t.getAbsoluteOpacity();
            1 !== e && this.setAttr("globalAlpha", e);
        }
        _applyLineJoin(t) {
            var e = t.attrs.lineJoin;
            e && this.setAttr("lineJoin", e);
        }
        setAttr(t, e) {
            this._context[t] = e;
        }
        arc(t, e, i, r, a, n) {
            this._context.arc(t, e, i, r, a, n);
        }
        arcTo(t, e, i, r, a) {
            this._context.arcTo(t, e, i, r, a);
        }
        beginPath() {
            this._context.beginPath();
        }
        bezierCurveTo(t, e, i, r, a, n) {
            this._context.bezierCurveTo(t, e, i, r, a, n);
        }
        clearRect(t, e, i, r) {
            this._context.clearRect(t, e, i, r);
        }
        clip() {
            this._context.clip();
        }
        closePath() {
            this._context.closePath();
        }
        createImageData(t, e) {
            var i = arguments;
            return 2 === i.length ? this._context.createImageData(t, e) : 1 === i.length ? this._context.createImageData(t) : void 0;
        }
        createLinearGradient(t, e, i, r) {
            return this._context.createLinearGradient(t, e, i, r);
        }
        createPattern(t, e) {
            return this._context.createPattern(t, e);
        }
        createRadialGradient(t, e, i, r, a, n) {
            return this._context.createRadialGradient(t, e, i, r, a, n);
        }
        drawImage(t, e, i, r, a, n, s, o, h) {
            var l = arguments,
                d = this._context;
            3 === l.length ? d.drawImage(t, e, i) : 5 === l.length ? d.drawImage(t, e, i, r, a) : 9 === l.length && d.drawImage(t, e, i, r, a, n, s, o, h);
        }
        ellipse(t, e, i, r, a, n, s, o) {
            this._context.ellipse(t, e, i, r, a, n, s, o);
        }
        isPointInPath(t, e) {
            return this._context.isPointInPath(t, e);
        }
        fill(t) {
            t ? this._context.fill(t) : this._context.fill();
        }
        fillRect(t, e, i, r) {
            this._context.fillRect(t, e, i, r);
        }
        strokeRect(t, e, i, r) {
            this._context.strokeRect(t, e, i, r);
        }
        fillText(t, e, i, r) {
            r ? this._context.fillText(t, e, i, r) : this._context.fillText(t, e, i);
        }
        measureText(t) {
            return this._context.measureText(t);
        }
        getImageData(t, e, i, r) {
            return this._context.getImageData(t, e, i, r);
        }
        lineTo(t, e) {
            this._context.lineTo(t, e);
        }
        moveTo(t, e) {
            this._context.moveTo(t, e);
        }
        rect(t, e, i, r) {
            this._context.rect(t, e, i, r);
        }
        putImageData(t, e, i) {
            this._context.putImageData(t, e, i);
        }
        quadraticCurveTo(t, e, i, r) {
            this._context.quadraticCurveTo(t, e, i, r);
        }
        restore() {
            this._context.restore();
        }
        rotate(t) {
            this._context.rotate(t);
        }
        save() {
            this._context.save();
        }
        scale(t, e) {
            this._context.scale(t, e);
        }
        setLineDash(t) {
            this._context.setLineDash ?
                this._context.setLineDash(t) :
                "mozDash" in this._context ?
                (this._context.mozDash = t) :
                "webkitLineDash" in this._context && (this._context.webkitLineDash = t);
        }
        getLineDash() {
            return this._context.getLineDash();
        }
        setTransform(t, e, i, r, a, n) {
            this._context.setTransform(t, e, i, r, a, n);
        }
        stroke(t) {
            t ? this._context.stroke(t) : this._context.stroke();
        }
        strokeText(t, e, i, r) {
            this._context.strokeText(t, e, i, r);
        }
        transform(t, e, i, r, a, n) {
            this._context.transform(t, e, i, r, a, n);
        }
        translate(t, e) {
            this._context.translate(t, e);
        }
        _enableTrace() {
            var t,
                e,
                i = this,
                r = k.length,
                a = this.setAttr,
                n = function(t) {
                    var r,
                        a = i[t];
                    i[t] = function() {
                        return (e = C(Array.prototype.slice.call(arguments, 0))), (r = a.apply(i, arguments)), i._trace({ method: t, args: e }), r;
                    };
                };
            for (t = 0; t < r; t++) n(k[t]);
            i.setAttr = function() {
                a.apply(i, arguments);
                var t = arguments[0],
                    e = arguments[1];
                ("shadowOffsetX" !== t && "shadowOffsetY" !== t && "shadowBlur" !== t) || (e /= this.canvas.getPixelRatio()),
                i._trace({ property: t, val: e });
            };
        }
        _applyGlobalCompositeOperation(t) {
            const e = t.attrs.globalCompositeOperation;
            !e || "source-over" === e || this.setAttr("globalCompositeOperation", e);
        }
    }
    [
        "fillStyle",
        "strokeStyle",
        "shadowColor",
        "shadowBlur",
        "shadowOffsetX",
        "shadowOffsetY",
        "lineCap",
        "lineDashOffset",
        "lineJoin",
        "lineWidth",
        "miterLimit",
        "font",
        "textAlign",
        "textBaseline",
        "globalAlpha",
        "globalCompositeOperation",
        "imageSmoothingEnabled",
    ].forEach(function(t) {
        Object.defineProperty(P.prototype, t, {
            get() {
                return this._context[t];
            },
            set(e) {
                this._context[t] = e;
            },
        });
    });
    class T extends P {
        _fillColor(t) {
            var e = t.fill();
            this.setAttr("fillStyle", e), t._fillFunc(this);
        }
        _fillPattern(t) {
            this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this);
        }
        _fillLinearGradient(t) {
            var e = t._getLinearGradient();
            e && (this.setAttr("fillStyle", e), t._fillFunc(this));
        }
        _fillRadialGradient(t) {
            var e = t._getRadialGradient();
            e && (this.setAttr("fillStyle", e), t._fillFunc(this));
        }
        _fill(t) {
            var e = t.fill(),
                i = t.getFillPriority();
            if (e && "color" === i) this._fillColor(t);
            else {
                var r = t.getFillPatternImage();
                if (r && "pattern" === i) this._fillPattern(t);
                else {
                    var a = t.getFillLinearGradientColorStops();
                    if (a && "linear-gradient" === i) this._fillLinearGradient(t);
                    else {
                        var n = t.getFillRadialGradientColorStops();
                        n && "radial-gradient" === i ?
                            this._fillRadialGradient(t) :
                            e ?
                            this._fillColor(t) :
                            r ?
                            this._fillPattern(t) :
                            a ?
                            this._fillLinearGradient(t) :
                            n && this._fillRadialGradient(t);
                    }
                }
            }
        }
        _strokeLinearGradient(t) {
            var e = t.getStrokeLinearGradientStartPoint(),
                i = t.getStrokeLinearGradientEndPoint(),
                r = t.getStrokeLinearGradientColorStops(),
                a = this.createLinearGradient(e.x, e.y, i.x, i.y);
            if (r) {
                for (var n = 0; n < r.length; n += 2) a.addColorStop(r[n], r[n + 1]);
                this.setAttr("strokeStyle", a);
            }
        }
        _stroke(t) {
            var e = t.dash(),
                i = t.getStrokeScaleEnabled();
            if (t.hasStroke()) {
                if (!i) {
                    this.save();
                    var r = this.getCanvas().getPixelRatio();
                    this.setTransform(r, 0, 0, r, 0, 0);
                }
                this._applyLineCap(t),
                    e && t.dashEnabled() && (this.setLineDash(e), this.setAttr("lineDashOffset", t.dashOffset())),
                    this.setAttr("lineWidth", t.strokeWidth()),
                    t.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"),
                    t.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(t) : this.setAttr("strokeStyle", t.stroke()),
                    t._strokeFunc(this),
                    i || this.restore();
            }
        }
        _applyShadow(t) {
            var e,
                i,
                r,
                a = null !== (e = t.getShadowRGBA()) && void 0 !== e ? e : "black",
                n = null !== (i = t.getShadowBlur()) && void 0 !== i ? i : 5,
                s = null !== (r = t.getShadowOffset()) && void 0 !== r ? r : { x: 0, y: 0 },
                o = t.getAbsoluteScale(),
                h = this.canvas.getPixelRatio(),
                l = o.x * h,
                d = o.y * h;
            this.setAttr("shadowColor", a),
                this.setAttr("shadowBlur", n * Math.min(Math.abs(l), Math.abs(d))),
                this.setAttr("shadowOffsetX", s.x * l),
                this.setAttr("shadowOffsetY", s.y * d);
        }
    }
    class A extends P {
        _fill(t) {
            this.save(), this.setAttr("fillStyle", t.colorKey), t._fillFuncHit(this), this.restore();
        }
        strokeShape(t) {
            t.hasHitStroke() && this._stroke(t);
        }
        _stroke(t) {
            if (t.hasHitStroke()) {
                var e = t.getStrokeScaleEnabled();
                if (!e) {
                    this.save();
                    var i = this.getCanvas().getPixelRatio();
                    this.setTransform(i, 0, 0, i, 0, 0);
                }
                this._applyLineCap(t);
                var r = t.hitStrokeWidth(),
                    a = "auto" === r ? t.strokeWidth() : r;
                this.setAttr("lineWidth", a), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this), e || this.restore();
            }
        }
    }
    var M;
    class G {
        constructor(t) {
            (this.pixelRatio = 1), (this.width = 0), (this.height = 0), (this.isCache = !1);
            var e =
                (t || {}).pixelRatio ||
                i.pixelRatio ||
                (function() {
                    if (M) return M;
                    var t = g.createCanvasElement().getContext("2d");
                    return (M =
                        (i._global.devicePixelRatio || 1) /
                        (t.webkitBackingStorePixelRatio ||
                            t.mozBackingStorePixelRatio ||
                            t.msBackingStorePixelRatio ||
                            t.oBackingStorePixelRatio ||
                            t.backingStorePixelRatio ||
                            1));
                })();
            (this.pixelRatio = e),
            (this._canvas = g.createCanvasElement()),
            (this._canvas.style.padding = "0"),
            (this._canvas.style.margin = "0"),
            (this._canvas.style.border = "0"),
            (this._canvas.style.background = "transparent"),
            (this._canvas.style.position = "absolute"),
            (this._canvas.style.top = "0"),
            (this._canvas.style.left = "0");
        }
        getContext() {
            return this.context;
        }
        getPixelRatio() {
            return this.pixelRatio;
        }
        setPixelRatio(t) {
            var e = this.pixelRatio;
            (this.pixelRatio = t), this.setSize(this.getWidth() / e, this.getHeight() / e);
        }
        setWidth(t) {
            (this.width = this._canvas.width = t * this.pixelRatio), (this._canvas.style.width = t + "px");
            var e = this.pixelRatio;
            this.getContext()._context.scale(e, e);
        }
        setHeight(t) {
            (this.height = this._canvas.height = t * this.pixelRatio), (this._canvas.style.height = t + "px");
            var e = this.pixelRatio;
            this.getContext()._context.scale(e, e);
        }
        getWidth() {
            return this.width;
        }
        getHeight() {
            return this.height;
        }
        setSize(t, e) {
            this.setWidth(t || 0), this.setHeight(e || 0);
        }
        toDataURL(t, e) {
            try {
                return this._canvas.toDataURL(t, e);
            } catch (t) {
                try {
                    return this._canvas.toDataURL();
                } catch (t) {
                    return g.error("Unable to get data URL. " + t.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
                }
            }
        }
    }
    w.addGetterSetter(G, "pixelRatio", void 0, p());
    class E extends G {
        constructor(t = { width: 0, height: 0 }) {
            super(t), (this.context = new T(this)), this.setSize(t.width, t.height);
        }
    }
    class R extends G {
        constructor(t = { width: 0, height: 0 }) {
            super(t), (this.hitCanvas = !0), (this.context = new A(this)), this.setSize(t.width, t.height);
        }
    }
    const L = {
        get isDragging() {
            var t = !1;
            return (
                L._dragElements.forEach((e) => {
                    "dragging" === e.dragStatus && (t = !0);
                }),
                t
            );
        },
        justDragged: !1,
        get node() {
            var t;
            return (
                L._dragElements.forEach((e) => {
                    t = e.node;
                }),
                t
            );
        },
        _dragElements: new Map(),
        _drag(t) {
            const e = [];
            L._dragElements.forEach((i, r) => {
                    const { node: a } = i,
                    n = a.getStage();
                    n.setPointersPositions(t), void 0 === i.pointerId && (i.pointerId = g._getFirstPointerId(t));
                    const s = n._changedPointerPositions.find((t) => t.id === i.pointerId);
                    if (s) {
                        if ("dragging" !== i.dragStatus) {
                            var o = a.dragDistance();
                            if (Math.max(Math.abs(s.x - i.startPointerPos.x), Math.abs(s.y - i.startPointerPos.y)) < o) return;
                            if ((a.startDrag({ evt: t }), !a.isDragging())) return;
                        }
                        a._setDragPosition(t, i), e.push(a);
                    }
                }),
                e.forEach((e) => {
                    e.fire("dragmove", { type: "dragmove", target: e, evt: t }, !0);
                });
        },
        _endDragBefore(t) {
            L._dragElements.forEach((e) => {
                const { node: r } = e,
                a = r.getStage();
                t && a.setPointersPositions(t);
                if (!a._changedPointerPositions.find((t) => t.id === e.pointerId)) return;
                ("dragging" !== e.dragStatus && "stopped" !== e.dragStatus) ||
                ((L.justDragged = !0),
                    (i._mouseListenClick = !1),
                    (i._touchListenClick = !1),
                    (i._pointerListenClick = !1),
                    (e.dragStatus = "stopped"));
                const n = e.node.getLayer() || (e.node instanceof i.Stage && e.node);
                n && n.batchDraw();
            });
        },
        _endDragAfter(t) {
            L._dragElements.forEach((e, i) => {
                "stopped" === e.dragStatus && e.node.fire("dragend", { type: "dragend", target: e.node, evt: t }, !0),
                    "dragging" !== e.dragStatus && L._dragElements.delete(i);
            });
        },
    };
    i.isBrowser &&
        (window.addEventListener("mouseup", L._endDragBefore, !0),
            window.addEventListener("touchend", L._endDragBefore, !0),
            window.addEventListener("mousemove", L._drag),
            window.addEventListener("touchmove", L._drag),
            window.addEventListener("mouseup", L._endDragAfter, !1),
            window.addEventListener("touchend", L._endDragAfter, !1));
    var D = "absoluteOpacity",
        O = "allEventListeners",
        I = "absoluteTransform",
        F = "absoluteScale",
        N = "canvas",
        B = "listening",
        z = "mouseenter",
        W = "mouseleave",
        H = "Shape",
        Y = " ",
        X = "stage",
        j = "transform",
        U = "visible",
        q = [
            "xChange.konva",
            "yChange.konva",
            "scaleXChange.konva",
            "scaleYChange.konva",
            "skewXChange.konva",
            "skewYChange.konva",
            "rotationChange.konva",
            "offsetXChange.konva",
            "offsetYChange.konva",
            "transformsEnabledChange.konva",
        ].join(Y);
    let V = 1;
    class K {
        constructor(t) {
            (this._id = V++),
            (this.eventListeners = {}),
            (this.attrs = {}),
            (this.index = 0),
            (this._allEventListeners = null),
            (this.parent = null),
            (this._cache = new Map()),
            (this._attachedDepsListeners = new Map()),
            (this._lastPos = null),
            (this._batchingTransformChange = !1),
            (this._needClearTransformCache = !1),
            (this._filterUpToDate = !1),
            (this._isUnderCache = !1),
            (this._dragEventId = null),
            (this._shouldFireChangeEvents = !1),
            this.setAttrs(t),
                (this._shouldFireChangeEvents = !0);
        }
        hasChildren() {
            return !1;
        }
        _clearCache(t) {
            (t !== j && t !== I) || !this._cache.get(t) ? (t ? this._cache.delete(t) : this._cache.clear()) : (this._cache.get(t).dirty = !0);
        }
        _getCache(t, e) {
            var i = this._cache.get(t);
            return (void 0 === i || ((t === j || t === I) && !0 === i.dirty)) && ((i = e.call(this)), this._cache.set(t, i)), i;
        }
        _calculate(t, e, i) {
            if (!this._attachedDepsListeners.get(t)) {
                const i = e.map((t) => t + "Change.konva").join(Y);
                this.on(i, () => {
                        this._clearCache(t);
                    }),
                    this._attachedDepsListeners.set(t, !0);
            }
            return this._getCache(t, i);
        }
        _getCanvasCache() {
            return this._cache.get(N);
        }
        _clearSelfAndDescendantCache(t) {
            this._clearCache(t), t === I && this.fire("absoluteTransformChange");
        }
        clearCache() {
            return this._cache.delete(N), this._clearSelfAndDescendantCache(), this._requestDraw(), this;
        }
        cache(t) {
            var e = t || {},
                i = {};
            (void 0 !== e.x && void 0 !== e.y && void 0 !== e.width && void 0 !== e.height) ||
            (i = this.getClientRect({ skipTransform: !0, relativeTo: this.getParent() }));
            var r = Math.ceil(e.width || i.width),
                a = Math.ceil(e.height || i.height),
                n = e.pixelRatio,
                s = void 0 === e.x ? i.x : e.x,
                o = void 0 === e.y ? i.y : e.y,
                h = e.offset || 0,
                l = e.drawBorder || !1,
                d = e.hitCanvasPixelRatio || 1;
            if (r && a) {
                (s -= h), (o -= h);
                var c = new E({ pixelRatio: n, width: (r += 2 * h), height: (a += 2 * h) }),
                    u = new E({ pixelRatio: n, width: 0, height: 0 }),
                    f = new R({ pixelRatio: d, width: r, height: a }),
                    p = c.getContext(),
                    v = f.getContext();
                return (
                    (f.isCache = !0),
                    (c.isCache = !0),
                    this._cache.delete(N),
                    (this._filterUpToDate = !1), !1 === e.imageSmoothingEnabled &&
                    ((c.getContext()._context.imageSmoothingEnabled = !1), (u.getContext()._context.imageSmoothingEnabled = !1)),
                    p.save(),
                    v.save(),
                    p.translate(-s, -o),
                    v.translate(-s, -o),
                    (this._isUnderCache = !0),
                    this._clearSelfAndDescendantCache(D),
                    this._clearSelfAndDescendantCache(F),
                    this.drawScene(c, this),
                    this.drawHit(f, this),
                    (this._isUnderCache = !1),
                    p.restore(),
                    v.restore(),
                    l &&
                    (p.save(),
                        p.beginPath(),
                        p.rect(0, 0, r, a),
                        p.closePath(),
                        p.setAttr("strokeStyle", "red"),
                        p.setAttr("lineWidth", 5),
                        p.stroke(),
                        p.restore()),
                    this._cache.set(N, { scene: c, filter: u, hit: f, x: s, y: o }),
                    this._requestDraw(),
                    this
                );
            }
            g.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        }
        isCached() {
            return this._cache.has(N);
        }
        getClientRect(t) {
            throw new Error('abstract "getClientRect" method call');
        }
        _transformedRect(t, e) {
            var i,
                r,
                a,
                n,
                s = [
                    { x: t.x, y: t.y },
                    { x: t.x + t.width, y: t.y },
                    { x: t.x + t.width, y: t.y + t.height },
                    { x: t.x, y: t.y + t.height },
                ],
                o = this.getAbsoluteTransform(e);
            return (
                s.forEach(function(t) {
                    var e = o.point(t);
                    void 0 === i && ((i = a = e.x), (r = n = e.y)),
                        (i = Math.min(i, e.x)),
                        (r = Math.min(r, e.y)),
                        (a = Math.max(a, e.x)),
                        (n = Math.max(n, e.y));
                }), { x: i, y: r, width: a - i, height: n - r }
            );
        }
        _drawCachedSceneCanvas(t) {
            t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
            const e = this._getCanvasCache();
            t.translate(e.x, e.y);
            var i = this._getCachedSceneCanvas(),
                r = i.pixelRatio;
            t.drawImage(i._canvas, 0, 0, i.width / r, i.height / r), t.restore();
        }
        _drawCachedHitCanvas(t) {
            var e = this._getCanvasCache(),
                i = e.hit;
            t.save(), t.translate(e.x, e.y), t.drawImage(i._canvas, 0, 0, i.width / i.pixelRatio, i.height / i.pixelRatio), t.restore();
        }
        _getCachedSceneCanvas() {
            var t,
                e,
                i,
                r,
                a = this.filters(),
                n = this._getCanvasCache(),
                s = n.scene,
                o = n.filter,
                h = o.getContext();
            if (a) {
                if (!this._filterUpToDate) {
                    var l = s.pixelRatio;
                    o.setSize(s.width / s.pixelRatio, s.height / s.pixelRatio);
                    try {
                        for (
                            t = a.length,
                            h.clear(),
                            h.drawImage(s._canvas, 0, 0, s.getWidth() / l, s.getHeight() / l),
                            e = h.getImageData(0, 0, o.getWidth(), o.getHeight()),
                            i = 0; i < t; i++
                        )
                            "function" == typeof(r = a[i]) ?
                            (r.call(this, e), h.putImageData(e, 0, 0)) :
                            g.error("Filter should be type of function, but got " + typeof r + " instead. Please check correct filters");
                    } catch (t) {
                        g.error("Unable to apply filter. " + t.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
                    }
                    this._filterUpToDate = !0;
                }
                return o;
            }
            return s;
        }
        on(t, e) {
            if ((this._cache && this._cache.delete(O), 3 === arguments.length)) return this._delegate.apply(this, arguments);
            var i,
                r,
                a,
                n,
                s = t.split(Y),
                o = s.length;
            for (i = 0; i < o; i++)
                (a = (r = s[i].split("."))[0]),
                (n = r[1] || ""),
                this.eventListeners[a] || (this.eventListeners[a] = []),
                this.eventListeners[a].push({ name: n, handler: e });
            return this;
        }
        off(t, e) {
            var i,
                r,
                a,
                n,
                s,
                o = (t || "").split(Y),
                h = o.length;
            if ((this._cache && this._cache.delete(O), !t))
                for (r in this.eventListeners) this._off(r);
            for (i = 0; i < h; i++)
                if (((n = (a = o[i].split("."))[0]), (s = a[1]), n)) this.eventListeners[n] && this._off(n, s, e);
                else
                    for (r in this.eventListeners) this._off(r, s, e);
            return this;
        }
        dispatchEvent(t) {
            var e = { target: this, type: t.type, evt: t };
            return this.fire(t.type, e), this;
        }
        addEventListener(t, e) {
            return (
                this.on(t, function(t) {
                    e.call(this, t.evt);
                }),
                this
            );
        }
        removeEventListener(t) {
            return this.off(t), this;
        }
        _delegate(t, e, i) {
            var r = this;
            this.on(t, function(t) {
                for (var a = t.target.findAncestors(e, !0, r), n = 0; n < a.length; n++)((t = g.cloneObject(t)).currentTarget = a[n]), i.call(a[n], t);
            });
        }
        remove() {
            return this.isDragging() && this.stopDrag(), L._dragElements.delete(this._id), this._remove(), this;
        }
        _clearCaches() {
            this._clearSelfAndDescendantCache(I),
                this._clearSelfAndDescendantCache(D),
                this._clearSelfAndDescendantCache(F),
                this._clearSelfAndDescendantCache(X),
                this._clearSelfAndDescendantCache(U),
                this._clearSelfAndDescendantCache(B);
        }
        _remove() {
            this._clearCaches();
            var t = this.getParent();
            t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), (this.parent = null));
        }
        destroy() {
            return this.remove(), this;
        }
        getAttr(t) {
            var e = "get" + g._capitalize(t);
            return g._isFunction(this[e]) ? this[e]() : this.attrs[t];
        }
        getAncestors() {
            for (var t = this.getParent(), e = []; t;) e.push(t), (t = t.getParent());
            return e;
        }
        getAttrs() {
            return this.attrs || {};
        }
        setAttrs(t) {
            return (
                this._batchTransformChanges(() => {
                    var e, i;
                    if (!t) return this;
                    for (e in t) "children" !== e && ((i = "set" + g._capitalize(e)), g._isFunction(this[i]) ? this[i](t[e]) : this._setAttr(e, t[e]));
                }),
                this
            );
        }
        isListening() {
            return this._getCache(B, this._isListening);
        }
        _isListening(t) {
            if (!this.listening()) return !1;
            const e = this.getParent();
            return !e || e === t || this === t || e._isListening(t);
        }
        isVisible() {
            return this._getCache(U, this._isVisible);
        }
        _isVisible(t) {
            if (!this.visible()) return !1;
            const e = this.getParent();
            return !e || e === t || this === t || e._isVisible(t);
        }
        shouldDrawHit(t, e = !1) {
            if (t) return this._isVisible(t) && this._isListening(t);
            var r = this.getLayer(),
                a = !1;
            L._dragElements.forEach((t) => {
                "dragging" === t.dragStatus && ("Stage" === t.node.nodeType || t.node.getLayer() === r) && (a = !0);
            });
            var n = !e && !i.hitOnDragEnabled && a;
            return this.isListening() && this.isVisible() && !n;
        }
        show() {
            return this.visible(!0), this;
        }
        hide() {
            return this.visible(!1), this;
        }
        getZIndex() {
            return this.index || 0;
        }
        getAbsoluteZIndex() {
            var t,
                e,
                i,
                r,
                a = this.getDepth(),
                n = this,
                s = 0;
            return (
                "Stage" !== n.nodeType &&
                (function o(h) {
                    for (t = [], e = h.length, i = 0; i < e; i++)
                        (r = h[i]), s++, r.nodeType !== H && (t = t.concat(r.getChildren().slice())), r._id === n._id && (i = e);
                    t.length > 0 && t[0].getDepth() <= a && o(t);
                })(n.getStage().getChildren()),
                s
            );
        }
        getDepth() {
            for (var t = 0, e = this.parent; e;) t++, (e = e.parent);
            return t;
        }
        _batchTransformChanges(t) {
            (this._batchingTransformChange = !0),
            t(),
                (this._batchingTransformChange = !1),
                this._needClearTransformCache && (this._clearCache(j), this._clearSelfAndDescendantCache(I)),
                (this._needClearTransformCache = !1);
        }
        setPosition(t) {
            return (
                this._batchTransformChanges(() => {
                    this.x(t.x), this.y(t.y);
                }),
                this
            );
        }
        getPosition() {
            return { x: this.x(), y: this.y() };
        }
        getRelativePointerPosition() {
            if (!this.getStage()) return null;
            var t = this.getStage().getPointerPosition();
            if (!t) return null;
            var e = this.getAbsoluteTransform().copy();
            return e.invert(), e.point(t);
        }
        getAbsolutePosition(t) {
            let e = !1,
                i = this.parent;
            for (; i;) {
                if (i.isCached()) {
                    e = !0;
                    break;
                }
                i = i.parent;
            }
            e && !t && (t = !0);
            var r = this.getAbsoluteTransform(t).getMatrix(),
                n = new a(),
                s = this.offset();
            return (n.m = r.slice()), n.translate(s.x, s.y), n.getTranslation();
        }
        setAbsolutePosition(t) {
            var e = this._clearTransform();
            (this.attrs.x = e.x), (this.attrs.y = e.y), delete e.x, delete e.y, this._clearCache(j);
            var i = this._getAbsoluteTransform().copy();
            return (
                i.invert(),
                i.translate(t.x, t.y),
                (t = { x: this.attrs.x + i.getTranslation().x, y: this.attrs.y + i.getTranslation().y }),
                this._setTransform(e),
                this.setPosition({ x: t.x, y: t.y }),
                this._clearCache(j),
                this._clearSelfAndDescendantCache(I),
                this
            );
        }
        _setTransform(t) {
            var e;
            for (e in t) this.attrs[e] = t[e];
        }
        _clearTransform() {
            var t = {
                x: this.x(),
                y: this.y(),
                rotation: this.rotation(),
                scaleX: this.scaleX(),
                scaleY: this.scaleY(),
                offsetX: this.offsetX(),
                offsetY: this.offsetY(),
                skewX: this.skewX(),
                skewY: this.skewY(),
            };
            return (
                (this.attrs.x = 0),
                (this.attrs.y = 0),
                (this.attrs.rotation = 0),
                (this.attrs.scaleX = 1),
                (this.attrs.scaleY = 1),
                (this.attrs.offsetX = 0),
                (this.attrs.offsetY = 0),
                (this.attrs.skewX = 0),
                (this.attrs.skewY = 0),
                t
            );
        }
        move(t) {
            var e = t.x,
                i = t.y,
                r = this.x(),
                a = this.y();
            return void 0 !== e && (r += e), void 0 !== i && (a += i), this.setPosition({ x: r, y: a }), this;
        }
        _eachAncestorReverse(t, e) {
            var i,
                r,
                a = [],
                n = this.getParent();
            if (!e || e._id !== this._id) {
                for (a.unshift(this); n && (!e || n._id !== e._id);) a.unshift(n), (n = n.parent);
                for (i = a.length, r = 0; r < i; r++) t(a[r]);
            }
        }
        rotate(t) {
            return this.rotation(this.rotation() + t), this;
        }
        moveToTop() {
            if (!this.parent) return g.warn("Node has no parent. moveToTop function is ignored."), !1;
            var t = this.index;
            return this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0;
        }
        moveUp() {
            if (!this.parent) return g.warn("Node has no parent. moveUp function is ignored."), !1;
            var t = this.index;
            return (
                t < this.parent.getChildren().length - 1 &&
                (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0)
            );
        }
        moveDown() {
            if (!this.parent) return g.warn("Node has no parent. moveDown function is ignored."), !1;
            var t = this.index;
            return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0);
        }
        moveToBottom() {
            if (!this.parent) return g.warn("Node has no parent. moveToBottom function is ignored."), !1;
            var t = this.index;
            return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0);
        }
        setZIndex(t) {
            if (!this.parent) return g.warn("Node has no parent. zIndex parameter is ignored."), this;
            (t < 0 || t >= this.parent.children.length) &&
            g.warn(
                "Unexpected value " +
                t +
                " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " +
                (this.parent.children.length - 1) +
                "."
            );
            var e = this.index;
            return this.parent.children.splice(e, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this;
        }
        getAbsoluteOpacity() {
            return this._getCache(D, this._getAbsoluteOpacity);
        }
        _getAbsoluteOpacity() {
            var t = this.opacity(),
                e = this.getParent();
            return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()), t;
        }
        moveTo(t) {
            return this.getParent() !== t && (this._remove(), t.add(this)), this;
        }
        toObject() {
            var t,
                e,
                i,
                r,
                a = {},
                n = this.getAttrs();
            for (t in ((a.attrs = {}), n))
                (e = n[t]),
                (g.isObject(e) && !g._isPlainObject(e) && !g._isArray(e)) ||
                ((i = "function" == typeof this[t] && this[t]),
                    delete n[t],
                    (r = i ? i.call(this) : null),
                    (n[t] = e),
                    r !== e && (a.attrs[t] = e));
            return (a.className = this.getClassName()), g._prepareToStringify(a);
        }
        toJSON() {
            return JSON.stringify(this.toObject());
        }
        getParent() {
            return this.parent;
        }
        findAncestors(t, e, i) {
            var r = [];
            e && this._isMatch(t) && r.push(this);
            for (var a = this.parent; a;) {
                if (a === i) return r;
                a._isMatch(t) && r.push(a), (a = a.parent);
            }
            return r;
        }
        isAncestorOf(t) {
            return !1;
        }
        findAncestor(t, e, i) {
            return this.findAncestors(t, e, i)[0];
        }
        _isMatch(t) {
            if (!t) return !1;
            if ("function" == typeof t) return t(this);
            var e,
                i,
                r = t.replace(/ /g, "").split(","),
                a = r.length;
            for (e = 0; e < a; e++)
                if (
                    ((i = r[e]),
                        g.isValidSelector(i) ||
                        (g.warn('Selector "' + i + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'),
                            g.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'),
                            g.warn("Konva is awesome, right?")),
                        "#" === i.charAt(0))
                ) {
                    if (this.id() === i.slice(1)) return !0;
                } else if ("." === i.charAt(0)) {
                if (this.hasName(i.slice(1))) return !0;
            } else if (this.className === i || this.nodeType === i) return !0;
            return !1;
        }
        getLayer() {
            var t = this.getParent();
            return t ? t.getLayer() : null;
        }
        getStage() {
            return this._getCache(X, this._getStage);
        }
        _getStage() {
            var t = this.getParent();
            return t ? t.getStage() : void 0;
        }
        fire(t, e = {}, i) {
            return (e.target = e.target || this), i ? this._fireAndBubble(t, e) : this._fire(t, e), this;
        }
        getAbsoluteTransform(t) {
            return t ? this._getAbsoluteTransform(t) : this._getCache(I, this._getAbsoluteTransform);
        }
        _getAbsoluteTransform(t) {
            var e;
            if (t)
                return (
                    (e = new a()),
                    this._eachAncestorReverse(function(t) {
                        var i = t.transformsEnabled();
                        "all" === i ? e.multiply(t.getTransform()) : "position" === i && e.translate(t.x() - t.offsetX(), t.y() - t.offsetY());
                    }, t),
                    e
                );
            (e = this._cache.get(I) || new a()), this.parent ? this.parent.getAbsoluteTransform().copyInto(e) : e.reset();
            var i = this.transformsEnabled();
            if ("all" === i) e.multiply(this.getTransform());
            else if ("position" === i) {
                const t = this.attrs.x || 0,
                    i = this.attrs.y || 0,
                    r = this.attrs.offsetX || 0,
                    a = this.attrs.offsetY || 0;
                e.translate(t - r, i - a);
            }
            return (e.dirty = !1), e;
        }
        getAbsoluteScale(t) {
            for (var e = this; e;) e._isUnderCache && (t = e), (e = e.getParent());
            const i = this.getAbsoluteTransform(t).decompose();
            return { x: i.scaleX, y: i.scaleY };
        }
        getAbsoluteRotation() {
            return this.getAbsoluteTransform().decompose().rotation;
        }
        getTransform() {
            return this._getCache(j, this._getTransform);
        }
        _getTransform() {
            var t,
                e,
                r = this._cache.get(j) || new a();
            r.reset();
            var n = this.x(),
                s = this.y(),
                o = i.getAngle(this.rotation()),
                h = null !== (t = this.attrs.scaleX) && void 0 !== t ? t : 1,
                l = null !== (e = this.attrs.scaleY) && void 0 !== e ? e : 1,
                d = this.attrs.skewX || 0,
                c = this.attrs.skewY || 0,
                g = this.attrs.offsetX || 0,
                u = this.attrs.offsetY || 0;
            return (
                (0 === n && 0 === s) || r.translate(n, s),
                0 !== o && r.rotate(o),
                (0 === d && 0 === c) || r.skew(d, c),
                (1 === h && 1 === l) || r.scale(h, l),
                (0 === g && 0 === u) || r.translate(-1 * g, -1 * u),
                (r.dirty = !1),
                r
            );
        }
        clone(t) {
            var e,
                i,
                r,
                a,
                n,
                s = g.cloneObject(this.attrs);
            for (e in t) s[e] = t[e];
            var o = new this.constructor(s);
            for (e in this.eventListeners)
                for (r = (i = this.eventListeners[e]).length, a = 0; a < r; a++)
                    (n = i[a]).name.indexOf("konva") < 0 && (o.eventListeners[e] || (o.eventListeners[e] = []), o.eventListeners[e].push(n));
            return o;
        }
        _toKonvaCanvas(t) {
            t = t || {};
            var e = this.getClientRect(),
                i = this.getStage(),
                r = void 0 !== t.x ? t.x : e.x,
                a = void 0 !== t.y ? t.y : e.y,
                n = t.pixelRatio || 1,
                s = new E({ width: t.width || e.width || (i ? i.width() : 0), height: t.height || e.height || (i ? i.height() : 0), pixelRatio: n }),
                o = s.getContext();
            return o.save(), (r || a) && o.translate(-1 * r, -1 * a), this.drawScene(s), o.restore(), s;
        }
        toCanvas(t) {
            return this._toKonvaCanvas(t)._canvas;
        }
        toDataURL(t) {
            var e = (t = t || {}).mimeType || null,
                i = t.quality || null,
                r = this._toKonvaCanvas(t).toDataURL(e, i);
            return t.callback && t.callback(r), r;
        }
        toImage(t) {
            if (!t || !t.callback) throw "callback required for toImage method config argument";
            var e = t.callback;
            delete t.callback,
                g._urlToImage(this.toDataURL(t), function(t) {
                    e(t);
                });
        }
        setSize(t) {
            return this.width(t.width), this.height(t.height), this;
        }
        getSize() {
            return { width: this.width(), height: this.height() };
        }
        getClassName() {
            return this.className || this.nodeType;
        }
        getType() {
            return this.nodeType;
        }
        getDragDistance() {
            return void 0 !== this.attrs.dragDistance ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : i.dragDistance;
        }
        _off(t, e, i) {
            var r,
                a,
                n,
                s = this.eventListeners[t];
            for (r = 0; r < s.length; r++)
                if (((a = s[r].name), (n = s[r].handler), !(("konva" === a && "konva" !== e) || (e && a !== e) || (i && i !== n)))) {
                    if ((s.splice(r, 1), 0 === s.length)) {
                        delete this.eventListeners[t];
                        break;
                    }
                    r--;
                }
        }
        _fireChangeEvent(t, e, i) {
            this._fire(t + "Change", { oldVal: e, newVal: i });
        }
        addName(t) {
            if (!this.hasName(t)) {
                var e = this.name(),
                    i = e ? e + " " + t : t;
                this.name(i);
            }
            return this;
        }
        hasName(t) {
            if (!t) return !1;
            const e = this.name();
            return !!e && -1 !== (e || "").split(/\s/g).indexOf(t);
        }
        removeName(t) {
            var e = (this.name() || "").split(/\s/g),
                i = e.indexOf(t);
            return -1 !== i && (e.splice(i, 1), this.name(e.join(" "))), this;
        }
        setAttr(t, e) {
            var i = this["set" + g._capitalize(t)];
            return g._isFunction(i) ? i.call(this, e) : this._setAttr(t, e), this;
        }
        _requestDraw() {
            if (i.autoDrawEnabled) {
                const t = this.getLayer() || this.getStage();
                null == t || t.batchDraw();
            }
        }
        _setAttr(t, e) {
            var i = this.attrs[t];
            (i !== e || g.isObject(e)) &&
            (null == e ? delete this.attrs[t] : (this.attrs[t] = e),
                this._shouldFireChangeEvents && this._fireChangeEvent(t, i, e),
                this._requestDraw());
        }
        _setComponentAttr(t, e, i) {
            var r;
            void 0 !== i && ((r = this.attrs[t]) || (this.attrs[t] = this.getAttr(t)), (this.attrs[t][e] = i), this._fireChangeEvent(t, r, i));
        }
        _fireAndBubble(t, e, i) {
            if (
                (e && this.nodeType === H && (e.target = this), !((t === z || t === W) && ((i && (this === i || (this.isAncestorOf && this.isAncestorOf(i)))) || ("Stage" === this.nodeType && !i))))
            ) {
                this._fire(t, e);
                var r = (t === z || t === W) && i && i.isAncestorOf && i.isAncestorOf(this) && !i.isAncestorOf(this.parent);
                ((e && !e.cancelBubble) || !e) &&
                this.parent &&
                    this.parent.isListening() &&
                    !r &&
                    (i && i.parent ? this._fireAndBubble.call(this.parent, t, e, i) : this._fireAndBubble.call(this.parent, t, e));
            }
        }
        _getProtoListeners(t) {
            let e = this._cache.get(O);
            if (!e) {
                e = {};
                let t = Object.getPrototypeOf(this);
                for (; t;)
                    if (t.eventListeners) {
                        for (var i in t.eventListeners) {
                            const r = t.eventListeners[i],
                                a = e[i] || [];
                            e[i] = r.concat(a);
                        }
                        t = Object.getPrototypeOf(t);
                    } else t = Object.getPrototypeOf(t);
                this._cache.set(O, e);
            }
            return e[t];
        }
        _fire(t, e) {
            ((e = e || {}).currentTarget = this), (e.type = t);
            const i = this._getProtoListeners(t);
            if (i)
                for (var r = 0; r < i.length; r++) i[r].handler.call(this, e);
            const a = this.eventListeners[t];
            if (a)
                for (r = 0; r < a.length; r++) a[r].handler.call(this, e);
        }
        draw() {
            return this.drawScene(), this.drawHit(), this;
        }
        _createDragElement(t) {
            var e = t ? t.pointerId : void 0,
                i = this.getStage(),
                r = this.getAbsolutePosition(),
                a = i._getPointerById(e) || i._changedPointerPositions[0] || r;
            L._dragElements.set(this._id, { node: this, startPointerPos: a, offset: { x: a.x - r.x, y: a.y - r.y }, dragStatus: "ready", pointerId: e });
        }
        startDrag(t, e = !0) {
            L._dragElements.has(this._id) || this._createDragElement(t);
            (L._dragElements.get(this._id).dragStatus = "dragging"), this.fire("dragstart", { type: "dragstart", target: this, evt: t && t.evt }, e);
        }
        _setDragPosition(t, e) {
            const i = this.getStage()._getPointerById(e.pointerId);
            if (i) {
                var r = { x: i.x - e.offset.x, y: i.y - e.offset.y },
                    a = this.dragBoundFunc();
                if (void 0 !== a) {
                    const e = a.call(this, r, t);
                    e
                        ?
                        (r = e) :
                        g.warn(
                            "dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc."
                        );
                }
                (this._lastPos && this._lastPos.x === r.x && this._lastPos.y === r.y) || (this.setAbsolutePosition(r), this._requestDraw()),
                (this._lastPos = r);
            }
        }
        stopDrag(t) {
            const e = L._dragElements.get(this._id);
            e && (e.dragStatus = "stopped"), L._endDragBefore(t), L._endDragAfter(t);
        }
        setDraggable(t) {
            this._setAttr("draggable", t), this._dragChange();
        }
        isDragging() {
            const t = L._dragElements.get(this._id);
            return !!t && "dragging" === t.dragStatus;
        }
        _listenDrag() {
            this._dragCleanup(),
                this.on("mousedown.konva touchstart.konva", function(t) {
                    if ((!(void 0 !== t.evt.button) || i.dragButtons.indexOf(t.evt.button) >= 0) && !this.isDragging()) {
                        var e = !1;
                        L._dragElements.forEach((t) => {
                                this.isAncestorOf(t.node) && (e = !0);
                            }),
                            e || this._createDragElement(t);
                    }
                });
        }
        _dragChange() {
            if (this.attrs.draggable) this._listenDrag();
            else {
                if ((this._dragCleanup(), !this.getStage())) return;
                const t = L._dragElements.get(this._id),
                    e = t && "dragging" === t.dragStatus,
                    i = t && "ready" === t.dragStatus;
                e ? this.stopDrag() : i && L._dragElements.delete(this._id);
            }
        }
        _dragCleanup() {
            this.off("mousedown.konva"), this.off("touchstart.konva");
        }
        isClientRectOnScreen(t = { x: 0, y: 0 }) {
            const e = this.getStage();
            if (!e) return !1;
            const i = { x: -t.x, y: -t.y, width: e.width() + t.x, height: e.height() + t.y };
            return g.haveIntersection(i, this.getClientRect());
        }
        static create(t, e) {
            return g._isString(t) && (t = JSON.parse(t)), this._createNode(t, e);
        }
        static _createNode(t, e) {
            var r,
                a,
                n,
                s = K.prototype.getClassName.call(t),
                o = t.children;
            e && (t.attrs.container = e), i[s] || (g.warn('Can not find a node with class name "' + s + '". Fallback to "Shape".'), (s = "Shape"));
            if (((r = new(0, i[s])(t.attrs)), o))
                for (a = o.length, n = 0; n < a; n++) r.add(K._createNode(o[n]));
            return r;
        }
    }
    (K.prototype.nodeType = "Node"),
    (K.prototype._attrsAffectingSize = []),
    (K.prototype.eventListeners = {}),
    K.prototype.on.call(K.prototype, q, function() {
            this._batchingTransformChange ? (this._needClearTransformCache = !0) : (this._clearCache(j), this._clearSelfAndDescendantCache(I));
        }),
        K.prototype.on.call(K.prototype, "visibleChange.konva", function() {
            this._clearSelfAndDescendantCache(U);
        }),
        K.prototype.on.call(K.prototype, "listeningChange.konva", function() {
            this._clearSelfAndDescendantCache(B);
        }),
        K.prototype.on.call(K.prototype, "opacityChange.konva", function() {
            this._clearSelfAndDescendantCache(D);
        });
    const Q = w.addGetterSetter;
    Q(K, "zIndex"),
        Q(K, "absolutePosition"),
        Q(K, "position"),
        Q(K, "x", 0, p()),
        Q(K, "y", 0, p()),
        Q(K, "globalCompositeOperation", "source-over", _()),
        Q(K, "opacity", 1, p()),
        Q(K, "name", "", _()),
        Q(K, "id", "", _()),
        Q(K, "rotation", 0, p()),
        w.addComponentsGetterSetter(K, "scale", ["x", "y"]),
        Q(K, "scaleX", 1, p()),
        Q(K, "scaleY", 1, p()),
        w.addComponentsGetterSetter(K, "skew", ["x", "y"]),
        Q(K, "skewX", 0, p()),
        Q(K, "skewY", 0, p()),
        w.addComponentsGetterSetter(K, "offset", ["x", "y"]),
        Q(K, "offsetX", 0, p()),
        Q(K, "offsetY", 0, p()),
        Q(K, "dragDistance", null, p()),
        Q(K, "width", 0, p()),
        Q(K, "height", 0, p()),
        Q(K, "listening", !0, x()),
        Q(K, "preventDefault", !0, x()),
        Q(K, "filters", null, function(t) {
            return (this._filterUpToDate = !1), t;
        }),
        Q(K, "visible", !0, x()),
        Q(K, "transformsEnabled", "all", _()),
        Q(K, "size"),
        Q(K, "dragBoundFunc"),
        Q(K, "draggable", !1, x()),
        w.backCompat(K, { rotateDeg: "rotate", setRotationDeg: "setRotation", getRotationDeg: "getRotation" });
    class J extends K {
        constructor() {
            super(...arguments), (this.children = []);
        }
        getChildren(t) {
            if (!t) return this.children || [];
            const e = this.children || [];
            var i = [];
            return (
                e.forEach(function(e) {
                    t(e) && i.push(e);
                }),
                i
            );
        }
        hasChildren() {
            return this.getChildren().length > 0;
        }
        removeChildren() {
            return (
                this.getChildren().forEach((t) => {
                    (t.parent = null), (t.index = 0), t.remove();
                }),
                (this.children = []),
                this._requestDraw(),
                this
            );
        }
        destroyChildren() {
            return (
                this.getChildren().forEach((t) => {
                    (t.parent = null), (t.index = 0), t.destroy();
                }),
                (this.children = []),
                this._requestDraw(),
                this
            );
        }
        add(...t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                return this;
            }
            var i = t[0];
            return i.getParent() ?
                (i.moveTo(this), this) :
                (this._validateAdd(i),
                    (i.index = this.getChildren().length),
                    (i.parent = this),
                    i._clearCaches(),
                    this.getChildren().push(i),
                    this._fire("add", { child: i }),
                    this._requestDraw(),
                    this);
        }
        destroy() {
            return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
        }
        find(t) {
            return this._generalFind(t, !1);
        }
        findOne(t) {
            var e = this._generalFind(t, !0);
            return e.length > 0 ? e[0] : void 0;
        }
        _generalFind(t, e) {
            var i = [];
            return (
                this._descendants((r) => {
                    const a = r._isMatch(t);
                    return a && i.push(r), !(!a || !e);
                }),
                i
            );
        }
        _descendants(t) {
            let e = !1;
            const i = this.getChildren();
            for (const r of i) {
                if (((e = t(r)), e)) return !0;
                if (r.hasChildren() && ((e = r._descendants(t)), e)) return !0;
            }
            return !1;
        }
        toObject() {
            var t = K.prototype.toObject.call(this);
            return (
                (t.children = []),
                this.getChildren().forEach((e) => {
                    t.children.push(e.toObject());
                }),
                t
            );
        }
        isAncestorOf(t) {
            for (var e = t.getParent(); e;) {
                if (e._id === this._id) return !0;
                e = e.getParent();
            }
            return !1;
        }
        clone(t) {
            var e = K.prototype.clone.call(this, t);
            return (
                this.getChildren().forEach(function(t) {
                    e.add(t.clone());
                }),
                e
            );
        }
        getAllIntersections(t) {
            var e = [];
            return (
                this.find("Shape").forEach(function(i) {
                    i.isVisible() && i.intersects(t) && e.push(i);
                }),
                e
            );
        }
        _clearSelfAndDescendantCache(t) {
            var e;
            super._clearSelfAndDescendantCache(t),
                this.isCached() ||
                null === (e = this.children) ||
                void 0 === e ||
                e.forEach(function(e) {
                    e._clearSelfAndDescendantCache(t);
                });
        }
        _setChildrenIndices() {
            var t;
            null === (t = this.children) ||
                void 0 === t ||
                t.forEach(function(t, e) {
                    t.index = e;
                }),
                this._requestDraw();
        }
        drawScene(t, e) {
            var i = this.getLayer(),
                r = t || (i && i.getCanvas()),
                a = r && r.getContext(),
                n = this._getCanvasCache(),
                s = n && n.scene,
                o = r && r.isCache;
            if (!this.isVisible() && !o) return this;
            if (s) {
                a.save();
                var h = this.getAbsoluteTransform(e).getMatrix();
                a.transform(h[0], h[1], h[2], h[3], h[4], h[5]), this._drawCachedSceneCanvas(a), a.restore();
            } else this._drawChildren("drawScene", r, e);
            return this;
        }
        drawHit(t, e) {
            if (!this.shouldDrawHit(e)) return this;
            var i = this.getLayer(),
                r = t || (i && i.hitCanvas),
                a = r && r.getContext(),
                n = this._getCanvasCache();
            if (n && n.hit) {
                a.save();
                var s = this.getAbsoluteTransform(e).getMatrix();
                a.transform(s[0], s[1], s[2], s[3], s[4], s[5]), this._drawCachedHitCanvas(a), a.restore();
            } else this._drawChildren("drawHit", r, e);
            return this;
        }
        _drawChildren(t, e, i) {
            var r,
                a = e && e.getContext(),
                n = this.clipWidth(),
                s = this.clipHeight(),
                o = this.clipFunc(),
                h = (n && s) || o;
            const l = i === this;
            if (h) {
                a.save();
                var d = this.getAbsoluteTransform(i),
                    c = d.getMatrix();
                if ((a.transform(c[0], c[1], c[2], c[3], c[4], c[5]), a.beginPath(), o)) o.call(this, a, this);
                else {
                    var g = this.clipX(),
                        u = this.clipY();
                    a.rect(g, u, n, s);
                }
                a.clip(), (c = d.copy().invert().getMatrix()), a.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
            }
            var f = !l && "source-over" !== this.globalCompositeOperation() && "drawScene" === t;
            f && (a.save(), a._applyGlobalCompositeOperation(this)),
                null === (r = this.children) ||
                void 0 === r ||
                r.forEach(function(r) {
                    r[t](e, i);
                }),
                f && a.restore(),
                h && a.restore();
        }
        getClientRect(t) {
            var e,
                i,
                r,
                a,
                n,
                s = (t = t || {}).skipTransform,
                o = t.relativeTo,
                h = { x: 1 / 0, y: 1 / 0, width: 0, height: 0 },
                l = this;
            null === (e = this.children) ||
                void 0 === e ||
                e.forEach(function(e) {
                    if (e.visible()) {
                        var s = e.getClientRect({ relativeTo: l, skipShadow: t.skipShadow, skipStroke: t.skipStroke });
                        (0 === s.width && 0 === s.height) ||
                        (void 0 === i ?
                            ((i = s.x), (r = s.y), (a = s.x + s.width), (n = s.y + s.height)) :
                            ((i = Math.min(i, s.x)),
                                (r = Math.min(r, s.y)),
                                (a = Math.max(a, s.x + s.width)),
                                (n = Math.max(n, s.y + s.height))));
                    }
                });
            for (var d = this.find("Shape"), c = !1, g = 0; g < d.length; g++) {
                if (d[g]._isVisible(this)) {
                    c = !0;
                    break;
                }
            }
            return (
                (h = c && void 0 !== i ? { x: i, y: r, width: a - i, height: n - r } : { x: 0, y: 0, width: 0, height: 0 }),
                s ? h : this._transformedRect(h, o)
            );
        }
    }
    w.addComponentsGetterSetter(J, "clip", ["x", "y", "width", "height"]),
        w.addGetterSetter(J, "clipX", void 0, p()),
        w.addGetterSetter(J, "clipY", void 0, p()),
        w.addGetterSetter(J, "clipWidth", void 0, p()),
        w.addGetterSetter(J, "clipHeight", void 0, p()),
        w.addGetterSetter(J, "clipFunc");
    const Z = new Map(),
        $ = void 0 !== i._global.PointerEvent;

    function tt(t) {
        return Z.get(t);
    }

    function et(t) {
        return { evt: t, pointerId: t.pointerId };
    }

    function it(t, e) {
        return Z.get(t) === e;
    }

    function rt(t, e) {
        at(t);
        e.getStage() && (Z.set(t, e), $ && e._fire("gotpointercapture", et(new PointerEvent("gotpointercapture"))));
    }

    function at(t, e) {
        const i = Z.get(t);
        if (!i) return;
        const r = i.getStage();
        r && r.content, Z.delete(t), $ && i._fire("lostpointercapture", et(new PointerEvent("lostpointercapture")));
    }
    var nt = "mouseleave",
        st = "mouseover",
        ot = "mouseenter",
        ht = "mousemove",
        lt = "mousedown",
        dt = "mouseup",
        ct = "pointermove",
        gt = "pointerdown",
        ut = "pointerup",
        ft = "pointercancel",
        pt = "pointerout",
        vt = "pointerleave",
        mt = "pointerover",
        _t = "pointerenter",
        yt = "contextmenu",
        xt = "touchstart",
        bt = "touchend",
        St = "touchmove",
        wt = "touchcancel",
        Ct = "wheel",
        kt = [
            [ot, "_pointerenter"],
            [lt, "_pointerdown"],
            [ht, "_pointermove"],
            [dt, "_pointerup"],
            [nt, "_pointerleave"],
            [xt, "_pointerdown"],
            [St, "_pointermove"],
            [bt, "_pointerup"],
            [wt, "_pointercancel"],
            [st, "_pointerover"],
            [Ct, "_wheel"],
            [yt, "_contextmenu"],
            [gt, "_pointerdown"],
            [ct, "_pointermove"],
            [ut, "_pointerup"],
            [ft, "_pointercancel"],
            ["lostpointercapture", "_lostpointercapture"],
        ];
    const Pt = {
            mouse: {
                [pt]: "mouseout",
                [vt]: nt,
                [mt]: st,
                [_t]: ot,
                [ct]: ht,
                [gt]: lt,
                [ut]: dt,
                [ft]: "mousecancel",
                pointerclick: "click",
                pointerdblclick: "dblclick",
            },
            touch: {
                [pt]: "touchout",
                [vt]: "touchleave",
                [mt]: "touchover",
                [_t]: "touchenter",
                [ct]: St,
                [gt]: xt,
                [ut]: bt,
                [ft]: wt,
                pointerclick: "tap",
                pointerdblclick: "dbltap",
            },
            pointer: {
                [pt]: pt,
                [vt]: vt,
                [mt]: mt,
                [_t]: _t,
                [ct]: ct,
                [gt]: gt,
                [ut]: ut,
                [ft]: ft,
                pointerclick: "pointerclick",
                pointerdblclick: "pointerdblclick",
            },
        },
        Tt = (t) => (t.indexOf("pointer") >= 0 ? "pointer" : t.indexOf("touch") >= 0 ? "touch" : "mouse"),
        At = (t) => {
            const e = Tt(t);
            return "pointer" === e ? i.pointerEventsEnabled && Pt.pointer : "touch" === e ? Pt.touch : "mouse" === e ? Pt.mouse : void 0;
        };

    function Mt(t = {}) {
        return (t.clipFunc || t.clipWidth || t.clipHeight) && g.warn("Stage does not support clipping. Please use clip for Layers or Groups."), t;
    }
    const Gt = [];
    class Et extends J {
        constructor(t) {
            super(Mt(t)),
                (this._pointerPositions = []),
                (this._changedPointerPositions = []),
                this._buildDOM(),
                this._bindContentEvents(),
                Gt.push(this),
                this.on("widthChange.konva heightChange.konva", this._resizeDOM),
                this.on("visibleChange.konva", this._checkVisibility),
                this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
                    Mt(this.attrs);
                }),
                this._checkVisibility();
        }
        _validateAdd(t) {
            const e = "Layer" === t.getType(),
                i = "FastLayer" === t.getType();
            e || i || g.throw("You may only add layers to the stage.");
        }
        _checkVisibility() {
            if (!this.content) return;
            const t = this.visible() ? "" : "none";
            this.content.style.display = t;
        }
        setContainer(t) {
            if ("string" == typeof t) {
                if ("." === t.charAt(0)) {
                    var e = t.slice(1);
                    t = document.getElementsByClassName(e)[0];
                } else {
                    var i;
                    (i = "#" !== t.charAt(0) ? t : t.slice(1)), (t = document.getElementById(i));
                }
                if (!t) throw "Can not find container in document with id " + i;
            }
            return (
                this._setAttr("container", t),
                this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), t.appendChild(this.content)),
                this
            );
        }
        shouldDrawHit() {
            return !0;
        }
        clear() {
            var t,
                e = this.children,
                i = e.length;
            for (t = 0; t < i; t++) e[t].clear();
            return this;
        }
        clone(t) {
            return t || (t = {}), (t.container = "undefined" != typeof document && document.createElement("div")), J.prototype.clone.call(this, t);
        }
        destroy() {
            super.destroy();
            var t = this.content;
            t && g._isInDocument(t) && this.container().removeChild(t);
            var e = Gt.indexOf(this);
            return e > -1 && Gt.splice(e, 1), this;
        }
        getPointerPosition() {
            const t = this._pointerPositions[0] || this._changedPointerPositions[0];
            return t ? { x: t.x, y: t.y } :
                (g.warn(
                        "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);"
                    ),
                    null);
        }
        _getPointerById(t) {
            return this._pointerPositions.find((e) => e.id === t);
        }
        getPointersPositions() {
            return this._pointerPositions;
        }
        getStage() {
            return this;
        }
        getContent() {
            return this.content;
        }
        _toKonvaCanvas(t) {
            ((t = t || {}).x = t.x || 0), (t.y = t.y || 0), (t.width = t.width || this.width()), (t.height = t.height || this.height());
            var e = new E({ width: t.width, height: t.height, pixelRatio: t.pixelRatio || 1 }),
                i = e.getContext()._context,
                r = this.children;
            return (
                (t.x || t.y) && i.translate(-1 * t.x, -1 * t.y),
                r.forEach(function(e) {
                    if (e.isVisible()) {
                        var r = e._toKonvaCanvas(t);
                        i.drawImage(r._canvas, t.x, t.y, r.getWidth() / r.getPixelRatio(), r.getHeight() / r.getPixelRatio());
                    }
                }),
                e
            );
        }
        getIntersection(t) {
            if (!t) return null;
            var e,
                i = this.children;
            for (e = i.length - 1; e >= 0; e--) {
                const r = i[e].getIntersection(t);
                if (r) return r;
            }
            return null;
        }
        _resizeDOM() {
            var t = this.width(),
                e = this.height();
            this.content && ((this.content.style.width = t + "px"), (this.content.style.height = e + "px")),
                this.bufferCanvas.setSize(t, e),
                this.bufferHitCanvas.setSize(t, e),
                this.children.forEach((i) => {
                    i.setSize({ width: t, height: e }), i.draw();
                });
        }
        add(t, ...e) {
            if (arguments.length > 1) {
                for (var r = 0; r < arguments.length; r++) this.add(arguments[r]);
                return this;
            }
            super.add(t);
            var a = this.children.length;
            return (
                a > 5 &&
                g.warn(
                    "The stage has " +
                    a +
                    " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."
                ),
                t.setSize({ width: this.width(), height: this.height() }),
                t.draw(),
                i.isBrowser && this.content.appendChild(t.canvas._canvas),
                this
            );
        }
        getParent() {
            return null;
        }
        getLayer() {
            return null;
        }
        hasPointerCapture(t) {
            return it(t, this);
        }
        setPointerCapture(t) {
            rt(t, this);
        }
        releaseCapture(t) {
            at(t);
        }
        getLayers() {
            return this.children;
        }
        _bindContentEvents() {
            i.isBrowser &&
                kt.forEach(([t, e]) => {
                    this.content.addEventListener(t, (t) => {
                        this[e](t);
                    });
                });
        }
        _pointerenter(t) {
            this.setPointersPositions(t);
            const e = At(t.type);
            this._fire(e.pointerenter, { evt: t, target: this, currentTarget: this });
        }
        _pointerover(t) {
            this.setPointersPositions(t);
            const e = At(t.type);
            this._fire(e.pointerover, { evt: t, target: this, currentTarget: this });
        }
        _getTargetShape(t) {
            let e = this[t + "targetShape"];
            return e && !e.getStage() && (e = null), e;
        }
        _pointerleave(t) {
            const e = At(t.type),
                r = Tt(t.type);
            if (e) {
                this.setPointersPositions(t);
                var a = this._getTargetShape(r),
                    n = !L.isDragging || i.hitOnDragEnabled;
                a && n ?
                    (a._fireAndBubble(e.pointerout, { evt: t }),
                        a._fireAndBubble(e.pointerleave, { evt: t }),
                        this._fire(e.pointerleave, { evt: t, target: this, currentTarget: this }),
                        (this[r + "targetShape"] = null)) :
                    n &&
                    (this._fire(e.pointerleave, { evt: t, target: this, currentTarget: this }),
                        this._fire(e.pointerout, { evt: t, target: this, currentTarget: this })),
                    (this.pointerPos = void 0),
                    (this._pointerPositions = []);
            }
        }
        _pointerdown(t) {
            const e = At(t.type),
                r = Tt(t.type);
            if (e) {
                this.setPointersPositions(t);
                var a = !1;
                this._changedPointerPositions.forEach((n) => {
                        var s = this.getIntersection(n);
                        (L.justDragged = !1), (i["_" + r + "ListenClick"] = !0);
                        if (!(s && s.isListening())) return;
                        i.capturePointerEventsEnabled && s.setPointerCapture(n.id),
                            (this[r + "ClickStartShape"] = s),
                            s._fireAndBubble(e.pointerdown, { evt: t, pointerId: n.id }),
                            (a = !0);
                        const o = t.type.indexOf("touch") >= 0;
                        s.preventDefault() && t.cancelable && o && t.preventDefault();
                    }),
                    a || this._fire(e.pointerdown, { evt: t, target: this, currentTarget: this, pointerId: this._pointerPositions[0].id });
            }
        }
        _pointermove(t) {
            const e = At(t.type),
                r = Tt(t.type);
            if (!e) return;
            if (
                (L.isDragging && L.node.preventDefault() && t.cancelable && t.preventDefault(),
                    this.setPointersPositions(t), !(!L.isDragging || i.hitOnDragEnabled))
            )
                return;
            var a = {};
            let n = !1;
            var s = this._getTargetShape(r);
            this._changedPointerPositions.forEach((i) => {
                    const o = tt(i.id) || this.getIntersection(i),
                        h = i.id,
                        l = { evt: t, pointerId: h };
                    var d = s !== o;
                    if ((d && s && (s._fireAndBubble(e.pointerout, Object.assign({}, l), o), s._fireAndBubble(e.pointerleave, Object.assign({}, l), o)), o)) {
                        if (a[o._id]) return;
                        a[o._id] = !0;
                    }
                    o && o.isListening() ?
                        ((n = !0),
                            d &&
                            (o._fireAndBubble(e.pointerover, Object.assign({}, l), s),
                                o._fireAndBubble(e.pointerenter, Object.assign({}, l), s),
                                (this[r + "targetShape"] = o)),
                            o._fireAndBubble(e.pointermove, Object.assign({}, l))) :
                        s && (this._fire(e.pointerover, { evt: t, target: this, currentTarget: this, pointerId: h }), (this[r + "targetShape"] = null));
                }),
                n || this._fire(e.pointermove, { evt: t, target: this, currentTarget: this, pointerId: this._changedPointerPositions[0].id });
        }
        _pointerup(t) {
            const e = At(t.type),
                r = Tt(t.type);
            if (!e) return;
            this.setPointersPositions(t);
            const a = this[r + "ClickStartShape"],
                n = this[r + "ClickEndShape"];
            var s = {};
            let o = !1;
            this._changedPointerPositions.forEach((h) => {
                    const l = tt(h.id) || this.getIntersection(h);
                    if (l) {
                        if ((l.releaseCapture(h.id), s[l._id])) return;
                        s[l._id] = !0;
                    }
                    const d = h.id,
                        c = { evt: t, pointerId: d };
                    let g = !1;
                    i["_" + r + "InDblClickWindow"] && i["_" + r + "InDblClickWindowId"] === d ?
                        ((g = !0), clearTimeout(this[r + "DblTimeout"])) :
                        L.justDragged ||
                        ((i["_" + r + "InDblClickWindow"] = !0), (i["_" + r + "InDblClickWindowId"] = d), clearTimeout(this[r + "DblTimeout"])),
                        (this[r + "DblTimeout"] = setTimeout(function() {
                            i["_" + r + "InDblClickWindow"] = !1;
                        }, i.dblClickWindow)),
                        l && l.isListening() ?
                        ((o = !0),
                            (this[r + "ClickEndShape"] = l),
                            l._fireAndBubble(e.pointerup, Object.assign({}, c)),
                            i["_" + r + "ListenClick"] &&
                            a &&
                            a === l &&
                            (l._fireAndBubble(e.pointerclick, Object.assign({}, c)),
                                g && n && n === l && l._fireAndBubble(e.pointerdblclick, Object.assign({}, c)))) :
                        ((this[r + "ClickEndShape"] = null),
                            i["_" + r + "ListenClick"] && this._fire(e.pointerclick, { evt: t, target: this, currentTarget: this, pointerId: d }),
                            g && this._fire(e.pointerdblclick, { evt: t, target: this, currentTarget: this, pointerId: d }));
                }),
                o || this._fire(e.pointerup, { evt: t, target: this, currentTarget: this, pointerId: this._changedPointerPositions[0].id }),
                (i["_" + r + "ListenClick"] = !1),
                t.cancelable && t.preventDefault();
        }
        _contextmenu(t) {
            this.setPointersPositions(t);
            var e = this.getIntersection(this.getPointerPosition());
            e && e.isListening() ? e._fireAndBubble(yt, { evt: t }) : this._fire(yt, { evt: t, target: this, currentTarget: this });
        }
        _wheel(t) {
            this.setPointersPositions(t);
            var e = this.getIntersection(this.getPointerPosition());
            e && e.isListening() ? e._fireAndBubble(Ct, { evt: t }) : this._fire(Ct, { evt: t, target: this, currentTarget: this });
        }
        _pointercancel(t) {
            this.setPointersPositions(t);
            const e = tt(t.pointerId) || this.getIntersection(this.getPointerPosition());
            e && e._fireAndBubble(ut, et(t)), at(t.pointerId);
        }
        _lostpointercapture(t) {
            at(t.pointerId);
        }
        setPointersPositions(t) {
            var e = this._getContentPosition(),
                i = null,
                r = null;
            void 0 !== (t = t || window.event).touches ?
                ((this._pointerPositions = []),
                    (this._changedPointerPositions = []),
                    Array.prototype.forEach.call(t.touches, (t) => {
                        this._pointerPositions.push({ id: t.identifier, x: (t.clientX - e.left) / e.scaleX, y: (t.clientY - e.top) / e.scaleY });
                    }),
                    Array.prototype.forEach.call(t.changedTouches || t.touches, (t) => {
                        this._changedPointerPositions.push({ id: t.identifier, x: (t.clientX - e.left) / e.scaleX, y: (t.clientY - e.top) / e.scaleY });
                    })) :
                ((i = (t.clientX - e.left) / e.scaleX),
                    (r = (t.clientY - e.top) / e.scaleY),
                    (this.pointerPos = { x: i, y: r }),
                    (this._pointerPositions = [{ x: i, y: r, id: g._getFirstPointerId(t) }]),
                    (this._changedPointerPositions = [{ x: i, y: r, id: g._getFirstPointerId(t) }]));
        }
        _setPointerPosition(t) {
            g.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(t);
        }
        _getContentPosition() {
            if (!this.content || !this.content.getBoundingClientRect) return { top: 0, left: 0, scaleX: 1, scaleY: 1 };
            var t = this.content.getBoundingClientRect();
            return { top: t.top, left: t.left, scaleX: t.width / this.content.clientWidth || 1, scaleY: t.height / this.content.clientHeight || 1 };
        }
        _buildDOM() {
            if (
                ((this.bufferCanvas = new E({ width: this.width(), height: this.height() })),
                    (this.bufferHitCanvas = new R({ pixelRatio: 1, width: this.width(), height: this.height() })),
                    i.isBrowser)
            ) {
                var t = this.container();
                if (!t) throw "Stage has no container. A container is required.";
                (t.innerHTML = ""),
                (this.content = document.createElement("div")),
                (this.content.style.position = "relative"),
                (this.content.style.userSelect = "none"),
                (this.content.className = "konvajs-content"),
                this.content.setAttribute("role", "presentation"),
                    t.appendChild(this.content),
                    this._resizeDOM();
            }
        }
        cache() {
            return g.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
        }
        clearCache() {
            return this;
        }
        batchDraw() {
            return (
                this.getChildren().forEach(function(t) {
                    t.batchDraw();
                }),
                this
            );
        }
    }
    (Et.prototype.nodeType = "Stage"), r(Et), w.addGetterSetter(Et, "container");
    var Rt = "hasShadow",
        Lt = "shadowRGBA",
        Dt = "patternImage",
        Ot = "linearGradient",
        It = "radialGradient";
    let Ft;

    function Nt() {
        return Ft || ((Ft = g.createCanvasElement().getContext("2d")), Ft);
    }
    const Bt = {};
    class zt extends K {
        constructor(t) {
            let e;
            for (super(t);
                (e = g.getRandomColor()), !e || e in Bt;);
            (this.colorKey = e), (Bt[e] = this);
        }
        getContext() {
            return g.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
        }
        getCanvas() {
            return g.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
        }
        getSceneFunc() {
            return this.attrs.sceneFunc || this._sceneFunc;
        }
        getHitFunc() {
            return this.attrs.hitFunc || this._hitFunc;
        }
        hasShadow() {
            return this._getCache(Rt, this._hasShadow);
        }
        _hasShadow() {
            return (
                this.shadowEnabled() &&
                0 !== this.shadowOpacity() &&
                !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY())
            );
        }
        _getFillPattern() {
            return this._getCache(Dt, this.__getFillPattern);
        }
        __getFillPattern() {
            if (this.fillPatternImage()) {
                const t = Nt().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
                if (t && t.setTransform) {
                    const e = new a();
                    e.translate(this.fillPatternX(), this.fillPatternY()),
                        e.rotate(i.getAngle(this.fillPatternRotation())),
                        e.scale(this.fillPatternScaleX(), this.fillPatternScaleY()),
                        e.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
                    const r = e.getMatrix();
                    t.setTransform({ a: r[0], b: r[1], c: r[2], d: r[3], e: r[4], f: r[5] });
                }
                return t;
            }
        }
        _getLinearGradient() {
            return this._getCache(Ot, this.__getLinearGradient);
        }
        __getLinearGradient() {
            var t = this.fillLinearGradientColorStops();
            if (t) {
                for (
                    var e = Nt(),
                        i = this.fillLinearGradientStartPoint(),
                        r = this.fillLinearGradientEndPoint(),
                        a = e.createLinearGradient(i.x, i.y, r.x, r.y),
                        n = 0; n < t.length; n += 2
                )
                    a.addColorStop(t[n], t[n + 1]);
                return a;
            }
        }
        _getRadialGradient() {
            return this._getCache(It, this.__getRadialGradient);
        }
        __getRadialGradient() {
            var t = this.fillRadialGradientColorStops();
            if (t) {
                for (
                    var e = Nt(),
                        i = this.fillRadialGradientStartPoint(),
                        r = this.fillRadialGradientEndPoint(),
                        a = e.createRadialGradient(i.x, i.y, this.fillRadialGradientStartRadius(), r.x, r.y, this.fillRadialGradientEndRadius()),
                        n = 0; n < t.length; n += 2
                )
                    a.addColorStop(t[n], t[n + 1]);
                return a;
            }
        }
        getShadowRGBA() {
            return this._getCache(Lt, this._getShadowRGBA);
        }
        _getShadowRGBA() {
            if (this.hasShadow()) {
                var t = g.colorToRGBA(this.shadowColor());
                return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a * (this.shadowOpacity() || 1) + ")";
            }
        }
        hasFill() {
            return this._calculate(
                "hasFill", ["fillEnabled", "fill", "fillPatternImage", "fillLinearGradientColorStops", "fillRadialGradientColorStops"],
                () =>
                this.fillEnabled() &&
                !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops())
            );
        }
        hasStroke() {
            return this._calculate(
                "hasStroke", ["strokeEnabled", "strokeWidth", "stroke", "strokeLinearGradientColorStops"],
                () => this.strokeEnabled() && this.strokeWidth() && !(!this.stroke() && !this.strokeLinearGradientColorStops())
            );
        }
        hasHitStroke() {
            const t = this.hitStrokeWidth();
            return "auto" === t ? this.hasStroke() : this.strokeEnabled() && !!t;
        }
        intersects(t) {
            var e = this.getStage().bufferHitCanvas;
            return e.getContext().clear(), this.drawHit(e, null, !0), e.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1).data[3] > 0;
        }
        destroy() {
            return K.prototype.destroy.call(this), delete Bt[this.colorKey], delete this.colorKey, this;
        }
        _useBufferCanvas(t) {
            var e;
            if (!this.getStage()) return !1;
            if (!(null === (e = this.attrs.perfectDrawEnabled) || void 0 === e || e)) return !1;
            const i = t || this.hasFill(),
                r = this.hasStroke(),
                a = 1 !== this.getAbsoluteOpacity();
            if (i && r && a) return !0;
            const n = this.hasShadow(),
                s = this.shadowForStrokeEnabled();
            return !!(i && r && n && s);
        }
        setStrokeHitEnabled(t) {
            g.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), t ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
        }
        getStrokeHitEnabled() {
            return 0 !== this.hitStrokeWidth();
        }
        getSelfRect() {
            var t = this.size();
            return { x: this._centroid ? -t.width / 2 : 0, y: this._centroid ? -t.height / 2 : 0, width: t.width, height: t.height };
        }
        getClientRect(t = {}) {
            const e = t.skipTransform,
                i = t.relativeTo,
                r = this.getSelfRect(),
                a = (!t.skipStroke && this.hasStroke() && this.strokeWidth()) || 0,
                n = r.width + a,
                s = r.height + a,
                o = !t.skipShadow && this.hasShadow(),
                h = o ? this.shadowOffsetX() : 0,
                l = o ? this.shadowOffsetY() : 0,
                d = n + Math.abs(h),
                c = s + Math.abs(l),
                g = (o && this.shadowBlur()) || 0,
                u = d + 2 * g,
                f = c + 2 * g;
            let p = 0;
            Math.round(a / 2) !== a / 2 && (p = 1);
            const v = { width: u + p, height: f + p, x: -Math.round(a / 2 + g) + Math.min(h, 0) + r.x, y: -Math.round(a / 2 + g) + Math.min(l, 0) + r.y };
            return e ? v : this._transformedRect(v, i);
        }
        drawScene(t, e) {
            var i,
                r,
                a = this.getLayer(),
                n = t || a.getCanvas(),
                s = n.getContext(),
                o = this._getCanvasCache(),
                h = this.getSceneFunc(),
                l = this.hasShadow(),
                d = n.isCache,
                c = e === this;
            if (!this.isVisible() && !c) return this;
            if (o) {
                s.save();
                var g = this.getAbsoluteTransform(e).getMatrix();
                return s.transform(g[0], g[1], g[2], g[3], g[4], g[5]), this._drawCachedSceneCanvas(s), s.restore(), this;
            }
            if (!h) return this;
            if ((s.save(), this._useBufferCanvas() && !d)) {
                (r = (i = this.getStage().bufferCanvas).getContext()).clear(), r.save(), r._applyLineJoin(this);
                var u = this.getAbsoluteTransform(e).getMatrix();
                r.transform(u[0], u[1], u[2], u[3], u[4], u[5]), h.call(this, r, this), r.restore();
                var f = i.pixelRatio;
                l && s._applyShadow(this),
                    s._applyOpacity(this),
                    s._applyGlobalCompositeOperation(this),
                    s.drawImage(i._canvas, 0, 0, i.width / f, i.height / f);
            } else {
                if ((s._applyLineJoin(this), !c)) {
                    u = this.getAbsoluteTransform(e).getMatrix();
                    s.transform(u[0], u[1], u[2], u[3], u[4], u[5]), s._applyOpacity(this), s._applyGlobalCompositeOperation(this);
                }
                l && s._applyShadow(this), h.call(this, s, this);
            }
            return s.restore(), this;
        }
        drawHit(t, e, i = !1) {
            if (!this.shouldDrawHit(e, i)) return this;
            var r = this.getLayer(),
                a = t || r.hitCanvas,
                n = a && a.getContext(),
                s = this.hitFunc() || this.sceneFunc(),
                o = this._getCanvasCache(),
                h = o && o.hit;
            if (
                (this.colorKey ||
                    g.warn(
                        "Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"
                    ),
                    h)
            ) {
                n.save();
                var l = this.getAbsoluteTransform(e).getMatrix();
                return n.transform(l[0], l[1], l[2], l[3], l[4], l[5]), this._drawCachedHitCanvas(n), n.restore(), this;
            }
            if (!s) return this;
            n.save(), n._applyLineJoin(this);
            if (!(this === e)) {
                var d = this.getAbsoluteTransform(e).getMatrix();
                n.transform(d[0], d[1], d[2], d[3], d[4], d[5]);
            }
            return s.call(this, n, this), n.restore(), this;
        }
        drawHitFromCache(t = 0) {
            var e,
                i,
                r,
                a,
                n,
                s = this._getCanvasCache(),
                o = this._getCachedSceneCanvas(),
                h = s.hit,
                l = h.getContext(),
                d = h.getWidth(),
                c = h.getHeight();
            l.clear(), l.drawImage(o._canvas, 0, 0, d, c);
            try {
                for (r = (i = (e = l.getImageData(0, 0, d, c)).data).length, a = g._hexToRgb(this.colorKey), n = 0; n < r; n += 4)
                    i[n + 3] > t ? ((i[n] = a.r), (i[n + 1] = a.g), (i[n + 2] = a.b), (i[n + 3] = 255)) : (i[n + 3] = 0);
                l.putImageData(e, 0, 0);
            } catch (t) {
                g.error("Unable to draw hit graph from cached scene canvas. " + t.message);
            }
            return this;
        }
        hasPointerCapture(t) {
            return it(t, this);
        }
        setPointerCapture(t) {
            rt(t, this);
        }
        releaseCapture(t) {
            at(t);
        }
    }
    (zt.prototype._fillFunc = function(t) {
        t.fill();
    }),
    (zt.prototype._strokeFunc = function(t) {
        t.stroke();
    }),
    (zt.prototype._fillFuncHit = function(t) {
        t.fill();
    }),
    (zt.prototype._strokeFuncHit = function(t) {
        t.stroke();
    }),
    (zt.prototype._centroid = !1),
    (zt.prototype.nodeType = "Shape"),
    r(zt),
        (zt.prototype.eventListeners = {}),
        zt.prototype.on.call(
            zt.prototype,
            "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",
            function() {
                this._clearCache(Rt);
            }
        ),
        zt.prototype.on.call(zt.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", function() {
            this._clearCache(Lt);
        }),
        zt.prototype.on.call(
            zt.prototype,
            "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva",
            function() {
                this._clearCache(Dt);
            }
        ),
        zt.prototype.on.call(
            zt.prototype,
            "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva",
            function() {
                this._clearCache(Ot);
            }
        ),
        zt.prototype.on.call(
            zt.prototype,
            "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva",
            function() {
                this._clearCache(It);
            }
        ),
        w.addGetterSetter(zt, "stroke", void 0, y()),
        w.addGetterSetter(zt, "strokeWidth", 2, p()),
        w.addGetterSetter(zt, "fillAfterStrokeEnabled", !1),
        w.addGetterSetter(zt, "hitStrokeWidth", "auto", m()),
        w.addGetterSetter(zt, "strokeHitEnabled", !0, x()),
        w.addGetterSetter(zt, "perfectDrawEnabled", !0, x()),
        w.addGetterSetter(zt, "shadowForStrokeEnabled", !0, x()),
        w.addGetterSetter(zt, "lineJoin"),
        w.addGetterSetter(zt, "lineCap"),
        w.addGetterSetter(zt, "sceneFunc"),
        w.addGetterSetter(zt, "hitFunc"),
        w.addGetterSetter(zt, "dash"),
        w.addGetterSetter(zt, "dashOffset", 0, p()),
        w.addGetterSetter(zt, "shadowColor", void 0, _()),
        w.addGetterSetter(zt, "shadowBlur", 0, p()),
        w.addGetterSetter(zt, "shadowOpacity", 1, p()),
        w.addComponentsGetterSetter(zt, "shadowOffset", ["x", "y"]),
        w.addGetterSetter(zt, "shadowOffsetX", 0, p()),
        w.addGetterSetter(zt, "shadowOffsetY", 0, p()),
        w.addGetterSetter(zt, "fillPatternImage"),
        w.addGetterSetter(zt, "fill", void 0, y()),
        w.addGetterSetter(zt, "fillPatternX", 0, p()),
        w.addGetterSetter(zt, "fillPatternY", 0, p()),
        w.addGetterSetter(zt, "fillLinearGradientColorStops"),
        w.addGetterSetter(zt, "strokeLinearGradientColorStops"),
        w.addGetterSetter(zt, "fillRadialGradientStartRadius", 0),
        w.addGetterSetter(zt, "fillRadialGradientEndRadius", 0),
        w.addGetterSetter(zt, "fillRadialGradientColorStops"),
        w.addGetterSetter(zt, "fillPatternRepeat", "repeat"),
        w.addGetterSetter(zt, "fillEnabled", !0),
        w.addGetterSetter(zt, "strokeEnabled", !0),
        w.addGetterSetter(zt, "shadowEnabled", !0),
        w.addGetterSetter(zt, "dashEnabled", !0),
        w.addGetterSetter(zt, "strokeScaleEnabled", !0),
        w.addGetterSetter(zt, "fillPriority", "color"),
        w.addComponentsGetterSetter(zt, "fillPatternOffset", ["x", "y"]),
        w.addGetterSetter(zt, "fillPatternOffsetX", 0, p()),
        w.addGetterSetter(zt, "fillPatternOffsetY", 0, p()),
        w.addComponentsGetterSetter(zt, "fillPatternScale", ["x", "y"]),
        w.addGetterSetter(zt, "fillPatternScaleX", 1, p()),
        w.addGetterSetter(zt, "fillPatternScaleY", 1, p()),
        w.addComponentsGetterSetter(zt, "fillLinearGradientStartPoint", ["x", "y"]),
        w.addComponentsGetterSetter(zt, "strokeLinearGradientStartPoint", ["x", "y"]),
        w.addGetterSetter(zt, "fillLinearGradientStartPointX", 0),
        w.addGetterSetter(zt, "strokeLinearGradientStartPointX", 0),
        w.addGetterSetter(zt, "fillLinearGradientStartPointY", 0),
        w.addGetterSetter(zt, "strokeLinearGradientStartPointY", 0),
        w.addComponentsGetterSetter(zt, "fillLinearGradientEndPoint", ["x", "y"]),
        w.addComponentsGetterSetter(zt, "strokeLinearGradientEndPoint", ["x", "y"]),
        w.addGetterSetter(zt, "fillLinearGradientEndPointX", 0),
        w.addGetterSetter(zt, "strokeLinearGradientEndPointX", 0),
        w.addGetterSetter(zt, "fillLinearGradientEndPointY", 0),
        w.addGetterSetter(zt, "strokeLinearGradientEndPointY", 0),
        w.addComponentsGetterSetter(zt, "fillRadialGradientStartPoint", ["x", "y"]),
        w.addGetterSetter(zt, "fillRadialGradientStartPointX", 0),
        w.addGetterSetter(zt, "fillRadialGradientStartPointY", 0),
        w.addComponentsGetterSetter(zt, "fillRadialGradientEndPoint", ["x", "y"]),
        w.addGetterSetter(zt, "fillRadialGradientEndPointX", 0),
        w.addGetterSetter(zt, "fillRadialGradientEndPointY", 0),
        w.addGetterSetter(zt, "fillPatternRotation", 0),
        w.backCompat(zt, {
            dashArray: "dash",
            getDashArray: "getDash",
            setDashArray: "getDash",
            drawFunc: "sceneFunc",
            getDrawFunc: "getSceneFunc",
            setDrawFunc: "setSceneFunc",
            drawHitFunc: "hitFunc",
            getDrawHitFunc: "getHitFunc",
            setDrawHitFunc: "setHitFunc",
        });
    var Wt = [
            { x: 0, y: 0 },
            { x: -1, y: -1 },
            { x: 1, y: -1 },
            { x: 1, y: 1 },
            { x: -1, y: 1 },
        ],
        Ht = Wt.length;
    class Yt extends J {
        constructor(t) {
            super(t),
                (this.canvas = new E()),
                (this.hitCanvas = new R({ pixelRatio: 1 })),
                (this._waitingForDraw = !1),
                this.on("visibleChange.konva", this._checkVisibility),
                this._checkVisibility(),
                this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled),
                this._setSmoothEnabled();
        }
        createPNGStream() {
            return this.canvas._canvas.createPNGStream();
        }
        getCanvas() {
            return this.canvas;
        }
        getNativeCanvasElement() {
            return this.canvas._canvas;
        }
        getHitCanvas() {
            return this.hitCanvas;
        }
        getContext() {
            return this.getCanvas().getContext();
        }
        clear(t) {
            return this.getContext().clear(t), this.getHitCanvas().getContext().clear(t), this;
        }
        setZIndex(t) {
            super.setZIndex(t);
            var e = this.getStage();
            return (
                e &&
                e.content &&
                (e.content.removeChild(this.getNativeCanvasElement()),
                    t < e.children.length - 1 ?
                    e.content.insertBefore(this.getNativeCanvasElement(), e.children[t + 1].getCanvas()._canvas) :
                    e.content.appendChild(this.getNativeCanvasElement())),
                this
            );
        }
        moveToTop() {
            K.prototype.moveToTop.call(this);
            var t = this.getStage();
            return t && t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.appendChild(this.getNativeCanvasElement())), !0;
        }
        moveUp() {
            if (!K.prototype.moveUp.call(this)) return !1;
            var t = this.getStage();
            return (!(!t || !t.content) &&
                (t.content.removeChild(this.getNativeCanvasElement()),
                    this.index < t.children.length - 1 ?
                    t.content.insertBefore(this.getNativeCanvasElement(), t.children[this.index + 1].getCanvas()._canvas) :
                    t.content.appendChild(this.getNativeCanvasElement()), !0)
            );
        }
        moveDown() {
            if (K.prototype.moveDown.call(this)) {
                var t = this.getStage();
                if (t) {
                    var e = t.children;
                    t.content &&
                        (t.content.removeChild(this.getNativeCanvasElement()),
                            t.content.insertBefore(this.getNativeCanvasElement(), e[this.index + 1].getCanvas()._canvas));
                }
                return !0;
            }
            return !1;
        }
        moveToBottom() {
            if (K.prototype.moveToBottom.call(this)) {
                var t = this.getStage();
                if (t) {
                    var e = t.children;
                    t.content &&
                        (t.content.removeChild(this.getNativeCanvasElement()),
                            t.content.insertBefore(this.getNativeCanvasElement(), e[1].getCanvas()._canvas));
                }
                return !0;
            }
            return !1;
        }
        getLayer() {
            return this;
        }
        remove() {
            var t = this.getNativeCanvasElement();
            return K.prototype.remove.call(this), t && t.parentNode && g._isInDocument(t) && t.parentNode.removeChild(t), this;
        }
        getStage() {
            return this.parent;
        }
        setSize({ width: t, height: e }) {
            return this.canvas.setSize(t, e), this.hitCanvas.setSize(t, e), this._setSmoothEnabled(), this;
        }
        _validateAdd(t) {
            var e = t.getType();
            "Group" !== e && "Shape" !== e && g.throw("You may only add groups and shapes to a layer.");
        }
        _toKonvaCanvas(t) {
            return (
                ((t = t || {}).width = t.width || this.getWidth()),
                (t.height = t.height || this.getHeight()),
                (t.x = void 0 !== t.x ? t.x : this.x()),
                (t.y = void 0 !== t.y ? t.y : this.y()),
                K.prototype._toKonvaCanvas.call(this, t)
            );
        }
        _checkVisibility() {
            const t = this.visible();
            this.canvas._canvas.style.display = t ? "block" : "none";
        }
        _setSmoothEnabled() {
            this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
        }
        getWidth() {
            if (this.parent) return this.parent.width();
        }
        setWidth() {
            g.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
        }
        getHeight() {
            if (this.parent) return this.parent.height();
        }
        setHeight() {
            g.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
        }
        batchDraw() {
            return (
                this._waitingForDraw ||
                ((this._waitingForDraw = !0),
                    g.requestAnimFrame(() => {
                        this.draw(), (this._waitingForDraw = !1);
                    })),
                this
            );
        }
        getIntersection(t) {
            if (!this.isListening() || !this.isVisible()) return null;
            for (var e = 1, i = !1;;) {
                for (let r = 0; r < Ht; r++) {
                    const a = Wt[r],
                        n = this._getIntersection({ x: t.x + a.x * e, y: t.y + a.y * e }),
                        s = n.shape;
                    if (s) return s;
                    if (((i = !!n.antialiased), !n.antialiased)) break;
                }
                if (!i) return null;
                e += 1;
            }
        }
        _getIntersection(t) {
            const e = this.hitCanvas.pixelRatio,
                i = this.hitCanvas.context.getImageData(Math.round(t.x * e), Math.round(t.y * e), 1, 1).data,
                r = i[3];
            if (255 === r) {
                const t = g._rgbToHex(i[0], i[1], i[2]),
                    e = Bt["#" + t];
                return e ? { shape: e } : { antialiased: !0 };
            }
            return r > 0 ? { antialiased: !0 } : {};
        }
        drawScene(t, e) {
            var i = this.getLayer(),
                r = t || (i && i.getCanvas());
            return (
                this._fire("beforeDraw", { node: this }),
                this.clearBeforeDraw() && r.getContext().clear(),
                J.prototype.drawScene.call(this, r, e),
                this._fire("draw", { node: this }),
                this
            );
        }
        drawHit(t, e) {
            var i = this.getLayer(),
                r = t || (i && i.hitCanvas);
            return i && i.clearBeforeDraw() && i.getHitCanvas().getContext().clear(), J.prototype.drawHit.call(this, r, e), this;
        }
        enableHitGraph() {
            return this.hitGraphEnabled(!0), this;
        }
        disableHitGraph() {
            return this.hitGraphEnabled(!1), this;
        }
        setHitGraphEnabled(t) {
            g.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(t);
        }
        getHitGraphEnabled(t) {
            return g.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
        }
        toggleHitCanvas() {
            if (this.parent && this.parent.content) {
                var t = this.parent;
                !!this.hitCanvas._canvas.parentNode ? t.content.removeChild(this.hitCanvas._canvas) : t.content.appendChild(this.hitCanvas._canvas);
            }
        }
    }
    (Yt.prototype.nodeType = "Layer"),
    r(Yt),
        w.addGetterSetter(Yt, "imageSmoothingEnabled", !0),
        w.addGetterSetter(Yt, "clearBeforeDraw", !0),
        w.addGetterSetter(Yt, "hitGraphEnabled", !0, x());
    class Xt extends Yt {
        constructor(t) {
            super(t), this.listening(!1), g.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
        }
    }
    (Xt.prototype.nodeType = "FastLayer"), r(Xt);
    class jt extends J {
        _validateAdd(t) {
            var e = t.getType();
            "Group" !== e && "Shape" !== e && g.throw("You may only add groups and shapes to groups.");
        }
    }
    (jt.prototype.nodeType = "Group"), r(jt);
    var Ut =
        e.performance && e.performance.now ?

        function() {
            return e.performance.now();
        } :
        function() {
            return new Date().getTime();
        };
    class qt {
        constructor(t, e) {
            (this.id = qt.animIdCounter++), (this.frame = { time: 0, timeDiff: 0, lastTime: Ut(), frameRate: 0 }), (this.func = t), this.setLayers(e);
        }
        setLayers(t) {
            var e = [];
            return (e = t ? (t.length > 0 ? t : [t]) : []), (this.layers = e), this;
        }
        getLayers() {
            return this.layers;
        }
        addLayer(t) {
            var e,
                i = this.layers,
                r = i.length;
            for (e = 0; e < r; e++)
                if (i[e]._id === t._id) return !1;
            return this.layers.push(t), !0;
        }
        isRunning() {
            var t,
                e = qt.animations,
                i = e.length;
            for (t = 0; t < i; t++)
                if (e[t].id === this.id) return !0;
            return !1;
        }
        start() {
            return this.stop(), (this.frame.timeDiff = 0), (this.frame.lastTime = Ut()), qt._addAnimation(this), this;
        }
        stop() {
            return qt._removeAnimation(this), this;
        }
        _updateFrameObject(t) {
            (this.frame.timeDiff = t - this.frame.lastTime),
            (this.frame.lastTime = t),
            (this.frame.time += this.frame.timeDiff),
            (this.frame.frameRate = 1e3 / this.frame.timeDiff);
        }
        static _addAnimation(t) {
            this.animations.push(t), this._handleAnimation();
        }
        static _removeAnimation(t) {
            var e,
                i = t.id,
                r = this.animations,
                a = r.length;
            for (e = 0; e < a; e++)
                if (r[e].id === i) {
                    this.animations.splice(e, 1);
                    break;
                }
        }
        static _runFrames() {
            var t,
                e,
                i,
                r,
                a,
                n,
                s,
                o,
                h = {},
                l = this.animations;
            for (r = 0; r < l.length; r++)
                if (((e = (t = l[r]).layers), (i = t.func), t._updateFrameObject(Ut()), (n = e.length), !i || !1 !== i.call(t, t.frame)))
                    for (a = 0; a < n; a++) void 0 !== (s = e[a])._id && (h[s._id] = s);
            for (o in h) h.hasOwnProperty(o) && h[o].batchDraw();
        }
        static _animationLoop() {
            var t = qt;
            t.animations.length ? (t._runFrames(), g.requestAnimFrame(t._animationLoop)) : (t.animRunning = !1);
        }
        static _handleAnimation() {
            this.animRunning || ((this.animRunning = !0), g.requestAnimFrame(this._animationLoop));
        }
    }
    (qt.animations = []), (qt.animIdCounter = 0), (qt.animRunning = !1);
    var Vt = { node: 1, duration: 1, easing: 1, onFinish: 1, yoyo: 1 },
        Kt = 0,
        Qt = ["fill", "stroke", "shadowColor"];
    class Jt {
        constructor(t, e, i, r, a, n, s) {
            (this.prop = t),
            (this.propFunc = e),
            (this.begin = r),
            (this._pos = r),
            (this.duration = n),
            (this._change = 0),
            (this.prevPos = 0),
            (this.yoyo = s),
            (this._time = 0),
            (this._position = 0),
            (this._startTime = 0),
            (this._finish = 0),
            (this.func = i),
            (this._change = a - this.begin),
            this.pause();
        }
        fire(t) {
            var e = this[t];
            e && e();
        }
        setTime(t) {
            t > this.duration ?
                this.yoyo ?
                ((this._time = this.duration), this.reverse()) :
                this.finish() :
                t < 0 ?
                this.yoyo ?
                ((this._time = 0), this.play()) :
                this.reset() :
                ((this._time = t), this.update());
        }
        getTime() {
            return this._time;
        }
        setPosition(t) {
            (this.prevPos = this._pos), this.propFunc(t), (this._pos = t);
        }
        getPosition(t) {
            return void 0 === t && (t = this._time), this.func(t, this.begin, this._change, this.duration);
        }
        play() {
            (this.state = 2), (this._startTime = this.getTimer() - this._time), this.onEnterFrame(), this.fire("onPlay");
        }
        reverse() {
            (this.state = 3),
            (this._time = this.duration - this._time),
            (this._startTime = this.getTimer() - this._time),
            this.onEnterFrame(),
                this.fire("onReverse");
        }
        seek(t) {
            this.pause(), (this._time = t), this.update(), this.fire("onSeek");
        }
        reset() {
            this.pause(), (this._time = 0), this.update(), this.fire("onReset");
        }
        finish() {
            this.pause(), (this._time = this.duration), this.update(), this.fire("onFinish");
        }
        update() {
            this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
        }
        onEnterFrame() {
            var t = this.getTimer() - this._startTime;
            2 === this.state ? this.setTime(t) : 3 === this.state && this.setTime(this.duration - t);
        }
        pause() {
            (this.state = 1), this.fire("onPause");
        }
        getTimer() {
            return new Date().getTime();
        }
    }
    class Zt {
        constructor(t) {
            var e,
                r,
                a = this,
                n = t.node,
                s = n._id,
                o = t.easing || $t.Linear,
                h = !!t.yoyo;
            (e = void 0 === t.duration ? 0.3 : 0 === t.duration ? 0.001 : t.duration), (this.node = n), (this._id = Kt++);
            var l = n.getLayer() || (n instanceof i.Stage ? n.getLayers() : null);
            for (r in (l || g.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."),
                    (this.anim = new qt(function() {
                        a.tween.onEnterFrame();
                    }, l)),
                    (this.tween = new Jt(
                        r,
                        function(t) {
                            a._tweenFunc(t);
                        },
                        o,
                        0,
                        1,
                        1e3 * e,
                        h
                    )),
                    this._addListeners(),
                    Zt.attrs[s] || (Zt.attrs[s] = {}),
                    Zt.attrs[s][this._id] || (Zt.attrs[s][this._id] = {}),
                    Zt.tweens[s] || (Zt.tweens[s] = {}),
                    t))
                void 0 === Vt[r] && this._addAttr(r, t[r]);
            this.reset(), (this.onFinish = t.onFinish), (this.onReset = t.onReset), (this.onUpdate = t.onUpdate);
        }
        _addAttr(t, e) {
            var i,
                r,
                a,
                n,
                s,
                o,
                h,
                l,
                d = this.node,
                c = d._id;
            if (((a = Zt.tweens[c][t]) && delete Zt.attrs[c][a][t], (i = d.getAttr(t)), g._isArray(e)))
                if (
                    ((r = []),
                        (s = Math.max(e.length, i.length)),
                        "points" === t &&
                        e.length !== i.length &&
                        (e.length > i.length ?
                            ((h = i), (i = g._prepareArrayForTween(i, e, d.closed()))) :
                            ((o = e), (e = g._prepareArrayForTween(e, i, d.closed())))),
                        0 === t.indexOf("fill"))
                )
                    for (n = 0; n < s; n++)
                        if (n % 2 == 0) r.push(e[n] - i[n]);
                        else {
                            var u = g.colorToRGBA(i[n]);
                            (l = g.colorToRGBA(e[n])), (i[n] = u), r.push({ r: l.r - u.r, g: l.g - u.g, b: l.b - u.b, a: l.a - u.a });
                        }
            else
                for (n = 0; n < s; n++) r.push(e[n] - i[n]);
            else
                -1 !== Qt.indexOf(t) ?
                ((i = g.colorToRGBA(i)), (r = { r: (l = g.colorToRGBA(e)).r - i.r, g: l.g - i.g, b: l.b - i.b, a: l.a - i.a })) :
                (r = e - i);
            (Zt.attrs[c][this._id][t] = { start: i, diff: r, end: e, trueEnd: o, trueStart: h }), (Zt.tweens[c][t] = this._id);
        }
        _tweenFunc(t) {
            var e,
                i,
                r,
                a,
                n,
                s,
                o,
                h,
                l = this.node,
                d = Zt.attrs[l._id][this._id];
            for (e in d) {
                if (((r = (i = d[e]).start), (a = i.diff), (h = i.end), g._isArray(r)))
                    if (((n = []), (o = Math.max(r.length, h.length)), 0 === e.indexOf("fill")))
                        for (s = 0; s < o; s++)
                            s % 2 == 0 ?
                            n.push((r[s] || 0) + a[s] * t) :
                            n.push(
                                "rgba(" +
                                Math.round(r[s].r + a[s].r * t) +
                                "," +
                                Math.round(r[s].g + a[s].g * t) +
                                "," +
                                Math.round(r[s].b + a[s].b * t) +
                                "," +
                                (r[s].a + a[s].a * t) +
                                ")"
                            );
                    else
                        for (s = 0; s < o; s++) n.push((r[s] || 0) + a[s] * t);
                else
                    n = -1 !== Qt.indexOf(e) ?
                    "rgba(" +
                    Math.round(r.r + a.r * t) +
                    "," +
                    Math.round(r.g + a.g * t) +
                    "," +
                    Math.round(r.b + a.b * t) +
                    "," +
                    (r.a + a.a * t) +
                    ")" :
                    r + a * t;
                l.setAttr(e, n);
            }
        }
        _addListeners() {
            (this.tween.onPlay = () => {
                this.anim.start();
            }),
            (this.tween.onReverse = () => {
                this.anim.start();
            }),
            (this.tween.onPause = () => {
                this.anim.stop();
            }),
            (this.tween.onFinish = () => {
                var t = this.node,
                    e = Zt.attrs[t._id][this._id];
                e.points && e.points.trueEnd && t.setAttr("points", e.points.trueEnd), this.onFinish && this.onFinish.call(this);
            }),
            (this.tween.onReset = () => {
                var t = this.node,
                    e = Zt.attrs[t._id][this._id];
                e.points && e.points.trueStart && t.points(e.points.trueStart), this.onReset && this.onReset();
            }),
            (this.tween.onUpdate = () => {
                this.onUpdate && this.onUpdate.call(this);
            });
        }
        play() {
            return this.tween.play(), this;
        }
        reverse() {
            return this.tween.reverse(), this;
        }
        reset() {
            return this.tween.reset(), this;
        }
        seek(t) {
            return this.tween.seek(1e3 * t), this;
        }
        pause() {
            return this.tween.pause(), this;
        }
        finish() {
            return this.tween.finish(), this;
        }
        destroy() {
            var t,
                e = this.node._id,
                i = this._id,
                r = Zt.tweens[e];
            for (t in (this.pause(), r)) delete Zt.tweens[e][t];
            delete Zt.attrs[e][i];
        }
    }
    (Zt.attrs = {}),
    (Zt.tweens = {}),
    (K.prototype.to = function(t) {
        var e = t.onFinish;
        (t.node = this),
        (t.onFinish = function() {
            this.destroy(), e && e();
        }),
        new Zt(t).play();
    });
    const $t = {
            BackEaseIn(t, e, i, r) {
                var a = 1.70158;
                return i * (t /= r) * t * ((a + 1) * t - a) + e;
            },
            BackEaseOut(t, e, i, r) {
                var a = 1.70158;
                return i * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + e;
            },
            BackEaseInOut(t, e, i, r) {
                var a = 1.70158;
                return (t /= r / 2) < 1 ?
                    (i / 2) * (t * t * ((1 + (a *= 1.525)) * t - a)) + e :
                    (i / 2) * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) + e;
            },
            ElasticEaseIn(t, e, i, r, a, n) {
                var s = 0;
                return 0 === t ?
                    e :
                    1 == (t /= r) ?
                    e + i :
                    (n || (n = 0.3 * r), !a || a < Math.abs(i) ? ((a = i), (s = n / 4)) : (s = (n / (2 * Math.PI)) * Math.asin(i / a)), -a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * r - s) * (2 * Math.PI)) / n) + e);
            },
            ElasticEaseOut(t, e, i, r, a, n) {
                var s = 0;
                return 0 === t ?
                    e :
                    1 == (t /= r) ?
                    e + i :
                    (n || (n = 0.3 * r), !a || a < Math.abs(i) ? ((a = i), (s = n / 4)) : (s = (n / (2 * Math.PI)) * Math.asin(i / a)),
                        a * Math.pow(2, -10 * t) * Math.sin(((t * r - s) * (2 * Math.PI)) / n) + i + e);
            },
            ElasticEaseInOut(t, e, i, r, a, n) {
                var s = 0;
                return 0 === t ?
                    e :
                    2 == (t /= r / 2) ?
                    e + i :
                    (n || (n = r * (0.3 * 1.5)), !a || a < Math.abs(i) ? ((a = i), (s = n / 4)) : (s = (n / (2 * Math.PI)) * Math.asin(i / a)),
                        t < 1 ?
                        a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * r - s) * (2 * Math.PI)) / n) * -0.5 + e :
                        a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * r - s) * (2 * Math.PI)) / n) * 0.5 + i + e);
            },
            BounceEaseOut: (t, e, i, r) =>
                (t /= r) < 1 / 2.75 ?
                i * (7.5625 * t * t) + e : t < 2 / 2.75 ?
                i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e : t < 2.5 / 2.75 ?
                i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e,
            BounceEaseIn: (t, e, i, r) => i - $t.BounceEaseOut(r - t, 0, i, r) + e,
            BounceEaseInOut: (t, e, i, r) =>
                t < r / 2 ? 0.5 * $t.BounceEaseIn(2 * t, 0, i, r) + e : 0.5 * $t.BounceEaseOut(2 * t - r, 0, i, r) + 0.5 * i + e,
            EaseIn: (t, e, i, r) => i * (t /= r) * t + e,
            EaseOut: (t, e, i, r) => -i * (t /= r) * (t - 2) + e,
            EaseInOut: (t, e, i, r) => ((t /= r / 2) < 1 ? (i / 2) * t * t + e : (-i / 2) * (--t * (t - 2) - 1) + e),
            StrongEaseIn: (t, e, i, r) => i * (t /= r) * t * t * t * t + e,
            StrongEaseOut: (t, e, i, r) => i * ((t = t / r - 1) * t * t * t * t + 1) + e,
            StrongEaseInOut: (t, e, i, r) => ((t /= r / 2) < 1 ? (i / 2) * t * t * t * t * t + e : (i / 2) * ((t -= 2) * t * t * t * t + 2) + e),
            Linear: (t, e, i, r) => (i * t) / r + e,
        },
        te = g._assign(i, {
            Util: g,
            Transform: a,
            Node: K,
            Container: J,
            Stage: Et,
            stages: Gt,
            Layer: Yt,
            FastLayer: Xt,
            Group: jt,
            DD: L,
            Shape: zt,
            shapes: Bt,
            Animation: qt,
            Tween: Zt,
            Easings: $t,
            Context: P,
            Canvas: G,
        });
    class ee extends zt {
        _sceneFunc(t) {
            var e = i.getAngle(this.angle()),
                r = this.clockwise();
            t.beginPath(), t.arc(0, 0, this.outerRadius(), 0, e, r), t.arc(0, 0, this.innerRadius(), e, 0, !r), t.closePath(), t.fillStrokeShape(this);
        }
        getWidth() {
            return 2 * this.outerRadius();
        }
        getHeight() {
            return 2 * this.outerRadius();
        }
        setWidth(t) {
            this.outerRadius(t / 2);
        }
        setHeight(t) {
            this.outerRadius(t / 2);
        }
    }

    function ie(t, e, i, r, a, n, s) {
        var o = Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - e, 2)),
            h = Math.sqrt(Math.pow(a - i, 2) + Math.pow(n - r, 2)),
            l = (s * o) / (o + h),
            d = (s * h) / (o + h);
        return [i - l * (a - t), r - l * (n - e), i + d * (a - t), r + d * (n - e)];
    }

    function re(t, e) {
        var i,
            r,
            a = t.length,
            n = [];
        for (i = 2; i < a - 2; i += 2)
            (r = ie(t[i - 2], t[i - 1], t[i], t[i + 1], t[i + 2], t[i + 3], e)),
            isNaN(r[0]) || (n.push(r[0]), n.push(r[1]), n.push(t[i]), n.push(t[i + 1]), n.push(r[2]), n.push(r[3]));
        return n;
    }
    (ee.prototype._centroid = !0),
    (ee.prototype.className = "Arc"),
    (ee.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"]),
    r(ee),
        w.addGetterSetter(ee, "innerRadius", 0, p()),
        w.addGetterSetter(ee, "outerRadius", 0, p()),
        w.addGetterSetter(ee, "angle", 0, p()),
        w.addGetterSetter(ee, "clockwise", !1, x());
    class ae extends zt {
        constructor(t) {
            super(t),
                this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
                    this._clearCache("tensionPoints");
                });
        }
        _sceneFunc(t) {
            var e,
                i,
                r,
                a = this.points(),
                n = a.length,
                s = this.tension(),
                o = this.closed(),
                h = this.bezier();
            if (n) {
                if ((t.beginPath(), t.moveTo(a[0], a[1]), 0 !== s && n > 4)) {
                    for (i = (e = this.getTensionPoints()).length, r = o ? 0 : 4, o || t.quadraticCurveTo(e[0], e[1], e[2], e[3]); r < i - 2;)
                        t.bezierCurveTo(e[r++], e[r++], e[r++], e[r++], e[r++], e[r++]);
                    o || t.quadraticCurveTo(e[i - 2], e[i - 1], a[n - 2], a[n - 1]);
                } else if (h)
                    for (r = 2; r < n;) t.bezierCurveTo(a[r++], a[r++], a[r++], a[r++], a[r++], a[r++]);
                else
                    for (r = 2; r < n; r += 2) t.lineTo(a[r], a[r + 1]);
                o ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this);
            }
        }
        getTensionPoints() {
            return this._getCache("tensionPoints", this._getTensionPoints);
        }
        _getTensionPoints() {
            return this.closed() ? this._getTensionPointsClosed() : re(this.points(), this.tension());
        }
        _getTensionPointsClosed() {
            var t = this.points(),
                e = t.length,
                i = this.tension(),
                r = ie(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], i),
                a = ie(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], i),
                n = re(t, i);
            return [r[2], r[3]].concat(n).concat([a[0], a[1], t[e - 2], t[e - 1], a[2], a[3], r[0], r[1], t[0], t[1]]);
        }
        getWidth() {
            return this.getSelfRect().width;
        }
        getHeight() {
            return this.getSelfRect().height;
        }
        getSelfRect() {
            var t = this.points();
            if (t.length < 4) return { x: t[0] || 0, y: t[1] || 0, width: 0, height: 0 };
            for (
                var e,
                    i,
                    r = (t = 0 !== this.tension() ? [t[0], t[1], ...this._getTensionPoints(), t[t.length - 2], t[t.length - 1]] : this.points())[0],
                    a = t[0],
                    n = t[1],
                    s = t[1],
                    o = 0; o < t.length / 2; o++
            )
                (e = t[2 * o]), (i = t[2 * o + 1]), (r = Math.min(r, e)), (a = Math.max(a, e)), (n = Math.min(n, i)), (s = Math.max(s, i));
            return { x: r, y: n, width: a - r, height: s - n };
        }
    }
    (ae.prototype.className = "Line"),
    (ae.prototype._attrsAffectingSize = ["points", "bezier", "tension"]),
    r(ae),
        w.addGetterSetter(ae, "closed", !1),
        w.addGetterSetter(ae, "bezier", !1),
        w.addGetterSetter(ae, "tension", 0, p()),
        w.addGetterSetter(
            ae,
            "points", [],
            (function() {
                if (i.isUnminified)
                    return function(t, e) {
                        return (
                            g._isArray(t) ?
                            t.forEach(function(t) {
                                g._isNumber(t) ||
                                    g.warn(
                                        '"' + e + '" attribute has non numeric element ' + t + ". Make sure that all elements are numbers."
                                    );
                            }) :
                            g.warn(u(t) + ' is a not valid value for "' + e + '" attribute. The value should be a array of numbers.'),
                            t
                        );
                    };
            })()
        );
    class ne extends zt {
        constructor(t) {
            super(t), (this.dataArray = []), (this.pathLength = 0), (this.dataArray = ne.parsePathData(this.data())), (this.pathLength = 0);
            for (var e = 0; e < this.dataArray.length; ++e) this.pathLength += this.dataArray[e].pathLength;
            this.on("dataChange.konva", function() {
                (this.dataArray = ne.parsePathData(this.data())), (this.pathLength = 0);
                for (var t = 0; t < this.dataArray.length; ++t) this.pathLength += this.dataArray[t].pathLength;
            });
        }
        _sceneFunc(t) {
            var e = this.dataArray;
            t.beginPath();
            for (var i = !1, r = 0; r < e.length; r++) {
                var a = e[r].command,
                    n = e[r].points;
                switch (a) {
                    case "L":
                        t.lineTo(n[0], n[1]);
                        break;
                    case "M":
                        t.moveTo(n[0], n[1]);
                        break;
                    case "C":
                        t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                        break;
                    case "Q":
                        t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                        break;
                    case "A":
                        var s = n[0],
                            o = n[1],
                            h = n[2],
                            l = n[3],
                            d = n[4],
                            c = n[5],
                            g = n[6],
                            u = n[7],
                            f = h > l ? h : l,
                            p = h > l ? 1 : h / l,
                            v = h > l ? l / h : 1;
                        t.translate(s, o),
                            t.rotate(g),
                            t.scale(p, v),
                            t.arc(0, 0, f, d, d + c, 1 - u),
                            t.scale(1 / p, 1 / v),
                            t.rotate(-g),
                            t.translate(-s, -o);
                        break;
                    case "z":
                        (i = !0), t.closePath();
                }
            }
            i || this.hasFill() ? t.fillStrokeShape(this) : t.strokeShape(this);
        }
        getSelfRect() {
            var t = [];
            this.dataArray.forEach(function(e) {
                if ("A" === e.command) {
                    var i = e.points[4],
                        r = e.points[5],
                        a = e.points[4] + r,
                        n = Math.PI / 180;
                    if ((Math.abs(i - a) < n && (n = Math.abs(i - a)), r < 0))
                        for (let r = i - n; r > a; r -= n) {
                            const i = ne.getPointOnEllipticalArc(e.points[0], e.points[1], e.points[2], e.points[3], r, 0);
                            t.push(i.x, i.y);
                        }
                    else
                        for (let r = i + n; r < a; r += n) {
                            const i = ne.getPointOnEllipticalArc(e.points[0], e.points[1], e.points[2], e.points[3], r, 0);
                            t.push(i.x, i.y);
                        }
                } else if ("C" === e.command)
                    for (let i = 0; i <= 1; i += 0.01) {
                        const r = ne.getPointOnCubicBezier(
                            i,
                            e.start.x,
                            e.start.y,
                            e.points[0],
                            e.points[1],
                            e.points[2],
                            e.points[3],
                            e.points[4],
                            e.points[5]
                        );
                        t.push(r.x, r.y);
                    }
                else t = t.concat(e.points);
            });
            for (var e, i, r = t[0], a = t[0], n = t[1], s = t[1], o = 0; o < t.length / 2; o++)
                (e = t[2 * o]),
                (i = t[2 * o + 1]),
                isNaN(e) || ((r = Math.min(r, e)), (a = Math.max(a, e))),
                isNaN(i) || ((n = Math.min(n, i)), (s = Math.max(s, i)));
            return { x: Math.round(r), y: Math.round(n), width: Math.round(a - r), height: Math.round(s - n) };
        }
        getLength() {
            return this.pathLength;
        }
        getPointAtLength(t) {
            var e,
                i = 0,
                r = this.dataArray.length;
            if (!r) return null;
            for (; i < r && t > this.dataArray[i].pathLength;)(t -= this.dataArray[i].pathLength), ++i;
            if (i === r) return { x: (e = this.dataArray[i - 1].points.slice(-2))[0], y: e[1] };
            if (t < 0.01) return { x: (e = this.dataArray[i].points.slice(0, 2))[0], y: e[1] };
            var a = this.dataArray[i],
                n = a.points;
            switch (a.command) {
                case "L":
                    return ne.getPointOnLine(t, a.start.x, a.start.y, n[0], n[1]);
                case "C":
                    return ne.getPointOnCubicBezier(t / a.pathLength, a.start.x, a.start.y, n[0], n[1], n[2], n[3], n[4], n[5]);
                case "Q":
                    return ne.getPointOnQuadraticBezier(t / a.pathLength, a.start.x, a.start.y, n[0], n[1], n[2], n[3]);
                case "A":
                    var s = n[0],
                        o = n[1],
                        h = n[2],
                        l = n[3],
                        d = n[4],
                        c = n[5],
                        g = n[6];
                    return (d += (c * t) / a.pathLength), ne.getPointOnEllipticalArc(s, o, h, l, d, g);
            }
            return null;
        }
        static getLineLength(t, e, i, r) {
            return Math.sqrt((i - t) * (i - t) + (r - e) * (r - e));
        }
        static getPointOnLine(t, e, i, r, a, n, s) {
            void 0 === n && (n = e), void 0 === s && (s = i);
            var o = (a - i) / (r - e + 1e-8),
                h = Math.sqrt((t * t) / (1 + o * o));
            r < e && (h *= -1);
            var l,
                d = o * h;
            if (r === e) l = { x: n, y: s + d };
            else if ((s - i) / (n - e + 1e-8) === o) l = { x: n + h, y: s + d };
            else {
                var c,
                    g,
                    u = this.getLineLength(e, i, r, a),
                    f = (n - e) * (r - e) + (s - i) * (a - i);
                (c = e + (f /= u * u) * (r - e)), (g = i + f * (a - i));
                var p = this.getLineLength(n, s, c, g),
                    v = Math.sqrt(t * t - p * p);
                (h = Math.sqrt((v * v) / (1 + o * o))), r < e && (h *= -1), (l = { x: c + h, y: g + (d = o * h) });
            }
            return l;
        }
        static getPointOnCubicBezier(t, e, i, r, a, n, s, o, h) {
            function l(t) {
                return t * t * t;
            }

            function d(t) {
                return 3 * t * t * (1 - t);
            }

            function c(t) {
                return 3 * t * (1 - t) * (1 - t);
            }

            function g(t) {
                return (1 - t) * (1 - t) * (1 - t);
            }
            return { x: o * l(t) + n * d(t) + r * c(t) + e * g(t), y: h * l(t) + s * d(t) + a * c(t) + i * g(t) };
        }
        static getPointOnQuadraticBezier(t, e, i, r, a, n, s) {
            function o(t) {
                return t * t;
            }

            function h(t) {
                return 2 * t * (1 - t);
            }

            function l(t) {
                return (1 - t) * (1 - t);
            }
            return { x: n * o(t) + r * h(t) + e * l(t), y: s * o(t) + a * h(t) + i * l(t) };
        }
        static getPointOnEllipticalArc(t, e, i, r, a, n) {
            var s = Math.cos(n),
                o = Math.sin(n),
                h = i * Math.cos(a),
                l = r * Math.sin(a);
            return { x: t + (h * s - l * o), y: e + (h * o + l * s) };
        }
        static parsePathData(t) {
            if (!t) return [];
            var e = t,
                i = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
            e = e.replace(new RegExp(" ", "g"), ",");
            for (var r = 0; r < i.length; r++) e = e.replace(new RegExp(i[r], "g"), "|" + i[r]);
            var a,
                n = e.split("|"),
                s = [],
                o = [],
                h = 0,
                l = 0,
                d = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
            for (r = 1; r < n.length; r++) {
                var c = n[r],
                    g = c.charAt(0);
                for (c = c.slice(1), o.length = 0;
                    (a = d.exec(c));) o.push(a[0]);
                for (var u = [], f = 0, p = o.length; f < p; f++)
                    if ("00" !== o[f]) {
                        var v = parseFloat(o[f]);
                        isNaN(v) ? u.push(0) : u.push(v);
                    } else u.push(0, 0);
                for (; u.length > 0 && !isNaN(u[0]);) {
                    var m,
                        _,
                        y,
                        x,
                        b,
                        S,
                        w,
                        C,
                        k,
                        P,
                        T = null,
                        A = [],
                        M = h,
                        G = l;
                    switch (g) {
                        case "l":
                            (h += u.shift()), (l += u.shift()), (T = "L"), A.push(h, l);
                            break;
                        case "L":
                            (h = u.shift()), (l = u.shift()), A.push(h, l);
                            break;
                        case "m":
                            var E = u.shift(),
                                R = u.shift();
                            if (((h += E), (l += R), (T = "M"), s.length > 2 && "z" === s[s.length - 1].command))
                                for (var L = s.length - 2; L >= 0; L--)
                                    if ("M" === s[L].command) {
                                        (h = s[L].points[0] + E), (l = s[L].points[1] + R);
                                        break;
                                    }
                            A.push(h, l), (g = "l");
                            break;
                        case "M":
                            (h = u.shift()), (l = u.shift()), (T = "M"), A.push(h, l), (g = "L");
                            break;
                        case "h":
                            (h += u.shift()), (T = "L"), A.push(h, l);
                            break;
                        case "H":
                            (h = u.shift()), (T = "L"), A.push(h, l);
                            break;
                        case "v":
                            (l += u.shift()), (T = "L"), A.push(h, l);
                            break;
                        case "V":
                            (l = u.shift()), (T = "L"), A.push(h, l);
                            break;
                        case "C":
                            A.push(u.shift(), u.shift(), u.shift(), u.shift()), (h = u.shift()), (l = u.shift()), A.push(h, l);
                            break;
                        case "c":
                            A.push(h + u.shift(), l + u.shift(), h + u.shift(), l + u.shift()),
                                (h += u.shift()),
                                (l += u.shift()),
                                (T = "C"),
                                A.push(h, l);
                            break;
                        case "S":
                            (_ = h),
                            (y = l),
                            "C" === (m = s[s.length - 1]).command && ((_ = h + (h - m.points[2])), (y = l + (l - m.points[3]))),
                                A.push(_, y, u.shift(), u.shift()),
                                (h = u.shift()),
                                (l = u.shift()),
                                (T = "C"),
                                A.push(h, l);
                            break;
                        case "s":
                            (_ = h),
                            (y = l),
                            "C" === (m = s[s.length - 1]).command && ((_ = h + (h - m.points[2])), (y = l + (l - m.points[3]))),
                                A.push(_, y, h + u.shift(), l + u.shift()),
                                (h += u.shift()),
                                (l += u.shift()),
                                (T = "C"),
                                A.push(h, l);
                            break;
                        case "Q":
                            A.push(u.shift(), u.shift()), (h = u.shift()), (l = u.shift()), A.push(h, l);
                            break;
                        case "q":
                            A.push(h + u.shift(), l + u.shift()), (h += u.shift()), (l += u.shift()), (T = "Q"), A.push(h, l);
                            break;
                        case "T":
                            (_ = h),
                            (y = l),
                            "Q" === (m = s[s.length - 1]).command && ((_ = h + (h - m.points[0])), (y = l + (l - m.points[1]))),
                                (h = u.shift()),
                                (l = u.shift()),
                                (T = "Q"),
                                A.push(_, y, h, l);
                            break;
                        case "t":
                            (_ = h),
                            (y = l),
                            "Q" === (m = s[s.length - 1]).command && ((_ = h + (h - m.points[0])), (y = l + (l - m.points[1]))),
                                (h += u.shift()),
                                (l += u.shift()),
                                (T = "Q"),
                                A.push(_, y, h, l);
                            break;
                        case "A":
                            (x = u.shift()),
                            (b = u.shift()),
                            (S = u.shift()),
                            (w = u.shift()),
                            (C = u.shift()),
                            (k = h),
                            (P = l),
                            (h = u.shift()),
                            (l = u.shift()),
                            (T = "A"),
                            (A = this.convertEndpointToCenterParameterization(k, P, h, l, w, C, x, b, S));
                            break;
                        case "a":
                            (x = u.shift()),
                            (b = u.shift()),
                            (S = u.shift()),
                            (w = u.shift()),
                            (C = u.shift()),
                            (k = h),
                            (P = l),
                            (h += u.shift()),
                            (l += u.shift()),
                            (T = "A"),
                            (A = this.convertEndpointToCenterParameterization(k, P, h, l, w, C, x, b, S));
                    }
                    s.push({ command: T || g, points: A, start: { x: M, y: G }, pathLength: this.calcLength(M, G, T || g, A) });
                }
                ("z" !== g && "Z" !== g) || s.push({ command: "z", points: [], start: void 0, pathLength: 0 });
            }
            return s;
        }
        static calcLength(t, e, i, r) {
            var a,
                n,
                s,
                o,
                h = ne;
            switch (i) {
                case "L":
                    return h.getLineLength(t, e, r[0], r[1]);
                case "C":
                    for (a = 0, n = h.getPointOnCubicBezier(0, t, e, r[0], r[1], r[2], r[3], r[4], r[5]), o = 0.01; o <= 1; o += 0.01)
                        (s = h.getPointOnCubicBezier(o, t, e, r[0], r[1], r[2], r[3], r[4], r[5])), (a += h.getLineLength(n.x, n.y, s.x, s.y)), (n = s);
                    return a;
                case "Q":
                    for (a = 0, n = h.getPointOnQuadraticBezier(0, t, e, r[0], r[1], r[2], r[3]), o = 0.01; o <= 1; o += 0.01)
                        (s = h.getPointOnQuadraticBezier(o, t, e, r[0], r[1], r[2], r[3])), (a += h.getLineLength(n.x, n.y, s.x, s.y)), (n = s);
                    return a;
                case "A":
                    a = 0;
                    var l = r[4],
                        d = r[5],
                        c = r[4] + d,
                        g = Math.PI / 180;
                    if ((Math.abs(l - c) < g && (g = Math.abs(l - c)), (n = h.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], l, 0)), d < 0))
                        for (o = l - g; o > c; o -= g)
                            (s = h.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], o, 0)), (a += h.getLineLength(n.x, n.y, s.x, s.y)), (n = s);
                    else
                        for (o = l + g; o < c; o += g)
                            (s = h.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], o, 0)), (a += h.getLineLength(n.x, n.y, s.x, s.y)), (n = s);
                    return (s = h.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], c, 0)), (a += h.getLineLength(n.x, n.y, s.x, s.y));
            }
            return 0;
        }
        static convertEndpointToCenterParameterization(t, e, i, r, a, n, s, o, h) {
            var l = h * (Math.PI / 180),
                d = (Math.cos(l) * (t - i)) / 2 + (Math.sin(l) * (e - r)) / 2,
                c = (-1 * Math.sin(l) * (t - i)) / 2 + (Math.cos(l) * (e - r)) / 2,
                g = (d * d) / (s * s) + (c * c) / (o * o);
            g > 1 && ((s *= Math.sqrt(g)), (o *= Math.sqrt(g)));
            var u = Math.sqrt((s * s * (o * o) - s * s * (c * c) - o * o * (d * d)) / (s * s * (c * c) + o * o * (d * d)));
            a === n && (u *= -1), isNaN(u) && (u = 0);
            var f = (u * s * c) / o,
                p = (u * -o * d) / s,
                v = (t + i) / 2 + Math.cos(l) * f - Math.sin(l) * p,
                m = (e + r) / 2 + Math.sin(l) * f + Math.cos(l) * p,
                _ = function(t) {
                    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
                },
                y = function(t, e) {
                    return (t[0] * e[0] + t[1] * e[1]) / (_(t) * _(e));
                },
                x = function(t, e) {
                    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(y(t, e));
                },
                b = x([1, 0], [(d - f) / s, (c - p) / o]),
                S = [(d - f) / s, (c - p) / o],
                w = [(-1 * d - f) / s, (-1 * c - p) / o],
                C = x(S, w);
            return (
                y(S, w) <= -1 && (C = Math.PI),
                y(S, w) >= 1 && (C = 0),
                0 === n && C > 0 && (C -= 2 * Math.PI),
                1 === n && C < 0 && (C += 2 * Math.PI), [v, m, s, o, b, C, l, n]
            );
        }
    }
    (ne.prototype.className = "Path"), (ne.prototype._attrsAffectingSize = ["data"]), r(ne), w.addGetterSetter(ne, "data");
    class se extends ae {
        _sceneFunc(t) {
            super._sceneFunc(t);
            var e = 2 * Math.PI,
                i = this.points(),
                r = i,
                a = 0 !== this.tension() && i.length > 4;
            a && (r = this.getTensionPoints());
            var n,
                s,
                o = this.pointerLength(),
                h = i.length;
            if (a) {
                const t = [r[r.length - 4], r[r.length - 3], r[r.length - 2], r[r.length - 1], i[h - 2], i[h - 1]],
                    e = ne.calcLength(r[r.length - 4], r[r.length - 3], "C", t),
                    a = ne.getPointOnQuadraticBezier(Math.min(1, 1 - o / e), t[0], t[1], t[2], t[3], t[4], t[5]);
                (n = i[h - 2] - a.x), (s = i[h - 1] - a.y);
            } else(n = i[h - 2] - i[h - 4]), (s = i[h - 1] - i[h - 3]);
            var l = (Math.atan2(s, n) + e) % e,
                d = this.pointerWidth();
            this.pointerAtEnding() &&
                (t.save(),
                    t.beginPath(),
                    t.translate(i[h - 2], i[h - 1]),
                    t.rotate(l),
                    t.moveTo(0, 0),
                    t.lineTo(-o, d / 2),
                    t.lineTo(-o, -d / 2),
                    t.closePath(),
                    t.restore(),
                    this.__fillStroke(t)),
                this.pointerAtBeginning() &&
                (t.save(),
                    t.beginPath(),
                    t.translate(i[0], i[1]),
                    a ? ((n = (r[0] + r[2]) / 2 - i[0]), (s = (r[1] + r[3]) / 2 - i[1])) : ((n = i[2] - i[0]), (s = i[3] - i[1])),
                    t.rotate((Math.atan2(-s, -n) + e) % e),
                    t.moveTo(0, 0),
                    t.lineTo(-o, d / 2),
                    t.lineTo(-o, -d / 2),
                    t.closePath(),
                    t.restore(),
                    this.__fillStroke(t));
        }
        __fillStroke(t) {
            var e = this.dashEnabled();
            e && ((this.attrs.dashEnabled = !1), t.setLineDash([])), t.fillStrokeShape(this), e && (this.attrs.dashEnabled = !0);
        }
        getSelfRect() {
            const t = super.getSelfRect(),
                e = this.pointerWidth() / 2;
            return { x: t.x - e, y: t.y - e, width: t.width + 2 * e, height: t.height + 2 * e };
        }
    }
    (se.prototype.className = "Arrow"),
    r(se),
        w.addGetterSetter(se, "pointerLength", 10, p()),
        w.addGetterSetter(se, "pointerWidth", 10, p()),
        w.addGetterSetter(se, "pointerAtBeginning", !1),
        w.addGetterSetter(se, "pointerAtEnding", !0);
    class oe extends zt {
        _sceneFunc(t) {
            t.beginPath(), t.arc(0, 0, this.attrs.radius || 0, 0, 2 * Math.PI, !1), t.closePath(), t.fillStrokeShape(this);
        }
        getWidth() {
            return 2 * this.radius();
        }
        getHeight() {
            return 2 * this.radius();
        }
        setWidth(t) {
            this.radius() !== t / 2 && this.radius(t / 2);
        }
        setHeight(t) {
            this.radius() !== t / 2 && this.radius(t / 2);
        }
    }
    (oe.prototype._centroid = !0),
    (oe.prototype.className = "Circle"),
    (oe.prototype._attrsAffectingSize = ["radius"]),
    r(oe),
        w.addGetterSetter(oe, "radius", 0, p());
    class he extends zt {
        _sceneFunc(t) {
            var e = this.radiusX(),
                i = this.radiusY();
            t.beginPath(), t.save(), e !== i && t.scale(1, i / e), t.arc(0, 0, e, 0, 2 * Math.PI, !1), t.restore(), t.closePath(), t.fillStrokeShape(this);
        }
        getWidth() {
            return 2 * this.radiusX();
        }
        getHeight() {
            return 2 * this.radiusY();
        }
        setWidth(t) {
            this.radiusX(t / 2);
        }
        setHeight(t) {
            this.radiusY(t / 2);
        }
    }
    (he.prototype.className = "Ellipse"),
    (he.prototype._centroid = !0),
    (he.prototype._attrsAffectingSize = ["radiusX", "radiusY"]),
    r(he),
        w.addComponentsGetterSetter(he, "radius", ["x", "y"]),
        w.addGetterSetter(he, "radiusX", 0, p()),
        w.addGetterSetter(he, "radiusY", 0, p());
    class le extends zt {
        constructor(t) {
            super(t),
                this.on("imageChange.konva", () => {
                    this._setImageLoad();
                }),
                this._setImageLoad();
        }
        _setImageLoad() {
            const t = this.image();
            (t && t.complete) ||
            (t && 4 === t.readyState) ||
            (t &&
                t.addEventListener &&
                t.addEventListener("load", () => {
                    this._requestDraw();
                }));
        }
        _useBufferCanvas() {
            return super._useBufferCanvas(!0);
        }
        _sceneFunc(t) {
            const e = this.getWidth(),
                i = this.getHeight(),
                r = this.attrs.image;
            let a;
            if (r) {
                const t = this.attrs.cropWidth,
                    n = this.attrs.cropHeight;
                a = t && n ? [r, this.cropX(), this.cropY(), t, n, 0, 0, e, i] : [r, 0, 0, e, i];
            }
            (this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this)),
            r && t.drawImage.apply(t, a);
        }
        _hitFunc(t) {
            var e = this.width(),
                i = this.height();
            t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this);
        }
        getWidth() {
            var t, e;
            return null !== (t = this.attrs.width) && void 0 !== t ? t : null === (e = this.image()) || void 0 === e ? void 0 : e.width;
        }
        getHeight() {
            var t, e;
            return null !== (t = this.attrs.height) && void 0 !== t ? t : null === (e = this.image()) || void 0 === e ? void 0 : e.height;
        }
        static fromURL(t, e) {
            var i = g.createImageElement();
            (i.onload = function() {
                var t = new le({ image: i });
                e(t);
            }),
            (i.crossOrigin = "Anonymous"),
            (i.src = t);
        }
    }
    (le.prototype.className = "Image"),
    r(le),
        w.addGetterSetter(le, "image"),
        w.addComponentsGetterSetter(le, "crop", ["x", "y", "width", "height"]),
        w.addGetterSetter(le, "cropX", 0, p()),
        w.addGetterSetter(le, "cropY", 0, p()),
        w.addGetterSetter(le, "cropWidth", 0, p()),
        w.addGetterSetter(le, "cropHeight", 0, p());
    var de = ["fontFamily", "fontSize", "fontStyle", "padding", "lineHeight", "text", "width", "height"],
        ce = "up",
        ge = "right",
        ue = "down",
        fe = "left",
        pe = de.length;
    class ve extends jt {
        constructor(t) {
            super(t),
                this.on("add.konva", function(t) {
                    this._addListeners(t.child), this._sync();
                });
        }
        getText() {
            return this.find("Text")[0];
        }
        getTag() {
            return this.find("Tag")[0];
        }
        _addListeners(t) {
            var e,
                i = this,
                r = function() {
                    i._sync();
                };
            for (e = 0; e < pe; e++) t.on(de[e] + "Change.konva", r);
        }
        getWidth() {
            return this.getText().width();
        }
        getHeight() {
            return this.getText().height();
        }
        _sync() {
            var t,
                e,
                i,
                r,
                a,
                n,
                s,
                o = this.getText(),
                h = this.getTag();
            if (o && h) {
                switch (
                    ((t = o.width()), (e = o.height()), (i = h.pointerDirection()), (r = h.pointerWidth()), (s = h.pointerHeight()), (a = 0), (n = 0), i)
                ) {
                    case ce:
                        (a = t / 2), (n = -1 * s);
                        break;
                    case ge:
                        (a = t + r), (n = e / 2);
                        break;
                    case ue:
                        (a = t / 2), (n = e + s);
                        break;
                    case fe:
                        (a = -1 * r), (n = e / 2);
                }
                h.setAttrs({ x: -1 * a, y: -1 * n, width: t, height: e }), o.setAttrs({ x: -1 * a, y: -1 * n });
            }
        }
    }
    (ve.prototype.className = "Label"), r(ve);
    class me extends zt {
        _sceneFunc(t) {
            var e = this.width(),
                i = this.height(),
                r = this.pointerDirection(),
                a = this.pointerWidth(),
                n = this.pointerHeight(),
                s = this.cornerRadius();
            let o = 0,
                h = 0,
                l = 0,
                d = 0;
            "number" == typeof s
                ?
                (o = h = l = d = Math.min(s, e / 2, i / 2)) :
                ((o = Math.min(s[0] || 0, e / 2, i / 2)),
                    (h = Math.min(s[1] || 0, e / 2, i / 2)),
                    (d = Math.min(s[2] || 0, e / 2, i / 2)),
                    (l = Math.min(s[3] || 0, e / 2, i / 2))),
                t.beginPath(),
                t.moveTo(o, 0),
                r === ce && (t.lineTo((e - a) / 2, 0), t.lineTo(e / 2, -1 * n), t.lineTo((e + a) / 2, 0)),
                t.lineTo(e - h, 0),
                t.arc(e - h, h, h, (3 * Math.PI) / 2, 0, !1),
                r === ge && (t.lineTo(e, (i - n) / 2), t.lineTo(e + a, i / 2), t.lineTo(e, (i + n) / 2)),
                t.lineTo(e, i - d),
                t.arc(e - d, i - d, d, 0, Math.PI / 2, !1),
                r === ue && (t.lineTo((e + a) / 2, i), t.lineTo(e / 2, i + n), t.lineTo((e - a) / 2, i)),
                t.lineTo(l, i),
                t.arc(l, i - l, l, Math.PI / 2, Math.PI, !1),
                r === fe && (t.lineTo(0, (i + n) / 2), t.lineTo(-1 * a, i / 2), t.lineTo(0, (i - n) / 2)),
                t.lineTo(0, o),
                t.arc(o, o, o, Math.PI, (3 * Math.PI) / 2, !1),
                t.closePath(),
                t.fillStrokeShape(this);
        }
        getSelfRect() {
            var t = 0,
                e = 0,
                i = this.pointerWidth(),
                r = this.pointerHeight(),
                a = this.pointerDirection(),
                n = this.width(),
                s = this.height();
            return (
                a === ce ? ((e -= r), (s += r)) : a === ue ? (s += r) : a === fe ? ((t -= 1.5 * i), (n += i)) : a === ge && (n += 1.5 * i), { x: t, y: e, width: n, height: s }
            );
        }
    }
    (me.prototype.className = "Tag"),
    r(me),
        w.addGetterSetter(me, "pointerDirection", "none"),
        w.addGetterSetter(me, "pointerWidth", 0, p()),
        w.addGetterSetter(me, "pointerHeight", 0, p()),
        w.addGetterSetter(me, "cornerRadius", 0, v(4));
    class _e extends zt {
        _sceneFunc(t) {
            var e = this.cornerRadius(),
                i = this.width(),
                r = this.height();
            if ((t.beginPath(), e)) {
                let a = 0,
                    n = 0,
                    s = 0,
                    o = 0;
                "number" == typeof e
                    ?
                    (a = n = s = o = Math.min(e, i / 2, r / 2)) :
                    ((a = Math.min(e[0] || 0, i / 2, r / 2)),
                        (n = Math.min(e[1] || 0, i / 2, r / 2)),
                        (o = Math.min(e[2] || 0, i / 2, r / 2)),
                        (s = Math.min(e[3] || 0, i / 2, r / 2))),
                    t.moveTo(a, 0),
                    t.lineTo(i - n, 0),
                    t.arc(i - n, n, n, (3 * Math.PI) / 2, 0, !1),
                    t.lineTo(i, r - o),
                    t.arc(i - o, r - o, o, 0, Math.PI / 2, !1),
                    t.lineTo(s, r),
                    t.arc(s, r - s, s, Math.PI / 2, Math.PI, !1),
                    t.lineTo(0, a),
                    t.arc(a, a, a, Math.PI, (3 * Math.PI) / 2, !1);
            } else t.rect(0, 0, i, r);
            t.closePath(), t.fillStrokeShape(this);
        }
    }
    (_e.prototype.className = "Rect"), r(_e), w.addGetterSetter(_e, "cornerRadius", 0, v(4));
    class ye extends zt {
        _sceneFunc(t) {
            const e = this._getPoints();
            t.beginPath(), t.moveTo(e[0].x, e[0].y);
            for (var i = 1; i < e.length; i++) t.lineTo(e[i].x, e[i].y);
            t.closePath(), t.fillStrokeShape(this);
        }
        _getPoints() {
            const t = this.attrs.sides,
                e = this.attrs.radius || 0,
                i = [];
            for (var r = 0; r < t; r++) i.push({ x: e * Math.sin((2 * r * Math.PI) / t), y: -1 * e * Math.cos((2 * r * Math.PI) / t) });
            return i;
        }
        getSelfRect() {
            const t = this._getPoints();
            var e = t[0].x,
                i = t[0].y,
                r = t[0].x,
                a = t[0].y;
            return (
                t.forEach((t) => {
                    (e = Math.min(e, t.x)), (i = Math.max(i, t.x)), (r = Math.min(r, t.y)), (a = Math.max(a, t.y));
                }), { x: e, y: r, width: i - e, height: a - r }
            );
        }
        getWidth() {
            return 2 * this.radius();
        }
        getHeight() {
            return 2 * this.radius();
        }
        setWidth(t) {
            this.radius(t / 2);
        }
        setHeight(t) {
            this.radius(t / 2);
        }
    }
    (ye.prototype.className = "RegularPolygon"),
    (ye.prototype._centroid = !0),
    (ye.prototype._attrsAffectingSize = ["radius"]),
    r(ye),
        w.addGetterSetter(ye, "radius", 0, p()),
        w.addGetterSetter(ye, "sides", 0, p());
    var xe = 2 * Math.PI;
    class be extends zt {
        _sceneFunc(t) {
            t.beginPath(),
                t.arc(0, 0, this.innerRadius(), 0, xe, !1),
                t.moveTo(this.outerRadius(), 0),
                t.arc(0, 0, this.outerRadius(), xe, 0, !0),
                t.closePath(),
                t.fillStrokeShape(this);
        }
        getWidth() {
            return 2 * this.outerRadius();
        }
        getHeight() {
            return 2 * this.outerRadius();
        }
        setWidth(t) {
            this.outerRadius(t / 2);
        }
        setHeight(t) {
            this.outerRadius(t / 2);
        }
    }
    (be.prototype.className = "Ring"),
    (be.prototype._centroid = !0),
    (be.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"]),
    r(be),
        w.addGetterSetter(be, "innerRadius", 0, p()),
        w.addGetterSetter(be, "outerRadius", 0, p());
    class Se extends zt {
        constructor(t) {
            super(t),
                (this._updated = !0),
                (this.anim = new qt(() => {
                    var t = this._updated;
                    return (this._updated = !1), t;
                })),
                this.on("animationChange.konva", function() {
                    this.frameIndex(0);
                }),
                this.on("frameIndexChange.konva", function() {
                    this._updated = !0;
                }),
                this.on("frameRateChange.konva", function() {
                    this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
                });
        }
        _sceneFunc(t) {
            var e = this.animation(),
                i = this.frameIndex(),
                r = 4 * i,
                a = this.animations()[e],
                n = this.frameOffsets(),
                s = a[r + 0],
                o = a[r + 1],
                h = a[r + 2],
                l = a[r + 3],
                d = this.image();
            if (((this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, h, l), t.closePath(), t.fillStrokeShape(this)), d))
                if (n) {
                    var c = n[e],
                        g = 2 * i;
                    t.drawImage(d, s, o, h, l, c[g + 0], c[g + 1], h, l);
                } else t.drawImage(d, s, o, h, l, 0, 0, h, l);
        }
        _hitFunc(t) {
            var e = this.animation(),
                i = this.frameIndex(),
                r = 4 * i,
                a = this.animations()[e],
                n = this.frameOffsets(),
                s = a[r + 2],
                o = a[r + 3];
            if ((t.beginPath(), n)) {
                var h = n[e],
                    l = 2 * i;
                t.rect(h[l + 0], h[l + 1], s, o);
            } else t.rect(0, 0, s, o);
            t.closePath(), t.fillShape(this);
        }
        _useBufferCanvas() {
            return super._useBufferCanvas(!0);
        }
        _setInterval() {
            var t = this;
            this.interval = setInterval(function() {
                t._updateIndex();
            }, 1e3 / this.frameRate());
        }
        start() {
            if (!this.isRunning()) {
                var t = this.getLayer();
                this.anim.setLayers(t), this._setInterval(), this.anim.start();
            }
        }
        stop() {
            this.anim.stop(), clearInterval(this.interval);
        }
        isRunning() {
            return this.anim.isRunning();
        }
        _updateIndex() {
            var t = this.frameIndex(),
                e = this.animation();
            t < this.animations()[e].length / 4 - 1 ? this.frameIndex(t + 1) : this.frameIndex(0);
        }
    }
    (Se.prototype.className = "Sprite"),
    r(Se),
        w.addGetterSetter(Se, "animation"),
        w.addGetterSetter(Se, "animations"),
        w.addGetterSetter(Se, "frameOffsets"),
        w.addGetterSetter(Se, "image"),
        w.addGetterSetter(Se, "frameIndex", 0, p()),
        w.addGetterSetter(Se, "frameRate", 17, p()),
        w.backCompat(Se, { index: "frameIndex", getIndex: "getFrameIndex", setIndex: "setFrameIndex" });
    class we extends zt {
        _sceneFunc(t) {
            var e = this.innerRadius(),
                i = this.outerRadius(),
                r = this.numPoints();
            t.beginPath(), t.moveTo(0, 0 - i);
            for (var a = 1; a < 2 * r; a++) {
                var n = a % 2 == 0 ? i : e,
                    s = n * Math.sin((a * Math.PI) / r),
                    o = -1 * n * Math.cos((a * Math.PI) / r);
                t.lineTo(s, o);
            }
            t.closePath(), t.fillStrokeShape(this);
        }
        getWidth() {
            return 2 * this.outerRadius();
        }
        getHeight() {
            return 2 * this.outerRadius();
        }
        setWidth(t) {
            this.outerRadius(t / 2);
        }
        setHeight(t) {
            this.outerRadius(t / 2);
        }
    }

    function Ce(t) {
        return Array.from(t);
    }
    (we.prototype.className = "Star"),
    (we.prototype._centroid = !0),
    (we.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"]),
    r(we),
        w.addGetterSetter(we, "numPoints", 5, p()),
        w.addGetterSetter(we, "innerRadius", 0, p()),
        w.addGetterSetter(we, "outerRadius", 0, p());
    var ke,
        Pe = "auto",
        Te = "justify",
        Ae = "left",
        Me = "middle",
        Ge = "normal",
        Ee = " ",
        Re = [
            "fontFamily",
            "fontSize",
            "fontStyle",
            "fontVariant",
            "padding",
            "align",
            "verticalAlign",
            "lineHeight",
            "text",
            "width",
            "height",
            "wrap",
            "ellipsis",
            "letterSpacing",
        ],
        Le = Re.length;

    function De() {
        return ke || (ke = g.createCanvasElement().getContext("2d"));
    }
    class Oe extends zt {
        constructor(t) {
            super(
                    (function(t) {
                        return (
                            (t = t || {}).fillLinearGradientColorStops ||
                            t.fillRadialGradientColorStops ||
                            t.fillPatternImage ||
                            (t.fill = t.fill || "black"),
                            t
                        );
                    })(t)
                ),
                (this._partialTextX = 0),
                (this._partialTextY = 0);
            for (var e = 0; e < Le; e++) this.on(Re[e] + "Change.konva", this._setTextData);
            this._setTextData();
        }
        _sceneFunc(t) {
            var e = this.textArr,
                i = e.length;
            if (this.text()) {
                var r,
                    a = this.padding(),
                    n = this.fontSize(),
                    s = this.lineHeight() * n,
                    o = this.verticalAlign(),
                    h = 0,
                    l = this.align(),
                    d = this.getWidth(),
                    c = this.letterSpacing(),
                    g = this.fill(),
                    u = this.textDecoration(),
                    f = -1 !== u.indexOf("underline"),
                    p = -1 !== u.indexOf("line-through"),
                    v = 0,
                    m = ((v = s / 2), 0),
                    _ = 0;
                for (
                    t.setAttr("font", this._getContextFont()),
                    t.setAttr("textBaseline", Me),
                    t.setAttr("textAlign", Ae),
                    o === Me ? (h = (this.getHeight() - i * s - 2 * a) / 2) : "bottom" === o && (h = this.getHeight() - i * s - 2 * a),
                    t.translate(a, h + a),
                    r = 0; r < i; r++
                ) {
                    (m = 0), (_ = 0);
                    var y,
                        x,
                        b,
                        S = e[r],
                        w = S.text,
                        C = S.width,
                        k = r !== i - 1;
                    if (
                        (t.save(),
                            "right" === l ? (m += d - C - 2 * a) : "center" === l && (m += (d - C - 2 * a) / 2),
                            f &&
                            (t.save(),
                                t.beginPath(),
                                t.moveTo(m, v + _ + Math.round(n / 2)),
                                (x = 0 === (y = w.split(" ").length - 1)),
                                (b = l === Te && k && !x ? d - 2 * a : C),
                                t.lineTo(m + Math.round(b), v + _ + Math.round(n / 2)),
                                (t.lineWidth = n / 15),
                                (t.strokeStyle = g),
                                t.stroke(),
                                t.restore()),
                            p &&
                            (t.save(),
                                t.beginPath(),
                                t.moveTo(m, v + _),
                                (x = 0 === (y = w.split(" ").length - 1)),
                                (b = l === Te && k && !x ? d - 2 * a : C),
                                t.lineTo(m + Math.round(b), v + _),
                                (t.lineWidth = n / 15),
                                (t.strokeStyle = g),
                                t.stroke(),
                                t.restore()),
                            0 !== c || l === Te)
                    ) {
                        y = w.split(" ").length - 1;
                        for (var P = Ce(w), T = 0; T < P.length; T++) {
                            var A = P[T];
                            " " === A && r !== i - 1 && l === Te && (m += (d - 2 * a - C) / y),
                                (this._partialTextX = m),
                                (this._partialTextY = v + _),
                                (this._partialText = A),
                                t.fillStrokeShape(this),
                                (m += this.measureSize(A).width + c);
                        }
                    } else(this._partialTextX = m), (this._partialTextY = v + _), (this._partialText = w), t.fillStrokeShape(this);
                    t.restore(), i > 1 && (v += s);
                }
            }
        }
        _hitFunc(t) {
            var e = this.getWidth(),
                i = this.getHeight();
            t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this);
        }
        setText(t) {
            var e = g._isString(t) ? t : null == t ? "" : t + "";
            return this._setAttr("text", e), this;
        }
        getWidth() {
            return this.attrs.width === Pe || void 0 === this.attrs.width ? this.getTextWidth() + 2 * this.padding() : this.attrs.width;
        }
        getHeight() {
            return this.attrs.height === Pe || void 0 === this.attrs.height ?
                this.fontSize() * this.textArr.length * this.lineHeight() + 2 * this.padding() :
                this.attrs.height;
        }
        getTextWidth() {
            return this.textWidth;
        }
        getTextHeight() {
            return (
                g.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),
                this.textHeight
            );
        }
        measureSize(t) {
            var e,
                i = De(),
                r = this.fontSize();
            return i.save(), (i.font = this._getContextFont()), (e = i.measureText(t)), i.restore(), { width: e.width, height: r };
        }
        _getContextFont() {
            return (
                this.fontStyle() +
                Ee +
                this.fontVariant() +
                Ee +
                (this.fontSize() + "px ") +
                this.fontFamily()
                .split(",")
                .map((t) => {
                    const e = (t = t.trim()).indexOf(" ") >= 0,
                        i = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
                    return e && !i && (t = `"${t}"`), t;
                })
                .join(", ")
            );
        }
        _addTextLine(t) {
            this.align() === Te && (t = t.trim());
            var e = this._getTextWidth(t);
            return this.textArr.push({ text: t, width: e });
        }
        _getTextWidth(t) {
            var e = this.letterSpacing(),
                i = t.length;
            return De().measureText(t).width + (i ? e * (i - 1) : 0);
        }
        _setTextData() {
            var t = this.text().split("\n"),
                e = +this.fontSize(),
                i = 0,
                r = this.lineHeight() * e,
                a = this.attrs.width,
                n = this.attrs.height,
                s = a !== Pe && void 0 !== a,
                o = n !== Pe && void 0 !== n,
                h = this.padding(),
                l = a - 2 * h,
                d = n - 2 * h,
                c = 0,
                g = this.wrap(),
                u = "none" !== g,
                f = "char" !== g && u,
                p = this.ellipsis();
            (this.textArr = []), (De().font = this._getContextFont());
            for (var v = p ? this._getTextWidth("…") : 0, m = 0, _ = t.length; m < _; ++m) {
                var y = t[m],
                    x = this._getTextWidth(y);
                if (s && x > l)
                    for (; y.length > 0;) {
                        for (var b = 0, S = y.length, w = "", C = 0; b < S;) {
                            var k = (b + S) >>> 1,
                                P = y.slice(0, k + 1),
                                T = this._getTextWidth(P) + v;
                            T <= l ? ((b = k + 1), (w = P), (C = T)) : (S = k);
                        }
                        if (!w) break;
                        if (f) {
                            var A,
                                M = y[w.length];
                            (A = (M === Ee || "-" === M) && C <= l ? w.length : Math.max(w.lastIndexOf(Ee), w.lastIndexOf("-")) + 1) > 0 &&
                                ((b = A), (w = w.slice(0, b)), (C = this._getTextWidth(w)));
                        }
                        if (((w = w.trimRight()), this._addTextLine(w), (i = Math.max(i, C)), (c += r), !u || (o && c + r > d))) {
                            var G = this.textArr[this.textArr.length - 1];
                            if (G)
                                if (p)
                                    this._getTextWidth(G.text + "…") < l || (G.text = G.text.slice(0, G.text.length - 3)),
                                    this.textArr.splice(this.textArr.length - 1, 1),
                                    this._addTextLine(G.text + "…");
                            break;
                        }
                        if ((y = (y = y.slice(b)).trimLeft()).length > 0 && (x = this._getTextWidth(y)) <= l) {
                            this._addTextLine(y), (c += r), (i = Math.max(i, x));
                            break;
                        }
                    }
                else this._addTextLine(y), (c += r), (i = Math.max(i, x));
                if (o && c + r > d) break;
            }
            (this.textHeight = e), (this.textWidth = i);
        }
        getStrokeScaleEnabled() {
            return !0;
        }
    }
    (Oe.prototype._fillFunc = function(t) {
        t.fillText(this._partialText, this._partialTextX, this._partialTextY);
    }),
    (Oe.prototype._strokeFunc = function(t) {
        t.strokeText(this._partialText, this._partialTextX, this._partialTextY);
    }),
    (Oe.prototype.className = "Text"),
    (Oe.prototype._attrsAffectingSize = ["text", "fontSize", "padding", "wrap", "lineHeight", "letterSpacing"]),
    r(Oe),
        w.overWriteSetter(Oe, "width", m()),
        w.overWriteSetter(Oe, "height", m()),
        w.addGetterSetter(Oe, "fontFamily", "Arial"),
        w.addGetterSetter(Oe, "fontSize", 12, p()),
        w.addGetterSetter(Oe, "fontStyle", Ge),
        w.addGetterSetter(Oe, "fontVariant", Ge),
        w.addGetterSetter(Oe, "padding", 0, p()),
        w.addGetterSetter(Oe, "align", Ae),
        w.addGetterSetter(Oe, "verticalAlign", "top"),
        w.addGetterSetter(Oe, "lineHeight", 1, p()),
        w.addGetterSetter(Oe, "wrap", "word"),
        w.addGetterSetter(Oe, "ellipsis", !1, x()),
        w.addGetterSetter(Oe, "letterSpacing", 0, p()),
        w.addGetterSetter(Oe, "text", "", _()),
        w.addGetterSetter(Oe, "textDecoration", "");
    var Ie = "normal";

    function Fe(t) {
        t.fillText(this.partialText, 0, 0);
    }

    function Ne(t) {
        t.strokeText(this.partialText, 0, 0);
    }
    class Be extends zt {
        constructor(t) {
            super(t),
                (this.dummyCanvas = g.createCanvasElement()),
                (this.dataArray = []),
                (this.dataArray = ne.parsePathData(this.attrs.data)),
                this.on("dataChange.konva", function() {
                    (this.dataArray = ne.parsePathData(this.attrs.data)), this._setTextData();
                }),
                this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva", this._setTextData),
                this._setTextData();
        }
        _sceneFunc(t) {
            t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", this.textBaseline()), t.setAttr("textAlign", "left"), t.save();
            var e = this.textDecoration(),
                i = this.fill(),
                r = this.fontSize(),
                a = this.glyphInfo;
            "underline" === e && t.beginPath();
            for (var n = 0; n < a.length; n++) {
                t.save();
                var s = a[n].p0;
                t.translate(s.x, s.y),
                    t.rotate(a[n].rotation),
                    (this.partialText = a[n].text),
                    t.fillStrokeShape(this),
                    "underline" === e && (0 === n && t.moveTo(0, r / 2 + 1), t.lineTo(r, r / 2 + 1)),
                    t.restore();
            }
            "underline" === e && ((t.strokeStyle = i), (t.lineWidth = r / 20), t.stroke()), t.restore();
        }
        _hitFunc(t) {
            t.beginPath();
            var e = this.glyphInfo;
            if (e.length >= 1) {
                var i = e[0].p0;
                t.moveTo(i.x, i.y);
            }
            for (var r = 0; r < e.length; r++) {
                var a = e[r].p1;
                t.lineTo(a.x, a.y);
            }
            t.setAttr("lineWidth", this.fontSize()), t.setAttr("strokeStyle", this.colorKey), t.stroke();
        }
        getTextWidth() {
            return this.textWidth;
        }
        getTextHeight() {
            return (
                g.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."),
                this.textHeight
            );
        }
        setText(t) {
            return Oe.prototype.setText.call(this, t);
        }
        _getContextFont() {
            return Oe.prototype._getContextFont.call(this);
        }
        _getTextSize(t) {
            var e = this.dummyCanvas.getContext("2d");
            e.save(), (e.font = this._getContextFont());
            var i = e.measureText(t);
            return e.restore(), { width: i.width, height: parseInt(this.attrs.fontSize, 10) };
        }
        _setTextData() {
            var t = this,
                e = this._getTextSize(this.attrs.text),
                i = this.letterSpacing(),
                r = this.align(),
                a = this.kerningFunc();
            (this.textWidth = e.width), (this.textHeight = e.height);
            var n = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * i, 0);
            this.glyphInfo = [];
            for (var s = 0, o = 0; o < t.dataArray.length; o++) t.dataArray[o].pathLength > 0 && (s += t.dataArray[o].pathLength);
            var h = 0;
            "center" === r && (h = Math.max(0, s / 2 - n / 2)), "right" === r && (h = Math.max(0, s - n));
            for (
                var l,
                    d,
                    c,
                    g = Ce(this.text()),
                    u = this.text().split(" ").length - 1,
                    f = -1,
                    p = 0,
                    v = function() {
                        p = 0;
                        for (var e = t.dataArray, i = f + 1; i < e.length; i++) {
                            if (e[i].pathLength > 0) return (f = i), e[i];
                            "M" === e[i].command && (l = { x: e[i].points[0], y: e[i].points[1] });
                        }
                        return {};
                    },
                    m = function(e) {
                        var a = t._getTextSize(e).width + i;
                        " " === e && "justify" === r && (a += (s - n) / u);
                        var o = 0,
                            h = 0;
                        for (d = void 0; Math.abs(a - o) / a > 0.01 && h < 20;) {
                            h++;
                            for (var g = o; void 0 === c;)(c = v()) && g + c.pathLength < a && ((g += c.pathLength), (c = void 0));
                            if (c === {} || void 0 === l) return;
                            var f = !1;
                            switch (c.command) {
                                case "L":
                                    ne.getLineLength(l.x, l.y, c.points[0], c.points[1]) > a ?
                                        (d = ne.getPointOnLine(a, l.x, l.y, c.points[0], c.points[1], l.x, l.y)) :
                                        (c = void 0);
                                    break;
                                case "A":
                                    var m = c.points[4],
                                        _ = c.points[5],
                                        y = c.points[4] + _;
                                    0 === p ?
                                        (p = m + 1e-8) :
                                        a > o ?
                                        (p += ((Math.PI / 180) * _) / Math.abs(_)) :
                                        (p -= ((Math.PI / 360) * _) / Math.abs(_)),
                                        ((_ < 0 && p < y) || (_ >= 0 && p > y)) && ((p = y), (f = !0)),
                                        (d = ne.getPointOnEllipticalArc(c.points[0], c.points[1], c.points[2], c.points[3], p, c.points[6]));
                                    break;
                                case "C":
                                    0 === p ?
                                        (p = a > c.pathLength ? 1e-8 : a / c.pathLength) :
                                        a > o ?
                                        (p += (a - o) / c.pathLength / 2) :
                                        (p = Math.max(p - (o - a) / c.pathLength / 2, 0)),
                                        p > 1 && ((p = 1), (f = !0)),
                                        (d = ne.getPointOnCubicBezier(
                                            p,
                                            c.start.x,
                                            c.start.y,
                                            c.points[0],
                                            c.points[1],
                                            c.points[2],
                                            c.points[3],
                                            c.points[4],
                                            c.points[5]
                                        ));
                                    break;
                                case "Q":
                                    0 === p ? (p = a / c.pathLength) : a > o ? (p += (a - o) / c.pathLength) : (p -= (o - a) / c.pathLength),
                                        p > 1 && ((p = 1), (f = !0)),
                                        (d = ne.getPointOnQuadraticBezier(
                                            p,
                                            c.start.x,
                                            c.start.y,
                                            c.points[0],
                                            c.points[1],
                                            c.points[2],
                                            c.points[3]
                                        ));
                            }
                            void 0 !== d && (o = ne.getLineLength(l.x, l.y, d.x, d.y)), f && ((f = !1), (c = void 0));
                        }
                    },
                    _ = h / (t._getTextSize("C").width + i) - 1,
                    y = 0; y < _ && (m("C"), void 0 !== l && void 0 !== d); y++
            )
                l = d;
            for (var x = 0; x < g.length && (m(g[x]), void 0 !== l && void 0 !== d); x++) {
                var b = ne.getLineLength(l.x, l.y, d.x, d.y),
                    S = 0;
                if (a)
                    try {
                        S = a(g[x - 1], g[x]) * this.fontSize();
                    } catch (t) {
                        S = 0;
                    }
                    (l.x += S), (d.x += S), (this.textWidth += S);
                var w = ne.getPointOnLine(S + b / 2, l.x, l.y, d.x, d.y),
                    C = Math.atan2(d.y - l.y, d.x - l.x);
                this.glyphInfo.push({ transposeX: w.x, transposeY: w.y, text: g[x], rotation: C, p0: l, p1: d }), (l = d);
            }
        }
        getSelfRect() {
            if (!this.glyphInfo.length) return { x: 0, y: 0, width: 0, height: 0 };
            var t = [];
            this.glyphInfo.forEach(function(e) {
                t.push(e.p0.x), t.push(e.p0.y), t.push(e.p1.x), t.push(e.p1.y);
            });
            for (var e, i, r = t[0] || 0, a = t[0] || 0, n = t[1] || 0, s = t[1] || 0, o = 0; o < t.length / 2; o++)
                (e = t[2 * o]), (i = t[2 * o + 1]), (r = Math.min(r, e)), (a = Math.max(a, e)), (n = Math.min(n, i)), (s = Math.max(s, i));
            var h = this.fontSize();
            return { x: r - h / 2, y: n - h / 2, width: a - r + h, height: s - n + h };
        }
    }
    (Be.prototype._fillFunc = Fe),
    (Be.prototype._strokeFunc = Ne),
    (Be.prototype._fillFuncHit = Fe),
    (Be.prototype._strokeFuncHit = Ne),
    (Be.prototype.className = "TextPath"),
    (Be.prototype._attrsAffectingSize = ["text", "fontSize", "data"]),
    r(Be),
        w.addGetterSetter(Be, "data"),
        w.addGetterSetter(Be, "fontFamily", "Arial"),
        w.addGetterSetter(Be, "fontSize", 12, p()),
        w.addGetterSetter(Be, "fontStyle", Ie),
        w.addGetterSetter(Be, "align", "left"),
        w.addGetterSetter(Be, "letterSpacing", 0, p()),
        w.addGetterSetter(Be, "textBaseline", "middle"),
        w.addGetterSetter(Be, "fontVariant", Ie),
        w.addGetterSetter(Be, "text", ""),
        w.addGetterSetter(Be, "textDecoration", null),
        w.addGetterSetter(Be, "kerningFunc", null);
    var ze = "tr-konva",
        We = [
            "resizeEnabledChange",
            "rotateAnchorOffsetChange",
            "rotateEnabledChange",
            "enabledAnchorsChange",
            "anchorSizeChange",
            "borderEnabledChange",
            "borderStrokeChange",
            "borderStrokeWidthChange",
            "borderDashChange",
            "anchorStrokeChange",
            "anchorStrokeWidthChange",
            "anchorFillChange",
            "anchorCornerRadiusChange",
            "ignoreStrokeChange",
        ]
        .map((t) => t + ".tr-konva")
        .join(" "),
        He = "nodesRect",
        Ye = [
            "widthChange",
            "heightChange",
            "scaleXChange",
            "scaleYChange",
            "skewXChange",
            "skewYChange",
            "rotationChange",
            "offsetXChange",
            "offsetYChange",
            "transformsEnabledChange",
            "strokeWidthChange",
        ],
        Xe = {
            "top-left": -45,
            "top-center": 0,
            "top-right": 45,
            "middle-right": -90,
            "middle-left": 90,
            "bottom-left": -135,
            "bottom-center": 180,
            "bottom-right": 135,
        };
    const je = "ontouchstart" in i._global;
    var Ue = ["top-left", "top-center", "top-right", "middle-right", "middle-left", "bottom-left", "bottom-center", "bottom-right"];

    function qe(t, e, i) {
        const r = i.x + (t.x - i.x) * Math.cos(e) - (t.y - i.y) * Math.sin(e),
            a = i.y + (t.x - i.x) * Math.sin(e) + (t.y - i.y) * Math.cos(e);
        return Object.assign(Object.assign({}, t), { rotation: t.rotation + e, x: r, y: a });
    }

    function Ve(t, e) {
        const i = (function(t) {
            return {
                x: t.x + (t.width / 2) * Math.cos(t.rotation) + (t.height / 2) * Math.sin(-t.rotation),
                y: t.y + (t.height / 2) * Math.cos(t.rotation) + (t.width / 2) * Math.sin(t.rotation),
            };
        })(t);
        return qe(t, e, i);
    }
    class Ke extends jt {
        constructor(t) {
            super(t),
                (this._transforming = !1),
                this._createElements(),
                (this._handleMouseMove = this._handleMouseMove.bind(this)),
                (this._handleMouseUp = this._handleMouseUp.bind(this)),
                (this.update = this.update.bind(this)),
                this.on(We, this.update),
                this.getNode() && this.update();
        }
        attachTo(t) {
            return this.setNode(t), this;
        }
        setNode(t) {
            return (
                g.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."),
                this.setNodes([t])
            );
        }
        getNode() {
            return this._nodes && this._nodes[0];
        }
        _getEventNamespace() {
            return ze + this._id;
        }
        setNodes(t = []) {
            return (
                this._nodes && this._nodes.length && this.detach(),
                (this._nodes = t),
                1 === t.length && this.useSingleNodeRotation() ? this.rotation(t[0].getAbsoluteRotation()) : this.rotation(0),
                this._nodes.forEach((t) => {
                    const e = () => {
                            1 === this.nodes().length && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()),
                                this._resetTransformCache(),
                                this._transforming || this.isDragging() || this.update();
                        },
                        i = t._attrsAffectingSize.map((t) => t + "Change." + this._getEventNamespace()).join(" ");
                    t.on(i, e),
                        t.on(Ye.map((t) => t + `.${this._getEventNamespace()}`).join(" "), e),
                        t.on(`absoluteTransformChange.${this._getEventNamespace()}`, e),
                        this._proxyDrag(t);
                }),
                this._resetTransformCache(), !!this.findOne(".top-left") && this.update(),
                this
            );
        }
        _proxyDrag(t) {
            let e;
            t.on(`dragstart.${this._getEventNamespace()}`, (i) => {
                    (e = t.getAbsolutePosition()), this.isDragging() || t === this.findOne(".back") || this.startDrag(i, !1);
                }),
                t.on(`dragmove.${this._getEventNamespace()}`, (i) => {
                    if (!e) return;
                    const r = t.getAbsolutePosition(),
                        a = r.x - e.x,
                        n = r.y - e.y;
                    this.nodes().forEach((e) => {
                            if (e === t) return;
                            if (e.isDragging()) return;
                            const r = e.getAbsolutePosition();
                            e.setAbsolutePosition({ x: r.x + a, y: r.y + n }), e.startDrag(i);
                        }),
                        (e = null);
                });
        }
        getNodes() {
            return this._nodes || [];
        }
        getActiveAnchor() {
            return this._movingAnchorName;
        }
        detach() {
            this._nodes &&
                this._nodes.forEach((t) => {
                    t.off("." + this._getEventNamespace());
                }),
                (this._nodes = []),
                this._resetTransformCache();
        }
        _resetTransformCache() {
            this._clearCache(He), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
        }
        _getNodeRect() {
            return this._getCache(He, this.__getNodeRect);
        }
        __getNodeShape(t, e = this.rotation(), r) {
            var a = t.getClientRect({ skipTransform: !0, skipShadow: !0, skipStroke: this.ignoreStroke() }),
                n = t.getAbsoluteScale(r),
                s = t.getAbsolutePosition(r),
                o = a.x * n.x - t.offsetX() * n.x,
                h = a.y * n.y - t.offsetY() * n.y;
            const l = (i.getAngle(t.getAbsoluteRotation()) + 2 * Math.PI) % (2 * Math.PI);
            return qe({
                x: s.x + o * Math.cos(l) + h * Math.sin(-l),
                y: s.y + h * Math.cos(l) + o * Math.sin(l),
                width: a.width * n.x,
                height: a.height * n.y,
                rotation: l,
            }, -i.getAngle(e), { x: 0, y: 0 });
        }
        __getNodeRect() {
            if (!this.getNode()) return { x: -1e8, y: -1e8, width: 0, height: 0, rotation: 0 };
            const t = [];
            this.nodes().map((e) => {
                const i = e.getClientRect({ skipTransform: !0, skipShadow: !0, skipStroke: this.ignoreStroke() });
                var r = [
                        { x: i.x, y: i.y },
                        { x: i.x + i.width, y: i.y },
                        { x: i.x + i.width, y: i.y + i.height },
                        { x: i.x, y: i.y + i.height },
                    ],
                    a = e.getAbsoluteTransform();
                r.forEach(function(e) {
                    var i = a.point(e);
                    t.push(i);
                });
            });
            const e = new a();
            var r, n, s, o;
            e.rotate(-i.getAngle(this.rotation())),
                t.forEach(function(t) {
                    var i = e.point(t);
                    void 0 === r && ((r = s = i.x), (n = o = i.y)),
                        (r = Math.min(r, i.x)),
                        (n = Math.min(n, i.y)),
                        (s = Math.max(s, i.x)),
                        (o = Math.max(o, i.y));
                }),
                e.invert();
            const h = e.point({ x: r, y: n });
            return { x: h.x, y: h.y, width: s - r, height: o - n, rotation: i.getAngle(this.rotation()) };
        }
        getX() {
            return this._getNodeRect().x;
        }
        getY() {
            return this._getNodeRect().y;
        }
        getWidth() {
            return this._getNodeRect().width;
        }
        getHeight() {
            return this._getNodeRect().height;
        }
        _createElements() {
            this._createBack(),
                Ue.forEach(
                    function(t) {
                        this._createAnchor(t);
                    }.bind(this)
                ),
                this._createAnchor("rotater");
        }
        _createAnchor(t) {
            var e = new _e({
                    stroke: "rgb(0, 161, 255)",
                    fill: "white",
                    strokeWidth: 1,
                    name: t + " _anchor",
                    dragDistance: 0,
                    draggable: !0,
                    hitStrokeWidth: je ? 10 : "auto",
                }),
                r = this;
            e.on("mousedown touchstart", function(t) {
                    r._handleMouseDown(t);
                }),
                e.on("dragstart", (t) => {
                    e.stopDrag(), (t.cancelBubble = !0);
                }),
                e.on("dragend", (t) => {
                    t.cancelBubble = !0;
                }),
                e.on("mouseenter", () => {
                    var r = i.getAngle(this.rotation()),
                        a = (function(t, e) {
                            if ("rotater" === t) return "crosshair";
                            e += g.degToRad(Xe[t] || 0);
                            var i = ((g.radToDeg(e) % 360) + 360) % 360;
                            return g._inRange(i, 337.5, 360) || g._inRange(i, 0, 22.5) ?
                                "ns-resize" :
                                g._inRange(i, 22.5, 67.5) ?
                                "nesw-resize" :
                                g._inRange(i, 67.5, 112.5) ?
                                "ew-resize" :
                                g._inRange(i, 112.5, 157.5) ?
                                "nwse-resize" :
                                g._inRange(i, 157.5, 202.5) ?
                                "ns-resize" :
                                g._inRange(i, 202.5, 247.5) ?
                                "nesw-resize" :
                                g._inRange(i, 247.5, 292.5) ?
                                "ew-resize" :
                                g._inRange(i, 292.5, 337.5) ?
                                "nwse-resize" :
                                (g.error("Transformer has unknown angle for cursor detection: " + i), "pointer");
                        })(t, r);
                    e.getStage().content && (e.getStage().content.style.cursor = a), (this._cursorChange = !0);
                }),
                e.on("mouseout", () => {
                    e.getStage().content && (e.getStage().content.style.cursor = ""), (this._cursorChange = !1);
                }),
                this.add(e);
        }
        _createBack() {
            var t = new zt({
                name: "back",
                width: 0,
                height: 0,
                draggable: !0,
                sceneFunc(t) {
                    var e = this.getParent(),
                        i = e.padding();
                    t.beginPath(),
                        t.rect(-i, -i, this.width() + 2 * i, this.height() + 2 * i),
                        t.moveTo(this.width() / 2, -i),
                        e.rotateEnabled() && t.lineTo(this.width() / 2, -e.rotateAnchorOffset() * g._sign(this.height()) - i),
                        t.fillStrokeShape(this);
                },
                hitFunc: (t, e) => {
                    if (this.shouldOverdrawWholeArea()) {
                        var i = this.padding();
                        t.beginPath(), t.rect(-i, -i, e.width() + 2 * i, e.height() + 2 * i), t.fillStrokeShape(e);
                    }
                },
            });
            this.add(t),
                this._proxyDrag(t),
                t.on("dragstart", (t) => {
                    t.cancelBubble = !0;
                }),
                t.on("dragmove", (t) => {
                    t.cancelBubble = !0;
                }),
                t.on("dragend", (t) => {
                    t.cancelBubble = !0;
                }),
                this.on("dragmove", (t) => {
                    this.update();
                });
        }
        _handleMouseDown(t) {
            this._movingAnchorName = t.target.name().split(" ")[0];
            var e = this._getNodeRect(),
                i = e.width,
                r = e.height,
                a = Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2));
            (this.sin = Math.abs(r / a)),
            (this.cos = Math.abs(i / a)),
            "undefined" != typeof window &&
                (window.addEventListener("mousemove", this._handleMouseMove),
                    window.addEventListener("touchmove", this._handleMouseMove),
                    window.addEventListener("mouseup", this._handleMouseUp, !0),
                    window.addEventListener("touchend", this._handleMouseUp, !0)),
                (this._transforming = !0);
            var n = t.target.getAbsolutePosition(),
                s = t.target.getStage().getPointerPosition();
            (this._anchorDragOffset = { x: s.x - n.x, y: s.y - n.y }),
            this._fire("transformstart", { evt: t, target: this.getNode() }),
                this._nodes.forEach((e) => {
                    e._fire("transformstart", { evt: t, target: e });
                });
        }
        _handleMouseMove(t) {
            var e,
                r,
                a,
                n = this.findOne("." + this._movingAnchorName),
                s = n.getStage();
            s.setPointersPositions(t);
            const o = s.getPointerPosition();
            let h = { x: o.x - this._anchorDragOffset.x, y: o.y - this._anchorDragOffset.y };
            const l = n.getAbsolutePosition();
            this.anchorDragBoundFunc() && (h = this.anchorDragBoundFunc()(l, h, t)), n.setAbsolutePosition(h);
            const d = n.getAbsolutePosition();
            if (l.x !== d.x || l.y !== d.y)
                if ("rotater" !== this._movingAnchorName) {
                    var c = this.keepRatio() || t.shiftKey,
                        g = this.centeredScaling() || t.altKey;
                    if ("top-left" === this._movingAnchorName) {
                        if (c) {
                            var u = g ? { x: this.width() / 2, y: this.height() / 2 } : { x: this.findOne(".bottom-right").x(), y: this.findOne(".bottom-right").y() };
                            a = Math.sqrt(Math.pow(u.x - n.x(), 2) + Math.pow(u.y - n.y(), 2));
                            var f = this.findOne(".top-left").x() > u.x ? -1 : 1,
                                p = this.findOne(".top-left").y() > u.y ? -1 : 1;
                            (e = a * this.cos * f), (r = a * this.sin * p), this.findOne(".top-left").x(u.x - e), this.findOne(".top-left").y(u.y - r);
                        }
                    } else if ("top-center" === this._movingAnchorName) this.findOne(".top-left").y(n.y());
                    else if ("top-right" === this._movingAnchorName) {
                        if (c) {
                            u = g ? { x: this.width() / 2, y: this.height() / 2 } : { x: this.findOne(".bottom-left").x(), y: this.findOne(".bottom-left").y() };
                            a = Math.sqrt(Math.pow(n.x() - u.x, 2) + Math.pow(u.y - n.y(), 2));
                            (f = this.findOne(".top-right").x() < u.x ? -1 : 1), (p = this.findOne(".top-right").y() > u.y ? -1 : 1);
                            (e = a * this.cos * f), (r = a * this.sin * p), this.findOne(".top-right").x(u.x + e), this.findOne(".top-right").y(u.y - r);
                        }
                        var v = n.position();
                        this.findOne(".top-left").y(v.y), this.findOne(".bottom-right").x(v.x);
                    } else if ("middle-left" === this._movingAnchorName) this.findOne(".top-left").x(n.x());
                    else if ("middle-right" === this._movingAnchorName) this.findOne(".bottom-right").x(n.x());
                    else if ("bottom-left" === this._movingAnchorName) {
                        if (c) {
                            u = g ? { x: this.width() / 2, y: this.height() / 2 } : { x: this.findOne(".top-right").x(), y: this.findOne(".top-right").y() };
                            a = Math.sqrt(Math.pow(u.x - n.x(), 2) + Math.pow(n.y() - u.y, 2));
                            (f = u.x < n.x() ? -1 : 1), (p = n.y() < u.y ? -1 : 1);
                            (e = a * this.cos * f), (r = a * this.sin * p), n.x(u.x - e), n.y(u.y + r);
                        }
                        (v = n.position()), this.findOne(".top-left").x(v.x), this.findOne(".bottom-right").y(v.y);
                    } else if ("bottom-center" === this._movingAnchorName) this.findOne(".bottom-right").y(n.y());
                    else if ("bottom-right" === this._movingAnchorName) {
                        if (c) {
                            u = g ? { x: this.width() / 2, y: this.height() / 2 } : { x: this.findOne(".top-left").x(), y: this.findOne(".top-left").y() };
                            a = Math.sqrt(Math.pow(n.x() - u.x, 2) + Math.pow(n.y() - u.y, 2));
                            (f = this.findOne(".bottom-right").x() < u.x ? -1 : 1), (p = this.findOne(".bottom-right").y() < u.y ? -1 : 1);
                            (e = a * this.cos * f),
                            (r = a * this.sin * p),
                            this.findOne(".bottom-right").x(u.x + e),
                                this.findOne(".bottom-right").y(u.y + r);
                        }
                    } else console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
                    if ((g = this.centeredScaling() || t.altKey)) {
                        var m = this.findOne(".top-left"),
                            _ = this.findOne(".bottom-right"),
                            y = m.x(),
                            x = m.y(),
                            b = this.getWidth() - _.x(),
                            S = this.getHeight() - _.y();
                        _.move({ x: -y, y: -x }), m.move({ x: b, y: S });
                    }
                    var w = this.findOne(".top-left").getAbsolutePosition();
                    (e = w.x), (r = w.y);
                    var C = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(),
                        k = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
                    this._fitNodesInto({ x: e, y: r, width: C, height: k, rotation: i.getAngle(this.rotation()) }, t);
                } else {
                    var P = this._getNodeRect();
                    (e = n.x() - P.width / 2), (r = -n.y() + P.height / 2);
                    let a = Math.atan2(-r, e) + Math.PI / 2;
                    P.height < 0 && (a -= Math.PI);
                    const s = i.getAngle(this.rotation()) + a,
                        o = i.getAngle(this.rotationSnapTolerance()),
                        h = (function(t, e, r) {
                            let a = e;
                            for (let n = 0; n < t.length; n++) {
                                const s = i.getAngle(t[n]),
                                    o = Math.abs(s - e) % (2 * Math.PI);
                                Math.min(o, 2 * Math.PI - o) < r && (a = s);
                            }
                            return a;
                        })(this.rotationSnaps(), s, o),
                        l = Ve(P, h - P.rotation);
                    this._fitNodesInto(l, t);
                }
        }
        _handleMouseUp(t) {
            this._removeEvents(t);
        }
        getAbsoluteTransform() {
            return this.getTransform();
        }
        _removeEvents(t) {
            if (this._transforming) {
                (this._transforming = !1),
                "undefined" != typeof window &&
                    (window.removeEventListener("mousemove", this._handleMouseMove),
                        window.removeEventListener("touchmove", this._handleMouseMove),
                        window.removeEventListener("mouseup", this._handleMouseUp, !0),
                        window.removeEventListener("touchend", this._handleMouseUp, !0));
                var e = this.getNode();
                this._fire("transformend", { evt: t, target: e }),
                    e &&
                    this._nodes.forEach((e) => {
                        e._fire("transformend", { evt: t, target: e });
                    }),
                    (this._movingAnchorName = null);
            }
        }
        _fitNodesInto(t, e) {
            var r = this._getNodeRect();
            if (g._inRange(t.width, 2 * -this.padding() - 1, 1)) return void this.update();
            if (g._inRange(t.height, 2 * -this.padding() - 1, 1)) return void this.update();
            const n = this.flipEnabled();
            var s = new a();
            if ((s.rotate(i.getAngle(this.rotation())), this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("left") >= 0)) {
                const e = s.point({ x: 2 * -this.padding(), y: 0 });
                if (
                    ((t.x += e.x),
                        (t.y += e.y),
                        (t.width += 2 * this.padding()),
                        (this._movingAnchorName = this._movingAnchorName.replace("left", "right")),
                        (this._anchorDragOffset.x -= e.x),
                        (this._anchorDragOffset.y -= e.y), !n)
                )
                    return void this.update();
            } else if (this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
                const e = s.point({ x: 2 * this.padding(), y: 0 });
                if (
                    ((this._movingAnchorName = this._movingAnchorName.replace("right", "left")),
                        (this._anchorDragOffset.x -= e.x),
                        (this._anchorDragOffset.y -= e.y),
                        (t.width += 2 * this.padding()), !n)
                )
                    return void this.update();
            }
            if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
                const e = s.point({ x: 0, y: 2 * -this.padding() });
                if (
                    ((t.x += e.x),
                        (t.y += e.y),
                        (this._movingAnchorName = this._movingAnchorName.replace("top", "bottom")),
                        (this._anchorDragOffset.x -= e.x),
                        (this._anchorDragOffset.y -= e.y),
                        (t.height += 2 * this.padding()), !n)
                )
                    return void this.update();
            } else if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
                const e = s.point({ x: 0, y: 2 * this.padding() });
                if (
                    ((this._movingAnchorName = this._movingAnchorName.replace("bottom", "top")),
                        (this._anchorDragOffset.x -= e.x),
                        (this._anchorDragOffset.y -= e.y),
                        (t.height += 2 * this.padding()), !n)
                )
                    return void this.update();
            }
            if (this.boundBoxFunc()) {
                const e = this.boundBoxFunc()(r, t);
                e ? (t = e) : g.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
            }
            const o = 1e7,
                h = new a();
            h.translate(r.x, r.y), h.rotate(r.rotation), h.scale(r.width / o, r.height / o);
            const l = new a();
            l.translate(t.x, t.y), l.rotate(t.rotation), l.scale(t.width / o, t.height / o);
            const d = l.multiply(h.invert());
            this._nodes.forEach((t) => {
                    var i;
                    const r = t.getParent().getAbsoluteTransform(),
                        n = t.getTransform().copy();
                    n.translate(t.offsetX(), t.offsetY());
                    const s = new a();
                    s.multiply(r.copy().invert()).multiply(d).multiply(r).multiply(n);
                    const o = s.decompose();
                    t.setAttrs(o),
                        this._fire("transform", { evt: e, target: t }),
                        t._fire("transform", { evt: e, target: t }),
                        null === (i = t.getLayer()) || void 0 === i || i.batchDraw();
                }),
                this.rotation(g._getRotation(t.rotation)),
                this._resetTransformCache(),
                this.update(),
                this.getLayer().batchDraw();
        }
        forceUpdate() {
            this._resetTransformCache(), this.update();
        }
        _batchChangeChild(t, e) {
            this.findOne(t).setAttrs(e);
        }
        update() {
            var t,
                e = this._getNodeRect();
            this.rotation(g._getRotation(e.rotation));
            var i = e.width,
                r = e.height,
                a = this.enabledAnchors(),
                n = this.resizeEnabled(),
                s = this.padding(),
                o = this.anchorSize();
            this.find("._anchor").forEach((t) => {
                    t.setAttrs({
                        width: o,
                        height: o,
                        offsetX: o / 2,
                        offsetY: o / 2,
                        stroke: this.anchorStroke(),
                        strokeWidth: this.anchorStrokeWidth(),
                        fill: this.anchorFill(),
                        cornerRadius: this.anchorCornerRadius(),
                    });
                }),
                this._batchChangeChild(".top-left", { x: 0, y: 0, offsetX: o / 2 + s, offsetY: o / 2 + s, visible: n && a.indexOf("top-left") >= 0 }),
                this._batchChangeChild(".top-center", { x: i / 2, y: 0, offsetY: o / 2 + s, visible: n && a.indexOf("top-center") >= 0 }),
                this._batchChangeChild(".top-right", { x: i, y: 0, offsetX: o / 2 - s, offsetY: o / 2 + s, visible: n && a.indexOf("top-right") >= 0 }),
                this._batchChangeChild(".middle-left", { x: 0, y: r / 2, offsetX: o / 2 + s, visible: n && a.indexOf("middle-left") >= 0 }),
                this._batchChangeChild(".middle-right", { x: i, y: r / 2, offsetX: o / 2 - s, visible: n && a.indexOf("middle-right") >= 0 }),
                this._batchChangeChild(".bottom-left", { x: 0, y: r, offsetX: o / 2 + s, offsetY: o / 2 - s, visible: n && a.indexOf("bottom-left") >= 0 }),
                this._batchChangeChild(".bottom-center", { x: i / 2, y: r, offsetY: o / 2 - s, visible: n && a.indexOf("bottom-center") >= 0 }),
                this._batchChangeChild(".bottom-right", {
                    x: i,
                    y: r,
                    offsetX: o / 2 - s,
                    offsetY: o / 2 - s,
                    visible: n && a.indexOf("bottom-right") >= 0,
                }),
                this._batchChangeChild(".rotater", { x: i / 2, y: -this.rotateAnchorOffset() * g._sign(r) - s, visible: this.rotateEnabled() }),
                this._batchChangeChild(".back", {
                    width: i,
                    height: r,
                    visible: this.borderEnabled(),
                    stroke: this.borderStroke(),
                    strokeWidth: this.borderStrokeWidth(),
                    dash: this.borderDash(),
                    x: 0,
                    y: 0,
                }),
                null === (t = this.getLayer()) || void 0 === t || t.batchDraw();
        }
        isTransforming() {
            return this._transforming;
        }
        stopTransform() {
            if (this._transforming) {
                this._removeEvents();
                var t = this.findOne("." + this._movingAnchorName);
                t && t.stopDrag();
            }
        }
        destroy() {
            return (
                this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""),
                jt.prototype.destroy.call(this),
                this.detach(),
                this._removeEvents(),
                this
            );
        }
        toObject() {
            return K.prototype.toObject.call(this);
        }
    }
    (Ke.prototype.className = "Transformer"),
    r(Ke),
        w.addGetterSetter(Ke, "enabledAnchors", Ue, function(t) {
            return (
                t instanceof Array || g.warn("enabledAnchors value should be an array"),
                t instanceof Array &&
                t.forEach(function(t) {
                    -1 === Ue.indexOf(t) && g.warn("Unknown anchor name: " + t + ". Available names are: " + Ue.join(", "));
                }),
                t || []
            );
        }),
        w.addGetterSetter(Ke, "flipEnabled", !0, x()),
        w.addGetterSetter(Ke, "resizeEnabled", !0),
        w.addGetterSetter(Ke, "anchorSize", 10, p()),
        w.addGetterSetter(Ke, "rotateEnabled", !0),
        w.addGetterSetter(Ke, "rotationSnaps", []),
        w.addGetterSetter(Ke, "rotateAnchorOffset", 50, p()),
        w.addGetterSetter(Ke, "rotationSnapTolerance", 5, p()),
        w.addGetterSetter(Ke, "borderEnabled", !0),
        w.addGetterSetter(Ke, "anchorStroke", "rgb(0, 161, 255)"),
        w.addGetterSetter(Ke, "anchorStrokeWidth", 1, p()),
        w.addGetterSetter(Ke, "anchorFill", "white"),
        w.addGetterSetter(Ke, "anchorCornerRadius", 0, p()),
        w.addGetterSetter(Ke, "borderStroke", "rgb(0, 161, 255)"),
        w.addGetterSetter(Ke, "borderStrokeWidth", 1, p()),
        w.addGetterSetter(Ke, "borderDash"),
        w.addGetterSetter(Ke, "keepRatio", !0),
        w.addGetterSetter(Ke, "centeredScaling", !1),
        w.addGetterSetter(Ke, "ignoreStroke", !1),
        w.addGetterSetter(Ke, "padding", 0, p()),
        w.addGetterSetter(Ke, "node"),
        w.addGetterSetter(Ke, "nodes"),
        w.addGetterSetter(Ke, "boundBoxFunc"),
        w.addGetterSetter(Ke, "anchorDragBoundFunc"),
        w.addGetterSetter(Ke, "shouldOverdrawWholeArea", !1),
        w.addGetterSetter(Ke, "useSingleNodeRotation", !0),
        w.backCompat(Ke, { lineEnabled: "borderEnabled", rotateHandlerOffset: "rotateAnchorOffset", enabledHandlers: "enabledAnchors" });
    class Qe extends zt {
        _sceneFunc(t) {
            t.beginPath(), t.arc(0, 0, this.radius(), 0, i.getAngle(this.angle()), this.clockwise()), t.lineTo(0, 0), t.closePath(), t.fillStrokeShape(this);
        }
        getWidth() {
            return 2 * this.radius();
        }
        getHeight() {
            return 2 * this.radius();
        }
        setWidth(t) {
            this.radius(t / 2);
        }
        setHeight(t) {
            this.radius(t / 2);
        }
    }

    function Je() {
        (this.r = 0), (this.g = 0), (this.b = 0), (this.a = 0), (this.next = null);
    }
    (Qe.prototype.className = "Wedge"),
    (Qe.prototype._centroid = !0),
    (Qe.prototype._attrsAffectingSize = ["radius"]),
    r(Qe),
        w.addGetterSetter(Qe, "radius", 0, p()),
        w.addGetterSetter(Qe, "angle", 0, p()),
        w.addGetterSetter(Qe, "clockwise", !1),
        w.backCompat(Qe, { angleDeg: "angle", getAngleDeg: "getAngle", setAngleDeg: "setAngle" });
    var Ze = [
            512,
            512,
            456,
            512,
            328,
            456,
            335,
            512,
            405,
            328,
            271,
            456,
            388,
            335,
            292,
            512,
            454,
            405,
            364,
            328,
            298,
            271,
            496,
            456,
            420,
            388,
            360,
            335,
            312,
            292,
            273,
            512,
            482,
            454,
            428,
            405,
            383,
            364,
            345,
            328,
            312,
            298,
            284,
            271,
            259,
            496,
            475,
            456,
            437,
            420,
            404,
            388,
            374,
            360,
            347,
            335,
            323,
            312,
            302,
            292,
            282,
            273,
            265,
            512,
            497,
            482,
            468,
            454,
            441,
            428,
            417,
            405,
            394,
            383,
            373,
            364,
            354,
            345,
            337,
            328,
            320,
            312,
            305,
            298,
            291,
            284,
            278,
            271,
            265,
            259,
            507,
            496,
            485,
            475,
            465,
            456,
            446,
            437,
            428,
            420,
            412,
            404,
            396,
            388,
            381,
            374,
            367,
            360,
            354,
            347,
            341,
            335,
            329,
            323,
            318,
            312,
            307,
            302,
            297,
            292,
            287,
            282,
            278,
            273,
            269,
            265,
            261,
            512,
            505,
            497,
            489,
            482,
            475,
            468,
            461,
            454,
            447,
            441,
            435,
            428,
            422,
            417,
            411,
            405,
            399,
            394,
            389,
            383,
            378,
            373,
            368,
            364,
            359,
            354,
            350,
            345,
            341,
            337,
            332,
            328,
            324,
            320,
            316,
            312,
            309,
            305,
            301,
            298,
            294,
            291,
            287,
            284,
            281,
            278,
            274,
            271,
            268,
            265,
            262,
            259,
            257,
            507,
            501,
            496,
            491,
            485,
            480,
            475,
            470,
            465,
            460,
            456,
            451,
            446,
            442,
            437,
            433,
            428,
            424,
            420,
            416,
            412,
            408,
            404,
            400,
            396,
            392,
            388,
            385,
            381,
            377,
            374,
            370,
            367,
            363,
            360,
            357,
            354,
            350,
            347,
            344,
            341,
            338,
            335,
            332,
            329,
            326,
            323,
            320,
            318,
            315,
            312,
            310,
            307,
            304,
            302,
            299,
            297,
            294,
            292,
            289,
            287,
            285,
            282,
            280,
            278,
            275,
            273,
            271,
            269,
            267,
            265,
            263,
            261,
            259,
        ],
        $e = [
            9,
            11,
            12,
            13,
            13,
            14,
            14,
            15,
            15,
            15,
            15,
            16,
            16,
            16,
            16,
            17,
            17,
            17,
            17,
            17,
            17,
            17,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            19,
            19,
            19,
            19,
            19,
            19,
            19,
            19,
            19,
            19,
            19,
            19,
            19,
            19,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            22,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            23,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
        ];
    w.addGetterSetter(K, "blurRadius", 0, p(), w.afterSetFilter);
    w.addGetterSetter(K, "brightness", 0, p(), w.afterSetFilter);
    w.addGetterSetter(K, "contrast", 0, p(), w.afterSetFilter);

    function ti(t, e, i, r, a) {
        var n = i - e,
            s = a - r;
        return 0 === n ? r + s / 2 : 0 === s ? r : s * ((t - e) / n) + r;
    }
    w.addGetterSetter(K, "embossStrength", 0.5, p(), w.afterSetFilter),
        w.addGetterSetter(K, "embossWhiteLevel", 0.5, p(), w.afterSetFilter),
        w.addGetterSetter(K, "embossDirection", "top-left", null, w.afterSetFilter),
        w.addGetterSetter(K, "embossBlend", !1, null, w.afterSetFilter);
    w.addGetterSetter(K, "enhance", 0, p(), w.afterSetFilter);
    w.addGetterSetter(K, "hue", 0, p(), w.afterSetFilter),
        w.addGetterSetter(K, "saturation", 0, p(), w.afterSetFilter),
        w.addGetterSetter(K, "luminance", 0, p(), w.afterSetFilter);
    w.addGetterSetter(K, "hue", 0, p(), w.afterSetFilter),
        w.addGetterSetter(K, "saturation", 0, p(), w.afterSetFilter),
        w.addGetterSetter(K, "value", 0, p(), w.afterSetFilter);

    function ei(t, e, i) {
        var r = 4 * (i * t.width + e),
            a = [];
        return a.push(t.data[r++], t.data[r++], t.data[r++], t.data[r++]), a;
    }

    function ii(t, e) {
        return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2));
    }
    w.addGetterSetter(K, "kaleidoscopePower", 2, p(), w.afterSetFilter), w.addGetterSetter(K, "kaleidoscopeAngle", 0, p(), w.afterSetFilter);
    w.addGetterSetter(K, "threshold", 0, p(), w.afterSetFilter);
    w.addGetterSetter(K, "noise", 0.2, p(), w.afterSetFilter);
    w.addGetterSetter(K, "pixelSize", 8, p(), w.afterSetFilter);
    w.addGetterSetter(K, "levels", 0.5, p(), w.afterSetFilter);
    w.addGetterSetter(K, "red", 0, function(t) {
            return (this._filterUpToDate = !1), t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
        }),
        w.addGetterSetter(K, "green", 0, function(t) {
            return (this._filterUpToDate = !1), t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
        }),
        w.addGetterSetter(K, "blue", 0, f, w.afterSetFilter);
    w.addGetterSetter(K, "red", 0, function(t) {
            return (this._filterUpToDate = !1), t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
        }),
        w.addGetterSetter(K, "green", 0, function(t) {
            return (this._filterUpToDate = !1), t > 255 ? 255 : t < 0 ? 0 : Math.round(t);
        }),
        w.addGetterSetter(K, "blue", 0, f, w.afterSetFilter),
        w.addGetterSetter(K, "alpha", 1, function(t) {
            return (this._filterUpToDate = !1), t > 1 ? 1 : t < 0 ? 0 : t;
        });
    w.addGetterSetter(K, "threshold", 0.5, p(), w.afterSetFilter);
    return te.Util._assign(te, {
        Arc: ee,
        Arrow: se,
        Circle: oe,
        Ellipse: he,
        Image: le,
        Label: ve,
        Tag: me,
        Line: ae,
        Path: ne,
        Rect: _e,
        RegularPolygon: ye,
        Ring: be,
        Sprite: Se,
        Star: we,
        Text: Oe,
        TextPath: Be,
        Transformer: Ke,
        Wedge: Qe,
        Filters: {
            Blur: function(t) {
                var e = Math.round(this.blurRadius());
                e > 0 &&
                    (function(t, e) {
                        var i,
                            r,
                            a,
                            n,
                            s,
                            o,
                            h,
                            l,
                            d,
                            c,
                            g,
                            u,
                            f,
                            p,
                            v,
                            m,
                            _,
                            y,
                            x,
                            b,
                            S,
                            w,
                            C,
                            k,
                            P = t.data,
                            T = t.width,
                            A = t.height,
                            M = e + e + 1,
                            G = T - 1,
                            E = A - 1,
                            R = e + 1,
                            L = (R * (R + 1)) / 2,
                            D = new Je(),
                            O = null,
                            I = D,
                            F = null,
                            N = null,
                            B = Ze[e],
                            z = $e[e];
                        for (a = 1; a < M; a++)(I = I.next = new Je()), a === R && (O = I);
                        for (I.next = D, h = o = 0, r = 0; r < A; r++) {
                            for (
                                m = _ = y = x = l = d = c = g = 0,
                                u = R * (b = P[o]),
                                f = R * (S = P[o + 1]),
                                p = R * (w = P[o + 2]),
                                v = R * (C = P[o + 3]),
                                l += L * b,
                                d += L * S,
                                c += L * w,
                                g += L * C,
                                I = D,
                                a = 0; a < R; a++
                            )
                                (I.r = b), (I.g = S), (I.b = w), (I.a = C), (I = I.next);
                            for (a = 1; a < R; a++)
                                (n = o + ((G < a ? G : a) << 2)),
                                (l += (I.r = b = P[n]) * (k = R - a)),
                                (d += (I.g = S = P[n + 1]) * k),
                                (c += (I.b = w = P[n + 2]) * k),
                                (g += (I.a = C = P[n + 3]) * k),
                                (m += b),
                                (_ += S),
                                (y += w),
                                (x += C),
                                (I = I.next);
                            for (F = D, N = O, i = 0; i < T; i++)
                                (P[o + 3] = C = (g * B) >> z),
                                0 !== C ?
                                ((C = 255 / C),
                                    (P[o] = ((l * B) >> z) * C),
                                    (P[o + 1] = ((d * B) >> z) * C),
                                    (P[o + 2] = ((c * B) >> z) * C)) :
                                (P[o] = P[o + 1] = P[o + 2] = 0),
                                (l -= u),
                                (d -= f),
                                (c -= p),
                                (g -= v),
                                (u -= F.r),
                                (f -= F.g),
                                (p -= F.b),
                                (v -= F.a),
                                (n = (h + ((n = i + e + 1) < G ? n : G)) << 2),
                                (l += m += F.r = P[n]),
                                (d += _ += F.g = P[n + 1]),
                                (c += y += F.b = P[n + 2]),
                                (g += x += F.a = P[n + 3]),
                                (F = F.next),
                                (u += b = N.r),
                                (f += S = N.g),
                                (p += w = N.b),
                                (v += C = N.a),
                                (m -= b),
                                (_ -= S),
                                (y -= w),
                                (x -= C),
                                (N = N.next),
                                (o += 4);
                            h += T;
                        }
                        for (i = 0; i < T; i++) {
                            for (
                                _ = y = x = m = d = c = g = l = 0,
                                u = R * (b = P[(o = i << 2)]),
                                f = R * (S = P[o + 1]),
                                p = R * (w = P[o + 2]),
                                v = R * (C = P[o + 3]),
                                l += L * b,
                                d += L * S,
                                c += L * w,
                                g += L * C,
                                I = D,
                                a = 0; a < R; a++
                            )
                                (I.r = b), (I.g = S), (I.b = w), (I.a = C), (I = I.next);
                            for (s = T, a = 1; a <= e; a++)
                                (o = (s + i) << 2),
                                (l += (I.r = b = P[o]) * (k = R - a)),
                                (d += (I.g = S = P[o + 1]) * k),
                                (c += (I.b = w = P[o + 2]) * k),
                                (g += (I.a = C = P[o + 3]) * k),
                                (m += b),
                                (_ += S),
                                (y += w),
                                (x += C),
                                (I = I.next),
                                a < E && (s += T);
                            for (o = i, F = D, N = O, r = 0; r < A; r++)
                                (P[3 + (n = o << 2)] = C = (g * B) >> z),
                                C > 0 ?
                                ((C = 255 / C),
                                    (P[n] = ((l * B) >> z) * C),
                                    (P[n + 1] = ((d * B) >> z) * C),
                                    (P[n + 2] = ((c * B) >> z) * C)) :
                                (P[n] = P[n + 1] = P[n + 2] = 0),
                                (l -= u),
                                (d -= f),
                                (c -= p),
                                (g -= v),
                                (u -= F.r),
                                (f -= F.g),
                                (p -= F.b),
                                (v -= F.a),
                                (n = (i + ((n = r + R) < E ? n : E) * T) << 2),
                                (l += m += F.r = P[n]),
                                (d += _ += F.g = P[n + 1]),
                                (c += y += F.b = P[n + 2]),
                                (g += x += F.a = P[n + 3]),
                                (F = F.next),
                                (u += b = N.r),
                                (f += S = N.g),
                                (p += w = N.b),
                                (v += C = N.a),
                                (m -= b),
                                (_ -= S),
                                (y -= w),
                                (x -= C),
                                (N = N.next),
                                (o += T);
                        }
                    })(t, e);
            },
            Brighten: function(t) {
                var e,
                    i = 255 * this.brightness(),
                    r = t.data,
                    a = r.length;
                for (e = 0; e < a; e += 4)(r[e] += i), (r[e + 1] += i), (r[e + 2] += i);
            },
            Contrast: function(t) {
                var e,
                    i = Math.pow((this.contrast() + 100) / 100, 2),
                    r = t.data,
                    a = r.length,
                    n = 150,
                    s = 150,
                    o = 150;
                for (e = 0; e < a; e += 4)
                    (n = r[e]),
                    (s = r[e + 1]),
                    (o = r[e + 2]),
                    (n /= 255),
                    (n -= 0.5),
                    (n *= i),
                    (n += 0.5),
                    (s /= 255),
                    (s -= 0.5),
                    (s *= i),
                    (s += 0.5),
                    (o /= 255),
                    (o -= 0.5),
                    (o *= i),
                    (o += 0.5),
                    (n = (n *= 255) < 0 ? 0 : n > 255 ? 255 : n),
                    (s = (s *= 255) < 0 ? 0 : s > 255 ? 255 : s),
                    (o = (o *= 255) < 0 ? 0 : o > 255 ? 255 : o),
                    (r[e] = n),
                    (r[e + 1] = s),
                    (r[e + 2] = o);
            },
            Emboss: function(t) {
                var e = 10 * this.embossStrength(),
                    i = 255 * this.embossWhiteLevel(),
                    r = this.embossDirection(),
                    a = this.embossBlend(),
                    n = 0,
                    s = 0,
                    o = t.data,
                    h = t.width,
                    l = t.height,
                    d = 4 * h,
                    c = l;
                switch (r) {
                    case "top-left":
                        (n = -1), (s = -1);
                        break;
                    case "top":
                        (n = -1), (s = 0);
                        break;
                    case "top-right":
                        (n = -1), (s = 1);
                        break;
                    case "right":
                        (n = 0), (s = 1);
                        break;
                    case "bottom-right":
                        (n = 1), (s = 1);
                        break;
                    case "bottom":
                        (n = 1), (s = 0);
                        break;
                    case "bottom-left":
                        (n = 1), (s = -1);
                        break;
                    case "left":
                        (n = 0), (s = -1);
                        break;
                    default:
                        g.error("Unknown emboss direction: " + r);
                }
                do {
                    var u = (c - 1) * d,
                        f = n;
                    c + f < 1 && (f = 0), c + f > l && (f = 0);
                    var p = (c - 1 + f) * h * 4,
                        v = h;
                    do {
                        var m = u + 4 * (v - 1),
                            _ = s;
                        v + _ < 1 && (_ = 0), v + _ > h && (_ = 0);
                        var y = p + 4 * (v - 1 + _),
                            x = o[m] - o[y],
                            b = o[m + 1] - o[y + 1],
                            S = o[m + 2] - o[y + 2],
                            w = x,
                            C = w > 0 ? w : -w;
                        if (((b > 0 ? b : -b) > C && (w = b), (S > 0 ? S : -S) > C && (w = S), (w *= e), a)) {
                            var k = o[m] + w,
                                P = o[m + 1] + w,
                                T = o[m + 2] + w;
                            (o[m] = k > 255 ? 255 : k < 0 ? 0 : k),
                            (o[m + 1] = P > 255 ? 255 : P < 0 ? 0 : P),
                            (o[m + 2] = T > 255 ? 255 : T < 0 ? 0 : T);
                        } else {
                            var A = i - w;
                            A < 0 ? (A = 0) : A > 255 && (A = 255), (o[m] = o[m + 1] = o[m + 2] = A);
                        }
                    } while (--v);
                } while (--c);
            },
            Enhance: function(t) {
                var e,
                    i,
                    r,
                    a,
                    n = t.data,
                    s = n.length,
                    o = n[0],
                    h = o,
                    l = n[1],
                    d = l,
                    c = n[2],
                    g = c,
                    u = this.enhance();
                if (0 !== u) {
                    for (a = 0; a < s; a += 4)
                        (e = n[a + 0]) < o ? (o = e) : e > h && (h = e),
                        (i = n[a + 1]) < l ? (l = i) : i > d && (d = i),
                        (r = n[a + 2]) < c ? (c = r) : r > g && (g = r);
                    var f, p, v, m, _, y, x, b, S;
                    for (
                        h === o && ((h = 255), (o = 0)),
                        d === l && ((d = 255), (l = 0)),
                        g === c && ((g = 255), (c = 0)),
                        u > 0 ?
                        ((p = h + u * (255 - h)),
                            (v = o - u * (o - 0)),
                            (_ = d + u * (255 - d)),
                            (y = l - u * (l - 0)),
                            (b = g + u * (255 - g)),
                            (S = c - u * (c - 0))) :
                        ((p = h + u * (h - (f = 0.5 * (h + o)))),
                            (v = o + u * (o - f)),
                            (_ = d + u * (d - (m = 0.5 * (d + l)))),
                            (y = l + u * (l - m)),
                            (b = g + u * (g - (x = 0.5 * (g + c)))),
                            (S = c + u * (c - x))),
                        a = 0; a < s; a += 4
                    )
                        (n[a + 0] = ti(n[a + 0], o, h, v, p)), (n[a + 1] = ti(n[a + 1], l, d, y, _)), (n[a + 2] = ti(n[a + 2], c, g, S, b));
                }
            },
            Grayscale: function(t) {
                var e,
                    i,
                    r = t.data,
                    a = r.length;
                for (e = 0; e < a; e += 4)(i = 0.34 * r[e] + 0.5 * r[e + 1] + 0.16 * r[e + 2]), (r[e] = i), (r[e + 1] = i), (r[e + 2] = i);
            },
            HSL: function(t) {
                var e,
                    i,
                    r,
                    a,
                    n,
                    s = t.data,
                    o = s.length,
                    h = Math.pow(2, this.saturation()),
                    l = Math.abs(this.hue() + 360) % 360,
                    d = 127 * this.luminance(),
                    c = 1 * h * Math.cos((l * Math.PI) / 180),
                    g = 1 * h * Math.sin((l * Math.PI) / 180),
                    u = 0.299 + 0.701 * c + 0.167 * g,
                    f = 0.587 - 0.587 * c + 0.33 * g,
                    p = 0.114 - 0.114 * c - 0.497 * g,
                    v = 0.299 - 0.299 * c - 0.328 * g,
                    m = 0.587 + 0.413 * c + 0.035 * g,
                    _ = 0.114 - 0.114 * c + 0.293 * g,
                    y = 0.299 - 0.3 * c + 1.25 * g,
                    x = 0.587 - 0.586 * c - 1.05 * g,
                    b = 0.114 + 0.886 * c - 0.2 * g;
                for (e = 0; e < o; e += 4)
                    (i = s[e + 0]),
                    (r = s[e + 1]),
                    (a = s[e + 2]),
                    (n = s[e + 3]),
                    (s[e + 0] = u * i + f * r + p * a + d),
                    (s[e + 1] = v * i + m * r + _ * a + d),
                    (s[e + 2] = y * i + x * r + b * a + d),
                    (s[e + 3] = n);
            },
            HSV: function(t) {
                var e,
                    i,
                    r,
                    a,
                    n,
                    s = t.data,
                    o = s.length,
                    h = Math.pow(2, this.value()),
                    l = Math.pow(2, this.saturation()),
                    d = Math.abs(this.hue() + 360) % 360,
                    c = h * l * Math.cos((d * Math.PI) / 180),
                    g = h * l * Math.sin((d * Math.PI) / 180),
                    u = 0.299 * h + 0.701 * c + 0.167 * g,
                    f = 0.587 * h - 0.587 * c + 0.33 * g,
                    p = 0.114 * h - 0.114 * c - 0.497 * g,
                    v = 0.299 * h - 0.299 * c - 0.328 * g,
                    m = 0.587 * h + 0.413 * c + 0.035 * g,
                    _ = 0.114 * h - 0.114 * c + 0.293 * g,
                    y = 0.299 * h - 0.3 * c + 1.25 * g,
                    x = 0.587 * h - 0.586 * c - 1.05 * g,
                    b = 0.114 * h + 0.886 * c - 0.2 * g;
                for (e = 0; e < o; e += 4)
                    (i = s[e + 0]),
                    (r = s[e + 1]),
                    (a = s[e + 2]),
                    (n = s[e + 3]),
                    (s[e + 0] = u * i + f * r + p * a),
                    (s[e + 1] = v * i + m * r + _ * a),
                    (s[e + 2] = y * i + x * r + b * a),
                    (s[e + 3] = n);
            },
            Invert: function(t) {
                var e,
                    i = t.data,
                    r = i.length;
                for (e = 0; e < r; e += 4)(i[e] = 255 - i[e]), (i[e + 1] = 255 - i[e + 1]), (i[e + 2] = 255 - i[e + 2]);
            },
            Kaleidoscope: function(t) {
                var e,
                    i,
                    r,
                    a,
                    n,
                    s,
                    o,
                    h,
                    l,
                    d = t.width,
                    c = t.height,
                    u = Math.round(this.kaleidoscopePower()),
                    f = Math.round(this.kaleidoscopeAngle()),
                    p = Math.floor((d * (f % 360)) / 360);
                if (!(u < 1)) {
                    var v = g.createCanvasElement();
                    (v.width = d), (v.height = c);
                    var m = v.getContext("2d").getImageData(0, 0, d, c);
                    !(function(t, e, i) {
                        var r,
                            a,
                            n,
                            s,
                            o = t.data,
                            h = e.data,
                            l = t.width,
                            d = t.height,
                            c = i.polarCenterX || l / 2,
                            g = i.polarCenterY || d / 2,
                            u = 0,
                            f = 0,
                            p = 0,
                            v = 0,
                            m = Math.sqrt(c * c + g * g);
                        (a = l - c), (n = d - g), (m = (s = Math.sqrt(a * a + n * n)) > m ? s : m);
                        var _,
                            y,
                            x,
                            b,
                            S = d,
                            w = l,
                            C = ((360 / w) * Math.PI) / 180;
                        for (y = 0; y < w; y += 1)
                            for (x = Math.sin(y * C), b = Math.cos(y * C), _ = 0; _ < S; _ += 1)
                                (a = Math.floor(c + ((m * _) / S) * b)),
                                (u = o[0 + (r = 4 * ((n = Math.floor(g + ((m * _) / S) * x)) * l + a))]),
                                (f = o[r + 1]),
                                (p = o[r + 2]),
                                (v = o[r + 3]),
                                (h[0 + (r = 4 * (y + _ * l))] = u),
                                (h[r + 1] = f),
                                (h[r + 2] = p),
                                (h[r + 3] = v);
                    })(t, m, { polarCenterX: d / 2, polarCenterY: c / 2 });
                    for (var _ = d / Math.pow(2, u); _ <= 8;)(_ *= 2), (u -= 1);
                    var y = (_ = Math.ceil(_)),
                        x = 0,
                        b = y,
                        S = 1;
                    for (p + _ > d && ((x = y), (b = 0), (S = -1)), i = 0; i < c; i += 1)
                        for (e = x; e !== b; e += S)
                            (h = 4 * (d * i + (Math.round(e + p) % d))),
                            (a = m.data[h + 0]),
                            (n = m.data[h + 1]),
                            (s = m.data[h + 2]),
                            (o = m.data[h + 3]),
                            (l = 4 * (d * i + e)),
                            (m.data[l + 0] = a),
                            (m.data[l + 1] = n),
                            (m.data[l + 2] = s),
                            (m.data[l + 3] = o);
                    for (i = 0; i < c; i += 1)
                        for (y = Math.floor(_), r = 0; r < u; r += 1) {
                            for (e = 0; e < y + 1; e += 1)
                                (h = 4 * (d * i + e)),
                                (a = m.data[h + 0]),
                                (n = m.data[h + 1]),
                                (s = m.data[h + 2]),
                                (o = m.data[h + 3]),
                                (l = 4 * (d * i + 2 * y - e - 1)),
                                (m.data[l + 0] = a),
                                (m.data[l + 1] = n),
                                (m.data[l + 2] = s),
                                (m.data[l + 3] = o);
                            y *= 2;
                        }!(function(t, e, i) {
                            var r,
                                a,
                                n,
                                s,
                                o,
                                h,
                                l = t.data,
                                d = e.data,
                                c = t.width,
                                g = t.height,
                                u = i.polarCenterX || c / 2,
                                f = i.polarCenterY || g / 2,
                                p = 0,
                                v = 0,
                                m = 0,
                                _ = 0,
                                y = Math.sqrt(u * u + f * f);
                            (a = c - u), (n = g - f), (y = (h = Math.sqrt(a * a + n * n)) > y ? h : y);
                            var x,
                                b,
                                S,
                                w = g,
                                C = c,
                                k = i.polarRotation || 0;
                            for (a = 0; a < c; a += 1)
                                for (n = 0; n < g; n += 1)
                                    (s = a - u),
                                    (o = n - f),
                                    (x = (Math.sqrt(s * s + o * o) * w) / y),
                                    (b = ((b = ((180 * Math.atan2(o, s)) / Math.PI + 360 + k) % 360) * C) / 360),
                                    (S = Math.floor(b)),
                                    (p = l[0 + (r = 4 * (Math.floor(x) * c + S))]),
                                    (v = l[r + 1]),
                                    (m = l[r + 2]),
                                    (_ = l[r + 3]),
                                    (d[0 + (r = 4 * (n * c + a))] = p),
                                    (d[r + 1] = v),
                                    (d[r + 2] = m),
                                    (d[r + 3] = _);
                        })(m, t, { polarRotation: 0 });
                }
            },
            Mask: function(t) {
                var e = (function(t, e) {
                    var i = ei(t, 0, 0),
                        r = ei(t, t.width - 1, 0),
                        a = ei(t, 0, t.height - 1),
                        n = ei(t, t.width - 1, t.height - 1),
                        s = e || 10;
                    if (ii(i, r) < s && ii(r, n) < s && ii(n, a) < s && ii(a, i) < s) {
                        for (
                            var o = (function(t) {
                                    for (var e = [0, 0, 0], i = 0; i < t.length; i++)(e[0] += t[i][0]), (e[1] += t[i][1]), (e[2] += t[i][2]);
                                    return (e[0] /= t.length), (e[1] /= t.length), (e[2] /= t.length), e;
                                })([r, i, n, a]),
                                h = [],
                                l = 0; l < t.width * t.height; l++
                        ) {
                            var d = ii(o, [t.data[4 * l], t.data[4 * l + 1], t.data[4 * l + 2]]);
                            h[l] = d < s ? 0 : 255;
                        }
                        return h;
                    }
                })(t, this.threshold());
                return (
                    e &&
                    (function(t, e) {
                        for (var i = 0; i < t.width * t.height; i++) t.data[4 * i + 3] = e[i];
                    })(
                        t,
                        (e = (function(t, e, i) {
                            for (
                                var r = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9],
                                    a = Math.round(Math.sqrt(r.length)),
                                    n = Math.floor(a / 2),
                                    s = [],
                                    o = 0; o < i; o++
                            )
                                for (var h = 0; h < e; h++) {
                                    for (var l = o * e + h, d = 0, c = 0; c < a; c++)
                                        for (var g = 0; g < a; g++) {
                                            var u = o + c - n,
                                                f = h + g - n;
                                            if (u >= 0 && u < i && f >= 0 && f < e) {
                                                var p = r[c * a + g];
                                                d += t[u * e + f] * p;
                                            }
                                        }
                                    s[l] = d;
                                }
                            return s;
                        })(
                            (e = (function(t, e, i) {
                                for (
                                    var r = [1, 1, 1, 1, 1, 1, 1, 1, 1],
                                        a = Math.round(Math.sqrt(r.length)),
                                        n = Math.floor(a / 2),
                                        s = [],
                                        o = 0; o < i; o++
                                )
                                    for (var h = 0; h < e; h++) {
                                        for (var l = o * e + h, d = 0, c = 0; c < a; c++)
                                            for (var g = 0; g < a; g++) {
                                                var u = o + c - n,
                                                    f = h + g - n;
                                                if (u >= 0 && u < i && f >= 0 && f < e) {
                                                    var p = r[c * a + g];
                                                    d += t[u * e + f] * p;
                                                }
                                            }
                                        s[l] = d >= 1020 ? 255 : 0;
                                    }
                                return s;
                            })(
                                (e = (function(t, e, i) {
                                    for (
                                        var r = [1, 1, 1, 1, 0, 1, 1, 1, 1],
                                            a = Math.round(Math.sqrt(r.length)),
                                            n = Math.floor(a / 2),
                                            s = [],
                                            o = 0; o < i; o++
                                    )
                                        for (var h = 0; h < e; h++) {
                                            for (var l = o * e + h, d = 0, c = 0; c < a; c++)
                                                for (var g = 0; g < a; g++) {
                                                    var u = o + c - n,
                                                        f = h + g - n;
                                                    if (u >= 0 && u < i && f >= 0 && f < e) {
                                                        var p = r[c * a + g];
                                                        d += t[u * e + f] * p;
                                                    }
                                                }
                                            s[l] = 2040 === d ? 255 : 0;
                                        }
                                    return s;
                                })(e, t.width, t.height)),
                                t.width,
                                t.height
                            )),
                            t.width,
                            t.height
                        ))
                    ),
                    t
                );
            },
            Noise: function(t) {
                var e,
                    i = 255 * this.noise(),
                    r = t.data,
                    a = r.length,
                    n = i / 2;
                for (e = 0; e < a; e += 4)
                    (r[e + 0] += n - 2 * n * Math.random()), (r[e + 1] += n - 2 * n * Math.random()), (r[e + 2] += n - 2 * n * Math.random());
            },
            Pixelate: function(t) {
                var e,
                    i,
                    r,
                    a,
                    n,
                    s,
                    o,
                    h,
                    l,
                    d,
                    c,
                    u,
                    f,
                    p,
                    v = Math.ceil(this.pixelSize()),
                    m = t.width,
                    _ = t.height,
                    y = Math.ceil(m / v),
                    x = Math.ceil(_ / v),
                    b = t.data;
                if (v <= 0) g.error("pixelSize value can not be <= 0");
                else
                    for (u = 0; u < y; u += 1)
                        for (f = 0; f < x; f += 1) {
                            for (a = 0, n = 0, s = 0, o = 0, l = (h = u * v) + v, c = (d = f * v) + v, p = 0, e = h; e < l; e += 1)
                                if (!(e >= m))
                                    for (i = d; i < c; i += 1)
                                        i >= _ || ((a += b[(r = 4 * (m * i + e)) + 0]), (n += b[r + 1]), (s += b[r + 2]), (o += b[r + 3]), (p += 1));
                            for (a /= p, n /= p, s /= p, o /= p, e = h; e < l; e += 1)
                                if (!(e >= m))
                                    for (i = d; i < c; i += 1)
                                        i >= _ || ((b[(r = 4 * (m * i + e)) + 0] = a), (b[r + 1] = n), (b[r + 2] = s), (b[r + 3] = o));
                        }
            },
            Posterize: function(t) {
                var e,
                    i = Math.round(254 * this.levels()) + 1,
                    r = t.data,
                    a = r.length,
                    n = 255 / i;
                for (e = 0; e < a; e += 1) r[e] = Math.floor(r[e] / n) * n;
            },
            RGB: function(t) {
                var e,
                    i,
                    r = t.data,
                    a = r.length,
                    n = this.red(),
                    s = this.green(),
                    o = this.blue();
                for (e = 0; e < a; e += 4)
                    (i = (0.34 * r[e] + 0.5 * r[e + 1] + 0.16 * r[e + 2]) / 255),
                    (r[e] = i * n),
                    (r[e + 1] = i * s),
                    (r[e + 2] = i * o),
                    (r[e + 3] = r[e + 3]);
            },
            RGBA: function(t) {
                var e,
                    i,
                    r = t.data,
                    a = r.length,
                    n = this.red(),
                    s = this.green(),
                    o = this.blue(),
                    h = this.alpha();
                for (e = 0; e < a; e += 4)(i = 1 - h), (r[e] = n * h + r[e] * i), (r[e + 1] = s * h + r[e + 1] * i), (r[e + 2] = o * h + r[e + 2] * i);
            },
            Sepia: function(t) {
                var e,
                    i,
                    r,
                    a,
                    n = t.data,
                    s = n.length;
                for (e = 0; e < s; e += 4)
                    (i = n[e + 0]),
                    (r = n[e + 1]),
                    (a = n[e + 2]),
                    (n[e + 0] = Math.min(255, 0.393 * i + 0.769 * r + 0.189 * a)),
                    (n[e + 1] = Math.min(255, 0.349 * i + 0.686 * r + 0.168 * a)),
                    (n[e + 2] = Math.min(255, 0.272 * i + 0.534 * r + 0.131 * a));
            },
            Solarize: function(t) {
                var e = t.data,
                    i = t.width,
                    r = 4 * i,
                    a = t.height;
                do {
                    var n = (a - 1) * r,
                        s = i;
                    do {
                        var o = n + 4 * (s - 1),
                            h = e[o],
                            l = e[o + 1],
                            d = e[o + 2];
                        h > 127 && (h = 255 - h), l > 127 && (l = 255 - l), d > 127 && (d = 255 - d), (e[o] = h), (e[o + 1] = l), (e[o + 2] = d);
                    } while (--s);
                } while (--a);
            },
            Threshold: function(t) {
                var e,
                    i = 255 * this.threshold(),
                    r = t.data,
                    a = r.length;
                for (e = 0; e < a; e += 1) r[e] = r[e] < i ? 0 : 255;
            },
        },
    });
});

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("konva"),require("jszip"),require("magic-wand-tool")):"function"==typeof define&&define.amd?define(["konva","jszip","konmagic-wand-tool"],t):"object"==typeof exports?exports.dwv=t(require("konva"),require("jszip"),require("magic-wand-tool")):e.dwv=t(e.Konva,e.JSZip,e.MagicWand)}(this,(function(e,t,n){return function(){"use strict";var i={626:function(e){e.exports=t},436:function(t){t.exports=e},812:function(e){e.exports=n}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return i[e](n,n.exports,o),n.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){o.r(a),o.d(a,{App:function(){return Vn},AppOptions:function(){return Nn},ColourMap:function(){return S},DataElement:function(){return oe},DicomParser:function(){return Ce},DicomWriter:function(){return _n},DrawLayer:function(){return Tt},Geometry:function(){return xe},Image:function(){return Ye},Index:function(){return e},LayerGroup:function(){return Pt},Matrix33:function(){return v},Point:function(){return w},Point2D:function(){return P},Point3D:function(){return O},RescaleLut:function(){return n},RescaleSlopeAndIntercept:function(){return Oe},Size:function(){return we},Spacing:function(){return Ae},Tag:function(){return Q},TagValueExtractor:function(){return qe},ToolConfig:function(){return Bn},ToolboxController:function(){return Qt},Vector3D:function(){return D},View:function(){return Ze},ViewConfig:function(){return Mn},ViewController:function(){return et},ViewLayer:function(){return at},WindowCenterAndWidth:function(){return r},WindowLut:function(){return s},WriterRule:function(){return Hn},addTagsToDictionary:function(){return x},buildMultipart:function(){return re},createImage:function(){return We},createMaskImage:function(){return ze},createView:function(){return _e},customUI:function(){return nt},decoderScripts:function(){return zt},defaultPresets:function(){return i},getDwvVersion:function(){return ae},getElementsFromJSONTags:function(){return Jn},getOrientationName:function(){return de},getPixelDataTag:function(){return G},getReverseOrientation:function(){return ue},getTagFromKey:function(){return M},getTypedArray:function(){return De},getUID:function(){return Wn},hasDicomPrefix:function(){return se},i18n:function(){return ln},logger:function(){return g},luts:function(){return h},precisionRound:function(){return J}});class e{#e;constructor(e){if(!e||void 0===e)throw new Error("Cannot create index with no values.");if(0===e.length)throw new Error("Cannot create index with empty values.");if(!e.every((function(e){return!isNaN(e)})))throw new Error("Cannot create index with non number values.");this.#e=e}get(e){return this.#e[e]}length(){return this.#e.length}toString(){return"("+this.#e.toString()+")"}getValues(){return this.#e.slice()}canCompare(e){return!!e&&this.length()===e.length()}equals(e){if(!this.canCompare(e))return!1;for(let t=0,n=this.length();t<n;++t)if(this.get(t)!==e.get(t))return!1;return!0}compare(e){if(!this.canCompare(e))return null;const t=[];for(let n=0,i=this.length();n<i;++n)this.get(n)!==e.get(n)&&t.push(n);return t}add(t){if(!this.canCompare(t))return null;const n=[];for(let e=0,i=this.length();e<i;++e)n.push(this.get(e)+t.get(e));return new e(n)}getWithNew2D(t,n){const i=[t,n];for(let e=2,t=this.length();e<t;++e)i.push(this.get(e));return new e(i)}toStringId(e){if(void 0===e){e=[];for(let t=0;t<this.length();++t)e.push(t)}for(let t=0;t<e.length;++t)if(e[t]>=this.length())throw new Error("Non valid dimension for toStringId.");let t="";for(let n=0;n<e.length;++n)0!==n&&(t+="_"),t+="#"+e[n]+"-"+this.get(e[n]);return t}}function t(t){const n=t.split("_");let i,r=0;for(let e=0;e<n.length;++e)i=parseInt(n[e].substring(1,2),10),i>r&&(r=i);if(0===r)throw new Error("No dimension found in point stringId");const o=new Array(r);o.fill(0);for(let e=0;e<n.length;++e){i=parseInt(n[e].substring(1,3),10);const t=parseInt(n[e].substring(3),10);o[i]=t}return new e(o)}class n{#t;#n=null;#i=!1;#r;constructor(e,t){this.#t=e,this.#r=Math.pow(2,t)}getRSI(){return this.#t}isReady(){return this.#i}initialise(){if(!this.#i){this.#n=new Float32Array(this.#r);for(let e=0;e<this.#r;++e)this.#n[e]=this.#t.apply(e);this.#i=!0}}getLength(){return this.#r}getValue(e){return this.#n[e]}}const i={CT:{mediastinum:{center:40,width:400},lung:{center:-500,width:1500},bone:{center:500,width:2e3},brain:{center:40,width:80},head:{center:90,width:350}}};class r{#o;#a;constructor(e,t){if(t<1)throw new Error("Window width shall always be greater than or equal to 1");this.#o=e,this.#a=t,this.#s()}#l=0;#c=0;#u=255;#d=null;#S=null;#h=null;#g=null;#s(){const e=this.#o+this.#l;this.#d=e-.5-(this.#a-1)/2,this.#S=e-.5+(this.#a-1)/2,this.#h=(this.#u-this.#c)/(this.#a-1),this.#g=(-(e-.5)/(this.#a-1)+.5)*(this.#u-this.#c)+this.#c}getCenter(){return this.#o}getWidth(){return this.#a}setRange(e,t){this.#c=parseInt(e,10),this.#u=parseInt(t,10),this.#s()}setSignedOffset(e){this.#l=e,this.#s()}apply(e){return e<=this.#d?this.#c:e>this.#S?this.#u:e*this.#h+this.#g}equals(e){return null!==e&&this.getCenter()===e.getCenter()&&this.getWidth()===e.getWidth()}toString(){return this.getCenter()+", "+this.getWidth()}}class s{#m;#p;#n=null;#f=null;#i=!1;#D=0;constructor(e,t){this.#m=e,this.#p=t}getWindowLevel(){return this.#f}isSigned(){return this.#p}getRescaleLut(){return this.#m}isReady(){return this.#i}setWindowLevel(e){if(this.#f=e,this.#D=0,this.#f.setSignedOffset(0),this.#p){const e=this.#m.getLength();this.#D=e/2,this.#f.setSignedOffset(this.#m.getRSI().getSlope()*this.#D)}this.#i=!1}update(){if(this.#i)return;this.#m.isReady()||this.#m.initialise();const e=this.#m.getLength();this.#n||(this.#n=new Uint8ClampedArray(e));for(let t=0;t<e;++t)this.#n[t]=this.#f.apply(this.#m.getValue(t));this.#i=!0}getLength(){return this.#n.length}getValue(e){return this.#n[e+this.#D]}}const l=256;function c(e){const t=[];for(let n=0;n<l;++n)t.push(e(n));return t}function u(e){return e}function d(e){return 255-e}class S{red;green;blue;constructor(e,t,n){this.red=e,this.green=t,this.blue=n}}const h={plain:{red:c(u),green:c(u),blue:c(u)},invPlain:{red:c(d),green:c(d),blue:c(d)},rainbow:{blue:[0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128,132,136,140,144,148,152,156,160,164,168,172,176,180,184,188,192,196,200,204,208,212,216,220,224,228,232,236,240,244,248,252,255,247,239,231,223,215,207,199,191,183,175,167,159,151,143,135,127,119,111,103,95,87,79,71,63,55,47,39,31,23,15,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],green:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,253,251,249,247,245,243,241,239,237,235,233,231,229,227,225,223,221,219,217,215,213,211,209,207,205,203,201,199,197,195,193,192,189,186,183,180,177,174,171,168,165,162,159,156,153,150,147,144,141,138,135,132,129,126,123,120,117,114,111,108,105,102,99,96,93,90,87,84,81,78,75,72,69,66,63,60,57,54,51,48,45,42,39,36,33,30,27,24,21,18,15,12,9,6,3],red:[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,62,60,58,56,54,52,50,48,46,44,42,40,38,36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128,132,136,140,144,148,152,156,160,164,168,172,176,180,184,188,192,196,200,204,208,212,216,220,224,228,232,236,240,244,248,252,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255]},hot:{red:c((function(e){const t=3*e;return t>255?255:t})),green:c((function(e){const t=l/3;let n=0;return e>=t&&(n=3*(e-t),n>255)?255:n})),blue:c((function(e){const t=l/3;let n=0;return e>=2*t&&(n=3*(e-2*t),n>255)?255:n}))},hot_iron:{red:[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],green:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,255],blue:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128,132,136,140,144,148,152,156,160,164,168,172,176,180,184,188,192,196,200,204,208,212,216,220,224,228,232,236,240,244,248,252,255]},pet:{red:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],green:[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,128,126,124,122,120,118,116,114,112,110,108,106,104,102,100,98,96,94,92,90,88,86,84,82,80,78,76,74,72,70,68,66,64,63,61,59,57,55,53,51,49,47,45,43,41,39,37,35,33,31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,255],blue:[0,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,255,252,248,244,240,236,232,228,224,220,216,212,208,204,200,196,192,188,184,180,176,172,168,164,160,156,152,148,144,140,136,132,128,124,120,116,112,108,104,100,96,92,88,84,80,76,72,68,64,60,56,52,48,44,40,36,32,28,24,20,16,12,8,4,0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,85,89,93,97,101,105,109,113,117,121,125,129,133,137,141,145,149,153,157,161,165,170,174,178,182,186,190,194,198,202,206,210,214,218,222,226,230,234,238,242,246,250,255]},hot_metal_blue:{red:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,9,12,15,18,21,24,26,29,32,35,38,41,44,47,50,52,55,57,59,62,64,66,69,71,74,76,78,81,83,85,88,90,93,96,99,102,105,108,111,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,166,169,172,175,178,181,184,187,190,194,198,201,205,209,213,217,221,224,228,232,236,240,244,247,251,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],green:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,4,6,8,9,11,13,15,17,19,21,23,24,26,28,30,32,34,36,38,40,41,43,45,47,49,51,53,55,56,58,60,62,64,66,68,70,72,73,75,77,79,81,83,85,87,88,90,92,94,96,98,100,102,104,105,107,109,111,113,115,117,119,120,122,124,126,128,130,132,134,136,137,139,141,143,145,147,149,151,152,154,156,158,160,162,164,166,168,169,171,173,175,177,179,181,183,184,186,188,190,192,194,196,198,200,201,203,205,207,209,211,213,215,216,218,220,222,224,226,228,229,231,233,235,237,239,240,242,244,246,248,250,251,253,255],blue:[0,2,4,6,8,10,12,14,16,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,117,119,121,123,125,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,184,186,188,190,192,194,196,198,200,197,194,191,188,185,182,179,176,174,171,168,165,162,159,156,153,150,144,138,132,126,121,115,109,103,97,91,85,79,74,68,62,56,50,47,44,41,38,35,32,29,26,24,21,18,15,12,9,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,9,12,15,18,21,24,26,29,32,35,38,41,44,47,50,53,56,59,62,65,68,71,74,76,79,82,85,88,91,94,97,100,103,106,109,112,115,118,121,124,126,129,132,135,138,141,144,147,150,153,156,159,162,165,168,171,174,176,179,182,185,188,191,194,197,200,203,206,210,213,216,219,223,226,229,232,236,239,242,245,249,252,255]},pet_20step:{red:[0,0,0,0,0,0,0,0,0,0,0,0,0,96,96,96,96,96,96,96,96,96,96,96,96,96,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,80,80,80,80,80,80,80,80,80,80,80,80,80,96,96,96,96,96,96,96,96,96,96,96,96,96,112,112,112,112,112,112,112,112,112,112,112,112,112,128,128,128,128,128,128,128,128,128,128,128,128,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,80,80,80,80,80,80,80,80,80,80,80,80,80,64,64,64,64,64,64,64,64,64,64,64,64,224,224,224,224,224,224,224,224,224,224,224,224,224,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,208,192,192,192,192,192,192,192,192,192,192,192,192,192,176,176,176,176,176,176,176,176,176,176,176,176,176,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255],green:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,80,80,80,80,80,80,80,80,80,80,80,80,80,96,96,96,96,96,96,96,96,96,96,96,96,96,112,112,112,112,112,112,112,112,112,112,112,112,112,128,128,128,128,128,128,128,128,128,128,128,128,96,96,96,96,96,96,96,96,96,96,96,96,96,144,144,144,144,144,144,144,144,144,144,144,144,144,192,192,192,192,192,192,192,192,192,192,192,192,192,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,224,208,208,208,208,208,208,208,208,208,208,208,208,208,176,176,176,176,176,176,176,176,176,176,176,176,176,144,144,144,144,144,144,144,144,144,144,144,144,96,96,96,96,96,96,96,96,96,96,96,96,96,48,48,48,48,48,48,48,48,48,48,48,48,48,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255],blue:[0,0,0,0,0,0,0,0,0,0,0,0,0,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,112,112,112,112,112,112,112,112,112,112,112,112,128,128,128,128,128,128,128,128,128,128,128,128,128,176,176,176,176,176,176,176,176,176,176,176,176,176,192,192,192,192,192,192,192,192,192,192,192,192,192,224,224,224,224,224,224,224,224,224,224,224,224,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,80,80,80,80,80,80,80,80,80,80,80,80,80,64,64,64,64,64,64,64,64,64,64,64,64,80,80,80,80,80,80,80,80,80,80,80,80,80,96,96,96,96,96,96,96,96,96,96,96,96,96,64,64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255]}},g={levels:{TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},level:3,trace:function(e){this.level<=this.levels.TRACE&&console.trace(e)},debug:function(e){this.level<=this.levels.DEBUG&&console.debug(e)},info:function(e){this.level<=this.levels.INFO&&console.info(e)},warn:function(e){this.level<=this.levels.WARN&&console.warn(e)},error:function(e){this.level<=this.levels.ERROR&&console.error(e)}};function m(e){return function(e){return n=e,.001172549*(t={r:parseInt(n.substring(1,3),16),g:parseInt(n.substring(3,5),16),b:parseInt(n.substring(5,7),16)}).r+.002301961*t.g+447059e-9*t.b<.5;var t,n}(e)?"#fff":"#000"}const p={x:95.0489,y:100,z:108.884};function f(e){const t={Yellow:"#ffff00",Red:"#ff0000",White:"#ffffff",Green:"#008000",Blue:"#0000ff",Lime:"#00ff00",Fuchsia:"#ff00ff",Black:"#000000"};let n="#ffff00";return void 0!==t[e]&&(n=t[e]),n}class D{#y;#C;#v;constructor(e,t,n){this.#y=e,this.#C=t,this.#v=n}getX(){return this.#y}getY(){return this.#C}getZ(){return this.#v}equals(e){return null!==e&&this.getX()===e.getX()&&this.getY()===e.getY()&&this.getZ()===e.getZ()}toString(){return"("+this.getX()+", "+this.getY()+", "+this.getZ()+")"}norm(){return Math.sqrt(this.getX()*this.getX()+this.getY()*this.getY()+this.getZ()*this.getZ())}crossProduct(e){return new D(this.getY()*e.getZ()-e.getY()*this.getZ(),this.getZ()*e.getX()-e.getZ()*this.getX(),this.getX()*e.getY()-e.getX()*this.getY())}dotProduct(e){return this.getX()*e.getX()+this.getY()*e.getY()+this.getZ()*e.getZ()}}const y=1e4*Number.EPSILON;function C(e,t,n){return void 0===n&&(n=Number.EPSILON),Math.abs(e-t)<n}class v{#e;#T;constructor(e){this.#e=e}get(e,t){return this.#e[3*e+t]}getInverse(){return void 0===this.#T&&(this.#T=function(e){const t=e.get(0,0),n=e.get(0,1),i=e.get(0,2),r=e.get(1,0),o=e.get(1,1),a=e.get(1,2),s=e.get(2,0),l=e.get(2,1),c=e.get(2,2),u=o*c-a*l,d=a*s-r*c,S=r*l-o*s;let h=t*u+n*d+i*S;if(0!==h)return h=1/h,new v([h*u,h*(i*l-n*c),h*(n*a-i*o),h*d,h*(t*c-i*s),h*(i*r-t*a),h*S,h*(n*s-t*l),h*(t*o-n*r)]);g.warn("Cannot invert 3*3 matrix with zero determinant.")}(this)),this.#T}equals(e,t){for(let n=0;n<3;++n)for(let i=0;i<3;++i)if(!C(this.get(n,i),e.get(n,i),t))return!1;return!0}toString(){let e="[";for(let t=0;t<3;++t){0!==t&&(e+=", \n ");for(let n=0;n<3;++n)0!==n&&(e+=", "),e+=this.get(t,n)}return e+="]",e}multiply(e){const t=[];for(let n=0;n<3;++n)for(let i=0;i<3;++i){let r=0;for(let t=0;t<3;++t)r+=this.get(n,t)*e.get(t,i);t.push(r)}return new v(t)}getAbs(){const e=[];for(let t=0;t<3;++t)for(let n=0;n<3;++n)e.push(Math.abs(this.get(t,n)));return new v(e)}multiplyArray3D(e){if(3!==e.length)throw new Error("Cannot multiply 3x3 matrix with non 3D array: "+e.length);const t=[];for(let n=0;n<3;++n){let i=0;for(let t=0;t<3;++t)i+=this.get(n,t)*e[t];t.push(i)}return t}multiplyVector3D(e){const t=this.multiplyArray3D([e.getX(),e.getY(),e.getZ()]);return new D(t[0],t[1],t[2])}multiplyPoint3D(e){const t=this.multiplyArray3D([e.getX(),e.getY(),e.getZ()]);return new O(t[0],t[1],t[2])}multiplyIndex3D(t){const n=this.multiplyArray3D(t.getValues());return new e(n)}getRowAbsMax(e){const t=[Math.abs(this.get(e,0)),Math.abs(this.get(e,1)),Math.abs(this.get(e,2))],n=Math.max.apply(null,t),i=t.indexOf(n);return{value:this.get(e,i),index:i}}getColAbsMax(e){const t=[Math.abs(this.get(0,e)),Math.abs(this.get(1,e)),Math.abs(this.get(2,e))],n=Math.max.apply(null,t),i=t.indexOf(n);return{value:this.get(i,e),index:i}}asOneAndZeros(){const e=[];for(let t=0;t<3;++t){const n=this.getRowAbsMax(t),i=n.value>0?1:-1;for(let t=0;t<3;++t)t===n.index?e.push(1*i):e.push(0)}return new v(e)}getThirdColMajorDirection(){return this.getColAbsMax(2).index}}function T(){return new v([1,0,0,0,1,0,0,0,1])}function I(){return new v([1,0,0,0,0,1,0,-1,0])}function L(e){let t=null;return"axial"===e?t=T():"coronal"===e?t=I():"sagittal"===e&&(t=new v([0,0,-1,1,0,0,0,-1,0])),t}class P{#y;#C;constructor(e,t){this.#y=e,this.#C=t}getX(){return this.#y}getY(){return this.#C}equals(e){return null!==e&&this.getX()===e.getX()&&this.getY()===e.getY()}toString(){return"("+this.getX()+", "+this.getY()+")"}getDistance(e){return Math.sqrt((this.getX()-e.getX())*(this.getX()-e.getX())+(this.getY()-e.getY())*(this.getY()-e.getY()))}getRound(){return new P(Math.round(this.getX()),Math.round(this.getY()))}}class O{#y;#C;#v;constructor(e,t,n){this.#y=e,this.#C=t,this.#v=n}getX(){return this.#y}getY(){return this.#C}getZ(){return this.#v}equals(e){return null!==e&&this.getX()===e.getX()&&this.getY()===e.getY()&&this.getZ()===e.getZ()}isSimilar(e,t){return null!==e&&C(this.getX(),e.getX(),t)&&C(this.getY(),e.getY(),t)&&C(this.getZ(),e.getZ(),t)}toString(){return"("+this.getX()+", "+this.getY()+", "+this.getZ()+")"}getDistance(e){return Math.sqrt((this.getX()-e.getX())*(this.getX()-e.getX())+(this.getY()-e.getY())*(this.getY()-e.getY())+(this.getZ()-e.getZ())*(this.getZ()-e.getZ()))}minus(e){return new D(this.getX()-e.getX(),this.getY()-e.getY(),this.getZ()-e.getZ())}}class w{#e;constructor(e){if(!e||void 0===e)throw new Error("Cannot create point with no values.");if(0===e.length)throw new Error("Cannot create point with empty values.");if(!e.every((function(e){return!isNaN(e)})))throw new Error("Cannot create point with non number values.");this.#e=e}get(e){return this.#e[e]}length(){return this.#e.length}toString(){return"("+this.#e.toString()+")"}getValues(){return this.#e.slice()}canCompare(e){return!!e&&this.length()===e.length()}equals(e){if(!this.canCompare(e))return!1;for(let t=0,n=this.length();t<n;++t)if(this.get(t)!==e.get(t))return!1;return!0}compare(e){if(!this.canCompare(e))return null;const t=[];for(let n=0,i=this.length();n<i;++n)this.get(n)!==e.get(n)&&t.push(n);return t}get3D(){return new O(this.get(0),this.get(1),this.get(2))}add(e){if(!this.canCompare(e))return null;const t=[],n=this.getValues(),i=e.getValues();for(let e=0;e<n.length;++e)t.push(n[e]+i[e]);return new w(t)}mergeWith3D(e){const t=this.getValues();return t[0]=e.getX(),t[1]=e.getY(),t[2]=e.getZ(),new w(t)}}const A={"0000":{"0000":["UL","1","CommandGroupLength"],"0001":["UL","1","CommandLengthToEnd"],"0002":["UI","1","AffectedSOPClassUID"],"0003":["UI","1","RequestedSOPClassUID"],"0010":["SH","1","CommandRecognitionCode"],"0100":["US","1","CommandField"],"0110":["US","1","MessageID"],"0120":["US","1","MessageIDBeingRespondedTo"],"0200":["AE","1","Initiator"],"0300":["AE","1","Receiver"],"0400":["AE","1","FindLocation"],"0600":["AE","1","MoveDestination"],"0700":["US","1","Priority"],"0800":["US","1","CommandDataSetType"],"0850":["US","1","NumberOfMatches"],"0860":["US","1","ResponseSequenceNumber"],"0900":["US","1","Status"],"0901":["AT","1-n","OffendingElement"],"0902":["LO","1","ErrorComment"],"0903":["US","1","ErrorID"],1e3:["UI","1","AffectedSOPInstanceUID"],1001:["UI","1","RequestedSOPInstanceUID"],1002:["US","1","EventTypeID"],1005:["AT","1-n","AttributeIdentifierList"],1008:["US","1","ActionTypeID"],1020:["US","1","NumberOfRemainingSuboperations"],1021:["US","1","NumberOfCompletedSuboperations"],1022:["US","1","NumberOfFailedSuboperations"],1023:["US","1","NumberOfWarningSuboperations"],1030:["AE","1","MoveOriginatorApplicationEntityTitle"],1031:["US","1","MoveOriginatorMessageID"],4e3:["LT","1","DialogReceiver"],4010:["LT","1","TerminalType"],5010:["SH","1","MessageSetID"],5020:["SH","1","EndMessageID"],5110:["LT","1","DisplayFormat"],5120:["LT","1","PagePositionID"],5130:["CS","1","TextFormatID"],5140:["CS","1","NormalReverse"],5150:["CS","1","AddGrayScale"],5160:["CS","1","Borders"],5170:["IS","1","Copies"],5180:["CS","1","CommandMagnificationType"],5190:["CS","1","Erase"],"51A0":["CS","1","Print"],"51B0":["US","1-n","Overlays"]},"0002":{"0000":["UL","1","FileMetaInformationGroupLength"],"0001":["OB","1","FileMetaInformationVersion"],"0002":["UI","1","MediaStorageSOPClassUID"],"0003":["UI","1","MediaStorageSOPInstanceUID"],"0010":["UI","1","TransferSyntaxUID"],"0012":["UI","1","ImplementationClassUID"],"0013":["SH","1","ImplementationVersionName"],"0016":["AE","1","SourceApplicationEntityTitle"],"0017":["AE","1","SendingApplicationEntityTitle"],"0018":["AE","1","ReceivingApplicationEntityTitle"],"0026":["UR","1","SourcePresentationAddress"],"0027":["UR","1","SendingPresentationAddress"],"0028":["UR","1","ReceivingPresentationAddress"],"0031":["OB","1","RTVMetaInformationVersion"],"0032":["UI","1","RTVCommunicationSOPClassUID"],"0033":["UI","1","RTVCommunicationSOPInstanceUID"],"0035":["OB","1","RTVSourceIdentifier"],"0036":["OB","1","RTVFlowIdentifier"],"0037":["UL","1","RTVFlowRTPSamplingRate"],"0038":["FD","1","RTVFlowActualFrameDuration"],"0100":["UI","1","PrivateInformationCreatorUID"],"0102":["OB","1","PrivateInformation"]},"0004":{"0000":["UL","1","GenericGroupLength"],1130:["CS","1","FileSetID"],1141:["CS","1-8","FileSetDescriptorFileID"],1142:["CS","1","SpecificCharacterSetOfFileSetDescriptorFile"],1200:["UL","1","OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity"],1202:["UL","1","OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity"],1212:["US","1","FileSetConsistencyFlag"],1220:["SQ","1","DirectoryRecordSequence"],1400:["UL","1","OffsetOfTheNextDirectoryRecord"],1410:["US","1","RecordInUseFlag"],1420:["UL","1","OffsetOfReferencedLowerLevelDirectoryEntity"],1430:["CS","1","DirectoryRecordType"],1432:["UI","1","PrivateRecordUID"],1500:["CS","1-8","ReferencedFileID"],1504:["UL","1","MRDRDirectoryRecordOffset"],1510:["UI","1","ReferencedSOPClassUIDInFile"],1511:["UI","1","ReferencedSOPInstanceUIDInFile"],1512:["UI","1","ReferencedTransferSyntaxUIDInFile"],"151A":["UI","1-n","ReferencedRelatedGeneralSOPClassUIDInFile"],1600:["UL","1","NumberOfReferences"]},"0008":{"0000":["UL","1","GenericGroupLength"],"0001":["UL","1","LengthToEnd"],"0005":["CS","1-n","SpecificCharacterSet"],"0006":["SQ","1","LanguageCodeSequence"],"0008":["CS","2-n","ImageType"],"0010":["SH","1","RecognitionCode"],"0012":["DA","1","InstanceCreationDate"],"0013":["TM","1","InstanceCreationTime"],"0014":["UI","1","InstanceCreatorUID"],"0015":["DT","1","InstanceCoercionDateTime"],"0016":["UI","1","SOPClassUID"],"0018":["UI","1","SOPInstanceUID"],"001A":["UI","1-n","RelatedGeneralSOPClassUID"],"001B":["UI","1","OriginalSpecializedSOPClassUID"],"0020":["DA","1","StudyDate"],"0021":["DA","1","SeriesDate"],"0022":["DA","1","AcquisitionDate"],"0023":["DA","1","ContentDate"],"0024":["DA","1","OverlayDate"],"0025":["DA","1","CurveDate"],"002A":["DT","1","AcquisitionDateTime"],"0030":["TM","1","StudyTime"],"0031":["TM","1","SeriesTime"],"0032":["TM","1","AcquisitionTime"],"0033":["TM","1","ContentTime"],"0034":["TM","1","OverlayTime"],"0035":["TM","1","CurveTime"],"0040":["US","1","DataSetType"],"0041":["LO","1","DataSetSubtype"],"0042":["CS","1","NuclearMedicineSeriesType"],"0050":["SH","1","AccessionNumber"],"0051":["SQ","1","IssuerOfAccessionNumberSequence"],"0052":["CS","1","QueryRetrieveLevel"],"0053":["CS","1","QueryRetrieveView"],"0054":["AE","1-n","RetrieveAETitle"],"0055":["AE","1","StationAETitle"],"0056":["CS","1","InstanceAvailability"],"0058":["UI","1-n","FailedSOPInstanceUIDList"],"0060":["CS","1","Modality"],"0061":["CS","1-n","ModalitiesInStudy"],"0062":["UI","1-n","SOPClassesInStudy"],"0063":["SQ","1","AnatomicRegionsInStudyCodeSequence"],"0064":["CS","1","ConversionType"],"0068":["CS","1","PresentationIntentType"],"0070":["LO","1","Manufacturer"],"0080":["LO","1","InstitutionName"],"0081":["ST","1","InstitutionAddress"],"0082":["SQ","1","InstitutionCodeSequence"],"0090":["PN","1","ReferringPhysicianName"],"0092":["ST","1","ReferringPhysicianAddress"],"0094":["SH","1-n","ReferringPhysicianTelephoneNumbers"],"0096":["SQ","1","ReferringPhysicianIdentificationSequence"],"009C":["PN","1-n","ConsultingPhysicianName"],"009D":["SQ","1","ConsultingPhysicianIdentificationSequence"],"0100":["SH","1","CodeValue"],"0101":["LO","1","ExtendedCodeValue"],"0102":["SH","1","CodingSchemeDesignator"],"0103":["SH","1","CodingSchemeVersion"],"0104":["LO","1","CodeMeaning"],"0105":["CS","1","MappingResource"],"0106":["DT","1","ContextGroupVersion"],"0107":["DT","1","ContextGroupLocalVersion"],"0108":["LT","1","ExtendedCodeMeaning"],"0109":["SQ","1","CodingSchemeResourcesSequence"],"010A":["CS","1","CodingSchemeURLType"],"010B":["CS","1","ContextGroupExtensionFlag"],"010C":["UI","1","CodingSchemeUID"],"010D":["UI","1","ContextGroupExtensionCreatorUID"],"010E":["UR","1","CodingSchemeURL"],"010F":["CS","1","ContextIdentifier"],"0110":["SQ","1","CodingSchemeIdentificationSequence"],"0112":["LO","1","CodingSchemeRegistry"],"0114":["ST","1","CodingSchemeExternalID"],"0115":["ST","1","CodingSchemeName"],"0116":["ST","1","CodingSchemeResponsibleOrganization"],"0117":["UI","1","ContextUID"],"0118":["UI","1","MappingResourceUID"],"0119":["UC","1","LongCodeValue"],"0120":["UR","1","URNCodeValue"],"0121":["SQ","1","EquivalentCodeSequence"],"0122":["LO","1","MappingResourceName"],"0123":["SQ","1","ContextGroupIdentificationSequence"],"0124":["SQ","1","MappingResourceIdentificationSequence"],"0201":["SH","1","TimezoneOffsetFromUTC"],"0202":["","",""],"0220":["SQ","1","ResponsibleGroupCodeSequence"],"0221":["CS","1","EquipmentModality"],"0222":["LO","1","ManufacturerRelatedModelGroup"],"0300":["SQ","1","PrivateDataElementCharacteristicsSequence"],"0301":["US","1","PrivateGroupReference"],"0302":["LO","1","PrivateCreatorReference"],"0303":["CS","1","BlockIdentifyingInformationStatus"],"0304":["US","1-n","NonidentifyingPrivateElements"],"0305":["SQ","1","DeidentificationActionSequence"],"0306":["US","1-n","IdentifyingPrivateElements"],"0307":["CS","1","DeidentificationAction"],"0308":["US","1","PrivateDataElement"],"0309":["UL","1-3","PrivateDataElementValueMultiplicity"],"030A":["CS","1","PrivateDataElementValueRepresentation"],"030B":["UL","1-2","PrivateDataElementNumberOfItems"],"030C":["UC","1","PrivateDataElementName"],"030D":["UC","1","PrivateDataElementKeyword"],"030E":["UT","1","PrivateDataElementDescription"],"030F":["UT","1","PrivateDataElementEncoding"],"0310":["SQ","1","PrivateDataElementDefinitionSequence"],1e3:["AE","1","NetworkID"],1010:["SH","1","StationName"],1030:["LO","1","StudyDescription"],1032:["SQ","1","ProcedureCodeSequence"],"103E":["LO","1","SeriesDescription"],"103F":["SQ","1","SeriesDescriptionCodeSequence"],1040:["LO","1","InstitutionalDepartmentName"],1041:["SQ","1","InstitutionalDepartmentTypeCodeSequence"],1048:["PN","1-n","PhysiciansOfRecord"],1049:["SQ","1","PhysiciansOfRecordIdentificationSequence"],1050:["PN","1-n","PerformingPhysicianName"],1052:["SQ","1","PerformingPhysicianIdentificationSequence"],1060:["PN","1-n","NameOfPhysiciansReadingStudy"],1062:["SQ","1","PhysiciansReadingStudyIdentificationSequence"],1070:["PN","1-n","OperatorsName"],1072:["SQ","1","OperatorIdentificationSequence"],1080:["LO","1-n","AdmittingDiagnosesDescription"],1084:["SQ","1","AdmittingDiagnosesCodeSequence"],1090:["LO","1","ManufacturerModelName"],1100:["SQ","1","ReferencedResultsSequence"],1110:["SQ","1","ReferencedStudySequence"],1111:["SQ","1","ReferencedPerformedProcedureStepSequence"],1115:["SQ","1","ReferencedSeriesSequence"],1120:["SQ","1","ReferencedPatientSequence"],1125:["SQ","1","ReferencedVisitSequence"],1130:["SQ","1","ReferencedOverlaySequence"],1134:["SQ","1","ReferencedStereometricInstanceSequence"],"113A":["SQ","1","ReferencedWaveformSequence"],1140:["SQ","1","ReferencedImageSequence"],1145:["SQ","1","ReferencedCurveSequence"],"114A":["SQ","1","ReferencedInstanceSequence"],"114B":["SQ","1","ReferencedRealWorldValueMappingInstanceSequence"],1150:["UI","1","ReferencedSOPClassUID"],1155:["UI","1","ReferencedSOPInstanceUID"],1156:["SQ","1","DefinitionSourceSequence"],"115A":["UI","1-n","SOPClassesSupported"],1160:["IS","1-n","ReferencedFrameNumber"],1161:["UL","1-n","SimpleFrameList"],1162:["UL","3-3n","CalculatedFrameList"],1163:["FD","2","TimeRange"],1164:["SQ","1","FrameExtractionSequence"],1167:["UI","1","MultiFrameSourceSOPInstanceUID"],1190:["UR","1","RetrieveURL"],1195:["UI","1","TransactionUID"],1196:["US","1","WarningReason"],1197:["US","1","FailureReason"],1198:["SQ","1","FailedSOPSequence"],1199:["SQ","1","ReferencedSOPSequence"],"119A":["SQ","1","OtherFailuresSequence"],1200:["SQ","1","StudiesContainingOtherReferencedInstancesSequence"],1250:["SQ","1","RelatedSeriesSequence"],2110:["CS","1","LossyImageCompressionRetired"],2111:["ST","1","DerivationDescription"],2112:["SQ","1","SourceImageSequence"],2120:["SH","1","StageName"],2122:["IS","1","StageNumber"],2124:["IS","1","NumberOfStages"],2127:["SH","1","ViewName"],2128:["IS","1","ViewNumber"],2129:["IS","1","NumberOfEventTimers"],"212A":["IS","1","NumberOfViewsInStage"],2130:["DS","1-n","EventElapsedTimes"],2132:["LO","1-n","EventTimerNames"],2133:["SQ","1","EventTimerSequence"],2134:["FD","1","EventTimeOffset"],2135:["SQ","1","EventCodeSequence"],2142:["IS","1","StartTrim"],2143:["IS","1","StopTrim"],2144:["IS","1","RecommendedDisplayFrameRate"],2200:["CS","1","TransducerPosition"],2204:["CS","1","TransducerOrientation"],2208:["CS","1","AnatomicStructure"],2218:["SQ","1","AnatomicRegionSequence"],2220:["SQ","1","AnatomicRegionModifierSequence"],2228:["SQ","1","PrimaryAnatomicStructureSequence"],2229:["SQ","1","AnatomicStructureSpaceOrRegionSequence"],2230:["SQ","1","PrimaryAnatomicStructureModifierSequence"],2240:["SQ","1","TransducerPositionSequence"],2242:["SQ","1","TransducerPositionModifierSequence"],2244:["SQ","1","TransducerOrientationSequence"],2246:["SQ","1","TransducerOrientationModifierSequence"],2251:["SQ","1","AnatomicStructureSpaceOrRegionCodeSequenceTrial"],2253:["SQ","1","AnatomicPortalOfEntranceCodeSequenceTrial"],2255:["SQ","1","AnatomicApproachDirectionCodeSequenceTrial"],2256:["ST","1","AnatomicPerspectiveDescriptionTrial"],2257:["SQ","1","AnatomicPerspectiveCodeSequenceTrial"],2258:["ST","1","AnatomicLocationOfExaminingInstrumentDescriptionTrial"],2259:["SQ","1","AnatomicLocationOfExaminingInstrumentCodeSequenceTrial"],"225A":["SQ","1","AnatomicStructureSpaceOrRegionModifierCodeSequenceTrial"],"225C":["SQ","1","OnAxisBackgroundAnatomicStructureCodeSequenceTrial"],3001:["SQ","1","AlternateRepresentationSequence"],3002:["UI","1-n","AvailableTransferSyntaxUID"],3010:["UI","1-n","IrradiationEventUID"],3011:["SQ","1","SourceIrradiationEventSequence"],3012:["UI","1","RadiopharmaceuticalAdministrationEventUID"],4e3:["LT","1","IdentifyingComments"],9007:["CS","4","FrameType"],9092:["SQ","1","ReferencedImageEvidenceSequence"],9121:["SQ","1","ReferencedRawDataSequence"],9123:["UI","1","CreatorVersionUID"],9124:["SQ","1","DerivationImageSequence"],9154:["SQ","1","SourceImageEvidenceSequence"],9205:["CS","1","PixelPresentation"],9206:["CS","1","VolumetricProperties"],9207:["CS","1","VolumeBasedCalculationTechnique"],9208:["CS","1","ComplexImageComponent"],9209:["CS","1","AcquisitionContrast"],9215:["SQ","1","DerivationCodeSequence"],9237:["SQ","1","ReferencedPresentationStateSequence"],9410:["SQ","1","ReferencedOtherPlaneSequence"],9458:["SQ","1","FrameDisplaySequence"],9459:["FL","1","RecommendedDisplayFrameRateInFloat"],9460:["CS","1","SkipFrameRangeFlag"]},"0010":{"0000":["UL","1","GenericGroupLength"],"0010":["PN","1","PatientName"],"0020":["LO","1","PatientID"],"0021":["LO","1","IssuerOfPatientID"],"0022":["CS","1","TypeOfPatientID"],"0024":["SQ","1","IssuerOfPatientIDQualifiersSequence"],"0026":["SQ","1","SourcePatientGroupIdentificationSequence"],"0027":["SQ","1","GroupOfPatientsIdentificationSequence"],"0028":["US","3","SubjectRelativePositionInImage"],"0030":["DA","1","PatientBirthDate"],"0032":["TM","1","PatientBirthTime"],"0033":["LO","1","PatientBirthDateInAlternativeCalendar"],"0034":["LO","1","PatientDeathDateInAlternativeCalendar"],"0035":["CS","1","PatientAlternativeCalendar"],"0040":["CS","1","PatientSex"],"0050":["SQ","1","PatientInsurancePlanCodeSequence"],"0101":["SQ","1","PatientPrimaryLanguageCodeSequence"],"0102":["SQ","1","PatientPrimaryLanguageModifierCodeSequence"],"0200":["CS","1","QualityControlSubject"],"0201":["SQ","1","QualityControlSubjectTypeCodeSequence"],"0212":["UC","1","StrainDescription"],"0213":["LO","1","StrainNomenclature"],"0214":["LO","1","StrainStockNumber"],"0215":["SQ","1","StrainSourceRegistryCodeSequence"],"0216":["SQ","1","StrainStockSequence"],"0217":["LO","1","StrainSource"],"0218":["UT","1","StrainAdditionalInformation"],"0219":["SQ","1","StrainCodeSequence"],"0221":["SQ","1","GeneticModificationsSequence"],"0222":["UC","1","GeneticModificationsDescription"],"0223":["LO","1","GeneticModificationsNomenclature"],"0229":["SQ","1","GeneticModificationsCodeSequence"],1e3:["LO","1-n","OtherPatientIDs"],1001:["PN","1-n","OtherPatientNames"],1002:["SQ","1","OtherPatientIDsSequence"],1005:["PN","1","PatientBirthName"],1010:["AS","1","PatientAge"],1020:["DS","1","PatientSize"],1021:["SQ","1","PatientSizeCodeSequence"],1022:["DS","1","PatientBodyMassIndex"],1023:["DS","1","MeasuredAPDimension"],1024:["DS","1","MeasuredLateralDimension"],1030:["DS","1","PatientWeight"],1040:["LO","1","PatientAddress"],1050:["LO","1-n","InsurancePlanIdentification"],1060:["PN","1","PatientMotherBirthName"],1080:["LO","1","MilitaryRank"],1081:["LO","1","BranchOfService"],1090:["LO","1","MedicalRecordLocator"],1100:["SQ","1","ReferencedPatientPhotoSequence"],2e3:["LO","1-n","MedicalAlerts"],2110:["LO","1-n","Allergies"],2150:["LO","1","CountryOfResidence"],2152:["LO","1","RegionOfResidence"],2154:["SH","1-n","PatientTelephoneNumbers"],2155:["LT","1","PatientTelecomInformation"],2160:["SH","1","EthnicGroup"],2180:["SH","1","Occupation"],"21A0":["CS","1","SmokingStatus"],"21B0":["LT","1","AdditionalPatientHistory"],"21C0":["US","1","PregnancyStatus"],"21D0":["DA","1","LastMenstrualDate"],"21F0":["LO","1","PatientReligiousPreference"],2201:["LO","1","PatientSpeciesDescription"],2202:["SQ","1","PatientSpeciesCodeSequence"],2203:["CS","1","PatientSexNeutered"],2210:["CS","1","AnatomicalOrientationType"],2292:["LO","1","PatientBreedDescription"],2293:["SQ","1","PatientBreedCodeSequence"],2294:["SQ","1","BreedRegistrationSequence"],2295:["LO","1","BreedRegistrationNumber"],2296:["SQ","1","BreedRegistryCodeSequence"],2297:["PN","1","ResponsiblePerson"],2298:["CS","1","ResponsiblePersonRole"],2299:["LO","1","ResponsibleOrganization"],4e3:["LT","1","PatientComments"],9431:["FL","1","ExaminedBodyThickness"]},"0012":{"0000":["UL","1","GenericGroupLength"],"0010":["LO","1","ClinicalTrialSponsorName"],"0020":["LO","1","ClinicalTrialProtocolID"],"0021":["LO","1","ClinicalTrialProtocolName"],"0030":["LO","1","ClinicalTrialSiteID"],"0031":["LO","1","ClinicalTrialSiteName"],"0040":["LO","1","ClinicalTrialSubjectID"],"0042":["LO","1","ClinicalTrialSubjectReadingID"],"0050":["LO","1","ClinicalTrialTimePointID"],"0051":["ST","1","ClinicalTrialTimePointDescription"],"0052":["FD","1","LongitudinalTemporalOffsetFromEvent"],"0053":["CS","1","LongitudinalTemporalEventType"],"0060":["LO","1","ClinicalTrialCoordinatingCenterName"],"0062":["CS","1","PatientIdentityRemoved"],"0063":["LO","1-n","DeidentificationMethod"],"0064":["SQ","1","DeidentificationMethodCodeSequence"],"0071":["LO","1","ClinicalTrialSeriesID"],"0072":["LO","1","ClinicalTrialSeriesDescription"],"0081":["LO","1","ClinicalTrialProtocolEthicsCommitteeName"],"0082":["LO","1","ClinicalTrialProtocolEthicsCommitteeApprovalNumber"],"0083":["SQ","1","ConsentForClinicalTrialUseSequence"],"0084":["CS","1","DistributionType"],"0085":["CS","1","ConsentForDistributionFlag"],"0086":["DA","1","EthicsCommitteeApprovalEffectivenessStartDate"],"0087":["DA","1","EthicsCommitteeApprovalEffectivenessEndDate"]},"0014":{"0000":["UL","1","GenericGroupLength"],"0023":["ST","1","CADFileFormat"],"0024":["ST","1","ComponentReferenceSystem"],"0025":["ST","1","ComponentManufacturingProcedure"],"0028":["ST","1","ComponentManufacturer"],"0030":["DS","1-n","MaterialThickness"],"0032":["DS","1-n","MaterialPipeDiameter"],"0034":["DS","1-n","MaterialIsolationDiameter"],"0042":["ST","1","MaterialGrade"],"0044":["ST","1","MaterialPropertiesDescription"],"0045":["ST","1","MaterialPropertiesFileFormatRetired"],"0046":["LT","1","MaterialNotes"],"0050":["CS","1","ComponentShape"],"0052":["CS","1","CurvatureType"],"0054":["DS","1","OuterDiameter"],"0056":["DS","1","InnerDiameter"],"0100":["LO","1-n","ComponentWelderIDs"],"0101":["CS","1","SecondaryApprovalStatus"],"0102":["DA","1","SecondaryReviewDate"],"0103":["TM","1","SecondaryReviewTime"],"0104":["PN","1","SecondaryReviewerName"],"0105":["ST","1","RepairID"],"0106":["SQ","1","MultipleComponentApprovalSequence"],"0107":["CS","1-n","OtherApprovalStatus"],"0108":["CS","1-n","OtherSecondaryApprovalStatus"],1010:["ST","1","ActualEnvironmentalConditions"],1020:["DA","1","ExpiryDate"],1040:["ST","1","EnvironmentalConditions"],2002:["SQ","1","EvaluatorSequence"],2004:["IS","1","EvaluatorNumber"],2006:["PN","1","EvaluatorName"],2008:["IS","1","EvaluationAttempt"],2012:["SQ","1","IndicationSequence"],2014:["IS","1","IndicationNumber"],2016:["SH","1","IndicationLabel"],2018:["ST","1","IndicationDescription"],"201A":["CS","1-n","IndicationType"],"201C":["CS","1","IndicationDisposition"],"201E":["SQ","1","IndicationROISequence"],2030:["SQ","1","IndicationPhysicalPropertySequence"],2032:["SH","1","PropertyLabel"],2202:["IS","1","CoordinateSystemNumberOfAxes"],2204:["SQ","1","CoordinateSystemAxesSequence"],2206:["ST","1","CoordinateSystemAxisDescription"],2208:["CS","1","CoordinateSystemDataSetMapping"],"220A":["IS","1","CoordinateSystemAxisNumber"],"220C":["CS","1","CoordinateSystemAxisType"],"220E":["CS","1","CoordinateSystemAxisUnits"],2210:["OB","1","CoordinateSystemAxisValues"],2220:["SQ","1","CoordinateSystemTransformSequence"],2222:["ST","1","TransformDescription"],2224:["IS","1","TransformNumberOfAxes"],2226:["IS","1-n","TransformOrderOfAxes"],2228:["CS","1","TransformedAxisUnits"],"222A":["DS","1-n","CoordinateSystemTransformRotationAndScaleMatrix"],"222C":["DS","1-n","CoordinateSystemTransformTranslationMatrix"],3011:["DS","1","InternalDetectorFrameTime"],3012:["DS","1","NumberOfFramesIntegrated"],3020:["SQ","1","DetectorTemperatureSequence"],3022:["ST","1","SensorName"],3024:["DS","1","HorizontalOffsetOfSensor"],3026:["DS","1","VerticalOffsetOfSensor"],3028:["DS","1","SensorTemperature"],3040:["SQ","1","DarkCurrentSequence"],3050:["ox","1","DarkCurrentCounts"],3060:["SQ","1","GainCorrectionReferenceSequence"],3070:["ox","1","AirCounts"],3071:["DS","1","KVUsedInGainCalibration"],3072:["DS","1","MAUsedInGainCalibration"],3073:["DS","1","NumberOfFramesUsedForIntegration"],3074:["LO","1","FilterMaterialUsedInGainCalibration"],3075:["DS","1","FilterThicknessUsedInGainCalibration"],3076:["DA","1","DateOfGainCalibration"],3077:["TM","1","TimeOfGainCalibration"],3080:["OB","1","BadPixelImage"],3099:["LT","1","CalibrationNotes"],3100:["LT","1","LinearityCorrectionTechnique"],3101:["LT","1","BeamHardeningCorrectionTechnique"],4002:["SQ","1","PulserEquipmentSequence"],4004:["CS","1","PulserType"],4006:["LT","1","PulserNotes"],4008:["SQ","1","ReceiverEquipmentSequence"],"400A":["CS","1","AmplifierType"],"400C":["LT","1","ReceiverNotes"],"400E":["SQ","1","PreAmplifierEquipmentSequence"],"400F":["LT","1","PreAmplifierNotes"],4010:["SQ","1","TransmitTransducerSequence"],4011:["SQ","1","ReceiveTransducerSequence"],4012:["US","1","NumberOfElements"],4013:["CS","1","ElementShape"],4014:["DS","1","ElementDimensionA"],4015:["DS","1","ElementDimensionB"],4016:["DS","1","ElementPitchA"],4017:["DS","1","MeasuredBeamDimensionA"],4018:["DS","1","MeasuredBeamDimensionB"],4019:["DS","1","LocationOfMeasuredBeamDiameter"],"401A":["DS","1","NominalFrequency"],"401B":["DS","1","MeasuredCenterFrequency"],"401C":["DS","1","MeasuredBandwidth"],"401D":["DS","1","ElementPitchB"],4020:["SQ","1","PulserSettingsSequence"],4022:["DS","1","PulseWidth"],4024:["DS","1","ExcitationFrequency"],4026:["CS","1","ModulationType"],4028:["DS","1","Damping"],4030:["SQ","1","ReceiverSettingsSequence"],4031:["DS","1","AcquiredSoundpathLength"],4032:["CS","1","AcquisitionCompressionType"],4033:["IS","1","AcquisitionSampleSize"],4034:["DS","1","RectifierSmoothing"],4035:["SQ","1","DACSequence"],4036:["CS","1","DACType"],4038:["DS","1-n","DACGainPoints"],"403A":["DS","1-n","DACTimePoints"],"403C":["DS","1-n","DACAmplitude"],4040:["SQ","1","PreAmplifierSettingsSequence"],4050:["SQ","1","TransmitTransducerSettingsSequence"],4051:["SQ","1","ReceiveTransducerSettingsSequence"],4052:["DS","1","IncidentAngle"],4054:["ST","1","CouplingTechnique"],4056:["ST","1","CouplingMedium"],4057:["DS","1","CouplingVelocity"],4058:["DS","1","ProbeCenterLocationX"],4059:["DS","1","ProbeCenterLocationZ"],"405A":["DS","1","SoundPathLength"],"405C":["ST","1","DelayLawIdentifier"],4060:["SQ","1","GateSettingsSequence"],4062:["DS","1","GateThreshold"],4064:["DS","1","VelocityOfSound"],4070:["SQ","1","CalibrationSettingsSequence"],4072:["ST","1","CalibrationProcedure"],4074:["SH","1","ProcedureVersion"],4076:["DA","1","ProcedureCreationDate"],4078:["DA","1","ProcedureExpirationDate"],"407A":["DA","1","ProcedureLastModifiedDate"],"407C":["TM","1-n","CalibrationTime"],"407E":["DA","1-n","CalibrationDate"],4080:["SQ","1","ProbeDriveEquipmentSequence"],4081:["CS","1","DriveType"],4082:["LT","1","ProbeDriveNotes"],4083:["SQ","1","DriveProbeSequence"],4084:["DS","1","ProbeInductance"],4085:["DS","1","ProbeResistance"],4086:["SQ","1","ReceiveProbeSequence"],4087:["SQ","1","ProbeDriveSettingsSequence"],4088:["DS","1","BridgeResistors"],4089:["DS","1","ProbeOrientationAngle"],"408B":["DS","1","UserSelectedGainY"],"408C":["DS","1","UserSelectedPhase"],"408D":["DS","1","UserSelectedOffsetX"],"408E":["DS","1","UserSelectedOffsetY"],4091:["SQ","1","ChannelSettingsSequence"],4092:["DS","1","ChannelThreshold"],"409A":["SQ","1","ScannerSettingsSequence"],"409B":["ST","1","ScanProcedure"],"409C":["DS","1","TranslationRateX"],"409D":["DS","1","TranslationRateY"],"409F":["DS","1","ChannelOverlap"],"40A0":["LO","1-n","ImageQualityIndicatorType"],"40A1":["LO","1-n","ImageQualityIndicatorMaterial"],"40A2":["LO","1-n","ImageQualityIndicatorSize"],5002:["IS","1","LINACEnergy"],5004:["IS","1","LINACOutput"],5100:["US","1","ActiveAperture"],5101:["DS","1","TotalAperture"],5102:["DS","1","ApertureElevation"],5103:["DS","1","MainLobeAngle"],5104:["DS","1","MainRoofAngle"],5105:["CS","1","ConnectorType"],5106:["SH","1","WedgeModelNumber"],5107:["DS","1","WedgeAngleFloat"],5108:["DS","1","WedgeRoofAngle"],5109:["CS","1","WedgeElement1Position"],"510A":["DS","1","WedgeMaterialVelocity"],"510B":["SH","1","WedgeMaterial"],"510C":["DS","1","WedgeOffsetZ"],"510D":["DS","1","WedgeOriginOffsetX"],"510E":["DS","1","WedgeTimeDelay"],"510F":["SH","1","WedgeName"],5110:["SH","1","WedgeManufacturerName"],5111:["LO","1","WedgeDescription"],5112:["DS","1","NominalBeamAngle"],5113:["DS","1","WedgeOffsetX"],5114:["DS","1","WedgeOffsetY"],5115:["DS","1","WedgeTotalLength"],5116:["DS","1","WedgeInContactLength"],5117:["DS","1","WedgeFrontGap"],5118:["DS","1","WedgeTotalHeight"],5119:["DS","1","WedgeFrontHeight"],"511A":["DS","1","WedgeRearHeight"],"511B":["DS","1","WedgeTotalWidth"],"511C":["DS","1","WedgeInContactWidth"],"511D":["DS","1","WedgeChamferHeight"],"511E":["CS","1","WedgeCurve"],"511F":["DS","1","RadiusAlongWedge"]},"0016":{"0000":["UL","1","GenericGroupLength"],"0001":["DS","1","WhitePoint"],"0002":["DS","3","PrimaryChromaticities"],"0003":["UT","1","BatteryLevel"],"0004":["DS","1","ExposureTimeInSeconds"],"0005":["DS","1","FNumber"],"0006":["IS","1","OECFRows"],"0007":["IS","1","OECFColumns"],"0008":["UC","1-n","OECFColumnNames"],"0009":["DS","1-n","OECFValues"],"000A":["IS","1","SpatialFrequencyResponseRows"],"000B":["IS","1","SpatialFrequencyResponseColumns"],"000C":["UC","1-n","SpatialFrequencyResponseColumnNames"],"000D":["DS","1-n","SpatialFrequencyResponseValues"],"000E":["IS","1","ColorFilterArrayPatternRows"],"000F":["IS","1","ColorFilterArrayPatternColumns"],"0010":["DS","1-n","ColorFilterArrayPatternValues"],"0011":["US","1","FlashFiringStatus"],"0012":["US","1","FlashReturnStatus"],"0013":["US","1","FlashMode"],"0014":["US","1","FlashFunctionPresent"],"0015":["US","1","FlashRedEyeMode"],"0016":["US","1","ExposureProgram"],"0017":["UT","1","SpectralSensitivity"],"0018":["IS","1","PhotographicSensitivity"],"0019":["IS","1","SelfTimerMode"],"001A":["US","1","SensitivityType"],"001B":["IS","1","StandardOutputSensitivity"],"001C":["IS","1","RecommendedExposureIndex"],"001D":["IS","1","ISOSpeed"],"001E":["IS","1","ISOSpeedLatitudeyyy"],"001F":["IS","1","ISOSpeedLatitudezzz"],"0020":["UT","1","EXIFVersion"],"0021":["DS","1","ShutterSpeedValue"],"0022":["DS","1","ApertureValue"],"0023":["DS","1","BrightnessValue"],"0024":["DS","1","ExposureBiasValue"],"0025":["DS","1","MaxApertureValue"],"0026":["DS","1","SubjectDistance"],"0027":["US","1","MeteringMode"],"0028":["US","1","LightSource"],"0029":["DS","1","FocalLength"],"002A":["IS","2-4","SubjectArea"],"002B":["OB","1","MakerNote"],"0030":["DS","1","Temperature"],"0031":["DS","1","Humidity"],"0032":["DS","1","Pressure"],"0033":["DS","1","WaterDepth"],"0034":["DS","1","Acceleration"],"0035":["DS","1","CameraElevationAngle"],"0036":["DS","1-2","FlashEnergy"],"0037":["IS","2","SubjectLocation"],"0038":["DS","1","PhotographicExposureIndex"],"0039":["US","1","SensingMethod"],"003A":["US","1","FileSource"],"003B":["US","1","SceneType"],"0041":["US","1","CustomRendered"],"0042":["US","1","ExposureMode"],"0043":["US","1","WhiteBalance"],"0044":["DS","1","DigitalZoomRatio"],"0045":["IS","1","FocalLengthIn35mmFilm"],"0046":["US","1","SceneCaptureType"],"0047":["US","1","GainControl"],"0048":["US","1","Contrast"],"0049":["US","1","Saturation"],"004A":["US","1","Sharpness"],"004B":["OB","1","DeviceSettingDescription"],"004C":["US","1","SubjectDistanceRange"],"004D":["UT","1","CameraOwnerName"],"004E":["DS","4","LensSpecification"],"004F":["UT","1","LensMake"],"0050":["UT","1","LensModel"],"0051":["UT","1","LensSerialNumber"],"0061":["CS","1","InteroperabilityIndex"],"0062":["OB","1","InteroperabilityVersion"],"0070":["OB","1","GPSVersionID"],"0071":["CS","1","GPSLatitudeRef"],"0072":["DS","3","GPSLatitude"],"0073":["CS","1","GPSLongitudeRef"],"0074":["DS","3","GPSLongitude"],"0075":["US","1","GPSAltitudeRef"],"0076":["DS","1","GPSAltitude"],"0077":["DT","1","GPSTimeStamp"],"0078":["UT","1","GPSSatellites"],"0079":["CS","1","GPSStatus"],"007A":["CS","1","GPSMeasureMode"],"007B":["DS","1","GPSDOP"],"007C":["CS","1","GPSSpeedRef"],"007D":["DS","1","GPSSpeed"],"007E":["CS","1","GPSTrackRef"],"007F":["DS","1","GPSTrack"],"0080":["CS","1","GPSImgDirectionRef"],"0081":["DS","1","GPSImgDirection"],"0082":["UT","1","GPSMapDatum"],"0083":["CS","1","GPSDestLatitudeRef"],"0084":["DS","3","GPSDestLatitude"],"0085":["CS","1","GPSDestLongitudeRef"],"0086":["DS","3","GPSDestLongitude"],"0087":["CS","1","GPSDestBearingRef"],"0088":["DS","1","GPSDestBearing"],"0089":["CS","1","GPSDestDistanceRef"],"008A":["DS","1","GPSDestDistance"],"008B":["OB","1","GPSProcessingMethod"],"008C":["OB","1","GPSAreaInformation"],"008D":["DT","1","GPSDateStamp"],"008E":["IS","1","GPSDifferential"],1001:["CS","1","LightSourcePolarization"],1002:["DS","1","EmitterColorTemperature"],1003:["CS","1","ContactMethod"],1004:["CS","1-n","ImmersionMedia"],1005:["DS","1","OpticalMagnificationFactor"]},"0018":{"0000":["UL","1","GenericGroupLength"],"0010":["LO","1","ContrastBolusAgent"],"0012":["SQ","1","ContrastBolusAgentSequence"],"0013":["FL","1","ContrastBolusT1Relaxivity"],"0014":["SQ","1","ContrastBolusAdministrationRouteSequence"],"0015":["CS","1","BodyPartExamined"],"0020":["CS","1-n","ScanningSequence"],"0021":["CS","1-n","SequenceVariant"],"0022":["CS","1-n","ScanOptions"],"0023":["CS","1","MRAcquisitionType"],"0024":["SH","1","SequenceName"],"0025":["CS","1","AngioFlag"],"0026":["SQ","1","InterventionDrugInformationSequence"],"0027":["TM","1","InterventionDrugStopTime"],"0028":["DS","1","InterventionDrugDose"],"0029":["SQ","1","InterventionDrugCodeSequence"],"002A":["SQ","1","AdditionalDrugSequence"],"0030":["LO","1-n","Radionuclide"],"0031":["LO","1","Radiopharmaceutical"],"0032":["DS","1","EnergyWindowCenterline"],"0033":["DS","1-n","EnergyWindowTotalWidth"],"0034":["LO","1","InterventionDrugName"],"0035":["TM","1","InterventionDrugStartTime"],"0036":["SQ","1","InterventionSequence"],"0037":["CS","1","TherapyType"],"0038":["CS","1","InterventionStatus"],"0039":["CS","1","TherapyDescription"],"003A":["ST","1","InterventionDescription"],"0040":["IS","1","CineRate"],"0042":["CS","1","InitialCineRunState"],"0050":["DS","1","SliceThickness"],"0060":["DS","1","KVP"],"0061":["DS","1",""],"0070":["IS","1","CountsAccumulated"],"0071":["CS","1","AcquisitionTerminationCondition"],"0072":["DS","1","EffectiveDuration"],"0073":["CS","1","AcquisitionStartCondition"],"0074":["IS","1","AcquisitionStartConditionData"],"0075":["IS","1","AcquisitionTerminationConditionData"],"0080":["DS","1","RepetitionTime"],"0081":["DS","1","EchoTime"],"0082":["DS","1","InversionTime"],"0083":["DS","1","NumberOfAverages"],"0084":["DS","1","ImagingFrequency"],"0085":["SH","1","ImagedNucleus"],"0086":["IS","1-n","EchoNumbers"],"0087":["DS","1","MagneticFieldStrength"],"0088":["DS","1","SpacingBetweenSlices"],"0089":["IS","1","NumberOfPhaseEncodingSteps"],"0090":["DS","1","DataCollectionDiameter"],"0091":["IS","1","EchoTrainLength"],"0093":["DS","1","PercentSampling"],"0094":["DS","1","PercentPhaseFieldOfView"],"0095":["DS","1","PixelBandwidth"],1e3:["LO","1","DeviceSerialNumber"],1002:["UI","1","DeviceUID"],1003:["LO","1","DeviceID"],1004:["LO","1","PlateID"],1005:["LO","1","GeneratorID"],1006:["LO","1","GridID"],1007:["LO","1","CassetteID"],1008:["LO","1","GantryID"],1009:["UT","1","UniqueDeviceIdentifier"],"100A":["SQ","1","UDISequence"],"100B":["UI","1-n","ManufacturerDeviceClassUID"],1010:["LO","1","SecondaryCaptureDeviceID"],1011:["LO","1","HardcopyCreationDeviceID"],1012:["DA","1","DateOfSecondaryCapture"],1014:["TM","1","TimeOfSecondaryCapture"],1016:["LO","1","SecondaryCaptureDeviceManufacturer"],1017:["LO","1","HardcopyDeviceManufacturer"],1018:["LO","1","SecondaryCaptureDeviceManufacturerModelName"],1019:["LO","1-n","SecondaryCaptureDeviceSoftwareVersions"],"101A":["LO","1-n","HardcopyDeviceSoftwareVersion"],"101B":["LO","1","HardcopyDeviceManufacturerModelName"],1020:["LO","1-n","SoftwareVersions"],1022:["SH","1","VideoImageFormatAcquired"],1023:["LO","1","DigitalImageFormatAcquired"],1030:["LO","1","ProtocolName"],1040:["LO","1","ContrastBolusRoute"],1041:["DS","1","ContrastBolusVolume"],1042:["TM","1","ContrastBolusStartTime"],1043:["TM","1","ContrastBolusStopTime"],1044:["DS","1","ContrastBolusTotalDose"],1045:["IS","1","SyringeCounts"],1046:["DS","1-n","ContrastFlowRate"],1047:["DS","1-n","ContrastFlowDuration"],1048:["CS","1","ContrastBolusIngredient"],1049:["DS","1","ContrastBolusIngredientConcentration"],1050:["DS","1","SpatialResolution"],1060:["DS","1","TriggerTime"],1061:["LO","1","TriggerSourceOrType"],1062:["IS","1","NominalInterval"],1063:["DS","1","FrameTime"],1064:["LO","1","CardiacFramingType"],1065:["DS","1-n","FrameTimeVector"],1066:["DS","1","FrameDelay"],1067:["DS","1","ImageTriggerDelay"],1068:["DS","1","MultiplexGroupTimeOffset"],1069:["DS","1","TriggerTimeOffset"],"106A":["CS","1","SynchronizationTrigger"],"106C":["US","2","SynchronizationChannel"],"106E":["UL","1","TriggerSamplePosition"],1070:["LO","1","RadiopharmaceuticalRoute"],1071:["DS","1","RadiopharmaceuticalVolume"],1072:["TM","1","RadiopharmaceuticalStartTime"],1073:["TM","1","RadiopharmaceuticalStopTime"],1074:["DS","1","RadionuclideTotalDose"],1075:["DS","1","RadionuclideHalfLife"],1076:["DS","1","RadionuclidePositronFraction"],1077:["DS","1","RadiopharmaceuticalSpecificActivity"],1078:["DT","1","RadiopharmaceuticalStartDateTime"],1079:["DT","1","RadiopharmaceuticalStopDateTime"],1080:["CS","1","BeatRejectionFlag"],1081:["IS","1","LowRRValue"],1082:["IS","1","HighRRValue"],1083:["IS","1","IntervalsAcquired"],1084:["IS","1","IntervalsRejected"],1085:["LO","1","PVCRejection"],1086:["IS","1","SkipBeats"],1088:["IS","1","HeartRate"],1090:["IS","1","CardiacNumberOfImages"],1094:["IS","1","TriggerWindow"],1100:["DS","1","ReconstructionDiameter"],1110:["DS","1","DistanceSourceToDetector"],1111:["DS","1","DistanceSourceToPatient"],1114:["DS","1","EstimatedRadiographicMagnificationFactor"],1120:["DS","1","GantryDetectorTilt"],1121:["DS","1","GantryDetectorSlew"],1130:["DS","1","TableHeight"],1131:["DS","1","TableTraverse"],1134:["CS","1","TableMotion"],1135:["DS","1-n","TableVerticalIncrement"],1136:["DS","1-n","TableLateralIncrement"],1137:["DS","1-n","TableLongitudinalIncrement"],1138:["DS","1","TableAngle"],"113A":["CS","1","TableType"],1140:["CS","1","RotationDirection"],1141:["DS","1","AngularPosition"],1142:["DS","1-n","RadialPosition"],1143:["DS","1","ScanArc"],1144:["DS","1","AngularStep"],1145:["DS","1","CenterOfRotationOffset"],1146:["DS","1-n","RotationOffset"],1147:["CS","1","FieldOfViewShape"],1149:["IS","1-2","FieldOfViewDimensions"],1150:["IS","1","ExposureTime"],1151:["IS","1","XRayTubeCurrent"],1152:["IS","1","Exposure"],1153:["IS","1","ExposureInuAs"],1154:["DS","1","AveragePulseWidth"],1155:["CS","1","RadiationSetting"],1156:["CS","1","RectificationType"],"115A":["CS","1","RadiationMode"],"115E":["DS","1","ImageAndFluoroscopyAreaDoseProduct"],1160:["SH","1","FilterType"],1161:["LO","1-n","TypeOfFilters"],1162:["DS","1","IntensifierSize"],1164:["DS","2","ImagerPixelSpacing"],1166:["CS","1-n","Grid"],1170:["IS","1","GeneratorPower"],1180:["SH","1","CollimatorGridName"],1181:["CS","1","CollimatorType"],1182:["IS","1-2","FocalDistance"],1183:["DS","1-2","XFocusCenter"],1184:["DS","1-2","YFocusCenter"],1190:["DS","1-n","FocalSpots"],1191:["CS","1","AnodeTargetMaterial"],"11A0":["DS","1","BodyPartThickness"],"11A2":["DS","1","CompressionForce"],"11A3":["DS","1","CompressionPressure"],"11A4":["LO","1","PaddleDescription"],"11A5":["DS","1","CompressionContactArea"],"11B0":["LO","1","AcquisitionMode"],"11B1":["LO","1","DoseModeName"],"11B2":["CS","1","AcquiredSubtractionMaskFlag"],"11B3":["CS","1","FluoroscopyPersistenceFlag"],"11B4":["CS","1","FluoroscopyLastImageHoldPersistenceFlag"],"11B5":["IS","1","UpperLimitNumberOfPersistentFluoroscopyFrames"],"11B6":["CS","1","ContrastBolusAutoInjectionTriggerFlag"],"11B7":["FD","1","ContrastBolusInjectionDelay"],"11B8":["SQ","1","XAAcquisitionPhaseDetailsSequence"],"11B9":["FD","1","XAAcquisitionFrameRate"],"11BA":["SQ","1","XAPlaneDetailsSequence"],"11BB":["LO","1","AcquisitionFieldOfViewLabel"],"11BC":["SQ","1","XRayFilterDetailsSequence"],"11BD":["FD","1","XAAcquisitionDuration"],"11BE":["CS","1","ReconstructionPipelineType"],"11BF":["SQ","1","ImageFilterDetailsSequence"],"11C0":["CS","1","AppliedMaskSubtractionFlag"],"11C1":["SQ","1","RequestedSeriesDescriptionCodeSequence"],1200:["DA","1-n","DateOfLastCalibration"],1201:["TM","1-n","TimeOfLastCalibration"],1202:["DT","1","DateTimeOfLastCalibration"],1203:["DT","1","CalibrationDateTime"],1210:["SH","1-n","ConvolutionKernel"],1240:["IS","1-n","UpperLowerPixelValues"],1242:["IS","1","ActualFrameDuration"],1243:["IS","1","CountRate"],1244:["US","1","PreferredPlaybackSequencing"],1250:["SH","1","ReceiveCoilName"],1251:["SH","1","TransmitCoilName"],1260:["SH","1","PlateType"],1261:["LO","1","PhosphorType"],1271:["FD","1","WaterEquivalentDiameter"],1272:["SQ","1","WaterEquivalentDiameterCalculationMethodCodeSequence"],1300:["DS","1","ScanVelocity"],1301:["CS","1-n","WholeBodyTechnique"],1302:["IS","1","ScanLength"],1310:["US","4","AcquisitionMatrix"],1312:["CS","1","InPlanePhaseEncodingDirection"],1314:["DS","1","FlipAngle"],1315:["CS","1","VariableFlipAngleFlag"],1316:["DS","1","SAR"],1318:["DS","1","dBdt"],1320:["FL","1","B1rms"],1400:["LO","1","AcquisitionDeviceProcessingDescription"],1401:["LO","1","AcquisitionDeviceProcessingCode"],1402:["CS","1","CassetteOrientation"],1403:["CS","1","CassetteSize"],1404:["US","1","ExposuresOnPlate"],1405:["IS","1","RelativeXRayExposure"],1411:["DS","1","ExposureIndex"],1412:["DS","1","TargetExposureIndex"],1413:["DS","1","DeviationIndex"],1450:["DS","1","ColumnAngulation"],1460:["DS","1","TomoLayerHeight"],1470:["DS","1","TomoAngle"],1480:["DS","1","TomoTime"],1490:["CS","1","TomoType"],1491:["CS","1","TomoClass"],1495:["IS","1","NumberOfTomosynthesisSourceImages"],1500:["CS","1","PositionerMotion"],1508:["CS","1","PositionerType"],1510:["DS","1","PositionerPrimaryAngle"],1511:["DS","1","PositionerSecondaryAngle"],1520:["DS","1-n","PositionerPrimaryAngleIncrement"],1521:["DS","1-n","PositionerSecondaryAngleIncrement"],1530:["DS","1","DetectorPrimaryAngle"],1531:["DS","1","DetectorSecondaryAngle"],1600:["CS","1-3","ShutterShape"],1602:["IS","1","ShutterLeftVerticalEdge"],1604:["IS","1","ShutterRightVerticalEdge"],1606:["IS","1","ShutterUpperHorizontalEdge"],1608:["IS","1","ShutterLowerHorizontalEdge"],1610:["IS","2","CenterOfCircularShutter"],1612:["IS","1","RadiusOfCircularShutter"],1620:["IS","2-2n","VerticesOfThePolygonalShutter"],1622:["US","1","ShutterPresentationValue"],1623:["US","1","ShutterOverlayGroup"],1624:["US","3","ShutterPresentationColorCIELabValue"],1630:["CS","1","OutlineShapeType"],1631:["FD","1","OutlineLeftVerticalEdge"],1632:["FD","1","OutlineRightVerticalEdge"],1633:["FD","1","OutlineUpperHorizontalEdge"],1634:["FD","1","OutlineLowerHorizontalEdge"],1635:["FD","2","CenterOfCircularOutline"],1636:["FD","1","DiameterOfCircularOutline"],1637:["UL","1","NumberOfPolygonalVertices"],1638:["OF","1","VerticesOfThePolygonalOutline"],1700:["CS","1-3","CollimatorShape"],1702:["IS","1","CollimatorLeftVerticalEdge"],1704:["IS","1","CollimatorRightVerticalEdge"],1706:["IS","1","CollimatorUpperHorizontalEdge"],1708:["IS","1","CollimatorLowerHorizontalEdge"],1710:["IS","2","CenterOfCircularCollimator"],1712:["IS","1","RadiusOfCircularCollimator"],1720:["IS","2-2n","VerticesOfThePolygonalCollimator"],1800:["CS","1","AcquisitionTimeSynchronized"],1801:["SH","1","TimeSource"],1802:["CS","1","TimeDistributionProtocol"],1803:["LO","1","NTPSourceAddress"],2001:["IS","1-n","PageNumberVector"],2002:["SH","1-n","FrameLabelVector"],2003:["DS","1-n","FramePrimaryAngleVector"],2004:["DS","1-n","FrameSecondaryAngleVector"],2005:["DS","1-n","SliceLocationVector"],2006:["SH","1-n","DisplayWindowLabelVector"],2010:["DS","2","NominalScannedPixelSpacing"],2020:["CS","1","DigitizingDeviceTransportDirection"],2030:["DS","1","RotationOfScannedFilm"],2041:["SQ","1","BiopsyTargetSequence"],2042:["UI","1","TargetUID"],2043:["FL","2","LocalizingCursorPosition"],2044:["FL","3","CalculatedTargetPosition"],2045:["SH","1","TargetLabel"],2046:["FL","1","DisplayedZValue"],3100:["CS","1","IVUSAcquisition"],3101:["DS","1","IVUSPullbackRate"],3102:["DS","1","IVUSGatedRate"],3103:["IS","1","IVUSPullbackStartFrameNumber"],3104:["IS","1","IVUSPullbackStopFrameNumber"],3105:["IS","1-n","LesionNumber"],4e3:["LT","1","AcquisitionComments"],5e3:["SH","1-n","OutputPower"],5010:["LO","1-n","TransducerData"],5011:["SQ","1","TransducerIdentificationSequence"],5012:["DS","1","FocusDepth"],5020:["LO","1","ProcessingFunction"],5021:["LO","1","PostprocessingFunction"],5022:["DS","1","MechanicalIndex"],5024:["DS","1","BoneThermalIndex"],5026:["DS","1","CranialThermalIndex"],5027:["DS","1","SoftTissueThermalIndex"],5028:["DS","1","SoftTissueFocusThermalIndex"],5029:["DS","1","SoftTissueSurfaceThermalIndex"],5030:["DS","1","DynamicRange"],5040:["DS","1","TotalGain"],5050:["IS","1","DepthOfScanField"],5100:["CS","1","PatientPosition"],5101:["CS","1","ViewPosition"],5104:["SQ","1","ProjectionEponymousNameCodeSequence"],5210:["DS","6","ImageTransformationMatrix"],5212:["DS","3","ImageTranslationVector"],6e3:["DS","1","Sensitivity"],6011:["SQ","1","SequenceOfUltrasoundRegions"],6012:["US","1","RegionSpatialFormat"],6014:["US","1","RegionDataType"],6016:["UL","1","RegionFlags"],6018:["UL","1","RegionLocationMinX0"],"601A":["UL","1","RegionLocationMinY0"],"601C":["UL","1","RegionLocationMaxX1"],"601E":["UL","1","RegionLocationMaxY1"],6020:["SL","1","ReferencePixelX0"],6022:["SL","1","ReferencePixelY0"],6024:["US","1","PhysicalUnitsXDirection"],6026:["US","1","PhysicalUnitsYDirection"],6028:["FD","1","ReferencePixelPhysicalValueX"],"602A":["FD","1","ReferencePixelPhysicalValueY"],"602C":["FD","1","PhysicalDeltaX"],"602E":["FD","1","PhysicalDeltaY"],6030:["UL","1","TransducerFrequency"],6031:["CS","1","TransducerType"],6032:["UL","1","PulseRepetitionFrequency"],6034:["FD","1","DopplerCorrectionAngle"],6036:["FD","1","SteeringAngle"],6038:["UL","1","DopplerSampleVolumeXPositionRetired"],6039:["SL","1","DopplerSampleVolumeXPosition"],"603A":["UL","1","DopplerSampleVolumeYPositionRetired"],"603B":["SL","1","DopplerSampleVolumeYPosition"],"603C":["UL","1","TMLinePositionX0Retired"],"603D":["SL","1","TMLinePositionX0"],"603E":["UL","1","TMLinePositionY0Retired"],"603F":["SL","1","TMLinePositionY0"],6040:["UL","1","TMLinePositionX1Retired"],6041:["SL","1","TMLinePositionX1"],6042:["UL","1","TMLinePositionY1Retired"],6043:["SL","1","TMLinePositionY1"],6044:["US","1","PixelComponentOrganization"],6046:["UL","1","PixelComponentMask"],6048:["UL","1","PixelComponentRangeStart"],"604A":["UL","1","PixelComponentRangeStop"],"604C":["US","1","PixelComponentPhysicalUnits"],"604E":["US","1","PixelComponentDataType"],6050:["UL","1","NumberOfTableBreakPoints"],6052:["UL","1-n","TableOfXBreakPoints"],6054:["FD","1-n","TableOfYBreakPoints"],6056:["UL","1","NumberOfTableEntries"],6058:["UL","1-n","TableOfPixelValues"],"605A":["FL","1-n","TableOfParameterValues"],6060:["FL","1-n","RWaveTimeVector"],6070:["US","1","ActiveImageAreaOverlayGroup"],7e3:["CS","1","DetectorConditionsNominalFlag"],7001:["DS","1","DetectorTemperature"],7004:["CS","1","DetectorType"],7005:["CS","1","DetectorConfiguration"],7006:["LT","1","DetectorDescription"],7008:["LT","1","DetectorMode"],"700A":["SH","1","DetectorID"],"700C":["DA","1","DateOfLastDetectorCalibration"],"700E":["TM","1","TimeOfLastDetectorCalibration"],7010:["IS","1","ExposuresOnDetectorSinceLastCalibration"],7011:["IS","1","ExposuresOnDetectorSinceManufactured"],7012:["DS","1","DetectorTimeSinceLastExposure"],7014:["DS","1","DetectorActiveTime"],7016:["DS","1","DetectorActivationOffsetFromExposure"],"701A":["DS","2","DetectorBinning"],7020:["DS","2","DetectorElementPhysicalSize"],7022:["DS","2","DetectorElementSpacing"],7024:["CS","1","DetectorActiveShape"],7026:["DS","1-2","DetectorActiveDimensions"],7028:["DS","2","DetectorActiveOrigin"],"702A":["LO","1","DetectorManufacturerName"],"702B":["LO","1","DetectorManufacturerModelName"],7030:["DS","2","FieldOfViewOrigin"],7032:["DS","1","FieldOfViewRotation"],7034:["CS","1","FieldOfViewHorizontalFlip"],7036:["FL","2","PixelDataAreaOriginRelativeToFOV"],7038:["FL","1","PixelDataAreaRotationAngleRelativeToFOV"],7040:["LT","1","GridAbsorbingMaterial"],7041:["LT","1","GridSpacingMaterial"],7042:["DS","1","GridThickness"],7044:["DS","1","GridPitch"],7046:["IS","2","GridAspectRatio"],7048:["DS","1","GridPeriod"],"704C":["DS","1","GridFocalDistance"],7050:["CS","1-n","FilterMaterial"],7052:["DS","1-n","FilterThicknessMinimum"],7054:["DS","1-n","FilterThicknessMaximum"],7056:["FL","1-n","FilterBeamPathLengthMinimum"],7058:["FL","1-n","FilterBeamPathLengthMaximum"],7060:["CS","1","ExposureControlMode"],7062:["LT","1","ExposureControlModeDescription"],7064:["CS","1","ExposureStatus"],7065:["DS","1","PhototimerSetting"],8150:["DS","1","ExposureTimeInuS"],8151:["DS","1","XRayTubeCurrentInuA"],9004:["CS","1","ContentQualification"],9005:["SH","1","PulseSequenceName"],9006:["SQ","1","MRImagingModifierSequence"],9008:["CS","1","EchoPulseSequence"],9009:["CS","1","InversionRecovery"],9010:["CS","1","FlowCompensation"],9011:["CS","1","MultipleSpinEcho"],9012:["CS","1","MultiPlanarExcitation"],9014:["CS","1","PhaseContrast"],9015:["CS","1","TimeOfFlightContrast"],9016:["CS","1","Spoiling"],9017:["CS","1","SteadyStatePulseSequence"],9018:["CS","1","EchoPlanarPulseSequence"],9019:["FD","1","TagAngleFirstAxis"],9020:["CS","1","MagnetizationTransfer"],9021:["CS","1","T2Preparation"],9022:["CS","1","BloodSignalNulling"],9024:["CS","1","SaturationRecovery"],9025:["CS","1","SpectrallySelectedSuppression"],9026:["CS","1","SpectrallySelectedExcitation"],9027:["CS","1","SpatialPresaturation"],9028:["CS","1","Tagging"],9029:["CS","1","OversamplingPhase"],9030:["FD","1","TagSpacingFirstDimension"],9032:["CS","1","GeometryOfKSpaceTraversal"],9033:["CS","1","SegmentedKSpaceTraversal"],9034:["CS","1","RectilinearPhaseEncodeReordering"],9035:["FD","1","TagThickness"],9036:["CS","1","PartialFourierDirection"],9037:["CS","1","CardiacSynchronizationTechnique"],9041:["LO","1","ReceiveCoilManufacturerName"],9042:["SQ","1","MRReceiveCoilSequence"],9043:["CS","1","ReceiveCoilType"],9044:["CS","1","QuadratureReceiveCoil"],9045:["SQ","1","MultiCoilDefinitionSequence"],9046:["LO","1","MultiCoilConfiguration"],9047:["SH","1","MultiCoilElementName"],9048:["CS","1","MultiCoilElementUsed"],9049:["SQ","1","MRTransmitCoilSequence"],9050:["LO","1","TransmitCoilManufacturerName"],9051:["CS","1","TransmitCoilType"],9052:["FD","1-2","SpectralWidth"],9053:["FD","1-2","ChemicalShiftReference"],9054:["CS","1","VolumeLocalizationTechnique"],9058:["US","1","MRAcquisitionFrequencyEncodingSteps"],9059:["CS","1","Decoupling"],9060:["CS","1-2","DecoupledNucleus"],9061:["FD","1-2","DecouplingFrequency"],9062:["CS","1","DecouplingMethod"],9063:["FD","1-2","DecouplingChemicalShiftReference"],9064:["CS","1","KSpaceFiltering"],9065:["CS","1-2","TimeDomainFiltering"],9066:["US","1-2","NumberOfZeroFills"],9067:["CS","1","BaselineCorrection"],9069:["FD","1","ParallelReductionFactorInPlane"],9070:["FD","1","CardiacRRIntervalSpecified"],9073:["FD","1","AcquisitionDuration"],9074:["DT","1","FrameAcquisitionDateTime"],9075:["CS","1","DiffusionDirectionality"],9076:["SQ","1","DiffusionGradientDirectionSequence"],9077:["CS","1","ParallelAcquisition"],9078:["CS","1","ParallelAcquisitionTechnique"],9079:["FD","1-n","InversionTimes"],9080:["ST","1","MetaboliteMapDescription"],9081:["CS","1","PartialFourier"],9082:["FD","1","EffectiveEchoTime"],9083:["SQ","1","MetaboliteMapCodeSequence"],9084:["SQ","1","ChemicalShiftSequence"],9085:["CS","1","CardiacSignalSource"],9087:["FD","1","DiffusionBValue"],9089:["FD","3","DiffusionGradientOrientation"],9090:["FD","3","VelocityEncodingDirection"],9091:["FD","1","VelocityEncodingMinimumValue"],9092:["SQ","1","VelocityEncodingAcquisitionSequence"],9093:["US","1","NumberOfKSpaceTrajectories"],9094:["CS","1","CoverageOfKSpace"],9095:["UL","1","SpectroscopyAcquisitionPhaseRows"],9096:["FD","1","ParallelReductionFactorInPlaneRetired"],9098:["FD","1-2","TransmitterFrequency"],9100:["CS","1-2","ResonantNucleus"],9101:["CS","1","FrequencyCorrection"],9103:["SQ","1","MRSpectroscopyFOVGeometrySequence"],9104:["FD","1","SlabThickness"],9105:["FD","3","SlabOrientation"],9106:["FD","3","MidSlabPosition"],9107:["SQ","1","MRSpatialSaturationSequence"],9112:["SQ","1","MRTimingAndRelatedParametersSequence"],9114:["SQ","1","MREchoSequence"],9115:["SQ","1","MRModifierSequence"],9117:["SQ","1","MRDiffusionSequence"],9118:["SQ","1","CardiacSynchronizationSequence"],9119:["SQ","1","MRAveragesSequence"],9125:["SQ","1","MRFOVGeometrySequence"],9126:["SQ","1","VolumeLocalizationSequence"],9127:["UL","1","SpectroscopyAcquisitionDataColumns"],9147:["CS","1","DiffusionAnisotropyType"],9151:["DT","1","FrameReferenceDateTime"],9152:["SQ","1","MRMetaboliteMapSequence"],9155:["FD","1","ParallelReductionFactorOutOfPlane"],9159:["UL","1","SpectroscopyAcquisitionOutOfPlanePhaseSteps"],9166:["CS","1","BulkMotionStatus"],9168:["FD","1","ParallelReductionFactorSecondInPlane"],9169:["CS","1","CardiacBeatRejectionTechnique"],9170:["CS","1","RespiratoryMotionCompensationTechnique"],9171:["CS","1","RespiratorySignalSource"],9172:["CS","1","BulkMotionCompensationTechnique"],9173:["CS","1","BulkMotionSignalSource"],9174:["CS","1","ApplicableSafetyStandardAgency"],9175:["LO","1","ApplicableSafetyStandardDescription"],9176:["SQ","1","OperatingModeSequence"],9177:["CS","1","OperatingModeType"],9178:["CS","1","OperatingMode"],9179:["CS","1","SpecificAbsorptionRateDefinition"],9180:["CS","1","GradientOutputType"],9181:["FD","1","SpecificAbsorptionRateValue"],9182:["FD","1","GradientOutput"],9183:["CS","1","FlowCompensationDirection"],9184:["FD","1","TaggingDelay"],9185:["ST","1","RespiratoryMotionCompensationTechniqueDescription"],9186:["SH","1","RespiratorySignalSourceID"],9195:["FD","1","ChemicalShiftMinimumIntegrationLimitInHz"],9196:["FD","1","ChemicalShiftMaximumIntegrationLimitInHz"],9197:["SQ","1","MRVelocityEncodingSequence"],9198:["CS","1","FirstOrderPhaseCorrection"],9199:["CS","1","WaterReferencedPhaseCorrection"],9200:["CS","1","MRSpectroscopyAcquisitionType"],9214:["CS","1","RespiratoryCyclePosition"],9217:["FD","1","VelocityEncodingMaximumValue"],9218:["FD","1","TagSpacingSecondDimension"],9219:["SS","1","TagAngleSecondAxis"],9220:["FD","1","FrameAcquisitionDuration"],9226:["SQ","1","MRImageFrameTypeSequence"],9227:["SQ","1","MRSpectroscopyFrameTypeSequence"],9231:["US","1","MRAcquisitionPhaseEncodingStepsInPlane"],9232:["US","1","MRAcquisitionPhaseEncodingStepsOutOfPlane"],9234:["UL","1","SpectroscopyAcquisitionPhaseColumns"],9236:["CS","1","CardiacCyclePosition"],9239:["SQ","1","SpecificAbsorptionRateSequence"],9240:["US","1","RFEchoTrainLength"],9241:["US","1","GradientEchoTrainLength"],9250:["CS","1","ArterialSpinLabelingContrast"],9251:["SQ","1","MRArterialSpinLabelingSequence"],9252:["LO","1","ASLTechniqueDescription"],9253:["US","1","ASLSlabNumber"],9254:["FD","1","ASLSlabThickness"],9255:["FD","3","ASLSlabOrientation"],9256:["FD","3","ASLMidSlabPosition"],9257:["CS","1","ASLContext"],9258:["UL","1","ASLPulseTrainDuration"],9259:["CS","1","ASLCrusherFlag"],"925A":["FD","1","ASLCrusherFlowLimit"],"925B":["LO","1","ASLCrusherDescription"],"925C":["CS","1","ASLBolusCutoffFlag"],"925D":["SQ","1","ASLBolusCutoffTimingSequence"],"925E":["LO","1","ASLBolusCutoffTechnique"],"925F":["UL","1","ASLBolusCutoffDelayTime"],9260:["SQ","1","ASLSlabSequence"],9295:["FD","1","ChemicalShiftMinimumIntegrationLimitInppm"],9296:["FD","1","ChemicalShiftMaximumIntegrationLimitInppm"],9297:["CS","1","WaterReferenceAcquisition"],9298:["IS","1","EchoPeakPosition"],9301:["SQ","1","CTAcquisitionTypeSequence"],9302:["CS","1","AcquisitionType"],9303:["FD","1","TubeAngle"],9304:["SQ","1","CTAcquisitionDetailsSequence"],9305:["FD","1","RevolutionTime"],9306:["FD","1","SingleCollimationWidth"],9307:["FD","1","TotalCollimationWidth"],9308:["SQ","1","CTTableDynamicsSequence"],9309:["FD","1","TableSpeed"],9310:["FD","1","TableFeedPerRotation"],9311:["FD","1","SpiralPitchFactor"],9312:["SQ","1","CTGeometrySequence"],9313:["FD","3","DataCollectionCenterPatient"],9314:["SQ","1","CTReconstructionSequence"],9315:["CS","1","ReconstructionAlgorithm"],9316:["CS","1","ConvolutionKernelGroup"],9317:["FD","2","ReconstructionFieldOfView"],9318:["FD","3","ReconstructionTargetCenterPatient"],9319:["FD","1","ReconstructionAngle"],9320:["SH","1","ImageFilter"],9321:["SQ","1","CTExposureSequence"],9322:["FD","2","ReconstructionPixelSpacing"],9323:["CS","1-n","ExposureModulationType"],9324:["FD","1","EstimatedDoseSaving"],9325:["SQ","1","CTXRayDetailsSequence"],9326:["SQ","1","CTPositionSequence"],9327:["FD","1","TablePosition"],9328:["FD","1","ExposureTimeInms"],9329:["SQ","1","CTImageFrameTypeSequence"],9330:["FD","1","XRayTubeCurrentInmA"],9332:["FD","1","ExposureInmAs"],9333:["CS","1","ConstantVolumeFlag"],9334:["CS","1","FluoroscopyFlag"],9335:["FD","1","DistanceSourceToDataCollectionCenter"],9337:["US","1","ContrastBolusAgentNumber"],9338:["SQ","1","ContrastBolusIngredientCodeSequence"],9340:["SQ","1","ContrastAdministrationProfileSequence"],9341:["SQ","1","ContrastBolusUsageSequence"],9342:["CS","1","ContrastBolusAgentAdministered"],9343:["CS","1","ContrastBolusAgentDetected"],9344:["CS","1","ContrastBolusAgentPhase"],9345:["FD","1","CTDIvol"],9346:["SQ","1","CTDIPhantomTypeCodeSequence"],9351:["FL","1","CalciumScoringMassFactorPatient"],9352:["FL","3","CalciumScoringMassFactorDevice"],9353:["FL","1","EnergyWeightingFactor"],9360:["SQ","1","CTAdditionalXRaySourceSequence"],9361:["CS","1","MultienergyCTAcquisition"],9362:["SQ","1","MultienergyCTAcquisitionSequence"],9363:["SQ","1","MultienergyCTProcessingSequence"],9364:["SQ","1","MultienergyCTCharacteristicsSequence"],9365:["SQ","1","MultienergyCTXRaySourceSequence"],9366:["US","1","XRaySourceIndex"],9367:["UC","1","XRaySourceID"],9368:["CS","1","MultienergySourceTechnique"],9369:["DT","1","SourceStartDateTime"],"936A":["DT","1","SourceEndDateTime"],"936B":["US","1","SwitchingPhaseNumber"],"936C":["DS","1","SwitchingPhaseNominalDuration"],"936D":["DS","1","SwitchingPhaseTransitionDuration"],"936E":["DS","1","EffectiveBinEnergy"],"936F":["SQ","1","MultienergyCTXRayDetectorSequence"],9370:["US","1","XRayDetectorIndex"],9371:["UC","1","XRayDetectorID"],9372:["CS","1","MultienergyDetectorType"],9373:["ST","1","XRayDetectorLabel"],9374:["DS","1","NominalMaxEnergy"],9375:["DS","1","NominalMinEnergy"],9376:["US","1-n","ReferencedXRayDetectorIndex"],9377:["US","1-n","ReferencedXRaySourceIndex"],9378:["US","1-n","ReferencedPathIndex"],9379:["SQ","1","MultienergyCTPathSequence"],"937A":["US","1","MultienergyCTPathIndex"],"937B":["UT","1","MultienergyAcquisitionDescription"],"937C":["FD","1","MonoenergeticEnergyEquivalent"],"937D":["SQ","1","MaterialCodeSequence"],"937E":["CS","1","DecompositionMethod"],"937F":["UT","1","DecompositionDescription"],9380:["SQ","1","DecompositionAlgorithmIdentificationSequence"],9381:["SQ","1","DecompositionMaterialSequence"],9382:["SQ","1","MaterialAttenuationSequence"],9383:["DS","1","PhotonEnergy"],9384:["DS","1","XRayMassAttenuationCoefficient"],9401:["SQ","1","ProjectionPixelCalibrationSequence"],9402:["FL","1","DistanceSourceToIsocenter"],9403:["FL","1","DistanceObjectToTableTop"],9404:["FL","2","ObjectPixelSpacingInCenterOfBeam"],9405:["SQ","1","PositionerPositionSequence"],9406:["SQ","1","TablePositionSequence"],9407:["SQ","1","CollimatorShapeSequence"],9410:["CS","1","PlanesInAcquisition"],9412:["SQ","1","XAXRFFrameCharacteristicsSequence"],9417:["SQ","1","FrameAcquisitionSequence"],9420:["CS","1","XRayReceptorType"],9423:["LO","1","AcquisitionProtocolName"],9424:["LT","1","AcquisitionProtocolDescription"],9425:["CS","1","ContrastBolusIngredientOpaque"],9426:["FL","1","DistanceReceptorPlaneToDetectorHousing"],9427:["CS","1","IntensifierActiveShape"],9428:["FL","1-2","IntensifierActiveDimensions"],9429:["FL","2","PhysicalDetectorSize"],9430:["FL","2","PositionOfIsocenterProjection"],9432:["SQ","1","FieldOfViewSequence"],9433:["LO","1","FieldOfViewDescription"],9434:["SQ","1","ExposureControlSensingRegionsSequence"],9435:["CS","1","ExposureControlSensingRegionShape"],9436:["SS","1","ExposureControlSensingRegionLeftVerticalEdge"],9437:["SS","1","ExposureControlSensingRegionRightVerticalEdge"],9438:["SS","1","ExposureControlSensingRegionUpperHorizontalEdge"],9439:["SS","1","ExposureControlSensingRegionLowerHorizontalEdge"],9440:["SS","2","CenterOfCircularExposureControlSensingRegion"],9441:["US","1","RadiusOfCircularExposureControlSensingRegion"],9442:["SS","2-n","VerticesOfThePolygonalExposureControlSensingRegion"],9445:["","",""],9447:["FL","1","ColumnAngulationPatient"],9449:["FL","1","BeamAngle"],9451:["SQ","1","FrameDetectorParametersSequence"],9452:["FL","1","CalculatedAnatomyThickness"],9455:["SQ","1","CalibrationSequence"],9456:["SQ","1","ObjectThicknessSequence"],9457:["CS","1","PlaneIdentification"],9461:["FL","1-2","FieldOfViewDimensionsInFloat"],9462:["SQ","1","IsocenterReferenceSystemSequence"],9463:["FL","1","PositionerIsocenterPrimaryAngle"],9464:["FL","1","PositionerIsocenterSecondaryAngle"],9465:["FL","1","PositionerIsocenterDetectorRotationAngle"],9466:["FL","1","TableXPositionToIsocenter"],9467:["FL","1","TableYPositionToIsocenter"],9468:["FL","1","TableZPositionToIsocenter"],9469:["FL","1","TableHorizontalRotationAngle"],9470:["FL","1","TableHeadTiltAngle"],9471:["FL","1","TableCradleTiltAngle"],9472:["SQ","1","FrameDisplayShutterSequence"],9473:["FL","1","AcquiredImageAreaDoseProduct"],9474:["CS","1","CArmPositionerTabletopRelationship"],9476:["SQ","1","XRayGeometrySequence"],9477:["SQ","1","IrradiationEventIdentificationSequence"],9504:["SQ","1","XRay3DFrameTypeSequence"],9506:["SQ","1","ContributingSourcesSequence"],9507:["SQ","1","XRay3DAcquisitionSequence"],9508:["FL","1","PrimaryPositionerScanArc"],9509:["FL","1","SecondaryPositionerScanArc"],9510:["FL","1","PrimaryPositionerScanStartAngle"],9511:["FL","1","SecondaryPositionerScanStartAngle"],9514:["FL","1","PrimaryPositionerIncrement"],9515:["FL","1","SecondaryPositionerIncrement"],9516:["DT","1","StartAcquisitionDateTime"],9517:["DT","1","EndAcquisitionDateTime"],9518:["SS","1","PrimaryPositionerIncrementSign"],9519:["SS","1","SecondaryPositionerIncrementSign"],9524:["LO","1","ApplicationName"],9525:["LO","1","ApplicationVersion"],9526:["LO","1","ApplicationManufacturer"],9527:["CS","1","AlgorithmType"],9528:["LO","1","AlgorithmDescription"],9530:["SQ","1","XRay3DReconstructionSequence"],9531:["LO","1","ReconstructionDescription"],9538:["SQ","1","PerProjectionAcquisitionSequence"],9541:["SQ","1","DetectorPositionSequence"],9542:["SQ","1","XRayAcquisitionDoseSequence"],9543:["FD","1","XRaySourceIsocenterPrimaryAngle"],9544:["FD","1","XRaySourceIsocenterSecondaryAngle"],9545:["FD","1","BreastSupportIsocenterPrimaryAngle"],9546:["FD","1","BreastSupportIsocenterSecondaryAngle"],9547:["FD","1","BreastSupportXPositionToIsocenter"],9548:["FD","1","BreastSupportYPositionToIsocenter"],9549:["FD","1","BreastSupportZPositionToIsocenter"],9550:["FD","1","DetectorIsocenterPrimaryAngle"],9551:["FD","1","DetectorIsocenterSecondaryAngle"],9552:["FD","1","DetectorXPositionToIsocenter"],9553:["FD","1","DetectorYPositionToIsocenter"],9554:["FD","1","DetectorZPositionToIsocenter"],9555:["SQ","1","XRayGridSequence"],9556:["SQ","1","XRayFilterSequence"],9557:["FD","3","DetectorActiveAreaTLHCPosition"],9558:["FD","6","DetectorActiveAreaOrientation"],9559:["CS","1","PositionerPrimaryAngleDirection"],9601:["SQ","1","DiffusionBMatrixSequence"],9602:["FD","1","DiffusionBValueXX"],9603:["FD","1","DiffusionBValueXY"],9604:["FD","1","DiffusionBValueXZ"],9605:["FD","1","DiffusionBValueYY"],9606:["FD","1","DiffusionBValueYZ"],9607:["FD","1","DiffusionBValueZZ"],9621:["SQ","1","FunctionalMRSequence"],9622:["CS","1","FunctionalSettlingPhaseFramesPresent"],9623:["DT","1","FunctionalSyncPulse"],9624:["CS","1","SettlingPhaseFrame"],9701:["DT","1","DecayCorrectionDateTime"],9715:["FD","1","StartDensityThreshold"],9716:["FD","1","StartRelativeDensityDifferenceThreshold"],9717:["FD","1","StartCardiacTriggerCountThreshold"],9718:["FD","1","StartRespiratoryTriggerCountThreshold"],9719:["FD","1","TerminationCountsThreshold"],9720:["FD","1","TerminationDensityThreshold"],9721:["FD","1","TerminationRelativeDensityThreshold"],9722:["FD","1","TerminationTimeThreshold"],9723:["FD","1","TerminationCardiacTriggerCountThreshold"],9724:["FD","1","TerminationRespiratoryTriggerCountThreshold"],9725:["CS","1","DetectorGeometry"],9726:["FD","1","TransverseDetectorSeparation"],9727:["FD","1","AxialDetectorDimension"],9729:["US","1","RadiopharmaceuticalAgentNumber"],9732:["SQ","1","PETFrameAcquisitionSequence"],9733:["SQ","1","PETDetectorMotionDetailsSequence"],9734:["SQ","1","PETTableDynamicsSequence"],9735:["SQ","1","PETPositionSequence"],9736:["SQ","1","PETFrameCorrectionFactorsSequence"],9737:["SQ","1","RadiopharmaceuticalUsageSequence"],9738:["CS","1","AttenuationCorrectionSource"],9739:["US","1","NumberOfIterations"],9740:["US","1","NumberOfSubsets"],9749:["SQ","1","PETReconstructionSequence"],9751:["SQ","1","PETFrameTypeSequence"],9755:["CS","1","TimeOfFlightInformationUsed"],9756:["CS","1","ReconstructionType"],9758:["CS","1","DecayCorrected"],9759:["CS","1","AttenuationCorrected"],9760:["CS","1","ScatterCorrected"],9761:["CS","1","DeadTimeCorrected"],9762:["CS","1","GantryMotionCorrected"],9763:["CS","1","PatientMotionCorrected"],9764:["CS","1","CountLossNormalizationCorrected"],9765:["CS","1","RandomsCorrected"],9766:["CS","1","NonUniformRadialSamplingCorrected"],9767:["CS","1","SensitivityCalibrated"],9768:["CS","1","DetectorNormalizationCorrection"],9769:["CS","1","IterativeReconstructionMethod"],9770:["CS","1","AttenuationCorrectionTemporalRelationship"],9771:["SQ","1","PatientPhysiologicalStateSequence"],9772:["SQ","1","PatientPhysiologicalStateCodeSequence"],9801:["FD","1-n","DepthsOfFocus"],9803:["SQ","1","ExcludedIntervalsSequence"],9804:["DT","1","ExclusionStartDateTime"],9805:["FD","1","ExclusionDuration"],9806:["SQ","1","USImageDescriptionSequence"],9807:["SQ","1","ImageDataTypeSequence"],9808:["CS","1","DataType"],9809:["SQ","1","TransducerScanPatternCodeSequence"],"980B":["CS","1","AliasedDataType"],"980C":["CS","1","PositionMeasuringDeviceUsed"],"980D":["SQ","1","TransducerGeometryCodeSequence"],"980E":["SQ","1","TransducerBeamSteeringCodeSequence"],"980F":["SQ","1","TransducerApplicationCodeSequence"],9810:["xs","1","ZeroVelocityPixelValue"],9900:["LO","1","ReferenceLocationLabel"],9901:["UT","1","ReferenceLocationDescription"],9902:["SQ","1","ReferenceBasisCodeSequence"],9903:["SQ","1","ReferenceGeometryCodeSequence"],9904:["DS","1","OffsetDistance"],9905:["CS","1","OffsetDirection"],9906:["SQ","1","PotentialScheduledProtocolCodeSequence"],9907:["SQ","1","PotentialRequestedProcedureCodeSequence"],9908:["UC","1-n","PotentialReasonsForProcedure"],9909:["SQ","1","PotentialReasonsForProcedureCodeSequence"],"990A":["UC","1-n","PotentialDiagnosticTasks"],"990B":["SQ","1","ContraindicationsCodeSequence"],"990C":["SQ","1","ReferencedDefinedProtocolSequence"],"990D":["SQ","1","ReferencedPerformedProtocolSequence"],"990E":["SQ","1","PredecessorProtocolSequence"],"990F":["UT","1","ProtocolPlanningInformation"],9910:["UT","1","ProtocolDesignRationale"],9911:["SQ","1","PatientSpecificationSequence"],9912:["SQ","1","ModelSpecificationSequence"],9913:["SQ","1","ParametersSpecificationSequence"],9914:["SQ","1","InstructionSequence"],9915:["US","1","InstructionIndex"],9916:["LO","1","InstructionText"],9917:["UT","1","InstructionDescription"],9918:["CS","1","InstructionPerformedFlag"],9919:["DT","1","InstructionPerformedDateTime"],"991A":["UT","1","InstructionPerformanceComment"],"991B":["SQ","1","PatientPositioningInstructionSequence"],"991C":["SQ","1","PositioningMethodCodeSequence"],"991D":["SQ","1","PositioningLandmarkSequence"],"991E":["UI","1","TargetFrameOfReferenceUID"],"991F":["SQ","1","AcquisitionProtocolElementSpecificationSequence"],9920:["SQ","1","AcquisitionProtocolElementSequence"],9921:["US","1","ProtocolElementNumber"],9922:["LO","1","ProtocolElementName"],9923:["UT","1","ProtocolElementCharacteristicsSummary"],9924:["UT","1","ProtocolElementPurpose"],9930:["CS","1","AcquisitionMotion"],9931:["SQ","1","AcquisitionStartLocationSequence"],9932:["SQ","1","AcquisitionEndLocationSequence"],9933:["SQ","1","ReconstructionProtocolElementSpecificationSequence"],9934:["SQ","1","ReconstructionProtocolElementSequence"],9935:["SQ","1","StorageProtocolElementSpecificationSequence"],9936:["SQ","1","StorageProtocolElementSequence"],9937:["LO","1","RequestedSeriesDescription"],9938:["US","1-n","SourceAcquisitionProtocolElementNumber"],9939:["US","1-n","SourceAcquisitionBeamNumber"],"993A":["US","1-n","SourceReconstructionProtocolElementNumber"],"993B":["SQ","1","ReconstructionStartLocationSequence"],"993C":["SQ","1","ReconstructionEndLocationSequence"],"993D":["SQ","1","ReconstructionAlgorithmSequence"],"993E":["SQ","1","ReconstructionTargetCenterLocationSequence"],9941:["UT","1","ImageFilterDescription"],9942:["FD","1","CTDIvolNotificationTrigger"],9943:["FD","1","DLPNotificationTrigger"],9944:["CS","1","AutoKVPSelectionType"],9945:["FD","1","AutoKVPUpperBound"],9946:["FD","1","AutoKVPLowerBound"],9947:["CS","1","ProtocolDefinedPatientPosition"],A001:["SQ","1","ContributingEquipmentSequence"],A002:["DT","1","ContributionDateTime"],A003:["ST","1","ContributionDescription"]},"0020":{"0000":["UL","1","GenericGroupLength"],"000D":["UI","1","StudyInstanceUID"],"000E":["UI","1","SeriesInstanceUID"],"0010":["SH","1","StudyID"],"0011":["IS","1","SeriesNumber"],"0012":["IS","1","AcquisitionNumber"],"0013":["IS","1","InstanceNumber"],"0014":["IS","1","IsotopeNumber"],"0015":["IS","1","PhaseNumber"],"0016":["IS","1","IntervalNumber"],"0017":["IS","1","TimeSlotNumber"],"0018":["IS","1","AngleNumber"],"0019":["IS","1","ItemNumber"],"0020":["CS","2","PatientOrientation"],"0022":["IS","1","OverlayNumber"],"0024":["IS","1","CurveNumber"],"0026":["IS","1","LUTNumber"],"0030":["DS","3","ImagePosition"],"0032":["DS","3","ImagePositionPatient"],"0035":["DS","6","ImageOrientation"],"0037":["DS","6","ImageOrientationPatient"],"0050":["DS","1","Location"],"0052":["UI","1","FrameOfReferenceUID"],"0060":["CS","1","Laterality"],"0062":["CS","1","ImageLaterality"],"0070":["LO","1","ImageGeometryType"],"0080":["CS","1-n","MaskingImage"],"00AA":["IS","1","ReportNumber"],"0100":["IS","1","TemporalPositionIdentifier"],"0105":["IS","1","NumberOfTemporalPositions"],"0110":["DS","1","TemporalResolution"],"0200":["UI","1","SynchronizationFrameOfReferenceUID"],"0242":["UI","1","SOPInstanceUIDOfConcatenationSource"],1e3:["IS","1","SeriesInStudy"],1001:["IS","1","AcquisitionsInSeries"],1002:["IS","1","ImagesInAcquisition"],1003:["IS","1","ImagesInSeries"],1004:["IS","1","AcquisitionsInStudy"],1005:["IS","1","ImagesInStudy"],1020:["LO","1-n","Reference"],"103F":["LO","1","TargetPositionReferenceIndicator"],1040:["LO","1","PositionReferenceIndicator"],1041:["DS","1","SliceLocation"],1070:["IS","1-n","OtherStudyNumbers"],1200:["IS","1","NumberOfPatientRelatedStudies"],1202:["IS","1","NumberOfPatientRelatedSeries"],1204:["IS","1","NumberOfPatientRelatedInstances"],1206:["IS","1","NumberOfStudyRelatedSeries"],1208:["IS","1","NumberOfStudyRelatedInstances"],1209:["IS","1","NumberOfSeriesRelatedInstances"],3100:["CS","1-n","SourceImageIDs"],3401:["CS","1","ModifyingDeviceID"],3402:["CS","1","ModifiedImageID"],3403:["DA","1","ModifiedImageDate"],3404:["LO","1","ModifyingDeviceManufacturer"],3405:["TM","1","ModifiedImageTime"],3406:["LO","1","ModifiedImageDescription"],4e3:["LT","1","ImageComments"],5e3:["AT","1-n","OriginalImageIdentification"],5002:["LO","1-n","OriginalImageIdentificationNomenclature"],9056:["SH","1","StackID"],9057:["UL","1","InStackPositionNumber"],9071:["SQ","1","FrameAnatomySequence"],9072:["CS","1","FrameLaterality"],9111:["SQ","1","FrameContentSequence"],9113:["SQ","1","PlanePositionSequence"],9116:["SQ","1","PlaneOrientationSequence"],9128:["UL","1","TemporalPositionIndex"],9153:["FD","1","NominalCardiacTriggerDelayTime"],9154:["FL","1","NominalCardiacTriggerTimePriorToRPeak"],9155:["FL","1","ActualCardiacTriggerTimePriorToRPeak"],9156:["US","1","FrameAcquisitionNumber"],9157:["UL","1-n","DimensionIndexValues"],9158:["LT","1","FrameComments"],9161:["UI","1","ConcatenationUID"],9162:["US","1","InConcatenationNumber"],9163:["US","1","InConcatenationTotalNumber"],9164:["UI","1","DimensionOrganizationUID"],9165:["AT","1","DimensionIndexPointer"],9167:["AT","1","FunctionalGroupPointer"],9170:["SQ","1","UnassignedSharedConvertedAttributesSequence"],9171:["SQ","1","UnassignedPerFrameConvertedAttributesSequence"],9172:["SQ","1","ConversionSourceAttributesSequence"],9213:["LO","1","DimensionIndexPrivateCreator"],9221:["SQ","1","DimensionOrganizationSequence"],9222:["SQ","1","DimensionIndexSequence"],9228:["UL","1","ConcatenationFrameOffsetNumber"],9238:["LO","1","FunctionalGroupPrivateCreator"],9241:["FL","1","NominalPercentageOfCardiacPhase"],9245:["FL","1","NominalPercentageOfRespiratoryPhase"],9246:["FL","1","StartingRespiratoryAmplitude"],9247:["CS","1","StartingRespiratoryPhase"],9248:["FL","1","EndingRespiratoryAmplitude"],9249:["CS","1","EndingRespiratoryPhase"],9250:["CS","1","RespiratoryTriggerType"],9251:["FD","1","RRIntervalTimeNominal"],9252:["FD","1","ActualCardiacTriggerDelayTime"],9253:["SQ","1","RespiratorySynchronizationSequence"],9254:["FD","1","RespiratoryIntervalTime"],9255:["FD","1","NominalRespiratoryTriggerDelayTime"],9256:["FD","1","RespiratoryTriggerDelayThreshold"],9257:["FD","1","ActualRespiratoryTriggerDelayTime"],9301:["FD","3","ImagePositionVolume"],9302:["FD","6","ImageOrientationVolume"],9307:["CS","1","UltrasoundAcquisitionGeometry"],9308:["FD","3","ApexPosition"],9309:["FD","16","VolumeToTransducerMappingMatrix"],"930A":["FD","16","VolumeToTableMappingMatrix"],"930B":["CS","1","VolumeToTransducerRelationship"],"930C":["CS","1","PatientFrameOfReferenceSource"],"930D":["FD","1","TemporalPositionTimeOffset"],"930E":["SQ","1","PlanePositionVolumeSequence"],"930F":["SQ","1","PlaneOrientationVolumeSequence"],9310:["SQ","1","TemporalPositionSequence"],9311:["CS","1","DimensionOrganizationType"],9312:["UI","1","VolumeFrameOfReferenceUID"],9313:["UI","1","TableFrameOfReferenceUID"],9421:["LO","1","DimensionDescriptionLabel"],9450:["SQ","1","PatientOrientationInFrameSequence"],9453:["LO","1","FrameLabel"],9518:["US","1-n","AcquisitionIndex"],9529:["SQ","1","ContributingSOPInstancesReferenceSequence"],9536:["US","1","ReconstructionIndex"]},"0022":{"0000":["UL","1","GenericGroupLength"],"0001":["US","1","LightPathFilterPassThroughWavelength"],"0002":["US","2","LightPathFilterPassBand"],"0003":["US","1","ImagePathFilterPassThroughWavelength"],"0004":["US","2","ImagePathFilterPassBand"],"0005":["CS","1","PatientEyeMovementCommanded"],"0006":["SQ","1","PatientEyeMovementCommandCodeSequence"],"0007":["FL","1","SphericalLensPower"],"0008":["FL","1","CylinderLensPower"],"0009":["FL","1","CylinderAxis"],"000A":["FL","1","EmmetropicMagnification"],"000B":["FL","1","IntraOcularPressure"],"000C":["FL","1","HorizontalFieldOfView"],"000D":["CS","1","PupilDilated"],"000E":["FL","1","DegreeOfDilation"],"0010":["FL","1","StereoBaselineAngle"],"0011":["FL","1","StereoBaselineDisplacement"],"0012":["FL","1","StereoHorizontalPixelOffset"],"0013":["FL","1","StereoVerticalPixelOffset"],"0014":["FL","1","StereoRotation"],"0015":["SQ","1","AcquisitionDeviceTypeCodeSequence"],"0016":["SQ","1","IlluminationTypeCodeSequence"],"0017":["SQ","1","LightPathFilterTypeStackCodeSequence"],"0018":["SQ","1","ImagePathFilterTypeStackCodeSequence"],"0019":["SQ","1","LensesCodeSequence"],"001A":["SQ","1","ChannelDescriptionCodeSequence"],"001B":["SQ","1","RefractiveStateSequence"],"001C":["SQ","1","MydriaticAgentCodeSequence"],"001D":["SQ","1","RelativeImagePositionCodeSequence"],"001E":["FL","1","CameraAngleOfView"],"0020":["SQ","1","StereoPairsSequence"],"0021":["SQ","1","LeftImageSequence"],"0022":["SQ","1","RightImageSequence"],"0028":["CS","1","StereoPairsPresent"],"0030":["FL","1","AxialLengthOfTheEye"],"0031":["SQ","1","OphthalmicFrameLocationSequence"],"0032":["FL","2-2n","ReferenceCoordinates"],"0035":["FL","1","DepthSpatialResolution"],"0036":["FL","1","MaximumDepthDistortion"],"0037":["FL","1","AlongScanSpatialResolution"],"0038":["FL","1","MaximumAlongScanDistortion"],"0039":["CS","1","OphthalmicImageOrientation"],"0041":["FL","1","DepthOfTransverseImage"],"0042":["SQ","1","MydriaticAgentConcentrationUnitsSequence"],"0048":["FL","1","AcrossScanSpatialResolution"],"0049":["FL","1","MaximumAcrossScanDistortion"],"004E":["DS","1","MydriaticAgentConcentration"],"0055":["FL","1","IlluminationWaveLength"],"0056":["FL","1","IlluminationPower"],"0057":["FL","1","IlluminationBandwidth"],"0058":["SQ","1","MydriaticAgentSequence"],1007:["SQ","1","OphthalmicAxialMeasurementsRightEyeSequence"],1008:["SQ","1","OphthalmicAxialMeasurementsLeftEyeSequence"],1009:["CS","1","OphthalmicAxialMeasurementsDeviceType"],1010:["CS","1","OphthalmicAxialLengthMeasurementsType"],1012:["SQ","1","OphthalmicAxialLengthSequence"],1019:["FL","1","OphthalmicAxialLength"],1024:["SQ","1","LensStatusCodeSequence"],1025:["SQ","1","VitreousStatusCodeSequence"],1028:["SQ","1","IOLFormulaCodeSequence"],1029:["LO","1","IOLFormulaDetail"],1033:["FL","1","KeratometerIndex"],1035:["SQ","1","SourceOfOphthalmicAxialLengthCodeSequence"],1036:["SQ","1","SourceOfCornealSizeDataCodeSequence"],1037:["FL","1","TargetRefraction"],1039:["CS","1","RefractiveProcedureOccurred"],1040:["SQ","1","RefractiveSurgeryTypeCodeSequence"],1044:["SQ","1","OphthalmicUltrasoundMethodCodeSequence"],1045:["SQ","1","SurgicallyInducedAstigmatismSequence"],1046:["CS","1","TypeOfOpticalCorrection"],1047:["SQ","1","ToricIOLPowerSequence"],1048:["SQ","1","PredictedToricErrorSequence"],1049:["CS","1","PreSelectedForImplantation"],"104A":["SQ","1","ToricIOLPowerForExactEmmetropiaSequence"],"104B":["SQ","1","ToricIOLPowerForExactTargetRefractionSequence"],1050:["SQ","1","OphthalmicAxialLengthMeasurementsSequence"],1053:["FL","1","IOLPower"],1054:["FL","1","PredictedRefractiveError"],1059:["FL","1","OphthalmicAxialLengthVelocity"],1065:["LO","1","LensStatusDescription"],1066:["LO","1","VitreousStatusDescription"],1090:["SQ","1","IOLPowerSequence"],1092:["SQ","1","LensConstantSequence"],1093:["LO","1","IOLManufacturer"],1094:["LO","1","LensConstantDescription"],1095:["LO","1","ImplantName"],1096:["SQ","1","KeratometryMeasurementTypeCodeSequence"],1097:["LO","1","ImplantPartNumber"],1100:["SQ","1","ReferencedOphthalmicAxialMeasurementsSequence"],1101:["SQ","1","OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence"],1103:["SQ","1","RefractiveErrorBeforeRefractiveSurgeryCodeSequence"],1121:["FL","1","IOLPowerForExactEmmetropia"],1122:["FL","1","IOLPowerForExactTargetRefraction"],1125:["SQ","1","AnteriorChamberDepthDefinitionCodeSequence"],1127:["SQ","1","LensThicknessSequence"],1128:["SQ","1","AnteriorChamberDepthSequence"],"112A":["SQ","1","CalculationCommentSequence"],"112B":["CS","1","CalculationCommentType"],"112C":["LT","1","CalculationComment"],1130:["FL","1","LensThickness"],1131:["FL","1","AnteriorChamberDepth"],1132:["SQ","1","SourceOfLensThicknessDataCodeSequence"],1133:["SQ","1","SourceOfAnteriorChamberDepthDataCodeSequence"],1134:["SQ","1","SourceOfRefractiveMeasurementsSequence"],1135:["SQ","1","SourceOfRefractiveMeasurementsCodeSequence"],1140:["CS","1","OphthalmicAxialLengthMeasurementModified"],1150:["SQ","1","OphthalmicAxialLengthDataSourceCodeSequence"],1153:["SQ","1","OphthalmicAxialLengthAcquisitionMethodCodeSequence"],1155:["FL","1","SignalToNoiseRatio"],1159:["LO","1","OphthalmicAxialLengthDataSourceDescription"],1210:["SQ","1","OphthalmicAxialLengthMeasurementsTotalLengthSequence"],1211:["SQ","1","OphthalmicAxialLengthMeasurementsSegmentalLengthSequence"],1212:["SQ","1","OphthalmicAxialLengthMeasurementsLengthSummationSequence"],1220:["SQ","1","UltrasoundOphthalmicAxialLengthMeasurementsSequence"],1225:["SQ","1","OpticalOphthalmicAxialLengthMeasurementsSequence"],1230:["SQ","1","UltrasoundSelectedOphthalmicAxialLengthSequence"],1250:["SQ","1","OphthalmicAxialLengthSelectionMethodCodeSequence"],1255:["SQ","1","OpticalSelectedOphthalmicAxialLengthSequence"],1257:["SQ","1","SelectedSegmentalOphthalmicAxialLengthSequence"],1260:["SQ","1","SelectedTotalOphthalmicAxialLengthSequence"],1262:["SQ","1","OphthalmicAxialLengthQualityMetricSequence"],1265:["SQ","1","OphthalmicAxialLengthQualityMetricTypeCodeSequence"],1273:["LO","1","OphthalmicAxialLengthQualityMetricTypeDescription"],1300:["SQ","1","IntraocularLensCalculationsRightEyeSequence"],1310:["SQ","1","IntraocularLensCalculationsLeftEyeSequence"],1330:["SQ","1","ReferencedOphthalmicAxialLengthMeasurementQCImageSequence"],1415:["CS","1","OphthalmicMappingDeviceType"],1420:["SQ","1","AcquisitionMethodCodeSequence"],1423:["SQ","1","AcquisitionMethodAlgorithmSequence"],1436:["SQ","1","OphthalmicThicknessMapTypeCodeSequence"],1443:["SQ","1","OphthalmicThicknessMappingNormalsSequence"],1445:["SQ","1","RetinalThicknessDefinitionCodeSequence"],1450:["SQ","1","PixelValueMappingToCodedConceptSequence"],1452:["xs","1","MappedPixelValue"],1454:["LO","1","PixelValueMappingExplanation"],1458:["SQ","1","OphthalmicThicknessMapQualityThresholdSequence"],1460:["FL","1","OphthalmicThicknessMapThresholdQualityRating"],1463:["FL","2","AnatomicStructureReferencePoint"],1465:["SQ","1","RegistrationToLocalizerSequence"],1466:["CS","1","RegisteredLocalizerUnits"],1467:["FL","2","RegisteredLocalizerTopLeftHandCorner"],1468:["FL","2","RegisteredLocalizerBottomRightHandCorner"],1470:["SQ","1","OphthalmicThicknessMapQualityRatingSequence"],1472:["SQ","1","RelevantOPTAttributesSequence"],1512:["SQ","1","TransformationMethodCodeSequence"],1513:["SQ","1","TransformationAlgorithmSequence"],1515:["CS","1","OphthalmicAxialLengthMethod"],1517:["FL","1","OphthalmicFOV"],1518:["SQ","1","TwoDimensionalToThreeDimensionalMapSequence"],1525:["SQ","1","WideFieldOphthalmicPhotographyQualityRatingSequence"],1526:["SQ","1","WideFieldOphthalmicPhotographyQualityThresholdSequence"],1527:["FL","1","WideFieldOphthalmicPhotographyThresholdQualityRating"],1528:["FL","1","XCoordinatesCenterPixelViewAngle"],1529:["FL","1","YCoordinatesCenterPixelViewAngle"],1530:["UL","1","NumberOfMapPoints"],1531:["OF","1","TwoDimensionalToThreeDimensionalMapData"],1612:["SQ","1","DerivationAlgorithmSequence"],1615:["SQ","1","OphthalmicImageTypeCodeSequence"],1616:["LO","1","OphthalmicImageTypeDescription"],1618:["SQ","1","ScanPatternTypeCodeSequence"],1620:["SQ","1","ReferencedSurfaceMeshIdentificationSequence"],1622:["CS","1","OphthalmicVolumetricPropertiesFlag"],1624:["FL","1","OphthalmicAnatomicReferencePointXCoordinate"],1626:["FL","1","OphthalmicAnatomicReferencePointYCoordinate"],1628:["SQ","1","OphthalmicEnFaceImageQualityRatingSequence"],1630:["DS","1","QualityThreshold"],1640:["SQ","1","OCTBscanAnalysisAcquisitionParametersSequence"],1642:["UL","1","NumberOfBscansPerFrame"],1643:["FL","1","BscanSlabThickness"],1644:["FL","1","DistanceBetweenBscanSlabs"],1645:["FL","1","BscanCycleTime"],1646:["FL","1-n","BscanCycleTimeVector"],1649:["FL","1","AscanRate"],1650:["FL","1","BscanRate"],1658:["UL","1","SurfaceMeshZPixelOffset"]},"0024":{"0000":["UL","1","GenericGroupLength"],"0010":["FL","1","VisualFieldHorizontalExtent"],"0011":["FL","1","VisualFieldVerticalExtent"],"0012":["CS","1","VisualFieldShape"],"0016":["SQ","1","ScreeningTestModeCodeSequence"],"0018":["FL","1","MaximumStimulusLuminance"],"0020":["FL","1","BackgroundLuminance"],"0021":["SQ","1","StimulusColorCodeSequence"],"0024":["SQ","1","BackgroundIlluminationColorCodeSequence"],"0025":["FL","1","StimulusArea"],"0028":["FL","1","StimulusPresentationTime"],"0032":["SQ","1","FixationSequence"],"0033":["SQ","1","FixationMonitoringCodeSequence"],"0034":["SQ","1","VisualFieldCatchTrialSequence"],"0035":["US","1","FixationCheckedQuantity"],"0036":["US","1","PatientNotProperlyFixatedQuantity"],"0037":["CS","1","PresentedVisualStimuliDataFlag"],"0038":["US","1","NumberOfVisualStimuli"],"0039":["CS","1","ExcessiveFixationLossesDataFlag"],"0040":["CS","1","ExcessiveFixationLosses"],"0042":["US","1","StimuliRetestingQuantity"],"0044":["LT","1","CommentsOnPatientPerformanceOfVisualField"],"0045":["CS","1","FalseNegativesEstimateFlag"],"0046":["FL","1","FalseNegativesEstimate"],"0048":["US","1","NegativeCatchTrialsQuantity"],"0050":["US","1","FalseNegativesQuantity"],"0051":["CS","1","ExcessiveFalseNegativesDataFlag"],"0052":["CS","1","ExcessiveFalseNegatives"],"0053":["CS","1","FalsePositivesEstimateFlag"],"0054":["FL","1","FalsePositivesEstimate"],"0055":["CS","1","CatchTrialsDataFlag"],"0056":["US","1","PositiveCatchTrialsQuantity"],"0057":["CS","1","TestPointNormalsDataFlag"],"0058":["SQ","1","TestPointNormalsSequence"],"0059":["CS","1","GlobalDeviationProbabilityNormalsFlag"],"0060":["US","1","FalsePositivesQuantity"],"0061":["CS","1","ExcessiveFalsePositivesDataFlag"],"0062":["CS","1","ExcessiveFalsePositives"],"0063":["CS","1","VisualFieldTestNormalsFlag"],"0064":["SQ","1","ResultsNormalsSequence"],"0065":["SQ","1","AgeCorrectedSensitivityDeviationAlgorithmSequence"],"0066":["FL","1","GlobalDeviationFromNormal"],"0067":["SQ","1","GeneralizedDefectSensitivityDeviationAlgorithmSequence"],"0068":["FL","1","LocalizedDeviationFromNormal"],"0069":["LO","1","PatientReliabilityIndicator"],"0070":["FL","1","VisualFieldMeanSensitivity"],"0071":["FL","1","GlobalDeviationProbability"],"0072":["CS","1","LocalDeviationProbabilityNormalsFlag"],"0073":["FL","1","LocalizedDeviationProbability"],"0074":["CS","1","ShortTermFluctuationCalculated"],"0075":["FL","1","ShortTermFluctuation"],"0076":["CS","1","ShortTermFluctuationProbabilityCalculated"],"0077":["FL","1","ShortTermFluctuationProbability"],"0078":["CS","1","CorrectedLocalizedDeviationFromNormalCalculated"],"0079":["FL","1","CorrectedLocalizedDeviationFromNormal"],"0080":["CS","1","CorrectedLocalizedDeviationFromNormalProbabilityCalculated"],"0081":["FL","1","CorrectedLocalizedDeviationFromNormalProbability"],"0083":["SQ","1","GlobalDeviationProbabilitySequence"],"0085":["SQ","1","LocalizedDeviationProbabilitySequence"],"0086":["CS","1","FovealSensitivityMeasured"],"0087":["FL","1","FovealSensitivity"],"0088":["FL","1","VisualFieldTestDuration"],"0089":["SQ","1","VisualFieldTestPointSequence"],"0090":["FL","1","VisualFieldTestPointXCoordinate"],"0091":["FL","1","VisualFieldTestPointYCoordinate"],"0092":["FL","1","AgeCorrectedSensitivityDeviationValue"],"0093":["CS","1","StimulusResults"],"0094":["FL","1","SensitivityValue"],"0095":["CS","1","RetestStimulusSeen"],"0096":["FL","1","RetestSensitivityValue"],"0097":["SQ","1","VisualFieldTestPointNormalsSequence"],"0098":["FL","1","QuantifiedDefect"],"0100":["FL","1","AgeCorrectedSensitivityDeviationProbabilityValue"],"0102":["CS","1","GeneralizedDefectCorrectedSensitivityDeviationFlag"],"0103":["FL","1","GeneralizedDefectCorrectedSensitivityDeviationValue"],"0104":["FL","1","GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue"],"0105":["FL","1","MinimumSensitivityValue"],"0106":["CS","1","BlindSpotLocalized"],"0107":["FL","1","BlindSpotXCoordinate"],"0108":["FL","1","BlindSpotYCoordinate"],"0110":["SQ","1","VisualAcuityMeasurementSequence"],"0112":["SQ","1","RefractiveParametersUsedOnPatientSequence"],"0113":["CS","1","MeasurementLaterality"],"0114":["SQ","1","OphthalmicPatientClinicalInformationLeftEyeSequence"],"0115":["SQ","1","OphthalmicPatientClinicalInformationRightEyeSequence"],"0117":["CS","1","FovealPointNormativeDataFlag"],"0118":["FL","1","FovealPointProbabilityValue"],"0120":["CS","1","ScreeningBaselineMeasured"],"0122":["SQ","1","ScreeningBaselineMeasuredSequence"],"0124":["CS","1","ScreeningBaselineType"],"0126":["FL","1","ScreeningBaselineValue"],"0202":["LO","1","AlgorithmSource"],"0306":["LO","1","DataSetName"],"0307":["LO","1","DataSetVersion"],"0308":["LO","1","DataSetSource"],"0309":["LO","1","DataSetDescription"],"0317":["SQ","1","VisualFieldTestReliabilityGlobalIndexSequence"],"0320":["SQ","1","VisualFieldGlobalResultsIndexSequence"],"0325":["SQ","1","DataObservationSequence"],"0338":["CS","1","IndexNormalsFlag"],"0341":["FL","1","IndexProbability"],"0344":["SQ","1","IndexProbabilitySequence"]},"0028":{"0000":["UL","1","GenericGroupLength"],"0002":["US","1","SamplesPerPixel"],"0003":["US","1","SamplesPerPixelUsed"],"0004":["CS","1","PhotometricInterpretation"],"0005":["US","1","ImageDimensions"],"0006":["US","1","PlanarConfiguration"],"0008":["IS","1","NumberOfFrames"],"0009":["AT","1-n","FrameIncrementPointer"],"000A":["AT","1-n","FrameDimensionPointer"],"0010":["US","1","Rows"],"0011":["US","1","Columns"],"0012":["US","1","Planes"],"0014":["US","1","UltrasoundColorDataPresent"],"0020":["","",""],"0030":["DS","2","PixelSpacing"],"0031":["DS","2","ZoomFactor"],"0032":["DS","2","ZoomCenter"],"0034":["IS","2","PixelAspectRatio"],"0040":["CS","1","ImageFormat"],"0050":["LO","1-n","ManipulatedImage"],"0051":["CS","1-n","CorrectedImage"],"005F":["LO","1","CompressionRecognitionCode"],"0060":["CS","1","CompressionCode"],"0061":["SH","1","CompressionOriginator"],"0062":["LO","1","CompressionLabel"],"0063":["SH","1","CompressionDescription"],"0065":["CS","1-n","CompressionSequence"],"0066":["AT","1-n","CompressionStepPointers"],"0068":["US","1","RepeatInterval"],"0069":["US","1","BitsGrouped"],"0070":["US","1-n","PerimeterTable"],"0071":["xs","1","PerimeterValue"],"0080":["US","1","PredictorRows"],"0081":["US","1","PredictorColumns"],"0082":["US","1-n","PredictorConstants"],"0090":["CS","1","BlockedPixels"],"0091":["US","1","BlockRows"],"0092":["US","1","BlockColumns"],"0093":["US","1","RowOverlap"],"0094":["US","1","ColumnOverlap"],"0100":["US","1","BitsAllocated"],"0101":["US","1","BitsStored"],"0102":["US","1","HighBit"],"0103":["US","1","PixelRepresentation"],"0104":["xs","1","SmallestValidPixelValue"],"0105":["xs","1","LargestValidPixelValue"],"0106":["xs","1","SmallestImagePixelValue"],"0107":["xs","1","LargestImagePixelValue"],"0108":["xs","1","SmallestPixelValueInSeries"],"0109":["xs","1","LargestPixelValueInSeries"],"0110":["xs","1","SmallestImagePixelValueInPlane"],"0111":["xs","1","LargestImagePixelValueInPlane"],"0120":["xs","1","PixelPaddingValue"],"0121":["xs","1","PixelPaddingRangeLimit"],"0122":["FL","1","FloatPixelPaddingValue"],"0123":["FD","1","DoubleFloatPixelPaddingValue"],"0124":["FL","1","FloatPixelPaddingRangeLimit"],"0125":["FD","1","DoubleFloatPixelPaddingRangeLimit"],"0200":["US","1","ImageLocation"],"0300":["CS","1","QualityControlImage"],"0301":["CS","1","BurnedInAnnotation"],"0302":["CS","1","RecognizableVisualFeatures"],"0303":["CS","1","LongitudinalTemporalInformationModified"],"0304":["UI","1","ReferencedColorPaletteInstanceUID"],"0400":["LO","1","TransformLabel"],"0401":["LO","1","TransformVersionNumber"],"0402":["US","1","NumberOfTransformSteps"],"0403":["LO","1-n","SequenceOfCompressedData"],"0404":["AT","1-n","DetailsOfCoefficients"],"04x0":["US","1","RowsForNthOrderCoefficients"],"04x1":["US","1","ColumnsForNthOrderCoefficients"],"04x2":["LO","1-n","CoefficientCoding"],"04x3":["AT","1-n","CoefficientCodingPointers"],"0700":["LO","1","DCTLabel"],"0701":["CS","1-n","DataBlockDescription"],"0702":["AT","1-n","DataBlock"],"0710":["US","1","NormalizationFactorFormat"],"0720":["US","1","ZonalMapNumberFormat"],"0721":["AT","1-n","ZonalMapLocation"],"0722":["US","1","ZonalMapFormat"],"0730":["US","1","AdaptiveMapFormat"],"0740":["US","1","CodeNumberFormat"],"08x0":["CS","1-n","CodeLabel"],"08x2":["US","1","NumberOfTables"],"08x3":["AT","1-n","CodeTableLocation"],"08x4":["US","1","BitsForCodeWord"],"08x8":["AT","1-n","ImageDataLocation"],"0A02":["CS","1","PixelSpacingCalibrationType"],"0A04":["LO","1","PixelSpacingCalibrationDescription"],1040:["CS","1","PixelIntensityRelationship"],1041:["SS","1","PixelIntensityRelationshipSign"],1050:["DS","1-n","WindowCenter"],1051:["DS","1-n","WindowWidth"],1052:["DS","1","RescaleIntercept"],1053:["DS","1","RescaleSlope"],1054:["LO","1","RescaleType"],1055:["LO","1-n","WindowCenterWidthExplanation"],1056:["CS","1","VOILUTFunction"],1080:["CS","1","GrayScale"],1090:["CS","1","RecommendedViewingMode"],1100:["xs","3","GrayLookupTableDescriptor"],1101:["xs","3","RedPaletteColorLookupTableDescriptor"],1102:["xs","3","GreenPaletteColorLookupTableDescriptor"],1103:["xs","3","BluePaletteColorLookupTableDescriptor"],1104:["US","3","AlphaPaletteColorLookupTableDescriptor"],1111:["xs","4","LargeRedPaletteColorLookupTableDescriptor"],1112:["xs","4","LargeGreenPaletteColorLookupTableDescriptor"],1113:["xs","4","LargeBluePaletteColorLookupTableDescriptor"],1199:["UI","1","PaletteColorLookupTableUID"],1200:["xs","1-n or 1","GrayLookupTableData"],1201:["OW","1","RedPaletteColorLookupTableData"],1202:["OW","1","GreenPaletteColorLookupTableData"],1203:["OW","1","BluePaletteColorLookupTableData"],1204:["OW","1","AlphaPaletteColorLookupTableData"],1211:["OW","1","LargeRedPaletteColorLookupTableData"],1212:["OW","1","LargeGreenPaletteColorLookupTableData"],1213:["OW","1","LargeBluePaletteColorLookupTableData"],1214:["UI","1","LargePaletteColorLookupTableUID"],1221:["OW","1","SegmentedRedPaletteColorLookupTableData"],1222:["OW","1","SegmentedGreenPaletteColorLookupTableData"],1223:["OW","1","SegmentedBluePaletteColorLookupTableData"],1224:["OW","1","SegmentedAlphaPaletteColorLookupTableData"],1230:["SQ","1","StoredValueColorRangeSequence"],1231:["FD","1","MinimumStoredValueMapped"],1232:["FD","1","MaximumStoredValueMapped"],1300:["CS","1","BreastImplantPresent"],1350:["CS","1","PartialView"],1351:["ST","1","PartialViewDescription"],1352:["SQ","1","PartialViewCodeSequence"],"135A":["CS","1","SpatialLocationsPreserved"],1401:["SQ","1","DataFrameAssignmentSequence"],1402:["CS","1","DataPathAssignment"],1403:["US","1","BitsMappedToColorLookupTable"],1404:["SQ","1","BlendingLUT1Sequence"],1405:["CS","1","BlendingLUT1TransferFunction"],1406:["FD","1","BlendingWeightConstant"],1407:["US","3","BlendingLookupTableDescriptor"],1408:["OW","1","BlendingLookupTableData"],"140B":["SQ","1","EnhancedPaletteColorLookupTableSequence"],"140C":["SQ","1","BlendingLUT2Sequence"],"140D":["CS","1","BlendingLUT2TransferFunction"],"140E":["CS","1","DataPathID"],"140F":["CS","1","RGBLUTTransferFunction"],1410:["CS","1","AlphaLUTTransferFunction"],2e3:["OB","1","ICCProfile"],2002:["CS","1","ColorSpace"],2110:["CS","1","LossyImageCompression"],2112:["DS","1-n","LossyImageCompressionRatio"],2114:["CS","1-n","LossyImageCompressionMethod"],3e3:["SQ","1","ModalityLUTSequence"],3002:["xs","3","LUTDescriptor"],3003:["LO","1","LUTExplanation"],3004:["LO","1","ModalityLUTType"],3006:["xx","1-n or 1","LUTData"],3010:["SQ","1","VOILUTSequence"],3110:["SQ","1","SoftcopyVOILUTSequence"],4e3:["LT","1","ImagePresentationComments"],5e3:["SQ","1","BiPlaneAcquisitionSequence"],6010:["US","1","RepresentativeFrameNumber"],6020:["US","1-n","FrameNumbersOfInterest"],6022:["LO","1-n","FrameOfInterestDescription"],6023:["CS","1-n","FrameOfInterestType"],6030:["US","1-n","MaskPointers"],6040:["US","1-n","RWavePointer"],6100:["SQ","1","MaskSubtractionSequence"],6101:["CS","1","MaskOperation"],6102:["US","2-2n","ApplicableFrameRange"],6110:["US","1-n","MaskFrameNumbers"],6112:["US","1","ContrastFrameAveraging"],6114:["FL","2","MaskSubPixelShift"],6120:["SS","1","TIDOffset"],6190:["ST","1","MaskOperationExplanation"],7e3:["SQ","1","EquipmentAdministratorSequence"],7001:["US","1","NumberOfDisplaySubsystems"],7002:["US","1","CurrentConfigurationID"],7003:["US","1","DisplaySubsystemID"],7004:["SH","1","DisplaySubsystemName"],7005:["LO","1","DisplaySubsystemDescription"],7006:["CS","1","SystemStatus"],7007:["LO","1","SystemStatusComment"],7008:["SQ","1","TargetLuminanceCharacteristicsSequence"],7009:["US","1","LuminanceCharacteristicsID"],"700A":["SQ","1","DisplaySubsystemConfigurationSequence"],"700B":["US","1","ConfigurationID"],"700C":["SH","1","ConfigurationName"],"700D":["LO","1","ConfigurationDescription"],"700E":["US","1","ReferencedTargetLuminanceCharacteristicsID"],"700F":["SQ","1","QAResultsSequence"],7010:["SQ","1","DisplaySubsystemQAResultsSequence"],7011:["SQ","1","ConfigurationQAResultsSequence"],7012:["SQ","1","MeasurementEquipmentSequence"],7013:["CS","1-n","MeasurementFunctions"],7014:["CS","1","MeasurementEquipmentType"],7015:["SQ","1","VisualEvaluationResultSequence"],7016:["SQ","1","DisplayCalibrationResultSequence"],7017:["US","1","DDLValue"],7018:["FL","2","CIExyWhitePoint"],7019:["CS","1","DisplayFunctionType"],"701A":["FL","1","GammaValue"],"701B":["US","1","NumberOfLuminancePoints"],"701C":["SQ","1","LuminanceResponseSequence"],"701D":["FL","1","TargetMinimumLuminance"],"701E":["FL","1","TargetMaximumLuminance"],"701F":["FL","1","LuminanceValue"],7020:["LO","1","LuminanceResponseDescription"],7021:["CS","1","WhitePointFlag"],7022:["SQ","1","DisplayDeviceTypeCodeSequence"],7023:["SQ","1","DisplaySubsystemSequence"],7024:["SQ","1","LuminanceResultSequence"],7025:["CS","1","AmbientLightValueSource"],7026:["CS","1-n","MeasuredCharacteristics"],7027:["SQ","1","LuminanceUniformityResultSequence"],7028:["SQ","1","VisualEvaluationTestSequence"],7029:["CS","1","TestResult"],"702A":["LO","1","TestResultComment"],"702B":["CS","1","TestImageValidation"],"702C":["SQ","1","TestPatternCodeSequence"],"702D":["SQ","1","MeasurementPatternCodeSequence"],"702E":["SQ","1","VisualEvaluationMethodCodeSequence"],"7FE0":["UR","1","PixelDataProviderURL"],9001:["UL","1","DataPointRows"],9002:["UL","1","DataPointColumns"],9003:["CS","1","SignalDomainColumns"],9099:["US","1","LargestMonochromePixelValue"],9108:["CS","1","DataRepresentation"],9110:["SQ","1","PixelMeasuresSequence"],9132:["SQ","1","FrameVOILUTSequence"],9145:["SQ","1","PixelValueTransformationSequence"],9235:["CS","1","SignalDomainRows"],9411:["FL","1","DisplayFilterPercentage"],9415:["SQ","1","FramePixelShiftSequence"],9416:["US","1","SubtractionItemID"],9422:["SQ","1","PixelIntensityRelationshipLUTSequence"],9443:["SQ","1","FramePixelDataPropertiesSequence"],9444:["CS","1","GeometricalProperties"],9445:["FL","1","GeometricMaximumDistortion"],9446:["CS","1-n","ImageProcessingApplied"],9454:["CS","1","MaskSelectionMode"],9474:["CS","1","LUTFunction"],9478:["FL","1","MaskVisibilityPercentage"],9501:["SQ","1","PixelShiftSequence"],9502:["SQ","1","RegionPixelShiftSequence"],9503:["SS","2-2n","VerticesOfTheRegion"],9505:["SQ","1","MultiFramePresentationSequence"],9506:["US","2-2n","PixelShiftFrameRange"],9507:["US","2-2n","LUTFrameRange"],9520:["DS","16","ImageToEquipmentMappingMatrix"],9537:["CS","1","EquipmentCoordinateSystemIdentification"]},"0032":{"0000":["UL","1","GenericGroupLength"],"000A":["CS","1","StudyStatusID"],"000C":["CS","1","StudyPriorityID"],"0012":["LO","1","StudyIDIssuer"],"0032":["DA","1","StudyVerifiedDate"],"0033":["TM","1","StudyVerifiedTime"],"0034":["DA","1","StudyReadDate"],"0035":["TM","1","StudyReadTime"],1e3:["DA","1","ScheduledStudyStartDate"],1001:["TM","1","ScheduledStudyStartTime"],1010:["DA","1","ScheduledStudyStopDate"],1011:["TM","1","ScheduledStudyStopTime"],1020:["LO","1","ScheduledStudyLocation"],1021:["AE","1-n","ScheduledStudyLocationAETitle"],1030:["LO","1","ReasonForStudy"],1031:["SQ","1","RequestingPhysicianIdentificationSequence"],1032:["PN","1","RequestingPhysician"],1033:["LO","1","RequestingService"],1034:["SQ","1","RequestingServiceCodeSequence"],1040:["DA","1","StudyArrivalDate"],1041:["TM","1","StudyArrivalTime"],1050:["DA","1","StudyCompletionDate"],1051:["TM","1","StudyCompletionTime"],1055:["CS","1","StudyComponentStatusID"],1060:["LO","1","RequestedProcedureDescription"],1064:["SQ","1","RequestedProcedureCodeSequence"],1065:["SQ","1","RequestedLateralityCodeSequence"],1066:["UT","1","ReasonForVisit"],1067:["SQ","1","ReasonForVisitCodeSequence"],1070:["LO","1","RequestedContrastAgent"],4e3:["LT","1","StudyComments"]},"0034":{"0000":["UL","1","GenericGroupLength"],"0001":["SQ","1","FlowIdentifierSequence"],"0002":["OB","1","FlowIdentifier"],"0003":["UI","1","FlowTransferSyntaxUID"],"0004":["UL","1","FlowRTPSamplingRate"],"0005":["OB","1","SourceIdentifier"],"0007":["OB","1","FrameOriginTimestamp"],"0008":["CS","1","IncludesImagingSubject"],"0009":["SQ","1","FrameUsefulnessGroupSequence"],"000A":["SQ","1","RealTimeBulkDataFlowSequence"],"000B":["SQ","1","CameraPositionGroupSequence"],"000C":["CS","1","IncludesInformation"],"000D":["SQ","1","TimeOfFrameGroupSequence"]},"0038":{"0000":["UL","1","GenericGroupLength"],"0004":["SQ","1","ReferencedPatientAliasSequence"],"0008":["CS","1","VisitStatusID"],"0010":["LO","1","AdmissionID"],"0011":["LO","1","IssuerOfAdmissionID"],"0014":["SQ","1","IssuerOfAdmissionIDSequence"],"0016":["LO","1","RouteOfAdmissions"],"001A":["DA","1","ScheduledAdmissionDate"],"001B":["TM","1","ScheduledAdmissionTime"],"001C":["DA","1","ScheduledDischargeDate"],"001D":["TM","1","ScheduledDischargeTime"],"001E":["LO","1","ScheduledPatientInstitutionResidence"],"0020":["DA","1","AdmittingDate"],"0021":["TM","1","AdmittingTime"],"0030":["DA","1","DischargeDate"],"0032":["TM","1","DischargeTime"],"0040":["LO","1","DischargeDiagnosisDescription"],"0044":["SQ","1","DischargeDiagnosisCodeSequence"],"0050":["LO","1","SpecialNeeds"],"0060":["LO","1","ServiceEpisodeID"],"0061":["LO","1","IssuerOfServiceEpisodeID"],"0062":["LO","1","ServiceEpisodeDescription"],"0064":["SQ","1","IssuerOfServiceEpisodeIDSequence"],"0100":["SQ","1","PertinentDocumentsSequence"],"0101":["SQ","1","PertinentResourcesSequence"],"0102":["LO","1","ResourceDescription"],"0300":["LO","1","CurrentPatientLocation"],"0400":["LO","1","PatientInstitutionResidence"],"0500":["LO","1","PatientState"],"0502":["SQ","1","PatientClinicalTrialParticipationSequence"],4e3:["LT","1","VisitComments"]},"003A":{"0000":["UL","1","GenericGroupLength"],"0004":["CS","1","WaveformOriginality"],"0005":["US","1","NumberOfWaveformChannels"],"0010":["UL","1","NumberOfWaveformSamples"],"001A":["DS","1","SamplingFrequency"],"0020":["SH","1","MultiplexGroupLabel"],"0200":["SQ","1","ChannelDefinitionSequence"],"0202":["IS","1","WaveformChannelNumber"],"0203":["SH","1","ChannelLabel"],"0205":["CS","1-n","ChannelStatus"],"0208":["SQ","1","ChannelSourceSequence"],"0209":["SQ","1","ChannelSourceModifiersSequence"],"020A":["SQ","1","SourceWaveformSequence"],"020C":["LO","1","ChannelDerivationDescription"],"0210":["DS","1","ChannelSensitivity"],"0211":["SQ","1","ChannelSensitivityUnitsSequence"],"0212":["DS","1","ChannelSensitivityCorrectionFactor"],"0213":["DS","1","ChannelBaseline"],"0214":["DS","1","ChannelTimeSkew"],"0215":["DS","1","ChannelSampleSkew"],"0218":["DS","1","ChannelOffset"],"021A":["US","1","WaveformBitsStored"],"0220":["DS","1","FilterLowFrequency"],"0221":["DS","1","FilterHighFrequency"],"0222":["DS","1","NotchFilterFrequency"],"0223":["DS","1","NotchFilterBandwidth"],"0230":["FL","1","WaveformDataDisplayScale"],"0231":["US","3","WaveformDisplayBackgroundCIELabValue"],"0240":["SQ","1","WaveformPresentationGroupSequence"],"0241":["US","1","PresentationGroupNumber"],"0242":["SQ","1","ChannelDisplaySequence"],"0244":["US","3","ChannelRecommendedDisplayCIELabValue"],"0245":["FL","1","ChannelPosition"],"0246":["CS","1","DisplayShadingFlag"],"0247":["FL","1","FractionalChannelDisplayScale"],"0248":["FL","1","AbsoluteChannelDisplayScale"],"0300":["SQ","1","MultiplexedAudioChannelsDescriptionCodeSequence"],"0301":["IS","1","ChannelIdentificationCode"],"0302":["CS","1","ChannelMode"],"0310":["UI","1","MultiplexGroupUID"],"0311":["DS","1","PowerlineFrequency"],"0312":["SQ","1","ChannelImpedanceSequence"],"0313":["DS","1","ImpedanceValue"],"0314":["DT","1","ImpedanceMeasurementDateTime"],"0315":["DS","1","ImpedanceMeasurementFrequency"],"0316":["CS","1","ImpedanceMeasurementCurrentType"]},"0040":{"0000":["UL","1","GenericGroupLength"],"0001":["AE","1-n","ScheduledStationAETitle"],"0002":["DA","1","ScheduledProcedureStepStartDate"],"0003":["TM","1","ScheduledProcedureStepStartTime"],"0004":["DA","1","ScheduledProcedureStepEndDate"],"0005":["TM","1","ScheduledProcedureStepEndTime"],"0006":["PN","1","ScheduledPerformingPhysicianName"],"0007":["LO","1","ScheduledProcedureStepDescription"],"0008":["SQ","1","ScheduledProtocolCodeSequence"],"0009":["SH","1","ScheduledProcedureStepID"],"000A":["SQ","1","StageCodeSequence"],"000B":["SQ","1","ScheduledPerformingPhysicianIdentificationSequence"],"0010":["SH","1-n","ScheduledStationName"],"0011":["SH","1","ScheduledProcedureStepLocation"],"0012":["LO","1","PreMedication"],"0020":["CS","1","ScheduledProcedureStepStatus"],"0026":["SQ","1","OrderPlacerIdentifierSequence"],"0027":["SQ","1","OrderFillerIdentifierSequence"],"0031":["UT","1","LocalNamespaceEntityID"],"0032":["UT","1","UniversalEntityID"],"0033":["CS","1","UniversalEntityIDType"],"0035":["CS","1","IdentifierTypeCode"],"0036":["SQ","1","AssigningFacilitySequence"],"0039":["SQ","1","AssigningJurisdictionCodeSequence"],"003A":["SQ","1","AssigningAgencyOrDepartmentCodeSequence"],"0100":["SQ","1","ScheduledProcedureStepSequence"],"0220":["SQ","1","ReferencedNonImageCompositeSOPInstanceSequence"],"0241":["AE","1","PerformedStationAETitle"],"0242":["SH","1","PerformedStationName"],"0243":["SH","1","PerformedLocation"],"0244":["DA","1","PerformedProcedureStepStartDate"],"0245":["TM","1","PerformedProcedureStepStartTime"],"0250":["DA","1","PerformedProcedureStepEndDate"],"0251":["TM","1","PerformedProcedureStepEndTime"],"0252":["CS","1","PerformedProcedureStepStatus"],"0253":["SH","1","PerformedProcedureStepID"],"0254":["LO","1","PerformedProcedureStepDescription"],"0255":["LO","1","PerformedProcedureTypeDescription"],"0260":["SQ","1","PerformedProtocolCodeSequence"],"0261":["CS","1","PerformedProtocolType"],"0270":["SQ","1","ScheduledStepAttributesSequence"],"0275":["SQ","1","RequestAttributesSequence"],"0280":["ST","1","CommentsOnThePerformedProcedureStep"],"0281":["SQ","1","PerformedProcedureStepDiscontinuationReasonCodeSequence"],"0293":["SQ","1","QuantitySequence"],"0294":["DS","1","Quantity"],"0295":["SQ","1","MeasuringUnitsSequence"],"0296":["SQ","1","BillingItemSequence"],"0300":["US","1","TotalTimeOfFluoroscopy"],"0301":["US","1","TotalNumberOfExposures"],"0302":["US","1","EntranceDose"],"0303":["US","1-2","ExposedArea"],"0306":["DS","1","DistanceSourceToEntrance"],"0307":["DS","1","DistanceSourceToSupport"],"030E":["SQ","1","ExposureDoseSequence"],"0310":["ST","1","CommentsOnRadiationDose"],"0312":["DS","1","XRayOutput"],"0314":["DS","1","HalfValueLayer"],"0316":["DS","1","OrganDose"],"0318":["CS","1","OrganExposed"],"0320":["SQ","1","BillingProcedureStepSequence"],"0321":["SQ","1","FilmConsumptionSequence"],"0324":["SQ","1","BillingSuppliesAndDevicesSequence"],"0330":["SQ","1","ReferencedProcedureStepSequence"],"0340":["SQ","1","PerformedSeriesSequence"],"0400":["LT","1","CommentsOnTheScheduledProcedureStep"],"0440":["SQ","1","ProtocolContextSequence"],"0441":["SQ","1","ContentItemModifierSequence"],"0500":["SQ","1","ScheduledSpecimenSequence"],"050A":["LO","1","SpecimenAccessionNumber"],"0512":["LO","1","ContainerIdentifier"],"0513":["SQ","1","IssuerOfTheContainerIdentifierSequence"],"0515":["SQ","1","AlternateContainerIdentifierSequence"],"0518":["SQ","1","ContainerTypeCodeSequence"],"051A":["LO","1","ContainerDescription"],"0520":["SQ","1","ContainerComponentSequence"],"0550":["SQ","1","SpecimenSequence"],"0551":["LO","1","SpecimenIdentifier"],"0552":["SQ","1","SpecimenDescriptionSequenceTrial"],"0553":["ST","1","SpecimenDescriptionTrial"],"0554":["UI","1","SpecimenUID"],"0555":["SQ","1","AcquisitionContextSequence"],"0556":["ST","1","AcquisitionContextDescription"],"0560":["SQ","1","SpecimenDescriptionSequence"],"0562":["SQ","1","IssuerOfTheSpecimenIdentifierSequence"],"059A":["SQ","1","SpecimenTypeCodeSequence"],"0600":["LO","1","SpecimenShortDescription"],"0602":["UT","1","SpecimenDetailedDescription"],"0610":["SQ","1","SpecimenPreparationSequence"],"0612":["SQ","1","SpecimenPreparationStepContentItemSequence"],"0620":["SQ","1","SpecimenLocalizationContentItemSequence"],"06FA":["LO","1","SlideIdentifier"],"0710":["SQ","1","WholeSlideMicroscopyImageFrameTypeSequence"],"071A":["SQ","1","ImageCenterPointCoordinatesSequence"],"072A":["DS","1","XOffsetInSlideCoordinateSystem"],"073A":["DS","1","YOffsetInSlideCoordinateSystem"],"074A":["DS","1","ZOffsetInSlideCoordinateSystem"],"08D8":["SQ","1","PixelSpacingSequence"],"08DA":["SQ","1","CoordinateSystemAxisCodeSequence"],"08EA":["SQ","1","MeasurementUnitsCodeSequence"],"09F8":["SQ","1","VitalStainCodeSequenceTrial"],1001:["SH","1","RequestedProcedureID"],1002:["LO","1","ReasonForTheRequestedProcedure"],1003:["SH","1","RequestedProcedurePriority"],1004:["LO","1","PatientTransportArrangements"],1005:["LO","1","RequestedProcedureLocation"],1006:["SH","1","PlacerOrderNumberProcedure"],1007:["SH","1","FillerOrderNumberProcedure"],1008:["LO","1","ConfidentialityCode"],1009:["SH","1","ReportingPriority"],"100A":["SQ","1","ReasonForRequestedProcedureCodeSequence"],1010:["PN","1-n","NamesOfIntendedRecipientsOfResults"],1011:["SQ","1","IntendedRecipientsOfResultsIdentificationSequence"],1012:["SQ","1","ReasonForPerformedProcedureCodeSequence"],1060:["LO","1","RequestedProcedureDescriptionTrial"],1101:["SQ","1","PersonIdentificationCodeSequence"],1102:["ST","1","PersonAddress"],1103:["LO","1-n","PersonTelephoneNumbers"],1104:["LT","1","PersonTelecomInformation"],1400:["LT","1","RequestedProcedureComments"],2001:["LO","1","ReasonForTheImagingServiceRequest"],2004:["DA","1","IssueDateOfImagingServiceRequest"],2005:["TM","1","IssueTimeOfImagingServiceRequest"],2006:["SH","1","PlacerOrderNumberImagingServiceRequestRetired"],2007:["SH","1","FillerOrderNumberImagingServiceRequestRetired"],2008:["PN","1","OrderEnteredBy"],2009:["SH","1","OrderEntererLocation"],2010:["SH","1","OrderCallbackPhoneNumber"],2011:["LT","1","OrderCallbackTelecomInformation"],2016:["LO","1","PlacerOrderNumberImagingServiceRequest"],2017:["LO","1","FillerOrderNumberImagingServiceRequest"],2400:["LT","1","ImagingServiceRequestComments"],3001:["LO","1","ConfidentialityConstraintOnPatientDataDescription"],4001:["CS","1","GeneralPurposeScheduledProcedureStepStatus"],4002:["CS","1","GeneralPurposePerformedProcedureStepStatus"],4003:["CS","1","GeneralPurposeScheduledProcedureStepPriority"],4004:["SQ","1","ScheduledProcessingApplicationsCodeSequence"],4005:["DT","1","ScheduledProcedureStepStartDateTime"],4006:["CS","1","MultipleCopiesFlag"],4007:["SQ","1","PerformedProcessingApplicationsCodeSequence"],4008:["DT","1","ScheduledProcedureStepExpirationDateTime"],4009:["SQ","1","HumanPerformerCodeSequence"],4010:["DT","1","ScheduledProcedureStepModificationDateTime"],4011:["DT","1","ExpectedCompletionDateTime"],4015:["SQ","1","ResultingGeneralPurposePerformedProcedureStepsSequence"],4016:["SQ","1","ReferencedGeneralPurposeScheduledProcedureStepSequence"],4018:["SQ","1","ScheduledWorkitemCodeSequence"],4019:["SQ","1","PerformedWorkitemCodeSequence"],4020:["CS","1","InputAvailabilityFlag"],4021:["SQ","1","InputInformationSequence"],4022:["SQ","1","RelevantInformationSequence"],4023:["UI","1","ReferencedGeneralPurposeScheduledProcedureStepTransactionUID"],4025:["SQ","1","ScheduledStationNameCodeSequence"],4026:["SQ","1","ScheduledStationClassCodeSequence"],4027:["SQ","1","ScheduledStationGeographicLocationCodeSequence"],4028:["SQ","1","PerformedStationNameCodeSequence"],4029:["SQ","1","PerformedStationClassCodeSequence"],4030:["SQ","1","PerformedStationGeographicLocationCodeSequence"],4031:["SQ","1","RequestedSubsequentWorkitemCodeSequence"],4032:["SQ","1","NonDICOMOutputCodeSequence"],4033:["SQ","1","OutputInformationSequence"],4034:["SQ","1","ScheduledHumanPerformersSequence"],4035:["SQ","1","ActualHumanPerformersSequence"],4036:["LO","1","HumanPerformerOrganization"],4037:["PN","1","HumanPerformerName"],4040:["CS","1","RawDataHandling"],4041:["CS","1","InputReadinessState"],4050:["DT","1","PerformedProcedureStepStartDateTime"],4051:["DT","1","PerformedProcedureStepEndDateTime"],4052:["DT","1","ProcedureStepCancellationDateTime"],4070:["SQ","1","OutputDestinationSequence"],4071:["SQ","1","DICOMStorageSequence"],4072:["SQ","1","STOWRSStorageSequence"],4073:["UR","1","StorageURL"],4074:["SQ","1","XDSStorageSequence"],8302:["DS","1","EntranceDoseInmGy"],8303:["CS","1","EntranceDoseDerivation"],9092:["SQ","1","ParametricMapFrameTypeSequence"],9094:["SQ","1","ReferencedImageRealWorldValueMappingSequence"],9096:["SQ","1","RealWorldValueMappingSequence"],9098:["SQ","1","PixelValueMappingCodeSequence"],9210:["SH","1","LUTLabel"],9211:["xs","1","RealWorldValueLastValueMapped"],9212:["FD","1-n","RealWorldValueLUTData"],9213:["FD","1","DoubleFloatRealWorldValueLastValueMapped"],9214:["FD","1","DoubleFloatRealWorldValueFirstValueMapped"],9216:["xs","1","RealWorldValueFirstValueMapped"],9220:["SQ","1","QuantityDefinitionSequence"],9224:["FD","1","RealWorldValueIntercept"],9225:["FD","1","RealWorldValueSlope"],A007:["CS","1","FindingsFlagTrial"],A010:["CS","1","RelationshipType"],A020:["SQ","1","FindingsSequenceTrial"],A021:["UI","1","FindingsGroupUIDTrial"],A022:["UI","1","ReferencedFindingsGroupUIDTrial"],A023:["DA","1","FindingsGroupRecordingDateTrial"],A024:["TM","1","FindingsGroupRecordingTimeTrial"],A026:["SQ","1","FindingsSourceCategoryCodeSequenceTrial"],A027:["LO","1","VerifyingOrganization"],A028:["SQ","1","DocumentingOrganizationIdentifierCodeSequenceTrial"],A030:["DT","1","VerificationDateTime"],A032:["DT","1","ObservationDateTime"],A033:["DT","1","ObservationStartDateTime"],A040:["CS","1","ValueType"],A043:["SQ","1","ConceptNameCodeSequence"],A047:["LO","1","MeasurementPrecisionDescriptionTrial"],A050:["CS","1","ContinuityOfContent"],A057:["CS","1-n","UrgencyOrPriorityAlertsTrial"],A060:["LO","1","SequencingIndicatorTrial"],A066:["SQ","1","DocumentIdentifierCodeSequenceTrial"],A067:["PN","1","DocumentAuthorTrial"],A068:["SQ","1","DocumentAuthorIdentifierCodeSequenceTrial"],A070:["SQ","1","IdentifierCodeSequenceTrial"],A073:["SQ","1","VerifyingObserverSequence"],A074:["OB","1","ObjectBinaryIdentifierTrial"],A075:["PN","1","VerifyingObserverName"],A076:["SQ","1","DocumentingObserverIdentifierCodeSequenceTrial"],A078:["SQ","1","AuthorObserverSequence"],A07A:["SQ","1","ParticipantSequence"],A07C:["SQ","1","CustodialOrganizationSequence"],A080:["CS","1","ParticipationType"],A082:["DT","1","ParticipationDateTime"],A084:["CS","1","ObserverType"],A085:["SQ","1","ProcedureIdentifierCodeSequenceTrial"],A088:["SQ","1","VerifyingObserverIdentificationCodeSequence"],A089:["OB","1","ObjectDirectoryBinaryIdentifierTrial"],A090:["SQ","1","EquivalentCDADocumentSequence"],A0B0:["US","2-2n","ReferencedWaveformChannels"],A110:["DA","1","DateOfDocumentOrVerbalTransactionTrial"],A112:["TM","1","TimeOfDocumentCreationOrVerbalTransactionTrial"],A120:["DT","1","DateTime"],A121:["DA","1","Date"],A122:["TM","1","Time"],A123:["PN","1","PersonName"],A124:["UI","1","UID"],A125:["CS","2","ReportStatusIDTrial"],A130:["CS","1","TemporalRangeType"],A132:["UL","1-n","ReferencedSamplePositions"],A136:["US","1-n","ReferencedFrameNumbers"],A138:["DS","1-n","ReferencedTimeOffsets"],A13A:["DT","1-n","ReferencedDateTime"],A160:["UT","1","TextValue"],A161:["FD","1-n","FloatingPointValue"],A162:["SL","1-n","RationalNumeratorValue"],A163:["UL","1-n","RationalDenominatorValue"],A167:["SQ","1","ObservationCategoryCodeSequenceTrial"],A168:["SQ","1","ConceptCodeSequence"],A16A:["ST","1","BibliographicCitationTrial"],A170:["SQ","1","PurposeOfReferenceCodeSequence"],A171:["UI","1","ObservationUID"],A172:["UI","1","ReferencedObservationUIDTrial"],A173:["CS","1","ReferencedObservationClassTrial"],A174:["CS","1","ReferencedObjectObservationClassTrial"],A180:["US","1","AnnotationGroupNumber"],A192:["DA","1","ObservationDateTrial"],A193:["TM","1","ObservationTimeTrial"],A194:["CS","1","MeasurementAutomationTrial"],A195:["SQ","1","ModifierCodeSequence"],A224:["ST","1","IdentificationDescriptionTrial"],A290:["CS","1","CoordinatesSetGeometricTypeTrial"],A296:["SQ","1","AlgorithmCodeSequenceTrial"],A297:["ST","1","AlgorithmDescriptionTrial"],A29A:["SL","2-2n","PixelCoordinatesSetTrial"],A300:["SQ","1","MeasuredValueSequence"],A301:["SQ","1","NumericValueQualifierCodeSequence"],A307:["PN","1","CurrentObserverTrial"],A30A:["DS","1-n","NumericValue"],A313:["SQ","1","ReferencedAccessionSequenceTrial"],A33A:["ST","1","ReportStatusCommentTrial"],A340:["SQ","1","ProcedureContextSequenceTrial"],A352:["PN","1","VerbalSourceTrial"],A353:["ST","1","AddressTrial"],A354:["LO","1","TelephoneNumberTrial"],A358:["SQ","1","VerbalSourceIdentifierCodeSequenceTrial"],A360:["SQ","1","PredecessorDocumentsSequence"],A370:["SQ","1","ReferencedRequestSequence"],A372:["SQ","1","PerformedProcedureCodeSequence"],A375:["SQ","1","CurrentRequestedProcedureEvidenceSequence"],A380:["SQ","1","ReportDetailSequenceTrial"],A385:["SQ","1","PertinentOtherEvidenceSequence"],A390:["SQ","1","HL7StructuredDocumentReferenceSequence"],A402:["UI","1","ObservationSubjectUIDTrial"],A403:["CS","1","ObservationSubjectClassTrial"],A404:["SQ","1","ObservationSubjectTypeCodeSequenceTrial"],A491:["CS","1","CompletionFlag"],A492:["LO","1","CompletionFlagDescription"],A493:["CS","1","VerificationFlag"],A494:["CS","1","ArchiveRequested"],A496:["CS","1","PreliminaryFlag"],A504:["SQ","1","ContentTemplateSequence"],A525:["SQ","1","IdenticalDocumentsSequence"],A600:["CS","1","ObservationSubjectContextFlagTrial"],A601:["CS","1","ObserverContextFlagTrial"],A603:["CS","1","ProcedureContextFlagTrial"],A730:["SQ","1","ContentSequence"],A731:["SQ","1","RelationshipSequenceTrial"],A732:["SQ","1","RelationshipTypeCodeSequenceTrial"],A744:["SQ","1","LanguageCodeSequenceTrial"],A801:["SQ","1","TabulatedValuesSequence"],A802:["UL","1","NumberOfTableRows"],A803:["UL","1","NumberOfTableColumns"],A804:["UL","1","TableRowNumber"],A805:["UL","1","TableColumnNumber"],A806:["SQ","1","TableRowDefinitionSequence"],A807:["SQ","1","TableColumnDefinitionSequence"],A808:["SQ","1","CellValuesSequence"],A992:["ST","1","UniformResourceLocatorTrial"],B020:["SQ","1","WaveformAnnotationSequence"],DB00:["CS","1","TemplateIdentifier"],DB06:["DT","1","TemplateVersion"],DB07:["DT","1","TemplateLocalVersion"],DB0B:["CS","1","TemplateExtensionFlag"],DB0C:["UI","1","TemplateExtensionOrganizationUID"],DB0D:["UI","1","TemplateExtensionCreatorUID"],DB73:["UL","1-n","ReferencedContentItemIdentifier"],E001:["ST","1","HL7InstanceIdentifier"],E004:["DT","1","HL7DocumentEffectiveTime"],E006:["SQ","1","HL7DocumentTypeCodeSequence"],E008:["SQ","1","DocumentClassCodeSequence"],E010:["UR","1","RetrieveURI"],E011:["UI","1","RetrieveLocationUID"],E020:["CS","1","TypeOfInstances"],E021:["SQ","1","DICOMRetrievalSequence"],E022:["SQ","1","DICOMMediaRetrievalSequence"],E023:["SQ","1","WADORetrievalSequence"],E024:["SQ","1","XDSRetrievalSequence"],E025:["SQ","1","WADORSRetrievalSequence"],E030:["UI","1","RepositoryUniqueID"],E031:["UI","1","HomeCommunityID"]},"0042":{"0000":["UL","1","GenericGroupLength"],"0010":["ST","1","DocumentTitle"],"0011":["OB","1","EncapsulatedDocument"],"0012":["LO","1","MIMETypeOfEncapsulatedDocument"],"0013":["SQ","1","SourceInstanceSequence"],"0014":["LO","1-n","ListOfMIMETypes"],"0015":["UL","1","EncapsulatedDocumentLength"]},"0044":{"0000":["UL","1","GenericGroupLength"],"0001":["ST","1","ProductPackageIdentifier"],"0002":["CS","1","SubstanceAdministrationApproval"],"0003":["LT","1","ApprovalStatusFurtherDescription"],"0004":["DT","1","ApprovalStatusDateTime"],"0007":["SQ","1","ProductTypeCodeSequence"],"0008":["LO","1-n","ProductName"],"0009":["LT","1","ProductDescription"],"000A":["LO","1","ProductLotIdentifier"],"000B":["DT","1","ProductExpirationDateTime"],"0010":["DT","1","SubstanceAdministrationDateTime"],"0011":["LO","1","SubstanceAdministrationNotes"],"0012":["LO","1","SubstanceAdministrationDeviceID"],"0013":["SQ","1","ProductParameterSequence"],"0019":["SQ","1","SubstanceAdministrationParameterSequence"],"0100":["SQ","1","ApprovalSequence"],"0101":["SQ","1","AssertionCodeSequence"],"0102":["UI","1","AssertionUID"],"0103":["SQ","1","AsserterIdentificationSequence"],"0104":["DT","1","AssertionDateTime"],"0105":["DT","1","AssertionExpirationDateTime"],"0106":["UT","1","AssertionComments"],"0107":["SQ","1","RelatedAssertionSequence"],"0108":["UI","1","ReferencedAssertionUID"],"0109":["SQ","1","ApprovalSubjectSequence"],"010A":["SQ","1","OrganizationalRoleCodeSequence"]},"0046":{"0000":["UL","1","GenericGroupLength"],"0012":["LO","1","LensDescription"],"0014":["SQ","1","RightLensSequence"],"0015":["SQ","1","LeftLensSequence"],"0016":["SQ","1","UnspecifiedLateralityLensSequence"],"0018":["SQ","1","CylinderSequence"],"0028":["SQ","1","PrismSequence"],"0030":["FD","1","HorizontalPrismPower"],"0032":["CS","1","HorizontalPrismBase"],"0034":["FD","1","VerticalPrismPower"],"0036":["CS","1","VerticalPrismBase"],"0038":["CS","1","LensSegmentType"],"0040":["FD","1","OpticalTransmittance"],"0042":["FD","1","ChannelWidth"],"0044":["FD","1","PupilSize"],"0046":["FD","1","CornealSize"],"0047":["SQ","1","CornealSizeSequence"],"0050":["SQ","1","AutorefractionRightEyeSequence"],"0052":["SQ","1","AutorefractionLeftEyeSequence"],"0060":["FD","1","DistancePupillaryDistance"],"0062":["FD","1","NearPupillaryDistance"],"0063":["FD","1","IntermediatePupillaryDistance"],"0064":["FD","1","OtherPupillaryDistance"],"0070":["SQ","1","KeratometryRightEyeSequence"],"0071":["SQ","1","KeratometryLeftEyeSequence"],"0074":["SQ","1","SteepKeratometricAxisSequence"],"0075":["FD","1","RadiusOfCurvature"],"0076":["FD","1","KeratometricPower"],"0077":["FD","1","KeratometricAxis"],"0080":["SQ","1","FlatKeratometricAxisSequence"],"0092":["CS","1","BackgroundColor"],"0094":["CS","1","Optotype"],"0095":["CS","1","OptotypePresentation"],"0097":["SQ","1","SubjectiveRefractionRightEyeSequence"],"0098":["SQ","1","SubjectiveRefractionLeftEyeSequence"],"0100":["SQ","1","AddNearSequence"],"0101":["SQ","1","AddIntermediateSequence"],"0102":["SQ","1","AddOtherSequence"],"0104":["FD","1","AddPower"],"0106":["FD","1","ViewingDistance"],"0110":["SQ","1","CorneaMeasurementsSequence"],"0111":["SQ","1","SourceOfCorneaMeasurementDataCodeSequence"],"0112":["SQ","1","SteepCornealAxisSequence"],"0113":["SQ","1","FlatCornealAxisSequence"],"0114":["FD","1","CornealPower"],"0115":["FD","1","CornealAxis"],"0116":["SQ","1","CorneaMeasurementMethodCodeSequence"],"0117":["FL","1","RefractiveIndexOfCornea"],"0118":["FL","1","RefractiveIndexOfAqueousHumor"],"0121":["SQ","1","VisualAcuityTypeCodeSequence"],"0122":["SQ","1","VisualAcuityRightEyeSequence"],"0123":["SQ","1","VisualAcuityLeftEyeSequence"],"0124":["SQ","1","VisualAcuityBothEyesOpenSequence"],"0125":["CS","1","ViewingDistanceType"],"0135":["SS","2","VisualAcuityModifiers"],"0137":["FD","1","DecimalVisualAcuity"],"0139":["LO","1","OptotypeDetailedDefinition"],"0145":["SQ","1","ReferencedRefractiveMeasurementsSequence"],"0146":["FD","1","SpherePower"],"0147":["FD","1","CylinderPower"],"0201":["CS","1","CornealTopographySurface"],"0202":["FL","2","CornealVertexLocation"],"0203":["FL","1","PupilCentroidXCoordinate"],"0204":["FL","1","PupilCentroidYCoordinate"],"0205":["FL","1","EquivalentPupilRadius"],"0207":["SQ","1","CornealTopographyMapTypeCodeSequence"],"0208":["IS","2-2n","VerticesOfTheOutlineOfPupil"],"0210":["SQ","1","CornealTopographyMappingNormalsSequence"],"0211":["SQ","1","MaximumCornealCurvatureSequence"],"0212":["FL","1","MaximumCornealCurvature"],"0213":["FL","2","MaximumCornealCurvatureLocation"],"0215":["SQ","1","MinimumKeratometricSequence"],"0218":["SQ","1","SimulatedKeratometricCylinderSequence"],"0220":["FL","1","AverageCornealPower"],"0224":["FL","1","CornealISValue"],"0227":["FL","1","AnalyzedArea"],"0230":["FL","1","SurfaceRegularityIndex"],"0232":["FL","1","SurfaceAsymmetryIndex"],"0234":["FL","1","CornealEccentricityIndex"],"0236":["FL","1","KeratoconusPredictionIndex"],"0238":["FL","1","DecimalPotentialVisualAcuity"],"0242":["CS","1","CornealTopographyMapQualityEvaluation"],"0244":["SQ","1","SourceImageCornealProcessedDataSequence"],"0247":["FL","3","CornealPointLocation"],"0248":["CS","1","CornealPointEstimated"],"0249":["FL","1","AxialPower"],"0250":["FL","1","TangentialPower"],"0251":["FL","1","RefractivePower"],"0252":["FL","1","RelativeElevation"],"0253":["FL","1","CornealWavefront"]},"0048":{"0000":["UL","1","GenericGroupLength"],"0001":["FL","1","ImagedVolumeWidth"],"0002":["FL","1","ImagedVolumeHeight"],"0003":["FL","1","ImagedVolumeDepth"],"0006":["UL","1","TotalPixelMatrixColumns"],"0007":["UL","1","TotalPixelMatrixRows"],"0008":["SQ","1","TotalPixelMatrixOriginSequence"],"0010":["CS","1","SpecimenLabelInImage"],"0011":["CS","1","FocusMethod"],"0012":["CS","1","ExtendedDepthOfField"],"0013":["US","1","NumberOfFocalPlanes"],"0014":["FL","1","DistanceBetweenFocalPlanes"],"0015":["US","3","RecommendedAbsentPixelCIELabValue"],"0100":["SQ","1","IlluminatorTypeCodeSequence"],"0102":["DS","6","ImageOrientationSlide"],"0105":["SQ","1","OpticalPathSequence"],"0106":["SH","1","OpticalPathIdentifier"],"0107":["ST","1","OpticalPathDescription"],"0108":["SQ","1","IlluminationColorCodeSequence"],"0110":["SQ","1","SpecimenReferenceSequence"],"0111":["DS","1","CondenserLensPower"],"0112":["DS","1","ObjectiveLensPower"],"0113":["DS","1","ObjectiveLensNumericalAperture"],"0120":["SQ","1","PaletteColorLookupTableSequence"],"0200":["SQ","1","ReferencedImageNavigationSequence"],"0201":["US","2","TopLeftHandCornerOfLocalizerArea"],"0202":["US","2","BottomRightHandCornerOfLocalizerArea"],"0207":["SQ","1","OpticalPathIdentificationSequence"],"021A":["SQ","1","PlanePositionSlideSequence"],"021E":["SL","1","ColumnPositionInTotalImagePixelMatrix"],"021F":["SL","1","RowPositionInTotalImagePixelMatrix"],"0301":["CS","1","PixelOriginInterpretation"],"0302":["UL","1","NumberOfOpticalPaths"],"0303":["UL","1","TotalPixelMatrixFocalPlanes"]},"0050":{"0000":["UL","1","GenericGroupLength"],"0004":["CS","1","CalibrationImage"],"0010":["SQ","1","DeviceSequence"],"0012":["SQ","1","ContainerComponentTypeCodeSequence"],"0013":["FD","1","ContainerComponentThickness"],"0014":["DS","1","DeviceLength"],"0015":["FD","1","ContainerComponentWidth"],"0016":["DS","1","DeviceDiameter"],"0017":["CS","1","DeviceDiameterUnits"],"0018":["DS","1","DeviceVolume"],"0019":["DS","1","InterMarkerDistance"],"001A":["CS","1","ContainerComponentMaterial"],"001B":["LO","1","ContainerComponentID"],"001C":["FD","1","ContainerComponentLength"],"001D":["FD","1","ContainerComponentDiameter"],"001E":["LO","1","ContainerComponentDescription"],"0020":["LO","1","DeviceDescription"],"0021":["ST","1","LongDeviceDescription"]},"0052":{"0000":["UL","1","GenericGroupLength"],"0001":["FL","1","ContrastBolusIngredientPercentByVolume"],"0002":["FD","1","OCTFocalDistance"],"0003":["FD","1","BeamSpotSize"],"0004":["FD","1","EffectiveRefractiveIndex"],"0006":["CS","1","OCTAcquisitionDomain"],"0007":["FD","1","OCTOpticalCenterWavelength"],"0008":["FD","1","AxialResolution"],"0009":["FD","1","RangingDepth"],"0011":["FD","1","ALineRate"],"0012":["US","1","ALinesPerFrame"],"0013":["FD","1","CatheterRotationalRate"],"0014":["FD","1","ALinePixelSpacing"],"0016":["SQ","1","ModeOfPercutaneousAccessSequence"],"0025":["SQ","1","IntravascularOCTFrameTypeSequence"],"0026":["CS","1","OCTZOffsetApplied"],"0027":["SQ","1","IntravascularFrameContentSequence"],"0028":["FD","1","IntravascularLongitudinalDistance"],"0029":["SQ","1","IntravascularOCTFrameContentSequence"],"0030":["SS","1","OCTZOffsetCorrection"],"0031":["CS","1","CatheterDirectionOfRotation"],"0033":["FD","1","SeamLineLocation"],"0034":["FD","1","FirstALineLocation"],"0036":["US","1","SeamLineIndex"],"0038":["US","1","NumberOfPaddedALines"],"0039":["CS","1","InterpolationType"],"003A":["CS","1","RefractiveIndexApplied"]},"0054":{"0000":["UL","1","GenericGroupLength"],"0010":["US","1-n","EnergyWindowVector"],"0011":["US","1","NumberOfEnergyWindows"],"0012":["SQ","1","EnergyWindowInformationSequence"],"0013":["SQ","1","EnergyWindowRangeSequence"],"0014":["DS","1","EnergyWindowLowerLimit"],"0015":["DS","1","EnergyWindowUpperLimit"],"0016":["SQ","1","RadiopharmaceuticalInformationSequence"],"0017":["IS","1","ResidualSyringeCounts"],"0018":["SH","1","EnergyWindowName"],"0020":["US","1-n","DetectorVector"],"0021":["US","1","NumberOfDetectors"],"0022":["SQ","1","DetectorInformationSequence"],"0030":["US","1-n","PhaseVector"],"0031":["US","1","NumberOfPhases"],"0032":["SQ","1","PhaseInformationSequence"],"0033":["US","1","NumberOfFramesInPhase"],"0036":["IS","1","PhaseDelay"],"0038":["IS","1","PauseBetweenFrames"],"0039":["CS","1","PhaseDescription"],"0050":["US","1-n","RotationVector"],"0051":["US","1","NumberOfRotations"],"0052":["SQ","1","RotationInformationSequence"],"0053":["US","1","NumberOfFramesInRotation"],"0060":["US","1-n","RRIntervalVector"],"0061":["US","1","NumberOfRRIntervals"],"0062":["SQ","1","GatedInformationSequence"],"0063":["SQ","1","DataInformationSequence"],"0070":["US","1-n","TimeSlotVector"],"0071":["US","1","NumberOfTimeSlots"],"0072":["SQ","1","TimeSlotInformationSequence"],"0073":["DS","1","TimeSlotTime"],"0080":["US","1-n","SliceVector"],"0081":["US","1","NumberOfSlices"],"0090":["US","1-n","AngularViewVector"],"0100":["US","1-n","TimeSliceVector"],"0101":["US","1","NumberOfTimeSlices"],"0200":["DS","1","StartAngle"],"0202":["CS","1","TypeOfDetectorMotion"],"0210":["IS","1-n","TriggerVector"],"0211":["US","1","NumberOfTriggersInPhase"],"0220":["SQ","1","ViewCodeSequence"],"0222":["SQ","1","ViewModifierCodeSequence"],"0300":["SQ","1","RadionuclideCodeSequence"],"0302":["SQ","1","AdministrationRouteCodeSequence"],"0304":["SQ","1","RadiopharmaceuticalCodeSequence"],"0306":["SQ","1","CalibrationDataSequence"],"0308":["US","1","EnergyWindowNumber"],"0400":["SH","1","ImageID"],"0410":["SQ","1","PatientOrientationCodeSequence"],"0412":["SQ","1","PatientOrientationModifierCodeSequence"],"0414":["SQ","1","PatientGantryRelationshipCodeSequence"],"0500":["CS","1","SliceProgressionDirection"],"0501":["CS","1","ScanProgressionDirection"],1e3:["CS","2","SeriesType"],1001:["CS","1","Units"],1002:["CS","1","CountsSource"],1004:["CS","1","ReprojectionMethod"],1006:["CS","1","SUVType"],1100:["CS","1","RandomsCorrectionMethod"],1101:["LO","1","AttenuationCorrectionMethod"],1102:["CS","1","DecayCorrection"],1103:["LO","1","ReconstructionMethod"],1104:["LO","1","DetectorLinesOfResponseUsed"],1105:["LO","1","ScatterCorrectionMethod"],1200:["DS","1","AxialAcceptance"],1201:["IS","2","AxialMash"],1202:["IS","1","TransverseMash"],1203:["DS","2","DetectorElementSize"],1210:["DS","1","CoincidenceWindowWidth"],1220:["CS","1-n","SecondaryCountsType"],1300:["DS","1","FrameReferenceTime"],1310:["IS","1","PrimaryPromptsCountsAccumulated"],1311:["IS","1-n","SecondaryCountsAccumulated"],1320:["DS","1","SliceSensitivityFactor"],1321:["DS","1","DecayFactor"],1322:["DS","1","DoseCalibrationFactor"],1323:["DS","1","ScatterFractionFactor"],1324:["DS","1","DeadTimeFactor"],1330:["US","1","ImageIndex"],1400:["CS","1-n","CountsIncluded"],1401:["CS","1","DeadTimeCorrectionFlag"]},"0060":{"0000":["UL","1","GenericGroupLength"],3e3:["SQ","1","HistogramSequence"],3002:["US","1","HistogramNumberOfBins"],3004:["xs","1","HistogramFirstBinValue"],3006:["xs","1","HistogramLastBinValue"],3008:["US","1","HistogramBinWidth"],3010:["LO","1","HistogramExplanation"],3020:["UL","1-n","HistogramData"]},"0062":{"0000":["UL","1","GenericGroupLength"],"0001":["CS","1","SegmentationType"],"0002":["SQ","1","SegmentSequence"],"0003":["SQ","1","SegmentedPropertyCategoryCodeSequence"],"0004":["US","1","SegmentNumber"],"0005":["LO","1","SegmentLabel"],"0006":["ST","1","SegmentDescription"],"0007":["SQ","1","SegmentationAlgorithmIdentificationSequence"],"0008":["CS","1","SegmentAlgorithmType"],"0009":["LO","1-n","SegmentAlgorithmName"],"000A":["SQ","1","SegmentIdentificationSequence"],"000B":["US","1-n","ReferencedSegmentNumber"],"000C":["US","1","RecommendedDisplayGrayscaleValue"],"000D":["US","3","RecommendedDisplayCIELabValue"],"000E":["US","1","MaximumFractionalValue"],"000F":["SQ","1","SegmentedPropertyTypeCodeSequence"],"0010":["CS","1","SegmentationFractionalType"],"0011":["SQ","1","SegmentedPropertyTypeModifierCodeSequence"],"0012":["SQ","1","UsedSegmentsSequence"],"0013":["CS","1","SegmentsOverlap"],"0020":["UT","1","TrackingID"],"0021":["UI","1","TrackingUID"]},"0064":{"0000":["UL","1","GenericGroupLength"],"0002":["SQ","1","DeformableRegistrationSequence"],"0003":["UI","1","SourceFrameOfReferenceUID"],"0005":["SQ","1","DeformableRegistrationGridSequence"],"0007":["UL","3","GridDimensions"],"0008":["FD","3","GridResolution"],"0009":["OF","1","VectorGridData"],"000F":["SQ","1","PreDeformationMatrixRegistrationSequence"],"0010":["SQ","1","PostDeformationMatrixRegistrationSequence"]},"0066":{"0000":["UL","1","GenericGroupLength"],"0001":["UL","1","NumberOfSurfaces"],"0002":["SQ","1","SurfaceSequence"],"0003":["UL","1","SurfaceNumber"],"0004":["LT","1","SurfaceComments"],"0009":["CS","1","SurfaceProcessing"],"000A":["FL","1","SurfaceProcessingRatio"],"000B":["LO","1","SurfaceProcessingDescription"],"000C":["FL","1","RecommendedPresentationOpacity"],"000D":["CS","1","RecommendedPresentationType"],"000E":["CS","1","FiniteVolume"],"0010":["CS","1","Manifold"],"0011":["SQ","1","SurfacePointsSequence"],"0012":["SQ","1","SurfacePointsNormalsSequence"],"0013":["SQ","1","SurfaceMeshPrimitivesSequence"],"0015":["UL","1","NumberOfSurfacePoints"],"0016":["OF","1","PointCoordinatesData"],"0017":["FL","3","PointPositionAccuracy"],"0018":["FL","1","MeanPointDistance"],"0019":["FL","1","MaximumPointDistance"],"001A":["FL","6","PointsBoundingBoxCoordinates"],"001B":["FL","3","AxisOfRotation"],"001C":["FL","3","CenterOfRotation"],"001E":["UL","1","NumberOfVectors"],"001F":["US","1","VectorDimensionality"],"0020":["FL","1-n","VectorAccuracy"],"0021":["OF","1","VectorCoordinateData"],"0022":["OD","1","DoublePointCoordinatesData"],"0023":["OW","1","TrianglePointIndexList"],"0024":["OW","1","EdgePointIndexList"],"0025":["OW","1","VertexPointIndexList"],"0026":["SQ","1","TriangleStripSequence"],"0027":["SQ","1","TriangleFanSequence"],"0028":["SQ","1","LineSequence"],"0029":["OW","1","PrimitivePointIndexList"],"002A":["UL","1","SurfaceCount"],"002B":["SQ","1","ReferencedSurfaceSequence"],"002C":["UL","1","ReferencedSurfaceNumber"],"002D":["SQ","1","SegmentSurfaceGenerationAlgorithmIdentificationSequence"],"002E":["SQ","1","SegmentSurfaceSourceInstanceSequence"],"002F":["SQ","1","AlgorithmFamilyCodeSequence"],"0030":["SQ","1","AlgorithmNameCodeSequence"],"0031":["LO","1","AlgorithmVersion"],"0032":["LT","1","AlgorithmParameters"],"0034":["SQ","1","FacetSequence"],"0035":["SQ","1","SurfaceProcessingAlgorithmIdentificationSequence"],"0036":["LO","1","AlgorithmName"],"0037":["FL","1","RecommendedPointRadius"],"0038":["FL","1","RecommendedLineThickness"],"0040":["OL","1","LongPrimitivePointIndexList"],"0041":["OL","1","LongTrianglePointIndexList"],"0042":["OL","1","LongEdgePointIndexList"],"0043":["OL","1","LongVertexPointIndexList"],"0101":["SQ","1","TrackSetSequence"],"0102":["SQ","1","TrackSequence"],"0103":["OW","1","RecommendedDisplayCIELabValueList"],"0104":["SQ","1","TrackingAlgorithmIdentificationSequence"],"0105":["UL","1","TrackSetNumber"],"0106":["LO","1","TrackSetLabel"],"0107":["UT","1","TrackSetDescription"],"0108":["SQ","1","TrackSetAnatomicalTypeCodeSequence"],"0121":["SQ","1","MeasurementsSequence"],"0124":["SQ","1","TrackSetStatisticsSequence"],"0125":["OF","1","FloatingPointValues"],"0129":["OL","1","TrackPointIndexList"],"0130":["SQ","1","TrackStatisticsSequence"],"0132":["SQ","1","MeasurementValuesSequence"],"0133":["SQ","1","DiffusionAcquisitionCodeSequence"],"0134":["SQ","1","DiffusionModelCodeSequence"]},"0068":{"0000":["UL","1","GenericGroupLength"],6210:["LO","1","ImplantSize"],6221:["LO","1","ImplantTemplateVersion"],6222:["SQ","1","ReplacedImplantTemplateSequence"],6223:["CS","1","ImplantType"],6224:["SQ","1","DerivationImplantTemplateSequence"],6225:["SQ","1","OriginalImplantTemplateSequence"],6226:["DT","1","EffectiveDateTime"],6230:["SQ","1","ImplantTargetAnatomySequence"],6260:["SQ","1","InformationFromManufacturerSequence"],6265:["SQ","1","NotificationFromManufacturerSequence"],6270:["DT","1","InformationIssueDateTime"],6280:["ST","1","InformationSummary"],"62A0":["SQ","1","ImplantRegulatoryDisapprovalCodeSequence"],"62A5":["FD","1","OverallTemplateSpatialTolerance"],"62C0":["SQ","1","HPGLDocumentSequence"],"62D0":["US","1","HPGLDocumentID"],"62D5":["LO","1","HPGLDocumentLabel"],"62E0":["SQ","1","ViewOrientationCodeSequence"],"62F0":["SQ","1","ViewOrientationModifierCodeSequence"],"62F2":["FD","1","HPGLDocumentScaling"],6300:["OB","1","HPGLDocument"],6310:["US","1","HPGLContourPenNumber"],6320:["SQ","1","HPGLPenSequence"],6330:["US","1","HPGLPenNumber"],6340:["LO","1","HPGLPenLabel"],6345:["ST","1","HPGLPenDescription"],6346:["FD","2","RecommendedRotationPoint"],6347:["FD","4","BoundingRectangle"],6350:["US","1-n","ImplantTemplate3DModelSurfaceNumber"],6360:["SQ","1","SurfaceModelDescriptionSequence"],6380:["LO","1","SurfaceModelLabel"],6390:["FD","1","SurfaceModelScalingFactor"],"63A0":["SQ","1","MaterialsCodeSequence"],"63A4":["SQ","1","CoatingMaterialsCodeSequence"],"63A8":["SQ","1","ImplantTypeCodeSequence"],"63AC":["SQ","1","FixationMethodCodeSequence"],"63B0":["SQ","1","MatingFeatureSetsSequence"],"63C0":["US","1","MatingFeatureSetID"],"63D0":["LO","1","MatingFeatureSetLabel"],"63E0":["SQ","1","MatingFeatureSequence"],"63F0":["US","1","MatingFeatureID"],6400:["SQ","1","MatingFeatureDegreeOfFreedomSequence"],6410:["US","1","DegreeOfFreedomID"],6420:["CS","1","DegreeOfFreedomType"],6430:["SQ","1","TwoDMatingFeatureCoordinatesSequence"],6440:["US","1","ReferencedHPGLDocumentID"],6450:["FD","2","TwoDMatingPoint"],6460:["FD","4","TwoDMatingAxes"],6470:["SQ","1","TwoDDegreeOfFreedomSequence"],6490:["FD","3","ThreeDDegreeOfFreedomAxis"],"64A0":["FD","2","RangeOfFreedom"],"64C0":["FD","3","ThreeDMatingPoint"],"64D0":["FD","9","ThreeDMatingAxes"],"64F0":["FD","3","TwoDDegreeOfFreedomAxis"],6500:["SQ","1","PlanningLandmarkPointSequence"],6510:["SQ","1","PlanningLandmarkLineSequence"],6520:["SQ","1","PlanningLandmarkPlaneSequence"],6530:["US","1","PlanningLandmarkID"],6540:["LO","1","PlanningLandmarkDescription"],6545:["SQ","1","PlanningLandmarkIdentificationCodeSequence"],6550:["SQ","1","TwoDPointCoordinatesSequence"],6560:["FD","2","TwoDPointCoordinates"],6590:["FD","3","ThreeDPointCoordinates"],"65A0":["SQ","1","TwoDLineCoordinatesSequence"],"65B0":["FD","4","TwoDLineCoordinates"],"65D0":["FD","6","ThreeDLineCoordinates"],"65E0":["SQ","1","TwoDPlaneCoordinatesSequence"],"65F0":["FD","4","TwoDPlaneIntersection"],6610:["FD","3","ThreeDPlaneOrigin"],6620:["FD","3","ThreeDPlaneNormal"],7001:["CS","1","ModelModification"],7002:["CS","1","ModelMirroring"],7003:["SQ","1","ModelUsageCodeSequence"],7004:["UI","1","ModelGroupUID"],7005:["UR","1","RelativeURIReferenceWithinEncapsulatedDocument"]},"006A":{"0000":["UL","1","GenericGroupLength"],"0001":["CS","1","AnnotationCoordinateType"],"0002":["SQ","1","AnnotationGroupSequence"],"0003":["UI","1","AnnotationGroupUID"],"0005":["LO","1","AnnotationGroupLabel"],"0006":["UT","1","AnnotationGroupDescription"],"0007":["CS","1","AnnotationGroupGenerationType"],"0008":["SQ","1","AnnotationGroupAlgorithmIdentificationSequence"],"0009":["SQ","1","AnnotationPropertyCategoryCodeSequence"],"000A":["SQ","1","AnnotationPropertyTypeCodeSequence"],"000B":["SQ","1","AnnotationPropertyTypeModifierCodeSequence"],"000C":["UL","1","NumberOfAnnotations"],"000D":["CS","1","AnnotationAppliesToAllOpticalPaths"],"000E":["SH","1-n","ReferencedOpticalPathIdentifier"],"000F":["CS","1","AnnotationAppliesToAllZPlanes"],"0010":["FD","1-n","CommonZCoordinateValue"],"0011":["OL","1","AnnotationIndexList"]},"0070":{"0000":["UL","1","GenericGroupLength"],"0001":["SQ","1","GraphicAnnotationSequence"],"0002":["CS","1","GraphicLayer"],"0003":["CS","1","BoundingBoxAnnotationUnits"],"0004":["CS","1","AnchorPointAnnotationUnits"],"0005":["CS","1","GraphicAnnotationUnits"],"0006":["ST","1","UnformattedTextValue"],"0008":["SQ","1","TextObjectSequence"],"0009":["SQ","1","GraphicObjectSequence"],"0010":["FL","2","BoundingBoxTopLeftHandCorner"],"0011":["FL","2","BoundingBoxBottomRightHandCorner"],"0012":["CS","1","BoundingBoxTextHorizontalJustification"],"0014":["FL","2","AnchorPoint"],"0015":["CS","1","AnchorPointVisibility"],"0020":["US","1","GraphicDimensions"],"0021":["US","1","NumberOfGraphicPoints"],"0022":["FL","2-n","GraphicData"],"0023":["CS","1","GraphicType"],"0024":["CS","1","GraphicFilled"],"0040":["IS","1","ImageRotationRetired"],"0041":["CS","1","ImageHorizontalFlip"],"0042":["US","1","ImageRotation"],"0050":["US","2","DisplayedAreaTopLeftHandCornerTrial"],"0051":["US","2","DisplayedAreaBottomRightHandCornerTrial"],"0052":["SL","2","DisplayedAreaTopLeftHandCorner"],"0053":["SL","2","DisplayedAreaBottomRightHandCorner"],"005A":["SQ","1","DisplayedAreaSelectionSequence"],"0060":["SQ","1","GraphicLayerSequence"],"0062":["IS","1","GraphicLayerOrder"],"0066":["US","1","GraphicLayerRecommendedDisplayGrayscaleValue"],"0067":["US","3","GraphicLayerRecommendedDisplayRGBValue"],"0068":["LO","1","GraphicLayerDescription"],"0080":["CS","1","ContentLabel"],"0081":["LO","1","ContentDescription"],"0082":["DA","1","PresentationCreationDate"],"0083":["TM","1","PresentationCreationTime"],"0084":["PN","1","ContentCreatorName"],"0086":["SQ","1","ContentCreatorIdentificationCodeSequence"],"0087":["SQ","1","AlternateContentDescriptionSequence"],"0100":["CS","1","PresentationSizeMode"],"0101":["DS","2","PresentationPixelSpacing"],"0102":["IS","2","PresentationPixelAspectRatio"],"0103":["FL","1","PresentationPixelMagnificationRatio"],"0207":["LO","1","GraphicGroupLabel"],"0208":["ST","1","GraphicGroupDescription"],"0209":["SQ","1","CompoundGraphicSequence"],"0226":["UL","1","CompoundGraphicInstanceID"],"0227":["LO","1","FontName"],"0228":["CS","1","FontNameType"],"0229":["LO","1","CSSFontName"],"0230":["FD","1","RotationAngle"],"0231":["SQ","1","TextStyleSequence"],"0232":["SQ","1","LineStyleSequence"],"0233":["SQ","1","FillStyleSequence"],"0234":["SQ","1","GraphicGroupSequence"],"0241":["US","3","TextColorCIELabValue"],"0242":["CS","1","HorizontalAlignment"],"0243":["CS","1","VerticalAlignment"],"0244":["CS","1","ShadowStyle"],"0245":["FL","1","ShadowOffsetX"],"0246":["FL","1","ShadowOffsetY"],"0247":["US","3","ShadowColorCIELabValue"],"0248":["CS","1","Underlined"],"0249":["CS","1","Bold"],"0250":["CS","1","Italic"],"0251":["US","3","PatternOnColorCIELabValue"],"0252":["US","3","PatternOffColorCIELabValue"],"0253":["FL","1","LineThickness"],"0254":["CS","1","LineDashingStyle"],"0255":["UL","1","LinePattern"],"0256":["OB","1","FillPattern"],"0257":["CS","1","FillMode"],"0258":["FL","1","ShadowOpacity"],"0261":["FL","1","GapLength"],"0262":["FL","1","DiameterOfVisibility"],"0273":["FL","2","RotationPoint"],"0274":["CS","1","TickAlignment"],"0278":["CS","1","ShowTickLabel"],"0279":["CS","1","TickLabelAlignment"],"0282":["CS","1","CompoundGraphicUnits"],"0284":["FL","1","PatternOnOpacity"],"0285":["FL","1","PatternOffOpacity"],"0287":["SQ","1","MajorTicksSequence"],"0288":["FL","1","TickPosition"],"0289":["SH","1","TickLabel"],"0294":["CS","1","CompoundGraphicType"],"0295":["UL","1","GraphicGroupID"],"0306":["CS","1","ShapeType"],"0308":["SQ","1","RegistrationSequence"],"0309":["SQ","1","MatrixRegistrationSequence"],"030A":["SQ","1","MatrixSequence"],"030B":["FD","16","FrameOfReferenceToDisplayedCoordinateSystemTransformationMatrix"],"030C":["CS","1","FrameOfReferenceTransformationMatrixType"],"030D":["SQ","1","RegistrationTypeCodeSequence"],"030F":["ST","1","FiducialDescription"],"0310":["SH","1","FiducialIdentifier"],"0311":["SQ","1","FiducialIdentifierCodeSequence"],"0312":["FD","1","ContourUncertaintyRadius"],"0314":["SQ","1","UsedFiducialsSequence"],"0318":["SQ","1","GraphicCoordinatesDataSequence"],"031A":["UI","1","FiducialUID"],"031B":["UI","1","ReferencedFiducialUID"],"031C":["SQ","1","FiducialSetSequence"],"031E":["SQ","1","FiducialSequence"],"031F":["SQ","1","FiducialsPropertyCategoryCodeSequence"],"0401":["US","3","GraphicLayerRecommendedDisplayCIELabValue"],"0402":["SQ","1","BlendingSequence"],"0403":["FL","1","RelativeOpacity"],"0404":["SQ","1","ReferencedSpatialRegistrationSequence"],"0405":["CS","1","BlendingPosition"],1101:["UI","1","PresentationDisplayCollectionUID"],1102:["UI","1","PresentationSequenceCollectionUID"],1103:["US","1","PresentationSequencePositionIndex"],1104:["SQ","1","RenderedImageReferenceSequence"],1201:["SQ","1","VolumetricPresentationStateInputSequence"],1202:["CS","1","PresentationInputType"],1203:["US","1","InputSequencePositionIndex"],1204:["CS","1","Crop"],1205:["US","1-n","CroppingSpecificationIndex"],1206:["CS","1","CompositingMethod"],1207:["US","1","VolumetricPresentationInputNumber"],1208:["CS","1","ImageVolumeGeometry"],1209:["UI","1","VolumetricPresentationInputSetUID"],"120A":["SQ","1","VolumetricPresentationInputSetSequence"],"120B":["CS","1","GlobalCrop"],"120C":["US","1-n","GlobalCroppingSpecificationIndex"],"120D":["CS","1","RenderingMethod"],1301:["SQ","1","VolumeCroppingSequence"],1302:["CS","1","VolumeCroppingMethod"],1303:["FD","6","BoundingBoxCrop"],1304:["SQ","1","ObliqueCroppingPlaneSequence"],1305:["FD","4","Plane"],1306:["FD","3","PlaneNormal"],1309:["US","1","CroppingSpecificationNumber"],1501:["CS","1","MultiPlanarReconstructionStyle"],1502:["CS","1","MPRThicknessType"],1503:["FD","1","MPRSlabThickness"],1505:["FD","3","MPRTopLeftHandCorner"],1507:["FD","3","MPRViewWidthDirection"],1508:["FD","1","MPRViewWidth"],"150C":["UL","1","NumberOfVolumetricCurvePoints"],"150D":["OD","1","VolumetricCurvePoints"],1511:["FD","3","MPRViewHeightDirection"],1512:["FD","1","MPRViewHeight"],1602:["CS","1","RenderProjection"],1603:["FD","3","ViewpointPosition"],1604:["FD","3","ViewpointLookAtPoint"],1605:["FD","3","ViewpointUpDirection"],1606:["FD","6","RenderFieldOfView"],1607:["FD","1","SamplingStepSize"],1701:["CS","1","ShadingStyle"],1702:["FD","1","AmbientReflectionIntensity"],1703:["FD","3","LightDirection"],1704:["FD","1","DiffuseReflectionIntensity"],1705:["FD","1","SpecularReflectionIntensity"],1706:["FD","1","Shininess"],1801:["SQ","1","PresentationStateClassificationComponentSequence"],1802:["CS","1","ComponentType"],1803:["SQ","1","ComponentInputSequence"],1804:["US","1","VolumetricPresentationInputIndex"],1805:["SQ","1","PresentationStateCompositorComponentSequence"],1806:["SQ","1","WeightingTransferFunctionSequence"],1807:["US","3","WeightingLookupTableDescriptor"],1808:["OB","1","WeightingLookupTableData"],1901:["SQ","1","VolumetricAnnotationSequence"],1903:["SQ","1","ReferencedStructuredContextSequence"],1904:["UI","1","ReferencedContentItem"],1905:["SQ","1","VolumetricPresentationInputAnnotationSequence"],1907:["CS","1","AnnotationClipping"],"1A01":["CS","1","PresentationAnimationStyle"],"1A03":["FD","1","RecommendedAnimationRate"],"1A04":["SQ","1","AnimationCurveSequence"],"1A05":["FD","1","AnimationStepSize"],"1A06":["FD","1","SwivelRange"],"1A07":["OD","1","VolumetricCurveUpDirections"],"1A08":["SQ","1","VolumeStreamSequence"],"1A09":["LO","1","RGBATransferFunctionDescription"],"1B01":["SQ","1","AdvancedBlendingSequence"],"1B02":["US","1","BlendingInputNumber"],"1B03":["SQ","1","BlendingDisplayInputSequence"],"1B04":["SQ","1","BlendingDisplaySequence"],"1B06":["CS","1","BlendingMode"],"1B07":["CS","1","TimeSeriesBlending"],"1B08":["CS","1","GeometryForDisplay"],"1B11":["SQ","1","ThresholdSequence"],"1B12":["SQ","1","ThresholdValueSequence"],"1B13":["CS","1","ThresholdType"],"1B14":["FD","1","ThresholdValue"]},"0072":{"0000":["UL","1","GenericGroupLength"],"0002":["SH","1","HangingProtocolName"],"0004":["LO","1","HangingProtocolDescription"],"0006":["CS","1","HangingProtocolLevel"],"0008":["LO","1","HangingProtocolCreator"],"000A":["DT","1","HangingProtocolCreationDateTime"],"000C":["SQ","1","HangingProtocolDefinitionSequence"],"000E":["SQ","1","HangingProtocolUserIdentificationCodeSequence"],"0010":["LO","1","HangingProtocolUserGroupName"],"0012":["SQ","1","SourceHangingProtocolSequence"],"0014":["US","1","NumberOfPriorsReferenced"],"0020":["SQ","1","ImageSetsSequence"],"0022":["SQ","1","ImageSetSelectorSequence"],"0024":["CS","1","ImageSetSelectorUsageFlag"],"0026":["AT","1","SelectorAttribute"],"0028":["US","1","SelectorValueNumber"],"0030":["SQ","1","TimeBasedImageSetsSequence"],"0032":["US","1","ImageSetNumber"],"0034":["CS","1","ImageSetSelectorCategory"],"0038":["US","2","RelativeTime"],"003A":["CS","1","RelativeTimeUnits"],"003C":["SS","2","AbstractPriorValue"],"003E":["SQ","1","AbstractPriorCodeSequence"],"0040":["LO","1","ImageSetLabel"],"0050":["CS","1","SelectorAttributeVR"],"0052":["AT","1-n","SelectorSequencePointer"],"0054":["LO","1-n","SelectorSequencePointerPrivateCreator"],"0056":["LO","1","SelectorAttributePrivateCreator"],"005E":["AE","1-n","SelectorAEValue"],"005F":["AS","1-n","SelectorASValue"],"0060":["AT","1-n","SelectorATValue"],"0061":["DA","1-n","SelectorDAValue"],"0062":["CS","1-n","SelectorCSValue"],"0063":["DT","1-n","SelectorDTValue"],"0064":["IS","1-n","SelectorISValue"],"0065":["OB","1","SelectorOBValue"],"0066":["LO","1-n","SelectorLOValue"],"0067":["OF","1","SelectorOFValue"],"0068":["LT","1","SelectorLTValue"],"0069":["OW","1","SelectorOWValue"],"006A":["PN","1-n","SelectorPNValue"],"006B":["TM","1-n","SelectorTMValue"],"006C":["SH","1-n","SelectorSHValue"],"006D":["UN","1","SelectorUNValue"],"006E":["ST","1","SelectorSTValue"],"006F":["UC","1-n","SelectorUCValue"],"0070":["UT","1","SelectorUTValue"],"0071":["UR","1","SelectorURValue"],"0072":["DS","1-n","SelectorDSValue"],"0073":["OD","1","SelectorODValue"],"0074":["FD","1-n","SelectorFDValue"],"0075":["OL","1","SelectorOLValue"],"0076":["FL","1-n","SelectorFLValue"],"0078":["UL","1-n","SelectorULValue"],"007A":["US","1-n","SelectorUSValue"],"007C":["SL","1-n","SelectorSLValue"],"007E":["SS","1-n","SelectorSSValue"],"007F":["UI","1-n","SelectorUIValue"],"0080":["SQ","1","SelectorCodeSequenceValue"],"0081":["OV","1","SelectorOVValue"],"0082":["SV","1-n","SelectorSVValue"],"0083":["UV","1-n","SelectorUVValue"],"0100":["US","1","NumberOfScreens"],"0102":["SQ","1","NominalScreenDefinitionSequence"],"0104":["US","1","NumberOfVerticalPixels"],"0106":["US","1","NumberOfHorizontalPixels"],"0108":["FD","4","DisplayEnvironmentSpatialPosition"],"010A":["US","1","ScreenMinimumGrayscaleBitDepth"],"010C":["US","1","ScreenMinimumColorBitDepth"],"010E":["US","1","ApplicationMaximumRepaintTime"],"0200":["SQ","1","DisplaySetsSequence"],"0202":["US","1","DisplaySetNumber"],"0203":["LO","1","DisplaySetLabel"],"0204":["US","1","DisplaySetPresentationGroup"],"0206":["LO","1","DisplaySetPresentationGroupDescription"],"0208":["CS","1","PartialDataDisplayHandling"],"0210":["SQ","1","SynchronizedScrollingSequence"],"0212":["US","2-n","DisplaySetScrollingGroup"],"0214":["SQ","1","NavigationIndicatorSequence"],"0216":["US","1","NavigationDisplaySet"],"0218":["US","1-n","ReferenceDisplaySets"],"0300":["SQ","1","ImageBoxesSequence"],"0302":["US","1","ImageBoxNumber"],"0304":["CS","1","ImageBoxLayoutType"],"0306":["US","1","ImageBoxTileHorizontalDimension"],"0308":["US","1","ImageBoxTileVerticalDimension"],"0310":["CS","1","ImageBoxScrollDirection"],"0312":["CS","1","ImageBoxSmallScrollType"],"0314":["US","1","ImageBoxSmallScrollAmount"],"0316":["CS","1","ImageBoxLargeScrollType"],"0318":["US","1","ImageBoxLargeScrollAmount"],"0320":["US","1","ImageBoxOverlapPriority"],"0330":["FD","1","CineRelativeToRealTime"],"0400":["SQ","1","FilterOperationsSequence"],"0402":["CS","1","FilterByCategory"],"0404":["CS","1","FilterByAttributePresence"],"0406":["CS","1","FilterByOperator"],"0420":["US","3","StructuredDisplayBackgroundCIELabValue"],"0421":["US","3","EmptyImageBoxCIELabValue"],"0422":["SQ","1","StructuredDisplayImageBoxSequence"],"0424":["SQ","1","StructuredDisplayTextBoxSequence"],"0427":["SQ","1","ReferencedFirstFrameSequence"],"0430":["SQ","1","ImageBoxSynchronizationSequence"],"0432":["US","2-n","SynchronizedImageBoxList"],"0434":["CS","1","TypeOfSynchronization"],"0500":["CS","1","BlendingOperationType"],"0510":["CS","1","ReformattingOperationType"],"0512":["FD","1","ReformattingThickness"],"0514":["FD","1","ReformattingInterval"],"0516":["CS","1","ReformattingOperationInitialViewDirection"],"0520":["CS","1-n","ThreeDRenderingType"],"0600":["SQ","1","SortingOperationsSequence"],"0602":["CS","1","SortByCategory"],"0604":["CS","1","SortingDirection"],"0700":["CS","2","DisplaySetPatientOrientation"],"0702":["CS","1","VOIType"],"0704":["CS","1","PseudoColorType"],"0705":["SQ","1","PseudoColorPaletteInstanceReferenceSequence"],"0706":["CS","1","ShowGrayscaleInverted"],"0710":["CS","1","ShowImageTrueSizeFlag"],"0712":["CS","1","ShowGraphicAnnotationFlag"],"0714":["CS","1","ShowPatientDemographicsFlag"],"0716":["CS","1","ShowAcquisitionTechniquesFlag"],"0717":["CS","1","DisplaySetHorizontalJustification"],"0718":["CS","1","DisplaySetVerticalJustification"]},"0074":{"0000":["UL","1","GenericGroupLength"],"0120":["FD","1","ContinuationStartMeterset"],"0121":["FD","1","ContinuationEndMeterset"],1e3:["CS","1","ProcedureStepState"],1002:["SQ","1","ProcedureStepProgressInformationSequence"],1004:["DS","1","ProcedureStepProgress"],1006:["ST","1","ProcedureStepProgressDescription"],1007:["SQ","1","ProcedureStepProgressParametersSequence"],1008:["SQ","1","ProcedureStepCommunicationsURISequence"],"100A":["UR","1","ContactURI"],"100C":["LO","1","ContactDisplayName"],"100E":["SQ","1","ProcedureStepDiscontinuationReasonCodeSequence"],1020:["SQ","1","BeamTaskSequence"],1022:["CS","1","BeamTaskType"],1024:["IS","1","BeamOrderIndexTrial"],1025:["CS","1","AutosequenceFlag"],1026:["FD","1","TableTopVerticalAdjustedPosition"],1027:["FD","1","TableTopLongitudinalAdjustedPosition"],1028:["FD","1","TableTopLateralAdjustedPosition"],"102A":["FD","1","PatientSupportAdjustedAngle"],"102B":["FD","1","TableTopEccentricAdjustedAngle"],"102C":["FD","1","TableTopPitchAdjustedAngle"],"102D":["FD","1","TableTopRollAdjustedAngle"],1030:["SQ","1","DeliveryVerificationImageSequence"],1032:["CS","1","VerificationImageTiming"],1034:["CS","1","DoubleExposureFlag"],1036:["CS","1","DoubleExposureOrdering"],1038:["DS","1","DoubleExposureMetersetTrial"],"103A":["DS","4","DoubleExposureFieldDeltaTrial"],1040:["SQ","1","RelatedReferenceRTImageSequence"],1042:["SQ","1","GeneralMachineVerificationSequence"],1044:["SQ","1","ConventionalMachineVerificationSequence"],1046:["SQ","1","IonMachineVerificationSequence"],1048:["SQ","1","FailedAttributesSequence"],"104A":["SQ","1","OverriddenAttributesSequence"],"104C":["SQ","1","ConventionalControlPointVerificationSequence"],"104E":["SQ","1","IonControlPointVerificationSequence"],1050:["SQ","1","AttributeOccurrenceSequence"],1052:["AT","1","AttributeOccurrencePointer"],1054:["UL","1","AttributeItemSelector"],1056:["LO","1","AttributeOccurrencePrivateCreator"],1057:["IS","1-n","SelectorSequencePointerItems"],1200:["CS","1","ScheduledProcedureStepPriority"],1202:["LO","1","WorklistLabel"],1204:["LO","1","ProcedureStepLabel"],1210:["SQ","1","ScheduledProcessingParametersSequence"],1212:["SQ","1","PerformedProcessingParametersSequence"],1216:["SQ","1","UnifiedProcedureStepPerformedProcedureSequence"],1220:["SQ","1","RelatedProcedureStepSequence"],1222:["LO","1","ProcedureStepRelationshipType"],1224:["SQ","1","ReplacedProcedureStepSequence"],1230:["LO","1","DeletionLock"],1234:["AE","1","ReceivingAE"],1236:["AE","1","RequestingAE"],1238:["LT","1","ReasonForCancellation"],1242:["CS","1","SCPStatus"],1244:["CS","1","SubscriptionListStatus"],1246:["CS","1","UnifiedProcedureStepListStatus"],1324:["UL","1","BeamOrderIndex"],1338:["FD","1","DoubleExposureMeterset"],"133A":["FD","4","DoubleExposureFieldDelta"],1401:["SQ","1","BrachyTaskSequence"],1402:["DS","1","ContinuationStartTotalReferenceAirKerma"],1403:["DS","1","ContinuationEndTotalReferenceAirKerma"],1404:["IS","1","ContinuationPulseNumber"],1405:["SQ","1","ChannelDeliveryOrderSequence"],1406:["IS","1","ReferencedChannelNumber"],1407:["DS","1","StartCumulativeTimeWeight"],1408:["DS","1","EndCumulativeTimeWeight"],1409:["SQ","1","OmittedChannelSequence"],"140A":["CS","1","ReasonForChannelOmission"],"140B":["LO","1","ReasonForChannelOmissionDescription"],"140C":["IS","1","ChannelDeliveryOrderIndex"],"140D":["SQ","1","ChannelDeliveryContinuationSequence"],"140E":["SQ","1","OmittedApplicationSetupSequence"]},"0076":{"0000":["UL","1","GenericGroupLength"],"0001":["LO","1","ImplantAssemblyTemplateName"],"0003":["LO","1","ImplantAssemblyTemplateIssuer"],"0006":["LO","1","ImplantAssemblyTemplateVersion"],"0008":["SQ","1","ReplacedImplantAssemblyTemplateSequence"],"000A":["CS","1","ImplantAssemblyTemplateType"],"000C":["SQ","1","OriginalImplantAssemblyTemplateSequence"],"000E":["SQ","1","DerivationImplantAssemblyTemplateSequence"],"0010":["SQ","1","ImplantAssemblyTemplateTargetAnatomySequence"],"0020":["SQ","1","ProcedureTypeCodeSequence"],"0030":["LO","1","SurgicalTechnique"],"0032":["SQ","1","ComponentTypesSequence"],"0034":["SQ","1","ComponentTypeCodeSequence"],"0036":["CS","1","ExclusiveComponentType"],"0038":["CS","1","MandatoryComponentType"],"0040":["SQ","1","ComponentSequence"],"0055":["US","1","ComponentID"],"0060":["SQ","1","ComponentAssemblySequence"],"0070":["US","1","Component1ReferencedID"],"0080":["US","1","Component1ReferencedMatingFeatureSetID"],"0090":["US","1","Component1ReferencedMatingFeatureID"],"00A0":["US","1","Component2ReferencedID"],"00B0":["US","1","Component2ReferencedMatingFeatureSetID"],"00C0":["US","1","Component2ReferencedMatingFeatureID"]},"0078":{"0000":["UL","1","GenericGroupLength"],"0001":["LO","1","ImplantTemplateGroupName"],"0010":["ST","1","ImplantTemplateGroupDescription"],"0020":["LO","1","ImplantTemplateGroupIssuer"],"0024":["LO","1","ImplantTemplateGroupVersion"],"0026":["SQ","1","ReplacedImplantTemplateGroupSequence"],"0028":["SQ","1","ImplantTemplateGroupTargetAnatomySequence"],"002A":["SQ","1","ImplantTemplateGroupMembersSequence"],"002E":["US","1","ImplantTemplateGroupMemberID"],"0050":["FD","3","ThreeDImplantTemplateGroupMemberMatchingPoint"],"0060":["FD","9","ThreeDImplantTemplateGroupMemberMatchingAxes"],"0070":["SQ","1","ImplantTemplateGroupMemberMatching2DCoordinatesSequence"],"0090":["FD","2","TwoDImplantTemplateGroupMemberMatchingPoint"],"00A0":["FD","4","TwoDImplantTemplateGroupMemberMatchingAxes"],"00B0":["SQ","1","ImplantTemplateGroupVariationDimensionSequence"],"00B2":["LO","1","ImplantTemplateGroupVariationDimensionName"],"00B4":["SQ","1","ImplantTemplateGroupVariationDimensionRankSequence"],"00B6":["US","1","ReferencedImplantTemplateGroupMemberID"],"00B8":["US","1","ImplantTemplateGroupVariationDimensionRank"]},"0080":{"0000":["UL","1","GenericGroupLength"],"0001":["SQ","1","SurfaceScanAcquisitionTypeCodeSequence"],"0002":["SQ","1","SurfaceScanModeCodeSequence"],"0003":["SQ","1","RegistrationMethodCodeSequence"],"0004":["FD","1","ShotDurationTime"],"0005":["FD","1","ShotOffsetTime"],"0006":["US","1-n","SurfacePointPresentationValueData"],"0007":["US","3-3n","SurfacePointColorCIELabValueData"],"0008":["SQ","1","UVMappingSequence"],"0009":["SH","1","TextureLabel"],"0010":["OF","1","UValueData"],"0011":["OF","1","VValueData"],"0012":["SQ","1","ReferencedTextureSequence"],"0013":["SQ","1","ReferencedSurfaceDataSequence"]},"0082":{"0000":["UL","1","GenericGroupLength"],"0001":["CS","1","AssessmentSummary"],"0003":["UT","1","AssessmentSummaryDescription"],"0004":["SQ","1","AssessedSOPInstanceSequence"],"0005":["SQ","1","ReferencedComparisonSOPInstanceSequence"],"0006":["UL","1","NumberOfAssessmentObservations"],"0007":["SQ","1","AssessmentObservationsSequence"],"0008":["CS","1","ObservationSignificance"],"000A":["UT","1","ObservationDescription"],"000C":["SQ","1","StructuredConstraintObservationSequence"],"0010":["SQ","1","AssessedAttributeValueSequence"],"0016":["LO","1","AssessmentSetID"],"0017":["SQ","1","AssessmentRequesterSequence"],"0018":["LO","1","SelectorAttributeName"],"0019":["LO","1","SelectorAttributeKeyword"],"0021":["SQ","1","AssessmentTypeCodeSequence"],"0022":["SQ","1","ObservationBasisCodeSequence"],"0023":["LO","1","AssessmentLabel"],"0032":["CS","1","ConstraintType"],"0033":["UT","1","SpecificationSelectionGuidance"],"0034":["SQ","1","ConstraintValueSequence"],"0035":["SQ","1","RecommendedDefaultValueSequence"],"0036":["CS","1","ConstraintViolationSignificance"],"0037":["UT","1","ConstraintViolationCondition"],"0038":["CS","1","ModifiableConstraintFlag"]},"0088":{"0000":["UL","1","GenericGroupLength"],"0130":["SH","1","StorageMediaFileSetID"],"0140":["UI","1","StorageMediaFileSetUID"],"0200":["SQ","1","IconImageSequence"],"0904":["LO","1","TopicTitle"],"0906":["ST","1","TopicSubject"],"0910":["LO","1","TopicAuthor"],"0912":["LO","1-32","TopicKeywords"]},"0100":{"0000":["UL","1","GenericGroupLength"],"0410":["CS","1","SOPInstanceStatus"],"0420":["DT","1","SOPAuthorizationDateTime"],"0424":["LT","1","SOPAuthorizationComment"],"0426":["LO","1","AuthorizationEquipmentCertificationNumber"]},"0400":{"0000":["UL","1","GenericGroupLength"],"0005":["US","1","MACIDNumber"],"0010":["UI","1","MACCalculationTransferSyntaxUID"],"0015":["CS","1","MACAlgorithm"],"0020":["AT","1-n","DataElementsSigned"],"0100":["UI","1","DigitalSignatureUID"],"0105":["DT","1","DigitalSignatureDateTime"],"0110":["CS","1","CertificateType"],"0115":["OB","1","CertificateOfSigner"],"0120":["OB","1","Signature"],"0305":["CS","1","CertifiedTimestampType"],"0310":["OB","1","CertifiedTimestamp"],"0315":["FL","1",""],"0401":["SQ","1","DigitalSignaturePurposeCodeSequence"],"0402":["SQ","1","ReferencedDigitalSignatureSequence"],"0403":["SQ","1","ReferencedSOPInstanceMACSequence"],"0404":["OB","1","MAC"],"0500":["SQ","1","EncryptedAttributesSequence"],"0510":["UI","1","EncryptedContentTransferSyntaxUID"],"0520":["OB","1","EncryptedContent"],"0550":["SQ","1","ModifiedAttributesSequence"],"0551":["SQ","1","NonconformingModifiedAttributesSequence"],"0552":["OB","1","NonconformingDataElementValue"],"0561":["SQ","1","OriginalAttributesSequence"],"0562":["DT","1","AttributeModificationDateTime"],"0563":["LO","1","ModifyingSystem"],"0564":["LO","1","SourceOfPreviousValues"],"0565":["CS","1","ReasonForTheAttributeModification"],"0600":["CS","1","InstanceOriginStatus"]},1e3:{"0000":["UL","1","GenericGroupLength"],"0010":["US","3","EscapeTriplet"],"0011":["US","3","RunLengthTriplet"],"0012":["US","1","HuffmanTableSize"],"0013":["US","3","HuffmanTableTriplet"],"0014":["US","1","ShiftTableSize"],"0015":["US","3","ShiftTableTriplet"]},1010:{"0000":["UL","1","GenericGroupLength"],"0004":["US","1-n","ZonalMap"]},2e3:{"0000":["UL","1","GenericGroupLength"],"0010":["IS","1","NumberOfCopies"],"001E":["SQ","1","PrinterConfigurationSequence"],"0020":["CS","1","PrintPriority"],"0030":["CS","1","MediumType"],"0040":["CS","1","FilmDestination"],"0050":["LO","1","FilmSessionLabel"],"0060":["IS","1","MemoryAllocation"],"0061":["IS","1","MaximumMemoryAllocation"],"0062":["CS","1","ColorImagePrintingFlag"],"0063":["CS","1","CollationFlag"],"0065":["CS","1","AnnotationFlag"],"0067":["CS","1","ImageOverlayFlag"],"0069":["CS","1","PresentationLUTFlag"],"006A":["CS","1","ImageBoxPresentationLUTFlag"],"00A0":["US","1","MemoryBitDepth"],"00A1":["US","1","PrintingBitDepth"],"00A2":["SQ","1","MediaInstalledSequence"],"00A4":["SQ","1","OtherMediaAvailableSequence"],"00A8":["SQ","1","SupportedImageDisplayFormatsSequence"],"0500":["SQ","1","ReferencedFilmBoxSequence"],"0510":["SQ","1","ReferencedStoredPrintSequence"]},2010:{"0000":["UL","1","GenericGroupLength"],"0010":["ST","1","ImageDisplayFormat"],"0030":["CS","1","AnnotationDisplayFormatID"],"0040":["CS","1","FilmOrientation"],"0050":["CS","1","FilmSizeID"],"0052":["CS","1","PrinterResolutionID"],"0054":["CS","1","DefaultPrinterResolutionID"],"0060":["CS","1","MagnificationType"],"0080":["CS","1","SmoothingType"],"00A6":["CS","1","DefaultMagnificationType"],"00A7":["CS","1-n","OtherMagnificationTypesAvailable"],"00A8":["CS","1","DefaultSmoothingType"],"00A9":["CS","1-n","OtherSmoothingTypesAvailable"],"0100":["CS","1","BorderDensity"],"0110":["CS","1","EmptyImageDensity"],"0120":["US","1","MinDensity"],"0130":["US","1","MaxDensity"],"0140":["CS","1","Trim"],"0150":["ST","1","ConfigurationInformation"],"0152":["LT","1","ConfigurationInformationDescription"],"0154":["IS","1","MaximumCollatedFilms"],"015E":["US","1","Illumination"],"0160":["US","1","ReflectedAmbientLight"],"0376":["DS","2","PrinterPixelSpacing"],"0500":["SQ","1","ReferencedFilmSessionSequence"],"0510":["SQ","1","ReferencedImageBoxSequence"],"0520":["SQ","1","ReferencedBasicAnnotationBoxSequence"]},2020:{"0000":["UL","1","GenericGroupLength"],"0010":["US","1","ImageBoxPosition"],"0020":["CS","1","Polarity"],"0030":["DS","1","RequestedImageSize"],"0040":["CS","1","RequestedDecimateCropBehavior"],"0050":["CS","1","RequestedResolutionID"],"00A0":["CS","1","RequestedImageSizeFlag"],"00A2":["CS","1","DecimateCropResult"],"0110":["SQ","1","BasicGrayscaleImageSequence"],"0111":["SQ","1","BasicColorImageSequence"],"0130":["SQ","1","ReferencedImageOverlayBoxSequence"],"0140":["SQ","1","ReferencedVOILUTBoxSequence"]},2030:{"0000":["UL","1","GenericGroupLength"],"0010":["US","1","AnnotationPosition"],"0020":["LO","1","TextString"]},2040:{"0000":["UL","1","GenericGroupLength"],"0010":["SQ","1","ReferencedOverlayPlaneSequence"],"0011":["US","1-99","ReferencedOverlayPlaneGroups"],"0020":["SQ","1","OverlayPixelDataSequence"],"0060":["CS","1","OverlayMagnificationType"],"0070":["CS","1","OverlaySmoothingType"],"0072":["CS","1","OverlayOrImageMagnification"],"0074":["US","1","MagnifyToNumberOfColumns"],"0080":["CS","1","OverlayForegroundDensity"],"0082":["CS","1","OverlayBackgroundDensity"],"0090":["CS","1","OverlayMode"],"0100":["CS","1","ThresholdDensity"],"0500":["SQ","1","ReferencedImageBoxSequenceRetired"]},2050:{"0000":["UL","1","GenericGroupLength"],"0010":["SQ","1","PresentationLUTSequence"],"0020":["CS","1","PresentationLUTShape"],"0500":["SQ","1","ReferencedPresentationLUTSequence"]},2100:{"0000":["UL","1","GenericGroupLength"],"0010":["SH","1","PrintJobID"],"0020":["CS","1","ExecutionStatus"],"0030":["CS","1","ExecutionStatusInfo"],"0040":["DA","1","CreationDate"],"0050":["TM","1","CreationTime"],"0070":["AE","1","Originator"],"0140":["AE","1","DestinationAE"],"0160":["SH","1","OwnerID"],"0170":["IS","1","NumberOfFilms"],"0500":["SQ","1","ReferencedPrintJobSequencePullStoredPrint"]},2110:{"0000":["UL","1","GenericGroupLength"],"0010":["CS","1","PrinterStatus"],"0020":["CS","1","PrinterStatusInfo"],"0030":["LO","1","PrinterName"],"0099":["SH","1","PrintQueueID"]},2120:{"0000":["UL","1","GenericGroupLength"],"0010":["CS","1","QueueStatus"],"0050":["SQ","1","PrintJobDescriptionSequence"],"0070":["SQ","1","ReferencedPrintJobSequence"]},2130:{"0000":["UL","1","GenericGroupLength"],"0010":["SQ","1","PrintManagementCapabilitiesSequence"],"0015":["SQ","1","PrinterCharacteristicsSequence"],"0030":["SQ","1","FilmBoxContentSequence"],"0040":["SQ","1","ImageBoxContentSequence"],"0050":["SQ","1","AnnotationContentSequence"],"0060":["SQ","1","ImageOverlayBoxContentSequence"],"0080":["SQ","1","PresentationLUTContentSequence"],"00A0":["SQ","1","ProposedStudySequence"],"00C0":["SQ","1","OriginalImageSequence"]},2200:{"0000":["UL","1","GenericGroupLength"],"0001":["CS","1","LabelUsingInformationExtractedFromInstances"],"0002":["UT","1","LabelText"],"0003":["CS","1","LabelStyleSelection"],"0004":["LT","1","MediaDisposition"],"0005":["LT","1","BarcodeValue"],"0006":["CS","1","BarcodeSymbology"],"0007":["CS","1","AllowMediaSplitting"],"0008":["CS","1","IncludeNonDICOMObjects"],"0009":["CS","1","IncludeDisplayApplication"],"000A":["CS","1","PreserveCompositeInstancesAfterMediaCreation"],"000B":["US","1","TotalNumberOfPiecesOfMediaCreated"],"000C":["LO","1","RequestedMediaApplicationProfile"],"000D":["SQ","1","ReferencedStorageMediaSequence"],"000E":["AT","1-n","FailureAttributes"],"000F":["CS","1","AllowLossyCompression"],"0020":["CS","1","RequestPriority"]},3002:{"0000":["UL","1","GenericGroupLength"],"0002":["SH","1","RTImageLabel"],"0003":["LO","1","RTImageName"],"0004":["ST","1","RTImageDescription"],"000A":["CS","1","ReportedValuesOrigin"],"000C":["CS","1","RTImagePlane"],"000D":["DS","3","XRayImageReceptorTranslation"],"000E":["DS","1","XRayImageReceptorAngle"],"0010":["DS","6","RTImageOrientation"],"0011":["DS","2","ImagePlanePixelSpacing"],"0012":["DS","2","RTImagePosition"],"0020":["SH","1","RadiationMachineName"],"0022":["DS","1","RadiationMachineSAD"],"0024":["DS","1","RadiationMachineSSD"],"0026":["DS","1","RTImageSID"],"0028":["DS","1","SourceToReferenceObjectDistance"],"0029":["IS","1","FractionNumber"],"0030":["SQ","1","ExposureSequence"],"0032":["DS","1","MetersetExposure"],"0034":["DS","4","DiaphragmPosition"],"0040":["SQ","1","FluenceMapSequence"],"0041":["CS","1","FluenceDataSource"],"0042":["DS","1","FluenceDataScale"],"0050":["SQ","1","PrimaryFluenceModeSequence"],"0051":["CS","1","FluenceMode"],"0052":["SH","1","FluenceModeID"]},3004:{"0000":["UL","1","GenericGroupLength"],"0001":["CS","1","DVHType"],"0002":["CS","1","DoseUnits"],"0004":["CS","1","DoseType"],"0005":["CS","1","SpatialTransformOfDose"],"0006":["LO","1","DoseComment"],"0008":["DS","3","NormalizationPoint"],"000A":["CS","1","DoseSummationType"],"000C":["DS","2-n","GridFrameOffsetVector"],"000E":["DS","1","DoseGridScaling"],"0010":["SQ","1","RTDoseROISequence"],"0012":["DS","1","DoseValue"],"0014":["CS","1-3","TissueHeterogeneityCorrection"],"0040":["DS","3","DVHNormalizationPoint"],"0042":["DS","1","DVHNormalizationDoseValue"],"0050":["SQ","1","DVHSequence"],"0052":["DS","1","DVHDoseScaling"],"0054":["CS","1","DVHVolumeUnits"],"0056":["IS","1","DVHNumberOfBins"],"0058":["DS","2-2n","DVHData"],"0060":["SQ","1","DVHReferencedROISequence"],"0062":["CS","1","DVHROIContributionType"],"0070":["DS","1","DVHMinimumDose"],"0072":["DS","1","DVHMaximumDose"],"0074":["DS","1","DVHMeanDose"]},3006:{"0000":["UL","1","GenericGroupLength"],"0002":["SH","1","StructureSetLabel"],"0004":["LO","1","StructureSetName"],"0006":["ST","1","StructureSetDescription"],"0008":["DA","1","StructureSetDate"],"0009":["TM","1","StructureSetTime"],"0010":["SQ","1","ReferencedFrameOfReferenceSequence"],"0012":["SQ","1","RTReferencedStudySequence"],"0014":["SQ","1","RTReferencedSeriesSequence"],"0016":["SQ","1","ContourImageSequence"],"0018":["SQ","1","PredecessorStructureSetSequence"],"0020":["SQ","1","StructureSetROISequence"],"0022":["IS","1","ROINumber"],"0024":["UI","1","ReferencedFrameOfReferenceUID"],"0026":["LO","1","ROIName"],"0028":["ST","1","ROIDescription"],"002A":["IS","3","ROIDisplayColor"],"002C":["DS","1","ROIVolume"],"0030":["SQ","1","RTRelatedROISequence"],"0033":["CS","1","RTROIRelationship"],"0036":["CS","1","ROIGenerationAlgorithm"],"0037":["SQ","1","ROIDerivationAlgorithmIdentificationSequence"],"0038":["LO","1","ROIGenerationDescription"],"0039":["SQ","1","ROIContourSequence"],"0040":["SQ","1","ContourSequence"],"0042":["CS","1","ContourGeometricType"],"0044":["DS","1","ContourSlabThickness"],"0045":["DS","3","ContourOffsetVector"],"0046":["IS","1","NumberOfContourPoints"],"0048":["IS","1","ContourNumber"],"0049":["IS","1-n","AttachedContours"],"004A":["SQ","1","SourcePixelPlanesCharacteristicsSequence"],"0050":["DS","3-3n","ContourData"],"0080":["SQ","1","RTROIObservationsSequence"],"0082":["IS","1","ObservationNumber"],"0084":["IS","1","ReferencedROINumber"],"0085":["SH","1","ROIObservationLabel"],"0086":["SQ","1","RTROIIdentificationCodeSequence"],"0088":["ST","1","ROIObservationDescription"],"00A0":["SQ","1","RelatedRTROIObservationsSequence"],"00A4":["CS","1","RTROIInterpretedType"],"00A6":["PN","1","ROIInterpreter"],"00B0":["SQ","1","ROIPhysicalPropertiesSequence"],"00B2":["CS","1","ROIPhysicalProperty"],"00B4":["DS","1","ROIPhysicalPropertyValue"],"00B6":["SQ","1","ROIElementalCompositionSequence"],"00B7":["US","1","ROIElementalCompositionAtomicNumber"],"00B8":["FL","1","ROIElementalCompositionAtomicMassFraction"],"00B9":["SQ","1","AdditionalRTROIIdentificationCodeSequence"],"00C0":["SQ","1","FrameOfReferenceRelationshipSequence"],"00C2":["UI","1","RelatedFrameOfReferenceUID"],"00C4":["CS","1","FrameOfReferenceTransformationType"],"00C6":["DS","16","FrameOfReferenceTransformationMatrix"],"00C8":["LO","1","FrameOfReferenceTransformationComment"],"00C9":["SQ","1","PatientLocationCoordinatesSequence"],"00CA":["SQ","1","PatientLocationCoordinatesCodeSequence"],"00CB":["SQ","1","PatientSupportPositionSequence"]},3008:{"0000":["UL","1","GenericGroupLength"],"0010":["SQ","1","MeasuredDoseReferenceSequence"],"0012":["ST","1","MeasuredDoseDescription"],"0014":["CS","1","MeasuredDoseType"],"0016":["DS","1","MeasuredDoseValue"],"0020":["SQ","1","TreatmentSessionBeamSequence"],"0021":["SQ","1","TreatmentSessionIonBeamSequence"],"0022":["IS","1","CurrentFractionNumber"],"0024":["DA","1","TreatmentControlPointDate"],"0025":["TM","1","TreatmentControlPointTime"],"002A":["CS","1","TreatmentTerminationStatus"],"002B":["SH","1","TreatmentTerminationCode"],"002C":["CS","1","TreatmentVerificationStatus"],"0030":["SQ","1","ReferencedTreatmentRecordSequence"],"0032":["DS","1","SpecifiedPrimaryMeterset"],"0033":["DS","1","SpecifiedSecondaryMeterset"],"0036":["DS","1","DeliveredPrimaryMeterset"],"0037":["DS","1","DeliveredSecondaryMeterset"],"003A":["DS","1","SpecifiedTreatmentTime"],"003B":["DS","1","DeliveredTreatmentTime"],"0040":["SQ","1","ControlPointDeliverySequence"],"0041":["SQ","1","IonControlPointDeliverySequence"],"0042":["DS","1","SpecifiedMeterset"],"0044":["DS","1","DeliveredMeterset"],"0045":["FL","1","MetersetRateSet"],"0046":["FL","1","MetersetRateDelivered"],"0047":["FL","1-n","ScanSpotMetersetsDelivered"],"0048":["DS","1","DoseRateDelivered"],"0050":["SQ","1","TreatmentSummaryCalculatedDoseReferenceSequence"],"0052":["DS","1","CumulativeDoseToDoseReference"],"0054":["DA","1","FirstTreatmentDate"],"0056":["DA","1","MostRecentTreatmentDate"],"005A":["IS","1","NumberOfFractionsDelivered"],"0060":["SQ","1","OverrideSequence"],"0061":["AT","1","ParameterSequencePointer"],"0062":["AT","1","OverrideParameterPointer"],"0063":["IS","1","ParameterItemIndex"],"0064":["IS","1","MeasuredDoseReferenceNumber"],"0065":["AT","1","ParameterPointer"],"0066":["ST","1","OverrideReason"],"0067":["US","1","ParameterValueNumber"],"0068":["SQ","1","CorrectedParameterSequence"],"006A":["FL","1","CorrectionValue"],"0070":["SQ","1","CalculatedDoseReferenceSequence"],"0072":["IS","1","CalculatedDoseReferenceNumber"],"0074":["ST","1","CalculatedDoseReferenceDescription"],"0076":["DS","1","CalculatedDoseReferenceDoseValue"],"0078":["DS","1","StartMeterset"],"007A":["DS","1","EndMeterset"],"0080":["SQ","1","ReferencedMeasuredDoseReferenceSequence"],"0082":["IS","1","ReferencedMeasuredDoseReferenceNumber"],"0090":["SQ","1","ReferencedCalculatedDoseReferenceSequence"],"0092":["IS","1","ReferencedCalculatedDoseReferenceNumber"],"00A0":["SQ","1","BeamLimitingDeviceLeafPairsSequence"],"00B0":["SQ","1","RecordedWedgeSequence"],"00C0":["SQ","1","RecordedCompensatorSequence"],"00D0":["SQ","1","RecordedBlockSequence"],"00D1":["SQ","1","RecordedBlockSlabSequence"],"00E0":["SQ","1","TreatmentSummaryMeasuredDoseReferenceSequence"],"00F0":["SQ","1","RecordedSnoutSequence"],"00F2":["SQ","1","RecordedRangeShifterSequence"],"00F4":["SQ","1","RecordedLateralSpreadingDeviceSequence"],"00F6":["SQ","1","RecordedRangeModulatorSequence"],"0100":["SQ","1","RecordedSourceSequence"],"0105":["LO","1","SourceSerialNumber"],"0110":["SQ","1","TreatmentSessionApplicationSetupSequence"],"0116":["CS","1","ApplicationSetupCheck"],"0120":["SQ","1","RecordedBrachyAccessoryDeviceSequence"],"0122":["IS","1","ReferencedBrachyAccessoryDeviceNumber"],"0130":["SQ","1","RecordedChannelSequence"],"0132":["DS","1","SpecifiedChannelTotalTime"],"0134":["DS","1","DeliveredChannelTotalTime"],"0136":["IS","1","SpecifiedNumberOfPulses"],"0138":["IS","1","DeliveredNumberOfPulses"],"013A":["DS","1","SpecifiedPulseRepetitionInterval"],"013C":["DS","1","DeliveredPulseRepetitionInterval"],"0140":["SQ","1","RecordedSourceApplicatorSequence"],"0142":["IS","1","ReferencedSourceApplicatorNumber"],"0150":["SQ","1","RecordedChannelShieldSequence"],"0152":["IS","1","ReferencedChannelShieldNumber"],"0160":["SQ","1","BrachyControlPointDeliveredSequence"],"0162":["DA","1","SafePositionExitDate"],"0164":["TM","1","SafePositionExitTime"],"0166":["DA","1","SafePositionReturnDate"],"0168":["TM","1","SafePositionReturnTime"],"0171":["SQ","1","PulseSpecificBrachyControlPointDeliveredSequence"],"0172":["US","1","PulseNumber"],"0173":["SQ","1","BrachyPulseControlPointDeliveredSequence"],"0200":["CS","1","CurrentTreatmentStatus"],"0202":["ST","1","TreatmentStatusComment"],"0220":["SQ","1","FractionGroupSummarySequence"],"0223":["IS","1","ReferencedFractionNumber"],"0224":["CS","1","FractionGroupType"],"0230":["CS","1","BeamStopperPosition"],"0240":["SQ","1","FractionStatusSummarySequence"],"0250":["DA","1","TreatmentDate"],"0251":["TM","1","TreatmentTime"]},"300A":{"0000":["UL","1","GenericGroupLength"],"0002":["SH","1","RTPlanLabel"],"0003":["LO","1","RTPlanName"],"0004":["ST","1","RTPlanDescription"],"0006":["DA","1","RTPlanDate"],"0007":["TM","1","RTPlanTime"],"0009":["LO","1-n","TreatmentProtocols"],"000A":["CS","1","PlanIntent"],"000B":["LO","1-n","TreatmentSites"],"000C":["CS","1","RTPlanGeometry"],"000E":["ST","1","PrescriptionDescription"],"0010":["SQ","1","DoseReferenceSequence"],"0012":["IS","1","DoseReferenceNumber"],"0013":["UI","1","DoseReferenceUID"],"0014":["CS","1","DoseReferenceStructureType"],"0015":["CS","1","NominalBeamEnergyUnit"],"0016":["LO","1","DoseReferenceDescription"],"0018":["DS","3","DoseReferencePointCoordinates"],"001A":["DS","1","NominalPriorDose"],"0020":["CS","1","DoseReferenceType"],"0021":["DS","1","ConstraintWeight"],"0022":["DS","1","DeliveryWarningDose"],"0023":["DS","1","DeliveryMaximumDose"],"0025":["DS","1","TargetMinimumDose"],"0026":["DS","1","TargetPrescriptionDose"],"0027":["DS","1","TargetMaximumDose"],"0028":["DS","1","TargetUnderdoseVolumeFraction"],"002A":["DS","1","OrganAtRiskFullVolumeDose"],"002B":["DS","1","OrganAtRiskLimitDose"],"002C":["DS","1","OrganAtRiskMaximumDose"],"002D":["DS","1","OrganAtRiskOverdoseVolumeFraction"],"0040":["SQ","1","ToleranceTableSequence"],"0042":["IS","1","ToleranceTableNumber"],"0043":["SH","1","ToleranceTableLabel"],"0044":["DS","1","GantryAngleTolerance"],"0046":["DS","1","BeamLimitingDeviceAngleTolerance"],"0048":["SQ","1","BeamLimitingDeviceToleranceSequence"],"004A":["DS","1","BeamLimitingDevicePositionTolerance"],"004B":["FL","1","SnoutPositionTolerance"],"004C":["DS","1","PatientSupportAngleTolerance"],"004E":["DS","1","TableTopEccentricAngleTolerance"],"004F":["FL","1","TableTopPitchAngleTolerance"],"0050":["FL","1","TableTopRollAngleTolerance"],"0051":["DS","1","TableTopVerticalPositionTolerance"],"0052":["DS","1","TableTopLongitudinalPositionTolerance"],"0053":["DS","1","TableTopLateralPositionTolerance"],"0055":["CS","1","RTPlanRelationship"],"0070":["SQ","1","FractionGroupSequence"],"0071":["IS","1","FractionGroupNumber"],"0072":["LO","1","FractionGroupDescription"],"0078":["IS","1","NumberOfFractionsPlanned"],"0079":["IS","1","NumberOfFractionPatternDigitsPerDay"],"007A":["IS","1","RepeatFractionCycleLength"],"007B":["LT","1","FractionPattern"],"0080":["IS","1","NumberOfBeams"],"0082":["DS","3","BeamDoseSpecificationPoint"],"0083":["UI","1","ReferencedDoseReferenceUID"],"0084":["DS","1","BeamDose"],"0086":["DS","1","BeamMeterset"],"0088":["FL","1","BeamDosePointDepth"],"0089":["FL","1","BeamDosePointEquivalentDepth"],"008A":["FL","1","BeamDosePointSSD"],"008B":["CS","1","BeamDoseMeaning"],"008C":["SQ","1","BeamDoseVerificationControlPointSequence"],"008D":["FL","1","AverageBeamDosePointDepth"],"008E":["FL","1","AverageBeamDosePointEquivalentDepth"],"008F":["FL","1","AverageBeamDosePointSSD"],"0090":["CS","1","BeamDoseType"],"0091":["DS","1","AlternateBeamDose"],"0092":["CS","1","AlternateBeamDoseType"],"0093":["CS","1","DepthValueAveragingFlag"],"0094":["DS","1","BeamDosePointSourceToExternalContourDistance"],"00A0":["IS","1","NumberOfBrachyApplicationSetups"],"00A2":["DS","3","BrachyApplicationSetupDoseSpecificationPoint"],"00A4":["DS","1","BrachyApplicationSetupDose"],"00B0":["SQ","1","BeamSequence"],"00B2":["SH","1","TreatmentMachineName"],"00B3":["CS","1","PrimaryDosimeterUnit"],"00B4":["DS","1","SourceAxisDistance"],"00B6":["SQ","1","BeamLimitingDeviceSequence"],"00B8":["CS","1","RTBeamLimitingDeviceType"],"00BA":["DS","1","SourceToBeamLimitingDeviceDistance"],"00BB":["FL","1","IsocenterToBeamLimitingDeviceDistance"],"00BC":["IS","1","NumberOfLeafJawPairs"],"00BE":["DS","3-n","LeafPositionBoundaries"],"00C0":["IS","1","BeamNumber"],"00C2":["LO","1","BeamName"],"00C3":["ST","1","BeamDescription"],"00C4":["CS","1","BeamType"],"00C5":["FD","1","BeamDeliveryDurationLimit"],"00C6":["CS","1","RadiationType"],"00C7":["CS","1","HighDoseTechniqueType"],"00C8":["IS","1","ReferenceImageNumber"],"00CA":["SQ","1","PlannedVerificationImageSequence"],"00CC":["LO","1-n","ImagingDeviceSpecificAcquisitionParameters"],"00CE":["CS","1","TreatmentDeliveryType"],"00D0":["IS","1","NumberOfWedges"],"00D1":["SQ","1","WedgeSequence"],"00D2":["IS","1","WedgeNumber"],"00D3":["CS","1","WedgeType"],"00D4":["SH","1","WedgeID"],"00D5":["IS","1","WedgeAngle"],"00D6":["DS","1","WedgeFactor"],"00D7":["FL","1","TotalWedgeTrayWaterEquivalentThickness"],"00D8":["DS","1","WedgeOrientation"],"00D9":["FL","1","IsocenterToWedgeTrayDistance"],"00DA":["DS","1","SourceToWedgeTrayDistance"],"00DB":["FL","1","WedgeThinEdgePosition"],"00DC":["SH","1","BolusID"],"00DD":["ST","1","BolusDescription"],"00DE":["DS","1","EffectiveWedgeAngle"],"00E0":["IS","1","NumberOfCompensators"],"00E1":["SH","1","MaterialID"],"00E2":["DS","1","TotalCompensatorTrayFactor"],"00E3":["SQ","1","CompensatorSequence"],"00E4":["IS","1","CompensatorNumber"],"00E5":["SH","1","CompensatorID"],"00E6":["DS","1","SourceToCompensatorTrayDistance"],"00E7":["IS","1","CompensatorRows"],"00E8":["IS","1","CompensatorColumns"],"00E9":["DS","2","CompensatorPixelSpacing"],"00EA":["DS","2","CompensatorPosition"],"00EB":["DS","1-n","CompensatorTransmissionData"],"00EC":["DS","1-n","CompensatorThicknessData"],"00ED":["IS","1","NumberOfBoli"],"00EE":["CS","1","CompensatorType"],"00EF":["SH","1","CompensatorTrayID"],"00F0":["IS","1","NumberOfBlocks"],"00F2":["DS","1","TotalBlockTrayFactor"],"00F3":["FL","1","TotalBlockTrayWaterEquivalentThickness"],"00F4":["SQ","1","BlockSequence"],"00F5":["SH","1","BlockTrayID"],"00F6":["DS","1","SourceToBlockTrayDistance"],"00F7":["FL","1","IsocenterToBlockTrayDistance"],"00F8":["CS","1","BlockType"],"00F9":["LO","1","AccessoryCode"],"00FA":["CS","1","BlockDivergence"],"00FB":["CS","1","BlockMountingPosition"],"00FC":["IS","1","BlockNumber"],"00FE":["LO","1","BlockName"],"0100":["DS","1","BlockThickness"],"0102":["DS","1","BlockTransmission"],"0104":["IS","1","BlockNumberOfPoints"],"0106":["DS","2-2n","BlockData"],"0107":["SQ","1","ApplicatorSequence"],"0108":["SH","1","ApplicatorID"],"0109":["CS","1","ApplicatorType"],"010A":["LO","1","ApplicatorDescription"],"010C":["DS","1","CumulativeDoseReferenceCoefficient"],"010E":["DS","1","FinalCumulativeMetersetWeight"],"0110":["IS","1","NumberOfControlPoints"],"0111":["SQ","1","ControlPointSequence"],"0112":["IS","1","ControlPointIndex"],"0114":["DS","1","NominalBeamEnergy"],"0115":["DS","1","DoseRateSet"],"0116":["SQ","1","WedgePositionSequence"],"0118":["CS","1","WedgePosition"],"011A":["SQ","1","BeamLimitingDevicePositionSequence"],"011C":["DS","2-2n","LeafJawPositions"],"011E":["DS","1","GantryAngle"],"011F":["CS","1","GantryRotationDirection"],"0120":["DS","1","BeamLimitingDeviceAngle"],"0121":["CS","1","BeamLimitingDeviceRotationDirection"],"0122":["DS","1","PatientSupportAngle"],"0123":["CS","1","PatientSupportRotationDirection"],"0124":["DS","1","TableTopEccentricAxisDistance"],"0125":["DS","1","TableTopEccentricAngle"],"0126":["CS","1","TableTopEccentricRotationDirection"],"0128":["DS","1","TableTopVerticalPosition"],"0129":["DS","1","TableTopLongitudinalPosition"],"012A":["DS","1","TableTopLateralPosition"],"012C":["DS","3","IsocenterPosition"],"012E":["DS","3","SurfaceEntryPoint"],"0130":["DS","1","SourceToSurfaceDistance"],"0131":["FL","1","AverageBeamDosePointSourceToExternalContourDistance"],"0132":["FL","1","SourceToExternalContourDistance"],"0133":["FL","3","ExternalContourEntryPoint"],"0134":["DS","1","CumulativeMetersetWeight"],"0140":["FL","1","TableTopPitchAngle"],"0142":["CS","1","TableTopPitchRotationDirection"],"0144":["FL","1","TableTopRollAngle"],"0146":["CS","1","TableTopRollRotationDirection"],"0148":["FL","1","HeadFixationAngle"],"014A":["FL","1","GantryPitchAngle"],"014C":["CS","1","GantryPitchRotationDirection"],"014E":["FL","1","GantryPitchAngleTolerance"],"0150":["CS","1","FixationEye"],"0151":["DS","1","ChairHeadFramePosition"],"0152":["DS","1","HeadFixationAngleTolerance"],"0153":["DS","1","ChairHeadFramePositionTolerance"],"0154":["DS","1","FixationLightAzimuthalAngleTolerance"],"0155":["DS","1","FixationLightPolarAngleTolerance"],"0180":["SQ","1","PatientSetupSequence"],"0182":["IS","1","PatientSetupNumber"],"0183":["LO","1","PatientSetupLabel"],"0184":["LO","1","PatientAdditionalPosition"],"0190":["SQ","1","FixationDeviceSequence"],"0192":["CS","1","FixationDeviceType"],"0194":["SH","1","FixationDeviceLabel"],"0196":["ST","1","FixationDeviceDescription"],"0198":["SH","1","FixationDevicePosition"],"0199":["FL","1","FixationDevicePitchAngle"],"019A":["FL","1","FixationDeviceRollAngle"],"01A0":["SQ","1","ShieldingDeviceSequence"],"01A2":["CS","1","ShieldingDeviceType"],"01A4":["SH","1","ShieldingDeviceLabel"],"01A6":["ST","1","ShieldingDeviceDescription"],"01A8":["SH","1","ShieldingDevicePosition"],"01B0":["CS","1","SetupTechnique"],"01B2":["ST","1","SetupTechniqueDescription"],"01B4":["SQ","1","SetupDeviceSequence"],"01B6":["CS","1","SetupDeviceType"],"01B8":["SH","1","SetupDeviceLabel"],"01BA":["ST","1","SetupDeviceDescription"],"01BC":["DS","1","SetupDeviceParameter"],"01D0":["ST","1","SetupReferenceDescription"],"01D2":["DS","1","TableTopVerticalSetupDisplacement"],"01D4":["DS","1","TableTopLongitudinalSetupDisplacement"],"01D6":["DS","1","TableTopLateralSetupDisplacement"],"0200":["CS","1","BrachyTreatmentTechnique"],"0202":["CS","1","BrachyTreatmentType"],"0206":["SQ","1","TreatmentMachineSequence"],"0210":["SQ","1","SourceSequence"],"0212":["IS","1","SourceNumber"],"0214":["CS","1","SourceType"],"0216":["LO","1","SourceManufacturer"],"0218":["DS","1","ActiveSourceDiameter"],"021A":["DS","1","ActiveSourceLength"],"021B":["SH","1","SourceModelID"],"021C":["LO","1","SourceDescription"],"0222":["DS","1","SourceEncapsulationNominalThickness"],"0224":["DS","1","SourceEncapsulationNominalTransmission"],"0226":["LO","1","SourceIsotopeName"],"0228":["DS","1","SourceIsotopeHalfLife"],"0229":["CS","1","SourceStrengthUnits"],"022A":["DS","1","ReferenceAirKermaRate"],"022B":["DS","1","SourceStrength"],"022C":["DA","1","SourceStrengthReferenceDate"],"022E":["TM","1","SourceStrengthReferenceTime"],"0230":["SQ","1","ApplicationSetupSequence"],"0232":["CS","1","ApplicationSetupType"],"0234":["IS","1","ApplicationSetupNumber"],"0236":["LO","1","ApplicationSetupName"],"0238":["LO","1","ApplicationSetupManufacturer"],"0240":["IS","1","TemplateNumber"],"0242":["SH","1","TemplateType"],"0244":["LO","1","TemplateName"],"0250":["DS","1","TotalReferenceAirKerma"],"0260":["SQ","1","BrachyAccessoryDeviceSequence"],"0262":["IS","1","BrachyAccessoryDeviceNumber"],"0263":["SH","1","BrachyAccessoryDeviceID"],"0264":["CS","1","BrachyAccessoryDeviceType"],"0266":["LO","1","BrachyAccessoryDeviceName"],"026A":["DS","1","BrachyAccessoryDeviceNominalThickness"],"026C":["DS","1","BrachyAccessoryDeviceNominalTransmission"],"0271":["DS","1","ChannelEffectiveLength"],"0272":["DS","1","ChannelInnerLength"],"0273":["SH","1","AfterloaderChannelID"],"0274":["DS","1","SourceApplicatorTipLength"],"0280":["SQ","1","ChannelSequence"],"0282":["IS","1","ChannelNumber"],"0284":["DS","1","ChannelLength"],"0286":["DS","1","ChannelTotalTime"],"0288":["CS","1","SourceMovementType"],"028A":["IS","1","NumberOfPulses"],"028C":["DS","1","PulseRepetitionInterval"],"0290":["IS","1","SourceApplicatorNumber"],"0291":["SH","1","SourceApplicatorID"],"0292":["CS","1","SourceApplicatorType"],"0294":["LO","1","SourceApplicatorName"],"0296":["DS","1","SourceApplicatorLength"],"0298":["LO","1","SourceApplicatorManufacturer"],"029C":["DS","1","SourceApplicatorWallNominalThickness"],"029E":["DS","1","SourceApplicatorWallNominalTransmission"],"02A0":["DS","1","SourceApplicatorStepSize"],"02A1":["IS","1","ApplicatorShapeReferencedROINumber"],"02A2":["IS","1","TransferTubeNumber"],"02A4":["DS","1","TransferTubeLength"],"02B0":["SQ","1","ChannelShieldSequence"],"02B2":["IS","1","ChannelShieldNumber"],"02B3":["SH","1","ChannelShieldID"],"02B4":["LO","1","ChannelShieldName"],"02B8":["DS","1","ChannelShieldNominalThickness"],"02BA":["DS","1","ChannelShieldNominalTransmission"],"02C8":["DS","1","FinalCumulativeTimeWeight"],"02D0":["SQ","1","BrachyControlPointSequence"],"02D2":["DS","1","ControlPointRelativePosition"],"02D4":["DS","3","ControlPoint3DPosition"],"02D6":["DS","1","CumulativeTimeWeight"],"02E0":["CS","1","CompensatorDivergence"],"02E1":["CS","1","CompensatorMountingPosition"],"02E2":["DS","1-n","SourceToCompensatorDistance"],"02E3":["FL","1","TotalCompensatorTrayWaterEquivalentThickness"],"02E4":["FL","1","IsocenterToCompensatorTrayDistance"],"02E5":["FL","1","CompensatorColumnOffset"],"02E6":["FL","1-n","IsocenterToCompensatorDistances"],"02E7":["FL","1","CompensatorRelativeStoppingPowerRatio"],"02E8":["FL","1","CompensatorMillingToolDiameter"],"02EA":["SQ","1","IonRangeCompensatorSequence"],"02EB":["LT","1","CompensatorDescription"],"0302":["IS","1","RadiationMassNumber"],"0304":["IS","1","RadiationAtomicNumber"],"0306":["SS","1","RadiationChargeState"],"0308":["CS","1","ScanMode"],"0309":["CS","1","ModulatedScanModeType"],"030A":["FL","2","VirtualSourceAxisDistances"],"030C":["SQ","1","SnoutSequence"],"030D":["FL","1","SnoutPosition"],"030F":["SH","1","SnoutID"],"0312":["IS","1","NumberOfRangeShifters"],"0314":["SQ","1","RangeShifterSequence"],"0316":["IS","1","RangeShifterNumber"],"0318":["SH","1","RangeShifterID"],"0320":["CS","1","RangeShifterType"],"0322":["LO","1","RangeShifterDescription"],"0330":["IS","1","NumberOfLateralSpreadingDevices"],"0332":["SQ","1","LateralSpreadingDeviceSequence"],"0334":["IS","1","LateralSpreadingDeviceNumber"],"0336":["SH","1","LateralSpreadingDeviceID"],"0338":["CS","1","LateralSpreadingDeviceType"],"033A":["LO","1","LateralSpreadingDeviceDescription"],"033C":["FL","1","LateralSpreadingDeviceWaterEquivalentThickness"],"0340":["IS","1","NumberOfRangeModulators"],"0342":["SQ","1","RangeModulatorSequence"],"0344":["IS","1","RangeModulatorNumber"],"0346":["SH","1","RangeModulatorID"],"0348":["CS","1","RangeModulatorType"],"034A":["LO","1","RangeModulatorDescription"],"034C":["SH","1","BeamCurrentModulationID"],"0350":["CS","1","PatientSupportType"],"0352":["SH","1","PatientSupportID"],"0354":["LO","1","PatientSupportAccessoryCode"],"0355":["LO","1","TrayAccessoryCode"],"0356":["FL","1","FixationLightAzimuthalAngle"],"0358":["FL","1","FixationLightPolarAngle"],"035A":["FL","1","MetersetRate"],"0360":["SQ","1","RangeShifterSettingsSequence"],"0362":["LO","1","RangeShifterSetting"],"0364":["FL","1","IsocenterToRangeShifterDistance"],"0366":["FL","1","RangeShifterWaterEquivalentThickness"],"0370":["SQ","1","LateralSpreadingDeviceSettingsSequence"],"0372":["LO","1","LateralSpreadingDeviceSetting"],"0374":["FL","1","IsocenterToLateralSpreadingDeviceDistance"],"0380":["SQ","1","RangeModulatorSettingsSequence"],"0382":["FL","1","RangeModulatorGatingStartValue"],"0384":["FL","1","RangeModulatorGatingStopValue"],"0386":["FL","1","RangeModulatorGatingStartWaterEquivalentThickness"],"0388":["FL","1","RangeModulatorGatingStopWaterEquivalentThickness"],"038A":["FL","1","IsocenterToRangeModulatorDistance"],"038F":["FL","1-n","ScanSpotTimeOffset"],"0390":["SH","1","ScanSpotTuneID"],"0391":["IS","1-n","ScanSpotPrescribedIndices"],"0392":["IS","1","NumberOfScanSpotPositions"],"0393":["CS","1","ScanSpotReordered"],"0394":["FL","1-n","ScanSpotPositionMap"],"0395":["CS","1","ScanSpotReorderingAllowed"],"0396":["FL","1-n","ScanSpotMetersetWeights"],"0398":["FL","2","ScanningSpotSize"],"0399":["FL","2-2n","ScanSpotSizesDelivered"],"039A":["IS","1","NumberOfPaintings"],"03A0":["SQ","1","IonToleranceTableSequence"],"03A2":["SQ","1","IonBeamSequence"],"03A4":["SQ","1","IonBeamLimitingDeviceSequence"],"03A6":["SQ","1","IonBlockSequence"],"03A8":["SQ","1","IonControlPointSequence"],"03AA":["SQ","1","IonWedgeSequence"],"03AC":["SQ","1","IonWedgePositionSequence"],"0401":["SQ","1","ReferencedSetupImageSequence"],"0402":["ST","1","SetupImageComment"],"0410":["SQ","1","MotionSynchronizationSequence"],"0412":["FL","3","ControlPointOrientation"],"0420":["SQ","1","GeneralAccessorySequence"],"0421":["SH","1","GeneralAccessoryID"],"0422":["ST","1","GeneralAccessoryDescription"],"0423":["CS","1","GeneralAccessoryType"],"0424":["IS","1","GeneralAccessoryNumber"],"0425":["FL","1","SourceToGeneralAccessoryDistance"],"0426":["DS","1","IsocenterToGeneralAccessoryDistance"],"0431":["SQ","1","ApplicatorGeometrySequence"],"0432":["CS","1","ApplicatorApertureShape"],"0433":["FL","1","ApplicatorOpening"],"0434":["FL","1","ApplicatorOpeningX"],"0435":["FL","1","ApplicatorOpeningY"],"0436":["FL","1","SourceToApplicatorMountingPositionDistance"],"0440":["IS","1","NumberOfBlockSlabItems"],"0441":["SQ","1","BlockSlabSequence"],"0442":["DS","1","BlockSlabThickness"],"0443":["US","1","BlockSlabNumber"],"0450":["SQ","1","DeviceMotionControlSequence"],"0451":["CS","1","DeviceMotionExecutionMode"],"0452":["CS","1","DeviceMotionObservationMode"],"0453":["SQ","1","DeviceMotionParameterCodeSequence"],"0501":["FL","1","DistalDepthFraction"],"0502":["FL","1","DistalDepth"],"0503":["FL","2","NominalRangeModulationFractions"],"0504":["FL","2","NominalRangeModulatedRegionDepths"],"0505":["SQ","1","DepthDoseParametersSequence"],"0506":["SQ","1","DeliveredDepthDoseParametersSequence"],"0507":["FL","1","DeliveredDistalDepthFraction"],"0508":["FL","1","DeliveredDistalDepth"],"0509":["FL","2","DeliveredNominalRangeModulationFractions"],"0510":["FL","2","DeliveredNominalRangeModulatedRegionDepths"],"0511":["CS","1","DeliveredReferenceDoseDefinition"],"0512":["CS","1","ReferenceDoseDefinition"],"0600":["US","1","RTControlPointIndex"],"0601":["US","1","RadiationGenerationModeIndex"],"0602":["US","1","ReferencedDefinedDeviceIndex"],"0603":["US","1","RadiationDoseIdentificationIndex"],"0604":["US","1","NumberOfRTControlPoints"],"0605":["US","1","ReferencedRadiationGenerationModeIndex"],"0606":["US","1","TreatmentPositionIndex"],"0607":["US","1","ReferencedDeviceIndex"],"0608":["LO","1","TreatmentPositionGroupLabel"],"0609":["UI","1","TreatmentPositionGroupUID"],"060A":["SQ","1","TreatmentPositionGroupSequence"],"060B":["US","1","ReferencedTreatmentPositionIndex"],"060C":["US","1","ReferencedRadiationDoseIdentificationIndex"],"060D":["FD","1","RTAccessoryHolderWaterEquivalentThickness"],"060E":["US","1","ReferencedRTAccessoryHolderDeviceIndex"],"060F":["CS","1","RTAccessoryHolderSlotExistenceFlag"],"0610":["SQ","1","RTAccessoryHolderSlotSequence"],"0611":["LO","1","RTAccessoryHolderSlotID"],"0612":["FD","1","RTAccessoryHolderSlotDistance"],"0613":["FD","1","RTAccessorySlotDistance"],"0614":["SQ","1","RTAccessoryHolderDefinitionSequence"],"0615":["LO","1","RTAccessoryDeviceSlotID"],"0616":["SQ","1","RTRadiationSequence"],"0617":["SQ","1","RadiationDoseSequence"],"0618":["SQ","1","RadiationDoseIdentificationSequence"],"0619":["LO","1","RadiationDoseIdentificationLabel"],"061A":["CS","1","ReferenceDoseType"],"061B":["CS","1","PrimaryDoseValueIndicator"],"061C":["SQ","1","DoseValuesSequence"],"061D":["CS","1-n","DoseValuePurpose"],"061E":["FD","3","ReferenceDosePointCoordinates"],"061F":["SQ","1","RadiationDoseValuesParametersSequence"],"0620":["SQ","1","MetersetToDoseMappingSequence"],"0621":["SQ","1","ExpectedInVivoMeasurementValuesSequence"],"0622":["US","1","ExpectedInVivoMeasurementValueIndex"],"0623":["LO","1","RadiationDoseInVivoMeasurementLabel"],"0624":["FD","2","RadiationDoseCentralAxisDisplacement"],"0625":["FD","1","RadiationDoseValue"],"0626":["FD","1","RadiationDoseSourceToSkinDistance"],"0627":["FD","3","RadiationDoseMeasurementPointCoordinates"],"0628":["FD","1","RadiationDoseSourceToExternalContourDistance"],"0629":["SQ","1","RTToleranceSetSequence"],"062A":["LO","1","RTToleranceSetLabel"],"062B":["SQ","1","AttributeToleranceValuesSequence"],"062C":["FD","1","ToleranceValue"],"062D":["SQ","1","PatientSupportPositionToleranceSequence"],"062E":["FD","1","TreatmentTimeLimit"],"062F":["SQ","1","CArmPhotonElectronControlPointSequence"],"0630":["SQ","1","ReferencedRTRadiationSequence"],"0631":["SQ","1","ReferencedRTInstanceSequence"],"0632":["SQ","1","ReferencedRTPatientSetupSequence"],"0634":["FD","1","SourceToPatientSurfaceDistance"],"0635":["SQ","1","TreatmentMachineSpecialModeCodeSequence"],"0636":["US","1","IntendedNumberOfFractions"],"0637":["CS","1","RTRadiationSetIntent"],"0638":["CS","1","RTRadiationPhysicalAndGeometricContentDetailFlag"],"0639":["CS","1","RTRecordFlag"],"063A":["SQ","1","TreatmentDeviceIdentificationSequence"],"063B":["SQ","1","ReferencedRTPhysicianIntentSequence"],"063C":["FD","1","CumulativeMeterset"],"063D":["FD","1","DeliveryRate"],"063E":["SQ","1","DeliveryRateUnitSequence"],"063F":["SQ","1","TreatmentPositionSequence"],"0640":["FD","1","RadiationSourceAxisDistance"],"0641":["US","1","NumberOfRTBeamLimitingDevices"],"0642":["FD","1","RTBeamLimitingDeviceProximalDistance"],"0643":["FD","1","RTBeamLimitingDeviceDistalDistance"],"0644":["SQ","1","ParallelRTBeamDelimiterDeviceOrientationLabelCodeSequence"],"0645":["FD","1","BeamModifierOrientationAngle"],"0646":["SQ","1","FixedRTBeamDelimiterDeviceSequence"],"0647":["SQ","1","ParallelRTBeamDelimiterDeviceSequence"],"0648":["US","1","NumberOfParallelRTBeamDelimiters"],"0649":["FD","2-n","ParallelRTBeamDelimiterBoundaries"],"064A":["FD","2-n","ParallelRTBeamDelimiterPositions"],"064B":["FD","2","RTBeamLimitingDeviceOffset"],"064C":["SQ","1","RTBeamDelimiterGeometrySequence"],"064D":["SQ","1","RTBeamLimitingDeviceDefinitionSequence"],"064E":["CS","1","ParallelRTBeamDelimiterOpeningMode"],"064F":["CS","1-n","ParallelRTBeamDelimiterLeafMountingSide"],"0650":["UI","1","PatientSetupUID"],"0651":["SQ","1","WedgeDefinitionSequence"],"0652":["FD","1","RadiationBeamWedgeAngle"],"0653":["FD","1","RadiationBeamWedgeThinEdgeDistance"],"0654":["FD","1","RadiationBeamEffectiveWedgeAngle"],"0655":["US","1","NumberOfWedgePositions"],"0656":["SQ","1","RTBeamLimitingDeviceOpeningSequence"],"0657":["US","1","NumberOfRTBeamLimitingDeviceOpenings"],"0658":["SQ","1","RadiationDosimeterUnitSequence"],"0659":["SQ","1","RTDeviceDistanceReferenceLocationCodeSequence"],"065A":["SQ","1","RadiationDeviceConfigurationAndCommissioningKeySequence"],"065B":["SQ","1","PatientSupportPositionParameterSequence"],"065C":["CS","1","PatientSupportPositionSpecificationMethod"],"065D":["SQ","1","PatientSupportPositionDeviceParameterSequence"],"065E":["US","1","DeviceOrderIndex"],"065F":["US","1","PatientSupportPositionParameterOrderIndex"],"0660":["SQ","1","PatientSupportPositionDeviceToleranceSequence"],"0661":["US","1","PatientSupportPositionToleranceOrderIndex"],"0662":["SQ","1","CompensatorDefinitionSequence"],"0663":["CS","1","CompensatorMapOrientation"],"0664":["OF","1","CompensatorProximalThicknessMap"],"0665":["OF","1","CompensatorDistalThicknessMap"],"0666":["FD","1","CompensatorBasePlaneOffset"],"0667":["SQ","1","CompensatorShapeFabricationCodeSequence"],"0668":["SQ","1","CompensatorShapeSequence"],"0669":["FD","1","RadiationBeamCompensatorMillingToolDiameter"],"066A":["SQ","1","BlockDefinitionSequence"],"066B":["OF","1","BlockEdgeData"],"066C":["CS","1","BlockOrientation"],"066D":["FD","1","RadiationBeamBlockThickness"],"066E":["FD","1","RadiationBeamBlockSlabThickness"],"066F":["SQ","1","BlockEdgeDataSequence"],"0670":["US","1","NumberOfRTAccessoryHolders"],"0671":["SQ","1","GeneralAccessoryDefinitionSequence"],"0672":["US","1","NumberOfGeneralAccessories"],"0673":["SQ","1","BolusDefinitionSequence"],"0674":["US","1","NumberOfBoluses"],"0675":["UI","1","EquipmentFrameOfReferenceUID"],"0676":["ST","1","EquipmentFrameOfReferenceDescription"],"0677":["SQ","1","EquipmentReferencePointCoordinatesSequence"],"0678":["SQ","1","EquipmentReferencePointCodeSequence"],"0679":["FD","1","RTBeamLimitingDeviceAngle"],"067A":["FD","1","SourceRollAngle"],"067B":["SQ","1","RadiationGenerationModeSequence"],"067C":["SH","1","RadiationGenerationModeLabel"],"067D":["ST","1","RadiationGenerationModeDescription"],"067E":["SQ","1","RadiationGenerationModeMachineCodeSequence"],"067F":["SQ","1","RadiationTypeCodeSequence"],"0680":["DS","1","NominalEnergy"],"0681":["DS","1","MinimumNominalEnergy"],"0682":["DS","1","MaximumNominalEnergy"],"0683":["SQ","1","RadiationFluenceModifierCodeSequence"],"0684":["SQ","1","EnergyUnitCodeSequence"],"0685":["US","1","NumberOfRadiationGenerationModes"],"0686":["SQ","1","PatientSupportDevicesSequence"],"0687":["US","1","NumberOfPatientSupportDevices"],"0688":["FD","1","RTBeamModifierDefinitionDistance"],"0689":["SQ","1","BeamAreaLimitSequence"],"068A":["SQ","1","ReferencedRTPrescriptionSequence"],"0700":["UI","1","TreatmentSessionUID"],"0701":["CS","1","RTRadiationUsage"],"0702":["SQ","1","ReferencedRTRadiationSetSequence"],"0703":["SQ","1","ReferencedRTRadiationRecordSequence"],"0704":["US","1","RTRadiationSetDeliveryNumber"],"0705":["US","1","ClinicalFractionNumber"],"0706":["CS","1","RTTreatmentFractionCompletionStatus"],"0707":["CS","1","RTRadiationSetUsage"],"0708":["CS","1","TreatmentDeliveryContinuationFlag"],"0709":["CS","1","TreatmentRecordContentOrigin"],"0714":["CS","1","RTTreatmentTerminationStatus"],"0715":["SQ","1","RTTreatmentTerminationReasonCodeSequence"],"0716":["SQ","1","MachineSpecificTreatmentTerminationCodeSequence"],"0722":["SQ","1","RTRadiationSalvageRecordControlPointSequence"],"0723":["CS","1","StartingMetersetValueKnownFlag"],"0730":["ST","1","TreatmentTerminationDescription"],"0731":["SQ","1","TreatmentToleranceViolationSequence"],"0732":["CS","1","TreatmentToleranceViolationCategory"],"0733":["SQ","1","TreatmentToleranceViolationAttributeSequence"],"0734":["ST","1","TreatmentToleranceViolationDescription"],"0735":["ST","1","TreatmentToleranceViolationIdentification"],"0736":["DT","1","TreatmentToleranceViolationDateTime"],"073A":["DT","1","RecordedRTControlPointDateTime"],"073B":["US","1","ReferencedRadiationRTControlPointIndex"],"073E":["SQ","1","AlternateValueSequence"],"073F":["SQ","1","ConfirmationSequence"],"0740":["SQ","1","InterlockSequence"],"0741":["DT","1","InterlockDateTime"],"0742":["ST","1","InterlockDescription"],"0743":["SQ","1","InterlockOriginatingDeviceSequence"],"0744":["SQ","1","InterlockCodeSequence"],"0745":["SQ","1","InterlockResolutionCodeSequence"],"0746":["SQ","1","InterlockResolutionUserSequence"],"0760":["DT","1","OverrideDateTime"],"0761":["SQ","1","TreatmentToleranceViolationTypeCodeSequence"],"0762":["SQ","1","TreatmentToleranceViolationCauseCodeSequence"],"0772":["SQ","1","MeasuredMetersetToDoseMappingSequence"],"0773":["US","1","ReferencedExpectedInVivoMeasurementValueIndex"],"0774":["SQ","1","DoseMeasurementDeviceCodeSequence"],"0780":["SQ","1","AdditionalParameterRecordingInstanceSequence"],"0782":["US","1",""],"0783":["ST","1","InterlockOriginDescription"],"0784":["SQ","1","RTPatientPositionScopeSequence"],"0785":["UI","1","ReferencedTreatmentPositionGroupUID"],"0786":["US","1","RadiationOrderIndex"],"0787":["SQ","1","OmittedRadiationSequence"],"0788":["SQ","1","ReasonForOmissionCodeSequence"],"0789":["SQ","1","RTDeliveryStartPatientPositionSequence"],"078A":["SQ","1","RTTreatmentPreparationPatientPositionSequence"],"078B":["SQ","1","ReferencedRTTreatmentPreparationSequence"],"078C":["SQ","1","ReferencedPatientSetupPhotoSequence"],"078D":["SQ","1","PatientTreatmentPreparationMethodCodeSequence"],"078E":["LT","1","PatientTreatmentPreparationProcedureParameterDescription"],"078F":["SQ","1","PatientTreatmentPreparationDeviceSequence"],"0790":["SQ","1","PatientTreatmentPreparationProcedureSequence"],"0791":["SQ","1","PatientTreatmentPreparationProcedureCodeSequence"],"0792":["LT","1","PatientTreatmentPreparationMethodDescription"],"0793":["SQ","1","PatientTreatmentPreparationProcedureParameterSequence"],"0794":["LT","1","PatientSetupPhotoDescription"],"0795":["US","1","PatientTreatmentPreparationProcedureIndex"],"0796":["US","1","ReferencedPatientSetupProcedureIndex"],"0797":["SQ","1","RTRadiationTaskSequence"],"0798":["SQ","1","RTPatientPositionDisplacementSequence"],"0799":["SQ","1","RTPatientPositionSequence"],"079A":["LO","1","DisplacementReferenceLabel"],"079B":["FD","16","DisplacementMatrix"],"079C":["SQ","1","PatientSupportDisplacementSequence"],"079D":["SQ","1","DisplacementReferenceLocationCodeSequence"],"079E":["CS","1","RTRadiationSetDeliveryUsage"]},"300C":{"0000":["UL","1","GenericGroupLength"],"0002":["SQ","1","ReferencedRTPlanSequence"],"0004":["SQ","1","ReferencedBeamSequence"],"0006":["IS","1","ReferencedBeamNumber"],"0007":["IS","1","ReferencedReferenceImageNumber"],"0008":["DS","1","StartCumulativeMetersetWeight"],"0009":["DS","1","EndCumulativeMetersetWeight"],"000A":["SQ","1","ReferencedBrachyApplicationSetupSequence"],"000C":["IS","1","ReferencedBrachyApplicationSetupNumber"],"000E":["IS","1","ReferencedSourceNumber"],"0020":["SQ","1","ReferencedFractionGroupSequence"],"0022":["IS","1","ReferencedFractionGroupNumber"],"0040":["SQ","1","ReferencedVerificationImageSequence"],"0042":["SQ","1","ReferencedReferenceImageSequence"],"0050":["SQ","1","ReferencedDoseReferenceSequence"],"0051":["IS","1","ReferencedDoseReferenceNumber"],"0055":["SQ","1","BrachyReferencedDoseReferenceSequence"],"0060":["SQ","1","ReferencedStructureSetSequence"],"006A":["IS","1","ReferencedPatientSetupNumber"],"0080":["SQ","1","ReferencedDoseSequence"],"00A0":["IS","1","ReferencedToleranceTableNumber"],"00B0":["SQ","1","ReferencedBolusSequence"],"00C0":["IS","1","ReferencedWedgeNumber"],"00D0":["IS","1","ReferencedCompensatorNumber"],"00E0":["IS","1","ReferencedBlockNumber"],"00F0":["IS","1","ReferencedControlPointIndex"],"00F2":["SQ","1","ReferencedControlPointSequence"],"00F4":["IS","1","ReferencedStartControlPointIndex"],"00F6":["IS","1","ReferencedStopControlPointIndex"],"0100":["IS","1","ReferencedRangeShifterNumber"],"0102":["IS","1","ReferencedLateralSpreadingDeviceNumber"],"0104":["IS","1","ReferencedRangeModulatorNumber"],"0111":["SQ","1","OmittedBeamTaskSequence"],"0112":["CS","1","ReasonForOmission"],"0113":["LO","1","ReasonForOmissionDescription"],"0114":["SQ","1","PrescriptionOverviewSequence"],"0115":["FL","1","TotalPrescriptionDose"],"0116":["SQ","1","PlanOverviewSequence"],"0117":["US","1","PlanOverviewIndex"],"0118":["US","1","ReferencedPlanOverviewIndex"],"0119":["US","1","NumberOfFractionsIncluded"],"0120":["SQ","1","DoseCalibrationConditionsSequence"],"0121":["FD","1","AbsorbedDoseToMetersetRatio"],"0122":["FD","2","DelineatedRadiationFieldSize"],"0123":["CS","1","DoseCalibrationConditionsVerifiedFlag"],"0124":["FD","1","CalibrationReferencePointDepth"],"0125":["SQ","1","GatingBeamHoldTransitionSequence"],"0126":["CS","1","BeamHoldTransition"],"0127":["DT","1","BeamHoldTransitionDateTime"],"0128":["SQ","1","BeamHoldOriginatingDeviceSequence"]},"300E":{"0000":["UL","1","GenericGroupLength"],"0002":["CS","1","ApprovalStatus"],"0004":["DA","1","ReviewDate"],"0005":["TM","1","ReviewTime"],"0008":["PN","1","ReviewerName"]},3010:{"0000":["UL","1","GenericGroupLength"],"0001":["SQ","1","RadiobiologicalDoseEffectSequence"],"0002":["CS","1","RadiobiologicalDoseEffectFlag"],"0003":["SQ","1","EffectiveDoseCalculationMethodCategoryCodeSequence"],"0004":["SQ","1","EffectiveDoseCalculationMethodCodeSequence"],"0005":["LO","1","EffectiveDoseCalculationMethodDescription"],"0006":["UI","1","ConceptualVolumeUID"],"0007":["SQ","1","OriginatingSOPInstanceReferenceSequence"],"0008":["SQ","1","ConceptualVolumeConstituentSequence"],"0009":["SQ","1","EquivalentConceptualVolumeInstanceReferenceSequence"],"000A":["SQ","1","EquivalentConceptualVolumesSequence"],"000B":["UI","1","ReferencedConceptualVolumeUID"],"000C":["UT","1","ConceptualVolumeCombinationExpression"],"000D":["US","1","ConceptualVolumeConstituentIndex"],"000E":["CS","1","ConceptualVolumeCombinationFlag"],"000F":["ST","1","ConceptualVolumeCombinationDescription"],"0010":["CS","1","ConceptualVolumeSegmentationDefinedFlag"],"0011":["SQ","1","ConceptualVolumeSegmentationReferenceSequence"],"0012":["SQ","1","ConceptualVolumeConstituentSegmentationReferenceSequence"],"0013":["UI","1","ConstituentConceptualVolumeUID"],"0014":["SQ","1","DerivationConceptualVolumeSequence"],"0015":["UI","1","SourceConceptualVolumeUID"],"0016":["SQ","1","ConceptualVolumeDerivationAlgorithmSequence"],"0017":["ST","1","ConceptualVolumeDescription"],"0018":["SQ","1","SourceConceptualVolumeSequence"],"0019":["SQ","1","AuthorIdentificationSequence"],"001A":["LO","1","ManufacturerModelVersion"],"001B":["UC","1","DeviceAlternateIdentifier"],"001C":["CS","1","DeviceAlternateIdentifierType"],"001D":["LT","1","DeviceAlternateIdentifierFormat"],"001E":["LO","1","SegmentationCreationTemplateLabel"],"001F":["UI","1","SegmentationTemplateUID"],"0020":["US","1","ReferencedSegmentReferenceIndex"],"0021":["SQ","1","SegmentReferenceSequence"],"0022":["US","1","SegmentReferenceIndex"],"0023":["SQ","1","DirectSegmentReferenceSequence"],"0024":["SQ","1","CombinationSegmentReferenceSequence"],"0025":["SQ","1","ConceptualVolumeSequence"],"0026":["SQ","1","SegmentedRTAccessoryDeviceSequence"],"0027":["SQ","1","SegmentCharacteristicsSequence"],"0028":["SQ","1","RelatedSegmentCharacteristicsSequence"],"0029":["US","1","SegmentCharacteristicsPrecedence"],"002A":["SQ","1","RTSegmentAnnotationSequence"],"002B":["SQ","1","SegmentAnnotationCategoryCodeSequence"],"002C":["SQ","1","SegmentAnnotationTypeCodeSequence"],"002D":["LO","1","DeviceLabel"],"002E":["SQ","1","DeviceTypeCodeSequence"],"002F":["SQ","1","SegmentAnnotationTypeModifierCodeSequence"],"0030":["SQ","1","PatientEquipmentRelationshipCodeSequence"],"0031":["UI","1","ReferencedFiducialsUID"],"0032":["SQ","1","PatientTreatmentOrientationSequence"],"0033":["SH","1","UserContentLabel"],"0034":["LO","1","UserContentLongLabel"],"0035":["SH","1","EntityLabel"],"0036":["LO","1","EntityName"],"0037":["ST","1","EntityDescription"],"0038":["LO","1","EntityLongLabel"],"0039":["US","1","DeviceIndex"],"003A":["US","1","RTTreatmentPhaseIndex"],"003B":["UI","1","RTTreatmentPhaseUID"],"003C":["US","1","RTPrescriptionIndex"],"003D":["US","1","RTSegmentAnnotationIndex"],"003E":["US","1","BasisRTTreatmentPhaseIndex"],"003F":["US","1","RelatedRTTreatmentPhaseIndex"],"0040":["US","1","ReferencedRTTreatmentPhaseIndex"],"0041":["US","1","ReferencedRTPrescriptionIndex"],"0042":["US","1","ReferencedParentRTPrescriptionIndex"],"0043":["ST","1","ManufacturerDeviceIdentifier"],"0044":["SQ","1","InstanceLevelReferencedPerformedProcedureStepSequence"],"0045":["CS","1","RTTreatmentPhaseIntentPresenceFlag"],"0046":["CS","1","RadiotherapyTreatmentType"],"0047":["CS","1-n","TeletherapyRadiationType"],"0048":["CS","1-n","BrachytherapySourceType"],"0049":["SQ","1","ReferencedRTTreatmentPhaseSequence"],"004A":["SQ","1","ReferencedDirectSegmentInstanceSequence"],"004B":["SQ","1","IntendedRTTreatmentPhaseSequence"],"004C":["DA","1","IntendedPhaseStartDate"],"004D":["DA","1","IntendedPhaseEndDate"],"004E":["SQ","1","RTTreatmentPhaseIntervalSequence"],"004F":["CS","1","TemporalRelationshipIntervalAnchor"],"0050":["FD","1","MinimumNumberOfIntervalDays"],"0051":["FD","1","MaximumNumberOfIntervalDays"],"0052":["UI","1-n","PertinentSOPClassesInStudy"],"0053":["UI","1-n","PertinentSOPClassesInSeries"],"0054":["LO","1","RTPrescriptionLabel"],"0055":["SQ","1","RTPhysicianIntentPredecessorSequence"],"0056":["LO","1","RTTreatmentApproachLabel"],"0057":["SQ","1","RTPhysicianIntentSequence"],"0058":["US","1","RTPhysicianIntentIndex"],"0059":["CS","1","RTTreatmentIntentType"],"005A":["UT","1","RTPhysicianIntentNarrative"],"005B":["SQ","1","RTProtocolCodeSequence"],"005C":["ST","1","ReasonForSuperseding"],"005D":["SQ","1","RTDiagnosisCodeSequence"],"005E":["US","1","ReferencedRTPhysicianIntentIndex"],"005F":["SQ","1","RTPhysicianIntentInputInstanceSequence"],"0060":["SQ","1","RTAnatomicPrescriptionSequence"],"0061":["UT","1","PriorTreatmentDoseDescription"],"0062":["SQ","1","PriorTreatmentReferenceSequence"],"0063":["CS","1","DosimetricObjectiveEvaluationScope"],"0064":["SQ","1","TherapeuticRoleCategoryCodeSequence"],"0065":["SQ","1","TherapeuticRoleTypeCodeSequence"],"0066":["US","1","ConceptualVolumeOptimizationPrecedence"],"0067":["SQ","1","ConceptualVolumeCategoryCodeSequence"],"0068":["CS","1","ConceptualVolumeBlockingConstraint"],"0069":["SQ","1","ConceptualVolumeTypeCodeSequence"],"006A":["SQ","1","ConceptualVolumeTypeModifierCodeSequence"],"006B":["SQ","1","RTPrescriptionSequence"],"006C":["SQ","1","DosimetricObjectiveSequence"],"006D":["SQ","1","DosimetricObjectiveTypeCodeSequence"],"006E":["UI","1","DosimetricObjectiveUID"],"006F":["UI","1","ReferencedDosimetricObjectiveUID"],"0070":["SQ","1","DosimetricObjectiveParameterSequence"],"0071":["SQ","1","ReferencedDosimetricObjectivesSequence"],"0073":["CS","1","AbsoluteDosimetricObjectiveFlag"],"0074":["FD","1","DosimetricObjectiveWeight"],"0075":["CS","1","DosimetricObjectivePurpose"],"0076":["SQ","1","PlanningInputInformationSequence"],"0077":["LO","1","TreatmentSite"],"0078":["SQ","1","TreatmentSiteCodeSequence"],"0079":["SQ","1","FractionPatternSequence"],"007A":["UT","1","TreatmentTechniqueNotes"],"007B":["UT","1","PrescriptionNotes"],"007C":["IS","1","NumberOfIntervalFractions"],"007D":["US","1","NumberOfFractions"],"007E":["US","1","IntendedDeliveryDuration"],"007F":["UT","1","FractionationNotes"],"0080":["SQ","1","RTTreatmentTechniqueCodeSequence"],"0081":["SQ","1","PrescriptionNotesSequence"],"0082":["SQ","1","FractionBasedRelationshipSequence"],"0083":["CS","1","FractionBasedRelationshipIntervalAnchor"],"0084":["FD","1","MinimumHoursBetweenFractions"],"0085":["TM","1-n","IntendedFractionStartTime"],"0086":["LT","1","IntendedStartDayOfWeek"],"0087":["SQ","1","WeekdayFractionPatternSequence"],"0088":["SQ","1","DeliveryTimeStructureCodeSequence"],"0089":["SQ","1","TreatmentSiteModifierCodeSequence"],"0090":["CS","1","RoboticBaseLocationIndicator"],"0091":["SQ","1","RoboticPathNodeSetCodeSequence"],"0092":["UL","1","RoboticNodeIdentifier"],"0093":["FD","3","RTTreatmentSourceCoordinates"],"0094":["FD","1","RadiationSourceCoordinateSystemYawAngle"],"0095":["FD","1","RadiationSourceCoordinateSystemRollAngle"],"0096":["FD","1","RadiationSourceCoordinateSystemPitchAngle"],"0097":["SQ","1","RoboticPathControlPointSequence"],"0098":["SQ","1","TomotherapeuticControlPointSequence"],"0099":["FD","1-n","TomotherapeuticLeafOpenDurations"],"009A":["FD","1-n","TomotherapeuticLeafInitialClosedDurations"]},4e3:{"0000":["UL","1","GenericGroupLength"],"0010":["LT","1","Arbitrary"],4e3:["LT","1","TextComments"]},4008:{"0000":["UL","1","GenericGroupLength"],"0040":["SH","1","ResultsID"],"0042":["LO","1","ResultsIDIssuer"],"0050":["SQ","1","ReferencedInterpretationSequence"],"00FF":["CS","1","ReportProductionStatusTrial"],"0100":["DA","1","InterpretationRecordedDate"],"0101":["TM","1","InterpretationRecordedTime"],"0102":["PN","1","InterpretationRecorder"],"0103":["LO","1","ReferenceToRecordedSound"],"0108":["DA","1","InterpretationTranscriptionDate"],"0109":["TM","1","InterpretationTranscriptionTime"],"010A":["PN","1","InterpretationTranscriber"],"010B":["ST","1","InterpretationText"],"010C":["PN","1","InterpretationAuthor"],"0111":["SQ","1","InterpretationApproverSequence"],"0112":["DA","1","InterpretationApprovalDate"],"0113":["TM","1","InterpretationApprovalTime"],"0114":["PN","1","PhysicianApprovingInterpretation"],"0115":["LT","1","InterpretationDiagnosisDescription"],"0117":["SQ","1","InterpretationDiagnosisCodeSequence"],"0118":["SQ","1","ResultsDistributionListSequence"],"0119":["PN","1","DistributionName"],"011A":["LO","1","DistributionAddress"],"0200":["SH","1","InterpretationID"],"0202":["LO","1","InterpretationIDIssuer"],"0210":["CS","1","InterpretationTypeID"],"0212":["CS","1","InterpretationStatusID"],"0300":["ST","1","Impressions"],4e3:["ST","1","ResultsComments"]},4010:{"0000":["UL","1","GenericGroupLength"],"0001":["CS","1","LowEnergyDetectors"],"0002":["CS","1","HighEnergyDetectors"],"0004":["SQ","1","DetectorGeometrySequence"],1001:["SQ","1","ThreatROIVoxelSequence"],1004:["FL","3","ThreatROIBase"],1005:["FL","3","ThreatROIExtents"],1006:["OB","1","ThreatROIBitmap"],1007:["SH","1","RouteSegmentID"],1008:["CS","1","GantryType"],1009:["CS","1","OOIOwnerType"],"100A":["SQ","1","RouteSegmentSequence"],1010:["US","1","PotentialThreatObjectID"],1011:["SQ","1","ThreatSequence"],1012:["CS","1","ThreatCategory"],1013:["LT","1","ThreatCategoryDescription"],1014:["CS","1","ATDAbilityAssessment"],1015:["CS","1","ATDAssessmentFlag"],1016:["FL","1","ATDAssessmentProbability"],1017:["FL","1","Mass"],1018:["FL","1","Density"],1019:["FL","1","ZEffective"],"101A":["SH","1","BoardingPassID"],"101B":["FL","3","CenterOfMass"],"101C":["FL","3","CenterOfPTO"],"101D":["FL","6-n","BoundingPolygon"],"101E":["SH","1","RouteSegmentStartLocationID"],"101F":["SH","1","RouteSegmentEndLocationID"],1020:["CS","1","RouteSegmentLocationIDType"],1021:["CS","1-n","AbortReason"],1023:["FL","1","VolumeOfPTO"],1024:["CS","1","AbortFlag"],1025:["DT","1","RouteSegmentStartTime"],1026:["DT","1","RouteSegmentEndTime"],1027:["CS","1","TDRType"],1028:["CS","1","InternationalRouteSegment"],1029:["LO","1-n","ThreatDetectionAlgorithmAndVersion"],"102A":["SH","1","AssignedLocation"],"102B":["DT","1","AlarmDecisionTime"],1031:["CS","1","AlarmDecision"],1033:["US","1","NumberOfTotalObjects"],1034:["US","1","NumberOfAlarmObjects"],1037:["SQ","1","PTORepresentationSequence"],1038:["SQ","1","ATDAssessmentSequence"],1039:["CS","1","TIPType"],"103A":["CS","1","DICOSVersion"],1041:["DT","1","OOIOwnerCreationTime"],1042:["CS","1","OOIType"],1043:["FL","3","OOISize"],1044:["CS","1","AcquisitionStatus"],1045:["SQ","1","BasisMaterialsCodeSequence"],1046:["CS","1","PhantomType"],1047:["SQ","1","OOIOwnerSequence"],1048:["CS","1","ScanType"],1051:["LO","1","ItineraryID"],1052:["SH","1","ItineraryIDType"],1053:["LO","1","ItineraryIDAssigningAuthority"],1054:["SH","1","RouteID"],1055:["SH","1","RouteIDAssigningAuthority"],1056:["CS","1","InboundArrivalType"],1058:["SH","1","CarrierID"],1059:["CS","1","CarrierIDAssigningAuthority"],1060:["FL","3","SourceOrientation"],1061:["FL","3","SourcePosition"],1062:["FL","1","BeltHeight"],1064:["SQ","1","AlgorithmRoutingCodeSequence"],1067:["CS","1","TransportClassification"],1068:["LT","1","OOITypeDescriptor"],1069:["FL","1","TotalProcessingTime"],"106C":["OB","1","DetectorCalibrationData"],"106D":["CS","1","AdditionalScreeningPerformed"],"106E":["CS","1","AdditionalInspectionSelectionCriteria"],"106F":["SQ","1","AdditionalInspectionMethodSequence"],1070:["CS","1","AITDeviceType"],1071:["SQ","1","QRMeasurementsSequence"],1072:["SQ","1","TargetMaterialSequence"],1073:["FD","1","SNRThreshold"],1075:["DS","1","ImageScaleRepresentation"],1076:["SQ","1","ReferencedPTOSequence"],1077:["SQ","1","ReferencedTDRInstanceSequence"],1078:["ST","1","PTOLocationDescription"],1079:["SQ","1","AnomalyLocatorIndicatorSequence"],"107A":["FL","3","AnomalyLocatorIndicator"],"107B":["SQ","1","PTORegionSequence"],"107C":["CS","1","InspectionSelectionCriteria"],"107D":["SQ","1","SecondaryInspectionMethodSequence"],"107E":["DS","6","PRCSToRCSOrientation"]},"4FFE":{"0000":["UL","1","GenericGroupLength"],"0001":["SQ","1","MACParametersSequence"]},5e3:{"0000":["UL","1","GenericGroupLength"],"0005":["US","1","CurveDimensions"],"0010":["US","1","NumberOfPoints"],"0020":["CS","1","TypeOfData"],"0022":["LO","1","CurveDescription"],"0030":["SH","1-n","AxisUnits"],"0040":["SH","1-n","AxisLabels"],"0103":["US","1","DataValueRepresentation"],"0104":["US","1-n","MinimumCoordinateValue"],"0105":["US","1-n","MaximumCoordinateValue"],"0106":["SH","1-n","CurveRange"],"0110":["US","1-n","CurveDataDescriptor"],"0112":["US","1-n","CoordinateStartValue"],"0114":["US","1-n","CoordinateStepValue"],1001:["CS","1","CurveActivationLayer"],2e3:["US","1","AudioType"],2002:["US","1","AudioSampleFormat"],2004:["US","1","NumberOfChannels"],2006:["UL","1","NumberOfSamples"],2008:["UL","1","SampleRate"],"200A":["UL","1","TotalTime"],"200C":["ox","1","AudioSampleData"],"200E":["LT","1","AudioComments"],2500:["LO","1","CurveLabel"],2600:["SQ","1","CurveReferencedOverlaySequence"],2610:["US","1","CurveReferencedOverlayGroup"],3e3:["ox","1","CurveData"]},5200:{"0000":["UL","1","GenericGroupLength"],9229:["SQ","1","SharedFunctionalGroupsSequence"],9230:["SQ","1","PerFrameFunctionalGroupsSequence"]},5400:{"0000":["UL","1","GenericGroupLength"],"0100":["SQ","1","WaveformSequence"],"0110":["ox","1","ChannelMinimumValue"],"0112":["ox","1","ChannelMaximumValue"],1004:["US","1","WaveformBitsAllocated"],1006:["CS","1","WaveformSampleInterpretation"],"100A":["ox","1","WaveformPaddingValue"],1010:["ox","1","WaveformData"]},5600:{"0000":["UL","1","GenericGroupLength"],"0010":["OF","1","FirstOrderPhaseCorrectionAngle"],"0020":["OF","1","SpectroscopyData"]},6e3:{"0000":["UL","1","GenericGroupLength"],"0010":["US","1","OverlayRows"],"0011":["US","1","OverlayColumns"],"0012":["US","1","OverlayPlanes"],"0015":["IS","1","NumberOfFramesInOverlay"],"0022":["LO","1","OverlayDescription"],"0040":["CS","1","OverlayType"],"0045":["LO","1","OverlaySubtype"],"0050":["SS","2","OverlayOrigin"],"0051":["US","1","ImageFrameOrigin"],"0052":["US","1","OverlayPlaneOrigin"],"0060":["CS","1","OverlayCompressionCode"],"0061":["SH","1","OverlayCompressionOriginator"],"0062":["SH","1","OverlayCompressionLabel"],"0063":["CS","1","OverlayCompressionDescription"],"0066":["AT","1-n","OverlayCompressionStepPointers"],"0068":["US","1","OverlayRepeatInterval"],"0069":["US","1","OverlayBitsGrouped"],"0100":["US","1","OverlayBitsAllocated"],"0102":["US","1","OverlayBitPosition"],"0110":["CS","1","OverlayFormat"],"0200":["US","1","OverlayLocation"],"0800":["CS","1-n","OverlayCodeLabel"],"0802":["US","1","OverlayNumberOfTables"],"0803":["AT","1-n","OverlayCodeTableLocation"],"0804":["US","1","OverlayBitsForCodeWord"],1001:["CS","1","OverlayActivationLayer"],1100:["US","1","OverlayDescriptorGray"],1101:["US","1","OverlayDescriptorRed"],1102:["US","1","OverlayDescriptorGreen"],1103:["US","1","OverlayDescriptorBlue"],1200:["US","1-n","OverlaysGray"],1201:["US","1-n","OverlaysRed"],1202:["US","1-n","OverlaysGreen"],1203:["US","1-n","OverlaysBlue"],1301:["IS","1","ROIArea"],1302:["DS","1","ROIMean"],1303:["DS","1","ROIStandardDeviation"],1500:["LO","1","OverlayLabel"],3e3:["ox","1","OverlayData"],4e3:["LT","1","OverlayComments"]},"7F00":{"0000":["UL","1","GenericGroupLength"],"0010":["ox","1","VariablePixelData"],"0011":["US","1","VariableNextDataGroup"],"0020":["OW","1","VariableCoefficientsSDVN"],"0030":["OW","1","VariableCoefficientsSDHN"],"0040":["OW","1","VariableCoefficientsSDDN"]},"7FE0":{"0000":["UL","1","GenericGroupLength"],"0001":["OV","1","ExtendedOffsetTable"],"0002":["OV","1","ExtendedOffsetTableLengths"],"0008":["OF","1","FloatPixelData"],"0009":["OD","1","DoubleFloatPixelData"],"0010":["ox","1","PixelData"],"0020":["OW","1","CoefficientsSDVN"],"0030":["OW","1","CoefficientsSDHN"],"0040":["OW","1","CoefficientsSDDN"]},FFFA:{"0000":["UL","1","GenericGroupLength"],FFFA:["SQ","1","DigitalSignaturesSequence"]},FFFC:{"0000":["UL","1","GenericGroupLength"],FFFC:["OB","1","DataSetTrailingPadding"]},FFFE:{"0000":["UL","1","GenericGroupLength"],E000:["NONE","1","Item"],E00D:["NONE","1","ItemDelimitationItem"],E0DD:["NONE","1","SequenceDelimitationItem"]}};function x(e,t){A[e]=t}const b={"0000":"Command","0002":"Meta Element","0004":"File Set","0008":"Identifying","0009":"SPI Identifying","0010":"Patient","0012":"Clinical Trial","0018":"Acquisition","0019":"SPI Acquisition","0020":"Image","0021":"SPI Image","0022":"Ophtalmology","0028":"Image Presentation","0032":"Study","0038":"Visit","003A":"Waveform","0040":"Procedure","0042":"Encapsulated Document","0050":"Device Informations","0054":"Nuclear Medicine","0060":"Histogram","0070":"Presentation State","0072":"Hanging Protocol","0088":"Storage","0100":"Authorization","0400":"Digital Signature",1e3:"Code Table",1010:"Zonal Map",2e3:"Film Session",2010:"Film Box",2020:"Image Box",2030:"Annotation",2040:"Overlay Box",2050:"Presentation LUT",2100:"Print Job",2110:"Printer",2120:"Queue",2130:"Print Content",2200:"Media Creation",3002:"RT Image",3004:"RT Dose",3006:"RT StructureSet",3008:"RT Treatment","300A":"RT Plan","300C":"RT Relationship","300E":"RT Approval",4e3:"Text",4008:"Results","4FFE":"MAC Parameters",5e3:"Curve",5002:"Curve",5004:"Curve",5006:"Curve",5008:"Curve","500A":"Curve","500C":"Curve","500E":"Curve",5400:"Waveform Data",6e3:"Overlays",6002:"Overlays",6004:"Overlays",6008:"Overlays","600A":"Overlays","600C":"Overlays","600E":"Overlays",FFFC:"Generic","7FE0":"Pixel Data",FFFF:"Unknown"},F={OB:!0,OD:!0,OF:!0,OL:!0,OV:!0,OW:!0,SQ:!0,SV:!0,UC:!0,UN:!0,UR:!0,UT:!0,UV:!0,ox:!0};function R(e){return void 0!==F[e]}const E={SH:!0,LO:!0,UC:!0,ST:!0,LT:!0,UT:!0,PN:!0};function q(e){return void 0!==E[e]}const U={AE:"string",AS:"string",AT:void 0,CS:"string",DA:"string",DS:"string",DT:"string",FL:"Float32",FD:"Float64",IS:"string",LO:"string",LT:"string",OB:"Uint8",OD:"Uint64",OF:"Uint32",OL:"Uint32",OV:"Uint64",OW:"Uint16",PN:"string",SH:"string",SL:"Int32",SQ:void 0,SS:"Int16",ST:"string",SV:"Int64",TM:"string",UC:"string",UI:"string",UL:"Uint32",UN:"Uint8",UR:"string",US:"Uint16",UT:"string",UV:"Uint64"};class Q{#I;#L;constructor(e,t){if(!e||void 0===e)throw new Error("Cannot create tag with no group.");if(4!==e.length)throw new Error("Cannot create tag with badly sized group.");if(!t||void 0===t)throw new Error("Cannot create tag with no element.");if(4!==t.length)throw new Error("Cannot create tag with badly sized element.");this.#I=e,this.#L=t}getGroup(){return this.#I}getElement(){return this.#L}toString(){return this.getKey()+": "+this.getNameFromDictionary()}equals(e){return null!=e&&this.#I===e.getGroup()&&this.#L===e.getElement()}getKey(){return this.#I+this.#L}getGroupName(){return b[this.#I]}isWithVR(){return!("FFFE"===this.#I&&("E000"===this.#L||"E00D"===this.#L||"E0DD"===this.#L))}isPrivate(){return parseInt(this.#I,16)%2==1}getInfoFromDictionary(){let e;return void 0!==A[this.#I]&&void 0!==A[this.#I][this.#L]&&(e=A[this.#I][this.#L]),e}getVrFromDictionary(){let e;const t=this.getInfoFromDictionary();return void 0!==t&&(e=t[0]),e}getNameFromDictionary(){let e;const t=this.getInfoFromDictionary();return void 0!==t&&(e=t[2]),e}}function M(e){if(!e||void 0===e)throw new Error("Cannot create tag with no key.");if(8!==e.length)throw new Error("Cannot create tag with badly sized key.");return new Q(e.substring(0,4),e.substring(4,8))}function B(){return new Q("FFFE","E000")}function N(e){return"FFFEE000"===e.getKey()}function V(e){return"FFFEE0DD"===e.getKey()}function G(){return new Q("7FE0","0010")}function k(e){return"7FE00010"===e.getKey()}function H(e){if(null==e)return null;let t=null,n=null;const i=A,r=Object.keys(i);let o,a=null,s=!1;for(let o=0,l=r.length;o<l;++o){t=r[o],a=Object.keys(i[t]);for(let r=0,o=a.length;r<o;++r)if(n=a[r],i[t][n][2]===e){s=!0;break}if(s)break}return s&&(o=new Q(t,n)),o}function W(e){const t=e.byteLength,n=new Uint8Array(e.buffer,e.byteOffset,t),i=e.BYTES_PER_ELEMENT;let r;for(let e=0;e<t;e+=i)for(let t=e+i-1,o=e;t>o;t--,o++)r=n[o],n[o]=n[t],n[t]=r}class z{#P;#O=!0;#w=function(){return new Int8Array(new Int16Array([1]).buffer)[0]>0}();#A;#x;constructor(e,t){this.#P=e,void 0!==t&&(this.#O=t),this.#A=this.#O!==this.#w,this.#x=new DataView(e)}readUint16(e){return this.#x.getUint16(e,this.#O)}readInt16(e){return this.#x.getInt16(e,this.#O)}readUint32(e){return this.#x.getUint32(e,this.#O)}readBigUint64(e){return this.#x.getBigUint64(e,this.#O)}readInt32(e){return this.#x.getInt32(e,this.#O)}readBigInt64(e){return this.#x.getBigInt64(e,this.#O)}readFloat32(e){return this.#x.getFloat32(e,this.#O)}readFloat64(e){return this.#x.getFloat64(e,this.#O)}readBinaryArray(e,t){const n=new Uint8Array(this.#P,e,t),i=8*n.length,r=new Uint8Array(i);let o=0,a=0;for(let e=0;e<i;++e)o=e%8,a=Math.floor(e/8),r[e]=255*(0!=(n[a]&1<<o));return r}readUint8Array(e,t){return new Uint8Array(this.#P,e,t)}readInt8Array(e,t){return new Int8Array(this.#P,e,t)}readUint16Array(e,t){const n=Uint16Array.BYTES_PER_ELEMENT,i=t/n;let r=null;if(e%n==0)r=new Uint16Array(this.#P,e,i),this.#A&&W(r);else{r=new Uint16Array(i);let t=e;for(let e=0;e<i;++e)r[e]=this.readUint16(t),t+=n}return r}readInt16Array(e,t){const n=Int16Array.BYTES_PER_ELEMENT,i=t/n;let r=null;if(e%n==0)r=new Int16Array(this.#P,e,i),this.#A&&W(r);else{r=new Int16Array(i);let t=e;for(let e=0;e<i;++e)r[e]=this.readInt16(t),t+=n}return r}readUint32Array(e,t){const n=Uint32Array.BYTES_PER_ELEMENT,i=t/n;let r=null;if(e%n==0)r=new Uint32Array(this.#P,e,i),this.#A&&W(r);else{r=new Uint32Array(i);let t=e;for(let e=0;e<i;++e)r[e]=this.readUint32(t),t+=n}return r}readUint64Array(e,t){const n=BigUint64Array.BYTES_PER_ELEMENT,i=t/n;let r=null;if(e%n==0)r=new BigUint64Array(this.#P,e,i),this.#A&&W(r);else{r=new BigUint64Array(i);let t=e;for(let e=0;e<i;++e)r[e]=this.readBigUint64(t),t+=n}return r}readInt32Array(e,t){const n=Int32Array.BYTES_PER_ELEMENT,i=t/n;let r=null;if(e%n==0)r=new Int32Array(this.#P,e,i),this.#A&&W(r);else{r=new Int32Array(i);let t=e;for(let e=0;e<i;++e)r[e]=this.readInt32(t),t+=n}return r}readInt64Array(e,t){const n=BigInt64Array.BYTES_PER_ELEMENT,i=t/n;let r=null;if(e%n==0)r=new BigInt64Array(this.#P,e,i),this.#A&&W(r);else{r=new BigInt64Array(i);let t=e;for(let e=0;e<i;++e)r[e]=this.readBigInt64(t),t+=n}return r}readFloat32Array(e,t){const n=Float32Array.BYTES_PER_ELEMENT,i=t/n;let r=null;if(e%n==0)r=new Float32Array(this.#P,e,i),this.#A&&W(r);else{r=new Float32Array(i);let t=e;for(let e=0;e<i;++e)r[e]=this.readFloat32(t),t+=n}return r}readFloat64Array(e,t){const n=Float64Array.BYTES_PER_ELEMENT,i=t/n;let r=null;if(e%n==0)r=new Float64Array(this.#P,e,i),this.#A&&W(r);else{r=new Float64Array(i);let t=e;for(let e=0;e<i;++e)r[e]=this.readFloat64(t),t+=n}return r}readHex(e){const t=this.readUint16(e).toString(16);return"0000".substring(0,4-t.length)+t.toUpperCase()}}function Y(e,t,n){if(null==e||null==t)return!1;const i=n>0?0|n:0;return e.substring(i,i+t.length)===t}function X(e,t){return null!=e&&null!=t&&e.substring(e.length-t.length)===t}function j(e){const t=[];if(null==e)return t;const n=/{(\w+)}/g;let i=n.exec(e);for(;i;)t.push(i[1]),i=n.exec(e);return t}function _(e,t){let n="";if(null==e)return n;if(n=e,null==t)return n;const i=j(e);for(let e=0;e<i.length;++e){const r=t[i[e]];if(null!=r&&null!==r.value&&void 0!==r.value){let t=r.value.toPrecision(4);null!==r.unit&&void 0!==r.unit&&0!==r.unit.length&&("degree"!==r.unit&&(t+=" "),t+=r.unit);const o="{"+i[e]+"}";n=n.replace(o,t)}}return n}function Z(e){let t=null;if(null!=e&&"."!==e[0]){const n=e.toLowerCase().split(".");1!==n.length&&(t=n.pop(),/[a-z]/.test(t)&&!t.includes("/")||(t=null))}return t}function K(e){const t=new Uint8Array(e.length);for(let n=0,i=e.length;n<i;n++)t[n]=e.charCodeAt(n);return t}function J(e,t){const n=Math.pow(10,t),i=.01/n;return Math.round(e*n+i)/n}function $(e,t){return null!==e&&null!==t&&void 0!==e&&void 0!==t&&ee(e.slice().sort(),t.slice().sort())}function ee(e,t){return null!==e&&null!==t&&void 0!==e&&void 0!==t&&e.length===t.length&&e.every((function(e,n){return e===t[n]}))}function te(e){return String.fromCharCode.apply(String,e)}function ne(e,t,n,i){(void 0===n||n<0||n>=e.length)&&(n=0),(void 0===i||i<=n||i>e.length)&&(i=e.length);for(let r=n;r<i;++r)if(t(e[r],r,e))return r}function ie(e){return function(t,n,i){for(let t=0;t<e.length;++t)if(i[n+t]!==e[t])return!1;return!0}}function re(e,t){const n="\r\n";let i=0;const r=[];for(let o=0;o<e.length;++o){let a="";0!==o&&(a+=n),a+="--"+t+n;const s=Object.keys(e[o]);for(let t=0;t<s.length;++t){const i=s[t];"data"!==i&&(a+=i+": "+e[o][i]+n)}a+=n;const l=K(a);r.push(l),i+=l.byteLength+e[o].data.byteLength}const o=K("\r\n--"+t+"--"+n),a=new Uint8Array(i+o.byteLength);let s=0;for(let t=0;t<e.length;++t)a.set(r[t],s),s+=r[t].byteLength,a.set(new Uint8Array(e[t].data),s),s+=e[t].data.byteLength;return a.set(o,s),a}class oe{vr;value;tag;vl;undefinedLength;startOffset;endOffset;items;constructor(e){this.vr=e}}function ae(){return"0.32.2"}function se(e){return"DICM"===new Uint8Array(e,128,4).reduce((function(e,t){return e+String.fromCharCode(t)}),"")}const le=String.fromCharCode("u200B");class ce{decode(e){let t="";for(let n=0,i=e.length;n<i;++n)t+=String.fromCharCode(e[n]);return t}}function ue(e){if(!e)return null;const t={L:"R",R:"L",A:"P",P:"A",H:"F",F:"H"};let n="";for(let i=0;i<e.length;i++){const r=t[e.substring(i,i+1)];r&&(n+=r)}return n}function de(e){let t;return ee(e,[1,0,0,0,1,0])?t="axial":ee(e,[1,0,0,0,0,-1])?t="coronal":ee(e,[0,1,0,0,0,-1])&&(t="sagittal"),t}function Se(e){return"1.2.840.10008.1.2"===e}function he(e){return"1.2.840.10008.1.2.2"===e}function ge(e){return"1.2.840.10008.1.2.4.50"===e||"1.2.840.10008.1.2.4.51"===e}function me(e){return"1.2.840.10008.1.2.4.57"===e||"1.2.840.10008.1.2.4.70"===e}function pe(e){return null!==e.match(/1.2.840.10008.1.2.4.9/)}function fe(e){return null!==e.match(/1.2.840.10008.1.2.5/)}function De(e,t,n){let i=null;try{8===e?i=0===t?new Uint8Array(n):new Int8Array(n):16===e?i=0===t?new Uint16Array(n):new Int16Array(n):32===e&&(i=0===t?new Uint32Array(n):new Int32Array(n))}catch(e){if(e instanceof RangeError){const e=Math.floor(Math.log(n)/Math.log(2));g.error("Cannot allocate array of size: "+n+" (>2^"+e+").")}}return i}function ye(e,t){return t?8:R(e)?12:8}class Ce{#b={};#F;#R=new ce;#E=this.#R;#q(e){return this.#R.decode(e)}#U(e){return this.#E.decode(e)}getDefaultCharacterSet(){return this.#F}setDefaultCharacterSet(e){this.#F=e}setDecoderCharacterSet(e){this.#E=new TextDecoder(e)}getDicomElements(){return this.#b}#Q(e,t){const n=e.readHex(t);t+=Uint16Array.BYTES_PER_ELEMENT;const i=e.readHex(t);return t+=Uint16Array.BYTES_PER_ELEMENT,{tag:new Q(n,i),endOffset:t}}#M(e,t,n){const i={};let r=this.#B(e,t,n);if(t=r.endOffset,V(r.tag))return{data:i,endOffset:r.endOffset,isSeqDelim:!0};if(i[r.tag.getKey()]={tag:r.tag,vr:"NONE",vl:r.vl,undefinedLength:r.undefinedLength},r.undefinedLength){let o=!1;for(;!o;)r=this.#B(e,t,n),t=r.endOffset,o="FFFEE00D"===r.tag.getKey(),o||(i[r.tag.getKey()]=r)}else{const o=t;for(t-=r.vl;t<o;)r=this.#B(e,t,n),t=r.endOffset,i[r.tag.getKey()]=r}return{data:i,endOffset:t,isSeqDelim:!1}}#N(e,t,n){const i=[];let r=this.#B(e,t,n);const o=r.vl;t=r.endOffset;let a=!1;for(;!a;)r=this.#B(e,t,n),t=r.endOffset,a=V(r.tag),a||(r.vr="OB",i.push(r));return{data:i,endOffset:t,offsetTableVl:o}}#B(e,t,n){const i=this.#Q(e,t),r=i.tag;t=i.endOffset;let o=null,a=!1;r.isWithVR()?n?(o=r.getVrFromDictionary(),void 0===o&&(o="UN"),a=!0):(o=this.#q(e.readUint8Array(t,2)),t+=2*Uint8Array.BYTES_PER_ELEMENT,a=R(o),a&&(t+=2*Uint8Array.BYTES_PER_ELEMENT)):(o="NONE",a=!0);let s=0;a?(s=e.readUint32(t),t+=Uint32Array.BYTES_PER_ELEMENT):(s=e.readUint16(t),t+=Uint16Array.BYTES_PER_ELEMENT);let l=!1;4294967295===s&&(l=!0,s=0),r.isPrivate()&&"UN"===o&&0===s&&(o="SQ");let c,u=t,d=u+s;if(k(r)&&l){const i=this.#N(e,t,n);t=i.endOffset,u+=i.offsetTableVl,c=i.data,d=t,s=t-u}else if("SQ"===o){let i;if(c=[],l){let r=!1;for(;!r;)i=this.#M(e,t,n),r=i.isSeqDelim,t=i.endOffset,r||c.push(i.data);d=t,s=t-u}else if(0!==s){const r=t+s;for(;t<r;)i=this.#M(e,t,n),c.push(i.data),t=i.endOffset;d=t,s=t-u}}const S=new oe(o);return S.tag=r,S.vl=s,S.startOffset=u,S.endOffset=d,l&&(S.undefinedLength=l),c&&(S.items=c),S}#V(e,t,n,i){const r=e.tag,o=e.vl,a=e.vr,s=e.startOffset;let l=null;const c=U[a];if(k(r))if(e.undefinedLength){l=[];for(let r=0;r<e.items.length;++r)l.push(this.#V(e.items[r],t,n,i));delete e.items}else if(i>8&&"OB"===a&&g.warn("Reading DICOM pixel data with bitsAllocated>8 and OB VR."),l=[],1===i)l.push(t.readBinaryArray(s,o));else if(8===i)0===n?l.push(t.readUint8Array(s,o)):l.push(t.readInt8Array(s,o));else{if(16!==i)throw new Error("Unsupported bits allocated: "+i);0===n?l.push(t.readUint16Array(s,o)):l.push(t.readInt16Array(s,o))}else if(void 0!==c)if("Uint8"===c)l=t.readUint8Array(s,o);else if("Uint16"===c)l=t.readUint16Array(s,o),"O"!==a[0]&&(l=Array.from(l));else if("Uint32"===c)l=t.readUint32Array(s,o),"O"!==a[0]&&(l=Array.from(l));else if("Uint64"===c)l=t.readUint64Array(s,o);else if("Int16"===c)l=Array.from(t.readInt16Array(s,o));else if("Int32"===c)l=Array.from(t.readInt32Array(s,o));else if("Int64"===c)l=t.readInt64Array(s,o);else if("Float32"===c)l=Array.from(t.readFloat32Array(s,o));else if("Float64"===c)l=Array.from(t.readFloat64Array(s,o));else{if("string"!==c)throw Error("Unknown VR type: "+c);{const e=t.readUint8Array(s,o);l=q(a)?this.#U(e):this.#q(e),l=function(e){let t=e;const n=e.length-1;return e[n]===le&&(t=e.substring(0,n)),t=t.trim(),t}(l).split("\\")}}else if("xx"===a)l=Array.from(t.readUint16Array(s,o));else if("ox"===a)l=8===i?Array.from(t.readUint8Array(s,o)):Array.from(t.readUint16Array(s,o));else if("xs"===a)l=0===n?Array.from(t.readUint16Array(s,o)):Array.from(t.readInt16Array(s,o));else if("AT"===a){const e=t.readUint16Array(s,o);l=[];for(let t=0,n=e.length;t<n;t+=2){const n=e[t].toString(16),i=e[t+1].toString(16);let r="(";r+="0000".substring(0,4-n.length)+n.toUpperCase(),r+=",",r+="0000".substring(0,4-i.length)+i.toUpperCase(),r+=")",l.push(r)}}else if("SQ"===a){l=[];for(let r=0;r<e.items.length;++r){const o=e.items[r],a={},s=Object.keys(o);for(let e=0;e<s.length;++e){const r=o[s[e]];r.value=this.#V(r,t,n,i),delete r.tag,delete r.vl,delete r.startOffset,delete r.endOffset,a[s[e]]=r}l.push(a)}delete e.items}else"NONE"===a||g.warn("Unknown VR: "+a+" (for tag "+e.tag.getKey()+")"),l=[];return l}#G(e,t,n,i){const r=Object.keys(e);for(let o=0;o<r.length;++o){const a=e[r[o]];void 0===a.value&&(a.value=this.#V(a,t,n,i)),delete a.tag,delete a.vl,delete a.startOffset,delete a.endOffset}}parse(e){let t=0,n="",i=null;const r=new z(e);let o=new z(e);t=128;const a=this.#q(r.readUint8Array(t,4));if(t+=4*Uint8Array.BYTES_PER_ELEMENT,"DICM"===a){i=this.#B(r,t,!1),i.value=this.#V(i,r),t=i.endOffset,this.#b[i.tag.getKey()]=i;const e=t+i.value[0];for(;t<e;)i=this.#B(r,t,!1),t=i.endOffset,this.#b[i.tag.getKey()]=i;if(i=this.#b["00020010"],void 0===i)throw new Error("Not a valid DICOM file (no TransferSyntaxUID found)");i.value=this.#V(i,r),n=i.value[0]}else{g.warn("No DICM prefix, trying to guess tansfer syntax."),i=this.#B(o,0,!1);const e=function(e){const t="0008",n=e.tag.getGroup();if("0800"!==n&&n!==t)throw new Error("Not a valid DICOM file (no magic DICM word found and first element not in 0008 group)");const i=e.vr,r=i.charCodeAt(0),o=i.charCodeAt(1),a=!(r>=65&&r<=90&&o>=65&&o<=90);let s=null;if(n===t)s=a?"1.2.840.10008.1.2":"1.2.840.10008.1.2.1";else{if(a)throw new Error("Not a valid DICOM file (no magic DICM word foundand implicit VR big endian detected)");s="1.2.840.10008.1.2.2"}const l=new oe("UI");return l.tag=new Q("0002","0010"),l.value=[s+" "],l.vl=l.value[0].length,l.startOffset=e.startOffset,l.endOffset=l.startOffset+l.vl,l}(i);this.#b[e.tag.getKey()]=e,n=e.value[0],t=0}if(!function(e){return"1.2.840.10008.1.2"===e||"1.2.840.10008.1.2.1"===e||"1.2.840.10008.1.2.2"===e||ge(e)||me(e)||pe(e)||fe(e)}(n))throw new Error("Unsupported DICOM transfer syntax: '"+n+"' ("+function(e){let t="Unknown";return"1.2.840.10008.1.2"===e?t="Little Endian Implicit":"1.2.840.10008.1.2.1"===e?t="Little Endian Explicit":"1.2.840.10008.1.2.1.99"===e?t="Little Endian Deflated Explicit":"1.2.840.10008.1.2.2"===e?t="Big Endian Explicit":ge(e)?t="1.2.840.10008.1.2.4.50"===e?"JPEG Baseline":"JPEG Extended, Process 2+4":me(e)?t="1.2.840.10008.1.2.4.57"===e?"JPEG Lossless, Nonhierarchical (Processes 14)":"JPEG Lossless, Non-hierarchical, 1st Order Prediction":function(e){return null!==e.match(/1.2.840.10008.1.2.4.5/)&&!ge(e)&&!me(e)||null!==e.match(/1.2.840.10008.1.2.4.6/)}(e)?t="Retired JPEG":function(e){return null!==e.match(/1.2.840.10008.1.2.4.8/)}(e)?t="JPEG-LS":pe(e)?t="1.2.840.10008.1.2.4.91"===e?"JPEG 2000 (Lossless or Lossy)":"JPEG 2000 (Lossless only)":"1.2.840.10008.1.2.4.100"===e?t="MPEG2":fe(e)&&(t="RLE"),t}(n)+")");let s=!1;for(Se(n)&&(s=!0),he(n)&&(o=new z(e,!1));t<e.byteLength;){i=this.#B(o,t,s),t=i.endOffset;const e=i.tag.getKey();void 0===this.#b[e]?this.#b[e]=i:g.warn("Not saving duplicate tag: "+e)}if(isNaN(t))throw new Error("Problem while parsing, bad offset");e.byteLength!==t&&g.warn("Did not reach the end of the buffer: "+t+" != "+e.byteLength);let l=0,c=16;if(void 0!==this.#b["7FE00010"]&&(i=this.#b["00280103"],void 0!==i?(i.value=this.#V(i,o),l=i.value[0]):g.warn("Reading DICOM pixel data with default pixelRepresentation."),i=this.#b["00280100"],void 0!==i?(i.value=this.#V(i,o),c=i.value[0]):g.warn("Reading DICOM pixel data with default bitsAllocated.")),void 0!==this.#F&&this.setDecoderCharacterSet(this.#F),i=this.#b["00080005"],void 0!==i){let e;i.value=this.#V(i,o),1===i.value.length?e=i.value[0]:(e=i.value[1],g.warn("Unsupported character set with code extensions: '"+e+"'.")),this.setDecoderCharacterSet(function(e){let t="utf-8";return"ISO_IR 100"===e?t="iso-8859-1":"ISO_IR 101"===e?t="iso-8859-2":"ISO_IR 109"===e?t="iso-8859-3":"ISO_IR 110"===e?t="iso-8859-4":"ISO_IR 144"===e?t="iso-8859-5":"ISO_IR 127"===e?t="iso-8859-6":"ISO_IR 126"===e?t="iso-8859-7":"ISO_IR 138"===e?t="iso-8859-8":"ISO_IR 148"===e?t="iso-8859-9":"ISO_IR 13"===e?t="shift-jis":"ISO_IR 166"===e?t="iso-8859-11":"ISO 2022 IR 87"===e?t="iso-2022-jp":"ISO 2022 IR 149"===e||"ISO 2022 IR 58"===e||("ISO_IR 192"===e?t="utf-8":"GB18030"===e?t="gb18030":"GB2312"===e?t="gb2312":"GBK"===e&&(t="chinese")),t}(e))}if(this.#G(this.#b,o,l,c),i=this.#b["7FE00010"],void 0!==i&&i.undefinedLength){let e=1;void 0!==this.#b["00280008"]&&(e=Number(this.#b["00280008"].value[0]));const t=i.value;if(t.length>1&&t.length>e){const n=t.length/e,r=[];let o=0;for(let i=0;i<e;++i){o=i*n;let e=0;for(let i=0;i<n;++i)e+=t[o+i].length;const a=new t[0].constructor(e);let s=0;for(let e=0;e<n;++e)a.set(t[o+e],s),s+=t[o+e].length;r[i]=a}i.value=r}}}}class ve{#k={};add(e,t){void 0===this.#k[e]&&(this.#k[e]=[]),this.#k[e].push(t)}remove(e,t){if(void 0!==this.#k[e])for(let n=0;n<this.#k[e].length;++n)this.#k[e][n]===t&&this.#k[e].splice(n,1)}fireEvent=e=>{if(void 0===this.#k[e.type])return;const t=this.#k[e.type].slice();for(let n=0;n<t.length;++n)t[n](e)}}function Te(e,t,n,i,r,o,a,s){void 0===a&&(a=!1),void 0===s&&(s=!1);let l=t;a?(o*=-1,s?l-=(r-1)*i:i*=-1):s&&(l+=(r-1)*i,i*=-1);const c=o-r*i;let u=0,d=0;return{next:function(){if(u<n){const t={value:e(l),done:!1,index:l};return l+=i,++u,++d,d===r&&(d=0,l+=c),t}return{done:!0,index:l}}}}function Ie(e){const t=[];let n=e.next();for(;!n.done;)t.push(n.value),n=e.next();return t}function Le(t,n,i,r){const o=t.getGeometry().getSize();let a=2;r&&void 0!==r&&(a=r.getColAbsMax(2).index);const s=n.getValues(),l=new e(s.map((function(e,t){return t===a||t>2?e:0})));let c=o.indexToOffset(l);void 0===i&&(i=!1);let u=null;u=i?function(e){return t.getRescaledValueAtOffset(e)}:function(e){return t.getValueAtOffset(e)};const d=o.get(0),S=o.get(1),h=o.get(2);let g=o.getDimSize(2);const m=t.getNumberOfComponents(),p=1===t.getPlanarConfiguration(),f=function(e,t,n,i,r,o,a,s){return 1===m?Te(e,t,n,i,r,o,a,s):3===m?function(e,t,n,i,r,o,a,s,l){const c=[];return l?(c.push(Te(e,t,n,i,r,o,a,s)),c.push(Te(e,t+n*i,n,i,r,o,a,s)),c.push(Te(e,t+2*n*i,n,i,r,o,a,s))):(i*=3,o*=3,c.push(Te(e,t,n,i,r,o,a,s)),c.push(Te(e,t+1,n,i,r,o,a,s)),c.push(Te(e,t+2,n,i,r,o,a,s))),{next:function(){const e=c[0].next(),t=c[1].next(),n=c[2].next();return e.done?{done:!0,index:n.index}:{value:[e.value,t.value,n.value],done:!1,index:[e.index,t.index,n.index]}}}}(e,3*t,n,i,r,o,a,s,p):void 0};let D=null;if(r&&void 0!==r){const e=r.getColAbsMax(0),t=r.getColAbsMax(2),n=!1,i=!1;let o=null;if(2===t.index)o=d*S,D=0===e.index?f(u,c,o,1,d,d,n,i):f(u,c,o,d,S,1,n,i);else if(0===t.index)o=h*S,D=1===e.index?f(u,c,o,d,S,g,n,i):f(u,c,o,g,h,d,n,i);else{if(1!==t.index)throw new Error("Unknown direction: "+t.index);o=h*d,D=0===e.index?f(u,c,o,1,d,g,n,i):f(u,c,o,g,h,1,n,i)}}else if(1===t.getNumberOfComponents())D=function(e,t,n,i){void 0===i&&(i=1);let r=t;return{next:function(){if(r<n){const t={value:e(r),done:!1,index:r};return r+=i,t}return{done:!0,index:n}}}}(u,c,c+g);else{if(3!==t.getNumberOfComponents())throw new Error("Unsupported number of components: "+t.getNumberOfComponents());c*=3,g*=3,D=function(e,t,n,i,r){void 0===i&&(i=1),void 0===r&&(r=!1);let o=t,a=1;r?a=(n-t)/3:i*=3;let s=o+a,l=o+2*a;return{next:function(){if(o<n){const t={value:[e(o),e(s),e(l)],done:!1,index:[o,s,l]};return o+=i,s+=i,l+=i,t}return{done:!0,index:[n]}}}}(u,c,c+g,1,p)}return D}function Pe(e,t){let n=0,i=0;return{next:function(){if(n<t){i+1<e.length&&n>=e[i+1].index&&++i;const t={value:e[i].colour,done:!1,index:n};return++n,t}return{done:!0,index:t}}}}class Oe{#h;#H;constructor(e,t){this.#h=e,this.#H=t}getSlope(){return this.#h}getIntercept(){return this.#H}apply(e){return e*this.#h+this.#H}equals(e){return null!==e&&this.getSlope()===e.getSlope()&&this.getIntercept()===e.getIntercept()}toString(){return this.getSlope()+", "+this.getIntercept()}isID(){return 1===this.getSlope()&&0===this.getIntercept()}}class we{#e;constructor(e){if(!e||void 0===e)throw new Error("Cannot create size with no values.");if(0===e.length)throw new Error("Cannot create size with empty values.");if(!e.every((function(e){return!isNaN(e)&&0!==e})))throw new Error("Cannot create size with non number or zero values.");this.#e=e}get(e){return this.#e[e]}length(){return this.#e.length}toString(){return"("+this.#e.toString()+")"}getValues(){return this.#e.slice()}moreThanOne(e){return this.length()>=e+1&&1!==this.get(e)}canScroll3D(e){let t=2;return void 0!==e&&(t=e.getThirdColMajorDirection()),this.moreThanOne(t)}canScroll(e){let t=this.canScroll3D(e);for(let e=3;e<this.length();++e)t=t||this.moreThanOne(e);return t}getDimSize(e,t){if(e>this.length())return null;if(void 0===t)t=0;else if(t<0||t>e)throw new Error("Invalid start value for getDimSize");let n=1;for(let i=t;i<e;++i)n*=this.get(i);return n}getTotalSize(e){return this.getDimSize(this.length(),e)}equals(e){if(!e)return!1;const t=this.length();if(t!==e.length())return!1;for(let n=0;n<t;++n)if(this.get(n)!==e.get(n))return!1;return!0}isInBounds(e,t){if(!e)return!1;const n=this.length();if(n!==e.length())return!1;if(void 0===t){t=[];for(let e=0;e<n;++e)t.push(e)}else for(let e=0;e<n;++e)if(t[e]>n-1)throw new Error("Wrong input dir value: "+t[e]);for(let n=0;n<t.length;++n)if(i=e.get(t[n]),r=this.get(t[n]),!(i>=0&&i<r))return!1;var i,r;return!0}indexToOffset(e,t){if(e.length()<this.length())throw new Error("Incompatible index and size length");if(void 0===t)t=0;else if(t<0||t>this.length()-1)throw new Error("Invalid start value for indexToOffset");let n=0;for(let i=t;i<this.length();++i)n+=e.get(i)*this.getDimSize(i,t);return n}offsetToIndex(t){const n=new Array(this.length());let i=t,r=0;for(let e=this.length()-1;e>0;--e)r=this.getDimSize(e),n[e]=Math.floor(i/r),i-=n[e]*r;return n[0]=i,new e(n)}get2D(){return{x:this.get(0),y:this.get(1)}}}class Ae{#e;constructor(e){if(!e||void 0===e)throw new Error("Cannot create spacing with no values.");if(0===e.length)throw new Error("Cannot create spacing with empty values.");if(!e.every((function(e){return!isNaN(e)&&0!==e})))throw new Error("Cannot create spacing with non number or zero values.");this.#e=e}get(e){return this.#e[e]}length(){return this.#e.length}toString(){return"("+this.#e.toString()+")"}getValues(){return this.#e.slice()}equals(e){if(!e)return!1;const t=this.length();if(t!==e.length())return!1;for(let n=0;n<t;++n)if(this.get(n)!==e.get(n))return!1;return!0}get2D(){return{x:this.get(0),y:this.get(1)}}}class xe{#W;#z;#Y;#X={};#j;#_=T();#Z=!1;constructor(e,t,n,i,r){this.#W=[e],this.#z=t,this.#Y=n,void 0!==r&&(this.#j=r,this.#X[r]=[e]),void 0!==i&&(this.#_=i)}getInitialTime(){return this.#j}getCurrentTotalNumberOfSlices(){const e=Object.keys(this.#X);if(0===e.length)return this.#W.length;let t=0;for(let n=0;n<e.length;++n)t+=this.#X[e[n]].length;return t}hasSlicesAtTime(e){return void 0!==this.#X[e]}getCurrentNumberOfSlicesBeforeTime(e){const t=Object.keys(this.#X);if(0===t.length)return;let n=0;for(let i=0;i<t.length;++i){const r=t[i];if(parseInt(r,10)===e)break;n+=this.#X[r].length}return n}getOrigin(){return this.#W[0]}getOrigins(){return this.#W}includesOrigin(e,t){for(let n=0;n<this.#W.length;++n)if(this.#W[n].isSimilar(e,t))return!0;return!1}getSize(e){let t=this.#z;if(e&&void 0!==e){let n=be([this.#z.get(0),this.#z.get(1),this.#z.get(2)],e);n=n.map(Math.abs),t=new we(n.concat(this.#z.getValues().slice(3)))}return t}#K(){const e=Re(this.#W,this.#_);if(void 0!==e&&this.#Y.get(2)!==e){g.trace("Updating slice spacing.");const t=this.#Y.getValues();t[2]=e,this.#Y=new Ae(t)}}getSpacing(e){this.#Z&&(this.#K(),this.#Z=!1);let t=this.#Y;if(e&&void 0!==e){let n=be([this.#Y.get(0),this.#Y.get(1),this.#Y.get(2)],e);n=n.map(Math.abs),t=new Ae(n)}return t}getRealSpacing(){return this.getSpacing(this.#_.getInverse().asOneAndZeros())}getOrientation(){return this.#_}getSliceIndex(e,t){let n=this.#W;void 0!==t&&(n=this.#X[t]);let i=0,r=e.getDistance(n[0]),o=0;for(let t=0;t<n.length;++t)o=e.getDistance(n[t]),o<r&&(r=o,i=t);const a=n[i],s=e.minus(a);return new D(this.#_.get(0,2),this.#_.get(1,2),this.#_.get(2,2)).dotProduct(s)>0?i+1:i}appendOrigin(e,t,n){if(void 0!==n&&this.#X[n].splice(t,0,e),void 0===n||n===this.#j){this.#Z=!0,this.#W.splice(t,0,e);const n=this.#z.getValues();n[2]+=1,this.#z=new we(n)}}appendFrame(e,t){this.#X[t]=[e];const n=this.#z.getValues(),i=this.#Y.getValues();4===n.length?n[3]+=1:(n.push(2),i.push(1)),this.#z=new we(n),this.#Y=new Ae(i)}toString(){return"Origin: "+this.getOrigin()+", Size: "+this.getSize()+", Spacing: "+this.getSpacing()+", Orientation: "+this.getOrientation()}equals(e){return null!==e&&this.getOrigin().equals(e.getOrigin())&&this.getSize().equals(e.getSize())&&this.getSpacing().equals(e.getSpacing())}isInBounds(e){return this.isIndexInBounds(this.worldToIndex(e))}isIndexInBounds(e,t){return this.getSize().isInBounds(e,t)}indexToWorld(e){const t=this.getSpacing(),n=new O(e.get(0)*t.get(0),e.get(1)*t.get(1),e.get(2)*t.get(2)),i=this.getOrientation().multiplyPoint3D(n),r=e.getValues(),o=this.getOrigin();return r[0]=o.getX()+i.getX(),r[1]=o.getY()+i.getY(),r[2]=o.getZ()+i.getZ(),new w(r)}pointToWorld(e){const t=this.getSpacing(),n=new O(e.getX()*t.get(0),e.getY()*t.get(1),e.getZ()*t.get(2)),i=this.getOrientation().multiplyPoint3D(n),r=this.getOrigin();return new O(r.getX()+i.getX(),r.getY()+i.getY(),r.getZ()+i.getZ())}worldToIndex(t){const n=this.getOrigin(),i=new O(t.get(0)-n.getX(),t.get(1)-n.getY(),t.get(2)-n.getZ()),r=this.getOrientation().getInverse().multiplyPoint3D(i),o=t.getValues(),a=this.getSpacing();return o[0]=Math.round(r.getX()/a.get(0)),o[1]=Math.round(r.getY()/a.get(1)),o[2]=Math.round(r.getZ()/a.get(2)),new e(o)}worldToPoint(e){const t=this.getOrigin(),n=new O(e.get(0)-t.getX(),e.get(1)-t.getY(),e.get(2)-t.getZ()),i=this.getOrientation().getInverse().multiplyPoint3D(n),r=e.getValues(),o=this.getSpacing();return r[0]=i.getX()/o.get(0),r[1]=i.getY()/o.get(1),r[2]=i.getZ()/o.get(2),new O(r[0],r[1],r[2])}}function be(e,t){return t.getInverse().multiplyArray3D(e)}function Fe(e,t){return t.multiplyArray3D(e)}function Re(e,t,n){if(void 0===n&&(n=!0),e.length<=1)return;const i=t.getInverse();let r=i.multiplyVector3D(e[0]),o=i.multiplyVector3D(e[1]),a=Math.abs(r.getZ()-o.getZ());const s=[];for(let t=0;t<e.length-1;++t){r=i.multiplyVector3D(e[t]),o=i.multiplyVector3D(e[t+1]);const l=Math.abs(r.getZ()-o.getZ());if(0===l)throw new Error("Zero slice spacing."+r.toString()+" "+o.toString());l<a&&(a=l),n&&(C(a,l,y)||s.push(Math.abs(a-l)))}if(n&&0!==s.length){const e=function(e,t){return e+t},t=s.reduce(e)/s.length;t>1e-4&&g.warn("Varying slice spacing, mean delta: "+t.toFixed(3)+" ("+s.length+" case(s))")}return a}function Ee(e){const t=e["00280010"];if(void 0===t)throw new Error("Missing DICOM image number of rows");if(0===t.value.length)throw new Error("Empty DICOM image number of rows");const n=e["00280011"];if(void 0===n)throw new Error("Missing DICOM image number of columns");if(0===n.value.length)throw new Error("Empty DICOM image number of columns");return[n.value[0],t.value[0]]}class qe{getTime(e){}}class Ue{checkElements(e){Ee(e)}create(e,t,n){const i=Ee(e),o=[i[0],i[1],1],a=e["00280008"];a&&o.push(a.value[0]);const s=new we(o),l=function(e){let t=1,n=1;const i=["00280030","00181164","00182010","00280034"];for(let r=0;r<i.length;++r){const o=e[i[r]];if(o&&2===o.value.length){t=parseFloat(o.value[0]),n=parseFloat(o.value[1]);break}}return 0===n&&(g.warn("Zero column spacing."),n=1),0===t&&(g.warn("Zero row spacing."),t=1),new Ae([n,t,1])}(e),c=e["00020010"].value[0],u=pe(c),d=ge(c),S=me(c),h=e["00200032"];let m=new Array(0,0,0);void 0!==h&&(m=[parseFloat(h.value[0]),parseFloat(h.value[1]),parseFloat(h.value[2])]);const p=e["00200037"];let f;if(void 0!==p){const e=new D(parseFloat(p.value[0]),parseFloat(p.value[1]),parseFloat(p.value[2])),t=new D(parseFloat(p.value[3]),parseFloat(p.value[4]),parseFloat(p.value[5])),n=e.crossProduct(t);f=new v([e.getX(),t.getX(),n.getX(),e.getY(),t.getY(),n.getY(),e.getZ(),t.getZ(),n.getZ()])}const y=new O(m[0],m[1],m[2]),C=(new qe).getTime(e),T=new xe(y,s,l,f,C);let I;const L=e["00080018"];void 0!==L&&(I=L.value[0]);let P=1;const w=e["00280002"];void 0!==w&&(P=w.value[0]);const A=s.getTotalSize()*P;if(A!==t.length){if(g.warn("Badly sized pixel buffer: "+t.length+" != "+A),!(A<t.length))throw new Error("Underestimated buffer size, can't fix it...");t=t.slice(0,s.getTotalSize())}const x=new Ye(T,t,[I]),b=e["00280004"];if(void 0!==b){let e=b.value[0].toUpperCase();(u||d||S)&&"MONOCHROME1"!==e&&"MONOCHROME2"!==e&&(e="RGB"),"RGB"===e&&1===P&&(e="PALETTE COLOR"),x.setPhotometricInterpretation(e)}const F=e["00280006"];void 0!==F&&x.setPlanarConfiguration(F.value[0]);let R=1;const E=e["00281053"];if(void 0!==E){const e=parseFloat(E.value[0]);isNaN(e)||(R=e)}let q=0;const U=e["00281052"];if(void 0!==U){const e=parseFloat(U.value[0]);isNaN(e)||(q=e)}const Q=new Oe(R,q);x.setRescaleSlopeAndIntercept(Q);const M={numberOfFiles:n},B=e["00080060"];void 0!==B&&(M.Modality=B.value[0]);const N=e["00080016"];void 0!==N&&(M.SOPClassUID=N.value[0]);const V=e["0020000D"];void 0!==V&&(M.StudyInstanceUID=V.value[0]);const G=e["0020000E"];void 0!==G&&(M.SeriesInstanceUID=G.value[0]);const k=e["00280101"];void 0!==k&&(M.BitsStored=k.value[0]);const H=e["00280103"];void 0!==H&&(M.PixelRepresentation=H.value[0]),M.IsSigned=1===M.PixelRepresentation;const W=function(e){let t;const n=["00281054","00541001"];for(let i=0;i<n.length;++i){const r=e[n[i]];void 0!==r&&(t=r.value[0])}return void 0!==t&&"CT"===e["00080060"].value[0]&&(t="HU"),t}(e);void 0!==W&&(M.pixelUnit=W);const z=e["00200052"];void 0!==z&&(M.FrameOfReferenceUID=z.value[0]);const Y={},X=e["00281050"],j=e["00281051"],_=e["00281055"];if(void 0!==X&&void 0!==j){let e;for(let t=0;t<X.value.length;++t){const n=parseFloat(X.value[t]),i=parseFloat(j.value[t]);n&&i&&0!==i&&(e="",void 0!==_&&(e=_.value[t]),""===e&&(e="Default"+t),Y[e]={wl:[new r(n,i)],name:e}),0===i&&g.warn("Zero window width found in DICOM.")}}if(M.windowPresets=Y,"PALETTE COLOR"===x.getPhotometricInterpretation()){const t=e["00281201"],n=e["00281202"],i=e["00281203"];let r,o,a;const s=e["00281101"];if(void 0!==s&&3===s.value.length)if(16===s.value[2]){let l=!1,c=s.value[0];0===c&&(c=65536);const u=t.vl;if(u!==2*c&&(l=!0,g.info("16bits lut but size is not double. desc: "+c+" vl: "+u)),8===parseInt(e["00280100"].value[0],10)&&(l=!0,g.info("Scaling 16bits color lut since bits allocated is 8.")),l){const e=function(e){return e>>8};r=t.value.map(e),o=n.value.map(e),a=i.value.map(e)}}else if(8===s.value[2]){g.info("Scaling 16bits color lut since the lut descriptor is 8.");let e=t.value.slice(0);r=new Uint8Array(e.buffer),e=n.value.slice(0),o=new Uint8Array(e.buffer),e=i.value.slice(0),a=new Uint8Array(e.buffer)}M.paletteLut={red:r,green:o,blue:a}}const Z=e["00082144"];return void 0!==Z&&(M.RecommendedDisplayFrameRate=parseInt(Z.value[0],10)),x.setMeta(M),x}}function Qe(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Me(e,t){const n=e[t.tag];if(1===t.type||2===t.type){if(void 0===n)throw new Error("Missing or empty "+t.name)}else if(void 0===n)return;let i,r=!1;if(i=1===n.value.length?n.value[0]:n.value,Array.isArray(i))for(let e=0;e<t.enum.length;++e){if(!Array.isArray(t.enum[e]))throw new Error("Cannot compare array and non array tag value.");if($(t.enum[e],i)){r=!0;break}}else r=t.enum.includes(i);if(!r)throw new Error("Unsupported "+t.name+" value: "+i)}const Be=[{name:"TransferSyntaxUID",tag:"x00020010",type:"1",enum:["1.2.840.10008.1.2.1"]},{name:"MediaStorageSOPClassUID",tag:"x00020002",type:"1",enum:["1.2.840.10008.5.1.4.1.1.66.4"]},{name:"SOPClassUID",tag:"x00020002",type:"1",enum:["1.2.840.10008.5.1.4.1.1.66.4"]},{name:"Modality",tag:"x00080060",type:"1",enum:["SEG"]},{name:"SegmentationType",tag:"x00620001",type:"1",enum:["BINARY"]},{name:"DimensionOrganizationType",tag:"x00209311",type:"3",enum:["3D"]},{name:"ImageType",tag:"x00080008",type:"1",enum:[["DERIVED","PRIMARY"]]},{name:"SamplesPerPixel",tag:"x00280002",type:"1",enum:[1]},{name:"PhotometricInterpretation",tag:"x00280004",type:"1",enum:["MONOCHROME2"]},{name:"PixelRepresentation",tag:"x00280103",type:"1",enum:[0]},{name:"BitsAllocated",tag:"x00280100",type:"1",enum:[1]},{name:"BitsStored",tag:"x00280101",type:"1",enum:[1]},{name:"HighBit",tag:"x00280102",type:"1",enum:[0]}];function Ne(e){const t={meaning:e["00080104"].value[0]};if(e["00080100"])t.value=e["00080100"].value[0];else if(e["00080119"])t.longValue=e["00080119"].value[0];else{if(!e["00080120"])throw Error("Invalid code with no value, no long value and no urn value.");t.urnValue=e["00080120"].value[0]}if(void 0!==t.value||void 0!==t.longValue){if(!e["00080102"])throw Error("No coding sheme designator when code value or long value is present");t.schemeDesignator=e["00080102"].value[0]}return t}function Ve(e){const t={number:e["00620004"].value[0],label:e["00620005"].value[0],algorithmType:e["00620008"].value[0]};if(e["00620009"]&&(t.algorithmName=e["00620009"].value[0]),void 0!==e["0062000C"])t.displayValue=e["006200C"].value;else if(void 0!==e["0062000D"]){const i=e["0062000D"].value,r=function(e){return function(e){function t(e){let t=null;return t=e<=.0031308?12.92*e:1.055*Math.pow(e,.416666667)-.055,Math.min(1,Math.max(0,t))}const n=e.x/100,i=e.y/100,r=e.z/100;return{r:Math.round(255*t(3.2406*n-1.5372*i-.4986*r)),g:Math.round(255*t(-.9689*n+1.8758*i+.0415*r)),b:Math.round(255*t(.0557*n-.204*i+1.057*r))}}(function(e){function t(e){let t=null;return t=e>.206896552?Math.pow(e,3):.128418549*e-.017712903,t}const n=p,i=(e.l+16)/116;return{x:n.x*t(i+e.a/500),y:n.y*t(i),z:n.z*t(i-e.b/200)}}(e))}({l:.001525902*(n={l:i[0],a:i[1],b:i[2]}).l,a:.003891051*n.a-128,b:.003891051*n.b-128});t.displayValue=r}var n;if(void 0===e["00620003"])throw Error("Missing Segmented Property Category Code Sequence.");if(t.propertyCategoryCode=Ne(e["00620003"].value[0]),void 0===e["0062000F"])throw Error("Missing Segmented Property Type Code Sequence.");return t.propertyTypeCode=Ne(e["0062000F"].value[0]),void 0!==e["00620020"]&&(t.trackingId=e["00620020"].value[0],t.trackingUid=e["00620021"].value[0]),t}function Ge(e){if(void 0===e["00280030"])return null;const t=e["00280030"],n=[parseFloat(t.value[0]),parseFloat(t.value[1])];return void 0!==e["00180050"]?n.push(parseFloat(e["00180050"].value[0])):void 0!==e["00180088"]&&n.push(parseFloat(e["00180088"].value[0])),new Ae(n)}function ke(e){const t=[];if(void 0!==e["00089124"]){const n=e["00089124"].value;for(let e=0;e<n.length;++e){const i=[];if(void 0!==n[e]["00082112"]){const t=n[e]["00082112"].value;for(let e=0;e<t.length;++e){const n={};void 0!==t[e]["00081150"]&&(n.referencedSOPClassUID=t[e]["00081150"].value[0]),void 0!==t[e]["00081155"]&&(n.referencedSOPInstanceUID=t[e]["00081155"].value[0]),i.push(n)}}t.push(i)}}const n=e["00209111"].value[0]["00209157"].value,i=e["0062000A"].value[0]["0062000B"].value[0],r=e["00209113"].value[0]["00200032"].value;for(let e=0;e<r.length;++e)r[e]=parseFloat(r[e]);const o={dimIndex:n,imagePosPat:r,derivationImages:t,refSegmentNumber:i};if(void 0!==e["00209116"]){const t=e["00209116"];if(0!==t.value.length){const e=t.value[0]["00200037"].value;void 0!==e&&(o.imageOrientationPatient=e)}}if(void 0!==e["00289110"]){const t=e["00289110"];if(0!==t.value.length){const e=Ge(t.value[0]);void 0!==e&&(o.spacing=e)}else g.warn("No shared functional group pixel measure sequence items.")}return o}class He{checkElements(e){}create(t,n){for(let e=0;e<Be.length;++e)Me(t,Be[e]);const i=Ee(t),r=new we([i[0],i[1],1]),o=r.getTotalSize();let a=1;const s=t["00280008"];if(void 0!==s&&(a=parseInt(s.value[0],10)),a!==n.length/o)throw new Error("Buffer and numberOfFrames meta are not equal."+a+" "+n.length/o);const l=function(e){const t=e["00209221"];if(void 0===t||1!==t.value.length)throw new Error("Unsupported dimension organization sequence length");const n=t.value[0]["00209164"].value[0],i=[],r=e["00209222"];if(void 0!==r){const e=r.value;if(2!==e.length)throw new Error("Unsupported dimension index sequence length");let t;for(let r=0;r<e.length;++r){const o=e[r]["00209164"].value[0];if(o!==n)throw new Error("Dimension Index Sequence contains a unknown Dimension Organization");t=e[r]["00209165"].value[0];const a={DimensionOrganizationUID:o,DimensionIndexPointer:t};void 0!==e[r]["00209421"]&&(a.DimensionDescriptionLabel=e[r]["00209421"].value[0]),i.push(a)}if("(0020,0032)"!==t)throw new Error("Unsupported non image position as last index")}return{organizations:{value:[{DimensionOrganizationUID:n}]},indices:{value:i}}}(t),c=t["00620002"];if(void 0===c)throw new Error("Missing or empty segmentation sequence");const u=[];let d,S,h=!1;for(let e=0;e<c.value.length;++e){const t=Ve(c.value[e]);void 0!==t.displayValue.r&&void 0!==t.displayValue.g&&void 0!==t.displayValue.b&&(h=!0),u.push(t)}const m=t[52009229];if(void 0!==m){const e=m.value[0];if(void 0!==e["00209116"]){const t=e["00209116"];0!==t.value.length?S=t.value[0]["00200037"].value:g.warn("No shared functional group plane orientation sequence items.")}if(void 0!==e["00289110"]){const t=e["00289110"];0!==t.value.length?d=Ge(t.value[0]):g.warn("No shared functional group pixel measure sequence items.")}}const p=function(e,t){return e.some((function(e){return Qe(t,e)}))},f=function(e,t){return e.findIndex((function(e){return Qe(t,e)}))},y=t[52009230];if(void 0===y)throw new Error("Missing or empty per frame functional sequence");if(a!==y.value.length)throw new Error("perFrameFuncGroupSequence meta and numberOfFrames are not equal.");const C=[];for(let e=0;e<y.value.length;++e)C.push(ke(y.value[e]));const T=[];for(let e=0;e<C.length;++e){if(p(T,C[e].imagePosPat)||T.push(C[e].imagePosPat),void 0!==C[e].imageOrientationPatient)if(void 0===S)S=C[e].imageOrientationPatient;else if(!$(S,C[e].imageOrientationPatient))throw new Error("Unsupported multi orientation dicom seg.");if(void 0!==C[e].spacing)if(void 0===d)d=C[e].spacing;else if(!d.equals(C[e].spacing))throw new Error("Unsupported multi resolution dicom seg.")}if(void 0===d)throw new Error("No spacing found for DICOM SEG");if(void 0===S)throw new Error("No imageOrientationPatient found for DICOM SEG");const I=new D(parseFloat(S[0]),parseFloat(S[1]),parseFloat(S[2])),L=new D(parseFloat(S[3]),parseFloat(S[4]),parseFloat(S[5])),P=I.crossProduct(L),w=new v([I.getX(),L.getX(),P.getX(),I.getY(),L.getY(),P.getY(),I.getZ(),L.getZ(),P.getZ()]);T.sort(function(e){const t=e.getInverse();return function(e,n){const i=t.multiplyArray3D(e),r=t.multiplyArray3D(n);return i[2]-r[2]}}(w));const A=function(e){return new O(e[0],e[1],e[2])},x=[];for(let e=0;e<T.length;++e)x.push(A(T[e]));let b=d;const F=Re(x,w,!1),R=d.getValues();void 0!==F&&F!==R[2]&&(R[2]=F,b=new Ae(R));const E=new xe(x[0],r,b,w),q=function(e){let t=e>1e-4;return t&&(t=e>.001,t?(t=e>.01,t||g.warn("Using larger+ real world epsilon in SEG pos pat adding")):g.warn("Using larger real world epsilon in SEG pos pat adding")),t},U=[];U.push(T[0]);let Q=0;for(let t=1;t<T.length;++t){++Q;let n=new e([0,0,Q]),i=E.indexToWorld(n).get3D();const r=x[t];let o=r.getDistance(i);const a=o;for(;q(o);)if(g.debug("Adding intermediate pos pats for DICOM seg at "+i.toString()),U.push([i.getX(),i.getY(),i.getZ()]),++Q,n=new e([0,0,Q]),i=E.indexToWorld(n).get3D(),o=r.getDistance(i),o>a)throw new Error("Test distance is increasing when adding intermediate pos pats");U.push(T[t])}const M=U.length,B=new xe(x[0],r,b,w),N=[0];for(let e=1;e<M;++e)B.appendOrigin(A(U[e]),e),N.push(e);const V=function(e){return function(t){return t.number===e}},G=h?3:1,k=new n.constructor(G*o*M);k.fill(0);let H=null,W=null;for(let e=0;e<C.length;++e){Q=f(U,C[e].imagePosPat),W=o*e,H=o*Q;const t=u.find(V(C[e].refSegmentNumber)).displayValue;for(let e=0;e<o;++e)if(0!==n[W+e]){const n=G*(H+e);h?(k[n]=t.r,k[n+1]=t.g,k[n+2]=t.b):k[n]=t}}const z=new Ye(B,k,N);h&&z.setPhotometricInterpretation("RGB");const Y=function(){const e={};for(let t=0;t<Be.length;++t){const n=Be[t];e[n.name]=n.enum[0]}return e}();Y.StudyDate=t["00080020"].value[0],Y.StudyTime=t["00080030"].value[0],Y.StudyInstanceUID=t["0020000D"].value[0],Y.StudyID=t["00200010"].value[0],Y.SeriesInstanceUID=t["0020000E"].value[0],Y.SeriesNumber=t["00200011"].value[0],Y.ReferringPhysicianName=t["00080090"].value[0],Y.PatientName=t["00100010"].value[0],Y.PatientID=t["00100020"].value[0],Y.PatientBirthDate=t["00100030"].value[0],Y.PatientSex=t["00100040"].value[0],Y.Manufacturer=t["00080070"].value[0],Y.ManufacturerModelName=t["00081090"].value[0],Y.DeviceSerialNumber=t["00181000"].value[0],Y.SoftwareVersions=t["00181020"].value[0],Y.DimensionOrganizationSequence=l.organizations,Y.DimensionIndexSequence=l.indices,Y.custom={segments:u,frameInfos:C,SOPInstanceUID:t["00080018"].value[0]},Y.numberOfFiles=M;const X=t["00200052"];X&&(Y.FrameOfReferenceUID=X.value[0]);const j=t["00282110"];return j&&(Y.LossyImageCompression=j.value[0]),z.setMeta(Y),z}}function We(e){return(new Ue).create(e,e["7FE00010"].value[0],1)}function ze(e){return(new He).create(e,e["7FE00010"].value[0])}class Ye{#J;#P;#$;#t=new Oe(1,0);#ee=null;#te=!0;#ne=!0;#ie="MONOCHROME2";#re=0;#oe;#ae={};#se=null;#le=null;#ce=null;#ue=new ve;constructor(e,t,n){this.#J=e,this.#P=t,this.#$=n,this.#oe=this.#P.length/this.#J.getSize().getTotalSize()}getImageUid(e){let t=this.#$[0];return 1!==this.#$.length&&void 0!==e&&(t=this.#$[this.getSecondaryOffset(e)]),t}getGeometry(){return this.#J}getBuffer(){return this.#P}canQuantify(){return 1===this.getNumberOfComponents()}canWindowLevel(){return null!==this.getPhotometricInterpretation().match(/MONOCHROME/)}canScroll(e){const t=this.getGeometry().getSize();let n=1;return void 0!==this.#ae.numberOfFiles&&(n=this.#ae.numberOfFiles),t.canScroll(e)||1!==n}#de(){return this.#J.getSize().getTotalSize(2)}getSecondaryOffset(e){return this.#J.getSize().indexToOffset(e,2)}getRescaleSlopeAndIntercept(e){let t=this.#t;if(!this.isConstantRSI()){if(void 0===e)throw new Error("Cannot get non constant RSI with empty slice index.");const n=this.getSecondaryOffset(e);void 0!==this.#ee[n]?t=this.#ee[n]:g.warn("undefined non constant rsi at "+n)}return t}#Se(e){return this.#ee[e]}setRescaleSlopeAndIntercept(e,t){if(this.#te=this.#te&&e.isID(),this.#ne){if(!this.#t.equals(e))if(void 0===t)this.#t=e;else{this.#ne=!1,this.#ee=[];for(let e=0,t=this.#de();e<t;++e)this.#ee.push(e);this.#t=null,this.#ee.splice(t,0,e)}}else{if(void 0===t)throw new Error("Cannot store non constant RSI with empty slice index.");this.#ee.splice(t,0,e)}}isIdentityRSI(){return this.#te}isConstantRSI(){return this.#ne}getPhotometricInterpretation(){return this.#ie}setPhotometricInterpretation(e){this.#ie=e}getPlanarConfiguration(){return this.#re}setPlanarConfiguration(e){this.#re=e}getNumberOfComponents(){return this.#oe}getMeta(){return this.#ae}setMeta(e){this.#ae=e}getValueAtOffset(e){return this.#P[e]}getOffsets(e){1===this.#oe?e=[e]:3===this.#oe&&void 0!==e.r&&(e=[e.r,e.g,e.b]);const t=[];let n;for(let i=0;i<this.#P.length;i+=this.#oe){n=!0;for(let t=0;t<this.#oe;++t)if(this.#P[i+t]!==e[t]){n=!1;break}n&&t.push(i)}return t}hasValues(e){if(void 0===e||0===e.length)return[];const t=[];for(let n=0;n<e.length;++n)1===this.#oe?t.push([e[n]]):3===this.#oe&&t.push([e[n].r,e[n].g,e[n].b]);let n;1===this.#oe?n=function(e,t){return e[0]===t[0]}:3===this.#oe&&(n=function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]});const i=function(e){return function(t){return n(t,e)}},r=new Array(e.length);r.fill(!1);const o=t.slice();let a,s;for(let e=0,n=this.#P.length;e<n;e+=this.#oe){s=[];for(let n=0;n<o.length;++n){a=!0;for(let t=0;t<this.#oe;++t)if(this.#P[e+t]!==o[n][t]){a=!1;break}a&&(r[t.findIndex(i(o[n]))]=!0,s.push(n))}for(let e=0;e<s.length;++e)o.splice(s[e],1);if(0===o.length)break}return r}clone(){const e=this.#P.slice(0),t=new Ye(this.getGeometry(),e,this.#$);if(this.isConstantRSI())t.setRescaleSlopeAndIntercept(this.getRescaleSlopeAndIntercept());else for(let e=0;e<this.#de();++e)t.setRescaleSlopeAndIntercept(this.#Se(e),e);return t.setPhotometricInterpretation(this.getPhotometricInterpretation()),t.setPlanarConfiguration(this.getPlanarConfiguration()),t.setMeta(this.getMeta()),t}#he(e){let t=this.#P;if(this.#P=De(8*this.#P.BYTES_PER_ELEMENT,this.#ae.IsSigned?1:0,e),null===this.#P)throw new Error("Cannot reallocate data for image.");this.#P.set(t),t=null}appendSlice(t){if(null===t)throw new Error("Cannot append null slice");const n=t.getGeometry().getSize();let i=this.#J.getSize();if(1!==n.get(2))throw new Error("Cannot append more than one slice");if(i.get(0)!==n.get(0))throw new Error("Cannot append a slice with different number of columns");if(i.get(1)!==n.get(1))throw new Error("Cannot append a slice with different number of rows");if(!this.#J.getOrientation().equals(t.getGeometry().getOrientation(),1e-4))throw new Error("Cannot append a slice with different orientation");if(this.#ie!==t.getPhotometricInterpretation())throw new Error("Cannot append a slice with different photometric interpretation");for(const e in this.#ae)if("windowPresets"!==e&&"numberOfFiles"!==e&&"custom"!==e&&this.#ae[e]!==t.getMeta()[e])throw new Error("Cannot append a slice with different "+e);const r=t.getGeometry().getInitialTime();let o=!1;void 0===r||this.#J.hasSlicesAtTime(r)||(this.appendFrame(r,t.getGeometry().getOrigin()),i=this.#J.getSize(),o=!0);const a=function(t,n){const i=n.getInitialTime(),r=[];return r.push(0),r.push(0),r.push(t.getSliceIndex(n.getOrigin(),i)),void 0!==i&&r.push(i),new e(r)}(this.#J,t.getGeometry()),s=this.#oe*i.getDimSize(2);if(void 0===this.#ae.numberOfFiles)throw new Error("Missing number of files for buffer manipulation.");const l=s*this.#ae.numberOfFiles;this.#P.length!==l&&this.#he(l);const c=a.get(2);let u=c;void 0!==r&&(u+=this.#J.getCurrentNumberOfSlicesBeforeTime(r));const d=u*s,S=this.#J.getCurrentTotalNumberOfSlices()*s;d<S&&this.#P.set(this.#P.subarray(d,S),d+s),this.#P.set(t.getBuffer(),d),o||this.#J.appendOrigin(t.getGeometry().getOrigin(),c,r),this.setRescaleSlopeAndIntercept(t.getRescaleSlopeAndIntercept(),u);const h=this.#$.length;if(this.#$.splice(u,0,t.getImageUid()),void 0!==this.#ae.windowPresets){const e=this.#ae.windowPresets,n=t.getMeta().windowPresets,i=Object.keys(n);let r=null;for(let t=0;t<i.length;++t){r=i[t];const o=n[r],a=e[r];if(void 0!==a){if((void 0===a.perslice||!1===a.perslice)&&!a.wl[0].equals(o.wl[0])){a.perslice=!0;for(let e=0;e<h-1;++e)a.wl.push(a.wl[0])}void 0!==a.perslice&&!0===a.perslice&&e[r].wl.splice(u,0,o.wl[0])}else e[r]=n[r]}}}appendFrameBuffer(e,t){const n=this.#J.getSize(),i=this.#oe*n.getDimSize(2);if(void 0===this.#ae.numberOfFiles)throw new Error("Missing number of files for frame buffer manipulation.");const r=i*this.#ae.numberOfFiles;this.#P.length!==r&&this.#he(r),t>=this.#ae.numberOfFiles?g.warn("Ignoring frame at index "+t+" (size: "+this.#ae.numberOfFiles+")"):(this.#P.set(e,i*t),this.appendFrame(t,new O(0,0,0)))}appendFrame(e,t){this.#J.appendFrame(t,e),this.#ge({type:"appendframe"})}getDataRange(){return this.#se||(this.#se=this.calculateDataRange()),this.#se}getRescaledDataRange(){return this.#le||(this.#le=this.calculateRescaledDataRange()),this.#le}getHistogram(){if(!this.#ce){const e=this.calculateHistogram();this.#se=e.dataRange,this.#le=e.rescaledDataRange,this.#ce=e.histogram}return this.#ce}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{this.#ue.fireEvent(e)};setAtOffsets(e,t){let n;for(let i=0,r=e.length;i<r;++i)n=e[i],this.#P[n]=t.r,this.#P[n+1]=t.g,this.#P[n+2]=t.b;this.#ge({type:"imagechange"})}setAtOffsetsAndGetOriginals(e,t){const n=[];for(let i=0;i<e.length;++i){const r=e[i];let o=3*r[0],a={r:this.#P[o],g:this.#P[o+1],b:this.#P[o+2]};const s=[];s.push({index:0,colour:a});for(let e=0;e<r.length;++e){o=3*r[e];const n={r:this.#P[o],g:this.#P[o+1],b:this.#P[o+2]};a.r===n.r&&a.g===n.g&&a.b===n.b||(s.push({index:e,colour:n}),a=n),this.#P[o]=t.r,this.#P[o+1]=t.g,this.#P[o+2]=t.b}n.push(s)}return this.#ge({type:"imagechange"}),n}setAtOffsetsWithIterator(e,t){for(let n=0;n<e.length;++n){const i=e[n];let r;r=void 0!==t&&void 0!==t.r?Pe([{index:0,colour:t}],i.length):Pe(t[n],i.length);let o=r.next();for(;!o.done;){const e=3*i[o.index];this.#P[e]=o.value.r,this.#P[e+1]=o.value.g,this.#P[e+2]=o.value.b,o=r.next()}}this.#ge({type:"imagechange"})}getValue(t,n,i,r){const o=new e([t,n,i,r||0]);return this.getValueAtOffset(this.getGeometry().getSize().indexToOffset(o))}getValueAtIndex(e){return this.getValueAtOffset(this.getGeometry().getSize().indexToOffset(e))}getRescaledValue(t,n,i,r){void 0===r&&(r=0);let o=this.getValue(t,n,i,r);if(!this.isIdentityRSI())if(this.isConstantRSI())o=this.getRescaleSlopeAndIntercept().apply(o);else{const a=new e([t,n,i,r]);o=this.getRescaleSlopeAndIntercept(a).apply(o)}return o}getRescaledValueAtIndex(e){return this.getRescaledValueAtOffset(this.getGeometry().getSize().indexToOffset(e))}getRescaledValueAtOffset(e){let t=this.getValueAtOffset(e);if(!this.isIdentityRSI())if(this.isConstantRSI())t=this.getRescaleSlopeAndIntercept().apply(t);else{const n=this.getGeometry().getSize().offsetToIndex(e);t=this.getRescaleSlopeAndIntercept(n).apply(t)}return t}calculateDataRange(){let e=this.getValueAtOffset(0),t=e,n=0;const i=this.getGeometry().getSize();let r=i.getTotalSize();i.length()>=3&&(r=i.getDimSize(3));for(let i=0;i<r;++i)n=this.getValueAtOffset(i),n>t&&(t=n),n<e&&(e=n);return{min:e,max:t}}calculateRescaledDataRange(){if(this.isIdentityRSI())return this.getDataRange();if(this.isConstantRSI()){const e=this.getDataRange(),t=this.getRescaleSlopeAndIntercept().apply(e.min),n=this.getRescaleSlopeAndIntercept().apply(e.max);return{min:t<n?t:n,max:t>n?t:n}}{let e=this.getRescaledValueAtOffset(0),t=e,n=0;const i=this.getGeometry().getSize();let r=i.getTotalSize();3===i.length()&&(r=i.getDimSize(3));for(let i=0;i<r;++i)n=this.getRescaledValueAtOffset(i),n>t&&(t=n),n<e&&(e=n);return{min:e,max:t}}}calculateHistogram(){const e=this.getGeometry().getSize(),t=[];let n=this.getValueAtOffset(0),i=n,r=0,o=this.getRescaledValueAtOffset(0),a=o,s=0;for(let l=0,c=e.getTotalSize();l<c;++l)r=this.getValueAtOffset(l),r>i&&(i=r),r<n&&(n=r),s=this.getRescaledValueAtOffset(l),s>a&&(a=s),s<o&&(o=s),t[s]=(t[s]||0)+1;const l={min:n,max:i},c={min:o,max:a},u=[];for(let e=o;e<=a;++e)u.push([e,t[e]||0]);return{dataRange:l,rescaledDataRange:c,histogram:u}}convolute2D(e){if(9!==e.length)throw new Error("The convolution matrix does not have a length of 9; it has "+e.length);const t=this.clone(),n=t.getBuffer(),i=this.getGeometry().getSize(),r=i.getDimSize(2)*this.getNumberOfComponents();for(let t=0;t<i.get(2);++t)this.convoluteBuffer(e,n,t*r);return t}convoluteBuffer(e,t,n){const i=this.getGeometry().getSize(),r=i.get(0),o=i.get(1),a=this.getNumberOfComponents();let s=1,l=1;3===a&&(0===this.getPlanarConfiguration()?s=3:l=i.getDimSize(2));const c=[];c[0]=(-r-1)*s,c[1]=-r*s,c[2]=(1-r)*s,c[3]=-s,c[4]=0,c[5]=1*s,c[6]=(r-1)*s,c[7]=r*s,c[8]=(r+1)*s;const u=[];u[0]=c[4],u[1]=c[4],u[2]=c[5],u[3]=c[4],u[4]=c[4],u[5]=c[5],u[6]=c[7],u[7]=c[7],u[8]=c[8];const d=[];d[0]=c[1],d[1]=c[1],d[2]=c[2],d[3]=c[4],d[4]=c[4],d[5]=c[5],d[6]=c[7],d[7]=c[7],d[8]=c[8];const S=[];S[0]=c[1],S[1]=c[1],S[2]=c[2],S[3]=c[4],S[4]=c[4],S[5]=c[5],S[6]=c[4],S[7]=c[4],S[8]=c[5];const h=[];h[0]=c[3],h[1]=c[4],h[2]=c[5],h[3]=c[3],h[4]=c[4],h[5]=c[5],h[6]=c[6],h[7]=c[7],h[8]=c[8];const g=[];g[0]=c[0],g[1]=c[1],g[2]=c[2],g[3]=c[3],g[4]=c[4],g[5]=c[5],g[6]=c[3],g[7]=c[4],g[8]=c[5];const m=[];m[0]=c[3],m[1]=c[4],m[2]=c[4],m[3]=c[3],m[4]=c[4],m[5]=c[4],m[6]=c[6],m[7]=c[7],m[8]=c[7];const p=[];p[0]=c[0],p[1]=c[1],p[2]=c[1],p[3]=c[3],p[4]=c[4],p[5]=c[4],p[6]=c[6],p[7]=c[7],p[8]=c[7];const f=[];f[0]=c[0],f[1]=c[1],f[2]=c[1],f[3]=c[3],f[4]=c[4],f[5]=c[4],f[6]=c[3],f[7]=c[4],f[8]=c[4];let D=n,y=0,C=[];for(let n=0;n<a;++n){D+=n*l;for(let n=0;n<o;++n)for(let i=0;i<r;++i){C=c,0===i&&0===n?C=u:0===i&&n===o-1?C=S:i===r-1&&0===n?C=m:i===r-1&&n===o-1?C=f:0===i&&n!==o-1&&0!==n?C=d:i===r-1&&n!==o-1&&0!==n?C=p:0!==i&&i!==r-1&&0===n?C=h:0!==i&&i!==r-1&&n===o-1&&(C=g),y=0;for(let t=0;t<9;++t)y+=this.getValueAtOffset(D+C[t])*e[t];t[D]=y,D+=s}}}transform(e){const t=this.clone(),n=t.getBuffer();for(let i=0,r=n.length;i<r;++i)n[i]=e(t.getValueAtOffset(i));return t}compose(e,t){const n=this.clone(),i=n.getBuffer();for(let n=0,r=i.length;n<r;++n)i[n]=Math.floor(t(this.getValueAtOffset(n),e.getValueAtOffset(n)));return n}}class Xe{create(e,t){const n=new Ze(t);if("MONOCHROME1"===t.getPhotometricInterpretation())n.setDefaultColourMap(h.invPlain);else if("PALETTE COLOR"===t.getPhotometricInterpretation()){const e=t.getMeta().paletteLut;void 0!==e&&n.setDefaultColourMap(e)}let o={};if(void 0!==t.getMeta().windowPresets&&(o=t.getMeta().windowPresets),o.minmax={name:"minmax"},void 0!==i){const e=t.getMeta().Modality;for(const t in i[e]){const n=i[e][t];o[t]={wl:[new r(n.center,n.width)],name:t}}}return n.setWindowPresets(o),n.init(),n}}const je=["wlchange","wlpresetadd","colourchange","positionchange","opacitychange","alphafuncchange"];function _e(e,t){return(new Xe).create(e,t)}class Ze{#me;#pe={};#fe={minmax:{name:"minmax"}};#De=null;#ye=null;#Ce=h.plain;#ve=null;#_;#ue=new ve;constructor(t){this.#me=t,this.#me.addEventListener("appendframe",(()=>{const t=this.getCurrentIndex();if(3===t.length()){const n=t.getValues();n.push(0),this.setCurrentIndex(new e(n))}}))}getImage(){return this.#me}setImage(e){this.#me=e}getOrientation(){return this.#_}setOrientation(e){this.#_=e}init(){this.setInitialIndex()}setInitialIndex(){const t=this.#me.getGeometry().getSize(),n=new Array(t.length());n.fill(0),n[0]=Math.floor(t.get(0)/2),n[1]=Math.floor(t.get(1)/2),n[2]=Math.floor(t.get(2)/2),this.setCurrentIndex(new e(n),!0)}getPlaybackMilliseconds(e){return e||(e=10),Math.round(1e3/e)}#Te=function(e,t){return 255};getAlphaFunction(){return this.#Te}setAlphaFunction(e){this.#Te=e,this.#ge({type:"alphafuncchange"})}getCurrentWindowLut(e){this.getCurrentIndex()||this.setInitialIndex();const t=this.getCurrentIndex();void 0===e&&(e=this.#me.getRescaleSlopeAndIntercept(t));let i=null;if(this.#De&&void 0!==this.#fe[this.#De]&&void 0!==this.#fe[this.#De].perslice&&!0===this.#fe[this.#De].perslice){const e=this.#me.getSecondaryOffset(t);i=this.#fe[this.#De].wl[e]}i||(this.#ye||this.setWindowLevelPresetById(0,!0),i=this.#ye);let r=this.#pe[e.toString()];if(void 0===r){const e=new n(this.#me.getRescaleSlopeAndIntercept(),this.#me.getMeta().BitsStored),t=new s(e,this.#me.getMeta().IsSigned);this.addWindowLut(t),r=t}const o=r.getWindowLevel();return i.equals(o)||(r.setWindowLevel(i),r.update(),o&&o.getWidth()===i.getWidth()&&o.getCenter()===i.getCenter()||this.#ge({type:"wlchange",value:[i.getCenter(),i.getWidth()],wc:i.getCenter(),ww:i.getWidth(),skipGenerate:!0})),r}addWindowLut(e){const t=e.getRescaleLut().getRSI();this.#pe[t.toString()]=e}getWindowPresets(){return this.#fe}getWindowPresetsNames(){return Object.keys(this.#fe)}setWindowPresets(e){this.#fe=e}setDefaultColourMap(e){this.#Ce=e}addWindowPresets(e){const t=Object.keys(e);let n=null;for(let i=0;i<t.length;++i)if(n=t[i],void 0!==this.#fe[n]){if(void 0!==this.#fe[n].perslice&&!0===this.#fe[n].perslice)throw new Error("Cannot add perslice preset");this.#fe[n]=e[n]}else this.#fe[n]=e[n],this.#ge({type:"wlpresetadd",name:n})}getColourMap(){return this.#Ce}setColourMap(e){this.#Ce=e,this.#ge({type:"colourchange",wc:this.getCurrentWindowLut().getWindowLevel().getCenter(),ww:this.getCurrentWindowLut().getWindowLevel().getWidth()})}getCurrentPosition(){return this.#ve}getCurrentIndex(){const e=this.getCurrentPosition();return e?this.getImage().getGeometry().worldToIndex(e):null}canSetPosition(e){const t=this.#me.getGeometry(),n=t.worldToIndex(e),i=[this.getScrollIndex()];return 4===n.length()&&i.push(3),t.isIndexInBounds(n,i)}getOrigin(e){const t=this.#me.getGeometry();let n=0;return void 0!==e&&(n=t.worldToIndex(e).get(2)),t.getOrigins()[n]}setCurrentPosition(e,t){const n=this.#me.getGeometry(),i=n.worldToIndex(e),r=[this.getScrollIndex()];return 4===i.length()&&r.push(3),n.isIndexInBounds(i,r)?this.setCurrentIndex(i,t):(t||this.#ge({type:"positionchange",value:[i.getValues(),e.getValues()],valid:!1}),!1)}setCurrentIndex(e,t){void 0===t&&(t=!1);const n=this.#me.getGeometry(),i=n.indexToWorld(e),r=[this.getScrollIndex()];if(4===e.length()&&r.push(3),!n.isIndexInBounds(e,r))return!1;let o=null,a=null;if(this.getCurrentPosition()&&(a=this.getCurrentIndex()),a)if(a.canCompare(e))o=a.compare(e);else{o=[];const t=Math.min(a.length(),e.length());for(let n=0;n<t;++n)a.get(n)!==e.get(n)&&o.push(n);const n=Math.max(a.length(),e.length());for(let e=t;e<n;++e)o.push(e)}else{o=[];for(let t=0;t<e.length();++t)o.push(t)}if(this.#ve=i,!t){const t={type:"positionchange",value:[e.getValues(),i.getValues()],diffDims:o,data:{imageUid:this.#me.getImageUid(e)}};if(this.#me.canQuantify()){const n=this.#me.getRescaledValueAtIndex(e);t.value.push(n)}this.#ge(t)}return!0}setWindowLevel(e,t,n,i){if(t<1)return;void 0===n&&(n="manual"),void 0===i&&(i=!1);const o=new r(e,t);if(!o.equals(this.#ye)){const r=!this.#ye||this.#ye.getWidth()!==t,a=!this.#ye||this.#ye.getCenter()!==e;this.#ye=o,this.#De=n,(r||a)&&this.#ge({type:"wlchange",value:[e,t],wc:e,ww:t,skipGenerate:i})}}setWindowLevelPreset(e,t){const n=this.getWindowPresets()[e];if(void 0===n)throw new Error("Unknown window level preset: '"+e+"'");"minmax"===e&&void 0===n.wl&&(n.wl=[this.getWindowLevelMinMax()]);let i=n.wl[0];if(void 0!==n.perslice&&!0===n.perslice){const e=this.#me.getSecondaryOffset(this.getCurrentIndex());i=n.wl[e]}this.setWindowLevel(i.getCenter(),i.getWidth(),e,t)}setWindowLevelPresetById(e,t){const n=Object.keys(this.getWindowPresets());this.setWindowLevelPreset(n[e],t)}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{this.#ue.fireEvent(e)};getWindowLevelMinMax(){const e=this.getImage().getRescaledDataRange(),t=e.min;let n=e.max-t;return n<1&&(g.warn("Zero or negative window width, defaulting to one."),n=1),new r(t+n/2,n)}setWindowLevelMinMax(){const e=this.getWindowLevelMinMax();this.setWindowLevel(e.getCenter(),e.getWidth(),"minmax")}generateImageData(e,t){void 0===t&&(this.getCurrentIndex()||this.setInitialIndex(),t=this.getCurrentIndex());const n=this.getImage(),i=Le(n,t,!1,this.getOrientation()),r=n.getPhotometricInterpretation();switch(r){case"MONOCHROME1":case"MONOCHROME2":!function(e,t,n,i,r){let o=0,a=0,s=t.next();for(;!s.done;)a=i.getValue(s.value),e.data[o]=r.red[a],e.data[o+1]=r.green[a],e.data[o+2]=r.blue[a],e.data[o+3]=n(s.value,s.index),o+=4,s=t.next()}(e,i,this.getAlphaFunction(),this.getCurrentWindowLut(),this.getColourMap());break;case"PALETTE COLOR":!function(e,t,n,i,r){const o=function(e){return e>>8};r&&g.info("Scaling 16bits data to 8bits.");let a=0,s=0,l=t.next();for(;!l.done;)s=l.value,r?(e.data[a]=o(i.red[s]),e.data[a+1]=o(i.green[s]),e.data[a+2]=o(i.blue[s])):(e.data[a]=i.red[s],e.data[a+1]=i.green[s],e.data[a+2]=i.blue[s]),e.data[a+3]=n(s,l.index),a+=4,l=t.next()}(e,i,this.getAlphaFunction(),this.getColourMap(),16===n.getMeta().BitsStored);break;case"RGB":!function(e,t,n){let i=0,r=t.next();for(;!r.done;)e.data[i]=r.value[0],e.data[i+1]=r.value[1],e.data[i+2]=r.value[2],e.data[i+3]=n(r.value,r.index),i+=4,r=t.next()}(e,i,this.getAlphaFunction());break;case"YBR_FULL":!function(e,t,n){let i=0,r=null,o=t.next();for(;!o.done;)a=o.value[0],s=o.value[1],r={r:a+1.402*((l=o.value[2])-128),g:a-.34414*(s-128)-.71414*(l-128),b:a+1.772*(s-128)},e.data[i]=r.r,e.data[i+1]=r.g,e.data[i+2]=r.b,e.data[i+3]=n(o.value,o.index),i+=4,o=t.next();var a,s,l}(e,i,this.getAlphaFunction());break;default:throw new Error("Unsupported photometric interpretation: "+r)}}incrementIndex(t,n){const i=this.getCurrentIndex(),r=new Array(i.length());r.fill(0),t<r.length?r[t]=1:console.warn("Cannot increment given index: ",t,r.length);const o=new e(r),a=i.add(o);return this.setCurrentIndex(a,n)}decrementIndex(t,n){const i=this.getCurrentIndex(),r=new Array(i.length());r.fill(0),t<r.length?r[t]=-1:console.warn("Cannot decrement given index: ",t,r.length);const o=new e(r),a=i.add(o);return this.setCurrentIndex(a,n)}getScrollIndex(){let e=null;const t=this.getOrientation();return e=void 0!==t?t.getThirdColMajorDirection():2,e}decrementScrollIndex(e){return this.decrementIndex(this.getScrollIndex(),e)}incrementScrollIndex(e){return this.incrementIndex(this.getScrollIndex(),e)}}class Ke{#Y;#Ie;#Le;#Pe;constructor(e,t,n){this.#Y=e,this.#Ie=t,this.#Le=n,this.#Pe=function(e,t){let n=e.asOneAndZeros().multiply(t);return e.asOneAndZeros().getAbs().equals(I().getAbs())&&(n=n.getAbs()),n}(t,n)}getOffset3DFromPlaneOffset(e){const t=new D(e.x,e.y,0),n=this.getTargetDeOrientedVector3D(t);return new D(n.getX()*this.#Y.get(0),n.getY()*this.#Y.get(1),n.getZ()*this.#Y.get(2))}getPlaneOffsetFromOffset3D(e){const t=new D(e.x/this.#Y.get(0),e.y/this.#Y.get(1),e.z/this.#Y.get(2)),n=this.getTargetOrientedVector3D(t);return{x:n.getX(),y:n.getY()}}getTargetOrientedVector3D(e){let t=e;return void 0!==this.#Pe&&(t=this.#Pe.getInverse().multiplyVector3D(e)),t}getTargetDeOrientedVector3D(e){let t=e;return void 0!==this.#Pe&&(t=this.#Pe.multiplyVector3D(e)),t}getTargetDeOrientedPoint3D(e){let t=e;return void 0!==this.#Pe&&(t=this.#Pe.multiplyPoint3D(e)),t}getImageOrientedVector3D(e){let t=e;if(void 0!==this.#Le){const n=Fe([e.getX(),e.getY(),e.getZ()],this.#Le);t=new D(n[0],n[1],n[2])}return t}getImageOrientedPoint3D(e){let t=e;if(void 0!==this.#Le){const n=Fe([e.getX(),e.getY(),e.getZ()],this.#Le);t=new O(n[0],n[1],n[2])}return t}getImageDeOrientedVector3D(e){let t=e;if(void 0!==this.#Le){const n=be([e.getX(),e.getY(),e.getZ()],this.#Le);t=new D(n[0],n[1],n[2])}return t}getImageDeOrientedPoint3D(e){let t=e;if(void 0!==this.#Le){const n=be([e.getX(),e.getY(),e.getZ()],this.#Le);t=new O(n[0],n[1],n[2])}return t}getTargetOrientedPositiveXYZ(e){const t=be([e.x,e.y,e.z],this.#Pe);return{x:t[0],y:t[1],z:t[2]}}getScrollIndex(){let e=null;return e=void 0!==this.#Le?this.#Le.getThirdColMajorDirection():2,e}getNativeScrollIndex(){let e=null;return e=void 0!==this.#Ie?this.#Ie.getThirdColMajorDirection():2,e}}class Je{#Oe;#we;#Ae=[];constructor(e){this.#Oe=e,this.#we=e.getMeta().custom.segments}hasSegment(e){return void 0!==this.getSegment(e)}maskHasSegments(e){const t=[],n=[];for(let i=0;i<e.length;++i){const r=this.getSegment(e[i]);void 0!==r?t.push(r.displayValue):(g.warn("Unknown segment in maskHasSegments: "+e[i]),n.push(i))}const i=this.#Oe.hasValues(t);for(let e=0;e<n.length;++e)i.splice(n[e],0,!1);return i}getSegment(e){return this.#we.find((function(t){return t.number===e}))}getSegments(){return this.#we}setSegments(e){this.#we=e}setHiddenSegments(e){this.#Ae=e}#xe(e){return this.#Ae.findIndex((function(t){return t===e}))}isHidden(e){return-1!==this.#xe(e)}addToHidden(e){this.isHidden(e)?g.warn("Segment is allready in the hidden list: "+e):this.#Ae.push(e)}removeFromHidden(e){const t=this.#xe(e);-1!==t?this.#Ae.splice(t,1):g.warn("Segment is not in the hidden list: "+e)}getAlphaFunc(){const e=[{r:0,g:0,b:0}];for(let t=0;t<this.#Ae.length;++t){const n=this.getSegment(this.#Ae[t]);void 0!==n&&e.push(n.displayValue)}return function(t){for(let n=0;n<e.length;++n)if(t[0]===e[n].r&&t[1]===e[n].g&&t[2]===e[n].b)return 0;return 255}}deleteSegment(e,t,n){const i=new $e(this.#Oe,this.getSegment(e));i.onExecute=t,i.onUndo=t,i.isValid()&&(i.execute(),n(i),this.isHidden(e)&&this.removeFromHidden(e))}}class $e{#Oe;#be;#Fe;#Re;constructor(e,t,n){this.#Oe=e,this.#be=t,this.#Fe=void 0!==n&&n,this.#Re=e.getOffsets(t.displayValue)}getName(){return"Delete-segment"}isValid(){return 0!==this.#Re.length}execute(){this.#Oe.setAtOffsets(this.#Re,{r:0,g:0,b:0}),this.#Fe||this.onExecute({type:"masksegmentdelete",segmentnumber:this.#be.number})}undo(){this.#Oe.setAtOffsets(this.#Re,this.#be.displayValue),this.onUndo({type:"masksegmentredraw",segmentnumber:this.#be.number})}onExecute(e){}onUndo(e){}}class et{#x;#Ee;#qe;#Ue;#Qe=null;#Me;constructor(e,t){if(void 0===e.getImage())throw new Error("View does not have an image, cannot setup controller");this.#x=e,this.#Ee=t,this.#qe=new Ke(e.getImage().getGeometry().getRealSpacing(),e.getImage().getGeometry().getOrientation(),e.getOrientation()),"SEG"===e.getImage().getMeta().Modality&&(this.#Ue=new Je(e.getImage()))}#ue=new ve;getPlaneHelper(){return this.#qe}isMask(){return void 0!==this.#Ue}getMaskSegmentHelper(){return this.#Ue}applyHiddenSegments(){this.isMask&&this.setViewAlphaFunction(this.#Ue.getAlphaFunc())}deleteSegment(e,t){this.isMask&&this.#Ue.deleteSegment(e,this.#ge,t)}initialise(){this.setWindowLevelPresetById(0),this.setCurrentPosition(this.getPositionFromPlanePoint(0,0))}getWindowLevelPresetsNames(){return this.#x.getWindowPresetsNames()}addWindowLevelPresets(e){return this.#x.addWindowPresets(e)}setWindowLevelPreset(e){this.#x.setWindowLevelPreset(e)}setWindowLevelPresetById(e){this.#x.setWindowLevelPresetById(e)}isPlaying(){return null!==this.#Qe}getCurrentPosition(){return this.#x.getCurrentPosition()}getCurrentIndex(){return this.#x.getCurrentIndex()}getCurrentOrientedIndex(){let t=this.#x.getCurrentIndex();if(void 0!==this.#x.getOrientation()){const n=this.#qe.getImageDeOrientedVector3D(new D(t.get(0),t.get(1),t.get(2)));t=new e([n.getX(),n.getY(),n.getZ()])}return t}getScrollIndex(){return this.#x.getScrollIndex()}getCurrentScrollIndexValue(){return this.#x.getCurrentIndex().get(this.#x.getScrollIndex())}getOrigin(e){return this.#x.getOrigin(e)}getCurrentScrollPosition(){const e=this.#x.getScrollIndex();return this.#x.getCurrentPosition().get(e)}generateImageData(e,t){this.#x.generateImageData(e,t)}setImage(e,t){this.#x.setImage(e),this.#Me=t}get2DSpacing(){const e=this.#x.getImage().getGeometry().getSpacing();return[e.get(0),e.get(1)]}getRescaledImageValue(e){const t=this.#x.getImage();if(!t.canQuantify())return;const n=t.getGeometry(),i=n.worldToIndex(e);let r;return n.isIndexInBounds(i)&&(r=t.getRescaledValueAtIndex(i)),r}getPixelUnit(){return this.#x.getImage().getMeta().pixelUnit}getImageRegionValues(t,n){let i=this.#x.getImage();const r=this.#x.getOrientation();let o=this.getCurrentIndex(),a=!0;if(!r.equals(T())){const t=Ie(Le(i,o,a,r)),n=i.getGeometry().getSize(r).getValues();n[2]=1;const s=new we(n),l=i.getGeometry().getSpacing(r).getValues();l[2]=1;const c=new Ae(l),u=new O(0,0,0),d=new xe(u,s,c);i=new Ye(d,t),o=new e([0,0,0]),a=!1}const s=function(e,t,n,i,r){if(1!==e.getNumberOfComponents())throw new Error("Unsupported number of components for region iterator: "+e.getNumberOfComponents());void 0===n&&(n=!1);let o=null;o=n?function(t){return e.getRescaledValueAtOffset(t)}:function(t){return e.getValueAtOffset(t)};const a=e.getGeometry().getSize();void 0===i&&(i=new P(0,0)),void 0===r&&(r=new P(a.get(0)-1,a.get(1)));const s=a.indexToOffset(t.getWithNew2D(i.getX(),i.getY())),l=a.indexToOffset(t.getWithNew2D(r.getX(),r.getY()-1)),c=Math.max(1,r.getX()-i.getX());return function(e,t,n,i,r,o){let a=t,s=0;return{next:function(){if(a<n){const t={value:e(a),done:!1,index:a};return s+=1,a+=1,s===r&&(s=0,a+=o),t}return{done:!0,index:n}}}}(o,s,l+1,0,c,a.get(0)-c)}(i,o,a,t,n);let l=[];return s&&(l=Ie(s)),l}getImageVariableRegionValues(e){const t=function(e,t,n,i){if(1!==e.getNumberOfComponents())throw new Error("Unsupported number of components for region iterator: "+e.getNumberOfComponents());void 0===n&&(n=!1);let r=null;r=n?function(t){return e.getRescaledValueAtOffset(t)}:function(t){return e.getValueAtOffset(t)};const o=e.getGeometry().getSize(),a=[];let s,l=null,c=null,u=null;for(let e=0;e<i.length;++e){s=i[e];const t=s[1][0]-s[0][0];0!==t&&(u=e,l||(l=s[0]),a.push([s[0][0],t,o.get(0)-s[1][0]]))}if(null!==u&&(c=i[u][1]),0!==a.length)return function(e,t,n,i,r){let o=t,a=0,s=0;return{next:function(){if(o<n){const t={value:e(o),done:!1,index:o};return s+=1,o+=1,s===r[a][1]&&(s=0,o+=r[a][2],a+=1,a<r.length&&(o+=r[a][0])),t}return{done:!0,index:n}}}}(r,o.indexToOffset(t.getWithNew2D(l[0],l[1])),o.indexToOffset(t.getWithNew2D(c[0],c[1]))+1,0,a)}(this.#x.getImage(),this.getCurrentIndex(),!0,e);let n=[];return t&&(n=Ie(t)),n}canQuantifyImage(){return this.#x.getImage().canQuantify()}canWindowLevel(){return this.#x.getImage().canWindowLevel()}canScroll(){return this.#x.getImage().canScroll(this.#x.getOrientation())}getImageSize(){return this.#x.getImage().getGeometry().getSize(this.#x.getOrientation())}getImageWorldSize(){const e=this.#x.getImage().getGeometry(),t=e.getSize(this.#x.getOrientation()).get2D(),n=e.getSpacing(this.#x.getOrientation()).get2D();return{x:t.x*n.x,y:t.y*n.y}}getImageRescaledDataRange(){return this.#x.getImage().getRescaledDataRange()}equalImageMeta(e){const t=this.#x.getImage().getMeta(),n=Object.keys(e);for(let i=0;i<n.length;++i){const r=n[i];if(void 0===t[r])return!1;if(t[r]!==e[r])return!1}return!0}canSetPosition(e){return this.#x.canSetPosition(e)}setCurrentPosition(e,t){return this.#x.setCurrentPosition(e,t)}getPositionFromPlanePoint(e,t){const n=this.getCurrentScrollIndexValue(),i=new O(e,t,n),r=this.#qe.getImageOrientedPoint3D(i),o=this.#x.getImage().getGeometry().pointToWorld(r);return this.getCurrentPosition().mergeWith3D(o)}getPlanePositionFromPosition(e){const t=this.#x.getImage().getGeometry().worldToPoint(e),n=this.#qe.getImageDeOrientedPoint3D(t);return{x:n.getX(),y:n.getY()}}setCurrentIndex(e,t){return this.#x.setCurrentIndex(e,t)}getPlanePositionFromPlanePoint(e){const t=this.getCurrentScrollIndexValue(),n=new O(e.x,e.y,t),i=this.#qe.getTargetDeOrientedPoint3D(n),r=this.#x.getImage().getGeometry().getRealSpacing();return new O(i.getX()*r.get(0),i.getY()*r.get(1),i.getZ()*r.get(2))}getOffset3DFromPlaneOffset(e){return this.#qe.getOffset3DFromPlaneOffset(e)}incrementIndex(e,t){return this.#x.incrementIndex(e,t)}decrementIndex(e,t){return this.#x.decrementIndex(e,t)}decrementScrollIndex(e){return this.#x.decrementScrollIndex(e)}incrementScrollIndex(e){return this.#x.incrementScrollIndex(e)}play(){if(this.canScroll())if(null===this.#Qe){const t=this.#x.getImage(),n=t.getMeta().RecommendedDisplayFrameRate,i=this.#x.getPlaybackMilliseconds(n),r=t.getGeometry().getSize().canScroll3D();this.#Qe=setInterval((()=>{let t=!1;if(t=r?this.incrementScrollIndex():this.incrementIndex(3),!t){const t=this.getCurrentIndex().getValues(),n=this.#x.getOrientation();r?t[n.getThirdColMajorDirection()]=0:t[3]=0;const i=new e(t),o=this.#x.getImage().getGeometry();this.setCurrentPosition(o.indexToWorld(i))}}),i)}else this.stop()}stop(){null!==this.#Qe&&(clearInterval(this.#Qe),this.#Qe=null)}getWindowLevel(){return{width:this.#x.getCurrentWindowLut().getWindowLevel().getWidth(),center:this.#x.getCurrentWindowLut().getWindowLevel().getCenter()}}setWindowLevel(e,t){this.#x.setWindowLevel(e,t)}getColourMap(){return this.#x.getColourMap()}setColourMap(e){this.#x.setColourMap(e)}setViewAlphaFunction(e){this.#x.setAlphaFunction(e)}setColourMapFromName(e){if(!h[e])throw new Error("Unknown colour map: '"+e+"'");this.setColourMap(h[e])}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{e.dataid=this.#Me,this.#ue.fireEvent(e)}}const tt=["mousedown","mousemove","mouseup","mouseout","wheel","dblclick","touchstart","touchmove","touchend"],nt={openRoiDialog(e,t){const n=prompt("Label",e.textExpr);null!==n&&(e.textExpr=n,t(e))}};function it(e){let t=0,n=0;if(0!==e.length&&void 0!==e[0].target){let i=e[0].target.offsetParent;for(;i;)isNaN(i.offsetLeft)||(t+=i.offsetLeft),isNaN(i.offsetTop)||(n+=i.offsetTop),i=i.offsetParent}else g.debug("No touch target offset parent.");const i=[];for(let r=0;r<e.length;++r)i.push({x:e[r].pageX-t,y:e[r].pageY-n});return i}function rt(e){let t=[];return void 0!==e.targetTouches&&0!==e.targetTouches.length?t=it(e.targetTouches):void 0!==e.changedTouches&&0!==e.changedTouches.length?t=it(e.changedTouches):t.push({x:e.offsetX,y:e.offsetY}),t}function ot(e,t){const n=document.createElement("canvas");n.width=e,n.height=t;const i=document.createElement("canvas");i.width=1,i.height=1;const r=n.getContext("2d"),o=i.getContext("2d");return r&&(r.fillRect(e-1,t-1,1,1),o.drawImage(n,e-1,t-1,1,1,0,0,1,1)),o&&0!==o.getImageData(0,0,1,1).data[3]}class at{#Be;#Ne=null;#Ve=null;#Ge=null;#ke=null;#He=!0;#We=null;#ze;#Ye;#Xe=1;#je={x:1,y:1};#_e={x:1,y:1};#Ze={x:0,y:0};#Ke={x:0,y:0};#Je={x:0,y:0};#$e={x:0,y:0};#et={x:0,y:0};#tt=null;#Me=null;#ue=new ve;#nt=!1;constructor(e){this.#Be=e,this.#Be.className+=" viewLayer"}getDataIndex(){return this.#Me}enableImageSmoothing(e){this.#nt=e}setView(e,t){this.#Me=t,e.addEventListener("wlchange",this.#it),e.addEventListener("colourchange",this.#rt),e.addEventListener("positionchange",this.#ot),e.addEventListener("alphafuncchange",this.#at);for(let t=0;t<je.length;++t)e.addEventListener(je[t],this.#ge);this.#Ne=new et(e,t)}getViewController(){return this.#Ne}getImageData(){return this.#We}onimageset=e=>{this.#Me===e.dataid&&(this.#Ne.setImage(e.value[0],this.#Me),this.#st(this.#Ne.getImageSize().get2D()),this.#tt=!0)};onimagechange=e=>{this.#Me===e.dataid&&(this.#tt=!0)};getId(){return this.#Be.id}getBaseSize(){return this.#ze}getImageWorldSize(){return this.#Ne.getImageWorldSize()}getOpacity(){return this.#Xe}setOpacity(e){if(e===this.#Xe)return;this.#Xe=Math.min(Math.max(e,0),1);const t={type:"opacitychange",value:[this.#Xe]};this.#ge(t)}addFlipOffsetX(){this.#et.x+=this.#Ve.width/this.#je.x,this.#Ze.x+=this.#et.x}addFlipOffsetY(){this.#et.y+=this.#Ve.height/this.#je.y,this.#Ze.y+=this.#et.y}setScale(e,t){const n=this.#Ne.getPlaneHelper(),i=n.getTargetOrientedPositiveXYZ(e),r={x:this.#_e.x*i.x,y:this.#_e.y*i.y};if(1===Math.abs(e.x)&&1===Math.abs(e.y)&&1===Math.abs(e.z)){const e={x:this.#Ze.x-this.#$e.x,y:this.#Ze.y-this.#$e.y};this.#$e={x:0,y:0},this.#Ze=e}else if(void 0!==t){let e=n.getPlaneOffsetFromOffset3D({x:t.getX(),y:t.getY(),z:t.getZ()});e={x:e.x+this.#Ke.x,y:e.y+this.#Ke.y};const i=Lt(this.#Ze,this.#je,r,e),o={x:this.#$e.x+i.x-this.#Ze.x,y:this.#$e.y+i.y-this.#Ze.y};this.#$e=o,this.#Ze=i}this.#je=r}setBaseOffset(e,t){const n=this.#Ne.getPlaneHelper(),i=n.getNativeScrollIndex(),r=n.getPlaneOffsetFromOffset3D({x:0===i?e.getX():t.getX(),y:1===i?e.getY():t.getY(),z:2===i?e.getZ():t.getZ()}),o=this.#Ke.x!==r.x||this.#Ke.y!==r.y;return o&&(this.#Ze={x:this.#Ze.x-this.#Ke.x+r.x,y:this.#Ze.y-this.#Ke.y+r.y},this.#Ke=r),o}setOffset(e){const t=this.#Ne.getPlaneHelper().getPlaneOffsetFromOffset3D(e);this.#Ze={x:t.x+this.#Je.x+this.#Ke.x+this.#$e.x+this.#et.x,y:t.y+this.#Je.y+this.#Ke.y+this.#$e.y+this.#et.y}}displayToPlaneIndex(t,n){const i=this.displayToPlanePos(t,n);return new e([Math.floor(i.x),Math.floor(i.y)])}displayToPlaneScale(e,t){return{x:e/this.#je.x,y:t/this.#je.y}}displayToPlanePos(e,t){const n=this.displayToPlaneScale(e,t);return{x:n.x+this.#Ze.x,y:n.y+this.#Ze.y}}planePosToDisplay(e,t){return{x:(e-this.#Ze.x+this.#Ke.x)*this.#je.x,y:(t-this.#Ze.y+this.#Ke.y)*this.#je.y}}displayToMainPlanePos(e,t){const n=this.displayToPlanePos(e,t);return{x:n.x-this.#Ke.x,y:n.y-this.#Ke.y}}display(e){this.#Be.style.display=e?"":"none"}isVisible(){return""===this.#Be.style.display}draw(){if(!this.#He)return;let e={type:"renderstart",layerid:this.getId(),dataid:this.getDataIndex()};this.#ge(e),this.#tt&&this.#lt(),this.#ke.globalAlpha=this.#Xe,this.clear(),this.#ke.setTransform(this.#je.x,0,0,this.#je.y,-1*this.#Ze.x*this.#je.x,-1*this.#Ze.y*this.#je.y),this.#ke.imageSmoothingEnabled=this.#nt,this.#ke.drawImage(this.#Ge,0,0),e={type:"renderend",layerid:this.getId(),dataid:this.getDataIndex()},this.#ge(e)}initialise(e,t,n){this.#Ye=t,this.#Xe=Math.min(Math.max(n,0),1),this.#Ve=document.createElement("canvas"),this.#Be.appendChild(this.#Ve),this.#Ve.getContext?(this.#ke=this.#Ve.getContext("2d"),this.#ke?(this.#Ge=document.createElement("canvas"),this.#st(e),this.#tt=!0):alert("Error: failed to get the 2D context.")):alert("Error: no canvas.getContext method.")}#st(e){if(!ot(e.x,e.y))throw new Error("Cannot create canvas with size "+e.x+", "+e.y);this.#ze=e,this.#Ge.width=this.#ze.x,this.#Ge.height=this.#ze.y,this.#ke.clearRect(0,0,this.#ze.x,this.#ze.y),this.#We=this.#ke.createImageData(this.#ze.x,this.#ze.y)}fitToContainer(e,t,n){let i=!1;if(this.#Ve.width!==t.x||this.#Ve.height!==t.y){if(!ot(t.x,t.y))throw new Error("Cannot resize canvas "+t.x+", "+t.y);this.#Ve.width=t.x,this.#Ve.height=t.y,i=!0}const r=this.#_e,o=this.#je.x/this.#_e.x,a=this.#je.y/this.#_e.y,s={x:e*this.#Ye.x,y:e*this.#Ye.y},l={x:o*s.x,y:a*s.y};o===l.x&&a===l.y||(this.#_e=s,this.#je=l,i=!0);const c={x:n.x/s.x,y:n.y/s.y},u={x:this.#et.x*r.x/s.x,y:this.#et.y*r.y/s.y};this.#Je.x===c.x&&this.#Je.y===c.y&&this.#et.x===u.x&&this.#et.y===u.y||(this.#et=u,this.#Je=c,this.#Ze={x:this.#Je.x+this.#Ke.x+this.#$e.x+this.#et.x,y:this.#Je.y+this.#Ke.y+this.#$e.y+this.#et.y},i=!0),i&&this.draw()}bindInteraction(){this.#Be.style.pointerEvents="auto";const e=tt;for(let t=0;t<e.length;++t)this.#Be.addEventListener(e[t],this.#ge,{passive:!0})}unbindInteraction(){this.#Be.style.pointerEvents="none";const e=tt;for(let t=0;t<e.length;++t)this.#Be.removeEventListener(e[t],this.#ge)}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{e.srclayerid=this.getId(),e.dataid=this.#Me,this.#ue.fireEvent(e)};#lt(){this.#Ne.generateImageData(this.#We),this.#Ge.getContext("2d").putImageData(this.#We,0,0),this.#tt=!1}#it=e=>{void 0!==e.skipGenerate&&!0===e.skipGenerate||(this.#tt=!0,this.draw())};#rt=e=>{void 0!==e.skipGenerate&&!0===e.skipGenerate||(this.#tt=!0,this.draw())};#ot=e=>{if(void 0===e.skipGenerate||!0!==e.skipGenerate){let t=!0;if(void 0!==e.valid&&(t=e.valid),t){const t=[0,1,2],n=t.indexOf(this.#Ne.getScrollIndex());t.splice(n,1),0===e.diffDims.filter((function(e){return-1===t.indexOf(e)})).length&&this.#He||(this.#He=!0,this.#tt=!0,this.draw())}else this.#He&&(this.#He=!1,this.clear())}};#at=e=>{void 0!==e.skipGenerate&&!0===e.skipGenerate||(this.#tt=!0,this.draw())};setCurrentPosition(e,t){return this.#Ne.setCurrentPosition(e)}clear(){this.#ke.save(),this.#ke.setTransform(1,0,0,1,0,0),this.#ke.clearRect(0,0,this.#Ve.width,this.#Ve.height),this.#ke.restore()}}var st=o(436),lt=o.n(st);class ct{#ct=10;#ut="Verdana";#dt="#fff";#St="#ffff80";#ht={x:1,y:1};#gt={x:1,y:1};#mt=2;#pt={x:.25,y:.25};#ft=.2;#Dt=3;getFontFamily(){return this.#ut}getFontSize(){return this.#ct}getStrokeWidth(){return this.#mt}getTextColour(){return this.#dt}getLineColour(){return this.#St}setLineColour(e){this.#St=e}setBaseScale(e){this.#ht=e}setZoomScale(e){this.#gt=e}getBaseScale(){return this.#ht}getZoomScale(){return this.#gt}scale(e){return e/this.#ht.x}applyZoomScale(e){return{x:2*e/this.#gt.x,y:2*e/this.#gt.y}}getShadowOffset(){return this.#pt}getTagOpacity(){return this.#ft}getTextPadding(){return this.#Dt}getFontStr(){return"normal "+this.getFontSize()+"px sans-serif"}getLineHeight(){return this.getFontSize()+this.getFontSize()/5}getScaledFontSize(){return this.scale(this.getFontSize())}getScaledStrokeWidth(){return this.scale(this.getStrokeWidth())}getShadowLineColour(){return m(this.getLineColour())}}function ut(e){let t="shape";return e instanceof lt().Line?t=4===e.points().length?"line":6===e.points().length?"protractor":"roi":e instanceof lt().Rect?t="rectangle":e instanceof lt().Ellipse&&(t="ellipse"),t}class dt{#I;#yt;#Ct;#Fe;#vt;constructor(e,t,n,i){this.#I=e,this.#yt=t,this.#Ct=n,this.#Fe=void 0!==i&&i,this.#vt=e.getParent()}getName(){return"Draw-"+this.#yt}execute(){this.#vt.add(this.#I),this.#Ct.draw(),this.#Fe||this.onExecute({type:"drawcreate",id:this.#I.id()})}undo(){this.#I.remove(),this.#Ct.draw(),this.onUndo({type:"drawdelete",id:this.#I.id()})}onExecute(e){}onUndo(e){}}class St{#I;#yt;#Tt;#Ct;constructor(e,t,n,i){this.#I=e,this.#yt=t,this.#Tt=n,this.#Ct=i}getName(){return"Move-"+this.#yt}execute(){this.#I.move(this.#Tt),this.#Ct.draw(),this.onExecute({type:"drawmove",id:this.#I.id()})}undo(){const e={x:-this.#Tt.x,y:-this.#Tt.y};this.#I.move(e),this.#Ct.draw(),this.onUndo({type:"drawmove",id:this.#I.id()})}onExecute(e){}onUndo(e){}}class ht{#yt;#It;#Lt;#Pt;#Ct;#Ne;#Ot;constructor(e,t,n,i,r,o,a){this.#yt=e,this.#It=t,this.#Lt=n,this.#Pt=i,this.#Ct=r,this.#Ne=o,this.#Ot=a}getName(){return"Change-"+this.#yt}execute(){this.#It.update(this.#Pt,this.#Ot,this.#Ne),this.#Ct.draw(),this.onExecute({type:"drawchange",id:this.#Pt.getParent().id()})}undo(){this.#It.update(this.#Lt,this.#Ot,this.#Ne),this.#Ct.draw(),this.onUndo({type:"drawchange",id:this.#Lt.getParent().id()})}onExecute(e){}onUndo(e){}}class gt{#I;#yt;#Ct;#vt;constructor(e,t,n){this.#I=e,this.#yt=t,this.#Ct=n,this.#vt=e.getParent()}getName(){return"Delete-"+this.#yt}execute(){this.#I.remove(),this.#Ct.draw(),this.onExecute({type:"drawdelete",id:this.#I.id()})}undo(){this.#vt.add(this.#I),this.#Ct.draw(),this.onUndo({type:"drawcreate",id:this.#I.id()})}onExecute(e){}onUndo(e){}}function mt(e){return"shape"===e.name()}function pt(e){return e.name().startsWith("shape-")}function ft(e){return"label"===e.name()}function Dt(e){return"position-group"===e.name()}function yt(e){return function(t){return t.id()===e}}function Ct(e){return"anchor"!==e.name()&&"label"!==e.name()}class vt{#wt;#At=null;constructor(e){this.#wt=e}getCurrentPosGroup(){const e=this.#wt.getChildren((e=>e.id()===this.#At));let t=null;return 1===e.length?t=e[0]:0===e.length?(t=new(lt().Group),t.name("position-group"),t.id(this.#At),t.visible(!0),this.#wt.add(t)):g.warn("Unexpected number of draw position groups."),t}reset(){this.#wt=null}getGroup(e){const t=this.#wt.findOne("#"+e);return void 0===t&&g.warn("Cannot find node with id: "+e),t}activateDrawLayer(e,t){const n=[t];for(let t=3;t<e.length();++t)n.push(t);this.#At=e.toStringId(n);const i=this.#wt.getChildren(Dt);let r;for(let e=0,t=i.length;e<t;++e)r=!1,i[e].id()===this.#At&&(r=!0),i[e].visible(r);this.#wt.draw()}getDrawDisplayDetails(){const e=[],n=this.#wt.getChildren();for(let i=0,r=n.length;i<r;++i){const r=t(n[i].id()),o=n[i].getChildren();for(let t=0,n=o.length;t<n;++t){const n=o[t].getChildren(mt)[0],i=o[t].getChildren(ft)[0].getChildren()[0];let a=n.className;if("Line"===a){const e=o[t].getChildren(pt);if(n.closed())a="Roi";else if(0!==e.length){const t=e[0].name();a=-1!==t.indexOf("triangle")?"Arrow":-1!==t.indexOf("arc")?"Protractor":"Ruler"}}"Rect"===a&&(a="Rectangle"),e.push({id:o[t].id(),position:r.toString(),type:a,color:n.stroke(),meta:i.meta})}}return e}getDrawStoreDetails(){const e={},t=this.#wt.getChildren(Dt);let n,i;for(let r=0,o=t.length;r<o;++r){n=t[r].getChildren();for(let t=0,r=n.length;t<r;++t){i=n[t];const r=i.find(".anchor");for(let e=0;e<r.length;++e)r[e].remove();const o=i.find(".text");1!==o.length&&g.warn("There should not be more than one text per shape."),e[i.id()]={meta:o[0].meta}}}return e}setDrawings(e,t,n,i){const r=lt().Node.create(e).getChildren(Dt);for(let e=0,o=r.length;e<o;++e){const o=r[e];let a=this.#wt.getChildren(yt(o.id()))[0];void 0===a&&(a=new(lt().Group)({id:o.id(),name:"position-group",visible:!1}),this.#wt.add(a));const s=o.getChildren();for(let e=0,r=s.length;e<r;++e){const e=s[0];a.add(e);const r=e.getChildren(mt)[0],o=new dt(e,r.className,this.#wt);if(o.onExecute=n,o.onUndo=n,t){const n=t[e.id()],i=e.getChildren(ft)[0].getText();i.meta=n.meta,i.setText(_(i.meta.textExpr,i.meta.quantification))}o.execute(),i(o)}}}updateDraw(e){const t=this.#wt.findOne("#"+e.id);if(void 0===t)return void g.warn("[updateDraw] Cannot find group with id: "+e.id);const n=t.getChildren(mt);for(let t=0;t<n.length;++t)n[t].stroke(e.color);const i=t.getChildren(pt);for(let t=0;t<i.length;++t)void 0!==i[t].stroke()?i[t].stroke(e.color):void 0!==i[t].fill()&&i[t].fill(e.color);const r=t.getChildren(ft)[0],o=m(e.color),a=r.getChildren();for(let t=0;t<a.length;++t)if(a[t].fill(e.color),"Text"===a[t].className){const n=a[t];n.shadowColor(o),void 0!==e.meta&&(n.meta=e.meta,n.setText(_(n.meta.textExpr,n.meta.quantification)),r.setVisible(0!==n.meta.textExpr.length))}this.#wt.draw()}deleteDrawGroup(e,t,n){const i=ut(e.getChildren(mt)[0]),r=new gt(e,i,this.#wt);r.onExecute=t,r.onUndo=t,r.execute(),n(r)}deleteDraw(e,t,n){const i=this.getGroup(e);return void 0!==i&&(this.deleteDrawGroup(i,t,n),!0)}deleteDraws(e,t){const n=this.#wt.getChildren();for(;n.length;)this.deleteDrawGroup(n[0],e,t)}}class Tt{#Be;#xt=null;#ze;#Ye;#_e={x:1,y:1};#Ke={x:0,y:0};#Je={x:0,y:0};#$e={x:0,y:0};#et={x:0,y:0};#bt=null;#qe;#Me=null;constructor(e){this.#Be=e,this.#Be.className+=" drawLayer"}getDataIndex(){return this.#Me}#ue=new ve;getKonvaStage(){return this.#xt}getKonvaLayer(){return this.#xt.getLayers()[0]}getDrawController(){return this.#bt}setPlaneHelper(e){this.#qe=e}getId(){return this.#Be.id}getBaseSize(){return this.#ze}getOpacity(){return this.#xt.opacity()}setOpacity(e){this.#xt.opacity(Math.min(Math.max(e,0),1))}addFlipOffsetX(){const e=this.#xt.scale(),t=this.#xt.size();this.#et.x+=t.width/e.x;const n=this.#xt.offset();n.x+=this.#et.x,this.#xt.offset(n)}addFlipOffsetY(){const e=this.#xt.scale(),t=this.#xt.size();this.#et.y+=t.height/e.y;const n=this.#xt.offset();n.y+=this.#et.y,this.#xt.offset(n)}setScale(e,t){const n=this.#qe.getTargetOrientedPositiveXYZ(e),i={x:this.#_e.x*n.x,y:this.#_e.y*n.y},r=this.#xt.offset();if(1===Math.abs(e.x)&&1===Math.abs(e.y)&&1===Math.abs(e.z)){const e={x:r.x-this.#$e.x,y:r.y-this.#$e.y};this.#$e={x:0,y:0},this.#xt.offset(e)}else if(void 0!==t){let e=this.#qe.getPlaneOffsetFromOffset3D({x:t.getX(),y:t.getY(),z:t.getZ()});e={x:e.x+this.#Ke.x,y:e.y+this.#Ke.y};const n=Lt(r,this.#xt.scale(),i,e),o={x:this.#$e.x+n.x-r.x,y:this.#$e.y+n.y-r.y};this.#$e=o,this.#xt.offset(n)}this.#xt.scale(i),this.#Ft(i)}setOffset(e){const t=this.#qe.getPlaneOffsetFromOffset3D(e);this.#xt.offset({x:t.x+this.#Je.x+this.#Ke.x+this.#$e.x+this.#et.x,y:t.y+this.#Je.y+this.#Ke.y+this.#$e.y+this.#et.y})}setBaseOffset(e,t){const n=this.#qe.getNativeScrollIndex(),i=this.#qe.getPlaneOffsetFromOffset3D({x:0===n?e.getX():t.getX(),y:1===n?e.getY():t.getY(),z:2===n?e.getZ():t.getZ()}),r=this.#Ke.x!==i.x||this.#Ke.y!==i.y;if(r){const e=this.#xt.offset();this.#xt.offset({x:e.x-this.#Ke.x+i.x,y:e.y-this.#Ke.y+i.y}),this.#Ke=i}return r}display(e){this.#Be.style.display=e?"":"none"}isVisible(){return""===this.#Be.style.display}draw(){this.#xt.draw()}initialise(e,t,n){this.#ze=e,this.#Ye=t,this.#Me=n,this.#xt=new(lt().Stage)({container:this.#Be,width:this.#ze.x,height:this.#ze.y,listening:!1}),this.#xt.getContent().setAttribute("style","");const i=new(lt().Layer)({listening:!1,visible:!0});this.#xt.add(i),this.#bt=new vt(i)}fitToContainer(e,t,n){this.#xt.width(t.x),this.#xt.height(t.y);const i=this.#xt.scale().x/this.#_e.x,r=this.#xt.scale().y/this.#_e.y;this.#_e={x:e*this.#Ye.x,y:e*this.#Ye.y},this.#xt.scale({x:i*this.#_e.x,y:r*this.#_e.y}),this.#Je={x:n.x/this.#_e.x,y:n.y/this.#_e.y},this.#xt.offset({x:this.#Je.x+this.#Ke.x+this.#$e.x+this.#et.x,y:this.#Je.y+this.#Ke.y+this.#$e.y+this.#et.y})}isGroupVisible(e){const t=this.#bt.getGroup(e);return void 0!==t&&t.isVisible()}toggleGroupVisibility(e){const t=this.#bt.getGroup(e);return void 0!==t&&(t.visible(!t.isVisible()),this.draw(),!0)}deleteDraw(e,t){this.#bt.deleteDraw(e,this.#ge,t)}deleteDraws(e){this.#bt.deleteDraws(this.#ge,e)}bindInteraction(){this.#xt.listening(!0),this.#Be.style.pointerEvents="auto";const e=tt;for(let t=0;t<e.length;++t)this.#Be.addEventListener(e[t],this.#ge)}unbindInteraction(){this.#xt.listening(!1),this.#Be.style.pointerEvents="none";const e=tt;for(let t=0;t<e.length;++t)this.#Be.removeEventListener(e[t],this.#ge)}setCurrentPosition(e,t){return this.getDrawController().activateDrawLayer(t,this.#qe.getScrollIndex()),!0}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{e.srclayerid=this.getId(),e.dataid=this.#Me,this.#ue.fireEvent(e)};#Ft(e){const t=2/e.x,n=2/e.y,i=this.#xt.find("Label");for(let e=0;e<i.length;++e)i[e].scale({x:t,y:n})}}function It(e){let t=null;const n=e.target.closest(".layer");return n&&void 0!==n.id&&(t=function(e){const t=e.split("-layer-");return 2!==t.length&&g.warn("Not the expected layer div id format..."),{groupDivId:t[0],layerId:t[1]}}(n.id)),t}function Lt(e,t,n,i){const r=(i.x-e.x)*t.x,o=(i.y-e.y)*t.y;return{x:i.x-r/n.x,y:i.y-o/n.y}}class Pt{#Be;#Rt=[];#je={x:1,y:1,z:1};#ht={x:1,y:1,z:1};#Ze={x:0,y:0,z:0};#Et=null;#qt=null;#ue=new ve;#Pe;#Ut=!1;#ve;constructor(e){this.#Be=e}getTargetOrientation(){return this.#Pe}setTargetOrientation(e){this.#Pe=e}getShowCrosshair(){return this.#Ut}setShowCrosshair(e){this.#Ut=e,e?(this.addEventListener("offsetchange",this.#Qt),this.addEventListener("zoomchange",this.#Qt),this.#Mt()):(this.removeEventListener("offsetchange",this.#Qt),this.removeEventListener("zoomchange",this.#Qt),this.#Bt())}#Qt=e=>{this.#Mt()};getDivId(){return this.#Be.id}getScale(){return this.#je}getBaseScale(){return this.#ht}getAddedScale(){return{x:this.#je.x/this.#ht.x,y:this.#je.y/this.#ht.y,z:this.#je.z/this.#ht.z}}getOffset(){return this.#Ze}getNumberOfLayers(){return this.#Rt.length}getActiveViewLayer(){return this.#Rt[this.#Et]}getViewLayersByDataIndex(e){const t=[];for(let n=0;n<this.#Rt.length;++n)this.#Rt[n]instanceof at&&this.#Rt[n].getDataIndex()===e&&t.push(this.#Rt[n]);return t}searchViewLayers(e){const t=[];for(let n=0;n<this.#Rt.length;++n)this.#Rt[n]instanceof at&&this.#Rt[n].getViewController().equalImageMeta(e)&&t.push(this.#Rt[n]);return t}getViewDataIndices(){const e=[];for(let t=0;t<this.#Rt.length;++t)this.#Rt[t]instanceof at&&e.push(this.#Rt[t].getDataIndex());return e}getActiveDrawLayer(){return this.#Rt[this.#qt]}getDrawLayersByDataIndex(e){const t=[];for(let n=0;n<this.#Rt.length;++n)this.#Rt[n]instanceof Tt&&this.#Rt[n].getDataIndex()===e&&t.push(this.#Rt[n]);return t}setActiveViewLayer(e){this.#Et=e}setActiveViewLayerByDataIndex(e){for(let t=0;t<this.#Rt.length;++t)if(this.#Rt[t]instanceof at&&this.#Rt[t].getDataIndex()===e){this.setActiveViewLayer(t);break}}setActiveDrawLayer(e){this.#qt=e}setActiveDrawLayerByDataIndex(e){for(let t=0;t<this.#Rt.length;++t)if(this.#Rt[t]instanceof Tt&&this.#Rt[t].getDataIndex()===e){this.setActiveDrawLayer(t);break}}addViewLayer(){const e=this.#Rt.length,t=this.#Nt();this.#Be.append(t);const n=new at(t);return this.#Rt.push(n),this.setActiveViewLayer(e),this.#Vt(n),n}addDrawLayer(){this.#qt=this.#Rt.length;const e=this.#Nt();this.#Be.append(e);const t=new Tt(e);return this.#Rt.push(t),this.#Gt(t),t}#Vt(e){e.addEventListener("positionchange",this.updateLayersToPositionChange);for(let t=0;t<je.length;++t)e.addEventListener(je[t],this.#ge);e.addEventListener("renderstart",this.#ge),e.addEventListener("renderend",this.#ge)}#Gt(e){e.addEventListener("drawcreate",this.#ge),e.addEventListener("drawdelete",this.#ge)}#Nt(){const e=document.createElement("div");return e.id=this.getDivId()+"-layer-"+this.#Rt.length,e.className="layer",e.style.pointerEvents="none",e}empty(){this.#Rt=[],this.#Et=null,this.#qt=null;const e=this.#Be.getElementsByClassName("layer");if(e)for(;e.length>0;)e[0].remove()}#Mt(e){void 0===e&&(e=this.#ve),this.#Bt();const t=this.#Rt[0],n=t.getViewController().getPlanePositionFromPosition(e),i=t.planePosToDisplay(n.x,n.y),r=document.createElement("hr");r.id=this.getDivId()+"-scroll-crosshair-horizontal",r.className="horizontal",r.style.width=this.#Be.offsetWidth+"px",r.style.left="0px",r.style.top=i.y+"px";const o=document.createElement("hr");o.id=this.getDivId()+"-scroll-crosshair-vertical",o.className="vertical",o.style.width=this.#Be.offsetHeight+"px",o.style.left=i.x+"px",o.style.top="0px",this.#Be.appendChild(r),this.#Be.appendChild(o)}#Bt(){let e=document.getElementById(this.getDivId()+"-scroll-crosshair-horizontal");e&&e.remove(),e=document.getElementById(this.getDivId()+"-scroll-crosshair-vertical"),e&&e.remove()}updateLayersToPositionChange=t=>{for(let e=0;e<this.#Rt.length;++e)this.#Rt[e]instanceof at&&(this.#Rt[e].removeEventListener("positionchange",this.updateLayersToPositionChange),this.#Rt[e].removeEventListener("positionchange",this.#ge));const n=new e(t.value[0]),i=new w(t.value[1]);this.#ve=i,this.#Ut&&this.#Mt(i);let r=null,o=null;for(let e=0;e<this.#Rt.length;++e){let a=!1;if(this.#Rt[e]instanceof at){const t=this.#Rt[e].getViewController(),n=t.getOrigin(),s=t.getOrigin(i);if(o){if(t.canSetPosition(i)&&void 0!==s){const t=r.minus(n),i=new D(t.getX(),t.getY(),t.getZ()),l=o.minus(s),c=new D(l.getX(),l.getY(),l.getZ());a=this.#Rt[e].setBaseOffset(i,c)}}else r=n,o=s}let s=!1;this.#Rt[e].getId()!==t.srclayerid&&(s=this.#Rt[e].setCurrentPosition(i,n)),!s&&a&&this.#Rt[e].draw()}for(let e=0;e<this.#Rt.length;++e)this.#Rt[e]instanceof at&&(this.#Rt[e].addEventListener("positionchange",this.updateLayersToPositionChange),this.#Rt[e].addEventListener("positionchange",this.#ge))};calculateFitScale(){if(0===this.#Be.offsetWidth&&0===this.#Be.offsetHeight)throw new Error("Cannot fit to zero sized container.");const e=this.getMaxSize();if(void 0!==e)return Math.min(this.#Be.offsetWidth/e.x,this.#Be.offsetHeight/e.y)}setFitScale(e){const t=this.getMaxSize();if(void 0===t)return;const n={x:this.#Be.offsetWidth,y:this.#Be.offsetHeight},i={x:-.5*(n.x-Math.floor(t.x*e)),y:-.5*(n.y-Math.floor(t.y*e))};for(let t=0;t<this.#Rt.length;++t)this.#Rt[t].fitToContainer(e,n,i);this.#Ut&&this.#Mt()}getMaxSize(){let e={x:0,y:0};for(let t=0;t<this.#Rt.length;++t)if(this.#Rt[t]instanceof at){const n=this.#Rt[t].getImageWorldSize();n.x>e.x&&(e.x=n.x),n.y>e.y&&(e.y=n.y)}return 0===e.x&&0===e.y&&(e=void 0),e}flipScaleZ(){this.#ht.z*=-1,this.setScale(this.#ht)}addScale(e,t){const n={x:this.#je.x*(1+e),y:this.#je.y*(1+e),z:this.#je.z*(1+e)};this.setScale(n,t)}setScale(e,t){this.#je=e;for(let e=0;e<this.#Rt.length;++e)this.#Rt[e].setScale(this.#je,t);const n=[e.x,e.y,e.z];void 0!==t&&(n.push(t.getX()),n.push(t.getY()),n.push(t.getZ())),this.#ge({type:"zoomchange",value:n})}addTranslation(e){this.setOffset({x:this.#Ze.x-e.x,y:this.#Ze.y-e.y,z:this.#Ze.z-e.z})}setOffset(e){this.#Ze=e;for(let e=0;e<this.#Rt.length;++e)this.#Rt[e].setOffset(this.#Ze);this.#ge({type:"offsetchange",value:[this.#Ze.x,this.#Ze.y,this.#Ze.z]})}reset(){this.setScale(this.#ht),this.setOffset({x:0,y:0,z:0})}draw(){for(let e=0;e<this.#Rt.length;++e)this.#Rt[e].draw()}display(e){for(let t=0;t<this.#Rt.length;++t)this.#Rt[t].display(e)}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{this.#ue.fireEvent(e)}}const Ot={WindowLevelBinder:class{getEventType=function(){return"wlchange"};getCallback=function(e){return function(t){const n=e.getViewLayersByDataIndex(t.dataid);0!==n.length&&n[0].getViewController().setWindowLevel(t.value[0],t.value[1])}}},PositionBinder:class{getEventType=function(){return"positionchange"};getCallback=function(e){return function(t){const n=t.value[1],i=e.getActiveViewLayer().getViewController(),r=i.getCurrentPosition(),o=r.length(),a=n.length;a!==o&&(a===o-1?n.push(r.get(o-1)):a===o+1&&n.pop()),i.setCurrentPosition(new w(n))}}},ZoomBinder:class{getEventType=function(){return"zoomchange"};getCallback=function(e){return function(t){const n={x:t.value[0],y:t.value[1],z:t.value[2]};let i;6===t.value.length&&(i=new O(t.value[3],t.value[4],t.value[5])),e.setScale(n,i),e.draw()}}},OffsetBinder:class{getEventType=function(){return"offsetchange"};getCallback=function(e){return function(t){e.setOffset({x:t.value[0],y:t.value[1],z:t.value[2]}),e.draw()}}},OpacityBinder:class{getEventType=function(){return"opacitychange"};getCallback=function(e){return function(t){if(void 0===t.dataid)return;const n=e.getViewLayersByDataIndex(t.dataid);0!==n.length&&(n[0].setOpacity(t.value),n[0].draw())}}}};class wt{#kt=[];#Ht=null;#Wt=[];#zt=null;getLayerGroup(e){return this.#kt[e]}getNumberOfLayerGroups(){return this.#kt.length}getActiveLayerGroup(){return this.getLayerGroup(this.#Ht)}getViewLayersByDataIndex(e){let t=[];for(let n=0;n<this.#kt.length;++n)t=t.concat(this.#kt[n].getViewLayersByDataIndex(e));return t}getDrawLayersByDataIndex(e){let t=[];for(let n=0;n<this.#kt.length;++n)t=t.concat(this.#kt[n].getDrawLayersByDataIndex(e));return t}addLayerGroup(e){this.#Ht=this.#kt.length;const t=new Pt(e),n=this.#zt&&0!==this.#zt.length;return n&&this.unbindLayerGroups(),this.#kt.push(t),n&&this.bindLayerGroups(),t}getLayerGroupByDivId(e){return this.#kt.find((function(t){return t.getDivId()===e}))}setBinders(e){if(null==e)throw new Error("Cannot set null or undefined binders");0!==this.#Wt.length&&this.unbindLayerGroups(),this.#Wt=e.slice(),this.bindLayerGroups()}empty(){this.unbindLayerGroups();for(let e=0;e<this.#kt.length;++e)this.#kt[e].empty();this.#kt=[],this.#Ht=null}reset(){for(let e=0;e<this.#kt.length;++e)this.#kt[e].reset()}draw(){for(let e=0;e<this.#kt.length;++e)this.#kt[e].draw()}syncLayerGroupScale(){let e;const t=[];for(let n=0;n<this.#kt.length;++n){const i=this.#kt[n].calculateFitScale();void 0!==i&&(t.push(n),(void 0===e||i<e)&&(e=i))}if(void 0!==e)for(let n=0;n<this.#kt.length;++n)t.includes(n)&&this.#kt[n].setFitScale(e)}bindLayerGroups(){if(0!==this.#kt.length&&1!==this.#kt.length&&0!==this.#Wt.length){this.#zt=new Array(this.#kt.length);for(let e=0;e<this.#kt.length;++e)for(let t=0;t<this.#Wt.length;++t)this.#Yt(e,this.#Wt[t])}}unbindLayerGroups(){if(0!==this.#kt.length&&1!==this.#kt.length&&0!==this.#Wt.length&&this.#zt){for(let e=0;e<this.#kt.length;++e)for(let t=0;t<this.#Wt.length;++t)this.#Xt(e,this.#Wt[t]);this.#zt=null}}#jt(e,t){void 0===this.#zt[t]&&(this.#zt[t]=[]);let n=this.#zt[t].find((function(t){return t.binder===e}));return void 0===n&&(n={binder:e,callback:n=>{this.#Xt(t,e),e.getCallback(this.#kt[t])(n),this.#Yt(t,e)}},this.#zt[t].push(n)),n.callback}#Yt(e,t){for(let n=0;n<this.#kt.length;++n)n!==e&&this.#kt[e].addEventListener(t.getEventType(),this.#jt(t,n))}#Xt(e,t){for(let n=0;n<this.#kt.length;++n)n!==e&&this.#kt[e].removeEventListener(t.getEventType(),this.#jt(t,n))}}class At{toJSON(e){const t=e.getActiveLayerGroup(),n=t.getActiveViewLayer().getViewController(),i=n.getCurrentIndex(),r=t.getActiveDrawLayer(),o=r.getDrawController();return JSON.stringify({version:"0.5","window-center":n.getWindowLevel().center,"window-width":n.getWindowLevel().width,position:i.getValues(),scale:e.getAddedScale(),offset:e.getOffset(),drawings:r.getKonvaLayer().toObject(),drawingsDetails:o.getDrawStoreDetails()})}fromJSON(e){const t=JSON.parse(e);let n=null;if("0.1"===t.version)n=this.#_t(t);else if("0.2"===t.version)n=this.#Zt(t);else if("0.3"===t.version)n=this.#Kt(t);else if("0.4"===t.version)n=this.#Jt(t);else{if("0.5"!==t.version)throw new Error("Unknown state file format version: '"+t.version+"'.");n=this.#$t(t)}return n}apply(t,n){const i=t.getActiveLayerGroup().getActiveViewLayer().getViewController();i.setWindowLevel(n["window-center"],n["window-width"]),i.setCurrentIndex(new e(n.position));const r=t.getActiveLayerGroup().getBaseScale();let o=null,a=null;if(void 0!==n.scaleCenter){o={x:n.scale*r.x,y:n.scale*r.y,z:1};const e=n.scaleCenter.x-n.scaleCenter.x*n.scale,t=n.scaleCenter.y-n.scaleCenter.y*n.scale,i=e+n.translation.x*o.x,s=t+n.translation.y*o.y;a={x:-i/o.x,y:-s/o.y,z:0}}else o={x:n.scale.x*r.x,y:n.scale.y*r.y,z:r.z},a={x:n.offset.x,y:n.offset.y,z:0};t.getActiveLayerGroup().setScale(o),t.getActiveLayerGroup().setOffset(a),t.render(0),t.setDrawings(n.drawings,n.drawingsDetails)}#_t(e){const t=function(e){const t=[],n={};let i,r;for(let o=0,a=e.length;o<a;++o){t[o]=[];for(let a=0,s=e[o].length;a<s;++a){i=e[o][a];const s=[];for(let e=0,t=i.length;e<t;++e){r=lt().Node.create(i[e]),r.visible(!0);let t={x:0,y:0};const o=r.getChildren((function(e){return"shape"===e.name()}))[0];if(o.stroke(f(o.stroke())),"line-group"===r.name()){r.name("ruler-group");const e=new(lt().Line)({points:[o.points()[0],o.points()[1],o.points()[0],o.points()[1]],name:"shape-tick0"});r.add(e);const t=new(lt().Line)({points:[o.points()[2],o.points()[3],o.points()[2],o.points()[3]],name:"shape-tick1"});r.add(t)}const a=r.getChildren((function(e){return"arc"===e.name()}));1===a.length&&a[0].name("shape-arc");const l=r.getChildren((function(e){return"text"===e.name()}));let c=new(lt().Text)({name:"text",text:""});1===l.length?(t.x=l[0].x(),t.y=l[0].y(),l[0].remove(),c=l[0]):0!==o.points().length&&(t={x:o.points()[0],y:o.points()[1]});const u=new(lt().Label)({x:t.x,y:t.y,name:"label"});u.add(c),u.add(new(lt().Tag)),r.add(u),s.push(JSON.stringify(r.toObject()));let d=c.text();const S=d.length;let h=null;"ruler-group"===r.name()?(h={length:{value:parseFloat(d.substring(0,S-2)),unit:d.substring(-2)}},d="{length}"):"ellipse-group"===r.name()||"rectangle-group"===r.name()?(h={surface:{value:parseFloat(d.substring(0,S-3)),unit:d.substring(-3)}},d="{surface}"):"protractor-group"!==r.name()&&"rectangle-group"!==r.name()||(h={angle:{value:parseFloat(d.substring(0,S-1)),unit:d.substring(-1)}},d="{angle}"),n[r.id()]={textExpr:d,longText:"",quant:h}}t[o].push(s)}}return{drawings:t,drawingsDetails:n}}(e.drawings);return e.drawings=xt(t.drawings).toObject(),e.drawingsDetails=bt(t.drawingsDetails),(e=Ft(e)).drawings=Rt(e.drawings),e}#Zt(e){return e.drawings=xt(e.drawings).toObject(),e.drawingsDetails=bt(function(e){const t={},n="string"==typeof e?JSON.parse(e):e;for(let e=0,i=n.length;e<i;++e)for(let i=0,r=n[e].length;i<r;++i)for(let r=0,o=n[e][i].length;r<o;++r){const o=n[e][i][r];t[o.id]={textExpr:o.textExpr,longText:o.longText,quant:o.quant}}return t}(e.drawingsDetails)),(e=Ft(e)).drawings=Rt(e.drawings),e}#Kt(e){return e.drawingsDetails=bt(e.drawingsDetails),(e=Ft(e)).drawings=Rt(e.drawings),e}#Jt(e){return(e=Ft(e)).drawings=Rt(e.drawings),e}#$t(e){return e}}function xt(t){let n,i,r;const o=new(lt().Layer)({listening:!1,visible:!0}),a="string"==typeof t?JSON.parse(t):t;for(let t=0,l=a.length;t<l;++t)for(let l=0,c=a[t].length;l<c;++l)if(i=a[t][l],0!==i.length){r=new(lt().Group)({id:(s=new e([1,1,t,l]),"slice-"+s.get(2)+"_frame-"+(4===s.length()?s.get(3):0)),name:"position-group",visible:!1});for(let e=0,t=i.length;e<t;++e)n=lt().Node.create(i[e]),n.draggable(!0),n.getChildren().forEach((function(e){e.draggable(!1)})),r.add(n);o.add(r)}var s;return o}function bt(e){const t={},n=Object.keys(e);for(let i=0,r=n.length;i<r;++i){const r=e[n[i]];t[n[i]]={meta:{textExpr:r.textExpr,longText:r.longText,quantification:r.quant}}}return t}function Ft(e){const t=e.position;return e.position=[t.i,t.j,t.k],e}function Rt(e){const t=e.children;for(let e=0,n=t.length;e<n;++e){const n=t[e],i=n.attrs.id.split("_"),r=parseInt(i[0].substring(6),10),o=parseInt(i[1].substring(6),10);let a="#2-";a+=0===r&&0!==o?o:r,n.attrs.id=a}return e}function Et(e){return new URL(e,window.location.origin)}function qt(e){const t={};let n=null;if(e&&-1!==(n=e.indexOf("?"))){t.base=e.substring(0,n);let i=e.indexOf("#");-1===i&&(i=e.length);const r=e.substring(n+1,i);t.query=function(e){const t={};if(e){const n=e.split("&");for(let e=0;e<n.length;++e){const i=n[e].split("=");t[i[0]]?(t[i[0]]instanceof Array||(t[i[0]]=[t[i[0]]]),t[i[0]].push(i[1])):t[i[0]]=i[1]}}return t}(r)}return t}class Ut{#en=[];#tn=0;#ue=new ve;getStackSize(){return this.#en.length}getCurrentStackIndex(){return this.#tn}add(e){this.#en=this.#en.slice(0,this.#tn),this.#en.push(e),++this.#tn,this.#ge({type:"undoadd",command:e.getName()})}undo(){this.#tn>0&&(--this.#tn,this.#en[this.#tn].undo(),this.#ge({type:"undo",command:this.#en[this.#tn].getName()}))}redo(){this.#tn<this.#en.length&&(this.#en[this.#tn].execute(),this.#ge({type:"redo",command:this.#en[this.#tn].getName()}),++this.#tn)}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{this.#ue.fireEvent(e)}}class Qt{#nn;#in=null;#zt=[];#rn={};constructor(e){this.#nn=e}init(){for(const e in this.#nn)this.#nn[e].init();window.addEventListener("keydown",this.#on("window","keydown"),!0)}getToolList(){return this.#nn}hasTool(e){return void 0!==this.getToolList()[e]}getSelectedTool(){return this.#in}getSelectedToolEventHandler(e){return this.getSelectedTool()[e]}setSelectedTool(e){if(!this.hasTool(e))throw new Error("Unknown tool: '"+e+"'");this.#in&&this.#in.activate(!1),this.#in=this.#nn[e],this.#in.activate(!0)}setToolFeatures(e){this.getSelectedTool()&&this.getSelectedTool().setFeatures(e)}bindLayer(e,t){void 0!==this.#rn[t]&&this.#an(this.#rn[t]),e.bindInteraction();const n=tt;for(let t=0;t<n.length;++t)e.addEventListener(n[t],this.#on(e.getId(),n[t]));this.#rn[t]=e}#an(e){e.unbindInteraction();const t=tt;for(let n=0;n<t.length;++n)e.removeEventListener(t[n],this.#on(e.getId(),t[n]))}#on(e,t){const n=e=>{if(this.#in){const t=this.#in[e.type];t&&t(e)}};if(void 0===this.#zt[e]&&(this.#zt[e]=[]),void 0===this.#zt[e][t]){let i=null;i="keydown"===t||"touchend"===t?function(e){n(e)}:function(e){!function(e){const t=rt(e);e._x=t[0].x,e._y=t[0].y,2===t.length&&(e._x1=t[1].x,e._y1=t[1].y)}(e),n(e)},this.#zt[e][t]=i}return this.#zt[e][t]}}class Mt{#sn=[];#ln=2;#cn;constructor(e){this.#cn=e}setNumberOfDimensions(e){this.#ln=e}setNToLoad(e){for(let t=0;t<e;++t){this.#sn[t]=[];for(let e=0;e<this.#ln;++e)this.#sn[t][e]=0}}onprogress=e=>{if(!e.lengthComputable)return;if(void 0===e.subindex)return;if(void 0===e.index)return;const t=100*e.loaded/e.total;this.#sn[e.index][e.subindex]=t;let n=null;n=void 0!==e.item?e.item:{loaded:this.#un(e.index),total:100,source:e.source},this.#cn({lengthComputable:!0,loaded:this.#dn(),total:100,item:n})};#un(e){let t=0;for(let n=0;n<this.#ln;++n)t+=this.#sn[e][n];return t/this.#ln}#dn(){let e=0;const t=this.#sn.length;for(let n=0;n<t;++n)e+=this.#un(n);return Math.round(e/t)}getMonoProgressHandler(e,t){return n=>{n.index=e,n.subindex=t,this.onprogress(n)}}getUndefinedMonoProgressHandler(e){return t=>{t.subindex=e,this.onprogress(t)}}}class Bt{#Sn=null;#hn=[];#gn=null;#mn=0;#pn=0;#fn;#F;getDefaultCharacterSet(){return this.#F}setDefaultCharacterSet(e){this.#F=e}#Dn(e){this.#Sn=e,this.#mn=0,this.#pn=0,this.#fn=!1,this.#yn(),this.#Cn()}#vn(e){this.#hn.push(e)}#yn(){this.#hn=[]}#Tn(e){this.#gn=e}#Cn(){this.#gn=null}#In=e=>{this.#mn++,this.#mn===this.#Sn.length&&this.onload({source:this.#Sn})};#Ln=e=>{this.#pn++,this.#pn===2*this.#Sn.length&&this.onloadend({source:this.#Sn})};#Pn(e,t){return n=>{n.source=t,e(n)}}load(e,t){this.onloadstart({source:e}),1===e.length&&(X(e[0],"DICOMDIR")||X(e[0],".dcmdir"))?this.#On(e[0],t):this.#wn(e,t)}#An(e,t,n){return i=>{const r=i.target.status;200!==r&&0!==r?(this.onerror({source:t,error:"GET "+i.target.responseURL+" "+i.target.status+" ("+i.target.statusText+")",target:i.target}),this.#Ln()):e.load(i.target.response,t,n)}}#wn(e,t){if(void 0===e||0===e.length)return;this.#Dn(e);const n=new Mt(this.onprogress);n.setNToLoad(e.length);const i=[];for(let e=0;e<tn.length;++e)i.push(new tn[e]);let r=e[0],o=null,a=!1;for(let s=0;s<i.length;++s)if(o=i[s],o.canLoadUrl(r,t)){a=!0,o.setOptions({numberOfFiles:e.length,defaultCharacterSet:this.getDefaultCharacterSet()}),o.onprogress=n.getUndefinedMonoProgressHandler(1),o.onloaditem=this.onloaditem,o.onload=this.#In,o.onloadend=this.#Ln,o.onerror=this.onerror,o.onabort=this.onabort,this.#Tn(o);break}if(!a)throw new Error("No loader found for url: "+r);let s=0;const l=()=>{this.#Ln(),s<this.#hn.length-1&&!this.#fn&&(++s,this.#hn[s].send(null))};for(let i=0;i<e.length;++i){if(r=e[i],!o.canLoadUrl(r,t))throw new Error("Input url of different type: "+r);const a=new XMLHttpRequest;if(a.open("GET",r,!0),void 0!==t){if(void 0!==t.requestHeaders){const e=t.requestHeaders;for(let t=0;t<e.length;++t)void 0!==e[t].name&&void 0!==e[t].value&&a.setRequestHeader(e[t].name,e[t].value)}void 0!==t.withCredentials&&(a.withCredentials=t.withCredentials)}a.onprogress=this.#Pn(n.getMonoProgressHandler(i,0),r),a.onload=this.#An(o,r,i),a.onloadend=l,a.onerror=this.#Pn(this.onerror,r),a.onabort=this.#Pn(this.onabort,r),1===o.loadUrlAs()&&(a.responseType="arraybuffer"),this.#vn(a)}let c=this.#hn.length;void 0!==t&&void 0!==t.batchSize&&0!==c&&(c=Math.min(t.batchSize,this.#hn.length));for(let e=0;e<c;++e)this.#fn||(s=e,this.#hn[s].send(null))}#On(e,t){const n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=n=>{const i=n.target.status;if(200!==i&&0!==i)this.onerror({source:e,error:"GET "+n.target.responseURL+" "+n.target.status+" ("+n.target.statusText+")",target:n.target}),this.onloadend({});else{const i=function(e){const t=new Ce;t.parse(e);const n=t.getDicomElements();if(void 0===n["00041220"]||void 0===n["00041220"].value)return void g.warn("No Directory Record Sequence found in DICOMDIR.");const i=n["00041220"].value;if(0===i.length)return void g.warn("The Directory Record Sequence of the DICOMDIR is empty.");const r=[];let o=null,a=null;for(let e=0;e<i.length;++e){if(void 0===i[e]["00041430"]||void 0===i[e]["00041430"].value)continue;const t=i[e]["00041430"].value[0];if("STUDY"===t)a=[],r.push(a);else if("SERIES"===t)o=[],a.push(o);else if("IMAGE"===t){if(void 0===i[e]["00041500"]||void 0===i[e]["00041500"].value)continue;const t=i[e]["00041500"].value;o.push(t.join("/"))}}return r}(n.target.response)[0][0],r=e.split("/").slice(0,-1).join("/"),o=[];for(let e=0;e<i.length;++e)o.push(r+"/"+i[e]);this.#wn(o,t)}},n.onerror=t=>{this.#Pn(this.onerror,e)(t),this.onloadend({})},n.onabort=t=>{this.#Pn(this.onabort,e)(t),this.onloadend({})},n.send(null)}abort(){this.#fn=!0;for(let e=0;e<this.#hn.length;++e)4!==this.#hn[e].readyState&&this.#hn[e].abort();this.#gn&&this.#gn.isLoading()&&this.#gn.abort()}onloadstart(e){}onprogress(e){}onloaditem(e){}onload(e){}onloadend(e){}onerror(e){}onabort(e){}}class Nt{constructor(e){this.poolSize=e,this.taskQueue=[],this.freeThreads=[];for(let t=0;t<e;++t)this.freeThreads.push(new Vt(this));this.runningThreads=[]}addWorkerTask(e){if(this.freeThreads.length===this.poolSize&&this.onworkstart({type:"work-start"}),this.freeThreads.length>0){const t=this.freeThreads.shift();this.runningThreads.push(t),t.run(e)}else this.taskQueue.push(e)}abort(){this.#xn(),this.onabort({type:"work-abort"}),this.onworkend({type:"work-end"})}onTaskEnd(e){if(this.taskQueue.length>0){const t=this.taskQueue.shift();e.run(t)}else{e.stop(),this.freeThreads.push(e);for(let t=0;t<this.runningThreads.length;++t)this.runningThreads[t].getId()===e.getId()&&this.runningThreads.splice(t,1);this.freeThreads.length===this.poolSize&&(this.onwork({type:"work"}),this.onworkend({type:"work-end"}))}}handleWorkerError=e=>{this.#xn(),this.onerror({error:e}),this.onworkend({type:"work-end"})};#xn(){this.taskQueue=[];for(let e=0;e<this.runningThreads.length;++e)this.runningThreads[e].stop();this.runningThreads=[]}onworkstart(e){}onworkitem(e){}onwork(e){}onworkend(e){}onerror(e){}onabort(e){}}class Vt{constructor(e){this.parentPool=e,this.id=Math.random().toString(36).substring(2,15),this.runningTask=null,this.worker}getId(){return this.id}run(e){this.runningTask=e,void 0===this.worker&&(this.worker=new Worker(this.runningTask.script),this.worker.onmessage=this.onmessage,this.worker.onerror=this.onerror),this.worker.postMessage(this.runningTask.startMessage)}stop(){void 0!==this.worker&&(this.worker.terminate(),this.worker=void 0)}onmessage=e=>{e.itemNumber=this.runningTask.info.itemNumber,e.numberOfItems=this.runningTask.info.numberOfItems,e.dataIndex=this.runningTask.info.dataIndex,this.parentPool.onworkitem(e),this.parentPool.onTaskEnd(this)};onerror=e=>{e.itemNumber=this.runningTask.info.itemNumber,e.numberOfItems=this.runningTask.info.numberOfItems,e.dataIndex=this.runningTask.info.dataIndex,this.parentPool.handleWorkerError(e),this.stop()}}class Gt{constructor(e,t,n){this.script=e,this.startMessage=t,this.info=n}}const kt="undefined"!=typeof JpegImage,Ht="undefined"!=typeof jpeg&&void 0!==jpeg.lossless,Wt="undefined"!=typeof JpxImage,zt={jpeg2000:"","jpeg-lossless":"","jpeg-baseline":"",rle:""};class Yt{#bn;#Fn=new Nt(10);#Rn=!1;constructor(e,t){this.#bn=e}decode(e,t,n){this.#Rn||(this.#Rn=!0,this.#Fn.onworkstart=this.ondecodestart,this.#Fn.onworkitem=this.ondecodeditem,this.#Fn.onwork=this.ondecoded,this.#Fn.onworkend=this.ondecodeend,this.#Fn.onerror=this.onerror,this.#Fn.onabort=this.onabort);const i=new Gt(this.#bn,{buffer:e,meta:t},n);this.#Fn.addWorkerTask(i)}abort(){this.#Fn.abort()}ondecodestart(e){}ondecodeditem(e){}ondecoded(e){}ondecodeend(e){}onerror(e){}onabort(e){}}class Xt{#En;#qn;constructor(e,t){this.#En=e,this.#qn=t}#Un=0;decode(e,t,n){++this.#Un;let i=null,r=null;if("jpeg-lossless"===this.#En){if(!Ht)throw new Error("No JPEG Lossless decoder provided");const n=t.bitsAllocated/8,o=new Uint8Array(e);i=new jpeg.lossless.Decoder;const a=i.decode(o.buffer,0,o.buffer.byteLength,n);8===t.bitsAllocated?r=t.isSigned?new Int8Array(a.buffer):new Uint8Array(a.buffer):16===t.bitsAllocated&&(r=t.isSigned?new Int16Array(a.buffer):new Uint16Array(a.buffer))}else if("jpeg-baseline"===this.#En){if(!kt)throw new Error("No JPEG Baseline decoder provided");i=new JpegImage,i.parse(e),r=i.getData(i.width,i.height)}else if("jpeg2000"===this.#En){if(!Wt)throw new Error("No JPEG 2000 decoder provided");i=new JpxImage,i.parse(e),r=i.tiles[0].items}else"rle"===this.#En&&(i=new dwvdecoder.RleDecoder,r=i.decode(e,t.bitsAllocated,t.isSigned,t.sliceSize,t.samplesPerPixel,t.planarConfiguration));this.ondecodeditem({data:[r],dataIndex:n.dataIndex,numberOfItems:n.numberOfItems,itemNumber:n.itemNumber}),this.#Un===this.#qn&&(this.ondecoded({}),this.ondecodeend({}))}abort(){this.onabort({}),this.ondecodeend({})}ondecodestart(e){}ondecodeditem(e){}ondecoded(e){}ondecodeend(e){}onerror(e){}onabort(e){}}class jt{#Rn=!1;#Qn=null;constructor(e,t){void 0!==zt&&void 0!==zt[e]?this.#Qn=new Yt(zt[e],t):this.#Qn=new Xt(e,t)}decode(e,t,n){this.#Rn||(this.#Rn=!0,this.#Qn.ondecodestart=this.ondecodestart,this.#Qn.ondecodeditem=this.ondecodeditem,this.#Qn.ondecoded=this.ondecoded,this.#Qn.ondecodeend=this.ondecodeend,this.#Qn.onerror=this.onerror,this.#Qn.onabort=this.onabort),this.#Qn.decode(e,t,n)}abort(){this.#Qn.abort()}ondecodestart(e){}ondecodeditem(e){}ondecoded(e){}ondecodeend(e){}onerror(e){}onabort(e){}}class _t{#Mn;setOptions(e){this.#Mn=e}#Qn=null;#Bn=[];#Nn=[];#Vn=[];#Gn=[];#kn(e){let t;const n=e["00080060"];return void 0!==n&&"SEG"===n.value[0]&&(t=new He),void 0===t&&(t=new Ue),t}#Hn(e,t){const n=this.#Bn[e].getDicomElements(),i=this.#kn(n);try{const r=i.create(n,this.#Nn[e],this.#Mn.numberOfFiles);this.onloaditem({data:{image:r,info:n},source:t,warn:this.#Gn[e]})}catch(e){this.onerror({error:e,source:t}),this.onloadend({source:t})}}#Wn(e){this.onprogress({lengthComputable:!0,loaded:e.itemNumber+1,total:e.numberOfItems,index:e.dataIndex,source:origin});const t=e.dataIndex,n=e.data[0];if(1!==e.numberOfItems){if(void 0===this.#Vn[t]){this.#Vn[t]=n.length;const i=e.numberOfItems*this.#Vn[t];try{this.#Nn[t]=new n.constructor(i)}catch(e){if(e instanceof RangeError){const e=Math.floor(Math.log(i)/Math.log(2));g.error("Cannot allocate "+n.constructor.name+" of size: "+i+" (>2^"+e+") for decompressed data.")}return this.#Qn.abort(),this.onerror({error:e,source:origin}),void this.onloadend({source:origin})}}n.length!==this.#Vn[t]&&g.warn("Unsupported varying decompressed data size: "+n.length+" != "+this.#Vn[t]),this.#Nn[t].set(n,this.#Vn[t]*e.itemNumber)}else this.#Nn[t]=n;0===e.itemNumber&&this.#Hn(t,origin)}convert(e,t,n){this.onloadstart({source:t,dataIndex:n});const i=new Ce;let r;void 0!==this.#Mn.defaultCharacterSet&&i.setDefaultCharacterSet(this.#Mn.defaultCharacterSet);try{i.parse(e),r=this.#kn(i.getDicomElements()).checkElements(i.getDicomElements())}catch(e){return this.onerror({error:e,source:t}),void this.onloadend({source:t})}const o=i.getDicomElements()["7FE00010"].value;i.getDicomElements()["7FE00010"].value=[];const a=function(e){let t=null;return pe(e)?t="jpeg2000":ge(e)?t="jpeg-baseline":me(e)?t="jpeg-lossless":fe(e)&&(t="rle"),t}(i.getDicomElements()["00020010"].value[0]),s=null!==a;if(this.#Bn[n]=i,this.#Nn[n]=o[0],this.#Gn[n]=r,s){const e={bitsAllocated:i.getDicomElements()["00280100"].value[0],isSigned:1===i.getDicomElements()["00280103"].value[0]},t=i.getDicomElements()["00280011"],r=i.getDicomElements()["00280010"];void 0!==t&&void 0!==r&&(e.sliceSize=t.value[0]*r.value[0]);const s=i.getDicomElements()["00280002"];void 0!==s&&(e.samplesPerPixel=s.value[0]);const l=i.getDicomElements()["00280006"];void 0!==l&&(e.planarConfiguration=l.value[0]);const c=o.length;null===this.#Qn&&(this.#Qn=new jt(a,c),this.#Qn.ondecodeditem=e=>{this.#Wn(e),e.itemNumber+1===e.numberOfItems&&(this.onload(e),this.onloadend(e))},this.#Qn.onerror=this.onerror,this.#Qn.onabort=this.onabort);for(let t=0;t<c;++t)this.#Qn.decode(o[t],e,{itemNumber:t,numberOfItems:c,dataIndex:n})}else this.onprogress({lengthComputable:!0,loaded:100,total:100,index:n,source:t}),this.#Hn(n,t),this.onload({source:t}),this.onloadend({source:t})}abort(){this.#Qn&&this.#Qn.abort()}onloadstart(e){}onloaditem(e){}onprogress(e){}onload(e){}onloadend(e){}onerror(e){}onabort(e){}}class Zt{#Sn=null;#gn=null;#mn=0;#pn=0;#F;getDefaultCharacterSet(){return this.#F}setDefaultCharacterSet(e){this.#F=e}#Dn(e){this.#Sn=e,this.#mn=0,this.#pn=0,this.#Cn()}#Tn(e){this.#gn=e}#Cn(){this.#gn=null}#In=e=>{this.#mn++,this.#mn===this.#Sn.length&&this.onload({source:this.#Sn})};#Ln=e=>{this.#pn++,this.#pn===this.#Sn.length&&this.onloadend({source:this.#Sn})};load(e){if(void 0===e||0===e.length)return;this.#Dn(e),this.onloadstart({source:e});const t=new Mt(this.onprogress);t.setNToLoad(e.length),t.setNumberOfDimensions(1);const n=[];for(let e=0;e<tn.length;++e)n.push(new tn[e]);let i=e[0],r=null,o=!1;for(let a=0;a<n.length;++a)if(r=n[a],r.canLoadMemory(i)){o=!0,r.setOptions({numberOfFiles:e.length,defaultCharacterSet:this.getDefaultCharacterSet()}),r.onprogress=t.getUndefinedMonoProgressHandler(0),r.onloaditem=this.onloaditem,r.onload=this.#In,r.onloadend=this.#Ln,r.onerror=this.onerror,r.onabort=this.onabort,this.#Tn(r);break}if(!o)throw new Error("No loader found for data: "+i.filename);for(let t=0;t<e.length;++t){if(i=e[t],!r.canLoadMemory(i))throw new Error("Input data of different type: "+i.filename);r.load(i.data,i.filename,t)}}abort(){this.#gn&&this.#gn.isLoading()&&this.#gn.abort()}onloadstart(e){}onprogress(e){}onloaditem(e){}onload(e){}onloadend(e){}onerror(e){}onabort(e){}}function Kt(e){const t=e.data.length,n=new Uint8Array(t/4*3);let i=0;for(let r=0;r<t;r+=4)n[i]=e.data[r],n[i+1]=e.data[r+1],n[i+2]=e.data[r+2],i+=3;return n}function Jt(e,t,n,i,r,o){const a=new we([e,t,1]),s=new Ae([1,1,1]),l=new O(0,0,n),c=new xe(l,a,s),u=new Ye(c,i,[o]);u.setPhotometricInterpretation("RGB");const d={BitsStored:8};return void 0!==r&&(d.numberOfFiles=r),u.setMeta(d),u}var $t=o(626),en=o.n($t);const tn=[class{#Mn={};#zn=!1;setOptions(e){this.#Mn=e}isLoading(){return this.#zn}#Yn=new _t;load(e,t,n){this.#zn||(this.#Yn.setOptions(this.#Mn),this.#Yn.onloadstart=this.onloadstart,this.#Yn.onprogress=this.onprogress,this.#Yn.onloaditem=this.onloaditem,this.#Yn.onload=this.onload,this.#Yn.onloadend=e=>{this.#zn=!1,this.onloadend(e)},this.#Yn.onerror=e=>{e.source=t,this.onerror(e)},this.#Yn.onabort=this.onabort),this.#zn=!0,this.#Yn.convert(e,t,n)}abort(){this.#zn=!1,this.#Yn.abort()}canLoadFile(e){const t=Z(e.name);return null===t||"dcm"===t}canLoadUrl(e,t){if(void 0!==t&&void 0!==t.requestHeaders){const e=function(e){return"Accept"===e.name&&Y(e.value,"application/dicom")&&"+"!==e.value[18]};return void 0!==t.requestHeaders.find(e)}const n=Et(e),i=Z(n.pathname),r=null===i,o="dcm"===i,a=n.searchParams.get("contentType");return null!=a?"application/dicom"===a:r||o}canLoadMemory(e){return void 0!==e["Content-Type"]&&"application/dicom"===e["Content-Type"]||void 0!==e.filename&&this.canLoadFile({name:e.filename})}loadFileAs(){return nn.ArrayBuffer}loadUrlAs(){return 1}onloadstart(e){}onprogress(e){}onloaditem(e){}onload(e){}onloadend(e){}onerror(e){}onabort(e){}},class{#zn=!1;setOptions(e){}isLoading(){return this.#zn}load(e,t,n){this.#zn=!0,this.onloadstart({source:t});try{this.onprogress({lengthComputable:!0,loaded:100,total:100,index:n,source:t});const i={data:e,source:t};this.onloaditem(i),this.onload(i)}catch(e){this.onerror({error:e,source:t})}finally{this.#zn=!1,this.onloadend({source:t})}}abort(){this.#zn=!1,this.onabort({}),this.onloadend({})}canLoadFile(e){return"json"===Z(e.name)}canLoadUrl(e,t){if(void 0!==t&&void 0!==t.requestHeaders){const e=function(e){return"Accept"===e.name&&Y(e.value,"application/json")&&Y(e.value,"application/dicom+json")};return void 0!==t.requestHeaders.find(e)}return"json"===Z(Et(e).pathname)}canLoadMemory(e){return!(void 0===e["Content-Type"]||!e["Content-Type"].includes("json"))||void 0!==e.filename&&this.canLoadFile({name:e.filename})}loadFileAs(){return nn.Text}loadUrlAs(){return 0}onloadstart(e){}onprogress(e){}onloaditem(e){}onload(e){}onloadend(e){}onerror(e){}onabort(e){}},class{#zn=!1;setOptions(e){}isLoading(){return this.#zn}load(e,t,n){this.onloadstart({source:t}),this.#zn=!0;const i=new Zt;i.onprogress=e=>{e.loaded=50+e.loaded/2,e.index=n,this.onprogress(e)},i.onloaditem=this.onloaditem,i.onload=this.onload,i.onloadend=e=>{this.#zn=!1,this.onloadend(e)},i.onerror=this.onerror,i.onabort=this.onabort,i.load(function(e){const t=new Uint8Array(e),n=[];if(0===t.length)return n;const i=ie(new Uint8Array([13,10,13,10]));let r=ne(t,i,0);if(void 0===r)throw new Error("Can't find the end of the first multipart header");const o=te(t.slice(0,r)).split("\r\n");let a;for(let e=0;e<o.length;++e)if("-"===o[e][0]&&"-"===o[e][1]){a=o[e];break}if(void 0===a)throw new Error("Can't find the boundary between multi-parts");const s=ie(K(a)),l=a.length;let c=ne(t,s,0);for(;void 0!==r;){const e={},o=te(t.slice(c+l,r)).split("\r\n");for(let t=0;t<o.length;++t){const n=o[t],i=n.indexOf(":");if(-1!==i){const t=n.substring(0,i).trim(),r=n.substring(i+1).trim();e[t]=r}}if(c=ne(t,s,r),void 0===c)break;const a=r+4,u=c-2;e.data=a<u?t.slice(a,u).buffer:new Uint8Array,n.push(e),r=ne(t,i,c+l)}return n}(e))}abort(){this.#zn=!1,this.onabort({}),this.onloadend({})}canLoadFile(e){return!1}canLoadUrl(e,t){if(void 0!==t&&void 0!==t.requestHeaders){const e=function(e){return"Accept"===e.name&&Y(e.value,"multipart/related")};return void 0!==t.requestHeaders.find(e)}return!1}canLoadMemory(e){return!1}loadFileAs(){return nn.ArrayBuffer}loadUrlAs(){return 1}onloadstart(e){}onprogress(e){}onloaditem(e){}onload(e){}onloadend(e){}onerror(e){}onabort(e){}},class{#Xn=!1;setOptions(e){}isLoading(){return!0}#jn(e,t){let n=t;n&&"jpg"!==n||(n="jpeg");const i=new Blob([e],{type:"image/"+n});return window.URL.createObjectURL(i)}load(e,t,n){this.#Xn=!1;const i=new Image;if(i.onload=()=>{try{if(!this.#Xn){this.onprogress({lengthComputable:!0,loaded:100,total:100,index:n,source:t});const e=function(e,t,n){const i=e.width,r=e.height,o=document.createElement("canvas");o.width=i,o.height=r;const a=o.getContext("2d");a.drawImage(e,0,0);const s=a.getImageData(0,0,i,r),l={};"string"==typeof t?l.origin={value:t}:(l.fileName={value:t.name},l.fileType={value:t.type},l.fileLastModifiedDate={value:t.lastModified}),l.imageWidth={value:i},l.imageHeight={value:r};const c=n||0;return l.imageUid={value:c},{data:{image:Jt(i,r,c,Kt(s),1,c.toString()),info:l},source:t}}(i,t,n);this.onloaditem(e),this.onload(e)}}catch(e){this.onerror({error:e,source:t})}finally{this.onloadend({source:t})}},"string"==typeof e)i.src=e;else if("string"==typeof t){const n=t.split(".").pop().toLowerCase();i.src=this.#jn(e,n)}}abort(){this.#Xn=!0,this.onabort({}),this.onloadend({})}canLoadFile(e){return void 0!==e.type&&e.type.match("image.*")}canLoadUrl(e,t){if(void 0!==t&&void 0!==t.requestHeaders){const e=function(e){return"Accept"===e.name&&Y(e.value,"image/")};return void 0!==t.requestHeaders.find(e)}const n=Et(e),i=Z(n.pathname),r="jpeg"===i||"jpg"===i||"png"===i||"gif"===i,o=n.searchParams.get("contentType");return null!=o?"image/jpeg"===o||"image/png"===o||"image/gif"===o:r}canLoadMemory(e){return void 0!==e.filename&&this.canLoadFile({name:e.filename})}loadFileAs(){return nn.DataURL}loadUrlAs(){return 1}onloadstart(e){}onprogress(e){}onloaditem(e){}onload(e){}onloadend(e){}onerror(e){}onabort(e){}},class{setOptions(e){}isLoading(){return!0}#jn(e,t){const n=new Uint8Array(e);let i="";for(let e=0;e<n.byteLength;++e)i+=String.fromCharCode(n[e]);return"data:video/"+t+";base64,"+window.btoa(i)}load(e,t,n){const i=document.createElement("video");if("string"==typeof t){const n=t.split(".").pop().toLowerCase();i.src=this.#jn(e,n)}else i.src=e;i.onloadedmetadata=e=>{try{!function(e,t,n,i,r,o,a){const s=e.videoWidth,l=e.videoHeight,c=Math.ceil(30*e.duration),u={};"string"==typeof o?u.origin={value:o}:(u.fileName={value:o.name},u.fileType={value:o.type},u.fileLastModifiedDate={value:o.lastModified}),u.imageWidth={value:s},u.imageHeight={value:l},u.numberOfFrames={value:c},u.imageUid={value:0};const d=document.createElement("canvas");d.width=s,d.height=l;const S=d.getContext("2d");e.addEventListener("seeked",(function d(p){(function(){i({lengthComputable:!0,loaded:h,total:c,index:a,source:o}),S.drawImage(e,0,0);const n=Kt(S.getImageData(0,0,s,l));0===h?(g=Jt(s,l,1,n,c,a.toString()),t({data:{image:g,info:u},source:o})):g.appendFrameBuffer(n,h),++h})(),m+=1/30,m<=p.target.duration?this.currentTime=m:(n({source:o}),r({source:o}),e.removeEventListener("seeked",d))}),!1);let h=0,g=null,m=0;e.currentTime=m}(e.target,this.onloaditem,this.onload,this.onprogress,this.onloadend,t,n)}catch(e){this.onerror({error:e,source:t}),this.onloadend({source:t})}}}abort(){this.onabort({}),this.onloadend({})}canLoadFile(e){return void 0!==e.type&&e.type.match("video.*")}canLoadUrl(e,t){if(void 0!==t&&void 0!==t.requestHeaders){const e=function(e){return"Accept"===e.name&&Y(e.value,"video/")};return void 0!==t.requestHeaders.find(e)}const n=Z(Et(e).pathname);return"mp4"===n||"ogg"===n||"webm"===n}canLoadMemory(e){return void 0!==e.filename&&this.canLoadFile({name:e.filename})}loadFileAs(){return nn.DataURL}loadUrlAs(){return 1}onloadstart(e){}onprogress(e){}onloaditem(e){}onload(e){}onloadend(e){}onerror(e){}onabort(e){}},class{#zn=!1;setOptions(e){}isLoading(){return this.#zn}#_n="";#Zn=[];#Kn=null;#Jn(e,t,n){this.#Zn.push({filename:this.#_n,data:e});const i=100*this.#Zn.length/this.#Kn.length;if(this.onprogress({lengthComputable:!0,loaded:i/2,total:100,index:n,item:{loaded:i,total:100,source:t}}),this.#Zn.length<this.#Kn.length){const e=this.#Zn.length;this.#_n=this.#Kn[e].name,this.#Kn[e].async("arrayBuffer").then((e=>{this.#Jn(e,t,n)}))}else{const e=new Zt;e.onprogress=e=>{e.loaded=50+e.loaded/2,e.index=n,this.onprogress(e)},e.onloaditem=this.onloaditem,e.onload=this.onload,e.onloadend=e=>{this.#zn=!1,this.onloadend(e)},e.onerror=this.onerror,e.onabort=this.onabort,e.load(this.#Zn)}}load(e,t,n){this.onloadstart({source:t}),this.#zn=!0,en().loadAsync(e).then((e=>{this.#Zn=[],this.#Kn=e.file(/.*\.dcm/);const i=this.#Zn.length;this.#_n=this.#Kn[i].name,this.#Kn[i].async("arrayBuffer").then((e=>{this.#Jn(e,t,n)}))}))}abort(){this.#zn=!1,this.onabort({}),this.onloadend({})}canLoadFile(e){return"zip"===Z(e.name)}canLoadUrl(e,t){if(void 0!==t&&void 0!==t.requestHeaders){const e=function(e){return"Accept"===e.name&&Y(e.value,"application/zip")};return void 0!==t.requestHeaders.find(e)}return"zip"===Z(Et(e).pathname)}canLoadMemory(e){return!(void 0===e["Content-Type"]||!e["Content-Type"].includes("zip"))||void 0!==e.filename&&this.canLoadFile({name:e.filename})}loadFileAs(){return nn.ArrayBuffer}loadUrlAs(){return 1}onloadstart(e){}onprogress(e){}onloaditem(e){}onload(e){}onloadend(e){}onerror(e){}onabort(e){}}],nn={Text:0,ArrayBuffer:1,DataURL:2};class rn{#Sn=null;#$n=[];#gn=null;#mn=0;#pn=0;#F;getDefaultCharacterSet(){return this.#F}setDefaultCharacterSet(e){this.#F=e}#Dn(e){this.#Sn=e,this.#mn=0,this.#pn=0,this.#ei(),this.#Cn()}#ti(e){this.#$n.push(e)}#ei(){this.#$n=[]}#Tn(e){this.#gn=e}#Cn(){this.#gn=null}#In=e=>{this.#mn++,this.#mn===this.#Sn.length&&this.onload({source:this.#Sn})};#Ln=e=>{this.#pn++,this.#pn===2*this.#Sn.length&&this.onloadend({source:this.#Sn})};#Pn(e,t){return n=>{n.source=t,e(n)}}#An(e,t,n){return i=>{e.load(i.target.result,t,n)}}load(e){if(void 0===e||0===e.length)return;this.#Dn(e),this.onloadstart({source:e});const t=new Mt(this.onprogress);t.setNToLoad(e.length);const n=[];for(let e=0;e<tn.length;++e)n.push(new tn[e]);let i=e[0],r=null,o=!1;for(let a=0;a<n.length;++a)if(r=n[a],r.canLoadFile(i)){o=!0,r.setOptions({numberOfFiles:e.length,defaultCharacterSet:this.getDefaultCharacterSet()}),r.onprogress=t.getUndefinedMonoProgressHandler(1),r.onloaditem=this.onloaditem,r.onload=this.#In,r.onloadend=this.#Ln,r.onerror=this.onerror,r.onabort=this.onabort,this.#Tn(r);break}if(!o)throw new Error("No loader found for file: "+i.name);for(let n=0;n<e.length;++n){if(i=e[n],!r.canLoadFile(i))throw new Error("Input file of different type: "+i);const o=new FileReader;this.#ti(o),o.onprogress=this.#Pn(t.getMonoProgressHandler(n,0),i),o.onload=this.#An(r,i,n),o.onloadend=this.#Ln,o.onerror=this.#Pn(this.onerror,i),o.onabort=this.#Pn(this.onabort,i),r.loadFileAs()===nn.Text?o.readAsText(i):r.loadFileAs()===nn.DataURL?o.readAsDataURL(i):r.loadFileAs()===nn.ArrayBuffer&&o.readAsArrayBuffer(i)}}abort(){for(let e=0;e<this.#$n.length;++e)1===this.#$n[e].readyState&&this.#$n[e].abort();this.#gn&&this.#gn.isLoading()&&this.#gn.abort()}onloadstart(e){}onprogress(e){}onloaditem(e){}onload(e){}onloadend(e){}onerror(e){}onabort(e){}}class on{#F;#ni={};#ii=-1;constructor(e){this.#F=e}#ri(){return++this.#ii,this.#ii}loadFiles(e){"json"===e[0].name.split(".").pop().toLowerCase()?this.#oi(e[0]):this.#ai(e)}loadURLs(e,t){"json"===e[0].split(".").pop().toLowerCase()?this.#si(e[0],t):this.#li(e,t)}loadImageObject(e){const t=new Zt;this.#ci(e,t,"image")}abort(){const e=Object.keys(this.#ni);for(let t=0;t<e.length;++t)this.#ni[t].loader.abort(),delete this.#ni[t]}#ai(e){const t=new rn;t.setDefaultCharacterSet(this.#F),this.#ci(e,t,"image")}#li(e,t){const n=new Bt;n.setDefaultCharacterSet(this.#F),this.#ci(e,n,"image",t)}#oi(e){const t=new rn;this.#ci([e],t,"state")}#si(e,t){const n=new Bt;this.#ci([e],n,"state",t)}#ci(e,t,n,i){const r={loadtype:n},o=this.#ri();r.loadid=o,t.onloadstart=e=>{this.#ni[o]={loader:t,isFirstItem:!0},this.#Pn(this.onloadstart,r)(e)},t.onprogress=this.#Pn(this.onprogress,r),t.onloaditem=e=>{const t={loadtype:n,loadid:o};void 0!==this.#ni[o]&&(t.isfirstitem=this.#ni[o].isFirstItem),this.#Pn(this.onloaditem,t)(e),void 0!==this.#ni[o]&&this.#ni[o].isFirstItem&&(this.#ni[o].isFirstItem=!1)},t.onload=this.#Pn(this.onload,r),t.onloadend=e=>{delete this.#ni[o],this.#Pn(this.onloadend,r)(e)},t.onerror=this.#Pn(this.onerror,r),t.onabort=this.#Pn(this.onabort,r);try{t.load(e,i)}catch(e){return this.onerror({error:e,loadid:o}),void this.onloadend({loadid:o})}}#Pn(e,t){return function(n){const i=Object.keys(t);for(let e=0;e<i.length;++e){const r=i[e];n[r]=t[r]}e(n)}}onloadstart(e){}onprogress(e){}onload(e){}onloaditem(e){}onloadend(e){}onerror(e){}onabort(e){}}class an{#ui={};#ue=new ve;length(){return Object.keys(this.#ui).length}reset(){this.#ui=[]}get(e){return this.#ui[e]}setImage(e,t){this.#ui[e].image=t,this.#ge({type:"imageset",value:[t],dataid:e}),t.addEventListener("imagechange",this.#di(e))}addNew(e,t,n){if(void 0!==this.#ui[e])throw new Error("Index already used in storage: "+e);this.#ui[e]={image:t,meta:n},t.addEventListener("imagechange",this.#di(e))}update(e,t,n){const i=this.#ui[e];i.image.appendSlice(t);let r="";r=void 0!==n["00020010"]?"00200013":"imageUid",i.meta=function(e,t,n,i){const r={};if(!n)throw new Error("Cannot merge object with an undefined id key: "+n);if(!Object.prototype.hasOwnProperty.call(e,n))throw new Error("Id key not found in first object while merging: "+n+", obj: "+e);if(!Object.prototype.hasOwnProperty.call(t,n))throw new Error("Id key not found in second object while merging: "+n+", obj: "+t);let o=!1;if(Object.prototype.hasOwnProperty.call(e[n],"merged")&&e[n].merged&&(o=!0),!Object.prototype.hasOwnProperty.call(e[n],i))throw new Error("Id value not found in first object while merging: "+n+", valueKey: "+i+", ojb: "+e);if(!Object.prototype.hasOwnProperty.call(t[n],i))throw new Error("Id value not found in second object while merging: "+n+", valueKey: "+i+", ojb: "+t);let a=e[n][i];const s=t[n][i][0];if(r[n]=e[n],o){for(let e=0;e<a.length;++e)if(a[e]===s)throw new Error("The first object already contains id2: "+s+", id1: "+a);r[n][i].push(s)}else{if(a=a[0],a===s)throw new Error("Cannot merge object with same ids: "+a+", id2: "+s);r[n][i].push(s),r[n].merged=!0}const l=Object.keys(e),c=Object.keys(t).filter((function(e){return l.indexOf(e)<0})),u=l.concat(c);for(let l=0;l<u.length;++l){const c=u[l];if(c!==n){let n,l,u,d,S;if(Object.prototype.hasOwnProperty.call(e,c)&&(n=e[c],Object.prototype.hasOwnProperty.call(n,i)&&(l=n[i])),Object.prototype.hasOwnProperty.call(t,c)&&(u=t[c],Object.prototype.hasOwnProperty.call(u,i)&&(d=u[i])),void 0!==n?S=n:void 0!==u&&(S=u),!ee(l,d))if(o){if(Array.isArray(l)){S[i]={};for(let e=0;e<a.length;++e)S[i][a[e]]=l}else S[i]=l;S[i][s]=d}else{const e={};e[a]=l,e[s]=d,S[i]=e}r[c]=S}}return r}(i.meta,n,r,"value")}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{this.#ue.fireEvent(e)};#di(e){return t=>{t.dataid=e,this.#ge(t)}}}class sn{#Si;#hi=0;constructor(e){this.#Si=e}wheel(e){let t=52;if(1===e.deltaMode&&(t=5.99),this.#hi+=e.deltaY,Math.abs(this.#hi)<t)return;this.#hi=0;const n=e.deltaY<0,i=It(e),r=this.#Si.getLayerGroupByDivId(i.groupDivId).getActiveViewLayer().getViewController(),o=r.getImageSize();o.canScroll3D()?n?r.incrementScrollIndex():r.decrementScrollIndex():o.moreThanOne(3)&&(n?r.incrementIndex(3):r.decrementIndex(3))}}const ln={t(e){const t=e.split(".");if(2!==t.length)throw new Error("Unexpected translation key length.");if("unit"!==t[0])throw new Error("Unexpected translation key prefix.");return{mm:"mm",cm2:"cm²",degree:"°"}[t[1]]}};class cn{#gi;#mi;constructor(e,t){this.#gi=e,this.#mi=t}getBegin(){return this.#gi}getEnd(){return this.#mi}equals(e){return null!==e&&this.getBegin().equals(e.getBegin())&&this.getEnd().equals(e.getEnd())}getDeltaX(){return this.getEnd().getX()-this.getBegin().getX()}getDeltaY(){return this.getEnd().getY()-this.getBegin().getY()}getLength(){return Math.sqrt(this.getDeltaX()*this.getDeltaX()+this.getDeltaY()*this.getDeltaY())}getWorldLength(e,t){let n=null;if(null!==e&&null!==t){const i=this.getDeltaX()*e,r=this.getDeltaY()*t;n=Math.sqrt(i*i+r*r)}return n}getMidpoint(){return new P((this.getBegin().getX()+this.getEnd().getX())/2,(this.getBegin().getY()+this.getEnd().getY())/2)}getSlope(){return this.getDeltaY()/this.getDeltaX()}getIntercept(){return(this.getEnd().getX()*this.getBegin().getY()-this.getBegin().getX()*this.getEnd().getY())/this.getDeltaX()}getInclination(){return 180-180*Math.atan2(this.getDeltaY(),this.getDeltaX())/Math.PI}quantify(e){const t={},n=e.get2DSpacing(),i=this.getWorldLength(n[0],n[1]);return null!==i&&(t.length={value:i,unit:ln.t("unit.mm")}),t}}function un(e,t){const n=e.getDeltaX(),i=e.getDeltaY(),r=t.getDeltaX(),o=t.getDeltaY(),a=n*r+i*o,s=n*o-i*r;return 360-(180-180*Math.atan2(s,a)/Math.PI)}function dn(e,t,n){let i=0,r=0,o=0,a=0;if(0!==e.getSlope()){const s=-1/e.getSlope(),l=t.getY()-s*t.getX(),c=n/(2*Math.sqrt(1+s*s));i=t.getX()-c,r=s*i+l,o=t.getX()+c,a=s*o+l}else i=t.getX(),r=t.getY()-n/2,o=t.getX(),a=t.getY()+n/2;return new cn(new P(i,r),new P(o,a))}function Sn(e,t){return function(e){return null!=e&&(e.includes("median")||e.includes("p25")||e.includes("p75"))}(t)?function(e){const t=hn(e);return e.sort((function(e,t){return e-t})),t.median=gn(e,.5),t.p25=gn(e,.25),t.p75=gn(e,.75),t}(e):hn(e)}function hn(e){let t=e[0],n=t,i=0,r=0,o=0;const a=e.length;for(let s=0;s<a;++s)o=e[s],o<t?t=o:o>n&&(n=o),i+=o,r+=o*o;const s=i/a,l=r/a-s*s;return{min:t,max:n,mean:s,stdDev:Math.sqrt(l)}}function gn(e,t){if(0===e.length)throw new Error("Empty array provided for percentile calculation.");if(t<0||t>1)throw new Error("Invalid ratio provided for percentile calculation: "+t);if(0===t)return e[0];if(1===t)return e[e.length-1];const n=(e.length-1)*t,i=Math.floor(n),r=e[i];return r+(e[i+1]-r)*(n-i)}function mn(){return Math.random().toString(36).substring(2,15)}function pn(e,t,n,i){const r=i.applyZoomScale(3),o={x:Math.abs(r.x),y:Math.abs(r.y)};return new(lt().Ellipse)({x:e,y:t,stroke:"#999",fill:"rgba(100,100,100,0.7",strokeWidth:i.getStrokeWidth(),strokeScaleEnabled:!1,radius:o,radiusX:o.x,radiusY:o.y,name:"anchor",id:n.toString(),dragOnTop:!1,draggable:!0,visible:!1})}class fn{#Si;constructor(e){this.#Si=e}#pi=null;#fi=null;#Di=null;#Ne=null;#yi=!1;#Ci=null;setFactoryList(e){this.#pi=e}setShape(e){if(this.#Di=e,this.#Di){this.#vi();const e=this.#Di.getParent(),t=Object.keys(this.#pi);this.#fi=null;for(let n=0;n<t.length;++n){const i=new this.#pi[t[n]];if(i.isFactoryGroup(e)){this.#fi=i;break}}if(null===this.#fi)throw new Error("Could not find a factory to update shape.");this.#Ti()}}setViewController(e){this.#Ne=e}getShape(){return this.#Di}isActive(){return this.#yi}setDrawEventCallback(e){this.#Ci=e}enable(){this.#yi=!0,this.#Di&&(this.#Ii(!0),this.#Di.getLayer()&&this.#Di.getLayer().draw())}disable(){this.#yi=!1,this.#Di&&(this.#Ii(!1),this.#Di.getLayer()&&this.#Di.getLayer().draw())}resetAnchors(){this.#vi(),this.#Ti(),this.#Ii(!0)}#Li(e){this.#Di&&this.#Di.getParent()&&this.#Di.getParent().find(".anchor").forEach(e)}#Ii(e){this.#Li((function(t){t.visible(e)}))}setAnchorsActive(e){let t=null;t=e?e=>{this.#Pi(e)}:e=>{this.#Oi(e)},this.#Li(t)}#vi(){this.#Li((function(e){e.remove()}))}#Ti(){if(!this.#Di||!this.#Di.getLayer())return;const e=this.#Di.getParent(),t=this.#fi.getAnchors(this.#Di,this.#Si.getStyle());for(let n=0;n<t.length;++n)this.#Pi(t[n]),e.add(t[n])}#wi(e){const t=e.getParent(),n=e.id(),i=e.x(),r=e.y();return{getParent:function(){return t},id:function(){return n},x:function(){return i},y:function(){return r}}}#Pi(e){let t=null;const n=ut(this.#Di);e.on("dragstart.edit",(e=>{const n=e.target;t=this.#wi(n),e.cancelBubble=!0})),e.on("dragmove.edit",(e=>{const t=e.target,n=It(e.evt);!function(e,t){const n=t.getParent();Dn(t,{x:-n.x(),y:-n.y()},{x:e.x-n.x(),y:e.y-n.y()})}(this.#Si.getLayerGroupByDivId(n.groupDivId).getActiveDrawLayer().getBaseSize(),t),this.#fi.update(t,this.#Si.getStyle(),this.#Ne),t.getLayer()?t.getLayer().draw():g.warn("No layer to draw the anchor!"),e.cancelBubble=!0})),e.on("dragend.edit",(e=>{const i=e.target,r=this.#wi(i),o=new ht(n,this.#fi,t,r,i.getLayer(),this.#Ne,this.#Si.getStyle());o.onExecute=this.#Ci,o.onUndo=this.#Ci,o.execute(),this.#Si.addToUndoStack(o),t=r,e.cancelBubble=!0})),e.on("mousedown touchstart",(e=>{e.target.moveToTop()})),e.on("mouseover.edit",(e=>{const t=e.target;t.stroke("#ddd"),t.getLayer()?t.getLayer().draw():g.warn("No layer to draw the anchor!")})),e.on("mouseout.edit",(e=>{const t=e.target;t.stroke("#999"),t.getLayer()?t.getLayer().draw():g.warn("No layer to draw the anchor!")}))}#Oi(e){e.off("dragstart.edit"),e.off("dragmove.edit"),e.off("dragend.edit"),e.off("mousedown touchstart"),e.off("mouseover.edit"),e.off("mouseout.edit")}}function Dn(e,t,n){let i=!1;return e.x()<t.x?(e.x(t.x),i=!0):e.x()>n.x&&(e.x(n.x),i=!0),e.y()<t.y?(e.y(t.y),i=!0):e.y()>n.y&&(e.y(n.y),i=!0),i}class yn{#Ai=[];getPoint(e){return this.#Ai[e]}getLength(){return this.#Ai.length}addPoint(e){this.#Ai.push(e)}addPoints(e){this.#Ai=this.#Ai.concat(e)}}class Cn{getGroupName(){return"roi-group"}getNPoints(){}getTimeout(){return 100}isFactoryGroup(e){return this.getGroupName()===e.name()}create(e,t,n){const i=new yn;i.addPoints(e);const r=[];for(let e=0;e<i.getLength();++e)r.push(i.getPoint(e).getX()),r.push(i.getPoint(e).getY());const o=new(lt().Line)({points:r,stroke:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,name:"shape",closed:!0}),a=new(lt().Text)({fontSize:t.getFontSize(),fontFamily:t.getFontFamily(),fill:t.getLineColour(),name:"text"});let s="";s="",a.setText(""),a.meta={textExpr:"",quantification:{}};const l=new(lt().Label)({x:i.getPoint(0).getX(),y:i.getPoint(0).getY()+t.scale(10),scale:t.applyZoomScale(1),visible:0!=="".length,name:"label"});l.add(a),l.add(new(lt().Tag)({fill:t.getLineColour(),opacity:t.getTagOpacity()}));const c=new(lt().Group);return c.name(this.getGroupName()),c.add(l),c.add(o),c.visible(!0),c}getAnchors(e,t){const n=e.points(),i=[];for(let r=0;r<n.length;r+=2){const o=n[r]+e.x(),a=n[r+1]+e.y(),s=r.toString();i.push(pn(o,a,s,t))}return i}update(e,t,n){const i=e.getParent(),r=i.getChildren((function(e){return"shape"===e.name()}))[0],o=i.getChildren((function(e){return"label"===e.name()}))[0],a=i.getChildren((function(t){return t.id()===e.id()}))[0];a.x(e.x()),a.y(e.y());const s=r.points();s[e.id()]=e.x()-r.x(),s[e.id()+1]=e.y()-r.y(),r.points(s);const l=o.getText();l.setText(l.meta.textExpr);const c={x:s[0]+r.x(),y:s[1]+r.y()+t.scale(10)};o.position(c)}}var vn=o(812),Tn=o.n(vn);class In{constructor(e,t){this.pointArray=e?e.slice():[],this.controlPointIndexArray=t?t.slice():[]}getPoint(e){return this.pointArray[e]}isControlPoint(e){const t=this.pointArray.indexOf(e);if(-1!==t)return-1!==this.controlPointIndexArray.indexOf(t);throw new Error("Error: isControlPoint called with not in list point.")}getLength(){return this.pointArray.length}addPoint(e){this.pointArray.push(e)}addControlPoint(e){const t=this.pointArray.indexOf(e);if(-1===t)throw new Error("Cannot mark a non registered point as control point.");this.controlPointIndexArray.push(t)}addPoints(e){this.pointArray=this.pointArray.concat(e)}appenPath(e){const t=this.pointArray.length;this.pointArray=this.pointArray.concat(e.pointArray);const n=[];for(let i=0;i<e.controlPointIndexArray.length;++i)n[i]=e.controlPointIndexArray[i]+t;this.controlPointIndexArray=this.controlPointIndexArray.concat(n)}}class Ln{constructor(e,t){this.bucketCount=1<<e,this.mask=this.bucketCount-1,this.size=0,this.loc=0,this.cost=void 0!==t?t:function(e){return e},this.buckets=this.buildArray(this.bucketCount)}push(e){const t=this.getBucket(e);e.next=this.buckets[t],this.buckets[t]=e,this.size++}pop(){if(0===this.size)throw new Error("Cannot pop, bucketQueue is empty.");for(;null===this.buckets[this.loc];)this.loc=(this.loc+1)%this.bucketCount;const e=this.buckets[this.loc];return this.buckets[this.loc]=e.next,e.next=null,this.size--,e}remove(e){if(!e)return!1;const t=this.getBucket(e);let n=this.buckets[t];for(;null!==n&&(null===n.next||e.x!==n.next.x||e.y!==n.next.y);)n=n.next;return null!==n&&(n.next=n.next.next,this.size--,!0)}isEmpty(){return 0===this.size}getBucket(e){return this.cost(e)&this.mask}buildArray(e){const t=new Array(e);for(let e=0;e<t.length;e++)t[e]=null;return t}}const Pn=2/(3*Math.PI);function On(e,t,n,i,r){const o=e[i][n],a=t[i][n];let s=Math.sqrt(o*o+a*a);s=Math.max(s,1e-100),r.x=o/s,r.y=a/s}class wn{constructor(){this.width=-1,this.height=-1,this.curPoint=null,this.searchGranBits=8,this.searchGran=1<<this.searchGranBits,this.pointsPerPost=500,this.greyscale=null,this.laplace=null,this.gradient=null,this.gradX=null,this.gradY=null,this.parents=null,this.working=!1,this.trained=!1,this.trainingPoints=null,this.edgeWidth=2,this.trainingLength=32,this.edgeGran=256,this.edgeTraining=null,this.gradPointsNeeded=32,this.gradGran=1024,this.gradTraining=null,this.insideGran=256,this.insideTraining=null,this.outsideGran=256,this.outsideTraining=null}getTrainingIdx(e,t){return Math.round((e-1)*t)}getTrainedEdge(e){return this.edgeTraining[this.getTrainingIdx(this.edgeGran,e)]}getTrainedGrad(e){return this.gradTraining[this.getTrainingIdx(this.gradGran,e)]}getTrainedInside(e){return this.insideTraining[this.getTrainingIdx(this.insideGran,e)]}getTrainedOutside(e){return this.outsideTraining[this.getTrainingIdx(this.outsideGran,e)]}setWorking(e){this.working=e}setDimensions(e,t){this.width=e,this.height=t}setData(e){if(-1===this.width||-1===this.height)throw new Error("Dimensions have not been set.");this.greyscale=function(e,t,n){const i={data:[]};for(let r=0;r<n;r++){i.data[r]=[];for(let n=0;n<t;n++){const o=4*(r*t+n);i.data[r][n]=(e[o]+e[o+1]+e[o+2])/765}}return i.dx=function(e,t){return e+1===this.data[t].length&&e--,this.data[t][e+1]-this.data[t][e]},i.dy=function(e,t){return t+1===this.data.length&&t--,this.data[t][e]-this.data[t+1][e]},i.gradMagnitude=function(e,t){const n=this.dx(e,t),i=this.dy(e,t);return Math.sqrt(n*n+i*i)},i.laplace=function(e,t){let n=-16*this.data[t][e];return n+=this.data[t-2][e],n+=this.data[t-1][e-1]+2*this.data[t-1][e]+this.data[t-1][e+1],n+=this.data[t][e-2]+2*this.data[t][e-1]+2*this.data[t][e+1]+this.data[t][e+2],n+=this.data[t+1][e-1]+2*this.data[t+1][e]+this.data[t+1][e+1],n+=this.data[t+2][e],n},i}(e,this.width,this.height),this.laplace=function(e){const t=[];t[0]=[],t[1]=[];for(let n=1;n<e.data.length;n++)t[0][n]=1,t[1][n]=1;for(let n=2;n<e.data.length-2;n++){t[n]=[],t[n][0]=1,t[n][1]=1;for(let i=2;i<e.data[n].length-2;i++)t[n][i]=e.laplace(i,n)>.33?0:1;t[n][e.data[n].length-2]=1,t[n][e.data[n].length-1]=1}t[e.data.length-2]=[],t[e.data.length-1]=[];for(let n=1;n<e.data.length;n++)t[e.data.length-2][n]=1,t[e.data.length-1][n]=1;return t}(this.greyscale),this.gradient=function(e){const t=[];let n=0,i=0,r=0;for(r=0;r<e.data.length-1;r++){for(t[r]=[],i=0;i<e.data[r].length-1;i++)t[r][i]=e.gradMagnitude(i,r),n=Math.max(t[r][i],n);t[r][e.data[r].length-1]=t[r][e.data.length-2]}t[e.data.length-1]=[];for(let n=0;n<t[0].length;n++)t[e.data.length-1][n]=t[e.data.length-2][n];for(r=0;r<t.length;r++)for(i=0;i<t[r].length;i++)t[r][i]=1-t[r][i]/n;return t}(this.greyscale),this.gradX=function(e){const t=[];for(let n=0;n<e.data.length;n++){t[n]=[];for(let i=0;i<e.data[n].length-1;i++)t[n][i]=e.dx(i,n);t[n][e.data[n].length-1]=t[n][e.data[n].length-2]}return t}(this.greyscale),this.gradY=function(e){const t=[];for(let n=0;n<e.data.length-1;n++){t[n]=[];for(let i=0;i<e.data[n].length;i++)t[n][i]=e.dy(i,n)}t[e.data.length-1]=[];for(let n=0;n<e.data[0].length;n++)t[e.data.length-1][n]=t[e.data.length-2][n];return t}(this.greyscale);const t=function(e,t,n,i){const r={inside:[],outside:[]},o={x:-1,y:-1};for(let a=0;a<t.length;a++){r.inside[a]=[],r.outside[a]=[];for(let s=0;s<t[a].length;s++){On(t,n,s,a,o);let l=Math.round(s+e*o.y),c=Math.round(a-e*o.x),u=Math.round(s-e*o.y),d=Math.round(a+e*o.x);l=Math.max(Math.min(l,t[a].length-1),0),u=Math.max(Math.min(u,t[a].length-1),0),c=Math.max(Math.min(c,t.length-1),0),d=Math.max(Math.min(d,t.length-1),0),r.inside[a][s]=i.data[c][l],r.outside[a][s]=i.data[d][u]}}return r}(this.edgeWidth,this.gradX,this.gradY,this.greyscale);this.inside=t.inside,this.outside=t.outside,this.edgeTraining=[],this.gradTraining=[],this.insideTraining=[],this.outsideTraining=[]}findTrainingPoints(e){const t=[];if(null!==this.parents)for(let n=0;n<this.trainingLength&&e;n++)t.push(e),e=this.parents[e.y][e.x];return t}resetTraining(){this.trained=!1}doTraining(e){if(this.trainingPoints=this.findTrainingPoints(e),this.trainingPoints.length<8)return;const t=[];this.calculateTraining(t,this.edgeGran,this.greyscale,this.edgeTraining),this.calculateTraining(t,this.gradGran,this.gradient,this.gradTraining),this.calculateTraining(t,this.insideGran,this.inside,this.insideTraining),this.calculateTraining(t,this.outsideGran,this.outside,this.outsideTraining),this.trainingPoints.length<this.gradPointsNeeded&&this.addInStaticGrad(this.trainingPoints.length,this.gradPointsNeeded),this.trained=!0}calculateTraining(e,t,n,i){let r=0;for(e.length=t,r=0;r<t;r++)e[r]=0;let o=1;for(r=0;r<this.trainingPoints.length;r++){const i=this.trainingPoints[r],a=this.getTrainingIdx(t,n[i.y][i.x]);e[a]+=1,o=Math.max(o,e[a])}for(r=0;r<t;r++)e[r]=1-e[r]/o;!function(e,t){t[0]=.4*e[0]+.5*e[1]+.1*e[1],t[1]=.25*e[0]+.4*e[1]+.25*e[2]+.1*e[3];for(let n=2;n<e.length-2;n++)t[n]=.05*e[n-2]+.25*e[n-1]+.4*e[n]+.25*e[n+1]+.05*e[n+2];const n=e.length;t[n-2]=.25*e[n-1]+.4*e[n-2]+.25*e[n-3]+.1*e[n-4],t[n-1]=.4*e[n-1]+.5*e[n-2]+.1*e[n-3]}(e,i)}addInStaticGrad(e,t){for(let n=0;n<this.gradGran;n++)this.gradTraining[n]=Math.min(this.gradTraining[n],1-n*(t-e)/(t*this.gradGran))}gradDirection(e,t,n,i){return function(e,t,n,i,r,o){const a={x:-1,y:-1},s={x:-1,y:-1};On(e,t,n,i,a),On(e,t,r,o,s);let l=a.y*(r-n)-a.x*(o-i),c=s.y*(r-n)-s.x*(o-i);return l<0&&(l=-l,c=-c),n!==r&&i!==o&&(l*=Math.SQRT1_2,c*=Math.SQRT1_2),Pn*(Math.acos(l)+Math.acos(c))}(this.gradX,this.gradY,e,t,n,i)}dist(e,t,n,i){let r=this.gradient[i][n];e!==n&&t!==i||(r*=Math.SQRT1_2);const o=this.laplace[i][n],a=this.gradDirection(e,t,n,i);return this.trained?.3*this.getTrainedGrad(r)+.3*o+.1*(a+this.getTrainedEdge(this.greyscale.data[t][e])+this.getTrainedInside(this.inside[t][e])+this.getTrainedOutside(this.outside[t][e])):.43*r+.43*o+.11*a}adj(e){const t=[],n=Math.max(e.x-1,0),i=Math.max(e.y-1,0),r=Math.min(e.x+1,this.greyscale.data[0].length-1),o=Math.min(e.y+1,this.greyscale.data.length-1);let a=0;for(let s=i;s<=o;s++)for(let i=n;i<=r;i++)i===e.x&&s===e.y||(t[a++]={x:i,y:s});return t}#xi=e=>Math.round(this.searchGran*this.cost[e.y][e.x]);setPoint(e){this.setWorking(!0),this.curPoint=e;let t=0,n=0;for(this.visited=[],n=0;n<this.height;n++)for(this.visited[n]=[],t=0;t<this.width;t++)this.visited[n][t]=!1;for(this.parents=[],n=0;n<this.height;n++)this.parents[n]=[];for(this.cost=[],n=0;n<this.height;n++)for(this.cost[n]=[],t=0;t<this.width;t++)this.cost[n][t]=Number.MAX_VALUE;this.cost[e.y][e.x]=0,this.pq=new Ln(this.searchGranBits,this.#xi),this.pq.push(e)}doWork(){if(!this.working)return;this.timeout=null;let e=0;const t=[];for(;!this.pq.isEmpty()&&e<this.pointsPerPost;){const n=this.pq.pop();t.push(n),t.push(this.parents[n.y][n.x]),this.visited[n.y][n.x]=!0;const i=this.adj(n);for(let e=0;e<i.length;e++){const t=i[e],r=this.cost[n.y][n.x]+this.dist(n.x,n.y,t.x,t.y);r<this.cost[t.y][t.x]&&(this.cost[t.y][t.x]!==Number.MAX_VALUE&&this.pq.remove(t),this.cost[t.y][t.x]=r,this.parents[t.y][t.x]=n,this.pq.push(t))}e++}return t}}class An{#bi;#Fi;constructor(e,t){this.#bi=e,this.#Fi=t}getCenter(){return this.#bi}getRadius(){return this.#Fi}equals(e){return null!==e&&this.getCenter().equals(e.getCenter())&&this.getRadius()===e.getRadius()}getSurface(){return Math.PI*this.getRadius()*this.getRadius()}getWorldSurface(e,t){return function(e,t,n){let i=null;return null!==t&&null!==n&&(i=e*t*n),i}(this.getSurface(),e,t)}getRound(){const e=this.getCenter().getX(),t=this.getCenter().getY(),n=this.getRadius(),i=Math.pow(n,2),r=t+n,o=[];for(let a=t-n;a<r;++a){const n=i-Math.pow(a-t,2);if(Math.abs(n)<1e-7)continue;const r=Math.sqrt(n);r<.5||o.push([[Math.round(e-r),Math.round(a)],[Math.round(e+r),Math.round(a)]])}return o}quantify(e,t){const n={},i=e.get2DSpacing(),r=this.getWorldSurface(i[0],i[1]);if(null!==r&&(n.surface={value:r/100,unit:ln.t("unit.cm2")}),e.canQuantifyImage()){const i=this.getRound();if(0!==i.length){const r=Sn(e.getImageVariableRegionValues(i),t);n.min={value:r.min,unit:""},n.max={value:r.max,unit:""},n.mean={value:r.mean,unit:""},n.stdDev={value:r.stdDev,unit:""},void 0!==r.median&&(n.median={value:r.median,unit:""}),void 0!==r.p25&&(n.p25={value:r.p25,unit:""}),void 0!==r.p75&&(n.p75={value:r.p75,unit:""})}}return n}}class xn{#bi;#Ri;#Ei;constructor(e,t,n){this.#bi=e,this.#Ri=t,this.#Ei=n}getCenter(){return this.#bi}getA(){return this.#Ri}getB(){return this.#Ei}equals(e){return null!==e&&this.getCenter().equals(e.getCenter())&&this.getA()===e.getA()&&this.getB()===e.getB()}getSurface(){return Math.PI*this.getA()*this.getB()}getWorldSurface(e,t){return function(e,t,n){let i=null;return null!==t&&null!==n&&(i=e*t*n),i}(this.getSurface(),e,t)}getRound(){const e=this.getCenter().getX(),t=this.getCenter().getY(),n=this.getA(),i=this.getB(),r=n/i,o=Math.pow(i,2),a=t+i,s=[];for(let n=t-i;n<a;++n){const i=o-Math.pow(n-t,2);if(Math.abs(i)<1e-7)continue;const a=r*Math.sqrt(i);a<.5||s.push([[Math.round(e-a),Math.round(n)],[Math.round(e+a),Math.round(n)]])}return s}quantify(e,t){const n={},i=e.get2DSpacing(),r=this.getWorldSurface(i[0],i[1]);if(null!==r&&(n.surface={value:r/100,unit:ln.t("unit.cm2")}),e.canQuantifyImage()){const i=this.getRound();if(0!==i.length){const r=Sn(e.getImageVariableRegionValues(i),t);n.min={value:r.min,unit:""},n.max={value:r.max,unit:""},n.mean={value:r.mean,unit:""},n.stdDev={value:r.stdDev,unit:""},void 0!==r.median&&(n.median={value:r.median,unit:""}),void 0!==r.p25&&(n.p25={value:r.p25,unit:""}),void 0!==r.p75&&(n.p75={value:r.p75,unit:""})}}return n}}class bn{#gi;#mi;constructor(e,t){this.#gi=new P(Math.min(e.getX(),t.getX()),Math.min(e.getY(),t.getY())),this.#mi=new P(Math.max(e.getX(),t.getX()),Math.max(e.getY(),t.getY()))}getBegin(){return this.#gi}getEnd(){return this.#mi}equals(e){return null!==e&&this.getBegin().equals(e.getBegin())&&this.getEnd().equals(e.getEnd())}getSurface(){const e=this.getBegin(),t=this.getEnd();return Math.abs(t.getX()-e.getX())*Math.abs(t.getY()-e.getY())}getWorldSurface(e,t){return function(e,t,n){let i=null;return null!==t&&null!==n&&(i=e*t*n),i}(this.getSurface(),e,t)}getRealWidth(){return this.getEnd().getX()-this.getBegin().getX()}getRealHeight(){return this.getEnd().getY()-this.getBegin().getY()}getWidth(){return Math.abs(this.getRealWidth())}getHeight(){return Math.abs(this.getRealHeight())}getRound(){return{min:this.getBegin().getRound(),max:this.getEnd().getRound()}}quantify(e,t){const n={},i=e.get2DSpacing(),r=this.getWorldSurface(i[0],i[1]);if(null!==r&&(n.surface={value:r/100,unit:ln.t("unit.cm2")}),e.canQuantifyImage()){const i=this.getRound(),r=Sn(e.getImageRegionValues(i.min,i.max),t);n.min={value:r.min,unit:""},n.max={value:r.max,unit:""},n.mean={value:r.mean,unit:""},n.stdDev={value:r.stdDev,unit:""},void 0!==r.median&&(n.median={value:r.median,unit:""}),void 0!==r.p25&&(n.p25={value:r.p25,unit:""}),void 0!==r.p75&&(n.p75={value:r.p75,unit:""})}return n}}class Fn{#qi=0;#Ui=0;getMin(){return this.#qi}setMin(e){this.#qi=e}getMax(){return this.#Ui}setMax(e){this.#Ui=e}getName(){return"Threshold"}#Qi=null;setOriginalImage(e){this.#Qi=e}getOriginalImage(){return this.#Qi}update(){const e=this.getOriginalImage(),t=e.getDataRange().min;return e.transform((e=>e<this.getMin()||e>this.getMax()?t:e))}}class Rn{getName(){return"Sharpen"}#Qi=null;setOriginalImage(e){this.#Qi=e}getOriginalImage(){return this.#Qi}update(){return this.getOriginalImage().convolute2D([0,-1,0,-1,5,-1,0,-1,0])}}class En{getName(){return"Sobel"}#Qi=null;setOriginalImage(e){this.#Qi=e}getOriginalImage(){return this.#Qi}update(){const e=this.getOriginalImage(),t=e.convolute2D([1,0,-1,2,0,-2,1,0,-1]),n=e.convolute2D([1,2,1,0,0,0,-1,-2,-1]);return t.compose(n,(function(e,t){return Math.sqrt(e*e+t*t)}))}}class qn{#Mi;#Si;constructor(e,t){this.#Mi=e,this.#Si=t}getName(){return"Filter-"+this.#Mi.getName()}execute(){this.#Si.setLastImage(this.#Mi.update()),this.#Si.render(0);const e={type:"filterrun",id:this.getName()};this.onExecute(e)}undo(){this.#Si.setLastImage(this.#Mi.getOriginalImage()),this.#Si.render(0);const e={type:"filterundo",id:this.getName()};this.onUndo(e)}onExecute(e){}onUndo(e){}}const Un={WindowLevel:class{#Si;#Bi=!1;#Ni;constructor(e){this.#Si=e,this.#Ni=new sn(e)}mousedown=e=>{this.#Bi=!0,this.x0=e._x,this.y0=e._y};mousemove=e=>{if(!this.#Bi)return;const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId).getActiveViewLayer().getViewController(),i=e._x-this.x0,o=this.y0-e._y,a=n.getImageRescaledDataRange(),s=.01*(a.max-a.min),l=parseInt(n.getWindowLevel().center,10),c=parseInt(n.getWindowLevel().width,10),u=l+Math.round(o*s);let d=c+Math.round(i*s);var S;d=(S=d)<1?1:S,n.addWindowLevelPresets({manual:{wl:[new r(u,d)],name:"manual"}}),n.setWindowLevelPreset("manual"),this.x0=e._x,this.y0=e._y};mouseup=e=>{this.#Bi&&(this.#Bi=!1)};mouseout=e=>{this.mouseup(e)};touchstart=e=>{this.mousedown(e)};touchmove=e=>{this.mousemove(e)};touchend=e=>{this.mouseup(e)};dblclick=e=>{const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId).getActiveViewLayer(),i=n.displayToPlaneIndex(e._x,e._y),r=n.getViewController(),o=this.#Si.getImage(n.getDataIndex());r.setWindowLevel(o.getRescaledValueAtIndex(r.getCurrentIndex().getWithNew2D(i.get(0),i.get(1))),parseInt(r.getWindowLevel().width,10))};wheel=e=>{this.#Ni.wheel(e)};keydown=e=>{e.context="WindowLevel",this.#Si.onKeydown(e)};activate(e){}init(){}},Scroll:class{#Si;#Bi=!1;#Ni;#Vi;constructor(e){this.#Si=e,this.#Ni=new sn(e)}#Gi=!1;mousedown=e=>{this.#ki();const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId).getActiveViewLayer(),i=n.getViewController();i.isPlaying()&&i.stop(),this.#Bi=!0,this.x0=e._x,this.y0=e._y;const r=n.displayToPlanePos(e._x,e._y),o=i.getPositionFromPlanePoint(r.x,r.y);i.setCurrentPosition(o)};mousemove=e=>{if(!this.#Bi)return void(this.#Gi&&this.#Hi(e));const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId).getActiveViewLayer().getViewController(),i=e._y-this.y0,r=Math.abs(i)>15;r&&n.canScroll()&&(i>0?n.decrementScrollIndex():n.incrementScrollIndex());const o=e._x-this.x0,a=Math.abs(o)>15,s=n.getImageSize();a&&s.moreThanOne(3)&&(o>0?n.incrementIndex(3):n.decrementIndex(3)),a&&(this.x0=e._x),r&&(this.y0=e._y)};mouseup=e=>{this.#Bi&&(this.#Bi=!1)};mouseout=e=>{this.mouseup(e),this.#ki()};touchstart=e=>{this.#Vi=setTimeout(this.dblclick,500),this.mousedown(e)};touchmove=e=>{null!==this.#Vi&&(clearTimeout(this.#Vi),this.#Vi=null),this.mousemove(e)};touchend=e=>{null!==this.#Vi&&(clearTimeout(this.#Vi),this.#Vi=null),this.mouseup(e)};wheel=e=>{this.#Ni.wheel(e)};keydown=e=>{e.context="Scroll",this.#Si.onKeydown(e)};dblclick=e=>{const t=It(e);this.#Si.getLayerGroupByDivId(t.groupDivId).getActiveViewLayer().getViewController().play()};#Hi(e){this.#ki();const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId).getActiveViewLayer(),i=n.getViewController(),r=n.displayToPlanePos(e._x,e._y),o=i.getPositionFromPlanePoint(r.x,r.y),a=i.getRescaledImageValue(o);if(void 0!==a){const t=document.createElement("span");t.id="scroll-tooltip",document.getElementById(n.getId()).parentElement.appendChild(t),t.style.left=e._x+10+"px",t.style.top=e._y+10+"px";let r=J(a,3).toString();void 0!==i.getPixelUnit()&&(r+=" "+i.getPixelUnit()),t.appendChild(document.createTextNode(r))}}#ki(){const e=document.getElementById("scroll-tooltip");e&&e.remove()}activate(e){e||this.#ki()}setFeatures(e){void 0!==e.displayTooltip&&(this.#Gi=e.displayTooltip)}init(){}},ZoomAndPan:class{#Si;#Bi=!1;constructor(e){this.#Si=e}mousedown=e=>{this.#Bi=!0,this.x0=e._x,this.y0=e._y};twotouchdown=e=>{this.#Bi=!0,this.x0=e._x,this.y0=e._y;const t=new P(e._x,e._y),n=new P(e._x1,e._y1);this.line0=new cn(t,n),this.midPoint=this.line0.getMidpoint()};mousemove=e=>{if(!this.#Bi)return;const t=e._x-this.x0,n=e._y-this.y0,i=It(e),r=this.#Si.getLayerGroupByDivId(i.groupDivId),o=r.getActiveViewLayer(),a=o.getViewController(),s=o.displayToPlaneScale(t,n),l=a.getOffset3DFromPlaneOffset(s);r.addTranslation({x:l.getX(),y:l.getY(),z:l.getZ()}),r.draw(),this.x0=e._x,this.y0=e._y};twotouchmove=e=>{if(!this.#Bi)return;const t=new P(e._x,e._y),n=new P(e._x1,e._y1),i=new cn(t,n).getLength()/this.line0.getLength(),r=It(e),o=this.#Si.getLayerGroupByDivId(r.groupDivId),a=o.getActiveViewLayer(),s=a.getViewController();if(1===i){const t=e._y-this.y0;if(Math.abs(t)<15)return;s.canScroll()&&(t>0?s.incrementScrollIndex():s.decrementScrollIndex())}else{const e=(i-1)/10;if(Math.abs(e)%.1<=.05){const t=a.displayToMainPlanePos(this.midPoint.getX(),this.midPoint.getY()),n=s.getPlanePositionFromPlanePoint(t);o.addScale(e,n),o.draw()}}};mouseup=e=>{this.#Bi&&(this.#Bi=!1)};mouseout=e=>{this.mouseup(e)};touchstart=e=>{const t=e.targetTouches;1===t.length?this.mousedown(e):2===t.length&&this.twotouchdown(e)};touchmove=e=>{const t=e.targetTouches;1===t.length?this.mousemove(e):2===t.length&&this.twotouchmove(e)};touchend=e=>{this.mouseup(e)};wheel=e=>{const t=-e.deltaY/500,n=It(e),i=this.#Si.getLayerGroupByDivId(n.groupDivId),r=i.getActiveViewLayer(),o=r.getViewController(),a=r.displayToMainPlanePos(e._x,e._y),s=o.getPlanePositionFromPlanePoint(a);i.addScale(t,s),i.draw()};keydown=e=>{e.context="ZoomAndPan",this.#Si.onKeydown(e)};activate(e){}init(){}},Opacity:class{#Si;#Bi=!1;#Ni;constructor(e){this.#Si=e,this.#Ni=new sn(e)}mousedown=e=>{this.#Bi=!0,this.x0=e._x,this.y0=e._y};mousemove=e=>{if(!this.#Bi)return;const t=e._x-this.x0;if(Math.abs(t)>15){const n=It(e),i=this.#Si.getLayerGroupByDivId(n.groupDivId).getActiveViewLayer(),r=i.getOpacity();i.setOpacity(r+t/200),i.draw(),this.x0=e._x}};mouseup=e=>{this.#Bi&&(this.#Bi=!1)};mouseout=e=>{this.mouseup(e)};touchstart=e=>{this.mousedown(e)};touchmove=e=>{this.mousemove(e)};touchend=e=>{this.mouseup(e)};wheel=e=>{this.#Ni.wheel(e)};keydown=e=>{e.context="Opacity",this.#Si.onKeydown(e)};activate(e){}init(){}},Draw:class{#Si;#Ni;#Wi;#zi;#Ot;constructor(e){this.#Si=e,this.#Ni=new sn(e),this.#Wi=new fn(e),this.#Wi.setDrawEventCallback(this.#ge),this.#Ot=e.getStyle(),this.#zi=new(lt().Group);const t=new(lt().Line)({points:[-10,-10,10,10],stroke:"red"}),n=new(lt().Line)({points:[10,-10,-10,10],stroke:"red"});this.#zi.width(20),this.#zi.height(20),this.#zi.add(t),this.#zi.add(n)}#Bi=!1;#pi=null;#fi=null;#Yi=null;#Xi=null;#ji;#Ai=[];#_i=null;#Zi;#Ki;#Ji="pointer";#k={};mousedown=e=>{if(this.#Bi)return;const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId),i=n.getActiveDrawLayer().getKonvaStage(),r=i.getIntersection({x:e._x,y:e._y});if(this.#Ot.setZoomScale(i.scale()),r){const e=r.getParent().find(".shape")[0];if(e&&e!==this.#Wi.getShape()){this.#Wi.disable(),this.#Wi.setShape(e);const t=n.getActiveViewLayer().getViewController();this.#Wi.setViewController(t),this.#Wi.enable()}}else{this.#Wi.disable(),this.#Wi.setShape(null),this.#Wi.setViewController(null),this.#Bi=!0,this.#fi=new this.#pi[this.#ji],this.#Ai=[];const t=n.getActiveViewLayer().displayToPlanePos(e._x,e._y);this.#_i=new P(t.x,t.y),this.#Ai.push(this.#_i)}};mousemove=e=>{if(!this.#Bi)return;const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId),i=n.getActiveViewLayer().displayToPlanePos(e._x,e._y);(Math.abs(i.x-this.#_i.getX())>0||Math.abs(i.y-this.#_i.getY())>0)&&(1!==this.#Ai.length&&void 0!==this.#Ai[this.#Ai.length-1].tmp&&this.#Ai.pop(),this.#_i=new P(i.x,i.y),this.#_i.tmp=!0,this.#Ai.push(this.#_i),this.#$i(this.#Ai,n))};mouseup=e=>{if(this.#Bi)if(0!==this.#Ai.length)if(this.#Ai.length===this.#fi.getNPoints()){const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId);this.#er(this.#Ai,n),this.#Bi=!1}else void 0!==this.#Ai[this.#Ai.length-1].tmp&&delete this.#Ai[this.#Ai.length-1].tmp;else g.warn("Draw mouseup but no points...")};dblclick=e=>{if(void 0!==this.#fi.getNPoints())return;if(!this.#Bi)return;if(0===this.#Ai.length)return void g.warn("Draw dblclick but no points...");const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId);this.#er(this.#Ai,n),this.#Bi=!1};mouseout=e=>{this.mouseup(e)};touchstart=e=>{this.mousedown(e)};touchmove=e=>{if(!this.#Bi)return;const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId),i=n.getActiveViewLayer().displayToPlanePos(e._x,e._y);(Math.abs(i.x-this.#_i.getX())>0||Math.abs(i.y-this.#_i.getY())>0)&&(1!==this.#Ai.length&&this.#Ai.pop(),this.#_i=new P(i.x,i.y),this.#Ai.push(this.#_i),this.#Ai.length<this.#fi.getNPoints()&&(clearTimeout(this.timer),this.timer=setTimeout((()=>{this.#Ai.push(this.#_i)}),this.#fi.getTimeout())),this.#$i(this.#Ai,n))};touchend=e=>{this.dblclick(e)};wheel=e=>{this.#Ni.wheel(e)};keydown=e=>{let t;if(this.#Bi||(e.context="Draw",this.#Si.onKeydown(e)),("Delete"===e.key||"Backspace"===e.key)&&this.#Wi.isActive()){const e=this.#Wi.getShape().getParent();t=e.getLayer();const n=ut(e.getChildren(mt)[0]),i=new gt(e,n,t);i.onExecute=this.#ge,i.onUndo=this.#ge,i.execute(),this.#Si.addToUndoStack(i)}"Escape"===e.key&&null!==this.#Xi&&(t=this.#Xi.getLayer(),this.#Xi.destroy(),this.#Xi=null,this.#Bi=!1,this.#Ai=[],t.draw())};#$i(e,t){const n=t.getActiveDrawLayer().getKonvaLayer();this.#Xi&&(this.#Xi.destroy(),this.#Xi=null);const i=t.getActiveViewLayer().getViewController();this.#Xi=this.#fi.create(e,this.#Ot,i),this.#Xi.getChildren(mt)[0].listening(!1),n.listening(!1),n.add(this.#Xi),n.draw()}#er(e,t){const n=t.getActiveDrawLayer().getKonvaLayer();this.#Xi&&(this.#Xi.destroy(),this.#Xi=null);const i=t.getActiveViewLayer().getViewController(),r=t.getActiveDrawLayer().getDrawController(),o=this.#fi.create(e,this.#Ot,i);o.id(mn()),r.getCurrentPosGroup().add(o),n.listening(!0),this.#Yi=new dt(o,this.#ji,n),this.#Yi.onExecute=this.#ge,this.#Yi.onUndo=this.#ge,this.#Yi.execute(),this.#Si.addToUndoStack(this.#Yi),this.setShapeOn(o,t)}activate(e){this.#Wi.disable(),this.#Wi.setShape(null),this.#Wi.setViewController(null);const t=this.#Si.getActiveLayerGroup();this.#tr(e,t),e?(this.#Ki=document.body.style.cursor,this.#Si.addEventListener("positionchange",(()=>{this.#nr(t)})),this.setFeatures({lineColour:this.#Ot.getLineColour()})):(this.#ir(),this.#Ki=void 0,this.#Si.removeEventListener("positionchange",(()=>{this.#nr(t)})))}#nr(e){this.#tr(!0,e)}#tr(e,t){const n=t.getActiveDrawLayer().getDrawController().getCurrentPosGroup().getChildren();e?n.forEach((e=>{this.setShapeOn(e,t)})):n.forEach((e=>{this.#rr(e)}));const i=t.getActiveDrawLayer().getKonvaLayer();0!==n.length&&i.listening(!0),i.draw()}#rr(e){e.off("mouseover"),e.off("mouseout"),e.draggable(!1),e.off("dragstart.draw"),e.off("dragmove.draw"),e.off("dragend.draw"),e.off("dblclick")}#or(e,t){const n=t.getActiveDrawLayer().getKonvaStage();return{x:n.offset().x+e.x/n.scale().x,y:n.offset().y+e.y/n.scale().y}}#ir(){if(void 0!==this.#Ki&&(document.body.style.cursor=this.#Ki),void 0!==this.#Zi){this.#Zi.opacity(1);const e=this.#Ot.getLineColour();this.#Zi.getChildren(Ct).forEach((function(t){t.stroke(e)}))}}setShapeOn(e,t){const n=()=>{document.body.style.cursor=this.#Ji,e.opacity(.75)};e.on("mouseover",(()=>{this.#Zi=e,n()})),e.on("mouseout",(()=>{this.#ir(),this.#Zi=void 0}));const i=t.getActiveDrawLayer().getKonvaLayer();e.draggable(!0);let r={x:e.x(),y:e.y()};const o=ut(e.getChildren(mt)[0]);let a=null;e.on("dragstart.draw",(()=>{a=e.getChildren(mt)[0].stroke();const n=t.getActiveDrawLayer().getKonvaStage(),r=n.scale(),o={x:1/r.x,y:1/r.y};this.#zi.x(n.offset().x+n.width()/(2*r.x)),this.#zi.y(n.offset().y+n.height()/(15*r.y)),this.#zi.scale(o),i.add(this.#zi),this.#Wi.setAnchorsActive(!1),i.draw()})),e.on("dragmove.draw",(n=>{const r=n.target;let o;!function(e,t){const n=t.getChildren(mt)[0],i=function(e){const t=e.find(".anchor");if(0===t.length)return;let n=t[0].x(),i=t[0].y();for(let e=0;e<t.length;++e)n=Math.min(n,t[e].x()),i=Math.min(i,t[e].y());return{x:n,y:i}}(t);if(void 0===i)return null;Dn(t,{x:-i.x,y:-i.y},{x:e.x-(i.x+Math.abs(n.width())),y:e.y-(i.y+Math.abs(n.height()))})}(t.getActiveDrawLayer().getBaseSize(),r);const s=Object.keys(this.#pi);for(let t=0;t<s.length&&(o=new this.#pi[s[t]],!o.isFactoryGroup(e));++t);if(void 0===o)throw new Error("Cannot find factory to update quantification.");if(void 0!==o.updateQuantification){const e=t.getActiveViewLayer().getViewController();o.updateQuantification(r,e)}const l=rt(n.evt)[0],c=this.#or(l,t),u=this.#zi.width()*this.#zi.scaleX()/2,d=this.#zi.height()*this.#zi.scaleY()/2;Math.abs(c.x-this.#zi.x())<u&&Math.abs(c.y-this.#zi.y())<d?(this.#zi.getChildren().forEach((function(e){e.stroke("orange")})),e.getChildren(Ct).forEach((function(e){e.stroke("red")}))):(this.#zi.getChildren().forEach((function(e){e.stroke("red")})),e.getChildren(Ct).forEach((function(e){void 0!==e.stroke&&e.stroke(a)}))),i.draw()})),e.on("dragend.draw",(n=>{const s=n.target;if(this.#zi.remove(),void 0===n||void 0===n.evt)return;const l=s.x(),c=s.y(),u=rt(n.evt)[0],d=this.#or(u,t),S=this.#zi.width()*this.#zi.scaleX()/2,h=this.#zi.height()*this.#zi.scaleY()/2;if(Math.abs(d.x-this.#zi.x())<S&&Math.abs(d.y-this.#zi.y())<h){s.x(r.x),s.y(r.y),this.#Wi.disable(),this.#Wi.setShape(null),this.#Wi.setViewController(null),e.getChildren(Ct).forEach((function(e){e.stroke(a)})),document.body.style.cursor=this.#Ki;const t=new gt(s,o,i);t.onExecute=this.#ge,t.onUndo=this.#ge,t.execute(),this.#Si.addToUndoStack(t)}else{const e={x:l-r.x,y:c-r.y};if(0!==e.x||0!==e.y){const t=new St(s,o,e,i);t.onExecute=this.#ge,t.onUndo=this.#ge,this.#Si.addToUndoStack(t),this.#ge({type:"drawmove",id:s.id()})}this.#Wi.setAnchorsActive(!0),this.#Wi.resetAnchors()}i.draw(),r={x:s.x(),y:s.y()}})),e.on("dblclick",(e=>{const t=e.currentTarget,n=t.findOne("Label");if(void 0===n)throw new Error("Could not find the shape label.");const r=n.getText(),o=t.id();nt.openRoiDialog(r.meta,(e=>{r.meta=e,r.setText(_(r.meta.textExpr,r.meta.quantification)),n.setVisible(0!==r.meta.textExpr.length),this.#ge({type:"drawchange",id:o}),i.draw()}))}))}setOptions(e){this.#pi=e,this.#Wi.setFactoryList(e)}getOptionsType(){return"factory"}setFeatures(e){if(void 0!==e.shapeColour&&this.#Ot.setLineColour(e.shapeColour),void 0!==e.shapeName){if(!this.hasShape(e.shapeName))throw new Error("Unknown shape: '"+e.shapeName+"'");this.#ji=e.shapeName}void 0!==e.mouseOverCursor&&(this.#Ji=e.mouseOverCursor)}init(){}getEventNames(){return["drawcreate","drawchange","drawmove","drawdelete","drawlabelchange"]}addEventListener(e,t){void 0===this.#k[e]&&(this.#k[e]=[]),this.#k[e].push(t)}removeEventListener(e,t){if(void 0!==this.#k[e])for(let n=0;n<this.#k[e].length;++n)this.#k[e][n]===t&&this.#k[e].splice(n,1)}#ge=e=>{if(void 0!==this.#k[e.type])for(let t=0;t<this.#k[e.type].length;++t)this.#k[e.type][t](e)};hasShape(e){return void 0!==this.#pi[e]}},Filter:class{#Si;constructor(e){this.#Si=e}#ar=null;#sr=0;#ue=new ve;activate(e){for(const t in this.#ar)e?(this.#ar[t].addEventListener("filterrun",this.#ge),this.#ar[t].addEventListener("filter-undo",this.#ge)):(this.#ar[t].removeEventListener("filterrun",this.#ge),this.#ar[t].removeEventListener("filter-undo",this.#ge))}setOptions(e){this.#ar={};for(const t in e)this.#ar[t]=new e[t](this.#Si)}getOptionsType(){return"instance"}init(){for(const e in this.#ar)this.#ar[e].init()}keydown=e=>{e.context="Filter",this.#Si.onKeydown(e)};getEventNames(){return["filterrun","filterundo"]}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{this.#ue.fireEvent(e)};getSelectedFilter(){return this.#sr}setFeatures(e){if(void 0!==e.filterName){if(!this.hasFilter(e.filterName))throw new Error("Unknown filter: '"+e.filterName+"'");this.#sr&&this.#sr.activate(!1),this.#sr=this.#ar[e.filterName],this.#sr.activate(!0)}if(void 0!==e.run&&e.run){let t={};void 0!==e.runArgs&&(t=e.runArgs),this.getSelectedFilter().run(t)}}getFilterList(){return this.#ar}hasFilter(e){return this.#ar[e]}},Floodfill:class{#Si;constructor(e){this.#Si=e}#lr=5;#cr=0;#ur=2e3;#dr=null;#Oe=null;#Sr=10;#hr=null;#Bi=!1;#Yi=null;#gr=null;#mr;#pr=null;#fr=[];#Dr=!1;#yr;#Ot=new ct;#ue=new ve;setExtend(e){this.#Dr=e}getExtend(){return this.#Dr}#Cr=e=>{const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId).getActiveViewLayer().displayToPlaneIndex(e._x,e._y);return{x:n.get(0),y:n.get(1)}};#vr(e,t,n){this.#fr=[];const i={data:this.#dr.data,width:this.#dr.width,height:this.#dr.height,bytes:4};this.#Oe=Tn().floodFill(i,e.x,e.y,t),this.#Oe=Tn().gaussBlurOnlyBorder(this.#Oe,this.#lr);let r=Tn().traceContours(this.#Oe);if(r=Tn().simplifyContours(r,this.#cr,this.#ur),r.length>0&&r[0].points[0].x){if(n)return r[0].points;for(let e=0,t=r[0].points.length;e<t;e++)this.#fr.push(new P(r[0].points[e].x,r[0].points[e].y));return this.#fr}return[]}#Tr(e,t,n){if(this.#pr=this.#vr(e,t,!1),this.#pr){const e=new Cn;this.#gr=e.create(this.#pr,this.#Ot),this.#gr.id(mn());const t=n.getActiveDrawLayer();return t.getDrawController().getCurrentPosGroup().add(this.#gr),this.#Yi=new dt(this.#gr,"floodfill",t.getKonvaLayer()),this.#Yi.onExecute=this.#ge,this.#Yi.onUndo=this.#ge,this.#Yi.execute(),this.#Si.addToUndoStack(this.#Yi),!0}return!1}extend(e,t,n){if(!this.#mr)throw"'initialpoint' not found. User must click before use extend!";this.#gr&&this.#gr.destroy();const i=n.getActiveViewLayer().getViewController(),r=i.getCurrentIndex(),o=i.getImageSize(),a=this.#hr||this.#Sr;for(let e=r.get(2),s=t||o.get(2);e<s&&this.#Tr(this.#mr,a,n);e++)i.incrementIndex(2);i.setCurrentPosition(r);for(let t=r.get(2),o=e||0;t>o&&this.#Tr(this.#mr,a,n);t--)i.decrementIndex(2);i.setCurrentPosition(r)}modifyThreshold(e,t){if(t||!this.#gr)throw"No shape found";t=this.#gr.getChildren((function(e){return"shape"===e.name()}))[0],clearTimeout(this.#yr),this.#yr=setTimeout((()=>{if(this.#pr=this.#vr(this.#mr,e,!0),!this.#pr)return!1;const n=[];for(let e=0,t=this.#pr.length;e<t;++e)n.push(this.#pr[e].x),n.push(this.#pr[e].y);t.setPoints(n),t.getLayer().draw(),this.onThresholdChange(e)}),100)}onThresholdChange(e){}mousedown=e=>{const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId),i=n.getActiveViewLayer(),r=n.getActiveDrawLayer();this.#dr=i.getImageData(),this.#dr?(this.#Ot.setZoomScale(r.getKonvaLayer().getAbsoluteScale()),this.#Bi=!0,this.#mr=this.#Cr(e),this.#Tr(this.#mr,this.#Sr,n),this.onThresholdChange(this.#Sr)):g.error("No image found")};mousemove=e=>{if(!this.#Bi)return;const t=this.#Cr(e);this.#hr=Math.round(Math.sqrt(Math.pow(this.#mr.x-t.x,2)+Math.pow(this.#mr.y-t.y,2))/2),this.#hr=this.#hr<this.#Sr?this.#Sr:this.#hr-this.#Sr,this.modifyThreshold(this.#hr)};mouseup=e=>{this.#Bi=!1};mouseout=e=>{this.mouseup(e)};touchstart=e=>{this.mousedown(e)};touchmove=e=>{this.mousemove(e)};touchend=e=>{this.mouseup(e)};keydown=e=>{e.context="Floodfill",this.#Si.onKeydown(e)};activate(e){e&&(this.#Ot.setBaseScale(this.#Si.getBaseScale()),this.setFeatures({shapeColour:this.#Ot.getLineColour()}))}init(){}getEventNames(){return["drawcreate","drawchange","drawmove","drawdelete"]}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{this.#ue.fireEvent(e)};setFeatures(e){void 0!==e.shapeColour&&this.#Ot.setLineColour(e.shapeColour)}},Livewire:class{#Si;constructor(e){this.#Si=e}#Bi=!1;#Yi=null;#gr=null;#Ot=new ct;#Ir=new In;#Lr=new In;#fr=[];#Pr=5;#ue=new ve;#Or(e){const t=e.get(1);for(let e=0;e<t;++e)this.#fr[e]=[]}#wr(){this.#Ir=new In,this.#Lr=new In}#Ar=new wn;#xr(){this.#ge({type:"drawcreate",id:this.#gr.id()}),this.#Yi.onExecute=this.#ge,this.#Yi.onUndo=this.#ge,this.#Si.addToUndoStack(this.#Yi),this.#Bi=!1}mousedown=e=>{const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId),i=n.getActiveViewLayer(),r=i.getViewController().getImageSize(),o=i.displayToPlaneIndex(e._x,e._y);if(this.#Bi)if(Math.abs(o.get(0)-this.x0)<this.#Pr&&Math.abs(o.get(1)-this.y0)<this.#Pr)this.#xr();else{this.#Ir=this.#Lr,this.#Or(r);const e={x:o.get(0),y:o.get(1)};this.#Ar.doTraining(e),this.#Ir.addControlPoint(this.#Lr.getPoint(0))}else{this.#Bi=!0,this.x0=o.get(0),this.y0=o.get(1),this.#wr(),this.#Or(r),this.#gr=null;const e=n.getActiveDrawLayer();this.#Ot.setZoomScale(e.getKonvaLayer().getAbsoluteScale());const t={x:o.get(0),y:o.get(1)};this.#Ar.doTraining(t);const i=new P(o.get(0),o.get(1));this.#Ir.addPoint(i),this.#Ir.addControlPoint(i)}};mousemove=e=>{if(!this.#Bi)return;const t=It(e),n=this.#Si.getLayerGroupByDivId(t.groupDivId),i=n.getActiveViewLayer().displayToPlaneIndex(e._x,e._y);let r={x:i.get(0),y:i.get(1)};this.#Ar.setPoint(r);let o=[],a=!1;for(;!this.#fr[r.y][r.x]&&!a;)if(o=this.#Ar.doWork(),0===o.length)a=!0;else for(let e=0;e<o.length-1;e+=2){const t=o[e],n=o[e+1];this.#fr[t.y][t.x]=n}for(this.#Lr=new In,a=!1;r&&!a;)this.#Lr.addPoint(new P(r.x,r.y)),this.#fr[r.y]&&this.#fr[r.y][r.x]?r=this.#fr[r.y][r.x]:a=!0;this.#Lr.appenPath(this.#Ir),this.#gr&&this.#gr.destroy();const s=new Cn;this.#gr=s.create(this.#Lr.pointArray,this.#Ot),this.#gr.id(mn());const l=n.getActiveDrawLayer();l.getDrawController().getCurrentPosGroup().add(this.#gr),this.#Yi=new dt(this.#gr,"livewire",l.getKonvaLayer()),this.#Yi.execute()};mouseup(e){}mouseout=e=>{this.mouseup(e)};dblclick=e=>{this.#xr()};touchstart=e=>{this.mousedown(e)};touchmove=e=>{this.mousemove(e)};touchend=e=>{this.mouseup(e)};keydown=e=>{e.context="Livewire",this.#Si.onKeydown(e)};activate(e){if(e){const e=this.#Si.getActiveLayerGroup().getActiveViewLayer(),t=e.getViewController().getImageSize();this.#Ar.setDimensions(t.get(0),t.get(1)),this.#Ar.setData(e.getImageData().data),this.#Ot.setBaseScale(this.#Si.getBaseScale()),this.setFeatures({shapeColour:this.#Ot.getLineColour()})}}init(){}getEventNames(){return["drawcreate","drawchange","drawmove","drawdelete"]}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{this.#ue.fireEvent(e)};setFeatures(e){void 0!==e.shapeColour&&this.#Ot.setLineColour(e.shapeColour)}}},Qn={draw:{ArrowFactory:class{getGroupName(){return"line-group"}getNPoints(){return 2}getTimeout(){return 0}isFactoryGroup(e){return this.getGroupName()===e.name()}create(e,t,n){const i=new cn(e[0],e[1]),r=new(lt().Line)({points:[i.getBegin().getX(),i.getBegin().getY(),i.getEnd().getX(),i.getEnd().getY()],stroke:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,name:"shape"}),o=dn(i,e[0],t.scale(10)),a=dn(i,e[1],t.scale(10));r.hitFunc((function(e){e.beginPath(),e.moveTo(o.getBegin().getX(),o.getBegin().getY()),e.lineTo(o.getEnd().getX(),o.getEnd().getY()),e.lineTo(a.getEnd().getX(),a.getEnd().getY()),e.lineTo(a.getBegin().getX(),a.getBegin().getY()),e.closePath(),e.fillStrokeShape(r)}));const s=new P(i.getBegin().getX(),i.getBegin().getY()-10),l=new cn(i.getBegin(),s),c=un(i,l),u=c*Math.PI/180,d=5*t.getScaledStrokeWidth(),S=new(lt().RegularPolygon)({x:i.getBegin().getX()+d*Math.sin(u),y:i.getBegin().getY()+d*Math.cos(u),sides:3,radius:d,rotation:-c,fill:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,name:"shape-triangle"}),h=new(lt().Text)({fontSize:t.getFontSize(),fontFamily:t.getFontFamily(),fill:t.getLineColour(),padding:t.getTextPadding(),shadowColor:t.getShadowLineColour(),shadowOffset:t.getShadowOffset(),name:"text"});let g="";g="",h.setText(""),h.meta={textExpr:"",quantification:{}};const m=i.getBegin().getX()>i.getEnd().getX()?0:-1,p=i.getBegin().getY()>i.getEnd().getY()?-1:0,f=new(lt().Label)({x:i.getEnd().getX()+m*h.width(),y:i.getEnd().getY()+p*t.applyZoomScale(15).y,scale:t.applyZoomScale(1),visible:0!=="".length,name:"label"});f.add(h),f.add(new(lt().Tag)({fill:t.getLineColour(),opacity:t.getTagOpacity()}));const D=new(lt().Group);return D.name(this.getGroupName()),D.add(f),D.add(S),D.add(r),D.visible(!0),D}getAnchors(e,t){const n=e.points(),i=[];return i.push(pn(n[0]+e.x(),n[1]+e.y(),"begin",t)),i.push(pn(n[2]+e.x(),n[3]+e.y(),"end",t)),i}update(e,t,n){const i=e.getParent(),r=i.getChildren((function(e){return"shape"===e.name()}))[0],o=i.getChildren((function(e){return"shape-triangle"===e.name()}))[0],a=i.getChildren((function(e){return"label"===e.name()}))[0],s=i.getChildren((function(e){return"begin"===e.id()}))[0],l=i.getChildren((function(e){return"end"===e.id()}))[0];switch(e.id()){case"begin":s.x(e.x()),s.y(e.y());break;case"end":l.x(e.x()),l.y(e.y())}const c=s.x()-r.x(),u=s.y()-r.y(),d=l.x()-r.x(),S=l.y()-r.y();r.points([c,u,d,S]);const h=new P(s.x(),s.y()),g=new P(l.x(),l.y()),m=new cn(h,g),p=new P(c,u),f=new P(d,S),D=dn(m,p,10),y=dn(m,f,10);r.hitFunc((function(e){e.beginPath(),e.moveTo(D.getBegin().getX(),D.getBegin().getY()),e.lineTo(D.getEnd().getX(),D.getEnd().getY()),e.lineTo(y.getEnd().getX(),y.getEnd().getY()),e.lineTo(y.getBegin().getX(),y.getBegin().getY()),e.closePath(),e.fillStrokeShape(r)}));const C=new P(m.getBegin().getX(),m.getBegin().getY()-10),v=new cn(m.getBegin(),C),T=un(m,v),I=T*Math.PI/180;o.x(m.getBegin().getX()+o.radius()*Math.sin(I)),o.y(m.getBegin().getY()+o.radius()*Math.cos(I)),o.rotation(-T);const L=a.getText();L.setText(L.meta.textExpr);const O=m.getBegin().getX()>m.getEnd().getX()?0:-1,w=m.getBegin().getY()>m.getEnd().getY()?-1:0,A={x:m.getEnd().getX()+O*L.width(),y:m.getEnd().getY()+w*t.applyZoomScale(15).y};a.position(A)}},CircleFactory:class{getGroupName(){return"circle-group"}getNPoints(){return 2}getTimeout(){return 0}isFactoryGroup(e){return this.getGroupName()===e.name()}create(e,t,n){const i=Math.abs(e[0].getX()-e[1].getX()),r=Math.abs(e[0].getY()-e[1].getY()),o=Math.round(Math.sqrt(i*i+r*r)),a=new An(e[0],o),s=new(lt().Circle)({x:a.getCenter().getX(),y:a.getCenter().getY(),radius:a.getRadius(),stroke:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,name:"shape"}),l=new(lt().Text)({fontSize:t.getFontSize(),fontFamily:t.getFontFamily(),fill:t.getLineColour(),padding:t.getTextPadding(),shadowColor:t.getShadowLineColour(),shadowOffset:t.getShadowOffset(),name:"text"});let c="";c="{surface}";const u=a.quantify(n,j(c));l.setText(_(c,u)),l.meta={textExpr:c,quantification:u};const d=new(lt().Label)({x:a.getCenter().getX(),y:a.getCenter().getY(),scale:t.applyZoomScale(1),visible:0!==c.length,name:"label"});d.add(l),d.add(new(lt().Tag)({fill:t.getLineColour(),opacity:t.getTagOpacity()}));const S=new(lt().Group);return S.name(this.getGroupName()),S.add(d),S.add(s),S.visible(!0),S}getAnchors(e,t){const n=e.x(),i=e.y(),r=e.radius(),o=[];return o.push(pn(n-r,i,"left",t)),o.push(pn(n+r,i,"right",t)),o.push(pn(n,i-r,"bottom",t)),o.push(pn(n,i+r,"top",t)),o}update(e,t,n){const i=e.getParent(),r=i.getChildren((function(e){return"shape"===e.name()}))[0],o=i.getChildren((function(e){return"label"===e.name()}))[0],a=i.getChildren((function(e){return"left"===e.id()}))[0],s=i.getChildren((function(e){return"right"===e.id()}))[0],l=i.getChildren((function(e){return"bottom"===e.id()}))[0],c=i.getChildren((function(e){return"top"===e.id()}))[0];const u={x:r.x(),y:r.y()};let d;switch(e.id()){case"left":d=u.x-e.x(),a.y(s.y()),s.x(u.x+d),l.y(u.y-d),c.y(u.y+d);break;case"right":d=e.x()-u.x,s.y(a.y()),a.x(u.x-d),l.y(u.y-d),c.y(u.y+d);break;case"bottom":d=u.y-e.y(),l.x(c.x()),a.x(u.x-d),s.x(u.x+d),c.y(u.y+d);break;case"top":d=e.y()-u.y,c.x(l.x()),a.x(u.x-d),s.x(u.x+d),l.y(u.y-d);break;default:g.error("Unhandled anchor id: "+e.id())}r.radius(Math.abs(d));const S=new P(i.x()+u.x,i.y()+u.y),h=(new An(S,d),{x:u.x,y:u.y});o.position(h),this.#br(i,n)}updateQuantification(e,t){this.#br(e,t)}#br(e,t){const n=e.getChildren((function(e){return"shape"===e.name()}))[0],i=e.getChildren((function(e){return"label"===e.name()}))[0],r=new P(e.x()+n.x(),e.y()+n.y()),o=new An(r,n.radius()),a=i.getText(),s=o.quantify(t,j(a.meta.textExpr));a.setText(_(a.meta.textExpr,s)),a.meta.quantification=s}#Fr(e,t){let n=0,i=0;void 0!==t&&(n=t.x(),i=t.y());const r=new(lt().Group);r.name("shadow");const o=e.getRound();for(let e=0;e<o.length;++e){const t=o[e],a=t[0][0],s=t[0][1],l=t[1][0],c=new(lt().Rect)({x:a-n,y:s-i,width:l-a,height:1,fill:"grey",strokeWidth:0,strokeScaleEnabled:!1,opacity:.3,name:"shadow-element"});r.add(c)}return r}},EllipseFactory:class{getGroupName(){return"ellipse-group"}getNPoints(){return 2}getTimeout(){return 0}isFactoryGroup(e){return this.getGroupName()===e.name()}create(e,t,n){const i=Math.abs(e[0].getX()-e[1].getX()),r=Math.abs(e[0].getY()-e[1].getY()),o=new xn(e[0],i,r),a={x:o.getA(),y:o.getB()},s=new(lt().Ellipse)({x:o.getCenter().getX(),y:o.getCenter().getY(),radius:a,radiusX:a.x,radiusY:a.y,stroke:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,name:"shape"}),l=new(lt().Text)({fontSize:t.getFontSize(),fontFamily:t.getFontFamily(),fill:t.getLineColour(),padding:t.getTextPadding(),shadowColor:t.getShadowLineColour(),shadowOffset:t.getShadowOffset(),name:"text"});let c="";c="{surface}";const u=o.quantify(n,j(c));l.setText(_(c,u)),l.meta={textExpr:c,quantification:u};const d=new(lt().Label)({x:o.getCenter().getX(),y:o.getCenter().getY(),scale:t.applyZoomScale(1),visible:0!==c.length,name:"label"});d.add(l),d.add(new(lt().Tag)({fill:t.getLineColour(),opacity:t.getTagOpacity()}));const S=new(lt().Group);return S.name(this.getGroupName()),S.add(d),S.add(s),S.visible(!0),S}getAnchors(e,t){const n=e.x(),i=e.y(),r=e.radius(),o=[];return o.push(pn(n-r.x,i-r.y,"topLeft",t)),o.push(pn(n+r.x,i-r.y,"topRight",t)),o.push(pn(n+r.x,i+r.y,"bottomRight",t)),o.push(pn(n-r.x,i+r.y,"bottomLeft",t)),o}update(e,t,n){const i=e.getParent(),r=i.getChildren((function(e){return"shape"===e.name()}))[0],o=i.getChildren((function(e){return"label"===e.name()}))[0],a=i.getChildren((function(e){return"topLeft"===e.id()}))[0],s=i.getChildren((function(e){return"topRight"===e.id()}))[0],l=i.getChildren((function(e){return"bottomRight"===e.id()}))[0],c=i.getChildren((function(e){return"bottomLeft"===e.id()}))[0];switch(e.id()){case"topLeft":a.x(e.x()),a.y(e.y()),s.y(e.y()),c.x(e.x());break;case"topRight":s.x(e.x()),s.y(e.y()),a.y(e.y()),l.x(e.x());break;case"bottomRight":l.x(e.x()),l.y(e.y()),c.y(e.y()),s.x(e.x());break;case"bottomLeft":c.x(e.x()),c.y(e.y()),l.y(e.y()),a.x(e.x());break;default:g.error("Unhandled anchor id: "+e.id())}const u=(s.x()-a.x())/2,d=(l.y()-s.y())/2,S={x:a.x()+u,y:s.y()+d};r.position(S);const h={x:Math.abs(u),y:Math.abs(d)};h&&r.radius(h);const m=new P(i.x()+S.x,i.y()+S.y),p=(new xn(m,h.x,h.y),{x:S.x,y:S.y});o.position(p),this.#Rr(i,n)}updateQuantification(e,t){this.#Rr(e,t)}#Rr(e,t){const n=e.getChildren((function(e){return"shape"===e.name()}))[0],i=e.getChildren((function(e){return"label"===e.name()}))[0],r=new P(e.x()+n.x(),e.y()+n.y()),o=new xn(r,n.radius().x,n.radius().y),a=i.getText(),s=o.quantify(t,j(a.meta.textExpr));a.setText(_(a.meta.textExpr,s)),a.meta.quantification=s}#Er(e,t){let n=0,i=0;void 0!==t&&(n=t.x(),i=t.y());const r=new(lt().Group);r.name("shadow");const o=e.getRound();for(let e=0;e<o.length;++e){const t=o[e],a=t[0][0],s=t[0][1],l=t[1][0],c=new(lt().Rect)({x:a-n,y:s-i,width:l-a,height:1,fill:"grey",strokeWidth:0,strokeScaleEnabled:!1,opacity:.3,name:"shadow-element"});r.add(c)}return r}},FreeHandFactory:class{getGroupName(){return"freeHand-group"}getNPoints(){}getTimeout(){return 25}isFactoryGroup(e){return this.getGroupName()===e.name()}create(e,t,n){const i=[];for(let t=0;t<e.length;++t)i.push(e[t].getX()),i.push(e[t].getY());const r=new(lt().Line)({points:i,stroke:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,name:"shape",tension:.5}),o=new(lt().Text)({fontSize:t.getFontSize(),fontFamily:t.getFontFamily(),fill:t.getLineColour(),name:"text"});let a="";a="",o.setText(""),o.meta={textExpr:"",quantification:{}};const s=new(lt().Label)({x:e[0].getX(),y:e[0].getY()+t.scale(10),scale:t.applyZoomScale(1),visible:0!=="".length,name:"label"});s.add(o),s.add(new(lt().Tag)({fill:t.getLineColour(),opacity:t.getTagOpacity()}));const l=new(lt().Group);return l.name(this.getGroupName()),l.add(s),l.add(r),l.visible(!0),l}getAnchors(e,t){const n=e.points(),i=[];for(let r=0;r<n.length;r+=2){const o=n[r]+e.x(),a=n[r+1]+e.y(),s=r.toString();i.push(pn(o,a,s,t))}return i}update(e,t,n){const i=e.getParent(),r=i.getChildren((function(e){return"shape"===e.name()}))[0],o=i.getChildren((function(e){return"label"===e.name()}))[0],a=i.getChildren((function(t){return t.id()===e.id()}))[0];a.x(e.x()),a.y(e.y());const s=r.points();s[e.id()]=e.x()-r.x(),s[e.id()+1]=e.y()-r.y(),r.points(s.concat());const l=o.getText();l.setText(l.meta.textExpr);const c={x:s[0]+r.x(),y:s[1]+r.y()+t.scale(10)};o.position(c)}},ProtractorFactory:class{getGroupName(){return"protractor-group"}getNPoints(){return 3}getTimeout(){return 500}isFactoryGroup(e){return this.getGroupName()===e.name()}create(e,t,n){const i=new cn(e[0],e[1]),r=[];for(let t=0;t<e.length;++t)r.push(e[t].getX()),r.push(e[t].getY());const o=new(lt().Line)({points:r,stroke:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,name:"shape"}),a=new(lt().Group);if(a.name(this.getGroupName()),3===e.length){const n=new cn(e[1],e[2]);o.hitFunc((function(t){t.beginPath(),t.moveTo(e[0].getX(),e[0].getY()),t.lineTo(e[1].getX(),e[1].getY()),t.lineTo(e[2].getX(),e[2].getY()),t.closePath(),t.fillStrokeShape(o)}));let r=un(i,n),s=i.getInclination();r>180&&(r=360-r,s+=r);const l=new(lt().Text)({fontSize:t.getFontSize(),fontFamily:t.getFontFamily(),fill:t.getLineColour(),padding:t.getTextPadding(),shadowColor:t.getShadowLineColour(),shadowOffset:t.getShadowOffset(),name:"text"});let c="";c="{angle}";const u={angle:{value:r,unit:ln.t("unit.degree")}};l.setText(_(c,u)),l.meta={textExpr:c,quantification:u};const d=(i.getMidpoint().getX()+n.getMidpoint().getX())/2,S=(i.getMidpoint().getY()+n.getMidpoint().getY())/2,h=new(lt().Label)({x:d,y:S-t.applyZoomScale(15).y,scale:t.applyZoomScale(1),visible:0!==c.length,name:"label"});h.add(l),h.add(new(lt().Tag)({fill:t.getLineColour(),opacity:t.getTagOpacity()}));const g=33*Math.min(i.getLength(),n.getLength())/100,m=new(lt().Arc)({innerRadius:g,outerRadius:g,stroke:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,angle:r,rotation:-s,x:e[1].getX(),y:e[1].getY(),name:"shape-arc"});a.add(h),a.add(m)}return a.add(o),a.visible(!0),a}getAnchors(e,t){const n=e.points(),i=[];return i.push(pn(n[0]+e.x(),n[1]+e.y(),"begin",t)),i.push(pn(n[2]+e.x(),n[3]+e.y(),"mid",t)),i.push(pn(n[4]+e.x(),n[5]+e.y(),"end",t)),i}update(e,t,n){const i=e.getParent(),r=i.getChildren((function(e){return"shape"===e.name()}))[0],o=i.getChildren((function(e){return"label"===e.name()}))[0],a=i.getChildren((function(e){return"shape-arc"===e.name()}))[0],s=i.getChildren((function(e){return"begin"===e.id()}))[0],l=i.getChildren((function(e){return"mid"===e.id()}))[0],c=i.getChildren((function(e){return"end"===e.id()}))[0];switch(e.id()){case"begin":s.x(e.x()),s.y(e.y());break;case"mid":l.x(e.x()),l.y(e.y());break;case"end":c.x(e.x()),c.y(e.y())}const u=s.x()-r.x(),d=s.y()-r.y(),S=l.x()-r.x(),h=l.y()-r.y(),g=c.x()-r.x(),m=c.y()-r.y();r.points([u,d,S,h,g,m]),r.hitFunc((function(e){e.beginPath(),e.moveTo(u,d),e.lineTo(S,h),e.lineTo(g,m),e.closePath(),e.fillStrokeShape(r)}));const p=new P(s.x(),s.y()),f=new P(l.x(),l.y()),D=new P(c.x(),c.y()),y=new cn(p,f),C=new cn(f,D);let v=un(y,C),T=y.getInclination();v>180&&(v=360-v,T+=v);const I=o.getText(),L={angle:{value:v,unit:ln.t("unit.degree")}};I.setText(_(I.meta.textExpr,L)),I.meta.quantification=L;const O={x:(y.getMidpoint().getX()+C.getMidpoint().getX())/2,y:(y.getMidpoint().getY()+C.getMidpoint().getY())/2-t.applyZoomScale(15).y};o.position(O);const w=33*Math.min(y.getLength(),C.getLength())/100;a.innerRadius(w),a.outerRadius(w),a.angle(v),a.rotation(-T);const A={x:l.x(),y:l.y()};a.position(A)}},RectangleFactory:class{getGroupName(){return"rectangle-group"}getNPoints(){return 2}getTimeout(){return 0}isFactoryGroup(e){return this.getGroupName()===e.name()}create(e,t,n){const i=new bn(e[0],e[1]),r=new(lt().Rect)({x:i.getBegin().getX(),y:i.getBegin().getY(),width:i.getWidth(),height:i.getHeight(),stroke:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,name:"shape"}),o=new(lt().Text)({fontSize:t.getFontSize(),fontFamily:t.getFontFamily(),fill:t.getLineColour(),padding:t.getTextPadding(),shadowColor:t.getShadowLineColour(),shadowOffset:t.getShadowOffset(),name:"text"});let a="";a="{surface}";const s=i.quantify(n,j(a));o.setText(_(a,s)),o.meta={textExpr:a,quantification:s};const l=new(lt().Label)({x:i.getBegin().getX(),y:i.getEnd().getY(),scale:t.applyZoomScale(1),visible:0!==a.length,name:"label"});l.add(o),l.add(new(lt().Tag)({fill:t.getLineColour(),opacity:t.getTagOpacity()}));const c=new(lt().Group);return c.name(this.getGroupName()),c.add(l),c.add(r),c.visible(!0),c}getAnchors(e,t){const n=e.x(),i=e.y(),r=e.width(),o=e.height(),a=[];return a.push(pn(n,i,"topLeft",t)),a.push(pn(n+r,i,"topRight",t)),a.push(pn(n+r,i+o,"bottomRight",t)),a.push(pn(n,i+o,"bottomLeft",t)),a}update(e,t,n){const i=e.getParent(),r=i.getChildren((function(e){return"shape"===e.name()}))[0],o=i.getChildren((function(e){return"label"===e.name()}))[0],a=i.getChildren((function(e){return"topLeft"===e.id()}))[0],s=i.getChildren((function(e){return"topRight"===e.id()}))[0],l=i.getChildren((function(e){return"bottomRight"===e.id()}))[0],c=i.getChildren((function(e){return"bottomLeft"===e.id()}))[0];let u;switch(e.id()){case"topLeft":a.x(e.x()),a.y(e.y()),s.y(e.y()),c.x(e.x());break;case"topRight":s.x(e.x()),s.y(e.y()),a.y(e.y()),l.x(e.x());break;case"bottomRight":l.x(e.x()),l.y(e.y()),c.y(e.y()),s.x(e.x());break;case"bottomLeft":c.x(e.x()),c.y(e.y()),l.y(e.y()),a.x(e.x());break;default:g.error("Unhandled anchor id: "+e.id())}r.position(a.position());const d=s.x()-a.x(),S=c.y()-a.y();d&&S&&r.size({width:d,height:S});const h=new P(i.x()+a.x(),i.y()+a.y()),m=new P(i.x()+l.x(),i.y()+l.y()),p=new bn(h,m);const f={x:p.getBegin().getX()-i.x(),y:p.getEnd().getY()-i.y()};o.position(f),this.#qr(i,n)}updateQuantification(e,t){this.#qr(e,t)}#qr(e,t){const n=e.getChildren((function(e){return"shape"===e.name()}))[0],i=e.getChildren((function(e){return"label"===e.name()}))[0],r=new P(e.x()+n.x(),e.y()+n.y()),o=new P(r.getX()+n.width(),r.getY()+n.height()),a=new bn(r,o),s=i.getText(),l=a.quantify(t,j(s.meta.textExpr));s.setText(_(s.meta.textExpr,l)),s.meta.quantification=l}#Ur(e){const t=e.getRound(),n=t.max.getX()-t.min.getX(),i=t.max.getY()-t.min.getY();return new(lt().Rect)({x:t.min.getX(),y:t.min.getY(),width:n,height:i,fill:"grey",strokeWidth:0,strokeScaleEnabled:!1,opacity:.3,name:"shadow"})}},RoiFactory:Cn,RulerFactory:class{getGroupName(){return"ruler-group"}getNPoints(){return 2}getTimeout(){return 0}isFactoryGroup(e){return this.getGroupName()===e.name()}create(e,t,n){const i=new cn(e[0],e[1]),r=new(lt().Line)({points:[i.getBegin().getX(),i.getBegin().getY(),i.getEnd().getX(),i.getEnd().getY()],stroke:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,name:"shape"}),o=t.scale(10),a=dn(i,e[0],o),s=new(lt().Line)({points:[a.getBegin().getX(),a.getBegin().getY(),a.getEnd().getX(),a.getEnd().getY()],stroke:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,name:"shape-tick0"}),l=dn(i,e[1],o),c=new(lt().Line)({points:[l.getBegin().getX(),l.getBegin().getY(),l.getEnd().getX(),l.getEnd().getY()],stroke:t.getLineColour(),strokeWidth:t.getStrokeWidth(),strokeScaleEnabled:!1,name:"shape-tick1"});r.hitFunc((function(e){e.beginPath(),e.moveTo(a.getBegin().getX(),a.getBegin().getY()),e.lineTo(a.getEnd().getX(),a.getEnd().getY()),e.lineTo(l.getEnd().getX(),l.getEnd().getY()),e.lineTo(l.getBegin().getX(),l.getBegin().getY()),e.closePath(),e.fillStrokeShape(r)}));const u=new(lt().Text)({fontSize:t.getFontSize(),fontFamily:t.getFontFamily(),fill:t.getLineColour(),padding:t.getTextPadding(),shadowColor:t.getShadowLineColour(),shadowOffset:t.getShadowOffset(),name:"text"});let d="";d="{length}";const S=i.quantify(n);u.setText(_(d,S)),u.meta={textExpr:d,quantification:S};const h=i.getBegin().getX()>i.getEnd().getX()?0:-1,g=i.getBegin().getY()>i.getEnd().getY()?-1:0,m=new(lt().Label)({x:i.getEnd().getX()+h*u.width(),y:i.getEnd().getY()+g*t.applyZoomScale(15).y,scale:t.applyZoomScale(1),visible:0!==d.length,name:"label"});m.add(u),m.add(new(lt().Tag)({fill:t.getLineColour(),opacity:t.getTagOpacity()}));const p=new(lt().Group);return p.name(this.getGroupName()),p.add(m),p.add(s),p.add(c),p.add(r),p.visible(!0),p}getAnchors(e,t){const n=e.points(),i=[];return i.push(pn(n[0]+e.x(),n[1]+e.y(),"begin",t)),i.push(pn(n[2]+e.x(),n[3]+e.y(),"end",t)),i}update(e,t,n){const i=e.getParent(),r=i.getChildren((function(e){return"shape"===e.name()}))[0],o=i.getChildren((function(e){return"shape-tick0"===e.name()}))[0],a=i.getChildren((function(e){return"shape-tick1"===e.name()}))[0],s=i.getChildren((function(e){return"label"===e.name()}))[0],l=i.getChildren((function(e){return"begin"===e.id()}))[0],c=i.getChildren((function(e){return"end"===e.id()}))[0];switch(e.id()){case"begin":l.x(e.x()),l.y(e.y());break;case"end":c.x(e.x()),c.y(e.y())}const u=l.x()-r.x(),d=l.y()-r.y(),S=c.x()-r.x(),h=c.y()-r.y();r.points([u,d,S,h]);const g=new P(l.x(),l.y()),m=new P(c.x(),c.y()),p=new cn(g,m),f=new P(u,d),D=new P(S,h),y=dn(p,f,t.scale(10));o.points([y.getBegin().getX(),y.getBegin().getY(),y.getEnd().getX(),y.getEnd().getY()]);const C=dn(p,D,t.scale(10));a.points([C.getBegin().getX(),C.getBegin().getY(),C.getEnd().getX(),C.getEnd().getY()]),r.hitFunc((function(e){e.beginPath(),e.moveTo(y.getBegin().getX(),y.getBegin().getY()),e.lineTo(y.getEnd().getX(),y.getEnd().getY()),e.lineTo(C.getEnd().getX(),C.getEnd().getY()),e.lineTo(C.getBegin().getX(),C.getBegin().getY()),e.closePath(),e.fillStrokeShape(r)}));const v=s.getText(),T=p.quantify(n);v.setText(_(v.meta.textExpr,T)),v.meta.quantification=T;const I=p.getBegin().getX()>p.getEnd().getX()?0:-1,L=p.getBegin().getY()>p.getEnd().getY()?-1:0,O={x:p.getEnd().getX()+I*v.width(),y:p.getEnd().getY()+L*t.applyZoomScale(15).y};s.position(O)}}},filter:{Threshold:class{#Si;constructor(e){this.#Si=e}#Mi=new Fn;#Qr=!0;#ue=new ve;activate(e){e&&(this.#Qr=!0)}init(){}run(e){this.#Mi.setMin(e.min),this.#Mi.setMax(e.max),this.#Qr&&(this.#Mi.setOriginalImage(this.#Si.getLastImage()),this.#Qr=!1);const t=new qn(this.#Mi,this.#Si);t.onExecute=this.#ge,t.onUndo=this.#ge,t.execute(),this.#Si.addToUndoStack(t)}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{this.#ue.fireEvent(e)}},Sobel:class{#Si;constructor(e){this.#Si=e}#ue=new ve;activate(e){}init(){}run(e){const t=new En;t.setOriginalImage(this.#Si.getLastImage());const n=new qn(t,this.#Si);n.onExecute=this.#ge,n.onUndo=this.#ge,n.execute(),this.#Si.addToUndoStack(n)}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{this.#ue.fireEvent(e)}},Sharpen:class{#Si;constructor(e){this.#Si=e}#ue=new ve;activate(e){}init(){}run(e){const t=new Rn;t.setOriginalImage(this.#Si.getLastImage());const n=new qn(t,this.#Si);n.onExecute=this.#ge,n.onUndo=this.#ge,n.execute(),this.#Si.addToUndoStack(n)}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}#ge=e=>{this.#ue.fireEvent(e)}}}};class Mn{divId;orientation;colourMap;opacity;constructor(e){this.divId=e}}class Bn{options;constructor(e){this.options=e}}class Nn{dataViewConfigs;tools;binders;viewOnFirstLoadItem;defaultCharacterSet;constructor(e){this.dataViewConfigs=e}}class Vn{#Mn=null;#Mr=null;#Br=null;#Nr=null;#Vr=null;#Gr=null;#Ot=new ct;#ue=new ve;getImage(e){return this.#Mr.get(e).image}getLastImage(){return this.#Mr.get(this.#Mr.length()-1).image}setImage(e,t){this.#Mr.setImage(e,t)}setLastImage(e){this.#Mr.setImage(this.#Mr.length()-1,e)}addNewImage(e,t){const n=this.#Mr.length();return this.#ge({type:"loadstart",loadtype:"image",source:"internal",loadid:n}),this.#Mr.addNew(n,e,t),this.#ge({type:"loaditem",loadtype:"image",data:t,source:"internal",loadid:n,isfirstitem:!0}),this.#Mn.viewOnFirstLoadItem&&this.render(n),this.#ge({type:"load",loadtype:"image",source:"internal",loadid:n}),this.#ge({type:"loadend",loadtype:"image",source:"internal",loadid:n}),n}getMetaData(e){return this.#Mr.get(e).meta}getNumberOfLoadedData(){return this.#Mr.length()}canScroll(){return this.#Vr.getActiveLayerGroup().getActiveViewLayer().getViewController().canScroll()}canWindowLevel(){return this.#Vr.getActiveLayerGroup().getActiveViewLayer().getViewController().canWindowLevel()}getAddedScale(){return this.#Vr.getActiveLayerGroup().getAddedScale()}getBaseScale(){return this.#Vr.getActiveLayerGroup().getBaseScale()}getOffset(){return this.#Vr.getActiveLayerGroup().getOffset()}getToolboxController(){return this.#Br}getActiveLayerGroup(){return this.#Vr.getActiveLayerGroup()}getViewLayersByDataIndex(e){return this.#Vr.getViewLayersByDataIndex(e)}getDrawLayersByDataIndex(e){return this.#Vr.getDrawLayersByDataIndex(e)}getLayerGroupByDivId(e){return this.#Vr.getLayerGroupByDivId(e)}getNumberOfLayerGroups(){return this.#Vr.getNumberOfLayerGroups()}getStyle(){return this.#Ot}addToUndoStack=e=>{null!==this.#Gr&&this.#Gr.add(e)};init(e){if(this.#Mn=e,void 0===this.#Mn.viewOnFirstLoadItem&&(this.#Mn.viewOnFirstLoadItem=!0),this.#Gr=new Ut,this.#Gr.addEventListener("undoadd",this.#ge),this.#Gr.addEventListener("undo",this.#ge),this.#Gr.addEventListener("redo",this.#ge),void 0!==this.#Mn.tools){const e={},t=Object.keys(this.#Mn.tools);for(let n=0;n<t.length;++n){const i=t[n];if(void 0!==Un[i]){if(e[i]=new Un[i](this),void 0!==e[i].addEventListener){const t=e[i].getEventNames();for(let n=0;n<t.length;++n)e[i].addEventListener(t[n],this.#ge)}const t=this.#Mn.tools[i];if(void 0!==t.options&&0!==t.options.length){let n,r="raw";if(void 0!==e[i].getOptionsType&&(r=e[i].getOptionsType()),"instance"===r||"factory"===r){n={};for(let e=0;e<t.options.length;++e){const o=t.options[e];let a=o;"factory"===r&&(a+="Factory");const s=i.charAt(0).toLowerCase()+i.slice(1);void 0!==Qn[s][a]?n[o]=Qn[s][a]:g.warn("Could not find option class for: "+o)}}else n=t.options;e[i].setOptions(n)}}else g.warn("Could not initialise unknown tool: "+i)}this.#Br=new Qt(e)}this.#Nr=new on(this.#Mn.defaultCharacterSet),this.#Nr.onloadstart=this.#kr,this.#Nr.onprogress=this.#Hr,this.#Nr.onloaditem=this.#Wr,this.#Nr.onload=this.#zr,this.#Nr.onloadend=this.#Yr,this.#Nr.onerror=this.#Xr,this.#Nr.onabort=this.#jr,this.#Mr=new an,this.#Vr=new wt,void 0!==this.#Mn.binders&&this.#Vr.setBinders(this.#Mn.binders)}reset(){this.#Mr.reset(),this.#Vr.empty(),this.#Gr&&(this.#Gr=new Ut,this.#Gr.addEventListener("undoadd",this.#ge),this.#Gr.addEventListener("undo",this.#ge),this.#Gr.addEventListener("redo",this.#ge))}resetLayout(){this.#Vr.reset(),this.#Vr.draw()}addEventListener(e,t){this.#ue.add(e,t)}removeEventListener(e,t){this.#ue.remove(e,t)}loadFiles=e=>{0!==e.length?this.#Nr.loadFiles(e):g.warn("Ignoring empty input file list.")};loadURLs=(e,t)=>{0!==e.length?this.#Nr.loadURLs(e,t):g.warn("Ignoring empty input url list.")};loadFromUri=(e,t)=>{const n=function(e){const t=qt(e);return 0===Object.keys(t).length?null:t.query}(e),i=()=>{this.removeEventListener("loadend",i),this.loadURLs([n.state])};n&&void 0!==n.input&&(void 0!==n.state&&this.addEventListener("loadend",i),function(e,t,n){e.type&&"manifest"===e.type?function(e,t){let n="";"/"===e.input[0]&&(n=window.location.protocol+"//"+window.location.host),n+=e.input;const i=new XMLHttpRequest;i.open("GET",decodeURIComponent(n),!0),i.responseType="document",i.onload=function(n){t(function(e,t){const n=[],i=e.getElementsByTagName("wado_query")[0].getAttribute("wadoURL")+"?requestType=WADO&contentType=application/dicom&",r=e.getElementsByTagName("Patient");r.length>1&&g.warn("More than one patient, loading first one.");const o=r[0].getElementsByTagName("Study");o.length>1&&g.warn("More than one study, loading first one.");const a=o[0].getAttribute("StudyInstanceUID"),s=o[0].getElementsByTagName("Series");s.length>1&&g.warn("More than one series, loading first one.");const l=s[0].getAttribute("SeriesInstanceUID"),c=s[0].getElementsByTagName("Instance");let u=c.length;t<u&&(u=t);for(let e=0;e<u;++e){const t=i+"&studyUID="+a+"&seriesUID="+l+"&objectUID="+c[e].getAttribute("SOPInstanceUID");n.push(t)}return n}(n.target.responseXML,e.nslices))},i.onerror=function(e){g.warn("RequestError while receiving manifest: "+e.target.status)},i.send(null)}(e,t):t(function(e,t){const n=[];let i="key";t&&(i=t);const r=decodeURIComponent(e),o=qt(r);if(0===Object.keys(o).length)n.push(r);else{const e=Object.keys(o.query);let t=null;for(let n=0;n<e.length;++n)if(o.query[e[n]]instanceof Array){t=e[n];break}if(t){const r=o.query[t];let a=o.base;""!==a&&"file"!==t&&(a+="?");let s,l=!1;for(let n=0;n<e.length;++n)e[n]!==t&&(l&&(a+="&"),a+=e[n]+"="+o.query[e[n]],l=!0);for(let e=0;e<r.length;++e)s=a,l&&(s+="&"),"key"===i&&(s+=t+"="),s+=r[e],n.push(s)}else n.push(r)}return n}(e.input,e.dwvReplaceMode),n)}(n,this.loadURLs,t))};loadImageObject=e=>{this.#Nr.loadImageObject(e)};abortLoad(){this.#Nr.abort()}fitToContainer(){this.#Vr.syncLayerGroupScale()}initWLDisplay(){this.#Vr.getActiveLayerGroup().getActiveViewLayer().getViewController().initialise()}#_r(e){if(null===this.#Mn.dataViewConfigs||void 0===this.#Mn.dataViewConfigs)throw new Error("No available data view configuration");let t=[];return void 0!==this.#Mn.dataViewConfigs["*"]?t=this.#Mn.dataViewConfigs["*"]:void 0!==this.#Mn.dataViewConfigs[e]&&(t=this.#Mn.dataViewConfigs[e]),t}getDataViewConfigs(){return this.#Mn.dataViewConfigs}setDataViewConfigs(e){this.#Vr.empty(),this.#Mn.dataViewConfigs=e,this.#Zr(e)}#Zr(e){const t=Object.keys(e),n=[];for(let i=0;i<t.length;++i){const r=e[t[i]];for(let e=0;e<r.length;++e){const t=r[e];if(!n.includes(t.divId)){const e=document.getElementById(t.divId),i=this.#Vr.addLayerGroup(e);this.#Kr(i),void 0!==t.orientation&&i.setTargetOrientation(L(t.orientation)),n.push(t.divId)}}}}setLayerGroupsBinders(e){const t=[];for(let n=0;n<e.length;++n)void 0!==Ot[e[n]]&&t.push(new Ot[e[n]]);this.#Vr.setBinders(t)}render(e){if(null==e)throw new Error("Cannot render without data index");0===this.#Vr.getNumberOfLayerGroups()&&this.#Zr(this.#Mn.dataViewConfigs);const t=this.#_r(e);if(0!==t.length)for(let n=0;n<t.length;++n){const i=t[n],r=this.#Vr.getLayerGroupByDivId(i.divId);if(!r)throw new Error("No layer group for "+i.divId);0===r.getViewLayersByDataIndex(e).length&&(0===r.getNumberOfLayers()?this.#Jr(e,i):this.#$r(e,i)),r.draw()}else g.info("Not rendering data: "+e+" (no data view config)")}zoom(e,t,n){const i=this.#Vr.getActiveLayerGroup(),r=i.getActiveViewLayer().getViewController().getCurrentScrollPosition(),o=new O(t,n,r);i.addScale(e,o),i.draw()}translate(e,t){const n=this.#Vr.getActiveLayerGroup();n.addTranslation({x:e,y:t}),n.draw()}setOpacity(e){const t=this.#Vr.getActiveLayerGroup().getActiveViewLayer();t.setOpacity(e),t.draw()}setDrawings(e,t){const n=this.#Vr.getActiveLayerGroup(),i=n.getActiveViewLayer().getViewController(),r=n.getActiveDrawLayer().getDrawController();r.setDrawings(e,t,this.#ge,this.addToUndoStack),r.activateDrawLayer(i.getCurrentOrientedIndex(),i.getScrollIndex())}getJsonState(){return(new At).toJSON(this)}applyJsonState(e){const t=new At;t.apply(this,t.fromJSON(e))}onResize=()=>{this.fitToContainer()};onKeydown=e=>{this.#ge(e)};defaultOnKeydown=e=>{if(e.ctrlKey)if(e.shiftKey){const t=this.#Vr.getActiveLayerGroup().getActiveViewLayer().getViewController(),n=t.getImageSize();"ArrowLeft"===e.key?n.moreThanOne(3)&&t.decrementIndex(3):"ArrowUp"===e.key?t.canScroll()&&t.incrementScrollIndex():"ArrowRight"===e.key?n.moreThanOne(3)&&t.incrementIndex(3):"ArrowDown"===e.key&&t.canScroll()&&t.decrementScrollIndex()}else if("y"===e.key)this.#Gr.redo();else if("z"===e.key)this.#Gr.undo();else if(" "===e.key)for(let e=0;e<this.#Vr.getNumberOfLayerGroups();++e)this.#Vr.getLayerGroup(e).setShowCrosshair(!this.#Vr.getLayerGroup(e).getShowCrosshair())};resetDisplay(){this.resetLayout(),this.initWLDisplay()}resetZoom(){this.resetLayout()}setColourMap(e){this.#Vr.getActiveLayerGroup().getActiveViewLayer().getViewController().setColourMapFromName(e)}setWindowLevelPreset(e){this.#Vr.getActiveLayerGroup().getActiveViewLayer().getViewController().setWindowLevelPreset(e)}setTool(e){for(let t=0;t<this.#Vr.getNumberOfLayerGroups();++t){const n=this.#Vr.getLayerGroup(t);let i=null;i="Draw"===e||"Livewire"===e||"Floodfill"===e?n.getActiveDrawLayer():n.getActiveViewLayer(),i&&this.#Br.bindLayer(i,n.getDivId())}this.#Br.setSelectedTool(e)}setToolFeatures(e){this.#Br.setToolFeatures(e)}undo(){this.#Gr.undo()}redo(){this.#Gr.redo()}getStackSize(){return this.#Gr.getStackSize()}getCurrentStackIndex(){return this.#Gr.getCurrentStackIndex()}#ge=e=>{this.#ue.fireEvent(e)};#kr=e=>{e.type="loadstart",this.#ge(e)};#Hr=e=>{e.type="loadprogress",this.#ge(e)};#Wr=e=>{void 0===e.data&&g.error("Missing loaditem event data."),void 0===e.loadtype&&g.error("Missing loaditem event load type.");const t=e.isfirstitem;let n=null;"image"===e.loadtype?(t?this.#Mr.addNew(e.loadid,e.data.image,e.data.info):this.#Mr.update(e.loadid,e.data.image,e.data.info),n=e.data.info):"state"===e.loadtype&&(this.applyJsonState(e.data),n="state"),this.#ge({type:"loaditem",data:n,source:e.source,loadtype:e.loadtype,loadid:e.loadid,isfirstitem:e.isfirstitem,warn:e.warn}),"image"===e.loadtype&&0!==this.#_r(e.loadid).length&&t&&this.#Mn.viewOnFirstLoadItem&&this.render(e.loadid)};#zr=e=>{e.type="load",this.#ge(e)};#Yr=e=>{e.type="loadend",this.#ge(e)};#Xr=e=>{e.type="loaderror",this.#ge(e)};#jr=e=>{e.type="loadabort",this.#ge(e)};#Kr(e){e.addEventListener("zoomchange",this.#ge),e.addEventListener("offsetchange",this.#ge),e.addEventListener("renderstart",this.#ge),e.addEventListener("renderend",this.#ge);for(let t=0;t<je.length;++t)e.addEventListener(je[t],this.#ge);this.#Br&&this.#Br.hasTool("Draw")&&(e.addEventListener("drawcreate",this.#ge),e.addEventListener("drawdelete",this.#ge))}#Jr(e,t){this.#$r(e,t),this.#Br&&this.#Br.init()}#$r(e,t){const n=this.#Mr.get(e);if(!n)throw new Error("Cannot initialise layer with data id: "+e);const i=this.#Vr.getLayerGroupByDivId(t.divId);if(!i)throw new Error("Cannot initialise layer with group id: "+t.divId);const r=n.image.getGeometry();this.#Vr.unbindLayerGroups();const o=(new Xe).create(n.meta,n.image),a=function(e,t){let n=T();return void 0!==t&&(n=e.asOneAndZeros().getInverse().multiply(t)),n.getAbs()}(r.getOrientation(),i.getTargetOrientation());o.setOrientation(a),"SEG"===n.image.getMeta().Modality&&o.setAlphaFunction((function(e){return 0===e[0]&&0===e[1]&&0===e[2]?0:255})),void 0!==t.colourMap&&o.setColourMap(t.colourMap);const s=0===i.getNumberOfLayers();let l=1;s||(l=.5,void 0===t.colourMap&&o.setColourMap(h.rainbow));const c=i.addViewLayer();c.setView(o,e);const u=r.getSize(a).get2D(),d=r.getSpacing(a).get2D();c.initialise(u,d,l);const S=c.getViewController();let g;"SEG"===n.image.getMeta().Modality&&(S.addEventListener("masksegmentdelete",this.#ge),S.addEventListener("masksegmentredraw",this.#ge)),this.#Mr.addEventListener("imageset",c.onimageset),this.#Mr.addEventListener("imagechange",(e=>{c.onimagechange(e),this.render(e.dataid)})),this.#Vr.bindLayerGroups(),this.#Br&&this.#Br.bindLayer(c,i.getDivId()),this.#Br&&this.#Br.hasTool("Draw")&&(g=i.addDrawLayer(),g.initialise(u,d,e),g.setPlaneHelper(c.getViewController().getPlaneHelper()));const m=[S.getCurrentIndex().getValues(),S.getCurrentPosition().getValues()];i.updateLayersToPositionChange({value:m,srclayerid:c.getId()}),this.#Vr.syncLayerGroupScale();const p=r.getOrientation().getThirdColMajorDirection();c.setOffset(i.getOffset()),void 0!==t.orientation&&(2===p?"axial"!==t.orientation&&(c.addFlipOffsetY(),void 0!==g&&g.addFlipOffsetY()):0===p&&"sagittal"!==t.orientation&&(c.addFlipOffsetX(),void 0!==g&&g.addFlipOffsetX())),s?void 0!==t.orientation?0===p||2===p?i.flipScaleZ():(c.setScale(i.getScale()),void 0!==g&&g.setScale(i.getScale())):0===p?i.flipScaleZ():(c.setScale(i.getScale()),void 0!==g&&g.setScale(i.getScale())):(c.setScale(i.getScale()),void 0!==g&&g.setScale(i.getScale()))}}class Gn{#O=!0;#x;constructor(e,t){void 0!==t&&(this.#O=t),this.#x=new DataView(e)}writeUint8(e,t){return this.#x.setUint8(e,t),e+Uint8Array.BYTES_PER_ELEMENT}writeInt8(e,t){return this.#x.setInt8(e,t),e+Int8Array.BYTES_PER_ELEMENT}writeUint16(e,t){return this.#x.setUint16(e,t,this.#O),e+Uint16Array.BYTES_PER_ELEMENT}writeInt16(e,t){return this.#x.setInt16(e,t,this.#O),e+Int16Array.BYTES_PER_ELEMENT}writeUint32(e,t){return this.#x.setUint32(e,t,this.#O),e+Uint32Array.BYTES_PER_ELEMENT}writeUint64(e,t){return this.#x.setBigUint64(e,t,this.#O),e+BigUint64Array.BYTES_PER_ELEMENT}writeInt32(e,t){return this.#x.setInt32(e,t,this.#O),e+Int32Array.BYTES_PER_ELEMENT}writeInt64(e,t){return this.#x.setBigInt64(e,t,this.#O),e+BigInt64Array.BYTES_PER_ELEMENT}writeFloat32(e,t){return this.#x.setFloat32(e,t,this.#O),e+Float32Array.BYTES_PER_ELEMENT}writeFloat64(e,t){return this.#x.setFloat64(e,t,this.#O),e+Float64Array.BYTES_PER_ELEMENT}writeHex(e,t){const n=parseInt(t,16);return this.#x.setUint16(e,n,this.#O),e+Uint16Array.BYTES_PER_ELEMENT}writeBinaryArray(e,t){if(t.length%8!=0)throw new Error("Cannot write boolean array as binary.");let n=null,i=null;for(let r=0,o=t.length;r<o;r+=8){n=0;for(let e=0;e<8;++e)i=0===t[r+e]?0:1,n+=i<<e;e=this.writeUint8(e,n)}return e}writeUint8Array(e,t){for(let n=0,i=t.length;n<i;++n)e=this.writeUint8(e,t[n]);return e}writeInt8Array(e,t){for(let n=0,i=t.length;n<i;++n)e=this.writeInt8(e,t[n]);return e}writeUint16Array(e,t){for(let n=0,i=t.length;n<i;++n)e=this.writeUint16(e,t[n]);return e}writeInt16Array(e,t){for(let n=0,i=t.length;n<i;++n)e=this.writeInt16(e,t[n]);return e}writeUint32Array(e,t){for(let n=0,i=t.length;n<i;++n)e=this.writeUint32(e,t[n]);return e}writeUint64Array(e,t){for(let n=0,i=t.length;n<i;++n)e=this.writeUint64(e,t[n]);return e}writeInt32Array(e,t){for(let n=0,i=t.length;n<i;++n)e=this.writeInt32(e,t[n]);return e}writeInt64Array(e,t){for(let n=0,i=t.length;n<i;++n)e=this.writeInt64(e,t[n]);return e}writeFloat32Array(e,t){for(let n=0,i=t.length;n<i;++n)e=this.writeFloat32(e,t[n]);return e}writeFloat64Array(e,t){for(let n=0,i=t.length;n<i;++n)e=this.writeFloat64(e,t[n]);return e}}let kn=0;class Hn{action;value;constructor(e){this.action=e}}function Wn(e){const t="1.2.826.0.1.3680043.9.7278.1.";let n="";if("ImplementationClassUID"===e)n=t+"0.32.2";else{const i="."+(new Date).toISOString().replace(/\D/g,"").substring(0,14);kn+=1;const r="."+kn;n=t;const o=t.length+r.length+i.length,a=Math.min(e.length,64-o);if(a>1){let t="";for(let n=0;n<a;++n)t+=e.charCodeAt(n);n+=t.substring(0,a)}n+=i+r}return n}function zn(e){return e%2==0}function Yn(e){const t=U[e];return void 0!==t&&"string"===t}function Xn(e,t){const n=new Uint8Array(e.length+1);return n.set(e),n.set(t,e.length),n}class jn{encode(e){const t=new Uint8Array(e.length);for(let n=0,i=e.length;n<i;++n)t[n]=e.charCodeAt(n);return t}}class _n{#eo=!1;setUseUnVrForPrivateSq(e){this.#eo=e}#to={copy:function(e){return e},remove:function(){return null},clear:function(e){return e.value=[],e},replace:function(e,t){return e.value=[t],e}};#no={default:{action:"copy",value:null}};#io=this.#no;setRules(e){this.#io=e}#ro=new jn;#oo=this.#ro;#ao(e){return this.#ro.encode(e)}#so(e){return this.#oo.encode(e)}useSpecialTextEncoder(){this.#oo=new TextEncoder}useDefaultAnonymisationRules(){this.setRules({default:{action:"remove",value:null},PatientName:{action:"replace",value:"Anonymized"},"Meta Element":{action:"copy",value:null},Acquisition:{action:"copy",value:null},"Image Presentation":{action:"copy",value:null},Procedure:{action:"copy",value:null},"Pixel Data":{action:"copy",value:null}})}getElementToWrite(e){const t=e.tag.getGroupName(),n=e.tag.getNameFromDictionary();let i;return i=void 0!==this.#io[e.tag.getKey()]?this.#io[e.tag.getKey()]:void 0!==n&&void 0!==this.#io[n]?this.#io[n]:void 0!==this.#io[t]?this.#io[t]:this.#io.default,this.#to[i.action](e,i.value)}#lo(e,t,n,i){let r=null;for(let o=0;o<n.length;++o){r=n[o];const a=Object.keys(r);if(0===a.length)continue;let s=!1;void 0!==r.FFFEE000.undefinedLength&&(s=r.FFFEE000.undefinedLength);const l=new oe("NONE");l.vl=s?4294967295:r.FFFEE000.vl,l.tag=B(),l.value=[],t=this.#co(e,l,t,i);for(let n=0;n<a.length;++n)"FFFEE000"!==a[n]&&"FFFEE00D"!==a[n]&&(t=this.#co(e,r[a[n]],t,i));if(s){const n=new oe("NONE");n.vl=0,n.tag=new Q("FFFE","E00D"),n.value=[],t=this.#co(e,n,t,i)}}return t}#uo(e,t,n,i,r){const o=n;if("NONE"===t.vr);else if(i instanceof Uint8Array)n=i.length===8*t.vl?e.writeBinaryArray(n,i):e.writeUint8Array(n,i);else if(i instanceof Int8Array)n=e.writeInt8Array(n,i);else if(i instanceof Uint16Array)n=e.writeUint16Array(n,i);else if(i instanceof Int16Array)n=e.writeInt16Array(n,i);else if(i instanceof Uint32Array)n=e.writeUint32Array(n,i);else if(i instanceof Int32Array)n=e.writeInt32Array(n,i);else if(i instanceof BigUint64Array)n=e.writeUint64Array(n,i);else if(i instanceof BigInt64Array)n=e.writeInt64Array(n,i);else{const o=U[t.vr];if(void 0!==o)if("Uint8"===o)n=e.writeUint8Array(n,i);else if("Uint16"===o)n=e.writeUint16Array(n,i);else if("Int16"===o)n=e.writeInt16Array(n,i);else if("Uint32"===o)n=e.writeUint32Array(n,i);else if("Int32"===o)n=e.writeInt32Array(n,i);else if("Uint64"===o)n=e.writeUint64Array(n,i);else if("Int64"===o)n=e.writeInt64Array(n,i);else if("Float32"===o)n=e.writeFloat32Array(n,i);else if("Float64"===o)n=e.writeFloat64Array(n,i);else{if("string"!==o)throw Error("Unknown VR type: "+o);n=e.writeUint8Array(n,i)}else if("SQ"===t.vr)n=this.#lo(e,n,i,r);else if("AT"===t.vr)for(let t=0;t<i.length;++t){const r=i[t]+"",o=r.substring(1,5),a=r.substring(6,10),s=[parseInt(o,16),parseInt(a,16)];n=e.writeUint16Array(n,s)}else g.warn("Unknown VR: "+t.vr)}if("SQ"!==t.vr&&"NONE"!==t.vr){const e=n-o;e!==t.vl&&g.warn("Offset difference and VL are not equal: "+e+" != "+t.vl+", vr:"+t.vr)}return n}#do(e,t,n,i,r){let o=!1;if(void 0!==t.undefinedLength&&(o=t.undefinedLength),o){const o={};o.FFFEE000={tag:B(),vr:"NONE",vl:0,value:[]};for(let e=0;e<i.length;++e)o[e]={tag:B(),vr:t.vr,vl:i[e].length,value:i[e]};n=this.#lo(e,n,[o],r)}else{let o=i[0];i.length>1&&(o=function(e){const t=e.length,n=e[0].length;if(void 0===n)return e;const i=t*n,r=new e[0].constructor(i);for(let i=0;i<t;i++){const t=i*n;r.set(e[i],t)}return r}(i)),n=this.#uo(e,t,n,o,r)}return n}#co(e,t,n,i){const r=t.tag.isWithVR(),o=!(!i&&r)||R(t.vr);n=e.writeHex(n,t.tag.getGroup()),n=e.writeHex(n,t.tag.getElement());let a=t.vr;this.#eo&&t.tag.isPrivate()&&"SQ"===a&&(g.warn("Write element using VR=UN for private sequence."),a="UN"),r&&!i&&(n=e.writeUint8Array(n,this.#ao(a)),o&&(n+=2));let s=!1;("SQ"===t.vr||k(t.tag))&&void 0!==t.undefinedLength&&(s=t.undefinedLength);let l=!1;N(t.tag)&&void 0!==t.undefinedLength&&(l=t.undefinedLength);let c=t.vl;(s||l)&&(c=4294967295),n=o?e.writeUint32(n,c):e.writeUint16(n,c);let u=t.value;if(void 0===u&&(u=[]),n=k(t.tag)?this.#do(e,t,n,u,i):this.#uo(e,t,n,u,i),s){const t=new oe("NONE");t.vl=0,t.tag=new Q("FFFE","E0DD"),t.value=[],n=this.#co(e,t,n,i)}return n}getBuffer(e){const t=e["00020010"].value[0],n=Se(t),i=he(t);if(void 0!==e["00080005"]){const t=e["00080005"].value[0];void 0!==t&&"ISO-IR 6"!==t&&(g.debug("Change charset to UTF, was: "+t),this.useSpecialTextEncoder(),e["00080005"].value=["ISO_IR 192"])}let r;void 0!==e["00280100"]&&(r=e["00280100"].value[0]);let o=132,a=0;const s=[],l=[];let c,u,d=0;const S=new Q("0002","0000"),h=new Q("0002","0001"),m=new Q("0002","0012"),p=new Q("0002","0013"),f=Object.keys(e);for(let t=0,i=f.length;t<i;++t){const i=e[f[t]];i.tag=M(f[t]),c=this.getElementToWrite(i),null===c||S.equals(c.tag)||h.equals(c.tag)||m.equals(c.tag)||p.equals(c.tag)||(a=0,Zn(c),this.#So(c,c.value,n,r),u=c.tag.getGroupName(),a+=ye(c.vr,"Meta Element"!==u&&n),a+=c.vl,"Meta Element"===u?(s.push(c),d+=a):l.push(c),o+=a)}const D=Kn("FileMetaInformationVersion");let y=ye(D.vr,!1);y+=this.#So(D,[0,1],!1),s.push(D),d+=y,o+=y;const C=Kn("ImplementationClassUID");let v=ye(C.vr,!1);v+=this.#So(C,[Wn("ImplementationClassUID")],!1),s.push(C),d+=v,o+=v;const T=Kn("ImplementationVersionName");let I=ye(T.vr,!1);I+=this.#So(T,["DWV_0.32.2"],!1),s.push(T),d+=I,o+=I;const L=function(e,t){return function(e,t){let n=parseInt(e.getGroup(),16)-parseInt(t.getGroup(),16);return 0===n&&(n=parseInt(e.getElement(),16)-parseInt(t.getElement(),16)),n}(e.tag,t.tag)};s.sort(L),l.sort(L);const P=Kn("FileMetaInformationGroupLength");let O=ye(P.vr,!1);O+=this.#So(P,new Uint32Array([d]),!1),o+=O;const w=new ArrayBuffer(o),A=new Gn(w),x=new Gn(w,!i);let b=128;b=A.writeUint8Array(b,this.#ao("DICM")),b=this.#co(A,P,b,!1);for(let e=0,t=s.length;e<t;++e)b=this.#co(A,s[e],b,!1);const F=132+O+d;b!==F&&g.warn("Bad size calculation... meta offset: "+b+", calculated size:"+F+" (diff:"+(b-F)+")");for(let e=0,t=l.length;e<t;++e)b=this.#co(x,l[e],b,n);return b!==o&&g.warn("Bad size calculation... final offset: "+b+", calculated size:"+o+" (diff:"+(b-o)+")"),w}#So(e,t,n,i){let r=0;if("SQ"===e.vr){if(null!==t&&0!==t){const o=[];let a,s=!1;void 0!==e.undefinedLength&&(s=e.undefinedLength,delete e.undefinedLength);for(let e=0;e<t.length;++e){const l=t[e],c={};let u=0;if(null===l||0===l)continue;const d=Object.keys(l);for(let e=0,t=d.length;e<t;++e){const t=d[e],r=l[t];r.tag=M(t),N(r.tag)||(u+=this.#So(r,r.value,n,i),c[t]=r,u+=ye(r.vr,n))}const S={tag:B(),vr:"NONE",vl:u,value:[]};s&&(S.undefinedLength=s),a=S.tag.getKey(),c[a]=S,u+=ye(S.vr,n),s&&(u+=ye("NONE",n)),r+=u,o.push(c)}s&&(r+=ye("NONE",n)),e.value=o,e.vl=r,s&&(e.undefinedLength=s)}}else{if(Yn(o=e.vr)||"OB"===o){const n=function(e){let t="";return Yn(e)&&(t="UI"===e?"\0":" "),t}(e.vr);if(Yn(e.vr)){let i;q(e.vr)?(t=this.#so(t.join("\\")),i=this.#so(n)):(t=this.#ao(t.join("\\")),i=this.#ao(n)),zn(t.length)||(t=Xn(t,i))}else"OB"===e.vr&&(t=function(e){if(null==e||void 0===e.length)throw new Error("Cannot pad undefined or null OB value.");if(0!==e.length&&void 0!==e[0].length){let t=0;for(let n=0;n<e.length;++n)t+=e[n].length;zn(t)||(e[e.length-1]=Xn(e[e.length-1],[0]))}else zn(e.length)||(e=Xn(e,[0]));return e}(t))}if(r=0,"AT"===e.vr)r=4*t.length;else if("xs"===e.vr)r=t.length*Uint16Array.BYTES_PER_ELEMENT;else if(function(e){const t=U[e];return void 0!==t&&"string"!==t}(e.vr)||"ox"===e.vr){if(k(e.tag)&&Array.isArray(t)){r=0;for(let e=0;e<t.length;++e)r+=t[e].length}else r=t.length;const o=U[e.vr];if(k(e.tag)||"ox"===e.vr)if(e.undefinedLength){const e=ye("NONE",n);r+=e,r+=e*t.length,r+=e}else void 0!==i&&(1===i?r/=8:16===i&&(r*=Uint16Array.BYTES_PER_ELEMENT));else{if(void 0===o)throw Error("Unsupported element: "+e.vr);{const e=function(e){let t;return"Uint8"===e?t=Uint8Array.BYTES_PER_ELEMENT:"Uint16"===e?t=Uint16Array.BYTES_PER_ELEMENT:"Int16"===e?t=Int16Array.BYTES_PER_ELEMENT:"Uint32"===e?t=Uint32Array.BYTES_PER_ELEMENT:"Int32"===e?t=Int32Array.BYTES_PER_ELEMENT:"Float32"===e?t=Float32Array.BYTES_PER_ELEMENT:"Float64"===e?t=Float64Array.BYTES_PER_ELEMENT:"Uint64"===e?t=BigUint64Array.BYTES_PER_ELEMENT:"Int64"===e&&(t=BigInt64Array.BYTES_PER_ELEMENT),t}(o);if(void 0===e)throw Error("Unknown bytes per element for VR type: "+o);r*=e}}}else r=t.length;e.value=t,e.vl=r}var o;return r}}function Zn(e){if("UN"===e.vr){const t=e.tag.getVrFromDictionary();void 0!==t&&e.vr!==t&&(e.vr=t,g.info("Element "+e.tag.getGroup()+" "+e.tag.getElement()+" VR changed from UN to "+e.vr))}}function Kn(e){const t=H(e),n=new oe(t.getVrFromDictionary());return n.tag=t,n}function Jn(e){const t=Object.keys(e),n={};for(let i=0,r=t.length;i<r;++i){const r=H(t[i]);if(void 0===r)continue;const o=r.getVrFromDictionary();let a,s=!1;const l=e[t[i]];if("SQ"===o){const e=[];if(void 0!==l.undefinedLength&&(s=l.undefinedLength),void 0!==l.value&&null!==l.value)for(let t=0;t<l.value.length;++t)e.push(Jn(l.value[t]));else g.trace("Undefined or null jsonTag SQ value.");a=e}else a=Array.isArray(l)?l:[l];const c=new oe(o);c.tag=r,c.value=a,s&&(c.undefinedLength=s),n[r.getKey()]=c}return n}}(),a}()}));
