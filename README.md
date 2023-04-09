<h1 align="center">Advanced-Bim3d Editor</h1>

<h5 align="center">Maintained by legriamax.</h5>

**Advanced-Bim3d Editor** leverages the popular frontend library React and the superior WebGL library Three.js to create an online, editable CAD analysis editor and free 3D modeling functionality. It has built-in support and cases for smart city, digital twinning, smart home decoration, web games, industrial display, and other related 3D rendering projects.

- [_Three.js_](https://threejs.org) is a cross-browser JavaScript library and Application Programming Interface (API) used to create and display animated 3D computer graphics within a web browser using WebGL.

- [_React_](https://reactjs.org) is a popular free open-source frontend JavaScript library used for swiftly building user interfaces based on UI components.

- [_Material UI_](https://mui.com/material-ui/getting-started/overview/) is a comprehensive component library for constructing Google's system style [Material Design](https://material.io/design/introduction/).

- [_Turf.js_](https://turfjs.org/) is a geospatial analysis library that handles various map algorithms, processing GeoJSON using highly readable JavaScript functions.

Project preview address: https://legriamax.github.io/advanced-bim3d-editor/

## Installation

### Advanced-Bim3d Editor

The Advanced-Bim3dEditor uses WebGL to display one-stop editable 3D projects in a web browser. It currently supports download and editing.

**npm:**

```sh
npm install
npm run dev
```

**yarn:**

```sh
yarn
yarn dev
```

## Getting started with Advanced-Bim3d-Editor

Assuming that you have cloned this repository, you can start with `main.tsx`:

```jsx
import App from '@/views/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import '@/assets/style/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>
)
```

The project is still in the development version. Please star and fork the project for more details. You may also visit the preview address: https://legriamax.github.io/advanced-bim3d-editor/ to view the latest progress.

## Contributing

Go through the [contributing guide](/README.md) to und