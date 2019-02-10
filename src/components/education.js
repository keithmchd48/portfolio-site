import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class Education extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.endDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '8px',}}>{this.props.degree}</h4>
                    <p>{this.props.school}</p>
                    <p>{this.props.grade}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education