import React from 'react'
import './mainsection.css'
import image  from '../../images/sneakerss.png'
import flipcart  from '../../images/flipcart.png'
import amazon  from '../../images/amazon.png'

const MainSection = () => {
  return (
    <div className="mainSection">
        <div className="mainSectionHeadingContainer">
            <h1 className="mainSectionHeading">
                YOUR FEET DESERVE THE BEST
            </h1>

            <p className="mainSectionPara">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae atque velit quas adipisci explicabo dicta reprehenderit, delectus necessitatibus, voluptate at rem odit modi ea quisquam earum totam suscipit sapiente unde.
            </p>

            <div className="mainSectionButtonContainer">
                <button className="btn shopNow">Shop Now</button>
                <button className="btn Category">Category</button>
            </div>

            <span className="mainSectionSpan">
                Also Available On
            </span>

            <div className="mainSectionSocialMediaIcon">
                <img src={flipcart} className='icon'/>
                <img src={amazon} className='icon'/>
            </div>


        </div>

        <div className="mainSectionImageContainer">
            <img src={image} alt="" className='mainSectionImage'/>
        </div>
    </div>
  )
}

export default MainSection