import React, {useState, useEffect} from 'react'
import ExCards from './ExCards'

function Experiences() {
    const [currTab, setCurrTab] = useState(2023)

  return (
    <div className='experience-section mb-4'>
        <div className="w-full">
            <div className="flex justify-center items-center space-x-2 px-2 md:px-0 mb-2">
                <div className={`text-center text-white text-2xl font-bold cursor-pointer ${currTab === 2023 ? 'border-b-2 border-white' : ''}`} onClick={() => setCurrTab(2023)}>2023</div>
                <div className={`text-center text-white text-2xl font-bold cursor-pointer ${currTab === 2022 ? 'border-b-2 border-white' : ''}`} onClick={() => setCurrTab(2022)}>2022</div>
                <div className={`text-center text-white text-2xl font-bold cursor-pointer ${currTab === 2021 ? 'border-b-2 border-white' : ''}`} onClick={() => setCurrTab(2021)}>2017-'21</div>
            </div>
            <ExCards currTab={currTab}/>  
        </div>
    </div>
  )
}

export default Experiences