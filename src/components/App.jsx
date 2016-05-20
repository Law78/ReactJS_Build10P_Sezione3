import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Keys from '../../Keys';

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
	clientId: Keys.clientId,
	clientSecret: Keys.clientSecret
}

export default App
