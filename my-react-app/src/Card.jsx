import profilepic from './assets/profile.jpg'
function Card(){
  return(
    <div className="card">
        <img className="card-image"src={profilepic} alt="onuum illa" /> {/* img src="https://via.placeholder.com/150"*/}
        <h2 className="card-title">This is website</h2>
        <p className='card-text'>This is yt Channel and this is not a yt channel</p>
    </div>


  );
}
export default Card