//****** MODE ADMINISTRATEUR ********// 

function editMode() {
    const token = window.localStorage.getItem("token");

    if (token) {
        //création du bandeau noir "mode édition"/
        const editBanner = document.createElement("div");
        editBanner.classList.add("edit");
        editBanner.innerHTML = `
        <p>
        <i class="fa-regular fa-pen-to-square"></i>Mode édition
        <p>`;
        document.body.prepend(editBanner);
        // création du bouton "modifier" /
        const editButton = document.querySelector(".editMode");
        editButton.classList.add("editMode");
        editButton.innerHTML = `
        <button class="change-btn">
        <i class="fa-regular fa-pen-to-square"></i>modifier
        </button>`;
    }
}

function logOut() {
    const token = window.localStorage.getItem("token");

    if (token) {
        const loginLink = document.querySelector("nav ul li a");
        if (loginLink) {
            loginLink.innerText = "logout";
            loginLink.addEventListener("click", (event) => {
                event.preventDefault();
                window.localStorage.removeItem("token")
                window.location.reload();
            });
        }
    }
}

//****** MODALE ********// 

let modal = null


function openModal(event) {
    event.preventDefault();
    const target = document.getElementById("modal1")
    target.style.display = null
    target.removeAttribute("aria-hidden")
    target.setAttribute("aria-modal", "true")
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector(".js-close-modal").addEventListener("click", closeModal)


    // const changeBtn = editButton.querySelector(".change-btn");
    // changeBtn.addEventListener("click", openModal); 
}


function closeModal(event) {
    if (modal === null) return
    event.preventDefault();
    modal.style.display = "none"
    modal.setAttribute("aria-hidden", 'true')
    modal.removeAttribute("aria-modal")
    modal.removeEventListener('click', closeModal)
    modal.querySelector(".js-close-modal").removeEventListener("click", closeModal)
    modal = null
}