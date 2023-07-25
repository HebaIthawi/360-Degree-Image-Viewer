const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer.add(panoramaImage);


const panoramaImage2 = new PANOLENS.ImagePanorama("images/360-library.jpg");
const imageContainer2 = document.querySelector(".image-container2");

const viewer2 = new PANOLENS.Viewer({
  container: imageContainer2,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer2.add(panoramaImage2);