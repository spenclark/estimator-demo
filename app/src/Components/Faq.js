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
        body: "Unlock valubale insights and metrics to help you understand your bids competitiveness -- for free."
    }
]

function Faq() {
  return (
    <div className='parent'>
        <div className='faq_title'>How it works</div>
        <div className='card_parent'>
            {data.map((i) => {
                return (
                <div className="card" id={i.id}>
                    <div className='order_roundel'>
                       <div>
                        {i.id}
                        </div>
                    </div>
                    <div className='card_body'>
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