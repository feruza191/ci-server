import React, { FC } from 'react';
import { Row, Col } from 'antd';
import TextKey from '../theme/textKeys';
import { FooterWrapper, CopyRight } from './style';

export const Footer: FC = () => (
	<FooterWrapper>
		<Row>
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
		</Row>
	</FooterWrapper>
);
