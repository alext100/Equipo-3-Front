import { Layout } from "../Layout/Layout";
import { Title,ButtonSave,Label,WrapperForm, Form, Camp, Input } from "./style";

const FormCompany = () => {
  return (
    <Layout>
      <WrapperForm>
    <Form column>
      <Title>Add Company</Title>
      <Camp>
        <Label>label</Label>
        <Input type="text" />
      </Camp>
      <Camp>
        <Label>label</Label>
        <Input type="text" />
      </Camp>
      <Camp>
        <Label>label</Label>
        <Input type="text" />
      </Camp>
      <Camp>
        <Label>label</Label>
        <Input type="text" />
      </Camp>
      <ButtonSave variant='contained'>Save Company</ButtonSave>
    </Form>
    </WrapperForm>
    </Layout>
  );
};

export default FormCompany;
