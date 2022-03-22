import { Component } from "react";

import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Card">
                <div style={{ backgroundImage: `url(${this.props.bgimage})` }} className="CardBackground" />
                <div className="CardContent">
                    <div className="CardHeader">
                        <div>
                            <h1>{this.props.tournamentName + ' – ' + this.props.tournamentSeasonTypeName}</h1>
                            <h2>{this.props.realcategoryName}</h2>
                        </div>
                    </div>
                    <div className="CardDetails">
                        <div className="CardDetailsFlagContainer">
                            <img src={'http://ls.betradar.com/ls/crest/big/' + this.props.homeCrestId + '.png'} className="CardDetailsFlag" /><br />
                            <span className="CardDetailsCountry">{this.props.countryHome}</span>
                        </div>
                        {this.props.vsInfo}
                        <div className="CardDetailsFlagContainer">
                            <img src={'http://ls.betradar.com/ls/crest/big/' + this.props.awayCrestId + '.png'} className="CardDetailsFlag" /><br />
                            <span className="CardDetailsCountry">{this.props.countryAway}</span>
                        </div>
                    </div>
                    <div className="CardFooter">
                        <span style={{ backgroundColor: (this.props.matchStatus != 'NOT STARTED') ? ((this.props.matchStatus != 'ENDED') ? 'orange' : 'green') : 'gray' }}>
                            {this.props.matchStatus}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;