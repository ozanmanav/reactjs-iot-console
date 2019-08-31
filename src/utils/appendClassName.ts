export function appendClassName(baseClassName: string, className?: string) {
    return className ? `${baseClassName} ${className}` : baseClassName;
}
