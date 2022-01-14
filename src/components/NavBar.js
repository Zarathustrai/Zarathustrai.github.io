import React from 'react';
import RenderPage from './RenderPage';
import Logo from "./Logo";

export default function NavBar({ setPage }) {

  return (
    <header className="app-header">
      <div className="top-left">
          <Logo/>
          <div className="divider"/>
          <div className="divider-width"/>
        <div className="nav clickable" onClick={() => setPage("Questions")}>Questions</div>
        <div className="nav clickable" onClick={() => setPage("Analysis")}>Analysis</div>
        <div className="nav clickable" onClick={() => setPage("About")}>About</div>
      </div>
    </header>

  );
}
