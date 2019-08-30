import React, { Component } from 'react'

import Player from './Player.js'

class Players extends Component {
    componentDidMount () {
        console.log(this.props)
    }
    render() {
        return(

            <table className = 'striped highlight '>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Pos</th>
                        <th>Snap %</th>
                        <th>Snaps</th>
                        <th>Snap/Route</th>
                        <th>Routes</th>
                        <th>Tgt/Route</th>
                        <th>Catch%</th>
                        <th>Rush Util</th>
                        <th>Rec TD %</th>
                        <th>Rush TD %</th>
                        <th>Targets</th>
                        <th>Catches</th>
                        <th>RecYard</th>
                        <th>RushYard</th>
                        <th>TotalTD</th>
                        <th>ProjPt</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {this.props.snapCounts.map((player) => {
                        const playerTeamData = this.props.teamSummary.find((team) => {
                            return team.Team === player.Team
                        })
                        return(
                            
                                <Player snapCounts = {player} teamData = {playerTeamData}/>
                                
                            
                        )

                    })}
               
               </tbody>
            </table>
            
        )
    }
}
export default Players