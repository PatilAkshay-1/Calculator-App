import React,{useState} from 'react';
import OutputRow from './outputRow';
import Layout from './layout';


const output = props => {
    return (
        <div>
            <OutputRow value={props.answer} textSize={{fontSize:'20px'}} />
            <OutputRow value={props.user} />
        </div>
    )
 }

 export default output;