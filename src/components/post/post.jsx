import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
                src="https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">TI</span>
                    <span className="postCat">HARDWARE</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eos voluptas repellendus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eos voluptas repellendus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eos voluptas repellendus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eos voluptas repellendus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eos voluptas repellendus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eos voluptas repellendus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eos voluptas repellendus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eos voluptas repellendus?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eos voluptas repellendus?
            </p>
        </div>
    );
};
