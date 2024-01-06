import PropTypes from 'prop-types';
import cname from 'classnames';

// import '../index.scss';
// import cl from './UiButton.module.scss';

const UiButton = ({
  text, 
  onClick, 
  disabled, 
  theme='dark',
  classes
}) => {
  return (
    <button 
        // className={cname(cl.btn, cl[theme])}
        onClick={onClick}
        disabled={disabled}

    >
        {text}
    </button>
  )
}

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
}

export default UiButton;