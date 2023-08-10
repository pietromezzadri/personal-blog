import styles from "@/styles/Home.module.css";
import { Box, Button } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Typed from "react-typed";
import ButtonToolbar from "../components/core/ButtonToolbar";
import { Item } from "../types/components";

import angular from "/assets/angular.png";
import bosch from "/assets/bosch.png";
import django from "/assets/django.png";
import docker from "/assets/docker.png";
import esalflores from "/assets/esalflores.png";
import mongodb from "/assets/mongodb.png";
import nextjs from "/assets/next-js.png";
import react from "/assets/react.png";
import schnauzer from "/assets/schnauzer.png";
import siemens from "/assets/siemens.jpg";
import snow from "/assets/snow-min.jpg";

const menuItems: Item[] = [
	{ path: "/experience", name: "Experience" },
	{ path: "/about-me", name: "About Me" },
];

const companies = [
	{
		key: "bosch",
		name: "Bosch",
		href: "/",
		image: bosch,
		width: 300,
		height: 120,
	},
	{
		key: "siemens",
		name: "Siemens",
		href: "/",
		image: siemens,
		width: 280,
		height: 120,
	},
	{
		key: "esalflores",
		name: "Esalflores",
		href: "/",
		image: esalflores,
		width: 300,
		height: 100,
	},
];

const techStack = [
	{
		key: "react",
		name: "ReactJS",
		href: "/",
		image: react,
		width: 86,
		height: 100,
	},
	{
		key: "angular",
		name: "Angular",
		href: "/",
		image: angular,
		width: 100,
		height: 100,
	},
	{
		key: "next-js",
		name: "NextJS",
		href: "/",
		image: nextjs,
		width: 100,
		height: 100,
	},
	{
		key: "django",
		name: "Django",
		href: "/",
		image: django,
		width: 100,
		height: 100,
	},
	{
		key: "mongodb",
		name: "MongoDB",
		href: "/",
		image: mongodb,
		width: 100,
		height: 100,
	},
	{
		key: "docker",
		name: "Docker",
		href: "/",
		image: docker,
		width: 100,
		height: 100,
	},
];

const Home: NextPage = () => {
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
					<div className={styles.content}>
						<Typed
							className="typed_strings"
							strings={[
								"Hi, my name is Pietro!",
								"Oi, meu nome é Pietro!",
								"Ciao, mi chiamo Pietro!",
								"Hallo, ich heiße Pietro!",
								"Hallo, jeg hetter Pietro!",
								"嗨，我叫皮耶罗!",
								"Привет, меня зовут Пьетро!",
							]}
							shuffle={true}
							typeSpeed={120}
							loop
						/>
						<div className={styles.content_items}>
							<p className={styles.description}>Role: Full-Stack Developer</p>
							<p className={styles.description}>
								Experience building high performance and scalable systems for
								medium and large companies
							</p>
							<p className={styles.description}>
								Experience as a freelancer in projects of web tools involving
								maps, management, controlling and web scrappers
							</p>
							<div className={styles.content_text}>
								{techStack.map((stack, index) => {
									return (
										<>
											<div className={styles.tech_badge}>
												<Image
													key={index}
													src={stack.image}
													alt={stack.name}
													width={stack.width}
													height={stack.height}
												/>
												<p className={styles.description}>{stack.name}</p>
											</div>
										</>
									);
								})}
							</div>
							<div className={styles.content_text}>
								{companies.map((company, index) => {
									return (
										<>
											<div className={styles.tech_badge}>
												<Image
													key={index}
													className={styles.company_logo}
													src={company.image}
													alt={company.name}
													width={company.width}
													height={company.height}
												/>
											</div>
										</>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
