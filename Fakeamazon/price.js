const mainImageContainer = document.getElementById("mainImageContainer");
const zoomModal = document.getElementById("zoomModal");
const closeZoom = document.getElementById("closeZoom");
const zoomedImage = document.getElementById("zoomedImage");

const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");

let zoomLevel = 1;
let cartCount = 0;
const bookPrice = 16.99;

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

    if (zoomLevel < 1) {
        zoomLevel = 1;
    }

    if (zoomLevel > 4) {
        zoomLevel = 4;
    }

    zoomedImage.style.transform = "scale(" + zoomLevel + ")";
});

function zoomIn() {
    zoomLevel += 0.2;
    if (zoomLevel > 4) {
        zoomLevel = 4;
    }
    zoomedImage.style.transform = "scale(" + zoomLevel + ")";
}

function zoomOut() {
    zoomLevel -= 0.2;
    if (zoomLevel < 1) {
        zoomLevel = 1;
    }
    zoomedImage.style.transform = "scale(" + zoomLevel + ")";
}

function resetZoom() {
    zoomLevel = 1;
    zoomedImage.style.transform = "scale(1)";
}

function addToCart() {
    cartCount++;

    const subtotal = bookPrice * cartCount;
    const gst = subtotal * 0.05;
    const hst = subtotal * 0.08;
    const finalTotal = subtotal + gst + hst;

    document.getElementById("cartQuantity").textContent = "Qty: " + cartCount;
    document.getElementById("cartQtyNumber").textContent = cartCount;
    document.getElementById("cartSubtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("cartGst").textContent = "$" + gst.toFixed(2);
    document.getElementById("cartHst").textContent = "$" + hst.toFixed(2);
    document.getElementById("cartFinalTotal").textContent = "$" + finalTotal.toFixed(2);

    cartModal.classList.add("active");
}

function closeCartPopup() {
    cartModal.classList.remove("active");
}

closeCart.addEventListener("click", function () {
    cartModal.classList.remove("active");
});

cartModal.addEventListener("click", function (event) {
    if (event.target === cartModal) {
        cartModal.classList.remove("active");
    }
});