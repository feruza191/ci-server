import styled from 'styled-components';

import { JobStatus } from 'src/core/enums/JobStatus';
import { Text, device } from 'src/core/theme';
import { FlexBox } from 'src/core/theme/common';
import { CONSTANT_PALETTES } from 'src/core/theme/palette';

interface JobNumberProps {
	status: string;
}

export const JobNumberWrapper = styled(FlexBox)`
	display: flex;

	@media ${device.mobileL} {
		display: block;
	}
`;

export const JobNumber = styled(Text)<JobNumberProps>`
	color: ${({ status }) => {
		if (status === JobStatus.Success) {
			return CONSTANT_PALETTES.green;
		}
		if (status === JobStatus.Fail) {
			return CONSTANT_PALETTES.red;
		}
		if (status === JobStatus.Waiting) {
			return CONSTANT_PALETTES.orange;
		}
	}};
`;
