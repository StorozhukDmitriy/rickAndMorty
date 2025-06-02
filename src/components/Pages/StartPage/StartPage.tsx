import style from './StartPage.module.css'
import img from './StartImage.webp'
import NavButton from '../../NavButton/NavButton.tsx';
import logo from './foni-papik-pro-l9gy-p-kartinki-rik-i-morti-na-prozrachnom-fone-24.png'

const imageStyle = {
    backgroundImage: `url(${img})`,
    margin: '0 auto',
    backgroundSize: 'cover',
    height: '100dvh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}

export const StartPage = () => (<div style={imageStyle} className={style.startPage}>
    <div className={style.logoWrapper}>
        <img src={logo} alt={'logo'}/>
    </div>
    <NavButton/>
</div>);

