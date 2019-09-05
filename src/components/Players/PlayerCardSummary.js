import React, { Component } from 'react'
import Input from '../Input'

class PlayerCardSummary extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         targets: 0,
    //         catches: 0,
    //         recYards: 0,
    //         rushYards: 0,

            
    //     }
    // }

    // componentDidMount () {
    //     this.setState({

    //     })
    // }
    // componentWillReceiveProps() {

    // }
    render() {
        return(
            <>
                <h5 className = 'playerHeader'>{this.props.name} ({this.props.pos})</h5>
                <h5 className = 'playerSalary'>{this.props.dkSalary}</h5>
                <h5 className = 'playerPts'>Proj Pts: {this.props.projPts} DKValue: {this.props.dkValue}</h5>
                <div className = 'row'>
                <div className = 'col s6'>Target%: {this.props.targetPerc}</div>
                <div className = 'col s6'>Target: {this.props.targets}</div>
                <div className = 'col s6'>Catch: {this.props.catches}</div>
                <div className = 'col s6'>recYds: {this.props.recYards}</div>
                <div className = 'col s6'>RushAtt: {this.props.rushAttempts}</div>
                <div className = 'col s6'>Rush%: {this.props.rushPerc}</div>
                <div className = 'col s6'>rushYds: {this.props.rushYards}</div>
                <div className = 'col s6'>totalTD: {this.props.totalTD}</div>
                
                <div className = 'col s6'>BotRange: {this.props.bottomTwentyFive}</div>
                <div className = 'col s6'>TopRange: {this.props.topTwentyFive}</div>
                </div>
                
            </>
        )
    }
}

export default PlayerCardSummary


// pos = {this.props.snapCounts.Pos}
//             targets = {targets}
//             catches = {catches}
//             recYards = {recYards}
//             rushYards = {rushYards}
//             totalTD = {totalTD}
//             projPts = {projPts}
//             dkSalary = {this.props.snapCounts.DKSalary === 'notonslate' ? 'NO' : this.props.snapCounts.DKSalary}
//             bottomTwentyFive = {this.props.snapCounts.BottomTwentyFive}
//             topTwentyFive = {this.props.snapCounts.TopTwentyFive}