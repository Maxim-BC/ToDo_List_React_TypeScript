import React, {useRef} from "react";

interface TodoFormProps {
    onAdd(title:string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
const ref = useRef<HTMLInputElement>(null)

// const[title, setTitle]= useState('')
// const changeHandler= (event: React.ChangeEvent<HTMLInputElement>)=> {
// setTitle(event.target.value)
// }

const keyPressHandler=(event: React.KeyboardEvent)=> {
    if (event.key==='Enter' &&  ref.current!.value[0] !== ' ') {
        props.onAdd(ref.current!.value)
        ref.current!.value=''
    }
}
    return (
        <div className="input-field mt2">
            <input 
            type="text"
            ref={ref}
            id="title" 
            onKeyPress={keyPressHandler}
            placeholder="Введите название дела"/>
            <label htmlFor="title" className="active">Ввведите название</label>
        </div>
    )
}