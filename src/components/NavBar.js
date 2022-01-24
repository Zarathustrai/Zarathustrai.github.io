import React from 'react';
import RenderPage from './RenderPage';

export default function NavBar({ setPage }) {

  return (
    <>
      {/*<div className="topbar unselectable">*/}
      {/*</div>*/}
      <div className="navbar fat bartext font unselectable">
          <div className="nav big fat font">Beer Mentor</div>
        <div className="fat nav clickable font" tabIndex="1234" onClick={() => setPage("Questions")}>Questions</div>
        <div className="fat nav clickable font" tabIndex="1235" onClick={() => setPage("Analysis")}>Analysis</div>
        <div className="fat nav clickable font" tabIndex="1236" onClick={() => setPage("About")}>About</div>
      </div>
    </>
  );
}
