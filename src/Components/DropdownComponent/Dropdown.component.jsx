import React from "react";

import Select from "react-select";

const Dropdown = (props) => {
  let disabledDropdownIndicator = {
    IndicatorSeparator: () => null,
    DropdownIndicator: () => null,
  };

  let disabledIndicatorSeparator = {
    IndicatorSeparator: () => null,
  };

  let components = props.disabledDropdownIndicator
    ? disabledDropdownIndicator
    : disabledIndicatorSeparator;

  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const groupBadgeStyles = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center",
  };
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 56,
      // maxHeight:108,
      minHeight: 35,
      overflow:'auto',
      borderRadius: 10,
      borderColor: props.error ? "red" : "rgba(0, 0, 0, 0.23)",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 10,
    }),
    placeholder: (base) => ({
      ...base,
      color: props.error ? "red" : base.color,
    }),
  };

  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  return (
    <Select
      styles={customStyles}
      options={props.options}
      formatGroupLabel={formatGroupLabel}
      onChange={props.onChange}
      components={components}
      menuIsOpen={props.menuIsOpen}
      onInputChange={props.onInputChange}
      placeholder={props.placeholder}
      onMenuOpen={props.onMenuOpen}
      isMulti={props.isMulti}
      maxMenuHeight={props.maxMenuHeight}
      isClearable={false}
      {...props}
    />
  );
};

export default Dropdown;
