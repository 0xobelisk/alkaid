System.register("q-bundled:///fs/cocos/rendering/custom/serialization.js", ["../../gfx/index.js"], function (_export, _context) {
  "use strict";

  var DescriptorSetLayoutBinding, Uniform;
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

  function saveColor(ar, v) {
    ar.writeNumber(v.x);
    ar.writeNumber(v.y);
    ar.writeNumber(v.z);
    ar.writeNumber(v.w);
  }
  function loadColor(ar, v) {
    v.x = ar.readNumber();
    v.y = ar.readNumber();
    v.z = ar.readNumber();
    v.w = ar.readNumber();
  }
  function saveUniform(ar, v) {
    ar.writeString(v.name);
    ar.writeNumber(v.type);
    ar.writeNumber(v.count);
  }
  function loadUniform(ar, v) {
    v.name = ar.readString();
    v.type = ar.readNumber();
    v.count = ar.readNumber();
  }
  function saveUniformBlock(ar, v) {
    ar.writeNumber(v.set);
    ar.writeNumber(v.binding);
    ar.writeString(v.name);
    ar.writeNumber(v.members.length);
    for (const v1 of v.members) {
      saveUniform(ar, v1);
    }
    ar.writeNumber(v.count);
  }
  function loadUniformBlock(ar, v) {
    v.set = ar.readNumber();
    v.binding = ar.readNumber();
    v.name = ar.readString();
    let sz = 0;
    sz = ar.readNumber();
    v.members.length = sz;
    for (let i = 0; i !== sz; ++i) {
      const v1 = new Uniform();
      loadUniform(ar, v1);
      v.members[i] = v1;
    }
    v.count = ar.readNumber();
  }
  function saveDescriptorSetLayoutBinding(ar, v) {
    ar.writeNumber(v.binding);
    ar.writeNumber(v.descriptorType);
    ar.writeNumber(v.count);
    ar.writeNumber(v.stageFlags);
    // skip immutableSamplers;
  }

  function loadDescriptorSetLayoutBinding(ar, v) {
    v.binding = ar.readNumber();
    v.descriptorType = ar.readNumber();
    v.count = ar.readNumber();
    v.stageFlags = ar.readNumber();
    // skip immutableSamplers;
  }

  function saveDescriptorSetLayoutInfo(ar, v) {
    ar.writeNumber(v.bindings.length);
    for (const v1 of v.bindings) {
      saveDescriptorSetLayoutBinding(ar, v1);
    }
  }
  function loadDescriptorSetLayoutInfo(ar, v) {
    const sz = ar.readNumber();
    v.bindings.length = sz;
    for (let i = 0; i !== sz; ++i) {
      const v1 = new DescriptorSetLayoutBinding();
      loadDescriptorSetLayoutBinding(ar, v1);
      v.bindings[i] = v1;
    }
  }
  _export({
    saveColor: saveColor,
    loadColor: loadColor,
    saveUniform: saveUniform,
    loadUniform: loadUniform,
    saveUniformBlock: saveUniformBlock,
    loadUniformBlock: loadUniformBlock,
    saveDescriptorSetLayoutBinding: saveDescriptorSetLayoutBinding,
    loadDescriptorSetLayoutBinding: loadDescriptorSetLayoutBinding,
    saveDescriptorSetLayoutInfo: saveDescriptorSetLayoutInfo,
    loadDescriptorSetLayoutInfo: loadDescriptorSetLayoutInfo
  });
  return {
    setters: [function (_gfxIndexJs) {
      DescriptorSetLayoutBinding = _gfxIndexJs.DescriptorSetLayoutBinding;
      Uniform = _gfxIndexJs.Uniform;
    }],
    execute: function () {}
  };
});