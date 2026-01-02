import { useState } from "react";
import { Link, Outlet } from "react-router";
import "./AdminPage.css";

export function AdminPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="admin-layout">
      {/* Topbar for mobile */}
      <div className="topbar">
        <h2 className="topbar-title">Admin</h2>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Sidebar for desktop or mobile full menu */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">Admin</h2>
        <Link to="/admin" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        <Link to="/admin/notice" onClick={() => setMenuOpen(false)}>Notice</Link>
        <Link to="/admin/budget" onClick={() => setMenuOpen(false)}>Budget</Link>
        <Link to="/admin/loanRequest" onClick={() => setMenuOpen(false)}>Loan Requests</Link>
        <Link to="/admin/membersdetails" onClick={() => setMenuOpen(false)}>Members</Link>
      </aside>

      {/* Main Content */}
      <main className="content" onClick={() => menuOpen && setMenuOpen(false)}>
        <Outlet />
      </main>
    </div>
  );
}
