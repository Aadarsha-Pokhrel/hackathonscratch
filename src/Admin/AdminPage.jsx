import { Link, Outlet } from 'react-router'
import './AdminPage.css'

export function AdminPage() {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2>Admin</h2>

        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/notice">Notice</Link>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}
