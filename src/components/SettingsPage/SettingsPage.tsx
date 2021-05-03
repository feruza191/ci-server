import React, { FC } from 'react';
import { Form } from 'antd';
import { Link } from 'react-router-dom';

import { BUILD_HISTORY_PATH } from 'src/constants';
import { Button } from 'src/core/atoms/Button';
import { Input } from 'src/core/atoms/Input';
import TextKey from 'src/core/enums/TextKeys';
import { Layout } from 'src/core/layout/Layout';
import { Text, fontSize, fontWeight } from 'src/core/theme';
import { BlockContainer, FlexBox } from 'src/core/theme/common';
import { FormTime, ButtonsWrapper } from './style';

const SettingsPage: FC = () => {
	const onFinish = () => {
		// eslint-disable-next-line no-console
		console.log('Success:');
	};

	return (
		<Layout>
			<Text fontSize={fontSize.normal} fontWeight={fontWeight.bold}>
				{TextKey.Settings}
			</Text>
			<BlockContainer top="3">
				<Text type="secondary" fontWeight={fontWeight.regular}>
					{TextKey.ConfigureRepository}
				</Text>
			</BlockContainer>

			<BlockContainer top="22">
				<Form name="settings" onFinish={onFinish}>
					<Form.Item>
						<Text>{TextKey.GitHubRepository}</Text>
						<Form.Item name="repo_name">
							<Input
								allowClear
								placeholder={TextKey.RepoName}
								width="474"
							/>
						</Form.Item>
					</Form.Item>
					<Form.Item>
						<Text>{TextKey.MainBranch}</Text>
						<Form.Item name="main_branch">
							<Input
								allowClear
								placeholder={TextKey.BranchName}
								width="474"
							/>
						</Form.Item>
					</Form.Item>
					<Form.Item>
						<FlexBox alignItems="center">
							<Text>{TextKey.MainBranch}</Text>
							<BlockContainer right="8" left="8">
								<FormTime name="time">
									<Input width="52" />
								</FormTime>
							</BlockContainer>

							<Text>{TextKey.Minutes}</Text>
						</FlexBox>
					</Form.Item>
					<Form.Item>
						<ButtonsWrapper alignItems="center">
							<Link to={BUILD_HISTORY_PATH}>
								<Button
									bg="primary"
									width="69"
									htmlType="submit"
								>
									{TextKey.Save}
								</Button>
							</Link>

							<BlockContainer left="8">
								<Button bg="secondary" width="80">
									{TextKey.Cancel}
								</Button>
							</BlockContainer>
						</ButtonsWrapper>
					</Form.Item>
				</Form>
			</BlockContainer>
		</Layout>
	);
};

export default SettingsPage;
