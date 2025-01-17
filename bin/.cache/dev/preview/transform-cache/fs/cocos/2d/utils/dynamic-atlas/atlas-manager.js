System.register("q-bundled:///fs/cocos/2d/utils/dynamic-atlas/atlas-manager.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/index.js", "../../../asset/assets/asset-enum.js", "./atlas.js", "../../../game/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, System, macro, js, cclegacy, Filter, Atlas, director, DynamicAtlasManager, dynamicAtlasManager;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
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
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_coreIndexJs) {
      System = _coreIndexJs.System;
      macro = _coreIndexJs.macro;
      js = _coreIndexJs.js;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_assetAssetsAssetEnumJs) {
      Filter = _assetAssetsAssetEnumJs.Filter;
    }, function (_atlasJs) {
      Atlas = _atlasJs.Atlas;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }],
    execute: function () {
      /**
       * @en The dynamic atlas manager which manages all runtime dynamic packed atlas texture for UI rendering.
       * It generates a maximum of [[maxAtlasCount]] atlas texture, all atlas texture have the size of [[textureSize]].
       * Normally the [[Root.batcher2D]] is in charge of submitting sprite frames to the dynamic atlas manager, the process is transparent to user.
       * Note that the first committed sprite frame will define the filter settings of the atlas textures,
       * only sprite frame with the same setting will be accepted afterward.
       * @zh 动态合图的管理器，管理所有运行时动态合成的图集，主要用于 UI 渲染。
       * 该管理器支持生成 [[maxAtlasCount]] 张动态合图，并且所有合图都有同样的 [[textureSize]] 像素尺寸。
       * 一般来说 [[Root.batcher2D]] 负责提交 [[SpriteFrame]] 到动态合图管理器中，这个过程对于开发者是透明的。
       * 需要注意的是，第一个提交的 [[SpriteFrame]] 会决定图集的过滤器参数，在此之后只有同样参数的贴图才会被管理器接受。
       */
      _export("DynamicAtlasManager", DynamicAtlasManager = /*#__PURE__*/function (_System) {
        _inheritsLoose(DynamicAtlasManager, _System);
        function DynamicAtlasManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _System.call.apply(_System, [this].concat(args)) || this;
          _this._atlases = [];
          _this._atlasIndex = -1;
          _this._maxAtlasCount = 5;
          _this._textureSize = 2048;
          _this._maxFrameSize = 512;
          _this._textureBleeding = true;
          _this._enabled = false;
          return _this;
        }
        var _proto = DynamicAtlasManager.prototype;
        _proto.newAtlas = function newAtlas() {
          var atlas = this._atlases[++this._atlasIndex];
          if (!atlas) {
            atlas = new Atlas(this._textureSize, this._textureSize);
            this._atlases.push(atlas);
          }
          return atlas;
        };
        _proto.beforeSceneLoad = function beforeSceneLoad() {
          this.reset();
        }

        /**
         * @internal
         */;
        _proto.init = function init() {
          this.enabled = !macro.CLEANUP_IMAGE_CACHE;
        }

        /**
         * @en
         * Append a sprite frame into the dynamic atlas.
         *
         * @zh
         * 添加碎图进入动态图集。
         *
         * @method insertSpriteFrame
         * @param spriteFrame  the sprite frame that will be inserted in the atlas.
         */;
        _proto.insertSpriteFrame = function insertSpriteFrame(spriteFrame) {
          if (EDITOR_NOT_IN_PREVIEW) return null;
          if (!this._enabled || this._atlasIndex === this._maxAtlasCount || !spriteFrame || spriteFrame._original) return null;
          if (!spriteFrame.packable) return null;

          // hack for pixel game,should pack to different sampler atlas
          var sampler = spriteFrame.texture.getSamplerInfo();
          if (sampler.minFilter !== Filter.LINEAR || sampler.magFilter !== Filter.LINEAR || sampler.mipFilter !== Filter.NONE) {
            return null;
          }
          var atlas = this._atlases[this._atlasIndex];
          if (!atlas) {
            atlas = this.newAtlas();
          }
          var frame = atlas.insertSpriteFrame(spriteFrame);
          if (!frame && this._atlasIndex !== this._maxAtlasCount) {
            atlas = this.newAtlas();
            return atlas.insertSpriteFrame(spriteFrame);
          }
          return frame;
        }

        /**
         * @en
         * Reset all dynamic atlases, and all existing ones will be destroyed.
         *
         * @zh
         * 重置所有动态图集，已有的动态图集会被销毁。
         *
         * @method reset
        */;
        _proto.reset = function reset() {
          for (var i = 0, l = this._atlases.length; i < l; i++) {
            this._atlases[i].destroy();
          }
          this._atlases.length = 0;
          this._atlasIndex = -1;
        }

        /**
         * @en
         * Delete a sprite from the atlas.
         *
         * @zh
         * 从动态图集中删除某张碎图。
         *
         * @method deleteAtlasSpriteFrame
         * @param spriteFrame  the sprite frame that will be removed from the atlas.
         */;
        _proto.deleteAtlasSpriteFrame = function deleteAtlasSpriteFrame(spriteFrame) {
          if (!spriteFrame._original) return;
          var atlas;
          for (var i = this._atlases.length - 1; i >= 0; i--) {
            atlas = this._atlases[i];
            js.array.fastRemove(atlas._innerSpriteFrames, spriteFrame);
          }
          var texture = spriteFrame._original._texture;
          this.deleteAtlasTexture(texture);
        }

        /**
         * @en
         * Delete a texture from the atlas.
         *
         * @zh
         * 从动态图集中删除某张纹理。
         *
         * @method deleteAtlasTexture
         * @param texture  the texture that will be removed from the atlas.
         */;
        _proto.deleteAtlasTexture = function deleteAtlasTexture(texture) {
          if (texture) {
            for (var i = this._atlases.length - 1; i >= 0; i--) {
              this._atlases[i].deleteInnerTexture(texture);
              if (this._atlases[i].isEmpty()) {
                this._atlases[i].destroy();
                this._atlases.splice(i, 1);
                this._atlasIndex--;
              }
            }
          }
        }

        /**
         * @en
         * Pack the sprite in the dynamic atlas and update the atlas information of the sprite frame.
         *
         * @zh
         * 将图片打入动态图集，并更新该图片的图集信息。
         *
         * @method packToDynamicAtlas
         * @param frame  the sprite frame that will be packed in the dynamic atlas.
         */;
        _proto.packToDynamicAtlas = function packToDynamicAtlas(comp, frame) {
          if (EDITOR_NOT_IN_PREVIEW || !this._enabled) return;
          if (frame && !frame._original && frame.packable && frame.texture && frame.texture.width > 0 && frame.texture.height > 0) {
            var packedFrame = this.insertSpriteFrame(frame);
            if (packedFrame) {
              frame._setDynamicAtlasFrame(packedFrame);
            }
          }
        };
        _createClass(DynamicAtlasManager, [{
          key: "enabled",
          get:
          /**
           * @en
           * Enable or disable the dynamic atlas.
           *
           * @zh
           * 开启或关闭动态图集。
           */
          function get() {
            return this._enabled;
          },
          set: function set(value) {
            if (this._enabled === value) return;
            if (value) {
              this.reset();
              cclegacy.director.on(cclegacy.Director.EVENT_BEFORE_SCENE_LAUNCH, this.beforeSceneLoad, this);
            } else {
              this.reset();
              cclegacy.director.off(cclegacy.Director.EVENT_BEFORE_SCENE_LAUNCH, this.beforeSceneLoad, this);
            }
            this._enabled = value;
          }

          /**
           * @en
           * The maximum number of atlases that can be created.
           *
           * @zh
           * 可以创建的最大图集数量。
           */
        }, {
          key: "maxAtlasCount",
          get: function get() {
            return this._maxAtlasCount;
          },
          set: function set(value) {
            this._maxAtlasCount = value;
          }

          /**
           * @en
           * Get the current created atlas count.
           *
           * @zh
           * 获取当前已经创建的图集数量。
           */
        }, {
          key: "atlasCount",
          get: function get() {
            return this._atlases.length;
          }

          /**
           * @en
           * Whether to enable textureBleeding.
           *
           * @zh
           * 是否开启 textureBleeding。
           */
        }, {
          key: "textureBleeding",
          get: function get() {
            return this._textureBleeding;
          },
          set: function set(enable) {
            this._textureBleeding = enable;
          }

          /**
           * @en
           * The size of the created atlas.
           *
           * @zh
           * 创建的图集的宽高。
           */
        }, {
          key: "textureSize",
          get: function get() {
            return this._textureSize;
          },
          set: function set(value) {
            this._textureSize = value;
          }

          /**
           * @en
           * The maximum size of the picture that can be added to the atlas.
           *
           * @zh
           * 可以添加进图集的图片的最大尺寸。
           */
        }, {
          key: "maxFrameSize",
          get: function get() {
            return this._maxFrameSize;
          },
          set: function set(value) {
            this._maxFrameSize = value;
          }
        }]);
        return DynamicAtlasManager;
      }(System));
      /**
       * @en The singleton instance of [[DynamicAtlasManager]], please use [[DynamicAtlasManager.instance]] instead.
       * @zh [[DynamicAtlasManager]] 的单例对象，请直接使用 [[DynamicAtlasManager.instance]]。
       * @deprecated since v3.7
       */
      DynamicAtlasManager.instance = void 0;
      _export("dynamicAtlasManager", dynamicAtlasManager = DynamicAtlasManager.instance = new DynamicAtlasManager());
      director.registerSystem('dynamicAtlasManager', dynamicAtlasManager, 0);
      cclegacy.internal.dynamicAtlasManager = dynamicAtlasManager;
    }
  };
});