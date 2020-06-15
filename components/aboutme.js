import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import AboutMePic from './comp_images/aboutme-pic.JPG';

class AboutMe extends Component{
    render(){
        return(
            <div>
                <Grid className="aboutme-grid">
                    <Cell col = {7}>
                        <div className="aboutme-text">
                            <h1 className="my-font">About Me</h1>
                            <p>Here is a little bit about me… </p>
                            <p>
                            I recently graduated (May 2020) from University of Wisconsin-Madison with a Bachelor’s of Science degree in Computer Science, along with Certificates in Entrepreneurship and Mathematics. Prior to that, I spent two years in De Anza College, California and there was where I took my first programming class - Introduction to C++. It was really challenging for me, especially in the beginning, but I can honestly say that I am so glad I persevered because the more programming classes I took, the more in love I am with what I study! 
                            </p>
                            <p>
                            I look at programming as an incredible platform for me to express my creativity, and experimenting with new programming languages and technologies gives me that excitement comparable to the one I get when I see a dog walking down the street! I’m always curious and l love to explore, so I like to treat whatever I can as a learning opportunity!
                            </p>
                            <p>Now... things about me that aren’t related to computers and programming. I grew up with three dogs: Robin, Monie and Snoopy, and I love them with all my heart! I really really enjoy food (who doesn’t) and the outdoors, so over the summer, I typically have picnics and go on evening walks every now and then. Oh, and because of my sweet tooth, I bake about once a week, desserts ranging from cheesecakes to mochi muffins.</p>
                            <p>Thank you so much for visiting my website, I truly hope you enjoyed going through it as much as I enjoyed making it!</p>
                        </div>
                    </Cell>
                    <Cell col = {5}>
                        <img src={AboutMePic} height="670px" width="auto"></img>
                    </Cell>
                        
                </Grid>
            </div>
        );
    }
}
export default AboutMe;