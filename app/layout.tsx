import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
	title: 'next-basis template',
	description: 'simple template to start general next.js projects',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en' className='dark'>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
