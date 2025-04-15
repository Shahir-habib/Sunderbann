const fs = require('fs');
const path = require('path');

// Read the CSV file
const filePath = path.join('D:/Projects/Web_dev_Projects/E-CommerceWebsite/Data', 'bookdata.csv');
const csvData = fs.readFileSync(filePath, 'utf-8');

// Split the data into rows
const rows = csvData.split('\n');

// Extract the header and data rows
const header = rows[0].split(',');
const dataRows = rows.slice(1);

// Find the index of the 'category' column
const categoryIndex = header.indexOf('category');

// Extract all categories
const categories = dataRows
    .map(row => {
        const columns = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g); // Split CSV row considering quotes
        return columns ? columns[categoryIndex] : null;
    })
    .filter(category => category && category!="Default"); // Remove empty categories

// Get distinct categories
const distinctCategories = [...new Set(categories)];

// Create an array of objects for distinct categories
const ct = {};
distinctCategories.forEach((category) => {
  ct[category.toLowerCase()] = category;
});

console.log(ct);
