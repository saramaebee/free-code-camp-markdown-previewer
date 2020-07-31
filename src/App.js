import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markdown: `# This is a header\n\n## This is a subheader\n\nYou can even add a [link](https://github.com/saramaebee)\n\nIt allows for \`inline code\`, or\n\n\`\`\`\nconsole.log('code blocks!');\n\`\`\`\n#### Other things you can do with markdown:\n- Lists!\n- More Lists!!\n- You guessed it! Lists!!\n> Lists aren't all though, you can also do block quotes!\n> > (And they nest!)\n\nAnd you'll **never** believe this, but even images work!!\n\n![A woman programming with several monitors in front a window with a cityscape, courtesy of Pexel](https://i.imgur.com/IjcdPTR.png)`
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({markdown: event.target.value});
	}

	render() {
		return (
			<main id="main" className="App">
				<Editor handleChange={this.handleChange} input={this.state.markdown}/>
				<Preview markdown={this.state.markdown} />
			</main>			
		);
	}
}

export default App;