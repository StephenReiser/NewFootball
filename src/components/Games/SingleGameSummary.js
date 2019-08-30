import React, { Component } from 'react'
import Input from '../Input'


class SingleGameSummary extends Component {

    render() {
        return(
            <>
                <div className = 'row'>
                    <div className = 'col s3'>
                        <h5 className = 'gameHeader'>Team</h5>
                    </div>
                    <div className = 'col s2'>
                        <h5 className = 'gameHeader'>Score</h5>
                    </div>
                    <div className = 'col s2'>
                        <h5 className = 'gameHeader'>Snaps</h5>
                    </div>
                </div>
                <div className = 'row'> 
                    <div className = 'col s3'>{this.props.Home}
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
                </div>
                <div className = 'row'> 
                    <div className = 'col s3'>{this.props.Away}
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
                </div>
                                    
            </>
        )
    }
}
export default SingleGameSummary