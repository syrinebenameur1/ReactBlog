import "./singlePost.css"

export default function singlePost() {
  return (
    <div className="singlePost" >
      <div className="singlePostWrapper">
        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=sph" alt="" className="singlePostImg" />
     <h1 className="singlePostTitle">
        Lorem ipsum, dolor sit amet 
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
     </h1>
     <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: <b>Syrine</b></span>
        <span className="singlePostdate"> 1 hour ago </span>

     </div>
     <p className="singlePostDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, facere vero? Iste corporis odio nam consequatur mollitia ex aperiam dolor omnis animi, minima illum placeat dolore obcaecati molestiae tenetur. Quisquam.
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, facere vero? Iste corporis odio nam consequatur mollitia ex aperiam dolor omnis animi, minima illum placeat dolore obcaecati molestiae tenetur. Quisquam.
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, facere vero? Iste corporis odio nam consequatur mollitia ex aperiam dolor omnis animi, minima illum placeat dolore obcaecati molestiae tenetur. Quisquam.
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, facere vero? Iste corporis odio nam consequatur mollitia ex aperiam dolor omnis animi, minima illum placeat dolore obcaecati molestiae tenetur. Quisquam.
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, facere vero? Iste corporis odio nam consequatur mollitia ex aperiam dolor omnis animi, minima illum placeat dolore obcaecati molestiae tenetur. Quisquam.

     </p>
      </div>
    </div>
  )
}
