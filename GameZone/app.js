
// INFORMACION DE LOS VIDEOJUEGOS

const games = {

    minecraft: {
        title: "Minecraft",
        description:
            "Minecraft es un videojuego de construcción y supervivencia desarrollado por Mojang. Permite explorar mundos generados por procedimientos, recolectar recursos, construir estructuras y enfrentar criaturas."
    },

    gta: {
        title: "Grand Theft Auto V",
        description:
            "GTA V es un videojuego de mundo abierto desarrollado por Rockstar Games. Su historia sigue a tres protagonistas en la ciudad ficticia de Los Santos, donde pueden explorar y realizar diferentes misiones."
    },

    fortnite: {
        title: "Fortnite",
        description:
            "Fortnite es un videojuego desarrollado por Epic Games. Es conocido por sus batallas multijugador, construcción, eventos especiales y diferentes experiencias de juego."
    },

    freefire: {
        title: "Free Fire",
        description:
            "Free Fire es un videojuego de supervivencia para dispositivos móviles desarrollado por Garena. Los jugadores participan en partidas donde deben sobrevivir y competir contra otros participantes."
    },

    cod: {
        title: "Call of Duty",
        description:
            "Call of Duty es una reconocida franquicia de videojuegos de acción y disparos. Cuenta con diferentes entregas, campañas y modos multijugador."
    },

    godofwar: {
        title: "God of War",
        description:
            "God of War es una saga de acción y aventura protagonizada por Kratos. Sus historias incluyen mitología griega y nórdica, combates y exploración."
    },

    roblox: {
        title: "Roblox",
        description:
            "Roblox es una plataforma de experiencias interactivas donde los usuarios pueden jugar, explorar y crear sus propios mundos."
    },

    legends: {
        title: "Minecraft Legends",
        description:
            "Minecraft Legends es un videojuego de acción y estrategia ambientado en el universo Minecraft. Los jugadores deben liderar aliados y defender su mundo."
    }

};


// ELEMENTOS DEL HTML

const modal = document.getElementById("gameModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const closeModal = document.getElementById("closeModal");

const modalOk = document.getElementById("modalOk");

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


// MOSTRAR INFORMACION DE LOS JUEGOS

document.querySelectorAll(".btn-details").forEach(button => {

    button.addEventListener("click", () => {

        const gameId = button.dataset.game;

        const game = games[gameId];

        if (!game) {
            return;
        }

        modalTitle.textContent = game.title;

        modalDescription.textContent = game.description;

        modal.classList.add("active");

        modal.setAttribute("aria-hidden", "false");

    });

});


// CERRAR VENTANA

function hideModal() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

}

closeModal.addEventListener("click", hideModal);

modalOk.addEventListener("click", hideModal);


// CERRAR AL HACER CLIC FUERA DE LA VENTANA

modal.addEventListener("click", event => {

    if (event.target === modal) {
        hideModal();
    }

});


// CERRAR CON LA TECLA ESCAPE

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        hideModal();
    }

});


// MENU PARA CELULARES

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

});


// CERRAR MENU AL SELECCIONAR UNA OPCION

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// MENSAJE DE INICIO

console.log("GameZone se ha cargado correctamente.");

console.log("Videojuegos disponibles:", Object.keys(games).length);
