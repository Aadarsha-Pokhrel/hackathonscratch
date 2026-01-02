import { useState } from 'react'
import { notices as initialNotices } from './notices.js'
import './NoticePage.css'

export function NoticePage() {
  const [notices, setNotices] = useState(
    initialNotices.map((n) => ({
      ...n,
      createdAt: new Date(),
    }))
  )
  const [text, setText] = useState('')

  function addNotice() {
    if (!text.trim()) return

    const newNotice = {
      id: Date.now(),
      description: text,
      createdAt: new Date(),
    }

    setNotices([newNotice, ...notices])
    setText('')
  }

  function timeAgo(date) {
    const diff = (new Date() - date) / 1000
    if (diff < 60) return `${Math.floor(diff)}s ago`
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
    return `${Math.floor(diff / 86400)}d ago`
  }

  return (
    <div className="notice-page">
      <h1 className="page-title">📢 Notices Feed</h1>

      {/* Create new notice */}
      <div className="make-notice">
        <textarea
          placeholder="Write something new..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addNotice}>Post</button>
      </div>

      {/* Notice list */}
      <div className="notice-list">
        {notices.length === 0 && (
          <p className="no-notices">No notices yet. Be the first to post!</p>
        )}

        {notices.map((notice) => (
          <div key={notice.id} className="notice-card">
            <div className="notice-header">
              <div className="notice-avatar">
                {notice.description.charAt(0).toUpperCase()}
              </div>
              <div className="notice-meta">
                <p className="notice-author">Admin</p>
                <p className="notice-time">{timeAgo(notice.createdAt)}</p>
              </div>
            </div>

            <div className="notice-content">{notice.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
