import { Page } from "../components/Page/Page";
import {
  Introduction,
  Logo,
  Header,
  LogoImage,
  LogoTitle,
  Button,
} from "../components/Content/Content";
import { Availability } from "../components/Availability/Availability";

export default function Home() {
  return (
    <Page>
      <Availability />
      <Header>
        <Logo>
          <LogoImage />
          <LogoTitle>bruggen</LogoTitle>
        </Logo>
        <Introduction>
          <h2>Page not found</h2>
          <p>This is not the page you're looking for.</p>
          <Button href="/">Back to home</Button>
        </Introduction>
      </Header>
    </Page>
  );
}
