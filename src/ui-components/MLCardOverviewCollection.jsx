/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { MLModels } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import MLCardOverview from "./MLCardOverview";
import { Collection } from "@aws-amplify/ui-react";
export default function MLCardOverviewCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: MLModels,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "MLCardOverviewCollection")}
    >
      {(item, index) => (
        <MLCardOverview
          mLModels={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></MLCardOverview>
      )}
    </Collection>
  );
}
