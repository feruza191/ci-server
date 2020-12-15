import React, { FC, useState, ReactNode } from 'react';

import {
	SettingFilled,
	CaretRightOutlined,
	UndoOutlined,
} from '@ant-design/icons';
import { Layout as LayoutDesign } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { SETTINGS_PATH } from 'src/constants';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';
import { ContentWrapper, IconButton } from '../components/style';
import TextKey from '../enums/TextKeys';
import { FlexBox, BlockContainer } from '../theme/common';

interface HeaderContent {
	url: RegExp;
	title: string;
	children?: ReactNode;
}

export const Layout: FC = ({ children }) => {
	const { pathname } = useLocation();
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const hideModal = () => {
		setIsModalVisible(false);
	};

	const headersContent: HeaderContent[] = [
		{
			url: /\/settings$/,
			title: TextKey.CompanyLogo,
		},
		{
			url: /\/build-history$/,
			title: 'testUser/my-repo',
			children: (
				<>
					<FlexBox>
						<IconButton
							icon={<CaretRightOutlined />}
							bg="secondary"
							height="28"
							onClick={showModal}
						>
							{TextKey.RunJob}
						</IconButton>
						<BlockContainer left="8">
							<Link to={SETTINGS_PATH}>
								<IconButton
									icon={<SettingFilled />}
									bg="secondary"
									height="28"
									width="28"
								/>
							</Link>
						</BlockContainer>
					</FlexBox>

					<Modal
						isModalVisible={isModalVisible}
						hideModal={hideModal}
					/>
				</>
			),
		},
		{
			url: /\/build-details$/,
			title: 'testUser/my-repo',
			children: (
				<>
					<FlexBox>
						<IconButton
							icon={<UndoOutlined />}
							bg="secondary"
							height="28"
							onClick={showModal}
						>
							{TextKey.Rebuild}
						</IconButton>
						<BlockContainer left="8">
							<Link to={SETTINGS_PATH}>
								<IconButton
									icon={<SettingFilled />}
									bg="secondary"
									height="28"
									width="28"
								/>
							</Link>
						</BlockContainer>
					</FlexBox>
				</>
			),
		},
		{
			url: /\//,
			title: TextKey.CompanyLogo,
			children: (
				<Link to={SETTINGS_PATH}>
					<IconButton
						icon={<SettingFilled />}
						bg="secondary"
						height="28"
					>
						{TextKey.Settings}
					</IconButton>
				</Link>
			),
		},
	];

	const headerContent = headersContent.find((content) =>
		content.url.test(pathname)
	);

	return (
		<LayoutDesign>
			{headerContent && (
				<Header title={headerContent.title}>
					{headerContent.children}
				</Header>
			)}

			<ContentWrapper>{children}</ContentWrapper>
			<Footer />
		</LayoutDesign>
	);
};
