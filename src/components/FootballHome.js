import React, { Component } from 'react'
import snapCounts from '../csv/2018SnapCounts'
import gameSummary from '../csv/2019GameSummary'
import teamSummary from '../csv/2019TeamSummary'

import GameSummary from './Games/GameSummary'
import Players from './Players/Players'




class FootballHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            snapCounts: [],
            // gameInfo: [],
            teamSummary: [],
            positions: 'ALL'
        }
        this.testButton = this.testButton.bind(this)
        this.updateTeamData = this.updateTeamData.bind(this)
        this.loadExternalFiles = this.loadExternalFiles.bind(this)
        this.updatePlayerData = this.updatePlayerData.bind(this)
        this.setPositions = this.setPositions.bind(this)

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
    updatePlayerData (newPlayer) {
        const copyPlayerInfo = [...this.state.snapCounts]
        

        const playerIndex = this.state.snapCounts.findIndex(player => player.Player === newPlayer.Player )

        
        copyPlayerInfo[playerIndex] = newPlayer
        

        this.setState({
            snapCounts: copyPlayerInfo
        })
    }
    testButton () {
        console.log(this.state)
    }

    setPositions (changedPosition) {
        this.setState({
            positions: changedPosition
        })
    }
    render() {
        return(
            <div>
                
                {this.state.gameInfo ? 
                <>
                <GameSummary gameInfo = {this.state.gameInfo} teamSummary = {this.state.teamSummary} updateTeamData = {this.updateTeamData}/>
                <h1>Snap Counts</h1>

                {/* I think plan is to set state to one of these and then filter based on that  */}
                <button>DK Elligible</button>
                <button onClick = {() => this.setPositions('FLEX')}>Flex</button>
                <button onClick = {() => this.setPositions('WR')}>WR</button>
                <button onClick = {() => this.setPositions('RB')}>RB</button>
                <button onClick = {() => this.setPositions('TE')}>TE</button>
                <button onClick = {() => this.setPositions('ALL')}>ALL</button>
                <br />
                <button>Sort Most Points</button>
                <button>Sort Highest Price</button>
            
            <Players snapCounts= {this.state.snapCounts} gameInfo = {this.state.gameInfo} teamSummary = {this.state.teamSummary}
            updatePlayerData = {this.updatePlayerData}
            orignalSnapCounts = {this.state.orignalSnapCounts}
            positions = {this.state.positions}
            />
            {/* <button onClick = {() => this.testButton()}>Test Butotn</button> */}
                 </>
            
                     : null }          
                {/* Conditional to prevent htis from loading with 0 data */}

            
            </div>
        )
    }
}

export default FootballHome