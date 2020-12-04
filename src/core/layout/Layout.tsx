import React, { FC } from 'react';
import { Layout as LayoutDesign } from 'antd';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ContentWrapper } from '../components/style';

export const Layout: FC = ({ children }) => (
	<LayoutDesign>
		<Header />
		<ContentWrapper>{children}</ContentWrapper>
		<Footer />
	</LayoutDesign>
);
