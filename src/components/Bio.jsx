export function Bio (props) {
    return(
        <div className="bio">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
            <img className="image-bio" src={props.link}/>         
        </div>
    )
}

