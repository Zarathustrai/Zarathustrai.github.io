import React from 'react';

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
            <div className="lineAnalysis">Resulting list of beer scores:</div>
          </>
        );
        for (let beer in this.props.data[line]) {
          contents.push(
            <>
              <div className="lineAnalysis">{this.props.data[line][beer].toString()}</div>
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
              <div className="lineAnalysis">Question asked: {line}</div>
              <div className="lineAnalysis">Fact gained: {factName}: {factData.toString()}</div>
            </>
          );
        } else {
          contents.push(
            <>
              <div><br/></div>
              <div className="lineAnalysis">Question asked: {line}</div>
              <div className="lineAnalysis">No fact gained</div>
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
