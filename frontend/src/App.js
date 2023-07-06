import "./App.css";
import { useState } from "react";
import PolygonIDVerifier from "./PolygonIDVerifier";
import VcGatedDapp from "./VcGatedDapp";
import { Center, Card, Image, CardBody, Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function App() {
  // if you're developing and just want to see the dapp without going through the Polygon ID flow,
  // temporarily set this to "true" to ignore the Polygon ID check and go straight to the dapp page
  const [provedAccessBirthday, setProvedAccessBirthday] = useState(false);
  return (
    <>
      {provedAccessBirthday ? (
        <VcGatedDapp />
      ) : (
        <Center className="vc-check-page">
          <Container>
            <Card
              style={{
                border: "2px solid #805AD5",
              }}
            >
              <CardBody style={{ paddingBottom: 0 }}>
                <p>
                  Welcome to the Web3 prediction market dapp! <br /> 💥 Will Polygon go up or down in the next 24 hours? 💥
                  <br /> You must be 18 years or older to use it. Please prove it using Polygon ID.

                  None of your data is stored on our servers. We only use Polygon ID to verify your age.
                </p>

                <PolygonIDVerifier
                  publicServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_PUBLIC_URL
                  }
                  localServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_LOCAL_HOST_URL
                  }
                  credentialType={"KYCAgeCredential"}
                  issuerOrHowToLink={
                    "https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4"
                  }
                  onVerificationResult={setProvedAccessBirthday}
                />
                <Image
                  src="market.jpeg"
                  alt="Polygon devs image"
                  borderRadius="lg"
                />
              </CardBody>
              
                <p
                  style={{
                    position: "absolute",
                    bottom: "-15px",
                    right: "0",
                    fontSize: "8px",
                  }}
                >
                  Template built with 💜 by <a
                href="https://twitter.com/0ceans404"
                target="_blank"
                rel="noreferrer"
              > Steph </a>, modified by <a href="https://twitter.com/ferr_dev" target="_blank" rel="noreferrer">Fernando 🐉</a>
                </p>
            </Card>
            <Button
                fontSize={"10px"}
                margin={10}
                colorScheme="red"
                onClick={() => setProvedAccessBirthday(true)}
              >
                Press here if the verification does not work
              </Button>
          </Container>
        </Center>
      )}
    </>
  );
}

export default App;
