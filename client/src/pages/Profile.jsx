import { useSelector } from "react-redux"


function Profile() {
const {currentUser}=useSelector(state=>state.user)
  return (
    <div className="p-3 max-w-lg mx-auto"
    >
    <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>  
    <form className="flex flex-col gap-3">
      <img src={currentUser.avatar} alt='profile'
      className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"/>
      <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username"/>
      <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email"/>
      <input type="password" placeholder="password" className="border p-3 rounded" id="password"/>
      <button className="bg-slate-500 p-4 uppercase hover:opacity-95 disabled:opacity-80">update</button>
    </form>
    <div className="flex justify-between mt-5">
      <span className="text-red-700 cursor-pointer">Delete the account</span>
      <span className="text-red-700 cursor-pointer">Log Out</span>

    </div>
    </div>
  )
}

export default Profile
