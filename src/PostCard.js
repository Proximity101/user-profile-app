import React from "react";
import "./PostCard.css"; // Import CSS file

const PostCard = () => {
  return (
    <div className="post-card">
      <img
        src="Mountain.png"
        alt="Mountain scenery"
        className="post-image"
      />
      <div className="post-content">
        <p className="post-date">4 days ago</p>
        <h2 className="post-title">Post One</h2>
        <p className="post-description">
          Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus
          omnis illum maxime quod deserunt eligendi dolor.
        </p>
      </div>
      <div className="post-footer">
        <div className="footer-item">
          <span>4m</span>
          <p>READ</p>
        </div>
        <div className="footer-item">
          <span>5123</span>
          <p>VIEWS</p>
        </div>
        <div className="footer-item">
          <span>32</span>
          <p>COMMENTS</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;