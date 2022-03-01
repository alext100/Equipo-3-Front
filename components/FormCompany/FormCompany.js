import { Layout } from "../Layout/Layout";
import { useEffect, useState } from "react";
import Router from "next/router";
import axios from 'axios'
import {
  Title,
  ButtonSave,
  Label,
  WrapperForm,
  Form,
  Camp,
  Input,
} from "./style";

const FormCompany = () => {
  const [error, setError] = useState(false);
  const [company, setCompany] = useState({
    Name: "",
    Website: "",
    TotalFlights: "",
    TotalSeats: "",
  });

  const { Name, Website, TotalFlights, TotalSeats } = company;
  const handleChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    //validacion
    if (
      Name === "" ||
      Website === "" ||
      TotalFlights === "" ||
      TotalSeats === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    /*axios.post('url' , company)
    //.then(res => {
      console.log(res);
      console.log(res.data)
    })*/ 

    Router.push("/allcompanies");
  };

  

  return (
    <Layout>
      <WrapperForm>
        <Form column onSubmit={onSubmitForm}>
          <Title>Add Company</Title>
          <Camp>
            <Label>Name</Label>
            <Input
              type="text"
              name="Name"
              value={Name}
              onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Website</Label>
            <Input
              type="text"
              name="Website"
              value={Website}
              onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Total flights</Label>
            <Input
              type="text"
              name="TotalFlights"
              value={TotalFlights}
              onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Total seats</Label>
            <Input
              type="text"
              name="TotalSeats"
              value={TotalSeats}
              onChange={handleChange}
            />
          </Camp>
          <ButtonSave type="submit" variant="contained">
            Save Company
          </ButtonSave>
          {error ? <p> Rellena todos los campos</p> : null}
        </Form>
      </WrapperForm>
    </Layout>
  );
};

export default FormCompany;
