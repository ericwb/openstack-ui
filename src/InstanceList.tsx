import {
  BulkExportButton,
  CreateButton,
  DatagridConfigurable,
  List,
  SearchInput,
  SelectColumnsButton,
  TextField,
  TopToolbar,
} from "react-admin";

const InstanceListActions = () => (
  <TopToolbar>
    <CreateButton/>
    <SelectColumnsButton />
    <BulkExportButton />
  </TopToolbar>
);

const instanceFilters = [
  <SearchInput source="q" alwaysOn />
];

export const InstanceList = () => (
  <List filters={instanceFilters} actions={<InstanceListActions />}>
    <DatagridConfigurable omit={['id']}>
      <TextField label="Name" source="name" />
      <TextField label="Image" source="image" />
      <TextField label="Status" source="status" />
    </DatagridConfigurable>
  </List>
);
