'use client'
import { useState } from 'react'
import copy from 'clipboard-copy'

export default function CopyButton() {
  const [showToast, setShowToast] = useState(false)

  const handleCopy = () => {
    copy(window.location.href)
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 2000)
  }

  return (
    <>
      <button
        className="rounded-md my-3 px-3 py-2 text-sm font-medium text-white bg-blue-500 cursor-pointer"
        onClick={handleCopy}
      >
        Copy to Clipboard
      </button>

      {showToast && (
        <div className="fixed top-5 right-5 bg-yellow-100 border border-green-400 px-4 py-2 text-sm">
          Link copied to clipboard!
        </div>
      )}
    </>
  )
}