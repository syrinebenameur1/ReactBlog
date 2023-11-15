import Header from "../../components/Header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./Home.css"

export default function home() {
  return (
    <> 
    <Header/>
    <div className="home" >
        <Posts/>
        <Sidebar/>
    </div>
    </>
  )
}
