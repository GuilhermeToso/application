import React from "react";
import { Body } from "../../Components/Body";
import { NonEditorStyle } from "../../Styles";
import { Header } from "../../Components/Header";
const Contact = () => {
    return (
        <Body
            Background={NonEditorStyle.Background}
            HeaderHeight={NonEditorStyle.HeaderHeight}
        >
            <Header displayNav={true}></Header>
            <h1>Contact Page</h1>
        </Body>
    )
}

export default Contact