import React from 'react'
import {connect} from 'react-redux'
import ReportForm from './ReportForm'
import RemoveModal from './RemoveModal'
import {startRemoveReport,startEditReport} from '../actions/reports'

export class EditReportPage extends React.Component{

    state={
        selectedOption:undefined
    }

    onStartRemove = ()=>{

        this.props.history.push('/')
    }

    onRemove=()=>{
        this.props.startRemoveReport({id:this.props.report.id})
        this.props.history.push('/')
    }

    onSubmit = (report) => {
        this.props.startEditReport(this.props.report.id, report)
        this.props.history.push('/')
    }


    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Report</h1>
                    </div>
                </div>
                    <div className="content-container">


                        <ReportForm
                            report={this.props.report}
                            onSubmit={this.onSubmit}

                        />
                        <button className="button button--secondary "
                            onClick={this.onRemove}


                        > Remove Report </button>
                    </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return{
        startRemoveReport:(id)=>dispatch(startRemoveReport(id)),
        startEditReport:(id,report)=>dispatch(startEditReport(id,report))
    }
}

const mapStateToProps = (state, props) => {
    return {
        report: state.reports.find((report) => report.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReportPage)