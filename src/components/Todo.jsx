import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import EditForm from "./EditForm";


// 解構props的屬性名稱,用{屬性名}包起來
function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEdit, editTodo }) {
    // if...else相較於三元運算子會受限於jsx撰寫規則(return外可寫js語法)
    return (
        todo.isEdit 
        ? <EditForm todo={todo} editTodo={editTodo} /> 
            // 新增一個completed類別規則
            // 使用反引號+三元運算子檢查isCompleted
            // 如果為真=>套用completed
            // 如果為非=>取消completed類別規則=>''
            : <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                {/* <p>上課中</p> */}
                <p
               
                    onClick={() => { toggleCompleted(todo.id) }}
                >{todo.content}</p>
                <div>
                    <FiEdit
                        onClick={() => { toggleIsEdit(todo.id) }}
                        style={{ cursor: 'pointer', marginRight: '12px' }} />
                    <FaTrash
                        onClick={() => { deleteTodo(todo.id) }}
                        style={{ cursor: 'pointer' }} /></div>

            </div>
    )
}

export default Todo