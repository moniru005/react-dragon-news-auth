import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const {title, image_url, details, _id } = news;
    return (
        <div className="p-4" >
            <div className="author">

            </div>
            <h2 className="text-xl">{title}</h2>
            <img className="my-2 rounded-lg" src={image_url} alt="" />
            <p className="">{details.slice(0, 200)} <br />
                <Link className="font-semibold text-orange-300" to={`/news/${_id}`}>Read More...</Link>
            </p>

            <div className="rating">

            </div>
            
        </div>
    );
};

export default NewsCard;