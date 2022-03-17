import React, { ReactElement } from 'react';

import { BuildLogsWrapper } from '../style';

interface Props {
	jobLogs: string | null;
}
export const BuildLogs = ({ jobLogs }: Props): ReactElement => {
	return <BuildLogsWrapper>{jobLogs}</BuildLogsWrapper>;
};
