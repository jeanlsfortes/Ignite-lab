interface TextProps {
    size?: 'sm' | 'md' |'lg';
}

export function Text({size = 'md'}){
    return(
        <span className="text-branco-200 font-sans">texto tudo certo</span>
    )
}