import React from 'react';
import {connect} from 'react-redux';
import './details.scss';

const Details = (props) => {
  const keys = Object.keys(props.itemInfo.itemData);
  const values = Object.values(props.itemInfo.itemData);
  return(
    <div className="details-container">
      <h2 className="details-title">
        {props.itemInfo.itemData.name}
      </h2>
      <ul className="details">
        {
          keys.map((element, index) => {
            if(index < 7) {
              return(
                <li key={index}
                    className="details-list"
                >
                  <div className="detail-list-item">{`${element}:`}</div> 
                  <div className="detail-list-item">{values[index]}</div>
                </li>
              )
            }   
          })
        }
      </ul>
    </div>
  )
}  

const mapStateToProps = (state) => {
  return {itemInfo: state.itemInfo}
}

export default connect(mapStateToProps)(Details);