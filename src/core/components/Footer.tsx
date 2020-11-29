import React, { FC } from 'react';
import { Col } from 'antd';
import TextKey from '../theme/textKeys';
import { FooterWrapper, CopyRight } from './style';

const Footer: FC = () => (
	<FooterWrapper>
		<Col xs={24} sm={12}>
			<ul>
				<li>{TextKey.Support}</li>
				<li>{TextKey.Learning}</li>
				<li>{TextKey.RussianVersion}</li>
			</ul>
		</Col>
		<Col xs={24} sm={12}>
			<CopyRight align='right' lineHeight='18' type='secondary'>
				{TextKey.CopyRight}
			</CopyRight>
		</Col>
	</FooterWrapper>
);

export default Footer;
