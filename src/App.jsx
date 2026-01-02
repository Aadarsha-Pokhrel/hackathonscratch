import { Routes, Route } from 'react-router'
import { AdminPage } from './Admin/AdminPage'
import { AdminDashboard } from './Admin/AdminDashBoard'
import { NoticePage } from './Admin/AdminNotice/NoticePage'

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />}>
        <Route index element={<AdminDashboard />} />
        <Route path="notice" element={<NoticePage />} />
      </Route>
    </Routes>
  )
}

export default App
