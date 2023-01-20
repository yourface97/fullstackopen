const Input = ({name, onChange, value}) => {
    return(
        <>
        <div>
            {name} <input type="text" onChange={onChange} value={value} />
        </div>
        </>
    )
}


const Form = ({inputs, onClick}) => {
    return(
        <form>
            {inputs.map(input => <Input key={input.id} name={input.name} onChange={input.func} value={input.value}/>)}
            <button type="submit" onClick={onClick}>add</button>
        </form>
    )
}

export default Form;