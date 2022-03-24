import BackgroundPic from '../images/BackgroundPic.jpeg'
import AniButton from './AniButton';
import EngResume from '../resume/Yoonsoo_Nam_Resume.pdf';
import KorResume from '../resume/Yoonsoo_Nam_Resume(Korean).pdf';

function MoreMe() {

    return <div className='container more-me card rounded-0'
    >
        <div className="row g-0">
            <div className="my-pic col-md-5">
                    <img src={BackgroundPic} alt="my pic" />
                </div>
                <div className="more-me-text col-md-7">
                    <h4>Hey there! It's very nice to meet you!</h4>
                    <p>
                        I'm a fourth year Computer Science and Economics major at USC. You can find me hanging out in Los Angeles, CA, unless I'm in Busan, Korea for a short break!
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
                    <div className="resume-btn">
                        <a href= {EngResume} target = "_blank"><AniButton text='My Resume [Eng]'></AniButton></a>
                        <a href= {KorResume} target = "_blank"><AniButton text='My Resume [Kor]'></AniButton></a>
                    </div>
                </div>  
        </div>
    </div>;
}

export default MoreMe;
