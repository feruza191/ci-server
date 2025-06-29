import React, { ReactElement } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { CompanyLogo, HeaderWrapper } from './style';

interface Props {
	title: string;
}

export const Header = ({ title, children }: Props): ReactElement => {
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
