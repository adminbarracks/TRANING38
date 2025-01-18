import React, { useState } from "react";
import "./App.css";
import img1 from "../src/assets/logo/logo.png"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    if (id === "admin@38barracks.com" && password === "icybug") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  const loadPlaylist = (playlistId) => {
    window.open(
      `https://www.youtube.com/embed/videoseries?list=${playlistId}`,
      "_blank",
      "fullscreen=yes"
    );
  };

  const exitApp = () => {
    alert("Exiting the application.");
    window.close();
  };

  return (
    <div className="app">
      <div className="header">
        <img src={img1||"null"} className="logo" />
        <h1>38 Barracks Training App</h1>
      </div>

      {!isLoggedIn ? (
        <div id="login-screen" className="login-screen">
          <h2>Login</h2>
          <input type="text" id="id" placeholder="ID" className="input" /><br /><br />
          <input type="password" id="password" placeholder="Password" className="input" /><br /><br />
          <button className="btn" onClick={login}>Login</button>
        </div>
      ) : (
        <div id="category-screen" className="category-screen">
          <h2>Training Categories</h2>
          <div className="category-container">
            {categories.map((category) => (
              <div
                key={category.name}
                className="category"
                onClick={() => loadPlaylist(category.playlistId)}
              >
                {category.name}
              </div>
            ))}
          </div>
          <button className="btn exit-button" onClick={exitApp}>
            Exit
          </button>
        </div>
      )}
    </div>
  );
};

const categories = [
  { name: "New Joinee", playlistId: "PL-T7RhTUNvkLZ0u8ieaS6ZHWWfFoW1ulu" },
  { name: "Team Leader", playlistId: "PL-T7RhTUNvkIOp_NhtDMpq_exArBxq7P1" },
  { name: "Team Member", playlistId: "PL-T7RhTUNvkKH0gSzQOQoTCD-AORD-9tO" },
  { name: "Runner", playlistId: "PL-T7RhTUNvkJ6Uc-DHJAVtWGBp2iHcPWZ" },
  { name: "Shop 5", playlistId: "PL-T7RhTUNvkKjEqQjfw9BK3SUNF-7hDft" },
  { name: "Drinks Pickup", playlistId: "PL-T7RhTUNvkIpThUm4mO5z5w3qPpWa9FZ" },
  { name: "Podium", playlistId: "PL-T7RhTUNvkLOsRoY_FWMiQZNVoIhjRf4" },
  { name: "Hookah", playlistId: "PL-T7RhTUNvkKCthU1fwkjTka3eQP62hJg" },
  { name: "Guard Opening Works", playlistId: "PL-T7RhTUNvkL9iEiTBw5BPNcYlGhARHTr" },
  { name: "Guard Closing Works", playlistId: "PL-T7RhTUNvkL5n9HMVJtIAPI9Ene5kje-" },
  { name: "Food Menu", playlistId: "PL-T7RhTUNvkItouLyVmoqUDHMog3aaw4R" },
  { name: "Bar Menu", playlistId: "PL-T7RhTUNvkIZfe-B_5mILV51oaoiERoH" },
  { name: "Party Related", playlistId: "PL-T7RhTUNvkIpdmyuw2Qx81v35W_WV_pc" },
  { name: "Sales & Marketing", playlistId: "PL-T7RhTUNvkJCbZ41A3VYPAmDGpXsBBph" },
  { name: "Breefing Videos", playlistId: "PL-T7RhTUNvkLGrK5-8KKBDSotW6XsX4uZ" },
  { name: "Recipe Indian", playlistId: "PL-T7RhTUNvkK6dtQle3YV-eWOOid7C_bd" },
  { name: "Recipe Chinese", playlistId: "PL-T7RhTUNvkJrLi3g4aJM_EE23aUC9zGE" },
  { name: "Recipe Tandoor", playlistId: "PL-T7RhTUNvkJ8YMufSs81DiND55K6pmEF" },
  { name: "Recipe Conti", playlistId: "PL-T7RhTUNvkJy7IrZMY5tMO3_higxn6UN" },
];

export default App;
