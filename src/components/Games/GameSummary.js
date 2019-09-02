import React, { Component } from 'react'
import Game from './Game'
import GameCard from './GameCard'

class GameSummary extends Component {
    componentDidMount() {
        // console.log(this.props)
    }
    componentWillReceiveProps(props) {
        console.log('summmary', props)
    }
    render() {
        return(
            <div className = 'row'>
                
                {this.props.gameInfo.map(game => {

                    const homeData = this.props.teamSummary.find((team) => {
                        return team.Team === game.Home
                    })
                    const awayData = this.props.teamSummary.find((team) => {
                        return team.Team === game.Away
                    })

                    return(
                        
                            <>
                            {/* <Game gameInfo = {game} home = {homeData} away = {awayData} updateTeamData = {this.props.updateTeamData}/> */}
                            <GameCard gameInfo = {game} home = {homeData} away = {awayData} updateTeamData = {this.props.updateTeamData}
                            filterTeam = {this.props.filterTeam}/>
                        </>
                    )
                })}
            </div>
        )
    }
}

export default GameSummary