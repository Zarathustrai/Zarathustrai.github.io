import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import About from './About';
import Analysis from './Analysis';
import Questions from './Questions';
import Logo from './Logo';
import './Logo.css';

export default function RenderPage() {
  const [page, setPage] = useState("Questions");
  const [visibleAbout, setVisibleAbout] = useState(0);
  const [visibleAnalysis, setVisibleAnalysis] = useState(0);
  const [visibleQuestions, setVisibleQuestions] = useState(1);
  const [data, setData] = useState({});


  useEffect(() => {
    (page == "About") ?  setVisibleAbout(1) : setVisibleAbout(0);
    (page == "Analysis") ?  setVisibleAnalysis(1) : setVisibleAnalysis(0);
    (page == "Questions") ?  setVisibleQuestions(1) : setVisibleQuestions(0);
  }, [page])

  useEffect(() => {
    setData(data);
  }, [data])

  const resetData = () => {
    if (data !== {}) setData({});
  };

  return(
    <div>
      <NavBar setPage={setPage}/>
      <Logo/>
      <div>
        <About isVisible={visibleAbout}/>
        <Analysis data={data} isVisible={visibleAnalysis}/>
        <Questions clearData={resetData} updateState={setData} isVisible={visibleQuestions}/>
      </div>
    </div>
  );
};
