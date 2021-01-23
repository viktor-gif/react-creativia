import React from 'react';
import s from './SectionsSuptitle.module.css'

const SectionsSuptitle = (props) => {
    
    return <div className={s.SectionsSuptitle + ' ' + props.colorStyle}>
        Lorem ipsum dolor sit amet consectetur <span>adipisicing elit.</span> Sapiente saepe, enim, eveniet molestiae maxime fugit necessitatibus, non quibusdam impedit reiciendis nulla doloremque
    </div>
}

export default SectionsSuptitle;