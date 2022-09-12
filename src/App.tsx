import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import MainPage from './pages/MainPage'

import './App.scss'

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="*"
          element={<div>Error</div>}
        />
      </Routes>
  );
}

export default App;