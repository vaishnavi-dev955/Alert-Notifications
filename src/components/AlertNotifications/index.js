import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  SuccessView = () => (
    <Notification>
      <div className="container">
        <AiFillCheckCircle className="circle-style" />
        <div className="sub-container">
          <h1 className="success-heading">Success</h1>
          <p className="paragraph">
            You can access all the files in the folder
          </p>
        </div>
        <GrFormClose className="close-icon" />
      </div>
    </Notification>
  )

  ErrorView = () => (
    <Notification>
      <div className="container">
        <RiErrorWarningFill className="Error-Icon" />
        <div className="sub-container">
          <h1 className="Error-heading">Error</h1>
          <p className="paragraph">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
        <GrFormClose className="close-icon" />
      </div>
    </Notification>
  )

  WarningView = () => (
    <Notification>
      <div className="container">
        <MdWarning className="warning-icon " />
        <div className="sub-container">
          <h1 className="warning-heading">Warning</h1>
          <p className="paragraph">
            Viewers of this file can see comments and <br />
            suggestions
          </p>
        </div>
        <GrFormClose className="close-icon" />
      </div>
    </Notification>
  )

  InfoView = () => (
    <Notification>
      <div className="container">
        <MdInfo className="Info-icon" />
        <div className="sub-container">
          <h1 className="Info-heading">Info</h1>
          <p className="paragraph">
            Anyone on the internet can view these files
          </p>
        </div>
        <GrFormClose className="close-icon" />
      </div>
    </Notification>
  )

  render() {
    return (
      <div className="overall-container">
        <h1>Alert Notifications</h1>
        {this.SuccessView()}
        {this.ErrorView()}
        {this.WarningView()}
        {this.InfoView()}
      </div>
    )
  }
}

export default AlertNotifications
