System.register("q-bundled:///fs/cocos/physics-2d/framework/components/colliders/circle-collider-2d.js", ["../../../../core/index.js", "./collider-2d.js", "../../physics-types.js", "../../../../core/data/decorators/index.js"], function (_export, _context) {
  "use strict";

  var CCFloat, Vec2, _decorator, Collider2D, ECollider2DType, help, serializable, tooltip, type, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _initializer, ccclass, menu, property, CircleCollider2D;
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreIndexJs) {
      CCFloat = _coreIndexJs.CCFloat;
      Vec2 = _coreIndexJs.Vec2;
      _decorator = _coreIndexJs._decorator;
    }, function (_collider2dJs) {
      Collider2D = _collider2dJs.Collider2D;
    }, function (_physicsTypesJs) {
      ECollider2DType = _physicsTypesJs.ECollider2DType;
    }, function (_coreDataDecoratorsIndexJs) {
      help = _coreDataDecoratorsIndexJs.help;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
    }],
    execute: function () {
      ({
        ccclass,
        menu,
        property
      } = _decorator);
      _export("CircleCollider2D", CircleCollider2D = (_dec = ccclass('cc.CircleCollider2D'), _dec2 = help('i18n:cc.CircleCollider2D'), _dec3 = menu('Physics2D/Colliders/CircleCollider2D'), _dec4 = type(CCFloat), _dec5 = tooltip('i18n:physics2d.collider.radius'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class CircleCollider2D extends Collider2D {
        constructor(...args) {
          super(...args);
          this._radius = _initializer && _initializer();
          this.TYPE = ECollider2DType.CIRCLE;
        }
        /**
         * @en Circle radius.
         * @zh 圆形半径。
         */
        get radius() {
          return this._radius;
        }
        set radius(v) {
          this._radius = v < 0 ? 0 : v;
        }

        /**
         * @en Get world center of the circle collider.
         * @zh 世界坐标下圆形碰撞体的中心。
         */
        get worldPosition() {
          if (this._shape) {
            return this._shape.worldPosition;
          }
          return new Vec2();
        }
        /**
         * @en Get world radius of the circle collider.
         * @zh 世界坐标下圆形碰撞体的半径。
         */
        get worldRadius() {
          if (this._shape) {
            return this._shape.worldRadius;
          }
          return 0;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_radius", [serializable], function () {
        return 1;
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype)), _class2)) || _class) || _class) || _class));
    }
  };
});