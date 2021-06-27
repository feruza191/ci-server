import React, { FC, useEffect } from 'react';
import { Form, Spin } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';

import { BUILD_HISTORY_PATH, HOME_PATH } from 'client/constants';
import { Button } from 'client/core/atoms/Button';
import { Input } from 'client/core/atoms/Input';
import TextKey from 'client/core/enums/TextKeys';
import { Layout } from 'client/core/layout/Layout';
import { Text, fontSize, fontWeight } from 'client/core/theme';
import { BlockContainer, FlexBox } from 'client/core/theme/common';
import { useStore } from 'client/shared/customHooks/useStore';
import { FormTime, ButtonsWrapper } from './style';

interface ValuesProps {
	repoName: string;
	mainBranch: string;
	period: number;
}

const SettingsPage: FC<RouteComponentProps> = observer(({ history }) => {
	const store = useStore();

	const onFinish = async (values: ValuesProps) => {
		const { repoName, mainBranch, period } = values;
		await store.saveSettings(repoName, mainBranch, period);
		history.push(BUILD_HISTORY_PATH);
	};

	useEffect(() => {
		store.getSettings();
	}, []);

	if (!store.settings) {
		return <Spin />;
	}

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
				<Form
					name="settings"
					onFinish={onFinish}
					initialValues={{
						repoName: store?.settings?.repoName,
						mainBranch: store?.settings.mainBranch,
						period: store?.settings?.period,
					}}
				>
					<Text>{TextKey.GitHubRepository}</Text>
					<Form.Item name="repoName">
						<Input
							allowClear
							placeholder={TextKey.RepoName}
							width="474"
						/>
					</Form.Item>

					<Text>{TextKey.MainBranch}</Text>
					<Form.Item name="mainBranch">
						<Input
							allowClear
							placeholder={TextKey.BranchName}
							width="474"
						/>
					</Form.Item>

					<FlexBox alignItems="center">
						<Text>{TextKey.MainBranch}</Text>
						<BlockContainer right="8" left="8">
							<FormTime name="period">
								<Input width="52" />
							</FormTime>
						</BlockContainer>

						<Text>{TextKey.Minutes}</Text>
					</FlexBox>

					<ButtonsWrapper alignItems="center">
						<Form.Item>
							<Button bg="primary" width="69" htmlType="submit">
								{TextKey.Save}
							</Button>
						</Form.Item>
						<Link to={HOME_PATH}>
							<BlockContainer left="8">
								<Form.Item>
									<Button bg="secondary" width="80">
										{TextKey.Cancel}
									</Button>
								</Form.Item>
							</BlockContainer>
						</Link>
					</ButtonsWrapper>
				</Form>
			</BlockContainer>
		</Layout>
	);
});

export default SettingsPage;
