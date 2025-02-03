import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import DvrIcon from '@mui/icons-material/Dvr';
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { InstanceList } from "./InstanceList";
import { UserList } from "./UserList";

const CustomLayout = ({ children }) => (
    <Layout>
        {children}
    </Layout>
);

export const App = () => (
  <Admin
    layout={CustomLayout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      icon={DvrIcon}
      options={{ label: 'Instances' }}
      name="compute/v2.1/servers"
      list={InstanceList}
      show={ShowGuesser}
    />

    <Resource
      options={{ label: 'Images' }}
      name="compute/v2.1/images"
      list={ListGuesser}
    />

    <Resource
      options={{ label: 'Users' }}
      name="identity/v3/users"
      list={UserList}
      show={ShowGuesser}
    />
  </Admin>
);
