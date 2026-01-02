import { Routes, Route } from 'react-router'
import { AdminPage } from './Admin/AdminPage'
import { AdminDashboard } from './Admin/AdminDashBoard'
import { NoticePage } from './Admin/AdminNotice/NoticePage'
import { BudgetPage } from './Admin/BudgetPage/BudgetPage'
import { LoanRequestPage } from './Admin/LoanRequest/LoanRequestPage'
import { MembersPage } from './Admin/Members/MembersPage'

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />}>
        <Route index element={<AdminDashboard />} />
        <Route path="notice" element={<NoticePage />} />
        <Route path="budget" element={<BudgetPage />} />
        <Route path="loanRequest" element={<LoanRequestPage />} />
        <Route path="membersdetails" element={<MembersPage />} />

      </Route>
    </Routes>
  )
}

export default App
