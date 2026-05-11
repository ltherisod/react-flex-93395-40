const Button = ({texto , unCallback}) => {

    /* 
    const miBoton = document.querySelector('button')

    miBoton.addEventListener('click', function(){}) => onClick
    miBoton.addEventListener('keydown', function(){}) => onKeyDown
    miBoton.addEventListener('submit', function(){}) => onSubmit
    miBoton.addEventListener('change', function(){}) => onChange
    miBoton.addEventListener('scroll', function(){}) => onScroll
    */

    return (
        <button onClick={unCallback}>
            {texto}
        </button>
    )
}

export default Button;