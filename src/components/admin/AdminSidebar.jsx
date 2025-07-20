import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin/home" className="list-group-item list-group-item-action active mb-2 " aria-current="true"><i className='fa fa-home fs-2'> </i><span className='float-end'>Home</span> </Link>
                <Link to="/admin/maincategory" className="list-group-item list-group-item-action active mb-2" aria-current="true"><i className='fa fa-list fs-2'> </i><span className='float-end'>Maincategory</span> </Link>
                <Link to="/admin/subcategory" className="list-group-item list-group-item-action active mb-2" aria-current="true"><i className='fa fa-list fs-2'> </i><span className='float-end'>Subcategory</span> </Link>
                <Link to="/admin/brand" className="list-group-item list-group-item-action active mb-2" aria-current="true"><i className='fa fa-list fs-2'> </i><span className='float-end'>Brand</span> </Link>
                <Link to="/admin/product" className="list-group-item list-group-item-action active mb-2" aria-current="true"><i className='fa fa-list fs-2'> </i><span className='float-end'>Product</span> </Link>
                <Link to="/admin/testimonial" className="list-group-item list-group-item-action active mb-2" aria-current="true"><i className='fa fa-star fs-2'> </i><span className='float-end'>Testimonial</span> </Link>
                <Link to="/admin/user" className="list-group-item list-group-item-action active mb-2" aria-current="true"><i className='fa fa-users fs-2'> </i><span className='float-end'>User</span> </Link>
                <Link to="/admin/newsletter" className="list-group-item list-group-item-action active mb-2" aria-current="true"><i className='fa fa-envelope fs-2'> </i><span className='float-end'>Newsletter</span> </Link>
                <Link to="/admin/checkout" className="list-group-item list-group-item-action active mb-2" aria-current="true"><i className='fa fa-shopping-cart fs-2'> </i><span className='float-end'>Checkout</span> </Link>
                <Link to="/admin/contactus" className="list-group-item list-group-item-action active mb-2" aria-current="true"><i className='fa fa-phone fs-2'> </i><span className='float-end'>Contact Us</span> </Link>
 
                
            </div>

        </>
    )
}
