import React from "react";

export class Odber extends React.Component {

    constructor(props) {
        super(props);
    };

    typyOdberu = {
        sg: "Srazliva krev s gelem",
        se: "Srazliva krev bez gelu",
        pli: "Nesrazliva s Li heparinem",
        nespec: "oddelovaci",
        specialni: "Specialni odber na ledu"
        //dopsat Object.keys a z jeho array vytahnout specialni, kde to bude primo napsane
    };

    coZaOdber = () => {
        let odberPole = this.props.odber.split(", ");
            return (
                odberPole.map((item, index) => {
                    return ( 
                        <div key={index} className="flexi doSloupce" >
                            <div className={`obrazek ${item}`}></div>
                            <p>{this.typyOdberu[item]}</p>
                        </div>
                    );
                })
            );
    };

    render() {
        return (
            <div className={this.props.classNames}>
                <h4>ODBĚR</h4>
                <div className="flexi nahoru">
                    {this.coZaOdber(this.props.odber)}
                    {this.props.odberSpec &&
                         <div className="flexi doSloupce">
                            <p>{this.props.odberSpec}</p>
                         </div>
                        }
                </div>
            </div>
        )
    }
}