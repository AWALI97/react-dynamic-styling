import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		if (event.target.value.length > 1 && !isValid) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		enteredValue.trim().length === 0 ? setIsValid(false) : setIsValid(true);

		event.preventDefault();
		if (isValid && enteredValue !== '') {
			props.onAddGoal(enteredValue);
		}
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className={`form-control ${!isValid ? 'invalid' : ''}`}>
				<label>Course Goal</label>
				<input type="text" onChange={goalInputChangeHandler} />
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
