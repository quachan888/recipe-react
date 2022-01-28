import React from "react";
import { MDBFooter, MDBIcon, MDBContainer } from "mdb-react-ui-kit";

export default function Footer() {
    return (
        <MDBFooter className="bg-dark text-center text-white mt-5">
            <MDBContainer className="p-4 pb-0">
                <section className="mb-4">
                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.facebook.com/quachan888/"
                        role="button"
                    >
                        <MDBIcon fab icon="facebook-f" />
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.linkedin.com/in/an-quach-96a81484/"
                        role="button"
                    >
                        <MDBIcon fab icon="linkedin-in" />
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://github.com/quachan888/recipe-react"
                        role="button"
                    >
                        <MDBIcon fab icon="github" />
                    </a>
                </section>
            </MDBContainer>

            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
                © 2022 Copyright:
                <a className="text-white" href='hhttps://anquach.com/"'>
                    &nbsp; An Quach
                </a>
            </div>
        </MDBFooter>
    );
}
