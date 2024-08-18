import { FormProvider } from "react-hook-form";
import FormA from "./components/FormA";
import FormB from "./components/FormB";
import InformationDisplay from "./components/UI/InformationDisplay";
import SubmitButton from "./components/UI/SubmitButton";
import Title from "./components/UI/Title";
import { useFormLogic } from "./hook/useFormLogic";

function App() {
  const { methods, information, onSubmit, isSubmitting } = useFormLogic();

  return (
    <FormProvider {...methods}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 border m-2">
        <Title>Multi Form with React Hook Form</Title>
        <div className="m-4 grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
          <FormA />
          <FormB />
        </div>
        <div className="flex justify-end m-2 p-1">
          <SubmitButton
            onClick={methods.handleSubmit(onSubmit)}
            label="Submit all forms"
            disabled={isSubmitting}
          />
        </div>
        <hr className="border-spacing-2" />
        {information && <InformationDisplay information={information} />}
      </div>
    </FormProvider>
  );
}

export default App;
