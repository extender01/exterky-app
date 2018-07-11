import React from "react";

export class Kdy extends React.Component {

    constructor(props) {
        super(props);
    };
    
    kdyJezdi = () => {
        console.log("ma to byt krnov");
        switch (this.props.kam) {
           case "Krnov":
           console.log("je to krnov");
            return (<div><p>Po - Pá: cca 7:30 a 11:30</p><p>So-Ne: cca 9:30</p></div>)
         };
    };
   
    render() {
        return(
            <div className={this.props.classNames}>
                <h4>KDY JEZDÍ</h4>
                {this.kdyJezdi()}
            </div>
        )
    }
}    


