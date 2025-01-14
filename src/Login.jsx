import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './redux-state/userSlice';
import { useEffect } from 'react';

export default function Login() {
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const submitForm = (data) => {
        if (data.userName !== localStorage.getItem("userName") || data.password !== localStorage.getItem("password")) {
            toast.error("Invalid Username or Password")
        } else {
            dispatch(login({userName: data.userName, password: data.password}))
            toast.success("Login Success")
            navigate("/dashboard")
            reset()
        }
    }

    useEffect(() => {
        localStorage.setItem("userName", "admin")
        localStorage.setItem("password", "admin")
    },[])

    return (
        <>
        <div className="fixed top-0 w-full h-screen backdrop-blur-2xl flex bg-zinc-900/10 justify-center items-center">
            <div className="z-20 w-1/2 h-2/3 bg-white border border-zinc-300 rounded-xl flex">
                <div className="w-1/2 h-full" > <img src="../src/images/bg.jpg" alt="background" className="w-full h-full rounded-l-xl" /> </div>
                <div className="w-1/2 h-full flex justify-center items-center gap-5 flex-col" >
                    <div className="text-xl font-semibold " >Signin to your account</div>
                    <form onSubmit={handleSubmit(submitForm)} action="" className="w-2/3 flex justify-center items-center gap-5 flex-col">
                        <input {...register("userName")} className="w-full rounded-lg px-5 border border-zinc-500 h-10 outline-none" placeholder="Username" />
                        <input {...register("password")} className="w-full rounded-lg px-5 border border-zinc-500 h-10 outline-none" placeholder="Password" type="password" />
                        <button className="w-full h-10 bg-blue-600 text-white rounded-lg font-semibold text-lg"> Submit </button>
                    </form>
                    <h3 className="text-sm text-zinc-500" >Don't  have an account? <Link className="text-primary underline" to={'#'}>Signup</Link></h3>
                </div>
            </div>
        </div>
        </>
    )
}