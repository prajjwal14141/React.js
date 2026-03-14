import {createPortal} from 'react-dom'

const Popup = (props) => {
  return createPortal(
    <div>
        {
            props.copy && (
                <div style={{position:'absolute', bottom: '3rem'}}>Copied to clipboard</div>
            )
        }
    </div>, document.querySelector("#Popup")
  )
};

export default Popup;