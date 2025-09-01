import Card from '../Card/Card'
import "./User.css"

function User({user, onSelectUser}) {
  return (
    <div className='user-list'>
        {user?.map((us)=>(
            <Card key={us.id} user={us} onClick={()=> onSelectUser(us)} />
        ))}
    </div>
  )
}

export default User