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
                // return (<div><p>Po - Pá: cca 7:30 a 11:30</p><p>So-Ne: cca 9:30</p></div>);
                return (
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Po-Pa</td>
                                    <td>cca 7:30 a 11:30</td>
                                </tr>
                                <tr>
                                    <td>So-Ne</td>
                                    <td>cca 10:30</td>
                                </tr>
                                <tr>
                                    <td>Svatky</td>
                                    <td>cca 10:30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            case "Nový Jičín":
                return (
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Po-Pa</td>
                                    <td>cca 8:30 a 12:30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );           
            case "FN Ostrava":
                return (
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Po-Pa</td>
                                    <td>cca 8:00 a 12:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
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


