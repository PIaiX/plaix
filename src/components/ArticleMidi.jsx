import React, { memo } from "react";
import { Link } from "react-router-dom";

const ArticleMidi = memo((
    {
        data
    }
) => {
    return (
        (<article className="midi">
            <img src={data.imgLink} alt={data.title} />
            <div className="text">
                <div>
                    <h4>{data.title}</h4>
                    <p>{data.text}</p>
                </div>
                <div className="d-flex justify-content-between align-items-end">
                    <Link to={"/article/" + data.id} className="btn-3">Подробнее</Link>
                    <ul className="markers">
                        <li className="dev">#Разработка</li>
                        <li className="css">#CSS</li>
                    </ul>
                </div>
            </div>
        </article>)
    );
});

export default ArticleMidi;