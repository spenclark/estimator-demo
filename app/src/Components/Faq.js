import React from 'react'
import "./css/faq.css"
const data = [
    {
        id: 1,
        body: "Enter your projects estimated material, labour, miscellaneous costs."
    },
    {
        id: 2,
        body: "Let EstimatorHero compare publicly filed data from local contractors to your estimate."
    },
    {
        id: 3,
        body: "Unlock valubale insights and metrics to help you understand your bids competitiveness -- for free"
    }
]

function Faq() {
  return (
    <div>
        <div className=''>How it works</div>
        <div>
            {data.map((i) => {
                return (
                <div id={i.id}>
                    <div>
                        {i.id}
                    </div>
                    <div>
                        {i.body}
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Faq