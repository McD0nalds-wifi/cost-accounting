import { ReactNode } from 'react'

import classNames from 'classnames'

import { IIconProps, LoaderIcon } from '../icons'
import Typography from '../typography'
import style from './index.module.scss'

type ButtonType = 'primary' | 'secondary' | 'link'

type ButtonSize = 'small' | 'medium' | 'large'

type ButtonHtmlType = 'button' | 'submit' | 'reset'

interface IButtonProps {
    type: ButtonType
    size?: ButtonSize
    htmlType?: ButtonHtmlType
    children?: ReactNode
    isLoading?: boolean
    isDisabled?: boolean
    isBlock?: boolean
    isNoWrap?: boolean
    startIcon?: (props: IIconProps) => JSX.Element
    endIcon?: (props: IIconProps) => JSX.Element
    onClick?: () => void
}

const Button = ({
    type,
    size = 'large',
    htmlType = 'button',
    children,
    isLoading = false,
    isDisabled = false,
    isBlock = false,
    isNoWrap = false,
    startIcon,
    endIcon,
    onClick,
}: IButtonProps) => {
    const StartIcon = startIcon
    const EndIcon = endIcon

    const buttonClass = classNames({
        [style.button]: true,
        [style[`button__${type}`]]: true,
        [style[`button__${size}`]]: true,
        [style['button__loading']]: isLoading,
    })

    const iconSize = size === 'small' ? '12px' : '20px'

    return (
        <button
            className={buttonClass}
            style={{ width: isBlock ? '100%' : 'fit-content', whiteSpace: isNoWrap ? 'nowrap' : 'normal' }}
            type={htmlType}
            disabled={isDisabled}
            onClick={onClick}
        >
            {StartIcon && <StartIcon color={'inherit'} height={iconSize} width={iconSize} />}

            <Typography
                type={size === 'small' ? 'caption' : 'body1'}
                fontWeight={'600'}
                color={isLoading ? 'transparent' : 'inherit'}
            >
                {children}
            </Typography>

            {EndIcon && <EndIcon color={'inherit'} height={iconSize} width={iconSize} />}

            <div className={style.loader} style={{ opacity: isLoading ? 1 : 0 }}>
                {isLoading && (
                    <div className={style.loader_spinner}>
                        <LoaderIcon color={'white'} height={'24px'} width={'24px'} />
                    </div>
                )}
            </div>
        </button>
    )
}

export default Button
