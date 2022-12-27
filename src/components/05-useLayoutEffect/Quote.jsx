import { useLayoutEffect, useRef, useState } from "react"

const Quote = ({quote, author}) => {
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({with : 0, height: 0})

  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());

  }, [quote])


  return (
    <div>
      <blockquote ref={pRef} className='m-5 text-lg'>
        {quote}
      </blockquote>
      <h3 className='m-5 text-xl'>-{author}</h3>
    </div>
      
  )
}

export default Quote
