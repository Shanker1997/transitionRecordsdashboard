import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { selectCategoryOpt } from '../../constants/selectOptions';
import * as Yup from'yup'
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../reducer/types';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddTransitionRecord=(props:any)=> {
  const {currentIncom,setCurrIncome}=props
  const {expensesData}=useSelector((state:any)=>state.application)
  const dispatch=useDispatch()
  const [error,setError]=useState<any>('')
  const [open, setOpen] = React.useState(false);
  const schema = Yup.object().shape({
    category: Yup.string().required("Please select Category"),
    amount: Yup.number().required("Please Enter Amount").nullable(),
    dateTransition: Yup.string().required("Please Enter Date Of Transition")
})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSumbitHandler=(values:any,resetform:any)=>{
    if(currentIncom < values?.amount){
      setError('The Amount Cant Exceed Current Limit')

    }
    else{
      let data=[...expensesData]
      data.push(values)
      dispatch({type:types.EXPENSES_DATA,payload:data})
      setCurrIncome(currentIncom-values?.amount)
      resetform()
      setOpen(false)
      setError("")

    }
    
  }

  return (
    <React.Fragment>
         <button className='btn btn-primary add-transition' onClick={handleClickOpen}>Add Transiton Record </button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={"md"}
      >
        <DialogTitle>{"Add Transition Record"}</DialogTitle>
        <DialogContent>
         <Formik
         initialValues={{dateTransition:"",amount:0,category:""}}
         onSubmit={(values:any,{ resetForm })=>{
          onSumbitHandler(values,resetForm)
         }}
         enableReinitialize>
            {({errors,values})=>(
                <Form id="AddCustomForm">
                  {(error!=='')?<span className='text-danger'>{error}</span>:''}
                    <div className='field'>
                        <label htmlFor='dateTransition' className='my-1'>Transition Date</label>
                    <Field 
                    type="date" 
                    name="dateTransition"
                    value={values.dateTransition}
                    className="form-control"
                    
                    />
                    <ErrorMessage name="dateTransition" component={'div'} className='text-danger'/>
                    </div>
                    <div className='field'>
                        <label htmlFor='category' className='my-1'>Transition Amount</label>
                    <Field 
                    type="number" 
                    name="amount"
                    value={values?.amount}
                    className="form-control"
                    />
                    <ErrorMessage name="amount" component={'div'} className='text-danger'/>

                    </div>
                    <div className='field'>
                        <label htmlFor='amount' className='my-1'> Select Category</label>
                    <Field 
                    as ='select'
                    name="category"
                    value={values.category}
                    className="form-control"
                    placeholder="Select Category"
                    
                    >
                      <option value={''}>Select</option>
                        {
                            selectCategoryOpt?.map((opt:any,index:number)=>(
                                <option key={index} value={opt?.value}>{opt?.label}</option>
                            ))
                        }
                    </Field>
                    <ErrorMessage name="category" component={'div'} className='text-danger'/>

                    </div>


                </Form>
            )}

         </Formik>
        </DialogContent>
        <DialogActions>
          <button type={"submit"} className='btn btn-primary' form='AddCustomForm'>Submit Button</button>
          <button  className="btn btn-secondary" onClick={handleClose}>Cancel</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default AddTransitionRecord