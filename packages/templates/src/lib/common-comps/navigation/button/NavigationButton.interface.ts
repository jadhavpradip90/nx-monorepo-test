import { ButtonProps } from "@fluentui/react-components";

export enum NavigationButtonDirection {
    Left,
    Right
}

export type INavigationButton = ButtonProps & { direction: NavigationButtonDirection};