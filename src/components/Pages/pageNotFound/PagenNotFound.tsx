import style from './PageNotFound.module.css'

import notFound from './NotFound.png'


export function PageNotFound() {
    return (
        <div className={style.pageNotFound}>
                <div className={style.pageNotFoundWrapper}>
                    <img style={{width:"100%",height:"auto"}} src={notFound} alt="NotFound Page"/>
                </div>
                <p>Page Not Found</p>
        </div>)

}