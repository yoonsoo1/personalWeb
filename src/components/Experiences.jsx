import React, {useState, useEffect} from 'react'
import ExCards from './ExCards'

function Experiences() {
    const [currTab, setCurrTab] = useState(2023)
    
    useEffect(() => {
        console.log(currTab)
    }
    , [currTab])

  return (
    <div>
        <div className="w-full">
            <div className="flex justify-center items-center space-x-4">
                <div className={`text-center text-white text-2xl font-bold cursor-pointer ${currTab === 0 ? 'border-b-2 border-white' : ''}`} onClick={() => setCurrTab(2023)}>2023</div>
                <div className={`text-center text-white text-2xl font-bold cursor-pointer ${currTab === 1 ? 'border-b-2 border-white' : ''}`} onClick={() => setCurrTab(2022)}>2022</div>
                <div className={`text-center text-white text-2xl font-bold cursor-pointer ${currTab === 2 ? 'border-b-2 border-white' : ''}`} onClick={() => setCurrTab(2021)}>2021</div>
                <div className={`text-center text-white text-2xl font-bold cursor-pointer ${currTab === 3 ? 'border-b-2 border-white' : ''}`} onClick={() => setCurrTab(2020)}>2020</div>
                <div className={`text-center text-white text-2xl font-bold cursor-pointer ${currTab === 4 ? 'border-b-2 border-white' : ''}`} onClick={() => setCurrTab(2017)}>2017-'19</div>
                <div className={`text-center text-white text-2xl font-bold cursor-pointer ${currTab === 5 ? 'border-b-2 border-white' : ''}`} onClick={() => setCurrTab(2016)}>2016</div>
            </div>
            <ExCards currTab={currTab}/>  
        </div>
    </div>
  )
}

export default Experiences