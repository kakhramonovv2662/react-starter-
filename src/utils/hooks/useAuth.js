import userInitialState from "@/store/auth";
import appConfig from "@/configs/app.config";
import { REDIRECT_URL_KEY } from "@/constants/app.constant";
import { useNavigate } from "react-router-dom";
import useQuery from "./useQuery";
import { useAuthStore } from "../../store/auth";
import { authService } from "@/modules/auth/service";

function useAuth() {
  const onSignOutSuccess = useAuthStore((state) => state.onSignOutSuccess);
  const onSignInSuccess = useAuthStore((state) => state.onSignInSuccess);
  const setUser = useAuthStore((state) => state.setUser);

  const navigate = useNavigate();

  const query = useQuery();

  const { token, signedIn } = useAuthStore((state) => state.session);

  const signIn = async ({ userName, password }) => {
    try {
      const resp = await authService.apiSignIn({ userName, password });
      if (resp.data) {
        const { token } = resp.data;
        onSignInSuccess(token);
        if (resp.data.user) {
          setUser(
            resp.data.user || {
              avatar: "",
              userName: "Anonymous",
              authority: ["USER"],
              email: "",
            }
          );
        }
        const redirectUrl = query.get(REDIRECT_URL_KEY);
        navigate(redirectUrl || appConfig.authenticatedEntryPath);
        return {
          status: "success",
          message: "",
        };
      }
    } catch (errors) {
      return {
        status: "failed",
        message: errors?.response?.data?.message || errors.toString(),
      };
    }
  };

  const handleSignOut = () => {
    onSignOutSuccess();
    setUser(userInitialState);
    navigate(appConfig.unAuthenticatedEntryPath);
  };

  const signOut = async () => {
    try {
      await authService.apiSignOut();
      handleSignOut();
    } catch (errors) {
      handleSignOut();
    }
  };

  return {
    authenticated: token && signedIn,
    signIn,
    signOut,
  };
}

export default useAuth;
