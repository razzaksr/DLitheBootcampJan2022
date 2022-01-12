import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const List=()=>{
    return(
        <>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                    <table className="table table-stripped table-hover shodow">
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
                            <tr>
                                <td>TCS</td>
                                <td>Chennai, Banglore, Hyderabad, Cochin</td>
                                <td>50000</td><td>3.5</td>
                                <td>Product, Support</td>
                                <td>IRCTC, PassportSeva</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default List;