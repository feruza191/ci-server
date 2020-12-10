import React, { FC } from 'react';
import BranchSvg from 'src/assets/images/branch.svg';
import { FlexBox, MarginContainer } from '../theme/common';
import { Text } from '../theme';

interface BranchNameItemProps {
	branchName: string | null;
	commitHash: string | null;
}

export const BranchNameItem: FC<BranchNameItemProps> = ({
	branchName,
	commitHash,
}) => (
	<FlexBox alignItems='center'>
		<img src={BranchSvg} />
		<MarginContainer left='5' />
		<Text>{branchName}</Text>
		<MarginContainer left='5' />
		<Text type='secondary'>{commitHash}</Text>
	</FlexBox>
);
