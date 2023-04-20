import Link from 'next/link';
import MainLayouts from '../components/layouts/mainLayouts/MainLayouts';

export const HomePage = () => {
	return (
		<MainLayouts>
			<div className={'description'}>
				<h1 className={'title'}>
					Home Page
				</h1>
				<p>
					Get started by editing&nbsp;
					<code className={'code'}>src/pages/index.tsx</code>
				</p>
			</div>
		</MainLayouts>
	)
};

export default HomePage;