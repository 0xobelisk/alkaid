System.register("q-bundled:///fs/cocos/2d/assets/sprite-frame.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../asset/assets/asset.js", "../../asset/assets/image-asset.js", "../../asset/assets/texture-2d.js", "../utils/dynamic-atlas/atlas-manager.js", "../../3d/misc/index.js", "../../gfx/index.js", "../../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var ccclass, EDITOR, TEST, BUILD, Mat4, Rect, Size, Vec2, Vec3, Vec4, cclegacy, errorID, warnID, js, Asset, ImageAsset, Texture2D, dynamicAtlasManager, createMesh, Attribute, AttributeName, Format, PrimitiveMode, ccwindow, _dec, _class, _class2, INSET_LEFT, INSET_TOP, INSET_RIGHT, INSET_BOTTOM, temp_vec3, temp_matrix, MeshType, temp_uvs, SpriteFrame;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
      BUILD = _virtualInternal253AconstantsJs.BUILD;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Rect = _coreIndexJs.Rect;
      Size = _coreIndexJs.Size;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      Vec4 = _coreIndexJs.Vec4;
      cclegacy = _coreIndexJs.cclegacy;
      errorID = _coreIndexJs.errorID;
      warnID = _coreIndexJs.warnID;
      js = _coreIndexJs.js;
    }, function (_assetAssetsAssetJs) {
      Asset = _assetAssetsAssetJs.Asset;
    }, function (_assetAssetsImageAssetJs) {
      ImageAsset = _assetAssetsImageAssetJs.ImageAsset;
    }, function (_assetAssetsTexture2dJs) {
      Texture2D = _assetAssetsTexture2dJs.Texture2D;
    }, function (_utilsDynamicAtlasAtlasManagerJs) {
      dynamicAtlasManager = _utilsDynamicAtlasAtlasManagerJs.dynamicAtlasManager;
    }, function (_dMiscIndexJs) {
      createMesh = _dMiscIndexJs.createMesh;
    }, function (_gfxIndexJs) {
      Attribute = _gfxIndexJs.Attribute;
      AttributeName = _gfxIndexJs.AttributeName;
      Format = _gfxIndexJs.Format;
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
    }, function (_coreGlobalExportsJs) {
      ccwindow = _coreGlobalExportsJs.ccwindow;
    }],
    execute: function () {
      INSET_LEFT = 0;
      INSET_TOP = 1;
      INSET_RIGHT = 2;
      INSET_BOTTOM = 3;
      temp_vec3 = new Vec3();
      temp_matrix = new Mat4();
      (function (MeshType) {
        MeshType[MeshType["RECT"] = 0] = "RECT";
        MeshType[MeshType["POLYGON"] = 1] = "POLYGON";
      })(MeshType || (MeshType = {}));
      /**
       * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
       */
      /**
       * @en Information object interface for initialize a [[SpriteFrame]] asset.
       * @zh 用于初始化 [[SpriteFrame]] 资源的对象接口描述。
       */
      temp_uvs = [{
        u: 0,
        v: 0
      }, {
        u: 0,
        v: 0
      }, {
        u: 0,
        v: 0
      }, {
        u: 0,
        v: 0
      }];
      /**
       * @en
       * A `SpriteFrame` support several types.
       *  1. Rectangle sprite frame
       *  2. Sliced 9 sprite frame
       *  3. Mesh sprite frame
       * It mainly contains:<br/>
       *  - texture: A `TextureBase` that will be used by render process.<br/>
       *  - rectangle: A rectangle of the texture.
       *  - Sliced 9 border insets: The distance of each side from the internal rect to the sprite frame rect.
       *  - vertices: Vertex list for the mesh type sprite frame.
       *  - uv: The quad uv.
       *  - uvSliced: The sliced 9 uv.
       *
       * @zh
       * 精灵帧资源。
       * 一个 SpriteFrame 支持多种类型
       *  1. 矩形精灵帧
       *  2. 九宫格精灵帧
       *  3. 网格精灵帧
       * 它主要包含下列数据：<br/>
       *  - 纹理：会被渲染流程使用的 `TextureBase` 资源。<br/>
       *  - 矩形：在纹理中的矩形区域。
       *  - 九宫格信息：九宫格的内部矩形四个边距离 SpriteFrame 外部矩形的距离。
       *  - 网格信息：网格类型精灵帧的所有顶点列表。
       *  - uv: 四边形 UV。
       *  - uvSliced: 九宫格 UV。
       * 可通过 `SpriteFrame` 获取该组件。
       *
       * @example
       * ```ts
       * import { resources } from 'cc';
       * // First way to use a SpriteFrame
       * const url = "assets/PurpleMonster/icon/spriteFrame";
       * resources.load(url, (err, spriteFrame) => {
       *   const node = new Node("New Sprite");
       *   const sprite = node.addComponent(Sprite);
       *   sprite.spriteFrame = spriteFrame;
       *   node.parent = self.node;
       * });
       *
       * // Second way to use a SpriteFrame
       * const self = this;
       * const url = "test_assets/PurpleMonster";
       * resources.load(url, (err, imageAsset) => {
       *  if(err){
       *    return;
       *  }
       *
       *  const node = new Node("New Sprite");
       *  const sprite = node.addComponent(Sprite);
       *  const spriteFrame = new SpriteFrame();
       *  const tex = imageAsset._texture;
       *  spriteFrame.texture = tex;
       *  sprite.spriteFrame = spriteFrame;
       *  node.parent = self.node;
       * });
       *
       * // Third way to use a SpriteFrame
       * const self = this;
       * const cameraComp = this.getComponent(Camera);
       * const renderTexture = new RenderTexture();
       * renderTexture.reset({
       *   width: 512,
       *   height: 512,
       *   depthStencilFormat: RenderTexture.DepthStencilFormat.DEPTH_24_STENCIL_8
       * });
       *
       * cameraComp.targetTexture = renderTexture;
       * const spriteFrame = new SpriteFrame();
       * spriteFrame.texture = renderTexture;
       * ```
       */
      _export("SpriteFrame", SpriteFrame = (_dec = ccclass('cc.SpriteFrame'), _dec(_class = (_class2 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(SpriteFrame, _Asset);
        /**
         * @en Create a SpriteFrame object by an image asset or an native image asset.
         * @zh 通过 Image 资源或者平台相关 Image 对象创建一个 SpriteFrame 资源。
         * @param imageSourceOrImageAsset @en ImageAsset or ImageSource, ImageSource could be HTMLCanvasElement, HTMLImageElement, IMemoryImageSource.
         *                                @zh 图像资源或图像原始图像源，图像原始图像源支持 HTMLCanvasElement HTMLImageElement IMemoryImageSource 三种资源。
         * @returns @en SpriteFrame asset. @zh 精灵资源。
         */
        SpriteFrame.createWithImage = function createWithImage(imageSourceOrImageAsset) {
          var img = imageSourceOrImageAsset instanceof ImageAsset ? imageSourceOrImageAsset : new ImageAsset(imageSourceOrImageAsset);
          var tex = new Texture2D();
          tex.image = img;
          var spf = new SpriteFrame();
          spf.texture = tex;
          return spf;
        }

        /**
         * @en uv update event.
         * @zh uv 更新事件。
         */;

        function SpriteFrame() {
          var _this;
          _this = _Asset.call(this) || this;
          /**
           * @en Vertex list for the mesh type sprite frame.
           * @zh 网格类型精灵帧的所有顶点列表。
           */
          _this.vertices = null;
          /**
           * @en UV for quad vertices.
           * @zh 矩形的顶点 UV。
           */
          _this.uv = [];
          /**
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          _this.unbiasUV = [];
          /**
           * @en UV for sliced 9 vertices.
           * @zh 九宫格的顶点 UV。
           */
          _this.uvSliced = [];
          // the location of the sprite on rendering texture
          _this._rect = new Rect();
          _this._trimmedBorder = new Vec4();
          // for trimming
          _this._offset = new Vec2();
          // for trimming
          _this._originalSize = new Size();
          _this._rotated = false;
          _this._capInsets = [0, 0, 0, 0];
          _this._atlasUuid = '';
          // TODO: not initialized in constructor
          _this._texture = void 0;
          _this._isFlipUVY = false;
          _this._isFlipUVX = false;
          // store original info before packed to dynamic atlas
          _this._original = null;
          _this._packable = true;
          _this._pixelsToUnit = 100;
          _this._pivot = new Vec2(0.5, 0.5);
          // center
          // Todo: Some features need add
          _this._meshType = MeshType.RECT;
          _this._extrude = 0;
          // when polygon type use
          _this._customOutLine = [];
          _this._minPos = new Vec3();
          _this._maxPos = new Vec3();
          if (EDITOR) {
            // Atlas asset uuid
            _this._atlasUuid = '';
          }
          return _this;
        }

        /**
         * @en
         * Returns whether the texture have been loaded.
         * @zh
         * 返回是否已加载精灵帧。
         *
         * @deprecated since v3.3, Useless Code.
         */
        var _proto = SpriteFrame.prototype;
        _proto.textureLoaded = function textureLoaded() {
          return !!this.texture;
        }

        /**
         * @en
         * Returns whether the sprite frame is rotated in the texture.
         * @zh
         * 获取 SpriteFrame 是否旋转。
         * @deprecated since v1.2, please use [[rotated]] instead.
         */;
        _proto.isRotated = function isRotated() {
          return this._rotated;
        }

        /**
         * @en
         * Set whether the sprite frame is rotated in the texture.
         * @zh
         * 设置 SpriteFrame 是否旋转。
         * @param rotated @en rotated.  @zh 是否旋转。
         * @deprecated since v1.2, please use [[rotated]] instead.
         */;
        _proto.setRotated = function setRotated(rotated) {
          this.rotated = rotated;
        }

        /**
         * @en Returns the rect of the sprite frame in the texture.
         * If it's an atlas texture, a transparent pixel area is proposed for the actual mapping of the current texture.
         * @zh 获取 SpriteFrame 的纹理矩形区域。
         * 如果是一个 atlas 的贴图，则为当前贴图的实际剔除透明像素区域。
         * @param out @en The output rect. @zh 输出的矩形区域。
         * @returns @en The rect. @zh 矩形区域。
         * @deprecated since v1.2, please use [[rect]].
         */;
        _proto.getRect = function getRect(out) {
          if (out) {
            out.set(this._rect);
            return out;
          }
          return this._rect.clone();
        }

        /**
         * @en Sets the rect of the sprite frame in the texture.
         * @zh 设置 SpriteFrame 的纹理矩形区域。
         * @param rect @en The new rect. @zh 想要设置的 rect。
         * @deprecated since v1.2, please use [[rect]].
         */;
        _proto.setRect = function setRect(rect) {
          this.rect = rect;
        }

        /**
         * @en Returns the original size before trimmed.
         * @zh 获取修剪前的原始大小。
         * @param out @en The output original size. @zh 输出的原始大小。
         * @returns @en The original size. @zh 原始大小。
         * @deprecated since v1.2, please use [[originalSize]].
         */;
        _proto.getOriginalSize = function getOriginalSize(out) {
          if (out) {
            out.set(this._originalSize);
            return out;
          }
          return this._originalSize.clone();
        }

        /**
         * @en Sets the original size before trimmed.
         * @zh 设置修剪前的原始大小。
         * @param size @en The new original size. @zh 新设置的原始大小。
         * @deprecated since v1.2, please use [[originalSize]].
         */;
        _proto.setOriginalSize = function setOriginalSize(size) {
          this.originalSize = size;
        }

        /**
         * @en Gets the offset of the frame.
         * @zh 获取偏移量。
         * @param out @en The output offset object. @zh 输出的偏移量。
         * @returns @en The offset object. @zh 偏移量。
         * @deprecated since v1.2, please use [[offset]]
         */;
        _proto.getOffset = function getOffset(out) {
          if (out) {
            out.set(this._offset);
            return out;
          }
          return this._offset.clone();
        }

        /**
         * @en Sets the offset of the frame.
         * @zh 设置偏移量。
         * @param offset @en The new offset. @zh 新设置的偏移量。
         * @deprecated since v1.2, please use [[offset]]
         */;
        _proto.setOffset = function setOffset(offset) {
          this.offset = offset;
        }

        /**
         * @en Gets the related GFX [[gfx.Texture]] resource.
         * @zh 获取渲染贴图的 GFX 资源。
         * @returns @en Gfx Texture resource. @zh GFX 贴图资源。
         */;
        _proto.getGFXTexture = function getGFXTexture() {
          return this._texture.getGFXTexture();
        }

        /**
         * @en Gets the GFX sampler of its texture.
         * @zh 贴图资源的采样器。
         * @returns @en The GFX sampler resource. @zh GFX贴图采样器。
         */;
        _proto.getGFXSampler = function getGFXSampler() {
          return this._texture.getGFXSampler();
        }

        /**
         * @en Gets the hash of its texture.
         * @zh 贴图资源的哈希值。
         * @returns @en Texture`s hash. @zh 贴图哈希值。
         */;
        _proto.getHash = function getHash() {
          return this._texture.getHash();
        }

        /**
         * @en Gets the sampler hash of its texture.
         * @zh 贴图资源的采样器哈希值。
         * @returns @en Sampler`s hash. @zh 采样器哈希值。
         */;
        _proto.getSamplerInfo = function getSamplerInfo() {
          return this._texture.getSamplerInfo();
        }

        /**
         * @en Resets the sprite frame data.
         * @zh 重置 SpriteFrame 数据。
         * @param info @en SpriteFrame initialization information. @zh SpriteFrame 初始化信息。
         * @param clearData @en Clear Data before initialization. @zh 是否在初始化前清空原有数据。
         */;
        _proto.reset = function reset(info, clearData) {
          if (clearData === void 0) {
            clearData = false;
          }
          var calUV = false;
          if (clearData) {
            this._originalSize.set(0, 0);
            this._rect.set(0, 0, 0, 0);
            this._offset.set(0, 0);
            this._capInsets = [0, 0, 0, 0];
            this._rotated = false;
            calUV = true;
          }
          if (info) {
            if (info.texture) {
              this._rect.x = this._rect.y = 0;
              this._rect.width = info.texture.width;
              this._rect.height = info.texture.height;
              this._refreshTexture(info.texture);
              this.checkRect(this._texture);
            }
            if (info.originalSize) {
              this._originalSize.set(info.originalSize);
            }
            if (info.rect) {
              this._rect.set(info.rect);
            }
            if (info.offset) {
              this._offset.set(info.offset);
            }
            if (info.borderTop !== undefined) {
              this._capInsets[INSET_TOP] = info.borderTop;
            }
            if (info.borderBottom !== undefined) {
              this._capInsets[INSET_BOTTOM] = info.borderBottom;
            }
            if (info.borderLeft !== undefined) {
              this._capInsets[INSET_LEFT] = info.borderLeft;
            }
            if (info.borderRight !== undefined) {
              this._capInsets[INSET_RIGHT] = info.borderRight;
            }
            if (info.isRotate !== undefined) {
              this._rotated = !!info.isRotate;
            }
            if (info.isFlipUv !== undefined) {
              this._isFlipUVY = !!info.isFlipUv;
            }
            calUV = true;
          }
          if (calUV && this.texture) {
            this._calculateUV();
          }
          this._calcTrimmedBorder();
        }

        /**
         * @en Check whether the rect of the sprite frame is out of the texture boundary.
         * @zh 判断精灵计算的矩形区域是否越界。
         * @param texture @en Texture resources for sprite frame. @zh SpriteFrame 的贴图资源。
         * @returns @en Out of the texture boundary or not. @zh 矩形区域是否越界。
         */;
        _proto.checkRect = function checkRect(texture) {
          var rect = this._rect;
          var maxX = rect.x;
          var maxY = rect.y;
          if (this._rotated) {
            maxX += rect.height;
            maxY += rect.width;
          } else {
            maxX += rect.width;
            maxY += rect.height;
          }
          if (maxX > texture.width) {
            errorID(3300, this.name + "/" + texture.name, maxX, texture.width);
            return false;
          }
          if (maxY > texture.height) {
            errorID(3301, this.name + "/" + texture.name, maxY, texture.height);
            return false;
          }
          return true;
        };
        _proto._calcTrimmedBorder = function _calcTrimmedBorder() {
          var ow = this._originalSize.width;
          var oh = this._originalSize.height;
          var rw = this._rect.width;
          var rh = this._rect.height;
          var halfTrimmedWidth = (ow - rw) * 0.5;
          var halfTrimmedHeight = (oh - rh) * 0.5;
          // left
          this._trimmedBorder.x = this._offset.x + halfTrimmedWidth;
          // right
          this._trimmedBorder.y = this._offset.x - halfTrimmedWidth;
          // bottom
          this._trimmedBorder.z = this._offset.y + halfTrimmedHeight;
          // top
          this._trimmedBorder.w = this._offset.y - halfTrimmedHeight;
        }

        /**
         * @en Make sure the mesh is available, you should call it before using the mesh.
         * @zh 确保 mesh 可用，你应该在使用 mesh 之前调用它。
         */;
        _proto.ensureMeshData = function ensureMeshData() {
          if (this._mesh) return;
          // If SpriteFrame from load, we need init vertices when use mesh
          this._initVertices();
          this._createMesh();
        };
        _proto.destroy = function destroy() {
          if (this._packable && dynamicAtlasManager) {
            dynamicAtlasManager.deleteAtlasSpriteFrame(this);
          }
          return _Asset.prototype.destroy.call(this);
        }

        /**
         * Calculate UV for sliced
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._calculateSlicedUV = function _calculateSlicedUV() {
          var rect = this._rect;
          // const texture = this._getCalculateTarget()!;
          var tex = this.texture;
          var atlasWidth = tex.width;
          var atlasHeight = tex.height;
          var leftWidth = this._capInsets[INSET_LEFT];
          var rightWidth = this._capInsets[INSET_RIGHT];
          var centerWidth = rect.width - leftWidth - rightWidth;
          var topHeight = this._capInsets[INSET_TOP];
          var bottomHeight = this._capInsets[INSET_BOTTOM];
          var centerHeight = rect.height - topHeight - bottomHeight;
          var uvSliced = this.uvSliced;
          uvSliced.length = 0;
          if (this._rotated) {
            temp_uvs[0].u = rect.x / atlasWidth;
            temp_uvs[1].u = (rect.x + bottomHeight) / atlasWidth;
            temp_uvs[2].u = (rect.x + bottomHeight + centerHeight) / atlasWidth;
            temp_uvs[3].u = (rect.x + rect.height) / atlasWidth;
            temp_uvs[3].v = rect.y / atlasHeight;
            temp_uvs[2].v = (rect.y + leftWidth) / atlasHeight;
            temp_uvs[1].v = (rect.y + leftWidth + centerWidth) / atlasHeight;
            temp_uvs[0].v = (rect.y + rect.width) / atlasHeight;
            for (var row = 0; row < 4; ++row) {
              var rowD = temp_uvs[row];
              for (var col = 0; col < 4; ++col) {
                var colD = temp_uvs[3 - col];
                uvSliced.push({
                  u: rowD.u,
                  v: colD.v
                });
              }
            }
          } else {
            temp_uvs[0].u = rect.x / atlasWidth;
            temp_uvs[1].u = (rect.x + leftWidth) / atlasWidth;
            temp_uvs[2].u = (rect.x + leftWidth + centerWidth) / atlasWidth;
            temp_uvs[3].u = (rect.x + rect.width) / atlasWidth;
            temp_uvs[3].v = rect.y / atlasHeight;
            temp_uvs[2].v = (rect.y + topHeight) / atlasHeight;
            temp_uvs[1].v = (rect.y + topHeight + centerHeight) / atlasHeight;
            temp_uvs[0].v = (rect.y + rect.height) / atlasHeight;
            for (var _row = 0; _row < 4; ++_row) {
              var _rowD = temp_uvs[_row];
              for (var _col = 0; _col < 4; ++_col) {
                var _colD = temp_uvs[_col];
                uvSliced.push({
                  u: _colD.u,
                  v: _rowD.v
                });
              }
            }
          }

          // UV update event for components to update uv buffer
          // CalculateUV will trigger _calculateSlicedUV so it's enough to emit here
          this.emit(SpriteFrame.EVENT_UV_UPDATED, this);
        }

        /**
         * Calculate UV
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._calculateUV = function _calculateUV() {
          var rect = this._rect;
          var uv = this.uv;
          var unbiasUV = this.unbiasUV;
          var tex = this.texture;
          var texw = tex.width;
          var texh = tex.height;
          if (this._rotated) {
            var l = texw === 0 ? 0 : rect.x / texw;
            var r = texw === 0 ? 1 : (rect.x + rect.height) / texw;
            var t = texh === 0 ? 0 : rect.y / texh;
            var b = texh === 0 ? 1 : (rect.y + rect.width) / texh;
            if (this._isFlipUVX && this._isFlipUVY) {
              /*
              3 - 1
              |   |
              2 - 0
              */
              uv[0] = r;
              uv[1] = b;
              uv[2] = r;
              uv[3] = t;
              uv[4] = l;
              uv[5] = b;
              uv[6] = l;
              uv[7] = t;
            } else if (this._isFlipUVX) {
              /*
              2 - 0
              |   |
              3 - 1
              */
              uv[0] = r;
              uv[1] = t;
              uv[2] = r;
              uv[3] = b;
              uv[4] = l;
              uv[5] = t;
              uv[6] = l;
              uv[7] = b;
            } else if (this._isFlipUVY) {
              /*
              1 - 3
              |   |
              0 - 2
              */
              uv[0] = l;
              uv[1] = b;
              uv[2] = l;
              uv[3] = t;
              uv[4] = r;
              uv[5] = b;
              uv[6] = r;
              uv[7] = t;
            } else {
              /*
              0 - 2
              |   |
              1 - 3
              */
              uv[0] = l;
              uv[1] = t;
              uv[2] = l;
              uv[3] = b;
              uv[4] = r;
              uv[5] = t;
              uv[6] = r;
              uv[7] = b;
            }
            var ul = texw === 0 ? 0 : rect.x / texw;
            var ur = texw === 0 ? 1 : (rect.x + rect.height) / texw;
            var ut = texh === 0 ? 0 : rect.y / texh;
            var ub = texh === 0 ? 1 : (rect.y + rect.width) / texh;
            if (this._isFlipUVX && this._isFlipUVY) {
              unbiasUV[0] = ur;
              unbiasUV[1] = ub;
              unbiasUV[2] = ur;
              unbiasUV[3] = ut;
              unbiasUV[4] = ul;
              unbiasUV[5] = ub;
              unbiasUV[6] = ul;
              unbiasUV[7] = ut;
            } else if (this._isFlipUVX) {
              unbiasUV[0] = ur;
              unbiasUV[1] = ut;
              unbiasUV[2] = ur;
              unbiasUV[3] = ub;
              unbiasUV[4] = ul;
              unbiasUV[5] = ut;
              unbiasUV[6] = ul;
              unbiasUV[7] = ub;
            } else if (this._isFlipUVY) {
              unbiasUV[0] = ul;
              unbiasUV[1] = ub;
              unbiasUV[2] = ul;
              unbiasUV[3] = ut;
              unbiasUV[4] = ur;
              unbiasUV[5] = ub;
              unbiasUV[6] = ur;
              unbiasUV[7] = ut;
            } else {
              unbiasUV[0] = ul;
              unbiasUV[1] = ut;
              unbiasUV[2] = ul;
              unbiasUV[3] = ub;
              unbiasUV[4] = ur;
              unbiasUV[5] = ut;
              unbiasUV[6] = ur;
              unbiasUV[7] = ub;
            }
          } else {
            var _l = texw === 0 ? 0 : rect.x / texw;
            var _r = texw === 0 ? 1 : (rect.x + rect.width) / texw;
            var _b = texh === 0 ? 1 : (rect.y + rect.height) / texh;
            var _t = texh === 0 ? 0 : rect.y / texh;
            if (this._isFlipUVX && this._isFlipUVY) {
              /*
              1 - 0
              |   |
              3 - 2
              */
              uv[0] = _r;
              uv[1] = _t;
              uv[2] = _l;
              uv[3] = _t;
              uv[4] = _r;
              uv[5] = _b;
              uv[6] = _l;
              uv[7] = _b;
            } else if (this._isFlipUVX) {
              /*
              3 - 2
              |   |
              1 - 0
              */
              uv[0] = _r;
              uv[1] = _b;
              uv[2] = _l;
              uv[3] = _b;
              uv[4] = _r;
              uv[5] = _t;
              uv[6] = _l;
              uv[7] = _t;
            } else if (this._isFlipUVY) {
              /*
              0 - 1
              |   |
              2 - 3
              */
              uv[0] = _l;
              uv[1] = _t;
              uv[2] = _r;
              uv[3] = _t;
              uv[4] = _l;
              uv[5] = _b;
              uv[6] = _r;
              uv[7] = _b;
            } else {
              /*
              2 - 3
              |   |
              0 - 1
              */
              uv[0] = _l;
              uv[1] = _b;
              uv[2] = _r;
              uv[3] = _b;
              uv[4] = _l;
              uv[5] = _t;
              uv[6] = _r;
              uv[7] = _t;
            }
            var _ul = texw === 0 ? 0 : rect.x / texw;
            var _ur = texw === 0 ? 1 : (rect.x + rect.width) / texw;
            var _ub = texh === 0 ? 1 : (rect.y + rect.height) / texh;
            var _ut = texh === 0 ? 0 : rect.y / texh;
            if (this._isFlipUVX && this._isFlipUVY) {
              unbiasUV[0] = _ur;
              unbiasUV[1] = _ut;
              unbiasUV[2] = _ul;
              unbiasUV[3] = _ut;
              unbiasUV[4] = _ur;
              unbiasUV[5] = _ub;
              unbiasUV[6] = _ul;
              unbiasUV[7] = _ub;
            } else if (this._isFlipUVX) {
              unbiasUV[0] = _ur;
              unbiasUV[1] = _ub;
              unbiasUV[2] = _ul;
              unbiasUV[3] = _ub;
              unbiasUV[4] = _ur;
              unbiasUV[5] = _ut;
              unbiasUV[6] = _ul;
              unbiasUV[7] = _ut;
            } else if (this._isFlipUVY) {
              unbiasUV[0] = _ul;
              unbiasUV[1] = _ut;
              unbiasUV[2] = _ur;
              unbiasUV[3] = _ut;
              unbiasUV[4] = _ul;
              unbiasUV[5] = _ub;
              unbiasUV[6] = _ur;
              unbiasUV[7] = _ub;
            } else {
              unbiasUV[0] = _ul;
              unbiasUV[1] = _ub;
              unbiasUV[2] = _ur;
              unbiasUV[3] = _ub;
              unbiasUV[4] = _ul;
              unbiasUV[5] = _ut;
              unbiasUV[6] = _ur;
              unbiasUV[7] = _ut;
            }
          }
          this._calculateSlicedUV();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._setDynamicAtlasFrame = function _setDynamicAtlasFrame(frame) {
          if (!frame) return;
          this._original = {
            _texture: this._texture,
            _x: this._rect.x,
            _y: this._rect.y
          };
          this._texture = frame.texture;
          this._rect.x = frame.x;
          this._rect.y = frame.y;
          this._calculateUV();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._resetDynamicAtlasFrame = function _resetDynamicAtlasFrame() {
          if (!this._original) return;
          this._rect.x = this._original._x;
          this._rect.y = this._original._y;
          this._texture = this._original._texture;
          this._original = null;
          this._calculateUV();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._checkPackable = function _checkPackable() {
          var dynamicAtlas = dynamicAtlasManager;
          if (!dynamicAtlas) return;
          var texture = this._texture;
          if (!(texture instanceof Texture2D) || texture.isCompressed) {
            this._packable = false;
            return;
          }
          var w = this.width;
          var h = this.height;
          if (!texture.image || w > dynamicAtlas.maxFrameSize || h > dynamicAtlas.maxFrameSize) {
            this._packable = false;
            return;
          }
          var CanvasElement = ccwindow.HTMLCanvasElement;
          if (texture.image && texture.image instanceof CanvasElement) {
            this._packable = true;
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._serialize = function _serialize(ctxForExporting) {
          if (EDITOR || TEST) {
            var rect = {
              x: this._rect.x,
              y: this._rect.y,
              width: this._rect.width,
              height: this._rect.height
            };
            var offset = {
              x: this._offset.x,
              y: this._offset.y
            };
            var originalSize = this._originalSize;
            var texture;
            if (this._texture) {
              texture = this._texture._uuid;
              if (ctxForExporting) {
                ctxForExporting.dependsOn('_textureSource', texture);
              }
            }
            var vertices;
            if (this.vertices) {
              var posArray = [];
              for (var i = 0; i < this.vertices.rawPosition.length; i++) {
                var pos = this.vertices.rawPosition[i];
                Vec3.toArray(posArray, pos, 3 * i);
              }
              vertices = {
                rawPosition: posArray,
                indexes: this.vertices.indexes,
                uv: this.vertices.uv,
                nuv: this.vertices.nuv,
                minPos: {
                  x: this.vertices.minPos.x,
                  y: this.vertices.minPos.y,
                  z: this.vertices.minPos.z
                },
                maxPos: {
                  x: this.vertices.maxPos.x,
                  y: this.vertices.maxPos.y,
                  z: this.vertices.maxPos.z
                }
              };
            }
            var serialize = {
              name: this._name,
              atlas: ctxForExporting ? undefined : this._atlasUuid,
              // strip from json if exporting
              rect: rect,
              offset: offset,
              originalSize: originalSize,
              rotated: this._rotated,
              capInsets: this._capInsets,
              vertices: vertices,
              texture: !ctxForExporting && texture || undefined,
              packable: this._packable,
              pixelsToUnit: this._pixelsToUnit,
              pivot: this._pivot,
              meshType: this._meshType
            };

            // 为 underfined 的数据则不在序列化文件里显示
            return serialize;
          }
          return null;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._deserialize = function _deserialize(serializeData, handle) {
          var data = serializeData;
          var rect = data.rect;
          if (rect) {
            this._rect = new Rect(rect.x, rect.y, rect.width, rect.height);
          }
          var offset = data.offset;
          if (data.offset) {
            this._offset = new Vec2(offset.x, offset.y);
          }
          var originalSize = data.originalSize;
          if (data.originalSize) {
            this._originalSize = new Size(originalSize.width, originalSize.height);
          }
          this._rotated = !!data.rotated;
          this._name = data.name;
          this._packable = !!data.packable;
          this._pixelsToUnit = data.pixelsToUnit;
          var pivot = data.pivot;
          if (pivot) {
            this._pivot = new Vec2(pivot.x, pivot.y);
          }
          this._meshType = data.meshType;
          var capInsets = data.capInsets;
          if (capInsets) {
            this._capInsets[INSET_LEFT] = capInsets[INSET_LEFT];
            this._capInsets[INSET_TOP] = capInsets[INSET_TOP];
            this._capInsets[INSET_RIGHT] = capInsets[INSET_RIGHT];
            this._capInsets[INSET_BOTTOM] = capInsets[INSET_BOTTOM];
          }
          if (!BUILD) {
            // manually load texture via _textureSetter
            if (data.texture) {
              handle.result.push(this, '_textureSource', data.texture, js.getClassId(Texture2D));
            }
          }
          if (EDITOR) {
            this._atlasUuid = data.atlas ? data.atlas : '';
          }
          var vertices = data.vertices;
          if (vertices) {
            if (!this.vertices) {
              this.vertices = {
                rawPosition: [],
                positions: [],
                indexes: vertices.indexes,
                uv: vertices.uv,
                nuv: vertices.nuv,
                minPos: new Vec3(vertices.minPos.x, vertices.minPos.y, vertices.minPos.z),
                maxPos: new Vec3(vertices.maxPos.x, vertices.maxPos.y, vertices.maxPos.z)
              };
            }
            this.vertices.rawPosition.length = 0;
            var rawPosition = vertices.rawPosition;
            for (var i = 0; i < rawPosition.length; i += 3) {
              this.vertices.rawPosition.push(new Vec3(rawPosition[i], rawPosition[i + 1], rawPosition[i + 2]));
            }
            this._updateMeshVertices();
          }
        }

        /**
         * @en clone a sprite frame.
         * @zh 克隆当前 sprite frame。
         */;
        _proto.clone = function clone() {
          var _sp$uv, _sp$unbiasUV, _sp$uvSliced, _sp$_capInsets, _sp$_customOutLine;
          var sp = new SpriteFrame();
          var v = this.vertices;
          sp.vertices = v ? {
            rawPosition: v.rawPosition.slice(0),
            positions: v.positions.slice(0),
            indexes: v.indexes.slice(0),
            uv: v.uv.slice(0),
            nuv: v.nuv.slice(0),
            minPos: v.minPos.clone(),
            maxPos: v.maxPos.clone()
          } : null;
          (_sp$uv = sp.uv).splice.apply(_sp$uv, [0, sp.uv.length].concat(this.uv));
          (_sp$unbiasUV = sp.unbiasUV).splice.apply(_sp$unbiasUV, [0, sp.unbiasUV.length].concat(this.unbiasUV));
          (_sp$uvSliced = sp.uvSliced).splice.apply(_sp$uvSliced, [0, sp.uvSliced.length].concat(this.uvSliced));
          sp._rect.set(this._rect);
          sp._trimmedBorder.set(this._trimmedBorder);
          sp._offset.set(this._offset);
          sp._originalSize.set(this._originalSize);
          sp._rotated = this._rotated;
          (_sp$_capInsets = sp._capInsets).splice.apply(_sp$_capInsets, [0, sp._capInsets.length].concat(this._capInsets));
          sp._atlasUuid = this._atlasUuid;
          sp._texture = this._texture;
          sp._isFlipUVX = this._isFlipUVX;
          sp._isFlipUVY = this._isFlipUVY;
          if (this._original) {
            sp._original = {
              _texture: this._original._texture,
              _x: this._original._x,
              _y: this._original._y
            };
          } else {
            sp._original = null;
          }
          sp._packable = this._packable;
          sp._pixelsToUnit = this._pixelsToUnit;
          sp._pivot.set(this._pivot);
          sp._meshType = this._meshType;
          sp._extrude = this._extrude;
          (_sp$_customOutLine = sp._customOutLine).splice.apply(_sp$_customOutLine, [0, sp._customOutLine.length].concat(this._customOutLine));
          sp._minPos = this._minPos;
          sp._maxPos = this._maxPos;
          if (this._mesh) {
            // Creates a new mesh, and 'this' creates the mesh in the same way. So we can make a copy like this.
            // It must be placed last because the mesh will depend on some of its members when it is created.
            sp._createMesh();
          }
          return sp;
        };
        _proto._refreshTexture = function _refreshTexture(texture) {
          this._texture = texture;
          var tex = this._texture;
          var config = {};
          var isReset = false;
          if (this._rect.width === 0 || this._rect.height === 0 || !this.checkRect(tex)) {
            config.rect = new Rect(0, 0, tex.width, tex.height);
            isReset = true;
          }

          // If original size is not set or rect check failed, we should reset the original size
          if (this._originalSize.width === 0 || this._originalSize.height === 0 || isReset) {
            config.originalSize = new Size(tex.width, tex.height);
            isReset = true;
          }
          if (isReset) {
            this.reset(config);
          }
          this._checkPackable();
          if (this._mesh) {
            this._updateMesh();
          }
        }

        /**
         * @en complete loading callback.
         * @zh 加载完成回调。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.onLoaded = function onLoaded() {
          this._calcTrimmedBorder();
        }

        /**
         * @en default init.
         * @zh 默认初始化。
         * @param uuid @en Asset uuid. @zh 资源 uuid。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.initDefault = function initDefault(uuid) {
          _Asset.prototype.initDefault.call(this, uuid);
          var texture = new Texture2D();
          texture.initDefault();
          this._refreshTexture(texture);
          this._calculateUV();
        }

        /**
         * @en Check whether the sprite frame is validate.
         * @zh 检查当前 sprite frame 对象是否是有效的。
         * @returns @en validate or not. @zh 是否有效。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.validate = function validate() {
          return this._texture && this._rect && this._rect.width !== 0 && this._rect.height !== 0;
        };
        _proto._initVertices = function _initVertices() {
          if (!this.vertices) {
            this.vertices = {
              rawPosition: [],
              positions: [],
              indexes: [],
              uv: [],
              nuv: [],
              minPos: new Vec3(),
              maxPos: new Vec3()
            };
          } else {
            this.vertices.rawPosition.length = 0;
            this.vertices.positions.length = 0;
            this.vertices.indexes.length = 0;
            this.vertices.uv.length = 0;
            this.vertices.nuv.length = 0;
            this.vertices.minPos.set(0, 0, 0);
            this.vertices.maxPos.set(0, 0, 0);
          }
          if (this._meshType === MeshType.POLYGON) {
            // Use Bayazit to generate vertices and assign values
          } else {
            // Rect mode
            // default center is 0.5，0.5
            var tex = this.texture;
            var texw = tex.width;
            var texh = tex.height;
            var rect = this.rect;
            var width = rect.width;
            var height = rect.height;
            var rectX = rect.x;
            var rectY = texh - rect.y - height;
            var halfWidth = width / 2;
            var halfHeight = height / 2;
            var l = texw === 0 ? 0 : rectX / texw;
            var r = texw === 0 ? 1 : (rectX + width) / texw;
            var t = texh === 0 ? 1 : (rectY + height) / texh;
            var b = texh === 0 ? 0 : rect.y / texh;

            // left bottom
            temp_vec3.set(-halfWidth, -halfHeight, 0);
            this.vertices.rawPosition.push(temp_vec3.clone());
            this.vertices.uv.push(rectX);
            this.vertices.uv.push(rectY + height);
            this.vertices.nuv.push(l);
            this.vertices.nuv.push(b);
            this.vertices.minPos.set(temp_vec3);
            // right bottom
            temp_vec3.set(halfWidth, -halfHeight, 0);
            this.vertices.rawPosition.push(temp_vec3.clone());
            this.vertices.uv.push(rectX + width);
            this.vertices.uv.push(rectY + height);
            this.vertices.nuv.push(r);
            this.vertices.nuv.push(b);
            // left top
            temp_vec3.set(-halfWidth, halfHeight, 0);
            this.vertices.rawPosition.push(temp_vec3.clone());
            this.vertices.uv.push(rectX);
            this.vertices.uv.push(rectY);
            this.vertices.nuv.push(l);
            this.vertices.nuv.push(t);
            // right top
            temp_vec3.set(halfWidth, halfHeight, 0);
            this.vertices.rawPosition.push(temp_vec3.clone());
            this.vertices.uv.push(rectX + width);
            this.vertices.uv.push(rectY);
            this.vertices.nuv.push(r);
            this.vertices.nuv.push(t);
            this.vertices.maxPos.set(temp_vec3);
            this.vertices.indexes.push(0);
            this.vertices.indexes.push(1);
            this.vertices.indexes.push(2);
            this.vertices.indexes.push(2);
            this.vertices.indexes.push(1);
            this.vertices.indexes.push(3);
          }
          this._updateMeshVertices();
        }

        // Combine vertex information, unit information, anchor points, extrude and even customOutline to generate the actual vertices used
        ;
        _proto._updateMeshVertices = function _updateMeshVertices() {
          // Start generating the Geometry information to generate the mesh
          temp_matrix.identity();
          var units = 1 / this._pixelsToUnit;
          var PosX = -(this._pivot.x - 0.5) * this.rect.width * units;
          var PosY = -(this._pivot.y - 0.5) * this.rect.height * units;
          var temp_vec3 = new Vec3(PosX, PosY, 0);
          temp_matrix.transform(temp_vec3);
          temp_vec3.set(units, units, 1);
          temp_matrix.scale(temp_vec3);
          var vertices = this.vertices;
          for (var i = 0; i < vertices.rawPosition.length; i++) {
            var pos = vertices.rawPosition[i];
            Vec3.transformMat4(temp_vec3, pos, temp_matrix);
            Vec3.toArray(vertices.positions, temp_vec3, 3 * i);
          }
          Vec3.transformMat4(this._minPos, vertices.minPos, temp_matrix);
          Vec3.transformMat4(this._maxPos, vertices.maxPos, temp_matrix);
        };
        _proto._createMesh = function _createMesh() {
          this._mesh = createMesh({
            primitiveMode: PrimitiveMode.TRIANGLE_LIST,
            positions: this.vertices.positions,
            uvs: this.vertices.nuv,
            indices: this.vertices.indexes,
            minPos: this._minPos,
            maxPos: this._maxPos,
            // colors: [
            //     Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a,
            //     Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a,
            //     Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a,
            //     Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a],
            attributes: [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F)
            // new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8UI, true),
            ]
          });
        };
        _proto._updateMesh = function _updateMesh() {
          if (this._mesh) {
            this._mesh.destroy();
          }
          this._initVertices();
          this._createMesh();
        };
        _createClass(SpriteFrame, [{
          key: "insetTop",
          get:
          /**
           * @en Top border distance of sliced 9 rect.
           * @zh 九宫格内部矩形顶部边框距离 SpriteFrame 矩形的距离。
           */
          function get() {
            return this._capInsets[INSET_TOP];
          },
          set: function set(value) {
            if (this._capInsets[INSET_TOP] === value) {
              return;
            }
            this._capInsets[INSET_TOP] = value;
            if (this._texture) {
              this._calculateSlicedUV();
            }
          }

          /**
           * @en Bottom border distance of sliced 9 rect.
           * @zh 九宫格内部矩形底部边框距离 SpriteFrame 矩形的距离。
           */
        }, {
          key: "insetBottom",
          get: function get() {
            return this._capInsets[INSET_BOTTOM];
          },
          set: function set(value) {
            if (this._capInsets[INSET_BOTTOM] === value) {
              return;
            }
            this._capInsets[INSET_BOTTOM] = value;
            if (this._texture) {
              this._calculateSlicedUV();
            }
          }

          /**
           * @en Left border distance of sliced 9 rect.
           * @zh 九宫格内部矩形左边框距离 SpriteFrame 矩形的距离。
           */
        }, {
          key: "insetLeft",
          get: function get() {
            return this._capInsets[INSET_LEFT];
          },
          set: function set(value) {
            if (this._capInsets[INSET_LEFT] === value) {
              return;
            }
            this._capInsets[INSET_LEFT] = value;
            if (this._texture) {
              this._calculateSlicedUV();
            }
          }

          /**
           * @en Right border distance of sliced 9 rect.
           * @zh 九宫格内部矩形右边框距离 SpriteFrame 矩形的距离。
           */
        }, {
          key: "insetRight",
          get: function get() {
            return this._capInsets[INSET_RIGHT];
          },
          set: function set(value) {
            if (this._capInsets[INSET_RIGHT] === value) {
              return;
            }
            this._capInsets[INSET_RIGHT] = value;
            if (this._texture) {
              this._calculateSlicedUV();
            }
          }

          /**
           * @en Returns the rect of the sprite frame in the texture.
           * If it's an atlas texture, a transparent pixel area is proposed for the actual mapping of the current texture.
           * @zh 获取 SpriteFrame 的纹理矩形区域。
           * 如果是一个 atlas 的贴图，则为当前贴图的实际剔除透明像素区域。
           */
        }, {
          key: "rect",
          get: function get() {
            return this._rect;
          },
          set: function set(value) {
            if (this._rect.equals(value)) {
              return;
            }
            this._rect.set(value);
            if (this._texture) {
              this._calculateUV();
            }
            this._calcTrimmedBorder();
          }

          /**
           * @en The original size before trimmed.
           * @zh 修剪前的原始大小。
           */
        }, {
          key: "originalSize",
          get: function get() {
            return this._originalSize;
          },
          set: function set(value) {
            if (this._originalSize.equals(value)) {
              return;
            }
            this._originalSize.set(value);
            if (this._texture) {
              this._calculateUV();
            }
            this._calcTrimmedBorder();
          }

          /**
           * @en The offset of the sprite frame center.
           * Sprite frame in an atlas texture could be trimmed for clipping the transparent pixels, so the trimmed rect is smaller than the original one,
           * the offset defines the distance from the original center to the trimmed center.
           * @zh 精灵帧偏移量。
           * 在图集中的精灵帧可能会被剔除透明像素以获得更高的空间利用李，剔除后的矩形尺寸比剪裁前更小，偏移量指的是从原始矩形的中心到剪裁后的矩形中心的距离。
           */
        }, {
          key: "offset",
          get: function get() {
            return this._offset;
          },
          set: function set(value) {
            this._offset.set(value);
            this._calcTrimmedBorder();
          }

          /**
           * @en Whether the content of sprite frame is rotated.
           * @zh 是否旋转。
           */
        }, {
          key: "rotated",
          get: function get() {
            return this._rotated;
          },
          set: function set(rotated) {
            if (this._rotated === rotated) {
              return;
            }
            this._rotated = rotated;
            if (this._texture) {
              this._calculateUV();
            }
          }

          /**
           * @en The texture of the sprite frame, could be `TextureBase`.
           * @zh 贴图对象资源，可以是 `TextureBase` 类型。
           */
        }, {
          key: "texture",
          get: function get() {
            return this._texture;
          },
          set: function set(value) {
            if (!value) {
              warnID(3122, this.name);
              return;
            }
            if (value === this._texture) {
              return;
            }
            this.reset({
              texture: value
            }, true);
          }

          /**
           * @en The uuid of the atlas asset, if exists.
           * @zh 图集资源的 uuid。
           */
        }, {
          key: "atlasUuid",
          get: function get() {
            return this._atlasUuid;
          },
          set: function set(value) {
            this._atlasUuid = value;
          }

          /**
           * @en The pixel width of the sprite frame.
           * @zh 精灵帧的像素宽度。
           */
        }, {
          key: "width",
          get: function get() {
            return this._texture.width;
          }

          /**
           * @en The pixel height of the sprite frame.
           * @zh 精灵帧的像素高度。
           */
        }, {
          key: "height",
          get: function get() {
            return this._texture.height;
          }

          /**
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "_textureSource",
          set: function set(value) {
            // Optimization for build
            if (globalThis.Build) {
              this._texture = value;
              return;
            }
            if (value) {
              this._refreshTexture(value);
              this._calculateUV();
            }
          }

          /**
           * @en Whether flip the uv in X direction.
           * @zh 沿 X 轴方向, 翻转 UV。
           */
        }, {
          key: "flipUVX",
          get: function get() {
            return this._isFlipUVX;
          },
          set: function set(value) {
            this._isFlipUVX = value;
            this._calculateUV();
          }

          /**
           * @en Whether flip the uv in Y direction.
           * @zh 沿 Y 轴方向, 翻转 UV。
           */
        }, {
          key: "flipUVY",
          get: function get() {
            return this._isFlipUVY;
          },
          set: function set(value) {
            this._isFlipUVY = value;
            this._calculateUV();
          }

          /**
           * @en Sets whether sprite can be packed into dynamic atlas.
           * @zh 设置精灵是否允许参与自动合图。
           */
        }, {
          key: "packable",
          get: function get() {
            return this._packable;
          },
          set: function set(value) {
            this._packable = value;
          }

          /**
           * @en Original information before packed to dynamic atlas, includes texture, width, height. It's null before being packed to dynamic atlas.
           * @zh 精灵自动合图之前的原始 texture 和宽高信息。在参与自动合图之前此值为 null。
           */
        }, {
          key: "original",
          get: function get() {
            return this._original;
          }

          /**
           * @en Number of pixels corresponding to unit size in world space (pixels per unit).
           * @zh 世界空间中的单位大小对应的像素数量（像素每单位）。
           */
        }, {
          key: "pixelsToUnit",
          get: function get() {
            return this._pixelsToUnit;
          }

          /**
           * @en Local origin position when generating the mesh.
           * @zh 生成 mesh 时本地坐标原点位置。
           */
        }, {
          key: "pivot",
          get: function get() {
            return this._pivot;
          }

          /**
           * @en mesh information, you should call the [[ensureMeshData]] function before using it.
           * @zh mesh 信息，你应该在使用它之前调用 [[ensureMeshData]] 函数来确保其可用。
           */
        }, {
          key: "mesh",
          get: function get() {
            return this._mesh;
          }

          /**
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "trimmedBorder",
          get: function get() {
            return this._trimmedBorder;
          }
        }]);
        return SpriteFrame;
      }(Asset), _class2.EVENT_UV_UPDATED = 'uv_updated', _class2.MeshType = MeshType, _class2)) || _class));
      cclegacy.SpriteFrame = SpriteFrame;
    }
  };
});