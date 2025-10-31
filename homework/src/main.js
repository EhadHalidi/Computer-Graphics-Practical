

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd7ea);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(50, 40, 80);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

const ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 0.8);
sun.position.set(60, 80, 40);
scene.add(sun);

const grassMat = new THREE.MeshLambertMaterial({ color: 0x6aa84f });
const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), grassMat);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const roadMat = new THREE.MeshStandardMaterial({ color: 0x555555 });
const mainRoad = new THREE.Mesh(new THREE.PlaneGeometry(100, 10), roadMat);
mainRoad.rotation.x = -Math.PI / 2;
mainRoad.position.set(-30, 0.01,-20);
scene.add(mainRoad);

const roadMat2 = new THREE.MeshStandardMaterial({ color: 0x555555 });
const mainRoad2 = new THREE.Mesh(new THREE.PlaneGeometry(50, 10), roadMat2);
mainRoad2.rotation.x = -Math.PI / 2;
mainRoad2.position.set(30, 0.01,-20);
scene.add(mainRoad2);

const roadMat3 = new THREE.MeshStandardMaterial({ color: 0x555555 });
const mainRoad3 = new THREE.Mesh(new THREE.PlaneGeometry(150, 5), roadMat3);
mainRoad3.rotation.x = -Math.PI / 2
mainRoad3.rotation.z = 70 * Math.PI / 180; 
mainRoad3.position.set(-5, 0.01,0);
scene.add(mainRoad3);

const circleRoad = new THREE.Mesh(new THREE.CircleGeometry(10, 32), roadMat);
circleRoad.rotation.x = -Math.PI / 2;
circleRoad.position.set(0, 0.01, -20);
scene.add(circleRoad);

const centerGrass = new THREE.Mesh(new THREE.CircleGeometry(6, 32), new THREE.MeshLambertMaterial({ color: 0x38761d }));
centerGrass.rotation.x = -Math.PI / 2;
centerGrass.position.set(0, 0.02, -20);
scene.add(centerGrass);

const buildingMat = new THREE.MeshStandardMaterial({ color: 0x3c78d8 }); 

const building = new THREE.Mesh(new THREE.BoxGeometry(10, 6, 50), buildingMat);

building.position.set(5, 3, 25); 
building.castShadow = true;
building.receiveShadow = true;
mainRoad3.rotation.z = 90 * Math.PI / 180; 

scene.add(building);

const yellowMat = new THREE.MeshStandardMaterial({ color: 0xffd966 });

const yellowBuilding = new THREE.Mesh(new THREE.BoxGeometry(28, 12, 15), yellowMat);


yellowBuilding.position.set(20, 4, -40);
yellowBuilding.rotation.y = 15 * Math.PI / 180; 
yellowBuilding.castShadow = true;
yellowBuilding.receiveShadow = true;
scene.add(yellowBuilding);

const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const whiteBuilding = new THREE.Mesh(new THREE.BoxGeometry(28, 12, 15), whiteMaterial);
whiteBuilding.position.set(-25, 4, -45);
whiteBuilding.rotation.y = -90 * Math.PI / 180;
whiteBuilding.castShadow = true;
whiteBuilding.receiveShadow = true;
scene.add(whiteBuilding);


const yellowMat2 = new THREE.MeshStandardMaterial({ color: 0xffd966 }); // aynı sarı renk

const yellowBuilding2 = new THREE.Mesh(new THREE.BoxGeometry(20, 8, 16), yellowMat2);
yellowBuilding2.position.set(-60, 4, -40);
yellowBuilding2.castShadow = true;
yellowBuilding2.receiveShadow = true;

scene.add(yellowBuilding2);
function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
