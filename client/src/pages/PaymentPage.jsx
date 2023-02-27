import { Flex, Text, Box, Image, Checkbox } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputFormValidation from "../components/Inputs/InputFormValidation/InputFormValidation";
import cardIcon from "../assets/img/icons/card-icon.svg";
import Button from "../components/Button/Button";
import InputSelect from "../components/Inputs/InputSelect/InputSelect";
import cards from "../assets/img/icons/cards.png";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import { client } from "../App";

const PaymentPage = () => {
  const [paying, setPaying] = useState(false);
  const {
    getValues,
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async ({ cc, cvv, mm, yy }) => {
    try {
      setPaying(true);
      const expire = `${mm}${yy}`;
      const amount = "5";

      const data = {
        cc,
        cvv,
        expire,
        amount,
      };

      const payment = axios.post("http://localhost:3030/payments", data);
      // console.log(payment);

      await toast.promise(payment, {
        loading: "Processing payment",
        success: "Payment successful",
        error: "Payment failed",
      });

      setPaying(false);
      // reset();
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    // console.log("useEffect", client.services);
  }, []);

  const handleClick = () => {
    console.log("click");
    // const data = client
    //   .service("/payments")
    //   .find({ query: { $limit: 10 } })
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  return (
    <Flex justifyContent="center" flexDirection="column" alignItems="center">
      <Text fontSize="4xl" fontWeight="bold" mt="8" color="brand.black_light">
        Payment Page
      </Text>

      <Text fontWeight="bold" color="brand.black_light" fontSize="xl" mb="8">
        Total: $4.50
      </Text>

      <Box
        border="1px"
        borderRadius="lg"
        borderColor="brand.gray"
        width={{ base: "95vw", xl: "40vw" }}
        px="8"
        py="6"
      >
        <Flex justifyContent="space-between" alignItems="center" mb="5">
          <Text fontWeight="bold" fontSize="lg" color="brand.black_light">
            Credit and Debit Cards
          </Text>
          {/* <Image src={cards} alt="cards" width="100px" /> */}
        </Flex>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            justifyContent="space-between"
            flexDirection="column"
            gap="5"
            mb="8"
          >
            <InputFormValidation
              Icon={cardIcon}
              placeholder="Card Number"
              errors={errors}
              register={register}
              key_name="cc"
              type="number"
              label="Card Number"
              minLength={15}
              maxLength={16}
            />

            <Flex justifyContent="space-between" gap="8">
              <Flex flex="1" gap="4">
                <InputSelect
                  key_name="mm"
                  options={[
                    { value: "01", label: "01" },
                    { value: "02", label: "02" },
                    { value: "03", label: "03" },
                    { value: "04", label: "04" },
                    { value: "05", label: "05" },
                    { value: "06", label: "06" },
                    { value: "07", label: "07" },
                    { value: "08", label: "08" },
                    { value: "09", label: "09" },
                    { value: "10", label: "10" },
                    { value: "11", label: "11" },
                    { value: "12", label: "12" },
                  ]}
                  control={control}
                  errors={errors}
                  register={register}
                  label="End Date"
                  placeholder="mm"
                  validation
                />

                <InputSelect
                  key_name="yy"
                  options={[
                    { value: 28, label: "28" },
                    { value: 27, label: "27" },
                    { value: 26, label: "26" },
                    { value: 25, label: "25" },
                    { value: 24, label: "24" },
                    { value: 23, label: "23" },
                  ]}
                  control={control}
                  errors={errors}
                  register={register}
                  lableEmpty
                  placeholder="yy"
                  validation
                />
              </Flex>

              <Flex flex="1">
                <InputFormValidation
                  Icon={cardIcon}
                  placeholder="CVV"
                  errors={errors}
                  register={register}
                  key_name="cvv"
                  type="number"
                  label="CVV"
                  minLength={3}
                  maxLength={3}
                />
              </Flex>
            </Flex>
          </Flex>
          <Checkbox colorScheme="cyan" defaultChecked mb="3">
            Agree to Terms and Conditions
          </Checkbox>
        </form>
      </Box>
      <Button
        text="Pay now!"
        width="100%"
        type="button"
        primary
        isLoading={paying}
        onClick={handleClick}
      />
    </Flex>
  );
};

export default PaymentPage;
