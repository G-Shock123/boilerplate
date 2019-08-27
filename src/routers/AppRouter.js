import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage'


import NotFoundPage from '../components/NotFoundPage'

import LogInPage from '../components/LogInPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import AddReportPage from '../components/AddReportPage';
import EditReportPage from '../components/EditReportPage'

export const history = createHistory()

const AppRouter = () =>(

    <Router history ={history}>
    
        <div>
           
            
          
           
            <Switch>
                <PublicRoute exact path="/" component={LogInPage} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path ="/create" component={AddReportPage} />
                <PrivateRoute path ="/edit/:id" component={EditReportPage} />
            
            
                <Route component={NotFoundPage} />

            </Switch>

        </div>





    </Router>
);


export default AppRouter