import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingButton from "./sub-components/LoadingButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { clearAllUserErrors, login } from "@/store/slices/userSlice";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogin = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated, error, loading, navigateTo]);

  return (
    <div>
      <div className="w-full lg:grid lg:min-h-[100px] lg:grid-cols-2 xl:min-h-[100px]">
        <div className="min-h-[100vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-600">
          <div className="mx-auto grid w-[350px] p-10 gap-6 border-4 border-blue-700 bg-blue-200">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email & password below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to={"/password/forgot"}
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {loading ? (
                <LoadingButton content={"Logging In"} />
              ) : (
                <Button type="submit" className="w-full" onClick={handleLogin}>
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="/dashboard/public/placeholder.gif"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
