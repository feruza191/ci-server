import React, { FC } from 'react';

import BranchSvg from 'assets/images/branch.svg';
import { Text } from '../theme';
import { FlexBox, BlockContainer } from '../theme/common';

interface BranchNameItemProps {
	branchName: string | null;
	commitHash: string | null;
}

export const BranchNameItem: FC<BranchNameItemProps> = ({
	branchName,
	commitHash,
}) => (
	<FlexBox alignItems="center">
		<img src={BranchSvg} alt="branch" />
		<BlockContainer left="5">
			<Text>{branchName}</Text>
		</BlockContainer>

		<BlockContainer left="5">
			<Text type="secondary">{commitHash}</Text>
		</BlockContainer>
	</FlexBox>
);
