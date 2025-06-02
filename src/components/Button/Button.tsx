import style from './Button.module.css'

type ButtonPropsType = {
    onClick?: () => void,
    children?: React.ReactNode,
}


export const Button = ({onClick,children}: ButtonPropsType) => {
    const onClickHandler = () => {
        if (onClick) onClick();
    }
    return (<button className={style.button} onClick={onClickHandler}>{children}</button>)
};

