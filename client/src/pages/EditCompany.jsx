import { Form, useLoaderData } from "react-router-dom";
import FormCompany from "../components/FormCompany";

function EditCompany() {
  const companyData = useLoaderData();
  return (
    <>
      <h1>coucou</h1>
      <Form method="put">
        <FormCompany company={companyData} />
        <button type="submit"> Mettre à jour</button>
      </Form>
    </>
  );
}

export default EditCompany;
