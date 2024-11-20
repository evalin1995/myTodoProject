import { useState } from 'react';
import CreateForm from './CreateForm'
import Todo from './Todo';

function TodoWrappper() {

    // 因為有多個todo,所以使用陣列存取
    // const [todos,setTodos]=useState(['list1','list2'])
    // 因為陣列需要key屬性,所以要加上id

    // const [todos, setTodos] = useState(
    //     [
    //         { content: 'list1', id: Math.random()},
    //     ]);

    const [todos, setTodos] = useState(
        [
            { content: 'list1', id: Math.random(), isCompleted: false, isEdit: false },
            { content: 'list2', id: Math.random(), isCompleted: false, isEdit: false },
        ]);

    // 建立加入新的todo內容
    const addTodo = (content) => {
        setTodos([
            // 1.使用...其餘運算子來保留陣列內容
            ...todos,
            // 2.加入新物件內容
            {
                content: content, id: Math.random(), isCompleted: false
            }])
    }

    // 建立刪除todo函式，傳給todo元件使用
    // 使用filter方法找出被刪除的todo
    const deleteTodo = (id) =>
        setTodos(todos.filter((todo) => {
            // 檢查目前的id是否為被刪除的id
            // 如果不是,則保留
            return todo.id !== id
        }))


    // 因為要判定TODO是否被點擊,所以要增加一個標記屬性=>isCompleted

    // 建立「完成<=>取消」雙向(toggle)切換函式
    const toggleCompleted = (id) => {
        // 透過map找出被點擊的項目。檢查被點擊的id是否跟目前陣列中的一樣
        // Yes=>1.取出todo 2.將isCompleted屬性值反向處理(true->f/f->t)
        // No=>todo不變
        setTodos(todos.map((todo) => {
            return todo.id === id
                // 如果是,就做陣列處理
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }
    const toggleIsEdit = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                // 三元運算子
                ? { ...todo, isEdit: !todo.isEdit }
                : todo
            // 滿足條件時回傳?{}否則回傳{}
        }))
    }

    // 建立完成修改的函式
    // 1.異動content為新的內容
    // 2.isEdit改回false
    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                // :=>等於
                ? { ...todo, content: newContent, isEdit: false }
                : todo
        }))
    }
    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    // 元件Todo 屬性todo={值todo}
                    return <Todo todo={todo} key={todo.id}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                        toggleIsEdit={toggleIsEdit}
                        editTodo={editTodo}
                    />

                })
            }
        </div>
    )
}
export default TodoWrappper