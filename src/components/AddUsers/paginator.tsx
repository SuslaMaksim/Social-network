import React,{useState}from 'react';
import css from './Paginator.module.css';



type PropsType = {
	totalCounter: number,
	pageSize: number,
	page: number,
	changePage: (page:number)=> void,
	countPage?: number
}


let Paginator: React.FC<PropsType> = React.memo(({totalCounter,pageSize,page,changePage,countPage = 10})=>{

let totalPage = Math.ceil (totalCounter / pageSize);
let pages = [];
 for(let p = 1; p <= totalPage; p++){
					
		pages.push(p)
	 }

let portionCount = Math.ceil(totalPage / countPage);
let[partOfPage, setPartOfPage] = useState(1);
let firstPage = (partOfPage - 1) * countPage + 1; 
let lastPage = partOfPage * countPage;


	return(
					
			 
					<div className={css.paginator_container}>
						<div className={css.paginator}>
							{lastPage > countPage && <button className={css.paginator_button}  onClick ={()=>setPartOfPage(partOfPage -1 ) }> prev</button>}
								{

									pages.filter( page => page >= firstPage && page <=lastPage ) 

									.map( p =>{
		                               return  <span onClick={()=>changePage(p)}  key = {p} className ={page === p ? css.active : css.page} >{p}</span>
	                                 })

								}
							{ portionCount >  partOfPage &&<button className={css.paginator_button} onClick ={()=>setPartOfPage(partOfPage + 1 ) }> next</button>}
					   </div>
					</div>



		)
})


export default Paginator;