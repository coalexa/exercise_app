import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');
    
    const history = useHistory();

    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };

        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.status === 201){
            alert("Successfully created the exercise!");
        } else {
            alert(`Failed to create exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Create Exercise</h2>
            <p>Add your desired exercise information below.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <label for="name">Exercise name</label>
                    <input
                        type="text"
                        placeholder="Squat"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name"
                        required /> <br/>
                    
                    <label for="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        placeholder="10"
                        onChange={e => setReps(e.target.value)} 
                        id="reps"
                        required /> <br/>

                    <label for="weight">Weight</label>
                    <input
                        type="number"
                        placeholder="200"
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
                        onClick={createExercise}
                        id="submit"
                    >Create</button></label>
                </fieldset> 
                </form>
            </article>
        </>
    );
}

export default CreateExercisePage;