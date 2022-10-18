export default function Card(props) {
    let badgeText
    if(props.item.openSpots===0){
        badgeText="SOLD OUT"
    }else if(props.item.location === "Online"){
        badgeText="ONLINE"
    }
    return (
        <article className="card">
           {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" alt="" src={`./images/${props.item.coverImg}`} />
            <div className="card-rating">
                <img className="card-star" alt="" src="./images/Star1.png" />
                <span>{props.item.stats.rating}</span>
                <span className="light">({props.item.stats.reviewCount}) • </span>
                <span className="light">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p><span className="rate">from ${props.item.price} </span>/person</p>
        </article>
    
    );
}