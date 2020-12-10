import React, { FC } from 'react';
import { Modal as ModalStyle } from 'antd';
import TextKey from 'src/core/theme/textKeys';
import { Text } from 'src/core/theme';
import { Input } from 'src/core/atoms/Input';
import { MarginContainer } from 'src/core/theme/common';
import styled from 'styled-components';
import { Button } from 'src/core/atoms/Button';

interface ModalProps {
	isModalVisible: boolean;
	handleRunJob: () => void;
	handleCancel: () => void;
}

export const Modal: FC<ModalProps> = ({
	isModalVisible,
	handleRunJob,
	handleCancel,
}) => (
	<ModalWrapper
		title={TextKey.NewJob}
		visible={isModalVisible}
		onOk={handleRunJob}
		onCancel={handleCancel}
		footer={[
			<Button key='submit' bg='primary' onClick={handleRunJob}>
				{TextKey.RunJob}
			</Button>,
			<Button key='back' bg='secondary' onClick={handleCancel}>
				{TextKey.Cancel}
			</Button>,
		]}
	>
		<Text>{TextKey.NewJobDescription}</Text>
		<MarginContainer top='12' />
		<Input placeholder={TextKey.CommitHash} height='40' />
		<MarginContainer top='10' />
		<Input placeholder={TextKey.JobCommand} height='40' />
	</ModalWrapper>
);

export const ModalWrapper = styled(ModalStyle)`
	.ant-modal-footer {
		text-align: left;
	}
	.ant-modal-content {
		border-radius: 6px;
	}
`;
