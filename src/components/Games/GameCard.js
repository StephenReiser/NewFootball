import React, { Component } from 'react'

import SingleGameSummary from './SingleGameSummary'
import SingleGameDetails from './SingleGameDetails'


class GameCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homescore: 0,
            homeSnaps: 0,
            homeRushEff: 0,
            homePassEff: 0,
            homeRushTdPerc: 0,
            homePassTdPerc: 0,
            awayscore: 0,
            awaySnaps: 0,
            awayRushEff: 0,
            awayPassEff: 0,
            awayRushTdPerc: 0,
            awayPassTdPerc: 0,
            details: false,
            homeTotalPassPerc: 0,
            awayTotalPassPerc: 0,
            homeTotalRushPerc: 0,
            awayTotalRushPerc: 0

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
  componentWillReceiveProps (props) {
      const newProps = props
    //   console.log('received', props.home, props.home.TotalTeamRushPlays)
    console.log('new props', newProps.home.Team, newProps.home)
    const awayPassPerc = props.away.TotalTeamPassPlays / props.away.PassPlays
    const homeRushPerc =  props.home.TotalTeamRushPlays / props.home.RushPlays
    const awayRushPerc = props.away.TotalTeamRushPlays / props.away.RushPlays
    const homePassPerc = props.home.TotalTeamPassPlays / props.home.PassPlays
      this.setState({
          
        awayTotalPassPerc: awayPassPerc,
        homeTotalRushPerc: homeRushPerc,
        awayTotalRushPerc: awayRushPerc,
        homeTotalPassPerc: homePassPerc,
        
          

      })
  }
    componentDidMount(){
        // console.log(this.props.gameInfo)
        // console.log(this.props.home)
        // console.log('...mounting')
        this.setState({
            homescore: this.props.gameInfo.HomeScore,
            homeSnaps: this.props.gameInfo.HomeSnaps,
            homeRushEff: this.props.home.RushEff,
            homePassEff: this.props.home.PassEff,
            homeRushTdPerc: this.props.home.RushTdPerc,
            homePassTdPerc: this.props.home.PassTdPerc,
            awayscore: this.props.gameInfo.AwayScore,
            awaySnaps: this.props.gameInfo.AwaySnaps,
            awayRushEff: this.props.away.RushEff,
            awayPassEff: this.props.away.PassEff,
            awayRushTdPerc: this.props.away.RushTdPerc,
            awayPassTdPerc: this.props.away.PassTdPerc,
            awayTotalPassPerc: this.props.away.TotalTeamPassPlays / this.props.away.PassPlays,
            homeTotalRushPerc: this.props.home.TotalTeamRushPlays / this.props.home.RushPlays,
            awayTotalRushPerc: this.props.away.TotalTeamRushPlays / this.props.away.RushPlays,
            homeTotalPassPerc: this.props.home.TotalTeamPassPlays / this.props.home.PassPlays,
            




        })
    }



    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
      }

      handleSubmit () {
        
        // event.preventDefault()

        const home = this.props.home
        const away = this.props.away

        const fullGame = this.props.gameInfo

        fullGame.HomeScore = this.state.homescore
        fullGame.HomeSnaps = this.state.homeSnaps
        fullGame.AwayScore = this.state.awayscore
        fullGame.AwaySnaps = this.state.awaySnaps

        home.Score = this.state.homescore
        home.RushEff = this.state.homeRushEff
        home.PassEff = this.state.homePassEff
        home.RushTdPerc = this.state.homeRushTdPerc
        home.PassTdPerc = this.state.homePassTdPerc
        home.PassEff = this.state.homePassEff
        home.ExpectedTd = (this.state.homescore * .7 / 7).toFixed(2)
        home.Snaps = this.state.homeSnaps

        away.Score = this.state.awayscore
        away.RushEff = this.state.awayRushEff
        away.PassEff = this.state.awayPassEff
        away.RushTdPerc = this.state.awayRushTdPerc
        away.PassTdPerc = this.state.awayPassTdPerc
        away.ExpectedTd = (this.state.awayscore * .7 / 7).toFixed(2)
        away.Snaps = this.state.awaySnaps

        this.props.updateTeamData(fullGame, home, away)
        console.log(fullGame, home, away)
      }
    handleClick () {
        this.setState({
            details: !this.state.details
        })
    }
    render() {
        
        


            
        return(
            
                <div className = 'col m6 s12'>
                    
                    <div className='gamecard'>
                    {
                    this.state.details ?
                        
                        <SingleGameDetails 
                            Home = {this.props.gameInfo.Home} 
                            Away = {this.props.gameInfo.Away}
                            homeRushEff = {this.state.homeRushEff}
                            homePassEff = {this.state.homePassEff}
                            homeRushTdPerc = {this.state.homeRushTdPerc}
                            homePassTdPerc = {this.state.homePassTdPerc}
                            awayRushEff = {this.state.awayRushEff}
                            awayPassEff = {this.state.awayPassEff}
                            awayRushTdPerc = {this.state.awayRushTdPerc}
                            awayPassTdPerc = {this.state.awayPassTdPerc}
                            handleChange = {this.handleChange}
                            
                        />
                        
                    : 

                        // FRONT PAGE - PROBABLY SHOULD BE ITS OWN COMPONENT


                        <SingleGameSummary handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} homescore={this.state.homescore} homeSnaps = {this.state.homeSnaps} awayscore = {this.state.awayscore} awaySnaps = {this.state.awaySnaps} Home = {this.props.gameInfo.Home} Away = {this.props.gameInfo.Away}
                        filterTeam = {this.props.filterTeam}
                        homeTotalPassPerc = {this.state.homeTotalPassPerc}
                        awayTotalPassPerc = {this.state.awayTotalPassPerc}
                        homeTotalRushPerc = {this.state.homeTotalRushPerc}
                        awayTotalRushPerc = {this.state.awayTotalRushPerc}
                        team = {this.props.team}
                        />
                    
                    }
                        
                        <button onClick = {() => this.handleClick()}>{this.state.details ? "Team Summary" : "Team Details"}</button>
                        <button onClick = {() => this.handleSubmit()}>Save</button>
                    </div>
                </div>
            

        )
    }
}


           
          


export default GameCard
