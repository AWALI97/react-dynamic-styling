import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		enteredValue.trim().length === 0 ? setIsValid(false) : setIsValid(true);

		event.preventDefault();
		if (isValid && enteredValue !== '') {
			props.onAddGoal(enteredValue);
		}
	};
	const labelStyle = { color: isValid ? 'black' : 'red' };
	const inputStyle = {
		border: isValid ? '' : '3px solid red',
		backgroundColor: isValid ? '' : 'salmon',
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="form-control">
				<label style={labelStyle}>Course Goal</label>
				<input
					style={inputStyle}
					type="text"
					onChange={goalInputChangeHandler}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
