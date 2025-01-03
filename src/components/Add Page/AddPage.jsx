import React, { useState } from "react";
import './AddPage.css';



 const AddPage =({ onClose }) => {
    const [mealDate,setMealDate]=useState("");
    const [mealName,setMealName]=useState("");
    const [mealQuantity,setMealQuantity]=useState("");
    const[mealType,setMealType]=useState("");

    const handleSave = () => {
        const mealData = {
            mealDate,
            mealName,
            mealQuantity,
            mealType,
        }
        console.log("Meal Data:",mealData);
        onClose();
    }
    return(
        <div className="model-backdrop">
            <div className="model-container">
                <div className="model-header">
                    <h3>Add Your Extra Meal</h3>
                    <button className="close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="model-body">
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" value={mealDate} onChange={(e)=>setMealDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Meal Name</label>
                        <input type="text" placeholder="Enter meal name" value={mealName} onChange={(e) => setMealName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Quantity (grams/ml)</label>
                        <input type="text" placeholder="Enter quantity" value={mealQuantity} onChange={(e) => setMealQuantity(e.target.value)} />
                    </div>
                    <div className="from-group">
                        <label>Meal Type</label>
                        <input type="text" placeholder="Enter meal type" value={mealType} onChange={(e) => setMealType(e.target.value)} />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                    <button className="save-btn" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default AddPage;

