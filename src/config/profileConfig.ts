import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
  name: "HuoLin",
  bio: "There is no place like 127.0.0.1",
  typewriter: {
    enable: true, // 启用个人简介打字机效果
    speed: 80, // 打字速度（毫秒）
  },
  links: [
    {
      name: "QQ",
      icon: "mdi:qqchat",
      url: "https://qm.qq.com/q/KbsdxQ17W0",
    },
    {
      name: "Bilibili",
      icon: "fa7-brands:bilibili",
      url: "http://space.bilibili.com/430552995",
    },
    {
      name: "TikTok",
      icon: "fa7-brands:tiktok",
      url: "https://www.douyin.com/user/MS4wLjABAAAAYuXxtdsArkxgZpoGgQHE1Z2e5mvPeP4UCSezKlzUiALP4vyL0yqLi0vjneoLi5wz",
    },
    {
      name: "小红书",
      icon: "mdi:book-open-page-variant",
      url: "http://xhslink.com/m/3qScrydPm6Z",
    },
  ],
};
