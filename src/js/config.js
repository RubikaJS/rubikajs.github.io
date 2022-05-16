function hideNav() {
    const nav = document.getElementById("nav");
    nav.style.width = "0%";
}

function showNav() {
    const nav = document.getElementById("nav");
    nav.style.width = "100%";

}

function copyright() {
    const footer = document.getElementById("footer");

    footer.innerHTML = "<p>Copyright &copy; Rubika - " + new Date().getFullYear() + "</p>";
}

copyright();
