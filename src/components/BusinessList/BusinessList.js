import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

function BusinessList (props) {
  return (
    <div className={styles.BusinessList}>
      {props.listObject.map(business => 
        <Business businessObject ={business}/> 
        )
      }
    </div>
  );
};

export default BusinessList;
