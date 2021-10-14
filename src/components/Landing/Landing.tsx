import React from 'react';
import TypeScriptLogo from '../../assets/images/typescript.png';
import ReactLogo from '../../assets/images/react.png';
import WebpackLogo from '../../assets/images/webpack.png';
import BabelLogo from '../../assets/images/babel.png';
import SassLogo from '../../assets/images/sass.png';
import AxiosLogo from '../../assets/images/axios.svg';
import ReactRouterLogo from '../../assets/images/react-router.png';
import ReduxLogo from '../../assets/images/redux.png';
import PrettierLogo from '../../assets/images/prettier.png';
import './Landing.scss';

type LogoType = {
	label: string;
	source: any;
};
const Logos: LogoType[] = [
	{ label: 'Webpack', source: WebpackLogo },
	{ label: 'Babel', source: BabelLogo },
	{ label: 'React', source: ReactLogo },
	{ label: 'TypeScript', source: TypeScriptLogo },
	{ label: 'Redux', source: ReduxLogo },
	{ label: 'React Router', source: ReactRouterLogo },
	{ label: 'Sass', source: SassLogo },
	{ label: 'Axios', source: AxiosLogo },
	{ label: 'Prettier', source: PrettierLogo },
];

const Landing: React.FC = () => {
	return (
		<div className='landing'>
			<div>
				{Logos.map((logo: LogoType) => (
					<img src={logo.source} alt={logo.label} key={logo.label} title={logo.label} />
				))}
			</div>
			<h1>React-TypeScript Boilerplate</h1>
		</div>
	);
};

export default Landing;
