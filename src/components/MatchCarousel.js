import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import BgPrematch from '../assets/backgrounds/bg-prematch.jpg';
import BgLive from '../assets/backgrounds/bg-live.jpg';
import BgPostmatch from '../assets/backgrounds/bg-postmatch.jpg';

import Card from './Card';

class MatchCarousel extends Component {
  constructor(props) {
    super(props);

    const dataFromFile = require('../data/data.json');
    const sports = dataFromFile.doc[0].data;
    const allChampionships = sports[this.props.sportId].realcategories;
    const singleChampionship = allChampionships[this.props.championshipId]

    let cards = [];
    singleChampionship.tournaments.forEach(function(tournament) {
      tournament.matches.forEach(function(match) {
        var bgimage = BgLive;

        if (match.status._id === 0) {
          bgimage = BgPrematch;
        } else if (match.status._id === 100) {
          bgimage = BgPostmatch;
        }

        var vsInfo;
        // Manipulating data in the CardDetailsVsInfo div
        if (match.result.winner == null) {
          vsInfo = (<div className="CardDetailsVsInfo">
                      <h3>VS</h3><br />
                      <h3>{match._dt.time}</h3>
                      <h4>{match._dt.date}</h4>
                  </div>);
        } else {
          vsInfo = (<div className="CardDetailsVsInfo">
                      <span style={{ fontSize: '10vw'}}>{match.result.home + ' : ' + match.result.away}</span>
                  </div>);
        }
        // Adding a card into the array of Card components
        cards.push(
          <Card
            key={match._id}
            bgimage={bgimage}
            countryHome={match.teams.home.name}
            countryAway={match.teams.away.name}
            vsInfo={vsInfo}
            matchStatus={match.status.name.toUpperCase()}
            homeCrestId={match.teams.home.uid}
            awayCrestId={match.teams.away.uid}
            tournamentName={tournament.name}
            tournamentSeasonTypeName={tournament.seasontypename}
            realcategoryName={singleChampionship.name}
            result={match.result}
          />
        );
      });
    });

    this.cards = cards;
  }

  render() {
    return (
      <Carousel autoPlay="true" interval="3000" infiniteLoop="true">
        {this.cards}
      </Carousel>
    );
  }
}

export default MatchCarousel;