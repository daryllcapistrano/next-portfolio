import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { Header, Footer } from '../index';

export const siteTitle = 'Portfolio';

export default function Layout({ children }) {
	return (
		<div className="container">
			<Head>
				<title>{siteTitle}</title>
				<link rel="icon" href="/images/profile.jpg" />
			</Head>

			<Header />

			<main className={utilStyles.main}>{children}</main>

			<Footer />
		</div>
	);
}
