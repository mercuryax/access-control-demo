import React from 'react';
import Form from './Form';

const AccessForm = props =>
    <div className="access-form">
        <h4>Access Name</h4>
        <Form selectedRowData={props.selectedRowData} handleSubmit={props.handleSubmit}/>
    </div>;

export default AccessForm;