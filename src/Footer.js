import React from "react";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
    return (
        <MDBFooter className="bg-light text-center text-white">
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            >
                © 2022 Copyright:{" "}
                <a className="text-white" href="https://anquach.com/">
                    An Quach
                </a>
            </div>
        </MDBFooter>
    );
}
