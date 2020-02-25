import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, description) {
  return { name, description };
}

const rows = [
  createData('10/15/2020', 'Date1'),
  createData('2/1/2020', 'Test2')
];

export default function EventListTable() {

  return (
    <Table stickyHeader size="small">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell align="left">Event Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row,key) => (
          <TableRow hover key={key}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="left">{row.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}