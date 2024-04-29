import React from 'react';
import { Form, Button, Fade, ListGroup, ListGroupItem, NavLink } from 'reactstrap';
import styled from 'styled-components';
import { useState } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import baywatchLogo from "../../images/baywatch.logo.png";
import emailIcon from "../../images/email-logo.png";


const ContactStyles = styled.div`
.contact-main {
    width: 100%;
    background-color: rgb(82, 189, 189);
}


.email-logo {
    width: 25px;
    height: 25px;
}

.row {
    display: flex;
    justify-content: space-around;
    margin-left: 35px;
    width: 87%;
}

.column {
    width: 400px;
    margin-bottom: 100px;
}

.contact-list {
    height: 45px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    background-color: rgb(82, 189, 189);
}

.email-link {
    height: 45px;
    font-size: 18px;
    display: flex;
    justify-content: center;
}

.baywatch-link {
    display: flex;
    justify-content: center;
}

.contact-list {
    border-color: rgb(82, 189, 189);
    height: 15px;
}

.contact-btn {
    margin-top: 30px;
}

.email-link {
    margin-top: 10px;
}
`;

export const Contact = () => {

    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-device-width: 1024px)'
  });
  
  const isTabletOrPhone = useMediaQuery({
      query: '(max-device-width: 1023px)'
  });

  const contactBtnStyle = {
    border: '3px solid teal',
    backgroundColor: '#009999',
    textAlign: 'center',
    justifyContent: 'center',
    width: '170px',
  };

     return (
         <ContactStyles>
        

         <div className="contact-main">

{isDesktopOrLaptop && <>
           <div className="contact-btn-div">
          <Button 
          style={contactBtnStyle} 
          className="contact-btn btn btn secondary" 
          onClick={toggle}>Contact Us</Button>
          </div>
            <Fade in={fadeIn} tag="h5" className="mt-3">
            
            {/* This content will fade in and out as the button is pressed */}
                <div className="row">
                    <div className="column">
                <ListGroup>
                  <ul>
                <li className="contact-list">Terry Smith</li>
                <li className="contact-list">P.O. Box 550639</li>
                <li className="contact-list">Gastonia, NC 28055</li>
                <li className="contact-list">704-813-9523</li>
                <li className="contact-list">Fax: 704-869-6029</li>
                <li className="contact-list">Cell: 704-813-1296</li>
                
                <NavLink className="email-link" href="mailto:olepronc@earthlink.net"><img className="email-logo" src={emailIcon} alt="Logo"/> olepronc@earthlink.net</NavLink>
                </ul>
              </ListGroup>
              </div>

              <div className="column">
                <ListGroup>
                <ul>
                <NavLink className="baywatch-link" target="blank" href="https://www.baywatchresort.com/?utm_source=gmb&utm_medium=organic&utm_campaign=GMB-BayWatchResort"><img className="baywatch-logo" src={baywatchLogo} alt="logo" /></NavLink>

                
                <li className="contact-list">North Myrtle Beach, SC</li>
                <li className="contact-list">2701 South Ocean Blvd</li>
                <li className="contact-list">North Myrtle Beach, SC 29582</li>
                <li className="contact-list">843-272-4600</li>
                </ul>
              </ListGroup>
              </div>
                    
                </div>
                
            </Fade>
            </>}


            {isTabletOrPhone && <>
           <div className="contact-btn-div">
          <Button className="contact-btn btn" onClick={toggle}>Contact Us</Button>
          </div>
            <Fade in={fadeIn} tag="h5" className="mt-3">
            
            {/* This content will fade in and out as the button is pressed */}
               
                    <div className="column">
                <ListGroup>
                  <ul>
                <li className="contact-list">Terry Smith</li>
                <li className="contact-list">P.O. Box 550639</li>
                <li className="contact-list">Gastonia, NC 28055</li>
                <li className="contact-list">704-813-9523</li>
                <li className="contact-list">Fax: 704-869-6029</li>
                <li className="contact-list">Cell: 704-813-1296</li>
                
                <NavLink className="email-link" href="mailto:olepronc@earthlink.net"><img className="email-logo" src={emailIcon} alt="Logo"/> olepronc@earthlink.net</NavLink>
                </ul>
              </ListGroup>
              </div>

              <div className="column">
                <ListGroup>
                <ul>
                <NavLink className="baywatch-link" target="blank" href="https://www.baywatchresort.com/?utm_source=gmb&utm_medium=organic&utm_campaign=GMB-BayWatchResort"><img className="baywatch-logo" src={baywatchLogo} alt="logo" /></NavLink>

                
                <li className="contact-list">North Myrtle Beach, SC</li>
                <li className="contact-list">2701 South Ocean Blvd</li>
                <li className="contact-list">North Myrtle Beach, SC 29582</li>
                <li className="contact-list">843-272-4600</li>
                </ul>
              </ListGroup>
              </div>
                    
            
                
            </Fade>
            </>}
              
         </div>
         </ContactStyles>
     );
}
