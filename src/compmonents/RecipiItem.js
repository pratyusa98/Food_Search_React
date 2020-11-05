import React from 'react'

export const RecipiItem = (props) => {
    const {name,image,ingredientLines} = props;
    return (
       
        <div className="card py-2 text-center">
            <img src={image} alt="source_image" className="img-fluid w-50 mx-auto rounded-circle text-center"/>
            <div className="card-body">
                <h5 className="text">{name}</h5>
            </div>
            <ul className="list-group list-group-flux">
                {
                    ingredientLines.map(ingredient =>
                      <li className="list-group-item">{ingredient}</li>)
                }
            </ul>
        </div>
    
    )
}

export default RecipiItem
