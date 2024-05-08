// ==UserScript==
// @name       passmark-toolkit-r
// @namespace  com.undsf.tmus.pmtk
// @version    0.2.1
// @author     monkey
// @icon       https://www.cpubenchmark.net/favicon.ico
// @match      https://www.cpubenchmark.net/high_end_cpus.html
// @match      https://www.cpubenchmark.net/mid_range_cpus.html
// @match      https://www.cpubenchmark.net/midlow_range_cpus.html
// @match      https://www.cpubenchmark.net/low_end_cpus.html
// @match      https://www.videocardbenchmark.net/high_end_gpus.html
// @match      https://www.videocardbenchmark.net/mid_range_gpus.html
// @match      https://www.videocardbenchmark.net/midlow_range_gpus.html
// @match      https://www.videocardbenchmark.net/low_end_gpus.html
// @require    https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js
// @require    https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js
// @grant      GM_addStyle
// @grant      unsafeWindow
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const e=document.createElement("style");e.textContent=t,document.head.append(e)})(" .settings{display:flex;flex-direction:row;justify-content:center;align-items:center}.settings .setting-item{margin:0 8px}.settings .setting-item:first-child{margin-left:0}.settings .setting-item:last-child{margin-right:0}.settings .setting-item .checkbox-label{margin-left:6px;-webkit-user-select:none;user-select:none}.settings .pattern{flex:1} ");

