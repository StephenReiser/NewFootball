import React, { Component } from 'react'

import Input from './Input'

class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
            homescore: 0,
            homeSnaps: 0,
            homeRushEff: 0,
            homePassEff: 0,
            homeRushTdPerc: 0,
            homePassTdPerc: 0,
            awayscore: 0,
            awaySnaps: 0,
            awayRushEff: 0,
            awayPassEff: 0,
            awayRushTdPerc: 0,
            awayPassTdPerc: 0

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        // console.log(this.props.gameInfo)
        // console.log(this.props.home)
        this.setState({
            homescore: this.props.gameInfo.HomeScore,
            homeSnaps: this.props.gameInfo.HomeSnaps,
            homeRushEff: this.props.home.RushEff,
            homePassEff: this.props.home.PassEff,
            homeRushTdPerc: this.props.home.RushTdPerc,
            homePassTdPerc: this.props.home.PassTdPerc,
            awayscore: this.props.gameInfo.AwayScore,
            awaySnaps: this.props.gameInfo.AwaySnaps,
            awayRushEff: this.props.away.RushEff,
            awayPassEff: this.props.away.PassEff,
            awayRushTdPerc: this.props.away.RushTdPerc,
            awayPassTdPerc: this.props.away.PassTdPerc,




        })
    }



    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
      }

      handleSubmit (event) {
        
        event.preventDefault()

        const home = this.props.home
        const away = this.props.away

        const fullGame = this.props.gameInfo

        fullGame.HomeScore = this.state.homescore
        fullGame.HomeSnaps = this.state.homeSnaps
        fullGame.AwayScore = this.state.awayscore
        fullGame.AwaySnaps = this.state.awaySnaps

        home.Score = this.state.homescore
        home.RushEff = this.state.homeRushEff
        home.PassEff = this.state.homePassEff
        home.RushTdPerc = this.state.homeRushTdPerc
        home.PassTdPerc = this.state.homePassTdPerc
        home.PassEff = this.state.homePassEff
        home.ExpectedTd = (this.state.homescore * .7 / 7).toFixed(2)
        home.Snaps = this.state.homeSnaps

        away.Score = this.state.awayscore
        away.RushEff = this.state.awayRushEff
        away.PassEff = this.state.awayPassEff
        away.RushTdPerc = this.state.awayRushTdPerc
        away.PassTdPerc = this.state.awayPassTdPerc
        away.ExpectedTd = (this.state.awayscore * .7 / 7).toFixed(2)
        away.Snaps = this.state.awaySnaps

        this.props.updateTeamData(fullGame, home, away)
        console.log(fullGame, home, away)
      }
    render() {
    return(
        // Everything here should be put into a 'form' so I can send on submit
        <form onSubmit = {this.handleSubmit}>
            <div className = 'gameBox row'>
                <div className = 'col s9'>
                <div className = 'row'>
                    <div className = 'col s2'>{this.props.gameInfo.Home}</div>
                    <div className = 'col s1'>
                        <Input 
                            name={'homescore'}
                            id={'homescore'}
                            handleChange={this.handleChange}
                            value={this.state.homescore}
                        />
                        
                    </div>
                    <div className = 'col s1'>
                        
                        <Input 
                            name={'homeSnaps'}
                            id={'homeSnaps'}
                            handleChange={this.handleChange}
                            value={this.state.homeSnaps}
                        />
                    </div>
                    <div className = 'col s1'>
                    
                        <Input 
                            name={'homeRushEff'}
                            id={'homeRushEff'}
                            handleChange={this.handleChange}
                            value={this.state.homeRushEff}
                        />
                    </div>
                    <div className = 'col s1'>
                    
                        <Input 
                            name={'homePassEff'}
                            id={'homePassEff'}
                            handleChange={this.handleChange}
                            value={this.state.homePassEff}
                        />
                    </div>
                    <div className = 'col s1'>
                    
                        <Input 
                            name={'homeRushTdPerc'}
                            id={'homeRushTdPerc'}
                            handleChange={this.handleChange}
                            value={this.state.homeRushTdPerc}
                        />
                    </div>
                    <div className = 'col s1'>
                        
                        <Input 
                            name={'homePassTdPerc'}
                            id={'homePassTdPerc'}
                            handleChange={this.handleChange}
                            value={this.state.homePassTdPerc}
                        />
                    </div>
                </div>
                <div className = 'row'>
                    <div className = 'col s2'>{this.props.gameInfo.Away}</div>
                    <div className = 'col s1'>
                        
                        <Input 
                            name={'awayscore'}
                            id={'awayscore'}
                            handleChange={this.handleChange}
                            value={this.state.awayscore}
                        />
                        </div>
                    <div className = 'col s1'>
                        <Input 
                            name={'awaySnaps'}
                            id={'awaySnaps'}
                            handleChange={this.handleChange}
                            value={this.state.awaySnaps}
                        />
                    </div>
                    <div className = 'col s1'>
                        <Input 
                            name={'awayRushEff'}
                            id={'awayRushEff'}
                            handleChange={this.handleChange}
                            value={this.state.awayRushEff}
                        />
                    </div>
                    <div className = 'col s1'>
                         
                        <Input 
                            name={'awayPassEff'}
                            id={'awayPassEff'}
                            handleChange={this.handleChange}
                            value={this.state.awayPassEff}
                        />
                    </div>
                    <div className = 'col s1'>
                        <Input 
                            name={'awayRushTdPerc'}
                            id={'awayRushTdPerc'}
                            handleChange={this.handleChange}
                            value={this.state.awayRushTdPerc}
                        />
                        </div>
                    <div className = 'col s1'>
                        
                        <Input 
                            name={'awayPassTdPerc'}
                            id={'awayPassTdPerc'}
                            handleChange={this.handleChange}
                            value={this.state.awayPassTdPerc}
                        />
                    </div>
                </div>
                </div>
                <div className = 'col s3'>
                    <input type="submit" value="submit team changes" />
                </div>
            </div>
            </form>
        )
    }
}

export default Game