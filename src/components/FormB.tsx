import { DatePicker, Select } from "antd";
import { SelectProps } from "antd/es/select";
import { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
import Label from "./UI/Label";
import Title from "./UI/Title";

const { RangePicker } = DatePicker;

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

type Inputs = {
  datePicker: [Dayjs | null, Dayjs | null];
  ReactSelection: string[];
};

function FormB() {
  const {
    control,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Title> Form with AntD components</Title>
      <div className="mb-4">
        <Label>Date</Label>
        <Controller
          control={control}
          rules={{
            required: "Please select a date",
          }}
          name="datePicker"
          render={({ field: { onChange, value } }) => (
            <RangePicker
              onChange={(dates) => onChange(dates)}
              format="YYYY-MM-DD"
              className="w-full"
              value={value}
              defaultValue={[null, null]}
            />
          )}
        />
        {errors.datePicker && (
          <p className="text-xs text-red-600 mt-2">
            {errors.datePicker?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <Label>Select</Label>
        <Controller
          control={control}
          name="ReactSelection"
          rules={{ required: "Please select" }}
          render={({ field: { onChange, value } }) => (
            <Select
              mode="tags"
              style={{ width: "100%" }}
              onChange={onChange}
              value={value}
              tokenSeparators={[","]}
              options={options}
              className="rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500"
            />
          )}
        />
        {errors.ReactSelection && (
          <p className="text-xs text-red-600 mt-2">
            {errors.ReactSelection.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default FormB;
