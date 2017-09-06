import React from 'react';
import ReactDOM from 'react-dom';

class Info extends React.Component {
    render() {
        return (
            <section className="section-info">
                <div className='info'>
                    <h2>A weather app built with React</h2>
                    <ul>
                        <li>This app uses geolocation to display current weather and 5 day forrecast.</li>
                        <li>You can find the current weather and 5 day forrecast of any city just click SEARCH.</li>
                        <li>This app uses openweathermap API.
                            <a href="https://openweathermap.org/api">LINK</a>
                        </li>
                        <li>Flexbox to be responsive.</li>
                        <li>Webpack f0r building.</li>
                        <li>React framework.</li>
                        <li>React Router.</li>
                        <li>Fetch f0r http requests.</li>
                        <li>Autocomplete google API.</li>
                        <li>The forecats infomation is provided by openweathermap.</li>
                        <li>The icons were created by erikflowers.
                            <a href='https://erikflowers.github.io/weather-icons/'>LINK</a>
                        </li>

                    </ul>
                </div>
            </section>
        )
    }
}

export {Info};
