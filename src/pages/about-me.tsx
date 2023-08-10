import ButtonToolbar from "@/components/core/ButtonToolbar";
import styles from "@/styles/AboutMe.module.css";
import { Item } from "@/types/components";
import { Box, Button, Paper, Tab, Tabs } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import schnauzer from "/assets/schnauzer.png";
import snow from "/assets/snow-min.jpg";

const menuItems: Item[] = [
	{ path: "/experience", name: "Experience" },
	{ path: "/about-me", name: "About Me" },
];

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
};

const a11yProps = (index: number) => {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
};

const AboutMe = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Head>
				<title>Pietro Nardelli Mezzadri</title>
				<meta name="description" content="Personal Website" />
				<meta
					name="viewport"
					content="width=device-width, minimum-scale=1.0, maximum-scale=1.0"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Box className={styles.navbar}>
					<Image
						src={schnauzer}
						alt={"logo"}
						width={60}
						height={60}
						className={styles.logo}
					/>
					<div className={styles.navbar}>
						<Button href="/">Pietro Nardelli Mezzadri</Button>
						<span></span>
						<div className={styles.button_toolbar}>
							<ButtonToolbar items={menuItems} />
						</div>
					</div>
				</Box>
				<div
					className={styles.cover_page}
					style={{
						backgroundImage: `url(${snow.src})`,
						width: "100%",
						height: "100%",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
					<Paper className={styles.paper}>
						<div className={styles.content}>
							<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
								<Tabs
									value={value}
									onChange={handleChange}
									aria-label="basic tabs example"
								>
									<Tab label="Programming" {...a11yProps(0)} />
									<Tab label="Hobbies" {...a11yProps(1)} />
									<Tab label="Places" {...a11yProps(2)} />
								</Tabs>
							</Box>
							<CustomTabPanel value={value} index={0}></CustomTabPanel>
						</div>
					</Paper>
				</div>
			</main>
		</>
	);
};

export default AboutMe;
