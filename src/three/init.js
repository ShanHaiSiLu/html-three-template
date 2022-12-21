import { scene } from "./basic";
import { camera } from "./basic";
import { renderer } from "./basic";
import { orbitController } from "./basic";

import { initLoadManager } from "./widget/loadingManager";
import { testInit, testMesh } from "./widget/test";

export function init() {
  initLoadManager();

  document.querySelector("#app").appendChild(renderer.domElement);

  testInit();
  console.log(testMesh);
}

export function render() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);

  let angle = Math.PI / 180;
  testMesh.rotateX(angle).rotateY(angle).rotateZ(angle);
}
