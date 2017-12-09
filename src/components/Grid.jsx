import React from 'react';
import Readers from '../data/readers';
import ReaderTypes from '../data/readerTypes';

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
                    <td>{
                        ReaderTypes[ReaderTypes.findIndex(readertype => readertype.id == Readers[Readers.findIndex(reader => reader.id == row.readerId)].typeId)].name
                    }</td>
                    <td>{Readers[Readers.findIndex(reader => reader.id == row.readerId)].name}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>;

export default Grid;