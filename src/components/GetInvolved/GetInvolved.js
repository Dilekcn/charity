import React, {useEffect} from 'react';
import './GetInvolved.css';
import { Link, useHistory } from 'react-router-dom';

const GetInvolved = ({isLoggedIn}) => {
    const history = useHistory()
    const alertFunc = () => {
        if(isLoggedIn) {
            history.push("/getinvolved/donate-with-gift-card")
        } else {
            alert('Please login first.')
            history.push('/login')
        } 
    }
    useEffect(() => {
		window.scroll(0, 0);
	}, []);
    return (
        <div className="getInvolved">
           
            <div className="getInvolved_img"></div>
          <div className="getInvolved_text">
                <p style={{marginLeft:"30px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

            </div> 
            <div className="getInvolved_title">
                <p style={{marginLeft:"30px"}}>Other ways to donate...</p>
            </div>
            <div className="getInvolved_images"> 
                <div className="getInvolved_image">
                    <Link to='/getinvolved/donategoods' className="getInvolved_image_img image_bg_goods">
                        <span className="donate_good"> Donate goods</span>
                    </Link>
                </div>
              

                <div className="getInvolved_image">
                    <div className="getInvolved_image_img">
                    <Link onClick={() => alertFunc()} className="getInvolved_image_img image_bg_card">
                        <span className="donate_good">Donate with a gift card</span>
                    </Link>
                    </div>
                </div>  

                 <div className="getInvolved_image">
                    <Link to='/getinvolved/donateyourtime' className="getInvolved_image_img image_bg_time">
                        <span  className="donate_good"> Donate your time</span>
                    </Link>
                </div>

                <div className="getInvolved_image">
                    <div className="getInvolved_image_img">
                    <Link to='/getinvolved/beanambassador' className="getInvolved_image_img image_bg_ambassador">
                        <span className="donate_good"> Be an ambassador</span>
                    </Link>  
                    </div>
                </div>

            </div>

        </div>
    )
}

export default GetInvolved
