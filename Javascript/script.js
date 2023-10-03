const svgContainer = document.getElementById('svg-container');
const canvasContainer = document.getElementById('canvas-container');
const toggleButton = document.getElementById('toggle-button');
let is3D = false;
let scene, camera, renderer;
let svgObject;

// Fonction pour basculer entre 2D et 3D
toggleButton.addEventListener('click', () => {
    if (is3D) {
        svgContainer.style.display = 'block';
        canvasContainer.style.display = 'none';
    } else {
        svgContainer.style.display = 'none';
        canvasContainer.style.display = 'block';
        create3DScene();
    }
    is3D = !is3D;
});

// Fonction pour créer la scène 3D avec Three.js
function create3DScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasContainer.appendChild(renderer.domElement);

    // Créer un objet 3D basé sur le SVG
    const svgLoader = new THREE.SVGLoader();
    svgLoader.load('worldHigh.svg', (data) => {
        svgObject = new THREE.Object3D();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        data.paths.forEach((path) => {
            const shapes = svgLoader.createShapes(path);
            shapes.forEach((shape) => {
                const geometry = new THREE.ShapeGeometry(shape);
                const mesh = new THREE.Mesh(geometry, material);
                svgObject.add(mesh);
            });
        });
        scene.add(svgObject);
    });

    camera.position.z = 5;

    const animate = () => {
        requestAnimationFrame(animate);
        if (svgObject) {
            svgObject.rotation.x += 0.01;
            svgObject.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
    };

    animate();
}