import React, { Component } from 'react'
import Game from './Game'

class GameSummary extends Component {
    componentDidMount() {
        // console.log(this.props)
    }
    render() {
        return(
            <div className = 'row'>
                <div className = 'col s9'>
                                <div className = 'row'>
                                    <div className = 'col s2'>Team</div>
                                    <div className = 'col s1'>Score</div>
                                    <div className = 'col s1'>Snaps</div>
                                    <div className = 'col s1'>Rush Eff</div>
                                    <div className = 'col s1'>Pass Eff</div>
                                    <div className = 'col s1'>RTD %</div>
                                    <div className = 'col s1'>PTD %</div>
                                </div>
                </div>
                {this.props.gameInfo.map(game => {

                    const homeData = this.props.teamSummary.find((team) => {
                        return team.Team === game.Home
                    })
                    const awayData = this.props.teamSummary.find((team) => {
                        return team.Team === game.Away
                    })

                    return(
                        
                            
                            <Game gameInfo = {game} home = {homeData} away = {awayData} updateTeamData = {this.props.updateTeamData}/>
                        
                    )
                })}
            </div>
        )
    }
}

export default GameSummary