import { Button } from "@components";

export const Wallet = () => {
  return (
    <Button
      style="primary"
      size="small"
      onClick={ () => console.log("Hi!") }
    >
      Connect Wallet
    </Button>
  );
};
