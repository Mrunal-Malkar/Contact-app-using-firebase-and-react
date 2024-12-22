import React, { useContext } from 'react';
import { ModalContext } from './modalcontext';
import ReactDOM from 'react-dom';
import { Formik, Form, Field } from "formik";
import { collection, addDoc, getDoc } from "firebase/firestore";
import {db} from "../config/firebase.js";

const Modal = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const {clist,setClist}=useContext(ModalContext);

  if (!isOpen) return null;

  const handleSubmit = async (values) => {
    try {
      const contactRef = await collection(db, "contacts");
      const docRef = await addDoc(contactRef, values);
    }
    catch (error) {
      console.log(error);
    }
    setIsOpen(false);
  }

  return ReactDOM.createPortal(
    <>
      <Formik initialValues={{ name: '', email: '' }} onSubmit={handleSubmit}>
        <Form className="bg-white absolute bottom-0 overflow-hidden z-20 m-auto p-1 rounded-md flex justify-start h-[300px] w-full md:max-w-max-[700px] flex-col">

          <div className="h-[20%] flex items-center justify-between px- border-b-2 border-b-gray-400">
            <h1 className='text-3xl w-[90%] font-bold'>Add new contact</h1>
            <div onClick={() => { setIsOpen(false) }} className='bg-red-500 px-2 rounded-md'><i class="fa-solid text-3xl fa-xmark"></i></div>
          </div>

          <div className="h-[60%] bg-white">
            <div className='flex flex-col gap-2 justify-start h-[100%]'>
              {console.log('modal')}
              <div className='flex flex-col h-1/2'>
                <label htmlFor="name" className='self-center md:text-2xl font-semibold'>Name</label>
                <Field name="name" placeholder='Enter your NAME' type="text" className=' ps-4 border-2 border-gray-400 bg-gray-100 w-[80%] self-center rounded-md h-[50%]' id="name" />
              </div>
              <div className='flex flex-col h-1/2'>
                <label htmlFor="email" className='self-center md:text-2xl font-semibold'>Email</label>
                <Field name="email" type="text" placeholder='Enter your Gmail' className='bg-gray-100 ps-4 border-2 border-gray-400  w-[80%] self-center rounded-md h-[50%]' id="email" />
              </div>

            </div>
          </div>

          <div className="h-[20%]">
            <div className='flex justify-center h-full align-middle'>
              <button name='submit' type='submit' className='bg-gray-300 rounded-md align-middle h-full py-1 font-semibold px-4 text-blue-900 text-xl md:text-2xl'>Add</button>
            </div>
          </div>
        </Form>
      </Formik>
      <div className='backdrop-blur z-10 h-full w-full absolute top-0'></div>
    </>, document.getElementById('modal-root')
  );
};

export default Modal;
