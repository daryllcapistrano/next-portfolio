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
				<a href="#about">about</a>
				<a href="#projects">projects</a>
				<a href="#contact">acontact</a>
			</nav>
		</header>
	);
}

export default Header;
