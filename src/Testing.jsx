import React from 'react'

function Testing() {
  const handleclick=()=>{
    document.querySelector('.sidebar').classList.add('open')
  }
  const handleclick2=()=>{
    document.querySelector('.sidebar').classList.remove('open')
  }

  return (
    <>
    <div style={{border:'1px solid black',padding:'20px'}}>
     <button onClick={handleclick}>Click</button> App Bar
    </div>
    <aside className='sidebar' style={{width:'200px',backgroundColor:'grey'}}>
      <ul >
        <button onClick={handleclick2}>close</button>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </aside>
    </>
  )
}

export default Testing