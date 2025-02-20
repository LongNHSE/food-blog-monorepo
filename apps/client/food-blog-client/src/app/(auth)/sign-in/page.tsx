import { LoginComponent } from "@/components/LoginComponent";


const SignInPage: React.FC = () => {
  return (
    <div className="border-2 rounded-2xl h-full xl:h-fit w-full xl:w-[550px] bg-white">
      <div className="pt-10 pb-10 px-10 flex gap-3 flex-col text-black items-center">
        <div className="mb-10 justify-center align-middle text-center">
          <h1 className="text-3xl font-semibold pb-2">Login to Account</h1>
          <p className="font-medium text-sm px-6">
            Please enter your email and password to continue
          </p>
        </div>
        <LoginComponent></LoginComponent>
      </div>
    </div>
  );
};

export default SignInPage;
