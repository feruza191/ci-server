import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { CompanyLogo, HeaderWrapper } from './style';

interface HeaderProps {
	title: string;
}

export const Header: FC<HeaderProps> = ({ title, children }) => {
	return (
		<Row>
			<Col xs={24}>
				<HeaderWrapper
					justifyContent="space-between"
					alignItems="center"
				>
					<Link to="/">
						<CompanyLogo>{title}</CompanyLogo>
					</Link>
					{children}
				</HeaderWrapper>
			</Col>
		</Row>
	);
};
