System.register("q-bundled:///fs/cocos/physics/physx/shapes/physx-sphere-shape.js", ["../../../core/index.js", "../physx-adapter.js", "../physx-instance.js", "./physx-shape.js"], function (_export, _context) {
  "use strict";

  var absMaxComponent, PX, PhysXInstance, EPhysXShapeType, PhysXShape, PhysXSphereShape;
  _export("PhysXSphereShape", void 0);
  return {
    setters: [function (_coreIndexJs) {
      absMaxComponent = _coreIndexJs.absMaxComponent;
    }, function (_physxAdapterJs) {
      PX = _physxAdapterJs.PX;
    }, function (_physxInstanceJs) {
      PhysXInstance = _physxInstanceJs.PhysXInstance;
    }, function (_physxShapeJs) {
      EPhysXShapeType = _physxShapeJs.EPhysXShapeType;
      PhysXShape = _physxShapeJs.PhysXShape;
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
      _export("PhysXSphereShape", PhysXSphereShape = class PhysXSphereShape extends PhysXShape {
        constructor() {
          super(EPhysXShapeType.SPHERE);
          if (!PhysXSphereShape.SPHERE_GEOMETRY) {
            PhysXSphereShape.SPHERE_GEOMETRY = new PX.SphereGeometry(0.5);
          }
        }
        updateRadius() {
          this.updateScale();
        }
        get collider() {
          return this._collider;
        }
        onComponentSet() {
          this.updateGeometry();
          const pxmat = this.getSharedMaterial(this.collider.sharedMaterial);
          this._impl = PhysXInstance.physics.createShape(PhysXSphereShape.SPHERE_GEOMETRY, pxmat, true, this._flags);
        }
        updateScale() {
          this.updateGeometry();
          this._impl.setGeometry(PhysXSphereShape.SPHERE_GEOMETRY);
          this.setCenter(this._collider.center);
        }
        updateGeometry() {
          const co = this.collider;
          const maxSp = Math.abs(absMaxComponent(this.collider.node.worldScale));
          PhysXSphereShape.SPHERE_GEOMETRY.setRadius(Math.max(0.0001, co.radius * maxSp));
        }
      });
      PhysXSphereShape.SPHERE_GEOMETRY = void 0;
    }
  };
});