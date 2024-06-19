function toggle_dark_mode() {
    let is_dark_mode = localStorage.getItem("dark_mode")
    if (is_dark_mode == "true") {
        is_dark_mode = false
    } else {
        is_dark_mode = true
    }

    localStorage.setItem('dark_mode', is_dark_mode)
    document.querySelector('header').classList.toggle('dark-nav', is_dark_mode)
    document.querySelector('main').classList.toggle('dark-about-me', is_dark_mode)
    document.querySelector('footer').classList.toggle('dark-nav', is_dark_mode)
}
let button = document.querySelector(".whiteorblack")
button.addEventListener("click", toggle_dark_mode)