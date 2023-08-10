import styles from "@/styles/Experince.module.css";
import { Box, Button, Paper, Tab, Tabs } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ButtonToolbar from "../components/core/ButtonToolbar";
import { Item } from "../types/components";

import bosch from "/assets/bosch-campus.jpg";
import esal from "/assets/esal-machine.png";
import schnauzer from "/assets/schnauzer.png";
import siemens from "/assets/siemens-campus.jpg";
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

const Experience = () => {
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
									<Tab label="AUGUST 2022 — PRESENT" {...a11yProps(0)} />
									<Tab label="AUGUST 2020 — JULY 2022" {...a11yProps(1)} />
									<Tab label="OCTOBER 2018 — JUNE 2019" {...a11yProps(2)} />
								</Tabs>
							</Box>
							<CustomTabPanel value={value} index={0}>
								<div className={styles.content_items}>
									<div className={styles.company_picture}>
										<Image
											src={bosch}
											alt="siemens-campus"
											width={300}
											height={200}
										/>
									</div>
									<div className={styles.description}>
										Company: Bosch
										<br />
										Place: Curitiba, Brazil 🇧🇷 (Remote)
										<br />
										<br />
										TCD.go is an internal platform that enables users to scan,
										validate and create technical documentation for around
										15.000 Bosch tools that are sold all over the world.
										<br />
										Our project enables users to create templates, edit and make
										changes to individual or multiple documents with ease. It is
										expected to become the standard for Bosch world wide.
										<br />
										My main task is to build features, create tests and improve
										the infrastructure of the tools to support the needs of its
										users.
									</div>
								</div>
							</CustomTabPanel>
							<CustomTabPanel value={value} index={1}>
								<div className={styles.content_items}>
									<div className={styles.company_picture}>
										<Image
											src={siemens}
											alt="siemens-campus"
											width={300}
											height={200}
										/>
									</div>
									<div className={styles.description}>
										Company: Siemens
										<br />
										Place: Munich, Germany 🇩🇪
										<br />
										<br />
										DI-FA is an internal tool for managing project&apos;s budget
										and expense requests. It manages from travel expenses to
										yearly/quarterly budgets. It also enables users to select
										and schedule an employee for their project. My main task was
										to create functions in the back end (REST API).
										<br />
										Contact Finder is a tool for the board of directors and
										managers to find any employee together with the clients they
										are responsible for, the contracts they handle and who
										is/are their contact person with the company they deal with.
										This englobed world-wide contracts, so a user base of
										approximately 100.000 users with 1 million+ records.
									</div>
								</div>
							</CustomTabPanel>
							<CustomTabPanel value={value} index={2}>
								<div className={styles.content_items}>
									<div className={styles.company_picture}>
										<Image
											src={esal}
											alt="siemens-campus"
											width={200}
											height={300}
										/>
									</div>

									<div className={styles.description}>
										Company: EsalFlores
										<br />
										Place: Curitiba, Brazil 🇧🇷
										<br />
										<br />
										EsalFlores is one of the biggest flower retailers in Brazil,
										both physical and online shops. It has its own ERP system
										which controls all of its branches as well as over 30
										vending machines scattered through Brazil.
										<br />
										It has hundreds of sales daily, which a big portion is
										thorough its online store.My tasks included development of
										the ERP system, both frontend and backend. I was responsible
										for the services that deal with the sales and the reporting
										to the tax authorities. I was also responsible for the
										integration of the vending machines, their control,
										management and data collection.
									</div>
								</div>
							</CustomTabPanel>
						</div>
					</Paper>
				</div>
			</main>
		</>
	);
};

export default Experience;
