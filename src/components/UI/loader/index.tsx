import { Backdrop, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <>
      <Backdrop
        sx={ {
          color: "var(--scrollbar-background-color)",
          backgroundColor: "var(--app-background-color)",
          position: "absolute",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        } }
        open={ true }
        transitionDuration={ 0 }
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
