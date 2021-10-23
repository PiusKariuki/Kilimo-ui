const useAnimals = () => {
  const columns = [
    {
      name: "Name",
      selector: (row:any) => row.name,
    },
    {
      name: "Age in weeks",
      selector: (row:any) => row.age_in_weeks,
    },
    {
      name: "Breed",
      selector: (row:any) => row.breed,
    },
    {
      name: "Actions",
      selector: (row:any) => row.actions,
      field: "actions",
    },
  ];
  return {columns}


};

export default useAnimals;