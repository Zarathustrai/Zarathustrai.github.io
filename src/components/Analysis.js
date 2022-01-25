import React from 'react';
import './../App.css'
import RenderForm from './RenderForm';

export default class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
    }
    this.lastPushed = "";
    this.lastAttribute = "";
  }

  renderContent() {
    console.log("rendercontent");
    let contents = [];
    let factName = "";
    let factData = null;

    for(let line in this.props.data) {
      if (line === "beerList") {
        contents.push(
          <>
            <div><br/></div>
            <b><div className="lineAnalysis">Resulting list of beer scores: </div></b><br/>
          </>
        );
        for (let beer in this.props.data[line]) {
          let beerScore = [];
          beerScore = this.props.data[line][beer].toString().split(",")
          contents.push(
            <>
              <table id="customers">
                <tr>
                  <th>Beer Name</th>
                  <th>Score</th>
                </tr>
                <tr>
                  <td>{beerScore[0]}</td>
                  <td>{beerScore[1]}</td>
                </tr>
              </table>
              {/*<b><div className="lineAnalysis">{this.props.data[line][beer].toString()}</div></b>*/}
            </>
          );
        }
      }

      if(this.lastPushed === line) {
        continue;
      }

      if (typeof this.props.data[line] === "string" && this.props.data[line].includes("Attribute")) {
        console.log(Object.keys(this.props.data)); //array


        factName = "fact" + this.props.data[line].replace("Attribute", "")[0].toUpperCase() + this.props.data[line].replace("Attribute", "").substr(1);

        if (Object.keys(this.props.data).indexOf(factName) >= 0) {
          console.log("keys:");
          console.log(Object.values(this.props.data));
          console.log(Object.keys(this.props.data).indexOf(factName))

          factData = Object.values(this.props.data)[Object.keys(this.props.data).indexOf(factName)];
          console.log(factData);
          contents.push(
            <>
              <div><br/></div>
              <br/><div className="log_output">
              <div className="div-ver"/>
              <b><div className="lineAnalysis font">Question asked: {line}</div><br/>
                <div className="lineAnalysis analysis-color-yes">[Fact gained] {factName}: {factData.toString()}</div></b>
            </div>
            </>
          );
        } else {
          contents.push(
              <>
                <div><br/></div>
                <br/><div className="log_output">
                <div className="div-ver"/>
                <b><div className="lineAnalysis font">Question asked: {line}</div><br/>
                  <div className="lineAnalysis analysis-color-no">No fact gained</div></b>
              </div>
            </>
          );
        }
        //No question
      } else {
        continue;
      }
    }
    this.setState({content: contents});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      console.log("Props different!");
      console.log(prevProps.data);
      console.log(this.props.data);
      this.renderContent();
    }
  }


  render() {
    if (this.props.isVisible) {
      return(
        <div className="content">
          <div className="leftContent"></div>

          <div className="centerContent">
            <div className="analysis">
              {this.state.content}
            </div>
          </div>

          <div className="rightContent"></div>
        </div>

      );
    } else {
        return(null);
    }
  }
}
