import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { Button } from 'react-mdl';
import MyResume from './trisha-bernice-resume.pdf'

class LandingPage extends Component{
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className="landingpage-grid">
                    <Cell col = {12}></Cell>
                        <div className="intro-text">
                            <h3 className="typewriter">Hey, I'm Trisha</h3>
                            <h4 className="my-font">and I CODE</h4>
                            <a href="https://trishabernice.github.io/trishas-portfolio/" rel="noopener noreferrer" target="_blank">
                                <button className="button-type" >Go to my NEW web app portfolio</button>
                            </a>
                            <p className="my-font">* Mobile Optimized version coming soon *</p>
                        </div>
                        
                </Grid>
            </div>
        );
    }
}
export default LandingPage;
