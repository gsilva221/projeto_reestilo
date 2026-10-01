import { Route, Routes } from 'react-router-dom'
import { CatalogoPage } from './pages/CatalogoPage'
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalogo" element={<CatalogoPage />} />
      {/* Future product detail route: /produto/:id */}
    </Routes>
  )
}

export default App
