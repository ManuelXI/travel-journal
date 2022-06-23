import locationPin from "../images/locationPin.png";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="img--container">
          <img src={props.imageUrl} className="card--image" alt="katie" />
        </div>
        <div>
          <div className="right--upper">
            <img src={locationPin} className="location-pin" alt="katie" />
            <p> {props.location} </p>
            <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </div>
          <div className="right--lower">
            <h2>{props.title}</h2>
            <p className="dates">{`${props.startDate} - ${props.endDate}`}</p>
            <p className="description-text">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
