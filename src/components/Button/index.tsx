/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
	variant?: "light" | "dark";
	children: any;
	className?: string;
}
const Button = ({ variant = "dark", children, className }: Props) => {
	return (
		<button
			className={`${className} w-fit px-10 h-[70px] border-l-[6px] border-primary font-oswald font-medium uppercase tracking-wider ${
				variant === "light" ? "bg-white text-secondary" : "bg-secondary text-white"
			}`}
		>
			{children}
		</button>
	);
};

export default Button;
