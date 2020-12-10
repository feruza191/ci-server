import React, { FC } from 'react';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { Input } from 'src/core/atoms/Input';
import { Button } from '../../core/atoms/Button';
import { Text, fontSize, fontWeight } from '../../core/theme';
import TextKey from '../../core/theme/textKeys';
import { Layout } from '../../core/layout/Layout';
import { MarginContainer, FlexBox } from '../../core/theme/common';
import { FormTime, ButtonsWrapper } from './style';
import { BUILD_HISTORY_PATH } from '../../constants';

export const SettingsPage: FC = () => {
	const onFinish = () => {
		// eslint-disable-next-line no-console
		console.log('Success:');
	};

	return (
		<Layout>
			<Text fontSize={fontSize.normal} fontWeight={fontWeight.bold}>
				{TextKey.Settings}
			</Text>
			<MarginContainer top='3' />
			<Text type='secondary' fontWeight={fontWeight.regular}>
				{TextKey.ConfigureRepository}
			</Text>
			<MarginContainer top='22' />
			<Form name='settings' onFinish={onFinish}>
				<Form.Item>
					<Text>{TextKey.GitHubRepository}</Text>
					<Form.Item name='repo_name'>
						<Input
							allowClear
							placeholder={TextKey.RepoName}
							width='474'
						/>
					</Form.Item>
				</Form.Item>
				<Form.Item>
					<Text>{TextKey.MainBranch}</Text>
					<Form.Item name='main_branch'>
						<Input
							allowClear
							placeholder={TextKey.BranchName}
							width='474'
						/>
					</Form.Item>
				</Form.Item>
				<Form.Item>
					<FlexBox alignItems='center'>
						<Text>{TextKey.MainBranch}</Text>
						<MarginContainer right='8' />
						<FormTime name='time'>
							<Input width='52' />
						</FormTime>
						<MarginContainer left='8' />
						<Text>{TextKey.Minutes}</Text>
					</FlexBox>
				</Form.Item>
				<Form.Item>
					<ButtonsWrapper alignItems='center'>
						<Link to={BUILD_HISTORY_PATH}>
							<Button bg='primary' width='69' htmlType='submit'>
								{TextKey.Save}
							</Button>
						</Link>

						<MarginContainer left='8' />
						<Button bg='secondary' width='80'>
							{TextKey.Cancel}
						</Button>
					</ButtonsWrapper>
				</Form.Item>
			</Form>
		</Layout>
	);
};
