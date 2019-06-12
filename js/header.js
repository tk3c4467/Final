window.addEventListener("scroll", function() {
const header = document.getElementById("header");
if (window.pageYOffset > 0) {
hearder.classList.add("");
} else {
header.classList.remove("");
}
});