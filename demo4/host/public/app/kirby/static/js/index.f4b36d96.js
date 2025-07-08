(() => {
  // webpackBootstrap
  "use strict";
  var __webpack_modules__ = {
    646: function (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) {
      // NAMESPACE OBJECT: ./src/lifecycles.tsx
      var lifecycles_namespaceObject = {};
      __webpack_require__.r(lifecycles_namespaceObject);
      __webpack_require__.d(lifecycles_namespaceObject, {
        bootstrap: () => bootstrap,
        mount: () => mount,
        unmount: () => unmount,
        update: () => update,
      }); // CONCATENATED MODULE: external "__FEDERATION_ENHANCED_RUNTIME__"

      const external_FEDERATION_ENHANCED_RUNTIME_namespaceObject =
        __FEDERATION_ENHANCED_RUNTIME__; // CONCATENATED MODULE: ./src/lifecycles.tsx
      let root = null;
      /**
       * The bootstrap will only be called once when the child application is initialized.
       * The next time the child application re-enters, the mount hook will be called directly, and bootstrap will not be triggered repeatedly.
       * Usually we can do some initialization of global variables here,
       * such as application-level caches that will not be destroyed during the unmount phase.
       */ async function bootstrap() {
        console.log("kirby bootstrap");
        (0,
        external_FEDERATION_ENHANCED_RUNTIME_namespaceObject.registerRemotes)([
          {
            name: "kirby",
            entry: `app/kirby/mf-manifest.json`,
          },
        ]);
      }
      /**
       * The mount method is called every time the application enters,
       * usually we trigger the application's rendering method here.
       */ async function mount(props) {
        console.log("kirby mount", props);
        const { renderToContainer } = await (0,
        external_FEDERATION_ENHANCED_RUNTIME_namespaceObject.loadRemote)(
          "kirby"
        );
        if (!root) {
          const container = props.container
            ? props.container.querySelector("#root")
            : document.getElementById("root");
          root = renderToContainer(container);
        }
      }
      /**
       * Methods that are called each time the application is switched/unloaded,
       * usually in this case we uninstall the application instance of the subapplication.
       */ async function unmount(props) {
        console.log("kirby unmount", props);
        if (root) {
          root.unmount();
          root = null;
        }
      }
      /**
       * Optional lifecycle，just available with loadMicroApp way
       */ async function update(props) {
        console.log("kirby update", props);
      } // CONCATENATED MODULE: ./src/index.tsx

      // expose micro-app's lifecycles to host
      window.__APP_KIRBY_LIFECYCLES__ = lifecycles_namespaceObject;
      if (!window.__MICRO_APP_HOST__) {
        mount({});
      }
    },
  };
  /************************************************************************/
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
      id: moduleId,
      loaded: false,
      exports: {},
    });
    // Execute the module function
    __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );

    // Flag the module as loaded
    module.loaded = true;
    // Return the exports of the module
    return module.exports;
  }

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = __webpack_modules__;

  // expose the module cache
  __webpack_require__.c = __webpack_module_cache__;

  /************************************************************************/
  // module_federation/runtime
  (() => {
    if (!__webpack_require__.federation) {
      __webpack_require__.federation = {
        chunkMatcher: function (chunkId) {
          return 454 != chunkId;
        },
        rootOutputDir: "../../",
      };
    }
  })();
  // webpack/runtime/compat_get_default_export
  (() => {
    // getDefaultExport function for compatibility with non-ESM modules
    __webpack_require__.n = (module) => {
      var getter =
        module && module.__esModule ? () => module["default"] : () => module;
      __webpack_require__.d(getter, { a: getter });
      return getter;
    };
  })();
  // webpack/runtime/define_property_getters
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
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
      return (
        "static/js/async/" +
        chunkId +
        "." +
        { 339: "e386a464", 366: "e0354800", 389: "9a882fae" }[chunkId] +
        ".js"
      );
    };
  })();
  // webpack/runtime/get mini-css chunk filename
  (() => {
    // This function allow to reference chunks
    __webpack_require__.miniCssF = (chunkId) => {
      // return url for filenames not based on template

      // return url for filenames based on template
      return "" + chunkId + ".css";
    };
  })();
  // webpack/runtime/get_full_hash
  (() => {
    __webpack_require__.h = () => "80c9ced74754a845";
  })();
  // webpack/runtime/global
  (() => {
    __webpack_require__.g = (() => {
      if (typeof globalThis === "object") return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if (typeof window === "object") return window;
      }
    })();
  })();
  // webpack/runtime/has_own_property
  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  // webpack/runtime/load_script
  (() => {
    var inProgress = {};

    var dataWebpackPrefix = "kirby:";
    // loadScript function to load a script via script tag
    __webpack_require__.l = function (url, done, key, chunkId) {
      if (inProgress[url]) {
        inProgress[url].push(done);
        return;
      }
      var script, needAttach;
      if (key !== undefined) {
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
          var s = scripts[i];
          if (
            s.getAttribute("src") == url ||
            s.getAttribute("data-webpack") == dataWebpackPrefix + key
          ) {
            script = s;
            break;
          }
        }
      }
      if (!script) {
        needAttach = true;

        script = document.createElement("script");

        script.charset = "utf-8";
        script.timeout = 120;
        if (__webpack_require__.nc) {
          script.setAttribute("nonce", __webpack_require__.nc);
        }
        script.setAttribute("data-webpack", dataWebpackPrefix + key);

        script.src = url;
      }
      inProgress[url] = [done];
      var onScriptComplete = function (prev, event) {
        script.onerror = script.onload = null;
        clearTimeout(timeout);
        var doneFns = inProgress[url];
        delete inProgress[url];
        script.parentNode && script.parentNode.removeChild(script);
        doneFns &&
          doneFns.forEach(function (fn) {
            return fn(event);
          });
        if (prev) return prev(event);
      };
      var timeout = setTimeout(
        onScriptComplete.bind(null, undefined, {
          type: "timeout",
          target: script,
        }),
        120000
      );
      script.onerror = onScriptComplete.bind(null, script.onerror);
      script.onload = onScriptComplete.bind(null, script.onload);
      needAttach && document.head.appendChild(script);
    };
  })();
  // webpack/runtime/make_namespace_object
  (() => {
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();
  // webpack/runtime/node_module_decorator
  (() => {
    __webpack_require__.nmd = (module) => {
      module.paths = [];
      if (!module.children) module.children = [];
      return module;
    };
  })();
  // webpack/runtime/on_chunk_loaded
  (() => {
    var deferred = [];
    __webpack_require__.O = (result, chunkIds, fn, priority) => {
      if (chunkIds) {
        priority = priority || 0;
        for (
          var i = deferred.length;
          i > 0 && deferred[i - 1][2] > priority;
          i--
        )
          deferred[i] = deferred[i - 1];
        deferred[i] = [chunkIds, fn, priority];
        return;
      }
      var notFulfilled = Infinity;
      for (var i = 0; i < deferred.length; i++) {
        var [chunkIds, fn, priority] = deferred[i];
        var fulfilled = true;
        for (var j = 0; j < chunkIds.length; j++) {
          if (
            (priority & (1 === 0) || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every((key) =>
              __webpack_require__.O[key](chunkIds[j])
            )
          ) {
            chunkIds.splice(j--, 1);
          } else {
            fulfilled = false;
            if (priority < notFulfilled) notFulfilled = priority;
          }
        }
        if (fulfilled) {
          deferred.splice(i--, 1);
          var r = fn();
          if (r !== undefined) result = r;
        }
      }
      return result;
    };
  })();
  // webpack/runtime/public_path
  (() => {
    __webpack_require__.p = "/app/kirby/";
  })();
  // webpack/runtime/sharing
  (() => {
    __webpack_require__.S = {};
    __webpack_require__.initializeSharingData = {
      scopeToSharingDataMapping: {
        default: [
          {
            name: "lodash",
            version: "4.0.0",
            factory: () =>
              __webpack_require__
                .e("339")
                .then(() => () => __webpack_require__(579)),
            eager: 0,
            requiredVersion: "^4.0.0",
          },
          {
            name: "react-dom",
            version: "18.3.1",
            factory: () =>
              Promise.all([
                __webpack_require__.e("389"),
                __webpack_require__.e("454"),
              ]).then(() => () => __webpack_require__(967)),
            eager: 0,
            singleton: 1,
          },
          {
            name: "react",
            version: "18.3.1",
            factory: () =>
              __webpack_require__
                .e("366")
                .then(() => () => __webpack_require__(271)),
            eager: 0,
            singleton: 1,
          },
        ],
      },
      uniqueName: "kirby",
    };
    __webpack_require__.I =
      __webpack_require__.I ||
      function () {
        throw new Error("should have __webpack_require__.I");
      };
  })();
  // webpack/runtime/consumes_loading
  (() => {
    __webpack_require__.consumesLoadingData = {
      chunkMapping: { 454: ["103"] },
      moduleIdToConsumeDataMapping: {
        103: {
          shareScope: "default",
          shareKey: "react",
          import: "react",
          requiredVersion: "^18.3.1",
          strictVersion: false,
          singleton: true,
          eager: false,
          fallback: () =>
            __webpack_require__
              .e("366")
              .then(() => () => __webpack_require__(271)),
        },
      },
      initialConsumes: [],
    };
    __webpack_require__.f.consumes =
      __webpack_require__.f.consumes ||
      function () {
        throw new Error("should have __webpack_require__.f.consumes");
      };
  })();
  // webpack/runtime/jsonp_chunk_loading
  (() => {
    // object to store loaded and loading chunks
    // undefined = chunk not loaded, null = chunk preloaded/prefetched
    // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    var installedChunks = { 980: 0 };

    __webpack_require__.f.j = function (chunkId, promises) {
      // JSONP chunk loading for javascript
      var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
        ? installedChunks[chunkId]
        : undefined;
      if (installedChunkData !== 0) {
        // 0 means "already installed".

        // a Promise means "currently loading".
        if (installedChunkData) {
          promises.push(installedChunkData[2]);
        } else {
          if (454 != chunkId) {
            // setup Promise in chunk cache
            var promise = new Promise(
              (resolve, reject) =>
                (installedChunkData = installedChunks[chunkId] =
                  [resolve, reject])
            );
            promises.push((installedChunkData[2] = promise));

            // start chunk loading
            var url = __webpack_require__.p + __webpack_require__.u(chunkId);
            // create error before stack unwound to get useful stacktrace later
            var error = new Error();
            var loadingEnded = function (event) {
              if (__webpack_require__.o(installedChunks, chunkId)) {
                installedChunkData = installedChunks[chunkId];
                if (installedChunkData !== 0)
                  installedChunks[chunkId] = undefined;
                if (installedChunkData) {
                  var errorType =
                    event && (event.type === "load" ? "missing" : event.type);
                  var realSrc = event && event.target && event.target.src;
                  error.message =
                    "Loading chunk " +
                    chunkId +
                    " failed.\n(" +
                    errorType +
                    ": " +
                    realSrc +
                    ")";
                  error.name = "ChunkLoadError";
                  error.type = errorType;
                  error.request = realSrc;
                  installedChunkData[1](error);
                }
              }
            };
            __webpack_require__.l(
              url,
              loadingEnded,
              "chunk-" + chunkId,
              chunkId
            );
          } else installedChunks[chunkId] = 0;
        }
      }
    };
    __webpack_require__.O.j = (chunkId) => installedChunks[chunkId] === 0;
    // install a JSONP callback for chunk loading
    var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      var [chunkIds, moreModules, runtime] = data;
      // add "moreModules" to the modules object,
      // then flag all "chunkIds" as loaded and fire callback
      var moduleId,
        chunkId,
        i = 0;
      if (chunkIds.some((id) => installedChunks[id] !== 0)) {
        for (moduleId in moreModules) {
          if (__webpack_require__.o(moreModules, moduleId)) {
            __webpack_require__.m[moduleId] = moreModules[moduleId];
          }
        }
        if (runtime) var result = runtime(__webpack_require__);
      }
      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      for (; i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if (
          __webpack_require__.o(installedChunks, chunkId) &&
          installedChunks[chunkId]
        ) {
          installedChunks[chunkId][0]();
        }
        installedChunks[chunkId] = 0;
      }
      return __webpack_require__.O(result);
    };

    var chunkLoadingGlobal = (self["chunk_kirby"] = self["chunk_kirby"] || []);
    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    );
  })();
  /************************************************************************/
  // module cache are used so entry inlining is disabled
  // startup
  // Load entry module and return exports

  // TODO: find a way to exclude the MF runtime here
  // __webpack_require__.O(undefined, ["821"], function() { return __webpack_require__(918) });
  // var __webpack_exports__ = __webpack_require__.O(undefined, ["821"], function() { return __webpack_require__(646) });

  var __webpack_exports__ = __webpack_require__.O(undefined, [], function () {
    return __webpack_require__(646);
  });
  __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
