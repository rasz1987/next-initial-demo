import { PropsWithChildren } from 'react';
import styles from './DarkLayout.module.css';

const DarkLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className={styles.container} >
			<h3>Dark-Layout</h3>
			<div>
				{children}
			</div>
		</div>
	)
};

export default DarkLayout;