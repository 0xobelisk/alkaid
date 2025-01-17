System.register("q-bundled:///fs/cocos/ui/editbox/edit-box-impl-base.js", [], function (_export, _context) {
  "use strict";

  var EditBoxImplBase;
  _export("EditBoxImplBase", void 0);
  return {
    setters: [],
    execute: function () {
      /*
       Copyright (c) 2011-2012 cocos2d-x.org
       Copyright (c) 2012 James Chen
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
      _export("EditBoxImplBase", EditBoxImplBase = class EditBoxImplBase {
        constructor() {
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._editing = false;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._delegate = null;
        }
        init(delegate) {
          // To be overrode
        }
        onEnable() {
          // To be overrode
        }
        beforeDraw() {
          // To be overrode
        }
        onDisable() {
          if (this._editing) {
            this.endEditing();
          }
        }
        clear() {
          this._delegate = null;
        }
        setTabIndex(index) {
          // To be overrode
        }
        setSize(width, height) {
          // To be overrode
        }
        setFocus(value) {
          if (value) {
            this.beginEditing();
          } else {
            this.endEditing();
          }
        }
        isFocused() {
          return this._editing;
        }
        beginEditing() {
          // To be overrode
        }
        endEditing() {
          // To be overrode
        }
      });
    }
  };
});