import React from 'react';
import RenderPage from './RenderPage';

export default function NavBar({ setPage }) {

  return (
    <header className="app-header">
      <div className="top-left">
        <div className="nav clickable" onClick={() => setPage("Questions")}>Questions</div>
        <div className="nav clickable" onClick={() => setPage("Analysis")}>Analysis</div>
        <div className="nav clickable" onClick={() => setPage("About")}>About</div>
      </div>
      <div className="center">
        <h2>Beer App</h2>
      </div>
      <div className="top-right">
      </div>
    </header>
  );
}
