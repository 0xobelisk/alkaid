System.register("q-bundled:///fs/cocos/asset/asset-manager/helper.js", ["../../core/index.js", "./shared.js", "./task.js", "../../core/utils/decode-uuid.js"], function (_export, _context) {
  "use strict";

  var cclegacy, error, bundles, transformPipeline, Task, _uuidRegex;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
                                                                                                                                                                                       Copyright (c) 2019-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                      
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
  /**
   * @en
   * Extracts uuid from url.
   *
   * @zh
   * 从 url 中提取 uuid。
   *
   * @param url @en The url to be converted. @zh 待转换的 url。
   * @returns @en The uuid extracted from url. @zh url 转换为的 uuid。
   *
   * @example
   * var url = 'res/import/fc/fc991dd7-0033-4b80-9d41-c8a86a702e59.json';
   * var uuid = getUuidFromURL(url); // fc991dd7-0033-4b80-9d41-c8a86a702e59
   */
  function getUuidFromURL(url) {
    var matches = _uuidRegex.exec(url);
    if (matches) {
      return matches[1];
    }
    return '';
  }

  /**
   * @en
   * Transforms uuid to url.
   *
   * @zh
   * 转换 uuid 为 url。
   *
   * @param uuid @en The uuid of asset. @zh 资源的 uuid。
   * @param options @en Some optional parameters. @zh 一些可选参数。
   * @param options.isNative @en Indicates whether the path you want is a native resource path. @zh 需要转换的路径是否是原生资源路径。
   * @param options.nativeExt @en Extension of the native resource path, it is required when isNative is true. @zh 原生资源路径的扩展名，如果 `isNative` 为 true，则需要。
   * @returns @en The url converted from uuid. @zh 从 uuid 转换而来的 url.
   *
   * @example
   * // json path, 'assets/main/import/fc/fc991dd7-0033-4b80-9d41-c8a86a702e59.json';
   * var url = getUrlWithUuid('fcmR3XADNLgJ1ByKhqcC5Z', {isNative: false});
   *
   * // png path, 'assets/main/native/fc/fc991dd7-0033-4b80-9d41-c8a86a702e59.png';
   * var url = getUrlWithUuid('fcmR3XADNLgJ1ByKhqcC5Z', {isNative: true, nativeExt: '.png'});
   *
   */
  function getUrlWithUuid(uuid, options) {
    options = options || Object.create(null);
    options.__isNative__ = options.isNative;
    if (options.nativeExt) {
      options.ext = options.nativeExt;
    }
    var bundle = bundles.find(function (b) {
      return !!b.getAssetInfo(uuid);
    });
    if (bundle) {
      options.bundle = bundle.name;
    }
    return transform(uuid, options);
  }

  /**
   * @en
   * Checks if the type of asset is scene.
   *
   * @zh
   * 检查资源类型是否是场景。
   *
   * @param asset @en The asset to be checked. @zh 待检查的资源。
   * @returns @en Whether or not the asset is a SceneAsset. @zh 此资源是否是场景资源。
   *
   */
  function isScene(asset) {
    return !!asset && (asset instanceof cclegacy.SceneAsset || asset instanceof cclegacy.Scene);
  }

  /**
   * @en
   * Normalizes url, strip './' and '/'.
   *
   * @zh
   * 标准化 url ，去除 './' 和 '/'。
   *
   * @param url @en The url to be normalized. @zh 待标准化的 url。
   * @returns @en The normalized url. @zh 标准化后的 url。
   */
  function normalize(url) {
    if (url) {
      if (url.charCodeAt(0) === 46 && url.charCodeAt(1) === 47) {
        // strip './'
        url = url.slice(2);
      } else if (url.charCodeAt(0) === 47) {
        // strip '/'
        url = url.slice(1);
      }
    }
    return url;
  }
  function transform(input, options) {
    var subTask = Task.create({
      input: input,
      options: options
    });
    var urls = [];
    try {
      var result = transformPipeline.sync(subTask);
      for (var _iterator = _createForOfIteratorHelperLoose(result), _step; !(_step = _iterator()).done;) {
        var requestItem = _step.value;
        var url = requestItem.url;
        requestItem.recycle();
        urls.push(url);
      }
    } catch (e) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(subTask.output), _step2; !(_step2 = _iterator2()).done;) {
        var item = _step2.value;
        item.recycle();
      }
      error(e.message, e.stack);
    }
    subTask.recycle();
    return urls.length > 1 ? urls : urls[0];
  }
  _export({
    getUuidFromURL: getUuidFromURL,
    getUrlWithUuid: getUrlWithUuid,
    isScene: isScene,
    normalize: normalize,
    transform: transform
  });
  return {
    setters: [function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      error = _coreIndexJs.error;
    }, function (_sharedJs) {
      bundles = _sharedJs.bundles;
      transformPipeline = _sharedJs.transformPipeline;
    }, function (_taskJs) {
      Task = _taskJs.default;
    }, function (_coreUtilsDecodeUuidJs) {
      _export("decodeUuid", _coreUtilsDecodeUuidJs.default);
    }],
    execute: function () {
      _uuidRegex = /.*[/\\][0-9a-fA-F]{2}[/\\]([0-9a-fA-F-@]{8,}).*/;
    }
  };
});