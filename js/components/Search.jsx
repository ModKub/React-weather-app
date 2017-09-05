import React from 'react';
import ReactDOM from 'react-dom';
import {Weather} from './Weather.jsx';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state={
            lat: '',
            lng: '',
        }
    }
    init=()=> {
        let input = document.getElementById('locationTextField');
        let autocomplete = new google.maps.places.Autocomplete(input);
        google.maps.event.addListener(autocomplete, 'place_changed', ()=> {
            let place = autocomplete.getPlace();
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            this.setState({lat: this.lat, lng:this.lng})
        })
    }
    componentDidMount() {
        google.maps.event.addDomListener(window, 'load', this.init);
        this.init();
    }
    render() {
        if(this.state.lat!=''&&this.state.lng!=''){
            return <Weather longitude={this.state.lng} lattitude={this.state.lat}></Weather>
        }else{
            return (
                <section className="section-search">
                    <div className="container">
                        <input id='locationTextField' type="text"></input>
                    </div>
                </section>
            )
        }
    }
}


export {Search};
