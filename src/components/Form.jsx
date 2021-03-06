import React from 'react';
import Readers from '../data/readers';
import ReaderTypes from '../data/readerTypes';



class Form extends React.Component {

	// initialize with blank data, since nothing is
	// selected on initial render

	constructor() {
		super();
		this.state = {
			id: "",
			name: "",
			description: "",
			reader: "",
			readerType: ""

		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleReaderChange = this.handleReaderChange.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	componentDidMount() {
		this.setState({
			id: this.props.selectedRowData.id,
			name: this.props.selectedRowData.name,
			description: this.props.selectedRowData.description,
			reader: this.props.selectedRowData.reader,
			readerType: this.props.selectedRowData.readerType
		});
	}

	// when rowdata is changed, update local
	// state to reflect the new data

	componentWillReceiveProps(nextProps) {
		this.setState({
			id: nextProps.selectedRowData.id,
			name: nextProps.selectedRowData.name,
			description: nextProps.selectedRowData.description,
			reader: nextProps.selectedRowData.reader,
			readerType: nextProps.selectedRowData.readerType
		});
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value
		})
	}

	handleDescriptionChange(e) {
		this.setState({
			description: e.target.value
		})
	}

	handleReaderChange(e) {
		this.setState({
			reader: e.target.value,
			readerType: ReaderTypes.find(readerType => readerType.id === Readers.find(
				reader => reader.name === e.target.value).typeId
			).name
		})
	}

	// if user clicks cancel button,
	// restore the original values

	handleCancel(e) {
		e.preventDefault();
		this.setState({
			id: this.props.selectedRowData.id,
			name: this.props.selectedRowData.name,
			description: this.props.selectedRowData.description,
			reader: this.props.selectedRowData.reader,
			readerType: this.props.selectedRowData.readerType
		})
	}

	render() {
		return (
			<form className="form">
				<div className="form-leftgroup">
					<h6>Name:</h6>
					<h6>Description:</h6>
					<h6>Reader(s):</h6>
					<button onClick={e => {
						e.preventDefault();
						return this.props.handleSubmit(this.state)
					}}>Submit
					</button>
					<button onClick={this.handleCancel}>Cancel</button>
				</div>
				<div className="form-rightgroup">
					<input type="text" value={this.state.name} onChange={this.handleNameChange}/>
					<textarea name="" id="" cols="30" rows="4" value={this.state.description}
							  onChange={this.handleDescriptionChange}/>
					<select name="" id="" onChange={this.handleReaderChange}>
						{Readers
							.map((reader, index) => <option value={reader.name} key={index}>{reader.name}</option>)
						}
					</select>
				</div>
			</form>
		);
	}

}

export default Form;