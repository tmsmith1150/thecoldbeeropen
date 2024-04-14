import React from 'react';
import styled from 'styled-components';
import HeroImg from '../images/CBO-home.jpg';
import CBOLogo from "../images/CBO_final-web.png";



const HeroStyles = styled.div`
.hero__img > img {
  width: 100%;
  height: 588px;
  background-image: cover;
  margin-top: -557px;
},
.cbo-home-img > img {
  width: 33%;
  height: 450px;
  margin-top: 106px;
  position: relative;
  z-index: 2;
},
.cbo-home-img {
  height: 550px;
},
.fade-in-image {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-ms-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}`;


export const HeroSection = () => {
  return (
    <HeroStyles>
        <div className="hero__img">
        <div className="cbo-home-img fade-in-image"><img className="cbo-logo fade-in-image" src={CBOLogo} alt="Logo"/>
         </div>
         <img src={HeroImg} alt="" />
          </div>
    </HeroStyles>
  )
}
