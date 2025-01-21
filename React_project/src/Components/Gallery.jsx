const Gallery=(props1)=>{

        return(
            <div>
                <p>Inside the gallery</p>
                <h3>Welcome to {props1.page} page</h3>
                <img src ="https://pbs.twimg.com/profile_images/1169109470967820291/AJzI4C-S_400x400.jpg"></img>
                <h3>Viewing {props1.image}</h3>
                
                </div>
            )
    }
    
export default Gallery;