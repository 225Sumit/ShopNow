import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection({title}) {
  return (
    <>
       <div className="container-fluid page-header py-5">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4 animated slideInDown">{title}</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
   
                        <li className="breadcrumb-item" aria-current="page">{title}</li>
                    </ol>
                </nav>
            </div>
        </div>
    </>
  )
}
