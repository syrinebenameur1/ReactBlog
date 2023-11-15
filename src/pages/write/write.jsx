import "./write.css"

export default function write() {
  return (
    <div className="write">
        <img className="writeImg"
        src="https://images.unsplash.com/photo-1604600327058-55012a92bfb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>  
          <input type="text"placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell Your Story..." type="text" class="writeInput writeText"></textarea>
        </div>
<button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
