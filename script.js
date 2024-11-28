class AnimalTable {
    constructor(tableId, jsonFile, tableName, nameStyles = {}, sortableFields = [], defaultImage = '') {
        this.tableId = tableId; // Unique identifier for each table
        this.jsonFile = jsonFile; // JSON file containing the table data
        this.tableName = tableName; // The name of the table (e.g., "Big Cats")
        this.nameStyles = nameStyles; // Styling for animal names (bold, italic, color)
        this.sortableFields = sortableFields; // Fields that can be sorted (e.g., 'name', 'size')
        this.data = []; // Data to be displayed in the table
        this.sortDirections = {}; // Stores the current sort direction for each sortable field
        this.defaultImage = defaultImage; // Default image URL for this table
        this.loadData(); // Load data when the table is created
    }

    // Load data from the JSON file
    async loadData() {
        try {
            const response = await fetch(`animals/${this.jsonFile}`);
            this.data = await response.json();
            this.renderTable();
        } catch (error) {
            console.error("Error loading data");
        }
    }

    // Render the table with current data
    renderTable() {
        const tableContainer = document.getElementById(this.tableId);
        tableContainer.innerHTML = ''; // Clear any existing content

        let tableHTML = `<h2>${this.tableName}</h2><table class="animal-table">
                         <thead><tr>`;

        // Create the table headers dynamically based on sortable fields
        const headers = ['Name', 'Size', 'Location', 'Image', 'Actions'];
        headers.forEach(header => {
            const field = header.toLowerCase(); // Match the field name with the data keys
            if (this.sortableFields.includes(field)) {
                const direction = this.sortDirections[field] || 'asc'; // Default direction is ascending
                const arrow = direction === 'asc' ? '↑' : '↓'; // Arrow indicator
                tableHTML += `<th onclick="tableInstances['${this.tableId}'].sortData('${field}')">${header} ${arrow}</th>`;
            } else {
                tableHTML += `<th>${header}</th>`;
            }
        });

        tableHTML += `</tr></thead><tbody>`;

        // Create rows based on the data
        this.data.forEach((animal, index) => {
            tableHTML += `<tr>
                <td class="name">${this.formatName(animal.name)}</td>
                <td>${animal.size}</td>
                <td>${animal.location}</td>
                <td><img src="${animal.image}" alt="${animal.name}" /></td>
                <td>
                    <button onclick="tableInstances['${this.tableId}'].editAnimal(${index})">Edit</button>
                    <button onclick="tableInstances['${this.tableId}'].deleteAnimal(${index})">Delete</button>
                </td>
            </tr>`;
        });

        tableHTML += `</tbody></table>`;

        // Add Sort and Add Animal buttons below the table
        tableHTML += `
            <button onclick="tableInstances['${this.tableId}'].showAddAnimalPrompt()">Add Animal</button>
        `;

        // Add the HTML content to the table container
        tableContainer.innerHTML = tableHTML;
    }

    // Format animal names based on the defined styles
    formatName(name) {
        let nameStyle = '';
        if (this.nameStyles.bold) {
            nameStyle += 'font-weight:bold;';
        }
        if (this.nameStyles.italic) {
            nameStyle += 'font-style:italic;';
        }
        if (this.nameStyles.blue) {
            nameStyle += 'color:blue;';
        }
        return `<span style="${nameStyle}">${name}</span>`;
    }

    // Sort data based on the selected field
    sortData(field) {
        this.sortDirections[field] = this.sortDirections[field] === 'asc' ? 'desc' : 'asc';
        const direction = this.sortDirections[field];

        this.data.sort((a, b) => {
            // Special handling for numeric fields (like 'size')
            if (field === 'size') {
                const sizeA = parseFloat(a[field]) || 0; // Convert to number, default to 0 if invalid
                const sizeB = parseFloat(b[field]) || 0;
                return direction === 'asc' ? sizeA - sizeB : sizeB - sizeA;
            }
            // String comparison for other fields
            if (a[field].toLowerCase() < b[field].toLowerCase()) return direction === 'asc' ? -1 : 1;
            if (a[field].toLowerCase() > b[field].toLowerCase()) return direction === 'asc' ? 1 : -1;
            return 0; // Equal
        });

        this.renderTable(); // Re-render the table after sorting
    }

    // Show the add animal prompt
    showAddAnimalPrompt() {
        const name = prompt("Enter the animal name:");
        const size = prompt("Enter the animal size in ft:");
        const location = prompt("Enter the animal location:");
        let image = prompt("Enter the animal image URL (leave blank to use default):");

        if (!name || !size || !location) {
            alert("All fields except image URL are required.");
            return;
        }

        if (!image) {
            image = this.defaultImage;
        }

        this.data.push({ name, size, location, image });
        this.renderTable();
    }
    editAnimal(index) {
        const animal = this.data[index];

    // Ask the user which field they want to edit (make input case insensitive)
    const fieldToEdit = prompt("What would you like to edit? Choose: 'name', 'size', 'location', or 'image'").toLowerCase();

    // Based on the user's choice, prompt for the new value
    if (fieldToEdit === 'name') {
        const newName = prompt("Enter the new name for: " + animal.name, animal.name);
        if (newName) {
            this.data[index].name = newName; // Update name
        }
    } else if (fieldToEdit === 'size') {
        const newSize = prompt("Enter the new size for: " + animal.name, animal.size);
        if (newSize) {
            this.data[index].size = newSize; // Update size
        }
    } else if (fieldToEdit === 'location') {
        const newLocation = prompt("Enter the new location for " + animal.name, animal.location);
        if (newLocation) {
            this.data[index].location = newLocation; // Update location
        }
    } else if (fieldToEdit === 'image') {
        const newImage = prompt("Enter the new image URL for " + animal.name, animal.image);
        if (newImage) {
            this.data[index].image = newImage; // Update image
        }
    } else {
        alert("Invalid choice. Please choose one of the following: 'name', 'size', 'location', or 'image'.");
        return; // Exit if the user doesn't choose a valid option
    }

    // After the edit, re-render the table
    this.renderTable();
    }

    deleteAnimal(index) {
        this.data.splice(index, 1);
        this.renderTable();
    }
}

// Create instances of tables with default images
const tableInstances = {};

// Big Cats Table allows sorting by all fields except images
tableInstances['table1'] = new AnimalTable('table1', 'BigCats.json', 'Big Cats', { bold: true }, ['name', 'size', 'location'], 'assets/images/default_bigcat.jpg');

// Dogs Table allows sorting by 'name' and 'location'
tableInstances['table2'] = new AnimalTable('table2', 'Dogs.json', 'Dogs', { bold: true }, ['name', 'location'], 'assets/images/default_dog.jpg');

// Big Fish Table allows sorting by 'size' only
tableInstances['table3'] = new AnimalTable('table3', 'BigFish.json', 'Big Fish', { bold: true }, ['size'], 'assets/images/default_fish.jpg');
