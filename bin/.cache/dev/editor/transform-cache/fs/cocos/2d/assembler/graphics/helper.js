System.register("q-bundled:///fs/cocos/2d/assembler/graphics/helper.js", ["./types.js"], function (_export, _context) {
  "use strict";

  var PointFlags, PI, min, max, cos, sin, abs, sign, KAPPA90;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  function arc(ctx, cx, cy, r, startAngle, endAngle, counterclockwise) {
    counterclockwise = counterclockwise || false;
    let a = 0;
    let da = 0;
    let hda = 0;
    let kappa = 0;
    let dx = 0;
    let dy = 0;
    let x = 0;
    let y = 0;
    let tanx = 0;
    let tany = 0;
    let px = 0;
    let py = 0;
    let ptanx = 0;
    let ptany = 0;
    let i = 0;
    let ndivs = 0;

    // Clamp angles
    da = endAngle - startAngle;
    if (counterclockwise) {
      if (abs(da) >= PI * 2) {
        da = PI * 2;
      } else {
        while (da < 0) {
          da += PI * 2;
        }
      }
    } else if (abs(da) >= PI * 2) {
      da = -PI * 2;
    } else {
      while (da > 0) {
        da -= PI * 2;
      }
    }

    // Split arc into max 90 degree segments.
    ndivs = max(1, min(abs(da) / (PI * 0.5) + 0.5, 5)) | 0;
    hda = da / ndivs / 2.0;
    kappa = abs(4.0 / 3.0 * (1 - cos(hda)) / sin(hda));
    if (!counterclockwise) {
      kappa = -kappa;
    }
    for (i = 0; i <= ndivs; i++) {
      a = startAngle + da * (i / ndivs);
      dx = cos(a);
      dy = sin(a);
      x = cx + dx * r;
      y = cy + dy * r;
      tanx = -dy * r * kappa;
      tany = dx * r * kappa;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.bezierCurveTo(px + ptanx, py + ptany, x - tanx, y - tany, x, y);
      }
      px = x;
      py = y;
      ptanx = tanx;
      ptany = tany;
    }
  }
  function ellipse(ctx, cx, cy, rx, ry) {
    ctx.moveTo(cx - rx, cy);
    ctx.bezierCurveTo(cx - rx, cy + ry * KAPPA90, cx - rx * KAPPA90, cy + ry, cx, cy + ry);
    ctx.bezierCurveTo(cx + rx * KAPPA90, cy + ry, cx + rx, cy + ry * KAPPA90, cx + rx, cy);
    ctx.bezierCurveTo(cx + rx, cy - ry * KAPPA90, cx + rx * KAPPA90, cy - ry, cx, cy - ry);
    ctx.bezierCurveTo(cx - rx * KAPPA90, cy - ry, cx - rx, cy - ry * KAPPA90, cx - rx, cy);
    ctx.close();
  }
  function roundRect(ctx, x, y, w, h, r) {
    if (r < 0.1) {
      ctx.rect(x, y, w, h);
    } else {
      const rx = min(r, abs(w) * 0.5) * sign(w);
      const ry = min(r, abs(h) * 0.5) * sign(h);
      ctx.moveTo(x, y + ry);
      ctx.lineTo(x, y + h - ry);
      ctx.bezierCurveTo(x, y + h - ry * (1 - KAPPA90), x + rx * (1 - KAPPA90), y + h, x + rx, y + h);
      ctx.lineTo(x + w - rx, y + h);
      ctx.bezierCurveTo(x + w - rx * (1 - KAPPA90), y + h, x + w, y + h - ry * (1 - KAPPA90), x + w, y + h - ry);
      ctx.lineTo(x + w, y + ry);
      ctx.bezierCurveTo(x + w, y + ry * (1 - KAPPA90), x + w - rx * (1 - KAPPA90), y, x + w - rx, y);
      ctx.lineTo(x + rx, y);
      ctx.bezierCurveTo(x + rx * (1 - KAPPA90), y, x, y + ry * (1 - KAPPA90), x, y + ry);
      ctx.close();
    }
  }
  function tesselateBezier(ctx, x1, y1, x2, y2, x3, y3, x4, y4, level, type) {
    let x12 = 0;
    let y12 = 0;
    let x23 = 0;
    let y23 = 0;
    let x34 = 0;
    let y34 = 0;
    let x123 = 0;
    let y123 = 0;
    let x234 = 0;
    let y234 = 0;
    let x1234 = 0;
    let y1234 = 0;
    let dx = 0;
    let dy = 0;
    let d2 = 0;
    let d3 = 0;
    if (level > 10) {
      return;
    }
    x12 = (x1 + x2) * 0.5;
    y12 = (y1 + y2) * 0.5;
    x23 = (x2 + x3) * 0.5;
    y23 = (y2 + y3) * 0.5;
    x34 = (x3 + x4) * 0.5;
    y34 = (y3 + y4) * 0.5;
    x123 = (x12 + x23) * 0.5;
    y123 = (y12 + y23) * 0.5;
    dx = x4 - x1;
    dy = y4 - y1;
    d2 = abs((x2 - x4) * dy - (y2 - y4) * dx);
    d3 = abs((x3 - x4) * dy - (y3 - y4) * dx);
    if ((d2 + d3) * (d2 + d3) < ctx.tessTol * (dx * dx + dy * dy)) {
      ctx.addPoint(x4, y4, type === 0 ? type | PointFlags.PT_BEVEL : type);
      return;
    }
    x234 = (x23 + x34) * 0.5;
    y234 = (y23 + y34) * 0.5;
    x1234 = (x123 + x234) * 0.5;
    y1234 = (y123 + y234) * 0.5;
    tesselateBezier(ctx, x1, y1, x12, y12, x123, y123, x1234, y1234, level + 1, 0);
    tesselateBezier(ctx, x1234, y1234, x234, y234, x34, y34, x4, y4, level + 1, type);
  }
  _export({
    arc: arc,
    ellipse: ellipse,
    roundRect: roundRect,
    tesselateBezier: tesselateBezier
  });
  return {
    setters: [function (_typesJs) {
      PointFlags = _typesJs.PointFlags;
    }],
    execute: function () {
      PI = Math.PI;
      min = Math.min;
      max = Math.max;
      cos = Math.cos;
      sin = Math.sin;
      abs = Math.abs;
      sign = Math.sign;
      KAPPA90 = 0.5522847493;
    }
  };
});