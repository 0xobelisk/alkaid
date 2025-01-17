System.register("q-bundled:///fs/cocos/core/utils/path.js", ["pal/system-info", "../../../pal/system-info/enum-type/index.js"], function (_export, _context) {
  "use strict";

  var systemInfo, OS, EXTNAME_RE, DIRNAME_RE, NORMALIZE_RE;
  /**
   * @en Joins strings to be a path.
   * @zh 拼接字符串为路径。
   * @param segments @en Strings to be joined. @zh 被拼接的字符串数组。
   * @returns @en The final path. @zh 拼接后的路径。
   * @example {@link cocos/core/utils/CCPath/join.js}
   */
  function join() {
    var result = '';
    for (var _len = arguments.length, segments = new Array(_len), _key = 0; _key < _len; _key++) {
      segments[_key] = arguments[_key];
    }
    for (var _i = 0, _segments = segments; _i < _segments.length; _i++) {
      var segment = _segments[_i];
      result = (result + (result === '' ? '' : '/') + segment).replace(/(\/|\\\\)$/, '');
    }
    return result;
  }

  /**
   * @en Gets the extension name of a path including '.', like '.png'.
   * @zh 返回 Path 的扩展名，包括 '.'，例如 '.png'。
   * @param path @en A file path. @zh 文件路径。
   * @returns @en The extension name. @zh 扩展名。
   * @example {@link cocos/core/utils/CCPath/extname.js}
   */
  function extname(path) {
    var temp = EXTNAME_RE.exec(path);
    return temp ? temp[1] : '';
  }

  /**
   * @en Gets the main name of a file name, exclude extension name.
   * @zh 获取文件名的主名称。
   * @deprecated
   */
  function mainFileName(fileName) {
    if (fileName) {
      var idx = fileName.lastIndexOf('.');
      if (idx !== -1) {
        return fileName.substring(0, idx);
      }
    }
    return fileName;
  }

  /**
   * @en Gets the file name of a file path, exclude extension name and directory name.
   * @zh 获取文件路径的文件名，不包含扩展名和目录名。
   * @param path @en A file path. @zh 文件路径。
   * @param extName @en File extension name. @zh 文件扩展名。
   * @returns @en The file name. @zh 文件名。
   * @example {@link cocos/core/utils/CCPath/basename.js}
   */
  function basename(path, extName) {
    var index = path.indexOf('?');
    if (index > 0) {
      path = path.substring(0, index);
    }
    var reg = /(\/|\\)([^\/\\]+)$/g;
    var result = reg.exec(path.replace(/(\/|\\)$/, ''));
    if (!result) {
      return path;
    }
    var baseName = result[2];
    if (extName && path.substring(path.length - extName.length).toLowerCase() === extName.toLowerCase()) {
      return baseName.substring(0, baseName.length - extName.length);
    }
    return baseName;
  }

  /**
   * @en Gets directory name of a file path.
   * @zh 获取文件路径的目录名。
   * @param path @en A file path. @zh 文件路径。
   * @returns @en Directory name. @zh 文件目录名。
   * @example {@link cocos/core/utils/CCPath/dirname.js}
   */
  function dirname(path) {
    var temp = DIRNAME_RE.exec(path);
    return temp ? temp[2] : '';
  }

  /**
   * @en Changes file extension name.
   * @zh 更改文件的扩展名。
   * @param path @en A file path. @zh 文件路径。
   * @param extName @en New file extension name. @zh 新文件扩展名。
   * @returns @en New file path. @zh 新的文件路径。
   * @example {@link cocos/core/utils/CCPath/changeExtname.js}
   */
  function changeExtname(path, extName) {
    extName = extName || '';
    var index = path.indexOf('?');
    var tempStr = '';
    if (index > 0) {
      tempStr = path.substring(index);
      path = path.substring(0, index);
    }
    index = path.lastIndexOf('.');
    if (index < 0) {
      return path + extName + tempStr;
    }
    return path.substring(0, index) + extName + tempStr;
  }

  /**
   * @en Changes file name of a file path.
   * @zh 更改文件路径的文件名。
   * @param path @en A file path. @zh 文件路径。
   * @param newBaseName @en New file name. @zh 新文件名。
   * @param keepExt @en Whether to keep extension name. @zh 是否保留扩展名。
   * @returns @en New file path. @zh 新文件路径。
   * @example {@link cocos/core/utils/CCPath/changeBasename.js}
   */
  function changeBasename(path, newBaseName, keepExt) {
    if (newBaseName.indexOf('.') === 0) {
      return changeExtname(path, newBaseName);
    }
    var index = path.indexOf('?');
    var tempStr = '';
    var ext = keepExt ? extname(path) : '';
    if (index > 0) {
      tempStr = path.substring(index);
      path = path.substring(0, index);
    }
    index = path.lastIndexOf('/');
    index = index <= 0 ? 0 : index + 1;
    return path.substring(0, index) + newBaseName + ext + tempStr;
  }

  // todo make public after verification
  function _normalize(url) {
    var oldUrl = url = String(url);

    // removing all ../
    do {
      oldUrl = url;
      url = url.replace(NORMALIZE_RE, '');
    } while (oldUrl.length !== url.length);
    return url;
  }

  /**
   * @en Removes the last path separator('/' or '\') of a path if exist.
   * @zh 如果存在的话，删除文件路径的最后一个分隔符（'/' 或者 '\'）。
   * @param path @en A file path to modify. @zh 要修改的文件路径。
   * @returns @en A new file path without last file separator.
   * @zh 路径最后分隔符的新路径。
   */
  function stripSep(path) {
    return path.replace(/[\/\\]$/, '');
  }

  /**
   * @en Gets file separator for different platforms. It is `/` on unix like platforms,
   * and `\` on windows.
   * @zh 获取不同平台的文件分割符。类 unix 系统是 `/`，windows 系统是 `\`。
   * @returns @en File separator. @zh 文件分割符。
   */
  function getSeperator() {
    return systemInfo.os === OS.WINDOWS ? '\\' : '/';
  }
  _export({
    join: join,
    extname: extname,
    mainFileName: mainFileName,
    basename: basename,
    dirname: dirname,
    changeExtname: changeExtname,
    changeBasename: changeBasename,
    _normalize: _normalize,
    stripSep: stripSep,
    getSeperator: getSeperator
  });
  return {
    setters: [function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_palSystemInfoEnumTypeIndexJs) {
      OS = _palSystemInfoEnumTypeIndexJs.OS;
    }],
    execute: function () {
      /*
       Copyright (c) 2013-2016 Chukong Technologies Inc.
       Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
      
       http://www.cocos.com
      
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
      EXTNAME_RE = /(\.[^\.\/\?\\]*)(\?.*)?$/;
      DIRNAME_RE = /((.*)(\/|\\|\\\\))?(.*?\..*$)?/;
      NORMALIZE_RE = /[^\.\/]+\/\.\.\//;
    }
  };
});