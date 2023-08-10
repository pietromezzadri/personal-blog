import { Button, Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface TestResponse {
	name: string;
}

const PrinterPage = () => {
	const [name, setName] = useState<string>();

	const getData = () => {
		axios
			.get("http://localhost:3000/api/hello")
			.then((resp) => {
				const data = resp.data as TestResponse;
				setName(data.name);
			})
			.catch(() => {
				throw new Error();
			});
	};

	useEffect(() => {
		getData();
	}, []);

	const handleClick = () => {
		setName("test");
	};

	return (
		<Container>
			<Button onClick={handleClick}>Normal Button</Button>
			<Button variant="outlined">Primary Button</Button>
			<p>{name}</p>
		</Container>
	);
};

export default PrinterPage;
