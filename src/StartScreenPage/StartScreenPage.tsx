import React, { FC } from 'react';
import Layout from '../core/layout/Layout';
import Instrument from '../images/instrument.svg';
import { InstrumentLogo, StartScreenWrapper, SettingsText } from './style';
import TextKey from '../core/theme/textKeys';
import { MarginContainer } from '../core/theme/common';
import Button from '../core/atoms/Button';

const StartScreenPage: FC = () => (
	<Layout>
		<StartScreenWrapper>
			<InstrumentLogo src={Instrument} />
			<MarginContainer top='32' />
			<SettingsText lineHeight='16'>
				{TextKey.ConfigureRepository}
			</SettingsText>
			<MarginContainer top='24' />
			<Button bg='primary' height='36' width='123'>
				{TextKey.OpenSettings}
			</Button>
		</StartScreenWrapper>
	</Layout>
);

export default StartScreenPage;
