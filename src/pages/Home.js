import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../actions/requestApiData";

class Home extends React.Component {

  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    const results =  this.props.data;
    console.log(results);
    return(
      results.length ?
      <>
        <h2>Planets:</h2> 
        <ul>
          {results.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })}
        </ul>
      </> :         
      <h1>loading...</h1>        
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);