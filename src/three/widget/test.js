import * as THREE from "three";
import { scene } from "../basic";

let testMesh;
export function testInit() {
  testMesh = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshNormalMaterial(),
  );
  scene.add(testMesh);
}

export { testMesh };
