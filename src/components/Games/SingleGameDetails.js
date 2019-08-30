import React, { Component } from 'react'
import Input from '../Input'

class SingleGameDetails extends Component {
    render(){
        return(
            <>
                <div className = 'row'>
                    <div className = 'col s3'>
                        <h5 className = 'gameHeader'>Team</h5>
                    </div>
                    <div className = 'col s2'>
                        <h5 className = 'gameHeader'>RushEff</h5>
                    </div>
                    <div className = 'col s2'>
                        <h5 className = 'gameHeader'>PassEff</h5>
                    </div>
                    <div className = 'col s2'>
                        <h5 className = 'gameHeader'>RushTD%</h5>
                    </div>
                    <div className = 'col s2'>
                        <h5 className = 'gameHeader'>PassTd%</h5>
                    </div>
                </div>
                <div className = 'row'> 
                    <div className = 'col s3'>{this.props.Home}
                    </div>
                    <div className = 'col s2'>
                        <Input 
                            name={'homeRushEff'}
                            id={'homeRushEff'}
                            handleChange={this.props.handleChange}
                            value={this.props.homeRushEff}
                        />
                            
                    </div>
                    <div className = 'col s2'>
                            
                        <Input 
                            name={'homePassEff'}
                            id={'homePassEff'}
                            handleChange={this.props.handleChange}
                            value={this.props.homePassEff}
                        />
                    </div>
                    <div className = 'col s2'>
                            
                        <Input 
                            name={'homeRushTdPerc'}
                            id={'homeRushTdPerc'}
                            handleChange={this.props.handleChange}
                            value={this.props.homeRushTdPerc}
                        />
                    </div>
                    <div className = 'col s2'>
                            
                        <Input 
                            name={'homePassTdPerc'}
                            id={'homePassTdPerc'}
                            handleChange={this.props.handleChange}
                            value={this.props.homePassTdPerc}
                        />
                    </div>
                </div>
                <div className = 'row'> 
                    <div className = 'col s3'>{this.props.Away}
                    </div>
                    <div className = 'col s2'>
                        <Input 
                            name={'awayRushEff'}
                            id={'awayRushEff'}
                            handleChange={this.props.handleChange}
                            value={this.props.awayRushEff}
                        />
                            
                    </div>
                    <div className = 'col s2'>
                            
                        <Input 
                            name={'awayPassEff'}
                            id={'awayPassEff'}
                            handleChange={this.props.handleChange}
                            value={this.props.awayPassEff}
                        />
                    </div>
                    <div className = 'col s2'>
                            
                        <Input 
                            name={'awayRushTdPerc'}
                            id={'awayRushTdPerc'}
                            handleChange={this.props.handleChange}
                            value={this.props.awayRushTdPerc}
                        />
                    </div>
                    <div className = 'col s2'>
                            
                        <Input 
                            name={'awayPassTdPerc'}
                            id={'awayPassTdPerc'}
                            handleChange={this.props.handleChange}
                            value={this.props.awayPassTdPerc}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default SingleGameDetails