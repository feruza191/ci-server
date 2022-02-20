import React, { ReactElement, useCallback, useEffect } from 'react';
import { Form, Spin } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { BUILD_HISTORY_PATH, HOME_PATH } from 'client/constants';
import { Button } from 'client/core/atoms/Button';
import { Input } from 'client/core/atoms/Input';
import TextKey from 'client/core/enums/TextKeys';
import { Layout } from 'client/core/layout/Layout';
import { Text, fontSize, fontWeight } from 'client/core/theme';
import { BlockContainer, FlexBox } from 'client/core/theme/common';
import { FormTime, ButtonsWrapper } from './style';
import {
	getAllSettings,
	saveSettings,
} from 'client/store/actions/settings.actions';
import { getSettings } from 'client/store/selectors/selectors';

interface ValuesProps {
	repoName: string;
	mainBranch: string;
	period: number;
}

const SettingsPage = ({ history }: RouteComponentProps): ReactElement => {
	const dispatch = useDispatch();
	const settings = useSelector(getSettings);

	const onFinish = useCallback(async (values: ValuesProps) => {
		const { repoName, mainBranch, period } = values;
		dispatch(saveSettings({ repoName, mainBranch, period }));
		history.push(BUILD_HISTORY_PATH);
	}, []);

	useEffect(() => {
		dispatch(getAllSettings());
	}, []);

	if (!settings.repoName) {
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
						repoName: settings?.repoName,
						mainBranch: settings?.mainBranch,
						period: settings?.period,
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
};

export default SettingsPage;
