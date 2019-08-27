import React from 'react'
import { connect } from 'react-redux'
import abuserTracker from '../selectors/repeatOffender'
import RepeatOffenderItem from './RepeatOffenderItem'

export class RepeatOffenderPage extends React.Component{
    render(){
        return(
            <div>

                {this.props.repeatOffenders.map((repeatOffender)=>(
                    <RepeatOffenderItem 
                        key ={repeatOffender.abuser}
                        {...repeatOffender}
                        />
                ))}
                
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        repeatOffenders: abuserTracker(state.reports, 2),
      
    }
}

export default connect(mapStateToProps)(RepeatOffenderPage)