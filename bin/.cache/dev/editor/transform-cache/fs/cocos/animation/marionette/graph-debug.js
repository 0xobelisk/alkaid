System.register("q-bundled:///fs/cocos/animation/marionette/graph-debug.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, editorExtrasTag, RUNTIME_ID_ENABLED, GRAPH_DEBUG_ENABLED;
  function getMotionRuntimeID(motion) {
    var _motion$editorExtrasT;
    return (_motion$editorExtrasT = motion[editorExtrasTag]) === null || _motion$editorExtrasT === void 0 ? void 0 : _motion$editorExtrasT.id;
  }
  _export("getMotionRuntimeID", getMotionRuntimeID);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreIndexJs) {
      editorExtrasTag = _coreIndexJs.editorExtrasTag;
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
      _export("RUNTIME_ID_ENABLED", RUNTIME_ID_ENABLED = EDITOR);
      _export("GRAPH_DEBUG_ENABLED", GRAPH_DEBUG_ENABLED = false);
    }
  };
});