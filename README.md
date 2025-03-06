<<<<<<< HEAD
# Fleetstr Cost Comparison

## Overview
This project is an interactive cost comparison chart developed for Fleetstr's vehicle cost analysis. It enables users to compare vehicle costs against fleet averages, apply filters based on location and time range, and dynamically visualize cost categories for better decision-making.

## Features
- **Interactive Chart** – Provides a clear visual representation of cost comparisons.
- **Filtering Options** – Allows users to refine data based on location and time range.
- **Responsive Design** – Ensures seamless compatibility across various devices and screen sizes.
- **Dynamic Data Updates** – Reflects real-time changes when filters are adjusted.

## Technology Stack
- **Frontend:** React.js, Tailwind CSS
- **Data Visualization:** Recharts
- **State Management:** React Context API

## Installation and Setup
### Prerequisites
Ensure that **Node.js** and **npm** are installed on your machine before proceeding.

### Steps to Set Up Locally
1. **Clone the repository:**
   ```sh
   git clone https://github.com/nourelhouda94/fleetstr-challenge.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd fleetstr-challenge
   ```
3. **Install the required dependencies:**
   ```sh
   npm install
   ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```
5. Open `http://localhost:5173/` in your browser to access the application.

## Usage
- Select a **location** and **time range** from the filtering options.
- Hover over the bars to view detailed cost breakdowns.
- Compare the costs of individual vehicles against fleet averages for better insights.

## Deployment
To generate a production build of the project, run:
```sh
npm run build
```
The optimized build files can be deployed using hosting services such as **Vercel, Netlify, or GitHub Pages**.

## Contribution Guidelines
Contributions are encouraged and welcome. Follow these steps to contribute:
1. **Fork the repository.**
2. **Create a new branch** for your feature or bug fix.
3. **Make the necessary modifications** and commit the changes.
4. **Push the branch** to your forked repository.
5. **Submit a pull request** to the main repository.

## Contact
For inquiries, feedback, or further information, feel free to reach out:
- **Email:** nourelhouda.el@gmail.com
- **GitHub:** [nourelhouda94](https://github.com/nourelhouda94)
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> 2a830c9 (Initial commit - Fleetstr Challenge)
