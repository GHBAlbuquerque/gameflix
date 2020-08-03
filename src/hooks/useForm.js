import { useState } from 'react';

// MEU CUSTOM-HOOK. (antes estava dentro e eu tirei)

function useForm(valoresIniciais) {
  /* custom hook, e tem que chamar USE. Agora posso usar várias vezes. */
  const [values, setValues] = useState(valoresIniciais); // é um objeto!!

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValue(event.target.name, // ou getAttribute("name")
      event.target.value);
    // console.log(event.target.name,event.target.value)
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
