import React, { use } from 'react';
import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { LuGithub, LuSend } from 'react-icons/lu';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
const Register = () => {
    const { registerWithEmailPass, updateUserProfile, setUser, user,signInWithGoogle } = use(AuthContext);
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const displayName = data.name;
        const phoneNumber = data.phone;
        registerWithEmailPass(email, password)
            .then((userData) => {
                updateUserProfile({ displayName: displayName, phoneNumber: phoneNumber })
                setUser(userData.user)
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: `${user.displayName}, Successfully Loggedin`,
                    text: "Authentication complete. Welcome to your learning space",

                });
                navigate("/");
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                })
            })
    }
    const handleSigninWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: `${result.user.displayName} Successfully Loggedin`,
                    text: "Authentication complete. Welcome to your learning space",
                    background: "#5740E7",
                    color: "#fff",
                    buttonsStyling: false,
                });
                setUser(result.user);
                navigate("/")
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                    background: "#5740E7",
                    color: "#fff",
                    buttonsStyling: false,

                })
            })
    }

    return (
        <section className='py-20'>
            <Container>
                <div className='mb-10 flex flex-col items-center'>
                    <h2 className='text-4xl text-center  font-semibold mb-3'>Create Your Account</h2>
                    <p className='text-center text-[15px] text-second font-light w-[60%]'>Join our learning platform to explore expert-led courses, gain real-world skills, and learn at your own pace</p>
                </div>
                <div className="max-w-md mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input type='name' name={"Name"} label={"Name"} {...register("name")} />
                        <Input type='phone' name="phone" label={"Phone Number"} {...register("phone")} required />
                        <Input type='email' name="email" label={"Email"} {...register("email")} required />
                        <Input type='password' name={"password"} label={"Password"} {...register("password")} required />
                        <div className='mx-auto pt-3 flex items-center justify-center'>
                            <Button type={"submit"} size={"sm"} icon={LuSend} btnText={"Register Now"} />
                        </div>
                    </form>
                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-4 text-muted-foreground">or Sign up with</span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                        <button onClick={handleSigninWithGoogle} className="h-12  rounded-md bg-indigo-100 flex items-center justify-center gap-5 text-indigo-700 cursor-pointer ">
                            <FcGoogle className='h-6 w-6' />
                            Google
                        </button>
                        <button className="h-12 rounded-md bg-[#232323] duration-600  flex items-center justify-center gap-5 group text-white cursor-pointer ">
                            <LuGithub className='h-6 w-6 text-white' />
                            GitHub
                        </button>
                    </div>

                    {/* Sign up link */}
                    <p className="text-center mt-8 text-muted-foreground">
                        Have already an account?{" "}
                        <Link
                            to="/login"
                            className="text-primary font-semibold hover:text-primary/80 transition-colors"
                        >
                            Signin
                        </Link>
                    </p>
                </div>
            </Container>
        </section>


    );
};

export default Register;