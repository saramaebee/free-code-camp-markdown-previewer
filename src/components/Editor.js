import React from 'react';
import './Editor.css'

class Editor extends React.Component {
	render() {
		return (
			<div className="editor-background">
				<textarea id="textarea" value={this.props.input} onChange={this.props.handleChange}/>
			</div>
		);
	}
}

export default Editor;