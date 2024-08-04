import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";
import c6 from "../assets/images/c6.png";
import c7 from "../assets/images/c7.png";
import c8 from "../assets/images/c8.png";
import t1 from "../assets/images/t1.png";
import t2 from "../assets/images/t2.png";
import t3 from "../assets/images/t3.png";
import b1 from "../assets/images/b1.png";
import b2 from "../assets/images/b2.png";
import b3 from "../assets/images/b3.png";

export const navItems = [
	{ title: "Home", path: "/", active: true },
	{ title: "About", path: "/", active: false },
	{ title: "Projects", path: "/", active: false },
	{ title: "Services", path: "/", active: false },
	{ title: "News", path: "/", active: false },
	{ title: "Contact", path: "/", active: false },
];

export const projectCats = [
	{ title: "All", active: true },
	{ title: "Buildings", active: false },
	{ title: "Interior & Exterior", active: false },
	{ title: "Renovate", active: false },
	{ title: "Industry", active: false },
	{ title: "Road", active: false },
];

export const projects = [
	{ title: "Jaguare garment industry", image: p1 },
	{ title: "Outbox creatives building", image: p2 },
	{ title: "Slova private residence", image: p3 },
];

export const features = [
	{ title: "Building New Homes", description: "Vehicula at eget a arcu neque ultricies." },
	{ title: "Designing Spaces", description: "Ultricies liquet tempus vel amet." },
	{ title: "Road Maintenance", description: "Tempus vel amet eget egestas arcu non." },
];

export const companies = [
	{ id: 1, image: c1 },
	{ id: 2, image: c2 },
	{ id: 3, image: c3 },
	{ id: 4, image: c4 },
	{ id: 5, image: c5 },
	{ id: 6, image: c6 },
	{ id: 7, image: c7 },
	{ id: 8, image: c8 },
];

export const team = [
	{ name: "alex smith", role: "Co-Founder", image: t1 },
	{ name: "Luma miller", role: "Manager", image: t2 },
	{ name: "Michael strokes", role: "Fittings Specialist", image: t3 },
];

export const commentsArray = [
	{
		body: "“A pellen tesque pretium feugiat vel mobi sagittis lorem habi tasse cursus ipsum quis nec eget facilisis. Quis nibh ut bindum nisl quis placerat proin tortor mattis.”",
		name: "Kelly Garcia",
	},
	{
		body: "“Feugiat hac porttitor sem dictum velit, elementum odio. Sed ipsum quis nec eget facilisis. Quis nibh ut bibendum nisl quis placerat proin tortor mattis in neque.”",
		name: "Jacque Adler",
	},
	{
		body: "“Quis nibh ut bibendum nisl quis placerat proin tortor mattis in neque. Feugiat hac porttitor sem dictum velit, elementum odio sed eget facilisis.”",
		name: "Kerry Frank",
	},
];

export const results = [
	{ title: "Projects done", value: 780 },
	{ title: "Total members", value: 127 },
	{ title: "Happy customers", value: 627 },
	{ title: "Awards", value: 28 },
];

export const articles = [
	{
		date: "Feb 1, 2022  /  Buildings",
		title: "Top 10 mindblowing architecture buildings in the world",
		image: b1,
	},
	{
		date: "Feb 2, 2022  /  Construction",
		title: "Amazing technologies that helped to create creatives works",
		image: b2,
	},
	{
		date: "Feb 3, 2022  /  Company",
		title: "100 best construction company around the world",
		image: b3,
	},
];
