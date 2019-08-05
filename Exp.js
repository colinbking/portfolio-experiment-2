import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText, CardMenu, IconButton } from 'react-mdl';


export class Exp extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0 };

    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style = {{color: '#fff', height: '200px', background: '#fff'}}>
                        Experience</CardTitle>
                        <CardText>
                            Dope Stuff
                        </CardText>
                        <CardActions border>
                            <Button colored>Thing1</Button>
                        </CardActions>
                        <CardMenu style = {{color: '#fff'}}>
                            <IconButton name = "share" />
                        </CardMenu>
                </Card>

                // <div><h1>This is Thing0</h1></div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>Thing 1</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>Thing 2 </h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div><h1>Thing 3</h1></div>
            )
        } else if(this.state.activeTab === 4) {
            return(
                <div><h1>Thing 4</h1></div>
            )
        }
    }
    render() {
        return (
            <div className = "category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Thing 0</Tab>
                    <Tab>Thing 1</Tab>
                    <Tab>Thing 2</Tab>
                    <Tab>Thing 3</Tab>
                    <Tab>Thing 4</Tab>
                </Tabs>

                <section className = "projects-grid">
                    {this.toggleCategories()}
                </section>
            
            </div>
        )
    }
}

export default Exp
