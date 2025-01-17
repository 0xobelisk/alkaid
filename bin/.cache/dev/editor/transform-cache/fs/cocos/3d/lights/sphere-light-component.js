System.register("q-bundled:///fs/cocos/3d/lights/sphere-light-component.js", ["../../core/data/decorators/index.js", "../../render-scene/index.js", "./light-component.js", "../../core/index.js", "../../render-scene/scene/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executeInEditMode, menu, tooltip, type, displayOrder, serializable, formerlySerializedAs, editable, slide, rangeMin, range, scene, Light, PhotometricTerm, CCFloat, CCInteger, cclegacy, Camera, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, SphereLight;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      formerlySerializedAs = _coreDataDecoratorsIndexJs.formerlySerializedAs;
      editable = _coreDataDecoratorsIndexJs.editable;
      slide = _coreDataDecoratorsIndexJs.slide;
      rangeMin = _coreDataDecoratorsIndexJs.rangeMin;
      range = _coreDataDecoratorsIndexJs.range;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }, function (_lightComponentJs) {
      Light = _lightComponentJs.Light;
      PhotometricTerm = _lightComponentJs.PhotometricTerm;
    }, function (_coreIndexJs) {
      CCFloat = _coreIndexJs.CCFloat;
      CCInteger = _coreIndexJs.CCInteger;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_renderSceneSceneIndexJs) {
      Camera = _renderSceneSceneIndexJs.Camera;
    }],
    execute: function () {
      /**
       * @en The sphere light component, multiple sphere lights can be added to one scene.
       * @zh 球面光源组件，场景中可以添加多个球面光源。
       */
      _export("SphereLight", SphereLight = (_dec = ccclass('cc.SphereLight'), _dec2 = help('i18n:cc.SphereLight'), _dec3 = menu('Light/SphereLight'), _dec4 = formerlySerializedAs('_luminance'), _dec5 = displayOrder(-1), _dec6 = tooltip('i18n:lights.luminous_flux'), _dec7 = range([0, Number.POSITIVE_INFINITY, 100]), _dec8 = type(CCInteger), _dec9 = displayOrder(-1), _dec10 = tooltip('i18n:lights.luminance'), _dec11 = range([0, Number.POSITIVE_INFINITY, 10]), _dec12 = type(CCInteger), _dec13 = type(PhotometricTerm), _dec14 = displayOrder(-2), _dec15 = tooltip('i18n:lights.term'), _dec16 = tooltip('i18n:lights.size'), _dec17 = range([0.0, 10.0, 0.001]), _dec18 = type(CCFloat), _dec19 = tooltip('i18n:lights.range'), _dec20 = rangeMin(0), _dec21 = type(CCFloat), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = class SphereLight extends Light {
        /**
         * @en Luminous flux of the light.
         * @zh 光通量。
         */
        get luminousFlux() {
          const isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
          if (isHDR) {
            return this._luminanceHDR * scene.nt2lm(this._size);
          } else {
            return this._luminanceLDR;
          }
        }
        set luminousFlux(val) {
          const isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
          let result = 0;
          if (isHDR) {
            this._luminanceHDR = val / scene.nt2lm(this._size);
            result = this._luminanceHDR;
          } else {
            this._luminanceLDR = val;
            result = this._luminanceLDR;
          }
          this._light && (this._light.luminance = result);
        }

        /**
         * @en Luminance of the light.
         * @zh 光亮度。
         */
        get luminance() {
          const isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
          if (isHDR) {
            return this._luminanceHDR;
          } else {
            return this._luminanceLDR;
          }
        }
        set luminance(val) {
          const isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
          if (isHDR) {
            this._luminanceHDR = val;
            this._light && (this._light.luminanceHDR = this._luminanceHDR);
          } else {
            this._luminanceLDR = val;
            this._light && (this._light.luminanceLDR = this._luminanceLDR);
          }
        }

        /**
         * @en The photometric term currently being used.
         * @zh 当前使用的光度学计量单位。
         */
        get term() {
          return this._term;
        }
        set term(val) {
          this._term = val;
        }

        /**
         * @en
         * Size of the light.
         * @zh
         * 光源大小。
         */
        get size() {
          return this._size;
        }
        set size(val) {
          this._size = val;
          if (this._light) {
            this._light.size = val;
          }
        }

        /**
         * @en
         * Range of the light.
         * @zh
         * 光源范围。
         */
        get range() {
          return this._range;
        }
        set range(val) {
          this._range = val;
          if (this._light) {
            this._light.range = val;
          }
        }
        constructor() {
          super();
          this._size = _initializer && _initializer();
          this._luminanceHDR = _initializer2 && _initializer2();
          this._luminanceLDR = _initializer3 && _initializer3();
          this._term = _initializer4 && _initializer4();
          this._range = _initializer5 && _initializer5();
          this._lightType = scene.SphereLight;
        }
        _createLight() {
          super._createLight();
          this._type = scene.LightType.SPHERE;
          this.size = this._size;
          this.range = this._range;
          if (this._light) {
            this._light.luminanceHDR = this._luminanceHDR;
            this._light.luminanceLDR = this._luminanceLDR;
          }
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_size", [serializable], function () {
        return 0.15;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_luminanceHDR", [serializable, _dec4], function () {
        return 1700 / scene.nt2lm(0.15);
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_luminanceLDR", [serializable], function () {
        return 1700 / scene.nt2lm(0.15) * Camera.standardExposureValue * Camera.standardLightMeterScale;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_term", [serializable], function () {
        return PhotometricTerm.LUMINOUS_FLUX;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_range", [serializable], function () {
        return 1;
      }), _applyDecoratedDescriptor(_class2.prototype, "luminousFlux", [_dec5, _dec6, editable, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "luminousFlux"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "luminance", [_dec9, _dec10, editable, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "luminance"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "term", [_dec13, _dec14, _dec15, editable], Object.getOwnPropertyDescriptor(_class2.prototype, "term"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "size", [_dec16, editable, slide, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "range", [_dec19, editable, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "range"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});