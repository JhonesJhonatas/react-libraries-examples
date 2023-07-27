import { Link } from "@phosphor-icons/react";
import { ExampleContainer, LinkArea } from "./styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

interface DataSchema {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPhone: string;
}

export function ReactHookForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<DataSchema>();
  const [dataForm, setDataForm] = useState({} as DataSchema);

  const userFirstName = watch("userFirstName");
  const userLastName = watch("userLastName");
  const userEmail = watch("userEmail");
  const userPhone = watch("userPhone");

  const formSubmit: SubmitHandler<DataSchema> = (data) => {
    setDataForm(data);
  };

  return (
    <main>
      <h1>React-Hook-Form</h1>
      <LinkArea>
        <Link />
        <a href="https://www.react-hook-form.com/" target="_blank">
          Documentação
        </a>
      </LinkArea>
      <ExampleContainer>
        <div>
          <h3>Formulário</h3>

          <form onSubmit={handleSubmit(formSubmit)}>
            <input
              type="text"
              placeholder="Primeiro Nome"
              {...register("userFirstName", { required: "Campo obrigatório" })}
            />
            <input
              type="text"
              placeholder="Segundo Nome"
              {...register("userLastName", { required: "Campo obrigatório" })}
            />
            <input
              type="text"
              placeholder="Email"
              {...register("userEmail", { required: "Campo obrigatório" })}
            />
            <input
              type="text"
              placeholder="Telefone"
              {...register("userPhone", { required: "Campo obrigatório" })}
            />
            <button type="submit">Submeter</button>
          </form>
        </div>
        <div>
          <h3>Watch</h3>
          <span>
            <strong>First Name: </strong>
            {userFirstName}
          </span>
          <span>
            <strong>Last Name: </strong>
            {userLastName}
          </span>
          <span>
            <strong>Email: </strong>
            {userEmail}
          </span>
          <span>
            <strong>Phone: </strong>
            {userPhone}
          </span>
        </div>
        <div>
          <h3>Errors</h3>
          <span>
            <strong>First Name: </strong>
            {errors.userFirstName?.message}
          </span>
          <span>
            <strong>Last Name: </strong>
            {errors.userLastName?.message}
          </span>
          <span>
            <strong>Email: </strong>
            {errors.userEmail?.message}
          </span>
          <span>
            <strong>Phone: </strong>
            {errors.userPhone?.message}
          </span>
        </div>
        <div>
          <h3>Submit</h3>
          <span>
            <strong>First Name: </strong>
            {dataForm.userFirstName}
          </span>
          <span>
            <strong>Last Name: </strong>
            {dataForm.userLastName}
          </span>
          <span>
            <strong>Email: </strong>
            {dataForm.userEmail}
          </span>
          <span>
            <strong>Phone: </strong>
            {dataForm.userPhone}
          </span>
        </div>
      </ExampleContainer>
    </main>
  );
}
