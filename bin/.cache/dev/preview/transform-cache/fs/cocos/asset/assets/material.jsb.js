System.register("q-bundled:///fs/cocos/asset/assets/material.jsb.js", ["./effect-asset.js", "../../gfx/index.js", "./texture-base.js", "../../core/index.js", "./asset.js", "../../native-binding/decorators.js"], function (_export, _context) {
  "use strict";

  var EffectAsset, Texture, TextureBase, Color, Mat3, Mat4, Quat, Vec2, Vec3, Vec4, cclegacy, patch_cc_Material, matProto, MathType, Material, materialProto, oldOnLoaded;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                            
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
  function wrapSetProperty(cb, target, name, val, passIdx) {
    if (passIdx != undefined) {
      cb.call(target, name, val, passIdx);
    } else {
      cb.call(target, name, val);
    }
  }
  // Note: The MathType should be synchronized with MathType in jsb_conversion_spec.cpp
  return {
    setters: [function (_effectAssetJs) {
      EffectAsset = _effectAssetJs.EffectAsset;
    }, function (_gfxIndexJs) {
      Texture = _gfxIndexJs.Texture;
    }, function (_textureBaseJs) {
      TextureBase = _textureBaseJs.TextureBase;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Mat3 = _coreIndexJs.Mat3;
      Mat4 = _coreIndexJs.Mat4;
      Quat = _coreIndexJs.Quat;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_assetJs) {}, function (_nativeBindingDecoratorsJs) {
      patch_cc_Material = _nativeBindingDecoratorsJs.patch_cc_Material;
    }],
    execute: function () {
      /**
       * @en The basic infos for material initialization.
       * @zh 用来初始化材质的基本信息。
       */
      matProto = jsb.Material.prototype;
      (function (MathType) {
        MathType[MathType["VEC2"] = 0] = "VEC2";
        MathType[MathType["VEC3"] = 1] = "VEC3";
        MathType[MathType["VEC4"] = 2] = "VEC4";
        MathType[MathType["QUATERNION"] = 3] = "QUATERNION";
        MathType[MathType["MAT3"] = 4] = "MAT3";
        MathType[MathType["MAT4"] = 5] = "MAT4";
        MathType[MathType["SIZE"] = 6] = "SIZE";
        MathType[MathType["RECT"] = 7] = "RECT";
        MathType[MathType["COLOR"] = 8] = "COLOR";
      })(MathType || (MathType = {}));
      ;
      matProto.setProperty = function (name, val, passIdx) {
        if (Array.isArray(val)) {
          var first = val[0];
          if (typeof first === 'number') {
            if (Number.isInteger(first)) {
              wrapSetProperty(this.setPropertyInt32Array, this, name, val, passIdx);
            } else {
              wrapSetProperty(this.setPropertyFloat32Array, this, name, val, passIdx);
            }
          } else if (first instanceof Vec2) {
            wrapSetProperty(this.setPropertyVec2Array, this, name, val, passIdx);
          } else if (first instanceof Vec3) {
            wrapSetProperty(this.setPropertyVec3Array, this, name, val, passIdx);
          } else if (first instanceof Vec4) {
            wrapSetProperty(this.setPropertyVec4Array, this, name, val, passIdx);
          } else if (first instanceof Color) {
            wrapSetProperty(this.setPropertyColorArray, this, name, val, passIdx);
          } else if (first instanceof Mat3) {
            wrapSetProperty(this.setPropertyMat3Array, this, name, val, passIdx);
          } else if (first instanceof Mat4) {
            wrapSetProperty(this.setPropertyMat4Array, this, name, val, passIdx);
          } else if (first instanceof Quat) {
            wrapSetProperty(this.setPropertyQuatArray, this, name, val, passIdx);
          } else if (first instanceof TextureBase) {
            wrapSetProperty(this.setPropertyTextureBaseArray, this, name, val, passIdx);
          } else if (first instanceof Texture) {
            wrapSetProperty(this.setPropertyGFXTextureArray, this, name, val, passIdx);
          } else {
            cclegacy.error("Material.setProperty Unknown type: " + val);
          }
        } else if (typeof val === 'number') {
          if (Number.isInteger(val)) {
            wrapSetProperty(this.setPropertyInt32, this, name, val, passIdx);
          } else {
            wrapSetProperty(this.setPropertyFloat32, this, name, val, passIdx);
          }
        } else if (val instanceof Vec2) {
          wrapSetProperty(this.setPropertyVec2, this, name, val, passIdx);
        } else if (val instanceof Vec3) {
          wrapSetProperty(this.setPropertyVec3, this, name, val, passIdx);
        } else if (val instanceof Vec4) {
          wrapSetProperty(this.setPropertyVec4, this, name, val, passIdx);
        } else if (val instanceof Color) {
          wrapSetProperty(this.setPropertyColor, this, name, val, passIdx);
        } else if (val instanceof Mat3) {
          wrapSetProperty(this.setPropertyMat3, this, name, val, passIdx);
        } else if (val instanceof Mat4) {
          wrapSetProperty(this.setPropertyMat4, this, name, val, passIdx);
        } else if (val instanceof Quat) {
          wrapSetProperty(this.setPropertyQuat, this, name, val, passIdx);
        } else if (val instanceof TextureBase) {
          wrapSetProperty(this.setPropertyTextureBase, this, name, val, passIdx);
        } else if (val instanceof Texture) {
          wrapSetProperty(this.setPropertyGFXTexture, this, name, val, passIdx);
        } else if (val === null) {
          if (passIdx) {
            this.setPropertyNull(name, passIdx);
          } else {
            this.setPropertyNull(name);
          }
        } else {
          cclegacy.error("Material.setProperty Unknown type: " + val);
        }
      };
      matProto.getProperty = function (name, passIdx) {
        var val;
        if (passIdx !== undefined) {
          val = this._getProperty(name, passIdx);
        } else {
          val = this._getProperty(name);
        }
        if (Array.isArray(val)) {
          var first = val[0];
          var arr = []; // cjh TODO: optimize temporary gc objects being created
          if (first instanceof jsb.Vec2 || first.type === MathType.VEC2) {
            // The type of first is uncertain, might be jsb.Color or plainObject.
            for (var i = 0, len = val.length; i < len; ++i) {
              var _e = val[i];
              arr.push(new Vec2(_e.x, _e.y));
            }
          } else if (first.type === MathType.VEC3) {
            for (var _i = 0, _len = val.length; _i < _len; ++_i) {
              var _e2 = val[_i];
              arr.push(new Vec3(_e2.x, _e2.y, _e2.z));
            }
          } else if (first.type === MathType.VEC4) {
            for (var _i2 = 0, _len2 = val.length; _i2 < _len2; ++_i2) {
              var _e3 = val[_i2];
              arr.push(new Vec4(_e3.x, _e3.y, _e3.z, _e3.w));
            }
          } else if (first instanceof jsb.Color) {
            for (var _i3 = 0, _len3 = val.length; _i3 < _len3; ++_i3) {
              var _e4 = val[_i3];
              arr.push(new Color(_e4.r, _e4.g, _e4.b, _e4.a));
            }
          } else if (first.type === MathType.MAT3) {
            for (var _i4 = 0, _len4 = val.length; _i4 < _len4; ++_i4) {
              var _e5 = val[_i4];
              arr.push(new Mat3(_e5[0], _e5[1], _e5[2], _e5[3], _e5[4], _e5[5], _e5[6], _e5[7], _e5[8]));
            }
          } else if (first.type === MathType.MAT4) {
            for (var _i5 = 0, _len5 = val.length; _i5 < _len5; ++_i5) {
              var _e6 = val[_i5];
              arr.push(new Mat4(_e6[0], _e6[1], _e6[2], _e6[3], _e6[4], _e6[5], _e6[6], _e6[7], _e6[8], _e6[9], _e6[10], _e6[11], _e6[12], _e6[13], _e6[14], _e6[15]));
            }
          } else if (first.type === MathType.QUATERNION) {
            for (var _i6 = 0, _len6 = val.length; _i6 < _len6; ++_i6) {
              var _e7 = val[_i6];
              arr.push(new Quat(_e7.x, _e7.y, _e7.z, _e7.w));
            }
          }
          return arr || val;
        } else if (val === null || val === undefined) {
          return null;
        }
        var ret;
        var e = val;
        if (val instanceof jsb.Vec2 || val.type === MathType.VEC2) {
          ret = new Vec3(e.x, e.y);
        } else if (val.type === MathType.VEC3) {
          ret = new Vec3(e.x, e.y, e.z);
        } else if (val.type === MathType.VEC4) {
          ret = new Vec4(e.x, e.y, e.z, e.w);
        } else if (val instanceof jsb.Color) {
          ret = new Color(e.r, e.g, e.b, e.a);
        } else if (val.type === MathType.MAT3) {
          ret = new Mat3(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
        } else if (val.type === MathType.MAT4) {
          ret = new Mat4(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
        } else if (val.type === MathType.QUATERNION) {
          ret = new Quat(e.x, e.y, e.z, e.w);
        }
        return ret || val;
      };
      _export("Material", Material = jsb.Material);
      cclegacy.Material = Material;
      materialProto = Material.prototype;
      materialProto._ctor = function () {
        jsb.Asset.prototype._ctor.apply(this, arguments);
        this._props = [];
        this._passes = [];
        this._registerPassesUpdatedListener();
        this._isCtorCalled = true;
      };
      oldOnLoaded = materialProto.onLoaded;
      materialProto.onLoaded = function () {
        this._propsInternal = this._props;
        oldOnLoaded.call(this);
      };
      materialProto._onPassesUpdated = function () {
        this._passes = this.getPasses();
      };
      Object.defineProperty(materialProto, 'passes', {
        enumerable: true,
        configurable: true,
        get: function get() {
          if (!this._isCtorCalled) {
            // Builtin materials are created in cpp, the _passes property is not updated when access it in JS.
            // So we need to invoke getPasses() to sync _passes property.
            this._ctor();
            this._passes = this.getPasses();
          }
          return this._passes;
        }
      });

      // handle meta data, it is generated automatically
      patch_cc_Material({
        Material: Material,
        EffectAsset: EffectAsset
      });
    }
  };
});