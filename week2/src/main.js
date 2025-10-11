import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshStandardMaterial({color:0xf5424e})
);
scene.add(cube);

// Axes
const axes = new THREE.AxesHelper(4);
scene.add(axes);

// Light
const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(3,3,3);
scene.add(light);

// Group 
const group = new THREE.Group();
group.scale.x = 0.5
group.scale.y = 2
group.position.y = 0.5
group.rotation.x = Math.PI*0.25
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshStandardMaterial({color:"yellow"})
)
cube1.position.x = -1.5
group.add(cube1)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshStandardMaterial({color:"blue"})
)
cube2.position.x = 3
group.add(cube2)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshStandardMaterial({color:"green"})
)
cube3.position.x = 1.5
group.add(cube3)

// Animate
function animate(){
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.05;
  cube.rotation.z += 0.03;

  cube1.rotation.y += 0.01
  cube2.rotation.y += 0.01
  cube3.rotation.y += 0.01

  renderer.render(scene, camera);
}

animate();
