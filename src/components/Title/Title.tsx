import style from './Title.module.css'

type TitlePropsType = {
    title: string
}

const Title = ({title}: TitlePropsType) => {
    return (
        <h2 className={style.title}>{title}</h2>
    );
};

export default Title;