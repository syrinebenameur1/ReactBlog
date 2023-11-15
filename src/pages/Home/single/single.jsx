import Sidebar from "../../../components/sidebar/Sidebar"
import "./single.css"
import SinglePost from "../../../components/singlePost/singlePost"

export default function single() {
  return (
    <div className="single" >
     <SinglePost/>
    <Sidebar/>
    </div>
  )
}
