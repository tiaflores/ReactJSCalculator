import React from 'react';
import '../index.css';
//import Buttons from './buttons.js';


export default class Result extends React.Component{


    render() {
            let {result} = this.props;
            return (
                <div className="results">
                    <p>{result}</p>
                </div>
        );}

}
