import Page from "./Page"
import BlogNavBar from "../blog/BlogNavBar"
import "./BlogPost.scss"

export default (props) => (
  <Page {...props}>
    <div className="blog-post">
      <BlogNavBar />
      {props.children}
    </div>
  </Page>
)