import {Button} from '../Button/Button.tsx';
import styles from './navButton.module.css'
import {useNavigate} from 'react-router';
import {Path} from '../Routing/Routing.tsx';
const NavButton = () => {
   const navigate = useNavigate()

    return (
        <div className={styles.navButton}>
            <Button onClick={()=>navigate(Path.Characters)}>Characters</Button>
            <Button>Location</Button>
            <Button>Episodes</Button>
        </div>
    );
};

export default NavButton;