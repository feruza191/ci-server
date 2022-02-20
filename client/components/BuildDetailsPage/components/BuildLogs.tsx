import React, { ReactElement } from 'react';

import { BuildLogsWrapper } from '../style';

export const BuildLogs = ({
	jobLogs,
}: {
	jobLogs: string | null;
}): ReactElement => {
	return <BuildLogsWrapper>{jobLogs}</BuildLogsWrapper>;
};
