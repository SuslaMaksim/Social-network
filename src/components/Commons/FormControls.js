import React from 'react';
import styles from './FormControls.module.css'


export const FormControl = ({input,meta,...props}) =>{
 let showError = meta.error && meta.touched;
	return <div className = {styles.formControl + " " + (showError ? styles.error : null)} >

			  {props.children }
			   <div>
				 {showError && <span>{meta.error}</span>  }
			  </div>
		   </div>
}





export const Input = (props) =>{
	let{input,meta,child,...restProps} = props;
	return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}
export const TextArea = (props) =>{
	let{input,meta,child,...restProps} = props;
	return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
}


