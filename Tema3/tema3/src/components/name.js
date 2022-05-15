import PropTypes from 'prop-types';
import { useState } from "react";

const Name = (props) => {
    const [click, setClick] = useState(false);

    const toggleClick = () => {
        setClick(!click);
    };

    return (
        <div>
            <p className={click ? 'cursor your-name' : 'cursor'} onClick={toggleClick}>{props.word}</p>
            {click ? <p>Numele de alaturi este colorat</p> : ""}
        </div>
    )
}

Name.propTypes = {
    word: PropTypes.string
};

export default Name;