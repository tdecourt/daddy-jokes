import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-multi-lang';
import deleteIcon from "../assets/img/deleteIcon.png"

const DeleteButton = ({ style, className, onClick }:
	{
		style?: React.CSSProperties,
		className?: string,
		onClick: React.MouseEventHandler<HTMLButtonElement>
	}
) => {
	const translation = useTranslation("joke")
	return (
		<Button
			className={className + ' rounded-circle'}
			variant='danger'
			style={style}
			onClick={onClick}
		>
			<img src={deleteIcon} alt={translation("delete")} width={25} height={25} />
		</Button>
	);
};

export default DeleteButton;