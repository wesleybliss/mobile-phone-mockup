import { useState } from 'react'

const Dropdown = ({
    className = '',
    menuClassName = '',
    trigger,
    items,
}) => {
    
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        
        <div className={`dropdown ${className}`}>
            
            <div
                tabIndex={0}
                role="button"
                className="m-1 btn"
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setTimeout(() => setIsOpen(false), 100)}>
                {trigger}
            </div>
            
            {isOpen && (
                <ul
                    tabIndex={0}
                    className={`dropdown-content menu bg-base-100
                        rounded-box z-10 w-52 p-2 shadow-sm ${menuClassName}`}>
                    {items.map((item, index) => (
                        <li key={index} onClick={item.onClick}>
                            <a>{item.content}</a>
                        </li>
                    ))}
                </ul>
            )}
        
        </div>
        
    )
    
}

export default Dropdown
