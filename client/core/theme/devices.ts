export const sizes: Record<string, string> = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
};

export const devices: Record<string, string> = {
	mobileS: `(max-width: ${sizes.mobileS})`,
	mobileM: `(max-width: ${sizes.mobileM})`,
	mobileL: `(max-width: ${sizes.mobileL})`,
	tablet: `(max-width: ${sizes.tablet})`,
	laptop: `(max-width: ${sizes.laptop})`,
	laptopL: `(max-width: ${sizes.laptopL})`,
	desktop: `(max-width: ${sizes.desktop})`,
	desktopL: `(max-width: ${sizes.desktop})`,
};
