import logo from "../../assets/images/logo.svg";
import bg from "../../assets/images/bg.png";
import { navItems } from "../../data";
import {
	LogoBehance,
	LogoFacebook,
	LogoInstagram,
	LogoLinkedin,
	LogoTwitter,
} from "react-ionicons";
import Button from "../Button";

const Header = () => {
	return (
		<div
			className="w-full flex items-center justify-center relative h-screen bg-cover bg-center"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="absolute top-9 px-12 w-full flex items-center justify-between">
				<img
					src={logo}
					alt="logo"
				/>
				<div className="hidden lg:flex items-center gap-10">
					{navItems.map((item) => (
						<a
							href={item.path}
							key={item.title}
							target="_blank"
							className={`font-oswald uppercase font-medium border-b pb-2 tracking-widest ${
								item.active
									? "border-primary text-primary"
									: "border-transparent text-white"
							}`}
						>
							{item.title}
						</a>
					))}
				</div>
				<div className="hidden lg:flex items-center gap-6">
					<LogoFacebook cssClasses={"!text-white !fill-white cursor-pointer"} />
					<LogoInstagram cssClasses={"!text-white !fill-white cursor-pointer"} />
					<LogoLinkedin cssClasses={"!text-white !fill-white cursor-pointer"} />
					<LogoTwitter cssClasses={"!text-white !fill-white cursor-pointer"} />
					<LogoBehance cssClasses={"!text-white !fill-white cursor-pointer"} />
				</div>
			</div>
			<div className="flex flex-col gap-12 lg:items-start items-center lg:px-0 px-12">
				<div className="text-white font-semibold font-oswald lg:text-[128px] text-[45px] lg:leading-[140px] tracking-wide uppercase lg:max-w-[50vw] lg:text-left text-center">
					We are the best construction company
				</div>

				<Button variant="light">view out projects</Button>
			</div>
		</div>
	);
};

export default Header;
