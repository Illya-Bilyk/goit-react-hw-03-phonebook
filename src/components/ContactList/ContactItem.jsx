import { Delete, Item } from './ContactList.styled';
export const Contact = ({ name, number, onClick }) => {
  return (
    <Item>
      {name} : {number}
      <Delete type="button" name={name} onClick={onClick}>
        Delete
      </Delete>
    </Item>
  );
};
