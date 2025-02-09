import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import DvrIcon from '@mui/icons-material/Dvr';
import { InstanceList } from "./InstanceList";
import { Layout } from "./Layout";
import { UserList } from "./UserList";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { customLightTheme} from "./customTheme";


const CustomLayout = ({ children }) => (
    <Layout>
        {children}
    </Layout>
);

const getCatalogPath = (type) => {
    const catalogString = localStorage.getItem("catalog");
    if (!catalogString) return null;

    let catalog = JSON.parse(catalogString);

    const url = catalog
        .find(service => service.type === type)?.endpoints
        .find(endpoint => endpoint.interface === "public")?.url;

    const catalogPath = url ? new URL(url).pathname.substring(1) : null;
    console.log(catalogPath);
    return catalogPath;
};

export const App = () => (
  <Admin
    //layout={CustomLayout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    theme={customLightTheme}
  >
    <Resource
      icon={DvrIcon}
      options={{ label: 'Instances' }}
      name={`${getCatalogPath("compute")}/servers`}
      list={InstanceList}
      show={ShowGuesser}
    />

    <Resource
      options={{ label: 'Images' }}
      name={`${getCatalogPath("compute")}/images`}
      list={ListGuesser}
    />

    <Resource
      options={{ label: 'Users' }}
      name={`${getCatalogPath("identity")}/v3/users`}
      list={UserList}
      show={ShowGuesser}
    />
  </Admin>
);
