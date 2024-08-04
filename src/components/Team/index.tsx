import { team } from "../../data";
import Titlebar from "../Titlebar";

const Team = () => {
	return (
		<div className="w-full lg:mt-40 mt-20 lg:px-[310px] px-5 flex flex-col gap-14">
			<div className="flex flex-col gap-4">
				<Titlebar title="Meet our team" />
				<span className="uppercase text-secondary font-oswald font-bold text-[45px]">
					Our professional team
				</span>
			</div>
			<div className="w-full flex lg:flex-row flex-col items-center gap-5">
				{team.map((item) => (
					<div
						key={item.name}
						className="flex flex-col gap-4 items-center justify-center"
					>
						<img
							src={item.image}
							alt={item.name}
						/>
						<div className="flex flex-col items-center justify-center gap-1">
							<span className="uppercase text-secondary font-oswald font-medium text-[32px] tracking-wide">
								{item.name}
							</span>
							<span className="font-sans text-lg text-teams">{item.role}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
