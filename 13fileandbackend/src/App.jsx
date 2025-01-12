import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm();    //here we use register,handlesubmit etc... form useForm

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/",{method:"POST"})
    let res = await r.text()
    console.log(data,res)
    // if(data.username === "abhishek"){         //this is customize error , it will occure when the username = "abhishek"
    //   setError("blocked", {message:"this person is blocked"})
    // }
    // if(data.username !== 'admin'){      //this is customize error ,it will occure when the username is not "admin"
    //   setError('customerror', {message:"this is crediantial error you username is admin"})
    // }

  };


  return (
    <>

      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "min lenght is 3" }, maxLength: 16 })} type="text" />
          {errors.username && <div>{errors.username.message}</div>} {/*this is 1 way,this will print message when field is empty */}
          <br />
          <input placeholder='password' {...register("password", { required: true, maxLength: { value: 16, message: "max lenght is 16" } })} type="password" />
          {errors.password && <div>{errors.password.message}</div>} {/*this is 2 way,this will print message when lenght will exceted 16 */}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />

          {errors.customerror && <div>{errors.customerror.message}</div>} {/*this is customise arror message */}
          {errors.blocked && <div>{errors.blocked.message}</div>} {/*this is customise arror message */}


        </form>
      </div>
    </>
  )
}

export default App
