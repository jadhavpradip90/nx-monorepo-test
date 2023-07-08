import { ButtonProps } from "@fluentui/react-components";

export interface ITemplatePreview {
    className?: string;
    /*leftButtonDisabled?: boolean,
    leftButtonClassName?: string;
    rightButtonDisabled?: boolean,
    rightButtonClassName?: string;
    onLeftButtonClick: () => void;
    onRightButtonClick: () => void;*/

    leftButtonProps?: ButtonProps,
    rightButtonProps?: ButtonProps,

    templateViewerClassName?: string;
    templateContent: string;
}