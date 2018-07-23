import React from "react";

export class Odber extends React.Component {

    constructor(props) {
        super(props);
    };

    typyOdberu = {
        sg: "Srazliva krev s gelem",
        se: "Srazliva krev bez gelu",
        pli: "Nesrazliva s Li heparinem",
        edta: "Nesrazliva krev s EDTA",
        citr: "Nesrazliva krev s Na citratem",

        mocj: "Moc jednorazova",
        mocsb: "Moc sbirana",
        pu: "punktat",
        csf: "Likvor"
        
        //dopsat Object.keys a z jeho array vytahnout specialni, kde to bude primo napsane
    };

    coZaOdber = () => {
        let odberPole = this.props.odber.split(", ");
            return (
                odberPole.map((item, index) => {
                    return ( 
                        <div key={index} className="flexi--column" >
                            <div className={`detail__img-${item}`}></div>
                            <p>{this.typyOdberu[item] ? this.typyOdberu[item] : odberPole[index]}</p>
                        </div>
                    );
                })
            );
    };

    render() {
        return (
            <div className={this.props.classNames}>
                <h4>ODBĚR</h4>
                <div className="flexi--align-low">
                    {this.coZaOdber(this.props.odber)}
                    
                </div>
            </div>
        )
    }
}