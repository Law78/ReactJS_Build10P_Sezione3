import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			username: 'bradtraversy',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}	

  render(){
    return(
      <div>
        {this.state.username}
        {this.props.clientId}
      </div>
    );
  }
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
App.defaultProps = {
	clientId: '7e1177647b38ca45b6c4',
	clientSecret: '76486767253e0fb7d528033d446d13ef621055c1'
}

export default App