import React, {useState} from 'react'
import plusx from '../assets/img/plus.png'
import deletex from '../assets/img/delete.png'

const ToDoList = () => {
    const [content, setContent] = useState('');//내용 입력
    const [todos, setTodos] = useState([]);//목록

    const addTodo = () => {
        if (content.trim() === '') {
            alert('내용을 입력해주세요!');
            return;
          }
          const newTodo = {
            text: content,
            checked: false,
          };
          setTodos([...todos, newTodo]);
          setContent('');
    }
    const tododelete = (index) => {const updated = todos.filter((_, i) => i !== index);
        setTodos(updated);}

    const checkboxChange = (index) => {
        const updated = todos.map((todo, i) =>
          i === index ? { ...todo, checked: !todo.checked } : todo
        );
        setTodos(updated);
      };
  return (
    <div className="todolist_wrap">
        <div className="todolist_title">
             <h1>TO DO LIST</h1>
        </div>
        <div className="todolist_content">
        <textarea value={content} onChange={(e) => { setContent(e.target.value) }} placeholder='오늘 할 일을 입력하세요!' className='content' />
             <button onClick={addTodo}> <img src={plusx} alt="plus" /></button>
        </div>

        <div className="todolist">
        {todos.map((todo, index) => (
          <div className="todo_item" key={index}>
            <input type="checkbox" checked={todo.checked} onChange={() => checkboxChange(index)}/>
            <div className="todocontent" style={{ textDecoration: todo.checked ? 'line-through' : 'none', color: todo.checked ? '#888' : '#000', }}>
                {todo.text}
            </div>
            
            <button className='delete'><img src={deletex} alt="delete" /></button>
        </div>
                ))}
      </div>
    </div>
  );
};

export default ToDoList;
