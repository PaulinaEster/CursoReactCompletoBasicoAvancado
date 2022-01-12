import React from 'react';
import { Formik, useField } from 'formik';
import * as yup from 'yup';

const Campo = props => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor={props.id}> {props.label} </label>
      <input
        {...field}
        {...props}
      />
      {meta.error && meta.touched ? (
        <div className='invalid-feedback'>{meta.error}</div>
      ) : null}
    </div>
  )
}

const AdicionaCliente = () => {
  const esquema = yup.object({
    nome: yup.string()
      .required('O nome é obrigatório')
      .min(5, 'Deve ter no minimo 5 caracteres'),
    email: yup.string()
      .required('O email é obrigatório')
      .email('Insira um email valido'),
    nascimento: yup.date()
      .required('A data de nascimento é obrigatória')
      .max(new Date(), 'Insira uma data de nascimento válida')
  })

  return (
    <>
      <h1>Cadastro de Clientes</h1>
      <Formik 
        initialValues={{ nome: '', email: '', nascimento: ''}}
        validationSchema={esquema}
        onSubmit={(values => {
          console.log(values)
        })}
      >
        {(props) => (
          <form noValidate onSubmit={props.handleSubmit}>
            <Campo id="nome" name="nome" type="text" label="nome"/>
            <Campo id="email" name="email" type="email" label="email"/>
            <Campo id="nascimento" name="nascimento" type="date" label="Data de Nascimento" />
            <button type="submit">Adicionar</button>
          </form> 
        )}
      </Formik>
    </>
  );
};

export default AdicionaCliente;