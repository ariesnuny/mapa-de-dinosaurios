// Datos de dinosaurios en Argentina (puedes agregar más)
const dinosaursInArgentina = [
    { name: "Argentinosaurus", location: "Patagonia", description: "Uno de los dinosaurios más grandes que existieron." },
    { name: "Giganotosaurus", location: "Patagonia", description: "Uno de los carnívoros más grandes del mundo." },
    { name: "Carnotaurus", location: "Patagonia", description: "Un depredador con cuernos en la cabeza." },
    // Agregar más dinosaurios
];

const dinosaurList = document.getElementById("dinosaur-list");

// Función para mostrar los dinosaurios en la lista
function showDinosaurs() {
    dinosaurList.innerHTML = "";
    dinosaursInArgentina.forEach(dinosaur => {
        const listItem = document.createElement("li");
        listItem.textContent = `${dinosaur.name} - En: ${dinosaur.location}`;
        listItem.addEventListener("click", () => showDinosaurInfo(dinosaur));
        dinosaurList.appendChild(listItem);
    });
}

showDinosaurs();

// Función para mostrar información detallada de un dinosaurio
function showDinosaurInfo(dinosaur) {
    const dinosaurInfo = document.getElementById("dinosaur-info");
    dinosaurInfo.innerHTML = `<h2>${dinosaur.name}</h2>
                              <p>Ubicación: ${dinosaur.location}</p>
                              <p>${dinosaur.description}</p>`;
}

// Agregar interacción al mapa
const argentinaMap = document.getElementById("argentina-map");

argentinaMap.addEventListener("click", function (event) {
    // Obtener la posición del clic
    const x = event.offsetX;
    const y = event.offsetY;

    // Puedes agregar lógica para determinar qué dinosaurio está en esa ubicación en el mapa
    // y mostrar información sobre ese dinosaurio.
    // Por ahora, mostraremos un mensaje de ejemplo.
    showDinosaurInfo({ name: "Ejemplo Dinosaurio", location: "Ubicación de ejemplo", description: "Descripción de ejemplo" });
});