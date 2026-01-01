
function IconLabel({ icon: Icon, label, children, className = '', iconClassName = '', labelClassName = '', onClick = () => {} }) {

    return (
        <button
            onClick={() => onClick()}
            className={`flex cursor-pointer ${className}`}
        >
            <Icon className={iconClassName} />
            {/* className="text-sm leading-none font-semibold" */}
            {label && <span className={labelClassName}>{label}</span>}
            {children}
        </button>
    )
}

export default IconLabel