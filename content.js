// Function to export ascents
function exportAscents() {
    // Check if the table is present
    const table = document.querySelector('table');
    if (!table) {
      console.log('Table not found');
      return;
    }
  
    const rows = table.querySelectorAll('tr');
    if (rows.length === 0) {
      console.log('No rows found in the table');
      return;
    }
  
    const data = Array.from(rows).map(row => {
      return Array.from(row.cells).map(cell => cell.innerText).join('|');
    }).join('\n');
  
    // Create a blob and download it
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ascents.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
  
  // Listen for messages from the popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'exportAscents') {
      exportAscents();
    }
  });
  