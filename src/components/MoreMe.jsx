
// create a slide show of images
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class MoreMe extends Component {
    render() {
        return (
        <div className="row more-me">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../assets/nnPic.jpeg")}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Machine Learning</h3>
                <p>
                    I interned at Knowre as a Machine Learning Engineering Intern for the Summer of 2022. 
                </p>
                <p>
                    I worked on a project that used machine learning to predict students' performance on a topic based 
                    on their previous interactions with the topic. This is also known as a "Knowledge Tracing" problem.
                </p>
                <p>
                    I worked with PyTorch and the Transformer model. 
                    I was able to to successfully increase the neural network model's binary accuracy by over 2% 
                    which makes the model's accuracy 6.8% higher than the current state of the art model for knowledge tracing
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../assets/mobile-app-development-for-startup-owners.jpeg")}
                alt="Second slide"
                />
    
                <Carousel.Caption>
                <h3>App (Mobiile and Web) Dev</h3>
                <p>I am always working on building different web and mobile applications.</p>
                <p>My skills are: React, React Native, Android Studio, Node.js, Express, MySql, PHP, and Firebase</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../assets/giphy4.gif")}
                alt="Third slide"
                />
    
                <Carousel.Caption>
                <h3>Everyday Efficiency</h3>
                <p>
                    I love building software because it helps us increase efficiency in work we do everyday. 
                </p>
                <p>
                    I am always looking for ways to make my life easier and I love to share my findings with others.
                </p>
                <p>
                    This is actually why I got into software engineering!
                </p>
                <p>
                    For my most recent findings, I automated matching process for random coffee chats in my 
                    organization by implementing a modified version of the Gale-Shapley algorithm. 
                    You can check it out on my github and use it if you'd like! 
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
        );
    }
    }

export default MoreMe;