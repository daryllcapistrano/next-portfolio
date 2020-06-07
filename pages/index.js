import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout>
			<h1 className="title">
				Hello,<br /> I'm Daryll Capistrano
			</h1>

			<p className="description">Full Stack Developer</p>

			<section id="about" className="grid">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore ea aperiam mollitia totam? Nobis, iste!
					Numquam, perferendis ipsam. Sed distinctio velit qui, nesciunt molestias reprehenderit vel et ratione deserunt
					ducimus doloremque asperiores hic, voluptates soluta amet non dignissimos obcaecati illum quidem assumenda
					unde ab atque sapiente. Facilis ea sequi suscipit tempore sapiente fugiat dicta at dolores ad commodi quod
					neque aliquam repudiandae placeat distinctio ullam, molestias quo, fugit quibusdam ipsa impedit. Soluta nobis
					veniam quisquam quibusdam, vel explicabo eum possimus sit aperiam fugit, voluptates earum iure? Quae tenetur
					consectetur sunt voluptatibus quod dolores enim delectus officiis. Ex, at commodi!
				</p>
			</section>
			<section id="projects" className="grid">
				<a href="https://github.com/daryllcapistrano/Game-of-SKATE" className="card">
					<h3>Game of Skate &rarr;</h3>
					<p>A score tracker based on the old basketball game H.O.R.S.E.</p>
				</a>

				<a href="https://github.com/daryllcapistrano/keaton-portfolio-gatsby-v2" className="card">
					<h3>Client Portfolio Page &rarr;</h3>
					<p>Client Portfolio Page</p>
				</a>

				<a href="https://github.com/vercel/next.js/tree/master/examples" className="card">
					<h3>Examples &rarr;</h3>
					<p>Discover and deploy boilerplate example Next.js projects.</p>
				</a>

				<a
					href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					className="card"
				>
					<h3>Deploy &rarr;</h3>
					<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
				</a>
			</section>
			<section id="contact" className="grid">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum incidunt perspiciatis non recusandae odit
					consequatur fugit laborum vero expedita eos! Placeat tenetur et fugit cupiditate aliquam provident at, nostrum
					natus! Est maiores non eius expedita cum molestias sint ullam maxime eveniet voluptatum aliquam sit enim omnis
					deleniti totam consectetur, tempore dignissimos facere dicta velit excepturi reprehenderit facilis accusantium
					libero. Nemo magni libero laborum quisquam placeat esse quis fuga nulla temporibus necessitatibus, similique
					consequuntur a obcaecati nostrum voluptas dolorem expedita quos maiores voluptates doloribus est delectus
					fugit? Accusamus fugit, mollitia id ea voluptates voluptatem aut vel facilis dicta nostrum, tempora fuga.
				</p>
			</section>
		</Layout>
	);
}
