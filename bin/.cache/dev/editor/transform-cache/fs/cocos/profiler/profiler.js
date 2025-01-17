System.register("q-bundled:///fs/cocos/profiler/profiler.js", ["../../../virtual/internal%253Aconstants.js", "../3d/framework/mesh-renderer.js", "../3d/misc/index.js", "../asset/assets/material.js", "../gfx/index.js", "../scene-graph/index.js", "../scene-graph/node.js", "./perf-counter.js", "../core/index.js", "../game/index.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var TEST, MeshRenderer, createMesh, Material, Format, TextureType, TextureUsageBit, TextureInfo, BufferTextureCopy, deviceManager, Layers, Node, PerfCounter, preTransforms, System, sys, cclegacy, Settings, settings, warn, director, ccwindow, Profiler, _characters, _average, _string2offset, _profileInfo, _constants, profiler;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2013-2016 Chukong Technologies Inc.
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  _export("Profiler", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_dFrameworkMeshRendererJs) {
      MeshRenderer = _dFrameworkMeshRendererJs.MeshRenderer;
    }, function (_dMiscIndexJs) {
      createMesh = _dMiscIndexJs.createMesh;
    }, function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_gfxIndexJs) {
      Format = _gfxIndexJs.Format;
      TextureType = _gfxIndexJs.TextureType;
      TextureUsageBit = _gfxIndexJs.TextureUsageBit;
      TextureInfo = _gfxIndexJs.TextureInfo;
      BufferTextureCopy = _gfxIndexJs.BufferTextureCopy;
      deviceManager = _gfxIndexJs.deviceManager;
    }, function (_sceneGraphIndexJs) {
      Layers = _sceneGraphIndexJs.Layers;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_perfCounterJs) {
      PerfCounter = _perfCounterJs.PerfCounter;
    }, function (_coreIndexJs) {
      preTransforms = _coreIndexJs.preTransforms;
      System = _coreIndexJs.System;
      sys = _coreIndexJs.sys;
      cclegacy = _coreIndexJs.cclegacy;
      Settings = _coreIndexJs.Settings;
      settings = _coreIndexJs.settings;
      warn = _coreIndexJs.warn;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }, function (_coreGlobalExportsJs) {
      ccwindow = _coreGlobalExportsJs.ccwindow;
    }],
    execute: function () {
      _characters = '0123456789. ';
      _average = 500;
      _string2offset = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        '.': 10
      };
      _profileInfo = {
        fps: {
          desc: `Framerate (FPS)`,
          below: 30,
          average: _average,
          isInteger: true
        },
        draws: {
          desc: 'Draw call',
          isInteger: true
        },
        frame: {
          desc: 'Frame time (ms)',
          min: 0,
          max: 50,
          average: _average
        },
        instances: {
          desc: 'Instance Count',
          isInteger: true
        },
        tricount: {
          desc: 'Triangle',
          isInteger: true
        },
        logic: {
          desc: 'Game Logic (ms)',
          min: 0,
          max: 50,
          average: _average,
          color: '#080'
        },
        physics: {
          desc: 'Physics (ms)',
          min: 0,
          max: 50,
          average: _average
        },
        render: {
          desc: 'Renderer (ms)',
          min: 0,
          max: 50,
          average: _average,
          color: '#f90'
        },
        present: {
          desc: 'Present (ms)',
          min: 0,
          max: 50,
          average: _average,
          color: '#f90'
        },
        textureMemory: {
          desc: 'GFX Texture Mem(M)'
        },
        bufferMemory: {
          desc: 'GFX Buffer Mem(M)'
        }
      };
      _constants = {
        fontSize: 23,
        quadHeight: 0.4,
        segmentsPerLine: 8,
        textureWidth: 280,
        textureHeight: 280
      };
      _export("Profiler", Profiler = class Profiler extends System {
        // update use time

        constructor() {
          super();
          this._profilerStats = null;
          this._showFPS = false;
          this._rootNode = null;
          this._device = null;
          this._swapchain = null;
          this._meshRenderer = null;
          this._canvas = null;
          this._ctx = null;
          this._texture = null;
          this._region = new BufferTextureCopy();
          this._canvasArr = [];
          this._regionArr = [this._region];
          this.digitsData = null;
          this.offsetData = null;
          this.pass = null;
          this._canvasDone = false;
          this._statsDone = false;
          this._inited = false;
          this._lineHeight = _constants.textureHeight / (Object.keys(_profileInfo).length + 1);
          this._wordHeight = 0;
          this._eachNumWidth = 0;
          this._totalLines = 0;
          // total lines to display
          this.lastTime = 0;
          if (!TEST) {
            this._canvas = ccwindow.document.createElement('canvas');
            this._ctx = this._canvas.getContext('2d');
            this._canvasArr.push(this._canvas);
          }
        }
        init() {
          const showFPS = !!settings.querySettings(Settings.Category.PROFILING, 'showFPS');
          if (showFPS) {
            this.showStats();
          } else {
            this.hideStats();
          }
        }

        /**
         * @deprecated We have removed this private interface in version 3.8, please use the public interface get stats instead.
         */
        get _stats() {
          warn('Profiler._stats is deprecated, please use Profiler.stats instead.');
          return this._profilerStats;
        }

        /**
         * @zh 获取引擎运行性能状态
         * @en Get engine performance status
         */
        get stats() {
          return this._profilerStats;
        }
        isShowingStats() {
          return this._showFPS;
        }
        hideStats() {
          if (this._showFPS) {
            if (this._rootNode) {
              this._rootNode.active = false;
            }
            cclegacy.director.off(cclegacy.Director.EVENT_BEFORE_UPDATE, this.beforeUpdate, this);
            cclegacy.director.off(cclegacy.Director.EVENT_AFTER_UPDATE, this.afterUpdate, this);
            cclegacy.director.off(cclegacy.Director.EVENT_BEFORE_PHYSICS, this.beforePhysics, this);
            cclegacy.director.off(cclegacy.Director.EVENT_AFTER_PHYSICS, this.afterPhysics, this);
            cclegacy.director.off(cclegacy.Director.EVENT_BEFORE_DRAW, this.beforeDraw, this);
            cclegacy.director.off(cclegacy.Director.EVENT_AFTER_RENDER, this.afterRender, this);
            cclegacy.director.off(cclegacy.Director.EVENT_AFTER_DRAW, this.afterPresent, this);
            this._showFPS = false;
            director.root.pipeline.profiler = null;
            cclegacy.game.config.showFPS = false;
          }
        }
        showStats() {
          if (!this._showFPS) {
            if (!this._device) {
              const root = cclegacy.director.root;
              this._device = deviceManager.gfxDevice;
              this._swapchain = root.mainWindow.swapchain;
            }
            this.generateCanvas();
            this.generateStats();
            cclegacy.game.once(cclegacy.Game.EVENT_ENGINE_INITED, this.generateNode, this);
            cclegacy.game.on(cclegacy.Game.EVENT_RESTART, this.generateNode, this);
            if (this._rootNode) {
              this._rootNode.active = true;
            }
            cclegacy.director.on(cclegacy.Director.EVENT_BEFORE_UPDATE, this.beforeUpdate, this);
            cclegacy.director.on(cclegacy.Director.EVENT_AFTER_UPDATE, this.afterUpdate, this);
            cclegacy.director.on(cclegacy.Director.EVENT_BEFORE_PHYSICS, this.beforePhysics, this);
            cclegacy.director.on(cclegacy.Director.EVENT_AFTER_PHYSICS, this.afterPhysics, this);
            cclegacy.director.on(cclegacy.Director.EVENT_BEFORE_DRAW, this.beforeDraw, this);
            cclegacy.director.on(cclegacy.Director.EVENT_AFTER_RENDER, this.afterRender, this);
            cclegacy.director.on(cclegacy.Director.EVENT_AFTER_DRAW, this.afterPresent, this);
            this._showFPS = true;
            this._canvasDone = true;
            this._statsDone = true;
            cclegacy.game.config.showFPS = true;
          }
        }
        generateCanvas() {
          if (this._canvasDone) {
            return;
          }
          const {
            textureWidth,
            textureHeight
          } = _constants;
          if (!this._ctx || !this._canvas) {
            return;
          }
          this._canvas.width = textureWidth;
          this._canvas.height = textureHeight;
          this._canvas.style.width = `${this._canvas.width}`;
          this._canvas.style.height = `${this._canvas.height}`;
          this._ctx.font = `${_constants.fontSize}px Arial`;
          this._ctx.textBaseline = 'top';
          this._ctx.fillStyle = '#fff';
          this._texture = this._device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED | TextureUsageBit.TRANSFER_DST, Format.RGBA8, textureWidth, textureHeight));
          this._region.texExtent.width = textureWidth;
          this._region.texExtent.height = textureHeight;
        }
        generateStats() {
          if (this._statsDone || !this._ctx || !this._canvas) {
            return;
          }
          this._profilerStats = null;
          const now = performance.now();
          this._ctx.textAlign = 'left';
          let i = 0;
          for (const id in _profileInfo) {
            const element = _profileInfo[id];
            this._ctx.fillText(element.desc, 0, i * this._lineHeight);
            element.counter = new PerfCounter(id, element, now);
            i++;
          }
          this._totalLines = i;
          this._wordHeight = this._totalLines * this._lineHeight / this._canvas.height;
          for (let j = 0; j < _characters.length; ++j) {
            const offset = this._ctx.measureText(_characters[j]).width;
            this._eachNumWidth = Math.max(this._eachNumWidth, offset);
          }
          for (let j = 0; j < _characters.length; ++j) {
            this._ctx.fillText(_characters[j], j * this._eachNumWidth, this._totalLines * this._lineHeight);
          }
          this._eachNumWidth /= this._canvas.width;
          this._profilerStats = _profileInfo;
          this._canvasArr[0] = this._canvas;
          this._device.copyTexImagesToTexture(this._canvasArr, this._texture, this._regionArr);
        }
        generateNode() {
          if (this._rootNode && this._rootNode.isValid) {
            return;
          }
          this._rootNode = new Node('PROFILER_NODE');
          this._rootNode._objFlags = cclegacy.Object.Flags.DontSave | cclegacy.Object.Flags.HideInHierarchy;
          cclegacy.game.addPersistRootNode(this._rootNode);
          const managerNode = new Node('Profiler_Root');
          managerNode.parent = this._rootNode;
          const height = _constants.quadHeight;
          const rowHeight = height / this._totalLines;
          const lWidth = height / this._wordHeight;
          const scale = rowHeight / _constants.fontSize;
          const columnWidth = this._eachNumWidth * this._canvas.width * scale;
          const vertexPos = [0, height, 0,
          // top-left
          lWidth, height, 0,
          // top-right
          lWidth, 0, 0,
          // bottom-right
          0, 0, 0 // bottom-left
          ];

          const vertexindices = [0, 2, 1, 0, 3, 2];
          const vertexUV = [0, 0, -1, 0, 1, 0, -1, 0, 1, this._wordHeight, -1, 0, 0, this._wordHeight, -1, 0];
          let offset = 0;
          for (let i = 0; i < this._totalLines; i++) {
            for (let j = 0; j < _constants.segmentsPerLine; j++) {
              vertexPos.push(lWidth + j * columnWidth, height - i * rowHeight, 0); // tl
              vertexPos.push(lWidth + (j + 1) * columnWidth, height - i * rowHeight, 0); // tr
              vertexPos.push(lWidth + (j + 1) * columnWidth, height - (i + 1) * rowHeight, 0); // br
              vertexPos.push(lWidth + j * columnWidth, height - (i + 1) * rowHeight, 0); // bl
              offset = (i * _constants.segmentsPerLine + j + 1) * 4;
              vertexindices.push(0 + offset, 2 + offset, 1 + offset, 0 + offset, 3 + offset, 2 + offset);
              const idx = i * _constants.segmentsPerLine + j;
              const z = Math.floor(idx / 4);
              const w = idx - z * 4;
              vertexUV.push(0, this._wordHeight, z, w); // tl
              vertexUV.push(this._eachNumWidth, this._wordHeight, z, w); // tr
              vertexUV.push(this._eachNumWidth, 1, z, w); // br
              vertexUV.push(0, 1, z, w); // bl
            }
          }

          this._meshRenderer = managerNode.addComponent(MeshRenderer);
          this._meshRenderer.mesh = createMesh({
            positions: vertexPos,
            indices: vertexindices,
            colors: vertexUV // pack all the necessary info in a_color: { x: u, y: v, z: id.x, w: id.y }
          });

          const _material = new Material();
          _material.initialize({
            effectName: 'util/profiler'
          });
          const pass = this.pass = _material.passes[0];
          const hTexture = pass.getBinding('mainTexture');
          const bDigits = pass.getBinding('digits');
          const bOffset = pass.getBinding('offset');
          pass.bindTexture(hTexture, this._texture);
          this.digitsData = pass.blocks[bDigits];
          this.offsetData = pass.blocks[bOffset];
          this.offsetData[3] = -1; // ensure init on the first frame

          this._meshRenderer.material = _material;
          this._meshRenderer.node.layer = Layers.Enum.PROFILER;
          this._inited = true;
        }
        beforeUpdate() {
          if (!this._profilerStats) {
            return;
          }
          const now = performance.now();
          this._profilerStats.frame.counter.start(now);
          this._profilerStats.logic.counter.start(now);
        }
        afterUpdate() {
          if (!this._profilerStats) {
            return;
          }
          const now = performance.now();
          if (cclegacy.director.isPaused()) {
            this._profilerStats.frame.counter.start(now);
          } else {
            this._profilerStats.logic.counter.end(now);
          }
        }
        beforePhysics() {
          if (!this._profilerStats) {
            return;
          }
          const now = performance.now();
          this._profilerStats.physics.counter.start(now);
        }
        afterPhysics() {
          if (!this._profilerStats) {
            return;
          }
          const now = performance.now();
          this._profilerStats.physics.counter.end(now);
        }
        beforeDraw() {
          if (!this._profilerStats || !this._inited) {
            return;
          }
          const surfaceTransform = this._swapchain.surfaceTransform;
          const clipSpaceSignY = this._device.capabilities.clipSpaceSignY;
          if (surfaceTransform !== this.offsetData[3]) {
            const preTransform = preTransforms[surfaceTransform];
            let x = -0.9;
            let y = -0.9 * clipSpaceSignY;
            if (sys.isXR) {
              x = -0.5;
              y = -0.5 * clipSpaceSignY;
            }
            this.offsetData[0] = x * preTransform[0] + y * preTransform[2];
            this.offsetData[1] = x * preTransform[1] + y * preTransform[3];
            this.offsetData[2] = this._eachNumWidth;
            this.offsetData[3] = surfaceTransform;
          }
          this.pass.setRootBufferDirty(true);
          if (this._meshRenderer.model) {
            director.root.pipeline.profiler = this._meshRenderer.model;
          } else {
            director.root.pipeline.profiler = null;
          }
          const now = performance.now();
          this._profilerStats.render.counter.start(now);
        }
        afterRender() {
          if (!this._profilerStats || !this._inited) {
            return;
          }
          const now = performance.now();
          this._profilerStats.render.counter.end(now);
          this._profilerStats.present.counter.start(now);
        }
        afterPresent() {
          if (!this._profilerStats || !this._inited) {
            return;
          }
          const now = performance.now();
          this._profilerStats.frame.counter.end(now);
          this._profilerStats.fps.counter.frame(now);
          this._profilerStats.present.counter.end(now);
          if (now - this.lastTime < _average) {
            return;
          }
          this.lastTime = now;
          const device = this._device;
          this._profilerStats.draws.counter.value = device.numDrawCalls;
          this._profilerStats.instances.counter.value = device.numInstances;
          this._profilerStats.bufferMemory.counter.value = device.memoryStatus.bufferSize / (1024 * 1024);
          this._profilerStats.textureMemory.counter.value = device.memoryStatus.textureSize / (1024 * 1024);
          this._profilerStats.tricount.counter.value = device.numTris;
          let i = 0;
          const view = this.digitsData;
          for (const id in this._profilerStats) {
            const stat = this._profilerStats[id];
            stat.counter.sample(now);
            const result = stat.counter.human().toString();
            for (let j = _constants.segmentsPerLine - 1; j >= 0; j--) {
              const index = i * _constants.segmentsPerLine + j;
              const character = result[result.length - (_constants.segmentsPerLine - j)];
              let offset = _string2offset[character];
              if (offset === undefined) {
                offset = 11;
              }
              view[index] = offset;
            }
            i++;
          }
        }
      });
      _export("profiler", profiler = new Profiler());
      director.registerSystem('profiler', profiler, 0);
      cclegacy.profiler = profiler;
    }
  };
});