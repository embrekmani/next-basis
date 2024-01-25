import { Link } from '@nextui-org/react';

const NotFound = () => {
	return (
		<div className='h-screen p-2 flex justify-center flex-col items-center grow'>
			<h2 className='text-lg mb-2'>Page not found.</h2>
			<Link href='/'>Return Home</Link>
		</div>
	);
};

export default NotFound;
