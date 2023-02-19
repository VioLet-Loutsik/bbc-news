import React from "react";
import EditorPicksOne from "./EditorPicksOne";
import EditorPicksTwo from "./EditorPicksTwo";
import EditorPicksThree from "./EditorPicksThree";

import "./editorPicks.css";

function EditorPicks() {
  return (
    <>
      <div className="classDayTime">
        <p className="titleHeader">Editor's Picks</p>
      </div>
      <div className="picksBlock">
        <div>
          <div className="pickOne">
            <EditorPicksOne />
          </div>
          <div className="pickTwo">
            <EditorPicksTwo />
          </div>
          <div className="pickTwo">
            <EditorPicksThree />
          </div>
        </div>
        <div className="businessNews">
          <div className="headerBusinessNews">
            <p>latest business news</p>
          </div>
          <ul className="classUl">
            <div className="blockSpanFirst">
              <span className="spanStyle">1</span>
              <li className="firstLi">
                Amazon calls staff back to office three days a week
              </li>
            </div>
            <div className="blockSpanSecond">
              <span className="spanStyle">2</span>
              <li className="secondLi">
                French energy giant EDF posts worst-ever results
              </li>
            </div>
            <div className="blockSpanFirst">
              <span className="spanStyle">3</span>
              <li className="firstLi">
                US food firm fined after children worked nights
              </li>
            </div>

            <div className="blockSpanSecond">
              <span className="spanStyle">4</span>
              <li className="secondLi">
                Qatar's Sheikh Jassim and Ineos bid for Man Utd
              </li>
            </div>
            <div className="blockSpanFirst">
              <span className="spanStyle">5</span>
              <li className="firstLi">
                Strike action brings German airports to a halt
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default EditorPicks;
