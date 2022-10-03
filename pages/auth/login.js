import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

export default function Login() {
  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700">
      <h2 className="text-3xl font-medium">Join Today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button>
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
        <button>
          <AiFillFacebook className="text-2xl text-blue-400" />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}
