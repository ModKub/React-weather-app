import React from 'react';
import ReactDOM from 'react-dom';
import weatherIcons from '../../icons.json';

class FiveDaysWeather extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: this.props.cityName,
            code: this.props.cityCode,
            days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            meteoData: {},
        }

    }
    getWeather() {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.name},${this.state.code}&units=metric&APPID=ad42e23e7534072186c4c938ae0f24c6`).then(resp => {
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
    render(){
        let now = new Date();
        let hour = now.getHours();
        if(Object.getOwnPropertyNames(this.state.meteoData).length === 0){
            return null;
        }else{
            return(
                <section className="section-5daysweather">
                    <div className="container">
                        <h2 className="visuallyhidden">5 day weather</h2>
                        <div className="dayinfo">
                            <div>{this.state.days[ now.getDay()+1 ]}</div>
                            <div className='small-icon'>
                                <i className={this.props.changeIcon(this.state.meteoData.list[8])}></i>
                            </div>
                            <div className="temperature">Midday: {this.state.meteoData.list[8].main.temp}<sup>o</sup>C</div>
                            <div className="temperature">Night: {this.state.meteoData.list[11].main.temp}<sup>o</sup>C</div>

                        </div>
                        <div className="dayinfo">
                            <div>{this.state.days[ now.getDay()+2 ]}</div>
                            <div className='small-icon'>
                                <i className={this.props.changeIcon(this.state.meteoData.list[16])}></i>
                            </div>
                            <div className="temperature">Midday: {this.state.meteoData.list[16].main.temp}<sup>o</sup>C</div>
                            <div className="temperature">Night: {this.state.meteoData.list[19].main.temp}<sup>o</sup>C</div>

                        </div>
                        <div className="dayinfo">
                            <div>{this.state.days[ now.getDay()+3 ]}</div>
                            <div className='small-icon'>
                                <i className={this.props.changeIcon(this.state.meteoData.list[24])}></i>
                            </div>
                            <div className="temperature">Midday: {this.state.meteoData.list[24].main.temp}<sup>o</sup>C</div>
                            <div className="temperature">Night: {this.state.meteoData.list[27].main.temp}<sup>o</sup>C</div>

                        </div>
                        <div className="dayinfo">
                            <div>{this.state.days[ now.getDay()+4 ]}</div>
                            <div className='small-icon'>
                                <i className={this.props.changeIcon(this.state.meteoData.list[32])}></i>
                            </div>
                            <div className="temperature">Midday: {this.state.meteoData.list[32].main.temp}<sup>o</sup>C</div>
                            <div className="temperature">Night: {this.state.meteoData.list[35].main.temp}<sup>o</sup>C</div>

                        </div>
                    </div>
                </section>
            )
        }
    }
}


export {FiveDaysWeather};
