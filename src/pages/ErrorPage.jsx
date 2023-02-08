import React from "react"

export default function ErrorPage(){
    return(
        <div style={{textAlign: "center", margin: "100px 0px"}}>
            <img width="180px" height="150px" src="./assets/404.png" alt="Error404Image" />
            <h1 style={{margin: "30px 0px"}}>Page Not Found!!</h1>
            <p>The Requested URL was not found on this server.</p>
            <p>Go back to the <a href="http://localhost:3000/">Home Page</a> and try the request again.</p>
        </div>
    )
}