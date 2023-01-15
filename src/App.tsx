import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LuisAntonioDeMelo.png",
      name: "Luis Antonio",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que",
      },
      { type: "paragraph", content: "fiz no NLW Return ...." },
      { type: 'link', content: '👌 jane.desing/doctor"' },
      { type: 'hashtag', content: ["#NovoProjeto", "#Nlw ", "#Rocketseat"] },
    ],
    publishedAt: new Date('2022-01-14 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que",
      },
      { type: "paragraph", content: "fiz no NLW Return ...." },
      { type: "link", content: '👌 jane.desing/doctor"' },
      { type: 'hashtag', content: ["#NovoProjeto", "#Nlw ", "#Rocketseat"] },
    ],
    publishedAt: new Date('2022-01-14 20:00:00'),
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(
            post => (
            <Post key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
