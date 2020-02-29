import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../actions/requestApiData";
import { requestApiDataUrl } from "../../actions/requestApiDataUrl";
import Button from "../../components/button/Button";
import Details from "../../components/details/Details";
import './home.scss';

class Home extends Component {

  clickBtn() {
    this.props.requestApiData();    
  }

  getItem(url) {
    this.props.requestApiDataUrl(url);    
  }

  render() {
    const results =  this.props.data.data;
    return(
      <div>
        <div className="home">
          <h1 className="home-title">Planets from SWAPI:</h1>
          <h2 className="home-description">For get planets click the button:</h2>
          <Button click={this.clickBtn.bind(this)}/>
          
          <div className="home-content">
            {
            !results.length 
            ?<h2>{this.props.data.loading && 'loading...'}</h2> 
            :<ul className="home-content-list">
              {results.map((item, index) => {
                return  <li key={index}
                          className="home-content-list-item"
                          onClick={() => this.getItem(item.url)}
                        >
                          {item.name}                         
                        </li>
              })}
            </ul>
            }
            <div className="home-content-details">
              {this.props.itemInfo.loading
              ? <h2>loading...</h2>
              : this.props.itemInfo.error
                ? <p>Error, try again</p>
                : JSON.stringify(this.props.itemInfo.itemData) == '{}' || <Details />              
              }
            </div>
          </div>
        </div>        
      </div>    
    );
  }
}

const mapStateToProps = state => (
    { data: state.data, itemInfo: state.itemInfo }
  );

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, requestApiDataUrl }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);