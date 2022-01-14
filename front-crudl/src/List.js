import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Create from "./Create";
import info from './DataAccess'



const List=()=>{
    const [cview,setCview]=useState(false)

    const callCreate=()=>{
        setCview(true)
    }
    return(
        <>
            {(cview)?
            <>
                <Create/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setCview(false)}>
                    Back
                </button>
            </>
            :
            <>
            <button className="btn btn-outline-success" onClick={callCreate}>
                Create
            </button>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                    <table className="table table-stripped table-hover shodow text-light bg-info">
                        <thead>
                            <tr>
                                <th>Name of the Corporate</th>
                                <th>Locations</th>
                                <th>Number of employees</th>
                                <th>Basic salary</th>
                                <th>Services</th>
                                <th>Benchmark's</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.map((data,index)=>(
                                <tr>
                                    <td>{data.org}</td>
                                    <td>{data.locations}</td>
                                    {/* <td>
                                        {data.locations.map((ele)=>(
                                            <p>{ele}</p>
                                        ))}
                                    </td> */}
                                    <td>{data.employees}</td>
                                    <td>{data.basic}</td>
                                    <td>{data.services}</td>
                                    <td>{data.benchmarks}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
            }
        </>
    );
}

export default List;