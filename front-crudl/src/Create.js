import React from "react";
import TextField from '@mui/material/TextField';

const Create=()=>{
    return(
        <>
            <div className="mt-4 container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow-lg p-3">
                        <TextField
                        required
                        id="outlined-required"
                        label="Organization name"
                        defaultValue=""
                        className="form-control"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Create;