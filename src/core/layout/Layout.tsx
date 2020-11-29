import React, { FC } from 'react';
import { Layout as LayoutDesign } from 'antd';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ContentWrapper } from '../components/style';

interface LayoutProps {
	children: JSX.Element[] | JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => (
	<LayoutDesign>
		<Header />
		<ContentWrapper>{children}</ContentWrapper>
		<Footer />
	</LayoutDesign>
);

export default Layout;
