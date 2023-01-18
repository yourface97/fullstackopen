const Form = ({onChange, onClick, value}) => {
    return(
        <form>
            <div>
                name: <input type="text" onChange={onChange} value={value} />
            </div>
            <button type="submit" onClick={onClick}>add</button>
        </form>
    )
}

export default Form;