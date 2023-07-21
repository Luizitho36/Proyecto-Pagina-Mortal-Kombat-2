import "./Videos.css";
import ReactPlayer from "react-player";

function Videos() {
  return (
    <div className="divVideos">
      <br></br>

      <ReactPlayer
        className="videoMK"
        url={[
          "https://youtu.be/5fDPlbKKZ6M",
          "https://youtu.be/vTjGr0oaK2w",
          "https://youtu.be/e0lOs6fve7A",
          "https://youtu.be/Q_H7sXqNlXA",
          "https://youtu.be/6hrGIhtVwqE"
        ]}
      />
      
      <br></br>
    </div>
  );
}

export default Videos;
