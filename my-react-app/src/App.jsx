import Card from './Card.jsx'
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './Usergreeting.jsx'
import List from './List.jsx';
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';
import ColorPicker from './ColorPicker.jsx';
import ToDoList from './ToDoList.jsx';
function App() {
    return(
        <>
        {/* <ColorPicker/>
        <Counter/>
        <MyComponent/>
        <Card/>
        <Card/>
        <Button/>
        <Student name="Toothless" age={5}/>
        <Student name="hicup" age={10} isStudent={true}/>
        <UserGreeting isLoggedIn={true} username="tryagain"/>
        <List/> */}
        <ToDoList/>
        </>
    );
  

}

export default App
