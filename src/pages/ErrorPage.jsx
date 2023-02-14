import * as React from "react"

import { useNavigate } from "react-router-dom"

export default function ErrorPage(){

    const navigate = useNavigate()

    function BackToHomePage(){
        return navigate("/")
    }

    return(
        <div style={{textAlign: "center", margin: "100px 0px"}}>
            <img width="180px" height="150px" src="./assets/404.png" alt="Error404Image" />
            <h1 style={{margin: "30px 0px"}}>Page Not Found!!</h1>
            <p>The Requested URL was not found on this server.</p>
            <p>Click <span onClick={BackToHomePage} style={{textDecoration: "underline", color: "blue"}}>Here</span> to go back to the Homepage and try the request again.</p>
        </div>
    )
}
