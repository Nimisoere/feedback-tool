This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Context

This repo contains an application used to collect and display feeback along with data visualisation of feedback distribution.

## Getting Started

### Installing Dependencies
To install all dependencies, run `npm instal`:

Recommended node version: >= 18

```bash
npm install
```

View the [core dependencies section](#core-dependencies) for more details on dependencies

### Starting the client

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Starting the server

Feedback is served using a static JSON server. The server reads and write from a JSON file. To start up the server. Run the command below

```bash
npm run start:server
```
## Features and Functionality

- Users are able to enter feedback from the home page
- Users are able to view a bbar char showing distribution of feedback
- Users are able to view a list of feedback

## Core Dependencies

The following packages are core this repos functionality:
### Form library
 **react-hook-form (>= v7)**: Reduces the amount of code you need to write while removing unnecessary re-renders

### Data validation
 **yup (>= v0.32)**: Yup is a schema builder for runtime value parsing and validation

### Chart library
**chart.js (>= v4.1)**: Popular open source JS charting library
**react-chartjs-2 (>= v5.1)**: React components for chart.js


### Data Fetching
**swr (>= v2)**: Lightweight data fetching library, built by the next JS team. Handles request caching and data revalidation 

### Styling
**tailwindcss (>= v3.2)**: Enable a utility first approach to styling and provides pseudo and directive classes out of the box. Also enables abstracting of re-useable styles into components

## Project Structure

### Pages

The pages directory contains pages views. A page is composed of HTML markup and re-useable components

### Styles

The style folder contains our global styles, along side global component styles (e.g. btn-primary)

### Components

Components are re-useable pieces of UI, that can be used within other components or in a page. (e.g. Layouts, Forms, Buttons)


### hooks

Hooks contains re-useable logic of a component that can be used in components (e.g. data fetching logic)

### Utils

Utils contains re-useable pure functions and objects

## Linting

The repo uses default lint provided with `create-next-app` in addition to basic prettier linting. 

Future direction, would include implementing more details linting. e.g. adding prettier rules, adopting `air-bnb` lint rules.

## Testing

This repo uses jest for test. Test are placed alongside their related components for better discoverability. 

Snapshot test exists for components to improve regression and ensure that components are always the same given the same props.

Future direction would include improving tests written in the project.

## Technical Debt

The following areas of improvements have been indentified:
- Paginate feedback results
- Add restrictions to number of feedback provided per user
- Improve star rating component
- Increase test coverage