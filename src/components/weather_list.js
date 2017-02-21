import React from 'react';
import { connect } from 'react-redux';
class WeatherList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

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
                </tbody>
            </table>
        );
    }
}

// export default ClassName;
function mapStateToProps(state) {
    return {
        weather : weather
    }
}

export default connect(mapStateToProps)(WeatherList);
