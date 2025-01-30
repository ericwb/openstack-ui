import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >

    <Resource options={{ label: 'Servers' }} name="compute/v2.1/servers" list={ListGuesser} />
    <Resource options={{ label: 'Images' }} name="compute/v2.1/images" list={ListGuesser} />



    <Resource options={{ label: 'Credentials' }} name="identity/v3/credentials" list={ListGuesser} />
    <Resource options={{ label: 'Domains' }} name="identity/v3/domains" list={ListGuesser} />
    <Resource options={{ label: 'Projects' }} name="identity/v3/projects" list={ListGuesser} />
    <Resource options={{ label: 'Regions' }} name="identity/v3/regions" list={ListGuesser} />
    <Resource options={{ label: 'Roles' }} name="identity/v3/roles" list={ListGuesser} />
    <Resource options={{ label: 'Users' }} name="identity/v3/users" list={ListGuesser} />
    <Resource options={{ label: 'Groups' }} name="identity/v3/groups" list={ListGuesser} />
  	<Resource options={{ label: 'Services' }} name="identity/v3/services" list={ListGuesser} />
  </Admin>
);
