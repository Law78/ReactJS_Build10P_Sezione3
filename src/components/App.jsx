import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Profile from './github/Profile.jsx';

import Keys from '../../Keys';

class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			username: 'law78',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

	// Prendo i dati da github

	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log('Data=>',data);
				console.log('This>',this);
				this.setState({userData:data});
			}.bind(this),
			error:function(xhr, status, err){
				alert(err);
				this.setState({userData:null});
			}.bind(this)
		});
	}

	getUserDataXhr(successHandler, errorHandler){
		var xhr = new XMLHttpRequest();
		var url = 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret
		var self = this;

		xhr.onreadystatechange = function(){
			var data;
			if (xhr.readyState == 4){
				if(xhr.status === 200){
					data = JSON.parse(xhr.responseText)
					successHandler && successHandler(data);

					self.setState({userData:data});
				}	else {
					errorHandler && errorHandler(xhr);
				}
			}
		}

		xhr.open('GET', url);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send();
	}

	componentDidMount(){

		this.getUserDataXhr(function(data){
			console.log('Success Handler, Data', data);
		}, function(err){
			console.log('Error Handler, Data', err.statusText, err.status);
		})

		//this.getUserData();
	}

  render(){
    return(
      <div>
        <Profile userData={this.state.userData}/>
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
