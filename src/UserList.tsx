import {
  BooleanField,
  BulkExportButton,
  DatagridConfigurable,
  EmailField,
  List,
  SearchInput,
  SelectColumnsButton,
  TextField,
  TopToolbar,
} from "react-admin";

const UserListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <BulkExportButton />
    </TopToolbar>
);

const userFilters = [
    <SearchInput source="q" alwaysOn />
];

export const UserList = () => (
  <List filters={userFilters} actions={<UserListActions />}>
    <DatagridConfigurable
      omit={['id']}
    >
      <TextField label="Name" source="name" />
      <EmailField label="Email" source="email" />
      <BooleanField label="Enabled" source="enabled" />
      <TextField label="Domain ID" source="domain_id" />
      <TextField label="Description" source="description" />
    </DatagridConfigurable>
  </List>
);