import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type NavButtonProps = {
	path: string;
	buttonString: string;
};

const NavButton: FC<NavButtonProps> = ({ path, buttonString }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(path);
	};

	return (
		<Button variant="outlined" onClick={handleClick}>
			{buttonString}
		</Button>
	);
};

export default NavButton;
