import { Layout } from "../Layout/Layout";
import { WrapperForm, Form, Camp, Label, Input,Title, ButtonSave } from "../FormCompany/style";
import { useState } from "react";
import Router from 'next/router';


const initalState = {
    CompanyID: '',
    Data: '',
    OriginCountry:'',
    OriginContinent: '',
    Seats: '',
    DestinationCountry: '',
    DestinationContinent: ''

}

const FormFlight = () => {
  
  const [error, setError] = useState(false)
  const [flight, setFlight] = useState(initalState)

    


  const {CompanyID, Data, OriginCountry, OriginContinent, Seats,DestinationCountry, DestinationContinent} = flight

  const handleChange = e => {
    
    setFlight({
      ...flight,
      [e.target.name] : e.target.value
    })
  }


  const onSubmitForm = (e)=> {
      e.preventDefault()

      //validación
      if(CompanyID === '' || Data === '' || OriginCountry === '' || OriginContinent === '' || Seats === '' || DestinationCountry === '' ||DestinationContinent === '') {
        setError(true)
        return;
      }

      setError(false)
      Router.push('/allcompanies')
     
  }




  return (
    <Layout>
      <WrapperForm> 
          
        <Form onSubmit={onSubmitForm}>
           <Title absolute>Add Flights</Title>
          <Camp>
            <Label>CompanyID</Label>
            <Input 
            type="text"
            name = 'CompanyID'
            value={CompanyID}
            onChange={handleChange}
            
            />
          </Camp>
          <Camp>
            <Label>Data</Label>
            <Input 
            type="text"
            name="Data"
            value={Data}
            onChange={handleChange}
             />
          </Camp>
          <Camp>
            <Label>Origin Country</Label>
            <Input
             type="text"
             name= 'OriginCountry'
             value={OriginCountry}
             onChange={handleChange}
              />
          </Camp>
          <Camp>
            <Label>Origin Continent</Label>
            <Input 
            type="text"
            name = 'OriginContinent'
            value={OriginContinent}
            onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Seats</Label>
            <Input 
            name = 'Seats'
            type="text"
            value={Seats}
            onChange={handleChange}
             />
          </Camp>
          <Camp>
            <Label>Destination Country</Label>
            <Input 
            type="text"
            name= 'DestinationCountry'
            value={DestinationCountry}
            onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Destination Continent</Label>
            <Input 
            type="text"
            name='DestinationContinent'
            value={DestinationContinent}
            onChange={handleChange}
            />
          </Camp>
          
          <ButtonSave type="submit" absolute variant="contained">Save Flight</ButtonSave>
          {error ?  <p>Rellena todos los campos</p> : null}  
        </Form>

        
      </WrapperForm>
    </Layout>
  );
};

export default FormFlight;
