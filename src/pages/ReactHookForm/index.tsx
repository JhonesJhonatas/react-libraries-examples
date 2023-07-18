import { Link } from "@phosphor-icons/react";
import { ExampleArea, MainContainer } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface SubmitFormSchema {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userNumberPhone: string;
}

export function ReactHookForm() {
  const { register, handleSubmit } = useForm();
  const [submitForm, setSubmitForm] = useState<SubmitFormSchema>(
    {} as SubmitFormSchema
  );

  const handleSubmitForm = (data: SubmitFormSchema) => {
    setSubmitForm({
      userFirstName: data.userFirstName,
      userLastName: data.userLastName,
      userEmail: data.userEmail,
      userNumberPhone: data.userNumberPhone,
    });
  };

  return (
    <MainContainer>
      <header>
        <h1>React Hook Form</h1>
        <section>
          <Link />
          <a href="https://www.react-hook-form.com/" target="_blank">
            Página Oficial
          </a>
        </section>
      </header>

      <ExampleArea>
        <div>
          <span>Formulário</span>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <input
              type="text"
              placeholder="Primeiro Nome"
              {...register("userFirstName")}
            />
            <input
              type="text"
              placeholder="Último Nome"
              {...register("userLastName")}
            />
            <input
              type="email"
              placeholder="Email"
              {...register("userEmail")}
            />
            <input
              type="number"
              placeholder="Telefone"
              {...register("userNumberPhone")}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div>
          <span>Watch</span>
        </div>
        <div>
          <span>Errors</span>
        </div>
        <div>
          <span>onSubmit</span>
          <table>
            <tr>
              <td>{"{"}</td>
              <td></td>
            </tr>
            <br />
            <tr>
              <td>userFirstName:</td>
              <td>{submitForm ? submitForm.userFirstName : null}</td>
            </tr>
            <tr>
              <td>userLastName:</td>
              <td>{submitForm ? submitForm.userLastName : null}</td>
            </tr>
            <tr>
              <td>userEmail:</td>
              <td>{submitForm ? submitForm.userEmail : null}</td>
            </tr>
            <tr>
              <td>userNumberPhone:</td>
              <td>{submitForm ? submitForm.userNumberPhone : null}</td>
            </tr>
            <br />
            <tr>
              <td>{"}"}</td>
              <td></td>
            </tr>
          </table>
        </div>
      </ExampleArea>
    </MainContainer>
  );
}
