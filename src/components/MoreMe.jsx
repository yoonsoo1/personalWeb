import React from 'react';
import surf from '../assets/surf.jpg';
import AniButton from './AniButton';
import {Link} from 'react-scroll'

function MoreMe() {
    return (
        <div className="more-me">
            <div className="flex flex-col lg:flex-row justify-center lg:items-start px-8 mt-4 mb-2">
                <div className="lg:flex lg:flex-col text-center lg:text-left lg:mx-16">
                    <img src={surf} alt="" className='my-pic circular-image mb-4 mx-auto'/>
                    <div className="font-bold name-stuff">Yoonsoo Nam</div>
                    <div className="name-stuff mb-4">Research Engineer and Fullstack Developer</div>
                </div>
                

                <div className="text-white text-left">
                    <p>Thank you for coming to visit! I am currently finishing my Masters in CS at USC, following my BS in CS in Aug. 2023. I am getting my accelerated Masters through a Progressive Degree Program which according to its website “enables superior USC undergraduate students to apply undergraduate coursework toward the completion of a USC master’s degree” 😎. </p>
                    <p>I am currently working on Multimodal AI research, with a focus on language grounding. My first paper on video-to-video summarization by grounding visual information with text is an example of what I have been researching (accepted to ICASSP ‘24 🥳). I have also been involved in missing modality research and more researches to come!</p>
                    <p>Apart from research, I have experiences doing full stack development. As a board member of Scope, USC CS club teaching web frameworks, I have also been thoroughly involved in web dev. I think that my award winning hackathon project MAIT (Medical AI Interpreter and Translator) shows my excitement to building applications using AI 🤖.</p>
                    <p>In my free time, I like to surf 🏄, snowboard 🏂, golf ⛳, and weight-lift 🏋️. </p>                
                </div>
            </div>
            <div className="flex justify-center items-center mb-8 space-x-5">
                <Link to="experience-section"
                    spy={true} 
                    smooth={true} 
                    duration={100}
                    delay={100}>
                      <AniButton text="My Experiences?"/>
                </Link>

                <Link to="project-section"
                    spy={true} 
                    smooth={true} 
                    duration={100}
                    delay={100}>
                        <AniButton text="My Projects?"/>
                </Link>
            </div>
        </div>
    );
    
}

export default MoreMe;