import Button from "../Button";
import Titlebar from "../Titlebar";

const About = () => {
	return (
		<div className="w-full flex items-center justify-between lg:px-[310px] bg-gray2 lg:h-[514px] lg:p-0 p-10">
			<div className="flex lg:flex-row flex-col items-start justify-between w-full lg:gap-0 gap-10">
				<div className="flex flex-col gap-4">
					<Titlebar title="about us" />
					<span className="uppercase font-oswald font-bold text-[45px] leading-[55px] text-secondary lg:max-w-[450px]">
						Recognize more about our company
					</span>
				</div>
				<div className="flex flex-col gap-3 lg:max-w-[640px] max-w-full">
					<span className="font-sans font-semibold text-lg text-secondary">
						Enim leo leo non in viverra adipiscing nisi sed dictum nisi blandit.
					</span>
					<p className="text-gray font-sans text-lg">
						Gravida feugiat viverra porttitor semper in faucibus ut. Ipsum, vel aliquet purus
						urna placerat convallis felis. Pretium curabitur fames est.
					</p>
					<Button className="!h-[54px] mt-8">about us</Button>
				</div>
			</div>
		</div>
	);
};

export default About;
