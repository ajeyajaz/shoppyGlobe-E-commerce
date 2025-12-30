
function IconLabel({ icon: Icon, label, children, className = '', iconClassName = '', labelClassName = '' }) {

    return (
        <button
            onClick={() => onClick()}
            className={`flex ${className}`}
        >
            <Icon className={iconClassName} />
            {/* className="text-sm leading-none font-semibold" */}
            {label && <span className={labelClassName}>{label}</span>}
            {children}
        </button>
    )
}

export default IconLabel