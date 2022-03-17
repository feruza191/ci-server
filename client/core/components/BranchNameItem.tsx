import React, { ReactElement } from 'react';

import BranchSvg from 'assets/images/branch.svg';
import { Text } from '../theme';
import { FlexBox, BlockContainer } from '../theme/common';

interface Props {
	branchName: string | null;
	commitHash: string | null;
}

export const BranchNameItem = ({
	branchName,
	commitHash,
}: Props): ReactElement => (
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
