! function(t) {
    function e(e) {
        for (var i, d, n = e[0], u = e[1], l = e[2], c = 0, f = []; c < n.length; c++) d = n[c], r[d] && f.push(r[d][0]), r[d] = 0;
        for (i in u) Object.prototype.hasOwnProperty.call(u, i) && (t[i] = u[i]);
        for (s && s(e); f.length;) f.shift()();
        return o.push.apply(o, l || []), a()
    }

    function a() {
        for (var t, e = 0; e < o.length; e++) {
            for (var a = o[e], i = !0, n = 1; n < a.length; n++) {
                var u = a[n];
                0 !== r[u] && (i = !1)
            }
            i && (o.splice(e--, 1), t = d(d.s = a[0]))
        }
        return t
    }
    var i = {},
        r = {
            1: 0
        },
        o = [];

    function d(e) {
        if (i[e]) return i[e].exports;
        var a = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, d), a.l = !0, a.exports
    }
    d.m = t, d.c = i, d.d = function(t, e, a) {
        d.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, d.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, d.t = function(t, e) {
        if (1 & e && (t = d(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (d.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) d.d(a, i, function(e) {
                return t[e]
            }.bind(null, i));
        return a
    }, d.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return d.d(e, "a", e), e
    }, d.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, d.p = "";
    var n = window.shopifySlateJsonp = window.shopifySlateJsonp || [],
        u = n.push.bind(n);
    n.push = e, n = n.slice();
    for (var l = 0; l < n.length; l++) e(n[l]);
    var s = u;
    o.push([31, 0]), a()
}({
    0: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, r = d(a(2)),
            o = d(a(1));

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = (i = {
            siteOverlay: "[data-site-overlay]",
            $siteOverlay: (0, o.default)("[data-site-overlay]"),
            hoverOverlay: "[data-hover-overlay]",
            $hoverOverlay: (0, o.default)("[data-hover-overlay]"),
            $html: (0, o.default)("html"),
            $body: (0, o.default)("body"),
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
        }, (0, r.default)(i, "cartPopupFinish", "[data-cart-popup-finish]"), (0, r.default)(i, "collectionFilterToggle", "[data-filter-toggle]"), (0, r.default)(i, "collectionFilters", "[data-collection-filters]"), (0, r.default)(i, "collectionContent", "[data-collection-content]"), (0, r.default)(i, "collectionHeader", "[data-collection-header]"), (0, r.default)(i, "collectionSortingToggle", "[data-collection-sorting-toggle]"), (0, r.default)(i, "collectionSorting", "[data-collection-sorting]"), (0, r.default)(i, "paginateInput", "[data-pagination-input]"), (0, r.default)(i, "customFrameInput", "[data-custom-frame-input]"), (0, r.default)(i, "customFrameWidth", "[data-custom-frame-width]"), (0, r.default)(i, "customFrameHeight", "[data-custom-frame-height]"), (0, r.default)(i, "customFrame", "[data-custom-frame]"), (0, r.default)(i, "customFrameCloseTrigger", "[data-custom-frame-close-trigger]"), (0, r.default)(i, "frameTrigger", "[data-frame-trigger]"), (0, r.default)(i, "frameDropdown", "[data-frame-dropdown]"), (0, r.default)(i, "customFrameSizeTrigger", "[data-custom-frame-size-trigger]"), (0, r.default)(i, "frameSizeTrigger", "[data-frame-size-trigger]"), (0, r.default)(i, "frameRange", "[data-frame-range]"), (0, r.default)(i, "customFrameError", "[data-custom-frame-error]"), (0, r.default)(i, "frameFeatureImage", "[data-frame-image]"), (0, r.default)(i, "frameFinish", "[data-frame-finish-select]"), (0, r.default)(i, "rewardsDetails", "[data-rewards-details]"), (0, r.default)(i, "rewardsDetailsTrigger", "[data-rewards-details-trigger]"), (0, r.default)(i, "sizeDropdownTrigger", "[data-size-dropdown-trigger]"), (0, r.default)(i, "sizeDropdown", "[data-size-dropdown]"), (0, r.default)(i, "optionTrigger", "[data-option-trigger]"), i)
    },
    15: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.headerState = void 0;
        var i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(a(0));
        e.headerState = function(t) {
            var e = $(i.default.siteHeader),
                a = $(i.default.hoverOverlay);
            "active" === t ? (e.addClass("is-active"), a.addClass("is-active")) : (e.removeClass("is-active"), a.removeClass("is-active"))
        }
    },
    27: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.init = e.cartPopup = void 0;
        var i = d(a(1)),
            r = d(a(0)),
            o = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e.default = t, e
            }(a(7));

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var n = (0, i.default)("body").attr("data-shop-currency"),
            u = (e.cartPopup = function(t, e, a) {
                r.default.$siteOverlay.addClass("is-active"), (0, i.default)(r.default.cartPopup).addClass("is-active"), (0, i.default)(window).width() < 1024 && window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                var d = t.image.replace(".png", "_192x.png").replace(".jpg", "_192x.jpg"),
                    u = t.product_title,
                    l = o.formatMoney(t.final_price, "${{amount}} " + n);
                null != t.properties && ("_custom_finish_price" in t.properties && (l = t.properties._custom_finish_price), "_custom_finish" in t.properties && (0, i.default)(r.default.cartPopupFinish).html("<span>Custom Finish: </span>" + t.properties._custom_finish), "_custom_finish_addon" in t.properties && (0, i.default)(r.default.cartPopupFinish).append(", " + t.properties._custom_finish_addon), "_custom_finish_dry_mounted" in t.properties && (0, i.default)(r.default.cartPopupFinish).append(", Dry Mounted")), (0, i.default)(r.default.cartPopupImage).html('<img src="' + d + '" alt="' + u + '">'), (0, i.default)(r.default.cartPopupTitle).html(u), (0, i.default)(r.default.cartPopupPrice).html(l), (0, i.default)(r.default.cartPopupTags).html(e), "" == a && null != t.properties && ("Frame width" in t.properties && (a = t.properties["Frame width"] + " &times; "), "Frame height" in t.properties && (a += t.properties["Frame height"])), (0, i.default)(r.default.cartPopupDimensions).html(a)
            }, e.init = function() {
                u()
            }, function() {
                (0, i.default)(r.default.cartPopupCloseTrigger).on("click", function(t) {
                    r.default.$siteOverlay.click()
                }), (0, i.default)(r.default.cartPopupLink).on("click", function(t) {
                    r.default.$siteOverlay.click()
                }), r.default.$siteOverlay.on("click", function(t) {
                    (0, i.default)(r.default.cartPopup).removeClass("is-active"), (0, i.default)(r.default.cartPopupFinish).html(""), (0, i.default)(r.default.cartPopupImage).html(""), (0, i.default)(r.default.cartPopupTitle).html(""), (0, i.default)(r.default.cartPopupPrice).html(""), (0, i.default)(r.default.cartPopupTags).html(""), (0, i.default)(r.default.cartPopupDimensions).html("")
                })
            })
    },
    31: function(t, e, a) {
        "use strict";
        a(32);
        var i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(a(1));
        a(33), a(34), a(35), a(36), a(6), a(37), a(38), a(40);
        var r = a(41),
            o = a(55),
            d = a(56),
            n = a(57),
            u = a(58),
            l = a(59),
            s = a(60),
            c = a(27),
            f = a(61),
            p = a(76);
        window.jQuery = i.default, window.$ = i.default, document.addEventListener("DOMContentLoaded", function() {
            (0, r.init)(), (0, d.init)(), (0, o.init)(), (0, n.init)(), (0, u.init)(), (0, l.init)(), (0, s.init)(), (0, c.init)(), (0, f.init)(), (0, p.init)()
        }), (0, i.default)(document).on("shopify:section:load", function() {
            (0, f.init)()
        })
    },
    32: function(t, e, a) {},
    38: function(t, e, a) {
        "use strict";
        var i = a(39);
        (0, i.focusHash)(), (0, i.bindInPageLinks)()
    },
    40: function(t, e, a) {
        "use strict";
        document.addEventListener("DOMContentLoaded", function() {
            ! function() {
                var t = !1,
                    e = "";
                document.body.addEventListener("touchstart", function(a) {
                    a.target.closest(".flickity-slider") ? (t = !0, e = {
                        x: a.touches[0].pageX,
                        y: a.touches[0].pageY
                    }) : t = !1
                }), document.body.addEventListener("touchmove", function(a) {
                    if (t && a.cancelable) {
                        var i = {
                            x: a.touches[0].pageX - e.x,
                            y: a.touches[0].pageY - e.y
                        };
                        Math.abs(i.x) > 7 && a.preventDefault()
                    }
                }, {
                    passive: !1
                })
            }()
        })
    },
    41: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.init = void 0;
        var i = o(a(1)),
            r = o(a(0));

        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var d = (0, i.default)(window).scrollTop(),
            n = (0, i.default)(r.default.stickyHeader),
            u = (e.init = function() {
                u(), s()
            }, function() {
                (0, i.default)(window).scrollTop() >= 72 
            }),
            l = function() {
                return n.hasClass("is-hidden") || (n.addClass("is-hidden"), r.default.$body.addClass("is-header-hidden")), !1
            },
            s = function() {
                (0, i.default)(window).on("scroll", function() {
                    (0, i.default)(window).scrollTop() > d ? (0, i.default)(window).scrollTop() >= 72  : n.hasClass("is-hidden") && (n.removeClass("is-hidden"), r.default.$body.removeClass("is-header-hidden")), d = (0, i.default)(window).scrollTop()
                })
            }
    },
    55: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.init = void 0;
        var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a(0)),
            r = a(15);
        e.init = function() {
            o()
        };
        var o = function() {
            var t = $(i.default.navDropdownTrigger),
                e = $(i.default.headerNav),
                a = $(i.default.siteSearchContainer),
                o = $(i.default.siteSearch);
            t.on("mouseenter", function() {
                var a = $(this);
                e.addClass("is-active"), t.removeClass("is-active"), a.addClass("is-active"), null != a.attr("data-nav-dropdown-trigger") ? (0, r.headerState)("active") : (0, r.headerState)("inactive")
            }), t.on("mouseleave", function() {
                var t = $(this);
                a.is(":hover") || (e.removeClass("is-active"), t.removeClass("is-active"), "" === o.val() && (0, r.headerState)("inactive"))
            }), a.on("mouseleave", function() {
                e.hasClass("is-active") && (e.removeClass("is-active"), t.removeClass("is-active"), "" === o.val() && (0, r.headerState)("inactive"))
            })
        }
    },
    56: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.init = void 0;
        var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a(0)),
            r = a(15);
        e.init = function() {
            d()
        };
        var o = function(t) {
                var e = $(i.default.mobileNav),
                    a = $(i.default.mobileNavTrigger),
                    r = $("body");
                "active" === t ? (e.addClass("is-active"), a.find(".icon").removeClass("icon-hamburger-32").addClass("icon-close-32"), r.addClass("mobile-nav-active")) : ($(i.default.mobileNav).removeClass("is-active"), $(i.default.mobileNavTrigger).find(".icon").removeClass("icon-close-32").addClass("icon-hamburger-32"), r.removeClass("mobile-nav-active"))
            },
            d = function() {
                $(i.default.mobileNavTrigger).on("click", function(t) {
                    t.preventDefault(), $(i.default.mobileNav).hasClass("is-active") ? (o("inactive"), (0, r.headerState)("inactive")) : (o("active"), (0, r.headerState)("active"))
                }), $(window).on("resize", function() {
                    $(window).width() >= 1024 && o("inactive")
                })
            }
    },
    57: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.init = void 0;
        var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(a(0)),
            r = a(15);
        e.init = function() {
            o()
        };
        var o = function() {
            $(i.default.siteSearch).on("keyup", function() {
                "" !== $(this).val() ? ((0, r.headerState)("active"), $(this).addClass("has-content")) : ((0, r.headerState)("inactive"), $(this).removeClass("has-content"))
            })
        }
    },
    58: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.init = void 0, r(a(1));
        var i = r(a(0));

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        r(a(16)), e.init = function() {
            i.default.$siteOverlay.on("click", function() {
                i.default.$siteOverlay.removeClass("is-active")
            }), i.default.$hoverOverlay.on("click", function() {
                i.default.$hoverOverlay.removeClass("is-active")
            })
        }
    },
    59: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.init = void 0;
        var i = o(a(1)),
            r = o(a(0));

        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.init = function() {
            d()
        };
        var d = function() {
            (0, i.default)(document).on("click", r.default.scrollElement, function(t) {
                t.preventDefault();
                var e = (0, i.default)(this).attr("data-scroll-target");
                if ("#" === e) return !1;
                "top" === e ? (0, i.default)("html, body").animate({
                    scrollTop: 0
                }, 750) : (0, i.default)("html, body").animate({
                    scrollTop: (0, i.default)(e).offset().top - 80
                }, 750)
            })
        }
    },
    60: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.init = void 0;
        var i = u(a(1)),
            r = u(a(4)),
            o = u(a(0)),
            d = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e.default = t, e
            }(a(13)),
            n = a(27);

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.init = function() {
            f()
        };
        var l = function() {
          
                d.getState().then(function(t) {
                  
                    var e = (0, i.default)(o.default.cartTotal),
                        a = (0, i.default)(o.default.cartPopupCount),
                        r = t.item_count;
                  var st;
                  var ct_cnt = 0;
                  for (st = 0; st < t.items.length; st++) {
                   if(t.items[st].product_type == "poster" || t.items[st].product_type != "Frame" )
                   {
                    ct_cnt = ct_cnt + (t.items[st].quantity);
                   }
                  }
				
                  
                    0 == r && e.removeClass("has-items"), e.text(ct_cnt), a.text(ct_cnt)
                })
            },
            s = function(t, e) {
                var a = e.closest(o.default.product),
                    n = parseInt(a.find(o.default.productVariant).val()),
                    u = a.find(o.default.productForm).attr("data-product-handle"),
                    s = a.find(o.default.productForm).attr("data-product-title"),
                    f = {
                        _custom_finish_frame: "true",
                        _custom_finish_poster_handle: u,
                        _custom_finish_poster_id: n,
                        _supplier_code: r.default.get("finish_code") || !1,
                        "Custom finish for ": s
                    };
                d.addItem(parseInt(t), {
                    quantity: 1,
                    properties: f
                }).then(function(e) {
                    (0, i.default)(o.default.finishAddonTrigger).hasClass("is-active") ? c(a, t) : console.log("frame")
                }).catch(function(t) {
                    alert("couldn't add frame to cart: " + t)
                })
            },
            c = function(t, e) {
                var a = parseInt((0, i.default)(o.default.finishAddon).attr("data-variant-id")),
                    r = parseInt(t.find(o.default.productVariant).val()),
                    n = {
                        _custom_finish_addon_product: "true",
                        _custom_finish_poster_handle: t.find(o.default.productForm).attr("data-product-handle"),
                        _custom_finish_poster_id: r,
                        _custom_finish_frame_id: e,
                        "Custom finish addon for ": t.find(o.default.productForm).attr("data-product-title")
                    };
                d.addItem(a, {
                    quantity: 1,
                    properties: n
                }).then(function(t) {
                   console.log("frame")
                }).catch(function(t) {
                    alert("couldn't add frame to cart: " + t)
                })
            },
            f = function() {
                (0, i.default)(document).on("submit", o.default.productForm, function(t) {
                    t.preventDefault(),
                        function(t) {
                            var e = t.closest(o.default.product),
                                a = parseInt(e.find(o.default.productVariant).val()),
                                u = e.find(o.default.productMeta).text(),
                                c = e.find(o.default.productDimensions).text(),
                                f = {};
                            e.find(o.default.property).each(function(t) {
                                var e = (0, i.default)(this);
                                if ("" != e.val()) {
                                    var a = e.attr("name").replace("properties[", "").replace("]", "");
                                    f[a] = e.val()
                                }
                            }), d.addItem(a, {
                                quantity: 1,
                                properties: f
                            }, u).then(function(e) {
                              var a = r.default.get("finish_type");
                                //   var a = document.getElementById('customFinishId').value;
                              l();
                                a && s(a, t),
                                    function(t, e, a, r) {
                                        
                                        var d = (0, i.default)(o.default.cartContainer);
                                        d.length > 0 ? i.default.get("/cart?view=contents").then(function(t) {
                                            d.html(t), (0, i.default)("html, body").animate({
                                                scrollTop: 0
                                            }, 750)
                                        }).done(function() {
                                            window.Shopify && Shopify.StorefrontExpressButtons && Shopify.StorefrontExpressButtons.initialize()
                                        }) : (0, n.cartPopup)(t, e, a, r)
                                    }(e, u, c, f)
                            }).catch(function(t) {
                                alert("error adding to cart: " + t)
                            })
                        }((0, i.default)(this))
                })
            }
    },
    61: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.init = void 0;
        var i = n(a(1)),
            r = n(a(0)),
            o = n(a(62)),
            d = n(a(28));

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        a(74), d.default.setJQuery(i.default), (0, o.default)("flickity", d.default, i.default);
        e.init = function() {
            (0, i.default)(r.default.heroSlider).flickity({
                    wrapAround: !0,
                    prevNextButtons: !1,
                    pageDots: !1,
                    autoPlay: 5e3
                }),
                function() {
                    var t = (0, i.default)(r.default.collectionSlider),
                        e = {
                            prevNextButtons: !0,
                            pageDots: !1,
                            imagesLoaded: !0,
                            wrapAround: !0,
                            contain: !0
                        },
                        a = {
                            prevNextButtons: !0,
                            pageDots: !1,
                            freeScroll: !0,
                            cellAlign: "left",
                            imagesLoaded: !0,
                            wrapAround: !0
                        },
                        o = !1,
                        d = !1,
                        n = function(e, a, n) {
                            t.each(function() {
                                var t = (0, i.default)(this),
                                    a = t.find(r.default.collectionSlide);
                                e.wrapAround = function(t, e) {
                                    if (t && e) {
                                        var a = 0;
                                        e.each(function() {
                                            var t = (0, i.default)(this);
                                            a += parseInt(t.css("width")) + parseInt(t.css("margin-right")) + parseInt(t.css("margin-left"))
                                        });
                                        var r = parseFloat(t.css("width"));
                                        return a > r
                                    }
                                    return !1
                                }(t, a), t.flickity(e)
                            }), o = a, d = n
                        };
                    (0, i.default)(window).width() < 768 ? n(a, !0, !1) : n(e, !1, !0), (0, i.default)(window).on("resize", function() {
                        (0, i.default)(window).width() < 768 ? o || (t.flickity("destroy"), n(a, !0, !1)) : d || (t.flickity("destroy"), n(e, !1, !0))
                    })
                }(), (0, i.default)(r.default.featureFilterSlider).each(function() {
                    (0, i.default)(this).flickity({
                        wrapAround: !0,
                        prevNextButtons: !0,
                        pageDots: !1,
                        autoPlay: 5e3,
                        imagesLoaded: !0
                    })
                }),
                function() {
                    var t = (0, i.default)(r.default.originalPosterSlider),
                        e = {
                            prevNextButtons: !1,
                            pageDots: !1,
                            cellAlign: "left",
                            wrapAround: !0,
                            imagesLoaded: !0
                        },
                        a = function(e, a, i) {
                            t.flickity(e), o = a, d = i
                        },
                        o = !1,
                        d = !1;
                    (0, i.default)(window).width() < 1024 ? a(e, !0, !1) : d = !0, (0, i.default)(window).on("resize", function() {
                        (0, i.default)(window).width() < 1024 ? o || a(e, !0, !1) : d || (t.flickity("destroy"), d = !0, o = !1)
                    })
                }(),
                function() {
                    var t = (0, i.default)(r.default.instagramSlider),
                        e = {
                            prevNextButtons: !1,
                            pageDots: !1,
                            wrapAround: !0,
                            imagesLoaded: !0
                        },
                        a = function(e, a, i) {
                            t.flickity(e), o = a, d = i
                        },
                        o = !1,
                        d = !1;
                    (0, i.default)(window).width() < 1024 ? a(e, !0, !1) : d = !0, (0, i.default)(window).on("resize", function() {
                        (0, i.default)(window).width() < 1024 ? o || a(e, !0, !1) : d || (t.flickity("destroy"), d = !0, o = !1)
                    })
                }(), (0, i.default)(r.default.rewardsDetails).flickity({
                    prevNextButtons: !1,
                    contain: !0,
                    pageDots: !1
                })
        }
    },
    76: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.init = void 0;
        var i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(a(4));
        e.init = function() {
            ! function() {
                var t = document.querySelector("[data-site-body]"),
                    e = i.default.get("promobar_closed"),
                    a = document.querySelector("[data-promo-bar-close]");
                null !== document.querySelector("[data-promo-bar]") && "true" !== e && t.classList.add("promo-bar-active"), a.addEventListener("click", function() {
                    i.default.set("promobar_closed", "true", {
                        expires: 7
                    }), t.classList.remove("promo-bar-active")
                })
            }()
        }
    }
});