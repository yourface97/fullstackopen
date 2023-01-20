const Input = ({name, onChange, value}) => {
    return(
        <>
        <div>
            {name} <input type="text" onChange={onChange} value={value} />
        </div>
        </>
    )
}

export default Input;