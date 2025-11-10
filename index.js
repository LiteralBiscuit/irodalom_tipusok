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
 * @type {{ szerzo?: string, mu: string, mufaj: string, rowspan: number}[]} // táblázat törzs array
 */
const tableBodyArray = [ // táblázat törzs array létrehozása
    { // 1. sor objektum létrehozása
    szerzo: 'Petőfi Sándor', // szerző megadása
    mu: 'A helység kalapácsa', // mű megadása
    mufaj: 'Elbeszélő költemény', // műfaj megadása
    rowspan: 2 // rowspan megadása
    },
    { // 2. sor objektum létrehozása
    mu: 'Az apostol', // mű megadása
    mufaj: 'Elbeszélő költemény', // műfaj megadása
    rowspan: 1 // rowspan megadása
    },
    { // 3. sor objektum létrehozása
    szerzo: 'Janus Pannonius', // szerző megadása
    mu: 'Pannónia dícsérete', // mű megadása
    mufaj: 'Epigramma', // műfaj megadása
    rowspan: 1   // rowspan megadása
    },
    { // 4. sor objektum létrehozása
    szerzo: 'Vörösmarty Mihály', // szerző megadása
    mu: 'A vén cigány', // mű megadása
    mufaj: 'Rapszódia', // műfaj megadása
    rowspan: 2 // rowspan megadása
    },
    { // 5. sor objektum array létrehozása
    mu: 'Szózat', // mű megadása
    mufaj: 'Szózat', // műfaj megadása
    rowspan: 1 // rowspan megadása
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
    /**
     * @type {HTMLTableCellElement} th
     */
    const tableHeaderCell = document.createElement("th"); // adott th létrehozása
    tableHeaderCell.innerText = header.title; // adott th szövegének megadása
    tableHeaderRow.appendChild(tableHeaderCell); // th hozzáfűzése a fej sorhoz
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
        /**
         * @type {HTMLTableCellElement} 1. cella
         */
        const elsoTbodyCell = document.createElement("td"); // 1. cella létrehozása
        tbodyRow.appendChild(elsoTbodyCell); // 1. clella hozzáfűzése az adott sorhoz
        elsoTbodyCell.innerText = sor.szerzo; // 1. cella szövegének megadása
        elsoTbodyCell.rowSpan = sor.rowspan; // rowspan megadása
    }
    /**
     * @type {HTMLTableCellElement} 2. cella
     */
    const masodikTbodyCell = document.createElement("td"); // 2. cella létrehozása
    tbodyRow.appendChild(masodikTbodyCell); // 2. clella hozzáfűzése az adott sorhoz
    masodikTbodyCell.innerText = sor.mu; // 2. cella szövegének megadása
    /**
     * @type {HTMLTableCellElement} 3. cella
     */
    const harmadikTbodyCell = document.createElement("td"); // 3. cella létrehozása
    tbodyRow.appendChild(harmadikTbodyCell); // 3. clella hozzáfűzése az adott sorhoz
    harmadikTbodyCell.innerText = sor.mufaj; // 3. cella szövegének megadása
}