import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

interface Props {
	children: ReactNode;
}

export const ThemeContextProvider = ({ children }: Props) => {
	const breakpointValues: any = {
		xs: 375,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
		xxl: 1600,
	};

	// referring Material-ui breakpoints approach
	const breakpoints = {
		keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
		up: (key: number) => `@media (min-width:${breakpointValues[key]}px)`,
	};

	// TODO: the existing theme should be refactored (separate colors, shadow, etc)
	return (
		<ThemeProvider theme={{ ...theme, breakpoints }}>{children}</ThemeProvider>
	);
};
