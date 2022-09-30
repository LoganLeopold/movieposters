! function(a) {
    function t(t) {
        for (var d, l, s = t[0], o = t[1], n = t[2], f = 0, c = []; f < s.length; f++) l = s[f], i[l] && c.push(i[l][0]), i[l] = 0;
        for (d in o) Object.prototype.hasOwnProperty.call(o, d) && (a[d] = o[d]);
        for (u && u(t); c.length;) c.shift()();
        return r.push.apply(r, n || []), e()
    }

    function e() {
        for (var a, t = 0; t < r.length; t++) {
            for (var e = r[t], d = !0, s = 1; s < e.length; s++) {
                var o = e[s];
                0 !== i[o] && (d = !1)
            }
            d && (r.splice(t--, 1), a = l(l.s = e[0]))
        }
        return a
    }
    var d = {},
        i = {
            23: 0
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
    var s = window.shopifySlateJsonp = window.shopifySlateJsonp || [],
        o = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var n = 0; n < s.length; n++) t(s[n]);
    var u = o;
    r.push([116, 0]), e()
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
    116: function(a, t, e) {
        "use strict";
        e(117);
        var d = e(9),
            i = e(12);
        document.addEventListener("DOMContentLoaded", function() {
            (0, d.init)(), (0, i.init)()
        }), $(document).on("shopify:section:load", function() {
            (0, d.init)(), (0, i.init)()
        })
    },
    117: function(a, t, e) {},
    12: function(a, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.findRange = t.init = void 0;
        var d = r(e(1)),
            i = r(e(0));

        function r(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        t.init = function() {
            o()
        };
        var l = t.findRange = function(a, t) {
                var e = parseFloat(a) * parseFloat(t),
                    r = void 0;
                (0, d.default)(i.default.frameRange).each(function() {
                    var a = parseFloat((0, d.default)(this).attr("data-frame-range-width")),
                        t = parseFloat((0, d.default)(this).attr("data-frame-range-height"));
                    if (e >= a && e <= t) return r = (0, d.default)(this).attr("data-frame-range"), !1
                }), null != r ? ((0, d.default)('.single-option-selector option[value="' + r + '"').prop("selected", !0).trigger("change"), !(0, d.default)(i.default.atcBtn).hasClass("unavailable") && (0, d.default)(i.default.frameFinish + ".selected").length > 0 ? (0, d.default)(i.default.atcBtn).prop("disabled", !1).removeClass("disabled") : (0, d.default)(i.default.atcBtn).prop("disabled", !0).addClass("disabled")) : ((0, d.default)("[data-custom-frame-error]").text("Frame is not available in this customization"), (0, d.default)(i.default.atcBtn).prop("disabled", !0).addClass("disabled"))
            },
            s = function(a) {
                "active" == a ? ((0, d.default)(i.default.frameDropdown).addClass("is-active"), (0, d.default)(i.default.frameTrigger).addClass("is-active")) : ((0, d.default)(i.default.frameDropdown).removeClass("is-active"), (0, d.default)(i.default.frameTrigger).removeClass("is-active"))
            },
            o = function() {
                (0, d.default)(document).on("keyup", i.default.customFrameInput, function() {
                    var a = (0, d.default)(i.default.customFrameWidth).val(),
                        t = (0, d.default)(i.default.customFrameHeight).val();
                    l(a, t)
                }), (0, d.default)(document).on("click", i.default.frameSizeTrigger, function() {
                    var a = (0, d.default)(this).attr("data-frame-width"),
                        t = (0, d.default)(this).attr("data-frame-height");
                    l(a, t), (0, d.default)(i.default.customFrameHeight).val(t), (0, d.default)(i.default.customFrameWidth).val(a), (0, d.default)(i.default.frameSizeTrigger).removeClass("is-active"), (0, d.default)(this).addClass("is-active"), (0, d.default)(i.default.frameTrigger).find("[data-frame-trigger-text]").text((0, d.default)(this).text()), s("inactive")
                }), (0, d.default)(document).on("click", i.default.frameTrigger, function() {
                    (0, d.default)(this).hasClass("is-active") ? s("inactive") : s("active")
                }), (0, d.default)(document).on("click", i.default.customFrameSizeTrigger, function() {
                    s("inactive"), (0, d.default)(i.default.customFrame).addClass("is-active")
                }), (0, d.default)(document).on("click", i.default.customFrameCloseTrigger, function() {
                    (0, d.default)(i.default.customFrame).removeClass("is-active")
                }), (0, d.default)(document).on("click", i.default.frameFinish, function() {
                    ! function(a) {
                        (0, d.default)(i.default.frameFeatureImage).find("img").attr("srcset", a), (0, d.default)(i.default.frameFeatureImage).find("img").attr("src", a), (0, d.default)(i.default.frameFeatureImage).find("source").attr("srcset", a)
                    }((0, d.default)(this).attr("data-feature-image")), (0, d.default)(i.default.frameFinish).removeClass("selected"), (0, d.default)(".js-finish-panel-trigger").removeClass("selected"), (0, d.default)(this).addClass("selected");
                    var a = (0, d.default)(this).attr("data-variant-title");
                    if ((0, d.default)('.single-option-selector option[value="' + a + '"').prop("selected", !0).trigger("change"), (0, d.default)(i.default.productMeta).text(a), (0, d.default)(this).parents("[data-finish-panel]").length > 0) {
                        var t = (0, d.default)(this).find("img").attr("src"),
                            e = (0, d.default)(this).parents("[data-finish-panel]").prev(".js-finish-panel-trigger");
                        e.addClass("selected"), e.find("img").attr("src", t), (0, d.default)("[data-finish-panel]").removeClass("is-active")
                    }
                })
            }
    },
    9: function(a, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = void 0;
        var d = s(e(1)),
            i = s(e(0)),
            r = s(e(4)),
            l = function(a) {
                if (a && a.__esModule) return a;
                var t = {};
                if (null != a)
                    for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (t[e] = a[e]);
                return t.default = a, t
            }(e(7));

        function s(a) {
            return a && a.__esModule ? a : {
                default: a
            }
        }
        var o = (0, d.default)("body").attr("data-shop-currency"),
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
                            s = t.attr("data-frame-handle"),
                            u = t.attr("data-frame-title");
                        if (null != t.attr("data-variant-title") && u != t.attr("data-variant-title") && (u += ", " + t.attr("data-variant-title")), t.hasClass("selected")) {
                            if (t.removeClass("selected"), s) {
                                var f = (0, d.default)('.js-finish-panel-trigger[data-frame-handle="' + s + '"]'),
                                    c = f.attr("data-image-src");
                                f.removeClass("selected"), f.find("img").attr("src", c)
                            }
                            r.default.remove("finish_type"), (0, d.default)(i.default.customFinish).val(null), (0, d.default)(i.default.customFinishId).val(null), (0, d.default)(i.default.customFinishPrice).val(null);
                            var m = parseFloat(n.attr("data-price")),
                                p = l.formatMoney(m, "${{amount}} " + o);
                            (0, d.default)("[data-product-price]").html(p), (0, d.default)("[data-add-to-cart-price]").html(p);
                            var h = parseFloat(n.attr("data-compare-price"));
                            if (h > 0) {
                                var v = l.formatMoney(h, "${{amount}} " + o);
                                (0, d.default)("[data-product-compare-price]").html(v).removeClass("hide")
                            }
                            t.closest("[data-finish-panel]").length > 0 && t.closest("[data-finish-panel]").find(i.default.finishAddon).removeClass("is-active")
                        } else {
                            if ((0, d.default)("[data-finish-select]").removeClass("selected"), t.addClass("selected"), s) {
                                var g = t.find("img").attr("src");
                                (0, d.default)(".js-finish-panel-trigger").removeClass("selected");
                                var y = (0, d.default)('.js-finish-panel-trigger[data-frame-handle="' + s + '"]');
                                y.addClass("selected"), y.find("img").attr("src", g)
                            }
                            var C = parseFloat(t.attr("data-price"));
                            if (C) {
                                var F = parseFloat(n.attr("data-price")),
                                    b = parseFloat(n.attr("data-compare-price")),
                                    T = C + F,
                                    w = C + b,
                                    _ = l.formatMoney(T, "${{amount}} " + o);
                                if ((0, d.default)("[data-product-price]").html(_), (0, d.default)("[data-add-to-cart-price]").html(_), b > 0) {
                                    var P = l.formatMoney(w, "${{amount}} " + o);
                                    (0, d.default)("[data-product-compare-price]").html(P).removeClass("hide")
                                } else(0, d.default)("[data-product-compare-price]").addClass("hide");
                                r.default.set("finish_price", C), (0, d.default)(i.default.customFinishPrice).val(_)
                            }
                            var k = t.attr("data-frame-supplier-code");
                            r.default.set("finish_code", k), "" === (0, d.default)(this).attr("data-finish-dry-mounted-activate") ? (0, d.default)("[data-finish-dry-mounted]").addClass("is-active") : (0, d.default)("[data-finish-dry-mounted]").removeClass("is-active"), "" === (0, d.default)(this).attr("data-finish-addon-activate") ? (0, d.default)("[data-finish-addon-product]").addClass("is-active") : (0, d.default)("[data-finish-addon-product]").removeClass("is-active"), r.default.set("finish_type", e), (0, d.default)(i.default.customFinishId).val(e), (0, d.default)(i.default.customFinish).val(u)
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
                            s = parseFloat(n.attr("data-price")),
                            u = parseFloat(n.attr("data-compare-price"));
                        if ((0, d.default)(this).hasClass("is-active")) {
                            (0, d.default)(this).removeClass("is-active"), (0, d.default)(i.default.customFinishAddon).val(null), (0, d.default)(i.default.customFinishAddonId).val(null);
                            var f = e + s,
                                c = e + u,
                                m = l.formatMoney(f, "${{amount}} " + o);
                            if ((0, d.default)("[data-product-price]").html(m), (0, d.default)("[data-add-to-cart-price]").html(m), u > 0) {
                                var p = l.formatMoney(c, "${{amount}} " + o);
                                (0, d.default)("[data-product-compare-price]").html(p).removeClass("hide")
                            } else(0, d.default)("[data-product-compare-price]").addClass("hide");
                            (0, d.default)(i.default.customFinishPrice).val(m)
                        } else {
                            (0, d.default)(this).addClass("is-active");
                            var h = a.attr("data-product-title"),
                                v = a.attr("data-variant-id");
                            if (t) {
                                var g = t + e + s,
                                    y = t + e + u,
                                    C = l.formatMoney(g, "${{amount}} " + o);
                                if ((0, d.default)("[data-product-price]").html(C), (0, d.default)("[data-add-to-cart-price]").html(C), u > 0) {
                                    var F = l.formatMoney(y, "${{amount}} " + o);
                                    (0, d.default)("[data-product-compare-price]").html(F).removeClass("hide")
                                } else(0, d.default)("[data-product-compare-price]").addClass("hide");
                                (0, d.default)(i.default.customFinishPrice).val(C)
                            }(0, d.default)(i.default.customFinishAddon).val(h), (0, d.default)(i.default.customFinishAddonId).val(v)
                        }
                    }), (0, d.default)(document).on("click", i.default.finishRemove, function() {
                      $('.')
                        if ((0, d.default)(this).siblings(".pdp__finish-block").hasClass("selected")) {
                          
                            (0, d.default)(".pdp__finish-block").removeClass("selected");
                            var a = (0, d.default)(this).siblings(".pdp__finish-block");
                            if (a.hasClass("unavailable")) return !1;
                            a.attr("data-variant-id");
                            var t = a.attr("data-frame-handle"),
                                e = a.attr("data-frame-title");
                            if (null != a.attr("data-variant-title") && e != a.attr("data-variant-title") && (e += ", " + a.attr("data-variant-title")), t) {
                                var s = (0, d.default)('.js-finish-panel-trigger[data-frame-handle="' + t + '"]'),
                                    u = s.attr("data-image-src");
                                s.removeClass("selected"), s.find("img").attr("src", u)
                            }(0, d.default)("[data-finish-dry-mounted]").hasClass("is-active") && (0, d.default)("[data-finish-dry-mounted]").removeClass("is-active"), (0, d.default)("[data-finish-addon-product]").hasClass("is-active") && (0, d.default)("[data-finish-addon-product]").removeClass("is-active"), (0, d.default)(i.default.finishAddonTrigger).removeClass("is-active"), (0, d.default)(i.default.customFinishAddon).val(null), (0, d.default)(i.default.customFinishAddonId).val(null), r.default.remove("finish_type"), (0, d.default)(i.default.customFinish).val(null), (0, d.default)(i.default.customFinishId).val(null), (0, d.default)(i.default.customFinishPrice).val(null);
                            var f = parseFloat(n.attr("data-price")),
                                c = l.formatMoney(f, "${{amount}} " + o);
                            (0, d.default)("[data-product-price]").html(c), (0, d.default)("[data-add-to-cart-price]").html(c);
                            var m = parseFloat(n.attr("data-compare-price"));
                            if (m > 0) {
                                var p = l.formatMoney(m, "${{amount}} " + o);
                                (0, d.default)("[data-product-compare-price]").html(p).removeClass("hide")
                            }
                            a.closest("[data-finish-panel]").length > 0 && a.closest("[data-finish-panel]").find(i.default.finishAddon).removeClass("is-active")
                        }
                    })
                }()
        }
    }
});


