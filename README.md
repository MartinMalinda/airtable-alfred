# Airtable Tasks Alfred Workflow

This Alfred workflow enables quick interaction with Airtable, allowing you to manage bases, sync tables, and perform various other tasks directly from Alfred. It automates routine Airtable actions such as setting up the API key, syncing tables, listing bases, and navigating to specific tables.

## Watch the Demo

[![Watch the video](https://img.youtube.com/vi/RThK2EgLz2Y/maxresdefault.jpg)](https://youtu.be/RThK2EgLz2Y)

## Installation via Alfred file

1. Get [alfred workflow file](https://github.com/MartinMalinda/airtable-alfred/releases/download/v1.0.0/alfred-airtable.alfredworkflow)
2. Make sure you have [node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) installed on your system
3. Open the file and add the workflow

## Workflow

## Usage

1. **Set Up API Key**: Type `tablesetup <key>` in Alfred and follow the prompts to enter your Airtable API key.
2. **List Bases**: Type `base` to get a list of your bases. Selecting base then loads its tables.
4. **Go to Table**: Type `table` followed by the table name to open it directly in Airtable. This command shows only tables available in the cache. If the table does not show up in the list, run `base` to load the base first.

## Requirements

- Alfred 4+
- Node.js installed on your system
- Airtable account and API key

## Credits

Created by [Martin Malinda](https://martinmalinda.cz). If you want to quickly add records right from the browser, you can check out my chrome extension [Powersave](https://powersave.pro).

## Dev

## Installation via clone

1. Clone the repo.
2. Ensure you have Node.js and the necessary dependencies installed (e.g., via `npm install`). (But if you downloaded the whole release there's no need to npm install)
3. **Place the Workflow Folder in the Correct Location:**
   - After extracting the downloaded zip file, you'll find a folder named `airtable-tasks-workflow`.
   - To make this workflow accessible to Alfred, you need to place the extracted folder in Alfred's workflow directory. This is typically located at:
     - **macOS**: `~/Library/Application Support/Alfred/Alfred.alfredpreferences/workflows/`
   - You can navigate to this directory using the Finder:
     - Press `Cmd + Shift + G` in Finder.
     - Paste `~/Library/Application Support/Alfred/Alfred.alfredpreferences/workflows/` into the dialog and press Enter.
     - Move the `airtable-tasks-workflow` folder into this directory.
4. Set up your Airtable API key using the `tablesetup` command.
