import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../../components/admin/AdminSidebar'
import HeroSection from '../../../components/HeroSection'

import { Link, useNavigate } from 'react-router-dom'
import formValidation from '../../../formValiditors/formValidation'
import imageValidation from '../../../formValiditors/imageValidation'

export default function AdminCreateMaincatagry() {
    let [Olddata, setOlddata] = useState([])

    let [data, setData] = useState({
        name: "",
        pic: "",
        active: true,

    })
    let [error, setError] = useState({
        name: "Name filed is required",
        pic: "Pic filed is required",
    })
    let [show, SetShow] = useState(false)
    let navigate = useNavigate()

    function getInputData(e) {
        let name = e.target.name
        let value = e.target.files ? "/maincategroy/" + e.target.files[0].name : e.target.value

        if (name !== "active") {
            setError((old) => {
                return {
                    ...old,
                    [name]: e.target.files ? imageValidation(e) : formValidation(e)
                }
            })
        }

        setData((old) => {
            return {
                ...old,
                [name]: name === "active" ? (value == "1" ? true : false) : value
            }
        })

    }
    async function postSubmitData(e) {
        console.log("first")
        e.preventDefault()
        let errorItem = Object.values(error).find(x => x !== "")
        if (errorItem)
            SetShow(true)
        else {
            let item = Olddata.find(x => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
            if (item) {
                SetShow(true)
                setError((old) => {
                    return {
                        ...old,
                        "name": "Maincategory is Already Exist"
                    }
                })
            }
            else {
                let response = await fetch(`${process.env.REACT_APP_BASE_URL}/maincategroy`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ ...data })
              });
                response = await response.json()
                if (response)
                    navigate("/admin/maincategory")
                else {
                    alert("something went worng")
                }
            }
        }
    }

    useEffect(() => {
        (async () => {
            let response = await fetch(`${process.env.REACT_APP_BASE_URL}/maincategroy`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            });
            response = await response.json();
            setOlddata(response);
            console.log(response);
        })(); // ←  () to invoke the function
    }, []);


    return (
        <>
            <HeroSection title="Maincategory Create" />
            <div className="container-fluid py-5 my-5">
                <div className="row ">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2 fs-3'>Maincategory Create<Link to="/admin/maincategory"><i className='fa fa-arrow-left text-light float-end'></i></Link></h5>
                        <form onSubmit={postSubmitData} >

                            <div className='mb-3'>
                                <label >Name*</label>
                                <input type="text" name='name' placeholder='Enter Your Name' onChange={getInputData} className={`form-control  border-3 ${error.name && show ? "border-danger" : "border-primary"}`} />
                                {show && error.name ? <p className='text-danger'>{error.name}</p> : null}


                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Pic*</label>
                                    <input type='file' name='pic' onChange={getInputData} className={`form-control  border-3 ${error.pic && show ? "border-danger" : "border-primary"}`} />
                                    {show && error.pic ? <p className='text-danger'>{error.pic}</p> : null}

                                </div>
                                <div className="col-md-6 mb-4">
                                    <label>Active*</label>
                                    <select onChange={getInputData} name='active' className='form-select border-primary border-3'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3 ">
                                <button type="submit" className='btn btn-primary w-100 fs-5 '>Create</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
