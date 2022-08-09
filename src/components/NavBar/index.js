// Write your code here.

import './index.css'

const NavBar = () => (
  <div className="nav-bar">
    <div className="name-title">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="emoji-logo"
      />
      <p className="emoji-game-title">Emoji Game</p>
    </div>
    <div className="score-topScore">
      <p className="score">Score: 0</p>
      <p className="top-score">Top Score: 0</p>
    </div>
  </div>
)

export default NavBar
