import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import Player from './Player.js'


class Players extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerList: []
        }
    }
    // componentWillMount () {
    //     // console.log(this.props)
    //     let currentPlayers = []
    //     if (this.props.positions === 'WR') {
    //         currentPlayers = this.props.snapCounts.filter(player => player.Pos === 'WR')

    //     } else {
    //         currentPlayers = this.props.snapCounts
    //     }
    //     this.setState ({
    //         playerList: currentPlayers
    //     })
        
    // }

    componentDidMount () {
        this.setState({
            playerList: this.props.playerSnapCounts
        }
        )
    }
    componentWillReceiveProps (props) {
        console.log(props)
        this.setState({
            playerList: props.playerSnapCounts
        }) 
    }
    render() {
        // let playerList = []
        // if (this.props.draftKings) {
        //  playerList = this.props.playerSnapCounts.filter((originalPlayer) => {
        //     return originalPlayer.DKSalary !== "0"
        // })
        // } else {
        //  playerList = this.props.playerSnapCounts
        // }

        // let filteredPlayerList = []
        // if (this.props.team === 'ALL') {
        //     filteredPlayerList = playerList
        // } else {
        //     filteredPlayerList = playerList.filter((players) => {
        //         return players.Team === this.props.team
        //     })
        // }

        // let activePlayerList = []
        // if (this.props.active) {
        //     activePlayerList = filteredPlayerList.filter((originalPlayer) => {
        //         return originalPlayer.Active === "Active"
                
        //    })
        //    } else {
        //     activePlayerList = filteredPlayerList

        //    }
        
        //    this.props.sumPlays(this.props.teamSummary, activePlayerList)
        //    console.log('playerlist', activePlayerList)
        return(

            // <table className = 'striped highlight '>
            //     <thead>
            //         <tr>
            //             <th>Name</th>
            //             <th>Pos</th>
            //             <th>Snap %</th>
            //             <th>Snaps</th>
            //             <th>Snap/Route</th>
            //             <th>Routes</th>
            //             <th>Tgt/Route</th>
            //             <th>Catch%</th>
            //             <th>Rush Util</th>
            //             <th>Rec TD %</th>
            //             <th>Rush TD %</th>
            //             <th>Targets</th>
            //             <th>Catches</th>
            //             <th>RecYard</th>
            //             <th>RushYard</th>
            //             <th>TotalTD</th>
            //             <th>ProjPt</th>
            //             <th>DKSalary</th>
            //             <th>25Percentile</th>
            //             <th>75Percentile</th>
            //             <th></th>
            //         </tr>
            //     </thead>
            //     <tbody>

            //         {this.props.snapCounts.map((player) => {
            //             const playerTeamData = this.props.teamSummary.find((team) => {
            //                 return team.Team === player.Team
            //             })
            //             return(
                            
            //                     <Player snapCounts = {player} teamData = {playerTeamData}/>
                                
                            
            //             )

            //         })}
               
            //    </tbody>
            // </table>
    <div className = 'row'>
        {this.state.playerList.map((player) => {
            const playerTeamData = this.props.teamSummary.find((team) => {
                return team.Team === player.Team
            })
            const originalSnaps = this.props.orignalSnapCounts.find((originalPlayer) => {
                return originalPlayer.Player === player.Player
            })
            // using a conditional to render the correct stuff
                
            if (this.props.positions === 'ALL') {
                return(
                    <div className = 'col m3 s12 playerSummary' key={player.Player}>
                    <Player snapCounts = {player} teamData = {playerTeamData}
                    updatePlayerData = {this.props.updatePlayerData}
                    originalPlayer = {originalSnaps}
                    deletePlayer = {this.props.deletePlayer}
                    fullUpdatePlayerData = {this.props.fullUpdatePlayerData}
                    currentSnapCounts = {player}
                    addToCompare = {this.props.addToCompare}
                    />
        </div>
                )
            }
            else if (this.props.positions === 'FLEX') {
                if (player.Pos == 'WR' || player.Pos == 'RB' || player.Pos == 'TE') {
                    return(
                        <div className = 'col m3 s12 playerSummary' key={player.Player}>
                            <Player snapCounts = {player} teamData = {playerTeamData}
                            updatePlayerData = {this.props.updatePlayerData}
                            originalPlayer = {originalSnaps}
                            deletePlayer = {this.props.deletePlayer}
                            fullUpdatePlayerData = {this.props.fullUpdatePlayerData}
                            currentSnapCounts = {player}
                            addToCompare = {this.props.addToCompare}
                            />
                            </div>
                        
                    )
                }
            }
            else {
                if (player.Pos === this.props.positions) {
                return(
                    <div className = 'col m3 s12 playerSummary' key={player.Player}>
                        <Player snapCounts = {player} teamData = {playerTeamData}
                        updatePlayerData = {this.props.updatePlayerData}
                        originalPlayer = {originalSnaps}
                        deletePlayer = {this.props.deletePlayer}
                        fullUpdatePlayerData = {this.props.fullUpdatePlayerData}
                        currentSnapCounts = {player}
                        addToCompare = {this.props.addToCompare}
                        />
                         </div>
                    )
                }
            }
            })}
        </div>
                        
                    )
                }
            }
export default Players



// if (this.props.positions === 'ALL') {
//     return( <Player snapCounts = {player} teamData = {playerTeamData}
//     updatePlayerData = {this.props.updatePlayerData}
//     originalPlayer = {originalSnaps}
//     />
//     )
// }
// else if (this.props.positions === 'FLEX') {
//     if (player.Pos == 'WR' || player.Pos == 'RB' || player.Pos == 'TE') {
//         return(
            
//                 <Player snapCounts = {player} teamData = {playerTeamData}
//                 updatePlayerData = {this.props.updatePlayerData}
//                 originalPlayer = {originalSnaps}
//                 />
                
            
//         )
//         }
// }
// else {
//     if (player.Pos === this.props.positions) {
//     return(
        
//             <Player snapCounts = {player} teamData = {playerTeamData}
//             updatePlayerData = {this.props.updatePlayerData}
//             originalPlayer = {originalSnaps}
//             />
            
        
//     )
//     }
// }