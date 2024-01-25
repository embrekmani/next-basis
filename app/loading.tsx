import { CircularProgress } from '@nextui-org/react';

const Loading = () => {
	return (
		<div className='p-2 flex justify-center items-center'>
			<CircularProgress aria-label='Loading...' />
		</div>
	);
};

export default Loading;
