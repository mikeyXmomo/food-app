import { useState } from 'react';
import Nav from '@/components/Nav';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Apps from '@/components/Apps';
import Info from '@/components/Info';
import { DataInfoOne, DataInfoThree, DataInfoTwo } from '@/components/Data';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export default function IndexPage() {
	const [ isOpen, setisOpen ] = useState(false);

	const setToggle = () => {
		setisOpen(!isOpen)
	}

	return (
		<div>
			<Head>
				<title>Bella Onoje - Why stay hungry when you can order from Bella Onojie</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Nav isOpen={isOpen} setToggle={setToggle} />
			<Sidebar isOpen={isOpen} setToggle={setToggle} />
			<Hero />
			<Apps />
			<Info {...DataInfoOne} />
			<Info {...DataInfoTwo} />
			<Info {...DataInfoThree} />
			<Banner />
			<Footer />
		</div>
	);
}
