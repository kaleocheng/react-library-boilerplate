type Props = {
    text: string
}


export const Welcome = ({ text }: Props) => {
    return (
        <div>Welcome {text}!</div>
    )
}
