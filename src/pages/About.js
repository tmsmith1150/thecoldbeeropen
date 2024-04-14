import React from 'react';
import styled from 'styled-components';



const AboutStyles = styled.div`
.year-2021-title {
  background-color: #314f41;
  color: #f2f9fc;
  padding: 20px 65px;
  font-family: Roboto;
  margin-top: -10px
},
.year-2021-para1 {
  font-size: 23px;
}
`;

export const About = () => {
  return (
    <AboutStyles>
    <div>
      <div className="year-2021-title">
        <h1>WELCOME TO THE 44th ANNUAL COLD BEER OPEN 1980 - 2024.
        </h1>
        
             <div className="year-2021-para1-div"> 
               <p className="year-2021-para1">
                   WE ARE HAPPY YOU COULD JOIN US FOR THIS EDITION OF THE COLD BEER OPEN. THIS YEAR MARKS OUR 44th YEAR. THE COLD BEER OPEN IS A GOLF TOURNAMENT FEATURING FOUR DAYS OF GOLF IN BEAUTIFUL NORTH MYRTLE BEACH, SOUTH CAROLINA. THE TOURNAMENT IS A POINTS BASED SYSTEM WITH MANY OPPORTUNITIES TO WIN PRIZES, MONEY AND A CHANCE TO WIN A FREE TRIP TO NEXT YEARS TOURNAMENT. WE BELIEVE THIS MAKES US UNIQUE IN THE FACT THAT WE HOST A VERY FINE TOURNAMENT WITH INCREDIBLY LOYAL AND DOWNRIGHT GOOD PEOPLE. WE BELIEVE WE HAVE THE BEST TOURNAMENT YOU CAN ATTEND. THIS IS DUE TO THE PARTICIPATION OF PEOPLE LIKE YOU. WE HOPE YOU ENJOY YOURSELF AS MUCH AS WE DO AND WILL MAKE THIS AN ANNUAL EVENT FOR YOURSELF AS WELL.
                   
               </p>
             </div>
             </div>
    </div>
    </AboutStyles>
  )
}
