import { Link, Outlet } from 'react-router';
import './AdminPage.css';

export function AdminPage() {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2>Aama Samuha</h2>

        <Link to="">Dashboard</Link>
        <Link to="notice">Notice</Link>
        <Link to="budget">Budget</Link>
        <Link to="loanRequest">Loan Request</Link>
        <Link to="membersdetails">Members Details</Link>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
