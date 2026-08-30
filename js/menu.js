
console.log("MENU.JS CARGADO");


// =====================================================
// MENÚ HAMBURGUESA
// =====================================================

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


// =====================================================
// GALERÍA - IMAGEN AMPLIADA
// =====================================================

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        // Crear fondo oscuro
        const overlay = document.createElement("div");

        overlay.classList.add("image-overlay");


        // Crear imagen ampliada
        const largeImage = document.createElement("img");

        largeImage.src = image.src;
        largeImage.alt = image.alt;


        // Crear botón cerrar
        const closeButton = document.createElement("button");

        closeButton.classList.add("close-image");

        closeButton.innerHTML = "✕";

        closeButton.setAttribute("aria-label", "Cerrar imagen");


        // Agregar imagen y botón al fondo
        overlay.appendChild(largeImage);
        overlay.appendChild(closeButton);


        // Agregar el fondo a la página
        document.body.appendChild(overlay);


        // Evitar que la página se desplace
        document.body.style.overflow = "hidden";


        // =================================================
        // CERRAR CON EL BOTÓN
        // =================================================

        closeButton.addEventListener("click", () => {

            overlay.remove();

            document.body.style.overflow = "";

        });


        // =================================================
        // CERRAR HACIENDO CLICK FUERA DE LA IMAGEN
        // =================================================

        overlay.addEventListener("click", (event) => {

            if (event.target === overlay) {

                overlay.remove();

                document.body.style.overflow = "";

            }

        });


        // =================================================
        // CERRAR CON ESCAPE
        // =================================================

        document.addEventListener("keydown", function closeWithEscape(event) {

            if (event.key === "Escape") {

                overlay.remove();

                document.body.style.overflow = "";

                document.removeEventListener(
                    "keydown",
                    closeWithEscape
                );

            }

        });

    });

});

