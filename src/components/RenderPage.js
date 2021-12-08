import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import About from './About';
import Analysis from './Analysis';
import Questions from './Questions';

export default function RenderPage() {
  const [page, setPage] = useState("Questions");
  const [visibleAbout, setVisibleAbout] = useState(0);
  const [visibleAnalysis, setVisibleAnalysis] = useState(0);
  const [visibleQuestions, setVisibleQuestions] = useState(1);


  useEffect(() => {
    (page == "About") ?  setVisibleAbout(1) : setVisibleAbout(0);
    (page == "Analysis") ?  setVisibleAnalysis(1) : setVisibleAnalysis(0);
    (page == "Questions") ?  setVisibleQuestions(1) : setVisibleQuestions(0);
  }, [page])


  return(
    <div>
      <NavBar setPage={setPage}/>
      <div className="content content-padding">
        <About isVisible={visibleAbout}/>
        <Analysis isVisible={visibleAnalysis}/>
        <Questions isVisible={visibleQuestions}/>
      </div>
    </div>
  );
};
