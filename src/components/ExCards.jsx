import React, {useState, useEffect} from 'react'
import ExCard from './ExCard'
import USC from '../assets/usc.png'
import Manifest from '../assets/manifest.webp'
import Knowre from '../assets/Knowre.jpg'
import ROKAF from '../assets/rokaf.png'

function ExCards({currTab}) {

    const [currCard, setCurrCard] = useState(0)
    const allCards = {
        2023: [
            <ExCard imageName={"USC"} image={USC} title={"AI Research Engineer"} company={"@ USC"} date={"Jan 2023 - Present"} description={[
                "• Advised by Dr. Shrikanth Narayanan and Dr. Swabha Swayamdipta to publish papers on multimodal AI",
                "• Publish first author paper at IEEE ICASSP '24 on video summarization by grounding visual information with text",
                "• Third author paper on missing modality in multimodal Transformers to achieve state of the art performance",
                "• Spearhead research projects by communicating with the professors and the team, holding group meetings 2 times/week"
            ]}/>,
            <ExCard image={Manifest} title={"Fullstack Software Engineer"} company={"@ Manifest: Custom Affirmations App"} date={"Jan 2023 - May 2023"} description={[
                "• Develop NextJS frontend handle server API calls and present contents from recommendation engine",
                "• Utilize Firebase to hold user data and leverage the login functionality",
                "• Architecting the backend structure for a personalized, integrated wellness and lifestyle coaching platform",
                "• Create server to handle recommendation engine by utilizing GPT API calls and client’s personal information",
                "• Improve server response time by 42% by optimizing API calls and overhauling backend processes"
            ]}/>,
        ],
        2022: [
            <ExCard image={Knowre} title={"AI Research Engineering Intern"} company={"@ Knowre"} date={"May 2022 - Jul 2022"} description={[
                "• Collaborated with the senior AI Scientist to assess project goals to design and upgrade the codebase",
                "• Engineered Transformer and Linformer models to perform knowledge tracing on real user data",
                "• Reduced development costs by 33% by restructuring the data pipeline and fine-tuning hyperparameters",
                "• Increased the neural network model’s binary accuracy by over 2% by implementing a mixture of early and late fusion, making the model’s accuracy 6.8% higher than the current state of the art model for knowledge tracing"
            ]}/>
        ],
        2021: [
            <ExCard image={ROKAF} title={"Staff Sergeant"} company={"@ Republic of Korea Air Force"} date={"Sep 2017 - Aug 2019"} description={[
                "• Translator, Flight Armorer, Administrative Clerk at Flight Headquarters",
                "• Led a group of three developers to automize maintenance task and manpower management: awarded squadron commander’s award certificate for distinguished service",
                "• Participated in multi-million dollar projects of the Korean Air Force with Lockheed Martin, Airbus, and GE",
                "• Supported emergency sea rescue missions with a four men flight crew, finishing the service as the leader of the response team consisting of over twenty flight armorers",
            ]}/>,
        ]
    }

    useEffect(() => {
        setCurrCard(0)
    }, [currTab])

    const decCard = () => {
        if (currCard === 0) {
            setCurrCard(allCards[currTab].length - 1)
        }
        else {
            setCurrCard(currCard - 1)
        }
    }

    const incCard = () => {
        if (currCard === allCards[currTab].length - 1) {
            setCurrCard(0)
        }
        else {
            setCurrCard(currCard + 1)
        }
    }


    // print out cards based on currTab
    return (
        <div>
            <div className='flex justify-center items-start'>
                {allCards[currTab][currCard]}
            </div>
            <div className="flex justify-center items-center space-x-4 mt-1">
                <button className='btn-color rounded-full px-4 text-white font-bold py-2' onClick={decCard}>Prev</button>
                <div className="text-white">{currCard+1}/{allCards[currTab].length}</div>
                <button className='btn-color rounded-full px-4 text-white font-bold py-2' onClick={incCard}>Next</button>
            </div>
            
        </div>
        
    )
}

export default ExCards