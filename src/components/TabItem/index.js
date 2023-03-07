import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    updateActiveTabId(tabId)
  }

  const buttonStyles = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        onClick={onClickButton}
        type="button"
        className={`tab-btn ${buttonStyles}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
