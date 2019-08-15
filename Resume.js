import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div>
        <h1>Resume</h1>
        <Grid>
          <Cell coll={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Stories%20Images/2015/07%20July/20%20Years%20of%20Cows/Cow%20Mascot%20Costume.jpg"
                alt="avatar"
                style={{ height: "300px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}> Name Heading</h2>
            <h4 style={{ color: "grey" }}> Title</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>paragraph describing me briefly</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5> Address</h5>
            <p> actual address here in full</p>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            Right Side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
