import React, { FC } from 'react';

import { Row, Col } from 'antd';

import TextKey from '../enums/TextKeys';
import { lineHeight } from '../theme';
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
				<CopyRight
					align='right'
					lineHeight={lineHeight.micro}
					type='secondary'
				>
					{TextKey.CopyRight}
				</CopyRight>
			</Col>
		</Row>
	</FooterWrapper>
);
