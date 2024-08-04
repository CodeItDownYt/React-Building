import { companies } from "../../data";

const Companies = () => {
	return (
		<div className="w-full lg:mt-40 mt-20 lg:px-[310px] px-5 flex items-center flex-wrap gap-5">
			{companies.map((item) => (
				<div
					key={item.id}
					className="flex items-center justify-center lg:w-[310px] w-full h-[188px] border-l-[6px] cursor-pointer border-gray2 bg-gray2 hover:!border-primary hover:bg-secondary transition-all duration-300"
				>
					<img
						src={item.image}
						alt={item.id.toString()}
					/>
				</div>
			))}
		</div>
	);
};

export default Companies;
