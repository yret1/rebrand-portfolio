import ReactLoading from 'react-loading';
import './Loading.css'
function Loading () {
  return (  
    <div className="loading">
        <ReactLoading type="spinningBubbles" color="white" />
      <p>Currently Rebranding</p>
    </div>
  )
}

export default Loading