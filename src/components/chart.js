import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Chart extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        return(
            <div>
                <Sparklines height={50} width={50} data={this.props.data}>
                    <SparklinesLine  color={this.props.color}/>
                </Sparklines>
            </div>
        );
    }
}

export default Chart;
