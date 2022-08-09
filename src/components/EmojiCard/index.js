// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachOne} = props
  const {emojiName, emojiUrl, id} = eachOne
  return (
    <li className="">
      <button type="button" className="emoji-li-container">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
