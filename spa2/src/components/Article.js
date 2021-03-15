import React, { Component } from "react";
const Article = (props) => {
  const styles = {
    marginTop: 40,
  };
  return (
    <>
      <article style={styles}>
        <h1
          style={{
            marginBottom: 3,
            textTransform: "uppercase",
          }}
          key={props.id}>
          {props.title}
          <br />
          <span
            style={{
              display: "block",
              marginBottom: 10,
              fontSize: 12,
            }}
            id={props.id}>
            {props.author}
          </span>
        </h1>

        <br />
        <p
          style={{
            fontSize: 15,
          }}
          id={props.id}>
          {props.text}
        </p>
      </article>
    </>
  );
};

export default Article;
