import { Layout } from 'antd';
import styled from 'styled-components';
import {
	palette,
	device,
	Text,
	fontSize,
	lineHeight,
	fontWeight,
} from '../theme';
import { FlexBox } from '../theme/common';
import { Button } from '../atoms/Button';

const { Content } = Layout;

export const FooterWrapper = styled.div`
	background: ${palette.greyLight};
	padding: 8px 100px;
	flex-shrink: 0;

	ul {
		list-style-type: none;
		margin-bottom: 0;
		li {
			display: inline-block;
			padding-right: 12px;
			color: ${palette.greyDark};
		}
	}

	@media ${device.mobileL} {
		padding: 8px 16px;

		ul {
			margin-bottom: 8px;
		}
	}
`;

export const HeaderWrapper = styled(FlexBox)`
	margin: 0 100px;
	flex-shrink: 0;

	@media ${device.mobileL} {
		margin: 0 53px 0 16px;
	}
`;

export const CompanyLogo = styled.div`
	font-size: ${fontSize.medium}px;
	line-height: ${lineHeight.medium}px;
	font-weight: ${fontWeight.medium}px;
	color: ${palette.greyDark};
`;

export const ContentWrapper = styled(Content)`
	margin: 20px 100px;
	flex-grow: 1;

	@media ${device.mobileL} {
		margin: 20px 16px;
	}
`;

export const IconButton = styled(Button)`
	@media ${device.mobileL} {
		& > span:last-child {
			display: none;
		}
	}
`;

export const CopyRight = styled(Text)`
	@media ${device.mobileL} {
		text-align: left;
	}
`;
