import React, { Component } from 'react'
import Input from '../Input'

class PlayerCardDetails extends Component {
    render() {
        return(
            <div className = 'row'>
                <div className = 'col s12'>
                <h5 className = 'playerHeader'>{this.props.name} ({this.props.pos})</h5>
                <h5 className = 'playerPts'>Proj Pts: {this.props.projPts}</h5>
                </div>
                <div className = 'col s3'>
                    <label for = 'snapPercent'>Snap %
                        <Input 
                            name={'snapPercent'}
                            id={'snapPercent'}
                            handleChange={this.props.handleChange}
                            value={this.props.snapPercent}
                        />
                    </label>
                </div>
                <div className = 'col s3'>
                    <label for = 'snapPerRoute'> S/Rte
                        <Input 
                            name={'snapPerRoute'}
                            id={'snapPerRoute'}
                            handleChange={this.props.handleChange}
                            value={this.props.snapPerRoute}
                        />
                    </label>
                </div>
                <div className = 'col s3'>
                    <label for = 'tgtPerRoute'>Tgt / Rte
                        <Input 
                            name={'tgtPerRoute'}
                            id={'tgtPerRoute'}
                            handleChange={this.props.handleChange}
                            value={this.props.tgtPerRoute}
                        />
                    </label>
                </div>
                <div className = 'col s3'>
                    <label for = 'catchPerc'>Catch %
                        <Input 
                            name={'catchPerc'}
                            id={'catchPerc'}
                            handleChange={this.props.handleChange}
                            value={this.props.catchPerc}
                        />
                    </label>
                </div>
                <div className = 'col s3'>
                    <label for = 'rushPerc'>Rush %
                        <Input 
                            name={'rushPerc'}
                            id={'rushPerc'}
                            handleChange={this.props.handleChange}
                            value={this.props.rushPerc}
                        />
                    </label>
                </div>
                <div className = 'col s3'>
                    <label for = 'recTdPerc'>RecTD %
                        <Input 
                            name={'recTdPerc'}
                            id={'recTdPerc'}
                            handleChange={this.props.handleChange}
                            value={this.props.recTdPerc}
                        />
                    </label>
                </div>
                <div className = 'col s3'>
                    <label for = 'rushTdPerc'>RuTD %
                        <Input 
                            name={'rushTdPerc'}
                            id={'rushTdPerc'}
                            handleChange={this.props.handleChange}
                            value={this.props.rushTdPerc}
                        />
                    </label>
                </div>
             
            </div>
        )
    }
}

export default PlayerCardDetails