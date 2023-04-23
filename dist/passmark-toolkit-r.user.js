// ==UserScript==
// @name       passmark-toolkit-r
// @namespace  com.undsf.tmus.ptr
// @version    0.1.2
// @author     Arathi of Nebnizilla
// @icon       https://www.cpubenchmark.net/favicon.ico
// @match      https://www.cpubenchmark.net/high_end_cpus.html
// @match      https://www.cpubenchmark.net/mid_range_cpus.html
// @match      https://www.cpubenchmark.net/midlow_range_cpus.html
// @match      https://www.cpubenchmark.net/low_end_cpus.html
// @match      https://www.videocardbenchmark.net/high_end_gpus.html
// @match      https://www.videocardbenchmark.net/mid_range_gpus.html
// @match      https://www.videocardbenchmark.net/midlow_range_gpus.html
// @match      https://www.videocardbenchmark.net/low_end_gpus.html
// @require    https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js
// @require    https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js
// @grant      unsafeWindow
// ==/UserScript==

(a=>{const t=document.createElement("style");t.dataset.source="vite-plugin-monkey",t.textContent=a,document.head.append(t)})(" .camp_amd{color:#db0030!important}.camp_intel{color:#0068b5!important}.camp_nvidia{color:#6aa700!important}.camp_arm{color:#0091bd!important} ");

