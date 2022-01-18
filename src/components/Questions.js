import React from 'react';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: true,
      beers: null,
      attributeList: [],
      questionCount: null,
      points: [],
      pointsCalculated: false,
      QA: {},
    };
  }


  questionKnowledgeSystem(attribute) {
    if (attribute === "price") {
      this.state.QA = {
        "question": "What is your budget?",
        "answer1": "insertRange",
        "answer2": "Show everything"
      };
    } else if (attribute === "ABV") {
      this.state.QA = {
        "question": "How strong do you like your beer?",
        "answer1": "insertRange",
        "answer2": "Show everything"
      };
    } else if (attribute === "brewery") {
      this.state.QA = {
        "question": "Which one of these popular breweries do you like?",
        "answer1": "Budweiser",
        "answer2": "Heineken",
        "answer3": "Stella Artois",
        "answer4": "Corona",
        "answer5": "Guinness",
        "answer6": "I don't like any of those / I don't know"
      };
    } else if (attribute === "style") {
      this.state.QA = {
        "question": "Do you like " + attribute + "style beer?",
        "answer1": "Blond",
        "answer2": "Brown",
        "answer3": "White / Wheat",
        "answer4": "Triple",
        "answer5": "Barleywine",
        "answer6": "IPA / Bitter",
        "answer7": "Porter / Stout",
        "answer8": "Smoked",
        "answer9": "Fruit / Sour",
        "answer10": "Cider / Radler",
        "answer11": "Glutten Free",
        "answer 12": "I don't know"
      };
    } else if (attribute === "aroma") {
      this.state.QA = {
        "question": "What " + attribute + "beer do you like?",
        "answer1": "Fruit",
        "answer2": "Caramel",
        "answer3": "Hop",
        "answer4": "Malt",
        "answer5": "Wood",
        "answer6": "Spice / Herb",
        "answer7": "Wheat / Yeast",
        "answer8": "Chocolate",
        "answer9": "Vanilla",
        "answer10": "Coffee",
        "answer11": "I don't know / I don't care"
      };
    } else if (attribute === "flavours") {
      this.state.QA = {
        "question": "What flavor beer do you like?",
        "answer1": "Fruit",
        "answer2": "Caramel",
        "answer3": "Hop",
        "answer4": "Citrus",
        "answer5": "Wood",
        "answer6": "Spice / Herb",
        "answer7": "Wheat / Yeast",
        "answer8": "Chocolate",
        "answer9": "Vanilla",
        "answer10": "Coffee",
        "answer11": "I don't know / I don't care"
      };
    } else if (attribute==="origin"){
      this.state.QA = {
        "question": "What is your preferred beer " + attribute + "?",
        "answer1": "Belgium",
        "answer2": "Denmark",
        "answer3": "Germany",
        "answer4": "Netherlands",
        "answer5": "UK",
        "answer6": "Czech Republic",
        "answer7": "No preference"
      }
    } else{
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
        <div className={this.state.animate ? "fadeIn content" : "content"}>
          <div className="leftContent"></div>

          <div className="centerContent small">
            <div className="question fat">
              <p>{this.state.questionCount >= this.state.attributeList.length ?
                "Out of bounds" : (Array.isArray(this.state.attributeList[this.state.questionCount])? this.state.attributeList[this.state.questionCount][0] : this.state.attributeList[this.state.questionCount])}</p>
              <button className="fancyButton yes small fat" onClick={() => this.setState(prevState => {return {questionCount: prevState.questionCount + 1}})}>next</button>
              <button className="fancyButton no small fat" onClick={() => this.setState(prevState => {return {questionCount: prevState.questionCount + 1}})}>reset</button>
              <p>QuestionCount = {this.state.questionCount}</p>
              <p>Page refresh resets the state. </p>
              {this.state.points?.map(points => (<p key={points}>{points}</p>))}
            </div>
          </div>

          <div className="rightContent"></div>
        </div>
      );
    } else {
      if (this.state.animate) {
        this.setState({animate: false});
      }
      return(null);
    }
  }
}
