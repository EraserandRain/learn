interface ButtonProps {
    msg: string
}

const Button: React.FC<ButtonProps> = ({ msg }) => {
    return (
        <button
            className="border-2 rounded-md"
            onClick={e => {
                e.stopPropagation()
                alert(msg)
            }}>{msg}</button>
    )
}

const Play = () => {
    return (
        <Button msg={'Play'} />
    )
}

const Upload = () => {
    return (
        <Button msg={'Upload'} />
    )
}

export default function PropagationDemo() {
    return (
        <>
            <div onClick={() => alert('Main Clicked!')}>
                <Play />
                <Upload />
            </div>
        </>
    )
}
