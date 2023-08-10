import React from 'react'
import "./Cards.css"
function Cards() {
  return (
    <div className="py-4 cards">
        <div className="container">
        <h1>Treatments & Services</h1>
        <div>Look your best!</div>
        
        <div className="d-flex justify-content-between py-5 flex-wrap">
            <div className="card">
                <div className="d-flex flex-column align-items-center justify-content-center">
                <img src="https://www.vincihairclinic.com/wp-content/uploads/2021/11/HT-Icon.svg" width={"80px"} height={"80px"}/>
                <p><b>Hair Transplant</b></p>
                <p>Natural Hair Restoration</p>
                </div>

            </div>
            <div className="card">
            <div className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://www.vincihairclinic.com/wp-content/uploads/2021/11/MSP-Icon.svg" width={"80px"} height={"80px"}/>
                <p><b>Micro Scalp Pigmentation</b></p>
                <p>Non surgical hair solution</p>
                </div>
            </div>
            <div className="card">
            <div className="d-flex flex-column align-items-center justify-content-center">

            <img src="https://www.vincihairclinic.com/wp-content/uploads/2021/11/Medical-Icon.svg" width={"80px"} height={"80px"}/>
                <p><b>Medical Treatments</b></p>
                <p>PRP,Mesotherapy,among others</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cards