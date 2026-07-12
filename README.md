# Cypress Automation Project for Telnyx website

![Cypress](https://img.shields.io/badge/Cypress-v15-69D3A7?logo=cypress&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI-2088FF?logo=github-actions&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)

## About

This repository contains an automated end-to-end UI testing project for the **Telnyx** website using **Cypress**. The project follows Cypress best practices by organizing tests into reusable page objects and using fixtures to improve maintainability and readability.

The automated tests verify key user journeys, including navigation, page content, calls-to-action, and other core website functionality.

---

## Tech Stack

- Cypress
- JavaScript
- GitHub Actions
- Cypress Cloud

---

## Prerequisites

Before running the project, make sure you have installed:

- Node.js 18 or newer
- npm
- Git

You can verify the installation by running:

```bash
node -v
npm -v
git --version
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com//AnnMyroshnichenko/Telnyx_Cypress.git
```

### 2. Navigate to the project

```bash
cd <repository>
```

### 3. Install dependencies

```bash
npm install
```

---

## Running Tests

### Open Cypress Test Runner

```bash
npx cypress open
```

---

### Run all tests in headless mode

```bash
npx cypress run
```

---

### Run tests in Chrome

```bash
npx cypress run --browser chrome
```

---

### Run a specific spec

```bash
npx cypress run --spec "cypress/e2e/navigation.cy.js"
```

---

## Recording Tests in Cypress Cloud

### Prerequisites

1. Create a Cypress Cloud project.
2. Copy the **Project ID** into `cypress.config.js`.
3. Create a `.env` file in the project root.

Example:

```text
CYPRESS_RECORD_KEY=your_record_key
```

### Record a test run

```bash
npx dotenv -e .env -- cypress run --record --browser chrome
```

---

## Continuous Integration

This project includes a GitHub Actions workflow that automatically executes Cypress tests on:

- Push to the `main` branch
- Pull requests
- Manual workflow execution

The workflow:

- Installs dependencies
- Runs Cypress tests in Chrome
- Records the execution in Cypress Cloud

---

## GitHub Secrets

The following repository secret is required:

| Secret | Description |
|---------|-------------|
| `CYPRESS_RECORD_KEY` | Cypress Cloud Record Key |

Repository Settings → Secrets and variables → Actions

---

## Test Reports

Test execution results are available in **Cypress Cloud**.

**Latest Test Report**

```
https://cloud.cypress.io/projects/afzvme/runs
```

---

## Test Documentation

The manual test documentation for this project is available on Google Drive.

**Test Cases**

```
https://docs.google.com/spreadsheets/d/1rjPr0ZuAxdnhFZog2xRgmkNIq1JFd4_cgkwTNIbZFkM/edit?usp=sharing
```
