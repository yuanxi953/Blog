import type { FeedGroup } from './types/feed'

export default [{
	name: '清晰体验',
	desc: '使用 Clarity 博客主题构建的网站。',
	entries: [{
		author: '元夕',
		sitenick: '言语有限，就不多说啦',
		title: '元夕的博客',
		desc: '-',
		link: 'https://yuanxi953.cn/',
		feed: 'https://yuanxi953.cn/atom.xml',
		icon: 'https://yuanxi953.cn/api/icon.png',
		avatar: 'https://yuanxi953.cn/api/avatar.png',
		archs: ['Nuxt', 'Vercel'],
		date: '2019-07-19',
		comment: 'Clarity 主题作者',
	}],
}] satisfies FeedGroup[]
