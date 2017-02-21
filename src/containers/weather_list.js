import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    renderWeather(cityData) {

        const temp = cityData.list.map( weather => weather.main.temp);
        console.log(temp);
        return (
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>
                    <Chart data={temp} color={"green"} />
                </td>
            </tr>
        );
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// export default ClassName;
function mapStateToProps(state) {
    return {
        weather : state.weather
    }
}

export default connect(mapStateToProps)(WeatherList);
