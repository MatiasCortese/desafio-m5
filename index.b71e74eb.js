// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2oZg2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _presentationText = require("./components/presentation-text");
var _state = require("./state");
var _countdown = require("./components/countdown");
var _jugada = require("./components/jugada");
var _button = require("./components/button");
var _star = require("./components/star");
var _score = require("./components/score");
var _router = require("./router");
(function() {
    (0, _state.state).initState();
    const container = document.querySelector("#root");
    (0, _router.initRouter)(container);
})();

},{"./components/presentation-text":"1qJkw","./components/countdown":"aGzWk","./components/jugada":"fxLzN","./components/button":"dZaQH","./components/star":"bmR2S","./router":"4QFWt","./components/score":"5XKJp","./state":"1Yeju"}],"1qJkw":[function(require,module,exports) {
customElements.define("pres-text", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
            .title {
                width: 308px;
                color: #009048;
                font-family: American Typewriter;
                font-size: 80px;
                font-style: normal;
                font-weight: 700;
                line-height: 88.1%;
                padding-right: 24px;
            }

            .span {
                color: #91CCAF;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const div = document.createElement("div");
        div.innerHTML = `
            <h1 class="title">Piedra Papel <span class="span">ó</span>
            Tijera
            </h1>
        `;
        this.shadow.appendChild(div);
    }
});

},{}],"aGzWk":[function(require,module,exports) {
customElements.define("my-countdown", class extends HTMLElement {
    constructor(){
        super();
        this.countdownNumber = 3;
        this.fondoImg = require("580031dc5ee84de2");
        this.intervalId = setInterval(()=>{
            this.countdownNumber--;
            this.shadow.querySelector(".countdownNumber").innerHTML = `${this.countdownNumber}`;
            if (this.countdownNumber < 1) {
                const myEvent = new CustomEvent("countdownEnd", {});
                this.dispatchEvent(myEvent);
                clearInterval(this.intervalId);
            }
        }, 1000);
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.setAttribute("ready", "false");
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
            .countdownCircle {
                width: 243px;
                height: 243px;  
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 135px;
                position: relative;
            }

            .countdownCircle:before {
                content: "";
                border: 20px solid black;
                position: absolute;
                height: 84%;
                width: 84%;
                border-radius: 50%;
            }

            .countdownNumber {
                width: 189px;
                color: #000;
                text-align: center;
                font-family: American Typewriter;
                font-size: 100px;
                font-style: normal;
                font-weight: 700;
                line-height: 100%;
                position: absolute;
            }

            .button:hover {
                cursor: pointer;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const div = document.createElement("div");
        div.innerHTML = `
            <p class="countdownNumber">${this.countdownNumber}</p>
        `;
        div.classList.add("countdownCircle");
        this.shadow.appendChild(div);
    }
});

},{"580031dc5ee84de2":"9JKaS"}],"9JKaS":[function(require,module,exports) {
module.exports = require("b329cc828cbe2431").getBundleURL("7UhFu") + "fondo.32e5e2cd.jpg" + "?" + Date.now();

},{"b329cc828cbe2431":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fxLzN":[function(require,module,exports) {
customElements.define("move-jugada", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.jugada = this.getAttribute("jugada");
        const style = document.createElement("style");
        style.innerHTML = `
            .hand {
                width: 140px;
            }

            .hand:hover {
                cursor: pointer;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    imgSelector(jugada) {
        if (jugada == "papel") return require("7bd5e0083488cb6d");
        if (jugada == "piedra") return require("92a709fd58e1a9f5");
        if (jugada == "tijera") return require("c1f89922fb25ec0c");
    }
    render() {
        const div = document.createElement("div");
        const jugadaImg = this.imgSelector(this.jugada);
        div.innerHTML = `
            <img class="hand" src="${jugadaImg}">
        `;
        this.shadow.appendChild(div);
    }
});

},{"7bd5e0083488cb6d":"1uaHf","92a709fd58e1a9f5":"5Sq1A","c1f89922fb25ec0c":"2WbqU"}],"1uaHf":[function(require,module,exports) {
module.exports = require("19730df4a5a51d90").getBundleURL("7UhFu") + "papel.bdcca0a3.svg" + "?" + Date.now();

},{"19730df4a5a51d90":"lgJ39"}],"5Sq1A":[function(require,module,exports) {
module.exports = require("1fc492019efcc533").getBundleURL("7UhFu") + "piedra.963c34ce.svg" + "?" + Date.now();

},{"1fc492019efcc533":"lgJ39"}],"2WbqU":[function(require,module,exports) {
module.exports = require("916d38de29b8a578").getBundleURL("7UhFu") + "tijera.a2137dd9.svg" + "?" + Date.now();

},{"916d38de29b8a578":"lgJ39"}],"dZaQH":[function(require,module,exports) {
customElements.define("my-button", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
            .button {
                width: 322px;
                height: 87px;
                border-radius: 10px;
                border: 10px solid #001997;
                background: #006CFC;
                color: #D8FCFC;
                text-align: center;
                font-family: 'Odibee Sans', cursive;
                font-size: 45px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 2.25px;
            }

            .button:hover {
                cursor: pointer;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const div = document.createElement("div");
        div.innerHTML = `
            <button class="button">${this.innerHTML}</button>
        `;
        this.shadow.appendChild(div);
    }
});

},{}],"bmR2S":[function(require,module,exports) {
customElements.define("star-result", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.resultado = this.getAttribute("resultado");
        const style = document.createElement("style");
        style.innerHTML = `
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    imgSelector(resultado) {
        if (resultado == "ganaste") return require("b68927602becdaf9");
        if (resultado == "perdiste") return require("411cd0aa6f683893");
    }
    render() {
        const div = document.createElement("div");
        const resultImg = this.imgSelector(this.resultado);
        div.innerHTML = `
            <img src="${resultImg}">
        `;
        this.shadow.appendChild(div);
    }
});

},{"b68927602becdaf9":"dbmVi","411cd0aa6f683893":"bQ2xJ"}],"dbmVi":[function(require,module,exports) {
module.exports = require("a01b0876cdfd1c4").getBundleURL("7UhFu") + "ganaste.f5868f99.png" + "?" + Date.now();

},{"a01b0876cdfd1c4":"lgJ39"}],"bQ2xJ":[function(require,module,exports) {
module.exports = require("7e67a5d385d91a52").getBundleURL("7UhFu") + "perdiste.e7faf5e9.png" + "?" + Date.now();

},{"7e67a5d385d91a52":"lgJ39"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _play = require("./pages/play");
var _ganaste = require("./pages/result/ganaste");
var _perdiste = require("./pages/result/perdiste");
const routes = [
    {
        path: /\/welcome/,
        component: (0, _welcome.initWelcome)
    },
    {
        path: /\/instructions/,
        component: (0, _instructions.initInstructions)
    },
    {
        path: /\/play/,
        component: (0, _play.initPlay)
    },
    {
        path: /\/result\/ganaste/,
        component: (0, _ganaste.initGanaste)
    },
    {
        path: /\/result\/perdiste/,
        component: (0, _perdiste.initPerdiste)
    }
];
const BASE_PATH = "/desafio-m5";
function isGithubPages() {
    return location.host.includes("github.io");
}
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes)if (r.path.test(newRoute)) {
            // Pasamos la funcion como parámetro que es comun en varios frameworks
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/" || location.host.includes("github.io")) goTo("/welcome");
    else handleRoute(location.pathname);
    // si no usamos onpopstate, al usar las flechas del navegador cambiará la url pero no el handleRoute ya que esos cambios del state no estan siendo escuchados. Con onpopstate, logramos que lo sean.
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome":"fNSF3","./pages/instructions":"c8fMJ","./pages/play":"hbEIY","./pages/result/ganaste":"ja4Uz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/result/perdiste":"aHlqq"}],"fNSF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome);
function initWelcome(params) {
    const fondoImg = require("c0f0c5802fc3d10b");
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `
        <pres-text></pres-text>
        <my-button class="empezar">Empezar</my-button>
        <div class="plays-container">
            <move-jugada jugada="tijera"></move-jugada>
            <move-jugada jugada="piedra"></move-jugada>
            <move-jugada jugada="papel"></move-jugada>
        </div>
    `;
    style.innerHTML = `
        .container {
            padding: 115px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: url(${fondoImg}]), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
            width: 100%;
            height: 100vh;
        }

        .plays-container {
            display: flex;
            gap: 46px;
            width: 100%;
            height: 20%;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: -40px;
        }
    `;
    div.appendChild(style);
    div.classList.add("container");
    div.querySelector(".empezar")?.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"c0f0c5802fc3d10b":"9JKaS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c8fMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructions", ()=>initInstructions);
function initInstructions(params) {
    const papelImg = require("c3d235aa3243de6b");
    const piedraImg = require("ff851beb7900face");
    const tijeraImg = require("64b69f7369fa6524");
    const fondoImg = require("cb39acd38dfee4a6");
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `
        <p class="instructions">Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
        <my-button class="jugar">¡Jugar!</my-button>
        <div class="plays-container">
            <move-jugada jugada="tijera"></move-jugada>
            <move-jugada jugada="piedra"></move-jugada>
            <move-jugada jugada="papel"></move-jugada>
        </div>
    `;
    style.innerHTML = `
        .container {
            padding: 129px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            justify-contnet: center;
            align-items: center;
            background: url(${fondoImg}]), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
            width: 100%;
            gap: 45px;
            height: 100vh;
        }

        .instructions {
            width: 317px;
            color: #000;
            text-align: center;
            font-family: American Typewriter;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 40px */
        }

        .plays-container {
            display: flex;
            gap: 46px;
            width: 100%;
            height: 20%;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: -40px;
        }

    `;
    div.appendChild(style);
    div.classList.add("container");
    div.querySelector(".jugar")?.addEventListener("click", ()=>{
        params.goTo("/play");
    });
    return div;
}

},{"c3d235aa3243de6b":"1uaHf","ff851beb7900face":"5Sq1A","64b69f7369fa6524":"2WbqU","cb39acd38dfee4a6":"9JKaS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbEIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlay", ()=>initPlay);
var _state = require("../../state");
function initPlay(params) {
    const fondoImg = require("c8311463603c2d25");
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `
        <my-countdown></my-countdown>
        <div class="plays-container">
            <move-jugada class="jugada" jugada="tijera"></move-jugada>
            <move-jugada class="jugada" jugada="piedra"></move-jugada>
            <move-jugada class="jugada" jugada="papel"></move-jugada>
        </div>
        <div class="play-screen hidden">
        </div>
    `;
    style.innerHTML = `
        .container {
            padding: 129px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background: url(${fondoImg}]), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
            width: 100%;
            height: 100vh;
        }

        .plays-container {
            display: flex;
            gap: 46px;
            width: 100%;
            height: 20%;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: -40px;
        }

        .play-screen {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100vh;
        }

        .jugada {
            opacity: 0.5;
        }

        .jugada:hover {
            position: relative;
            bottom: 30px;
            opacity: 1;
        }

        .chosen-play {
            width: 159px;
            height: 356px
        }

        .hidden {
            display: none;
        }
    `;
    div.appendChild(style);
    div.classList.add("container");
    const countdownEl = div.querySelector("my-countdown");
    const playsContainerEl = div.querySelector(".plays-container");
    const playScreenEl = div.querySelector(".play-screen");
    var myMove;
    // De acá en más ya hay que ir conectando con el state
    div.querySelectorAll(".jugada").forEach((play)=>{
        play.addEventListener("click", (e)=>{
            const target = e.target;
            myMove = target.jugada;
            return myMove;
        });
    });
    function computerPlay() {
        const moves = div.querySelectorAll("[jugada]");
        const jugadas = [];
        moves.forEach((move)=>{
            const jugada = move.getAttribute("jugada");
            jugadas.push(jugada);
        });
        const jugadaRandom = jugadas[Math.floor(Math.random() * jugadas.length)];
        return jugadaRandom;
    }
    function showMoves(computerMove, myMove) {
        const result = (0, _state.state).whoWin(myMove, computerMove);
        console.log(result);
        const computerPlay = document.createElement("move-jugada");
        const myPlay = document.createElement("move-jugada");
        var containerEl = document.querySelector(".container");
        containerEl.style.padding = "0px";
        countdownEl?.classList.toggle("hidden");
        playsContainerEl?.classList.toggle("hidden");
        playScreenEl?.classList.toggle("hidden");
        computerPlay.setAttribute("jugada", computerMove);
        computerPlay.style.transform = "rotate(180deg)";
        myPlay.setAttribute("jugada", myMove);
        playScreenEl?.append(computerPlay, myPlay);
        let counter = 3;
        const intervalId = setInterval(()=>{
            counter--;
            if (counter == 0) {
                if (result === "Gan\xe9") params.goTo("/result/ganaste");
                if (result === "Perd\xed") params.goTo("/result/perdiste");
                if (result === "Empat\xe9") params.goTo("/instructions");
                clearInterval(intervalId);
            }
        }, 1000);
    }
    countdownEl?.addEventListener("countdownEnd", ()=>{
        const computerMove = computerPlay();
        if (myMove == undefined) params.goTo("/instructions");
        else {
            showMoves(computerMove, myMove);
            (0, _state.state).setMoves(myMove, computerMove);
        }
    });
    return div;
}

},{"../../state":"1Yeju","c8311463603c2d25":"9JKaS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: []
    },
    listeners: [],
    getState () {
        return this.data;
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    setMoves (myPlay, computerPlay) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = myPlay;
        currentState.currentGame.computerPlay = computerPlay;
        this.pushToHistory({
            computerPlay,
            myPlay
        });
        this.whoWin(myPlay, computerPlay);
    },
    initState () {
        const localData = JSON.parse(localStorage.getItem("saved-state"));
        if (localData) {
            this.setState(localData);
            this.scoreCalculator();
        }
    },
    setState (newState) {
        this.data.history = newState;
        for (const cb of this.listeners){
            console.log("pa saber si entra");
            cb(newState);
            localStorage.setItem("saved-state", JSON.stringify(newState));
        }
    },
    pushToHistory (game) {
        const currentState = this.getState();
        currentState.history.push(game);
        localStorage.setItem("saved-state", JSON.stringify(currentState.history));
    },
    whoWin (myPlay, computerPlay) {
        const ganeConTijera = myPlay == "tijera" && computerPlay == "papel";
        const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
        const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
        const perdiContraTijera = myPlay == "papel" && computerPlay == "tijera";
        const perdiContraPiedra = myPlay == "tijera" && computerPlay == "piedra";
        const perdiContraPapel = myPlay == "piedra" && computerPlay == "papel";
        const gane = [
            ganeConTijera,
            ganeConPapel,
            ganeConPiedra
        ].includes(true);
        const perdi = [
            perdiContraTijera,
            perdiContraPapel,
            perdiContraPiedra
        ].includes(true);
        if (gane) return "Gan\xe9";
        else if (perdi) return "Perd\xed";
        else return "Empat\xe9";
    },
    scoreCalculator () {
        var myScore = 0;
        var computerScore = 0;
        const localData = localStorage.getItem("saved-state");
        if (localData) {
            const data = JSON.parse(localData);
            data.forEach((juego)=>{
                const resultado = this.whoWin(juego.myPlay, juego.computerPlay);
                if (resultado === "Gan\xe9") myScore++;
                if (resultado === "Perd\xed") computerScore++;
            });
            return {
                myScore: myScore,
                computerScore: computerScore
            };
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ja4Uz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGanaste", ()=>initGanaste);
function initGanaste(params) {
    // le pasamos params ya que en algún momento dibujamos el boton para reiniciar el juego
    const resultado = "ganaste";
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `
        .container {
            padding: 115px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #888949;
            opacity: 0.9;
            width: 100%;
            height: 100vh;
            gap: 25px;
        }
    `;
    div.innerHTML = `
        <star-result resultado="${resultado}"></star-result>
        <score-item></score-item>
        <my-button class="volver-welcome">Volver a jugar</my-button>
    `;
    div.appendChild(style);
    div.classList.add("container");
    div.querySelector(".volver-welcome")?.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHlqq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPerdiste", ()=>initPerdiste);
function initPerdiste(params) {
    const resultado = "perdiste";
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `
        .container {
            padding: 115px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #894949;
            opacity: 0.9;
            width: 100%;
            height: 100vh;
            gap: 25px;
        }
    `;
    div.innerHTML = `
        <star-result resultado="${resultado}"></star-result>
        <score-item></score-item>
        <my-button class="volver-welcome">Volver a jugar</my-button>
    `;
    div.appendChild(style);
    div.classList.add("container");
    div.querySelector(".volver-welcome")?.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5XKJp":[function(require,module,exports) {
var _state = require("../../state");
customElements.define("score-item", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const scores = (0, _state.state).scoreCalculator();
        this.myScore = scores?.myScore;
        this.computerScore = scores?.computerScore;
        const style = document.createElement("style");
        style.innerHTML = `
            .container {
                width: 259px;
                height: 217px;
                border-radius: 10px;
                border: 10px solid #000000;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
            }

            .score-title {
                font-family: 'Odibee Sans', cursive;
                font-weight: 400;
                font-size: 55px;
                line-height: 60.94px;
                margin-top: 10px;
                margin-bottom: 0px;
            }

            .score-container {
                width: 100%;
                margin-right: 30px;
                display: flex;
                flex-direction: column;
                align-items: end;

            .score {
                
                font-family: 'Odibee Sans', cursive;
                font-size: 45px;
                margin: 0;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3 class="score-title">Score</h3>
            <div class="score-container">
                <p class="score myScore">Vos: ${this.myScore}</p>
                <p class="score computerScore">Máquina: ${this.computerScore}</p>
            </div>
        `;
        div.classList.add("container");
        this.shadow.appendChild(div);
    }
});

},{"../../state":"1Yeju"}]},["2oZg2","h7u1C"], "h7u1C", "parcelRequire0b44")

//# sourceMappingURL=index.b71e74eb.js.map
