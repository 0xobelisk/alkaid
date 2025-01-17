System.register("q-bundled:///fs/cocos/core/math/mat4.js", ["../data/class.js", "../value-types/value-type.js", "./mat3.js", "./quat.js", "./utils.js", "./vec3.js", "../global-exports.js"], function (_export, _context) {
  "use strict";

  var CCClass, ValueType, Mat3, Quat, EPSILON, Vec3, legacyCC, _class, preTransforms, Mat4, v3_1, m3_1;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    return new Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
  }
  _export("mat4", mat4);
  return {
    setters: [function (_dataClassJs) {
      CCClass = _dataClassJs.CCClass;
    }, function (_valueTypesValueTypeJs) {
      ValueType = _valueTypesValueTypeJs.ValueType;
    }, function (_mat3Js) {
      Mat3 = _mat3Js.Mat3;
    }, function (_quatJs) {
      Quat = _quatJs.Quat;
    }, function (_utilsJs) {
      EPSILON = _utilsJs.EPSILON;
    }, function (_vec3Js) {
      Vec3 = _vec3Js.Vec3;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      /**
       * @engineInternal
       */
      _export("preTransforms", preTransforms = Object.freeze([Object.freeze([1, 0, 0, 1]),
      // SurfaceTransform.IDENTITY
      Object.freeze([0, 1, -1, 0]),
      // SurfaceTransform.ROTATE_90
      Object.freeze([-1, 0, 0, -1]),
      // SurfaceTransform.ROTATE_180
      Object.freeze([0, -1, 1, 0]) // SurfaceTransform.ROTATE_270
      ]));
      /**
       * @en Mathematical 4x4 matrix.
       * @zh 表示四维（4x4）矩阵。
       */
      _export("Mat4", Mat4 = /*#__PURE__*/function (_ValueType) {
        _inheritsLoose(Mat4, _ValueType);
        /**
         * @en Clone a matrix and save the results to out matrix
         * @zh 获得指定矩阵的拷贝
         */
        Mat4.clone = function clone(a) {
          return new Mat4(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05, a.m06, a.m07, a.m08, a.m09, a.m10, a.m11, a.m12, a.m13, a.m14, a.m15);
        }

        /**
         * @en Copy a matrix into the out matrix
         * @zh 复制目标矩阵
         */;
        Mat4.copy = function copy(out, a) {
          out.m00 = a.m00;
          out.m01 = a.m01;
          out.m02 = a.m02;
          out.m03 = a.m03;
          out.m04 = a.m04;
          out.m05 = a.m05;
          out.m06 = a.m06;
          out.m07 = a.m07;
          out.m08 = a.m08;
          out.m09 = a.m09;
          out.m10 = a.m10;
          out.m11 = a.m11;
          out.m12 = a.m12;
          out.m13 = a.m13;
          out.m14 = a.m14;
          out.m15 = a.m15;
          return out;
        }

        /**
         * @en Sets a matrix with the given values and save the results to out matrix
         * @zh 设置矩阵值
         *
         * @param out The receive matrix
         * @param m00 Component in column 0, row 0 position (index 0)
         * @param m01 Component in column 0, row 1 position (index 1)
         * @param m02 Component in column 0, row 2 position (index 2)
         * @param m03 Component in column 0, row 3 position (index 3)
         * @param m10 Component in column 1, row 0 position (index 4)
         * @param m11 Component in column 1, row 1 position (index 5)
         * @param m12 Component in column 1, row 2 position (index 6)
         * @param m13 Component in column 1, row 3 position (index 7)
         * @param m20 Component in column 2, row 0 position (index 8)
         * @param m21 Component in column 2, row 1 position (index 9)
         * @param m22 Component in column 2, row 2 position (index 10)
         * @param m23 Component in column 2, row 3 position (index 11)
         * @param m30 Component in column 3, row 0 position (index 12)
         * @param m31 Component in column 3, row 1 position (index 13)
         * @param m32 Component in column 3, row 2 position (index 14)
         * @param m33 Component in column 3, row 3 position (index 15)
         * @returns The receive matrix
         */;
        Mat4.set = function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
          out.m00 = m00;
          out.m01 = m01;
          out.m02 = m02;
          out.m03 = m03;
          out.m04 = m10;
          out.m05 = m11;
          out.m06 = m12;
          out.m07 = m13;
          out.m08 = m20;
          out.m09 = m21;
          out.m10 = m22;
          out.m11 = m23;
          out.m12 = m30;
          out.m13 = m31;
          out.m14 = m32;
          out.m15 = m33;
          return out;
        }

        /**
         * @en return an identity matrix.
         * @zh 将目标赋值为单位矩阵
         */;
        Mat4.identity = function identity(out) {
          out.m00 = 1;
          out.m01 = 0;
          out.m02 = 0;
          out.m03 = 0;
          out.m04 = 0;
          out.m05 = 1;
          out.m06 = 0;
          out.m07 = 0;
          out.m08 = 0;
          out.m09 = 0;
          out.m10 = 1;
          out.m11 = 0;
          out.m12 = 0;
          out.m13 = 0;
          out.m14 = 0;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Transposes a matrix and save the results to out matrix
         * @zh 转置矩阵
         */;
        Mat4.transpose = function transpose(out, a) {
          // If we are transposing ourselves we can skip a few steps but have to cache some values
          if (out === a) {
            var a01 = a.m01;
            var a02 = a.m02;
            var a03 = a.m03;
            var a12 = a.m06;
            var a13 = a.m07;
            var a23 = a.m11;
            out.m01 = a.m04;
            out.m02 = a.m08;
            out.m03 = a.m12;
            out.m04 = a01;
            out.m06 = a.m09;
            out.m07 = a.m13;
            out.m08 = a02;
            out.m09 = a12;
            out.m11 = a.m14;
            out.m12 = a03;
            out.m13 = a13;
            out.m14 = a23;
          } else {
            out.m00 = a.m00;
            out.m01 = a.m04;
            out.m02 = a.m08;
            out.m03 = a.m12;
            out.m04 = a.m01;
            out.m05 = a.m05;
            out.m06 = a.m09;
            out.m07 = a.m13;
            out.m08 = a.m02;
            out.m09 = a.m06;
            out.m10 = a.m10;
            out.m11 = a.m14;
            out.m12 = a.m03;
            out.m13 = a.m07;
            out.m14 = a.m11;
            out.m15 = a.m15;
          }
          return out;
        }

        /**
         * @en Inverts a matrix. When matrix is not invertible the matrix will be set to zeros.
         * @zh 矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。
         */;
        Mat4.invert = function invert(out, a) {
          var a00 = a.m00;
          var a01 = a.m01;
          var a02 = a.m02;
          var a03 = a.m03;
          var a10 = a.m04;
          var a11 = a.m05;
          var a12 = a.m06;
          var a13 = a.m07;
          var a20 = a.m08;
          var a21 = a.m09;
          var a22 = a.m10;
          var a23 = a.m11;
          var a30 = a.m12;
          var a31 = a.m13;
          var a32 = a.m14;
          var a33 = a.m15;
          var b00 = a00 * a11 - a01 * a10;
          var b01 = a00 * a12 - a02 * a10;
          var b02 = a00 * a13 - a03 * a10;
          var b03 = a01 * a12 - a02 * a11;
          var b04 = a01 * a13 - a03 * a11;
          var b05 = a02 * a13 - a03 * a12;
          var b06 = a20 * a31 - a21 * a30;
          var b07 = a20 * a32 - a22 * a30;
          var b08 = a20 * a33 - a23 * a30;
          var b09 = a21 * a32 - a22 * a31;
          var b10 = a21 * a33 - a23 * a31;
          var b11 = a22 * a33 - a23 * a32;

          // Calculate the determinant
          var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
          if (det === 0) {
            out.m00 = 0;
            out.m01 = 0;
            out.m02 = 0;
            out.m03 = 0;
            out.m04 = 0;
            out.m05 = 0;
            out.m06 = 0;
            out.m07 = 0;
            out.m08 = 0;
            out.m09 = 0;
            out.m10 = 0;
            out.m11 = 0;
            out.m12 = 0;
            out.m13 = 0;
            out.m14 = 0;
            out.m15 = 0;
            return out;
          }
          det = 1.0 / det;

          // calculate factors
          out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
          out.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
          out.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
          out.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
          out.m04 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
          out.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
          out.m06 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
          out.m07 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
          out.m08 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
          out.m09 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
          out.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
          out.m11 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
          out.m12 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
          out.m13 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
          out.m14 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
          out.m15 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
          return out;
        }

        /**
         * @en Calculates the determinant of a matrix
         * @zh 矩阵行列式
         */;
        Mat4.determinant = function determinant(a) {
          var a00 = a.m00;
          var a01 = a.m01;
          var a02 = a.m02;
          var a03 = a.m03;
          var a10 = a.m04;
          var a11 = a.m05;
          var a12 = a.m06;
          var a13 = a.m07;
          var a20 = a.m08;
          var a21 = a.m09;
          var a22 = a.m10;
          var a23 = a.m11;
          var a30 = a.m12;
          var a31 = a.m13;
          var a32 = a.m14;
          var a33 = a.m15;
          var b00 = a00 * a11 - a01 * a10;
          var b01 = a00 * a12 - a02 * a10;
          var b02 = a00 * a13 - a03 * a10;
          var b03 = a01 * a12 - a02 * a11;
          var b04 = a01 * a13 - a03 * a11;
          var b05 = a02 * a13 - a03 * a12;
          var b06 = a20 * a31 - a21 * a30;
          var b07 = a20 * a32 - a22 * a30;
          var b08 = a20 * a33 - a23 * a30;
          var b09 = a21 * a32 - a22 * a31;
          var b10 = a21 * a33 - a23 * a31;
          var b11 = a22 * a33 - a23 * a32;

          // Calculate the determinant
          return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        }

        /**
         * @en Multiply two matrices and save the results to out matrix, (out = a * b)
         * @zh 矩阵乘法 (out = a * b)
         *
         * @param out The out matrix
         * @param a The first operand
         * @param b The second operand
         * @returns out matrix
         */;
        Mat4.multiply = function multiply(out, a, b) {
          var a00 = a.m00;
          var a01 = a.m01;
          var a02 = a.m02;
          var a03 = a.m03;
          var a10 = a.m04;
          var a11 = a.m05;
          var a12 = a.m06;
          var a13 = a.m07;
          var a20 = a.m08;
          var a21 = a.m09;
          var a22 = a.m10;
          var a23 = a.m11;
          var a30 = a.m12;
          var a31 = a.m13;
          var a32 = a.m14;
          var a33 = a.m15;

          // Cache only the current line of the second matrix
          var b0 = b.m00;
          var b1 = b.m01;
          var b2 = b.m02;
          var b3 = b.m03;
          out.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          out.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          out.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          out.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          b0 = b.m04;
          b1 = b.m05;
          b2 = b.m06;
          b3 = b.m07;
          out.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          out.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          out.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          out.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          b0 = b.m08;
          b1 = b.m09;
          b2 = b.m10;
          b3 = b.m11;
          out.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          out.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          out.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          out.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          b0 = b.m12;
          b1 = b.m13;
          b2 = b.m14;
          b3 = b.m15;
          out.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          out.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          out.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          out.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          return out;
        }

        /**
         * @en Translate a matrix with the given vector and save results to the out matrix, the translate is applied before the matrix, i.e. (out = a * T)
         * @zh 在给定矩阵变换基础上加入平移变换，并将结果保存到 out 矩阵中，平移变换将应用在矩阵变换之前，即 (out = a * T)
         *
         * @param out The out matrix
         * @param a The matrix to translate
         * @param v The vector to translate with
         */;
        Mat4.transform = function transform(out, a, v) {
          var x = v.x;
          var y = v.y;
          var z = v.z;
          if (a === out) {
            out.m12 = a.m00 * x + a.m04 * y + a.m08 * z + a.m12;
            out.m13 = a.m01 * x + a.m05 * y + a.m09 * z + a.m13;
            out.m14 = a.m02 * x + a.m06 * y + a.m10 * z + a.m14;
            out.m15 = a.m03 * x + a.m07 * y + a.m11 * z + a.m15;
          } else {
            var a00 = a.m00;
            var a01 = a.m01;
            var a02 = a.m02;
            var a03 = a.m03;
            var a10 = a.m04;
            var a11 = a.m05;
            var a12 = a.m06;
            var a13 = a.m07;
            var a20 = a.m08;
            var a21 = a.m09;
            var a22 = a.m10;
            var a23 = a.m11;
            out.m00 = a00;
            out.m01 = a01;
            out.m02 = a02;
            out.m03 = a03;
            out.m04 = a10;
            out.m05 = a11;
            out.m06 = a12;
            out.m07 = a13;
            out.m08 = a20;
            out.m09 = a21;
            out.m10 = a22;
            out.m11 = a23;
            out.m12 = a00 * x + a10 * y + a20 * z + a.m12;
            out.m13 = a01 * x + a11 * y + a21 * z + a.m13;
            out.m14 = a02 * x + a12 * y + a22 * z + a.m14;
            out.m15 = a03 * x + a13 * y + a23 * z + a.m15;
          }
          return out;
        }

        /**
         * @en Transform a matrix with the given translation vector and save results to the out matrix,
         * the translate is applied after the transformation, i.e. (out = T * a)
         * @zh 在给定矩阵变换基础上加入新位移变换，平移变换在变换之后应用，即 (out = T * a)
         *
         * @param out The out matrix
         * @param a The matrix to translate
         * @param v The vector to translate with
         * @deprecated Since 3.8.0, please use [[transform]] instead
         */;
        Mat4.translate = function translate(out, a, v) {
          if (a === out) {
            out.m12 += v.x;
            out.m13 += v.y;
            out.m14 += v.z;
          } else {
            out.m00 = a.m00;
            out.m01 = a.m01;
            out.m02 = a.m02;
            out.m03 = a.m03;
            out.m04 = a.m04;
            out.m05 = a.m05;
            out.m06 = a.m06;
            out.m07 = a.m07;
            out.m08 = a.m08;
            out.m09 = a.m09;
            out.m10 = a.m10;
            out.m11 = a.m11;
            out.m12 = a.m12 + v.x;
            out.m13 = a.m13 + v.y;
            out.m14 = a.m14 + v.z;
            out.m15 = a.m15;
          }
          return out;
        }

        /**
         * @en Multiply a matrix with a scale matrix given by a scale vector and save the results into the out matrix,
         * the scale is applied before the matrix, i.e. (out = a * S)
         * @zh 在给定矩阵变换基础上加入新缩放变换，并将结果保存到 out 矩阵中，缩放变换将应用在矩阵变换之前，即 (out = a * S)
         */;
        Mat4.scale = function scale(out, a, v) {
          var x = v.x;
          var y = v.y;
          var z = v.z;
          out.m00 = a.m00 * x;
          out.m01 = a.m01 * x;
          out.m02 = a.m02 * x;
          out.m03 = a.m03 * x;
          out.m04 = a.m04 * y;
          out.m05 = a.m05 * y;
          out.m06 = a.m06 * y;
          out.m07 = a.m07 * y;
          out.m08 = a.m08 * z;
          out.m09 = a.m09 * z;
          out.m10 = a.m10 * z;
          out.m11 = a.m11 * z;
          out.m12 = a.m12;
          out.m13 = a.m13;
          out.m14 = a.m14;
          out.m15 = a.m15;
          return out;
        }

        /**
         * @en Rotates the transform by the given angle and save the results into the out matrix, the rotate is applied before
         * the matrix, i.e. (out = a * R)
         * @zh 在给定矩阵变换基础上加入新旋转变换, 并将结果保存到 out 矩阵中，旋转变换将应用在矩阵变换之前，即 (out = a * R)
         * @param rad Angle of rotation (in radians)
         * @param axis axis of rotation
         */;
        Mat4.rotate = function rotate(out, a, rad, axis) {
          var x = axis.x;
          var y = axis.y;
          var z = axis.z;
          var len = Math.sqrt(x * x + y * y + z * z);
          if (Math.abs(len) < EPSILON) {
            return null;
          }
          len = 1 / len;
          x *= len;
          y *= len;
          z *= len;

          // ref: https://en.wikipedia.org/wiki/Rotation_matrix#Axis_and_angle

          var s = Math.sin(rad);
          var c = Math.cos(rad);
          var t = 1 - c;
          var a00 = a.m00;
          var a01 = a.m01;
          var a02 = a.m02;
          var a03 = a.m03;
          var a10 = a.m04;
          var a11 = a.m05;
          var a12 = a.m06;
          var a13 = a.m07;
          var a20 = a.m08;
          var a21 = a.m09;
          var a22 = a.m10;
          var a23 = a.m11;

          // Construct the elements of the rotation matrix
          var b00 = x * x * t + c;
          var b01 = y * x * t + z * s;
          var b02 = z * x * t - y * s;
          var b10 = x * y * t - z * s;
          var b11 = y * y * t + c;
          var b12 = z * y * t + x * s;
          var b20 = x * z * t + y * s;
          var b21 = y * z * t - x * s;
          var b22 = z * z * t + c;

          // Perform rotation-specific matrix multiplication
          out.m00 = a00 * b00 + a10 * b01 + a20 * b02;
          out.m01 = a01 * b00 + a11 * b01 + a21 * b02;
          out.m02 = a02 * b00 + a12 * b01 + a22 * b02;
          out.m03 = a03 * b00 + a13 * b01 + a23 * b02;
          out.m04 = a00 * b10 + a10 * b11 + a20 * b12;
          out.m05 = a01 * b10 + a11 * b11 + a21 * b12;
          out.m06 = a02 * b10 + a12 * b11 + a22 * b12;
          out.m07 = a03 * b10 + a13 * b11 + a23 * b12;
          out.m08 = a00 * b20 + a10 * b21 + a20 * b22;
          out.m09 = a01 * b20 + a11 * b21 + a21 * b22;
          out.m10 = a02 * b20 + a12 * b21 + a22 * b22;
          out.m11 = a03 * b20 + a13 * b21 + a23 * b22;

          // If the source and destination differ, copy the unchanged last row
          if (a !== out) {
            out.m12 = a.m12;
            out.m13 = a.m13;
            out.m14 = a.m14;
            out.m15 = a.m15;
          }
          return out;
        }

        /**
         * @en Transform a matrix with a given angle around X axis and save the results to the out matrix, the rotate is applied
         * before the matrix, i.e. (out = a * R)
         * @zh 在给定矩阵变换基础上加入绕 X 轴的旋转变换, 并将结果保存到 out 矩阵中，旋转变换将应用在矩阵变换之前，即 (out = a * R)
         * @param rad Angle of rotation (in radians)
         */;
        Mat4.rotateX = function rotateX(out, a, rad) {
          var s = Math.sin(rad);
          var c = Math.cos(rad);
          var a10 = a.m04;
          var a11 = a.m05;
          var a12 = a.m06;
          var a13 = a.m07;
          var a20 = a.m08;
          var a21 = a.m09;
          var a22 = a.m10;
          var a23 = a.m11;
          if (a !== out) {
            // If the source and destination differ, copy the unchanged rows
            out.m00 = a.m00;
            out.m01 = a.m01;
            out.m02 = a.m02;
            out.m03 = a.m03;
            out.m12 = a.m12;
            out.m13 = a.m13;
            out.m14 = a.m14;
            out.m15 = a.m15;
          }

          // Perform axis-specific matrix multiplication
          out.m04 = a10 * c + a20 * s;
          out.m05 = a11 * c + a21 * s;
          out.m06 = a12 * c + a22 * s;
          out.m07 = a13 * c + a23 * s;
          out.m08 = a20 * c - a10 * s;
          out.m09 = a21 * c - a11 * s;
          out.m10 = a22 * c - a12 * s;
          out.m11 = a23 * c - a13 * s;
          return out;
        }

        /**
         * @en Transform a matrix with a given angle around Y axis and save the results to the out matrix
         * @zh 在给定矩阵变换基础上加入绕 Y 轴的旋转变换
         * @param rad Angle of rotation (in radians)
         */;
        Mat4.rotateY = function rotateY(out, a, rad) {
          // ref: https://en.wikipedia.org/wiki/Rotation_matrix#Axis_and_angle

          var s = Math.sin(rad);
          var c = Math.cos(rad);
          var a00 = a.m00;
          var a01 = a.m01;
          var a02 = a.m02;
          var a03 = a.m03;
          var a20 = a.m08;
          var a21 = a.m09;
          var a22 = a.m10;
          var a23 = a.m11;
          if (a !== out) {
            // If the source and destination differ, copy the unchanged rows
            out.m04 = a.m04;
            out.m05 = a.m05;
            out.m06 = a.m06;
            out.m07 = a.m07;
            out.m12 = a.m12;
            out.m13 = a.m13;
            out.m14 = a.m14;
            out.m15 = a.m15;
          }

          // Perform axis-specific matrix multiplication
          out.m00 = a00 * c - a20 * s;
          out.m01 = a01 * c - a21 * s;
          out.m02 = a02 * c - a22 * s;
          out.m03 = a03 * c - a23 * s;
          out.m08 = a00 * s + a20 * c;
          out.m09 = a01 * s + a21 * c;
          out.m10 = a02 * s + a22 * c;
          out.m11 = a03 * s + a23 * c;
          return out;
        }

        /**
         * @en Transform a matrix with a given angle around Z axis and save the results to the out matrix
         * @zh 在给定矩阵变换基础上加入绕 Z 轴的旋转变换
         * @param rad Angle of rotation (in radians)
         */;
        Mat4.rotateZ = function rotateZ(out, a, rad) {
          // ref: https://en.wikipedia.org/wiki/Rotation_matrix#Axis_and_angle

          var s = Math.sin(rad);
          var c = Math.cos(rad);
          var a00 = a.m00;
          var a01 = a.m01;
          var a02 = a.m02;
          var a03 = a.m03;
          var a10 = a.m04;
          var a11 = a.m05;
          var a12 = a.m06;
          var a13 = a.m07;

          // If the source and destination differ, copy the unchanged last row
          if (a !== out) {
            out.m08 = a.m08;
            out.m09 = a.m09;
            out.m10 = a.m10;
            out.m11 = a.m11;
            out.m12 = a.m12;
            out.m13 = a.m13;
            out.m14 = a.m14;
            out.m15 = a.m15;
          }

          // Perform axis-specific matrix multiplication
          out.m00 = a00 * c + a10 * s;
          out.m01 = a01 * c + a11 * s;
          out.m02 = a02 * c + a12 * s;
          out.m03 = a03 * c + a13 * s;
          out.m04 = a10 * c - a00 * s;
          out.m05 = a11 * c - a01 * s;
          out.m06 = a12 * c - a02 * s;
          out.m07 = a13 * c - a03 * s;
          return out;
        }

        /**
         * @en Sets the out matrix with a translation vector
         * @zh 计算位移矩阵
         */;
        Mat4.fromTranslation = function fromTranslation(out, v) {
          out.m00 = 1;
          out.m01 = 0;
          out.m02 = 0;
          out.m03 = 0;
          out.m04 = 0;
          out.m05 = 1;
          out.m06 = 0;
          out.m07 = 0;
          out.m08 = 0;
          out.m09 = 0;
          out.m10 = 1;
          out.m11 = 0;
          out.m12 = v.x;
          out.m13 = v.y;
          out.m14 = v.z;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Sets the out matrix with a scale vector
         * @zh 计算缩放矩阵
         */;
        Mat4.fromScaling = function fromScaling(out, v) {
          out.m00 = v.x;
          out.m01 = 0;
          out.m02 = 0;
          out.m03 = 0;
          out.m04 = 0;
          out.m05 = v.y;
          out.m06 = 0;
          out.m07 = 0;
          out.m08 = 0;
          out.m09 = 0;
          out.m10 = v.z;
          out.m11 = 0;
          out.m12 = 0;
          out.m13 = 0;
          out.m14 = 0;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Sets the out matrix with rotation angle
         * @zh 计算旋转矩阵
         */;
        Mat4.fromRotation = function fromRotation(out, rad, axis) {
          var x = axis.x;
          var y = axis.y;
          var z = axis.z;
          var len = Math.sqrt(x * x + y * y + z * z);
          if (Math.abs(len) < EPSILON) {
            return null;
          }
          len = 1 / len;
          x *= len;
          y *= len;
          z *= len;
          var s = Math.sin(rad);
          var c = Math.cos(rad);
          var t = 1 - c;

          // Perform rotation-specific matrix multiplication
          out.m00 = x * x * t + c;
          out.m01 = y * x * t + z * s;
          out.m02 = z * x * t - y * s;
          out.m03 = 0;
          out.m04 = x * y * t - z * s;
          out.m05 = y * y * t + c;
          out.m06 = z * y * t + x * s;
          out.m07 = 0;
          out.m08 = x * z * t + y * s;
          out.m09 = y * z * t - x * s;
          out.m10 = z * z * t + c;
          out.m11 = 0;
          out.m12 = 0;
          out.m13 = 0;
          out.m14 = 0;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Calculates the matrix representing a rotation around the X axis
         * @zh 计算绕 X 轴的旋转矩阵
         */;
        Mat4.fromXRotation = function fromXRotation(out, rad) {
          var s = Math.sin(rad);
          var c = Math.cos(rad);

          // Perform axis-specific matrix multiplication
          out.m00 = 1;
          out.m01 = 0;
          out.m02 = 0;
          out.m03 = 0;
          out.m04 = 0;
          out.m05 = c;
          out.m06 = s;
          out.m07 = 0;
          out.m08 = 0;
          out.m09 = -s;
          out.m10 = c;
          out.m11 = 0;
          out.m12 = 0;
          out.m13 = 0;
          out.m14 = 0;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Calculates the matrix representing a rotation around the Y axis
         * @zh 计算绕 Y 轴的旋转矩阵
         */;
        Mat4.fromYRotation = function fromYRotation(out, rad) {
          var s = Math.sin(rad);
          var c = Math.cos(rad);

          // Perform axis-specific matrix multiplication
          out.m00 = c;
          out.m01 = 0;
          out.m02 = -s;
          out.m03 = 0;
          out.m04 = 0;
          out.m05 = 1;
          out.m06 = 0;
          out.m07 = 0;
          out.m08 = s;
          out.m09 = 0;
          out.m10 = c;
          out.m11 = 0;
          out.m12 = 0;
          out.m13 = 0;
          out.m14 = 0;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Calculates the matrix representing a rotation around the Z axis
         * @zh 计算绕 Z 轴的旋转矩阵
         */;
        Mat4.fromZRotation = function fromZRotation(out, rad) {
          var s = Math.sin(rad);
          var c = Math.cos(rad);

          // Perform axis-specific matrix multiplication
          out.m00 = c;
          out.m01 = s;
          out.m02 = 0;
          out.m03 = 0;
          out.m04 = -s;
          out.m05 = c;
          out.m06 = 0;
          out.m07 = 0;
          out.m08 = 0;
          out.m09 = 0;
          out.m10 = 1;
          out.m11 = 0;
          out.m12 = 0;
          out.m13 = 0;
          out.m14 = 0;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Calculates the transform representing the combination of a rotation and a translation, and stores the result in out.
         * The order is rotation then translation.
         * @zh 根据旋转和位移信息计算矩阵
         */;
        Mat4.fromRT = function fromRT(out, q, v) {
          var x = q.x;
          var y = q.y;
          var z = q.z;
          var w = q.w;
          var x2 = x + x;
          var y2 = y + y;
          var z2 = z + z;

          // ref: https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation#Conversion_to_and_from_the_matrix_representation

          var xx = x * x2;
          var xy = x * y2;
          var xz = x * z2;
          var yy = y * y2;
          var yz = y * z2;
          var zz = z * z2;
          var wx = w * x2;
          var wy = w * y2;
          var wz = w * z2;
          out.m00 = 1 - (yy + zz);
          out.m01 = xy + wz;
          out.m02 = xz - wy;
          out.m03 = 0;
          out.m04 = xy - wz;
          out.m05 = 1 - (xx + zz);
          out.m06 = yz + wx;
          out.m07 = 0;
          out.m08 = xz + wy;
          out.m09 = yz - wx;
          out.m10 = 1 - (xx + yy);
          out.m11 = 0;
          out.m12 = v.x;
          out.m13 = v.y;
          out.m14 = v.z;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Extracts the translation from the matrix, assuming it's composed in order of scale, rotation, translation
         * @zh 提取矩阵的位移信息, 默认矩阵中的变换以 S->R->T 的顺序应用
         */;
        Mat4.getTranslation = function getTranslation(out, mat) {
          out.x = mat.m12;
          out.y = mat.m13;
          out.z = mat.m14;
          return out;
        }

        /**
         * @en Extracts the scale vector from the matrix, assuming it's composed in order of scale, rotation, translation
         * @zh 提取矩阵的缩放信息, 默认矩阵中的变换以 S->R->T 的顺序应用
         */;
        Mat4.getScaling = function getScaling(out, mat) {
          var m00 = m3_1.m00 = mat.m00;
          var m01 = m3_1.m01 = mat.m01;
          var m02 = m3_1.m02 = mat.m02;
          var m04 = m3_1.m03 = mat.m04;
          var m05 = m3_1.m04 = mat.m05;
          var m06 = m3_1.m05 = mat.m06;
          var m08 = m3_1.m06 = mat.m08;
          var m09 = m3_1.m07 = mat.m09;
          var m10 = m3_1.m08 = mat.m10;
          out.x = Math.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
          out.y = Math.sqrt(m04 * m04 + m05 * m05 + m06 * m06);
          out.z = Math.sqrt(m08 * m08 + m09 * m09 + m10 * m10);
          // account for refections
          if (Mat3.determinant(m3_1) < 0) {
            out.x *= -1;
          }
          return out;
        }

        /**
         * @en Extracts the rotation from the matrix, assuming it's composed in order of scale, rotation, translation
         * @zh 提取矩阵的旋转信息, 默认输入矩阵不含有缩放信息，如考虑缩放应使用 `toRTS` 函数。
         */;
        Mat4.getRotation = function getRotation(out, mat) {
          var trace = mat.m00 + mat.m05 + mat.m10;
          var S = 0;
          if (trace > 0) {
            S = Math.sqrt(trace + 1.0) * 2;
            out.w = 0.25 * S;
            out.x = (mat.m06 - mat.m09) / S;
            out.y = (mat.m08 - mat.m02) / S;
            out.z = (mat.m01 - mat.m04) / S;
          } else if (mat.m00 > mat.m05 && mat.m00 > mat.m10) {
            S = Math.sqrt(1.0 + mat.m00 - mat.m05 - mat.m10) * 2;
            out.w = (mat.m06 - mat.m09) / S;
            out.x = 0.25 * S;
            out.y = (mat.m01 + mat.m04) / S;
            out.z = (mat.m08 + mat.m02) / S;
          } else if (mat.m05 > mat.m10) {
            S = Math.sqrt(1.0 + mat.m05 - mat.m00 - mat.m10) * 2;
            out.w = (mat.m08 - mat.m02) / S;
            out.x = (mat.m01 + mat.m04) / S;
            out.y = 0.25 * S;
            out.z = (mat.m06 + mat.m09) / S;
          } else {
            S = Math.sqrt(1.0 + mat.m10 - mat.m00 - mat.m05) * 2;
            out.w = (mat.m01 - mat.m04) / S;
            out.x = (mat.m08 + mat.m02) / S;
            out.y = (mat.m06 + mat.m09) / S;
            out.z = 0.25 * S;
          }
          return out;
        }

        /**
         * @en Extracts the scale, rotation and translation from the matrix, assuming it's composed in order of scale, rotation, translation
         * @zh 提取旋转、位移、缩放信息， 默认矩阵中的变换以 S->R->T 的顺序应用
         *
         * @param m The input transform matrix
         * @param q The corresponding rotation quat
         * @param v The corresponding translate vector
         * @param s The corresponding scaling vector
         *
         * @deprecated Since 3.8.0, please use toSRT instead
         */;
        Mat4.toRTS = function toRTS(m, q, v, s) {
          var sx = Vec3.set(v3_1, m.m00, m.m01, m.m02).length();
          var sy = Vec3.set(v3_1, m.m04, m.m05, m.m06).length();
          var sz = Vec3.set(v3_1, m.m08, m.m09, m.m10).length();
          m3_1.m00 = m.m00 / sx;
          m3_1.m01 = m.m01 / sx;
          m3_1.m02 = m.m02 / sx;
          m3_1.m03 = m.m04 / sy;
          m3_1.m04 = m.m05 / sy;
          m3_1.m05 = m.m06 / sy;
          m3_1.m06 = m.m08 / sz;
          m3_1.m07 = m.m09 / sz;
          m3_1.m08 = m.m10 / sz;
          var det = Mat3.determinant(m3_1);
          if (s) {
            Vec3.set(s, sx, sy, sz);
            if (det < 0) {
              s.x *= -1;
            }
          }
          if (v) {
            Vec3.set(v, m.m12, m.m13, m.m14);
          }
          if (q) {
            if (det < 0) {
              m3_1.m00 *= -1;
              m3_1.m01 *= -1;
              m3_1.m02 *= -1;
            }
            Quat.fromMat3(q, m3_1);
          }
        }

        /**
         * @en Extracts the scale, rotation and translation from the matrix, assuming it's composed in order of scale, rotation, translation
         * @zh 提取旋转、位移、缩放信息， 默认矩阵中的变换以 S->R->T 的顺序应用
         *
         * @param m The input transform matrix
         * @param q The corresponding rotation quat
         * @param v The corresponding translate vector
         * @param s The corresponding scaling vector
         */;
        Mat4.toSRT = function toSRT(m, q, v, s) {
          var sx = Vec3.set(v3_1, m.m00, m.m01, m.m02).length();
          var sy = Vec3.set(v3_1, m.m04, m.m05, m.m06).length();
          var sz = Vec3.set(v3_1, m.m08, m.m09, m.m10).length();
          if (s) {
            s.x = sx;
            s.y = sy;
            s.z = sz;
          }
          if (v) {
            Vec3.set(v, m.m12, m.m13, m.m14);
          }
          if (q) {
            m3_1.m00 = m.m00 / sx;
            m3_1.m01 = m.m01 / sx;
            m3_1.m02 = m.m02 / sx;
            m3_1.m03 = m.m04 / sy;
            m3_1.m04 = m.m05 / sy;
            m3_1.m05 = m.m06 / sy;
            m3_1.m06 = m.m08 / sz;
            m3_1.m07 = m.m09 / sz;
            m3_1.m08 = m.m10 / sz;
            var det = Mat3.determinant(m3_1);
            if (det < 0) {
              if (s) s.x *= -1;
              m3_1.m00 *= -1;
              m3_1.m01 *= -1;
              m3_1.m02 *= -1;
            }
            Quat.fromMat3(q, m3_1); // already normalized
          }
        }

        /**
         * @en Convert Matrix to euler angle, resulting angle y, z in the range of [-PI, PI],
         *  x in the range of [-PI/2, PI/2], the rotation order is YXZ.
         * @zh 将矩阵转换为欧拉角，结果角度 y, z 在 [-PI, PI] 范围内，x 在 [-PI/2, PI/2] 区间内，旋转顺序为 YXZ.
         */;
        Mat4.toEuler = function toEuler(m, v) {
          Mat3.set(m3_1, m.m00, m.m01, m.m02, m.m04, m.m05, m.m06, m.m08, m.m09, m.m10);
          return Mat3.toEuler(m3_1, v);
        }

        /**
         * @en Compose a matrix from scale, rotation and translation, applied in order.
         * @zh 根据旋转、位移、缩放信息计算矩阵，以 S->R->T 的顺序应用
         * @deprecated Since 3.8.0, please use [[fromSRT]] instead.
         */;
        Mat4.fromRTS = function fromRTS(out, q, v, s) {
          var x = q.x;
          var y = q.y;
          var z = q.z;
          var w = q.w;
          var x2 = x + x;
          var y2 = y + y;
          var z2 = z + z;
          var xx = x * x2;
          var xy = x * y2;
          var xz = x * z2;
          var yy = y * y2;
          var yz = y * z2;
          var zz = z * z2;
          var wx = w * x2;
          var wy = w * y2;
          var wz = w * z2;
          var sx = s.x;
          var sy = s.y;
          var sz = s.z;
          out.m00 = (1 - (yy + zz)) * sx;
          out.m01 = (xy + wz) * sx;
          out.m02 = (xz - wy) * sx;
          out.m03 = 0;
          out.m04 = (xy - wz) * sy;
          out.m05 = (1 - (xx + zz)) * sy;
          out.m06 = (yz + wx) * sy;
          out.m07 = 0;
          out.m08 = (xz + wy) * sz;
          out.m09 = (yz - wx) * sz;
          out.m10 = (1 - (xx + yy)) * sz;
          out.m11 = 0;
          out.m12 = v.x;
          out.m13 = v.y;
          out.m14 = v.z;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Compose a matrix from scale, rotation and translation, applied in order.
         * @zh 根据旋转、位移、缩放信息计算矩阵，以 S->R->T 的顺序应用
         * @param out The receiving matrix
         * @param q Rotation quaternion
         * @param v Translation vector
         * @param s Scaling vector
         * @returns The receiving matrix
         */;
        Mat4.fromSRT = function fromSRT(out, q, v, s) {
          var x = q.x;
          var y = q.y;
          var z = q.z;
          var w = q.w;
          var x2 = x + x;
          var y2 = y + y;
          var z2 = z + z;
          var xx = x * x2;
          var xy = x * y2;
          var xz = x * z2;
          var yy = y * y2;
          var yz = y * z2;
          var zz = z * z2;
          var wx = w * x2;
          var wy = w * y2;
          var wz = w * z2;
          var sx = s.x;
          var sy = s.y;
          var sz = s.z;
          out.m00 = (1 - (yy + zz)) * sx;
          out.m01 = (xy + wz) * sx;
          out.m02 = (xz - wy) * sx;
          out.m03 = 0;
          out.m04 = (xy - wz) * sy;
          out.m05 = (1 - (xx + zz)) * sy;
          out.m06 = (yz + wx) * sy;
          out.m07 = 0;
          out.m08 = (xz + wy) * sz;
          out.m09 = (yz - wx) * sz;
          out.m10 = (1 - (xx + yy)) * sz;
          out.m11 = 0;
          out.m12 = v.x;
          out.m13 = v.y;
          out.m14 = v.z;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Compose a matrix from scale, rotation and translation, applied in order, from a given origin
         * @zh 根据指定的旋转、位移、缩放及变换中心信息计算矩阵，以 S->R->T 的顺序应用
         * @param q Rotation quaternion
         * @param v Translation vector
         * @param s Scaling vector
         * @param o transformation Center
         * @deprecated Please use [[fromSRTOrigin]] instead.
         */;
        Mat4.fromRTSOrigin = function fromRTSOrigin(out, q, v, s, o) {
          var x = q.x;
          var y = q.y;
          var z = q.z;
          var w = q.w;
          var x2 = x + x;
          var y2 = y + y;
          var z2 = z + z;
          var xx = x * x2;
          var xy = x * y2;
          var xz = x * z2;
          var yy = y * y2;
          var yz = y * z2;
          var zz = z * z2;
          var wx = w * x2;
          var wy = w * y2;
          var wz = w * z2;
          var sx = s.x;
          var sy = s.y;
          var sz = s.z;
          var ox = o.x;
          var oy = o.y;
          var oz = o.z;
          out.m00 = (1 - (yy + zz)) * sx;
          out.m01 = (xy + wz) * sx;
          out.m02 = (xz - wy) * sx;
          out.m03 = 0;
          out.m04 = (xy - wz) * sy;
          out.m05 = (1 - (xx + zz)) * sy;
          out.m06 = (yz + wx) * sy;
          out.m07 = 0;
          out.m08 = (xz + wy) * sz;
          out.m09 = (yz - wx) * sz;
          out.m10 = (1 - (xx + yy)) * sz;
          out.m11 = 0;
          out.m12 = v.x + ox - (out.m00 * ox + out.m04 * oy + out.m08 * oz);
          out.m13 = v.y + oy - (out.m01 * ox + out.m05 * oy + out.m09 * oz);
          out.m14 = v.z + oz - (out.m02 * ox + out.m06 * oy + out.m10 * oz);
          out.m15 = 1;
          return out;
        }

        /**
         * @en Compose a matrix from scale, rotation and translation, applied in order, from a given origin
         * @zh 根据指定的旋转、位移、缩放及变换中心信息计算矩阵，以 O^{-1}->S->R->O->T 的顺序应用
         * @param out The receiving matrix
         * @param q Rotation quaternion
         * @param v Translation vector
         * @param s Scaling vector
         * @param o transformation Center
         * @returns The receiving matrix
         */;
        Mat4.fromSRTOrigin = function fromSRTOrigin(out, q, v, s, o) {
          var x = q.x;
          var y = q.y;
          var z = q.z;
          var w = q.w;
          var x2 = x + x;
          var y2 = y + y;
          var z2 = z + z;
          var xx = x * x2;
          var xy = x * y2;
          var xz = x * z2;
          var yy = y * y2;
          var yz = y * z2;
          var zz = z * z2;
          var wx = w * x2;
          var wy = w * y2;
          var wz = w * z2;
          var sx = s.x;
          var sy = s.y;
          var sz = s.z;
          var ox = o.x;
          var oy = o.y;
          var oz = o.z;
          out.m00 = (1 - (yy + zz)) * sx;
          out.m01 = (xy + wz) * sx;
          out.m02 = (xz - wy) * sx;
          out.m03 = 0;
          out.m04 = (xy - wz) * sy;
          out.m05 = (1 - (xx + zz)) * sy;
          out.m06 = (yz + wx) * sy;
          out.m07 = 0;
          out.m08 = (xz + wy) * sz;
          out.m09 = (yz - wx) * sz;
          out.m10 = (1 - (xx + yy)) * sz;
          out.m11 = 0;
          out.m12 = v.x + ox - (out.m00 * ox + out.m04 * oy + out.m08 * oz);
          out.m13 = v.y + oy - (out.m01 * ox + out.m05 * oy + out.m09 * oz);
          out.m14 = v.z + oz - (out.m02 * ox + out.m06 * oy + out.m10 * oz);
          out.m15 = 1;
          return out;
        }

        /**
         * @en Sets the out matrix with the given quaternion
         * @zh 根据指定的旋转信息计算矩阵
         */;
        Mat4.fromQuat = function fromQuat(out, q) {
          var x = q.x;
          var y = q.y;
          var z = q.z;
          var w = q.w;
          var x2 = x + x;
          var y2 = y + y;
          var z2 = z + z;
          var xx = x * x2;
          var yx = y * x2;
          var yy = y * y2;
          var zx = z * x2;
          var zy = z * y2;
          var zz = z * z2;
          var wx = w * x2;
          var wy = w * y2;
          var wz = w * z2;
          out.m00 = 1 - yy - zz;
          out.m01 = yx + wz;
          out.m02 = zx - wy;
          out.m03 = 0;
          out.m04 = yx - wz;
          out.m05 = 1 - xx - zz;
          out.m06 = zy + wx;
          out.m07 = 0;
          out.m08 = zx + wy;
          out.m09 = zy - wx;
          out.m10 = 1 - xx - yy;
          out.m11 = 0;
          out.m12 = 0;
          out.m13 = 0;
          out.m14 = 0;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Calculates the matrix representing the given frustum
         * @zh 根据指定的视锥体信息计算矩阵
         * @param out The receiving matrix.
         * @param left The X coordinate of the left side of the near projection plane in view space.
         * @param right The X coordinate of the right side of the near projection plane in view space.
         * @param bottom The Y coordinate of the bottom side of the near projection plane in view space.
         * @param top The Y coordinate of the top side of the near projection plane in view space.
         * @param near Z distance to the near plane from the origin in view space.
         * @param far Z distance to the far plane from the origin in view space.
         *
         * @return The receiving matrix.
         */;
        Mat4.frustum = function frustum(out, left, right, bottom, top, near, far) {
          var rl = 1 / (right - left);
          var tb = 1 / (top - bottom);
          var nf = 1 / (near - far);
          out.m00 = near * 2 * rl;
          out.m01 = 0;
          out.m02 = 0;
          out.m03 = 0;
          out.m04 = 0;
          out.m05 = near * 2 * tb;
          out.m06 = 0;
          out.m07 = 0;
          out.m08 = (right + left) * rl;
          out.m09 = (top + bottom) * tb;
          out.m10 = (far + near) * nf;
          out.m11 = -1;
          out.m12 = 0;
          out.m13 = 0;
          out.m14 = far * near * 2 * nf;
          out.m15 = 0;
          return out;
        }

        /**
         * @en Calculates perspective projection matrix
         * @zh 计算透视投影矩阵
         * @param out The receiving matrix.
         * @param fovy Vertical field-of-view in degrees.
         * @param aspect Aspect ratio
         * @param near Near depth clipping plane value.
         * @param far Far depth clipping plane value.
         * @param isFOVY Whether the fovy is based on the vertical field-of-view.
         * @param minClipZ The minimum value of the near clipping plane, e.g. -1 for OpenGL, 0 for Vulkan and Metal.
         * @param projectionSignY The sign of the Y axis of the projection matrix, which is used to flip the Y axis.
         * @param orientation The orientation of the projection matrix, which is used to rotate the projection matrix.
         *
         * @return The receiving matrix.
         */;
        Mat4.perspective = function perspective(out, fov, aspect, near, far, isFOVY, minClipZ, projectionSignY, orientation) {
          if (isFOVY === void 0) {
            isFOVY = true;
          }
          if (minClipZ === void 0) {
            minClipZ = -1;
          }
          if (projectionSignY === void 0) {
            projectionSignY = 1;
          }
          if (orientation === void 0) {
            orientation = 0;
          }
          var f = 1.0 / Math.tan(fov / 2);
          var nf = 1 / (near - far);
          var x = isFOVY ? f / aspect : f;
          var y = (isFOVY ? f : f * aspect) * projectionSignY;
          var preTransform = preTransforms[orientation];
          out.m00 = x * preTransform[0];
          out.m01 = x * preTransform[1];
          out.m02 = 0;
          out.m03 = 0;
          out.m04 = y * preTransform[2];
          out.m05 = y * preTransform[3];
          out.m06 = 0;
          out.m07 = 0;
          out.m08 = 0;
          out.m09 = 0;
          out.m10 = (far - minClipZ * near) * nf;
          out.m11 = -1;
          out.m12 = 0;
          out.m13 = 0;
          out.m14 = far * near * nf * (1 - minClipZ);
          out.m15 = 0;
          return out;
        }

        /**
         * @en Calculates orthogonal projection matrix
         * @zh 计算正交投影矩阵
         * @param out The receiving matrix.
         * @param left Left-side x-coordinate.
         * @param right Right-side x-coordinate.
         * @param bottom Bottom y-coordinate.
         * @param top Top y-coordinate.
         * @param near Near depth clipping plane value.
         * @param far Far depth clipping plane value.
         * @param minClipZ The minimum value of the near clipping plane, e.g. -1 for OpenGL, 0 for Vulkan and Metal.
         * @param projectionSignY The sign of the Y axis of the projection matrix, which is used to flip the Y axis.
         * @param orientation The orientation of the projection matrix, which is used to rotate the projection matrix.
         *
         * @return The receiving matrix.
         */;
        Mat4.ortho = function ortho(out, left, right, bottom, top, near, far, minClipZ, projectionSignY, orientation) {
          if (minClipZ === void 0) {
            minClipZ = -1;
          }
          if (projectionSignY === void 0) {
            projectionSignY = 1;
          }
          if (orientation === void 0) {
            orientation = 0;
          }
          var lr = 1 / (left - right);
          var bt = 1 / (bottom - top) * projectionSignY;
          var nf = 1 / (near - far);
          var x = -2 * lr;
          var y = -2 * bt;
          var dx = (left + right) * lr;
          var dy = (top + bottom) * bt;
          var preTransform = preTransforms[orientation];
          out.m00 = x * preTransform[0];
          out.m01 = x * preTransform[1];
          out.m02 = 0;
          out.m03 = 0;
          out.m04 = y * preTransform[2];
          out.m05 = y * preTransform[3];
          out.m06 = 0;
          out.m07 = 0;
          out.m08 = 0;
          out.m09 = 0;
          out.m10 = nf * (1 - minClipZ);
          out.m11 = 0;
          out.m12 = dx * preTransform[0] + dy * preTransform[2];
          out.m13 = dx * preTransform[1] + dy * preTransform[3];
          out.m14 = (near - minClipZ * far) * nf;
          out.m15 = 1;
          return out;
        }

        /**
         * @en
         * Calculates the matrix with the view point information, given by eye position, target center and the up vector.
         * Note that center to eye vector can't be zero or parallel to the up vector
         * @zh
         * 计算视图矩阵，给定眼睛位置、目标中心和上向量。注意，中心到眼睛向量不能为零或与上向量平行。
         * @out The receiving matrix.
         * @param eye The source point.
         * @param center The target point.
         * @param up The vector describing the up direction.
         * @return The receiving matrix.
         */;
        Mat4.lookAt = function lookAt(out, eye, center, up) {
          var eyex = eye.x;
          var eyey = eye.y;
          var eyez = eye.z;
          var upx = up.x;
          var upy = up.y;
          var upz = up.z;
          var centerx = center.x;
          var centery = center.y;
          var centerz = center.z;
          var z0 = eyex - centerx;
          var z1 = eyey - centery;
          var z2 = eyez - centerz;
          var len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
          z0 *= len;
          z1 *= len;
          z2 *= len;
          var x0 = upy * z2 - upz * z1;
          var x1 = upz * z0 - upx * z2;
          var x2 = upx * z1 - upy * z0;
          len = 1 / Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
          x0 *= len;
          x1 *= len;
          x2 *= len;
          var y0 = z1 * x2 - z2 * x1;
          var y1 = z2 * x0 - z0 * x2;
          var y2 = z0 * x1 - z1 * x0;
          out.m00 = x0;
          out.m01 = y0;
          out.m02 = z0;
          out.m03 = 0;
          out.m04 = x1;
          out.m05 = y1;
          out.m06 = z1;
          out.m07 = 0;
          out.m08 = x2;
          out.m09 = y2;
          out.m10 = z2;
          out.m11 = 0;
          out.m12 = -(x0 * eyex + x1 * eyey + x2 * eyez);
          out.m13 = -(y0 * eyex + y1 * eyey + y2 * eyez);
          out.m14 = -(z0 * eyex + z1 * eyey + z2 * eyez);
          out.m15 = 1;
          return out;
        }

        /**
         * @en Calculates the inverse transpose of a matrix and save the results to out matrix
         * @zh 计算逆转置矩阵
         *
         * @deprecated This function is too complicated, and should be split into several functions.
         */;
        Mat4.inverseTranspose = function inverseTranspose(out, a) {
          var a00 = a.m00;
          var a01 = a.m01;
          var a02 = a.m02;
          var a03 = a.m03;
          var a10 = a.m04;
          var a11 = a.m05;
          var a12 = a.m06;
          var a13 = a.m07;
          var a20 = a.m08;
          var a21 = a.m09;
          var a22 = a.m10;
          var a23 = a.m11;
          var a30 = a.m12;
          var a31 = a.m13;
          var a32 = a.m14;
          var a33 = a.m15;
          var b00 = a00 * a11 - a01 * a10;
          var b01 = a00 * a12 - a02 * a10;
          var b02 = a00 * a13 - a03 * a10;
          var b03 = a01 * a12 - a02 * a11;
          var b04 = a01 * a13 - a03 * a11;
          var b05 = a02 * a13 - a03 * a12;
          var b06 = a20 * a31 - a21 * a30;
          var b07 = a20 * a32 - a22 * a30;
          var b08 = a20 * a33 - a23 * a30;
          var b09 = a21 * a32 - a22 * a31;
          var b10 = a21 * a33 - a23 * a31;
          var b11 = a22 * a33 - a23 * a32;

          // Calculate the determinant
          var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
          if (!det) {
            return null;
          }
          det = 1.0 / det;
          out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
          out.m01 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
          out.m02 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
          out.m03 = 0;
          out.m04 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
          out.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
          out.m06 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
          out.m07 = 0;
          out.m08 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
          out.m09 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
          out.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
          out.m11 = 0;
          out.m12 = 0;
          out.m13 = 0;
          out.m14 = 0;
          out.m15 = 1;
          return out;
        }

        /**
         * @en Transform a matrix object to a flat array
         * @zh 矩阵转数组
         * @param ofs Array Start Offset
         */;
        Mat4.toArray = function toArray(out, m, ofs) {
          if (ofs === void 0) {
            ofs = 0;
          }
          out[ofs + 0] = m.m00;
          out[ofs + 1] = m.m01;
          out[ofs + 2] = m.m02;
          out[ofs + 3] = m.m03;
          out[ofs + 4] = m.m04;
          out[ofs + 5] = m.m05;
          out[ofs + 6] = m.m06;
          out[ofs + 7] = m.m07;
          out[ofs + 8] = m.m08;
          out[ofs + 9] = m.m09;
          out[ofs + 10] = m.m10;
          out[ofs + 11] = m.m11;
          out[ofs + 12] = m.m12;
          out[ofs + 13] = m.m13;
          out[ofs + 14] = m.m14;
          out[ofs + 15] = m.m15;
          return out;
        }

        /**
         * @en Generates or sets a matrix with a flat array
         * @zh 数组转矩阵
         * @param ofs Array Start Offset
         */;
        Mat4.fromArray = function fromArray(out, arr, ofs) {
          if (ofs === void 0) {
            ofs = 0;
          }
          out.m00 = arr[ofs + 0];
          out.m01 = arr[ofs + 1];
          out.m02 = arr[ofs + 2];
          out.m03 = arr[ofs + 3];
          out.m04 = arr[ofs + 4];
          out.m05 = arr[ofs + 5];
          out.m06 = arr[ofs + 6];
          out.m07 = arr[ofs + 7];
          out.m08 = arr[ofs + 8];
          out.m09 = arr[ofs + 9];
          out.m10 = arr[ofs + 10];
          out.m11 = arr[ofs + 11];
          out.m12 = arr[ofs + 12];
          out.m13 = arr[ofs + 13];
          out.m14 = arr[ofs + 14];
          out.m15 = arr[ofs + 15];
          return out;
        }

        /**
         * @en Adds two matrices and save the results to out matrix
         * @zh 逐元素矩阵加法
         */;
        Mat4.add = function add(out, a, b) {
          out.m00 = a.m00 + b.m00;
          out.m01 = a.m01 + b.m01;
          out.m02 = a.m02 + b.m02;
          out.m03 = a.m03 + b.m03;
          out.m04 = a.m04 + b.m04;
          out.m05 = a.m05 + b.m05;
          out.m06 = a.m06 + b.m06;
          out.m07 = a.m07 + b.m07;
          out.m08 = a.m08 + b.m08;
          out.m09 = a.m09 + b.m09;
          out.m10 = a.m10 + b.m10;
          out.m11 = a.m11 + b.m11;
          out.m12 = a.m12 + b.m12;
          out.m13 = a.m13 + b.m13;
          out.m14 = a.m14 + b.m14;
          out.m15 = a.m15 + b.m15;
          return out;
        }

        /**
         * @en Subtracts matrix b from matrix a and save the results to out matrix
         * @zh 逐元素矩阵减法
         */;
        Mat4.subtract = function subtract(out, a, b) {
          out.m00 = a.m00 - b.m00;
          out.m01 = a.m01 - b.m01;
          out.m02 = a.m02 - b.m02;
          out.m03 = a.m03 - b.m03;
          out.m04 = a.m04 - b.m04;
          out.m05 = a.m05 - b.m05;
          out.m06 = a.m06 - b.m06;
          out.m07 = a.m07 - b.m07;
          out.m08 = a.m08 - b.m08;
          out.m09 = a.m09 - b.m09;
          out.m10 = a.m10 - b.m10;
          out.m11 = a.m11 - b.m11;
          out.m12 = a.m12 - b.m12;
          out.m13 = a.m13 - b.m13;
          out.m14 = a.m14 - b.m14;
          out.m15 = a.m15 - b.m15;
          return out;
        }

        /**
         * @en Multiply each element of a matrix by a scalar number and save the results to out matrix
         * @zh 矩阵标量乘法
         */;
        Mat4.multiplyScalar = function multiplyScalar(out, a, b) {
          out.m00 = a.m00 * b;
          out.m01 = a.m01 * b;
          out.m02 = a.m02 * b;
          out.m03 = a.m03 * b;
          out.m04 = a.m04 * b;
          out.m05 = a.m05 * b;
          out.m06 = a.m06 * b;
          out.m07 = a.m07 * b;
          out.m08 = a.m08 * b;
          out.m09 = a.m09 * b;
          out.m10 = a.m10 * b;
          out.m11 = a.m11 * b;
          out.m12 = a.m12 * b;
          out.m13 = a.m13 * b;
          out.m14 = a.m14 * b;
          out.m15 = a.m15 * b;
          return out;
        }

        /**
         * @en Adds two matrices after multiplying each element of the second operand by a scalar number. And save the results to out matrix.
         * @zh 逐元素矩阵标量乘加: A + B * scale
         */;
        Mat4.multiplyScalarAndAdd = function multiplyScalarAndAdd(out, a, b, scale) {
          out.m00 = a.m00 + b.m00 * scale;
          out.m01 = a.m01 + b.m01 * scale;
          out.m02 = a.m02 + b.m02 * scale;
          out.m03 = a.m03 + b.m03 * scale;
          out.m04 = a.m04 + b.m04 * scale;
          out.m05 = a.m05 + b.m05 * scale;
          out.m06 = a.m06 + b.m06 * scale;
          out.m07 = a.m07 + b.m07 * scale;
          out.m08 = a.m08 + b.m08 * scale;
          out.m09 = a.m09 + b.m09 * scale;
          out.m10 = a.m10 + b.m10 * scale;
          out.m11 = a.m11 + b.m11 * scale;
          out.m12 = a.m12 + b.m12 * scale;
          out.m13 = a.m13 + b.m13 * scale;
          out.m14 = a.m14 + b.m14 * scale;
          out.m15 = a.m15 + b.m15 * scale;
          return out;
        }

        /**
         * @en Returns whether the specified matrices are equal.
         * @zh 矩阵等价判断
         */;
        Mat4.strictEquals = function strictEquals(a, b) {
          return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05 && a.m06 === b.m06 && a.m07 === b.m07 && a.m08 === b.m08 && a.m09 === b.m09 && a.m10 === b.m10 && a.m11 === b.m11 && a.m12 === b.m12 && a.m13 === b.m13 && a.m14 === b.m14 && a.m15 === b.m15;
        }

        /**
         * @en Returns whether the specified matrices are approximately equal.
         * @zh 排除浮点数误差的矩阵近似等价判断
         *
         * @param a The first matrix to be compared.
         * @param b The second matrix to be compared.
         * @param epsilon The tolerance value.
         * @return
         */;
        Mat4.equals = function equals(a, b, epsilon) {
          if (epsilon === void 0) {
            epsilon = EPSILON;
          }
          // TAOCP vol.2, 3rd ed., s.4.2.4, p.213-225
          // defines a 'close enough' relationship between u and v that scales for magnitude
          return Math.abs(a.m00 - b.m00) <= epsilon * Math.max(1.0, Math.abs(a.m00), Math.abs(b.m00)) && Math.abs(a.m01 - b.m01) <= epsilon * Math.max(1.0, Math.abs(a.m01), Math.abs(b.m01)) && Math.abs(a.m02 - b.m02) <= epsilon * Math.max(1.0, Math.abs(a.m02), Math.abs(b.m02)) && Math.abs(a.m03 - b.m03) <= epsilon * Math.max(1.0, Math.abs(a.m03), Math.abs(b.m03)) && Math.abs(a.m04 - b.m04) <= epsilon * Math.max(1.0, Math.abs(a.m04), Math.abs(b.m04)) && Math.abs(a.m05 - b.m05) <= epsilon * Math.max(1.0, Math.abs(a.m05), Math.abs(b.m05)) && Math.abs(a.m06 - b.m06) <= epsilon * Math.max(1.0, Math.abs(a.m06), Math.abs(b.m06)) && Math.abs(a.m07 - b.m07) <= epsilon * Math.max(1.0, Math.abs(a.m07), Math.abs(b.m07)) && Math.abs(a.m08 - b.m08) <= epsilon * Math.max(1.0, Math.abs(a.m08), Math.abs(b.m08)) && Math.abs(a.m09 - b.m09) <= epsilon * Math.max(1.0, Math.abs(a.m09), Math.abs(b.m09)) && Math.abs(a.m10 - b.m10) <= epsilon * Math.max(1.0, Math.abs(a.m10), Math.abs(b.m10)) && Math.abs(a.m11 - b.m11) <= epsilon * Math.max(1.0, Math.abs(a.m11), Math.abs(b.m11)) && Math.abs(a.m12 - b.m12) <= epsilon * Math.max(1.0, Math.abs(a.m12), Math.abs(b.m12)) && Math.abs(a.m13 - b.m13) <= epsilon * Math.max(1.0, Math.abs(a.m13), Math.abs(b.m13)) && Math.abs(a.m14 - b.m14) <= epsilon * Math.max(1.0, Math.abs(a.m14), Math.abs(b.m14)) && Math.abs(a.m15 - b.m15) <= epsilon * Math.max(1.0, Math.abs(a.m15), Math.abs(b.m15));
        }

        /**
         * matrix layout
         * |m00  m04  m08 m12|
         * |m01  m05  m09 m13|
         * |m02  m06  m10 m14|
         * |m03  m07  m11 m15|
         */

        /**
         * @en Value at column 0 row 0 of the matrix.
         * @zh 矩阵第 0 列第 0 行的元素。
         */

        /**
         * @en Value at column 0 row 1 of the matrix.
         * @zh 矩阵第 0 列第 1 行的元素。
         */

        /**
         * @en Value at column 0 row 2 of the matrix.
         * @zh 矩阵第 0 列第 2 行的元素。
         */

        /**
         * @en Value at column 0 row 3 of the matrix.
         * @zh 矩阵第 0 列第 3 行的元素。
         */

        /**
         * @en Value at column 1 row 0 of the matrix.
         * @zh 矩阵第 1 列第 0 行的元素。
         */

        /**
         * @en Value at column 1 row 1 of the matrix.
         * @zh 矩阵第 1 列第 1 行的元素。
         */

        /**
         * @en Value at column 1 row 2 of the matrix.
         * @zh 矩阵第 1 列第 2 行的元素。
         */

        /**
         * @en Value at column 1 row 3 of the matrix.
         * @zh 矩阵第 1 列第 3 行的元素。
         */

        /**
         * @en Value at column 2 row 0 of the matrix.
         * @zh 矩阵第 2 列第 0 行的元素。
         */

        /**
         * @en Value at column 2 row 1 of the matrix.
         * @zh 矩阵第 2 列第 1 行的元素。
         */

        /**
         * @en Value at column 2 row 2 of the matrix.
         * @zh 矩阵第 2 列第 2 行的元素。
         */

        /**
         * @en Value at column 2 row 3 of the matrix.
         * @zh 矩阵第 2 列第 3 行的元素。
         */

        /**
         * @en Value at column 3 row 0 of the matrix.
         * @zh 矩阵第 3 列第 0 行的元素。
         */

        /**
         * @en Value at column 3 row 1 of the matrix.
         * @zh 矩阵第 3 列第 1 行的元素。
         */

        /**
         * @en Value at column 3 row 2 of the matrix.
         * @zh 矩阵第 3 列第 2 行的元素。
         */

        /**
         * @en Value at column 3 row 3 of the matrix.
         * @zh 矩阵第 3 列第 3 行的元素。
         */;

        function Mat4(m00, m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15) {
          var _this;
          if (m00 === void 0) {
            m00 = 1;
          }
          if (m01 === void 0) {
            m01 = 0;
          }
          if (m02 === void 0) {
            m02 = 0;
          }
          if (m03 === void 0) {
            m03 = 0;
          }
          if (m04 === void 0) {
            m04 = 0;
          }
          if (m05 === void 0) {
            m05 = 1;
          }
          if (m06 === void 0) {
            m06 = 0;
          }
          if (m07 === void 0) {
            m07 = 0;
          }
          if (m08 === void 0) {
            m08 = 0;
          }
          if (m09 === void 0) {
            m09 = 0;
          }
          if (m10 === void 0) {
            m10 = 1;
          }
          if (m11 === void 0) {
            m11 = 0;
          }
          if (m12 === void 0) {
            m12 = 0;
          }
          if (m13 === void 0) {
            m13 = 0;
          }
          if (m14 === void 0) {
            m14 = 0;
          }
          if (m15 === void 0) {
            m15 = 1;
          }
          _this = _ValueType.call(this) || this;
          if (typeof m00 === 'object') {
            _this.m00 = m00.m00;
            _this.m01 = m00.m01;
            _this.m02 = m00.m02;
            _this.m03 = m00.m03;
            _this.m04 = m00.m04;
            _this.m05 = m00.m05;
            _this.m06 = m00.m06;
            _this.m07 = m00.m07;
            _this.m08 = m00.m08;
            _this.m09 = m00.m09;
            _this.m10 = m00.m10;
            _this.m11 = m00.m11;
            _this.m12 = m00.m12;
            _this.m13 = m00.m13;
            _this.m14 = m00.m14;
            _this.m15 = m00.m15;
          } else {
            _this.m00 = m00;
            _this.m01 = m01;
            _this.m02 = m02;
            _this.m03 = m03;
            _this.m04 = m04;
            _this.m05 = m05;
            _this.m06 = m06;
            _this.m07 = m07;
            _this.m08 = m08;
            _this.m09 = m09;
            _this.m10 = m10;
            _this.m11 = m11;
            _this.m12 = m12;
            _this.m13 = m13;
            _this.m14 = m14;
            _this.m15 = m15;
          }
          return _this;
        }

        /**
         * @en Clone a new matrix from the current matrix.
         * @zh 克隆当前矩阵。
         */
        var _proto = Mat4.prototype;
        _proto.clone = function clone() {
          return new Mat4(this.m00, this.m01, this.m02, this.m03, this.m04, this.m05, this.m06, this.m07, this.m08, this.m09, this.m10, this.m11, this.m12, this.m13, this.m14, this.m15);
        }

        /**
         * @en Sets the matrix with another one's value.
         * @zh 设置当前矩阵使其与指定矩阵相等。
         * @param other Specified matrix.
         * @return this
         */;
        _proto.set = function set(m00, m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15) {
          if (m00 === void 0) {
            m00 = 1;
          }
          if (m01 === void 0) {
            m01 = 0;
          }
          if (m02 === void 0) {
            m02 = 0;
          }
          if (m03 === void 0) {
            m03 = 0;
          }
          if (m04 === void 0) {
            m04 = 0;
          }
          if (m05 === void 0) {
            m05 = 1;
          }
          if (m06 === void 0) {
            m06 = 0;
          }
          if (m07 === void 0) {
            m07 = 0;
          }
          if (m08 === void 0) {
            m08 = 0;
          }
          if (m09 === void 0) {
            m09 = 0;
          }
          if (m10 === void 0) {
            m10 = 1;
          }
          if (m11 === void 0) {
            m11 = 0;
          }
          if (m12 === void 0) {
            m12 = 0;
          }
          if (m13 === void 0) {
            m13 = 0;
          }
          if (m14 === void 0) {
            m14 = 0;
          }
          if (m15 === void 0) {
            m15 = 1;
          }
          if (typeof m00 === 'object') {
            this.m01 = m00.m01;
            this.m02 = m00.m02;
            this.m03 = m00.m03;
            this.m04 = m00.m04;
            this.m05 = m00.m05;
            this.m06 = m00.m06;
            this.m07 = m00.m07;
            this.m08 = m00.m08;
            this.m09 = m00.m09;
            this.m10 = m00.m10;
            this.m11 = m00.m11;
            this.m12 = m00.m12;
            this.m13 = m00.m13;
            this.m14 = m00.m14;
            this.m15 = m00.m15;
            this.m00 = m00.m00;
          } else {
            this.m01 = m01;
            this.m02 = m02;
            this.m03 = m03;
            this.m04 = m04;
            this.m05 = m05;
            this.m06 = m06;
            this.m07 = m07;
            this.m08 = m08;
            this.m09 = m09;
            this.m10 = m10;
            this.m11 = m11;
            this.m12 = m12;
            this.m13 = m13;
            this.m14 = m14;
            this.m15 = m15;
            this.m00 = m00;
          }
          return this;
        }

        /**
         * @en Returns whether the specified matrices are approximately equal.
         * @zh 判断当前矩阵是否在误差范围内与指定矩阵相等。
         * @param other Comparative matrix
         * @param epsilon The error allowed. It`s should be a non-negative number.
         * @return Returns `true' when the elements of both matrices are equal; otherwise returns `false'.
         */;
        _proto.equals = function equals(other, epsilon) {
          if (epsilon === void 0) {
            epsilon = EPSILON;
          }
          var hasInf = Math.abs(this.m00) === Infinity || Math.abs(this.m01) === Infinity || Math.abs(this.m02) === Infinity || Math.abs(this.m03) === Infinity || Math.abs(this.m04) === Infinity || Math.abs(this.m05) === Infinity || Math.abs(this.m06) === Infinity || Math.abs(this.m07) === Infinity || Math.abs(this.m08) === Infinity || Math.abs(this.m09) === Infinity || Math.abs(this.m10) === Infinity || Math.abs(this.m11) === Infinity || Math.abs(this.m12) === Infinity || Math.abs(this.m13) === Infinity || Math.abs(this.m14) === Infinity || Math.abs(this.m15) === Infinity;
          return !hasInf && Math.abs(this.m00 - other.m00) <= epsilon * Math.max(1.0, Math.abs(this.m00), Math.abs(other.m00)) && Math.abs(this.m01 - other.m01) <= epsilon * Math.max(1.0, Math.abs(this.m01), Math.abs(other.m01)) && Math.abs(this.m02 - other.m02) <= epsilon * Math.max(1.0, Math.abs(this.m02), Math.abs(other.m02)) && Math.abs(this.m03 - other.m03) <= epsilon * Math.max(1.0, Math.abs(this.m03), Math.abs(other.m03)) && Math.abs(this.m04 - other.m04) <= epsilon * Math.max(1.0, Math.abs(this.m04), Math.abs(other.m04)) && Math.abs(this.m05 - other.m05) <= epsilon * Math.max(1.0, Math.abs(this.m05), Math.abs(other.m05)) && Math.abs(this.m06 - other.m06) <= epsilon * Math.max(1.0, Math.abs(this.m06), Math.abs(other.m06)) && Math.abs(this.m07 - other.m07) <= epsilon * Math.max(1.0, Math.abs(this.m07), Math.abs(other.m07)) && Math.abs(this.m08 - other.m08) <= epsilon * Math.max(1.0, Math.abs(this.m08), Math.abs(other.m08)) && Math.abs(this.m09 - other.m09) <= epsilon * Math.max(1.0, Math.abs(this.m09), Math.abs(other.m09)) && Math.abs(this.m10 - other.m10) <= epsilon * Math.max(1.0, Math.abs(this.m10), Math.abs(other.m10)) && Math.abs(this.m11 - other.m11) <= epsilon * Math.max(1.0, Math.abs(this.m11), Math.abs(other.m11)) && Math.abs(this.m12 - other.m12) <= epsilon * Math.max(1.0, Math.abs(this.m12), Math.abs(other.m12)) && Math.abs(this.m13 - other.m13) <= epsilon * Math.max(1.0, Math.abs(this.m13), Math.abs(other.m13)) && Math.abs(this.m14 - other.m14) <= epsilon * Math.max(1.0, Math.abs(this.m14), Math.abs(other.m14)) && Math.abs(this.m15 - other.m15) <= epsilon * Math.max(1.0, Math.abs(this.m15), Math.abs(other.m15));
        }

        /**
         * @en Returns whether the specified matrices are equal.
         * @zh 判断当前矩阵是否与指定矩阵相等。
         * @param other Comparative matrix
         * @return Returns `true' when the elements of both matrices are equal; otherwise returns `false'.
         */;
        _proto.strictEquals = function strictEquals(other) {
          return this.m00 === other.m00 && this.m01 === other.m01 && this.m02 === other.m02 && this.m03 === other.m03 && this.m04 === other.m04 && this.m05 === other.m05 && this.m06 === other.m06 && this.m07 === other.m07 && this.m08 === other.m08 && this.m09 === other.m09 && this.m10 === other.m10 && this.m11 === other.m11 && this.m12 === other.m12 && this.m13 === other.m13 && this.m14 === other.m14 && this.m15 === other.m15;
        }

        /**
         * @en Returns a string representation of a matrix.
         * @zh 返回当前矩阵的字符串表示。
         * @return 当前矩阵的字符串表示。
         */;
        _proto.toString = function toString() {
          return "[\n" + this.m00 + ", " + this.m01 + ", " + this.m02 + ", " + this.m03 + ",\n" + this.m04 + ", " + this.m05 + ", " + this.m06 + ", " + this.m07 + ",\n" + this.m08 + ", " + this.m09 + ", " + this.m10 + ", " + this.m11 + ",\n" + this.m12 + ", " + this.m13 + ", " + this.m14 + ", " + this.m15 + "\n" + ']';
        }

        /**
         * @en set the current matrix to an identity matrix.
         * @zh 将当前矩阵设为单位矩阵。
         * @return `this`
         */;
        _proto.identity = function identity() {
          this.m00 = 1;
          this.m01 = 0;
          this.m02 = 0;
          this.m03 = 0;
          this.m04 = 0;
          this.m05 = 1;
          this.m06 = 0;
          this.m07 = 0;
          this.m08 = 0;
          this.m09 = 0;
          this.m10 = 1;
          this.m11 = 0;
          this.m12 = 0;
          this.m13 = 0;
          this.m14 = 0;
          this.m15 = 1;
          return this;
        }

        /**
         * @en set the current matrix to an zero matrix.
         * @zh 将当前矩阵设为 0矩阵。
         * @return `this`
         */;
        _proto.zero = function zero() {
          this.m00 = 0;
          this.m01 = 0;
          this.m02 = 0;
          this.m03 = 0;
          this.m04 = 0;
          this.m05 = 0;
          this.m06 = 0;
          this.m07 = 0;
          this.m08 = 0;
          this.m09 = 0;
          this.m10 = 0;
          this.m11 = 0;
          this.m12 = 0;
          this.m13 = 0;
          this.m14 = 0;
          this.m15 = 0;
          return this;
        }

        /**
         * @en Transposes the current matrix.
         * @zh 计算当前矩阵的转置矩阵。
         */;
        _proto.transpose = function transpose() {
          var a01 = this.m01;
          var a02 = this.m02;
          var a03 = this.m03;
          var a12 = this.m06;
          var a13 = this.m07;
          var a23 = this.m11;
          this.m01 = this.m04;
          this.m02 = this.m08;
          this.m03 = this.m12;
          this.m04 = a01;
          this.m06 = this.m09;
          this.m07 = this.m13;
          this.m08 = a02;
          this.m09 = a12;
          this.m11 = this.m14;
          this.m12 = a03;
          this.m13 = a13;
          this.m14 = a23;
          return this;
        }

        /**
         * @en Inverts the current matrix. When matrix is not invertible the matrix will be set to zeros.
         * @zh 计算当前矩阵的逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。
         */;
        _proto.invert = function invert() {
          var a00 = this.m00;
          var a01 = this.m01;
          var a02 = this.m02;
          var a03 = this.m03;
          var a10 = this.m04;
          var a11 = this.m05;
          var a12 = this.m06;
          var a13 = this.m07;
          var a20 = this.m08;
          var a21 = this.m09;
          var a22 = this.m10;
          var a23 = this.m11;
          var a30 = this.m12;
          var a31 = this.m13;
          var a32 = this.m14;
          var a33 = this.m15;
          var b00 = a00 * a11 - a01 * a10;
          var b01 = a00 * a12 - a02 * a10;
          var b02 = a00 * a13 - a03 * a10;
          var b03 = a01 * a12 - a02 * a11;
          var b04 = a01 * a13 - a03 * a11;
          var b05 = a02 * a13 - a03 * a12;
          var b06 = a20 * a31 - a21 * a30;
          var b07 = a20 * a32 - a22 * a30;
          var b08 = a20 * a33 - a23 * a30;
          var b09 = a21 * a32 - a22 * a31;
          var b10 = a21 * a33 - a23 * a31;
          var b11 = a22 * a33 - a23 * a32;

          // Calculate the determinant
          var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
          if (det === 0) {
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            return this;
          }
          det = 1.0 / det;
          this.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
          this.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
          this.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
          this.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
          this.m04 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
          this.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
          this.m06 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
          this.m07 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
          this.m08 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
          this.m09 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
          this.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
          this.m11 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
          this.m12 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
          this.m13 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
          this.m14 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
          this.m15 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
          return this;
        }

        /**
         * @en Calculates the determinant of the current matrix.
         * @zh 计算当前矩阵的行列式。
         * @return 当前矩阵的行列式。
         */;
        _proto.determinant = function determinant() {
          var a00 = this.m00;
          var a01 = this.m01;
          var a02 = this.m02;
          var a03 = this.m03;
          var a10 = this.m04;
          var a11 = this.m05;
          var a12 = this.m06;
          var a13 = this.m07;
          var a20 = this.m08;
          var a21 = this.m09;
          var a22 = this.m10;
          var a23 = this.m11;
          var a30 = this.m12;
          var a31 = this.m13;
          var a32 = this.m14;
          var a33 = this.m15;
          var b00 = a00 * a11 - a01 * a10;
          var b01 = a00 * a12 - a02 * a10;
          var b02 = a00 * a13 - a03 * a10;
          var b03 = a01 * a12 - a02 * a11;
          var b04 = a01 * a13 - a03 * a11;
          var b05 = a02 * a13 - a03 * a12;
          var b06 = a20 * a31 - a21 * a30;
          var b07 = a20 * a32 - a22 * a30;
          var b08 = a20 * a33 - a23 * a30;
          var b09 = a21 * a32 - a22 * a31;
          var b10 = a21 * a33 - a23 * a31;
          var b11 = a22 * a33 - a23 * a32;

          // Calculate the determinant
          return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        }

        /**
         * @en Adds the current matrix and another matrix to the current matrix.
         * @zh 矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。
         * @param mat the second operand
         */;
        _proto.add = function add(mat) {
          this.m00 += mat.m00;
          this.m01 += mat.m01;
          this.m02 += mat.m02;
          this.m03 += mat.m03;
          this.m04 += mat.m04;
          this.m05 += mat.m05;
          this.m06 += mat.m06;
          this.m07 += mat.m07;
          this.m08 += mat.m08;
          this.m09 += mat.m09;
          this.m10 += mat.m10;
          this.m11 += mat.m11;
          this.m12 += mat.m12;
          this.m13 += mat.m13;
          this.m14 += mat.m14;
          this.m15 += mat.m15;
          return this;
        }

        /**
         * @en Subtracts another matrix from the current matrix.
         * @zh 计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。
         * @param mat the second operand
         */;
        _proto.subtract = function subtract(mat) {
          this.m00 -= mat.m00;
          this.m01 -= mat.m01;
          this.m02 -= mat.m02;
          this.m03 -= mat.m03;
          this.m04 -= mat.m04;
          this.m05 -= mat.m05;
          this.m06 -= mat.m06;
          this.m07 -= mat.m07;
          this.m08 -= mat.m08;
          this.m09 -= mat.m09;
          this.m10 -= mat.m10;
          this.m11 -= mat.m11;
          this.m12 -= mat.m12;
          this.m13 -= mat.m13;
          this.m14 -= mat.m14;
          this.m15 -= mat.m15;
          return this;
        }

        /**
         * @en Multiply the current matrix with another matrix.
         * @zh 矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。
         * @param mat the second operand
         */;
        _proto.multiply = function multiply(mat) {
          var a00 = this.m00;
          var a01 = this.m01;
          var a02 = this.m02;
          var a03 = this.m03;
          var a10 = this.m04;
          var a11 = this.m05;
          var a12 = this.m06;
          var a13 = this.m07;
          var a20 = this.m08;
          var a21 = this.m09;
          var a22 = this.m10;
          var a23 = this.m11;
          var a30 = this.m12;
          var a31 = this.m13;
          var a32 = this.m14;
          var a33 = this.m15;

          // Cache only the current line of the second matrix
          var b0 = mat.m00;
          var b1 = mat.m01;
          var b2 = mat.m02;
          var b3 = mat.m03;
          this.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          this.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          this.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          this.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          b0 = mat.m04;
          b1 = mat.m05;
          b2 = mat.m06;
          b3 = mat.m07;
          this.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          this.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          this.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          this.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          b0 = mat.m08;
          b1 = mat.m09;
          b2 = mat.m10;
          b3 = mat.m11;
          this.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          this.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          this.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          this.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          b0 = mat.m12;
          b1 = mat.m13;
          b2 = mat.m14;
          b3 = mat.m15;
          this.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
          this.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
          this.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
          this.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
          return this;
        }

        /**
         * @en Multiply each element of the current matrix by a scalar number.
         * @zh 矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给当前矩阵。
         * @param scalar amount to scale the matrix's elements by
         */;
        _proto.multiplyScalar = function multiplyScalar(scalar) {
          this.m00 *= scalar;
          this.m01 *= scalar;
          this.m02 *= scalar;
          this.m03 *= scalar;
          this.m04 *= scalar;
          this.m05 *= scalar;
          this.m06 *= scalar;
          this.m07 *= scalar;
          this.m08 *= scalar;
          this.m09 *= scalar;
          this.m10 *= scalar;
          this.m11 *= scalar;
          this.m12 *= scalar;
          this.m13 *= scalar;
          this.m14 *= scalar;
          this.m15 *= scalar;
          return this;
        }

        /**
         * @en Translate the current matrix by the given vector
         * @zh 将当前矩阵左乘位移矩阵的结果赋值给当前矩阵，位移矩阵由各个轴的位移给出。
         * @param vec vector to translate by
         *
         * @deprecated since v3.0, please use [[transform]] instead
         */;
        _proto.translate = function translate(vec) {
          this.m12 += vec.x;
          this.m13 += vec.y;
          this.m14 += vec.z;
          return this;
        }

        /**
         * @en Translate the current matrix by the given vector
         * @zh 将当前矩阵左乘位移矩阵的结果赋值给当前矩阵，位移矩阵由各个轴的位移给出。
         * @param vec vector to translate by
         */;
        _proto.transform = function transform(vec) {
          var x = vec.x,
            y = vec.y,
            z = vec.z;
          var a00 = this.m00;
          var a01 = this.m01;
          var a02 = this.m02;
          var a03 = this.m03;
          var a10 = this.m04;
          var a11 = this.m05;
          var a12 = this.m06;
          var a13 = this.m07;
          var a20 = this.m08;
          var a21 = this.m09;
          var a22 = this.m10;
          var a23 = this.m11;
          this.m12 = a00 * x + a10 * y + a20 * z + this.m12;
          this.m13 = a01 * x + a11 * y + a21 * z + this.m13;
          this.m14 = a02 * x + a12 * y + a22 * z + this.m14;
          this.m15 = a03 * x + a13 * y + a23 * z + this.m15;
          return this;
        }

        /**
         * @en Multiply the current matrix with a scale vector.
         * @zh 将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。
         * @param vec vector to scale by
         */;
        _proto.scale = function scale(vec) {
          var x = vec.x;
          var y = vec.y;
          var z = vec.z;
          this.m00 *= x;
          this.m01 *= x;
          this.m02 *= x;
          this.m03 *= x;
          this.m04 *= y;
          this.m05 *= y;
          this.m06 *= y;
          this.m07 *= y;
          this.m08 *= z;
          this.m09 *= z;
          this.m10 *= z;
          this.m11 *= z;
          return this;
        }

        /**
         * @en Rotates the current matrix by the given angle around the given axis
         * @zh 将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。
         * @param rad Angle of rotation (in radians)
         * @param axis Axis of rotation
         */;
        _proto.rotate = function rotate(rad, axis) {
          var x = axis.x;
          var y = axis.y;
          var z = axis.z;
          var len = Math.sqrt(x * x + y * y + z * z);
          if (Math.abs(len) < EPSILON) {
            return null;
          }
          len = 1 / len;
          x *= len;
          y *= len;
          z *= len;
          var s = Math.sin(rad);
          var c = Math.cos(rad);
          var t = 1 - c;
          var a00 = this.m00;
          var a01 = this.m01;
          var a02 = this.m02;
          var a03 = this.m03;
          var a10 = this.m04;
          var a11 = this.m05;
          var a12 = this.m06;
          var a13 = this.m07;
          var a20 = this.m08;
          var a21 = this.m09;
          var a22 = this.m10;
          var a23 = this.m11;

          // Construct the elements of the rotation matrix
          var b00 = x * x * t + c;
          var b01 = y * x * t + z * s;
          var b02 = z * x * t - y * s;
          var b10 = x * y * t - z * s;
          var b11 = y * y * t + c;
          var b12 = z * y * t + x * s;
          var b20 = x * z * t + y * s;
          var b21 = y * z * t - x * s;
          var b22 = z * z * t + c;

          // Perform rotation-specific matrix multiplication
          this.m00 = a00 * b00 + a10 * b01 + a20 * b02;
          this.m01 = a01 * b00 + a11 * b01 + a21 * b02;
          this.m02 = a02 * b00 + a12 * b01 + a22 * b02;
          this.m03 = a03 * b00 + a13 * b01 + a23 * b02;
          this.m04 = a00 * b10 + a10 * b11 + a20 * b12;
          this.m05 = a01 * b10 + a11 * b11 + a21 * b12;
          this.m06 = a02 * b10 + a12 * b11 + a22 * b12;
          this.m07 = a03 * b10 + a13 * b11 + a23 * b12;
          this.m08 = a00 * b20 + a10 * b21 + a20 * b22;
          this.m09 = a01 * b20 + a11 * b21 + a21 * b22;
          this.m10 = a02 * b20 + a12 * b21 + a22 * b22;
          this.m11 = a03 * b20 + a13 * b21 + a23 * b22;
          return this;
        }

        /**
         * @en Returns the translation vector component of a transformation matrix.
         * @zh 从当前矩阵中计算出位移变换的部分，并以各个轴上位移的形式赋值给输出向量。
         * @param out Vector to receive translation component.
         */;
        _proto.getTranslation = function getTranslation(out) {
          out.x = this.m12;
          out.y = this.m13;
          out.z = this.m14;
          return out;
        }

        /**
         * @en Returns the scale factor component of a transformation matrix
         * @zh 从当前矩阵中计算出缩放变换的部分，并以各个轴上缩放的形式赋值给输出向量。
         * @param out Vector to receive scale component
         */;
        _proto.getScale = function getScale(out) {
          var m00 = m3_1.m00 = this.m00;
          var m01 = m3_1.m01 = this.m01;
          var m02 = m3_1.m02 = this.m02;
          var m04 = m3_1.m03 = this.m04;
          var m05 = m3_1.m04 = this.m05;
          var m06 = m3_1.m05 = this.m06;
          var m08 = m3_1.m06 = this.m08;
          var m09 = m3_1.m07 = this.m09;
          var m10 = m3_1.m08 = this.m10;
          out.x = Math.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
          out.y = Math.sqrt(m04 * m04 + m05 * m05 + m06 * m06);
          out.z = Math.sqrt(m08 * m08 + m09 * m09 + m10 * m10);
          // account for reflections
          if (Mat3.determinant(m3_1) < 0) {
            out.x *= -1;
          }
          return out;
        }

        /**
         * @en Returns the rotation factor component of a transformation matrix
         * @zh 从当前矩阵中计算出旋转变换的部分，并以四元数的形式赋值给输出四元数。
         * @param out Vector to receive rotation component
         */;
        _proto.getRotation = function getRotation(out) {
          // Extract rotation matrix first
          var sx = Vec3.set(v3_1, this.m00, this.m01, this.m02).length();
          var sy = Vec3.set(v3_1, this.m04, this.m05, this.m06).length();
          var sz = Vec3.set(v3_1, this.m08, this.m09, this.m10).length();
          m3_1.m00 = this.m00 / sx;
          m3_1.m01 = this.m01 / sx;
          m3_1.m02 = this.m02 / sx;
          m3_1.m03 = this.m04 / sy;
          m3_1.m04 = this.m05 / sy;
          m3_1.m05 = this.m06 / sy;
          m3_1.m06 = this.m08 / sz;
          m3_1.m07 = this.m09 / sz;
          m3_1.m08 = this.m10 / sz;
          var det = Mat3.determinant(m3_1);
          if (det < 0) {
            m3_1.m00 *= -1;
            m3_1.m01 *= -1;
            m3_1.m02 *= -1;
          }
          return Quat.fromMat3(out, m3_1);
        }

        /**
         * @en Resets the matrix values by the given rotation quaternion, translation vector and scale vector
         * @zh 重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。
         * @param q Rotation quaternion
         * @param v Translation vector
         * @param s Scaling vector
         * @return `this`
         *
         * @deprecated Since 3.8.0, please use [[fromSRT]] instead
         */;
        _proto.fromRTS = function fromRTS(q, v, s) {
          var x = q.x;
          var y = q.y;
          var z = q.z;
          var w = q.w;
          var x2 = x + x;
          var y2 = y + y;
          var z2 = z + z;
          var xx = x * x2;
          var xy = x * y2;
          var xz = x * z2;
          var yy = y * y2;
          var yz = y * z2;
          var zz = z * z2;
          var wx = w * x2;
          var wy = w * y2;
          var wz = w * z2;
          var sx = s.x;
          var sy = s.y;
          var sz = s.z;
          this.m00 = (1 - (yy + zz)) * sx;
          this.m01 = (xy + wz) * sx;
          this.m02 = (xz - wy) * sx;
          this.m03 = 0;
          this.m04 = (xy - wz) * sy;
          this.m05 = (1 - (xx + zz)) * sy;
          this.m06 = (yz + wx) * sy;
          this.m07 = 0;
          this.m08 = (xz + wy) * sz;
          this.m09 = (yz - wx) * sz;
          this.m10 = (1 - (xx + yy)) * sz;
          this.m11 = 0;
          this.m12 = v.x;
          this.m13 = v.y;
          this.m14 = v.z;
          this.m15 = 1;
          return this;
        }

        /**
         * @en Resets the matrix values by the given rotation quaternion, translation vector and scale vector
         * @zh 重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。
         * @param q Rotation quaternion
         * @param v Translation vector
         * @param s Scaling vector
         * @return `this`
         */;
        _proto.fromSRT = function fromSRT(q, v, s) {
          var x = q.x;
          var y = q.y;
          var z = q.z;
          var w = q.w;
          var x2 = x + x;
          var y2 = y + y;
          var z2 = z + z;
          var xx = x * x2;
          var xy = x * y2;
          var xz = x * z2;
          var yy = y * y2;
          var yz = y * z2;
          var zz = z * z2;
          var wx = w * x2;
          var wy = w * y2;
          var wz = w * z2;
          var sx = s.x;
          var sy = s.y;
          var sz = s.z;
          this.m00 = (1 - (yy + zz)) * sx;
          this.m01 = (xy + wz) * sx;
          this.m02 = (xz - wy) * sx;
          this.m03 = 0;
          this.m04 = (xy - wz) * sy;
          this.m05 = (1 - (xx + zz)) * sy;
          this.m06 = (yz + wx) * sy;
          this.m07 = 0;
          this.m08 = (xz + wy) * sz;
          this.m09 = (yz - wx) * sz;
          this.m10 = (1 - (xx + yy)) * sz;
          this.m11 = 0;
          this.m12 = v.x;
          this.m13 = v.y;
          this.m14 = v.z;
          this.m15 = 1;
          return this;
        }

        /**
         * @en Resets the current matrix from the given quaternion.
         * @zh 重置当前矩阵的值，使其表示指定四元数表示的旋转变换。
         * @param q Rotation quaternion
         * @return `this`
         */;
        _proto.fromQuat = function fromQuat(q) {
          var x = q.x;
          var y = q.y;
          var z = q.z;
          var w = q.w;
          var x2 = x + x;
          var y2 = y + y;
          var z2 = z + z;
          var xx = x * x2;
          var yx = y * x2;
          var yy = y * y2;
          var zx = z * x2;
          var zy = z * y2;
          var zz = z * z2;
          var wx = w * x2;
          var wy = w * y2;
          var wz = w * z2;
          this.m00 = 1 - yy - zz;
          this.m01 = yx + wz;
          this.m02 = zx - wy;
          this.m03 = 0;
          this.m04 = yx - wz;
          this.m05 = 1 - xx - zz;
          this.m06 = zy + wx;
          this.m07 = 0;
          this.m08 = zx + wy;
          this.m09 = zy - wx;
          this.m10 = 1 - xx - yy;
          this.m11 = 0;
          this.m12 = 0;
          this.m13 = 0;
          this.m14 = 0;
          this.m15 = 1;
          return this;
        };
        return Mat4;
      }(ValueType));
      _class = Mat4;
      Mat4.IDENTITY = Object.freeze(new _class());
      v3_1 = new Vec3();
      m3_1 = new Mat3();
      CCClass.fastDefine('cc.Mat4', Mat4, {
        m00: 1,
        m01: 0,
        m02: 0,
        m03: 0,
        m04: 0,
        m05: 1,
        m06: 0,
        m07: 0,
        m08: 0,
        m09: 0,
        m10: 1,
        m11: 0,
        m12: 0,
        m13: 0,
        m14: 0,
        m15: 1
      });
      legacyCC.Mat4 = Mat4;
      legacyCC.mat4 = mat4;
    }
  };
});