System.register("q-bundled:///fs/cocos/particle-2d/tiff-reader.js", ["../core/index.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var getError, logID, ccwindow, TiffReader, fieldTagNames, fieldTypeNames;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2011 Gordon P. Hemsley
                                                                                                                                                                                                                                                                                                                                                                                             http://gphemsley.org/
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2008-2010 Ricardo Quesada
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2011-2012 cocos2d-x.org
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
  return {
    setters: [function (_coreIndexJs) {
      getError = _coreIndexJs.getError;
      logID = _coreIndexJs.logID;
    }, function (_coreGlobalExportsJs) {
      ccwindow = _coreGlobalExportsJs.ccwindow;
    }],
    execute: function () {
      /**
       * cc.tiffReader is a singleton object, it's a tiff file reader, it can parse byte array to draw into a canvas
       * @class
       * @name tiffReader
       */
      _export("TiffReader", TiffReader = /*#__PURE__*/function () {
        function TiffReader() {
          this._littleEndian = false;
          this._tiffData = [];
          this._fileDirectories = [];
        }
        var _proto = TiffReader.prototype;
        _proto.getUint8 = function getUint8(offset) {
          return this._tiffData[offset];
        };
        _proto.getUint16 = function getUint16(offset) {
          if (this._littleEndian) return this._tiffData[offset + 1] << 8 | this._tiffData[offset];else return this._tiffData[offset] << 8 | this._tiffData[offset + 1];
        };
        _proto.getUint32 = function getUint32(offset) {
          var a = this._tiffData;
          if (this._littleEndian) return a[offset + 3] << 24 | a[offset + 2] << 16 | a[offset + 1] << 8 | a[offset];else return a[offset] << 24 | a[offset + 1] << 16 | a[offset + 2] << 8 | a[offset + 3];
        };
        _proto.checkLittleEndian = function checkLittleEndian() {
          var BOM = this.getUint16(0);
          if (BOM === 0x4949) {
            this._littleEndian = true;
          } else if (BOM === 0x4D4D) {
            this._littleEndian = false;
          } else {
            console.log(BOM);
            throw TypeError(getError(6019));
          }
          return this._littleEndian;
        };
        _proto.hasTowel = function hasTowel() {
          // Check for towel.
          if (this.getUint16(2) !== 42) {
            throw RangeError(getError(6020));
          }
          return true;
        };
        _proto.getFieldTypeName = function getFieldTypeName(fieldType) {
          var typeNames = fieldTypeNames;
          if (fieldType in typeNames) {
            return typeNames[fieldType];
          }
          return null;
        };
        _proto.getFieldTagName = function getFieldTagName(fieldTag) {
          var tagNames = fieldTagNames;
          if (fieldTag in tagNames) {
            return tagNames[fieldTag];
          } else {
            logID(6021, fieldTag);
            return "Tag" + fieldTag;
          }
        };
        _proto.getFieldTypeLength = function getFieldTypeLength(fieldTypeName) {
          if (['BYTE', 'ASCII', 'SBYTE', 'UNDEFINED'].indexOf(fieldTypeName) !== -1) {
            return 1;
          } else if (['SHORT', 'SSHORT'].indexOf(fieldTypeName) !== -1) {
            return 2;
          } else if (['LONG', 'SLONG', 'FLOAT'].indexOf(fieldTypeName) !== -1) {
            return 4;
          } else if (['RATIONAL', 'SRATIONAL', 'DOUBLE'].indexOf(fieldTypeName) !== -1) {
            return 8;
          }
          return 0;
        };
        _proto.getFieldValues = function getFieldValues(fieldTagName, fieldTypeName, typeCount, valueOffset) {
          var fieldValues = [];
          var fieldTypeLength = this.getFieldTypeLength(fieldTypeName);
          var fieldValueSize = fieldTypeLength * typeCount;
          if (fieldValueSize <= 4) {
            // The value is stored at the big end of the valueOffset.
            if (this._littleEndian === false) fieldValues.push(valueOffset >>> (4 - fieldTypeLength) * 8);else fieldValues.push(valueOffset);
          } else {
            for (var i = 0; i < typeCount; i++) {
              var indexOffset = fieldTypeLength * i;
              if (fieldTypeLength >= 8) {
                if (['RATIONAL', 'SRATIONAL'].indexOf(fieldTypeName) !== -1) {
                  // Numerator
                  fieldValues.push(this.getUint32(valueOffset + indexOffset));
                  // Denominator
                  fieldValues.push(this.getUint32(valueOffset + indexOffset + 4));
                } else {
                  logID(8000);
                }
              } else {
                fieldValues.push(this.getBytes(fieldTypeLength, valueOffset + indexOffset));
              }
            }
          }
          if (fieldTypeName === 'ASCII') {
            fieldValues.forEach(function (e, i, a) {
              a[i] = String.fromCharCode(e);
            });
          }
          return fieldValues;
        };
        _proto.getBytes = function getBytes(numBytes, offset) {
          if (numBytes <= 0) {
            logID(8001);
          } else if (numBytes <= 1) {
            return this.getUint8(offset);
          } else if (numBytes <= 2) {
            return this.getUint16(offset);
          } else if (numBytes <= 3) {
            return this.getUint32(offset) >>> 8;
          } else if (numBytes <= 4) {
            return this.getUint32(offset);
          } else {
            logID(8002);
          }
          return 0;
        };
        _proto.getBits = function getBits(numBits, byteOffset, bitOffset) {
          bitOffset = bitOffset || 0;
          var extraBytes = Math.floor(bitOffset / 8);
          var newByteOffset = byteOffset + extraBytes;
          var totalBits = bitOffset + numBits;
          var shiftRight = 32 - numBits;
          var shiftLeft = 0;
          var rawBits = 0;
          if (totalBits <= 0) {
            logID(6023);
          } else if (totalBits <= 8) {
            shiftLeft = 24 + bitOffset;
            rawBits = this.getUint8(newByteOffset);
          } else if (totalBits <= 16) {
            shiftLeft = 16 + bitOffset;
            rawBits = this.getUint16(newByteOffset);
          } else if (totalBits <= 32) {
            shiftLeft = bitOffset;
            rawBits = this.getUint32(newByteOffset);
          } else {
            logID(6022);
          }
          return {
            bits: rawBits << shiftLeft >>> shiftRight,
            byteOffset: newByteOffset + Math.floor(totalBits / 8),
            bitOffset: totalBits % 8
          };
        };
        _proto.parseFileDirectory = function parseFileDirectory(offset) {
          var numDirEntries = this.getUint16(offset);
          var tiffFields = [];
          var i = 0;
          var entryCount = 0;
          for (i = offset + 2, entryCount = 0; entryCount < numDirEntries; i += 12, entryCount++) {
            var fieldTag = this.getUint16(i);
            var fieldType = this.getUint16(i + 2);
            var typeCount = this.getUint32(i + 4);
            var valueOffset = this.getUint32(i + 8);
            var fieldTagName = this.getFieldTagName(fieldTag);
            var fieldTypeName = this.getFieldTypeName(fieldType);
            var fieldValues = this.getFieldValues(fieldTagName, fieldTypeName, typeCount, valueOffset);
            tiffFields[fieldTagName] = {
              type: fieldTypeName,
              values: fieldValues
            };
          }
          this._fileDirectories.push(tiffFields);
          var nextIFDByteOffset = this.getUint32(i);
          if (nextIFDByteOffset !== 0x00000000) {
            this.parseFileDirectory(nextIFDByteOffset);
          }
        };
        _proto.clampColorSample = function clampColorSample(colorSample, bitsPerSample) {
          var multiplier = Math.pow(2, 8 - bitsPerSample);
          return Math.floor(colorSample * multiplier + (multiplier - 1));
        }

        /**
         * @function
         * @param {Array} tiffData
         * @param {HTMLCanvasElement} canvas
         * @returns {*}
         */;
        _proto.parseTIFF = function parseTIFF(tiffData, canvas) {
          var _this = this;
          canvas = canvas || ccwindow.document.createElement('canvas');
          this._tiffData = tiffData;
          this._canvas = canvas;
          this.checkLittleEndian();
          if (!this.hasTowel()) {
            return;
          }
          var firstIFDByteOffset = this.getUint32(4);
          this._fileDirectories.length = 0;
          this.parseFileDirectory(firstIFDByteOffset);
          var fileDirectory = this._fileDirectories[0];
          var imageWidth = fileDirectory.ImageWidth.values[0];
          var imageLength = fileDirectory.ImageLength.values[0];
          this._canvas.width = imageWidth;
          this._canvas.height = imageLength;
          var strips = [];
          var compression = fileDirectory.Compression ? fileDirectory.Compression.values[0] : 1;
          var samplesPerPixel = fileDirectory.SamplesPerPixel.values[0];
          var sampleProperties = [];
          var bitsPerPixel = 0;
          var hasBytesPerPixel = false;
          fileDirectory.BitsPerSample.values.forEach(function (bitsPerSample, i, bitsPerSampleValues) {
            sampleProperties[i] = {
              bitsPerSample: bitsPerSample,
              hasBytesPerSample: false,
              bytesPerSample: undefined
            };
            if (bitsPerSample % 8 === 0) {
              sampleProperties[i].hasBytesPerSample = true;
              sampleProperties[i].bytesPerSample = bitsPerSample / 8;
            }
            bitsPerPixel += bitsPerSample;
          }, this);
          var bytesPerPixel = 0;
          if (bitsPerPixel % 8 === 0) {
            hasBytesPerPixel = true;
            bytesPerPixel = bitsPerPixel / 8;
          }
          var stripOffsetValues = fileDirectory.StripOffsets.values;
          var numStripOffsetValues = stripOffsetValues.length;
          var stripByteCountValues;
          // StripByteCounts is supposed to be required, but see if we can recover anyway.
          if (fileDirectory.StripByteCounts) {
            stripByteCountValues = fileDirectory.StripByteCounts.values;
          } else {
            logID(8003);
            // Infer StripByteCounts, if possible.
            if (numStripOffsetValues === 1) {
              stripByteCountValues = [Math.ceil(imageWidth * imageLength * bitsPerPixel / 8)];
            } else {
              throw Error(getError(6024));
            }
          }
          var blockLength = 1;
          var iterations = 1;
          // Loop through strips and decompress as necessary.
          for (var i = 0; i < numStripOffsetValues; i++) {
            var stripOffset = stripOffsetValues[i];
            strips[i] = [];
            var stripByteCount = stripByteCountValues[i];
            // Loop through pixels.
            for (var byteOffset = 0, bitOffset = 0, jIncrement = 1, getHeader = true, pixel = [], numBytes = 0, sample = 0, currentSample = 0; byteOffset < stripByteCount; byteOffset += jIncrement) {
              // Decompress strip.
              switch (compression) {
                // Uncompressed
                case 1:
                  pixel = [];
                  // Loop through samples (sub-pixels).
                  for (var m = 0; m < samplesPerPixel; m++) {
                    var s = sampleProperties[m];
                    if (s.hasBytesPerSample) {
                      // XXX: This is wrong!
                      var sampleOffset = s.bytesPerSample * m;
                      pixel.push(this.getBytes(s.bytesPerSample, stripOffset + byteOffset + sampleOffset));
                    } else {
                      var sampleInfo = this.getBits(s.bitsPerSample, stripOffset + byteOffset, bitOffset);
                      pixel.push(sampleInfo.bits);
                      byteOffset = sampleInfo.byteOffset - stripOffset;
                      bitOffset = sampleInfo.bitOffset;
                      throw RangeError(getError(6025));
                    }
                  }
                  strips[i].push(pixel);
                  if (hasBytesPerPixel) {
                    jIncrement = bytesPerPixel;
                  } else {
                    jIncrement = 0;
                    throw RangeError(getError(6026));
                  }
                  break;

                // CITT Group 3 1-Dimensional Modified Huffman run-length encoding
                case 2:
                  // XXX: Use PDF.js code?
                  break;

                // Group 3 Fax
                case 3:
                  // XXX: Use PDF.js code?
                  break;

                // Group 4 Fax
                case 4:
                  // XXX: Use PDF.js code?
                  break;

                // LZW
                case 5:
                  // XXX: Use PDF.js code?
                  break;

                // Old-style JPEG (TIFF 6.0)
                case 6:
                  // XXX: Use PDF.js code?
                  break;

                // New-style JPEG (TIFF Specification Supplement 2)
                case 7:
                  // XXX: Use PDF.js code?
                  break;

                // PackBits
                case 32773:
                  // Are we ready for a new block?
                  if (getHeader) {
                    getHeader = false;
                    // The header byte is signed.
                    var header = this.getUint8(stripOffset + byteOffset);
                    if (header >= 0 && header <= 127) {
                      // Normal pixels.
                      blockLength = header + 1;
                    } else if (header >= -127 && header <= -1) {
                      // Collapsed pixels.
                      iterations = -header + 1;
                    } else /* if (header === -128) */{
                        // Placeholder byte?
                        getHeader = true;
                      }
                  } else {
                    var currentByte = this.getUint8(stripOffset + byteOffset);

                    // Duplicate bytes, if necessary.
                    for (var _m = 0; _m < iterations; _m++) {
                      var _s = sampleProperties[sample];
                      if (_s.hasBytesPerSample) {
                        // We're reading one byte at a time, so we need to handle multi-byte samples.
                        currentSample = currentSample << 8 * numBytes | currentByte;
                        numBytes++;

                        // Is our sample complete?
                        if (numBytes === _s.bytesPerSample) {
                          pixel.push(currentSample);
                          currentSample = numBytes = 0;
                          sample++;
                        }
                      } else {
                        throw RangeError(getError(6025));
                      }

                      // Is our pixel complete?
                      if (sample === samplesPerPixel) {
                        strips[i].push(pixel);
                        pixel = [];
                        sample = 0;
                      }
                    }
                    blockLength--;

                    // Is our block complete?
                    if (blockLength === 0) {
                      getHeader = true;
                    }
                  }
                  jIncrement = 1;
                  break;

                // Unknown compression algorithm
                default:
                  // Do not attempt to parse the image data.
                  break;
              }
            }
          }
          if (canvas.getContext) {
            var ctx = this._canvas.getContext('2d');

            // Set a default fill style.
            ctx.fillStyle = 'rgba(255, 255, 255, 0)';

            // If RowsPerStrip is missing, the whole image is in one strip.
            var rowsPerStrip = fileDirectory.RowsPerStrip ? fileDirectory.RowsPerStrip.values[0] : imageLength;
            var numStrips = strips.length;
            var imageLengthModRowsPerStrip = imageLength % rowsPerStrip;
            var rowsInLastStrip = imageLengthModRowsPerStrip === 0 ? rowsPerStrip : imageLengthModRowsPerStrip;
            var numRowsInStrip = rowsPerStrip;
            var numRowsInPreviousStrip = 0;
            var photometricInterpretation = fileDirectory.PhotometricInterpretation.values[0];
            var extraSamplesValues = [];
            var numExtraSamples = 0;
            if (fileDirectory.ExtraSamples) {
              extraSamplesValues = fileDirectory.ExtraSamples.values;
              numExtraSamples = extraSamplesValues.length;
            }
            var colorMapValues = [];
            var colorMapSampleSize = 0;
            if (fileDirectory.ColorMap) {
              colorMapValues = fileDirectory.ColorMap.values;
              colorMapSampleSize = Math.pow(2, sampleProperties[0].bitsPerSample);
            }

            // Loop through the strips in the image.
            for (var _i = 0; _i < numStrips; _i++) {
              // The last strip may be short.
              if (_i + 1 === numStrips) {
                numRowsInStrip = rowsInLastStrip;
              }
              var numPixels = strips[_i].length;
              var yPadding = numRowsInPreviousStrip * _i;

              // Loop through the rows in the strip.
              for (var y = 0, j = 0; y < numRowsInStrip && j < numPixels; y++) {
                var _loop = function _loop() {
                  var pixelSamples = strips[_i][j];
                  var red = 0;
                  var green = 0;
                  var blue = 0;
                  var opacity = 1.0;
                  if (numExtraSamples > 0) {
                    for (var k = 0; k < numExtraSamples; k++) {
                      if (extraSamplesValues[k] === 1 || extraSamplesValues[k] === 2) {
                        // Clamp opacity to the range [0,1].
                        opacity = pixelSamples[3 + k] / 256;
                        break;
                      }
                    }
                  }
                  switch (photometricInterpretation) {
                    // Bilevel or Grayscale
                    // WhiteIsZero
                    case 0:
                      var invertValue = 0;
                      if (sampleProperties[0].hasBytesPerSample) {
                        invertValue = Math.pow(0x10, sampleProperties[0].bytesPerSample * 2);
                      }

                      // Invert samples.
                      pixelSamples.forEach(function (sample, index, samples) {
                        samples[index] = invertValue - sample;
                      });

                    // Bilevel or Grayscale
                    // BlackIsZero
                    case 1:
                      red = green = blue = _this.clampColorSample(pixelSamples[0], sampleProperties[0].bitsPerSample);
                      break;

                    // RGB Full Color
                    case 2:
                      red = _this.clampColorSample(pixelSamples[0], sampleProperties[0].bitsPerSample);
                      green = _this.clampColorSample(pixelSamples[1], sampleProperties[1].bitsPerSample);
                      blue = _this.clampColorSample(pixelSamples[2], sampleProperties[2].bitsPerSample);
                      break;

                    // RGB Color Palette
                    case 3:
                      if (colorMapValues === undefined) {
                        throw Error(getError(6027));
                      }
                      var colorMapIndex = pixelSamples[0];
                      red = _this.clampColorSample(colorMapValues[colorMapIndex], 16);
                      green = _this.clampColorSample(colorMapValues[colorMapSampleSize + colorMapIndex], 16);
                      blue = _this.clampColorSample(colorMapValues[2 * colorMapSampleSize + colorMapIndex], 16);
                      break;

                    // Unknown Photometric Interpretation
                    default:
                      throw RangeError(getError(6028, photometricInterpretation));
                  }
                  ctx.fillStyle = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
                  ctx.fillRect(x, yPadding + y, 1, 1);
                };
                // Loop through the pixels in the row.
                for (var x = 0; x < imageWidth; x++, j++) {
                  _loop();
                }
              }
              numRowsInPreviousStrip = numRowsInStrip;
            }
          }
          return this._canvas;
        }

        // See: http://www.digitizationguidelines.gov/guidelines/TIFF_Metadata_Final.pdf
        // See: http://www.digitalpreservation.gov/formats/content/tiff_tags.shtml
        ;
        return TiffReader;
      }());
      fieldTagNames = {
        // TIFF Baseline
        0x013B: 'Artist',
        0x0102: 'BitsPerSample',
        0x0109: 'CellLength',
        0x0108: 'CellWidth',
        0x0140: 'ColorMap',
        0x0103: 'Compression',
        0x8298: 'Copyright',
        0x0132: 'DateTime',
        0x0152: 'ExtraSamples',
        0x010A: 'FillOrder',
        0x0121: 'FreeByteCounts',
        0x0120: 'FreeOffsets',
        0x0123: 'GrayResponseCurve',
        0x0122: 'GrayResponseUnit',
        0x013C: 'HostComputer',
        0x010E: 'ImageDescription',
        0x0101: 'ImageLength',
        0x0100: 'ImageWidth',
        0x010F: 'Make',
        0x0119: 'MaxSampleValue',
        0x0118: 'MinSampleValue',
        0x0110: 'Model',
        0x00FE: 'NewSubfileType',
        0x0112: 'Orientation',
        0x0106: 'PhotometricInterpretation',
        0x011C: 'PlanarConfiguration',
        0x0128: 'ResolutionUnit',
        0x0116: 'RowsPerStrip',
        0x0115: 'SamplesPerPixel',
        0x0131: 'Software',
        0x0117: 'StripByteCounts',
        0x0111: 'StripOffsets',
        0x00FF: 'SubfileType',
        0x0107: 'Threshholding',
        0x011A: 'XResolution',
        0x011B: 'YResolution',
        // TIFF Extended
        0x0146: 'BadFaxLines',
        0x0147: 'CleanFaxData',
        0x0157: 'ClipPath',
        0x0148: 'ConsecutiveBadFaxLines',
        0x01B1: 'Decode',
        0x01B2: 'DefaultImageColor',
        0x010D: 'DocumentName',
        0x0150: 'DotRange',
        0x0141: 'HalftoneHints',
        0x015A: 'Indexed',
        0x015B: 'JPEGTables',
        0x011D: 'PageName',
        0x0129: 'PageNumber',
        0x013D: 'Predictor',
        0x013F: 'PrimaryChromaticities',
        0x0214: 'ReferenceBlackWhite',
        0x0153: 'SampleFormat',
        0x022F: 'StripRowCounts',
        0x014A: 'SubIFDs',
        0x0124: 'T4Options',
        0x0125: 'T6Options',
        0x0145: 'TileByteCounts',
        0x0143: 'TileLength',
        0x0144: 'TileOffsets',
        0x0142: 'TileWidth',
        0x012D: 'TransferFunction',
        0x013E: 'WhitePoint',
        0x0158: 'XClipPathUnits',
        0x011E: 'XPosition',
        0x0211: 'YCbCrCoefficients',
        0x0213: 'YCbCrPositioning',
        0x0212: 'YCbCrSubSampling',
        0x0159: 'YClipPathUnits',
        0x011F: 'YPosition',
        // EXIF
        0x9202: 'ApertureValue',
        0xA001: 'ColorSpace',
        0x9004: 'DateTimeDigitized',
        0x9003: 'DateTimeOriginal',
        0x8769: 'Exif IFD',
        0x9000: 'ExifVersion',
        0x829A: 'ExposureTime',
        0xA300: 'FileSource',
        0x9209: 'Flash',
        0xA000: 'FlashpixVersion',
        0x829D: 'FNumber',
        0xA420: 'ImageUniqueID',
        0x9208: 'LightSource',
        0x927C: 'MakerNote',
        0x9201: 'ShutterSpeedValue',
        0x9286: 'UserComment',
        // IPTC
        0x83BB: 'IPTC',
        // ICC
        0x8773: 'ICC Profile',
        // XMP
        0x02BC: 'XMP',
        // GDAL
        0xA480: 'GDAL_METADATA',
        0xA481: 'GDAL_NODATA',
        // Photoshop
        0x8649: 'Photoshop'
      };
      fieldTypeNames = {
        0x0001: 'BYTE',
        0x0002: 'ASCII',
        0x0003: 'SHORT',
        0x0004: 'LONG',
        0x0005: 'RATIONAL',
        0x0006: 'SBYTE',
        0x0007: 'UNDEFINED',
        0x0008: 'SSHORT',
        0x0009: 'SLONG',
        0x000A: 'SRATIONAL',
        0x000B: 'FLOAT',
        0x000C: 'DOUBLE'
      };
    }
  };
});