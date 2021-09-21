import { FormEvent, useRef, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import Input from '../Input/index';
import Modal from '../Modal';
import { Form } from './styles';


interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: () => void;
}


export function ModalAddFood({isOpen, handleAddFood, setIsOpen}: ModalAddFoodProps) {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const formRef = useRef(null)


  const handleSubmit = async (data: FormEvent) => {

    handleAddFood();
    setIsOpen();
    
    setImage('')
    setName('')
    setPrice('')
    setDescription('')
  };



    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" value={image} onChange={(event) => setImage(event?.target.value)} />

          <Input name="name" placeholder="Ex: Moda Italiana" value={name} onChange={(event) => setName(event?.target.value)} />
          <Input name="price" placeholder="Ex: 19.90" value={price} onChange={(event) => setPrice(event?.target.value)}/>

          <Input name="description" placeholder="Descrição" value={description} onChange={(event) => setDescription(event?.target.value)} />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  
};

export default ModalAddFood;
