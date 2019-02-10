import React, {Component} from 'react'
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl'

class Project extends Component{
    constructor(props){
        super(props)
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '200px', background: 'url("./images/laravelimg.png") center / cover'}}></CardTitle>
                    <CardText style={{color: 'Grey'}}>
                        <b>Selfcomply </b>
                        Lorem Ipsum
                    </CardText>
                </Card>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div>
                    <h1>This is Reactjs</h1>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs 
                    activeTab={this.state.activeTab} 
                    onChange={
                        (tabId) => {
                            this.setState({
                                activeTab:tabId
                            })
                        }
                    }
                    ripple
                >
                    <Tab>PHP Laravel</Tab>
                    <Tab>React</Tab>
                </Tabs>
                
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                            {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Project