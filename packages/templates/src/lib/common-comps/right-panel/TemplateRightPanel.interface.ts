import { ButtonProps } from "@fluentui/react-components";

export interface ITemplateRightPanel {
    className?: string;
    navigationLeftButtonProps?: ButtonProps,
    navigationRightButtonProps?: ButtonProps,
    templateContent: string;
    footerPrimaryButtonProps?: ButtonProps,
    footerSecondaryButtonProps?: ButtonProps,
}