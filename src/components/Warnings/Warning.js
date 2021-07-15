import "./Warning.scss"

const Warning = ({body, showWarning}) => {
  
  return(
    <div className={!showWarning ? `container-warning hide-warning` : `container-warning show-warning`}>
      <div className="warning">
          <h1>{body}</h1>
      </div>
    </div>
  )
}

export default Warning