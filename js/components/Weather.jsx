import React from 'react';
import ReactDOM from 'react-dom';
import {FiveDaysWeather} from './FiveDaysWeather.jsx';
import weatherIcons from '../../icons.json';

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            meteoData: {},
            longitude: this.props.longitude,
            lattitude: this.props.lattitude
        }
    }
    getWeather() {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lattitude}&lon=${this.state.longitude}&units=metric&APPID=ad42e23e7534072186c4c938ae0f24c6`).then(resp => {
                    if (resp.ok)
                        return resp.json();
                    else
                        throw new Error('Błąd sieci!');
                }
            ).then(data=>this.setState({meteoData: data}))
    }
    componentDidMount() {
        this.getWeather();
    }
    changeIcon(e){
        let prefix = 'wi wi-';
        let code = e.weather[0].id;
        let icon = weatherIcons[code].icon;
        let today = new Date();
        let hour = today.getHours();
         if(hour > 6 && hour < 20) {
            icon = 'day-' + icon;
         } else {
            icon = 'night-' + icon;
         }
              icon = prefix + icon;
              return icon;
    }

    render() {
        if(Object.getOwnPropertyNames(this.state.meteoData).length === 0){
            return null;
        }else{
            return(
                <div>
                <section className="section-weather">
                    <div className="container">
                        <h2 className="visuallyhidden">Weather</h2>
                        <div>
                            <div className='main-weather'>
                                <i className={this.changeIcon(this.state.meteoData)}></i>
                            </div>
                            <div className='city-info'>{this.state.meteoData.name} {this.state.meteoData.main.temp} <sup>o</sup>C</div>
                        </div>
                        <div className="main-weather-info">
                            <div className='main-weather-subinfo'>Pressure: {this.state.meteoData.main.pressure} HPa</div>
                            <div className='main-weather-subinfo'>Humidity: {this.state.meteoData.main.humidity} %</div>
                            <div className='main-weather-subinfo'>Wind speed: {this.state.meteoData.wind.speed} KM/H</div>
                        </div>
                    </div>
                </section>
                <FiveDaysWeather cityName={this.state.meteoData.name} cityCode={this.state.meteoData.sys.country} changeIcon={this.changeIcon}></FiveDaysWeather>
                </div>

            )
        }
    }
}


export {Weather};
