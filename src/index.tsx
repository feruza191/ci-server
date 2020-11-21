/* eslint-disable react/jsx-closing-tag-location */
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Img from './images/m3.jpg';

const App: FC = () => (
	<Wrapper>
		<p>Hello world!!cdcdscdvhj</p>
		<img src={Img} />
	</Wrapper>
);

const Wrapper = styled.div`
	margin-top: 20px;
`;

ReactDOM.render(<App />, document.getElementById('root'));
