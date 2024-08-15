# Airtable Tasks Alfred Workflow

This Alfred workflow enables quick interaction with Airtable, allowing you to manage bases, sync tables, and perform various other tasks directly from Alfred. It automates routine Airtable actions such as setting up the API key, syncing tables, listing bases, and navigating to specific tables.

## Features

- **Set Up Airtable API Key**: Quickly configure your Airtable API key using the `tablesetup` command.
- **List Bases**: Retrieve and display a list of all your Airtable bases using the `base` command.
- **Open Table**: Search for and open a specific table within a base using the `_table` command.
- **Go to Airtable Table**: Directly navigate to a specific Airtable table in your browser using the `table` command.
- **Reset cache**: Empty cache of local bases and tables via `tablereset` command (useful after adding a new base).

## Installation

1. Clone or download the workflow files.
2. Import the workflow into Alfred.
3. Ensure you have Node.js and the necessary dependencies installed (e.g., via `npm install`).
4. Set up your Airtable API key using the `tablesetup` command.

## Workflow Structure

### Script Filters

- **Set up Airtable API Key**
  - **Keyword**: `tablesetup`
  - **Script**: Runs `tablesetup.js` to configure your API key.

- **Sync Tables**
  - **Keyword**: `tablesync`
  - **Script**: Runs `tablesync.js` to sync tables.

- **List Bases**
  - **Keyword**: `base`
  - **Script**: Runs `list-bases.js` to list all your Airtable bases.

- **Go to Airtable Table**
  - **Keyword**: `table`
  - **Script**: Runs `list-tables.js` to navigate quickly to a specific table. This shows only tables available in cache. So you might need to load these first via selecting a `base`.


## Usage

1. **Set Up API Key**: Type `tablesetup` in Alfred and follow the prompts to enter your Airtable API key.
2. **Sync Tables**: Type `tablesync` to synchronize your tables.
3. **List Bases**: Type `base` to see a list of your bases.
4. **Open a Table**: Use `_table` to search and open a table.
5. **Go to Table**: Type `table` followed by the table name to open it directly in Airtable.

## Requirements

- Alfred 4+
- Node.js installed on your system
- Airtable account and API key

## Credits

Created by [Martin Malinda](https://martinmalinda.cz). If you want to quickly add records right from the browser, you can check out my chrome extension [Powersave](https://powersave.pro).
