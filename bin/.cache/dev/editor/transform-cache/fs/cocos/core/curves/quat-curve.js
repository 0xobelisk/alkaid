System.register("q-bundled:///fs/cocos/core/curves/quat-curve.js", ["../data/utils/asserts.js", "../math/index.js", "./keyframe-curve.js", "./curve.js", "../algorithm/binary-search.js", "../data/decorators/index.js", "../data/index.js", "./easing-method.js", "./bezier.js"], function (_export, _context) {
  "use strict";

  var assertIsTrue, pingPong, Quat, repeat, KeyframeCurve, EasingMethod, ExtrapolationMode, binarySearchEpsilon, ccclass, serializable, uniquelyReferenced, deserializeTag, serializeTag, getEasingFn, bezierByTime, _dec, _class, _class2, _initializer, _initializer2, _initializer3, _dec2, _class4, _class5, _initializer4, _initializer5, QuatInterpolationMode, QuatKeyframeValue, QuatCurve, KeyframeValueFlagMask, FLAGS_BYTES, FRAME_COUNT_BYTES, TIME_BYTES, VALUE_BYTES, INTERPOLATION_MODE_BYTES, EASING_METHOD_BYTES, EASING_METHOD_BEZIER_TAG, EASING_METHOD_BEZIER_COMPONENT_BYTES;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function createQuatKeyframeValue(params) {
    return new QuatKeyframeValue(params);
  }

  /**
   * @en
   * Quaternion curve.
   * @zh
   * 四元数曲线
   */
  _export("QuatInterpolationMode", void 0);
  return {
    setters: [function (_dataUtilsAssertsJs) {
      assertIsTrue = _dataUtilsAssertsJs.assertIsTrue;
    }, function (_mathIndexJs) {
      pingPong = _mathIndexJs.pingPong;
      Quat = _mathIndexJs.Quat;
      repeat = _mathIndexJs.repeat;
    }, function (_keyframeCurveJs) {
      KeyframeCurve = _keyframeCurveJs.KeyframeCurve;
    }, function (_curveJs) {
      EasingMethod = _curveJs.EasingMethod;
      ExtrapolationMode = _curveJs.ExtrapolationMode;
    }, function (_algorithmBinarySearchJs) {
      binarySearchEpsilon = _algorithmBinarySearchJs.binarySearchEpsilon;
    }, function (_dataDecoratorsIndexJs) {
      ccclass = _dataDecoratorsIndexJs.ccclass;
      serializable = _dataDecoratorsIndexJs.serializable;
      uniquelyReferenced = _dataDecoratorsIndexJs.uniquelyReferenced;
    }, function (_dataIndexJs) {
      deserializeTag = _dataIndexJs.deserializeTag;
      serializeTag = _dataIndexJs.serializeTag;
    }, function (_easingMethodJs) {
      getEasingFn = _easingMethodJs.getEasingFn;
    }, function (_bezierJs) {
      bezierByTime = _bezierJs.bezierByTime;
    }],
    execute: function () {
      (function (QuatInterpolationMode) {
        QuatInterpolationMode[QuatInterpolationMode["SLERP"] = 0] = "SLERP";
        QuatInterpolationMode[QuatInterpolationMode["CONSTANT"] = 1] = "CONSTANT";
      })(QuatInterpolationMode || _export("QuatInterpolationMode", QuatInterpolationMode = {}));
      /**
       * View to a quaternion frame value.
       * Note, the view may be invalidated due to keyframe change/add/remove.
       */
      QuatKeyframeValue = (_dec = ccclass('cc.QuatKeyframeValue'), _dec(_class = uniquelyReferenced(_class = (_class2 = class QuatKeyframeValue {
        constructor({
          value,
          interpolationMode,
          easingMethod
        } = {}) {
          /**
           * @en
           * When perform interpolation, the interpolation method should be taken
           * when for this keyframe is used as starting keyframe.
           * @zh
           * 在执行插值时，当以此关键帧作为起始关键帧时应当使用的插值方式。
           */
          this.interpolationMode = _initializer && _initializer();
          /**
           * @en
           * Value of the keyframe.
           * @zh
           * 该关键帧的值。
           */
          this.value = _initializer2 && _initializer2();
          /**
           * @internal Reserved for backward compatibility. Will be removed in future.
           */
          this.easingMethod = _initializer3 && _initializer3();
          // TODO: shall we normalize it?
          this.value = value ? Quat.clone(value) : this.value;
          this.interpolationMode = interpolationMode !== null && interpolationMode !== void 0 ? interpolationMode : this.interpolationMode;
          this.easingMethod = easingMethod !== null && easingMethod !== void 0 ? easingMethod : this.easingMethod;
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "interpolationMode", [serializable], function () {
        return QuatInterpolationMode.SLERP;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "value", [serializable], function () {
        return Quat.clone(Quat.IDENTITY);
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "easingMethod", [serializable], function () {
        return EasingMethod.LINEAR;
      })), _class2)) || _class) || _class);
      /**
       * The parameter describing a real keyframe value.
       * In the case of partial keyframe value,
       * each component of the keyframe value is taken from the parameter.
       * For unspecified components, default values are taken:
       * - Interpolation mode: slerp
       * - Value: Identity quaternion
       * @zh
       * 用于描述实数关键帧值的参数。
       * 若是部分关键帧的形式，关键帧值的每个分量都是从该参数中取得。
       * 对于未指定的分量，使用默认值：
       * - 插值模式：球面线性插值
       * - 值：单位四元数
       */
      _export("QuatCurve", QuatCurve = (_dec2 = ccclass('cc.QuatCurve'), _dec2(_class4 = (_class5 = class QuatCurve extends KeyframeCurve {
        constructor(...args) {
          super(...args);
          /**
           * @en
           * Gets or sets the pre-extrapolation-mode of this curve.
           * Defaults to `ExtrapolationMode.CLAMP`.
           * @zh
           * 获取或设置此曲线的前向外推模式。
           * 默认为 `ExtrapolationMode.CLAMP`。
           */
          this.preExtrapolation = _initializer4 && _initializer4();
          /**
           * @en
           * Gets or sets the post-extrapolation-mode of this curve.
           * Defaults to `ExtrapolationMode.CLAMP`.
           * @zh
           * 获取或设置此曲线的后向外推模式。
           * 默认为 `ExtrapolationMode.CLAMP`。
           */
          this.postExtrapolation = _initializer5 && _initializer5();
        }
        /**
         * @en
         * Evaluates this curve at specified time.
         * @zh
         * 计算此曲线在指定时间上的值。
         * @param time Input time.
         * @param quat If specified, this value will be filled and returned.
         * Otherwise a new quaternion object will be filled and returned.
         * @returns Result value.
         */
        evaluate(time, quat) {
          var _quat;
          (_quat = quat) !== null && _quat !== void 0 ? _quat : quat = new Quat();
          const {
            _times: times,
            _values: values,
            postExtrapolation,
            preExtrapolation
          } = this;
          const nFrames = times.length;
          if (nFrames === 0) {
            return quat;
          }
          const firstTime = times[0];
          const lastTime = times[nFrames - 1];
          if (time < firstTime) {
            // Underflow
            const preValue = values[0];
            switch (preExtrapolation) {
              case ExtrapolationMode.LOOP:
                time = firstTime + repeat(time - firstTime, lastTime - firstTime);
                break;
              case ExtrapolationMode.PING_PONG:
                time = firstTime + pingPong(time - firstTime, lastTime - firstTime);
                break;
              case ExtrapolationMode.CLAMP:
              default:
                return Quat.copy(quat, preValue.value);
            }
          } else if (time > lastTime) {
            // Overflow
            const preValue = values[nFrames - 1];
            switch (postExtrapolation) {
              case ExtrapolationMode.LOOP:
                time = firstTime + repeat(time - firstTime, lastTime - firstTime);
                break;
              case ExtrapolationMode.PING_PONG:
                time = firstTime + pingPong(time - firstTime, lastTime - firstTime);
                break;
              case ExtrapolationMode.CLAMP:
              default:
                return Quat.copy(quat, preValue.value);
            }
          }
          const index = binarySearchEpsilon(times, time);
          if (index >= 0) {
            return Quat.copy(quat, values[index].value);
          }
          const iNext = ~index;
          assertIsTrue(iNext !== 0 && iNext !== nFrames && nFrames > 1);
          const iPre = iNext - 1;
          const preTime = times[iPre];
          const preValue = values[iPre];
          const nextTime = times[iNext];
          const nextValue = values[iNext];
          assertIsTrue(nextTime > time && time > preTime);
          const dt = nextTime - preTime;
          const ratio = (time - preTime) / dt;
          switch (preValue.interpolationMode) {
            default:
            case QuatInterpolationMode.CONSTANT:
              return Quat.copy(quat, preValue.value);
            case QuatInterpolationMode.SLERP:
              {
                const {
                  easingMethod
                } = preValue;
                const transformedRatio = easingMethod === EasingMethod.LINEAR ? ratio : Array.isArray(easingMethod) ? bezierByTime(easingMethod, ratio) : getEasingFn(easingMethod)(ratio);
                return Quat.slerp(quat, preValue.value, nextValue.value, transformedRatio);
              }
          }
        }

        /**
         * Adds a keyframe into this curve.
         * @param time Time of the keyframe.
         * @param value Value of the keyframe.
         * @returns The index to the new keyframe.
         */
        addKeyFrame(time, value) {
          const keyframeValue = new QuatKeyframeValue(value);
          return super.addKeyFrame(time, keyframeValue);
        }

        /**
         * Assigns all keyframes.
         * @param keyframes An iterable to keyframes. The keyframes should be sorted by their time.
         */

        /**
           * Assigns all keyframes.
           * @param times Times array. Should be sorted.
           * @param values Values array. Corresponding to each time in `times`.
           */

        assignSorted(times, values) {
          if (values !== undefined) {
            assertIsTrue(Array.isArray(times));
            this.setKeyframes(times.slice(), values.map(value => createQuatKeyframeValue(value)));
          } else {
            const keyframes = Array.from(times);
            this.setKeyframes(keyframes.map(([time]) => time), keyframes.map(([, value]) => createQuatKeyframeValue(value)));
          }
        }

        /**
         * @internal
         */
        [serializeTag](output, context) {
          if (!context.toCCON) {
            output.writeThis();
            return;
          }
          const {
            _times: times,
            _values: keyframeValues
          } = this;
          let interpolationModeRepeated = true;
          keyframeValues.forEach((keyframeValue, _index, [firstKeyframeValue]) => {
            // Values are unlikely to be unified.
            if (interpolationModeRepeated && keyframeValue.interpolationMode !== firstKeyframeValue.interpolationMode) {
              interpolationModeRepeated = false;
            }
          });
          const nKeyframes = times.length;
          const nFrames = nKeyframes;
          const interpolationModesSize = INTERPOLATION_MODE_BYTES * (interpolationModeRepeated ? 1 : nFrames);
          const easingMethodsSize = keyframeValues.reduce((result, {
            easingMethod
          }) => result += Array.isArray(easingMethod) ? EASING_METHOD_BYTES + EASING_METHOD_BEZIER_COMPONENT_BYTES * 4 : EASING_METHOD_BYTES, 0);
          let dataSize = 0;
          dataSize += FLAGS_BYTES + FRAME_COUNT_BYTES + TIME_BYTES * nFrames + VALUE_BYTES * 4 * nFrames + easingMethodsSize + interpolationModesSize + 0;
          const dataView = new DataView(new ArrayBuffer(dataSize));
          let P = 0;

          // Flags
          let flags = 0;
          if (interpolationModeRepeated) {
            flags |= KeyframeValueFlagMask.INTERPOLATION_MODE;
          }
          dataView.setUint32(P, flags, true);
          P += FLAGS_BYTES;

          // Frame count
          dataView.setUint32(P, nFrames, true);
          P += FRAME_COUNT_BYTES;

          // Times
          times.forEach((time, index) => dataView.setFloat32(P + TIME_BYTES * index, time, true));
          P += TIME_BYTES * nFrames;

          // Values
          keyframeValues.forEach(({
            value: {
              x,
              y,
              z,
              w
            }
          }, index) => {
            const pQuat = P + VALUE_BYTES * 4 * index;
            dataView.setFloat32(pQuat + VALUE_BYTES * 0, x, true);
            dataView.setFloat32(pQuat + VALUE_BYTES * 1, y, true);
            dataView.setFloat32(pQuat + VALUE_BYTES * 2, z, true);
            dataView.setFloat32(pQuat + VALUE_BYTES * 3, w, true);
          });
          P += VALUE_BYTES * 4 * nFrames;

          // Easing methods
          keyframeValues.forEach(({
            easingMethod
          }, index) => {
            if (!Array.isArray(easingMethod)) {
              dataView.setUint8(P, easingMethod);
              ++P;
            } else {
              dataView.setUint8(P, EASING_METHOD_BEZIER_TAG);
              ++P;
              dataView.setFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 0, easingMethod[0], true);
              dataView.setFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 1, easingMethod[1], true);
              dataView.setFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 2, easingMethod[2], true);
              dataView.setFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 3, easingMethod[3], true);
              P += EASING_METHOD_BEZIER_COMPONENT_BYTES * 4;
            }
          });

          // Frame values
          const INTERPOLATION_MODES_START = P;
          P += interpolationModesSize;
          let pInterpolationMode = INTERPOLATION_MODES_START;
          keyframeValues.forEach(({
            interpolationMode
          }) => {
            dataView.setUint8(pInterpolationMode, interpolationMode);
            if (!interpolationModeRepeated) {
              pInterpolationMode += INTERPOLATION_MODE_BYTES;
            }
          });
          const bytes = new Uint8Array(dataView.buffer);
          output.writeProperty('bytes', bytes);
        }

        /**
         * @internal
         */
        [deserializeTag](input, context) {
          if (!context.fromCCON) {
            input.readThis();
            return;
          }
          const bytes = input.readProperty('bytes');
          const dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
          let P = 0;

          // Flags
          const flags = dataView.getUint32(P, true);
          P += FLAGS_BYTES;
          const interpolationModeRepeated = flags & KeyframeValueFlagMask.INTERPOLATION_MODE;

          // Frame count
          const nFrames = dataView.getUint32(P, true);
          P += FRAME_COUNT_BYTES;

          // Times
          const times = Array.from({
            length: nFrames
          }, (_, index) => dataView.getFloat32(P + TIME_BYTES * index, true));
          P += TIME_BYTES * nFrames;

          // Frame values
          const P_VALUES = P;
          P += VALUE_BYTES * 4 * nFrames;
          const keyframeValues = Array.from({
            length: nFrames
          }, (_, index) => {
            const pQuat = P_VALUES + VALUE_BYTES * 4 * index;
            const x = dataView.getFloat32(pQuat + VALUE_BYTES * 0, true);
            const y = dataView.getFloat32(pQuat + VALUE_BYTES * 1, true);
            const z = dataView.getFloat32(pQuat + VALUE_BYTES * 2, true);
            const w = dataView.getFloat32(pQuat + VALUE_BYTES * 3, true);
            const easingMethod = dataView.getUint8(P);
            ++P;
            const keyframeValue = createQuatKeyframeValue({
              value: {
                x,
                y,
                z,
                w
              }
            });
            if (easingMethod !== EASING_METHOD_BEZIER_TAG) {
              keyframeValue.easingMethod = easingMethod;
            } else {
              keyframeValue.easingMethod = [dataView.getFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 0, true), dataView.getFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 1, true), dataView.getFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 2, true), dataView.getFloat32(P + EASING_METHOD_BEZIER_COMPONENT_BYTES * 3, true)];
              P += EASING_METHOD_BEZIER_COMPONENT_BYTES * 4;
            }
            return keyframeValue;
          });
          if (interpolationModeRepeated) {
            const interpolationMode = dataView.getUint8(P);
            ++P;
            for (let iKeyframe = 0; iKeyframe < nFrames; ++iKeyframe) {
              keyframeValues[iKeyframe].interpolationMode = interpolationMode;
            }
          } else {
            for (let iKeyframe = 0; iKeyframe < nFrames; ++iKeyframe) {
              const interpolationMode = dataView.getUint8(P + iKeyframe);
              keyframeValues[iKeyframe].interpolationMode = interpolationMode;
            }
            P += nFrames;
          }
          this._times = times;
          this._values = keyframeValues;
        }
      }, (_initializer4 = _applyDecoratedInitializer(_class5.prototype, "preExtrapolation", [serializable], function () {
        return ExtrapolationMode.CLAMP;
      }), _initializer5 = _applyDecoratedInitializer(_class5.prototype, "postExtrapolation", [serializable], function () {
        return ExtrapolationMode.CLAMP;
      })), _class5)) || _class4));
      (function (KeyframeValueFlagMask) {
        KeyframeValueFlagMask[KeyframeValueFlagMask["INTERPOLATION_MODE"] = 1] = "INTERPOLATION_MODE";
      })(KeyframeValueFlagMask || (KeyframeValueFlagMask = {}));
      FLAGS_BYTES = 1;
      FRAME_COUNT_BYTES = 4;
      TIME_BYTES = 4;
      VALUE_BYTES = 4;
      INTERPOLATION_MODE_BYTES = 1;
      EASING_METHOD_BYTES = 1;
      EASING_METHOD_BEZIER_TAG = 255;
      EASING_METHOD_BEZIER_COMPONENT_BYTES = 4;
    }
  };
});