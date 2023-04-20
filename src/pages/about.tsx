import DarkLayout from '@/components/layouts/darkLayout/DarkLayout';
import Link from 'next/link';
import MainLayouts from '../components/layouts/mainLayouts/MainLayouts';

const AboutPage = () => {
	return (
		<>
			<div className='description'>
				<h1 className='title'>
					About Page
				</h1>
			</div>
		</>
	)
};

AboutPage.getLayout = function getLayout(page: JSX.Element) {
	return (
		<MainLayouts>
			<DarkLayout>
				{page}
			</DarkLayout>
		</MainLayouts>
	)
};

export default AboutPage;
