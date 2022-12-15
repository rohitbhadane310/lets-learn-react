import React from "react";

export default function About() {
    return (
        <>
         <div className="container">
            <nav class="nav">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled">Disabled</a>
            </nav>
        </div>
        <div className="container">
            <button type="submit" className="btn btn-primary">dark mode</button>
        </div>
        </>
    )
}