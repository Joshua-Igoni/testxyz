import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";
import routes from "../../routes";

export default function SignUpForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-200">
      <div className="bg-white w-[50rem] py-[4.25rem] px-40 flex flex-col items-center gap-9">
        <h4 className="text-4xl opacity-50 font-light">Create account</h4>
        <div className="flex flex-col gap-5 w-full">
          <AuthButton icon={<FcGoogle />}>Sign up with Google</AuthButton>
          <AuthButton icon={<FaFacebookF className="fill-[#699BF7]" />}>
            Sign up with Facebook
          </AuthButton>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] w-full items-center opacity-50 gap-[1px]">
          <div className="border-t border-black w-full" />
          <span className="text-2xl">Or sign up with email</span>
          <div className="border-t border-black w-full" />
        </div>
        <div className="flex flex-col gap-5 w-full items-center">
          <label className="w-full">
            <span className="sr-only">Full Name</span>
            <input
              placeholder="Full Name"
              type="text"
              className="w-full px-9 py-5 text-2xl rounded-full border border-black placeholder:text-appera-black-500 font-medium"
            />
          </label>
          <label className="w-full">
            <span className="sr-only">Email</span>
            <input
              placeholder="Email"
              type="email"
              className="w-full px-9 py-5 text-2xl rounded-full border border-black placeholder:text-appera-black-500 font-medium"
            />
          </label>
          <label className="w-full">
            <span className="sr-only">Password</span>
            <input
              placeholder="Password"
              type="password"
              className="w-full px-9 py-5 text-2xl rounded-full border border-black placeholder:text-appera-black-500 font-medium"
            />
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="text-xl checked:bg-primary" />
            <span className="text-lg font-medium ml-2">
              Agree to the terms and conditions
            </span>
          </label>
        </div>
        <div className="flex flex-col gap-5 w-full">
          {/* Submit Button */}
          <button className="flex px-10 py-5 gap-10 rounded-full w-full bg-primary text-white text-2xl font-bold">
            <span className="mx-auto">Sign up</span>
          </button>
          <span className="text-center text-2xl font-medium">
            Already have an account?{" "}
            <Link to={routes.LOGIN} className="text-primary underline">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
