import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isIconClicked: false}

  onClickIcon = () => {
    this.setState(prevState => ({isIconClicked: !prevState.isIconClicked}))
  }

  renderAnswerText = () => {
    const {faqsListDetails} = this.props
    const {answerText} = faqsListDetails
    const {isIconClicked} = this.state
    const answerDisplay = isIconClicked && answerText

    if (isIconClicked) {
      return (
        <>
          <p className="answer-text">{answerDisplay}</p>
        </>
      )
    }
    return null
  }

  render() {
    const {faqsListDetails} = this.props
    const {questionText} = faqsListDetails
    const {isIconClicked} = this.state

    const plusUrl =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const minusUrl =
      'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const imageUrl = isIconClicked ? minusUrl : plusUrl
    //  const answerDisplay = isIconClicked && answerText
    const altText = isIconClicked ? 'minus' : 'plus'

    return (
      <li className="list-container">
        <div className="card-container">
          <div className="text-container">
            <h1 className="question-text">{questionText}</h1>

            <button type="button" className="button" onClick={this.onClickIcon}>
              <img alt={altText} className="image" src={imageUrl} />
            </button>
          </div>
          {this.renderAnswerText()}
        </div>
      </li>
    )
  }
}
export default FaqItem
