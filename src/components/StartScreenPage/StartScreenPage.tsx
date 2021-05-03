import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Instrument from 'assets/images/instrument.svg';
import { SETTINGS_PATH } from 'src/constants';
import { Button } from 'src/core/atoms/Button';
import TextKey from 'src/core/enums/TextKeys';
import { Layout } from 'src/core/layout/Layout';
import { lineHeight } from 'src/core/theme';
import { BlockContainer } from 'src/core/theme/common';
import { StartScreenWrapper, SettingsText } from './style';

const StartScreenPage: FC = () => (
	<Layout>
		<StartScreenWrapper
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<img src={Instrument} alt="instrument" />
			<BlockContainer top="32" bottom="24">
				<SettingsText lineHeight={lineHeight.micro}>
					{TextKey.ConfigureRepository}
				</SettingsText>
			</BlockContainer>
			<Link to={SETTINGS_PATH}>
				<Button bg="primary" height="36" width="123">
					{TextKey.OpenSettings}
				</Button>
			</Link>
		</StartScreenWrapper>
	</Layout>
);

export default StartScreenPage;
