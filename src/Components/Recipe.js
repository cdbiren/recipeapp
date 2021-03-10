import React from 'react';
import main from './main.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return (
      <>
        <div className={main.recipe}>
          <h1>{title}</h1>
          <ol>
                    {ingredients.map((ingredient) => {
                        return (
                            <li>{ingredient.text}</li>
                )
            })}
            
          </ol>
          <p>{calories}</p>
          <img src={image} alt={title} />
        </div>
      </>
    );
}

export default Recipe;
