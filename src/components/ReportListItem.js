import React from 'react'
import {Link} from 'react-router-dom'

const ReportListItem =({title,body,author,abuser, id})=>(
   
    <Link className ="list-item" to = {`/edit/${id}`}>

        <h3>{title}</h3>
        
    
    </Link>
)

export default (ReportListItem)