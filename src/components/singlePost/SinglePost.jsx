import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/11391081/pexels-photo-11391081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Kendall</b></span>
          <span className="singlePostDate">2 hours ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur ducimus voluptatum amet vitae incidunt eligendi, voluptate ad, cumque qui molestiae nobis porro nulla magni rem voluptas sit quaerat accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur ducimus voluptatum amet vitae incidunt eligendi, voluptate ad, cumque qui molestiae nobis porro nulla magni rem voluptas sit quaerat accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur ducimus voluptatum amet vitae incidunt eligendi, voluptate ad, cumque qui molestiae nobis porro nulla magni rem voluptas sit quaerat accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur ducimus voluptatum amet vitae incidunt eligendi, voluptate ad, cumque qui molestiae nobis porro nulla magni rem voluptas sit quaerat accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur ducimus voluptatum amet vitae incidunt eligendi, voluptate ad, cumque qui molestiae nobis porro nulla magni rem voluptas sit quaerat accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur ducimus voluptatum amet vitae incidunt eligendi, voluptate ad, cumque qui molestiae nobis porro nulla magni rem voluptas sit quaerat accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequatur ducimus voluptatum amet vitae incidunt eligendi, voluptate ad, cumque qui molestiae nobis porro nulla magni rem voluptas sit quaerat accusantium.

        </p>

      </div>
    </div>
  )
}
