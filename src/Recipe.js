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
    MDBBtn,
} from "mdb-react-ui-kit";

const Recipe = (props) => {
    // console.log(props.recipe);
    const { url, image, label, ingredients, cuisineType, dishType, source } =
        props.recipe.recipe;
    return (
        <MDBCol>
            <MDBCard className="hover-shadow">
                <MDBCardImage position="top" src={image} alt={label} />

                <MDBCardBody>
                    <MDBCardTitle className="text-dark fw-bold fs-4">
                        {label}
                    </MDBCardTitle>
                    <MDBCardText className="text-center">
                        <MDBBadge pill color="success">
                            Cuisine: {cuisineType}
                        </MDBBadge>

                        <MDBBadge color="secondary" className="mx-2">
                            Dish: {dishType}
                        </MDBBadge>
                    </MDBCardText>
                    <MDBListGroup flush>
                        {ingredients.map((e, index) => (
                            <MDBListGroupItem key={index} className="fs-6">
                                {e.text}
                            </MDBListGroupItem>
                        ))}
                    </MDBListGroup>

                    <a href={url} target="_blank">
                        <div class="d-grid gap-2">
                            <MDBBtn color="dark">Get the Recipe</MDBBtn>
                        </div>
                    </a>

                    <MDBCardFooter className="text-end fs-6 text-muted">
                        By {source}
                    </MDBCardFooter>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default Recipe;
