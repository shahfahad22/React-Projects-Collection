import "./Card.css"

function Card({user, onClick}) {
  return (
    <div className='user-card' onClick={onClick}>{user?.name}</div>
  )
}

export default Card