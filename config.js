// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Matheus',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '3e4f2269563af37cf03b09b6413a743f', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	weatherLatitude: '-25.480877',
	weatherLongitude: '-49.304424',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '00:00',
	hourDarkThemeInactive: '00:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'MAIL',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '2',
			name: 'CALENDAR',
			icon: 'calendar-days',
			link: 'https://calendar.google.com/',
		},
		{
			id: '5',
			name: 'NOTION',
			icon: 'backpack',
			link: 'https://www.notion.so/',
		},
		{
			id: '3',
			name: 'REDDIT',
			icon: 'layout',
			link: 'https://www.reddit.com/',
		},
		{
			id: '4',
			name: 'YOUTUBE',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '6',
			name: 'GIT',
			icon: 'github',
			link: 'https://github.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '4',
			name: 'GIT',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '5',
			name: 'DOCKER',
			icon: 'package',
			link: 'http://192.168.1.253:9000/',
		},
		{
			id: '3',
			name: 'ENDEAVOUR',
			icon: 'rocket',
			link: 'https://forum.endeavouros.com/',
		},
		{
			id: '1',
			name: 'MB',
			icon: 'server',
			link: 'http://192.168.1.253:81',
		},
		{
			id: '6',
			name: 'FIN',
			icon: 'play-circle',
			link: 'http://192.168.1.253:8096',
		},
		{
			id: '2',
			name: 'DL',
			icon: 'download',
			link: 'http://192.168.1.253:9091/transmission/web/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Lofi hip hop',
					link: 'https://www.youtube.com/c/steezyasfvck/videos',
				},
				{
					name: 'Calm',
					link: 'https://www.youtube.com/c/nobodyplaylists/videos',
				},
				{
					name: 'Jazz',
					link: 'https://www.youtube.com/c/jazziseverywhere/videos',
				},
				{
					name: 'My Playlist',
					link: 'https://www.youtube.com/playlist?list=PLA-E7cmrswUmxDUwWuz8rV5UT5wPrcCD4',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Twitter',
					link: 'https://www.twitter.com/',
				},
				{
					name: 'Whatsapp',
					link: 'https://web.whatsapp.com/',
				},
				{
					name: 'LinkedIn',
					link: 'https://www.linkedin.com/',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
