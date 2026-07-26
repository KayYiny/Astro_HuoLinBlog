// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "齐木楠雄的灾难",
		status: "completed",
		rating: 8.47,
		cover: "/assets/anime/saiki-k.webp",
		description: "高中生齐木楠雄与一群奇葩朋友的搞笑日常，他拥有几乎所有超能力，却只想做一个普通人。",
		episodes: "24 episodes",
		year: "2016",
		genre: ["Comedy", "Supernatural"],
		studio: "J.C.Staff",
		link: "https://www.bilibili.com/bangumi/media/md2330",
		progress: 24,
		totalEpisodes: 24,
		startDate: "2016-07",
		endDate: "2016-12",
	},
	{
		title: "奇巧出租车",
		status: "planned",
		rating: 8.61,
		cover: "/assets/anime/odd-taxi.webp",
		description: "出租车司机小户川被卷入一桩少女失踪案，真相隐藏在动物外表下的都市群像悬疑剧。",
		episodes: "13 episodes",
		year: "2021",
		genre: ["Mystery", "Drama"],
		studio: "OLM / P.I.C.S.",
		link: "https://www.bilibili.com/bangumi/media/md3106",
		progress: 0,
		totalEpisodes: 13,
		startDate: "2021-04",
		endDate: "2021-06",
	},
	{
		title: "孤独摇滚！",
		status: "completed",
		rating: 8.75,
		cover: "/assets/anime/bocchi-the-rock.webp",
		description: "社恐少女后藤一里加入乐队，在音乐中逐渐成长的青春喜剧。",
		episodes: "12 episodes",
		year: "2022",
		genre: ["Music", "Comedy"],
		studio: "CloverWorks",
		link: "https://www.bilibili.com/bangumi/media/md3120",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2022-10",
		endDate: "2022-12",
	},
];

export default localAnimeList;
