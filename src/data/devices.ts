// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	手机: [
		{
			name: "iPhone 15 Pro",
			image: "/images/device/iphone15pro.webp",
			specs: "白色 / 256GB",
			description: "钛金属机身，A17 Pro芯片，4800万像素相机，支持USB-C",
			link: "https://www.apple.com.cn/shop/buy-iphone",
		},
		{
			name: "Google Pixel 4",
			image: "/images/device/pixel4.webp",
			specs: "白色 / 64GB / 6GB RAM",
			description: "骁龙855，90Hz OLED屏，原生Android体验",
			link: "",
		},
	],
	手表: [
		{
			name: "Apple Watch S11",
			image: "/images/device/watchs11.webp",
			specs: "46mm / 深空灰色",
			description: "健康监测，全天候OLED屏，50米防水",
			link: "https://www.apple.com.cn/shop/buy-watch",
		},
	],
	笔记本: [
		{
			name: "MacBook Air",
			image: "/images/device/macbookair.webp",
			specs: "M5 / 16GB+512GB / 天蓝色",
			description: "轻薄无风扇设计，18小时续航，Liquid Retina屏",
			link: "https://www.apple.com.cn/shop/buy-mac",
		},
	],
	台式机: [
		{
			name: "自组台式机",
			image: "/images/device/desktop.webp",
			specs: "i7-14700KF / RTX 4070 Ti SUPER / 32GB DDR5 7200MHz",
			description: "华硕Z790主板，4TB SSD，Wi-Fi 7，4K游戏利器",
			link: "",
		},
	],
	电视盒子: [
		{
			name: "Apple TV 7代",
			image: "/images/device/appletv7.webp",
			specs: "128GB / 有网口版",
			description: "A15芯片，4K HDR，智能家居中枢",
			link: "https://www.apple.com.cn/shop/buy-tv",
		},
	],
	游戏机: [
		{
			name: "Switch OLED",
			image: "/images/device/switcholed.webp",
			specs: "宝可梦朱紫联名款",
			description: "7英寸OLED屏，主题底座和Joy-Con",
			link: "",
		},
		{
			name: "Switch 2",
			image: "/images/device/switch2.webp",
			specs: "黑色",
			description: "8英寸LCD屏，磁吸式Joy-Con，支持光追和DLSS",
			link: "",
		},
		{
			name: "PS5 Slim",
			image: "/images/device/ps5slim.webp",
			specs: "光驱版 / 1TB SSD",
			description: "体积缩小30%，可拆卸光驱，支持4K 120fps",
			link: "",
		},
	],
	路由器: [
		{
			name: "爱快 A135S",
			image: "/images/device/a135s.webp",
			specs: "5千兆口 / 4个POE口",
			description: "企业级AC POE一体路由器",
			link: "",
		},
	],
	交换机: [
		{
			name: "水星 SE106 PRO",
			image: "/images/device/se106pro.webp",
			specs: "2.5G / 10G万兆SPF光口",
			description: "智能网管交换机",
			link: "",
		},
	],
};
