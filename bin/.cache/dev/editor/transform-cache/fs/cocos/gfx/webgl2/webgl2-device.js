System.register("q-bundled:///fs/cocos/gfx/webgl2/webgl2-device.js", ["pal/system-info", "../base/device.js", "../base/states/sampler.js", "./webgl2-descriptor-set.js", "./webgl2-buffer.js", "./webgl2-command-buffer.js", "./webgl2-framebuffer.js", "./webgl2-input-assembler.js", "./webgl2-descriptor-set-layout.js", "./webgl2-pipeline-layout.js", "./webgl2-pipeline-state.js", "./webgl2-primary-command-buffer.js", "./webgl2-queue.js", "./webgl2-render-pass.js", "./states/webgl2-sampler.js", "./webgl2-shader.js", "./webgl2-swapchain.js", "./webgl2-texture.js", "../base/define.js", "./webgl2-commands.js", "../base/states/general-barrier.js", "../base/states/texture-barrier.js", "../base/states/buffer-barrier.js", "../../core/index.js", "./webgl2-define.js", "../../../pal/system-info/enum-type/index.js"], function (_export, _context) {
  "use strict";

  var systemInfo, Device, Sampler, WebGL2DescriptorSet, WebGL2Buffer, WebGL2CommandBuffer, WebGL2Framebuffer, WebGL2InputAssembler, WebGL2DescriptorSetLayout, WebGL2PipelineLayout, WebGL2PipelineState, WebGL2PrimaryCommandBuffer, WebGL2Queue, WebGL2RenderPass, WebGL2Sampler, WebGL2Shader, WebGL2Swapchain, getExtensions, getContext, WebGL2Texture, CommandBufferType, CommandBufferInfo, QueueInfo, QueueType, API, Feature, Format, FormatFeatureBit, WebGL2CmdFuncCopyTextureToBuffers, WebGL2CmdFuncCopyBuffersToTexture, WebGL2CmdFuncCopyTexImagesToTexture, GeneralBarrier, TextureBarrier, BufferBarrier, debug, sys, WebGL2DeviceManager, BrowserType, OS, WebGL2Device;
  _export("WebGL2Device", void 0);
  return {
    setters: [function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_baseDeviceJs) {
      Device = _baseDeviceJs.Device;
    }, function (_baseStatesSamplerJs) {
      Sampler = _baseStatesSamplerJs.Sampler;
    }, function (_webgl2DescriptorSetJs) {
      WebGL2DescriptorSet = _webgl2DescriptorSetJs.WebGL2DescriptorSet;
    }, function (_webgl2BufferJs) {
      WebGL2Buffer = _webgl2BufferJs.WebGL2Buffer;
    }, function (_webgl2CommandBufferJs) {
      WebGL2CommandBuffer = _webgl2CommandBufferJs.WebGL2CommandBuffer;
    }, function (_webgl2FramebufferJs) {
      WebGL2Framebuffer = _webgl2FramebufferJs.WebGL2Framebuffer;
    }, function (_webgl2InputAssemblerJs) {
      WebGL2InputAssembler = _webgl2InputAssemblerJs.WebGL2InputAssembler;
    }, function (_webgl2DescriptorSetLayoutJs) {
      WebGL2DescriptorSetLayout = _webgl2DescriptorSetLayoutJs.WebGL2DescriptorSetLayout;
    }, function (_webgl2PipelineLayoutJs) {
      WebGL2PipelineLayout = _webgl2PipelineLayoutJs.WebGL2PipelineLayout;
    }, function (_webgl2PipelineStateJs) {
      WebGL2PipelineState = _webgl2PipelineStateJs.WebGL2PipelineState;
    }, function (_webgl2PrimaryCommandBufferJs) {
      WebGL2PrimaryCommandBuffer = _webgl2PrimaryCommandBufferJs.WebGL2PrimaryCommandBuffer;
    }, function (_webgl2QueueJs) {
      WebGL2Queue = _webgl2QueueJs.WebGL2Queue;
    }, function (_webgl2RenderPassJs) {
      WebGL2RenderPass = _webgl2RenderPassJs.WebGL2RenderPass;
    }, function (_statesWebgl2SamplerJs) {
      WebGL2Sampler = _statesWebgl2SamplerJs.WebGL2Sampler;
    }, function (_webgl2ShaderJs) {
      WebGL2Shader = _webgl2ShaderJs.WebGL2Shader;
    }, function (_webgl2SwapchainJs) {
      WebGL2Swapchain = _webgl2SwapchainJs.WebGL2Swapchain;
      getExtensions = _webgl2SwapchainJs.getExtensions;
      getContext = _webgl2SwapchainJs.getContext;
    }, function (_webgl2TextureJs) {
      WebGL2Texture = _webgl2TextureJs.WebGL2Texture;
    }, function (_baseDefineJs) {
      CommandBufferType = _baseDefineJs.CommandBufferType;
      CommandBufferInfo = _baseDefineJs.CommandBufferInfo;
      QueueInfo = _baseDefineJs.QueueInfo;
      QueueType = _baseDefineJs.QueueType;
      API = _baseDefineJs.API;
      Feature = _baseDefineJs.Feature;
      Format = _baseDefineJs.Format;
      FormatFeatureBit = _baseDefineJs.FormatFeatureBit;
    }, function (_webgl2CommandsJs) {
      WebGL2CmdFuncCopyTextureToBuffers = _webgl2CommandsJs.WebGL2CmdFuncCopyTextureToBuffers;
      WebGL2CmdFuncCopyBuffersToTexture = _webgl2CommandsJs.WebGL2CmdFuncCopyBuffersToTexture;
      WebGL2CmdFuncCopyTexImagesToTexture = _webgl2CommandsJs.WebGL2CmdFuncCopyTexImagesToTexture;
    }, function (_baseStatesGeneralBarrierJs) {
      GeneralBarrier = _baseStatesGeneralBarrierJs.GeneralBarrier;
    }, function (_baseStatesTextureBarrierJs) {
      TextureBarrier = _baseStatesTextureBarrierJs.TextureBarrier;
    }, function (_baseStatesBufferBarrierJs) {
      BufferBarrier = _baseStatesBufferBarrierJs.BufferBarrier;
    }, function (_coreIndexJs) {
      debug = _coreIndexJs.debug;
      sys = _coreIndexJs.sys;
    }, function (_webgl2DefineJs) {
      WebGL2DeviceManager = _webgl2DefineJs.WebGL2DeviceManager;
    }, function (_palSystemInfoEnumTypeIndexJs) {
      BrowserType = _palSystemInfoEnumTypeIndexJs.BrowserType;
      OS = _palSystemInfoEnumTypeIndexJs.OS;
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
      _export("WebGL2Device", WebGL2Device = class WebGL2Device extends Device {
        constructor(...args) {
          super(...args);
          this._swapchain = null;
          this._context = null;
          this._bindingMappings = null;
          this._textureExclusive = new Array(Format.COUNT);
        }
        get gl() {
          return this._context;
        }
        get extensions() {
          return this._swapchain.extensions;
        }
        get stateCache() {
          return this._swapchain.stateCache;
        }
        get nullTex2D() {
          return this._swapchain.nullTex2D;
        }
        get nullTexCube() {
          return this._swapchain.nullTexCube;
        }
        get textureExclusive() {
          return this._textureExclusive;
        }
        get bindingMappings() {
          return this._bindingMappings;
        }
        get blitManager() {
          return this._swapchain.blitManager;
        }
        initialize(info) {
          WebGL2DeviceManager.setInstance(this);
          this._gfxAPI = API.WEBGL2;
          const mapping = this._bindingMappingInfo = info.bindingMappingInfo;
          const blockOffsets = [];
          const samplerTextureOffsets = [];
          const firstSet = mapping.setIndices[0];
          blockOffsets[firstSet] = 0;
          samplerTextureOffsets[firstSet] = 0;
          for (let i = 1; i < mapping.setIndices.length; ++i) {
            const curSet = mapping.setIndices[i];
            const prevSet = mapping.setIndices[i - 1];
            // accumulate the per set offset according to the specified capacity
            blockOffsets[curSet] = mapping.maxBlockCounts[prevSet] + blockOffsets[prevSet];
            samplerTextureOffsets[curSet] = mapping.maxSamplerTextureCounts[prevSet] + samplerTextureOffsets[prevSet];
          }
          for (let i = 0; i < mapping.setIndices.length; ++i) {
            const curSet = mapping.setIndices[i];
            // textures always come after UBOs
            samplerTextureOffsets[curSet] -= mapping.maxBlockCounts[curSet];
          }
          this._bindingMappings = {
            blockOffsets,
            samplerTextureOffsets,
            flexibleSet: mapping.setIndices[mapping.setIndices.length - 1]
          };
          const gl = this._context = getContext(Device.canvas);
          if (!gl) {
            console.error('This device does not support WebGL2.');
            return false;
          }

          // create queue
          this._queue = this.createQueue(new QueueInfo(QueueType.GRAPHICS));
          this._cmdBuff = this.createCommandBuffer(new CommandBufferInfo(this._queue));
          this._caps.maxVertexAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
          this._caps.maxVertexUniformVectors = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
          // Implementation of WebGL2 in WECHAT browser and Safari in IOS exist bugs.
          // It seems to be related to Safari's experimental features 'WebGL via Metal'.
          // So limit using vertex uniform vectors no more than 256 in wechat browser,
          // and using vertex uniform vectors no more than 512 in safari.
          if (systemInfo.os === OS.IOS) {
            const maxVertexUniformVectors = this._caps.maxVertexUniformVectors;
            if (sys.browserType === BrowserType.WECHAT) {
              this._caps.maxVertexUniformVectors = maxVertexUniformVectors < 256 ? maxVertexUniformVectors : 256;
            } else if (sys.browserType === BrowserType.SAFARI) {
              this._caps.maxVertexUniformVectors = maxVertexUniformVectors < 512 ? maxVertexUniformVectors : 512;
            }
          }
          this._caps.maxFragmentUniformVectors = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
          this._caps.maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
          this._caps.maxVertexTextureUnits = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
          this._caps.maxUniformBufferBindings = gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS);
          this._caps.maxUniformBlockSize = gl.getParameter(gl.MAX_UNIFORM_BLOCK_SIZE);
          this._caps.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
          this._caps.maxCubeMapTextureSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
          this._caps.maxArrayTextureLayers = gl.getParameter(gl.MAX_ARRAY_TEXTURE_LAYERS);
          this._caps.max3DTextureSize = gl.getParameter(gl.MAX_3D_TEXTURE_SIZE);
          this._caps.uboOffsetAlignment = gl.getParameter(gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT);
          const extensions = gl.getSupportedExtensions();
          let extStr = '';
          if (extensions) {
            for (const ext of extensions) {
              extStr += `${ext} `;
            }
          }
          const exts = getExtensions(gl);
          if (exts.WEBGL_debug_renderer_info) {
            this._renderer = gl.getParameter(exts.WEBGL_debug_renderer_info.UNMASKED_RENDERER_WEBGL);
            this._vendor = gl.getParameter(exts.WEBGL_debug_renderer_info.UNMASKED_VENDOR_WEBGL);
          } else {
            this._renderer = gl.getParameter(gl.RENDERER);
            this._vendor = gl.getParameter(gl.VENDOR);
          }
          const version = gl.getParameter(gl.VERSION);
          this._features.fill(false);
          this.initFormatFeatures(exts);
          this._features[Feature.ELEMENT_INDEX_UINT] = true;
          this._features[Feature.INSTANCED_ARRAYS] = true;
          this._features[Feature.MULTIPLE_RENDER_TARGETS] = true;
          this._features[Feature.BLEND_MINMAX] = true;
          let compressedFormat = '';
          if (this.getFormatFeatures(Format.ETC_RGB8)) {
            compressedFormat += 'etc1 ';
          }
          if (this.getFormatFeatures(Format.ETC2_RGB8)) {
            compressedFormat += 'etc2 ';
          }
          if (this.getFormatFeatures(Format.BC1)) {
            compressedFormat += 'dxt ';
          }
          if (this.getFormatFeatures(Format.PVRTC_RGB2)) {
            compressedFormat += 'pvrtc ';
          }
          if (this.getFormatFeatures(Format.ASTC_RGBA_4X4)) {
            compressedFormat += 'astc ';
          }
          debug('WebGL2 device initialized.');
          debug(`RENDERER: ${this._renderer}`);
          debug(`VENDOR: ${this._vendor}`);
          debug(`VERSION: ${version}`);
          debug(`COMPRESSED_FORMAT: ${compressedFormat}`);
          debug(`EXTENSIONS: ${extStr}`);
          return true;
        }
        destroy() {
          if (this._queue) {
            this._queue.destroy();
            this._queue = null;
          }
          if (this._cmdBuff) {
            this._cmdBuff.destroy();
            this._cmdBuff = null;
          }
          const it = this._samplers.values();
          let res = it.next();
          while (!res.done) {
            res.value.destroy();
            res = it.next();
          }
          this._swapchain = null;
        }
        flushCommands(cmdBuffs) {}
        acquire(swapchains) {}
        present() {
          const queue = this._queue;
          this._numDrawCalls = queue.numDrawCalls;
          this._numInstances = queue.numInstances;
          this._numTris = queue.numTris;
          queue.clear();
        }
        initFormatFeatures(exts) {
          this._formatFeatures.fill(FormatFeatureBit.NONE);
          this._textureExclusive.fill(true);
          let tempFeature = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.LINEAR_FILTER | FormatFeatureBit.VERTEX_ATTRIBUTE;
          this._formatFeatures[Format.R8] = tempFeature;
          this._formatFeatures[Format.RG8] = tempFeature;
          this._formatFeatures[Format.RGB8] = tempFeature;
          this._formatFeatures[Format.RGBA8] = tempFeature;
          tempFeature = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
          this._formatFeatures[Format.R8SN] = tempFeature;
          this._formatFeatures[Format.RG8SN] = tempFeature;
          this._formatFeatures[Format.RGB8SN] = tempFeature;
          this._formatFeatures[Format.RGBA8SN] = tempFeature;
          this._formatFeatures[Format.R5G6B5] = tempFeature;
          this._formatFeatures[Format.RGBA4] = tempFeature;
          this._formatFeatures[Format.RGB5A1] = tempFeature;
          this._formatFeatures[Format.RGB10A2] = tempFeature;
          this._formatFeatures[Format.SRGB8] = tempFeature;
          this._formatFeatures[Format.SRGB8_A8] = tempFeature;
          this._formatFeatures[Format.R11G11B10F] = tempFeature;
          this._formatFeatures[Format.RGB9E5] = tempFeature;
          this._formatFeatures[Format.DEPTH] = tempFeature;
          this._formatFeatures[Format.DEPTH_STENCIL] = tempFeature;
          this._formatFeatures[Format.RGB10A2UI] = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
          tempFeature = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.VERTEX_ATTRIBUTE;
          this._formatFeatures[Format.R16F] = tempFeature;
          this._formatFeatures[Format.RG16F] = tempFeature;
          this._formatFeatures[Format.RGB16F] = tempFeature;
          this._formatFeatures[Format.RGBA16F] = tempFeature;
          tempFeature = FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.VERTEX_ATTRIBUTE;
          this._formatFeatures[Format.R32F] = tempFeature;
          this._formatFeatures[Format.RG32F] = tempFeature;
          this._formatFeatures[Format.RGB32F] = tempFeature;
          this._formatFeatures[Format.RGBA32F] = tempFeature;
          this._formatFeatures[Format.RGB10A2UI] = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
          tempFeature = FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.STORAGE_TEXTURE | FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER | FormatFeatureBit.VERTEX_ATTRIBUTE;
          this._formatFeatures[Format.R8I] = tempFeature;
          this._formatFeatures[Format.R8UI] = tempFeature;
          this._formatFeatures[Format.R16I] = tempFeature;
          this._formatFeatures[Format.R16UI] = tempFeature;
          this._formatFeatures[Format.R32I] = tempFeature;
          this._formatFeatures[Format.R32UI] = tempFeature;
          this._formatFeatures[Format.RG8I] = tempFeature;
          this._formatFeatures[Format.RG8UI] = tempFeature;
          this._formatFeatures[Format.RG16I] = tempFeature;
          this._formatFeatures[Format.RG16UI] = tempFeature;
          this._formatFeatures[Format.RG32I] = tempFeature;
          this._formatFeatures[Format.RG32UI] = tempFeature;
          this._formatFeatures[Format.RGB8I] = tempFeature;
          this._formatFeatures[Format.RGB8UI] = tempFeature;
          this._formatFeatures[Format.RGB16I] = tempFeature;
          this._formatFeatures[Format.RGB16UI] = tempFeature;
          this._formatFeatures[Format.RGB32I] = tempFeature;
          this._formatFeatures[Format.RGB32UI] = tempFeature;
          this._formatFeatures[Format.RGBA8I] = tempFeature;
          this._formatFeatures[Format.RGBA8UI] = tempFeature;
          this._formatFeatures[Format.RGBA16I] = tempFeature;
          this._formatFeatures[Format.RGBA16UI] = tempFeature;
          this._formatFeatures[Format.RGBA32I] = tempFeature;
          this._formatFeatures[Format.RGBA32UI] = tempFeature;
          this._textureExclusive[Format.R8] = false;
          this._textureExclusive[Format.RG8] = false;
          this._textureExclusive[Format.RGB8] = false;
          this._textureExclusive[Format.R5G6B5] = false;
          this._textureExclusive[Format.RGBA4] = false;
          this._textureExclusive[Format.RGB5A1] = false;
          this._textureExclusive[Format.RGBA8] = false;
          this._textureExclusive[Format.RGB10A2] = false;
          this._textureExclusive[Format.RGB10A2UI] = false;
          this._textureExclusive[Format.SRGB8_A8] = false;
          this._textureExclusive[Format.R8I] = false;
          this._textureExclusive[Format.R8UI] = false;
          this._textureExclusive[Format.R16I] = false;
          this._textureExclusive[Format.R16UI] = false;
          this._textureExclusive[Format.R32I] = false;
          this._textureExclusive[Format.R32UI] = false;
          this._textureExclusive[Format.RG8I] = false;
          this._textureExclusive[Format.RG8UI] = false;
          this._textureExclusive[Format.RG16I] = false;
          this._textureExclusive[Format.RG16UI] = false;
          this._textureExclusive[Format.RG32I] = false;
          this._textureExclusive[Format.RG32UI] = false;
          this._textureExclusive[Format.RGBA8I] = false;
          this._textureExclusive[Format.RGBA8UI] = false;
          this._textureExclusive[Format.RGBA16I] = false;
          this._textureExclusive[Format.RGBA16UI] = false;
          this._textureExclusive[Format.RGBA32I] = false;
          this._textureExclusive[Format.RGBA32UI] = false;
          this._textureExclusive[Format.DEPTH] = false;
          this._textureExclusive[Format.DEPTH_STENCIL] = false;
          if (exts.EXT_color_buffer_float) {
            this._formatFeatures[Format.R32F] |= FormatFeatureBit.RENDER_TARGET;
            this._formatFeatures[Format.RG32F] |= FormatFeatureBit.RENDER_TARGET;
            this._formatFeatures[Format.RGBA32F] |= FormatFeatureBit.RENDER_TARGET;
            this._textureExclusive[Format.R32F] = false;
            this._textureExclusive[Format.RG32F] = false;
            this._textureExclusive[Format.RGBA32F] = false;
          }
          if (exts.EXT_color_buffer_half_float) {
            this._textureExclusive[Format.R16F] = false;
            this._textureExclusive[Format.RG16F] = false;
            this._textureExclusive[Format.RGBA16F] = false;
          }
          if (exts.OES_texture_float_linear) {
            this._formatFeatures[Format.RGB32F] |= FormatFeatureBit.LINEAR_FILTER;
            this._formatFeatures[Format.RGBA32F] |= FormatFeatureBit.LINEAR_FILTER;
            this._formatFeatures[Format.R32F] |= FormatFeatureBit.LINEAR_FILTER;
            this._formatFeatures[Format.RG32F] |= FormatFeatureBit.LINEAR_FILTER;
          }
          if (exts.OES_texture_half_float_linear) {
            this._formatFeatures[Format.RGB16F] |= FormatFeatureBit.LINEAR_FILTER;
            this._formatFeatures[Format.RGBA16F] |= FormatFeatureBit.LINEAR_FILTER;
            this._formatFeatures[Format.R16F] |= FormatFeatureBit.LINEAR_FILTER;
            this._formatFeatures[Format.RG16F] |= FormatFeatureBit.LINEAR_FILTER;
          }
          const compressedFeature = FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
          if (exts.WEBGL_compressed_texture_etc1) {
            this._formatFeatures[Format.ETC_RGB8] = compressedFeature;
          }
          if (exts.WEBGL_compressed_texture_etc) {
            this._formatFeatures[Format.ETC2_RGB8] = compressedFeature;
            this._formatFeatures[Format.ETC2_RGBA8] = compressedFeature;
            this._formatFeatures[Format.ETC2_SRGB8] = compressedFeature;
            this._formatFeatures[Format.ETC2_SRGB8_A8] = compressedFeature;
            this._formatFeatures[Format.ETC2_RGB8_A1] = compressedFeature;
            this._formatFeatures[Format.ETC2_SRGB8_A1] = compressedFeature;
          }
          if (exts.WEBGL_compressed_texture_s3tc) {
            this._formatFeatures[Format.BC1] = compressedFeature;
            this._formatFeatures[Format.BC1_ALPHA] = compressedFeature;
            this._formatFeatures[Format.BC1_SRGB] = compressedFeature;
            this._formatFeatures[Format.BC1_SRGB_ALPHA] = compressedFeature;
            this._formatFeatures[Format.BC2] = compressedFeature;
            this._formatFeatures[Format.BC2_SRGB] = compressedFeature;
            this._formatFeatures[Format.BC3] = compressedFeature;
            this._formatFeatures[Format.BC3_SRGB] = compressedFeature;
          }
          if (exts.WEBGL_compressed_texture_pvrtc) {
            this._formatFeatures[Format.PVRTC_RGB2] = compressedFeature;
            this._formatFeatures[Format.PVRTC_RGBA2] = compressedFeature;
            this._formatFeatures[Format.PVRTC_RGB4] = compressedFeature;
            this._formatFeatures[Format.PVRTC_RGBA4] = compressedFeature;
          }
          if (exts.WEBGL_compressed_texture_astc) {
            this._formatFeatures[Format.ASTC_RGBA_4X4] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_5X4] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_5X5] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_6X5] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_6X6] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_8X5] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_8X6] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_8X8] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_10X5] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_10X6] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_10X8] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_10X10] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_12X10] = compressedFeature;
            this._formatFeatures[Format.ASTC_RGBA_12X12] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_4X4] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_5X4] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_5X5] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_6X5] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_6X6] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_8X5] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_8X6] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_8X8] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_10X5] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_10X6] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_10X8] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_10X10] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_12X10] = compressedFeature;
            this._formatFeatures[Format.ASTC_SRGBA_12X12] = compressedFeature;
          }
        }
        createCommandBuffer(info) {
          // const Ctor = WebGLCommandBuffer; // opt to instant invocation
          const Ctor = info.type === CommandBufferType.PRIMARY ? WebGL2PrimaryCommandBuffer : WebGL2CommandBuffer;
          const cmdBuff = new Ctor();
          cmdBuff.initialize(info);
          return cmdBuff;
        }
        createSwapchain(info) {
          const swapchain = new WebGL2Swapchain();
          this._swapchain = swapchain;
          swapchain.initialize(info);
          return swapchain;
        }
        createBuffer(info) {
          const buffer = new WebGL2Buffer();
          buffer.initialize(info);
          return buffer;
        }
        createTexture(info) {
          const texture = new WebGL2Texture();
          texture.initialize(info);
          return texture;
        }
        createDescriptorSet(info) {
          const descriptorSet = new WebGL2DescriptorSet();
          descriptorSet.initialize(info);
          return descriptorSet;
        }
        createShader(info) {
          const shader = new WebGL2Shader();
          shader.initialize(info);
          return shader;
        }
        createInputAssembler(info) {
          const inputAssembler = new WebGL2InputAssembler();
          inputAssembler.initialize(info);
          return inputAssembler;
        }
        createRenderPass(info) {
          const renderPass = new WebGL2RenderPass();
          renderPass.initialize(info);
          return renderPass;
        }
        createFramebuffer(info) {
          const framebuffer = new WebGL2Framebuffer();
          framebuffer.initialize(info);
          return framebuffer;
        }
        createDescriptorSetLayout(info) {
          const descriptorSetLayout = new WebGL2DescriptorSetLayout();
          descriptorSetLayout.initialize(info);
          return descriptorSetLayout;
        }
        createPipelineLayout(info) {
          const pipelineLayout = new WebGL2PipelineLayout();
          pipelineLayout.initialize(info);
          return pipelineLayout;
        }
        createPipelineState(info) {
          const pipelineState = new WebGL2PipelineState();
          pipelineState.initialize(info);
          return pipelineState;
        }
        createQueue(info) {
          const queue = new WebGL2Queue();
          queue.initialize(info);
          return queue;
        }
        getSampler(info) {
          const hash = Sampler.computeHash(info);
          if (!this._samplers.has(hash)) {
            this._samplers.set(hash, new WebGL2Sampler(info, hash));
          }
          return this._samplers.get(hash);
        }
        getSwapchains() {
          return [this._swapchain];
        }
        getGeneralBarrier(info) {
          const hash = GeneralBarrier.computeHash(info);
          if (!this._generalBarrierss.has(hash)) {
            this._generalBarrierss.set(hash, new GeneralBarrier(info, hash));
          }
          return this._generalBarrierss.get(hash);
        }
        getTextureBarrier(info) {
          const hash = TextureBarrier.computeHash(info);
          if (!this._textureBarriers.has(hash)) {
            this._textureBarriers.set(hash, new TextureBarrier(info, hash));
          }
          return this._textureBarriers.get(hash);
        }
        getBufferBarrier(info) {
          const hash = BufferBarrier.computeHash(info);
          if (!this._bufferBarriers.has(hash)) {
            this._bufferBarriers.set(hash, new BufferBarrier(info, hash));
          }
          return this._bufferBarriers.get(hash);
        }
        copyBuffersToTexture(buffers, texture, regions) {
          WebGL2CmdFuncCopyBuffersToTexture(this, buffers, texture.gpuTexture, regions);
        }
        copyTextureToBuffers(texture, buffers, regions) {
          WebGL2CmdFuncCopyTextureToBuffers(this, texture.gpuTexture, buffers, regions);
        }
        copyTexImagesToTexture(texImages, texture, regions) {
          WebGL2CmdFuncCopyTexImagesToTexture(this, texImages, texture.gpuTexture, regions);
        }
      });
    }
  };
});