import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startDate} - {this.props.endDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '8px',}}>{this.props.company}</h4>
                    <ul>
                        <li>
                            Identifying and solving bugs and fixing errors in the existing web
                            application called "Selfcomply".
                        </li>
                        <li>Research and Implementation of new tools and plug-ins for the software</li>
                        <li>Improving the performance of the system</li>
                        <li>Building new modules and re-building existing modules from scratch</li>
                        <li>Quality code writing and peer code reviewing</li>
                        <li>Web Application Development using MVC architecture</li>

                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Experience