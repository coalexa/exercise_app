import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function ExerciseRow({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.substring(0,10)}</td>
            <td><MdEdit onClick={() => onEdit(exercise)} /></td>
            <td><MdDeleteForever onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default ExerciseRow;