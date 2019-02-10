import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import keithpro from './images/keithpro.png'

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={keithpro}
                            alt="profile pic"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Software Developer</h1>
                            <hr />
                            <p>JavaScript  |  jQuery  |  PHP Laravel  |  MySql  |  HTML/CSS</p>
                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/keith-machado-591a6181/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                {/*Stack Overflow*/}
                                <a href="https://stackoverflow.com/users/10595316/keith-machado" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-stack-overflow" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing