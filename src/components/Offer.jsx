import React from 'react'

const Offer = (props) => {
    const arrColors = [
        {id: 0, class: ''},
        {id: 1, class: 'accent-1'},
        {id: 2, class: 'accent-2'},
    ]

    return (
        <figure className='offer'>
            <img src={props.imgUrl} alt={props.title} />
            <figcaption>
                <h2 className={arrColors.find(obj => obj.id === props.titleColor).class}>{props.title}</h2>
                <h4 className={arrColors.find(obj => obj.id === props.textColor).class}>{props.text}</h4>
            </figcaption>
        </figure>
    );
};

export default Offer;