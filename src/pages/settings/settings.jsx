import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">    
       <div className="settingsTitle">
        <span className="settingsUpdateTitle">Update Your Account</span>
        <span className="settingsDeleteTitle">Delete Your Account</span>

       </div>
       <form className="settingsForm">
    <label>Profile Picture</label>
    <div className="settingsPP">
        <img src="https://images.unsplash.com/photo-1604600327058-55012a92bfb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
    <label htmlFor="fileInput">
    <i className="settingsPPIcon fa-solid fa-circle-user"></i>

    </label>
    <input type="file" id="fileInput" style={{display:"none"}}/>
    </div>
    <label >Username</label>
    <input type="text" placeholder="Syrine" />
    <label >Email</label>
    <input type="email" placeholder="syrinebenameuur@gmail.com" />
    <label >Password</label>
<button className="settingsSubmit">Update</button>
    </form>
    </div>
        <Sidebar/>
    </div>
  )
}
