import React, { Component } from 'react'
import snapCounts from '../csv/2018SnapCounts'
import gameSummary from '../csv/2019GameSummary'
import teamSummary from '../csv/2019TeamSummary'
import { Switch } from 'react-materialize'
import GameSummary from './Games/GameSummary'
import Players from './Players/Players'
import ReactPaginate from 'react-paginate';





class FootballHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerSnapCounts: [],
            // gameInfo: [],
            teamSummary: [],
            positions: 'ALL',
            draftKings: false,
            team: 'ALL',
            active: false,
            fullPlayerList: [],
            offset: 1,
            
        }
        this.testButton = this.testButton.bind(this)
        this.updateTeamData = this.updateTeamData.bind(this)
        this.loadExternalFiles = this.loadExternalFiles.bind(this)
        this.updatePlayerData = this.updatePlayerData.bind(this)
        this.setPositions = this.setPositions.bind(this)
        this.sortProjPoints = this.sortProjPoints.bind(this)
        this.toggleDraftkings = this.toggleDraftkings.bind(this)
        this.sortPriceValue = this.sortPriceValue.bind(this)
        this.deletePlayer = this.deletePlayer.bind(this)
        this.sumPlays = this.sumPlays.bind(this)
        this.filterTeam = this.filterTeam.bind(this)
        this.fullUpdatePlayerData = this.fullUpdatePlayerData.bind(this)
        this.saveData = this.saveData.bind(this)
        this.loadData = this.loadData.bind(this)
        this.resetData = this.resetData.bind(this)
        this.toggleActive = this.toggleActive.bind(this)
        this.calculatePoints = this.calculatePoints.bind(this)
    }
    componentDidMount() {
       this.loadExternalFiles()
       
        
    }
    componentWillReceiveProps(props) {
        console.log('main received props')
    } 
