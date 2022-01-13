import React from 'react';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null,
      attributeList: [],
      questionCount: null,
      points: [],
      pointsCalculated: false,
    };
  }

  questionKnowledgeSystem(attribute) {
    if (attribute === "abv") {
      return "";
    } else
    if (attribute === "style") {
      return "";
    } else
    if (attribute === "color") {
      return "";
    } else
    if (attribute === "aroma") {
      return "";
    } else
    if (attribute === "flavours") {
      return "";
    } else
    if (attribute === "price") {
      return "";
    } else {
      return "";
    }
  }

  pointKnowledgeSystem(attribute) {
    // Calculate point values for each attribute.
    // return [ratio negative (below), ratio positive(over)]
    if (attribute === "abv") {
      return [-0.6, -1];
    } else
    if (attribute === "style") {
      return [-1, -1];
    } else
    if (attribute === "color") {
      return [-0.7, -0.7];
    } else
    if (attribute === "aroma") {
      return [-0.5, -0.5];
    } else
    if (attribute === "flavours") {
      return [["bitterness", [-2, -5]]];
    } else
    if (attribute === "price") {
      return [-0.2, -1];
    } else {
      alert("point calculation error: unsupported beer attribute found! \n" + "attribute = \"" + attribute + "\"");
      return [-1, -1];
    }
  }

  pointCount() {

  }

  setAttributes() {
    let attributesCopy = this.state.attributeList.slice();
    let flavours = ["flavours", []];
    for (const x in this.state.beers) {
      for (const y in this.state.beers[x]) {
        if (attributesCopy.includes(y) === false && y != "flavours") attributesCopy.push(y);
        if (y === "flavours") {
          for (const a in y) {
            flavours[1].push(a[0]);
          }
        }
      }
    }
    attributesCopy.push(flavours);
    this.setState({attributeList: attributesCopy});
  }

  componentDidMount() {
    const url = "http://localhost:3000/beers";
    fetch(url)
      .then(response => response.json())
      .then(beers => this.setState({beers}))
      .then(() => this.setAttributes())
      .then(() => this.setState({questionCount: 0}));



  }

  componentDidUpdate() {
    if (!this.state.pointsCalculated && this.state.questionCount === this.state.attributeList.length) {
      alert("eeek")
      let pointsCopy = this.state.points.slice();
      for (const attr in this.state.attributeList) {
        pointsCopy.push(this.pointKnowledgeSystem(attr))
      }
      this.setState({points: pointsCopy});
      this.setState({pointsCalculated: true});
    }
  }

  render() {
    /*
    let content;
    if (this.state.test) {
      content = "State1";
    } else {
      content = "State2";
    }
    */

    if (this.props.isVisible) {
      return(
        <div>
          <p>{this.state.questionCount >= this.state.attributeList.length ?
            "Out of bounds" : (Array.isArray(this.state.attributeList[this.state.questionCount])? this.state.attributeList[this.state.questionCount][0] : this.state.attributeList[this.state.questionCount])}</p>
          <button className="fat clickable" onClick={() => this.setState(prevState => {return {questionCount: prevState.questionCount + 1}})}>incrementQuestionCount</button>
          <p>QuestionCount = {this.state.questionCount}</p>
          <p>Page refresh resets the state. </p>
          {this.state.points?.map(points => (<p key={points}>{points}</p>))}

        </div>
      );
    } else {
      return(null);
    }
  }
}
