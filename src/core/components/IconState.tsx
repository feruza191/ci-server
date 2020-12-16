import React, { useMemo, FC } from 'react';

import { JobStatus } from '../enums/JobStatus';
import FailSvg from 'assets/images/fail.svg';
import SuccessSvg from 'assets/images/success.svg';
import WaitingSvg from 'assets/images/waiting.svg';

interface IconStateProps {
	status: JobStatus;
}

export const IconState: FC<IconStateProps> = ({ status }) => {
	const jobStatus = useMemo(() => {
		return {
			[JobStatus.Success]: SuccessSvg,
			[JobStatus.Fail]: FailSvg,
			[JobStatus.Cancelled]: FailSvg,
			[JobStatus.Waiting]: WaitingSvg,
			[JobStatus.InProgress]: WaitingSvg,
		}[status];
	}, [status]);

	return <img src={jobStatus} />;
};
