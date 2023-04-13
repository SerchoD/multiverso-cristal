import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import Loader from '../../components/Loader/Loader';

const TestPage = () => {
	return (
		<PageContainer>
			<h1 className='flex justify-center items-center h-full w-full border-2  absolute top-0 left-0 z-50**'>
				/TEST
			</h1>
			{/* <Loader /> */}
		</PageContainer>
	);
};

export default TestPage;
