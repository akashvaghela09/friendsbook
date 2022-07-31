import React, { useEffect } from 'react'
import './App.css';
import { Header } from "./Components/Header";
import { AllRoutes } from "./Routes/AllRoutes";
import { SideBar } from './Components/SideBar';
import { Error } from "./Components/Error";
import { Spinner } from "./Components/Spinner";
import { useSelector, useDispatch } from 'react-redux';
import { loadData, saveData } from "./Utils/localStorage";
import { setIsAuth, setUser } from "./Redux/actions";

function App() {
  const dispatch = useDispatch();
  const { isAuth, isError, isLoading } = useSelector(state => state.app)
  let isAuthLocal = loadData("isAuth")
  let usernameLocal = loadData("username")
  let fullnameLocal = loadData("fullname")

  const checkAuth = () => {
    if(isAuthLocal === null || usernameLocal === null || fullnameLocal === null){
      saveData("isAuth", "")
      saveData("username", "")
      saveData("fullname", "")
    } else if (isAuthLocal !== "" && usernameLocal !== "" && fullnameLocal !== "") {
      dispatch(setIsAuth(true))
      dispatch(setUser({"username": usernameLocal, "fullname": fullnameLocal}))
    }

    console.log(isAuthLocal)
    console.log(usernameLocal)
    console.log(fullnameLocal)
  }

  useEffect(() => {
    checkAuth()
  }, []);
  return (
    <div className="App bg-slate-400 flex flex-col">
      <Header />
      <div className='flex grow overflow-auto'>
        {
          isAuth === true &&
          <SideBar />
        }
        <AllRoutes />
      </div>

      {
        isError === true && <Error />
      }

      {
        isLoading === true && <Spinner />
      }
    </div>
  );
}

export default App;
