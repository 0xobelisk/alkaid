System.register("q-bundled:///fs/cocos/core/geometry/capsule.js", ["../math/index.js", "./enums.js"], function (_export, _context) {
  "use strict";

  var Vec3, Quat, absMaxComponent, enums, Capsule;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  _export("Capsule", void 0);
  return {
    setters: [function (_mathIndexJs) {
      Vec3 = _mathIndexJs.Vec3;
      Quat = _mathIndexJs.Quat;
      absMaxComponent = _mathIndexJs.absMaxComponent;
    }, function (_enumsJs) {
      enums = _enumsJs.default;
    }],
    execute: function () {
      /**
       * @en
       * Basic Geometry: capsule.
       * @zh
       * 基础几何，胶囊体。
       */
      _export("Capsule", Capsule = class Capsule {
        /**
         * @en
         * Gets the type of this Capsule, always returns `enums.SHAPE_CAPSULE`.
         * @zh
         * 获取此形状的类型，值固定为 `enums.SHAPE_CAPSULE`。
         */
        get type() {
          return this._type;
        }
        /**
         * @en
         * Constructs a Capsule instance.
         * @zh
         * 构造一个胶囊体实例。
         * @param radius @en The radius of the sphere in this capsule. @zh 胶囊体球部的半径。
         * @param halfHeight @en The distance between the center point of the capsule and the center of the sphere. @zh 胶囊体中心点和球部圆心的距离。
         * @param axis @en The local orientation of this capsule [0,1,2] => [x,y,z]. @zh 胶囊体的本地朝向，映射关系 [0,1,2] => [x,y,z]。
         */
        constructor(radius = 0.5, halfHeight = 0.5, axis = 1) {
          this._type = void 0;
          /**
           * @en
           * The radius of the sphere in this capsule.
           * @zh
           * 胶囊体球部的半径。
           */
          this.radius = void 0;
          /**
           * @en
           * The distance between the center point of the capsule and the center of the sphere.
           * @zh
           * 胶囊体中心点和球部圆心的距离。
           */
          this.halfHeight = void 0;
          /**
           * @en
           * The local orientation of this capsule [0,1,2] => [x,y,z].
           * @zh
           * 胶囊体的本地朝向，映射关系 [0,1,2] => [x,y,z]。
           */
          this.axis = void 0;
          /**
           * @en
           * The origin of the capsule.
           * @zh
           * 胶囊体的原点。
           */
          this.center = void 0;
          /**
           * @en
           * The rotation of the capsule.
           * @zh
           * 胶囊体的旋转。
           */
          this.rotation = void 0;
          /**
           * @internal
           * cache, local center of ellipse
           **/
          this.ellipseCenter0 = void 0;
          /**
           * @internal
           */
          this.ellipseCenter1 = void 0;
          this._type = enums.SHAPE_CAPSULE;
          this.radius = radius;
          this.halfHeight = halfHeight;
          this.axis = axis;
          this.center = new Vec3();
          this.rotation = new Quat();
          this.ellipseCenter0 = new Vec3(0, halfHeight, 0);
          this.ellipseCenter1 = new Vec3(0, -halfHeight, 0);
          this.updateCache();
        }

        /**
         * @en
         * Transforms this capsule by a 4x4 matrix and RTS.
         * @zh
         * 使用 4x4 矩阵和 RTS 变换此胶囊体。
         */
        transform(m, pos, rot, scale, out) {
          const ws = scale;
          const s = absMaxComponent(ws);
          out.radius = this.radius * Math.abs(s);
          const halfTotalWorldHeight = (this.halfHeight + this.radius) * Math.abs(ws.y);
          let halfWorldHeight = halfTotalWorldHeight - out.radius;
          if (halfWorldHeight < 0) halfWorldHeight = 0;
          out.halfHeight = halfWorldHeight;
          Vec3.transformMat4(out.center, this.center, m);
          Quat.multiply(out.rotation, this.rotation, rot);
          out.updateCache();
        }

        /**
         * @en
         * Updates the cache.
         * @zh
         * 更新缓存。
         */
        updateCache() {
          this.updateLocalCenter();
          Vec3.transformQuat(this.ellipseCenter0, this.ellipseCenter0, this.rotation);
          Vec3.transformQuat(this.ellipseCenter1, this.ellipseCenter1, this.rotation);
          this.ellipseCenter0.add(this.center);
          this.ellipseCenter1.add(this.center);
        }

        /**
         * @en
         * Updates the center points.
         * @zh
         * 更新中心点信息。
         */
        updateLocalCenter() {
          const halfHeight = this.halfHeight;
          const axis = this.axis;
          switch (axis) {
            case 0:
              this.ellipseCenter0.set(halfHeight, 0, 0);
              this.ellipseCenter1.set(-halfHeight, 0, 0);
              break;
            case 1:
              this.ellipseCenter0.set(0, halfHeight, 0);
              this.ellipseCenter1.set(0, -halfHeight, 0);
              break;
            case 2:
              this.ellipseCenter0.set(0, 0, halfHeight);
              this.ellipseCenter1.set(0, 0, -halfHeight);
              break;
            default:
              break;
          }
        }
      });
    }
  };
});