import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import TextKey from '../theme/textKeys';
import { CompanyLogo, HeaderWrapper, IconButton } from './style';

export const Header: FC = () => (
	<Row>
		<Col xs={24}>
			<HeaderWrapper justifyContent='space-between' alignItems='center'>
				<CompanyLogo>{TextKey.CompanyLogo}</CompanyLogo>

				<IconButton icon={<SettingFilled />} bg='secondary' height='28'>
					{TextKey.Settings}
				</IconButton>
			</HeaderWrapper>
		</Col>
	</Row>
);
