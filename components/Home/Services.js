import { Box, Stack } from "@chakra-ui/react";
import Service from "../Service/index";

export default function Services() {
  let content1 = (
    <span>
      At Organic Return, we create custom websites for luxury real estate
      brokerages and work to ensure your brokerage stands apart across the web.
      Websites have become an immense asset to real estate brokerages as more
      and more people turn to their computers and phones to find properties.
      <br />
      <br />
      We will help you create an experience that is simple and effective for
      your agents while also being beautiful and cohesive for your clients. Our
      responsive designs ensure that your buyers and sellers have a seamless
      experience, no matter what type of device they are using.
      <br />
      <br />
      We believe that the process of buying a luxury home should be as luxurious
      as the home itself - and it all starts with the first point of contact
      which is usually the website.
    </span>
  );

  let content2 = (
    <span>
      At Organic Return, we create custom websites for luxury real estate
      brokerages and work to ensure your brokerage stands apart across the web.
      Websites have become an immense asset to real estate brokerages as more
      and more people turn to their computers and phones to find properties.
      <br />
      <br />
      We will help you create an experience that is simple and effective for
      your agents while also being beautiful and cohesive for your clients. Our
      responsive designs ensure that your buyers and sellers have a seamless
      experience, no matter what type of device they are using.
      <br />
      <br />
      We believe that the process of buying a luxury home should be as luxurious
      as the home itself - and it all starts with the first point of contact
      which is usually the website.
    </span>
  );

  return (
    <Stack
      marginY={10}
      marginX={{ base: 0, sm: 10, md: 15, lg: 20 }}
      id={"services"}
    >
      <Service
        flare={"BEST IN CLASS"}
        header={"Web Design & Development"}
        content={content1}
        img={"/all-devices-display.png"}
      />
      <Service
        flare={"AWARD-WINNING"}
        header={"Custom Designs"}
        content={content1}
        img={"/era.png"}
        left
      />
      <Service
        flare={"CONTENT STRATEGIES"}
        header={"Focused On Lead Generation"}
        content={content2}
        img={"/aspen-snowmass-mobile.png"}
      />
      <Service
        flare={"PAID & ORGANIC"}
        header={"Search Engine Optimization"}
        content={content1}
        left
      />
    </Stack>
  );
}
