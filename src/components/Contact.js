import React, { Component } from 'react';
import '../App.css';
import './style.css';


class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          online: props.online,
        };
    }

    render() {
    return(
        <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
            <div>     
                <h4 className="name">{this.props.name}</h4>
                <div className="status"
                    onClick={event => {
                        const newOnline = !this.state.online;
                        this.setState({ online: newOnline });
                    }}
                >
                    <div className={this.state.online ?"status-online": "status-offline"}>
                    </div>
                    <p className="status-text">{this.state.online ? "online": "offline"}</p>
                </div>
            </div>
        </div>
    );
}
}

export default Contact ;

