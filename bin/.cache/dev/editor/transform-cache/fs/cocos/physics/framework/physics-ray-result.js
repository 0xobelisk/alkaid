System.register("q-bundled:///fs/cocos/physics/framework/physics-ray-result.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, PhysicsRayResult, PhysicsLineStripCastResult;
  _export({
    PhysicsRayResult: void 0,
    PhysicsLineStripCastResult: void 0
  });
  return {
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }],
    execute: function () {
      /*
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
      /**
       * @en
       * Used to store physics ray test results.
       * @zh
       * 用于保存物理射线检测结果。
       */
      _export("PhysicsRayResult", PhysicsRayResult = class PhysicsRayResult {
        constructor() {
          this._hitPoint = new Vec3();
          this._hitNormal = new Vec3();
          this._distance = 0;
          this._collider = null;
        }
        /**
         * @en
         * The hit point，in world space.
         * @zh
         * 在世界坐标系下的击中点。
         */
        get hitPoint() {
          return this._hitPoint;
        }

        /**
         * @en
         * The distance between the ray origin with the hit.
         * @zh
         * 距离。
         */
        get distance() {
          return this._distance;
        }

        /**
         * @en
         * The collider hit by the ray.
         * @zh
         * 击中的碰撞盒
         */
        get collider() {
          return this._collider;
        }

        /**
         * @en
         * The normal of the hit plane，in world space.
         * @zh
         * 在世界坐标系下击中面的法线。
         */
        get hitNormal() {
          return this._hitNormal;
        }
        /**
         * @en
         * internal methods.
         * @zh
         * 设置射线，此方法由引擎内部使用，请勿在外部脚本调用。
         *
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _assign(hitPoint, distance, collider, hitNormal) {
          Vec3.copy(this._hitPoint, hitPoint);
          Vec3.copy(this._hitNormal, hitNormal);
          this._distance = distance;
          this._collider = collider;
        }

        /**
         * @en
         * clone.
         * @zh
         * 克隆。
         */
        clone() {
          const c = new PhysicsRayResult();
          Vec3.copy(c._hitPoint, this._hitPoint);
          Vec3.copy(c._hitNormal, this._hitNormal);
          c._distance = this._distance;
          c._collider = this._collider;
          return c;
        }
      });
      /**
       * @en
       * Used to store physics line strip cast test results.
       * @zh
       * 用于保存物理逐线段检测结果。
       */
      _export("PhysicsLineStripCastResult", PhysicsLineStripCastResult = class PhysicsLineStripCastResult extends PhysicsRayResult {
        constructor(...args) {
          super(...args);
          this._id = 0;
        }
        /**
         * @en
         * The line id of the line segments. This is only for lineStripCast
         * @zh
         * id
         */
        get id() {
          return this._id;
        }

        /**
         * @en
         * internal methods.
         * @zh
         * 设置射线，此方法由引擎内部使用，请勿在外部脚本调用。
         * @engineInternal
         */
        _assign(hitPoint, distance, collider, hitNormal, id = 0) {
          super._assign(hitPoint, distance, collider, hitNormal);
          this._id = id;
        }

        /**
         * @en
         * clone.
         * @zh
         * 克隆。
         */
        clone() {
          const c = new PhysicsLineStripCastResult();
          Vec3.copy(c._hitPoint, this._hitPoint);
          Vec3.copy(c._hitNormal, this._hitNormal);
          c._distance = this._distance;
          c._collider = this._collider;
          c._id = this._id;
          return c;
        }
      });
    }
  };
});