import React from "react";
import "../styles/Home.scss";
import bg from "../assets/2.webp";
import {AiFillLinkedin ,AiFillYoutube , AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechGuy</h1>
          <p>Any Problem? Don't worry! Main hu naa </p>
        </main>
      </div>

      <div className="home2">
        <img src={bg} alt="Graphics" />
        <div>
            <p>
                Lorem ipsum dolor, corrupti debitis non nesciunt veritatis dolorem. Magni accusamus error officia assumenda, in consequatur, sit quod minima, velit temporibus non numquam.
            </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
            <h1>Who Are We?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto incidunt quam sint, beatae odit exercitationem itaque maxime dolor laboriosam dolorem debitis soluta similique ipsa quis quidem atque consequatur fugiat aperiam doloremque aliquam officiis consequuntur quaerat. Fugiat earum doloribus, sunt amet voluptates doloremque adipisci dolores, nesciunt, dolorem possimus quae voluptate voluptatum. Optio illo delectus sapiente iste doloribus possimus expedita? Unde, fugiat facilis. Ad omnis dignissimos perferendis enim molestiae rerum ipsam sint, incidunt expedita quas voluptas recusandae asperiores amet veniam exercitationem. Quod.</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay: '0.3s' }}>
                    <AiFillLinkedin/>
                    <p>Linkedin</p>
                </div>
                <div style={{animationDelay: '0.6s' }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
                <div style={{animationDelay: '0.9s' }}>
                    <AiFillTwitterCircle/>
                    <p>Twitter</p>
                </div>
                <div style={{animationDelay: '1.2s' }}>
                    <AiFillYoutube/>
                    <p>YouTube</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
