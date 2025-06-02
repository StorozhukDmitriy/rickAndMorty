import {Route, Routes} from 'react-router';
import {StartPage} from '../Pages/StartPage/StartPage.tsx';
import {CharacterPage} from '../Pages/chatacterPages/CharacterPage.tsx';
import {PageNotFound} from '../Pages/pageNotFound/PagenNotFound.tsx';


export const Path = {
    StartPage: '',
    Characters: '/characters',
    Location:'/location',
    Episodes:'/episodes',
    PageNotFound: '*',

} as const;

export const Routing = () => {
    return (
        <Routes>
            <Route path={Path.StartPage} element={<StartPage/>}/>
            <Route path={Path.Characters} element={<CharacterPage/>}/>
            <Route path={Path.PageNotFound} element={<PageNotFound/>}/>
        </Routes>
    )
}