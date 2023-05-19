export default function ShowEmployee({id,first_name,last_name,email,avatar}){
    return <div style={{width:"300px",float:"left",borderStyle:"groove", borderWidth:"2px",borderColor:"red"}}>
        <p>Id:{id}</p>
        <p>Name:{first_name+" "+last_name}</p>
        <p>Email:{email}</p>
        <p><img src={avatar} alt="" width="100" height='100'></img></p>
    </div>
}