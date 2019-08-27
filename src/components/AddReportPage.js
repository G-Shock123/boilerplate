import React from 'react'
import ReportForm from './ReportForm'
import { startAddReport } from '../actions/reports'
import { connect } from 'react-redux'

export class AddReportPage extends React.Component{
    onSubmit = (report)=>{
        this.props.startAddReport(report)
        this.props.history.push('/')
    }
    render(){
        return(
        <div>
            <div className="page-header">
                <div className = "content-container">
                    <h1 className="page-header__title">
                        New Report
                    
                    </h1>
                
                </div>
            </div>
            <div className = "content-contaner">
                <ReportForm
                    onSubmit={this.onSubmit}
                />
            
            </div>
            
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch =>{
    return{
        startAddReport: (report) => dispatch(startAddReport(report))
    }
})

export default connect(undefined, mapDispatchToProps)(AddReportPage)