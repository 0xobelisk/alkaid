System.register("q-bundled:///fs/cocos/physics-2d/box2d/joints/wheel-joint.js", ["@cocos/box2d", "./joint-2d.js", "../../framework/physics-types.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var b2, b2Joint, PHYSICS_2D_PTM_RATIO, toRadian, b2WheelJoint;
  _export("b2WheelJoint", void 0);
  return {
    setters: [function (_cocosBox2d) {
      b2 = _cocosBox2d.default;
    }, function (_joint2dJs) {
      b2Joint = _joint2dJs.b2Joint;
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
      _export("b2WheelJoint", b2WheelJoint = class b2WheelJoint extends b2Joint {
        setDampingRatio(v) {
          if (this._b2joint) {
            this._b2joint.SetSpringDampingRatio(v);
          }
        }
        setFrequency(v) {
          if (this._b2joint) {
            this._b2joint.SetSpringFrequencyHz(v);
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
          const def = new b2.WheelJointDef();
          def.localAnchorA.Set(comp.anchor.x / PHYSICS_2D_PTM_RATIO, comp.anchor.y / PHYSICS_2D_PTM_RATIO);
          def.localAnchorB.Set(comp.connectedAnchor.x / PHYSICS_2D_PTM_RATIO, comp.connectedAnchor.y / PHYSICS_2D_PTM_RATIO);
          const angle = toRadian(comp.angle);
          def.localAxisA.Set(Math.cos(angle), Math.sin(angle));
          // def.localAxisA.Set(0, 1);
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