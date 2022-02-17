nav = document.querySelector("header nav");

nav.addEventListener("click", () => {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
  } else {
    nav.classList.add("open");
  }
});

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  lightbox.classList.remove("active");
});
