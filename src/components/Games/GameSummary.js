import React, { Component } from 'react'
import Game from './Game'
import GameCard from './GameCard'

class GameSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // teamSummary: []
        }
    }
    componentWillMount() {
        this.setState({
            teamSummary: this.props.teamSummary
        })
    }
    componentWillReceiveProps(props) {
        this.setState({
            teamSummary: props.teamSummary
        })
    }
    render() {
        return(
            <div className = 'row'>
                
                {this.props.gameInfo.map(game => {

                    const homeData = this.state.teamSummary.find((team) => {
                        return team.Team === game.Home
                    })
                    const awayData = this.state.teamSummary.find((team) => {
                        return team.Team === game.Away
                    })

                    return(
                        
                            <div key = {game.Home}>
                            {/* <Game gameInfo = {game} home = {homeData} away = {awayData} updateTeamData = {this.props.updateTeamData}/> */}
                            <GameCard gameInfo = {game} home = {homeData} away = {awayData} updateTeamData = {this.props.updateTeamData}
                            filterTeam = {this.props.filterTeam} team = {this.props.team} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GameSummary