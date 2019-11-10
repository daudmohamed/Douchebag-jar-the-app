import React, {Component} from 'react';
import { connect } from "react-redux";
import { GlobalState, IntroSlidesItem, SliderItem } from "../../types/douchebag.types";
import { Image, View, Text } from "react-native";
import { styles } from "./AppIntro.styles";
import AppIntroSlider from 'react-native-app-intro-slider';
import { IntroductionFinished } from "../../actions/douchebag.action";
import ReactIntro from "../ReactIntro";


const slides: Array<IntroSlidesItem> = [
	{
		key: 'Doucherbag Jar',
		title: 'Doucherbag Jar',
		text: 'Conveniently change the \n' +
			'behaviour of your friends \n' +
			'with a App.',
		image: require('../../assets/logo.png'),
		backgroundColor: '#59b2ab',
	},
	{
		key: 'Add participants',
		title: 'Add participants',
		text: 'He or She will have to follow\n' +
			'the rules to avoid putting\n' +
			'money in the jar.',
		image: require('../../assets/face.png'),
		backgroundColor: '#febe29',
	},
	{
		key: 'Let\'s play!',
		title: 'Rocket guy',
		text: 'The possibilities are endless.',
		image: require('../../assets/plan.png'),
		backgroundColor: '#22bcb5',
	}
];

type ComponentStateProps = {
	introDone: boolean
}
type ComponentDispatchProps = {
	introductionFinished: () => void
}
type ComponentOwnProps = {};

type ComponentProps = ComponentStateProps | ComponentDispatchProps | ComponentOwnProps;



class AppIntro extends Component<ComponentProps> {
	renderItem = (props: SliderItem ) => {
		const {item} = props;
		return (
			<View style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'space-around',
				backgroundColor: item.backgroundColor
			}}>
				<Text style={styles.title}>{item.title}</Text>
				<Image style={styles.image} resizeMode={'contain'} source={item.image} />
				<Text style={styles.text}>{item.text}</Text>
			</View>
		);
	};

	render() {
		// @ts-ignore
		const { introDone, introductionFinished } = this.props;
		return introDone ? (
			<ReactIntro/>
		):(
			<AppIntroSlider renderItem={this.renderItem} slides={slides} onDone={introductionFinished}/>
		);
	}
}

export default connect<ComponentStateProps, ComponentDispatchProps, ComponentOwnProps, GlobalState>( (state) => ({
	introDone: state.DouchebagJar.introDone
}), dispatch => ({
	introductionFinished: () => dispatch(IntroductionFinished())
}))(AppIntro);