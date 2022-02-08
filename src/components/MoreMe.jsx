import React from 'react';
import BackgroundPic from '../images/BackgroundPic.JPG'
import AniButton from './AniButton';

function MoreMe() {
    return <div className='container more-me'
    >
        <img src={BackgroundPic} alt="my pic" className='card-img-top' />
        <h4>It's very nice to meet you!</h4>
        <p>
            I'm a fourth year Computer Science and Economics major at USC. You can find me hanging out in Los Angeles, CA, unless I'm in Busan, Korea for a short break.
        </p>
        <p>
            I am a risk taker and an adventurer. I was originally a Economics and Accounting major at UCSB. After getting into the major, I went to the Korean military. There, I found my passion for building software to increase efficency. I came back and transferred to USC so that I could at least attempt to take CS courses.
        </p>
        <p>
            My junior year was spent fighting for my chances to get into the CS major at USC. It was a big risk. If I did not make it, I would waste a whole year of college, which I am already behind in due to my service. When I decide to take on an adventure, I commit 100% and make it happen. 
        </p>
        <p>
            My serious passion for development lies in Full Stack development. I love that I can build something to benefit the people around me.
        </p>
        <AniButton></AniButton>
    </div>;
}

export default MoreMe;
