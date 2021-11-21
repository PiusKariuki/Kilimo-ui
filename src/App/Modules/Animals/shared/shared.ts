export   const columns = [
  {
    name: "NAME",
    selector: (row: any) => row.name,
  },
  {
    name: "BREED",
    selector: (row: any) => row.breed,
  },
  {
    name: "ACTIONS",
    selector: (row: any) => row.actions,
    field: "actions",
  },
];