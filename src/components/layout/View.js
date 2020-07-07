import React from "react";
import { useRecoilValue } from "recoil";
import { viewState } from "../../recoil/productRecoil";

const ColumnView = (props) => {
  return <div className="column is-4 has-text-centered">{props.children}</div>;
};

const RowView = (props) => {
  return <div className="column is-12 has-text-centered">{props.children}</div>;
};

const View = (props) => {
  const view = useRecoilValue(viewState);
  if (view == "column") return <ColumnView>{props.children}</ColumnView>;
  else return <RowView>{props.children}</RowView>;
};

export default View;
