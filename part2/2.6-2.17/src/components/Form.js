import Input from "./Input";

const Form = ({inputs, onClick}) => {
    return(
        <form>
            {inputs.map(input => <Input key={input.id} name={input.name} onChange={input.func} value={input.value}/>)}
            <button type="submit" onClick={onClick}>add</button>
        </form>
    )
}

export default Form;