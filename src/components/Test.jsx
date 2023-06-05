import React, { useState } from 'react'

const Test = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <a className="border px-2 cursor-pointer" onClick={() => setCount((p) => p + 1)}>
        Click ME
      </a>
    </div>
  )
}

export default Test
