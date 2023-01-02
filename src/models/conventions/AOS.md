

==============================================================


=================  Create Model ==================

createModel = this function for creating shape for forms, and you must install yup

Example for parameter => (shape) <=

shape = {
  shape_keys: ["name", "description"],
  shape_values: [
    {
      type: "string",
      min: {
        message: "This is short",
        number: 2,
      },
    },
    {
      type: "string",
      min: {
         message: "This is short",
         number: 2,
       },
     },
   ],
};


==============================================================


=================  onDelete ==================

Example Currency (module): Currency.onDelete(row.id, Currency.deleteCurrency);

row.id - id
Currency.deleteCurrency - delete function this module

==============================================================


=================  onEdit ==================

Example Currency (module): Currency.onEdit(row, setElement);

row - info for edit or default values
setElement - zustand setState for open form and give row for default values


==============================================================

=================  onDrawerClose ==================

Example Currency (module): Currency.onDrawerClose();
this function is for close drawers


==============================================================