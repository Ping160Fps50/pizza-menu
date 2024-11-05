import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzaLength = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaLength > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organtic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We have no Pizza :(</p>
      )}
      {/* <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={10}
        photoName="pizzas/prosciutto.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  const { name, ingredients, price, photoName, soldOut } = pizzaObj;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 3;
  const closeHour = 22;
  const isOpen = hour >= openHour && closeHour <= 22;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

// const skills = [
//   {
//     skill: "Html+Css",
//     level: "advanced",
//     color: "blue",
//   },
//   {
//     skill: "Javascript",
//     level: "advanced",
//     color: "yellow",
//   },
//   {
//     skill: "Web Design",
//     level: "advanced",
//     color: "green",
//   },
//   {
//     skill: "Git and Github",
//     level: "intermediate",
//     color: "red",
//   },
//   {
//     skill: "Git and Github",
//     level: "intermediate",
//     color: "red",
//   },
//   {
//     skill: "React",
//     level: "intermediate",
//     color: "orange",
//   },
//   {
//     skill: "Svelte",
//     level: "beginner",
//     color: "purple",
//   },
// ];

// function App() {
//   return (
//     <div className="card">
//       <Avatar PhotoName="pizzas/prosciutto.jpg" />
//       <div className="data">
//         <Intro name="Alireza Shah" info="i like to play games and programing" />
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar({ PhotoName }) {
//   return <img src={PhotoName} alt="Avatar" />;
// }

// function Intro({ name, info }) {
//   return (
//     <div className="intro">
//       <h1>{name}</h1>
//       <p>{info}</p>
//     </div>
//   );
// }

// function SkillList() {
//   const skillLength = skills.length;
//   return skillLength > 0 ? (
//     <ul className="row">
//       {skills.map((skill) => (
//         <Skill
//           skillName={skill.skill}
//           bgColor={skill.color}
//           level={skill.level}
//         />
//       ))}
//     </ul>
//   ) : null;
// }

// function Skill({ skillName, bgColor, level }) {
//   return <li style={{ backgroundColor: bgColor }}>
//     {skillName}  
//     {level === "beginner" && "beginner"}
//     {level === "advanced" && "advanced"}
//     {level === "intermediate" && "intermediate"}
//   </li>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
