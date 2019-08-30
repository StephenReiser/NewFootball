import React, { Component } from 'react'
import snapCounts from '../csv/2018SnapCounts'
import gameSummary from '../csv/2019GameSummary'
import teamSummary from '../csv/2019TeamSummary'

import GameSummary from './GameSummary'
import Players from './Players'



class FootballHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            snapCounts: [],
            // gameInfo: [],
            teamSummary: []
        }
        this.testButton = this.testButton.bind(this)
        this.updateTeamData = this.updateTeamData.bind(this)
        this.loadExternalFiles = this.loadExternalFiles.bind(this)

    }
    componentDidMount() {
       this.loadExternalFiles()

        
    }
loadExternalFiles () {
    this.setState({
        snapCounts: snapCounts,
        teamSummary: teamSummary,
        gameInfo: gameSummary,
        originalTeamData: teamSummary,
        orignalSnapCounts: snapCounts,
        originalGameInfo: gameSummary
    })
}
    

    updateTeamData (updatedGame, updatedHome, updatedAway) {
        const copyGameInfo = [...this.state.gameInfo]
        const copyTeamSummary = [...this.state.teamSummary]

        const gameIndex = this.state.gameInfo.findIndex(game => game.Home === updatedGame.Home )

        const homeIndex = this.state.teamSummary.findIndex(team => team.Team === updatedHome.Team)

        const awayIndex = this.state.teamSummary.findIndex(team => team.Team === updatedAway.Team)

        copyGameInfo[gameIndex] = updatedGame
        copyTeamSummary[homeIndex] = updatedHome
        copyTeamSummary[awayIndex] = updatedAway

        this.setState({
            gameInfo: copyGameInfo,
            teamSummary: copyTeamSummary
        })

    }
    testButton () {
        console.log(this.state)
    }
    render() {
        return(
            <div>

                {this.state.gameInfo ? 
                <>
                <GameSummary gameInfo = {this.state.gameInfo} teamSummary = {this.state.teamSummary} updateTeamData = {this.updateTeamData}/>
                <h1>Snap Counts</h1>

                {/* I think plan is to set state to one of these and then filter based on that  */}
                <button>Flex</button>
                <button>WR</button>
                <button>RB</button>
                <button>TE</button>
                <button>ALL</button>
            
            <Players snapCounts= {this.state.snapCounts} gameInfo = {this.state.gameInfo} teamSummary = {this.state.teamSummary}/>
            {/* <button onClick = {() => this.testButton()}>Test Butotn</button> */}
                 </>
            
                     : null }          
                {/* Conditional to prevent htis from loading with 0 data */}

            
            </div>
        )
    }
}

export default FootballHome