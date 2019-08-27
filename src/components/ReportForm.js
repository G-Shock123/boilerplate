import React from 'react'
 
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

const now = moment()
export default class ReportForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            title: props.report ? props.report.title: "",
            body: props.report ? props.report.body: "",
            author: props.report ? props.report.author: "",
            createdAt: props.report ? props.report.createdAt: 0,
            error: undefined,
            abuser: props.report ? props.report.abuser: ""

        }
    }

    onAbuserChange = (e) => {
        const abuser = e.target.value
        this.setState(() => ({ abuser }))
    }

    onTitleChange = (e)=>{
        const title = e.target.value
        this.setState(()=>({title}))
    }

    onBodyChange = (e)=>{
        const body = e.target.value
        this.setState(()=>({body}))
    
    }

    onSubmit =(e)=>{
        e.preventDefault()
        this.props.onSubmit({
            title:this.state.title,
            body:this.state.body,
            abuser:this.state.abuser
        })
    }
    render(){
        return(
            <div className = "content-container">
                <form 
                    className="form"
                    onSubmit= {this.onSubmit}
                >
                <input
                    className="text-input"
                    placeholder="title"
                    onChange = {this.onTitleChange}
                    value ={this.state.title}
                >
                </input>
                <input
                    className= "text-input"
                    placeholder="Name of Abuser"
                    onChange = {this.onAbuserChange}
                    value={this.state.abuser}
                    >
                </input>
                
                <textarea
                    className="textarea"
                    placeholder="Tell us what happened"
                    value={this.state.body}
                    onChange={this.onBodyChange}
                
                
                ></textarea>
                
                <button 
                    className="button">save
                </button>
                </form>
            </div>
        )
    }

}
