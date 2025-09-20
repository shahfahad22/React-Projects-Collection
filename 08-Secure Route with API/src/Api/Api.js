export const loginUser = async (id, email) =>{
    try{
        const response  = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json()

        const user = users.find(
            (u)=> u.id.toString() === id.toString() && u.email === email
        )

        return user || null
    }catch(error){
        console.error(`Login Filed`, error)
        return null
    }
}