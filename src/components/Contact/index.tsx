import contactBg from "../../assets/images/contactBg.png";
import Button from "../Button";

const Contact = () => {
	return (
		<div
			className="w-full lg:mt-40 mt-20 lg:h-[567px] flex items-center justify-center flex-col bg-cover bg-center lg:p-0 p-10"
			style={{ backgroundImage: `url(${contactBg})` }}
		>
			<div className="flex flex-col items-start gap-4">
				<span className="uppercase font-oswald font-bold lg:text-[45px] text-[43px] text-white tracking-wide">
					Are you ready to start new project ?
				</span>
				<p className="font-sans text-lg max-w-[700px] text-faded leading-10">
					If you have any projects in mind say hello at contact@yourinfo.com or just call us at
					+111 1234 2344 1232.
				</p>
				<Button
					variant="light"
					className="!mt-5"
				>
					get in touch
				</Button>
			</div>
		</div>
	);
};

export default Contact;
