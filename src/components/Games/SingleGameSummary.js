import React, { Component } from 'react'
import Input from '../Input'


class SingleGameSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeTotalPassPerc: 0,
            awayTotalPassPerc: 0,
            homeTotalRushPerc: 0,
            awayTotalRushPerc: 0
        }
    }

    componentWillReceiveProps(props) {
        // console.log(props)
        this.setState({
            homeTotalPassPerc: props.homeTotalPassPerc,
            awayTotalPassPerc: props.awayTotalPassPerc,
            homeTotalRushPerc: props.homeTotalRushPerc,
            awayTotalRushPerc: props.awayTotalRushPerc
        })

    }

    render() {
        return(
            <>
                <div className = 'row'>
                    <div className = 'col s2'>
                        <h5 className = 'gameHeader'>Team</h5>
                    </div>
                    <div className = 'col s2'>
                        <h5 className = 'gameHeader'>Score</h5>
                    </div>
                    <div className = 'col s2'>
                        <h5 className = 'gameHeader'>Snaps</h5>
                    </div>
                    <div className = 'col s2'>
                        <h5 className = 'gameHeader'>CalcP%</h5>
                    </div>
                    <div className = 'col s2'>
                        <h5 className = 'gameHeader'>CalcR%</h5>
                    </div>
                </div>
                <div className = 'row'> 
                    <div className = 'col s2'>{this.props.Home}
                    </div>
                    <div className = 'col s2'>
                            <Input 
                                name={'homescore'}
                                id={'homescore'}
                                handleChange={this.props.handleChange}
                                value={this.props.homescore}
                            />
                            
                    </div>
                    <div className = 'col s2'>
                            
                            <Input 
                                name={'homeSnaps'}
                                id={'homeSnaps'}
                                handleChange={this.props.handleChange}
                                value={this.props.homeSnaps}
                            />
                    </div>
                    <div className = 'col s2'>
                        {(Number(this.state.homeTotalPassPerc) * 100).toFixed(0)}
                    </div>
                    <div className = 'col s2'>
                        {(Number(this.state.homeTotalRushPerc) * 100).toFixed(0)}
                    </div>
                    <div className = 'col s2'>
                            <button onClick = {() => this.props.filterTeam(this.props.Home)}>{this.props.team === 'ALL' ? 'Add' : "Clear"}</button>
                    </div>
                </div>
                <div className = 'row'> 
                    <div className = 'col s2'>{this.props.Away}
                    </div>
                    <div className = 'col s2'>
                            <Input 
                                name={'awayscore'}
                                id={'awayscore'}
                                handleChange={this.props.handleChange}
                                value={this.props.awayscore}
                            />
                    </div>
                    <div className = 'col s2'>
                            <Input 
                                name={'awaySnaps'}
                                id={'awaySnaps'}
                                handleChange={this.props.handleChange}
                                value={this.props.awaySnaps}
                            />
                    </div>
                    <div className = 'col s2'>
                        {(Number(this.state.awayTotalPassPerc) * 100).toFixed(0)}
                    </div>
                    <div className = 'col s2'>
                        {(Number(this.state.awayTotalRushPerc) * 100).toFixed(0)}
                    </div>
                    <div className = 'col s2'>
                            <button onClick = {() => this.props.filterTeam(this.props.Away)}>{this.props.team === 'ALL' ? 'Add' : "Clear"}</button>
                    </div>
                </div>
                                    
            </>
        )
    }
}
export default SingleGameSummary