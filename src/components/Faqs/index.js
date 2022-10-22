import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="faqs-container">
        <div className="faqs-item-container">
          <h1 className="heading">FAQs</h1>
          <ul className="items-container">
            {faqsList.map(eachFaq => (
              <FaqItem faqsListDetails={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
