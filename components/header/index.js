import utilStyles from '../../styles/utils.module.css';

function Header() {
	return (
		<header className={utilStyles.header}>
			<img
				src="/images/profile.jpg"
				className={`${utilStyles.headerHomeImage} ${utilStyles.borderCircle}`}
				// alt={name}
			/>
			<nav>
				<ul>
					<li>about-me</li>
					<li>projects</li>
					<li>contact</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
