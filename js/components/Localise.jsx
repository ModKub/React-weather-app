import React from 'react';
import ReactDOM from 'react-dom';
import {Weather} from './Weather.jsx';

class Localise extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lattitude: '',
            longitude: ''
        }
    }
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        } else {
            console.log('geolocation is not suported by this browser');
        }
    }
    showPosition = (position) => {
        this.setState({lattitude: position.coords.latitude, longitude: position.coords.longitude})
    }
    showError = (error)=> {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                window.alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                window.alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                window.alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                window.alert("An unknown error occurred.")
                break;
        }
    }
    componentDidMount() {
        this.getLocation();
    }
    render(){
        if(this.state.lattitude!=''&&this.state.longitude!=''){
            return <Weather longitude={this.state.longitude} lattitude={this.state.lattitude}></Weather>
        }else{
            return null;
        }
    }
}


export {Localise};
