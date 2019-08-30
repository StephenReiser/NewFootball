import React, { Component } from 'react'
import Input from './Input'

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
            rushTdPerc: 0
        }
    }

    componentDidMount() {
        this.setState({
            snapPercent: this.props.snapCounts.SnapPercent,
            snapPerRoute: this.props.snapCounts.SnapPerRoute,
            tgtPerRoute: this.props.snapCounts.TgtPerRoute,
            catchPerc: this.props.snapCounts.CatchPerc,
            rushPerc: this.props.snapCounts.RushPercent,
            recTdPerc: this.props.snapCounts.RecTDPerc,
            rushTdPerc: this.props.snapCounts.RushTdPerc
        })
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.undoButton = this.undoButton.bind(this)
        
        
        
       
    }

    undoButton() {
        this.setState({
            snapPercent: this.props.snapCounts.SnapPercent,
            snapPerRoute: this.props.snapCounts.SnapPerRoute,
            tgtPerRoute: this.props.snapCounts.TgtPerRoute,
            catchPerc: this.props.snapCounts.CatchPerc,
            rushPerc: this.props.snapCounts.RushPercent,
            recTdPerc: this.props.snapCounts.RecTDPerc,
            rushTdPerc: this.props.snapCounts.RushTdPerc
        })
    }
    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
      }

      handleSubmit() {
        //   event.preventDefault()
          console.log(this.state)
      }

    render() {
        
            
            
            
        const snaps = (this.props.teamData.Snaps * this.state.snapPercent / 100 ).toFixed(1)
        const routes = (this.state.snapPerRoute * snaps).toFixed(1)
        const targets = (this.state.tgtPerRoute * routes).toFixed(1)
        const catches = (this.state.catchPerc * targets).toFixed(1)
        const recYards = (this.props.snapCounts.YPRR * routes).toFixed(1)
        const rushYards = (this.state.rushPerc * snaps * this.props.snapCounts.YPC / 100).toFixed(1)
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
            <tr>
                
                <td>{this.props.snapCounts.Player}</td>
                <td>{this.props.snapCounts.Pos}</td>
                <td >
                    <Input 
                        name={'snapPercent'}
                        id={'snapPercent'}
                        handleChange={this.handleChange}
                        value={this.state.snapPercent}
                    />
                </td>
                <td >{snaps}</td>
                <td >
                    <Input 
                        name={'snapPerRoute'}
                        id={'snapPerRoute'}
                        handleChange={this.handleChange}
                        value={this.state.snapPerRoute}
                    />
                </td>
                <td >{routes}</td>
                <td >
                    <Input 
                        name={'tgtPerRoute'}
                        id={'tgtPerRoute'}
                        handleChange={this.handleChange}
                        value={this.state.tgtPerRoute}
                    />
                    </td>
                <td >
                    <Input 
                        name={'catchPerc'}
                        id={'catchPerc'}
                        handleChange={this.handleChange}
                        value={this.state.catchPerc}
                    />
                </td>
                {/* <td >{this.props.snapCounts.YPRR}</td>
                <td >{this.props.snapCounts.YPC}</td> */}
                <td >
                    <Input 
                        name={'rushPerc'}
                        id={'rushPerc'}
                        handleChange={this.handleChange}
                        value={this.state.rushPerc}
                    />
                </td>
                <td >
                    <Input 
                        name={'recTdPerc'}
                        id={'recTdPerc'}
                        handleChange={this.handleChange}
                        value={this.state.recTdPerc}
                    />
                </td>
                <td>
                    <Input 
                        name={'rushTdPerc'}
                        id={'rushTdPerc'}
                        handleChange={this.handleChange}
                        value={this.state.rushTdPerc}
                    />
                </td>
                <td>{targets}</td>
                <td>{catches}</td>
                <td>{recYards}</td>
                <td>{rushYards}</td>
                <td>{totalTD}</td>
                <td>{projPts}</td>
                <td><button onClick = {() => this.undoButton()}>Undo</button></td>
                
            </tr>
        )
    }
}

export default Player