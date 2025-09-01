import "./UserDetails.css"

function UserDetails({ user }) {

    if (!user) {
        return (
            <div className='user-detail'>
                <h2>Select A user to see details</h2>
            </div>
        )
    }
    return (
        <div className='user-detail'>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.city}, {user.address.street}</p>
        </div>
    )
}

export default UserDetails