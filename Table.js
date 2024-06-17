// src/components/Table.js
import React from 'react';
import MaterialTable from 'material-table';

const Table = () => (
  <MaterialTable
    title="Simple Table"
    columns={[
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      { title: 'Birth City', field: 'birthCity', lookup: { 34: 'Istanbul', 63: 'Sanliurfa' } },
    ]}
    data={[
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]}
    options={{
      search: true,
    }}
  />
);

export default Table;
