const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "goldenrod", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "orange", moons: 79 },
  { name: "Saturn", color: "khaki", moons: 83 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "royalblue", moons: 14 }
];

const section = documents.querySelector(".listPlanets")
planets.forEach(planet => {
    let Div = documents.createElement("div")
    Div.className = "planet"
    Div.style.backgroundcolor = planet.color;
    Div.textContent = planet.name; 
    section.appendChild(Div);
    for(let i = 0 ; i<planet.moons ; i++){
        let moonDiv = documents.querySelector("div");
        moonDiv.className = "moon"; 
        Div.appendChild(moonDiv);
    }
})

