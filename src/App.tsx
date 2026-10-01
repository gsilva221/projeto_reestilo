import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CatalogoPage } from './pages/CatalogoPage'
import { HomePage } from './pages/HomePage'
import './App.css'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (!hash) {
      const root = document.documentElement
      const previousScrollBehavior = root.style.scrollBehavior
      root.style.scrollBehavior = 'auto'
      window.scrollTo(0, 0)
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [hash, pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        {/* Future product detail route: /produto/:id */}
      </Routes>
    </>
  )
}

export default App
