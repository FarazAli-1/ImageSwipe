import { useState } from "react";
import "./App.css";

const images = [
  "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg",
  "https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg",
  "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg",
  "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg",
  "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg",
  "https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg",
  "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg",
  "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg",
  "https://images.pexels.com/photos/1168940/pexels-photo-1168940.jpeg",
  "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg",
  "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg",
  "https://images.pexels.com/photos/1534057/pexels-photo-1534057.jpeg",
  "https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg",
  "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg",
  "https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg",
  "https://images.pexels.com/photos/1131774/pexels-photo-1131774.jpeg",
  "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg",
  "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg",
  "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
  "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
  "https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg",
  "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg",
  "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg",
  "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",
  "https://images.pexels.com/photos/162389/lost-places-old-decay-ruin-162389.jpeg"

];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgNum,setImgNum] = useState(1);
  const [like,setLike] = useState(0);
  const [dislike,setDislike] = useState(0);


  function handleButtonClick() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    
  }

  function imgcount(){
    setImgNum((prevImgNum)=>{
    if(prevImgNum==images.length){ return 1}
    else {return prevImgNum+1}
  })
  }

  function likeInc(){
    setLike(like+1)
  }

  function DislikeInc(){
    setDislike(dislike+1)
  }

  function refresh(){
    setCurrentIndex(0);
    setDislike(0);
    setLike(0);
    setImgNum(1);
  }
  return (
    <div className="container">
      <div className="title">
       <span>ImageSwipe</span>
      </div>
      <div className="image-container">
      <img src={images[currentIndex]} className="image" />
      </div>
      <div className="img-count">
          <p>Image {imgNum} of {images.length}</p>
      </div>
      <div className="buttons">
        <button onClick={()=>{
          handleButtonClick();
          imgcount();
          likeInc();
        }} className="like-button">
          Like
        </button>
        <button onClick={()=>{
          handleButtonClick();
          imgcount();
          DislikeInc();
        }}  className="dislike-button">
          Dislike
        </button>
      </div>
      <div className="likeDislikeCount">
        <p>Likes : {like}</p>
        <p>Dislikes : {dislike}</p>
      </div>
      <div>
        <button className="refresh" onClick={refresh}>Refresh</button>
      </div>
    </div>
  );
}
