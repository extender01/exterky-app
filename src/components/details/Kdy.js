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
            return (<p>casy od krnova</p>)
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


