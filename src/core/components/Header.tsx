import React, { FC, useState } from 'react';
import { Row, Col } from 'antd';
import {
	SettingFilled,
	CaretRightOutlined,
	UndoOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import TextKey from '../theme/textKeys';
import { CompanyLogo, HeaderWrapper, IconButton } from './style';
import { SETTINGS_PATH } from '../../constants';
import { Modal } from './Modal';
import { Text, fontSize } from '../theme';
import { FlexBox, MarginContainer } from '../theme/common';

export const Header: FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const location = useLocation();

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleRunJob = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const path = location.pathname;

	const handleHeaders = () => {
		switch (path) {
			case '/':
				return (
					<>
						<Link to='/'>
							<CompanyLogo>{TextKey.CompanyLogo}</CompanyLogo>
						</Link>
						<Link to={SETTINGS_PATH}>
							<IconButton
								icon={<SettingFilled />}
								bg='secondary'
								height='28'
							>
								{TextKey.Settings}
							</IconButton>
						</Link>
					</>
				);

			case '/settings':
				return (
					<Link to='/'>
						<CompanyLogo>{TextKey.CompanyLogo}</CompanyLogo>
					</Link>
				);

			case '/build-history':
				return (
					<>
						<Text fontSize={fontSize.medium}>testUser/my-repo</Text>
						<FlexBox>
							<IconButton
								icon={<CaretRightOutlined />}
								bg='secondary'
								height='28'
								onClick={showModal}
							>
								{TextKey.RunJob}
							</IconButton>
							<MarginContainer left='8' />
							<Link to={SETTINGS_PATH}>
								<IconButton
									icon={<SettingFilled />}
									bg='secondary'
									height='28'
									width='28'
								/>
							</Link>
						</FlexBox>

						<Modal
							isModalVisible={isModalVisible}
							handleRunJob={handleRunJob}
							handleCancel={handleCancel}
						/>
					</>
				);

			case '/build-details':
				return (
					<>
						<Text fontSize={fontSize.medium}>testUser/my-repo</Text>
						<FlexBox>
							<IconButton
								icon={<UndoOutlined />}
								bg='secondary'
								height='28'
								onClick={showModal}
							>
								{TextKey.Rebuild}
							</IconButton>
							<MarginContainer left='8' />
							<Link to={SETTINGS_PATH}>
								<IconButton
									icon={<SettingFilled />}
									bg='secondary'
									height='28'
									width='28'
								/>
							</Link>
						</FlexBox>
					</>
				);

			default:
				break;
		}
	};

	return (
		<Row>
			<Col xs={24}>
				<HeaderWrapper
					justifyContent='space-between'
					alignItems='center'
				>
					{handleHeaders()}
				</HeaderWrapper>
			</Col>
		</Row>
	);
};
