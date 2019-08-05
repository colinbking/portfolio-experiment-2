import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export class Landing extends Component {
    render() {
        return (
            <div style = {{width: '100%' , margin : 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col={12}>
                  
                        <img 
                        className = "main-img"
                        src = "https://cdn.vox-cdn.com/thumbor/o4J8B8ssJI6GCxph8wBcIFdeuTg=/0x0:4584x3056/1520x0/filters:focal(0x0:4584x3056):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8654949/chickfila_spicy_sandwich.jpg"
                        alt = "main-pic"
                        />

                    <div className = "banner-text">
                        <h1>Eat Mor Chikn</h1>

                        <hr/>

                        <p>A good line describing something</p>
                        
                         {/* LinkedIn  */}
                    <div className = "social-links">
                        <a href = "http://google.com"  rel =  "noopener noreferrer" target = "_blank">
                            <i class = "fa fa-linkedin-square" aria-hidden = "true" />
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
