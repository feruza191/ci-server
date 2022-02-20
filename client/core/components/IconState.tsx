import React, { useMemo, ReactElement } from 'react';

import FailSvg from 'assets/images/fail.svg';
import SuccessSvg from 'assets/images/success.svg';
import WaitingSvg from 'assets/images/waiting.svg';
import { JobStatus } from '../enums/JobStatus';

interface IconStateProps {
	status: JobStatus;
}

export const IconState = ({ status }: IconStateProps): ReactElement => {
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
