import React from 'react';
import Arrow from './svg/Arrow';

const PortfolioItem = ({imgLink, title, tagsArr, itemStyle}) => {
  return (
    <div className={(itemStyle) ? "page-portfolio-item "+itemStyle : "page-portfolio-item"}>
        <img src={imgLink} alt={title} />
        <h5>{title}</h5>
        <div className="bottom">
            <ul>
                {
                    tagsArr.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <button type='button'>
                <Arrow/>
            </button>
        </div>
    </div>
  )
}

export default PortfolioItem