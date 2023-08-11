import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa';        // react-icon 

function Icon({name}){
    if(name == "circle"){
        return <FaRegCircle/>
    }else if(name == "cross"){
        return <FaTimes/>
    }else{
        return <FaPen/>
    }

}

export default Icon;