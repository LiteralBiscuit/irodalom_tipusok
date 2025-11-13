/**
 * @type {string} valtozo ami tartalmazza a weblap címét
 */
const title = 'irodalom szereplok'; // cím tárolása egy vátozóban
/**
 * @type {{title: string}[]} fej sor objektum array
 */
const tableheaderArray = [ // fej sor objektum array létrehozása
    { title: 'Szerző'}, // fej sor 1. elemének tárolása egy objektumban
    { title: 'Mű' }, // fej sor 2. elemének tárolása egy objektumban
    { title: 'Műfaj' } // fej sor 3. elemének tárolása egy objektumban
]
/**
 * @type {{ szerzo?: string, mu: string, mufaj: string}[]} // táblázat törzs array
 */
const tableBodyArray = [ // táblázat törzs array létrehozása
    { // 1. sor objektum létrehozása
    szerzo: 'Petőfi Sándor', // szerző megadása
    mu: 'A helység kalapácsa', // mű megadása
    mufaj: 'Elbeszélő költemény', // műfaj megadása
    },
    { // 2. sor objektum létrehozása
    mu: 'Az apostol', // mű megadása
    mufaj: 'Elbeszélő költemény', // műfaj megadása
    },
    { // 3. sor objektum létrehozása
    szerzo: 'Janus Pannonius', // szerző megadása
    mu: 'Pannónia dícsérete', // mű megadása
    mufaj: 'Epigramma', // műfaj megadása
    },
    { // 4. sor objektum létrehozása
    szerzo: 'Vörösmarty Mihály', // szerző megadása
    mu: 'A vén cigány', // mű megadása
    mufaj: 'Rapszódia', // műfaj megadása
    },
    { // 5. sor objektum array létrehozása
    mu: 'Szózat', // mű megadása
    mufaj: 'Szózat', // műfaj megadása
    }
]


//táblázat
//táblázatelemek létrehozása
/**
 * @type {HTMLTableElement} a táblázat
 */
const table = document.createElement("table"); // a táblázat létrehozása és tárolása egy vátozóban
document.body.appendChild(table); // táblázat hozzáfűzése a body-hoz
/**
 * @type {HTMLTableSectionElement} a fej
 */
const thead = document.createElement("thead"); // a fej létrehozása és tárolása egy vátozóban
table.append(thead); // fej hozzáfűzése a táblázathoz
/**
 * @type {HTMLTableSectionElement} a táblázat törzse
 */
const tbody = document.createElement("tbody"); // a táblázat törzsének létrehozása és tárolása egy vátozóban
table.appendChild(tbody); // törzs hozzáfűzése a táblázathoz

// fej sor létrehozása
/**
 * @type {HTMLTableRowElement} a fej sor
 */
const tableHeaderRow = document.createElement("tr"); // fej sor létrehozása

for (const header of tableheaderArray) { // for loop fej sor tartalmának a létrehozásához
    createCell("th", header.title, tableHeaderRow); // adott header cella létrehozása
}

thead.appendChild(tableHeaderRow); // fej sor hozzáfűzése a fejhez

// törzs tartalom
for (const sor of tableBodyArray) { // for loop a tartalom léterehozásához
    /**
     * @type {HTMLTableRowElement} sor
     */
    const tbodyRow = document.createElement("tr"); // adott sor létrehozása
    tbody.appendChild(tbodyRow); // adott sor hozzáfűzése a tbody-hoz
    if(sor.szerzo){ // ha van szerző
        if (sor.szerzo == "Janus Pannonius"){ // ha a szerző Janus Pannonius akkor rowSpan = 1
            createCell("td", sor.szerzo, tbodyRow); // cella létrehozás
        }
        else{ // ha nem akkor rowSpan = 2
            createCell("td", sor.szerzo, tbodyRow, 2); // cella létrehozás
        }
    }
    createCell("td", sor.mu, tbodyRow); // cella létrehozás
    createCell("td", sor.mufaj, tbodyRow); // cella létrehozás
}
/**
 * cellat létrehozó függvény
 * @param {string} cellType th vagy td 
 * @param {string} cellContent a cella tartalma
 * @param {HTMLTableRowElement} parentRow a sor ahova bemegy a csinált cella 
 * @param {number} rowspan a cella rowspanja alapesetben 1
 * @returns {void} nem tér vissza a megcsinált cellával
 */
function createCell (cellType, cellContent, parentRow, rowspan = 1){ // cellát létrehozó függvény
    /**
     * @type {HTMLTableCellElement} a létrehozandó cella
     */
    const cell = document.createElement(cellType); // cella létrehozása
    cell.innerText = cellContent; // cella tartalmának beállítása
    cell.rowSpan = rowspan; // rowspan beállítása
    parentRow.appendChild(cell); // cella hozzáadása a szülősorhoz
}