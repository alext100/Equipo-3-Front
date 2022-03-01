import { Layout } from "../Layout/Layout";
import { Select,WrapperForm, Form, Camp, Label, Input,Title, ButtonSave } from "../FormCompany/style";
import { useState } from "react";
import Router from 'next/router';
import { countryList } from "../../services/paises";


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
      /*axios.post('url' , flight)
    //.then(res => {
      console.log(res);
      console.log(res.data)
    })*/ 
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
            <Select onChange={handleChange} name='OriginCountry' value={OriginCountry}>
            {countryList.map(pais => (
              
                <option key={pais} name='OriginCountry'>{pais}</option>
              
            ))}
            </Select>
            </Camp>
            <Camp>
            <Label>Destination Country</Label>
            <Select onChange={handleChange} name='DestinationCountry' value={DestinationCountry}>
            {countryList.map(pais => (
              
                <option key={pais} name='DestinationCountry'>{pais}</option>
              
            ))}
            </Select>
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
            <Label>Destination Continent</Label>
            <Input 
            type="text"
            name='DestinationContinent'
            value={DestinationContinent}
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
          
          
          <ButtonSave type="submit" absolute variant="contained">Save Flight</ButtonSave>
          {error ?  <p>Rellena todos los campos</p> : null}  
        </Form>

        
      </WrapperForm>
    </Layout>
  );
};

export default FormFlight;
