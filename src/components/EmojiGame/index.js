import {Component} from 'react'

import NavBar from '../NavBar/index'

import EmojiCard from '../EmojiCard/index'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  render() {
    const {emojisList} = this.props
    return (
      <div className="main-container">
        <NavBar />
        <div className="actual-container">
          <ul className="game-card-container">
            {emojisList.map(eachOne => (
              <EmojiCard eachOne={eachOne} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
