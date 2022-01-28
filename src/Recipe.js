import React from "react";

const caloriesStyle = {
    color: "red",
};

const Recipe = (props) => {
    // console.log(props.recipe);
    const { calories, image, label, ingredients } = props.recipe.recipe;
    return (
        <div className="recipe">
            <h1 className="recipe-title">{label}</h1>
            <p className="caloriesStyle">Calories: {calories}</p>
            <ol>
                {ingredients.map((e, index) => (
                    <li key={index}>{e.text}</li>
                ))}
            </ol>
            <img src={image} alt={label} />
        </div>
    );
};

export default Recipe;
