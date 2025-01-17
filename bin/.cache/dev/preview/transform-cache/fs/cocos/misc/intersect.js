System.register("q-bundled:///fs/cocos/misc/intersect.js", ["../core/index.js", "../gfx/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, Mat4, geometry, PrimitiveMode, raySubMesh, rayMesh, rayModel;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  // Implement some intersects functions here. As these functions depends on upper modules, so they are not
  // suitable implemented in core module. I am not sure if should implement these functions in corresponding
  // modules, such as implement `rayModule` in render-scene module. May move to corresponding modules in future,
  // and will not break compatibility.
  // FIXME(minggo): rayAABB2 is also implemented in core/geometry/intersects.ts, but it is not exported.
  // And i don't think should export this function, so copy the implementation here.
  function rayAABB2(ray, min, max) {
    var o = ray.o;
    var d = ray.d;
    var ix = 1 / d.x;
    var iy = 1 / d.y;
    var iz = 1 / d.z;
    var t1 = (min.x - o.x) * ix;
    var t2 = (max.x - o.x) * ix;
    var t3 = (min.y - o.y) * iy;
    var t4 = (max.y - o.y) * iy;
    var t5 = (min.z - o.z) * iz;
    var t6 = (max.z - o.z) * iz;
    var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6));
    var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));
    if (tmax < 0 || tmin > tmax) {
      return 0;
    }
    return tmin > 0 ? tmin : tmax; // ray origin inside aabb
  }

  /**
   * @en
   * ray-subMesh intersect detect, in model space.
   * @zh
   * 在模型空间中，射线和子三角网格的相交性检测。
   * @param ray @zh 射线 @en The ray to test
   * @param subMesh @zh 子网格 @en The sub mesh to test
   * @param options @zh 额外选项 @en Optional params
   * @return @zh 0 或非 0 @en 0 or not 0, 0 indicates there is no intersection
   */
  return {
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      Mat4 = _coreIndexJs.Mat4;
      geometry = _coreIndexJs.geometry;
    }, function (_gfxIndexJs) {
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
    }],
    execute: function () {
      raySubMesh = function () {
        var tri = geometry.Triangle.create();
        var deOpt = {
          distance: Infinity,
          doubleSided: false,
          mode: geometry.ERaycastMode.ANY
        };
        var minDis = 0;
        var fillResult = function fillResult(m, d, i0, i1, i2, r) {
          if (m === geometry.ERaycastMode.CLOSEST) {
            if (minDis > d || minDis === 0) {
              minDis = d;
              if (r) {
                if (r.length === 0) {
                  r.push({
                    distance: d,
                    vertexIndex0: i0 / 3,
                    vertexIndex1: i1 / 3,
                    vertexIndex2: i2 / 3
                  });
                } else {
                  r[0].distance = d;
                  r[0].vertexIndex0 = i0 / 3;
                  r[0].vertexIndex1 = i1 / 3;
                  r[0].vertexIndex2 = i2 / 3;
                }
              }
            }
          } else {
            minDis = d;
            if (r) r.push({
              distance: d,
              vertexIndex0: i0 / 3,
              vertexIndex1: i1 / 3,
              vertexIndex2: i2 / 3
            });
          }
        };
        var narrowphase = function narrowphase(vb, ib, pm, ray, opt) {
          if (pm === PrimitiveMode.TRIANGLE_LIST) {
            var cnt = ib.length;
            for (var j = 0; j < cnt; j += 3) {
              var i0 = ib[j] * 3;
              var i1 = ib[j + 1] * 3;
              var i2 = ib[j + 2] * 3;
              Vec3.set(tri.a, vb[i0], vb[i0 + 1], vb[i0 + 2]);
              Vec3.set(tri.b, vb[i1], vb[i1 + 1], vb[i1 + 2]);
              Vec3.set(tri.c, vb[i2], vb[i2 + 1], vb[i2 + 2]);
              var dist = geometry.intersect.rayTriangle(ray, tri, opt.doubleSided);
              if (dist === 0 || dist > opt.distance) continue;
              fillResult(opt.mode, dist, i0, i1, i2, opt.result);
              if (opt.mode === geometry.ERaycastMode.ANY) return dist;
            }
          } else if (pm === PrimitiveMode.TRIANGLE_STRIP) {
            var _cnt = ib.length - 2;
            var rev = 0;
            for (var _j = 0; _j < _cnt; _j += 1) {
              var _i = ib[_j - rev] * 3;
              var _i2 = ib[_j + rev + 1] * 3;
              var _i3 = ib[_j + 2] * 3;
              Vec3.set(tri.a, vb[_i], vb[_i + 1], vb[_i + 2]);
              Vec3.set(tri.b, vb[_i2], vb[_i2 + 1], vb[_i2 + 2]);
              Vec3.set(tri.c, vb[_i3], vb[_i3 + 1], vb[_i3 + 2]);
              rev = ~rev;
              var _dist = geometry.intersect.rayTriangle(ray, tri, opt.doubleSided);
              if (_dist === 0 || _dist > opt.distance) continue;
              fillResult(opt.mode, _dist, _i, _i2, _i3, opt.result);
              if (opt.mode === geometry.ERaycastMode.ANY) return _dist;
            }
          } else if (pm === PrimitiveMode.TRIANGLE_FAN) {
            var _cnt2 = ib.length - 1;
            var _i4 = ib[0] * 3;
            Vec3.set(tri.a, vb[_i4], vb[_i4 + 1], vb[_i4 + 2]);
            for (var _j2 = 1; _j2 < _cnt2; _j2 += 1) {
              var _i5 = ib[_j2] * 3;
              var _i6 = ib[_j2 + 1] * 3;
              Vec3.set(tri.b, vb[_i5], vb[_i5 + 1], vb[_i5 + 2]);
              Vec3.set(tri.c, vb[_i6], vb[_i6 + 1], vb[_i6 + 2]);
              var _dist2 = geometry.intersect.rayTriangle(ray, tri, opt.doubleSided);
              if (_dist2 === 0 || _dist2 > opt.distance) continue;
              fillResult(opt.mode, _dist2, _i4, _i5, _i6, opt.result);
              if (opt.mode === geometry.ERaycastMode.ANY) return _dist2;
            }
          }
          return minDis;
        };
        return function (ray, submesh, options) {
          minDis = 0;
          if (submesh.geometricInfo.positions.length === 0) return minDis;
          var opt = options === undefined ? deOpt : options;
          var min = submesh.geometricInfo.boundingBox.min;
          var max = submesh.geometricInfo.boundingBox.max;
          if (rayAABB2(ray, min, max)) {
            var pm = submesh.primitiveMode;
            var _submesh$geometricInf = submesh.geometricInfo,
              vb = _submesh$geometricInf.positions,
              ib = _submesh$geometricInf.indices;
            narrowphase(vb, ib, pm, ray, opt);
          }
          return minDis;
        };
      }();
      /**
       * @en
       * ray-mesh intersect detect, in model space.
       * @zh
       * 在模型空间中，射线和三角网格资源的相交性检测。
       * @param ray @zh 射线 @en The ray to test
       * @param mesh @zh 网格 @en The mesh to test
       * @param options @zh 可选参数 @en Optional param
       * @return @zh 0 或非 0 @en 0 or not 0, 0 indicates there is no intersection
       */
      rayMesh = function () {
        var minDis = 0;
        var deOpt = {
          distance: Infinity,
          doubleSided: false,
          mode: geometry.ERaycastMode.ANY
        };
        return function (ray, mesh, options) {
          minDis = 0;
          var opt = options === undefined ? deOpt : options;
          var length = mesh.renderingSubMeshes.length;
          var min = mesh.struct.minPosition;
          var max = mesh.struct.maxPosition;
          if (min && max && !rayAABB2(ray, min, max)) return minDis;
          for (var i = 0; i < length; i++) {
            var sm = mesh.renderingSubMeshes[i];
            var dis = raySubMesh(ray, sm, opt);
            if (dis) {
              if (opt.mode === geometry.ERaycastMode.CLOSEST) {
                if (minDis === 0 || minDis > dis) {
                  minDis = dis;
                  if (opt.subIndices) opt.subIndices[0] = i;
                }
              } else {
                minDis = dis;
                if (opt.subIndices) opt.subIndices.push(i);
                if (opt.mode === geometry.ERaycastMode.ANY) {
                  return dis;
                }
              }
            }
          }
          if (minDis && opt.mode === geometry.ERaycastMode.CLOSEST) {
            if (opt.result) {
              opt.result[0].distance = minDis;
              opt.result.length = 1;
            }
            if (opt.subIndices) opt.subIndices.length = 1;
          }
          return minDis;
        };
      }();
      /**
       * @en
       * ray-model intersect detect, in world space.
       * @zh
       * 在世界空间中，射线和渲染模型的相交性检测。
       * @param ray @zh 射线 @en The ray to test
       * @param model @zh model @en The model to test
       * @param options @zh 可选参数 @en Optional param
       * @return @zh 0 或非 0 @en 0 or not 0, 0 indicates there is no intersection
       */
      rayModel = function () {
        var minDis = 0;
        var deOpt = {
          distance: Infinity,
          doubleSided: false,
          mode: geometry.ERaycastMode.ANY
        };
        var modelRay = new geometry.Ray();
        var m4 = new Mat4();
        return function (r, model, options) {
          minDis = 0;
          var opt = options === undefined ? deOpt : options;
          var wb = model.worldBounds;
          if (wb && !geometry.intersect.rayAABB(r, wb)) return minDis;
          geometry.Ray.copy(modelRay, r);
          if (model.node) {
            Mat4.invert(m4, model.node.getWorldMatrix(m4));
            Vec3.transformMat4(modelRay.o, r.o, m4);
            Vec3.transformMat4Normal(modelRay.d, r.d, m4);
          }
          var subModels = model.subModels;
          for (var i = 0; i < subModels.length; i++) {
            var subMesh = subModels[i].subMesh;
            var dis = raySubMesh(modelRay, subMesh, opt);
            if (dis) {
              if (opt.mode === geometry.ERaycastMode.CLOSEST) {
                if (minDis === 0 || minDis > dis) {
                  minDis = dis;
                  if (opt.subIndices) opt.subIndices[0] = i;
                }
              } else {
                minDis = dis;
                if (opt.subIndices) opt.subIndices.push(i);
                if (opt.mode === geometry.ERaycastMode.ANY) {
                  return dis;
                }
              }
            }
          }
          if (minDis && opt.mode === geometry.ERaycastMode.CLOSEST) {
            if (opt.result) {
              opt.result[0].distance = minDis;
              opt.result.length = 1;
            }
            if (opt.subIndices) opt.subIndices.length = 1;
          }
          return minDis;
        };
      }();
      geometry.intersect.rayModel = rayModel;
      geometry.intersect.raySubMesh = raySubMesh;
      geometry.intersect.rayMesh = rayMesh;
    }
  };
});