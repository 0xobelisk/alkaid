System.register("q-bundled:///fs/cocos/render-scene/core/material-instance.jsb.js", [], function (_export, _context) {
  "use strict";

  var MaterialInstance, materialInstanceProto;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [],
    execute: function () {
      /*
       Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
      
       https://www.cocos.com/
      
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated documentation files (the "Software"), to deal
       in the Software without restriction, including without limitation the rights to
       use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
       of the Software, and to permit persons to whom the Software is furnished to do so,
       subject to the following conditions:
      
       The above copyright notice and this permission notice shall be included in
       all copies or substantial portions of the Software.
      
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      _export("MaterialInstance", MaterialInstance = jsb.MaterialInstance);
      materialInstanceProto = jsb.MaterialInstance.prototype;
      Object.defineProperty(materialInstanceProto, 'parent', {
        configurable: true,
        enumerable: true,
        get() {
          return this._parent;
        }
      });
      Object.defineProperty(materialInstanceProto, 'owner', {
        configurable: true,
        enumerable: true,
        get() {
          return this._owner;
        }
      });
      materialInstanceProto._ctor = function (info) {
        jsb.Material.prototype._ctor.apply(this, arguments);
        this._registerListeners();
        this._parent = info.parent;
        this._owner = info.owner || null;
        this._subModelIdx = info.subModelIdx || 0;
        // CPP MaterialInstance invokes 'copy' method in constructor, 'copy' will invoke update method
        // which triggers passes being created, 'this._passes' property will lost data, so fetch the data here
        // by calling the method 'this.getPasses()'
        this._passes = this.getPasses();
      };
      materialInstanceProto._onRebuildPSO = function () {
        if (this._owner) {
          this._owner._onRebuildPSO(this._subModelIdx, this);
        }
      };
    }
  };
});