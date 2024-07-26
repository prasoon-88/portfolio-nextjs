import React, {
  HTMLAttributes,
  useEffect,
  useState,
  useRef,
  useMemo,
} from "react";
import classNames from "classnames";

export interface DropdownOption {
  value: string;
  label: any;
  searchables?: string[];
}

interface DropdownProps {
  value?: any;
  onSelect?: (value: any) => void;
  options?: DropdownOption[];
  selectionType?: "single" | "multiple";
  placeholder?: string;
  other?: HTMLAttributes<HTMLDivElement>;
}

const Dropdown = (props: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownOptionListRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  // Get the selected value label
  const selectedLabel = useMemo(() => {
    return (
      props.options?.find((option) => option.value === props.value)?.label || ""
    );
  }, [props.value, props.options]);

  const handleOnClick = (option: DropdownOption) => {
    if (props.onSelect) {
      props.onSelect(option.value);
    }
    if (props.selectionType !== "multiple") {
      setOpen(false);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  const handleDropdownDirction = () => {
    if (dropdownOptionListRef.current) {
      const dropdown = dropdownOptionListRef.current;
      const rect = dropdown.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if dropdown is going out of the viewport
      if (rect.bottom > viewportHeight) {
        dropdown.style.top = "auto";
        dropdown.style.bottom = "100%";
      } else {
        dropdown.style.top = "100%";
        dropdown.style.bottom = "auto";
      }
    }
  };

  useEffect(() => {
    handleDropdownDirction();
    if (open) {
      window.addEventListener("click", handleClickOutside);
      document.addEventListener("scroll", () => setOpen(false));
      return () => {
        window.removeEventListener("click", handleClickOutside);
        document.removeEventListener("scroll", () => setOpen(false));
      };
    }
  }, [open]);

  const filteredOptions = useMemo(() => {
    return search
      ? props.options?.filter((option) =>
          option.searchables
            ? option.searchables.some((searchable) =>
                searchable.includes(search)
              )
            : true
        )
      : props.options;
  }, [search, props.options]);

  return (
    <div id="customDropdown" {...props.other} tabIndex={-1} ref={dropdownRef}>
      <div
        className={classNames("selectedOption", { active: open })}
        onClick={() => setOpen(!open)}
      >
        {selectedLabel || <div>{props.placeholder || "Select an option"}</div>}
        <i
          className={classNames("material-icons fs-20 dropdownIcon", {
            rotate: open,
          })}
        >
          arrow_drop_down
        </i>
      </div>
      {open && filteredOptions?.length ? (
        <div
          className="dropdownItemsContainer"
          tabIndex={-2}
          ref={dropdownOptionListRef}
        >
          {/* <Input value={search} onChange={(e) => setSearch(e.target.value)} /> */}
          <ul className="options" tabIndex={-2}>
            {filteredOptions.map((option, index) => (
              <li
                className="option"
                key={index}
                onClick={() => handleOnClick(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
