import React from 'react';
import AccessGrid from '../components/AccessGrid';
import AccessForm from '../components/AccessForm';
import AccessLevels from '../data/accessLevels';
import Readers from '../data/readers';
import ReaderTypes from '../data/readerTypes';

class AccessPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedRow: 1,
            rowData: AccessLevels.map(row => {
                return {
                    "id": row.id,
                    "name": row.name,
                    "description" : row.Description,
                    "reader": Readers[Readers.findIndex(reader => reader.id == row.readerId)].name,
                    "readerType": ReaderTypes[ReaderTypes.findIndex(
                        readertype => readertype.id == Readers[Readers.findIndex(reader => reader.id == row.readerId)].typeId
                    )].name
                };
            })
        };

        this.handleRowSelect = this.handleRowSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRowSelect(e) {
        e.preventDefault();
        this.setState({
            selectedRow: e.currentTarget.id
        });
    }

    handleSubmit(newRowData) {
        const rowData = this.state.rowData;
        this.setState({
            rowData: rowData.map(row => {
                if(row.id == newRowData.id){
                    return {
                        id: newRowData.id,
                        name: newRowData.name,
                        description: newRowData.description,
                        reader: newRowData.reader,
                        readerType: newRowData.readerType
                    }
                }
                else{
                    return row;
                }
            })
        });
    }

    render() {
        return (
            <div className="access-panel">
                <AccessGrid rows={this.state.rowData} handleRowSelect={this.handleRowSelect}/>
                <AccessForm
                    selectedRowData={this.state.rowData[this.state.rowData.findIndex(row => row.id == this.state.selectedRow)]}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}
export default AccessPanel;