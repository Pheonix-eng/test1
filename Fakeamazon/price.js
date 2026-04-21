const mainImageContainer = document.getElementById("mainImageContainer");
const zoomModal = document.getElementById("zoomModal");
const closeZoom = document.getElementById("closeZoom");
const zoomedImage = document.getElementById("zoomedImage");

let zoomLevel = 1;

mainImageContainer.addEventListener("click", function () {
    zoomModal.classList.add("active");
    zoomLevel = 1;
    zoomedImage.style.transform = "scale(1)";
});

closeZoom.addEventListener("click", function () {
    zoomModal.classList.remove("active");
});

zoomModal.addEventListener("click", function (event) {
    if (event.target === zoomModal) {
        zoomModal.classList.remove("active");
    }
});

zoomedImage.addEventListener("wheel", function (event) {
    event.preventDefault();

    if (event.deltaY < 0) {
        zoomLevel += 0.1;
    } else {
        zoomLevel -= 0.1;
    }

    if (zoomLevel < 1) zoomLevel = 1;
    if (zoomLevel > 4) zoomLevel = 4;

    zoomedImage.style.transform = `scale(${zoomLevel})`;
});