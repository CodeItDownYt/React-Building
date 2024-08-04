import { results } from "../../data";

const Results = () => {
	return (
		<div className="w-full lg:h-[430px] bg-gray2 flex lg:flex-row flex-col lg:gap-0 gap-10 items-center justify-between lg:px-[310px] px-5 lg:pb-0 pb-10">
			{results.map((item) => (
				<div
					key={item.title}
					className="flex lg:flex-row flex-col items-center gap-2"
				>
					<span className="font-oswald text-logos font-bold text-[102px] hover:text-primary cursor-default">
						{item.value}
					</span>
					<span className="text-secondary font-oswald text-lg uppercase">{item.title}</span>
				</div>
			))}
		</div>
	);
};

export default Results;
