import { Component } from "react";
import { Maybe } from "../utils/typeHelpers";
import React from "react";

type Item = {
    key: string;
    value?: Maybe<string>;
}

interface KeyValueTableProps {
    items: Array<Item>
}

export function KeyValueTable({ items }: KeyValueTableProps) {
    return <div className="my-6 grid grid-cols-2 md:grid-cols-4 divide-x-2 md:divide-x md:divide-solid md:divide-gray-light">
        {items.map(({ key, value }) => <div className="px-3 text-center">
            <div className="font-bold text-purple-dark">{key}</div>
            <p>{value}</p>
        </div>)}
    </div>
}