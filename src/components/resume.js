import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import Education from './education.js'
import Experience from './experience.js'
import Skills from './skills.js'
import keithpro from './images/keithpro.png'

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid className="resume-background">
                    <Cell col={4} className="resume-left-col">
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={keithpro}
                                alt="portfoliopic"
                                height="200px"
                            />
                        </div>
                        <h2 style={{paddingTop: '0.3em'}}>Keith Machado</h2>
                        <h4 style={{color: 'grey'}}>Software Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
                        <p>Confident programmer with 1 year
                            of experience as a Software
                            Developer, seeking to build a
                            career in the IT industry. Was
                            responsible for improving the
                            performance of a web application
                            in my previous company by
                            researching and implementing new
                            tools and plug-ins as well as
                            writing quality code. Skilled in
                            logic-building, programming with
                            parallel and fast-paced learning
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
                        <h5>Address</h5>
                        <p>JS Noronha Marg, Vadavalli, Vasai(W), 401201</p>
                        <h5>Phone</h5>
                        <p>+91 9699134029</p>
                        <h5>Email</h5>
                        <p>keithmchd48@gmail.com</p>
                    </Cell>
                    <Cell col={8} className='resume-right-col'>
                        <h2>Education</h2>
                        <Education 
                            endDate={'July 2018'}
                            degree={'Master\'s of Computer Applications'}
                            school={'University of Mumbai'}
                            grade={'CGPI: 8.07/10'}
                        />
                        <Education 
                            endDate={'June 2015'}
                            degree={'Bachelor of Sciences (Physics)'}
                            school={'St. Xavier\'s College - Autonomous'}
                            grade={'CGPA: 2.84/4'}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Employment History</h2>
                        <Experience 
                            startDate={'Dec 2017'}
                            endDate={'Jan 2019'}
                            company={'Stelcore Management Services Pvt Ltd'}                            
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill='JavaScript'
                            progress={75}
                        />
                        <Skills 
                            skill='jQuery'
                            progress={73}
                        />
                        <Skills 
                            skill='PHP(Laravel)'
                            progress={70}
                        />
                        <Skills 
                            skill='MySql(SQL)'
                            progress={60}
                        />
                        <Skills 
                            skill='HTML/CSS'
                            progress={58}
                        />
                        <Skills 
                            skill='React'
                            progress={28}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume