
import './App.css'

function App() {
  const Width = 960;
  const Height = 500;
  

  return (
    <>
      <div className=''>
      <svg width={Width} height={Height}>
        <circle 
        cx={Width/2} 
        cy={Height/2}
        fill="yellow" 
        stroke="black"
        stroke-width="5"
        r="245">
        </circle>

        <circle 
        cx="380" 
        cy="150" 
        r="50">
        </circle>
        <circle 
        cx="580" 
        cy="150" 
        r="50">
        </circle>
    </svg>
      </div>
      <p className="read-the-docs">
        Some data Viz 
      </p>
    </>
  )
}

export default App
