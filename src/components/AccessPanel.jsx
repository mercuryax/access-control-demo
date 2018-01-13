import React from 'react';
import AccessGrid from '../components/AccessGrid';
import AccessForm from '../components/AccessForm';
import AccessLevels from '../data/accessLevels';
import Readers from '../data/readers';
import ReaderTypes from '../data/readerTypes';

class AccessPanel extends React.Component {

	// initialize table with default values from startup
	// this could be any data persisted between runs

	constructor() {
		super();
		this.state = {
			selectedRow: 1,
			rowData: AccessLevels.map(row => {
				return {
					"id": row.id,
					"name": row.name,
					"description": row.Description,
					"reader": Readers[Readers.findIndex(reader => reader.id === row.readerId)].name,
					"readerType": ReaderTypes[ReaderTypes.findIndex(
						readertype => readertype.id === Readers[Readers.findIndex(reader => reader.id === row.readerId)].typeId
					)].name
				};
			})
		};

		this.handleRowSelect = this.handleRowSelect.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAddItem = this.handleAddItem.bind(this);

	}

	// when clicking a row in the grid, make it so the row contents
	// are shown in the view panel

	handleRowSelect(e) {
		e.preventDefault();
		this.setState({
			selectedRow: e.currentTarget.id
		});
	}

	// handle saving of the table data (by row) when clicking submit

	handleSubmit(newRowData) {
		const rowData = this.state.rowData;
		this.setState({
			rowData: rowData.map(row => {
				if (row.id === newRowData.id) {
					return {
						id: newRowData.id,
						name: newRowData.name,
						description: newRowData.description,
						reader: newRowData.reader,
						readerType: newRowData.readerType
					}
				}
				else {
					return row;
				}
			})
		});
	}

	// add a new row to the table data.
	// populate with some default values.

	handleAddItem() {

		let newEntry = {
			"id": this.state.rowData[this.state.rowData.length - 1].id + 1,
			"name": "New Entry",
			"description": "Description",
			"reader": "",
			"readerType": ""
		};

		this.setState({
			rowData: [...this.state.rowData, newEntry]
		});
	}

	// renders a grid for rows representing all
	// current data, and a panel for viewing and editing
	// details for each row

	render() {
		return (
			<div className="access-panel">
				<AccessGrid
					rows={this.state.rowData}
					handleRowSelect={this.handleRowSelect}
					handleAddItem={this.handleAddItem}
				/>
				<AccessForm
					selectedRowData={this.state.rowData[this.state.rowData.findIndex(row => row.id == this.state.selectedRow)]}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default AccessPanel;