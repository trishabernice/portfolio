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
                            <a href={MyResume} download="Trisha Bernice - Resumé">
                                <button className="button-type" alt="trisha-bernice-resume">Download My Resumé</button>
                            </a>
                            <p className="my-font">* Mobile Optimized version coming soon *</p>
                        </div>
                        
                </Grid>
            </div>
        );
    }
}
export default LandingPage;
