System.register("q-bundled:///fs/cocos/physics-2d/box2d-wasm/joints/wheel-joint.js", ["../instantiated.js", "./joint-2d.js", "../../framework/physics-types.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var B2, B2Joint, PHYSICS_2D_PTM_RATIO, toRadian, B2WheelJoint;
  _export("B2WheelJoint", void 0);
  return {
    setters: [function (_instantiatedJs) {
      B2 = _instantiatedJs.B2;
    }, function (_joint2dJs) {
      B2Joint = _joint2dJs.B2Joint;
    }, function (_frameworkPhysicsTypesJs) {
      PHYSICS_2D_PTM_RATIO = _frameworkPhysicsTypesJs.PHYSICS_2D_PTM_RATIO;
    }, function (_coreIndexJs) {
      toRadian = _coreIndexJs.toRadian;
    }],
    execute: function () {
      /*
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
      _export("B2WheelJoint", B2WheelJoint = class B2WheelJoint extends B2Joint {
        setFrequency(v) {
          if (this._b2joint) {
            this._b2joint.SetSpringFrequencyHz(v);
          }
        }
        setDampingRatio(v) {
          if (this._b2joint) {
            this._b2joint.SetSpringDampingRatio(v);
          }
        }

        // motor
        enableMotor(v) {
          if (this._b2joint) {
            this._b2joint.EnableMotor(v);
          }
        }
        setMaxMotorTorque(v) {
          if (this._b2joint) {
            this._b2joint.SetMaxMotorTorque(v);
          }
        }
        setMotorSpeed(v) {
          if (this._b2joint) {
            this._b2joint.SetMotorSpeed(v);
          }
        }
        _createJointDef() {
          const comp = this._jointComp;
          const def = new B2.WheelJointDef();
          def.localAnchorA = {
            x: comp.anchor.x / PHYSICS_2D_PTM_RATIO,
            y: comp.anchor.y / PHYSICS_2D_PTM_RATIO
          };
          def.localAnchorB = {
            x: comp.connectedAnchor.x / PHYSICS_2D_PTM_RATIO,
            y: comp.connectedAnchor.y / PHYSICS_2D_PTM_RATIO
          };
          const angle = toRadian(comp.angle);
          def.localAxisA = {
            x: Math.cos(angle),
            y: Math.sin(angle)
          };
          def.maxMotorTorque = comp.maxMotorTorque;
          def.motorSpeed = toRadian(comp.motorSpeed);
          def.enableMotor = comp.enableMotor;
          def.dampingRatio = comp.dampingRatio;
          def.frequencyHz = comp.frequency;
          return def;
        }
      });
    }
  };
});