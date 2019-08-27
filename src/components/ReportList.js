import React from 'react'
import {connect} from 'react-redux'
import ReportListItem from './ReportListItem'

export const ReportList = (props)=>(

    <div> 
        <div>
        
           {props.reports.map((report)=>(
               <ReportListItem
                   key={report.title}
                   {...report}
               />
            ))}
          
        </div>
    
    </div>
)

const mapStateToProps = (state) =>{
    return{
        reports: state.reports
    }
}

export default connect(mapStateToProps)(ReportList)