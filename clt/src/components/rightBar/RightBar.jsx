import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>John</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Jane</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
              <span>Rashi </span>
              changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
              <span>Jane </span>
              changed their cover picture
              </p>
            </div>
            <span>5 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
              <span>John </span>
              changed their cover picture
              </p>
            </div>
            <span>10 min ago</span>
          </div>
          {/* <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
              <span>Rashi </span>
              changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div> */}
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Rashi</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Jane</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>John</span>
            </div>
          </div>
          {/* <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Rashi</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Rashi</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Rashi</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Rashi</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Rashi</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Rashi</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Rashi</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/18252679/pexels-photo-18252679/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online"/>
              <span>Rashi</span>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default RightBar;