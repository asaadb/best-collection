import { Stack } from "@mui/system";
import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="50vh"
    >
      <BeatLoader
        loading={true}
        size={35}
        margin={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Stack>
  );
};

export default Loader;
