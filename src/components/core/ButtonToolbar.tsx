import { Button } from "@mui/material";
import { Item } from "../../types/components";
import { FC, useEffect, useState } from "react";

interface ToolbarProps {
	items: Item[];
}

const ButtonToolbar: FC<ToolbarProps> = ({ items }) => {
	const [currentItems, setCurrentItems] = useState<Item[]>();

	useEffect(() => {
		if (items.length) {
			setCurrentItems(items);
		}
	}, [items]);

	return (
		<div>
			{currentItems?.length &&
				currentItems.map((item, index) => {
					return (
						<Button
							variant="outlined"
							key={index}
							href={item.path}
							sx={{ marginLeft: 2 }}
						>
							{item.name}
						</Button>
					);
				})}
		</div>
	);
};

export default ButtonToolbar;
