import { Layout } from "../Layout/Layout";
import { WrapperForm, Form, Camp, Label, Input,Title, ButtonSave } from "../FormCompany/style";


const FormFlight = () => {
  return (
    <Layout>
      <WrapperForm>
      
        <Form>
           <Title absolute>Add Flights</Title>
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
          
          <ButtonSave absolute variant="contained">Save Flight</ButtonSave>  
        </Form>
        
      </WrapperForm>
    </Layout>
  );
};

export default FormFlight;
