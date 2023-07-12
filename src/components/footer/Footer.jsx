import React from "react";
import "./footer.css";


const Footer = () => {
  var today = new Date()
  let month = today.getMonth() +1; 
  let year = today.getFullYear(); 
  let day = today.getDate(); 
  console.log("today", today)
  console.log("month", month); 
  console.log("year", year); 
  console.log("day", day); 
  let mp ={
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: " August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }

  let res =  mp[month] + " " + day + ", " + year
  console.log(res)
  

  // console.log("BOT", today.toString().slice(4, 11)); 
  return (
    <footer>
      <div className="footer__log__container">
        <a href="#" className="footer__logo">
          sdlarkin
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          <span id = "date-time">{res}</span>  &copy; Daniel Larkin 
        </small>
      </div>
  
    </footer>
  );
};

export default Footer;
