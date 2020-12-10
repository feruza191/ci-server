import React, { FC } from 'react';
import { Layout as LayoutDesign } from 'antd';
import { Footer } from '../components/Footer';
import { ContentWrapper } from '../components/style';
import { Header } from '../components/Header';

export const Layout: FC = ({ children }) => (
	<LayoutDesign>
		<Header />
		<ContentWrapper>{children}</ContentWrapper>
		<Footer />
	</LayoutDesign>
);
