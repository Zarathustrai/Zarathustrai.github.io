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
      sliderOneValue: 0,
      sliderTwoValue: 100,
      render: false,
      content: null,
      flavourCount: null,
      data: {},
    };
    this.sliderLoaded = false;
    this.analysis = {};
  }

    onTrigger = (event) => {
      this.props.parentCallback(event.target.myname.value);
      event.preventDefault();
    }

    shouldComponentUpdate(nextProps, nextState) {
      if((this.state.render || nextState.render) && (this.props.isVisible || nextProps.isVisible)) {
        return true;
      } else {
        return false;
      }
    }

  questionKnowledgeSystem(attribute) {
    let question = "";

    if (attribute === "price") {
      question = "What is your budget?"
      let name = attribute + "Attribute";
      this.analysis = {
        ...this.analysis,
        [question]: name
      }

      return ({
        "question": question,
        "answer1": "Show everything",
        "answer2": "insertRange"
        }

      );

    } else if (attribute === "abv") {
      question = "How strong do you want your beer to be?";
      let name = attribute + "Attribute";
      this.analysis = {
        ...this.analysis,
        [question]: name
      }

      return ({
        "question": question,
        "answer1": "Show everything",
        "answer2": "insertRange"
        }
      );

    } else if (attribute === "brewery") {
      question = "Which one of these popular breweries do you like?";
      let name = attribute + "Attribute";
      this.analysis = {
        ...this.analysis,
        [question]: name
      }

      return ({
        "question": question,
        "answer1": "Budweiser",
        "answer2": "Heineken",
        "answer3": "Stella Artois",
        "answer4": "Corona",
        "answer5": "Guinness",
        "answer6": "I don't like any of those / I don't know"
        }
      );

    } else if (attribute === "style") {
      question = "What style beer do you like?";
      let name = attribute + "Attribute";
      this.analysis = {
        ...this.analysis,
        [question]: name
      }

      return ({
        "question": question,
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
        }
      );

    } else if (attribute === "aroma") {
      question = "What " + attribute + " beer do you like?";
      let name = attribute + "Attribute";
      this.analysis = {
        ...this.analysis,
        [question]: name
      }

      return ({
        "question": question,
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
        }
      );

    } else if (this.state.attributeList[this.state.questionCount][0] === "flavours") {
      question = "Do you like the flavour " + attribute + "?";
      let name = attribute + "Attribute";
      this.analysis = {
        ...this.analysis,
        [question]: name
      }

      return ({
        "question": question,
        "answer1": "I love it",
        "answer2": "I like it",
        "answer3": "I'm not sure/neutral",
        "answer4": "I don't like it",
        "answer5": "I hate it",
        }
      );

    } else if (attribute ==="origin") {
      question = "What is your preferred beer " + attribute + "?";
      let name = attribute + "Attribute";
      this.analysis = {
        ...this.analysis,
        [question]: name
      }

      return ({
        "question": question,
        "answer1": "Belgium",
        "answer2": "Denmark",
        "answer3": "Germany",
        "answer4": "Netherlands",
        "answer5": "UK",
        "answer6": "Czech Republic",
        "answer7": "No preference"
        }
      );
    } else{
      //console.log("OOPSY WHOOPSY, this is an invalid attribute!");
      return {};
    }
  }

  pointKnowledgeSystem(attribute) {
    // Calculate point values for each attribute.
    // return [ratio negative (below), ratio perfect, ratio positive(over)]
    //console.log(attribute);
    if(Array.isArray(attribute)) {
      //console.log("array");
      if (attribute[0] === "bitterness") {
        //console.log("bitter!");
        if      (attribute[1]  >  1)  return [0.7,  3];
        else if (attribute[1] === 1)  return [0.4,  0.7];
        else if (attribute[1] === 0)  return [0.3,  0.4];
        else if (attribute[1] === -1) return [0.2,  0.4];
        else if (attribute[1]  <  -1) return [0,    0.2];
      }
    } else {
      if (attribute === "abv") {
        return [-0.6, 1, -1];
      } else
      if (attribute === "style") {
        return [5, 5];
      } else
      if (attribute === "color") {
        return [-0.7, -0.7];
      } else
      if (attribute === "aroma") {
        return [3, 3];
      } else
      if (attribute === "price") {
        return [-0.2, 1, -5];
      } else {
        alert("point calculation error: unsupported beer attribute found! \n" + "attribute = \"" + attribute + "\"");
        return [-1, -1];
      }
    }
  }

  pointCount() {
    let points = 0;
    let score = 0;
    let beerScore = [];
    //for every beer object
    this.state.beers.forEach(beer => {
      //console.log(beer);
      points = 0;
      //for every attribute in beer Object
      for (let attribute in beer) {
        if (attribute === "name" || attribute === "brewery" ||
        attribute === "description" || attribute === "imagesrc" || attribute === "id" ||
        attribute === "size" || attribute === "color" ) {
          continue;
        }
        score = 0;

        if (attribute !== "flavours") {
          for (let key in Object.keys(this.state.data)) {
            if (Object.keys(this.state.data)[key].toLowerCase().includes(attribute.toLowerCase())) {
              score = Object.values(this.state.data)[key];
              if (score === "") continue;
            }
          }

          //score can be: thing (string), value (-2 to 2)
          if (typeof score === 'string') {
            //console.log("string (beer attribute, scores):");
            //console.log(beer[attribute]);
            //console.log(score);
            if (beer[attribute].includes(score)) {
              points = points + this.pointKnowledgeSystem(attribute);
            }
            //console.log("-----end-calculation-string------")
          } else
          if (typeof score === "number") {
            //console.log("number (beer attribute, scores, calculation points):");
            //console.log(beer[attribute]);
            //console.log(score);
            if (score > 0) {
              //console.log(this.pointKnowledgeSystem(attribute)[1] * score);
              points = points + this.pointKnowledgeSystem(attribute)[1] * score;
            } else
            if (score < 0) {
              //console.log(this.pointKnowledgeSystem(attribute)[0] * score);
              points = points + this.pointKnowledgeSystem(attribute)[0] * score;
            }
            //console.log("-----end-calculation-number------")
          } else
          if (typeof score === "object") {
            //console.log("object (beer attribute, scores, calculation points):");
            //console.log(beer[attribute]);
            //console.log(score);
            if (parseFloat(beer[attribute]) > score[0] && parseFloat(beer[attribute]) < score[1]) {
              //console.log(this.pointKnowledgeSystem(attribute)[1]);
              points = points + this.pointKnowledgeSystem(attribute)[1];
            } else
            if (parseFloat(beer[attribute]) > score[1]) {
              let diff = parseFloat(beer[attribute]) - score[1];
              //console.log(this.pointKnowledgeSystem(attribute)[2] * diff);
              points = points + this.pointKnowledgeSystem(attribute)[2] * diff;
            } else
            if (parseFloat(beer[attribute]) < score[0]) {
              let diff = score[0] - parseFloat(beer[attribute]);
              //console.log(this.pointKnowledgeSystem(attribute)[0] * diff);
              points = points + this.pointKnowledgeSystem(attribute)[0] * diff;
            }
            //console.log("-----end-calculation-object------");
          }

        } else {
          //console.log("flavours (beer attributes, scores, calculation points):");
          for(let element in beer[attribute]) {
            for (let key in Object.keys(this.state.data)) {
              //if array element (eg. [bitterness, 0.2])
              if (Array.isArray(beer[attribute][element]) && beer[attribute][element].length >= 2) {
                if (Object.keys(this.state.data)[key].toLowerCase().includes(beer[attribute][element][0].toLowerCase())) {
                  score = Object.values(this.state.data)[key];
                  if (score === "" || score === "no IBU") continue;
                  if((typeof beer[attribute][element][1] === "number")) {
                    let bounds = this.pointKnowledgeSystem([beer[attribute][element][0], score]);
                    if (beer[attribute][element][1] > bounds[0] && beer[attribute][element][1] < bounds[1]) {
                      points = points + 3;
                    } else
                    if (beer[attribute][element][1] > bounds[1]) {
                      let diff = beer[attribute][element][1] - bounds[1];
                      points = points - (20 * diff);
                    } else
                    if (beer[attribute][element][1] < bounds[0]) {
                      let diff = bounds[0] - beer[attribute][element][1];
                      points = points - (15 * diff);
                    }
                  }
                }
                //if not/single array element
              } else {
                if (Object.keys(this.state.data)[key].toLowerCase().includes(beer[attribute][element][0].toLowerCase())) {
                  score = Object.values(this.state.data)[key];
                  points = points + score;
                }
              }
            }
          }
        }
      }
      beerScore.push([beer.name, points]);
      //console.log("beerScore");
      //console.log([beer.name, points]);
    });
    //console.log(beerScore);
    beerScore.sort(function(a, b) {
      return b[1] - a[1];
    });
    console.log(beerScore);

    let results = [];
    let beerList = [];
    let stateBeerList = [];
    this.state.beers.forEach(beer => {
      stateBeerList.push(beer.name);
    });
    beerScore.forEach(beer => {
      beerList.push(stateBeerList.indexOf(beer[0]));
    });
    //console.log("indexes");
    //console.log(beerList);

    for (let beer in beerList) {
      if (beer < 3) {
        console.log("adding beer to results");
        console.log(this.state.beers[beerList[beer]]);
        results.push(
          <div key={this.state.beers[beerList[beer]].name} className="card">
            <div className="beer">
              <img src={this.state.beers[beerList[beer]].imagesrc} />
            </div>
            <h4 className="font smallmedium">{this.state.beers[beerList[beer]].name + " (" + this.state.beers[beerList[beer]].abv+")"}</h4>
            <text className="cardtext">{this.state.beers[beerList[beer]].description}</text>
          </div>
        )
      } else {
        break;
      }
    }

    this.analysis = {
      ...this.analysis,
      beerList: beerScore
    }

    let title = "We Recommend You..."
    let slider = false;
    return [title, results, slider];
  }

  setAttributes() {
    let attributesCopy = this.state.attributeList.slice();

    //for every beer object
    this.state.beers.forEach(beer => {
      //for every attribute in beer Object
      for (let attribute in beer) {
        if (!(attribute === "name" || attribute === "brewery" ||
        attribute === "description" || attribute === "imagesrc" || attribute === "id" ||
        attribute === "size" || attribute === "color" || attribute === "origin")) {
          //check if duplicate
          if (attributesCopy.includes(attribute)) {
            let index = attributesCopy.indexOf(attribute);
            //check if array so to push individual elements instead of arrays
            if(Array.isArray(beer[attribute])) {
              for (let element in beer[attribute]) {
                //check if duplicate
                if (!(attributesCopy[index+1].includes(beer[attribute][element][0]))) {
                  //push the individual elements
                  attributesCopy[index+1].push(beer[attribute][element][0]);
                }
              }
            } //end of array check
            // if not array value
            else {
              if (!(attributesCopy[index+1].includes(beer[attribute]))) {
                attributesCopy[index+1].push(beer[attribute]);
              }
            }
          } // end of if duplicate code
          // if not duplicate
          else {
            //push key
            attributesCopy.push(attribute);

            //2 ways, one just value, other array of array values
            if (Array.isArray(beer[attribute])) {
              for (let element in beer[attribute]) {
                if (element < 1) {
                  attributesCopy.push([beer[attribute][element][0]]);
                } else {
                  let index = attributesCopy.length - 1;
                  attributesCopy[index].push(beer[attribute][element][0]);
                }

              }
            } else {
              //push singe value as array
              attributesCopy.push([beer[attribute]]);
            }
          } // end of if not duplicate code
        }
      }
    });

    for (var i = 1; i < attributesCopy.length; i++) {
      attributesCopy[i-1] = [attributesCopy[i-1]];
  		attributesCopy[i-1].push(attributesCopy[i]);
  		attributesCopy.splice(i, 1);
  	}

    this.setState({attributeList: attributesCopy});
  }

  componentDidMount() {
    const url = "https://api.jsonbin.io/b/61ea9776a785682f9719f382/latest";
    fetch(url, {
      headers: {
        "secret-key": "$2b$10$KmJxZbbdQOIyizb54EKujOIIWwd.vFh4E0B3efAua8t9T/tLf5HV6"
      }
    })
      .then(response => response.json())
      .then(beers => {console.log(beers); this.setState({beers});})
      .then(() => this.setState({beers: JSON.parse(JSON.stringify(this.state.beers)).beers}))
      .then(() => this.setAttributes())
      .then(() => this.setState({questionCount: 0}))
      .then(() => this.setState({flavourCount: 0}))
      .then(() => this.setState({content: this.qAndA()}))
      .then(() => this.setState({render: true}))
      .then(() => this.setState({render: true}));

  }

  toCamelCase(str) {
    return str
            .replace(/'/gi, '')
            .replace(/[^a-z0-9]/gi, ' ')
            .replace(/\s+/g,' ').trim()
            .toLowerCase()
            .split(' ')
            .map((el, ind) => ind === 0 ? el : el[0].toUpperCase()
            + el.substring(1, el.length))
            .join('');
  }

  recordValue(e) {
    //console.log(e.target);
    let name = "";
    let value = 0;
    if (e.target.getAttribute('id') === 'slider-1' || e.target.getAttribute('id') === 'slider-2') {
      name = this.toCamelCase("fact " + this.state.attributeList[this.state.questionCount][0]);
      value = [this.state.sliderOneValue, this.state.sliderTwoValue];
    } else
    if (this.state.attributeList[this.state.questionCount][0] !== "flavours") {
      name = this.toCamelCase("fact " + this.state.attributeList[this.state.questionCount][0]);
      value = e.target.getAttribute('name');
    } else {
      name = this.toCamelCase("fact " + this.state.attributeList[this.state.questionCount][1][this.state.flavourCount]);
      value = this.toCamelCase(e.target.getAttribute('name'));
      if      (value === "iLoveIt")           value = 3;
      else if (value === "iLikeIt")           value = 1;
      else if (value === "imNotSureNeutral")  value = 0;
      else if (value === "iDontLikeIt")       value = -1;
      else if (value === "iHateIt")           value = -3;
    }
    if (typeof value === 'string' && (value.includes("don't know") || value.includes("everything"))) {
      this.updateQuestionState();
      return;
    }
    //console.log([name, value]);

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });

    this.analysis = {
      ...this.analysis,
      [name]: value
    }

    this.props.updateState(this.analysis);
    if (!(e.target.getAttribute('id') === 'slider-1' || e.target.getAttribute('id') === 'slider-2')) this.updateQuestionState();
    return;
  }

  qAndA() {
    if (this.state.questionCount >= this.state.attributeList.length) {
      return this.pointCount();
    }
    let QA = {}
    this.sliderLoaded = false;

    if (this.state.attributeList[this.state.questionCount][0] !== "flavours") {
      if (this.state.flavourCount) this.setState({flavourCount: 0});
      QA = this.questionKnowledgeSystem(this.state.attributeList[this.state.questionCount][0]);
    } else {
      QA = this.questionKnowledgeSystem(this.state.attributeList[this.state.questionCount][1][this.state.flavourCount]);
    }

    let question = QA.question;
    let answers = [];
    let values = Object.values(QA);
    values.splice(0, 1);

    for (let value in values) {
      if(values[value] === "insertRange") {
        if (!this.sliderLoaded) this.sliderLoaded = true;
        answers.push(
          <>
          <div name={values[value]} className="answer unselectable" key={values[value]}>Between:</div>
          <div key={values[value]} name="slider" className="answer-slider rangeSlider">
            <div className="values small">
              <span id="range1">
                0
              </span>
              <span> - </span>
              <span id="range2">
                100
              </span>
            </div>
            <div id="slider-track" className="slider-track">
              <input type="range" min="0" max="20" value={this.state.sliderOneValue} id="slider-1" onChange={(e) => {this.recordValue(e); this.sliders(1);}}/>
              <input type="range" min="0" max="20" value={this.state.sliderTwoValue} id="slider-2" onChange={(e) => {this.recordValue(e); this.sliders(2);}}/>
            </div>
          </div>
          </>
        );
      } else {
        if (this.sliderLoaded) this.sliderLoaded = false;
        answers.push(<div name={values[value]} className="clickable answer unselectable" key={values[value]} onClick={(e) => this.recordValue(e)}>{values[value]}</div>);
      }
    }
    return [question, answers, this.sliderLoaded];
  }

  sliders(select) {
    if(!this.props.isVisible) return;
    let sliderOne = document.getElementById("slider-1");
    let sliderTwo = document.getElementById("slider-2");
    let displayValOne = document.getElementById("range1");
    let displayValTwo = document.getElementById("range2");
    let minGap = 0;
    let sliderTrack = document.getElementById("slider-track");
    let sliderMaxValue = document.getElementById("slider-1").max;

    if(select === 3) {
      this.slideOne(sliderOne, sliderTwo, displayValOne, displayValTwo, minGap, sliderTrack, sliderMaxValue);
      this.slideTwo(sliderOne, sliderTwo, displayValOne, displayValTwo, minGap, sliderTrack, sliderMaxValue);
      this.fillColor(sliderOne, sliderTwo, minGap, sliderTrack, sliderMaxValue);
    } else
    if (select === 2) {
      this.slideTwo(sliderOne, sliderTwo, displayValOne, displayValTwo, minGap, sliderTrack, sliderMaxValue);
    } else
    if (select === 1) {
      this.slideOne(sliderOne, sliderTwo, displayValOne, displayValTwo, minGap, sliderTrack, sliderMaxValue);
    }
  }

  slideOne(sliderOne, sliderTwo, displayValOne, displayValTwo, minGap, sliderTrack, sliderMaxValue) {
    if (sliderOne === null || sliderTwo == null) return;

    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    this.sliderOneValue = sliderOne.value;
    this.fillColor(sliderOne, sliderTwo, minGap, sliderTrack, sliderMaxValue);
  }

  slideTwo(sliderOne, sliderTwo, displayValOne, displayValTwo, minGap, sliderTrack, sliderMaxValue) {
    if (sliderOne === null || sliderTwo == null) return;

    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = ( this.state.attributeList[this.state.questionCount][0] === "abv" ? sliderTwo.value + "%" :
      (this.state.attributeList[this.state.questionCount][0] === "price" ? "€" + sliderTwo.value + ",-" : sliderTwo.value ));
    this.fillColor(sliderOne, sliderTwo, minGap, sliderTrack, sliderMaxValue);
  }

  fillColor(sliderOne, sliderTwo, minGap, sliderTrack, sliderMaxValue) {
    if (sliderOne === null || sliderTwo == null) return;

    let percent1 = (sliderOne.value / sliderMaxValue) * 100;
    let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    this.setState({
      sliderOneValue: sliderOne.value,
      sliderTwoValue: sliderTwo.value,
      content: this.qAndA(),
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.pointsCalculated && this.state.questionCount === this.state.attributeList.length) {

    }
    if (prevProps.isVisible !== this.props.isVisible) {
      //console.log("switched to page Questions");
      if (this.sliderLoaded) this.sliders(3);
    }
    if (prevState.questionCount !== this.state.questionCount) {
      this.sliderLoaded = false;
    }
    if (this.state.content[0] !== this.qAndA()[0]) {
      this.setState({content: this.qAndA()});
      this.props.updateState(this.analysis);
    }
    if ((!prevState.render && this.state.render) || (!prevState.isVisible && this.state.isVisible) || (prevState.content[2] !== this.state.content[2] && this.state.content[2])) {
      if(this.state.content[2]) this.sliders(3);
    }
  }

  updateQuestionState() {
    if (this.state.attributeList[this.state.questionCount][0] !== "flavours") {
      this.setState(prevState => {return {questionCount: prevState.questionCount + 1}});
    } else {
      if (this.state.flavourCount+1 < this.state.attributeList[this.state.questionCount][1].length) {
        this.setState(prevState => {return {flavourCount: prevState.flavourCount + 1}});
      } else {
        this.setState(prevState => {return {questionCount: prevState.questionCount + 1}});
      }
    }
  }


  render() {

    if (this.props.isVisible) {
      if (this.state.content !== null && this.state.questionCount !== null && this.state.questionCount < this.state.attributeList.length) {
        console.log("render");

        return(
          <div className={this.state.animate ? "fadeIn content" : "content"}>
            <div className="leftContent"></div>

            <div className="centerContent small">

              <div className="fat">
                <div className="medium question unselectable">
                  {this.state.content[0]}
                </div>
                <div className="answers">
                  {this.state.content[1]}
                </div>
              </div>
              <button className="fancyButton continue small fat" onClick={() => this.updateQuestionState()}>Next</button>
            </div>

            <div className="rightContent"></div>
          </div>
        );
      } else
      if (this.state.content !== null && this.state.content[1] !== null && this.state.questionCount >= this.state.attributeList.length) {
        return(
          <div className={this.state.animate ? "fadeIn content" : "content"}>
            <div className="leftContent"></div>

            <div className="centerContent small">

              <div className="question fat">
                <p className="medium">{this.state.content[0]}</p>
                <div className="cards">
                  <>
                    {this.state.content[1]}
                  </>
                </div>
              </div>

              <button className="fancyButton reset small fat" onClick={() => {this.setState({data: {}}); this.setState({questionCount: 0}); this.props.clearData()}}>Reset</button>
            </div>

            <div className="rightContent"></div>
          </div>
        );
      } else {
        return(
          <div className={this.state.animate ? "fadeIn content" : "content"}>
            <div className="centerContent small">
            </div>
          </div>
        );
      }
    } else {
      if (this.state.animate) {
        this.setState({animate: false});
      }
      return(null);
    }
  }
}
