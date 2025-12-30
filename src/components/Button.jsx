
function Button({ variant, children, onClick = () => { }, className = '', }) {

    const buttons = {
        primary: 'flex justify-center bg-red-400 rounded-sm text-white font-bold uppercase cursor-pointer click-effect ' + className,
        secondary: 'flex justify-center border rounded-sm text-black font-bold uppercase  cursor-pointer click-effect ' + className,
    }

    return (
        <button
            className={buttons[variant]}
            onClick={() => onClick()}
        >
            {children}
        </button>
    )
}

export default Button