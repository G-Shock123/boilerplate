import React from 'react'
import {connect} from 'react-redux'
import {startLogIn} from '../actions/auth'


export const LogInPage = ({startLogIn}) => (
    <div className ="box-layout"> 

      <div className="box-layout__box">
            <h1 className="box-layout__title">Boilerplate</h1>
            <p>Tagline for app</p>
            <button className= "button" onClick={startLogIn}>Login with Google</button>
      </div>
        
    
    </div>
)

const mapDispatchToProps = (dispatch) =>({
    startLogIn: ()=>dispatch(startLogIn())
})

export default connect(undefined,mapDispatchToProps)(LogInPage)