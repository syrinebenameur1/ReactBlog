import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
      <img className="postImage"
      src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D"
       alt="Bloom"/>
      <p> 
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, beatae neque explicabo vero quaerat aspernatur, culpa, quis tenetur quam minima molestias sapiente excepturi mollitia animi </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
     <ul className="sidebarList">
      <li className="sidebarListItem">Life</li>
      <li className="sidebarListItem">Music</li>
      <li className="sidebarListItem">Style</li>
      <li className="sidebarListItem">Sport</li>
      <li className="sidebarListItem">Tech</li>
      <li className="sidebarListItem">Cinema</li>
     </ul>
      </div>
      <div className="sidebarItem">
         <div className="sidebarTitle">FOLLOW US</div>
         <div className="sidebarSocial">
         <i className="sidebarIcons fa-brands fa-square-facebook"></i>
<i className="sidebarIcons fa-brands fa-square-x-twitter"></i>
<i className="sidebarIcons   fa-brands fa-square-pinterest"></i>
<i className="sidebarIcons   fa-brands fa-square-instagram"></i>
         </div>
      </div>
    </div>
  )
}
