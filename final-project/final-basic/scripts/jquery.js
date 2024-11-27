let shows = [
  {
    name: "Gravity Falls",
    mainCharacter: "Dipper Pines",
    network: "Disney",
    startDate: "June 29, 2012",
  },

  {
    name: "The Walking Dead",
    mainCharacter: "Rick Grimes",
    network: "AMC",
    startDate: "October 31, 2010",
  },

  {
    name: "Young Sheldon",
    mainCharacter: "Sheldon Cooper",
    network: "CBS",
    startDate: "September 25, 2017",
  },

  {
    name: "Regular Show",
    mainCharacter: "Mordecai",
    network: "Cartoon Network",
    startDate: "September 6, 2010",
  },

  {
    name: "The Amazing World of Gumball",
    mainCharacter: "Gumball Waterson",
    network: "Cartoon Network",
    startDate: "May 3, 2011",
  },
];

function populateTable(showsArray) {
  const tableBody = document.getElementById("shows-table-body");

  showsArray.forEach(function (show) {
    // create a new table row
    const row = document.createElement("tr");

    // create and add the Name cell
    const nameCell = document.createElement("td");
    nameCell.textContent = show.name;
    row.appendChild(nameCell);

    // create and add the Main Character cell
    const characterCell = document.createElement("td");
    characterCell.textContent = show.mainCharacter;
    row.appendChild(characterCell);

    // create and add the Network cell
    const networkCell = document.createElement("td");
    networkCell.textContent = show.network;
    row.appendChild(networkCell);

    // create and add the Start Date cell with right alignment
    const dateCell = document.createElement("td");
    dateCell.textContent = show.startDate;
    dateCell.classList.add("text-end");
    row.appendChild(dateCell);

    // add the row to the table body
    tableBody.appendChild(row);
  });
}

populateTable(shows);
