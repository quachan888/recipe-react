import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBadge,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardFooter,
    MDBCol,
} from "mdb-react-ui-kit";

const Recipe = (props) => {
    // console.log(props.recipe);
    const { url, image, label, ingredients, cuisineType, dishType, source } =
        props.recipe.recipe;
    return (
        <MDBCol>
            <a href={url} target="_blank">
                <MDBCard style={{ maxWidth: "22rem" }} className="h-100">
                    <MDBCardImage position="top" src={image} alt={label} />

                    <MDBCardBody>
                        <MDBCardTitle className="text-danger fw-bold">
                            {label}
                        </MDBCardTitle>
                        <MDBListGroup flush>
                            {ingredients.map((e, index) => (
                                <MDBListGroupItem key={index}>
                                    {e.text}
                                </MDBListGroupItem>
                            ))}
                        </MDBListGroup>
                        <MDBCardText>
                            <MDBBadge color="success">{cuisineType}</MDBBadge>
                            <MDBBadge color="warning" className="mx-2">
                                {dishType}
                            </MDBBadge>
                        </MDBCardText>

                        <MDBCardFooter>
                            <small className="text-muted">
                                Source: {source}
                            </small>
                        </MDBCardFooter>
                    </MDBCardBody>
                </MDBCard>
            </a>
        </MDBCol>
    );
};

export default Recipe;
