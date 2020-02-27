import React from 'react';
import {connect} from 'react-redux';
import './details.scss';

const Details = (props) => {
  const keys = Object.keys(props.itemInfo);
  const values = Object.values(props.itemInfo);

  return(
    <ul className="details">
      {
        keys.map((element, index) => {
        if(index < 7)
        return <li key={index}><span>{element}</span><span>{values[index]}</span></li> 
        })
      }
    </ul>
  )
}  

const mapStateToProps = (state) => {
  return {itemInfo: state.itemInfo}
}

export default connect(mapStateToProps)(Details);