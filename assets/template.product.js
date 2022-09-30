! function(a) {
    function t(t) {
        for (var d, l, o = t[0], s = t[1], n = t[2], c = 0, f = []; c < o.length; c++) l = o[c], i[l] && f.push(i[l][0]), i[l] = 0;
        for (d in s) Object.prototype.hasOwnProperty.call(s, d) && (a[d] = s[d]);
        for (u && u(t); f.length;) f.shift()();
        return r.push.apply(r, n || []), e()
    }

    function e() {
        for (var a, t = 0; t < r.length; t++) {
            for (var e = r[t], d = !0, o = 1; o < e.length; o++) {
                var s = e[o];
                0 !== i[s] && (d = !1)
            }
            d && (r.splice(t--, 1), a = l(l.s = e[0]))
        }
        return a
    }
    var d = {},
        i = {
            21: 0
        },
        r = [];

    function l(t) {
        if (d[t]) return d[t].exports;
        var e = d[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return a[t].call(e.exports, e, e.exports, l), e.l = !0, e.exports
    }
    l.m = a, l.c = d, l.d = function(a, t, e) {
        l.o(a, t) || Object.defineProperty(a, t, {
            enumerable: !0,
            get: e
        })
    }, l.r = function(a) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(a, "__esModule", {
            value: !0
        })
    }, l.t = function(a, t) {
        if (1 & t && (a = l(a)), 8 & t) return a;
        if (4 & t && "object" == typeof a && a && a.__esModule) return a;
        var e = Object.create(null);
        if (l.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: a
            }), 2 & t && "string" != typeof a)
            for (var d in a) l.d(e, d, function(t) {
                return a[t]
            }.bind(null, d));
        return e
    }, l.n = function(a) {
        var t = a && a.__esModule ? function() {
            return a.default
        } : function() {
            return a
        };
        return l.d(t, "a", t), t
    }, l.o = function(a, t) {
        return Object.prototype.hasOwnProperty.call(a, t)
    }, l.p = "";
    var o = window.shopifySlateJsonp = window.shopifySlateJsonp || [],
        s = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var n = 0; n < o.length; n++) t(o[n]);
    var u = s;
    r.push([119, 0]), e()
}({
    0: function(a, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d, i = l(e(2)),
            r = l(e(1));

        function l(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        t.default = (d = {
            siteOverlay: "[data-site-overlay]",
            $siteOverlay: (0, r.default)("[data-site-overlay]"),
            hoverOverlay: "[data-hover-overlay]",
            $hoverOverlay: (0, r.default)("[data-hover-overlay]"),
            $html: (0, r.default)("html"),
            $body: (0, r.default)("body"),
            scrollElement: "[data-scroll]",
            navDropdownTrigger: "[data-nav-dropdown-trigger]",
            navDropdown: "[data-nav-dropdown]",
            headerNav: "[data-header-nav]",
            mobileNavTrigger: "[data-mobile-nav-trigger]",
            mobileNav: "[data-mobile-nav]",
            siteHeader: "[data-header]",
            siteSearch: "[data-search]",
            siteSearchContainer: "[data-header-search-container]",
            cartTotal: "[data-cart-count]",
            stickyHeader: "[data-sticky-header]",
            stickySearch: "[data-sticky-search]",
            heroSlider: "[data-hero-slider]",
            collectionSlider: "[data-collection-slider]",
            collectionSlide: "[data-collection-slide]",
            featureFilterSlider: "[data-feature-filter-slider]",
            featureFilterSlide: "[data-feature-filter-slide]",
            originalPosterSlider: "[data-original-poster-slider]",
            instagramSlider: "[data-instagram-slider]",
            featureFilterContainer: "[data-feature-filter-container]",
            featureFilter: "[data-feature-filter]",
            featureFilterTrigger: "[data-feature-filter-trigger]",
            responsiveImageSwap: "[data-responsive-image-swap]",
            glossaryTerm: "[data-glossary-term]",
            glossaryTermTrigger: "[data-glossary-term-trigger]",
            glossaryAllTerms: "[data-glossary-all-terms]",
            glossaryAllTermsTrigger: "[data-glossary-all-terms-trigger]",
            formatTerm: "[data-format-term]",
            formatTermTrigger: "[data-format-term-trigger]",
            atcPrice: "[data-add-to-cart-price]",
            productPrice: "[data-product-price]",
            comparePrice: "[data-product-compare-price]",
            printOption: "[data-print-option]",
            printButton: "[data-print-button]",
            finishBlocks: "[data-finish-block]",
            finishPanel: "[data-finish-panel]",
            finishRemove: "[data-finish-remove]",
            customFinishId: "[data-custom-finish-id]",
            customFinish: "[data-custom-finish]",
            customFinishPrice: "[data-custom-finish-price]",
            property: "[data-property]",
            selectize: "[data-selectize]",
            atcBtn: "[data-add-to-cart]",
            finishMoreOptionsTrigger: "[data-finish-more-trigger]",
            finishMoreOptions: "[data-finish-more]",
            finishAddon: "[data-finish-addon-product]",
            finishAddonTrigger: "[data-finish-addon-trigger]",
            customFinishAddon: "[data-custom-finish-addon]",
            customFinishAddonId: "[data-custom-finish-addon-id]",
            imdbDetails: "[data-imdb-details]",
            imdbDescription: "[data-imdb-description]",
            imdbDirector: "[data-imdb-director]",
            imdbWriters: "[data-imdb-writers]",
            imdbActors: "[data-imdb-actors]",
            imdbYear: "[data-imdb-year]",
            loginForm: "[data-login]",
            recoverForm: "[data-recover-password]",
            recoverFormTrigger: "[data-recover-password-trigger]",
            resetSuccessMessage: "[data-reset-success]",
            resetSuccessTrigger: "[data-reset-success-trigger]",
            addressTrigger: "[data-address-trigger]",
            addressForm: "[data-address-form]",
            addressCancelTrigger: "[data-address-cancel-trigger]",
            countrySelector: "[data-address-country]",
            provinceSelector: "[data-address-province]",
            deleteForm: "[data-address-delete-form]",
            cartContainer: "[data-cart-container]",
            lineItem: "[data-line-item]",
            lineItemRemoveTrigger: "[data-line-item-remove-trigger]",
            lineItemProperty: "[data-line-item-property]",
            lineItemCustomFinishId: "[data-line-item-custom-finish-id]",
            customFinishLineItem: "[data-line-item-custom-finish-product]",
            cartSummarySubtotal: "[data-summary-subtotal]",
            cartSummaryTotal: "[data-summary-total]",
            qty: "[data-quantity]",
            qtyAdjust: "[data-quantity-adjust]",
            qtyInput: "[data-quantity-input]",
            addon: "[data-addon]",
            addonTrigger: "[data-addon-trigger]",
            addonItemTrigger: "[data-addon-item-trigger]",
            addonLineItem: "[data-addon-line-item]",
            addonEditTrigger: "[data-addon-edit-trigger]",
            addonRemoveTrigger: "[data-addon-remove-trigger]",
            addonQty: "[data-quantity-addon]",
            addonQtyAdjust: "[data-quantity-adjust-addon]",
            addonQtyInput: "[data-quantity-input-addon]",
            quickviewContainer: "[data-quickview-container]",
            quickview: "[data-quickview]",
            quickviewForm: "[data-quickview-form]",
            product: "[data-product]",
            productForm: "[data-product-form]",
            productVariant: "[data-product-selected-variant]",
            productMeta: "[data-product-meta]",
            productDimensions: "[data-product-dimensions]",
            cartPopup: "[data-cart-popup]",
            cartPopupCloseTrigger: "[data-cart-popup-close-trigger]",
            cartPopupLink: "[data-cart-popup-cart-link]",
            cartPopupImage: "[data-cart-popup-image]",
            cartPopupTitle: "[data-cart-popup-title]",
            cartPopupPrice: "[data-cart-popup-price]",
            cartPopupFinish: "[data-cart-popup-finish]",
            cartPopupTags: "[data-cart-popup-tags]",
            cartPopupDimensions: "[data-cart-popup-dimensions]",
            cartPopupCount: "[data-cart-popup-count]"
        }, (0, i.default)(d, "cartPopupFinish", "[data-cart-popup-finish]"), (0, i.default)(d, "collectionFilterToggle", "[data-filter-toggle]"), (0, i.default)(d, "collectionFilters", "[data-collection-filters]"), (0, i.default)(d, "collectionContent", "[data-collection-content]"), (0, i.default)(d, "collectionHeader", "[data-collection-header]"), (0, i.default)(d, "collectionSortingToggle", "[data-collection-sorting-toggle]"), (0, i.default)(d, "collectionSorting", "[data-collection-sorting]"), (0, i.default)(d, "paginateInput", "[data-pagination-input]"), (0, i.default)(d, "customFrameInput", "[data-custom-frame-input]"), (0, i.default)(d, "customFrameWidth", "[data-custom-frame-width]"), (0, i.default)(d, "customFrameHeight", "[data-custom-frame-height]"), (0, i.default)(d, "customFrame", "[data-custom-frame]"), (0, i.default)(d, "customFrameCloseTrigger", "[data-custom-frame-close-trigger]"), (0, i.default)(d, "frameTrigger", "[data-frame-trigger]"), (0, i.default)(d, "frameDropdown", "[data-frame-dropdown]"), (0, i.default)(d, "customFrameSizeTrigger", "[data-custom-frame-size-trigger]"), (0, i.default)(d, "frameSizeTrigger", "[data-frame-size-trigger]"), (0, i.default)(d, "frameRange", "[data-frame-range]"), (0, i.default)(d, "customFrameError", "[data-custom-frame-error]"), (0, i.default)(d, "frameFeatureImage", "[data-frame-image]"), (0, i.default)(d, "frameFinish", "[data-frame-finish-select]"), (0, i.default)(d, "rewardsDetails", "[data-rewards-details]"), (0, i.default)(d, "rewardsDetailsTrigger", "[data-rewards-details-trigger]"), (0, i.default)(d, "sizeDropdownTrigger", "[data-size-dropdown-trigger]"), (0, i.default)(d, "sizeDropdown", "[data-size-dropdown]"), (0, i.default)(d, "optionTrigger", "[data-option-trigger]"), d)
    },
    119: function(a, t, e) {
        "use strict";
        e(120);
        var d = e(121),
            i = e(9),
            r = e(122),
            l = (e(123), e(124));
        document.addEventListener("DOMContentLoaded", function() {
            (0, d.init)(), (0, i.init)(), (0, r.init)(), (0, l.init)()
        }), $(document).on("shopify:section:load", function() {
            (0, d.init)(), (0, i.init)(), (0, r.init)(), (0, l.init)()
        })
    },
    120: function(a, t, e) {},
    121: function(a, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = void 0;
        var d = i(e(1));

        function i(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        i(e(16)), i(e(0)), t.init = function() {
            ! function() {
                var a = (0, d.default)("[data-product-image-next]"),
                    t = (0, d.default)("[data-product-image-prev]");
                a.click(function() {
                    var a = (0, d.default)("[data-product-image]").filter(".active"),
                        t = a.next("[data-product-image]");
                    t.length <= 0 && (t = a.prev("[data-product-image]").first()), a.removeClass("active").find("[data-product-image-wrapper]").addClass("hide"), t.addClass("active"), t.find("[data-product-image-wrapper]").removeClass("hide")
                }), t.click(function() {
                    var a = (0, d.default)("[data-product-image]").filter(".active"),
                        t = a.prev("[data-product-image]");
                    t.length <= 0 && (t = a.next("[data-product-image]").last()), a.removeClass("active").find("[data-product-image-wrapper]").addClass("hide"), t.addClass("active"), t.find("[data-product-image-wrapper]").removeClass("hide")
                })
            }()
        }
    },
    122: function(a, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = void 0;
        var d = r(e(1)),
            i = r(e(0));

        function r(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        t.init = function() {
            (0, d.default)(".js-open-glossary").on("click", function(a) {
                (0, d.default)(".glossary--pdp").addClass("is-active"), (0, d.default)(window).width() < 728 && (i.default.$hoverOverlay.addClass("is-active"), i.default.$html.addClass("drawer-active"))
            }), (0, d.default)(".glossary__close").on("click", function(a) {
                (0, d.default)(".glossary--pdp").removeClass("is-active"), i.default.$hoverOverlay.removeClass("is-active"), i.default.$html.removeClass("drawer-active")
            })
        }
    },
    123: function(a, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = void 0;
        var d = o(e(1)),
            i = o(e(4)),
            r = function(a) {
                if (a && a.__esModule) return a;
                var t = {};
                if (null != a)
                    for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (t[e] = a[e]);
                return t.default = a, t
            }(e(7)),
            l = o(e(0));

        function o(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var s = (0, d.default)("body").attr("data-shop-currency");
        t.init = function() {
            ! function() {
                var a = (0, d.default)(l.default.printOption);
                a.on("click", function(t) {
                    var e = (0, d.default)(this);
                    if (e.hasClass("selected")) return !0;
                    var o = e.find(l.default.printButton),
                        n = e.attr("data-print-type");
                    (0, d.default)(".pdp__images--print-type.active").removeClass("active"), (0, d.default)('.pdp__images--print-type[data-print-type="' + n + '"]').addClass("active"), a.removeClass("selected"), (0, d.default)(l.default.printButton).removeClass("selected"), e.addClass("selected"), o.addClass("selected"), "original" === n ? ((0, d.default)(".original-badge").addClass("is-active"), (0, d.default)("[data-finish-warning]").addClass("is-active")) : ((0, d.default)(".original-badge").removeClass("is-active"), (0, d.default)("[data-finish-warning]").removeClass("is-active"));
                    var u = e.attr("data-variant-id");
                    (0, d.default)(".pdp__product-id").val(u), (0, d.default)(".pdp__dimensions span").addClass("hide").removeAttr("data-product-dimensions"), (0, d.default)(".pdp__dimensions .pdp__dimensions--" + n).removeClass("hide").attr("data-product-dimensions", ""), (0, d.default)(".pdp__meta-details .pdp__meta-tags").addClass("hide").removeAttr("data-product-meta"), (0, d.default)(".pdp__meta-details .pdp__meta-tags--" + n).removeClass("hide").attr("data-product-meta", "");
                    var c = parseFloat(e.attr("data-price")),
                        f = parseFloat(e.attr("data-compare-price"));
                    if (c) {
                        var p = void 0,
                            m = void 0;
                        if (i.default.get("finish_type")) {
                            var v = parseFloat(i.default.get("finish_price")),
                                h = v + c;
                            if (p = r.formatMoney(h, "${{amount}} " + s), f > 0) {
                                var g = v + f;
                                m = r.formatMoney(g, "${{amount}} " + s)
                            }
                        } else p = r.formatMoney(c, "${{amount}} " + s), f > 0 && (m = r.formatMoney(f, "${{amount}} " + s));
                        (0, d.default)(l.default.atcPrice).html(p), (0, d.default)(l.default.productPrice).html(p), f > 0 ? (0, d.default)(l.default.comparePrice).html(m).removeClass("hide") : (0, d.default)(l.default.comparePrice).addClass("hide")
                    }
                })
            }()
        }
    },
    124: function(a, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = void 0;
        var d = function(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }(e(0));
        t.init = function() {
            if ($(d.default.imdbDetails).length > 0) {
                var a = $(d.default.imdbDetails).attr("data-imdb-id");
                i(a)
            }
        };
        var i = function(a) {
            $.get("https://www.omdbapi.com/?i=tt" + a + "&apikey=60d69ab4").then(function(a) {
                var t = a.Plot,
                    e = a.Director,
                    i = a.Writer,
                    r = a.Actors,
                    l = a.Year;
                $(d.default.imdbDescription).text(t), $(d.default.imdbDirector).text(e), $(d.default.imdbWriters).text(i), $(d.default.imdbActors).text(r), $(d.default.imdbYear).text(l)
            })
        }
    },
    9: function(a, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = void 0;
        var d = o(e(1)),
            i = o(e(0)),
            r = o(e(4)),
            l = function(a) {
                if (a && a.__esModule) return a;
                var t = {};
                if (null != a)
                    for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (t[e] = a[e]);
                return t.default = a, t
            }(e(7));

        function o(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var s = (0, d.default)("body").attr("data-shop-currency"),
            n = (0, d.default)(i.default.productForm);
        t.init = function() {
            r.default.remove("finish_price"), r.default.remove("finish_type"), r.default.remove("finish_code"),
                function() {
                    function a(a) {
                        (0, d.default)(i.default.finishPanel).is(a.target) || 0 !== (0, d.default)(i.default.finishPanel).has(a.target).length || (0, d.default)(i.default.finishPanel).hasClass("is-active") && (0, d.default)(i.default.finishPanel).removeClass("is-active")
                    }(0, d.default)(document).on("click", ".js-finish-panel-trigger", function(a) {
                        if ((0, d.default)(a.target).hasClass("tooltip-link")) return !0;
                        var t = (0, d.default)(this).attr("data-frame-handle");
                        if (t) {
                            var e = (0, d.default)('.pdp__finish-panel[data-frame-handle="' + t + '"]');
                            (0, d.default)(".pdp__finish-panel").removeClass("is-active"), e.addClass("is-active"), 0 < (0, d.default)(window).scrollTop() && (0, d.default)("html, body").animate({
                                scrollTop: 0
                            }, 500), (0, d.default)(window).width() < 728 && (i.default.$hoverOverlay.addClass("is-active"), i.default.$html.addClass("drawer-active"))
                        }
                    }), (0, d.default)(document).on("click", "[data-finish-select]", function(a) {
                        var t = (0, d.default)(this);
                        if (t.hasClass("unavailable")) return !1;
                        var e = t.attr("data-variant-id"),
                            o = t.attr("data-frame-handle"),
                            u = t.attr("data-frame-title");
                        if (null != t.attr("data-variant-title") && u != t.attr("data-variant-title") && (u += ", " + t.attr("data-variant-title")), t.hasClass("selected")) {
                            if (t.removeClass("selected"), o) {
                                var c = (0, d.default)('.js-finish-panel-trigger[data-frame-handle="' + o + '"]'),
                                    f = c.attr("data-image-src");
                                c.removeClass("selected"), c.find("img").attr("src", f)
                            }
                            r.default.remove("finish_type"), (0, d.default)(i.default.customFinish).val(null), (0, d.default)(i.default.customFinishId).val(null), (0, d.default)(i.default.customFinishPrice).val(null);
                            var p = parseFloat(n.attr("data-price")),
                                m = l.formatMoney(p, "${{amount}} " + s);
                            (0, d.default)("[data-product-price]").html(m), (0, d.default)("[data-add-to-cart-price]").html(m);
                            var v = parseFloat(n.attr("data-compare-price"));
                            if (v > 0) {
                                var h = l.formatMoney(v, "${{amount}} " + s);
                                (0, d.default)("[data-product-compare-price]").html(h).removeClass("hide")
                            }
                            t.closest("[data-finish-panel]").length > 0 && t.closest("[data-finish-panel]").find(i.default.finishAddon).removeClass("is-active")
                        } else {
                            if ((0, d.default)("[data-finish-select]").removeClass("selected"), t.addClass("selected"), o) {
                                var g = t.find("img").attr("src");
                                (0, d.default)(".js-finish-panel-trigger").removeClass("selected");
                                var y = (0, d.default)('.js-finish-panel-trigger[data-frame-handle="' + o + '"]');
                                y.addClass("selected"), y.find("img").attr("src", g)
                            }
                            var C = parseFloat(t.attr("data-price"));
                            if (C) {
                                var _ = parseFloat(n.attr("data-price")),
                                    b = parseFloat(n.attr("data-compare-price")),
                                    F = C + _,
                                    w = C + b,
                                    P = l.formatMoney(F, "${{amount}} " + s);
                                if ((0, d.default)("[data-product-price]").html(P), (0, d.default)("[data-add-to-cart-price]").html(P), b > 0) {
                                    var T = l.formatMoney(w, "${{amount}} " + s);
                                    (0, d.default)("[data-product-compare-price]").html(T).removeClass("hide")
                                } else(0, d.default)("[data-product-compare-price]").addClass("hide");
                                r.default.set("finish_price", C), (0, d.default)(i.default.customFinishPrice).val(P)
                            }
                            var M = t.attr("data-frame-supplier-code");
                            r.default.set("finish_code", M), "" === (0, d.default)(this).attr("data-finish-dry-mounted-activate") ? (0, d.default)("[data-finish-dry-mounted]").addClass("is-active") : (0, d.default)("[data-finish-dry-mounted]").removeClass("is-active"), "" === (0, d.default)(this).attr("data-finish-addon-activate") ? (0, d.default)("[data-finish-addon-product]").addClass("is-active") : (0, d.default)("[data-finish-addon-product]").removeClass("is-active"), r.default.set("finish_type", e), (0, d.default)(i.default.customFinishId).val(e), (0, d.default)(i.default.customFinish).val(u)
                        }(0, d.default)(i.default.finishAddonTrigger).removeClass("is-active"), (0, d.default)(i.default.customFinishAddon).val(null), (0, d.default)(i.default.customFinishAddonId).val(null), t.parents(".pdp__finish-panel").removeClass("is-active"), i.default.$hoverOverlay.removeClass("is-active"), i.default.$html.removeClass("drawer-active")
                    }), (0, d.default)("#siteContent").on("click", a), (0, d.default)("#siteContent").on("click", "*", a), (0, d.default)(document).on("keyup", function(t) {
                        27 == t.keyCode && a(i.default.finishPanel)
                    }), (0, d.default)(document).on("click", ".pdp__close--finish", function(a) {
                        (0, d.default)(this).parents(".pdp__finish-panel").removeClass("is-active"), i.default.$hoverOverlay.removeClass("is-active"), i.default.$html.removeClass("drawer-active")
                    }), (0, d.default)(document).on("click", i.default.finishMoreOptionsTrigger, function() {
                        (0, d.default)(this).remove(), (0, d.default)(i.default.finishMoreOptions).addClass("is-active")
                    }), (0, d.default)(document).on("click", "[data-finish-dry-mounted-trigger]", function() {
                        (0, d.default)(this).hasClass("is-active") ? ((0, d.default)(this).removeClass("is-active"), (0, d.default)("[data-custom-finish-dry-mounted]").val("Not Dry Mounted")) : ((0, d.default)(this).addClass("is-active"), (0, d.default)("[data-custom-finish-dry-mounted]").val("Dry Mounted"))
                    }), (0, d.default)(document).on("click", i.default.finishAddonTrigger, function() {
                        var a = (0, d.default)(this).closest(i.default.finishAddon),
                            t = parseFloat(a.attr("data-price")),
                            e = parseFloat(r.default.get("finish_price")),
                            o = parseFloat(n.attr("data-price")),
                            u = parseFloat(n.attr("data-compare-price"));
                        if ((0, d.default)(this).hasClass("is-active")) {
                            (0, d.default)(this).removeClass("is-active"), (0, d.default)(i.default.customFinishAddon).val(null), (0, d.default)(i.default.customFinishAddonId).val(null);
                            var c = e + o,
                                f = e + u,
                                p = l.formatMoney(c, "${{amount}} " + s);
                            if ((0, d.default)("[data-product-price]").html(p), (0, d.default)("[data-add-to-cart-price]").html(p), u > 0) {
                                var m = l.formatMoney(f, "${{amount}} " + s);
                                (0, d.default)("[data-product-compare-price]").html(m).removeClass("hide")
                            } else(0, d.default)("[data-product-compare-price]").addClass("hide");
                            (0, d.default)(i.default.customFinishPrice).val(p)
                        } else {
                            (0, d.default)(this).addClass("is-active");
                            var v = a.attr("data-product-title"),
                                h = a.attr("data-variant-id");
                            if (t) {
                                var g = t + e + o,
                                    y = t + e + u,
                                    C = l.formatMoney(g, "${{amount}} " + s);
                                if ((0, d.default)("[data-product-price]").html(C), (0, d.default)("[data-add-to-cart-price]").html(C), u > 0) {
                                    var _ = l.formatMoney(y, "${{amount}} " + s);
                                    (0, d.default)("[data-product-compare-price]").html(_).removeClass("hide")
                                } else(0, d.default)("[data-product-compare-price]").addClass("hide");
                                (0, d.default)(i.default.customFinishPrice).val(C)
                            }(0, d.default)(i.default.customFinishAddon).val(v), (0, d.default)(i.default.customFinishAddonId).val(h)
                        }
                    }), (0, d.default)(document).on("click", i.default.finishRemove, function(){
                     //   if ((0, d.default)(this).siblings(".pdp__finish-block").hasClass("selected")) {
                            (0, d.default)(".pdp__finish-block").removeClass("selected");
                            var a = (0, d.default)(this).siblings(".pdp__finish-block");
                            if (a.hasClass("unavailable")) return !1;
                            a.attr("data-variant-id");
                            var t = a.attr("data-frame-handle"),
                                e = a.attr("data-frame-title");
                            if (null != a.attr("data-variant-title") && e != a.attr("data-variant-title") && (e += ", " + a.attr("data-variant-title")), t) {
                                var o = (0, d.default)('.js-finish-panel-trigger[data-frame-handle="' + t + '"]'),
                                    u = o.attr("data-image-src");
                                o.removeClass("selected"), o.find("img").attr("src", u);
                              $('.thick-thin-frame').find('img').attr('src', u);
                            }(0, d.default)("[data-finish-dry-mounted]").hasClass("is-active") && (0, d.default)("[data-finish-dry-mounted]").removeClass("is-active"), (0, d.default)("[data-finish-addon-product]").hasClass("is-active") && (0, d.default)("[data-finish-addon-product]").removeClass("is-active"), (0, d.default)(i.default.finishAddonTrigger).removeClass("is-active"), (0, d.default)(i.default.customFinishAddon).val(null), (0, d.default)(i.default.customFinishAddonId).val(null), r.default.remove("finish_type"), (0, d.default)(i.default.customFinish).val(null), (0, d.default)(i.default.customFinishId).val(null), (0, d.default)(i.default.customFinishPrice).val(null);
                            var c = parseFloat(n.attr("data-price")),
                                f = l.formatMoney(c, "${{amount}} " + s);
                            (0, d.default)("[data-product-price]").html(f), (0, d.default)("[data-add-to-cart-price]").html(f);
                            var p = parseFloat(n.attr("data-compare-price"));
                            if (p > 0) {
                                var m = l.formatMoney(p, "${{amount}} " + s);
                                (0, d.default)("[data-product-compare-price]").html(m).removeClass("hide")
                            }
                            a.closest("[data-finish-panel]").length > 0 && a.closest("[data-finish-panel]").find(i.default.finishAddon).removeClass("is-active")
                      //  }
                    })
                }()
        }
    }
});