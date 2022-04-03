import React from 'react'
import './Landing.css'
import Nav from '../navbar/Nav'

function Landing() {
  return (
    <>
        <Nav/>
        <div className='landing'>
            <div className='landing-banner'>
                <div className='banner-heading'>HEADING HERE</div>
                <div className='banner-subheading'>sub heading here</div>
            </div>
            <div className='landing-illustration'>
                <img src="https://www.44communications.co.uk/wp-content/uploads/2020/12/30_Corin_companies-collaborating_1060x600.jpg"
                alt="illustration" width="650px"/>
            </div>
        </div>

        <div className='pricing'>
            <div className='bronze'>
                <div>Bronze</div>
                <div>Free trial 30 days</div>
                <div className='price'>
                    <div className='price-value'>$49.00</div>
                    <div>Billed Yearly</div>
                </div>
                <div className='details'>
                    <div className='detail-element'>0-500 Student</div>
                    <div className='detail-element'>0-5 Tests</div>
                    <div className='detail-element'>1hr Duration</div>
                    <div className='money-back detail-element'>Money Back Guarantee!</div>
                </div>
                <div className='bronze-get-started'>Get started</div>
            </div>

            <div className='silver'>
                <div>Silver</div>
                <div>Free trial 30 days</div>
                <div className='price'>
                    <div className='price-value'>$99.00</div>
                    <div>Billed Yearly</div>
                </div>
                <div className='details'>
                    <div>500-3000 Student</div>
                    <div>0-20 Tests</div>
                    <div>3hr Duration</div>
                    <div className='money-back'>Money Back Guarantee!</div>
                </div>
                <div className='silver-get-started'>Get started</div>
            </div>

            <div className='gold'>
                <div>Gold</div>
                <div>Free trial 30 days</div>
                <div className='price'>
                    <div className='price-value'>$149.00</div>
                    <div>Billed Yearly</div>
                </div>
                <div className='details'>
                    <div>3000+ Student</div>
                    <div>50+ Tests</div>
                    <div>Unlimited Duration</div>
                    <div className='money-back'>Money Back Guarantee!</div>
                </div>
                <div className='gold-get-started'>Get started</div>
            </div>
        </div>

        <div className='trusted'>
            <div>TRUSTED BY</div>
            <div className='trusted-grid'>
                <img src="https://static-cse.canva.com/_next/static/assets/salesforce.file.c827694e.png" alt="icon" width="100%"/>
                <img src="https://static-cse.canva.com/_next/static/assets/salesforce.file.c827694e.png" alt="icon" width="100%"/>
                <img src="https://static-cse.canva.com/_next/static/assets/salesforce.file.c827694e.png" alt="icon" width="100%"/>
                <img src="https://static-cse.canva.com/_next/static/assets/salesforce.file.c827694e.png" alt="icon" width="100%"/>
                <img src="https://static-cse.canva.com/_next/static/assets/salesforce.file.c827694e.png" alt="icon" width="100%"/>
                <img src="https://static-cse.canva.com/_next/static/assets/salesforce.file.c827694e.png" alt="icon" width="100%"/>
            </div>
        </div>

        <div className='features'>
            <div className='features-heading'>Packed with amazing features</div>
        </div>
    </>
  )
}

export default Landing