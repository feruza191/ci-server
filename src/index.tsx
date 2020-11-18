import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Img from './images/m3.jpg';
import './styles.scss';

const App: FC = () => (
	<Wrapper>
		<p>Hello world!!hh</p>
		<img src={Img} />
	</Wrapper>
);

const Wrapper = styled.div`
	margin-top: 20px;
`;
// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
