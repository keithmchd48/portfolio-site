import React, {Component} from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} className="contact-cols">
                        <h2>Address</h2>
                        <hr />
                        <h5>Naigaon, MH</h5>
                        <iframe style={{width: '75%', height: '55%' , margin: 'auto', paddingTop: '1em', paddingBottom: '10em'}}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17907.341112699985!2d72.82171696655733!3d19.345118367852624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae669c4188c3%3A0x9b1fe4ee4f1d3bbe!2sNaigaon+West%2C+Naigaon%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1549705313141" 
                            frameborder="0" 
                            allowfullscreen
                            title="Map"
                        >
                        </iframe>
                    </Cell>
                    <Cell col={6} className="contact-cols">
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent 
                                        style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}} 
                                    >
                                    <i className="fas fa-phone-square" aria-hidden="true" />
                                        +91 9699134029
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent 
                                        style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}} 
                                    >
                                    <i className="fas fa-envelope" aria-hidden="true" />
                                        keithmchd48@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact