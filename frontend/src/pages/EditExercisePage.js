import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date.substring(0,10));
    
    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited exercise!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit exercise. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit Exercise</h2>
            <p>Change your exercise below.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <label for="name">Exercise name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name"
                        required /> <br/>
                    
                    <label for="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps"
                        required /> <br/>

                    <label for="weight">Weight</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" 
                        required /> <br/>

                    <label for="unit">Unit</label>
                    <select onChange={e => setUnit(e.target.value)} required="required">
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="miles">miles</option>
                        <option value="laps">laps</option>
                    </select> <br/>

                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date"
                        required /> <br/>

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={editExercise}
                        id="submit"
                    >Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;