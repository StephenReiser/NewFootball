import React, { Component } from 'react'
import PlayerChart from '../Chart'
import PlayerCardSummary from './PlayerCardSummary'

class ComparePlayers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerNames: [],
            myPlayerArray: []
        }
    }
    componentDidMount() {
        this.setState({
            playerNames: this.props.compareNames,
            playerSnaps: this.props.playerSnaps,
            teamSummary: this.props.teamSummary,
            gameInfo: this.props.gameInfo
        })
    }
    componentWillReceiveProps(props) {

        let compareArray = []
        
        
            props.compareNames.forEach(name => {
                const gameIndex = props.playerSnaps.findIndex(singlePlayer => singlePlayer.Player === name )
                compareArray.push(props.playerSnaps[gameIndex])
            }

            )
         
        this.setState({
            playerNames: props.compareNames,
            playerSnaps: props.playerSnaps,
            teamSummary: props.teamSummary,
            gameInfo: this.props.gameInfo,
            myPlayerArray: compareArray
        })
    }
    render() {
       
            
        return(
            <div className = 'modalBox'>
                
                {this.state.myPlayerArray.map(name => {
                    const playerTeamData = this.state.teamSummary.find((team) => {
                        return team.Team === name.Team
                    })
                    
                    const snaps = (Number(playerTeamData.Snaps) * Number(name.SnapPercent) / 100 )
                    console.log(name)
                    const routes = (name.SnapPerRoute * snaps)
                    const targets = (name.TgtPerRoute * routes).toFixed(1)
                    console.log(routes,targets)
                    const catches = (name.CatchPerc * targets).toFixed(1)
                    const recYards = (name.YPRR * routes * playerTeamData.PassEff).toFixed(1)
                    const rushYards = (name.RushPercent * snaps * name.YPC / 100 * playerTeamData.RushEff).toFixed(1)
                    const rushTD = (name.RushTdPerc * playerTeamData.ExpectedTd * playerTeamData.RushTdPerc).toFixed(1)
                    const passTD = (name.RecTDPerc * playerTeamData.ExpectedTd * playerTeamData.PassTdPerc).toFixed(1)
                    const totalTD = (Number(rushTD) + Number(passTD)).toFixed(1)
                    const rushAttempts = (name.RushPercent / 100 * snaps * Number(playerTeamData.RushEff)).toFixed(1)
                    const rushPerc = (rushAttempts / Number(playerTeamData.TotalTeamRushPlays) * 100).toFixed(1)
                    const targetPerc = (targets/ Number(playerTeamData.TotalTeamPassPlays) * 100 ).toFixed(1)
                    return(
                        <div className = 'col s4'>
                        
                        <PlayerCardSummary 
                            name = {name.Player}
                            pos = {name.Pos}
                            targets = {targets}
                            catches = {catches}
                            recYards = {recYards}
                            rushYards = {rushYards}
                            totalTD = {totalTD}
                            projPts = {name.ProjPts}
                            dkSalary = {name.DKSalary === '0' ? '0' : name.DKSalary}
                            dkValue = {name.DKSalary === '0' ? '0' : name.DKValue}
                            bottomTwentyFive = {name.BottomTwentyFive}
                            topTwentyFive = {name.TopTwentyFive}
                            rushAttempts = {rushAttempts}
                            rushPerc = {rushPerc}
                            targetPerc = {targetPerc}
                            // handleChange = {this.handleChange}
                        />
                        <PlayerChart
                            projPts = {name.ProjPts}
                            minScore = {name.BottomTwentyFive}
                            maxScore = {name.TopTwentyFive}
                            numberFirePots = {name.numberFirePots}/>
                        </div>
                    )
                })}
            </div>
        )
    }

}
export default ComparePlayers


// <PlayerCardSummary 
// name = {this.props.snapCounts.Player}
// pos = {this.props.snapCounts.Pos}
// targets = {targets}
// catches = {catches}
// recYards = {recYards}
// rushYards = {rushYards}
// totalTD = {totalTD}
// projPts = {projPts}
// dkSalary = {this.props.snapCounts.DKSalary === '0' ? '0' : this.props.snapCounts.DKSalary}
// dkValue = {this.props.snapCounts.DKSalary === '0' ? '0' : this.props.snapCounts.DKValue}
// bottomTwentyFive = {this.props.snapCounts.BottomTwentyFive}
// topTwentyFive = {this.props.snapCounts.TopTwentyFive}
// handleChange = {this.handleChange}
// />



// <PlayerChart
//  projPts = {projPts}
//  minScore = {this.props.snapCounts.BottomTwentyFive}
// maxScore = {this.props.snapCounts.TopTwentyFive}
// numberFirePots = {this.props.snapCounts.numberFirePots}/>
