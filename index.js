const tabBtns = document.querySelectorAll(".tab-toggle")
const tabContents = document.querySelectorAll(".tab-content")

// tabContents.forEach((content)=> {
//     content.classList.remove("is-active")
// });

// tabBtns.forEach((tabB) => {
//     tabB.classList.remove("is-active")
// })

tabBtns.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        tabContents.forEach((content)=> {
            content.classList.remove("is-active")
        });

        tabBtns.forEach((tabB) => {
            tabB.classList.remove("is-active")
        })

        tabBtns[index].classList.add("is-active")
        tabContents[index].classList.add("is-active")

    });


})