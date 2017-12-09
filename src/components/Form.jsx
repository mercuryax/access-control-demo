import React from 'react';

const Form = props =>
    <form className="form">
        <div className="form-leftgroup">
            <h6>Name:</h6>
            <h6>Description:</h6>
            <h6>Reader(s):</h6>
            <button>Submit</button>
            <button>Cancel</button>
        </div>
        <div className="form-rightgroup">
            <input type="text" value={props.selectedRowData.name}/>
            <textarea name="" id="" cols="30" rows="4" value={props.selectedRowData.Description}/>
            <select name="" id="">
                <option>All Reader Groups</option>
                <option value="">{props.selectedRowData.readerId}</option>
            </select>
        </div>
    </form>;

export default Form;