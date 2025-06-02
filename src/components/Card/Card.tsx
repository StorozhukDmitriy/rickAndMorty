import style from './card.module.css'

type CardPropsType = {
    nameHeros: string;
    image: string;
    onClick: () => void;
}

export const Card = (props:CardPropsType) => {
    const onClickHanler = () =>{
        props.onClick()
    }

    return (
        <div onClick={onClickHanler} className={style.card}>
            <img src={props.image} alt={props.nameHeros}/>
            <p>{props.nameHeros}</p>
        </div>
    );
};

