import React from 'react';
import RenderPage from './RenderPage';

export default function NavBar({ setPage }) {

  return (
    <>
      <div className="topbar unselectable">
        <h1 className="fat big font">Beer Mentor</h1>
      </div>
      <div className="navbar fat medium font unselectable">
        <div className="fat nav clickable font" tabIndex="1234" onClick={() => setPage("Questions")}>Questions</div>
        <div className="fat nav clickable font" tabIndex="1235" onClick={() => setPage("Analysis")}>Analysis</div>
        <div className="fat nav clickable font" tabIndex="1236" onClick={() => setPage("About")}>About</div>
      </div>
    </>
  );
}
