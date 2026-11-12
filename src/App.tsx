import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ProjectDetails from './pages/ProjectDetails'

// Scrolls to the #hash section if present, otherwise to the top on every route change
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section has rendered
      const timeout = setTimeout(() => {
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
      return () => clearTimeout(timeout)
    }

    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}

function Home() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-[#101114]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App