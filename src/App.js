import React from 'react';
import Result from './components/result.js';
import Buttons from './components/buttons.js';
import History from './components/history.js';

export default class App extends React.Component {



    constructor(){
        super();

        this.state = {
            result: "",
            history: " "
        }
        this.hist();
    }


    onClick = button => {

        if(button === "="){
            this.calculate()
        } else if(button === "CE"){
            this.reset()
        }else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

hist(){
    const histArr = [];
      histArr.push(this.state.history);
    const listItems = histArr.map((histArr) =>
    <li>{histArr}</li>
  );

    return(
      <ul>{listItems}</ul>
     )
}

    calculate(){
        try {
            this.setState({
                result: eval(this.state.result),
                history: this.state.result + " = " + eval(this.state.result)
            })
        } catch (e) {
            this.setState({
                result: "error",
                history: "error"
            })
        }
    };

    reset() {
        this.setState({
            result: ""
        })
    };






    render() {

        return (
            <div>
                <div className="appdiv">
                    <div className="resultdiv"><Result result={this.state.result}/></div>

                    <Buttons onClick={this.onClick}/>
                    <History history={this.hist()}/>
                </div>
            </div>
        );
    }
}
