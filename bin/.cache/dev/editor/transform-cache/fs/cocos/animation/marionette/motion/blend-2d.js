System.register("q-bundled:///fs/cocos/animation/marionette/motion/blend-2d.js", ["../../../core/index.js"], function (_export, _context) {
  "use strict";

  var approx, assertIsTrue, Vec2, SimpleDirectionalIssueSameDirection, PolarSpaceGradientBandInterpolator2D, blendSimpleDirectional, _DEV_NOTE, getGradientBandCartesianCoords, PRECOMPUTED_VIJ_DATA_STRIDE;
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
  /**
   * Validates the samples if they satisfied the requirements of simple directional algorithm.
   * @param samples Samples to validate.
   * @returns Issues the samples containing.
   */
  function validateSimpleDirectionalSamples(samples) {
    const nSamples = samples.length;
    const issues = [];
    const sameDirectionValidationFlag = new Array(samples.length).fill(false);
    samples.forEach((sample, iSample) => {
      if (sameDirectionValidationFlag[iSample]) {
        return;
      }
      let sameDirectionSamples;
      for (let iCheckSample = 0; iCheckSample < nSamples; ++iCheckSample) {
        const checkSample = samples[iCheckSample];
        if (Vec2.equals(sample, checkSample, 1e-5)) {
          var _sameDirectionSamples;
          ((_sameDirectionSamples = sameDirectionSamples) !== null && _sameDirectionSamples !== void 0 ? _sameDirectionSamples : sameDirectionSamples = []).push(iCheckSample);
          sameDirectionValidationFlag[iCheckSample] = true;
        }
      }
      if (sameDirectionSamples) {
        sameDirectionSamples.unshift(iSample);
        issues.push(new SimpleDirectionalIssueSameDirection(sameDirectionSamples));
      }
    });
    return issues;
  }
  //#endregion

  /**
   * Cartesian Gradient Band Interpolation.
   * @param weights
   * @param thresholds
   * @param value
   */
  function sampleFreeformCartesian(weights, thresholds, value) {
    sampleFreeform(weights, thresholds, value, getGradientBandCartesianCoords);
  }
  function sampleFreeform(weights, samples, value, getGradientBandCoords) {
    weights.fill(0.0);
    const pIpInput = new Vec2(0, 0);
    const pIJ = new Vec2(0, 0);
    let sumInfluence = 0.0;
    const nSamples = samples.length;
    for (let iSample = 0; iSample < nSamples; ++iSample) {
      let influence = Number.MAX_VALUE;
      let outsideHull = false;
      for (let jSample = 0; jSample < nSamples; ++jSample) {
        if (iSample === jSample) {
          continue;
        }
        getGradientBandCoords(samples[iSample], samples[jSample], value, pIpInput, pIJ);
        const t = 1 - Vec2.dot(pIpInput, pIJ) / Vec2.lengthSqr(pIJ);
        if (t < 0) {
          outsideHull = true;
          break;
        }
        influence = Math.min(influence, t);
      }
      if (!outsideHull) {
        weights[iSample] = influence;
        sumInfluence += influence;
      }
    }
    if (sumInfluence > 0) {
      weights.forEach((influence, index) => weights[index] = influence / sumInfluence);
    }
  }
  /**
   * Solves the barycentric coordinates of `p` within triangle (0, `a`, `b`).
   * @param a Triangle vertex.
   * @param b Triangle vertex.
   * @param p Input vector.
   * @param resolutions The barycentric coordinates of `a` and `b`.
   * @returns
   */
  function solveBarycentric(a, b, p, resolutions) {
    // Let P = p - 0, A = a - 0, B = b - 0,
    // wA = (P x B) / (A x B)
    // wB = (P x A) / (B x A)
    const det = Vec2.cross(a, b);
    if (!det) {
      resolutions.wA = 0.0;
      resolutions.wB = 0.0;
    } else {
      resolutions.wA = Vec2.cross(p, b) / det;
      resolutions.wB = Vec2.cross(p, a) / -det;
    }
    return resolutions;
  }
  function signedAngle(v1, v2) {
    const angle = Vec2.angle(v1, v2);
    const determinate = v1.x * v2.y - v1.y * v2.x;
    return determinate < 0 ? -angle : angle;
  }
  _export({
    validateSimpleDirectionalSamples: validateSimpleDirectionalSamples,
    SimpleDirectionalIssueSameDirection: void 0,
    sampleFreeformCartesian: sampleFreeformCartesian,
    PolarSpaceGradientBandInterpolator2D: void 0
  });
  return {
    setters: [function (_coreIndexJs) {
      approx = _coreIndexJs.approx;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      Vec2 = _coreIndexJs.Vec2;
    }],
    execute: function () {
      /**
       * Blends given samples using simple directional algorithm.
       * @param weights Result weights of each sample.
       * @param samples Every samples' parameter.
       * @param input Input parameter.
       */
      _export("blendSimpleDirectional", blendSimpleDirectional = (() => {
        const CACHE_NORMALIZED_SAMPLE = new Vec2();
        const CACHE_BARYCENTRIC_SOLUTIONS = {
          wA: 0,
          wB: 0
        };
        return function blendSimpleDirectional(weights, samples, input) {
          assertIsTrue(weights.length === samples.length);
          if (samples.length === 0) {
            return;
          }
          if (samples.length === 1) {
            weights[0] = 1.0;
            return;
          }
          if (Vec2.strictEquals(input, Vec2.ZERO)) {
            const iCenter = samples.findIndex(sample => Vec2.strictEquals(sample, Vec2.ZERO));
            if (iCenter >= 0) {
              weights[iCenter] = 1.0;
            } else {
              weights.fill(1.0 / samples.length);
            }
            return;
          }

          // Finds out the sector the input point locates
          let iSectorStart = -1;
          let iSectorEnd = -1;
          let iCenter = -1;
          let lhsCosAngle = Number.NEGATIVE_INFINITY;
          let rhsCosAngle = Number.NEGATIVE_INFINITY;
          const {
            x: inputX,
            y: inputY
          } = input;
          for (let iSample = 0; iSample < samples.length; ++iSample) {
            const sample = samples[iSample];
            if (Vec2.equals(sample, Vec2.ZERO)) {
              iCenter = iSample;
              continue;
            }
            const sampleNormalized = Vec2.normalize(CACHE_NORMALIZED_SAMPLE, sample);
            const cosAngle = Vec2.dot(sampleNormalized, input);
            const sign = sampleNormalized.x * inputY - sampleNormalized.y * inputX;
            if (sign > 0) {
              if (cosAngle >= rhsCosAngle) {
                rhsCosAngle = cosAngle;
                iSectorStart = iSample;
              }
            } else if (cosAngle >= lhsCosAngle) {
              lhsCosAngle = cosAngle;
              iSectorEnd = iSample;
            }
          }
          let centerWeight = 0.0;
          if (iSectorStart < 0 || iSectorEnd < 0) {
            // Input fall at vertex.
            centerWeight = 1.0;
          } else {
            const {
              wA,
              wB
            } = solveBarycentric(samples[iSectorStart], samples[iSectorEnd], input, CACHE_BARYCENTRIC_SOLUTIONS);
            let w1 = 0.0;
            let w2 = 0.0;
            const sum = wA + wB;
            if (sum > 1) {
              // Input fall at line C-A or C-B but not beyond C
              w1 = wA / sum;
              w2 = wB / sum;
            } else if (sum < 0) {
              // Input fall at line C-A or C-B but beyond A or B
              w1 = 0.0;
              w2 = 0.0;
              centerWeight = 1.0;
            } else {
              // Inside triangle
              w1 = wA;
              w2 = wB;
              centerWeight = 1.0 - sum;
            }
            weights[iSectorStart] = w1;
            weights[iSectorEnd] = w2;
          }

          // Center influence part
          if (centerWeight > 0.0) {
            if (iCenter >= 0) {
              weights[iCenter] = centerWeight;
            } else {
              const average = centerWeight / weights.length;
              for (let i = 0; i < weights.length; ++i) {
                weights[i] += average;
              }
            }
          }
        };
      })());
      /**
       * Simple directional issue representing some samples have same(or very similar) direction.
       */
      _export("SimpleDirectionalIssueSameDirection", SimpleDirectionalIssueSameDirection = class SimpleDirectionalIssueSameDirection {
        constructor(samples) {
          this.samples = samples;
        }
      }); //#region Gradient Band Interpolation
      /**
       * In the following, two interpolation methods are implemented based on paper
       * [rune_skovbo_johansen_thesis.pdf](https://runevision.com/thesis/rune_skovbo_johansen_thesis.pdf).
       *
       * - Gradient brand interpolation in Cartesian space.
       *
       * - Gradient brand interpolation in polar space.
       *
       *   This is a variety of standard gradient brand interpolation
       *   which is suitable for velocity interpolation(the Cartesian one is not **WELL** suited as pointed out by the paper).
       *
       *   This type of method requires a motion to be placed at origin and
       *   the angles between adjacent points to be greater than 180°.
       */
      _DEV_NOTE = false;
      getGradientBandCartesianCoords = (pI, pJ, input, pIpInput, pIpJ) => {
        Vec2.subtract(pIpInput, input, pI);
        Vec2.subtract(pIpJ, pJ, pI);
      };
      PRECOMPUTED_VIJ_DATA_STRIDE = 3;
      /**
       * The class tracking the polar space gradient band interpolation.
       * For code readers, throughout the implementation:
       * - Variable names like `V_IJ` denotes a vector pointing from example motion "I" to example motion "J";
       * - Variable names like `V_IX` denotes a vector pointing from example motion "I" to new velocity being queried, which is properly named "X".
       * For detail definitions see section 6.3 in [paper](https://runevision.com/thesis/rune_skovbo_johansen_thesis.pdf) .
       */
      _export("PolarSpaceGradientBandInterpolator2D", PolarSpaceGradientBandInterpolator2D = class PolarSpaceGradientBandInterpolator2D {
        constructor(examples) {
          const {
            _ANGLE_MULTIPLIER: angleMultiplier
          } = PolarSpaceGradientBandInterpolator2D;
          const nExamples = examples.length;
          const exampleMagnitudes = this._exampleMagnitudes = new Array(nExamples).fill(0.0);
          const exampleDirections = this._exampleDirections = examples.map((example, iExample) => {
            const direction = Vec2.copy(new Vec2(), example);
            const magnitude = Vec2.len(direction);
            exampleMagnitudes[iExample] = magnitude;
            if (!approx(magnitude, 0.0, 1e-5)) {
              Vec2.multiplyScalar(direction, direction, 1.0 / magnitude);
            }
            return direction;
          });
          const precomputedVIJs = this._precomputedVIJs = new Float32Array(PRECOMPUTED_VIJ_DATA_STRIDE * nExamples * nExamples);
          for (let iExample = 0; iExample < nExamples; ++iExample) {
            const magnitudeI = exampleMagnitudes[iExample];
            const directionI = exampleDirections[iExample];
            for (let jExample = 0; jExample < nExamples; ++jExample) {
              if (iExample === jExample) {
                continue;
              }
              const magnitudeJ = exampleMagnitudes[jExample];
              const directionJ = exampleDirections[jExample];
              const averagedMagnitude = (magnitudeI + magnitudeJ) / 2;
              const pOutput = PRECOMPUTED_VIJ_DATA_STRIDE * (nExamples * iExample + jExample);
              precomputedVIJs[pOutput + 0] = (magnitudeJ - magnitudeI) / averagedMagnitude;
              precomputedVIJs[pOutput + 1] = signedAngle(directionI, directionJ) * angleMultiplier;
              precomputedVIJs[pOutput + 2] = averagedMagnitude;
            }
          }
          this._cacheVIXAngles = new Float32Array(nExamples);
        }
        interpolate(weights, input) {
          const {
            _exampleDirections: exampleDirections,
            _exampleMagnitudes: exampleMagnitudes,
            _precomputedVIJs: precomputedVIJs,
            _cacheVIXAngles: cacheVIXAngles
          } = this;
          const {
            _CACHE_INPUT_DIRECTION: cacheInputDirection,
            _CACHE_VIJ: cacheVIJ,
            _CACHE_VIX: cacheVIX,
            _ANGLE_MULTIPLIER: angleMultiplier
          } = PolarSpaceGradientBandInterpolator2D;
          const nExamples = exampleDirections.length;
          assertIsTrue(weights.length === nExamples);

          // Specially handle 0/1 sample case, the algorithm is not defined for them.
          if (nExamples === 0) {
            return;
          } else if (nExamples === 1) {
            weights[0] = 1.0;
            return;
          }
          const vX = input;
          const magnitudeX = Vec2.len(vX);

          // Calculate $\angle(v_i, v_x) * \alpha$ for each example.
          // If either vector is zero, the angle is defined as zero.
          const vIXAngles = cacheVIXAngles;
          if (Vec2.equals(vX, Vec2.ZERO)) {
            for (let iExample = 0; iExample < nExamples; ++iExample) {
              vIXAngles[iExample] = 0.0;
            }
          } else {
            const directionX = Vec2.multiplyScalar(cacheInputDirection, vX, 1.0 / magnitudeX);
            for (let iExample = 0; iExample < nExamples; ++iExample) {
              const directionI = exampleDirections[iExample];
              if (Vec2.equals(directionI, Vec2.ZERO)) {
                vIXAngles[iExample] = 0.0;
              } else {
                vIXAngles[iExample] = signedAngle(directionI, directionX) * angleMultiplier;
              }
            }
          }

          // The polar space gradient band interpolation.
          let totalWeight = 0.0;
          for (let iExample = 0; iExample < nExamples; ++iExample) {
            const magnitudeI = exampleMagnitudes[iExample];
            const directionI = exampleDirections[iExample];
            let minInfluence = Number.POSITIVE_INFINITY; // 1 - Math.abs(vIXAngles[iExample]) / Math.PI;
            for (let jExample = 0; jExample < nExamples; ++jExample) {
              if (iExample === jExample) {
                continue;
              }
              const directionJ = exampleDirections[jExample];
              const precomputedDataIndex = PRECOMPUTED_VIJ_DATA_STRIDE * (nExamples * iExample + jExample);
              const {
                [precomputedDataIndex + 0]: vIJMag,
                [precomputedDataIndex + 1]: vIJAnglePrecomputed,
                [precomputedDataIndex + 2]: averagedMagnitude
              } = precomputedVIJs;
              let vIJAngle = vIJAnglePrecomputed;
              let vIXAngle = vIXAngles[iExample];

              // Handle zero cases:
              // - If $v_i$(or $v_j$) is zero vector,
              //   the angle between v_i_j is defined to be the angle between $v_x$ and $v_j$(or $v_i$).
              // - If $v_x$ is zero vector,
              //   the angle between v_i_x is defined to be the angle between $v_i$ and $v_j$.
              if (Vec2.equals(directionI, Vec2.ZERO)) {
                vIJAngle = vIXAngles[jExample];
                // And `vIXAngle` is 0 as computed above.
              } else if (Vec2.equals(directionJ, Vec2.ZERO)) {
                vIJAngle = vIXAngles[iExample];
              } else if (Vec2.equals(vX, Vec2.ZERO)) {
                vIXAngle = vIJAngle;
              }
              const vIJ = Vec2.set(cacheVIJ, vIJMag, vIJAngle);
              const vIX = Vec2.set(cacheVIX, (magnitudeX - magnitudeI) / averagedMagnitude, vIXAngle);

              // Calculate the influence.
              // Note we can't cache `len(vIJ)` due to above process of `vIJ.y`!
              const influence = 1.0 - Vec2.dot(vIX, vIJ) / Vec2.lengthSqr(vIJ);
              if (influence <= 0) {
                // The input is outside hull.
                minInfluence = 0.0;
                break; // No more iteration.
              }

              minInfluence = Math.min(minInfluence, influence);
            }
            weights[iExample] = minInfluence;
            totalWeight += minInfluence;
          }

          // Normalize the weights.
          if (totalWeight > 0) {
            for (let iExample = 0; iExample < nExamples; ++iExample) {
              weights[iExample] /= totalWeight;
            }
          } else {
            // This can happen if there no example at origin and the input is origin.
            // Just average weight to all examples.
            const averaged = 1.0 / nExamples;
            for (let iExample = 0; iExample < nExamples; ++iExample) {
              weights[iExample] = averaged;
            }
          }
        }

        /**
         * n*n Precomputed (\vec{p_i}{p_j}, (|p_i| + |p_j|) / 2).
         */
      });
      PolarSpaceGradientBandInterpolator2D._CACHE_INPUT_DIRECTION = new Vec2();
      PolarSpaceGradientBandInterpolator2D._CACHE_VIJ = new Vec2();
      PolarSpaceGradientBandInterpolator2D._CACHE_VIX = new Vec2();
      PolarSpaceGradientBandInterpolator2D._ANGLE_MULTIPLIER = 1.0;
    }
  };
});