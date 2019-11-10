export type GlobalState = {
	DouchebagJar: DoucheBagState
}

export type DoucheBagState = {
	introDone: boolean
};

export type SliderItem = {
	item: IntroSlidesItem,
	separators?: {},
	dimensions: {
		width: number,
		height: number
	}
}
export type IntroSlidesItem = {
	key: string,
	title: string,
	text: string,
	image: {},
	backgroundColor: string,
}