import React, { FC } from 'react';
import { Modal as ModalStyle, Form } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Button } from 'client/core/atoms/Button';
import { Input } from 'client/core/atoms/Input';
import TextKey from 'client/core/enums/TextKeys';
import { Text } from 'client/core/theme';
import { BlockContainer, FlexBox } from 'client/core/theme/common';
import { fetchAddJob, fetchJobs } from 'client/store/actions/jobs.actions';

interface ModalProps {
	isModalVisible: boolean;
	hideModal: () => void;
}

interface ValuesProps {
	commitHash: string;
	buildCommand: string;
}

export const Modal: FC<ModalProps> = ({ isModalVisible, hideModal }) => {
	const dispatch = useDispatch();

	const onFinish = async (values: ValuesProps) => {
		const { commitHash, buildCommand } = values;

		await dispatch(fetchAddJob({ commitHash, buildCommand }));
		fetchJobs();
	};
	return (
		<ModalWrapper
			title={TextKey.NewJob}
			visible={isModalVisible}
			onOk={hideModal}
			onCancel={hideModal}
		>
			<Form onFinish={onFinish} name="jobs">
				<Text>{TextKey.NewJobDescription}</Text>
				<BlockContainer top="12" bottom="10">
					<Form.Item name="commitHash">
						<Input placeholder={TextKey.CommitHash} height="40" />
					</Form.Item>
				</BlockContainer>
				<Form.Item name="buildCommand">
					<Input placeholder={TextKey.JobCommand} height="40" />
				</Form.Item>
				<FlexBox>
					<Form.Item>
						<Button
							htmlType="submit"
							bg="primary"
							onClick={hideModal}
						>
							{TextKey.RunJob}
						</Button>
					</Form.Item>
					<BlockContainer left="15">
						<Form.Item>
							<Button bg="secondary" onClick={hideModal}>
								{TextKey.Cancel}
							</Button>
						</Form.Item>
					</BlockContainer>
				</FlexBox>
			</Form>
		</ModalWrapper>
	);
};

export const ModalWrapper = styled(ModalStyle)`
	.ant-modal-footer {
		text-align: left;
		display: none;
	}
	.ant-modal-content {
		border-radius: 6px;
	}
`;
