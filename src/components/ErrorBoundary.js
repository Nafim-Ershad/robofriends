import React from "react";


class ErrorBoundary extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(erro, info){
		this.setState({
			hasError: true
		})
	}

	render(){
		if(this.state.hasError){
			return(
				<h1>Opps Something is Wrong</h1>
			);
		}
		return (this.props.children);
	}
}



export default ErrorBoundary;