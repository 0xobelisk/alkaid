System.register("q-bundled:///fs/cocos/core/geometry/frustum.js", ["../math/index.js", "./enums.js", "./plane.js"], function (_export, _context) {
  "use strict";

  var Vec3, enums, Plane, _v, _nearTemp, _farTemp, _temp_v3, Frustum;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
  return {
    setters: [function (_mathIndexJs) {
      Vec3 = _mathIndexJs.Vec3;
    }, function (_enumsJs) {
      enums = _enumsJs.default;
    }, function (_planeJs) {
      Plane = _planeJs.Plane;
    }],
    execute: function () {
      _v = new Array(8);
      _v[0] = new Vec3(1, 1, 1);
      _v[1] = new Vec3(-1, 1, 1);
      _v[2] = new Vec3(-1, -1, 1);
      _v[3] = new Vec3(1, -1, 1);
      _v[4] = new Vec3(1, 1, -1);
      _v[5] = new Vec3(-1, 1, -1);
      _v[6] = new Vec3(-1, -1, -1);
      _v[7] = new Vec3(1, -1, -1);
      _nearTemp = new Vec3();
      _farTemp = new Vec3();
      _temp_v3 = new Vec3();
      /**
       * @en
       * Basic Geometry: frustum.
       * @zh
       * 基础几何：视锥体。
       */
      _export("Frustum", Frustum = /*#__PURE__*/function () {
        /**
         * @en Creates an orthographic frustum.
         * @zh 创建一个正交视锥体。
         * @param out @en The result orthographic frustum. @zh 输出的正交视锥体。
         * @param width @en The width of the frustum. @zh 正交视锥体的宽度。
         * @param height @en The height of the frustum. @zh 正交视锥体的高度。
         * @param near @en The near plane of the frustum. @zh 正交视锥体的近平面值。
         * @param far @en The far plane of the frustum. @zh 正交视锥体的远平面值。
         * @param transform @en The transform matrix of the frustum. @zh 正交视锥体的变换矩阵。
         * @returns @en The result frustum, same as the `out` parameter. @zh 存储结果的视锥体，与 `out` 参数为同一个对象。
         */
        Frustum.createOrthographic = function createOrthographic(out, width, height, near, far, transform) {
          var halfWidth = width / 2;
          var halfHeight = height / 2;
          Vec3.set(_temp_v3, halfWidth, halfHeight, -near);
          Vec3.transformMat4(out.vertices[0], _temp_v3, transform);
          Vec3.set(_temp_v3, -halfWidth, halfHeight, -near);
          Vec3.transformMat4(out.vertices[1], _temp_v3, transform);
          Vec3.set(_temp_v3, -halfWidth, -halfHeight, -near);
          Vec3.transformMat4(out.vertices[2], _temp_v3, transform);
          Vec3.set(_temp_v3, halfWidth, -halfHeight, -near);
          Vec3.transformMat4(out.vertices[3], _temp_v3, transform);
          Vec3.set(_temp_v3, halfWidth, halfHeight, -far);
          Vec3.transformMat4(out.vertices[4], _temp_v3, transform);
          Vec3.set(_temp_v3, -halfWidth, halfHeight, -far);
          Vec3.transformMat4(out.vertices[5], _temp_v3, transform);
          Vec3.set(_temp_v3, -halfWidth, -halfHeight, -far);
          Vec3.transformMat4(out.vertices[6], _temp_v3, transform);
          Vec3.set(_temp_v3, halfWidth, -halfHeight, -far);
          Vec3.transformMat4(out.vertices[7], _temp_v3, transform);
          out.updatePlanes();
        }

        /**
         * @en Creates an orthographic frustum.
         * @zh 创建一个正交视锥体。
         * @param out @en The result orthographic frustum. @zh 输出的正交视锥体。
         * @param width @en The width of the frustum. @zh 正交视锥体的宽度。
         * @param height @en The height of the frustum. @zh 正交视锥体的高度。
         * @param near @en The near plane of the frustum. @zh 正交视锥体的近平面值。
         * @param far @en The far plane of the frustum. @zh 正交视锥体的远平面值。
         * @param transform @en The transform matrix of the frustum. @zh 正交视锥体的变换矩阵。
         * @returns @en The result frustum, same as the `out` parameter. @zh 存储结果的视锥体，与 `out` 参数为同一个对象。
         *
         * @deprecated since v3.8.0, please use [[createOrthographic]] instead.
         */;
        Frustum.createOrtho = function createOrtho(out, width, height, near, far, transform) {
          return Frustum.createOrthographic(out, width, height, near, far, transform);
        }

        /**
         * @en Creates a perspective frustum.
         * @zh 创建一个透视视锥体。
         * @param aspect @en The aspect ratio of the camera. @zh 相机视图的长宽比。
         * @param fov @en The field of view of the camera. @zh 相机的视角大小。
         * @param near @en The near plane of the frustum. @zh 视锥体的近平面值。
         * @param far @en The far plane of the frustum. @zh 视锥体的远平面值。
         * @param transform @en The transform matrix. @zh 变换矩阵。
         * @returns @en The result frustum, same as the `out` parameter. @zh 存储结果的视锥体，与 `out` 参数为同一个对象。
         */;
        Frustum.createPerspective = function createPerspective(out, aspect, fov, near, far, transform) {
          var h = Math.tan(fov * 0.5);
          var w = h * aspect;
          _nearTemp.set(near * w, near * h, near);
          _farTemp.set(far * w, far * h, far);
          var vertexes = out.vertices;
          // startHalfWidth startHalfHeight
          _temp_v3.set(_nearTemp.x, _nearTemp.y, -_nearTemp.z);
          Vec3.transformMat4(vertexes[0], _temp_v3, transform);
          _temp_v3.set(-_nearTemp.x, _nearTemp.y, -_nearTemp.z);
          Vec3.transformMat4(vertexes[1], _temp_v3, transform);
          _temp_v3.set(-_nearTemp.x, -_nearTemp.y, -_nearTemp.z);
          Vec3.transformMat4(vertexes[2], _temp_v3, transform);
          _temp_v3.set(_nearTemp.x, -_nearTemp.y, -_nearTemp.z);
          Vec3.transformMat4(vertexes[3], _temp_v3, transform);

          // endHalfWidth, endHalfHeight
          _temp_v3.set(_farTemp.x, _farTemp.y, -_farTemp.z);
          Vec3.transformMat4(vertexes[4], _temp_v3, transform);
          _temp_v3.set(-_farTemp.x, _farTemp.y, -_farTemp.z);
          Vec3.transformMat4(vertexes[5], _temp_v3, transform);
          _temp_v3.set(-_farTemp.x, -_farTemp.y, -_farTemp.z);
          Vec3.transformMat4(vertexes[6], _temp_v3, transform);
          _temp_v3.set(_farTemp.x, -_farTemp.y, -_farTemp.z);
          Vec3.transformMat4(vertexes[7], _temp_v3, transform);
          out.updatePlanes();
        }

        /**
         * @en Creates a frustum from an AABB instance.
         * @zh 根据一个 AABB 实例创建一个视锥体。
         * @param out @en The result frustum. @zh 输出的视锥体对象。
         * @param aabb @en The AABB to create the result frustum. @zh 用于创建视锥体 AABB。
         * @returns @en The result frustum, same as the `out` parameter. @zh 存储结果的视锥体，与 `out` 参数为同一个对象。
         *
         * @deprecated since v3.8.0, please use [[createOrthographic]] instead.
         */;
        Frustum.createFromAABB = function createFromAABB(out, aabb) {
          var vec3_min = new Vec3();
          var vec3_max = new Vec3();
          Vec3.subtract(vec3_min, aabb.center, aabb.halfExtents);
          Vec3.add(vec3_max, aabb.center, aabb.halfExtents);
          out.vertices[0].set(vec3_max.x, vec3_max.y, -vec3_min.z);
          out.vertices[1].set(vec3_min.x, vec3_max.y, -vec3_min.z);
          out.vertices[2].set(vec3_min.x, vec3_min.y, -vec3_min.z);
          out.vertices[3].set(vec3_max.x, vec3_min.y, -vec3_min.z);
          out.vertices[4].set(vec3_max.x, vec3_max.y, -vec3_max.z);
          out.vertices[5].set(vec3_min.x, vec3_max.y, -vec3_max.z);
          out.vertices[6].set(vec3_min.x, vec3_min.y, -vec3_max.z);
          out.vertices[7].set(vec3_max.x, vec3_min.y, -vec3_max.z);
          out.updatePlanes();
          return out;
        }

        /**
         * @en Calculates a split frustum.
         * @zh 计算出一个分割的视锥体。
         * @param start @en The split start position. @zh 分割开始位置。
         * @param end @en The split end position. @zh 分割末尾位置。
         * @param aspect @en The aspect ratio of the camera. @zh 相机视图的长宽比。
         * @param fov @en The field of view of the camera. @zh 相机的视角大小。
         * @param m @en The transform matrix. @zh 变换矩阵。
         *
         * @deprecated since v3.8.0, please use [[createPerspective]] instead.
         */;
        var _proto = Frustum.prototype;
        _proto.split = function split(start, end, aspect, fov, m) {
          return Frustum.createPerspective(this, aspect, fov, start, end, m);
        }

        /**
         * @en
         * Creates a new frustum.
         * @zh
         * 创建一个新的视椎体。
         * @returns @en An empty frustum. @zh 一个空视椎体。
         */;
        Frustum.create = function create() {
          return new Frustum();
        }

        /**
         * @en
         * Clones a frustum.
         * @zh
         * 克隆一个视椎体。
         * @param f @en The frustum to clone from. @zh 用于克隆的视椎体。
         * @return @en The cloned frustum. @zh 克隆出的新视椎体。
         */;
        Frustum.clone = function clone(f) {
          return Frustum.copy(new Frustum(), f);
        }

        /**
         * @en
         * Copies the values from one frustum to another.
         * @zh
         * 从一个视锥体拷贝到另一个视锥体。
         * @param out @en The result frustum @zh 用于存储拷贝数据的截锥体
         * @param f @en The frustum to copy from @zh 用于克隆的截锥体
         * @returns @en The result frustum, same as the `out` parameter. @zh 存储结果的视锥体，与 `out` 参数为同一个对象。
         */;
        Frustum.copy = function copy(out, f) {
          out._type = f.type;
          for (var i = 0; i < 6; ++i) {
            Plane.copy(out.planes[i], f.planes[i]);
          }
          for (var _i = 0; _i < 8; ++_i) {
            Vec3.copy(out.vertices[_i], f.vertices[_i]);
          }
          return out;
        }

        /**
         * @en
         * Sets whether to use accurate intersection testing function on this frustum.
         * @zh
         * 设置是否在此截锥体上使用精确的相交测试函数。
         *
         * @deprecated since v3.8.0 no need to set accurate flag since it doesn't affect the calculation at all.
         */;

        function Frustum() {
          /**
           * @en
           * The 6 planes of the frustum.
           * @zh
           * 视椎体的 6 个面。
           */
          this.planes = void 0;
          /**
           * @en
           * The 8 vertices of the frustum.
           * @zh
           * 视椎体的 8 个顶点。
           */
          this.vertices = void 0;
          this._type = void 0;
          this._type = enums.SHAPE_FRUSTUM;
          this.planes = new Array(6);
          for (var i = 0; i < 6; ++i) {
            this.planes[i] = Plane.create(0, 0, 0, 0);
          }
          this.vertices = new Array(8);
          for (var _i2 = 0; _i2 < 8; ++_i2) {
            this.vertices[_i2] = new Vec3();
          }
        }

        /**
         * @en
         * Updates the frustum information according to the given transform matrix.
         * Note that the resulting planes are not normalized under normal mode.
         * @zh
         * 根据给定的变换矩阵更新截锥体信息，注意得到的平面不是在标准模式下归一化的。
         * @param m @en The view-projection matrix. @zh 视图投影矩阵。
         * @param inv @en The inverse view-projection matrix. @zh 视图投影逆矩阵。
         */
        _proto.update = function update(m, inv) {
          // RTR4, ch. 22.14.1, p. 983
          // extract frustum planes from view-proj matrix.

          // left plane
          Vec3.set(this.planes[0].n, m.m03 + m.m00, m.m07 + m.m04, m.m11 + m.m08);
          this.planes[0].d = -(m.m15 + m.m12);
          // right plane
          Vec3.set(this.planes[1].n, m.m03 - m.m00, m.m07 - m.m04, m.m11 - m.m08);
          this.planes[1].d = -(m.m15 - m.m12);
          // bottom plane
          Vec3.set(this.planes[2].n, m.m03 + m.m01, m.m07 + m.m05, m.m11 + m.m09);
          this.planes[2].d = -(m.m15 + m.m13);
          // top plane
          Vec3.set(this.planes[3].n, m.m03 - m.m01, m.m07 - m.m05, m.m11 - m.m09);
          this.planes[3].d = -(m.m15 - m.m13);
          // near plane
          Vec3.set(this.planes[4].n, m.m03 + m.m02, m.m07 + m.m06, m.m11 + m.m10);
          this.planes[4].d = -(m.m15 + m.m14);
          // far plane
          Vec3.set(this.planes[5].n, m.m03 - m.m02, m.m07 - m.m06, m.m11 - m.m10);
          this.planes[5].d = -(m.m15 - m.m14);

          // normalize planes
          for (var i = 0; i < 6; i++) {
            var pl = this.planes[i];
            var invDist = 1 / pl.n.length();
            Vec3.multiplyScalar(pl.n, pl.n, invDist);
            pl.d *= invDist;
          }

          // update frustum vertices
          for (var _i3 = 0; _i3 < 8; _i3++) {
            Vec3.transformMat4(this.vertices[_i3], _v[_i3], inv);
          }
        }

        /**
         * @en
         * Transforms this frustum.
         * @zh
         * 变换此视锥体。
         * @param mat @en The transform matrix. @zh 变换矩阵。
         */;
        _proto.transform = function transform(mat) {
          for (var i = 0; i < 8; i++) {
            Vec3.transformMat4(this.vertices[i], this.vertices[i], mat);
          }
          this.updatePlanes();
        }

        /**
         * @en Makes the frustum empty, all vertices will be zero values.
         * @zh 置空此视锥体，所有顶点将被赋值为 0。
         */;
        _proto.zero = function zero() {
          // reset to initial state
          for (var i = 0; i < 8; i++) {
            this.vertices[i].set(0.0, 0.0, 0.0);
          }
          for (var _i4 = 0; _i4 < 6; _i4++) {
            Plane.set(this.planes[_i4], 0, 0, 0, 0);
          }
        }

        /**
         * @en Updates all six planes of the frustum.
         * @zh 更新视锥体的所有面数据。
         */;
        _proto.updatePlanes = function updatePlanes() {
          // left plane
          Plane.fromPoints(this.planes[0], this.vertices[1], this.vertices[6], this.vertices[5]);
          // right plane
          Plane.fromPoints(this.planes[1], this.vertices[3], this.vertices[4], this.vertices[7]);
          // bottom plane
          Plane.fromPoints(this.planes[2], this.vertices[6], this.vertices[3], this.vertices[7]);
          // top plane
          Plane.fromPoints(this.planes[3], this.vertices[0], this.vertices[5], this.vertices[4]);
          // near plane
          Plane.fromPoints(this.planes[4], this.vertices[2], this.vertices[0], this.vertices[3]);
          // far plane
          Plane.fromPoints(this.planes[5], this.vertices[7], this.vertices[5], this.vertices[6]);
        };
        _createClass(Frustum, [{
          key: "accurate",
          set: function set(b) {
            this._type = b ? enums.SHAPE_FRUSTUM_ACCURATE : enums.SHAPE_FRUSTUM;
          }

          /**
           * @en
           * Gets the type of the shape. The value may be `enums.SHAPE_FRUSTUM_ACCURATE` or `enums.SHAPE_FRUSTUM`.
           * @zh
           * 获取形状的类型。值可能为 `enums.SHAPE_FRUSTUM_ACCURATE` 或 `enums.SHAPE_FRUSTUM`。
           * @readonly
           */
        }, {
          key: "type",
          get: function get() {
            return this._type;
          }
        }]);
        return Frustum;
      }());
    }
  };
});