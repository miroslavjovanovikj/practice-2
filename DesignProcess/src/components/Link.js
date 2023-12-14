
import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

const Link = ({ to, children, className, aciveClassName }) => {
    const { navigate, currentPath } = useNavigation()
    const classes = classNames('text-blue-500', className,
        currentPath === to && aciveClassName
    )
    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return
        }
        e.preventDefault()
        navigate(to)

    }
    return <a className={classes} href={to} onClick={handleClick} >{children}</a>
}
export default Link;