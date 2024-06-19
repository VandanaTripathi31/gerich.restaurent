import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
<div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>


      <div className="app__chef-content">
        <div className="app__chef-content_quote">
        <img src={ images.quote } alt="quote" />
        <p className="p__opensans">Cooking at Gerichit Restaurent is an absolute pleasure facilities and fresh.</p>
        </div>
        <p className="p__opensans">Our team is dedicated to providing guests with unforgettable culinary experiences. We look forward to delighting your taste buds and making your stay even more memorable."</p>

      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_images" />
      </div>
    </div>
 </div>
);

export default Chef;
