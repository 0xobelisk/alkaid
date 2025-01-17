System.register("q-bundled:///fs/pal/input/web/hmd-input.js", ["../../../cocos/input/types/event-enum.js", "../../../cocos/core/event/event-target.js", "../../../cocos/input/types/index.js", "../input-source.js", "../../../cocos/core/math/index.js", "../../../predefine.js"], function (_export, _context) {
  "use strict";

  var InputEventType, EventTarget, EventHMD, InputSourcePosition, InputSourceOrientation, Vec3, Quat, legacyCC, HMDInputDevice, Pose;
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
  _export("HMDInputDevice", void 0);
  return {
    setters: [function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }, function (_cocosCoreEventEventTargetJs) {
      EventTarget = _cocosCoreEventEventTargetJs.EventTarget;
    }, function (_cocosInputTypesIndexJs) {
      EventHMD = _cocosInputTypesIndexJs.EventHMD;
    }, function (_inputSourceJs) {
      InputSourcePosition = _inputSourceJs.InputSourcePosition;
      InputSourceOrientation = _inputSourceJs.InputSourceOrientation;
    }, function (_cocosCoreMathIndexJs) {
      Vec3 = _cocosCoreMathIndexJs.Vec3;
      Quat = _cocosCoreMathIndexJs.Quat;
    }, function (_predefineJs) {
      legacyCC = _predefineJs.default;
    }],
    execute: function () {
      (function (Pose) {
        Pose[Pose["VIEW_LEFT"] = 0] = "VIEW_LEFT";
        Pose[Pose["VIEW_RIGHT"] = 3] = "VIEW_RIGHT";
        Pose[Pose["HEAD_MIDDLE"] = 6] = "HEAD_MIDDLE";
      })(Pose || (Pose = {}));
      _export("HMDInputDevice", HMDInputDevice = class HMDInputDevice {
        get viewLeftPosition() {
          return this._viewLeftPosition;
        }
        get viewLeftOrientation() {
          return this._viewLeftOrientation;
        }
        get viewRightPosition() {
          return this._viewRightPosition;
        }
        get viewRightOrientation() {
          return this._viewRightOrientation;
        }
        get headMiddlePosition() {
          return this._headMiddlePosition;
        }
        get headMiddleOrientation() {
          return this._headMiddleOrientation;
        }
        constructor() {
          this._eventTarget = new EventTarget();
          this._intervalId = -1;
          this._viewLeftPosition = void 0;
          this._viewLeftOrientation = void 0;
          this._viewRightPosition = void 0;
          this._viewRightOrientation = void 0;
          this._headMiddlePosition = void 0;
          this._headMiddleOrientation = void 0;
          this._webPoseState = {
            [Pose.VIEW_LEFT]: {
              position: Vec3.ZERO,
              orientation: Quat.IDENTITY
            },
            [Pose.VIEW_RIGHT]: {
              position: Vec3.ZERO,
              orientation: Quat.IDENTITY
            },
            [Pose.HEAD_MIDDLE]: {
              position: Vec3.ZERO,
              orientation: Quat.IDENTITY
            }
          };
          this._initInputSource();
          this._registerEvent();
        }
        _ensureDirectorDefined() {
          return new Promise(resolve => {
            this._intervalId = setInterval(() => {
              if (legacyCC.director && legacyCC.Director) {
                clearInterval(this._intervalId);
                this._intervalId = -1;
                resolve();
              }
            }, 50);
          });
        }
        _registerEvent() {
          this._ensureDirectorDefined().then(() => {
            legacyCC.director.on(legacyCC.Director.EVENT_BEGIN_FRAME, this._scanHmd, this);
          }).catch(e => {});
        }
        _scanHmd() {
          var _globalThis$__globalX;
          const infoList = (_globalThis$__globalX = globalThis.__globalXR) === null || _globalThis$__globalX === void 0 ? void 0 : _globalThis$__globalX.webxrHmdPoseInfos;
          if (!infoList) {
            return;
          }
          for (let i = 0; i < infoList.length; ++i) {
            const info = infoList[i];
            this._updateWebPoseState(info);
          }
          this._eventTarget.emit(InputEventType.HMD_POSE_INPUT, new EventHMD(InputEventType.HMD_POSE_INPUT, this));
        }

        /**
         * @engineInternal
         */
        _on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        }
        _updateWebPoseState(info) {
          if (info.code !== Pose.VIEW_LEFT && info.code !== Pose.VIEW_RIGHT && info.code !== Pose.HEAD_MIDDLE) {
            return;
          }
          this._webPoseState[info.code] = {
            position: new Vec3(info.position.x, info.position.y, info.position.z),
            orientation: new Quat(info.orientation.x, info.orientation.y, info.orientation.z, info.orientation.w)
          };
        }
        _initInputSource() {
          this._viewLeftPosition = new InputSourcePosition();
          this._viewLeftPosition.getValue = () => this._webPoseState[Pose.VIEW_LEFT].position;
          this._viewLeftOrientation = new InputSourceOrientation();
          this._viewLeftOrientation.getValue = () => this._webPoseState[Pose.VIEW_LEFT].orientation;
          this._viewRightPosition = new InputSourcePosition();
          this._viewRightPosition.getValue = () => this._webPoseState[Pose.VIEW_RIGHT].position;
          this._viewRightOrientation = new InputSourceOrientation();
          this._viewRightOrientation.getValue = () => this._webPoseState[Pose.VIEW_RIGHT].orientation;
          this._headMiddlePosition = new InputSourcePosition();
          this._headMiddlePosition.getValue = () => this._webPoseState[Pose.HEAD_MIDDLE].position;
          this._headMiddleOrientation = new InputSourceOrientation();
          this._headMiddleOrientation.getValue = () => this._webPoseState[Pose.HEAD_MIDDLE].orientation;
        }
      });
    }
  };
});