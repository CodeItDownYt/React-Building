import comments from "../../assets/images/comments.png";
import { commentsArray } from "../../data";
import Titlebar from "../Titlebar";

const Comments = () => {
	return (
		<div
			className="w-full lg:mt-40 mt-20 lg:h-[800px] bg-center bg-cover flex flex-col items-start justify-center gap-14 lg:px-[310px] px-5 lg:py-0 py-10"
			style={{ backgroundImage: `url(${comments})` }}
		>
			<div className="flex flex-col gap-4">
				<Titlebar
					className="!text-faded"
					title="Testimonials"
				/>
				<span className="uppercase text-white font-oswald font-bold text-[45px]">
					What our clients says
				</span>
			</div>
			<div className="flex lg:flex-row flex-col w-full items-center gap-5 justify-between">
				{commentsArray.map((item) => (
					<div
						key={item.name}
						className="flex w-full flex-col justify-between px-7 py-9 bg-white lg:h-[270px] lg:gap-0 gap-10"
					>
						<p className="font-sans text-lg text-gray">{item.body}</p>
						<div className="flex items-center gap-4">
							<div className="bg-primary w-[50px] h-[1px]" />
							<span className="text-secondary font-oswald text-[22px] tracking-wider">
								{item.name}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Comments;
