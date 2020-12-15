import React, { FC } from 'react';

import { Modal as ModalStyle } from 'antd';
import styled from 'styled-components';

import { Button } from 'src/core/atoms/Button';
import { Input } from 'src/core/atoms/Input';
import TextKey from 'src/core/enums/TextKeys';
import { Text } from 'src/core/theme';
import { BlockContainer } from 'src/core/theme/common';

interface ModalProps {
	isModalVisible: boolean;
	hideModal: () => void;
}

export const Modal: FC<ModalProps> = ({ isModalVisible, hideModal }) => (
	<ModalWrapper
		title={TextKey.NewJob}
		visible={isModalVisible}
		onOk={hideModal}
		onCancel={hideModal}
		footer={[
			<Button key="submit" bg="primary" onClick={hideModal}>
				{TextKey.RunJob}
			</Button>,
			<Button key="back" bg="secondary" onClick={hideModal}>
				{TextKey.Cancel}
			</Button>,
		]}
	>
		<Text>{TextKey.NewJobDescription}</Text>
		<BlockContainer top="12" bottom="10">
			<Input placeholder={TextKey.CommitHash} height="40" />
		</BlockContainer>
		<Input placeholder={TextKey.JobCommand} height="40" />
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
