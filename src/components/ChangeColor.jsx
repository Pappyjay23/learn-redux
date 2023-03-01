import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../features/colorTheme";

const ChangeColor = () => {
	const colorCode = useSelector((state) => state.color.value);
	const dispatch = useDispatch();
	return (
		<div className='colorForm'>
			<h1 style={{color: colorCode}}>Color Theme Page</h1>
			<small>Change the headers of each page below 👇.</small>
			<div className='colorGroup'>
				<label htmlFor='color'>Pick a color: </label>
				<input
					id='color'
					style={{ backgroundColor: colorCode }}
					type='color'
					onChange={(e) => {
						dispatch(changeColor(e.target.value));
					}}
				/>
				<span>{colorCode}</span>
			</div>
		</div>
	);
};

export default ChangeColor;
