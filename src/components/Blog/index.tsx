import { articles } from "../../data";
import Titlebar from "../Titlebar";

const Blog = () => {
	return (
		<div className="w-full lg:mt-40 mt-20 flex flex-col items-start justify-center gap-14 lg:px-[310px] px-5">
			<div className="flex flex-col gap-4">
				<Titlebar title="News articles" />
				<span className="uppercase text-secondary font-oswald font-bold text-[45px]">
					Read latest articles
				</span>
			</div>
			<div className="flex w-full lg:flex-row flex-col items-center gap-5 justify-between">
				{articles.map((item) => (
					<div
						key={item.title}
						className="flex w-full flex-col justify-end p-6 gap-4 bg-cover bg-center h-[370px]"
						style={{ backgroundImage: `url(${item.image})` }}
					>
						<p className="font-sans text-lg text-articleDate italic">{item.date}</p>
						<span className="text-white font-medium font-oswald text-[32px] tracking-wide leading-[40px] uppercase">
							{item.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blog;
