import banner from "../../assets/images/banner.png";
import { features } from "../../data";
import Button from "../Button";

const Banner = () => {
	return (
		<div
			className="w-full lg:mt-40 mt-20 lg:h-[537px] bg-cover bg-center flex lg:flex-row flex-col items-center justify-between lg:px-[310px] px-5 lg:gap-0 gap-16 lg:py-0 py-10"
			style={{ backgroundImage: `url(${banner})` }}
		>
			{features.map((item) => (
				<div
					key={item.title}
					className="flex flex-col lg:items-start items-center gap-5"
				>
					<span className="text-white font-sans font-bold lg:text-left text-center text-[35px] max-w-[240px] leading-[40px]">
						{item.title}
					</span>
					<p className="text-faded font-sans text-lg g:text-left text-center">
						{item.description}
					</p>
					<Button className="!h-[54px] mt-5">read more</Button>
				</div>
			))}
		</div>
	);
};

export default Banner;