loadExternalFiles () {

    const activePlayerList = snapCounts.filter((originalPlayer) => {
        return originalPlayer.Active === "Active"
        
   })
    this.sumPlays(teamSummary, activePlayerList)
    
    // this.sumPlays(teamSummary, snapCounts)
    this.setState({
        playerSnapCounts: activePlayerList,
        teamSummary: teamSummary,
        gameInfo: gameSummary,
        originalTeamData: teamSummary,
        orignalSnapCounts: activePlayerList,
        originalGameInfo: gameSummary
    })
}
    

    updateTeamData (updatedGame, updatedHome, updatedAway) {
        const copyGameInfo = [...this.state.gameInfo]
        const copyTeamSummary = [...this.state.teamSummary]

        const gameIndex = this.state.gameInfo.findIndex(game => game.Home === updatedGame.Home )

        const homeIndex = this.state.teamSummary.findIndex(team => team.Team === updatedHome.Team)

        const awayIndex = this.state.teamSummary.findIndex(team => team.Team === updatedAway.Team)

        
        const copySnapCounts = [...this.state.playerSnapCounts]

        for (let i = 0; i < copySnapCounts.length; i++) {
            if(copySnapCounts[i].Team === updatedHome.Team) {
                const newSnapCount = copySnapCounts[i]
                this.calculatePoints(copySnapCounts[i], updatedHome)
                console.log(newSnapCount)
                copySnapCounts[i] = newSnapCount
            } else if (copySnapCounts[i].Team === updatedAway.Team) {
                const newSnapCount = copySnapCounts[i]
                this.calculatePoints(copySnapCounts[i], updatedAway)
                console.log(newSnapCount)
                copySnapCounts[i] = newSnapCount
            }
        }
        // console.log('team array', teamArray)

        copyGameInfo[gameIndex] = updatedGame
        copyTeamSummary[homeIndex] = updatedHome
        copyTeamSummary[awayIndex] = updatedAway

        this.setState({
            gameInfo: copyGameInfo,
            teamSummary: copyTeamSummary,
            playerSnapCounts: copySnapCounts
        })

    }
    filterTeam (team) {
        let updatedTeam = team
        if(this.state.team !== 'ALL') {
            updatedTeam = 'ALL'
        }
        this.setState({
            team: updatedTeam
        })
    }

    sumPlays(teamData, playerData) {
        console.log('sumplays playerdata', playerData)
        teamData.forEach(element => {
            element.TotalTeamPassPlays = 0
            element.TotalTeamRushPlays = 0
            playerData.forEach(player => {
                if (player.Team === element.Team) {
                const playerPassPlays = Number((Number(element.Snaps)* Number(player.SnapPercent) / 100 * Number(player.TgtPerRoute)* Number(player.SnapPerRoute)).toFixed(1))
                // console.log(player.Player, playerPassPlays)
                const playerRushPlays =  Number((Number(element.Snaps)* Number(player.SnapPercent) / 100 * Number(player.RushPercent) / 100).toFixed(1))
                element.TotalTeamRushPlays += Number(playerRushPlays.toFixed(1))
                element.TotalTeamPassPlays += Number(playerPassPlays.toFixed(.1))
                }
            })
        // console.log(element)
    });
    }

    fullUpdatePlayerData (newPlayer) {
        
        const copyPlayerInfo = [...this.state.playerSnapCounts]
        const copyTeamSummary = [...this.state.teamSummary]
        // const copyOriginalPlayerInfo = [...this.state.orignalSnapCounts]
        // const oldIndex = this.state.orignalSnapCounts.findIndex(player => player.Player === newPlayer.Player )
        // const oldPlayer = copyOriginalPlayerInfo[oldIndex]
        const teamIndex = this.state.teamSummary.findIndex(team => team.Team === newPlayer.Team)
        

        const playerIndex = this.state.playerSnapCounts.findIndex(player => player.Player === newPlayer.Player )

        
        // console.log(this.state.orignalSnapCounts[3])
        // // calculate points for newPlayer
        // const newPassPoints = Number((Number(copyTeamSummary[teamIndex].Snaps)* Number(newPlayer.SnapPercent) / 100 * Number(newPlayer.TgtPerRoute)* Number(newPlayer.SnapPerRoute)))
        // // console.log(player.Player, playerPassPlays)
        // const newRushPoints =  Number((Number(copyTeamSummary[teamIndex].Snaps)* Number(newPlayer.SnapPercent) / 100 * Number(newPlayer.RushPercent) / 100))

        // // calculate for current numbers
        // const oldPassPoints = Number((Number(copyTeamSummary[teamIndex].Snaps)* Number(oldPlayer.SnapPercent) / 100 * Number(oldPlayer.TgtPerRoute)* Number(oldPlayer.SnapPerRoute)))
        // // console.log(player.Player, playerPassPlays)
        // const oldRushPoints =  Number((Number(copyTeamSummary[teamIndex].Snaps)* Number(oldPlayer.SnapPercent) / 100 * Number(oldPlayer.RushPercent) / 100))


        // console.log(newPassPoints, oldPassPoints)
        // // currentTeam.TotalTeamPassPlays -= 10
        // // currentTeam.TotalTeamPassPlays += 10 
        // // currentTeam.TotalTeamRushPlays -= 10
        // // currentTeam.TotalTeamRushPlays += 50
        // console.log('passpoints',  Number((Number(copyTeamSummary[teamIndex].Snaps)* Number(oldPlayer.SnapPercent) / 100 * Number(oldPlayer.TgtPerRoute)* Number(oldPlayer.SnapPerRoute))))
        // copyTeamSummary[teamIndex].TotalTeamRushPlays += (newPassPoints + newRushPoints - oldPassPoints - oldRushPoints)
        
        copyPlayerInfo[playerIndex] = newPlayer
        this.sumPlays(this.state.teamSummary, copyPlayerInfo)

        this.setState((prevState, props) => {
            return{
            playerSnapCounts: copyPlayerInfo,
            
            }
        })
    }

    calculatePoints(mySnaps,myTeamData) {
        console.log('mySnaps: ', mySnaps, 'myTeamData:', myTeamData)
        const catches = ((Number(mySnaps.SnapPercent) * Number(myTeamData.Snaps) / 100) * Number(mySnaps.SnapPerRoute) * Number(mySnaps.TgtPerRoute) * Number(mySnaps.CatchPerc))
        
        const receivingYards =  Number(mySnaps.YPRR) * Number(myTeamData.PassEff) * (Number(mySnaps.SnapPercent) * Number(myTeamData.Snaps) / 100) * Number(mySnaps.SnapPerRoute)

        const rushingPoints = (Number(mySnaps.SnapPercent) * Number(myTeamData.Snaps) / 100) * Number(mySnaps.RushPercent) / 100 * Number(myTeamData.RushEff) * Number(mySnaps.YPC)

        const rushTD = Number(mySnaps.RushTdPerc) * Number(myTeamData.ExpectedTd) * Number(myTeamData.RushTdPerc)

        const passTD = Number(mySnaps.RecTDPerc) * Number(myTeamData.ExpectedTd) * Number(myTeamData.PassTdPerc)
        // console.log(passingPoints, rushingPoints, rushTD, passTD)
        // console.log((Number(this.props.snapCounts.SnapPercent) * Number(this.props.teamData.Snaps) / 100 ), Number(this.props.snapCounts.SnapPerRoute) , Number(this.props.snapCounts.TgtPerRoute) , Number(this.props.snapCounts.CatchPerc) , Number(this.props.snapCounts.YPRR) , Number(this.props.teamData.PassEff))
        
        const points = (catches + (receivingYards + rushingPoints) / 10 + (rushTD + passTD) * 6).toFixed(1)

        // console.log('points:', points)
        
        // console.log(points)
        const value = (points/(Number(mySnaps.DKSalary)/1000)).toFixed(1)
        // console.log('value', this.props.snapCounts.DKSalary)

        
        const newPlayer = mySnaps
        newPlayer.ProjPts = points
        newPlayer.DKValue = value
        return newPlayer
        // this.props.updatePlayerData(newPlayer)
    }


    updatePlayerData (newPlayer) {
        const copyPlayerInfo = [...this.state.playerSnapCounts]
       

        const playerIndex = this.state.playerSnapCounts.findIndex(player => player.Player === newPlayer.Player )

        copyPlayerInfo[playerIndex] = newPlayer
       
        // console.log('update player ran')

        this.setState({
            playerSnapCounts: copyPlayerInfo,
            
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

    sortPoints () {
        const sortedSnaps = this.state.playerSnapCounts.sort((obj1, obj2) => {
            return obj2.TopTwentyFive - obj1.TopTwentyFive
        })
        this.setState({
            playerSnapCounts: sortedSnaps
        })
    }
    sortProjPoints () {
        const sortedSnaps = this.state.playerSnapCounts.sort((obj1, obj2) => {
            return obj2.ProjPts - obj1.ProjPts
        })
        this.setState({
            playerSnapCounts: sortedSnaps
        })
    }
    toggleDraftkings () {
        this.setState({
            draftKings: !this.state.draftKings
        })
    }

    toggleActive () {

        const activePlayerList = this.state.playerSnapCounts.filter((originalPlayer) => {
            return originalPlayer.Active === "Active"
            
       })
        this.sumPlays(this.state.teamSummary, activePlayerList)
        this.setState({
            active: !this.state.active,
            playerSnapCounts: activePlayerList

        })
    }
    sortPriceValue (option) {
        const sortedSnaps = this.state.playerSnapCounts.sort((obj1, obj2) => {
            return obj2[option] - obj1[option]
        })
        this.setState({
            playerSnapCounts: sortedSnaps
        })
    }

    deletePlayer(playerName) {
        const copyPlayerInfo = [...this.state.playerSnapCounts]
        

        const playerIndex = this.state.playerSnapCounts.findIndex(player => player.Player === playerName )

        copyPlayerInfo.splice(playerIndex,1)
        this.sumPlays(this.state.teamSummary, copyPlayerInfo)
        this.setState({
            playerSnapCounts: copyPlayerInfo
        })
        // console.log(player)

    }
    saveData () {
        localStorage.setItem('snapCounts', JSON.stringify(this.state.playerSnapCounts))
        localStorage.setItem('gameInfo', JSON.stringify(this.state.gameInfo))
        localStorage.setItem('teamSummary', JSON.stringify(this.state.teamSummary))
    }
    resetData() {
        this.loadExternalFiles()
    }
    loadData() {
        console.log('...loading')
        const loadedSnapCounts = JSON.parse(localStorage.getItem('snapCounts'))
        const loadedGameInfo = JSON.parse(localStorage.getItem('gameInfo'))
        const loadedTeamSummary = JSON.parse(localStorage.getItem('teamSummary'))
        // console.log(loadedSnapCounts)
        this.setState({
            playerSnapCounts: loadedSnapCounts,
            teamSummary: loadedTeamSummary,
            gameInfo: loadedGameInfo
        })
    }
    handlePageClick = data => {
        let selected = data.selected;
        console.log(data)
        let offset = Math.ceil(selected + 1);
    
        this.setState({ offset: offset }, () => {
        //   this.loadCommentsFromServer();
        });
      };
    render() {

        const indexOfLastPlayer = this.state.offset * 32;
        const indexOfFirstPlayer = indexOfLastPlayer - 32;
        const currentPlayers = this.state.playerSnapCounts.slice(indexOfFirstPlayer, indexOfLastPlayer);
        return(
            <div>
                <button className = 'btn' onClick = {() => this.saveData()}>Save Data</button>
                <button className = 'btn' onClick = {() => this.resetData()}>Reset Data</button>
                <button className = 'btn' onClick = {() => this.loadData()}>Load Data</button>
                {this.state.gameInfo ? 
                <>
                <GameSummary gameInfo = {this.state.gameInfo} teamSummary = {this.state.teamSummary} updateTeamData = {this.updateTeamData}
                filterTeam = {this.filterTeam}
                team = {this.state.team}/>
                <h1>Snap Counts</h1>

                {/* I think plan is to set state to one of these and then filter based on that  */}
                <label htmlFor="draftKings">
                    Draftkings:
                <Switch offLabel="Off" onLabel="On" id={'draftKings'}
                onChange = {() => this.toggleDraftkings()}/>
                </label>
                <br />
                {/* <label htmlFor="active">
                    Active:
                <Switch offLabel="Off" onLabel="On" id={'active'}
                onChange = {() => this.toggleActive()}/>
                </label> */}
                <button className = 'btn' onClick = {() => this.setPositions('FLEX')}>Flex</button>
                <button className = 'btn' onClick = {() => this.setPositions('WR')}>WR</button>
                <button className = 'btn' onClick = {() => this.setPositions('RB')}>RB</button>
                <button className = 'btn' onClick = {() => this.setPositions('TE')}>TE</button>
                <button className = 'btn' onClick = {() => this.setPositions('ALL')}>ALL</button>
                <hr />
                <button className = 'btn' onClick = {() => this.sortPoints()}>Sort Highest Points</button>
                <button className = 'btn' onClick = {() => this.sortProjPoints()}>Sort Proj Points</button>
                <br />
                {this.state.draftKings ? <>
                
                    <button className = 'btn' onClick = {() => this.sortPriceValue('DKSalary')}>Sort Highest Price</button>
                    <button className = 'btn' onClick = {() => this.sortPriceValue('DKValue')}>Sort Highest Value</button>
                    
                     </> : null}
                
                     <div className="commentBox">
                         <ReactPaginate
                       previousLabel={'previous'}
                       nextLabel={'next'}
                       breakLabel={'...'}
                       breakClassName={'break-me'}
                       pageCount={this.state.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={'pagination'}
                       subContainerClassName={'pages pagination'}
                       activeClassName={'active'}
                     />
            <Players playerSnapCounts= {currentPlayers} gameInfo = {this.state.gameInfo} teamSummary = {this.state.teamSummary}
            updatePlayerData = {this.updatePlayerData}
            orignalSnapCounts = {this.state.orignalSnapCounts}
            positions = {this.state.positions}
            draftKings = {this.state.draftKings}
            deletePlayer = {this.deletePlayer}
            team = {this.state.team}
            fullUpdatePlayerData = {this.fullUpdatePlayerData}
            active = {this.state.active}
            sumPlays = {this.sumPlays}
            />
        </div>
            {/* <button onClick = {() => this.testButton()}>Test Butotn</button> */}
                 </>
            
                     : null }          
                {/* Conditional to prevent htis from loading with 0 data */}

            
            </div>
        )
    }
}

export default FootballHome