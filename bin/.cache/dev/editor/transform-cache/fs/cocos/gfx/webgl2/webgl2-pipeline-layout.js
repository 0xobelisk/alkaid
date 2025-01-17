System.register("q-bundled:///fs/cocos/gfx/webgl2/webgl2-pipeline-layout.js", ["../base/pipeline-layout.js"], function (_export, _context) {
  "use strict";

  var PipelineLayout, WebGL2PipelineLayout;
  _export("WebGL2PipelineLayout", void 0);
  return {
    setters: [function (_basePipelineLayoutJs) {
      PipelineLayout = _basePipelineLayoutJs.PipelineLayout;
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
      _export("WebGL2PipelineLayout", WebGL2PipelineLayout = class WebGL2PipelineLayout extends PipelineLayout {
        constructor(...args) {
          super(...args);
          this._gpuPipelineLayout = null;
        }
        get gpuPipelineLayout() {
          return this._gpuPipelineLayout;
        }
        initialize(info) {
          Array.prototype.push.apply(this._setLayouts, info.setLayouts);
          const dynamicOffsetIndices = [];
          const gpuSetLayouts = [];
          let dynamicOffsetCount = 0;
          const dynamicOffsetOffsets = [];
          for (let i = 0; i < this._setLayouts.length; i++) {
            const setLayout = this._setLayouts[i];
            const dynamicBindings = setLayout.gpuDescriptorSetLayout.dynamicBindings;
            const indices = Array(setLayout.bindingIndices.length).fill(-1);
            for (let j = 0; j < dynamicBindings.length; j++) {
              const binding = dynamicBindings[j];
              if (indices[binding] < 0) indices[binding] = dynamicOffsetCount + j;
            }
            gpuSetLayouts.push(setLayout.gpuDescriptorSetLayout);
            dynamicOffsetIndices.push(indices);
            dynamicOffsetOffsets.push(dynamicOffsetCount);
            dynamicOffsetCount += dynamicBindings.length;
          }
          this._gpuPipelineLayout = {
            gpuSetLayouts,
            dynamicOffsetIndices,
            dynamicOffsetCount,
            dynamicOffsetOffsets
          };
        }
        destroy() {
          this._setLayouts.length = 0;
        }
      });
    }
  };
});