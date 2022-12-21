import * as THREE from "three";

export function initLoadManager() {
  THREE.DefaultLoadingManager.onStart = function (
    url,
    itemsLoaded,
    itemsTotal,
  ) {
    /*
    console.log(
      `开始加载文件：${url}，\n加载第${itemsLoaded}个，\n合计有${itemsTotal}个`,
    );
    */
  };

  THREE.DefaultLoadingManager.onLoad = function () {
    console.log("加载完成！");
  };

  THREE.DefaultLoadingManager.onProgress = function (
    url,
    itemsLoaded,
    itemsTotal,
  ) {
    /*
    console.log(
      `加载文件：${url}，\n加载第${itemsLoaded}个，\n合计有${itemsTotal}个`,
    );
    */
  };

  THREE.DefaultLoadingManager.onError = function (url) {
    console.log(
      `%c  加载出错：${url} `,
      "font-size:13px; background:red; color:#bf2c9f;",
    );
  };
}
