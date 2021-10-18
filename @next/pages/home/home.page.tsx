import React from "react";
import { GuestPanel } from "@components/templates";
import { Typography, Divider, Container } from "@components/atoms";

/**
 *
 * Home
 *
 * Features:
 * - Render home page for the guest users.
 */
export const Home = (): JSX.Element => {
  return (
    <Container spacing={2}>
      <Typography variant="h1">Welcome to RNS front end template</Typography>
      <Divider />
      <Typography>
        This front end template is created with extreme care and study.
      </Typography>
    </Container>
  );
};

Home.getLayout = (page: React.ReactNode) => <GuestPanel>{page}</GuestPanel>;
