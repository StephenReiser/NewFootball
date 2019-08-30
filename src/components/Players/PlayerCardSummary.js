import React, { Component } from 'react'
import Input from '../Input'

class PlayerCardSummary extends Component {
    render() {
        return(
            <>
                <h5 className = 'playerHeader'>{this.props.name} ({this.props.pos})</h5>
                <h5 className = 'playerSalary'>{this.props.dkSalary}</h5>
                <h5 className = 'playerPts'>Proj Pts: {this.props.projPts}</h5>
                <div>Targets: {this.props.targets}</div>
                <div>Catches: {this.props.catches}</div>
                <div>recYards: {this.props.recYards}</div>
                <div>rushYards: {this.props.rushYards}</div>
                <div>totalTD: {this.props.totalTD}</div>
                
                <div>Bottom Range: {this.props.bottomTwentyFive}</div>
                <div>Top Range: {this.props.topTwentyFive}</div>
                
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