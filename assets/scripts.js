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
    document.getElementById("full-screen-div").style.display = "block";
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

function closeFullScreen() {
  lightbox.classList.remove("active");
  document.getElementById("full-screen-div").style.display = "none";
}

/*
 * REVEAL METHOD
 */
const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach(function (r) {
  observer.observe(r);
});
