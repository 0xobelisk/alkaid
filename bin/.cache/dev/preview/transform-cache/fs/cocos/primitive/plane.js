System.register("q-bundled:///fs/cocos/primitive/plane.js", ["../core/index.js", "./define.js"], function (_export, _context) {
  "use strict";

  var Vec3, applyDefaultGeometryOptions, temp1, temp2, temp3, r, c00, c10, c01;
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
  /**
   * @en
   * The definition of the parameter for building a plane.
   * @zh
   * 平面参数选项。
   */
  /**
   * @zh
   * 应用默认的平面参数选项。
   * @param options 平面参数选项。
   */
  function applyDefaultPlaneOptions(options) {
    options = applyDefaultGeometryOptions(options);
    options.width = options.width || 10;
    options.length = options.length || 10;
    options.widthSegments = options.widthSegments || 10;
    options.lengthSegments = options.lengthSegments || 10;
    return options;
  }
  function plane(options) {
    var normalizedOptions = applyDefaultPlaneOptions(options);
    var width = normalizedOptions.width,
      length = normalizedOptions.length,
      uSegments = normalizedOptions.widthSegments,
      vSegments = normalizedOptions.lengthSegments;
    var hw = width * 0.5;
    var hl = length * 0.5;
    var positions = [];
    var uvs = [];
    var indices = [];
    var minPos = new Vec3(-hw, 0, -hl);
    var maxPos = new Vec3(hw, 0, hl);
    var boundingRadius = Math.sqrt(width * width + length * length);
    Vec3.set(c00, -hw, 0, hl);
    Vec3.set(c10, hw, 0, hl);
    Vec3.set(c01, -hw, 0, -hl);
    for (var y = 0; y <= vSegments; y++) {
      for (var x = 0; x <= uSegments; x++) {
        var u = x / uSegments;
        var v = y / vSegments;
        Vec3.lerp(temp1, c00, c10, u);
        Vec3.lerp(temp2, c00, c01, v);
        Vec3.subtract(temp3, temp2, c00);
        Vec3.add(r, temp1, temp3);
        positions.push(r.x, r.y, r.z);
        if (normalizedOptions.includeUV) {
          uvs.push(u, v);
        }
        if (x < uSegments && y < vSegments) {
          var useg1 = uSegments + 1;
          var a = x + y * useg1;
          var b = x + (y + 1) * useg1;
          var c = x + 1 + (y + 1) * useg1;
          var d = x + 1 + y * useg1;
          indices.push(a, d, b);
          indices.push(d, c, b);
        }
      }
    }
    var result = {
      positions: positions,
      indices: indices,
      minPos: minPos,
      maxPos: maxPos,
      boundingRadius: boundingRadius
    };
    if (normalizedOptions.includeNormal) {
      var nVertex = (vSegments + 1) * (uSegments + 1);
      var normals = new Array(3 * nVertex);
      result.normals = normals;
      for (var i = 0; i < nVertex; ++i) {
        normals[i * 3 + 0] = 0;
        normals[i * 3 + 1] = 1;
        normals[i * 3 + 2] = 0;
      }
    }
    if (normalizedOptions.includeUV) {
      result.uvs = uvs;
    }
    return result;
  }
  _export("default", plane);
  return {
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }, function (_defineJs) {
      applyDefaultGeometryOptions = _defineJs.applyDefaultGeometryOptions;
    }],
    execute: function () {
      temp1 = new Vec3(0, 0, 0);
      temp2 = new Vec3(0, 0, 0);
      temp3 = new Vec3(0, 0, 0);
      r = new Vec3(0, 0, 0);
      c00 = new Vec3(0, 0, 0);
      c10 = new Vec3(0, 0, 0);
      c01 = new Vec3(0, 0, 0);
      /**
       * @en
       * This function generates a plane on XOZ plane with positive Y direction.
       * @zh
       * 生成一个平面，其位于XOZ平面，方向为Y轴正方向。
       * @param options @zh 平面参数选项。@en The optional creation parameters of the plane
       */
    }
  };
});