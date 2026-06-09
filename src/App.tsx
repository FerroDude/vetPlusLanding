import { Navigate, Route, Routes } from 'react-router-dom'
import { EditPage } from './pages/EditPage'
import { LandingPage } from './pages/LandingPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
