import React from 'react';
import css from './Paginator.module.css';
import preloader from '../../img/preloader.gif';


let Preloader = ()=>{
		

		return(
			<div className={css.preloader_container}>
				<div className={css.preloader}>
					<h1>Нжно заплатить</h1>
					<img className={css.preloader_img} src={preloader}/>
				</div>
			</div>

			)
}


export default Preloader;