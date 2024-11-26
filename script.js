const gamesData = {
    ps1: ["Final Fantasy VII", "Metal Gear Solid", "Crash Bandicoot"],
    ps2: ["God of War", "Shadow of the Colossus", "GTA: San Andreas"],
    ps3: ["The Last of Us", "Uncharted 2", "Red Dead Redemption"],
    ps4: ["God of War (2018)", "Spider-Man", "Horizon Zero Dawn"],
    ps5: ["Demon's Souls", "Ratchet & Clank: Rift Apart", "Returnal"],
};

const gamesContainer = document.getElementById("games-container");

document.querySelectorAll(".console").forEach((console) => {
    console.addEventListener("click", () => {
        const consoleKey = console.getAttribute("data-console");
        const games = gamesData[consoleKey];

        gamesContainer.innerHTML = `
            <h3>Games for ${console.querySelector("h3").innerText}</h3>
            <ul>${games.map(game => `<li>${game}</li>`).join("")}</ul>
        `;
    });
});
