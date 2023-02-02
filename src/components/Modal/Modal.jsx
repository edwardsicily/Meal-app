import React, { useState } from "react";
import "./modal.css";
import { useGlobalContext } from "../../Context";
import { MdClose } from "react-icons/md";
import MyCategoryIcon from "../myCategoryIcon/MyCategoryIcon";
import ModalListitem from "../ModalListItem/ModalListitem";
import Button from "../Button/Button";

function Modal() {
  const { closeModal, selectedMeal } = useGlobalContext();
  const [activeTab, setActiveTab] = useState("ingredients");

  /*  const handleCloseModal = (event) => {
    event.stopPropagation();
    closeModal();
  }; */

  const changeTab = () => {
    setActiveTab((tab) =>
      tab === "instructions" ? "ingredients" : "instructions"
    );
  };
  const renderIngredientli = () => {
    let newArr = [];
    for (let i = 1; i < 21; i++) {
      if (!selectedMeal[`strIngredient${i}`]) break;
      console.log(i);
      const obj = {
        ingredient: selectedMeal[`strIngredient${i}`],
        amount: selectedMeal[`strMeasure${i}`],
      };
      newArr.push(obj);
    }
    return newArr;
  };
  const listArray = renderIngredientli();

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img
          className="modal-img"
          src={selectedMeal.strMealThumb}
          alt="modal-img"
        />
        <div className="modal-info">
          <div className="info-top">
            <h1 className="title">{selectedMeal.strMeal}</h1>
            <MyCategoryIcon value={selectedMeal.strCategory} />
          </div>
          <div className="info-bottom">
            <div className="btn-container">
              <Button
                style={activeTab === "ingredients" ? "active" : ""}
                content={"Ingredients"}
                action={changeTab}
              />
              <Button
                style={activeTab === "instructions" ? "active" : ""}
                content={"Instructions"}
                action={changeTab}
              />
            </div>

            {activeTab === "instructions" && (
              <>
                <h3>Instructions</h3>
                <p>{selectedMeal.strInstructions}</p>
              </>
            )}
            {activeTab === "ingredients" && (
              <div>
                <h3>Ingredients</h3>
                <ul>
                  {listArray.map((item, idx) => {
                    return <ModalListitem key={idx} obj={item} />;
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <button className="close-modal" onClick={() => closeModal()}>
          <MdClose />
        </button>
      </div>
    </aside>
  );
}

export default Modal;
