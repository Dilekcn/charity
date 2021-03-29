import React from 'react';
import './GetInvolved.css';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
    return (
        <div className="getInvolved">
            Hello
            <div className="getInvolved_img"></div>
          <div className="getInvolved_text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

            </div> 
            <div className="getInvolved_title">
                <p>Other ways to donate...</p>
            </div>
            <div className="getInvolved_images">
                <div className="getInvolved_image">
                    <Link to='/getinvolved/donategoods' className="getInvolved_image_img">
                        <span className="donate_good"> Donate goods</span>
                    </Link>
                </div>

                <div className="getInvolved_image">
                    <div className="getInvolved_image_img">
                    <Link to='/getinvolved/donate-with-gift-card' className="getInvolved_image_img">
                        <span className="donate_good">Donate with a gift card</span>
                    </Link>
                    </div>
                </div>  

                 <div className="getInvolved_image">
                    <div  className="getInvolved_image_img">
                        <span  className="donate_good"> Donate your time</span>
                    </div>
                </div>

                <div className="getInvolved_image">
                    <div className="getInvolved_image_img">
                        <span className="donate_good"> Be an ambassador</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default GetInvolved
