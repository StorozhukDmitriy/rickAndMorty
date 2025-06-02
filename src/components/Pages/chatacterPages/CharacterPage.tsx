import Title from '../../Title/Title.tsx';
import {type ResultType, useGetCardsQuery, useLazyGetCardQuery} from '../../model/apiRickAndMorty.ts';
import style from './CardsWrapper.module.css'
import {Card} from '../../Card/Card.tsx';
import {Button} from '../../Button/Button.tsx';
import {useNavigate} from 'react-router';
import {useState} from 'react';
import Modal from '../../modal/Modal.tsx';


export const CharacterPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {data} = useGetCardsQuery()
    const [trigger, res] = useLazyGetCardQuery()
    const results: ResultType[] = data?.results as ResultType[]
    const navigate = useNavigate();
    const card = {...res.data} as ResultType

    return (
        <div className={style.pageWrapper}>
            <Title title={'Character Page'}/>
            <div className={style.cardsWrapper}>
                {results?.map((result: ResultType) => <Card
                    onClick={() => {
                        setIsOpen(true)
                        trigger(result.id)
                    }}
                    key={result.id} nameHeros={result.name}
                    image={result.image}/>)}
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <Button onClick={() => {
                    navigate(-1)
                }}>Назад</Button>
                <Button>Вперед</Button>
            </div>
            {isOpen && <Modal card={card}/>}
        </div>
    );
};

