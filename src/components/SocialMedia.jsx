import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a target={"_blank"} href="https://twitter.com/Chrisdevcode">
          <div>
                <BsTwitter />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/chris-imade-247514192/">
          <div>
              <FaLinkedinIn />
          </div>
        </a>
        <a href=""></a>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia