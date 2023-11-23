const input = document.getElementById("input")
const lbl = document.querySelector(".lbl")
const kapak = document.querySelectorAll(".accordion-kapak")
const hide = document.querySelectorAll(".accordion-hide")

input.addEventListener("focusin", () => {
    lbl.classList.add("lbl-active")

})
input.addEventListener("focusout", () => {
    if (input.value == "") {
        lbl.classList.remove("lbl-active")
    }
})

kapak.forEach(title => {
    title.addEventListener("click", function () {
        let hide = this.parentElement.children[1]
        hide.classList.toggle("accordion-show")
        hide.classList.toggle("p-3")
        hide.classList.toggle("p-3")

    })
})
