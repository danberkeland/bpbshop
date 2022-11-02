import * as yup from "yup";

export const validationSchema = (props) => {
  console.log('valprops', props)
  
  return yup.object().shape({
    location: yup.string(),
    /*
    time: yup.date().test(
      "is-open",
      `Must be within ${props.location} store hours.`,
      (value) => {  
        let newDate = new Date(Date.parse(value))
        let fullTime = newDate.getHours()+newDate.getMinutes()/60  
       
       
        return (fullTime>7 && fullTime<14) ? true : false
      }
      
    )*/
      
      
    
  });
};
