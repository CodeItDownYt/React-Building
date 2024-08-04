interface Props {
	title: string;
	className?: string;
}
const Titlebar = ({ title, className }: Props) => {
	return (
		<div className="flex items-center gap-4">
			<div className="bg-primary w-[50px] h-[1px]" />
			<span className={`${className} uppercase text-gray font-sans text-sm tracking-widest`}>
				{title}
			</span>
		</div>
	);
};

export default Titlebar;
