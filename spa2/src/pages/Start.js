import React, { Component } from "react";
import Article from "../components/Article";
const article = [
  {
    id: 0,
    title: "Coś o czymś",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, omnis. Placeat adipisci nesciunt debitis similique odio sint, suscipit nihil aperiam esse unde molestiae accusantium doloribus, numquam quas voluptatem eaque et.",
  },
  {
    id: 1,
    title: "Coś z niczego",
    author: "Kowalski",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate enim quibusdam minima vero inventore aperiam numquam quas maxime ipsa sunt! Quo illum doloremque laudantium hic provident vel dignissimos minus ducimus.",
  },
  {
    id: 2,
    title: "Dieta",
    author: "rogalski",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo fugit dicta corporis delectus doloribus tenetur in necessitatibus nobis ut soluta praesentium minima ab, quibusdam deleniti modi reiciendis quae saepe!",
  },
];
const Start = () => {
  const content = article.map((item) => (
    <Article
      id={item.id}
      title={item.title}
      text={item.text}
      author={item.author}
    />
  ));

  return <>{content}</>;
};
export default Start;
