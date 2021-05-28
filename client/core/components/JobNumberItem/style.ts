import styled from 'styled-components';

import { JobStatus } from 'client/core/enums/JobStatus';
import { Text, device } from 'client/core/theme';
import { FlexBox } from 'client/core/theme/common';
import { CONSTANT_PALETTES } from 'client/core/theme/palette';

interface JobNumberProps {
	status: JobStatus;
}

export const JobNumberWrapper = styled(FlexBox)`
	display: flex;

	@media ${device.mobileL} {
		display: block;
	}
`;

export const JobNumber = styled(Text)<JobNumberProps>`
	color: ${({ status }) => {
		return {
			[JobStatus.Success]: CONSTANT_PALETTES.green,
			[JobStatus.Fail]: CONSTANT_PALETTES.red,
			[JobStatus.Cancelled]: CONSTANT_PALETTES.red,
			[JobStatus.Waiting]: CONSTANT_PALETTES.orange,
			[JobStatus.InProgress]: CONSTANT_PALETTES.orange,
		}[status];
	}};
`;
