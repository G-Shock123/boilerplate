import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import abuserTracker from '../selectors/repeatOffender'

 export class ReportSummary extends React.Component{
     
     
    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="contentcontainer">
                        <div className="page-header__title">
                            United we stand. 0 Reports made. 0 Colloborations

                        </div>
                        <div className="page-header__actions">
                            <Link className="button" to ="/create">Create Report</Link>
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
        )
    }
}

const mapStateToProps=(state) =>{
    return{
       
       
        state:state.reports
    }
}

export default connect(mapStateToProps)(ReportSummary)