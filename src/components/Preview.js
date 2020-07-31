import React from 'react';
import marked from 'marked';
import './Preview.css'

class Preview extends React.Component {
	render() {
		marked.setOptions({
			highlight: function(code, language) {
				const hljs = require('highlight.js');
				const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
				return hljs.highlight(validLanguage, code).value;
			},
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: true,
			smartLists: true,
			smartypants: false
		})
		return (
			<div id="preview-container">
				<div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.markdown.replace(/&gt;+/g, '>' || ''))}} />
			</div>
		);
	}
}

export default Preview;