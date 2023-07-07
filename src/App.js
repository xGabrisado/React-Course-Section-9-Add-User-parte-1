import React, { useState } from 'react';
import AddInput from './components/AddInput/AddInput';
import UserList from './components/UserList/UserList';
import InvalidModal from './components/InvalidModal/InvalidModal';


function App() {
  const [userArr, setUserArr] = useState([])
  const [modal, setModal] = useState(false)

  const userAdd = (userInput) => {
    const userData = {
      ...userInput,
      id: Math.random().toString(),
    }

    setUserArr((prevState) => {
      return [...prevState, userData]
    })
  }

  const modalHandler = () => {
    setModal(!modal)
  }


  return (
    <div>
      {modal && <InvalidModal onCancel={modalHandler} />}
      <AddInput onAddingUser={userAdd} onInvalidData={modalHandler} />
      {userArr.length !== 0 && <UserList userArray={userArr} />}
    </div>
  );
}

export default App;
