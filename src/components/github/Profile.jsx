import React from 'react';
import ReactDOM from 'react-dom';

export default class Profile extends React.Component{
  render(){
    return(
      <div>
        {this.props.userData.name}
      </div>
    );
  }
}
