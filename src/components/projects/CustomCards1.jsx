// import {Card, Box, CardContent, Typography, CardActions, Button} from "@mui/material";
import React from "react";
import "./projects.css";

// const CustomCards = () =>{

//     return (
//         <Box width="50%">
//             <Card>
//                 <CardContent>
//                     <Typography variant="h5" >
//                         For All Times
//                     </Typography>
//                     <Typography  >
//                     ForAllTimes is a lounge traffic monitor made for software engineering students at the University of Waterloo. It uses a Raspberry Pi and Ultrasonic sensors to detect when people enter and exit a room. It then updates a counter using an AWS Lambda function. The backend then uses Node.js and Express.js to display this on a website.
//                     </Typography>
//                 </CardContent>

//                 <CardActions>
//                     <a>Link</a>
//                 </CardActions>

//             </Card>
//         </Box>
//     );
// }

// export default CustomCards

const CustomCards1 = () => {
  return (
    <div class="card__container">
      <div class="card__left">
        <div class="card__content">
          <h5 className="cardH">ProjectName</h5>
          <p className="cardP">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            incidunt quas dolores eaque recusandae cum maxime repudiandae nobis
            facere totam eos quasi, perspiciatis ipsa, repellendus minima,
            ratione quis magnam ea.
          </p>
          <a>Link</a>
        </div>
      </div>
      <div class="card__right">
        <div className="center__iframe">
          <iframe src="https://yashkapoor.ca/" scrolling="no"></iframe>
        </div>
      </div>
      
    </div>
  );
};

export default CustomCards1;
