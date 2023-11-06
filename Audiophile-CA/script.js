
document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here

    toggle_popup_menu();

});

// popup menu button
function toggle_popup_menu() {
    document.getElementById("toggleBtn").addEventListener("click", function () {
        let menu = document.getElementById("popup-box-id");

        if (menu.style.visibility === "visible") {
            menu.style.display = "none"
            menu.style.visibility = "hidden"
            document.body.style.overflow = "visible";
        } else {
            menu.style.display = "block";
            menu.style.visibility = "visible";
            document.body.style.overflow = "hidden";
        }

        document.body.classList.toggle('new-class');
    });
}