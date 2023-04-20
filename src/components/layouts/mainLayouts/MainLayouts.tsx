import { PropsWithChildren } from 'react';
import Head from 'next/head';
import NavBar from '../../navBar/NavBar';
import styles from './MainLayouts.module.css';

const MainLayouts = ({ children }: PropsWithChildren) => {

	return (
		<div className={styles.container}>
			<Head>
				<title>Home - Rodolfo</title>
				<meta name="description" content="Home Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />

			<main className={styles.main}>
				{children}
			</main>
		</div>
	)
};

export default MainLayouts;