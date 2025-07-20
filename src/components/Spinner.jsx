import React from 'react'

export default function Spinner() {
  return (
    <>
     <div id="spinner" className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div>
    </>
  )
}
