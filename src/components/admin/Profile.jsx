import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile({ title }) {
    return (
        <>
            <h5 className='bg-primary text-light text-center p-2 fs-2'>{title} Profile</h5>
            <div className="row">
                <div className="col-md-6 mb-2">
                    <img src="/img/team-2.jpg" width={"100%"} height={"80%"}  alt=" image" />
                </div>
                <div className="col-md-6 mb-2">
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <th>Name </th>
                                <td>Sumit Gupta</td>
                            </tr>
                            <tr>
                                <th>User Name </th>
                                <td>Sumit</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Phone </th>
                                <td></td>
                            </tr>
                          {
                            title!="Admin"?
                            <>
                              <tr>
                                <th>Address </th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Pin </th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>City </th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>State </th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Country </th>
                                <td></td>
                            </tr>
                            </>:null
                          }
                            <tr >
                                <td colSpan={2}> <Link to="/update-profile" className="btn btn-primary w-100">Update Profile</Link></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}
