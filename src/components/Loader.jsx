/* eslint-disable react/prop-types */

function Loader({width}) {
  return (
    <div>
        <span className={`loading loading-bars w-${width}`}></span>   
    </div>
  )
}

export default Loader