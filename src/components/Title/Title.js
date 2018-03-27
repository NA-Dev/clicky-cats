import React from "react";
import "./Title.css";

const Title = props => (
    <div class="row">
        <h1 className="row title">{props.title}</h1>
        <h3 className="score">Score: {props.score}</h3>
        <button className="btn btn-default" type="button" onClick={props.reset}>Reset</button>
        <h2 className="message">{props.message}</h2>
    </div>
);

export default Title;
