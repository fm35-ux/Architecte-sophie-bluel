//****** MODE ADMINISTRATEUR ********// 

function editMode(works) {
    const token = window.localStorage.getItem("token");

    if (token) {
        //création du bandeau noir "mode édition"/
        const editBanner = document.createElement("div");
        editBanner.classList.add("edit");
        editBanner.innerHTML = `
        <p>
        <i class="fa-regular fa-pen-to-square"></i>Mode édition
        </p>`;
        document.body.prepend(editBanner);

        // création du bouton "modifier" /
        const editButton = document.querySelector(".editMode");
        editButton.classList.add("editMode");
        editButton.innerHTML = `
        <button class="change-btn modal-trigger">
        <i class="fa-regular fa-pen-to-square"></i>modifier
        </button>`;

        setupModal(works);
    }
}

function logOut() {
    const token = window.localStorage.getItem("token");

    if (token) {
        const loginLink = document.querySelector("a[href*='login.html']");
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

//OUVERTURE,FERMETURE et LIENS DES MODALES

function setupModal(works) {
    const modal1 = document.querySelector("#modal-gallery-element");
    const modal2 = document.querySelector("#modal-add-photo");

    createModal1Elements();
    createModal2Elements();

    // ouverture de la modale 1
    const modalOpen = document.querySelector(".editMode");
    modalOpen.addEventListener("click", () => {
        modal1.classList.add("active");
        modal1.setAttribute("aria-hidden", "false");
        displayModal1Works(works);

    });

    //Lien entre modale 1 et modale 2
    const btnAddPhoto = document.querySelector(".modal-btn-add-photo");
    btnAddPhoto.addEventListener("click", () => {
        modal1.classList.remove("active");
        modal2.classList.add("active");
        modal1.setAttribute("aria-hidden", "true");
        modal2.setAttribute("aria-hidden", "false");
    });

    //Retour de la modale 2 à la modale 1
    const backBtn = document.querySelector(".back-modal");
    backBtn.addEventListener("click", () => {
        modal2.classList.remove("active");
        modal1.classList.add("active");
        modal2.setAttribute("aria-hidden", "true");
        modal1.setAttribute("aria-hidden", "false");
    });

    //fermeture de la modale (bouton croix et overlay)
    const triggers = document.querySelectorAll(".modal-trigger");
    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            modal1.classList.remove("active");
            modal2.classList.remove("active");
            modal1.setAttribute("aria-hidden", "true");
            modal2.setAttribute("aria-hidden", "true");
        });
    });

}

//****** MODALE 1 ********// 

//création des BOUTONS de la modale 1
function createModal1Elements() {
    const modal1 = document.getElementById("modal-gallery-element");
    const modalWrapper = modal1.querySelector(".modal-wrapper");

    //création du bouton fermer
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-modal", "modal-trigger");
    closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    //création du bouton ajouter photo
    const addPhotoBtn = document.createElement("button");
    addPhotoBtn.classList.add("modal-btn-add-photo");
    addPhotoBtn.textContent = "Ajouter une photo";

    modalWrapper.prepend(closeBtn);
    modalWrapper.appendChild(addPhotoBtn);
}

//Gestion des TRAVAUX dans la modale 1
function displayModal1Works(works) {
    const modalGallery = document.querySelector(".modal-gallery");
    modalGallery.innerHTML = "";

    works.forEach((work) => {
        //création de la figure
        const figure = document.createElement("figure");
        figure.classList.add("gallery-item");
        // stockage de l'id du work dans un attribut data-id
        figure.setAttribute("data-id", work.id);

        //création de l'image
        const img = document.createElement("img");
        img.src = work.imageUrl;
        img.alt = work.title;

        //création du bouton delete
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-icon");
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

        deleteBtn.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("élément à supprimer numéro", work.id); //au clique du bouton, on affiche l'id du work à supprimer
            deleteWork(work.id); //appel de la fonction de suppression
        });

        figure.appendChild(img);
        figure.appendChild(deleteBtn);
        modalGallery.appendChild(figure);
    });
}


//****** MODALE 2 ********// 

function createModal2Elements() {
    const modal2 = document.getElementById("modal-add-photo");
    const modalWrapper = modal2.querySelector(".modal-wrapper");
    const form = modal2.querySelector(".form-add-photo");

    //création des boutons fermer et retour
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-modal", "modal-trigger");
    closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    const backBtn = document.createElement("button");
    backBtn.classList.add("back-modal");
    backBtn.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;

    modalWrapper.prepend(closeBtn);
    modalWrapper.prepend(backBtn);

    setupFormUpload(form);
    setupFormFields(form);
    setupSubmitButton(form);
}

//formulaire form UPLOAD
function setupFormUpload(form) {
    const formUploadDiv = form.querySelector(".form-upload");
    formUploadDiv.innerHTML = "";

    const iconImage = document.createElement("i");
    iconImage.classList.add("fa-regular", "fa-image", "icon-image");

    const labelFile = document.createElement("label");
    labelFile.setAttribute("for", "form-file");
    labelFile.classList.add("form-upload-btn");
    labelFile.textContent = "+ Ajouter photo";

    const inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.id = "form-file";
    inputFile.name = "image";
    inputFile.accept = "image/png, image/jpeg";
    inputFile.style.display = "none";

    const pInfo = document.createElement("p");
    pInfo.classList.add("form-upload-info");
    pInfo.textContent = "jpg, png : 4mo max";

    //intégration du bloc Upload dans le DOM
    formUploadDiv.appendChild(iconImage);
    formUploadDiv.appendChild(labelFile);
    formUploadDiv.appendChild(inputFile);
    formUploadDiv.appendChild(pInfo);
}


//formulaire FORM FIELDS
function setupFormFields(form) {
    const formFieldsDiv = form.querySelector(".form-fields");
    formFieldsDiv.innerHTML = "";

    const labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "form-title");
    labelTitle.textContent = "Titre";

    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.name = "title";
    inputTitle.id = "form-title";
    inputTitle.required = true;

    const labelCategory = document.createElement("label");
    labelCategory.setAttribute("for", "form-category");
    labelCategory.textContent = "Catégorie";

    const selectCategory = document.createElement("select");
    selectCategory.name = "category";
    selectCategory.id = "form-category";
    selectCategory.required = true;

    const optionDefault = document.createElement("option");
    optionDefault.value = "";
    optionDefault.disabled = true;
    optionDefault.selected = true;

    //intégration du bloc Titre et Catégorie dans le DOM 
    selectCategory.appendChild(optionDefault);
    formFieldsDiv.appendChild(labelTitle);
    formFieldsDiv.appendChild(inputTitle);
    formFieldsDiv.appendChild(labelCategory);
    formFieldsDiv.appendChild(selectCategory);
}

//Le bouton Valider
function setupSubmitButton(form) {
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.classList.add("modal-btn-validate");
    submitBtn.disabled = true;
    submitBtn.textContent = "Valider";

    form.appendChild(submitBtn);
}

//**SUPPRESSION PHOTOS **/

async function deleteWork(workId) {
    const token = window.localStorage.getItem("token");

    try {
        const response = await fetch(`http://localhost:5678/api/works/${workId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json"
            }
        });

        if (response.ok) {
            alert("Photo supprimée avec succès");
            // Supprimer l'élément du DOM
            const figureToDelete = document.querySelectorAll(`figure[data-id="${workId}"]`);
            if (figureToDelete) {
                figureToDelete.forEach(figure => figure.remove());
            }
        } else {
            console.error("Erreur lors de la suppression de la photo");
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de la photo:", error);
    }
}