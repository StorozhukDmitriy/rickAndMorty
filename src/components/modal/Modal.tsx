import style from './Modal.module.css'
import type {ResultType} from '../model/apiRickAndMorty.ts';

type ModalProps = {
    card: ResultType
}

const Modal = (props: ModalProps) => {
    return (
        <div className={style.modalBackground}>
            <div className={style.modal}>
                {props.card.name}
            </div>
        </div>
    );
};

export default Modal;