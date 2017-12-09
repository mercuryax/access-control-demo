import React from 'react';
import AccessGrid from '../components/AccessGrid';
import AccessForm from '../components/AccessForm';
import AccessLevels from '../data/accessLevels';

class AccessPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            rowData: AccessLevels,
            selectedRow: 1
        };

        this.handleRowSelect = this.handleRowSelect.bind(this);
    }

    handleRowSelect(e) {
        e.preventDefault();
        this.setState({
            selectedRow: e.currentTarget.id
        });
    }

    render() {
        return (
            <div className="access-panel">
                <AccessGrid rows={this.state.rowData} handleRowSelect={this.handleRowSelect}/>
                <AccessForm
                    selectedRowData={this.state.rowData[this.state.rowData.findIndex(row => row.id == this.state.selectedRow)]}/>
            </div>
        );
    }
}
export default AccessPanel;