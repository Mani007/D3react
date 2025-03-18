
import './App.css'
import * as d3 from "d3";

function App() {
  const Width = 960;
  const Height = 500;
  // Chain of function is called in order to create the svg calculations.
  const Anarc = d3.arc()
    .innerRadius(50)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(Math.PI * 2);
  

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
    {/* svg shapes are given by the D3 library we just need to call chain of function to invoke the calculation for svg */}
    < path d={Anarc()}/>

    </svg>
      </div>
      <p className="read-the-docs">
        Some data Viz 
      </p>
    </>
  )
}

export default App
