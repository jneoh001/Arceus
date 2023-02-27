import React, { useState, setState } from "react";
import "./RegistrationPage.css";
import decorativeImage from "./assets/decorativeImage.png";
import searchBar3 from "./assets/searchBar3.svg";
import FormControl from "react-bootstrap/FormControl";
import Outline from "../Outline";
const RegistrationPage = () => {
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setPassword] = useState(null);
  const [activityLevel, setActivityLevel] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [carbohydrateGoal, setCarbohydrateGoal] = useState(null);
  const [calorieGoal, setCalorieGoal] = useState(null);
  const [fatGoal, setFatGoal] = useState(null);
  const [proteinGoal, setProteinGoal] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id == "email") {
      setEmail(value);
    }
    if (id == "firstName") {
      setFirstName(value);
    }
    if (id == "lastName") {
      setLastName(value);
    }
    if (id == "password") {
      setPassword(value);
    }
    if (id == "activityLevel") {
      setActivityLevel(value);
    }
    if (id == "weight") {
      setWeight(value);
    }
    if (id == "height") {
      setHeight(value);
    }
    if (id == "carbohydrateGoal") {
      setCarbohydrateGoal(value);
    }
    if (id == "calorieGoal") {
      setCalorieGoal(value);
    }
    if (id == "fatGoal") {
      setFatGoal(value);
    }
    if (id == "proteinGoal") {
      setProteinGoal(value);
    }
  };

  const handleSubmit = () => {
    console.log(
      email,
      firstName,
      lastName,
      password,
      activityLevel,
      weight,
      height,
      carbohydrateGoal,
      calorieGoal,
      fatGoal,
      proteinGoal
    );
  };

  return (
    <div className="register-page">
      <div classname="image">
        <img className="decorative-image" src={decorativeImage} />
      </div>
      <div className="form">
        <div className="form-body">
          <div className="emailaddress">
            <label className="form__label" for="email">
              Email Address
            </label>
            <input
              className="form__input"
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="flex-container">
            <div className="firstname">
              <label className="form__label" for="firstName">
                First Name
              </label>
              <input
                type="text"
                name=""
                id="firstName"
                className="form__input "
                placeholder="First Name"
                value={firstName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="lastname">
              <label className="form__label" for="lastName">
                Last Name
              </label>
              <input
                type="text"
                name=""
                id="lastName"
                className="form__input "
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="activity-level">
            <label className="form__label" for="activityLevel">
              Activity Level
            </label>
            <select
              className="form__lavel"
              for="activityLevel"
              id="activityLevel"
              value={activityLevel}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="sedentary">Sedentary</option>
              <option value="lightly-active">Lightly Active</option>
              <option value="moderately-active">Moderately Active</option>
              <option value="very-active">Very Active</option>
            </select>
          </div>
          <div className="flex-container-1">
            <div className="weight">
              <label className="form__label" for="weight">
                Weight (kg)
              </label>
              <input
                className="form__input"
                type="text"
                id="weight"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="height">
              <label className="form__label" for="height">
                Height (cm)
              </label>
              <input
                className="form__input"
                type="text"
                id="height"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="flex-container-2">
            <div className="flex-container-3">
              <div className="cat-absolute-container-5">
                <div className="carbohydrate-goal">
                  <label className="form__label" for="carbohydrateGoal">
                    Carbohydrate Goal (g)
                  </label>
                  <input
                    className="form__input"
                    type="text"
                    id="carbohydrateGoal"
                    placeholder="Carbohydrate Goal (g)"
                    value={carbohydrateGoal}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <img className="search-bar-3" src={searchBar3} />
            </div>
            <div className="flex-container-4">
              <div className="cat-absolute-container-6">
                  <div className="calorie-goal">
                  <label className="form__label" for="calorieGoal">
                      Calorie Goal (g)
                  </label>
                  <input
                      className="form__input"
                      type="text"
                      id="calorieGoal"
                      placeholder="Calorie Goal (g)"
                      value={calorieGoal}
                      onChange={(e) => handleInputChange(e)}
                  />
                  </div>
              </div>
              <img className="search-bar-3" src={searchBar3} />
            </div>
          </div>
          <div className="flex-container-5">
            <div className="flex-container-6">
              <div className="cat-absolute-container-7">
                <div className="fat-goal">
                  <label className="form__label" for="fatGoal">
                    Fat Goal (g)
                  </label>
                  <input
                    className="form__input"
                    type="text"
                    id="fatGoal"
                    placeholder="Fat Goal (g)"
                    value={fatGoal}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <img className="search-bar-7" src={searchBar3} />
            </div>
            <div className="flex-container-7">
              <div className="cat-absolute-container-8">
                <div className="protein-goal">
                  <label className="form__label" for="proteinGoal">
                    Protein Goal (g)
                  </label>
                  <input
                    className="form__input"
                    type="text"
                    id="proteinGoal"
                    placeholder="Protein Goal (g)"
                    value={proteinGoal}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <img className="search-bar-6" src={searchBar3} />
            </div>
          </div>
          <div className="register-button-instance-1">
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="btn"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrationPage;
