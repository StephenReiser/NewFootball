import React, { Component } from 'react'
import Input from '../Input'
import PlayerCardSummary from './PlayerCardSummary'
import PlayerCardDetails from './PlayerCardDetails'
import PlayerChart from '../Chart';
import LazyLoad from 'react-lazyload';
import ChartOptionTwo from '../ChartOptionTwo'


class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            snapPercent: 0,
            snapPerRoute: 0,
            tgtPerRoute: 0,
            catchPerc: 0,
            rushPerc: 0,
            recTdPerc: 0,
            rushTdPerc: 0,
            projPts: 0,
            details: false,
            numberFirePots: 0
        }
        this.showDetails = this.showDetails.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.undoButton = this.undoButton.bind(this)
        
    }

    componentDidMount() {
        this.setState({
            snapPercent: this.props.snapCounts.SnapPercent,
            snapPerRoute: this.props.snapCounts.SnapPerRoute,
            tgtPerRoute: this.props.snapCounts.TgtPerRoute,
            catchPerc: this.props.snapCounts.CatchPerc,
            rushPerc: this.props.snapCounts.RushPercent,
            recTdPerc: this.props.snapCounts.RecTDPerc,
            rushTdPerc: this.props.snapCounts.RushTdPerc,
            originalPlayerData: this.props.snapCounts,
            numberFirePots: this.props.snapCounts.numberFirePots
        })

// console.log('mounting comopnent')
        // THIS HAS GOT TO BE BAD - BUT IT IS SETTING THE POINTS ONCE WE LOAD THE DATA - ALSO ROUNDING IS SLIGHTLY DIFFERENT THAN WHAT IM CALCULATING BELOW
        const catches = ((Number(this.props.snapCounts.SnapPercent) * Number(this.props.teamData.Snaps) / 100) * Number(this.props.snapCounts.SnapPerRoute) * Number(this.props.snapCounts.TgtPerRoute) * Number(this.props.snapCounts.CatchPerc))
        
        const receivingYards =  Number(this.props.snapCounts.YPRR) * Number(this.props.teamData.PassEff) * (Number(this.props.snapCounts.SnapPercent) * Number(this.props.teamData.Snaps) / 100) * Number(this.props.snapCounts.SnapPerRoute)

        const rushingPoints = (Number(this.props.snapCounts.SnapPercent) * Number(this.props.teamData.Snaps) / 100) * Number(this.props.snapCounts.RushPercent) / 100 * Number(this.props.teamData.RushEff) * Number(this.props.snapCounts.YPC)

        const rushTD = Number(this.props.snapCounts.RushTdPerc) * Number(this.props.teamData.ExpectedTd) * Number(this.props.teamData.RushTdPerc)

        const passTD = Number(this.props.snapCounts.RecTDPerc) * Number(this.props.teamData.ExpectedTd) * Number(this.props.teamData.PassTdPerc)
        // console.log(passingPoints, rushingPoints, rushTD, passTD)
        // console.log((Number(this.props.snapCounts.SnapPercent) * Number(this.props.teamData.Snaps) / 100 ), Number(this.props.snapCounts.SnapPerRoute) , Number(this.props.snapCounts.TgtPerRoute) , Number(this.props.snapCounts.CatchPerc) , Number(this.props.snapCounts.YPRR) , Number(this.props.teamData.PassEff))
        
        const points = (catches + (receivingYards + rushingPoints) / 10 + (rushTD + passTD) * 6).toFixed(1)

        // console.log('points:', points)
        
        // console.log(points)
        const value = (points/(Number(this.props.snapCounts.DKSalary)/1000)).toFixed(1)
        // console.log('value', this.props.snapCounts.DKSalary)

        
        const newPlayer = this.props.snapCounts
        newPlayer.ProjPts = points
        newPlayer.DKValue = value
        this.props.updatePlayerData(newPlayer)
        
        
        
    }

    componentWillReceiveProps(props) {
        // console.log('receiving props')
    // console.log(props)
    this.setState({
        snapPercent: props.snapCounts.SnapPercent,
        snapPerRoute: props.snapCounts.SnapPerRoute,
        tgtPerRoute: props.snapCounts.TgtPerRoute,
        catchPerc: props.snapCounts.CatchPerc,
        rushPerc: props.snapCounts.RushPercent,
        recTdPerc: props.snapCounts.RecTDPerc,
        rushTdPerc: props.snapCounts.RushTdPerc,
        numberFirePots: props.snapCounts.numberFirePots

    })
} 
    


    handleSubmit() {
        //   event.preventDefault()
        
        const catches = ((Number(this.state.snapPercent) * Number(this.props.teamData.Snaps) / 100) * Number(this.state.snapPerRoute) * Number(this.state.tgtPerRoute) * Number(this.state.catchPerc))
        
        const receivingYards =  Number(this.props.snapCounts.YPRR) * Number(this.props.teamData.PassEff) * (Number(this.state.snapPercent) * Number(this.props.teamData.Snaps) / 100) * Number(this.state.snapPerRoute)

        const rushingPoints = (Number(this.state.snapPercent) * Number(this.props.teamData.Snaps) / 100) * Number(this.state.rushPerc) / 100 * Number(this.props.teamData.RushEff) * Number(this.props.snapCounts.YPC)

        const rushTD = Number(this.state.rushTdPerc) * Number(this.props.teamData.ExpectedTd) * Number(this.props.teamData.RushTdPerc)

        const passTD = Number(this.state.recTdPerc) * Number(this.props.teamData.ExpectedTd) * Number(this.props.teamData.PassTdPerc)

        const points = (catches + (receivingYards + rushingPoints) / 10 + (rushTD + passTD) * 6).toFixed(1)
        const value = (points/(Number(this.props.snapCounts.DKSalary)/1000)).toFixed(1)
        
        // const oldPlayer = this.props.snapCounts
        let newPlayer = this.props.snapCounts
        newPlayer.SnapPercent = this.state.snapPercent
        newPlayer.SnapPerRoute = this.state.snapPerRoute
        newPlayer.TgtPerRoute = this.state.tgtPerRoute
        newPlayer.CatchPerc = this.state.catchPerc
        newPlayer.RushPercent = this.state.rushPerc
        newPlayer.RecTDPerc = this.state.recTdPerc
        newPlayer.RushTdPerc = this.state.rushTdPerc
        newPlayer.ProjPts = points
        newPlayer.DKValue = value
        // console.log(newPlayer)
        this.props.fullUpdatePlayerData(newPlayer)

        }
    showDetails () {
        this.setState({
            details: !this.state.details
        })
    }

    undoButton() {
        this.setState({
            snapPercent: this.props.originalPlayer.SnapPercent,
            snapPerRoute: this.props.originalPlayer.SnapPerRoute,
            tgtPerRoute: this.props.originalPlayer.TgtPerRoute,
            catchPerc: this.props.originalPlayer.CatchPerc,
            rushPerc: this.props.originalPlayer.RushPercent,
            recTdPerc: this.props.originalPlayer.RecTDPerc,
            rushTdPerc: this.props.originalPlayer.RushTdPerc
        })
        this.props.updatePlayerData(this.props.originalPlayer)
    }
    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
      }

    //   can I make handle change constantly update our state???

    


      
    render() {
        
            
            
            
        const snaps = (this.props.teamData.Snaps * this.state.snapPercent / 100 )
        const routes = (this.state.snapPerRoute * snaps)
        const targets = (this.state.tgtPerRoute * routes).toFixed(1)
        const catches = (this.state.catchPerc * targets).toFixed(1)
        const recYards = (this.props.snapCounts.YPRR * routes * this.props.teamData.PassEff).toFixed(1)
        const rushYards = (this.state.rushPerc * snaps * this.props.snapCounts.YPC / 100 * this.props.teamData.RushEff).toFixed(1)
        const rushTD = (this.state.rushTdPerc * this.props.teamData.ExpectedTd * this.props.teamData.RushTdPerc).toFixed(1)
        const passTD = (this.state.recTdPerc * this.props.teamData.ExpectedTd * this.props.teamData.PassTdPerc).toFixed(1)
        const totalTD = (Number(rushTD) + Number(passTD)).toFixed(1)
        const projPts = (Number(totalTD) * 6 + Number(catches) + (Number(recYards) + Number(rushYards)) / 10).toFixed(1)


        // NEED TO UPDATE ALL THIS SHIT WITH THIS.STATE
        // NEED TO UPDATE ALL THIS SHIT WITH THIS.STATE
        // NEED TO UPDATE ALL THIS SHIT WITH THIS.STATE
        // NEED TO UPDATE ALL THIS SHIT WITH THIS.STATE


        return(

            // So snap% then hardcoded snap # (calculated)
            // routes/% then hardcoded route # (calculated)
            // Target/Route then hard coded target #(calculated)
            // Catch %
            // TD Equity
            // Rush Equity
            // Calculated Targets/catches/yards/TD
            // Calculated points
            // <tr>
                
            //     <td>{this.props.snapCounts.Player}</td>
            //     <td>{this.props.snapCounts.Pos}</td>
            //     <td >
            //         <Input 
            //             name={'snapPercent'}
            //             id={'snapPercent'}
            //             handleChange={this.handleChange}
            //             value={this.state.snapPercent}
            //         />
            //     </td>
            //     <td >{snaps}</td>
            //     <td >
            //         <Input 
            //             name={'snapPerRoute'}
            //             id={'snapPerRoute'}
            //             handleChange={this.handleChange}
            //             value={this.state.snapPerRoute}
            //         />
            //     </td>
            //     <td >{routes}</td>
            //     <td >
            //         <Input 
            //             name={'tgtPerRoute'}
            //             id={'tgtPerRoute'}
            //             handleChange={this.handleChange}
            //             value={this.state.tgtPerRoute}
            //         />
            //         </td>
            //     <td >
            //         <Input 
            //             name={'catchPerc'}
            //             id={'catchPerc'}
            //             handleChange={this.handleChange}
            //             value={this.state.catchPerc}
            //         />
            //     </td>
            //     {/* <td >{this.props.snapCounts.YPRR}</td>
            //     <td >{this.props.snapCounts.YPC}</td> */}
            //     <td >
            //         <Input 
            //             name={'rushPerc'}
            //             id={'rushPerc'}
            //             handleChange={this.handleChange}
            //             value={this.state.rushPerc}
            //         />
            //     </td>
            //     <td >
            //         <Input 
            //             name={'recTdPerc'}
            //             id={'recTdPerc'}
            //             handleChange={this.handleChange}
            //             value={this.state.recTdPerc}
            //         />
            //     </td>
            //     <td>
            //         <Input 
            //             name={'rushTdPerc'}
            //             id={'rushTdPerc'}
            //             handleChange={this.handleChange}
            //             value={this.state.rushTdPerc}
            //         />
            //     </td>
            //     <td>{targets}</td>
            //     <td>{catches}</td>
            //     <td>{recYards}</td>
            //     <td>{rushYards}</td>
            //     <td>{totalTD}</td>
            //     <td>{projPts}</td>
            //     <td>{this.props.snapCounts.DKSalary === 'notonslate' ? 'NO' : this.props.snapCounts.DKSalary}</td>
            //     <td>{this.props.snapCounts.BottomTwentyFive}</td>
            //     <td>{this.props.snapCounts.TopTwentyFive}</td>
            //     <td><button onClick = {() => this.undoButton()}>Undo</button></td>
                
            // </tr>
            // <div className = 'col m3 s12 playerSummary' key={this.props.snapCounts.Player}>
            <>
            <>
{this.state.details ?
     <PlayerCardDetails 
     handleChange = {this.handleChange}
     snapPercent = {this.state.snapPercent}
     snapPerRoute = {this.state.snapPerRoute}
     tgtPerRoute = {this.state.tgtPerRoute}
     catchPerc = {this.state.catchPerc}
     rushPerc = {this.state.rushPerc}
     recTdPerc = {this.state.recTdPerc}
     rushTdPerc = {this.state.rushTdPerc}
     name = {this.props.snapCounts.Player}
     pos = {this.props.snapCounts.Pos}
     projPts = {projPts}
     bottomTwentyFive = {this.props.snapCounts.BottomTwentyFive}
     topTwentyFive = {this.props.snapCounts.TopTwentyFive}

     /> 
: 
    <PlayerCardSummary 
        name = {this.props.snapCounts.Player}
        pos = {this.props.snapCounts.Pos}
        targets = {targets}
        catches = {catches}
        recYards = {recYards}
        rushYards = {rushYards}
        totalTD = {totalTD}
        projPts = {projPts}
        dkSalary = {this.props.snapCounts.DKSalary === '0' ? '0' : this.props.snapCounts.DKSalary}
        dkValue = {this.props.snapCounts.DKSalary === '0' ? '0' : this.props.snapCounts.DKValue}
        bottomTwentyFive = {this.props.snapCounts.BottomTwentyFive}
        topTwentyFive = {this.props.snapCounts.TopTwentyFive}
        handleChange = {this.handleChange}
    />
}

</>
 <LazyLoad once={true}>
     <PlayerChart
         projPts = {projPts}
         minScore = {this.props.snapCounts.BottomTwentyFive}
        maxScore = {this.props.snapCounts.TopTwentyFive}
        numberFirePots = {this.props.snapCounts.numberFirePots}/>
      </LazyLoad>

      {/* <LazyLoad offset={100} once={false}>
    <ChartOptionTwo
         projPts = {projPts}
         minScore = {this.props.snapCounts.BottomTwentyFive}
        maxScore = {this.props.snapCounts.TopTwentyFive}/>
      </LazyLoad> */}
{/* // {this.state.details ? 
//         <PlayerChart
//          projPts = {projPts}
//          minScore = {this.props.snapCounts.BottomTwentyFive}
//         maxScore = {this.props.snapCounts.TopTwentyFive}/>
//         : null } */}
        <button onClick = {() => this.showDetails()}>{this.state.details ? "Player Summary" : "Player Details"}</button>
        <button onClick = {() => this.undoButton()}>Undo</button>
        <button onClick = {() => this.handleSubmit()}>Save</button>
        <button onClick = {() => this.props.deletePlayer(this.props.snapCounts.Player)}>Delete Player</button>
        
        {/* // </div> */}
        </>
        )
    }
}

export default Player 