(function (require$$0, require$$0$1) {
  'use strict';

  var jsxRuntime = { exports: {} };
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
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var client = {};
  var m = require$$0$1;
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  var define_import_meta_env_default$1 = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
  let keyCount = 0;
  function atom(read, write) {
    const key = `atom${++keyCount}`;
    const config = {
      toString: () => key
    };
    if (typeof read === "function") {
      config.read = read;
    } else {
      config.init = read;
      config.read = defaultRead;
      config.write = defaultWrite;
    }
    return config;
  }
  function defaultRead(get) {
    return get(this);
  }
  function defaultWrite(get, set, arg) {
    return set(
      this,
      typeof arg === "function" ? arg(get(this)) : arg
    );
  }
  const isSelfAtom = (atom2, a) => atom2.unstable_is ? atom2.unstable_is(a) : a === atom2;
  const hasInitialValue = (atom2) => "init" in atom2;
  const isActuallyWritableAtom = (atom2) => !!atom2.write;
  const cancelPromiseMap = /* @__PURE__ */ new WeakMap();
  const registerCancelPromise = (promise, cancel) => {
    cancelPromiseMap.set(promise, cancel);
    promise.catch(() => {
    }).finally(() => cancelPromiseMap.delete(promise));
  };
  const cancelPromise = (promise, next) => {
    const cancel = cancelPromiseMap.get(promise);
    if (cancel) {
      cancelPromiseMap.delete(promise);
      cancel(next);
    }
  };
  const resolvePromise = (promise, value) => {
    promise.status = "fulfilled";
    promise.value = value;
  };
  const rejectPromise = (promise, e) => {
    promise.status = "rejected";
    promise.reason = e;
  };
  const isPromiseLike$1 = (x) => typeof (x == null ? void 0 : x.then) === "function";
  const isEqualAtomValue = (a, b) => !!a && "v" in a && "v" in b && Object.is(a.v, b.v);
  const isEqualAtomError = (a, b) => !!a && "e" in a && "e" in b && Object.is(a.e, b.e);
  const hasPromiseAtomValue = (a) => !!a && "v" in a && a.v instanceof Promise;
  const isEqualPromiseAtomValue = (a, b) => "v" in a && "v" in b && a.v.orig && a.v.orig === b.v.orig;
  const returnAtomValue = (atomState) => {
    if ("e" in atomState) {
      throw atomState.e;
    }
    return atomState.v;
  };
  const createStore$1 = () => {
    const atomStateMap = /* @__PURE__ */ new WeakMap();
    const mountedMap = /* @__PURE__ */ new WeakMap();
    const pendingStack = [];
    const pendingMap = /* @__PURE__ */ new WeakMap();
    let devListenersRev2;
    let mountedAtoms;
    if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
      devListenersRev2 = /* @__PURE__ */ new Set();
      mountedAtoms = /* @__PURE__ */ new Set();
    }
    const getAtomState = (atom2) => atomStateMap.get(atom2);
    const addPendingDependent = (atom2, atomState) => {
      atomState.d.forEach((_, a) => {
        var _a;
        if (!pendingMap.has(a)) {
          const aState = getAtomState(a);
          (_a = pendingStack[pendingStack.length - 1]) == null ? void 0 : _a.add(a);
          pendingMap.set(a, [aState, /* @__PURE__ */ new Set()]);
          if (aState) {
            addPendingDependent(a, aState);
          }
        }
        pendingMap.get(a)[1].add(atom2);
      });
    };
    const setAtomState = (atom2, atomState) => {
      var _a;
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        Object.freeze(atomState);
      }
      const prevAtomState = getAtomState(atom2);
      atomStateMap.set(atom2, atomState);
      if (!pendingMap.has(atom2)) {
        (_a = pendingStack[pendingStack.length - 1]) == null ? void 0 : _a.add(atom2);
        pendingMap.set(atom2, [prevAtomState, /* @__PURE__ */ new Set()]);
        addPendingDependent(atom2, atomState);
      }
      if (hasPromiseAtomValue(prevAtomState)) {
        const next = "v" in atomState ? atomState.v instanceof Promise ? atomState.v : Promise.resolve(atomState.v) : Promise.reject(atomState.e);
        if (prevAtomState.v !== next) {
          cancelPromise(prevAtomState.v, next);
        }
      }
    };
    const updateDependencies = (atom2, nextAtomState, nextDependencies, keepPreviousDependencies) => {
      const dependencies = new Map(
        keepPreviousDependencies ? nextAtomState.d : null
      );
      let changed = false;
      nextDependencies.forEach((aState, a) => {
        if (!aState && isSelfAtom(atom2, a)) {
          aState = nextAtomState;
        }
        if (aState) {
          dependencies.set(a, aState);
          if (nextAtomState.d.get(a) !== aState) {
            changed = true;
          }
        } else if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
          console.warn("[Bug] atom state not found");
        }
      });
      if (changed || nextAtomState.d.size !== dependencies.size) {
        nextAtomState.d = dependencies;
      }
    };
    const setAtomValue = (atom2, value, nextDependencies, keepPreviousDependencies) => {
      const prevAtomState = getAtomState(atom2);
      const nextAtomState = {
        d: (prevAtomState == null ? void 0 : prevAtomState.d) || /* @__PURE__ */ new Map(),
        v: value
      };
      if (nextDependencies) {
        updateDependencies(
          atom2,
          nextAtomState,
          nextDependencies,
          keepPreviousDependencies
        );
      }
      if (isEqualAtomValue(prevAtomState, nextAtomState) && prevAtomState.d === nextAtomState.d) {
        return prevAtomState;
      }
      if (hasPromiseAtomValue(prevAtomState) && hasPromiseAtomValue(nextAtomState) && isEqualPromiseAtomValue(prevAtomState, nextAtomState)) {
        if (prevAtomState.d === nextAtomState.d) {
          return prevAtomState;
        } else {
          nextAtomState.v = prevAtomState.v;
        }
      }
      setAtomState(atom2, nextAtomState);
      return nextAtomState;
    };
    const setAtomValueOrPromise = (atom2, valueOrPromise, nextDependencies, abortPromise) => {
      if (isPromiseLike$1(valueOrPromise)) {
        let continuePromise;
        const updatePromiseDependencies = () => {
          const prevAtomState = getAtomState(atom2);
          if (!hasPromiseAtomValue(prevAtomState) || prevAtomState.v !== promise) {
            return;
          }
          const nextAtomState = setAtomValue(
            atom2,
            promise,
            nextDependencies
          );
          if (mountedMap.has(atom2) && prevAtomState.d !== nextAtomState.d) {
            mountDependencies(atom2, nextAtomState, prevAtomState.d);
          }
        };
        const promise = new Promise((resolve, reject) => {
          let settled = false;
          valueOrPromise.then(
            (v) => {
              if (!settled) {
                settled = true;
                resolvePromise(promise, v);
                resolve(v);
                updatePromiseDependencies();
              }
            },
            (e) => {
              if (!settled) {
                settled = true;
                rejectPromise(promise, e);
                reject(e);
                updatePromiseDependencies();
              }
            }
          );
          continuePromise = (next) => {
            if (!settled) {
              settled = true;
              next.then(
                (v) => resolvePromise(promise, v),
                (e) => rejectPromise(promise, e)
              );
              resolve(next);
            }
          };
        });
        promise.orig = valueOrPromise;
        promise.status = "pending";
        registerCancelPromise(promise, (next) => {
          if (next) {
            continuePromise(next);
          }
          abortPromise == null ? void 0 : abortPromise();
        });
        return setAtomValue(atom2, promise, nextDependencies, true);
      }
      return setAtomValue(atom2, valueOrPromise, nextDependencies);
    };
    const setAtomError = (atom2, error, nextDependencies) => {
      const prevAtomState = getAtomState(atom2);
      const nextAtomState = {
        d: (prevAtomState == null ? void 0 : prevAtomState.d) || /* @__PURE__ */ new Map(),
        e: error
      };
      if (nextDependencies) {
        updateDependencies(atom2, nextAtomState, nextDependencies);
      }
      if (isEqualAtomError(prevAtomState, nextAtomState) && prevAtomState.d === nextAtomState.d) {
        return prevAtomState;
      }
      setAtomState(atom2, nextAtomState);
      return nextAtomState;
    };
    const readAtomState = (atom2, force) => {
      const atomState = getAtomState(atom2);
      if (!force && atomState) {
        if (mountedMap.has(atom2)) {
          return atomState;
        }
        if (Array.from(atomState.d).every(([a, s]) => {
          if (a === atom2) {
            return true;
          }
          const aState = readAtomState(a);
          return aState === s || isEqualAtomValue(aState, s);
        })) {
          return atomState;
        }
      }
      const nextDependencies = /* @__PURE__ */ new Map();
      let isSync = true;
      const getter = (a) => {
        if (isSelfAtom(atom2, a)) {
          const aState2 = getAtomState(a);
          if (aState2) {
            nextDependencies.set(a, aState2);
            return returnAtomValue(aState2);
          }
          if (hasInitialValue(a)) {
            nextDependencies.set(a, void 0);
            return a.init;
          }
          throw new Error("no atom init");
        }
        const aState = readAtomState(a);
        nextDependencies.set(a, aState);
        return returnAtomValue(aState);
      };
      let controller;
      let setSelf;
      const options = {
        get signal() {
          if (!controller) {
            controller = new AbortController();
          }
          return controller.signal;
        },
        get setSelf() {
          if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && !isActuallyWritableAtom(atom2)) {
            console.warn("setSelf function cannot be used with read-only atom");
          }
          if (!setSelf && isActuallyWritableAtom(atom2)) {
            setSelf = (...args) => {
              if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && isSync) {
                console.warn("setSelf function cannot be called in sync");
              }
              if (!isSync) {
                return writeAtom(atom2, ...args);
              }
            };
          }
          return setSelf;
        }
      };
      try {
        const valueOrPromise = atom2.read(getter, options);
        return setAtomValueOrPromise(
          atom2,
          valueOrPromise,
          nextDependencies,
          () => controller == null ? void 0 : controller.abort()
        );
      } catch (error) {
        return setAtomError(atom2, error, nextDependencies);
      } finally {
        isSync = false;
      }
    };
    const readAtom = (atom2) => returnAtomValue(readAtomState(atom2));
    const recomputeDependents = (atom2) => {
      const getDependents = (a) => {
        var _a, _b;
        const dependents = new Set((_a = mountedMap.get(a)) == null ? void 0 : _a.t);
        (_b = pendingMap.get(a)) == null ? void 0 : _b[1].forEach((dependent) => {
          dependents.add(dependent);
        });
        return dependents;
      };
      const topsortedAtoms = new Array();
      const markedAtoms = /* @__PURE__ */ new Set();
      const visit = (n2) => {
        if (markedAtoms.has(n2)) {
          return;
        }
        markedAtoms.add(n2);
        for (const m2 of getDependents(n2)) {
          if (n2 !== m2) {
            visit(m2);
          }
        }
        topsortedAtoms.push(n2);
      };
      visit(atom2);
      const changedAtoms = /* @__PURE__ */ new Set([atom2]);
      for (let i = topsortedAtoms.length - 1; i >= 0; --i) {
        const a = topsortedAtoms[i];
        const prevAtomState = getAtomState(a);
        if (!prevAtomState) {
          continue;
        }
        let hasChangedDeps = false;
        for (const dep of prevAtomState.d.keys()) {
          if (dep !== a && changedAtoms.has(dep)) {
            hasChangedDeps = true;
            break;
          }
        }
        if (hasChangedDeps) {
          const nextAtomState = readAtomState(a, true);
          if (!isEqualAtomValue(prevAtomState, nextAtomState)) {
            changedAtoms.add(a);
          }
        }
      }
    };
    const writeAtomState = (atom2, ...args) => {
      const getter = (a) => returnAtomValue(readAtomState(a));
      const setter = (a, ...args2) => {
        const isSync = pendingStack.length > 0;
        if (!isSync) {
          pendingStack.push(/* @__PURE__ */ new Set([a]));
        }
        let r;
        if (isSelfAtom(atom2, a)) {
          if (!hasInitialValue(a)) {
            throw new Error("atom not writable");
          }
          const prevAtomState = getAtomState(a);
          const nextAtomState = setAtomValueOrPromise(a, args2[0]);
          if (!isEqualAtomValue(prevAtomState, nextAtomState)) {
            recomputeDependents(a);
          }
        } else {
          r = writeAtomState(a, ...args2);
        }
        if (!isSync) {
          const flushed = flushPending(pendingStack.pop());
          if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
            devListenersRev2.forEach(
              (l2) => l2({ type: "async-write", flushed })
            );
          }
        }
        return r;
      };
      const result = atom2.write(getter, setter, ...args);
      return result;
    };
    const writeAtom = (atom2, ...args) => {
      pendingStack.push(/* @__PURE__ */ new Set([atom2]));
      const result = writeAtomState(atom2, ...args);
      const flushed = flushPending(pendingStack.pop());
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        devListenersRev2.forEach((l2) => l2({ type: "write", flushed }));
      }
      return result;
    };
    const mountAtom = (atom2, initialDependent, onMountQueue) => {
      var _a;
      const existingMount = mountedMap.get(atom2);
      if (existingMount) {
        if (initialDependent) {
          existingMount.t.add(initialDependent);
        }
        return existingMount;
      }
      const queue = onMountQueue || [];
      (_a = getAtomState(atom2)) == null ? void 0 : _a.d.forEach((_, a) => {
        if (a !== atom2) {
          mountAtom(a, atom2, queue);
        }
      });
      readAtomState(atom2);
      const mounted = {
        t: new Set(initialDependent && [initialDependent]),
        l: /* @__PURE__ */ new Set()
      };
      mountedMap.set(atom2, mounted);
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        mountedAtoms.add(atom2);
      }
      if (isActuallyWritableAtom(atom2) && atom2.onMount) {
        const { onMount } = atom2;
        queue.push(() => {
          const onUnmount = onMount((...args) => writeAtom(atom2, ...args));
          if (onUnmount) {
            mounted.u = onUnmount;
          }
        });
      }
      if (!onMountQueue) {
        queue.forEach((f2) => f2());
      }
      return mounted;
    };
    const canUnmountAtom = (atom2, mounted) => !mounted.l.size && (!mounted.t.size || mounted.t.size === 1 && mounted.t.has(atom2));
    const tryUnmountAtom = (atom2, mounted) => {
      if (!canUnmountAtom(atom2, mounted)) {
        return;
      }
      const onUnmount = mounted.u;
      if (onUnmount) {
        onUnmount();
      }
      mountedMap.delete(atom2);
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        mountedAtoms.delete(atom2);
      }
      const atomState = getAtomState(atom2);
      if (atomState) {
        if (hasPromiseAtomValue(atomState)) {
          cancelPromise(atomState.v);
        }
        atomState.d.forEach((_, a) => {
          if (a !== atom2) {
            const mountedDep = mountedMap.get(a);
            if (mountedDep) {
              mountedDep.t.delete(atom2);
              tryUnmountAtom(a, mountedDep);
            }
          }
        });
      } else if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        console.warn("[Bug] could not find atom state to unmount", atom2);
      }
    };
    const mountDependencies = (atom2, atomState, prevDependencies) => {
      const depSet = new Set(atomState.d.keys());
      const maybeUnmountAtomSet = /* @__PURE__ */ new Set();
      prevDependencies == null ? void 0 : prevDependencies.forEach((_, a) => {
        if (depSet.has(a)) {
          depSet.delete(a);
          return;
        }
        maybeUnmountAtomSet.add(a);
        const mounted = mountedMap.get(a);
        if (mounted) {
          mounted.t.delete(atom2);
        }
      });
      depSet.forEach((a) => {
        mountAtom(a, atom2);
      });
      maybeUnmountAtomSet.forEach((a) => {
        const mounted = mountedMap.get(a);
        if (mounted) {
          tryUnmountAtom(a, mounted);
        }
      });
    };
    const flushPending = (pendingAtoms) => {
      let flushed;
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        flushed = /* @__PURE__ */ new Set();
      }
      const pending = [];
      const collectPending = (pendingAtom) => {
        var _a;
        if (!pendingMap.has(pendingAtom)) {
          return;
        }
        const [prevAtomState, dependents] = pendingMap.get(pendingAtom);
        pendingMap.delete(pendingAtom);
        pending.push([pendingAtom, prevAtomState]);
        dependents.forEach(collectPending);
        (_a = getAtomState(pendingAtom)) == null ? void 0 : _a.d.forEach((_, a) => collectPending(a));
      };
      pendingAtoms.forEach(collectPending);
      pending.forEach(([atom2, prevAtomState]) => {
        const atomState = getAtomState(atom2);
        if (!atomState) {
          if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
            console.warn("[Bug] no atom state to flush");
          }
          return;
        }
        if (atomState !== prevAtomState) {
          const mounted = mountedMap.get(atom2);
          if (mounted && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
            mountDependencies(atom2, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
          }
          if (mounted && !// TODO This seems pretty hacky. Hope to fix it.
          // Maybe we could `mountDependencies` in `setAtomState`?
          (!hasPromiseAtomValue(prevAtomState) && (isEqualAtomValue(prevAtomState, atomState) || isEqualAtomError(prevAtomState, atomState)))) {
            mounted.l.forEach((listener) => listener());
            if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
              flushed.add(atom2);
            }
          }
        }
      });
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        return flushed;
      }
    };
    const subscribeAtom = (atom2, listener) => {
      const mounted = mountAtom(atom2);
      const flushed = flushPending([atom2]);
      const listeners = mounted.l;
      listeners.add(listener);
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        devListenersRev2.forEach(
          (l2) => l2({ type: "sub", flushed })
        );
      }
      return () => {
        listeners.delete(listener);
        tryUnmountAtom(atom2, mounted);
        if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
          devListenersRev2.forEach((l2) => l2({ type: "unsub" }));
        }
      };
    };
    if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
      return {
        get: readAtom,
        set: writeAtom,
        sub: subscribeAtom,
        // store dev methods (these are tentative and subject to change without notice)
        dev_subscribe_store: (l2) => {
          devListenersRev2.add(l2);
          return () => {
            devListenersRev2.delete(l2);
          };
        },
        dev_get_mounted_atoms: () => mountedAtoms.values(),
        dev_get_atom_state: (a) => atomStateMap.get(a),
        dev_get_mounted: (a) => mountedMap.get(a),
        dev_restore_atoms: (values) => {
          pendingStack.push(/* @__PURE__ */ new Set());
          for (const [atom2, valueOrPromise] of values) {
            if (hasInitialValue(atom2)) {
              setAtomValueOrPromise(atom2, valueOrPromise);
              recomputeDependents(atom2);
            }
          }
          const flushed = flushPending(pendingStack.pop());
          devListenersRev2.forEach(
            (l2) => l2({ type: "restore", flushed })
          );
        }
      };
    }
    return {
      get: readAtom,
      set: writeAtom,
      sub: subscribeAtom
    };
  };
  let defaultStore;
  const getDefaultStore$1 = () => {
    if (!defaultStore) {
      defaultStore = createStore$1();
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
        if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
          console.warn(
            "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
          );
        }
      }
    }
    return defaultStore;
  };
  const createStore = createStore$1;
  const getDefaultStore = getDefaultStore$1;
  var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
  const StoreContext = require$$0.createContext(
    void 0
  );
  const useStore = (options) => {
    const store = require$$0.useContext(StoreContext);
    return store || getDefaultStore();
  };
  const Provider = ({
    children,
    store
  }) => {
    const storeRef = require$$0.useRef();
    if (!store && !storeRef.current) {
      storeRef.current = createStore();
    }
    return require$$0.createElement(
      StoreContext.Provider,
      {
        value: store || storeRef.current
      },
      children
    );
  };
  const isPromiseLike = (x) => typeof (x == null ? void 0 : x.then) === "function";
  const use = require$$0.use || ((promise) => {
    if (promise.status === "pending") {
      throw promise;
    } else if (promise.status === "fulfilled") {
      return promise.value;
    } else if (promise.status === "rejected") {
      throw promise.reason;
    } else {
      promise.status = "pending";
      promise.then(
        (v) => {
          promise.status = "fulfilled";
          promise.value = v;
        },
        (e) => {
          promise.status = "rejected";
          promise.reason = e;
        }
      );
      throw promise;
    }
  });
  function useAtomValue(atom2, options) {
    const store = useStore();
    const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = require$$0.useReducer(
      (prev) => {
        const nextValue = store.get(atom2);
        if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom2) {
          return prev;
        }
        return [nextValue, store, atom2];
      },
      void 0,
      () => [store.get(atom2), store, atom2]
    );
    let value = valueFromReducer;
    if (storeFromReducer !== store || atomFromReducer !== atom2) {
      rerender();
      value = store.get(atom2);
    }
    const delay = void 0;
    require$$0.useEffect(() => {
      const unsub = store.sub(atom2, () => {
        rerender();
      });
      rerender();
      return unsub;
    }, [store, atom2, delay]);
    require$$0.useDebugValue(value);
    return isPromiseLike(value) ? use(value) : value;
  }
  function useSetAtom(atom2, options) {
    const store = useStore();
    const setAtom = require$$0.useCallback(
      (...args) => {
        if ((define_import_meta_env_default ? "production" : void 0) !== "production" && !("write" in atom2)) {
          throw new Error("not writable atom");
        }
        return store.set(atom2, ...args);
      },
      [store, atom2]
    );
    return setAtom;
  }
  function useAtom(atom2, options) {
    return [
      useAtomValue(atom2),
      // We do wrong type assertion here, which results in throwing an error.
      useSetAtom(atom2)
    ];
  }
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  const productsAtom = atom([]);
  const filterResultAtom = atom((get) => {
    const allProducts = get(productsAtom);
    const regex = get(regexAtom);
    const filtered = allProducts.filter((p2) => {
      if (regex != null) {
        const matcher = regex.exec(p2.name);
        return matcher != null;
      }
      return true;
    });
    let markMax = 0;
    filtered.forEach((p2) => {
      if (p2.mark > markMax) {
        markMax = p2.mark;
      }
    });
    return {
      products: filtered,
      markMax
    };
  });
  const patternAtom = atom("");
  const regexAtom = atom(null);
  const showOriginChartAtom = atom(false);
  const showCompanyColorAtom = atom(false);
  atom(false);
  const showChineseNameAtom = atom(false);
  const Settings = () => {
    const [pattern, setPattern] = useAtom(patternAtom);
    const [, setRegex] = useAtom(regexAtom);
    const [compileError, setCompileError] = require$$0.useState(false);
    const [showOriginChart, setShowOriginChart] = useAtom(showOriginChartAtom);
    const [showCompanyColor, setShowCompanyColor] = useAtom(showCompanyColorAtom);
    const [showChineseName, setShowChineseName] = useAtom(showChineseNameAtom);
    function compile(input) {
      setPattern(input);
      try {
        const regex = new RegExp(input);
        console.info("正则表达式编译成功：", regex);
        setRegex(regex);
        setCompileError(false);
      } catch (ex) {
        setCompileError(true);
        console.warn("正则表达式编译错误", ex);
      }
    }
    function updateShowOriginChart(checked) {
      setShowOriginChart(checked);
    }
    function updateShowCompanyColor(checked) {
      setShowCompanyColor(checked);
    }
    function updateShowChineseName(checked) {
      setShowChineseName(checked);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "settings", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "setting-item pattern", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: "请输入正则表达式",
          value: pattern,
          onChange: (e) => {
            const value = e.currentTarget.value;
            compile(value);
          },
          style: {
            width: "100%",
            backgroundColor: compileError ? "pink" : void 0
          },
          disabled: showOriginChart
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "setting-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "show-origin-chart",
            type: "checkbox",
            checked: showOriginChart,
            onChange: (e) => {
              const checked = e.currentTarget.checked;
              updateShowOriginChart(checked);
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "checkbox-label", children: "原版图表" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "setting-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "show-company-color",
            type: "checkbox",
            disabled: showOriginChart,
            checked: showCompanyColor,
            onChange: (e) => {
              const checked = e.currentTarget.checked;
              updateShowCompanyColor(checked);
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "checkbox-label", children: "公司颜色" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "setting-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "show-chinese-name",
            type: "checkbox",
            disabled: showOriginChart,
            checked: showChineseName,
            onChange: (e) => {
              const checked = e.currentTarget.checked;
              updateShowChineseName(checked);
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "checkbox-label", children: "中文名称" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "setting-item", hidden: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "show-short-name",
            type: "checkbox",
            disabled: showOriginChart
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "checkbox-label", children: "缩短名称" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "setting-item", hidden: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          disabled: showOriginChart,
          onClick: () => {
            console.info("点击导出按钮");
          },
          children: "导出"
        }
      ) })
    ] });
  };
  const colors = [
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
  ];
  const Item = ({ product, index, markMax }) => {
    const showCompanyColor = useAtomValue(showCompanyColorAtom);
    const showChineseName = useAtomValue(showChineseNameAtom);
    const { id, url, mark, price, company } = product;
    const alt = index % 2 == 1 ? "alt" : void 0;
    const color = colors[index % colors.length];
    const percent = mark * 86 / markMax;
    const width = `${percent.toFixed(0)}%`;
    const count = mark.toLocaleString();
    let productName = product.name;
    if (showChineseName && product.chinese != void 0) {
      productName = product.chinese;
    }
    let companyColor = void 0;
    if (showCompanyColor) {
      switch (company) {
        case "intel":
          companyColor = "#0068B5";
          break;
        case "amd":
          companyColor = "#EF281F";
          break;
        case "nvidia":
          companyColor = "#76B900";
          break;
      }
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: `rk${id}`, className: alt, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "more_details", onClick: () => {
        console.warn("暂未实现");
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: url, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "prdname", style: {
          color: companyColor
        }, children: productName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `index ${color}`, style: {
          width
        }, children: [
          "(",
          width,
          ")"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "count", children: count }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "price-neww", children: price })
      ] })
    ] });
  };
  const ProductList = () => {
    const showOriginChart = useAtomValue(showOriginChartAtom);
    const { products, markMax } = useAtomValue(filterResultAtom);
    const items = [];
    if (!showOriginChart) {
      products.forEach((p2, index) => {
        items.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Item,
            {
              product: p2,
              index,
              markMax
            },
            p2.id
          )
        );
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: items });
  };
  function parseProducts(ul) {
    const products = [];
    const lis = ul.querySelectorAll("li");
    lis.forEach((li) => {
      const product = parseProduct(li);
      if (product != null) {
        products.push(product);
      }
    });
    return products;
  }
  function parseProduct(li) {
    const id = parseInt(li.id.substring(2));
    const a = li.querySelector("a");
    if (a == null)
      return null;
    const url = a.href;
    const prdname = a.querySelector("span.prdname");
    if (prdname == null)
      return null;
    const name = prdname.innerText;
    const countSpan = a.querySelector("span.count");
    if (countSpan == null)
      return null;
    const mark = parseInt(countSpan.innerText.replaceAll(",", ""));
    const priceSpan = a.querySelector("span.price-neww");
    if (priceSpan == null)
      return null;
    const price = priceSpan.innerText;
    let company = void 0;
    if (name.indexOf("Intel") >= 0) {
      company = "intel";
    }
    if (name.indexOf("AMD") >= 0 || name.indexOf("Radeon") >= 0 || name.indexOf("Ryzen") >= 0 || name.indexOf("FirePro") >= 0) {
      company = "amd";
    }
    if (name.indexOf("NVIDIA") >= 0 || name.indexOf("GeForce") >= 0 || name.indexOf("RTX") >= 0 || name.indexOf("TITAN") >= 0 || name.indexOf("Quadro") >= 0 || name.indexOf("Tesla") >= 0 || name.indexOf("GRID") >= 0) {
      company = "nvidia";
    }
    let chinese = name;
    chinese = chinese.replaceAll("Intel Xeon ", "至强 ");
    chinese = chinese.replaceAll("Intel Core ", "酷睿 ");
    chinese = chinese.replaceAll("Intel Atom ", "凌动 ");
    chinese = chinese.replaceAll("Intel Core2 ", "酷睿2 ");
    chinese = chinese.replaceAll("Intel Pentium ", "奔腾 ");
    chinese = chinese.replaceAll("Intel Celeron ", "赛扬 ");
    chinese = chinese.replaceAll("AMD Ryzen Threadripper ", "锐龙 线程撕裂者 ");
    chinese = chinese.replaceAll("AMD EPYC ", "霄龙 ");
    chinese = chinese.replaceAll("AMD Ryzen ", "锐龙 ");
    chinese = chinese.replaceAll("AMD Opteron ", "皓龙 ");
    chinese = chinese.replaceAll("AMD Phenom ", "羿龙 ");
    chinese = chinese.replaceAll("AMD Athlon ", "速龙 ");
    chinese = chinese.replaceAll("AMD Turion ", "炫龙 ");
    return {
      id,
      name,
      url,
      mark,
      price,
      company,
      chinese
    };
  }
  const settingsContainer = document.createElement("div");
  settingsContainer.id = "pmtk-settings";
  const productsContainer = document.createElement("ul");
  productsContainer.id = "pmtk-products";
  productsContainer.className = "chartlist";
  const chart = _unsafeWindow.document.querySelector("#mark > div.chart");
  const chartBody = (chart == null ? void 0 : chart.querySelector("div.chart_body")) ?? null;
  const chartList = (chartBody == null ? void 0 : chartBody.querySelector("ul.chartlist")) ?? null;
  function App() {
    const [, setProducts] = useAtom(productsAtom);
    const showOriginChart = useAtomValue(showOriginChartAtom);
    require$$0.useEffect(() => {
      if (chartList != null) {
        const products = parseProducts(chartList);
        setProducts(products);
      }
      if (chart != null) {
        const subheader = chart.querySelector(".chart_subheader");
        const settings = _unsafeWindow.document.getElementById("pmtk-settings");
        if (settings == void 0) {
          chart.insertBefore(settingsContainer, subheader);
        }
        const products = _unsafeWindow.document.getElementById("pmtk-products");
        if (products == void 0) {
          chartBody == null ? void 0 : chartBody.append(productsContainer);
        }
      }
    }, []);
    require$$0.useEffect(() => {
      if (chartList != null) {
        chartList.style.display = showOriginChart ? "block" : "none";
      }
    }, [showOriginChart]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      require$$0$1.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(Settings, {}), settingsContainer, "settings"),
      require$$0$1.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(ProductList, {}), productsContainer, "products")
    ] });
  }
  const container = document.createDocumentFragment();
  document.body.append(container);
  client.createRoot(container).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );

})(React, ReactDOM);