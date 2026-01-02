import { loans as initialLoans } from './loans.js';
import { useState } from 'react';
import './BudgetPage.css';

export function BudgetPage() {
  const [loans] = useState(initialLoans);

  const totalBudget = 50000; // Example total budget
  const totalLoaned = loans.reduce((acc, loan) => acc + loan.amount, 0);
  const currentMoney = totalBudget - totalLoaned;

  function timeAgo(date) {
    const diff = (new Date() - new Date(date)) / 1000;
    if (diff < 60) return `${Math.floor(diff)}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  }

  return (
    <div className="budget-page">
      <h1 className="page-title">💰 Budget Overview</h1>

      <div className="budget-summary">
        <div className="budget-card">
          <p>Total Budget</p>
          <h2>₹ {totalBudget}</h2>
        </div>
        <div className="budget-card">
          <p>Current Money</p>
          <h2>₹ {currentMoney}</h2>
        </div>
      </div>

      <h2 className="section-title">Loans Taken</h2>
      <div className="loan-list">
        {loans.map((loan) => (
          <div key={loan.id} className="loan-card">
            <p className="loan-name">{loan.name}</p>
            <p className="loan-amount">₹ {loan.amount}</p>
            <p className="loan-time">{timeAgo(loan.dateTaken)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
