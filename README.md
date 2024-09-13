# Chrome Extension for Exporting 8a.nu Climbing Ascents

This Chrome extension helps you export your climbing ascents from 8a.nu website to a CSV file. The extension allows you to collect ascent data from a table on a webpage and download it in a CSV format with `|` as the delimiter.

## Features

- Extracts climbing ascents data from a table on the current webpage.
- Exports the data to a CSV file with `|` as the delimiter.
- Provides a button in the popup to trigger the export process (to workaround the ascents loading scroll delay).

## Installation

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle switch.
4. Click "Load unpacked" and select the directory where the extension files are located.

## Usage

1. Navigate to the webpage containing the table of climbing ascents (https://www.8a.nu/user/<your_username>/bouldering).
2. Scroll down to ensure the table is fully loaded.
3. Click on the extension icon in the Chrome toolbar.
4. Click the "Export Ascents" button in the popup.
5. A CSV file named `ascents.csv` will be downloaded to your default downloads folder.

## Code Overview

- **`manifest.json`**: Contains metadata about the extension, including permissions and scripts.
- **`content.js`**: Handles the extraction of table data and creation of the CSV file.
- **`popup.js`**: Manages the popup UI and sends a message to the content script to trigger the export.
- **`popup.html`**: The HTML for the extension popup.

## Troubleshooting

- `Table not found`: Ensure the table is fully loaded by scrolling down the page before clicking the export button.
- `No rows found`: Verify that the table contains data and is correctly formatted.


# Acknowledgments

This extension was developed, with ChatGPT's help, to facilitate the extraction and export of personal climbing ascent data from the 8a.nu website.
Feel free to adjust any details according to your preferences or the specific structure of your extension.
