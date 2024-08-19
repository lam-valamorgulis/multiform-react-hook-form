import dayjs from "dayjs";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type TData = {
  username: string;
  email: string;
  datePicker: string[];
  ReactSelection: string;
};

export const useFormLogic = () => {
  const methods = useForm<TData>();
  const [information, setInformation] = useState<TData>();
  const [isSubmitting, setIsSubmitting] = useState(false); // Added for loading state

  const onSubmit: SubmitHandler<TData> = (data) => {
    setIsSubmitting(true); // Set loading state to true

    setTimeout(() => {
      const formattedData = {
        ...data,
        datePicker: data.datePicker.map((date) =>
          dayjs(date).format("YYYY-MM-DD")
        ),
      };

      setInformation(formattedData);
      setIsSubmitting(false); // Set loading state to false
      methods.reset({ username: "", email: "" });
    }, 2000);
  };

  return { methods, information, onSubmit, isSubmitting };
};
