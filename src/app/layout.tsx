import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next js starter template',
	description: 'This has everything you need to get started with next js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning={true}>
				{/*<Navbar />*/}
				<main> {children} </main>
			</body>
		</html>
	);
}
