export default function Card(props) {
    let badgeText
    if(props.openSpots===0){
        badgeText="SOLD OUT"
    }else if(props.location === "Online"){
        badgeText="ONLINE"
    }
    return (
        <article className="card">
           {props.openSpots=== 0 && <div className="card-badge">SOLD OUT</div>}
            <img className="card-img" src={`./images/${props.img}`} />
            <div className="card-rating">
                <img className="card-star" src="./images/Star1.png" />
                <span>{props.rating}</span>
                <span className="light">({props.reviewCount}) • </span>
                <span className="light">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p><span className="rate">from ${props.price} </span>/person</p>
        </article>
    
    );
}