import {
  Checkbox,
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
} from "@headlessui/react";
import {
  CheckIcon,
  MagnifyingGlassIcon,
  MinusIcon,
} from "@heroicons/react/20/solid";
import { useLayoutEffect, useState } from "react";

const people = [
  { id: 1, name: "Leslie Alexander" },
  { id: 2, name: "Chris Brown" },
  { id: 3, name: "Sarah Johnson" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MultiSelectDropdown() {
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState([]);
  const [showMaginifyGlass, setShowMagnifyingGlass] = useState(false);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPerson.length > 0 && selectedPerson.length < people.length;
    setChecked(selectedPerson.length === people.length);
    setIndeterminate(isIndeterminate);
  }, [selectedPerson]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  const toogleAllSelected = (checked) => {
    setChecked(checked);
    if (checked) return setSelectedPerson(people);
    else return setSelectedPerson([]);
  };

  return (
    <>
      <Combobox
        multiple={true}
        as="div"
        value={selectedPerson}
        onChange={(person) => {
          setQuery("");
          setSelectedPerson(person);
        }}
      >
        <div className="relative mt-2 mx-auto w-52">
          <ComboboxInput
            as="input"
            maxLength={250}
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(event) => setQuery(event.target.value)}
            onBlur={() => {
              setShowMagnifyingGlass(false);
              setQuery("");
            }}
            displayValue={(person) =>
              person?.map((person) => person.name).join(", ")
            }
            onFocus={() => setShowMagnifyingGlass(true)}
            placeholder="Search for people..."
          />
          <ComboboxButton className="group absolute py-2 right-0 px-2.5">
            {showMaginifyGlass && (
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            )}
          </ComboboxButton>
          {filteredPeople.length <= 0 && (
            <div className="absolute z-10 mt-1 min-h-5 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              No Data Found
            </div>
          )}

          {filteredPeople.length > 0 && (
            <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <div className="relative align-middle flex gap-3 cursor-default select-none py-2 pl-8 pr-4 hover:cursor-pointer">
                <Checkbox
                  onChange={(checked) => toogleAllSelected(checked)}
                  indeterminate={indeterminate}
                  checked={checked}
                  className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500 data-[indeterminate]:bg-blue-500 data-[checked]:data-[disabled]:bg-gray-500"
                >
                  {checked ? (
                    <CheckIcon className="stroke-white opacity-0 group-data-[checked]:opacity-100" />
                  ) : (
                    <MinusIcon className="stroke-white opacity-0 group-data-[indeterminate]:opacity-100" />
                  )}
                </Checkbox>
                <span>Select All</span>
              </div>

              {filteredPeople.map((person) => (
                <ComboboxOption
                  key={person.id}
                  value={person}
                  className={({ focus }) =>
                    classNames(
                      "relative align-middle flex gap-3 cursor-default select-none py-2 pl-8 pr-4",
                      focus
                        ? "bg-indigo-600 text-white cursor-pointer"
                        : "text-gray-900"
                    )
                  }
                >
                  {({ selected }) => (
                    <>
                      <Checkbox
                        checked={selected}
                        className="self-center group block size-4 rounded border bg-white data-[checked]:bg-blue-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
                      >
                        <CheckIcon className="stroke-white opacity-0 group-data-[checked]:opacity-100" />
                      </Checkbox>
                      <span
                        className={classNames(
                          "block truncate",
                          selected && "font-semibold"
                        )}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </ComboboxOption>
              ))}
            </div>
          )}
        </div>
      </Combobox>
    </>
  );
}
