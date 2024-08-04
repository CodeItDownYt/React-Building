import About from "./components/About";
import Banner from "./components/Banner";
import Comments from "./components/Comments";
import Companies from "./components/Companies";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Results from "./components/Results";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="w-full flex flex-col">
			<Header />
			<About />
			<Projects />
			<Banner />
			<Companies />
			<Team />
			<Comments />
			<Results />
			<Blog />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
