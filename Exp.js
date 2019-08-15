import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
  CardMenu,
  IconButton
} from "react-mdl";

export class Exp extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="container">
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "300px", margin: "1em" }}>
              <CardTitle
                style={{ color: "black", height: "200px", background: "#fff" }}
              >
                Experience00
              </CardTitle>
              <CardText>Dope Stuff</CardText>
              <CardActions border>
                <Button colored>Thing1</Button>
                <Button colored>Github</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/*Project 2*/}
            <Card shadow={5} style={{ minWidth: "300px", margin: "1em" }}>
              <CardTitle
                style={{ color: "#black", height: "200px", background: "#fff" }}
              >
                Experience0
              </CardTitle>
              <CardText>Dope Stuff1</CardText>
              <CardActions border>
                <Button colored>Thing1</Button>
                <Button colored>Github</Button>
              </CardActions>
              <CardMenu style={{ color: "#black" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/*Project 3*/}
            <Card shadow={5} style={{ minWidth: "300px", margin: "1em" }}>
              <CardTitle
                style={{ color: "black", height: "200px", background: "#fff" }}
              >
                Experience1
              </CardTitle>
              <CardText>Dope Stuff2</CardText>
              <CardActions border>
                <Button colored>Thing1</Button>
                <Button colored>Github</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/*Project 4*/}
            <Card shadow={5} style={{ minWidth: "300px", margin: "1em" }}>
              <CardTitle
                style={{ color: "#black", height: "200px", background: "#fff" }}
              >
                Experience2
              </CardTitle>
              <CardText>Dope Stuff3</CardText>
              <CardActions border>
                <Button colored>Thing1</Button>
                <Button colored>Github</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/*Project 5*/}
            <Card shadow={5} style={{ minWidth: "300px", margin: "1em" }}>
              <CardTitle
                style={{ color: "#black", height: "200px", background: "#fff" }}
              >
                Experience3
              </CardTitle>
              <CardText>Dope Stuff4</CardText>
              <CardActions border>
                <Button colored>Thing1</Button>
                <Button colored>Github</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/*Project 5*/}
            <Card shadow={5} style={{ minWidth: "300px", margin: "1em" }}>
              <CardTitle
                style={{ color: "#black", height: "200px", background: "#fff" }}
              >
                Experience3
              </CardTitle>
              <CardText>Dope Stuff4</CardText>
              <CardActions border>
                <Button colored>Thing1</Button>
                <Button colored>Github</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/*Project 5*/}
            <Card shadow={5} style={{ minWidth: "300px", margin: "1em" }}>
              <CardTitle
                style={{ color: "#black", height: "200px", background: "#fff" }}
              >
                Experience3
              </CardTitle>
              <CardText>Dope Stuff4</CardText>
              <CardActions border>
                <Button colored>Thing1</Button>
                <Button colored>Github</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Thing 0</Tab>
          <Tab>Thing 1</Tab>
          <Tab>Thing 2</Tab>
          <Tab>Thing 3</Tab>
          <Tab>Thing 4</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Exp;
