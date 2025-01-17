System.register("q-bundled:///fs/cocos/rendering/category.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        title: {
          zh: '渲染管线',
          en: 'Render Pipeline'
        },
        description: {
          zh: 'RenderPipeline 用于控制场景的渲染流程，包括光照管理、物体剔除、渲染物体排序、渲染目标切换等。由于每个阶段对于不同项目来说可以有不同的优化处理方式，所以用统一的方法来处理不同类型项目的渲染流程很难达到最优化的结果。可定制化的渲染管线用于对渲染场景中的每个阶段进行更灵活的控制，可以针对不同的项目做更深层次的优化方案。',
          en: 'RenderPipeline is used to control the rendering process of a scene, including lighting management, object culling, render object sorting, render target switching, etc. Since each stage can be handled differently and optimized for different projects, it is difficult to achieve optimal results with one uniform rendering process for different types of projects. The customizable render pipeline is used to provide more flexible control over each stage in the rendering process, allowing for deeper optimization solutions for different projects.'
        }
      });
    }
  };
});