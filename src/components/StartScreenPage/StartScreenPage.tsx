import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../core/layout/Layout';
import { StartScreenWrapper, SettingsText } from './style';
import TextKey from '../../core/theme/textKeys';
import { MarginContainer } from '../../core/theme/common';
import { Button } from '../../core/atoms/Button';
import { SETTINGS_PATH } from '../../constants';
import Instrument from '../../assets/images/instrument.svg';
import { lineHeight } from '../../core/theme';

export const StartScreenPage: FC = () => (
	<Layout>
		<StartScreenWrapper
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<img src={Instrument} />
			<MarginContainer top='32' />
			<SettingsText lineHeight={lineHeight.micro}>
				{TextKey.ConfigureRepository}
			</SettingsText>
			<MarginContainer top='24' />
			<Link to={SETTINGS_PATH}>
				<Button bg='primary' height='36' width='123'>
					{TextKey.OpenSettings}
				</Button>
			</Link>
		</StartScreenWrapper>
	</Layout>
);
