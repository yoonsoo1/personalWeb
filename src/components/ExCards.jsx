import React from 'react'
import ExCard from './ExCard'

function ExCards({currTab}) {
    // print out cards based on currTab
  if (currTab == 2023) {
    return (
        <ExCard 
            image={"asdfasdf"}
            title={"asdfasdf"}
            date={"asdfasdf"}
            description={"asdfasdf"}
        />
    )
  }
  else if (currTab == 2022) {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="text-white text-2xl font-bold">22222222222</div>
            </div>
        </div>
    )
  }
  else if (currTab == 2021) {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="text-white text-2xl font-bold">111111111111</div>
            </div>
        </div>
    )
  }
  else if (currTab == 2020) {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="text-white text-2xl font-bold">2020202</div>
            </div>
        </div>
    )
  }
  else if (currTab == 2017) {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="text-white text-2xl font-bold">77777777</div>
            </div>
        </div>
    )
  }
  else {
    return (
        <div>
            Not 2023
        </div>
    )
  }
}

export default ExCards