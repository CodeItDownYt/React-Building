import { useState } from "react";
import Titlebar from "../Titlebar";
import { projectCats, projects } from "../../data";

const Projects = () => {
	const [cats, setCats] = useState(projectCats);

	const handleClick = (catTitle: string) => {
		setCats((prevCats) =>
			prevCats.map((cat) => {
				return { ...cat, active: cat.title === catTitle };
			})
		);
	};
	return (
		<div className="lg:mt-40 mt-20 w-full flex flex-col lg:items-center items-start justify-center gap-20 lg:px-0 px-10">
			<div className="flex flex-col gap-4">
				<Titlebar title="Latest Projects" />
				<span className="uppercase text-secondary font-oswald font-bold text-[45px]">
					Explore our works
				</span>
				<div className="hidden lg:flex items-center gap-14 mt-5">
					{cats.map((item) => (
						<div
							key={item.title}
							onClick={() => handleClick(item.title)}
							className={`font-sans text-lg cursor-pointer ${
								item.active ? "text-primary" : "text-disabled"
							}`}
						>
							{item.title}
						</div>
					))}
				</div>
			</div>
			<div className="w-full flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-10">
				{projects.map((item) => (
					<div
						key={item.title}
						className="flex flex-col gap-4 items-center justify-center"
					>
						<img
							src={item.image}
							alt={item.title}
							className="w-full"
						/>
						<span className="uppercase text-secondary font-oswald font-medium text-[32px]">
							{item.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
