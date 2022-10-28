import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const cards = [
    {
      id: "1",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "red",
    },
    {
      id: "2",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "blue",
    },
    {
      id: "3",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "yellow",
    },
    {
      id: "4",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "yellow",
    },
    {
      id: "5",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "green",
    },
    {
      id: "6",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "black",
    },
    {
      id: "7",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "blue",
    },
    {
      id: "8",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "red",
    },
    {
      id: "9",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "green",
    },
    {
      id: "10",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "red",
    },
    {
      id: "11",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "black",
    },
    {
      id: "12",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "blue",
    },
    {
      id: "13",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "yellow",
    },
    {
      id: "14",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "yellow",
    },
    {
      id: "15",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "green",
    },
    {
      id: "16",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "black",
    },
    {
      id: "17",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "blue",
    },
    {
      id: "18",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "black",
    },
    {
      id: "19",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "green",
    },
    {
      id: "20",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "red",
    },
    {
      id: "21",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "red",
    },
    {
      id: "22",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "blue",
    },
    {
      id: "23",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "black",
    },
    {
      id: "24",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "yellow",
    },
    {
      id: "25",
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      color: "green",
    },
  ];

  const [score, setScore] = useState(0);
  const [life, setLife] = useState(2);

  useEffect(() => {
    alert(
      "Welcome to Memory Game 📝. \n Rules: You have to select boxes 😀. \n There are 2️⃣5️⃣ boxes(🎁) in which 5️⃣ has bombs(💣). \n You have 3️⃣ lifes Can you try."
    );
    // return <h1>Welcome to Memory Game 📝. \n Rules: You have to select boxes 😀. \n There are 2️⃣5️⃣ boxes(🎁) in which 5️⃣ has bombs(💣). \n You have 3️⃣ lifes Can you try.</h1>
  }, []);

  if (life < 0) {
    // alert(
    //   "You Loose 😢.\n You Don't have any lifes now. \n Please Restart the game 😁"
    // );
    return (
      <h1>
        You Loose 😢.\n You Don't have any lifes now. \n Please Restart the game
        😁
      </h1>
    );
    // window.location.reload();
  }

  if (score === 20) {
    // alert("Woooo hoooo you won 🎇🔥");
    return <h1>Woooo hoooo you won 🎇🔥</h1>;
  }

  const flipCard = (e) => {
    const TargettedId = e.target.id;

    const clickedMessage = cards.filter((card) => card.id === TargettedId);

    document.getElementById(
      TargettedId
    ).style.cssText = `background-color : ${clickedMessage[0].color}`;

    if (
      TargettedId === "6" ||
      TargettedId === "11" ||
      TargettedId === "16" ||
      TargettedId === "18" ||
      TargettedId === "23"
    ) {
      alert(`Bomb 💣💣. You Loose.\n now you have only ${life} life.`);
      setLife((prev) => prev - 1);
    } else {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="container">
      <h1 className="score">SCORE: {score}</h1>
      <div className="playArea">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              id={card.id}
              onClick={(e) => flipCard(e)}
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundRepeat: "no-repeat",
                zIndex: 10,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
