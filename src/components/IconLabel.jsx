
function IconLabel({ icon: Icon, label, className = '', iconClassName = '', labelClassName = '' }) {

    return (
        <button
            onClick={() => onClick()}
            className={`flex ${className}`}
        >
            <Icon className={iconClassName} />
            {/* className="text-sm leading-none font-semibold" */}
            {label && <span className={labelClassName}>{label}</span>}
        </button>
    )
}

export default IconLabel