import React, { FC } from 'react';

import { BuildLogsWrapper } from '../style';

export const BuildLogs: FC<{ jobLogs: string | null }> = ({ jobLogs }) => {
	return <BuildLogsWrapper>{jobLogs}</BuildLogsWrapper>;
};
