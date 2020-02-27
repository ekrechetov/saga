import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../actions/requestApiData";
import Button from "../components/Button";
import './home.scss';

class Home extends Component {
  state = {isClicked: false}

  // componentDidMount() {
  //   this.props.requestApiData();
  // }
  clickBtn() {
    this.setState({isClicked: true});
    this.props.requestApiData();    
  }

  getItem(name) {
    console.log(name);   
  }

  render() {
    const results =  this.props.data;
    console.log(this.state.isClicked);
    // console.log(results);
    return(
      <div>
        <div className="home">
          <h1 className="home-title">Planets from SWAPI:</h1>
          <h2 className="home-description">For get planets click the button:</h2>
          <Button click={this.clickBtn.bind(this)}/>
          {
          !results.length ?
          <h1>{this.state.isClicked && 'loading...'}</h1> :
          <ul className="home-list">
            {results.map((item, index) => {
              return  <li key={index}
                         className="home-list-item"
                         onClick={() => this.getItem(item.name)}
                      >
                        {item.name}                         
                      </li>
            })}
          </ul>
          }
        </div>
      </div>    
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);