(function (require$$0, require$$0$1) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntimeExports = {};
  var jsxRuntime = {
    get exports() {
      return jsxRuntimeExports;
    },
    set exports(v2) {
      jsxRuntimeExports = v2;
    }
  };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = require$$0, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$2 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
  function q$2(c, a, g) {
    var b, d = {}, e2 = null, h2 = null;
    void 0 !== g && (e2 = "" + g);
    void 0 !== a.key && (e2 = "" + a.key);
    void 0 !== a.ref && (h2 = a.ref);
    for (b in a)
      m$2.call(a, b) && !p$2.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k$1, type: c, key: e2, ref: h2, props: d, _owner: n$2.current };
  }
  reactJsxRuntime_production_min.Fragment = l$1;
  reactJsxRuntime_production_min.jsx = q$2;
  reactJsxRuntime_production_min.jsxs = q$2;
  (function(module) {
    {
      module.exports = reactJsxRuntime_production_min;
    }
  })(jsxRuntime);
  const jsx = jsxRuntimeExports.jsx;
  const jsxs = jsxRuntimeExports.jsxs;
  var client = {};
  var m$1 = require$$0$1;
  {
    client.createRoot = m$1.createRoot;
    client.hydrateRoot = m$1.hydrateRoot;
  }
  function RankListItem(props) {
    return /* @__PURE__ */ jsxs("li", { id: `rk${props.product.id}`, children: [
      /* @__PURE__ */ jsx("span", { className: "more_details" }),
      /* @__PURE__ */ jsxs("a", { href: props.product.link, children: [
        /* @__PURE__ */ jsx("span", { className: props.productNameClasses.join(" "), children: props.productName }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "span",
          {
            className: props.markBarClasses.join(" "),
            style: { width: `${props.markPercentage}%` },
            children: `(${props.markPercentage}%)`
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "count", children: props.product.mark.toLocaleString() }),
        /* @__PURE__ */ jsx("span", { className: "price-neww", children: props.product.price <= 0 ? "NA" : `$${props.product.price.toLocaleString()}` })
      ] })
    ] });
  }
  const createStoreImpl = (createState) => {
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace) => {
      const nextState = typeof partial === "function" ? partial(state) : partial;
      if (!Object.is(nextState, state)) {
        const previousState = state;
        state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
        listeners.forEach((listener) => listener(state, previousState));
      }
    };
    const getState = () => state;
    const subscribe = (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
    const destroy = () => {
      if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } && "production") !== "production") {
        console.warn(
          "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
        );
      }
      listeners.clear();
    };
    const api = { setState, getState, subscribe, destroy };
    state = createState(setState, getState, api);
    return api;
  };
  const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
  var withSelectorExports = {};
  var withSelector = {
    get exports() {
      return withSelectorExports;
    },
    set exports(v2) {
      withSelectorExports = v2;
    }
  };
  var withSelector_production_min = {};
  var shimExports = {};
  var shim = {
    get exports() {
      return shimExports;
    },
    set exports(v2) {
      shimExports = v2;
    }
  };
  var useSyncExternalStoreShim_production_min = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var e = require$$0;
  function h$1(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var k = "function" === typeof Object.is ? Object.is : h$1, l = e.useState, m = e.useEffect, n$1 = e.useLayoutEffect, p$1 = e.useDebugValue;
  function q$1(a, b) {
    var d = b(), f2 = l({ inst: { value: d, getSnapshot: b } }), c = f2[0].inst, g = f2[1];
    n$1(function() {
      c.value = d;
      c.getSnapshot = b;
      r$1(c) && g({ inst: c });
    }, [a, d, b]);
    m(function() {
      r$1(c) && g({ inst: c });
      return a(function() {
        r$1(c) && g({ inst: c });
      });
    }, [a]);
    p$1(d);
    return d;
  }
  function r$1(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var d = b();
      return !k(a, d);
    } catch (f2) {
      return true;
    }
  }
  function t$1(a, b) {
    return b();
  }
  var u$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$1 : q$1;
  useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u$1;
  (function(module) {
    {
      module.exports = useSyncExternalStoreShim_production_min;
    }
  })(shim);
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var h = require$$0, n = shimExports;
  function p(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var q = "function" === typeof Object.is ? Object.is : p, r = n.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w = h.useDebugValue;
  withSelector_production_min.useSyncExternalStoreWithSelector = function(a, b, e2, l2, g) {
    var c = t(null);
    if (null === c.current) {
      var f2 = { hasValue: false, value: null };
      c.current = f2;
    } else
      f2 = c.current;
    c = v(function() {
      function a2(a3) {
        if (!c2) {
          c2 = true;
          d2 = a3;
          a3 = l2(a3);
          if (void 0 !== g && f2.hasValue) {
            var b2 = f2.value;
            if (g(b2, a3))
              return k2 = b2;
          }
          return k2 = a3;
        }
        b2 = k2;
        if (q(d2, a3))
          return b2;
        var e3 = l2(a3);
        if (void 0 !== g && g(b2, e3))
          return b2;
        d2 = a3;
        return k2 = e3;
      }
      var c2 = false, d2, k2, m2 = void 0 === e2 ? null : e2;
      return [function() {
        return a2(b());
      }, null === m2 ? void 0 : function() {
        return a2(m2());
      }];
    }, [b, e2, l2, g]);
    var d = r(a, c[0], c[1]);
    u(function() {
      f2.hasValue = true;
      f2.value = d;
    }, [d]);
    w(d);
    return d;
  };
  (function(module) {
    {
      module.exports = withSelector_production_min;
    }
  })(withSelector);
  const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
  const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
  function useStore(api, selector = api.getState, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(
      api.subscribe,
      api.getState,
      api.getServerState || api.getState,
      selector,
      equalityFn
    );
    require$$0.useDebugValue(slice);
    return slice;
  }
  const createImpl = (createState) => {
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } && "production") !== "production" && typeof createState !== "function") {
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    }
    const api = typeof createState === "function" ? createStore(createState) : createState;
    const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
    Object.assign(useBoundStore, api);
    return useBoundStore;
  };
  const create = (createState) => createState ? createImpl(createState) : createImpl;
  class Product {
    constructor(options) {
      __publicField(this, "id");
      __publicField(this, "link");
      __publicField(this, "name");
      __publicField(this, "mark");
      __publicField(this, "price");
      __publicField(this, "shortName");
      __publicField(this, "camp");
      __publicField(this, "chineseName");
      this.id = options.id;
      this.link = options.link;
      this.name = options.name;
      this.mark = options.mark;
      this.price = options.price;
      this.shortName = this.generateShortName();
      this.camp = this.generateCamp();
      this.chineseName = this.generateChineseName();
    }
    generateShortName() {
      let name = this.name;
      name = name.replace("AMD ", "");
      name = name.replace("Ryzen Threadripper ", "Threadripper ");
      name = name.replace("Radeon ", "");
      name = name.replace("Intel ", "");
      name = name.replace("GeForce", "");
      return name;
    }
    generateChineseName() {
      let name = this.shortName;
      if (this.camp == "amd") {
        name = name.replace("EPYC ", "霄龙 ");
        name = name.replace("Threadripper ", "线程撕裂者 ");
        name = name.replace("Ryzen ", "锐龙 ");
      }
      if (this.camp == "intel") {
        name = name.replace("Xeon ", "至强 ");
        name = name.replace("Core ", "酷睿 ");
      }
      return name;
    }
    generateCamp() {
      if (this.name.indexOf("AMD ") >= 0 || this.name.indexOf("Radeon ") >= 0) {
        return "amd";
      }
      if (this.name.indexOf("Intel ") >= 0) {
        return "intel";
      }
      if (this.name.indexOf("GeForce") >= 0 || this.name.indexOf("RTX") >= 0 || this.name.indexOf("TITAN") >= 0 || this.name.indexOf("Quadro") >= 0 || this.name.indexOf("Tesla") >= 0 || this.name.indexOf("NVIDIA") >= 0) {
        return "nvidia";
      }
      if (this.name.indexOf("Apple ") >= 0) {
        return "arm";
      }
      return void 0;
    }
  }
  const useProductStore = create()((set, get) => ({
    // state
    pattern: "",
    products: [],
    // actions
    init: (initData) => set((state) => {
      if (state.products.length == 0) {
        const products2 = initData.map((data) => {
          return new Product(data);
        });
        console.info(`正在初始化产品信息：`, products2);
        return {
          products: products2
        };
      } else {
        console.warn("已有数据，请勿重复初始化");
        return {};
      }
    }),
    updateRegex: (regex) => set((state) => ({
      regex
    })),
    filtered: () => {
      const products2 = get().products;
      const regex = get().regex;
      let results = [];
      products2.map((product) => {
        if (regex != void 0) {
          const matcher = regex.exec(product.name);
          if (matcher != null) {
            results.push(product);
          }
        } else {
          results.push(product);
        }
      });
      return results;
    }
  }));
  function RankList({
    colors = [
      "pink",
      "yellow",
      "green",
      "light-purple",
      "red",
      "turquoise",
      "orange",
      "brown",
      "purple",
      "blue"
    ],
    data = [],
    nameMode = "origin"
  }) {
    const store = useProductStore();
    require$$0.useEffect(() => {
      console.info("正在初始化RankList");
      store.init(data);
    }, []);
    const results = store.filtered();
    const maxMark = results.length > 0 ? results[0].mark : 0;
    let items = results.map((product, index2) => {
      let markPercentage = (product.mark * 86 / maxMark).toFixed(2);
      let productNameClasses = ["prdname"];
      if (product.camp != void 0) {
        productNameClasses.push(`camp_${product.camp}`);
      }
      let markBarClasses = ["index"];
      if (colors.length > 0) {
        const colorIndex = index2 % colors.length;
        let color = colors[colorIndex];
        markBarClasses.push(color);
      }
      let productName = product.name;
      if (nameMode == "shortName") {
        productName = product.shortName;
      } else if (nameMode == "chinese") {
        productName = product.chineseName;
      }
      return /* @__PURE__ */ jsx(
        RankListItem,
        {
          product,
          productNameClasses,
          productName,
          markBarClasses,
          markPercentage
        },
        `rk${product.id}`
      );
    });
    return /* @__PURE__ */ jsx("div", { className: "chart_body", children: /* @__PURE__ */ jsx("ul", { className: "chartlist", children: items }) });
  }
  const useSettingsStore = create()((set, get) => ({
    // state
    nameMode: "origin",
    // actions
    updateNameMode: (mode) => set((state) => ({ nameMode: mode }))
  }));
  function NameModeSelect() {
    const settings = useSettingsStore();
    return /* @__PURE__ */ jsxs(
      "select",
      {
        value: settings.nameMode,
        style: { marginLeft: "8px", marginRight: "8px" },
        onChange: (e2) => {
          const nameMode = e2.target.value;
          settings.updateNameMode(nameMode);
        },
        children: [
          /* @__PURE__ */ jsx("option", { value: "origin", children: "原名" }),
          /* @__PURE__ */ jsx("option", { value: "shortName", children: "缩写" }),
          /* @__PURE__ */ jsx("option", { value: "chinese", children: "中文" })
        ]
      }
    );
  }
  function Filter() {
    const [pattern, setPattern] = require$$0.useState("");
    const store = useProductStore();
    const onChange = (e2) => {
      let pattern2 = e2.target.value;
      setPattern(pattern2);
      try {
        const regex = new RegExp(pattern2);
        console.info("正则表达式编译成功：", regex);
        store.updateRegex(regex);
      } catch (ex) {
        console.warn("正则表达式编译失败：", pattern2);
      }
    };
    return /* @__PURE__ */ jsx(
      "input",
      {
        value: pattern,
        onChange,
        placeholder: "请输入正则表达式",
        style: {
          width: "500px"
        }
      }
    );
  }
  const chartSubtitles = /* @__PURE__ */ new Map([
    ["high_end", "High End"],
    ["mid_range", "High Mid Range"],
    ["midlow_range", "Low Mid Range"],
    ["low_end", "Low End"]
  ]);
  function Chart(props) {
    const settings = useSettingsStore();
    const { type, level, updateTime, data } = props;
    return /* @__PURE__ */ jsxs("div", { className: "chart", children: [
      /* @__PURE__ */ jsxs("div", { className: "chart_header", children: [
        /* @__PURE__ */ jsxs("div", { className: "chart_title", children: [
          "PassMark - ",
          type,
          " Mark"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "chart_subtitle", children: [
          chartSubtitles.get(level),
          " ",
          type,
          "s"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "chart_subtitle", style: { fontSize: "small" }, children: [
          "Updated ",
          updateTime
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { marginBottom: "8px" }, children: [
        /* @__PURE__ */ jsx(Filter, {}),
        /* @__PURE__ */ jsx(NameModeSelect, {})
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "chart_subheader", children: [
        /* @__PURE__ */ jsx("div", { className: "chart_tabletitle1", children: type }),
        /* @__PURE__ */ jsxs("div", { className: "chart_tabletitle2", children: [
          type,
          " Mark"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "chart_tabletitle3", children: "Price (USD)" })
      ] }),
      /* @__PURE__ */ jsx(RankList, { data, nameMode: settings.nameMode })
    ] });
  }
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  let $ = _unsafeWindow.jQuery;
  let products = [];
  let lis = $("#mark li");
  for (let liIndex = 0; liIndex < lis.length; liIndex++) {
    let li = lis[liIndex];
    let mark2 = $(".count", li).text().replace(",", "");
    let price = $(".price-neww", li).text().replace(",", "").replace("$", "").replace("*", "");
    let product = {
      id: Number(li.id.substring(2)),
      link: $("a", li).attr("href"),
      name: $(".prdname", li).text(),
      mark: parseInt(mark2),
      price: price == "NA" ? 0 : parseInt(price)
    };
    products.push(product);
  }
  console.info("获取产品信息：", products);
  const markId = "mark";
  let mark = document.getElementById(markId);
  if (mark == null) {
    mark = document.createElement("div");
    mark.id = markId;
    document.body.append(mark);
  }
  let app = client.createRoot(mark, {});
  app.render(
    /* @__PURE__ */ jsx(Chart, { type: "CPU", level: "high_end", updateTime: "2023-04-13", data: products })
  );

})(React, ReactDOM);
