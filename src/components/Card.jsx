import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = (props) => {
    console.log(props.company)
 
  return (
    <div className="card">
      {/* Top */}
      <div className="top">
        <img
          src={props.brandLogo}
          alt="Company Logo"
        />
        <button className="save-btn">
          Save <Bookmark size={18} />
        </button>
      </div>

      {/* Center */}
      <div className="center">
        <h3>
          {props.company} <span>{props.daysPosted}</span>
        </h3>
        <h2>{props.post}</h2>

        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      {/* Bottom */}
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
