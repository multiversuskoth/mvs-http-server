import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export function LoginSteam() {
  return (
    <Link reloadDocument={true} to="/auth/login">
      <Button>Login with Steam</Button>
    </Link>
  );
}
