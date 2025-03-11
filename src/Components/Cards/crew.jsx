import React from 'react'
import "./crew.css"


function MyCards(props) {
  return (
    <>
    <div className="card">
      <img src={props.pic} alt="waaa" />
      <h2>{props.title}</h2>
      <p>{props.data}</p>
    </div>

    </>
  )
}

export default MyCards
