import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { AppRoleList } from "./appRole/AppRoleList";
import { AppRoleCreate } from "./appRole/AppRoleCreate";
import { AppRoleEdit } from "./appRole/AppRoleEdit";
import { AppRoleShow } from "./appRole/AppRoleShow";
import { GrantList } from "./grant/GrantList";
import { GrantCreate } from "./grant/GrantCreate";
import { GrantEdit } from "./grant/GrantEdit";
import { GrantShow } from "./grant/GrantShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Task Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="AppRole"
          list={AppRoleList}
          edit={AppRoleEdit}
          create={AppRoleCreate}
          show={AppRoleShow}
        />
        <Resource
          name="Grant"
          list={GrantList}
          edit={GrantEdit}
          create={GrantCreate}
          show={GrantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
