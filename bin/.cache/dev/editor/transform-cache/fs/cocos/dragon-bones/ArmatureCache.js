System.register("q-bundled:///fs/cocos/dragon-bones/ArmatureCache.js", ["@cocos/dragonbones-js", "./CCFactory.js"], function (_export, _context) {
  "use strict";

  var Matrix, CCFactory, AnimationCache, ArmatureCache, _class2, MaxCacheTime, FrameTime, _vertices, _indices, _boneInfoOffset, _indexOffset, _vfOffset, _preTexUrl, _preBlendMode, _segVCount, _segICount, _segOffset, _colorOffset, _preColor, _x, _y, PER_VERTEX_SIZE, EXPORT_VERTEX_SIZE;
  _export({
    AnimationCache: void 0,
    ArmatureCache: void 0
  });
  return {
    setters: [function (_cocosDragonbonesJs) {
      Matrix = _cocosDragonbonesJs.Matrix;
    }, function (_CCFactoryJs) {
      CCFactory = _CCFactoryJs.CCFactory;
    }],
    execute: function () {
      MaxCacheTime = 30;
      FrameTime = 1 / 60;
      _vertices = [];
      _indices = [];
      _boneInfoOffset = 0;
      _indexOffset = 0;
      _vfOffset = 0;
      _preTexUrl = null;
      _preBlendMode = null;
      _segVCount = 0;
      _segICount = 0;
      _segOffset = 0;
      _colorOffset = 0;
      _preColor = 0;
      // x y u v c1
      PER_VERTEX_SIZE = 5; // x y z / u v / r g b a
      EXPORT_VERTEX_SIZE = 9;
      /**
       * @engineInternal Since v3.7.2 this is an engine private interface.
       */
      /**
       * @engineInternal Since v3.7.2 this is an engine private interface.
       */
      /**
       * @engineInternal Since v3.7.2 this is an engine private interface.
       */
      /**
       * @engineInternal Since v3.7.2 this is an engine private interface.
       */
      /**
       * @engineInternal Since v3.7.2 this is an engine private interface.
       */
      /**
       * @engineInternal Since v3.7.2 this is an engine private class.
       * @en Cache all frames in an animation.
       * @zh 缓存所有动画帧。
       */
      _export("AnimationCache", AnimationCache = class AnimationCache {
        constructor() {
          this.maxVertexCount = 0;
          this.maxIndexCount = 0;
          this._privateMode = false;
          this._inited = false;
          this._invalid = true;
          this._enableCacheAttachedInfo = false;
          this.frames = [];
          this.totalTime = 0;
          this.isCompleted = false;
          this._frameIdx = -1;
          this._armatureInfo = null;
          this._animationName = null;
          this._tempSegments = null;
          this._tempColors = null;
          this._tempBoneInfos = null;
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         * @en Initialization.
         * @zh 初始化。
         * @param armatureInfo @en Armature info. @zh 龙骨信息。
         * @param animationName @en Animation name. @zh 动画名称。
         */
        init(armatureInfo, animationName) {
          this._inited = true;
          this._armatureInfo = armatureInfo;
          this._animationName = animationName;
        }

        /**
         * @en Clears all animation frames cached.
         * @zh 清除所有缓存动画帧。
         */
        clear() {
          this._inited = false;
          for (let i = 0, n = this.frames.length; i < n; i++) {
            const frame = this.frames[i];
            frame.segments.length = 0;
          }
          this.invalidAllFrame();
        }
        /**
         * @en Start to play cached frames.
         * @zh 开始播放缓存动画帧。
         */
        begin() {
          if (!this._invalid) return;
          const armatureInfo = this._armatureInfo;
          const curAnimationCache = armatureInfo.curAnimationCache;
          if (curAnimationCache && curAnimationCache !== this) {
            if (this._privateMode) {
              curAnimationCache.invalidAllFrame();
            } else {
              curAnimationCache.updateToFrame();
            }
          }
          const armature = armatureInfo.armature;
          const animation = armature.animation;
          animation.play(this._animationName, 1);
          armatureInfo.curAnimationCache = this;
          this._invalid = false;
          this._frameIdx = -1;
          this.totalTime = 0;
          this.isCompleted = false;
        }
        /**
         * @en Complete to play cached frames.
         * @zh 完成播放缓存动画帧。
         */
        end() {
          if (!this._needToUpdate()) {
            this._armatureInfo.curAnimationCache = null;
            this.frames.length = this._frameIdx + 1;
            this.isCompleted = true;
          }
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        _needToUpdate(toFrameIdx) {
          const armatureInfo = this._armatureInfo;
          const armature = armatureInfo.armature;
          const animation = armature.animation;
          return !animation.isCompleted && this.totalTime < MaxCacheTime && (toFrameIdx === undefined || this._frameIdx < toFrameIdx);
        }
        /**
         * @en Update to specified animation frame.
         * @zh 更新动画到指定帧序列。
         * @param toFrameIdx @en Frame index. @zh 帧序列。
         */
        updateToFrame(toFrameIdx) {
          if (!this._inited) return;
          this.begin();
          if (!this._needToUpdate(toFrameIdx)) return;
          const armatureInfo = this._armatureInfo;
          const armature = armatureInfo.armature;
          do {
            // Solid update frame rate 1/60.
            armature.advanceTime(FrameTime);
            this._frameIdx++;
            this.updateFrame(armature, this._frameIdx);
            this.totalTime += FrameTime;
          } while (this._needToUpdate(toFrameIdx));
          this.end();
        }
        /**
         * @en Check if initialized or not.
         * @zh 检查是否已初始化。
         * @returns @en True means has been initialized, false means not.
         *          @zh True 表示已初始化完成，false 表示还没初始化。
         */
        isInited() {
          return this._inited;
        }
        /**
         * @en Check if current state is invalid.
         * @zh 检查当前状态是否为无效。
         * @returns @zh True means invalid, false means valid.
         *          @en True 表示当前数据为无效状态，false 表示当前数据有效。
         */
        isInvalid() {
          return this._invalid;
        }
        /**
         * @en Mark all cached frames as invalid.
         * @zh 将所有缓存帧标记为无效的。
         */
        invalidAllFrame() {
          this.isCompleted = false;
          this._invalid = true;
        }
        /**
         * @en Update all cached frames.
         * @zh 更新所有缓存帧。
         */
        updateAllFrame() {
          this.invalidAllFrame();
          this.updateToFrame();
        }
        /**
         * @en Enable attached information.
         * @zh 启用挂载附着信息。
         */
        enableCacheAttachedInfo() {
          if (!this._enableCacheAttachedInfo) {
            this._enableCacheAttachedInfo = true;
            this.invalidAllFrame();
          }
        }
        /**
         * @en Update to specified animation frame of armature.
         * @zh 更新龙骨动画到指定帧序列。
         * @param armature @en Armature. @zh 指定骨架。
         * @param index @en Frame index. @zh 帧序列。
         */
        updateFrame(armature, index) {
          _vfOffset = 0;
          _boneInfoOffset = 0;
          _indexOffset = 0;
          _preTexUrl = null;
          _preBlendMode = null;
          _segVCount = 0;
          _segICount = 0;
          _segOffset = 0;
          _colorOffset = 0;
          _preColor = 0;
          this.frames[index] = this.frames[index] || {
            segments: [],
            colors: [],
            boneInfos: [],
            vertices: new Float32Array(),
            uintVert: new Uint32Array(),
            indices: new Uint16Array()
          };
          const frame = this.frames[index];
          const segments = this._tempSegments = frame.segments;
          const colors = this._tempColors = frame.colors;
          const boneInfos = this._tempBoneInfos = frame.boneInfos;
          this._traverseArmature(armature, 1.0);
          // At last must handle pre color and segment.
          // Because vertex count will right at the end.
          // Handle pre color.
          if (_colorOffset > 0) {
            colors[_colorOffset - 1].vfOffset = _vfOffset;
          }
          colors.length = _colorOffset;
          boneInfos.length = _boneInfoOffset;

          // Handle pre segment
          const preSegOffset = _segOffset - 1;
          if (preSegOffset >= 0) {
            if (_segICount > 0) {
              const preSegInfo = segments[preSegOffset];
              preSegInfo.indexCount = _segICount;
              preSegInfo.vfCount = _segVCount * EXPORT_VERTEX_SIZE;
              preSegInfo.vertexCount = _segVCount;
              segments.length = _segOffset;
            } else {
              segments.length = _segOffset - 1;
            }
          }

          // Discard all segments.
          if (segments.length === 0) return;

          // Fill vertices
          let vertices = frame.vertices;
          const vertexCount = _vfOffset / PER_VERTEX_SIZE;
          const copyOutVerticeSize = vertexCount * EXPORT_VERTEX_SIZE;
          if (!vertices || vertices.length < _vfOffset) {
            vertices = frame.vertices = new Float32Array(copyOutVerticeSize);
          }
          let colorI32;
          for (let i = 0, j = 0; i < copyOutVerticeSize;) {
            vertices[i] = _vertices[j++]; // x
            vertices[i + 1] = _vertices[j++]; // y
            vertices[i + 3] = _vertices[j++]; // u
            vertices[i + 4] = _vertices[j++]; // v
            colorI32 = _vertices[j++];
            vertices[i + 5] = (colorI32 & 0xff) / 255.0;
            vertices[i + 6] = (colorI32 >> 8 & 0xff) / 255.0;
            vertices[i + 7] = (colorI32 >> 16 & 0xff) / 255.0;
            vertices[i + 8] = (colorI32 >> 24 & 0xff) / 255.0;
            i += EXPORT_VERTEX_SIZE;
          }

          // Fill indices
          let indices = frame.indices;
          if (!indices || indices.length < _indexOffset) {
            indices = frame.indices = new Uint16Array(_indexOffset);
          }
          for (let i = 0; i < _indexOffset; i++) {
            indices[i] = _indices[i];
          }
          frame.vertices = vertices;
          frame.indices = indices;
          this.maxVertexCount = vertexCount > this.maxVertexCount ? vertexCount : this.maxVertexCount;
          this.maxIndexCount = indices.length > this.maxIndexCount ? indices.length : this.maxIndexCount;
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        _traverseArmature(armature, parentOpacity) {
          const colors = this._tempColors;
          const segments = this._tempSegments;
          const boneInfos = this._tempBoneInfos;
          const slots = armature._slots;
          let slotVertices;
          let slotIndices;
          let slot;
          let slotMatrix;
          let slotColor;
          let colorVal;
          let texture;
          let preSegOffset;
          let preSegInfo;
          const bones = armature._bones;
          if (this._enableCacheAttachedInfo) {
            for (let i = 0, l = bones.length; i < l; i++, _boneInfoOffset++) {
              const bone = bones[i];
              let boneInfo = boneInfos[_boneInfoOffset];
              if (!boneInfo) {
                boneInfo = boneInfos[_boneInfoOffset] = {
                  globalTransformMatrix: new Matrix()
                };
              }
              const boneMat = bone.globalTransformMatrix;
              const cacheBoneMat = boneInfo.globalTransformMatrix;
              cacheBoneMat.copyFrom(boneMat);
            }
          }
          for (let i = 0, l = slots.length; i < l; i++) {
            slot = slots[i];
            if (!slot._visible || !slot._displayData) continue;
            slot.updateWorldMatrix();
            slotColor = slot._color;
            if (slot.childArmature) {
              this._traverseArmature(slot.childArmature, parentOpacity * slotColor.a / 255);
              continue;
            }
            texture = slot.getTexture();
            if (!texture) continue;
            if (_preTexUrl !== texture.nativeUrl || _preBlendMode !== slot._blendMode) {
              _preTexUrl = texture.nativeUrl;
              _preBlendMode = slot._blendMode;
              // Handle pre segment.
              preSegOffset = _segOffset - 1;
              if (preSegOffset >= 0) {
                if (_segICount > 0) {
                  preSegInfo = segments[preSegOffset];
                  preSegInfo.indexCount = _segICount;
                  preSegInfo.vertexCount = _segVCount;
                  preSegInfo.vfCount = _segVCount * EXPORT_VERTEX_SIZE;
                } else {
                  // Discard pre segment.
                  _segOffset--;
                }
              }
              // Handle now segment.
              segments[_segOffset] = {
                tex: texture,
                blendMode: slot._blendMode,
                indexCount: 0,
                vertexCount: 0,
                vfCount: 0
              };
              _segOffset++;
              _segICount = 0;
              _segVCount = 0;
            }
            colorVal = (slotColor.a * parentOpacity << 24 >>> 0) + (slotColor.b << 16) + (slotColor.g << 8) + slotColor.r;
            if (_preColor !== colorVal) {
              _preColor = colorVal;
              if (_colorOffset > 0) {
                colors[_colorOffset - 1].vfOffset = _vfOffset;
              }
              colors[_colorOffset++] = {
                r: slotColor.r,
                g: slotColor.g,
                b: slotColor.b,
                a: slotColor.a * parentOpacity,
                vfOffset: 0
              };
            }
            slotVertices = slot._localVertices;
            slotIndices = slot._indices;
            slotMatrix = slot._worldMatrix;
            for (let j = 0, vl = slotVertices.length; j < vl;) {
              _x = slotVertices[j++];
              _y = slotVertices[j++];
              _vertices[_vfOffset++] = _x * slotMatrix.m00 + _y * slotMatrix.m04 + slotMatrix.m12;
              _vertices[_vfOffset++] = _x * slotMatrix.m01 + _y * slotMatrix.m05 + slotMatrix.m13;
              _vertices[_vfOffset++] = slotVertices[j++];
              _vertices[_vfOffset++] = slotVertices[j++];
              _vertices[_vfOffset++] = colorVal;
            }

            // This place must use segment vertex count to calculate vertex offset.
            // Assembler will calculate vertex offset again for different segment.
            for (let ii = 0, il = slotIndices.length; ii < il; ii++) {
              _indices[_indexOffset++] = _segVCount + slotIndices[ii];
            }
            _segICount += slotIndices.length;
            _segVCount += slotVertices.length / 4;
          }
        }
      });
      /**
       * @en Cached data of armature.
       * @zh 骨架缓存。
       */
      _export("ArmatureCache", ArmatureCache = class ArmatureCache {
        constructor() {
          this._privateMode = false;
          this._animationPool = {};
          this._armatureCache = {};
        }
        /**
         * @en Enable private cache mode.
         * @zh 启用私有缓存模式。
         */
        enablePrivateMode() {
          this._privateMode = true;
        }

        /**
         * @en If using private cache mode, all cached data will be destroyed when corresponding dragonbone nodes are destroyed.
         * @zh 如果为私有缓存模式，cache 数据将随组件一起销毁。
         */
        dispose() {
          for (const key in this._armatureCache) {
            const armatureInfo = this._armatureCache[key];
            if (armatureInfo) {
              const armature = armatureInfo.armature;
              if (armature) armature.dispose();
            }
          }
          this._armatureCache = {};
          this._animationPool = {};
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        _removeArmature(armatureKey) {
          const armatureInfo = this._armatureCache[armatureKey];
          const animationsCache = armatureInfo.animationsCache;
          for (const aniKey in animationsCache) {
            // Clear cache texture, and put cache into pool.
            // No need to create TypedArray next time.
            const animationCache = animationsCache[aniKey];
            if (!animationCache) continue;
            this._animationPool[`${armatureKey}#${aniKey}`] = animationCache;
            animationCache.clear();
          }
          const armature = armatureInfo.armature;
          if (armature) armature.dispose();
          delete this._armatureCache[armatureKey];
        }
        /**
         * @en When dragonbones assets be destroy, remove armature from dragonbones cache.
         * @zh 当 dragonbones assets 销毁时，从 cache 中移除骨架。
         */
        resetArmature(uuid) {
          for (const armatureKey in this._armatureCache) {
            if (armatureKey.indexOf(uuid) === -1) continue;
            this._removeArmature(armatureKey);
          }
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        getArmatureCache(armatureName, armatureKey, atlasUUID) {
          const armatureInfo = this._armatureCache[armatureKey];
          let armature;
          if (!armatureInfo) {
            const factory = CCFactory.getInstance();
            const proxy = factory.buildArmatureDisplay(armatureName, armatureKey, '', atlasUUID);
            if (!proxy || !proxy._armature) return null;
            armature = proxy._armature;
            // If armature has child armature, can not be cache, because it's
            // animation data can not be precompute.
            if (!ArmatureCache.canCache(armature)) {
              armature.dispose();
              return null;
            }
            this._armatureCache[armatureKey] = {
              armature,
              // Cache all kinds of animation frame.
              // When armature is dispose, clear all animation cache.
              animationsCache: {},
              curAnimationCache: null
            };
          } else {
            armature = armatureInfo.armature;
          }
          return armature;
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        getAnimationCache(armatureKey, animationName) {
          const armatureInfo = this._armatureCache[armatureKey];
          if (!armatureInfo) return null;
          const animationsCache = armatureInfo.animationsCache;
          return animationsCache[animationName];
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        initAnimationCache(armatureKey, animationName) {
          if (!animationName) return null;
          const armatureInfo = this._armatureCache[armatureKey];
          const armature = armatureInfo && armatureInfo.armature;
          if (!armature) return null;
          const animation = armature.animation;
          const hasAni = animation.hasAnimation(animationName);
          if (!hasAni) return null;
          const animationsCache = armatureInfo.animationsCache;
          let animationCache = animationsCache[animationName];
          if (!animationCache) {
            // If cache exist in pool, then just use it.
            const poolKey = `${armatureKey}#${animationName}`;
            animationCache = this._animationPool[poolKey];
            if (animationCache) {
              delete this._animationPool[poolKey];
            } else {
              animationCache = new AnimationCache();
              animationCache._privateMode = this._privateMode;
            }
            animationCache.init(armatureInfo, animationName);
            animationsCache[animationName] = animationCache;
          }
          return animationCache;
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        invalidAnimationCache(armatureKey) {
          const armatureInfo = this._armatureCache[armatureKey];
          const armature = armatureInfo && armatureInfo.armature;
          if (!armature) return;
          const animationsCache = armatureInfo.animationsCache;
          for (const aniKey in animationsCache) {
            const animationCache = animationsCache[aniKey];
            animationCache.invalidAllFrame();
          }
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        updateAnimationCache(armatureKey, animationName) {
          if (animationName) {
            const animationCache = this.initAnimationCache(armatureKey, animationName);
            if (!animationCache) return;
            animationCache.updateAllFrame();
          } else {
            const armatureInfo = this._armatureCache[armatureKey];
            const armature = armatureInfo && armatureInfo.armature;
            if (!armature) return;
            const animationsCache = armatureInfo.animationsCache;
            for (const aniKey in animationsCache) {
              const animationCache = animationsCache[aniKey];
              animationCache.updateAllFrame();
            }
          }
        }
        /**
         * @engineInternal Since v3.7.2 this is an engine private function.
         */
        static canCache(armature) {
          const slots = armature._slots;
          for (let i = 0, l = slots.length; i < l; i++) {
            const slot = slots[i];
            if (slot.childArmature) {
              return false;
            }
          }
          return true;
        }
      });
      _class2 = ArmatureCache;
      ArmatureCache.FrameTime = FrameTime;
      ArmatureCache.sharedCache = new _class2();
    }
  };
});