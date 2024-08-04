import logo from "../../assets/images/logoBlack.svg";
import {
	LogoBehance,
	LogoFacebook,
	LogoInstagram,
	LogoLinkedin,
	LogoTwitter,
} from "react-ionicons";

const Footer = () => {
	return (
		<div className="w-full lg:mt-40 mt-20 flex flex-col">
			<div className="w-full flex lg:flex-row flex-col items-start justify-between pb-[100px] lg:px-[310px] px-5 lg:gap-0 gap-16">
				<div className="flex flex-col gap-5">
					<img
						src={logo}
						alt="logo"
						className="w-[150px]"
					/>
					<span className="font-sans max-w-[280px] text-gray">
						Vehicula at eget a arcu neque, ultricies liquet tempus.
					</span>
				</div>
				<div className="flex flex-col gap-5">
					<span className="text-primary font-sans">About</span>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Terms & Conditions
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Privacy Policy
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Career
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Contact
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Help
					</a>
				</div>
				<div className="flex flex-col gap-5">
					<span className="text-gray font-sans">Quick Links</span>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Newsletter
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Articles
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						Location
					</a>
				</div>
				<div className="flex flex-col gap-5">
					<span className="text-gray font-sans max-w-[240px]">
						163 Elm Drive, New York City United States
					</span>
					<a
						href="#"
						className="text-gray font-sans"
					>
						(+089) 234-516-6123
					</a>
					<a
						href="#"
						className="text-gray font-sans"
					>
						info@yourinfo.com
					</a>
				</div>
			</div>
			<div className="w-full flex lg:flex-row flex-col items-center justify-between border-t lg:h-[80px] lg:gap-0 gap-10 lg:py-0 py-5 border-[#DADADA] lg:px-[310px] px-5">
				<span className="font-sans text-gray lg:text-left text-center">
					©2024 Boldiz | Developed by:{" "}
					<a
						href="https://www.youtube.com/channel/UCCW0Rmnu7AocSIcc0PUMH0Q"
						target="_blank"
						className="font-bold text-secondary"
					>
						Code It Down
					</a>
				</span>
				<div className="flex items-center gap-6">
					<LogoFacebook cssClasses={"!text-secondary !fill-secondary cursor-pointer"} />
					<LogoInstagram cssClasses={"!text-secondary !fill-secondary cursor-pointer"} />
					<LogoLinkedin cssClasses={"!text-secondary !fill-secondary cursor-pointer"} />
					<LogoTwitter cssClasses={"!text-secondary !fill-secondary cursor-pointer"} />
					<LogoBehance cssClasses={"!text-secondary !fill-secondary cursor-pointer"} />
				</div>
			</div>
		</div>
	);
};

export default Footer;
