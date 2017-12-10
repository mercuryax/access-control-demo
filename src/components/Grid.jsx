import React from 'react';

const Grid = props =>
    <div className="grid">
        <table className="grid-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Reader Type</th>
                <th>Readers(s)</th>
            </tr>
            </thead>
            <tbody>
            {props.rows.map(row =>
                <tr id={row.id} onClick={e => props.handleRowSelect(e)}>
                    <td>{row.name}</td>
                    <td>{row.readerType}</td>
                    <td>{row.reader}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>;

export default Grid;